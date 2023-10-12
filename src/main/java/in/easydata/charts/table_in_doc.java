package in.easydata.charts;

import com.google.gson.JsonElement;
import com.nimbusds.jose.shaded.gson.JsonObject;
import com.spire.doc.*;

import com.spire.doc.documents.*;

import com.spire.doc.fields.TextRange;

import ru.yandex.clickhouse.ClickHouseConnectionImpl;
import ru.yandex.clickhouse.ClickHouseDataSource;
import ru.yandex.clickhouse.settings.ClickHouseProperties;

import java.awt.*;
import java.io.File;
import java.io.FileOutputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFTable;
import org.json.JSONException;
import org.json.JSONObject;


public class table_in_doc {
	static ClickHouseConnectionImpl connection=null;
	static Connection con = getConnection();
		
		public static Connection getConnection() 
		{
			
			try {
				 ClickHouseProperties properties = new ClickHouseProperties();
				 //Properties properties = new Properties();
				 //properties.setProperty("client_name", "Agent #1");

				 properties.setSocketTimeout(300000);
				 
				 properties.setMaxQuerySize((long) 100000000);
				    
				//server
			
				    String url = "103.104.73.11:8123";
				    //int port = 8123;
					String username = "default";
					String password =""  ;
					String dbname ="cafebot";
					
					System.out.println("ch url--"+url+"-ch dbname--"+dbname+"-ch username--"+username+"-ch password--"+password);
					
			 ClickHouseDataSource dataSource = new ClickHouseDataSource("jdbc:clickhouse://"+url+"/"+dbname, properties);
		
				connection =  (ClickHouseConnectionImpl) dataSource.getConnection(username, password);
		
			}
			catch(Exception e) 
				{ 
				System.out.println("Connection error clickhouse driver **  "+e.toString());
				//Loggerexception log= new Loggerexception();
				//log.setLog(e.toString());
					//return con;	
				}
		return connection; 
		}	
		
	
	
	
	
	 public static void main(String[] args) throws SQLException, JSONException {
		 
		 String uuid = "f" + UUID.randomUUID().toString().split("-")[0]; 
		 Map<String, JsonElement> hashMap = new HashMap<String, JsonElement>();
		         //Create a Document object
		 JSONObject json=new JSONObject();
		 JSONObject json_in=new JSONObject();
		         Document document = new Document();
//		         JsonObject jsonObj =null;
//		                 .element("name", "Raja Ramesh")
//		                 .element("age", 30)
//		                 .element("address", "Hyderabad")
//		                 .element("contact numbers", Arrays.asList("9959984000", "7702144400", "7013536200")); 
		
		  
		 
		         //Add a section
		 
		         Section section = document.addSection();
		 
		  
		 
		         //Define the data for table
		         PreparedStatement ps=null;	
		 		String query ="SELECT item_category_name,sum(toFloat32OrZero( sum_item_cnt_day_)) as sum_sum_item_cnt_day_ FROM cafebot.PT84430568S WHERE 1=1  GROUP BY item_category_name  ORDER BY item_category_name,sum(toFloat32OrZero( sum_item_cnt_day_)) as sum_sum_item_cnt_day_ ASC  limit 10";
		 	
//		 		try {
		 			ps = con.prepareStatement(query);
		 			ResultSet rs = ps.executeQuery();
		 			ResultSetMetaData rsmd = rs.getMetaData();

		 			 
		 			
		 			int count = 0;
//		 			String name ="";
//		 			String name[]=new String[10];
//		 			String value[]=new String[10];	
		 			
		 			
		 			
		 			
//		 			String[][] data = {};
		 			while (rs.next()) {	
		 				
		 				String name = rs.getString(1);
						String value=rs.getString(2);
		 				
						
						
						json.put("name", name);
		 				json.put("value", value);
		 				
						
						count++;
		 			}
		 			rs.close();
		 			ps.close();
		 			
		 			json_in.append("", json);
		 			
		 			
		 			
		 			
		 			
		 			
		 			
		 			
		 			
		 			System.out.println("count  ####### "+count);
		 			System.out.println("json  ####### "+json);
		 			System.out.println("json_in  ####### "+json_in);
		 			
//		 			 String[] data =json.getString("name");
//		 			System.out.println("json  ####### "+data);
		 			
		 			
		 			 
//		 			String[][] data =new String[count];
		 			
		         String[] header = {"item_category_name", "sum_item_cnt_day_"};
		 
//		         for(int c =0;c<count ; c++)
//				  {
//		         
//		         
//		          data = new String[]{name[c],value[c]};		 
//		                 
//		 
//				  }
		 
		         //Add a table
		 
		        Table table = section.addTable(true);
		 
		         table.resetCells(json.length() , header.length);
		 
		  
		 
		         //Set the first row as table header
		 
		         TableRow row = table.getRows().get(0);
		 
		         row.isHeader(true);
		 
		         row.setHeight(20);
		 
		         row.setHeightType(TableRowHeightType.Exactly);
		 
		         row.getRowFormat().setBackColor(Color.gray);
		 
		         for (int i = 0; i < header.length; i++) {
		 
		             row.getCells().get(i).getCellFormat().setVerticalAlignment(VerticalAlignment.Middle);
		 
		             Paragraph p = row.getCells().get(i).addParagraph();
		 
		             p.getFormat().setHorizontalAlignment(HorizontalAlignment.Center);
		 
		             TextRange txtRange = p.appendText(header[i]);
		 
		             txtRange.getCharacterFormat().setBold(true);
		 
		         }
		 
		  
		 
		         //Add data to the rest of rows
		 
		         for (int r = 0; r < json.length(); r++) {
		 
		        	 String data =json.getString("name");
		        	 
		             TableRow dataRow = table.getRows().get(r);
		 
		             dataRow.setHeight(25);
		 
		             dataRow.setHeightType(TableRowHeightType.Exactly);
		 
		             dataRow.getRowFormat().setBackColor(Color.white);
		 
//		             for (int c = 0; c < json.length(); c++) {
		 
		                 dataRow.getCells().get(r).getCellFormat().setVerticalAlignment(VerticalAlignment.Middle);
		 
		                 dataRow.getCells().get(r).addParagraph().appendText(
		                		 		                		 
		                		 json.getString("name")
		                		 
		                		 );
		 
//		             }
		 
		         }
		 
		  
		 
		         //Set background color for cells
		 
		         for (int j = 1; j < table.getRows().getCount(); j++) {
		 
		             if (j % 2 == 0) {
		 
		                 TableRow row2 = table.getRows().get(j);
		 
		                 for (int f = 0; f < row2.getCells().getCount(); f++) {
		 
		                     row2.getCells().get(f).getCellFormat().setBackColor(new Color(173, 216, 230));
		 
		                 }
		 
		             }
		 
		         }
		 
		  
		 
		         //Save to file
		 
		         document.saveToFile("C:\\Users\\valsys\\Desktop\\table"+uuid+".docx", FileFormat.Docx_2013);
		 
		     }


}
