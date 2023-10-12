package in.easydata;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class Postgres_Connection {
		
	public static void main(String[] args) throws IOException , FileNotFoundException {
		// TODO Auto-generated method stub
		try {

			Class.forName("org.postgresql.Driver");

			String url = "192.168.5.20:7432";
			String username = "postgres";
			String password ="cafebot@2021"  ;
			String dbname ="cafebot";
			
			Connection pgadmin =null;
			
			 int count =0;
			 String values = "";
			 String splitBy =",";
			
			System.out.println("purl----"+url+"-pusername----"+username+"-ppassword----"+password+"-pdbname----"+dbname);
			
			pgadmin = DriverManager.getConnection("jdbc:postgresql://"+url+"/"+dbname, username, password);

			PreparedStatement ps = null;
			
//			String query1 = "DROP TABLE POLICY_1 ";
//
//		     ps = pgadmin.prepareStatement(query1);
//		     ps.executeQuery();
			
			
			
			
			
//		     String query1 = "CREATE TABLE POLICY_10 ( Policy__Created__Date date, Product varchar(1000), Policy__Created__By integer , P400__Policy integer "
//		     		+ ", TYPE_CD varchar(1000) , Policy__Id integer ,id integer, PRIMARY KEY (id) )";
//															                                                        																
////		     Policy__Created__Date,Product,Coverage__Name,Policy__Created__By,P400__Policy,TYPE_CD,Policy__Id
//		     ps = pgadmin.prepareStatement(query1);
//		     ps.executeQuery();
			

			String queryy = "";
			String line = "";
		    int id_count = 1022;
			
BufferedReader br = new BufferedReader(new FileReader("C:\\Users\\Administrator\\Desktop\\POLICY\\policy_10.csv"));
   while ((line = br.readLine()) != null)  
    {
  	    	
    String[] details = line.split(splitBy);

    
    if(count !=0 )
		{
    	id_count++;
			  if( count == 100)
			  {
				  values += "('" + details[0] + "' , '" + details[1] + "'  ," + details[3] + " ," + details[4] + " ,'" + details[5] + "' ," + details[6] + " ,"+id_count+")"; 
			  		  
			  }
			  else
			  {
				  values += "('" + details[0] + "' , '" + details[1] + "' ," + details[3] + " ," + details[4] + " ,'" + details[5] + "' ," + details[6] + " , " + id_count + ") , "; 
				     
			  }			    	  
		} 
  
    	if (count==100) 
		    {
		  	  try
		  	  {
			       queryy = "INSERT INTO  POLICY_10  VALUES" + values ;  
		  	   ps = pgadmin.prepareStatement(queryy); 
		  	   System.out.println("queryy "+queryy); 
		  	   ps.executeUpdate(); 
			  }catch (Exception e)
		  	  {
		  		  e.printStackTrace();

			  }
		  	   values = "";
		  	  
		    }

    count++; 
    
     }
			
			
			
			
			
			
		         
		      System.out.println(" Table employee created." );
		      System.out.println(" id_count   ############   "+id_count );
		      System.out.println(" count   ############   "+count );
		      pgadmin.close();	
			
			
			
		}
	
		catch(Exception e)
			{ 
			System.out.println("error new connection ="+e.toString());	
	        }
	}
	
	
	
	
	
	
	
	
	
	
	
	
	

//	public static void main(String[] args) throws IOException , FileNotFoundException {
//		// TODO Auto-generated method stub
//		try {
//
//			//Connection connection = DriverManager.getConnection("jdbc:postgresql://localhost:5432/example", "postgres", "postgres")) 
//			
//			
//			
//			
//			
//			
//			Class.forName("org.postgresql.Driver");
////			ip - 192.168.5.20
////			port - 7432
////			user - postgres
////			passwd - cafebot@2021
////			db - cafebot
//			String url = "192.168.5.20:7432";
//			String username = "postgres";
//			String password ="cafebot@2021"  ;
//			String dbname ="cafebot";
////			int port =5433;
//			
//			Connection pgadmin =null;
//			
//			 int count =0;
//			 String values = "";
//			 String splitBy =",";
//			
//			System.out.println("purl----"+url+"-pusername----"+username+"-ppassword----"+password+"-pdbname----"+dbname);
//			
//			pgadmin = DriverManager.getConnection("jdbc:postgresql://"+url+"/"+dbname, username, password);
//
//			PreparedStatement ps = null;
//			
////		     String query1 = "CREATE TABLE dag_5_million ( BenefitName varchar(1000), BusinessYear varchar(1000) , CoinsInnTier1 varchar(1000) , CoinsInnTier2 varchar(1000) , CoinsOutofNet varchar(1000) "
////		     		+ ", CopayInnTier1 varchar(1000) , CopayInnTier2 varchar(1000) , CopayOutofNet varchar(1000) ,EHBVarReason varchar(1000) , Exclusions varchar(1000) ,"
////		     		+ "  Explanation varchar(1000) , ImportDate varchar(1000) , IsCovered varchar(1000) , IsEHB varchar(1000) , id integer , PRIMARY KEY (id) )";
////															                                                        
//////															     BenefitName,BusinessYear,CoinsInnTier1,CoinsInnTier2,CoinsOutofNet,
//////															     CopayInnTier1,CopayInnTier2,CopayOutofNet,EHBVarReason,Exclusions,
//////															     Explanation,ImportDate,IsCovered,IsEHB
////		     // series_reference	period	data_value	suppressed	status	units	magnitude	subject	id																	
////			 
////		     ps = pgadmin.prepareStatement(query1);
////		     ps.executeQuery();
//			
//		
//
////	    	  BufferedReader bufferedReader = new BufferedReader(new FileReader("C:\\Users\\Administrator\\Desktop\\Excel\\table_testdata.csv"));
////	    	     String input;
////	    	     int count1 = 0;
//////	    	     while((input = bufferedReader.readLine()) != null)
//////	    	     {
//////	    	         count1++;
//////	    	     }
//////
//////	    	     System.out.println("Count1  ## : "+count1);
////	     
////		    
////				    String line;
////					while ((line = bufferedReader.readLine()) != null)  
////				      {
////				    	  
////				     
////								String[] details = line.split(splitBy);
////							    	  if(count !=0)
////							    	  {
////										 if( count == 9)
////								    	  {
////								    		  values += "('" + details[0] + "' , '" + details[1] + "' ,'" + details[2] + "' ,'" + details[3] + "' ,'" + details[4] + "' ," + details[5] + ")"; 
////										  		  
////								    	  }
////								    	  else
////								    	  {
////								    		  values += "('" + details[0] + "' , '" + details[1] + "' ,'" + details[2] + "' ,'" + details[3] + "' ,'" + details[4] + "' ," + details[5] + "),"; 
////								    		     
////								    	  }			    	  
////							    	  }  
////							    	  count ++;
////				       }
////			            
////			        
////			    
////			
////			  String  queryy = "INSERT INTO  test_dag12  VALUES" + values ;  
////	    		  ps = pgadmin.prepareStatement(queryy); 
////	    	   System.out.println("queryy "+queryy); 
////	    	   ps.executeQuery(); 
//			
////			System.out.println("mySql  --##### --"+pgadmin);
//			String queryy = "";
//			 String line = "";
//		      int id_count = 0;
//			
//BufferedReader br = new BufferedReader(new FileReader("C:\\Users\\Administrator\\Desktop\\Excel\\TestBenefits_table.csv"));
//   while ((line = br.readLine()) != null)  
//    {
//  	    	id_count++;
//    String[] details = line.split(splitBy);
//
//    
//    if(count !=0 )
//		{
//			  
//			  if( count == 1000)
//			  {
//				  values += "('" + details[0] + "' , '" + details[1] + "' ,'" + details[2] + "' ,'" + details[3] + "' ,'" + details[4] + "' ,'" + details[5] + "' ,'" + details[6] + "' ,'" + details[7] + "' ,'" + details[8] + "' , '" + details[9] + "' ,'" + details[10] + "' ,'" + details[11] + "' ,'" + details[12] + "' ,'" + details[13] + "' , " + id_count + ")"; 
//			  		  
//			  }
//			  else
//			  {
//				  values += "('" + details[0] + "' , '" + details[1] + "' ,'" + details[2] + "' ,'" + details[3] + "' ,'" + details[4] + "' ,'" + details[5] + "' ,'" + details[6] + "' ,'" + details[7] + "' ,'" + details[8] + "' , '" + details[9] + "' ,'" + details[10] + "' ,'" + details[11] + "' ,'" + details[12] + "' ,'" + details[13] + "' , " + id_count + ") , "; 
//				     
//			  }			    	  
//		} 
//  
//    	if (count==1000) 
//		    {
//		  	  try
//		  	  {
//			       queryy = "INSERT INTO  dag_5_million  VALUES" + values ;  
//		  	   ps = pgadmin.prepareStatement(queryy); 
//		  	   System.out.println("queryy "+queryy); 
//		  	   ps.executeUpdate(); 
//			  }catch (Exception e)
//		  	  {
//		  		  e.printStackTrace();
//		//  		  System.out.println("error execution:::"+e.toString()); 
//					// TODO: handle exception
//				}
//		  	   values = "";
//		  	   count = 0;
//		    }
//    
////    System.out.println("count   ####################    "+count);
//    
//    count++; 
//    
//     }
//			
//			
//			
//			
//			
//			
//		         
//		      System.out.println(" Table employee created." );
//		      System.out.println(" count   ############   "+id_count );
//		      pgadmin.close();	
//			
//			
//			
//		}
//	
//		catch(Exception e)
//			{ 
//			System.out.println("error new connection ="+e.toString());
//		
//		
//		
//		
//		
//		
//
//	}
//	}
}


