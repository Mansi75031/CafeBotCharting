package in.easydata;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

public class MsSQLConnection {

	public static void main(String[] args) throws SQLException, ClassNotFoundException, InstantiationException, IllegalAccessException, IOException {
		// TODO Auto-generated method stub
		PreparedStatement ps = null;
		String queryy = "";
		 String line = "";
	      String splitBy = ",";
	      String values = "";
	     int count =0;
		
		
		
		Connection conn=null;
        try {
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
            conn = DriverManager.getConnection("jdbc:sqlserver://192.168.5.20:1433;databaseName=Test_Database", "sa", "Pass@word");

            if(conn!=null)
            {
            	System.out.println("Database Successfully connected");
            }
            	
            System.out.println("conn   "+conn);
//		     String query1 = "CREATE TABLE data_table_TestBenefits ( BenefitName varchar(255), BusinessYear varchar(255) , CoinsInnTier1 varchar(255) , CoinsInnTier2 varchar(255) , CoinsOutofNet varchar(255) , CopayInnTier1 varchar(255) , CopayInnTier2 varchar(255) , CopayOutofNet varchar(255), EHBVarReason varchar(255), Exclusions varchar(255), Explanation varchar(255), ImportDate varchar(255), IsCovered varchar(255), IsEHB varchar(255) )";
//		     ps = conn.prepareStatement(query1);
//		     ps.executeUpdate();
            
//            File path = new File("C:\\Users\\valsys\\Desktop\\Files\\BenefitsCostSharing.csv");
//
////		    File [] files = path.listFiles();
////		    for (int i = 1; i < files.length; i++){
////		        if (files[i].isFile()){ //this line weeds out other directories/folders
////		            System.out.println(files[i]);
//
//	    	  BufferedReader br = new BufferedReader(new FileReader("C:\\Users\\valsys\\Desktop\\Files\\BenefitsCostSharing.csv\\20-BenefitsCostSharing.csv"));	
//	    	  while ((line = br.readLine()) != null)  
//				      {
//				    	  
//				        String[] details = line.split(splitBy);
//		
//				      
//				      	 if(count !=0)
//					      {
//					    	  
//					    	  if( count == 1000)
//					    	  {
//					    		  values += "('" + details[0] + "' , '" + details[1] + "' ,'" + details[2] + "' ,'" + details[3] + "' ,'" + details[4] + "' ,'" + details[5] + "' ,'" + details[6] + "' ,'" + details[7] + "'  , '" + details[8] + "' ,'" + details[9] + "' ,'" + details[10] + "','" + details[11] + "' ,'" + details[12] + "' ,'" + details[13] + "')"; 
//							  		  
//					    	  }
//					    	  else
//					    	  {
//					    		  values += "('" + details[0] + "' , '" + details[1] + "' ,'" + details[2] + "' ,'" + details[3] + "' ,'" + details[4] + "' ,'" + details[5] + "' ,'" + details[6] + "' ,'" + details[7] + "'  , '" + details[8] + "' ,'" + details[9] + "','" + details[10] + "' ,'" + details[11] + "' ,'" + details[12] + "' ,'" + details[13] + "'),"; 
//					    		     
//					    	  }			    	  
//					      } 
//			        
//					      if (count==1000) 
//					      {
//					    	  try
//					    	  {
//						       queryy = "INSERT INTO  data_table_TestBenefits  VALUES" + values ;  
//					    	   ps = conn.prepareStatement(queryy); 
////					    	   System.out.println("queryy "+queryy); 
//					    	   ps.executeUpdate(); 
//				    	      }catch (Exception e)
//					    	  {
//					    		  e.printStackTrace();
//					    		  System.out.println("error execution:::"+e.toString()); 
//								// TODO: handle exception
//							  }
//					    	   values = "";
//					    	   count = 0;
//					      }
//				      
////				      System.out.println("count   ####################    "+count);
//				      
//				       count++; 
//				      
//				       }
////		        }
////		    }
//            
//            conn.close();
//                

        } catch (SQLException e) {
            e.printStackTrace();
        }
		
		
		
		
		
		
		
		
		
		
		
		
//		String userName = "sa";
//		String password = "Pass@word";
//
//		String url = "192.168.5.20;1433";
//		int port =1433;
//try
//{
//	Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
//	
//	
//	Connection conn = DriverManager.getConnection(url, userName, password);
//	
//	System.out.println("conn  ##### "+conn);
//}
//		catch(Exception e)
//		{
//					System.out.println("error mssql connn"+e.toString());
//		}
		
		
		
	}

}
