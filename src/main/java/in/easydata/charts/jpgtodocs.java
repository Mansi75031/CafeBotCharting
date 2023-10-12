package in.easydata.charts;


import java.io.File;
import java.io.FileOutputStream;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.UUID;

import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFTable;
import org.apache.poi.xwpf.usermodel.XWPFTableRow;

//import com.mysql.cj.x.protobuf.MysqlxDatatypes.Array;

import ru.yandex.clickhouse.ClickHouseConnectionImpl;
import ru.yandex.clickhouse.ClickHouseDataSource;
import ru.yandex.clickhouse.settings.ClickHouseProperties;


public class jpgtodocs {
	
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
	
	
	
	
	

//	public static void main(String[] args) throws Exception
//    {
//		PreparedStatement ps=null;
//		Formatter fmt = new Formatter();  
//		
//	
//		String tableStr = " <html> <style>\r\n" + "table, th, td {\r\n" + "  border:1px solid black;\r\n" + "}\r\n"
//				+ "</style> <body> <table id = containerID  class=\"table table-striped table-bordered\">";
//		
//		
//		String query ="SELECT item_category_name,sum(toFloat32OrZero( sum_item_cnt_day_)) as sum_sum_item_cnt_day_ FROM cafebot.PT84430568S WHERE 1=1  GROUP BY item_category_name  ORDER BY item_category_name,sum(toFloat32OrZero( sum_item_cnt_day_)) as sum_sum_item_cnt_day_ ASC  limit 10";
//		
//		try {
//			ps = con.prepareStatement(query);
//			ResultSet rs = ps.executeQuery();
//			ResultSetMetaData rsmd = rs.getMetaData();
//
//			int count = 1;
////			String name ="";
//			List<String> name = new ArrayList<String>();
//			List<Integer> value = new ArrayList<Integer>();
//			
//			while (rs.next()) {
////				tableStr = tableStr + "<tr>";
////				 name += rs.getString(1)+ " , ";
////				 name.add(rs.getString(1));
//				 fmt.format(System.lineSeparator(),rs.getString(1) );  
////				  value.add(rs.getInt(2));
//				  fmt.format(System.lineSeparator(),rs.getInt(2) );
////					tableStr += "<td>" + name + "</td>";
////				count++;
//				
//			}	
////			System.out.println("name "+name);
//			
//			
////			fmt.format("%n", name);  
//			
////			tableStr += "</tr> ";
//			rs.close();
//			ps.close();
//
//			
////			int num[] = {10, 21, 13, 4, 15, 6, 27, 8, 19};  
//			
//			  
////			for (int n=0;n<value.size();n++)   
////			{
////				int value_n =value.get(n);
////			    fmt.format("%n",value_n );  
////			    System.out.println(fmt);  
////			}  
////			  
////			for (int n=0;n<value.size();n++)   
////			{
////				String value_n =name.get(n);
////			    fmt.format("%n",value_n );  
////			    System.out.println(fmt);  
////			}  
//			
//			System.out.println(fmt);  
//			
//			
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//		
//		//print table through query
////		tableStr += "</table> </body> </html> ";
//		
//		
//		
//  
//        // Step 1: Creating a blank document
////        XWPFDocument document = new XWPFDocument();
////  
////        // Step 2: Creating a Paragraph using
////        // createParagraph() method
////        XWPFParagraph paragraph
////            = document.createParagraph();
////        XWPFRun run = paragraph.createRun();
////     
////  
////        // Step 3: Creating a File output stream of word
////        // document at the required location
////        FileOutputStream fout = new FileOutputStream(
////        		new File("C:\\Users\\valsys\\Desktop\\chart1111.docx")); 
////  
////        // Step 4: Creating a file input stream of image by
////        // specifying its path
////        File image = new File("C:\\Users\\valsys\\Desktop\\chart.png"); 
////        FileInputStream imageData
////            = new FileInputStream(image);
////  
////        // Step 5: Retrieving the image file name and image
////        // type
////        int imageType = XWPFDocument.PICTURE_TYPE_JPEG;
////        String imageFileName = image.getName();
////  
////        // Step 6: Setting the width and height of the image
////        // in pixels.
////        int width = 200;
////        int height = 200;
////  
////        // Step 7: Adding the picture using the addPicture()
////        // method and writing into the document
////        run.addPicture(imageData, imageType, imageFileName,
////                       Units.toEMU(width),
////                       Units.toEMU(height));
////        document.write(fout);
////      
////        // Step 8: Closing the connections
////        fout.close();
////        document.close();
//        // Close the file connection
//        
//    }
	

	
	
	
	
//	
//	public static void main(String[] args) throws Exception
//    {
//		
//		
//		
//		//print table through query
//		
//		
//		
//		
//  
//        // Step 1: Creating a blank document
//        XWPFDocument document = new XWPFDocument();
//  
//        // Step 2: Creating a Paragraph using
//        // createParagraph() method
//        XWPFParagraph paragraph
//            = document.createParagraph();
//        XWPFRun run = paragraph.createRun();
//     
//  
//        // Step 3: Creating a File output stream of word
//        // document at the required location
//        FileOutputStream fout = new FileOutputStream(
//        		new File("C:\\Users\\valsys\\Desktop\\chart1111.docx")); 
//  
//        // Step 4: Creating a file input stream of image by
//        // specifying its path
//        File image = new File("C:\\Users\\valsys\\Desktop\\chart.png"); 
//        FileInputStream imageData
//            = new FileInputStream(image);
//  
//        // Step 5: Retrieving the image file name and image
//        // type
//        int imageType = XWPFDocument.PICTURE_TYPE_JPEG;
//        String imageFileName = image.getName();
//  
//        // Step 6: Setting the width and height of the image
//        // in pixels.
//        int width = 200;
//        int height = 200;
//  
//        // Step 7: Adding the picture using the addPicture()
//        // method and writing into the document
//        run.addPicture(imageData, imageType, imageFileName,
//                       Units.toEMU(width),
//                       Units.toEMU(height));
//        document.write(fout);
//        
//        String table="<table><tr><th>name</th></tr><tr><td>mhgbvfdcc</td></tr></table>";
//        
//        document.  write(stream);   (table);
//      
//        // Step 8: Closing the connections
//        fout.close();
//        document.close();
//        // Close the file connection
//        
//    }
	
	
	public static void main(String[] args)throws Exception {
		String uuid = "f" + UUID.randomUUID().toString().split("-")[0]; 
	      //Blank Document
		PreparedStatement ps=null;	
		String query ="SELECT item_category_name,sum(toFloat32OrZero( sum_item_cnt_day_)) as sum_sum_item_cnt_day_ FROM cafebot.PT84430568S WHERE 1=1  GROUP BY item_category_name  ORDER BY item_category_name,sum(toFloat32OrZero( sum_item_cnt_day_)) as sum_sum_item_cnt_day_ ASC  limit 10";
		
		XWPFDocument document = new XWPFDocument();

	      //Write the Document in file system
	      FileOutputStream out = new FileOutputStream(	    		  
	    		  new File("C:\\Users\\valsys\\Desktop\\table"+uuid+".docx")); 
	      
	      //create table
	      XWPFTable table = document.createTable();
//		try {
			ps = con.prepareStatement(query);
			ResultSet rs = ps.executeQuery();
			ResultSetMetaData rsmd = rs.getMetaData();

			int count = 0;
//			String name ="";
			String name[]=new String[10];
			String value[]=new String[10];			
			
			while (rs.next()) {	
				
				name[count] = rs.getString(1);
				value[count]=rs.getString(2);
				
				
				count++;
			}
			rs.close();
			ps.close();
			System.out.println("count  ####### "+count);
			
			
			XWPFTableRow tableRowOne = null;
			
				  for(int c =0;c<count ; c++)
				  {
				     tableRowOne = table.getRow(0);
			         tableRowOne.getCell(0).setText(    name[c]    );
			         tableRowOne.addNewTableCell().setText(    value[c]    );
			        
			      }
			
		
		
	     

	      //create first row
	      

				  document.write(out);
	      out.close();
	      
	      System.out.println("create_table.docx written successully");
	   }
	
	
	
	
	    
}
