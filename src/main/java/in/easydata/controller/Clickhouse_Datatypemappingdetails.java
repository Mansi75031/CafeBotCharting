package in.easydata.controller;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.hadoop.hive.metastore.api.ThriftHiveMetastore.AsyncProcessor.list_privileges;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import ru.yandex.clickhouse.ClickHouseConnectionImpl;
import ru.yandex.clickhouse.ClickHouseDataSource;
import ru.yandex.clickhouse.settings.ClickHouseProperties;

public class Clickhouse_Datatypemappingdetails {

	
	static ClickHouseConnectionImpl connection=null;
//	Connection 
	static Connection poscon =null;
	static Connection conpg = null;
	
	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//Connection con =getConnection();
		
		conpg =getConnection_2();
		
		//con =getConnection();
	}

	
	public static Connection getConnection() 
	{
		
		try {
			 ClickHouseProperties properties = new ClickHouseProperties();
			 
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
		
			}
	return connection; 
	}	
	
	
	public static Connection getConnection_2() 
	{
		try {

			//Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/example", "postgres", "postgres")) 
			Class.forName("org.postgresql.Driver");
			
			String url = "localhost:5435";
			String username = "postgres";
			String password ="postgres"  ;
			String dbname ="cafebot";
			int port =5433;
			
			System.out.println("purl----"+url+"-pusername----"+username+"-ppassword----"+password+"-pdbname----"+dbname);
			
			poscon = DriverManager.getConnection("jdbc:postgresql://"+url+"/"+dbname, username, password);

			getMatadata(poscon);
//			getConnection_hive();
//			getConnection_impala();
		}
		catch(Exception e)
			{ 
			System.out.println("error new connection ="+e.toString());
			}
		//return con; 
	return poscon; 
	}
	
	public static List<String> getMatadata(Connection poscon2)
	{
		List<String > list1 = new ArrayList<String >();
		JsonArray js = new JsonArray();
				
		String query ="select * from  datatypemappingdetails";
		
		try {
			PreparedStatement ps = null;
			ps = poscon2.prepareStatement(query);
			ResultSet rs = ps.executeQuery();

			// JSONArray json = new JSONArray();
			java.sql.ResultSetMetaData rsmd = rs.getMetaData();

			int numColumns = rsmd.getColumnCount();

			List<String> colls = new ArrayList<String>();
			List<String> datatype_l = new ArrayList<String>();
			
			
			for (int i = 1; i <= numColumns; i++) {
				String column_name = rsmd.getColumnName(i);
				colls.add(column_name);
				String datatype = rsmd.getColumnTypeName(i);
				datatype_l.add(datatype);
			}

			 System.out.println("ls col --"+colls.toString());
				
				JsonObject obj = new JsonObject();
                 
				for (int i = 0; i < colls.size(); i++) {
					
					String datatype = datatype_l.get(i);
					String column_name = colls.get(i); // rsmd.getColumnName(i);
					 if (!column_name.equalsIgnoreCase("data") )
					{

						obj.addProperty(column_name, datatype);
						
					}
					
				}

				js.add(obj);
			
			System.out.println("js ############"+js);
			
			
			/////////////////////////////////////////////////////////////////////////////////////////
			
			
			String source = "CAFEBOT";
			String destination = "MSSQL";

			Map<String, String> sourc_dest = new HashMap<String, String>();
			
			String dbtypequery = "select "+colls.toString().replace("[", "").replace("]", "")+" from datatypemappingdetails where sourcefrom = '"+source+"' and destination = '"+destination+"' LIMIT 1 ";
			
			System.out.println("dbtypequery   "+dbtypequery);
			try {
//				PreparedStatement ps1 = null;
				ps = poscon2.prepareStatement(dbtypequery);
				ResultSet rs1 = ps.executeQuery();
				
				
				while (rs1.next())
				{
					//String data = rs1.getString(1);			
					String data1 = rs1.getString(3);
					String data2 = rs1.getString(6);
							
					sourc_dest.put(data1, data2);
				}
						
				System.out.println("sourc_dest  "+sourc_dest);
				
				String destination_datatype = "";
				  
				
		        for (Map.Entry<String,String> entry : sourc_dest.entrySet())
		        {
		        	
		        	System.out.println("Key = " + entry.getKey() +
                            ", Value = " + entry.getValue());
		        	
		        	destination_datatype = entry.getValue();
		        	
		        } 
		        
		        rs1.close();  
			}
			catch (Exception e) {
				System.out.println(e.toString());
				// TODO: handle exception
			}
			
           
			rs.close();
			ps.close();
		} catch (Exception e) {
			// js.add("Error-");
			System.out.println("JsondataClickHouseDataobject error ==" + e.toString());
		}
		
		
		
		
		
		
		
		return null;
		
		
	}
	
	
	
	
	
	
}
