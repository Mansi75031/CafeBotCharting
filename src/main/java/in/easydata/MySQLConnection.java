package in.easydata;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class MySQLConnection {

	 public static Connection mySql;

   public static void main(String[] args) throws FileNotFoundException ,SQLException{
   	mySql = getConnection_mySql();
   }
	 
	 public static Connection getConnection_mySql() throws FileNotFoundException ,SQLException
		{
			try {
				Class.forName("com.mysql.cj.jdbc.Driver");
				
				PreparedStatement ps = null;
				
				PreparedStatement ps1 = null;
				
		
				mySql = DriverManager.getConnection("jdbc:mysql://192.168.5.20:3308/db","root","root");
				
				
				System.out.println("mySql  --##### --"+mySql);
				String queryy = "";
				 String line = "";
			      String splitBy = ",";
			      String values = "";
			     int count =0;
			      
			     
//		     String query1 = "CREATE TABLE level_csv ( level varchar(1000), role varchar(1000))";
//			     ps = mySql.prepareStatement(query1);
//			     ps.executeUpdate();
		
			    
			     BufferedReader br = new BufferedReader(new FileReader("C:\\Users\\Administrator\\Downloads\\level.csv"));
			    	      while ((line = br.readLine()) != null)  
			      {
			    	  
			      String[] details = line.split(splitBy);

			      
			   if(count !=0 )
		      {
		    	  
		    	  if( count == 2)
		    	  {
		    		  values += "('" + details[0] + "' , '" + details[1] + "')"; 
				  		  
		    	  }
		    	  else
		    	  {
		    		  values += "('" + details[0] + "' , '" + details[1] + "'),"; 
		    		     
		    	  }			    	  
		      } 
		        
			      if (count==2) 
			      {
			    	  try
			    	  {
				       queryy = "INSERT INTO  level_csv  VALUES" + values ;  
			    	   ps1 = mySql.prepareStatement(queryy); 
			    	   System.out.println("queryy "+queryy); 
			    	   ps1.executeUpdate(); 
		    	  }catch (Exception e)
			    	  {
			    		  e.printStackTrace();
//			    		  System.out.println("error execution:::"+e.toString()); 
						// TODO: handle exception
					}
			    	   values = "";
			    	   count = 0;
			      }
			      
//			      System.out.println("count   ####################    "+count);
			      
			      count++; 
			      
			       }
			      
			    	      
			    	      
			    	      
//			    	  	int count12 =0;	
//					     String qqqqqqq = "select count(*) from data_table_TestBenefits";			
//					     ps = mySql.prepareStatement(qqqqqqq); 
//				    	   System.out.println("queryy "+qqqqqqq); 
//				    	  ResultSet rs= ps.executeQuery(); 
//							
//							while (rs.next()) {
//							
//							 
//							 
//							 System.out.println(rs.getString(1));
//
//							
//							 count12++;
//							 
//							}	
//							System.out.println("count12     "+count12);
//							
//							
			    	      
			    	      
			    	      
			    	      
			    	      
			      System.out.println(" Table employee created." );
			      
			      mySql.close();
				
			}
			catch(Exception e)
				{ 
				System.out.println("error new mySql  connection ="+e.toString());
			
				}
			//return con; 
		return mySql; 
		}
}