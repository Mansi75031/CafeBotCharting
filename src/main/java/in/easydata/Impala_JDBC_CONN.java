package in.easydata;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import com.cloudera.impala.jdbc4.ImpalaJDBC4DataSource;

public class Impala_JDBC_CONN {

	public static void main(String[] args) {
	
		Connection impala_con =null;
//			 String driverName = "com.cloudera.impala.jdbc41.Driver";
	//	
//			    try {
//			       Class.forName(driverName);
	//
//			        } 
//			   catch (ClassNotFoundException e)
//			       {
//			            // TODO Auto-generated catch block
//			            e.printStackTrace();
//			            System.exit(1);
//			        }
//			         Connection con =   DriverManager.getConnection("jdbc:impala://host:25004/;principal=impala/host@abc.ENTERPRISENET.ORG");
//			         Statement stmt = con.createStatement();
//			         String tableName = "yogesh";
//			         stmt.executeQuery("drop table " + tableName);
			    

			try {

//				Class.forName("com.cloudera.impala.impala.core.ImpalaJDBCDriver");
//				ip - 192.168.5.20
//				ports 
//				25000:25000
//				25010:25010
//				25020:25020
//				Class.forName("com.cloudera.impala.jdbc4.ImpalaJDBC4DataSource");
				Class.forName("com.cloudera.impala.jdbc41.DataSource");
				//String url = "192.168.5.20";
//				String username = "root";
//				String password ="cafebot@2020";
//				int port =25000;
				
				String url = "192.168.5.20:25020";
				//String IMPALA_URL="jdbc:impala://192.168.5.20:25010/default";
				
//				String IMPALA_URL ="jdbc:impala://192.168.5.20:25000/postgres";
				
				String IMPALA_URL ="jdbc:impala://"+url+"/postgres;auth=noSasl;AuthMech=0";
				//hivecon = DriverManager.getConnection("jdbc:hive2://"+url+"/default", "", "");
				//jdbc:hive2://myhost.example.com:21050/test_db;user=fred;password=xyz123
				
				
//				DriverManager.getConnection("jdbc:hive2://"+url+"/default", "", "");
				
				
//				DataSource ds = new com.cloudera.impala.jdbc41.DataSource();
//				ds.setURL(IMPALA_URL);
//				impala_con = ds.getConnection();
				
				
				
				
//				28000
//				String IMPALA_URL="jdbc:impala://<impala_server>:25000/<database>";
//				Connection connection = DriverManager.getConnection(IMPALA_URL);
//				PreparedStatement ps = null;
				
				impala_con = DriverManager.getConnection(IMPALA_URL);
				
				
//				impala_con = DriverManager.getConnection("jdbc:hive2://"+url+"/default", "", "");
				
//				impala_con = DriverManager.getConnection("jdbc:impala://"+url+"/default;AuthMech=1;");
				
//				String createdb= "CREATE DATABASE IF NOT EXISTS impala_db";
//				
//				
//			      String query = "CREATE TABLE IF NOT EXISTS EDA12 ( eid int, name String, salary String, destignation String)";
//				 ps = hivecon.prepareStatement(createdb);
//				 ps.executeQuery();
				 
				 
				 
//				 System.out.println("createdb  --##### -- "+createdb);
				System.out.println("IMPALA_URL  --##### -- "+IMPALA_URL);
				System.out.println("impala_con  --##### -- "+impala_con);
			
			    impala_con.close();
				
				
			}
			catch(Exception e)
				{ 
				System.out.println("error new impala connection ="+e.toString());
			
				}
		
			System.exit(0);
		
		
		
		
		
		
		// TODO Auto-generated method stub

	}

}
