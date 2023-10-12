package in.easydata;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Map;


public class DBInteraction {	
	static DBconnection dbcon = new DBconnection();
	static Connection con = dbcon.getConnection_2();
	public DBInteraction() {
	}
	
	public void main(){
	
		PreparedStatement ps = null;
		String filequery = " select id,tablename from file limit 100 ";
		
		try {
			ps = con.prepareStatement(filequery);
		    ResultSet rs = ps.executeQuery();
		int id = 0;
		String data = "";
			while (rs.next()) 
			{
				id = rs.getInt(1);
				data = rs.getString(2);
				System.out.println(id + "---@@@@@@" + data);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public String updateData(Map<String, String> datatype,int fileid) 
	{
		String msg = "0";
		String updatedatatypeQuery = "";
		try {
			Statement statement = con.createStatement();
			for (Map.Entry<String, String> entry : datatype.entrySet()) 
			{
				updatedatatypeQuery = "update fileschema set datatype='"+entry.getValue()+"' "
									+ "where fileid="+fileid+" and columnname='"+entry.getKey()+"' ";
				statement.addBatch(updatedatatypeQuery);
			}
		statement.executeBatch();
		statement.close();	
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			msg = "1";
			e.printStackTrace();
			return msg;
		    }
			return msg;
	}
}
