package in.easydata;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

import ru.yandex.clickhouse.ClickHouseConnectionImpl;
import ru.yandex.clickhouse.ClickHouseDataSource;
import ru.yandex.clickhouse.settings.ClickHouseProperties;


/*import ru.yandex.clickhouse.ClickHouseConnectionImpl;
import ru.yandex.clickhouse.ClickHouseDataSource;
import ru.yandex.clickhouse.ClickHouseDriver;
import ru.yandex.clickhouse.settings.ClickHouseProperties;*/

public class DBConClickHouse {

	//static Connection con =null;
	//static Connection conch =null;
	static ClickHouseConnectionImpl connection=null;
	public DBConClickHouse () 
	{
		//getConnection();
	}
	
	public Connection getConnection() 
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
				//properties.setUser(username);
				//properties.setPassword(password);
				
				//jdbc:ch://localhost/test?socket_timeout=120000

		//ClickHouseDataSource dataSource = new ClickHouseDataSource("jdbc:clickhouse://"+url+"/"+dbname,properties);	
		 ClickHouseDataSource dataSource = new ClickHouseDataSource("jdbc:clickhouse://"+url+"/"+dbname, properties);
				  
		//ClickHouseDataSource dataSource = new ClickHouseDataSource("jdbc:clickhouse://localhost:8123/cafebot",properties);
			 
		  
		    
			 //local
			
			
			/*   
			 * ClickHouseDataSource dataSource = new ClickHouseDataSource(
			 * "jdbc:clickhouse://180.151.31.110:8123/cafebot?useEncoding=true&amp;characterEncoding=UTF-8"
			 * ,properties);
			 */
			
			  
			  
			  
			/*http://180.151.31.110/
			 * ClickHouseDataSource dataSource = new ClickHouseDataSource(
			 * "jdbc:clickhouse://164.52.206.3:8123/cafebot?useEncoding=true&amp;characterEncoding=UTF-8"
			 * ,properties);
			 */
			  
			  //useEncoding=true&amp;characterEncoding=UTF-8
			 
			  //http://180.151.31.110/
			  
			  //http://164.52.206.3/
			 //101.53.153.42
			
			//connection = (ClickHouseConnectionImpl) dataSource.getConnection("default", "");
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
}
