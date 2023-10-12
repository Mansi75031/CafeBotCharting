package in.easydata;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;


//import com.google.gson.JsonArray;
//import com.google.gson.JsonObject;
//import net.minidev.json.JSONArray;

public class DBCHExample {
	
	static DBConClickHouse dbcon = new DBConClickHouse();
	static Connection con = dbcon.getConnection();
	
	public void main()
	{
		
    String query = " select * from cafebot.PT99969101S limit 100";
    
    PreparedStatement ps = null;
		try {
//			Statement stmt = con.createStatement();
			ps = con.prepareStatement(query);       
		    ResultSet rs = ps.executeQuery(query);
						
		while (rs.next()) 
		{
		     System.out.print(rs.getString(1));
		}
		rs.close();
		ps.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/* public JSONArray getdata1(int fileid) 
	{
		String tb = GetTableName(fileid);		
		String filequery = " select * from " + tb + " ORDER BY rand() limit 100 ";
		
		JSONArray js = new JSONArray();
					
		try {    
			PreparedStatement ps = null;              		
			ps = con.prepareStatement(filequery);       
			ResultSet  rs = ps.executeQuery();        			
				java.sql.ResultSetMetaData rsmd = rs.getMetaData();
				while(rs.next()) {
				  int numColumns = rsmd.getColumnCount();
				  JsonObject obj = new JsonObject(); 
				  for (int i=1; i<=numColumns; i++) 
				  {
				    String column_name = rsmd.getColumnName(i);  
				    	String val="";
				    	if(rs.getObject(column_name) != null) 
				    	{
				    		val =rs.getObject(column_name).toString();
				    	}				    	
				    	obj.addProperty(column_name, val);
				  }    
				  System.out.println(obj.toString());
				  js.add(obj);   
				}  
		} catch (Exception e) 
		{
			js.add("Error-"+e.toString());
			System.out.println("getdata==" + e.toString());    
		}
		return js;
	} */

		
	
	
	
	
	
}
