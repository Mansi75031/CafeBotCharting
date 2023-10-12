package in.easydata;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class HiveConnection {

	public static void main(String[] args) {
		Connection hivecon =null;
			try {

				Class.forName("org.apache.hive.jdbc.HiveDriver");
//				http://192.168.5.20:10000/
				String url = "192.168.5.20:10000";
				int port =10000;

				PreparedStatement ps = null;
				
				PreparedStatement ps1 = null;
				hivecon = DriverManager.getConnection("jdbc:hive2://"+url+"/default", "", "");
				
				
				System.out.println("hivecon  --##### --"+hivecon);
				String queryy = "";
				 String line = "";
			      String splitBy = ",";
			      String values = "";
			     int count =0;
			      
			     String query1 = "CREATE TABLE IF NOT EXISTS sd254_cards ( User_ String,CARD_INDEX String,"
			     		+ "Card_Brand String,Card_Type String,Card_Number String,Expires String,"
			     		+ "CVV String,Has_Chip String,Cards_Issued String,"
			     		+ "Credit_Limit String,Acct_Open_Date String,Year_PIN_last_Changed String,"
			     		+ "Card_on_Dark_Web String,id int)";
					
			     
			     System.out.println(query1);
			     
//			     String query1 ="CREATE TABLE hive_data_6k_test ( description String, industry String , level String , size String , line_code String ,id int)";
////				     		description,industry,level,size,line_code,Value
//			     
//			     
////			    		 
//////			     String query1 = "CREATE TABLE IF NOT EXISTS Table_Testdata ( Series_reference String, Period String, Data_value int, Suppressed String, Status String, Units String, Magnitude String, Subject String)";
			     ps = hivecon.prepareStatement(query1);
			     ps.executeQuery();
			     
//			    	  BufferedReader bufferedReader = new BufferedReader(new FileReader("C:\\Users\\valsys\\Desktop\\csv\\7-test - Copy - Copy.csv"));
//			    	     String input;
//			    	     int count1 = 0;
//			    	     while((input = bufferedReader.readLine()) != null)
//			    	     {
//			    	         count1++;
//			    	     }
	//
//			    	     System.out.println("Count1  ## : "+count1);
			     
			     
//			     int id_count =0;
//			     BufferedReader br = new BufferedReader(new FileReader("C:\\Users\\Administrator\\Desktop\\Excel\\TestBenefits_table.csv"));
//			     while ((line = br.readLine()) != null)  
//			      {
//			    	  id_count++;
//			    	  
//			       if(  id_count >= 1212000)
//				    {
//			    	   
//				      String[] details = line.split(splitBy);
//						if(count > 1000)
//						{ 
//						count = 0 ;
//						}
//				      
//				      if(count !=0 )
//				  		{
//				    	
//				  			  if( count == 1000)
//				  			  {
//				  				  values += "('" + details[0] + "' , '" + details[1] + "' ,'" + details[2] + "' ,'" + details[3] + "' ,'" + details[4] + "' ,'" + details[5] + "' ,'" + details[6] + "' ,'" + details[7] + "' ,'" + details[8] + "' , '" + details[9] + "' ,'" + details[10] + "' ,'" + details[11] + "' ,'" + details[12] + "' ,'" + details[13] + "' , "+id_count+")"; 
//				  			  		  
//				  			  }
//				  			  else
//				  			  {
//				  				  values += "('" + details[0] + "' , '" + details[1] + "' ,'" + details[2] + "' ,'" + details[3] + "' ,'" + details[4] + "' ,'" + details[5] + "' ,'" + details[6] + "' ,'" + details[7] + "' ,'" + details[8] + "' , '" + details[9] + "' ,'" + details[10] + "' ,'" + details[11] + "' ,'" + details[12] + "' ,'" + details[13] + "' , "+id_count+") , "; 
//				  				     
//				  			  }			    	  
//				  		} 
//				    
//				      	if (count==1000) 
//				  		    {
//				  		  	  try
//				  		  	  {
//				  			       queryy = "INSERT INTO  data_hive5million  VALUES" + values ;  
//				  		  	   ps = hivecon.prepareStatement(queryy); 
//				  		  	   System.out.println("queryy "+queryy); 
//				  		  	   ps.executeUpdate(); 
//				  			  }catch (Exception e)
//				  		  	  {
//				  		  		  e.printStackTrace();
//				  		//  		  System.out.println("error execution:::"+e.toString()); 
//				  					// TODO: handle exception
//				  				}
//				  		  	   values = "";
//				  		  	   count = 0;
//				  		    }
//				      
////				      System.out.println("count   ####################    "+count);
//				      	
//				     } 
//			    	 else  if(id_count >= 1300000)  	
//			    	  {
//			    		System.out.println("id_count ###################"+id_count);
//			    		 hivecon.close();
////			    		 break;
//			    	  }
//			    	
//			    	
//			    	count++; 
//			      
//			       }
			     
			     
			     
			     
			     
			     
			     
			     
			     
			     
			     
			     
			     

//			    	  try 
//			    	  {
//				       queryy = "select count(*) from data_hive5million" ; //3lakh
//			    	   ps1 = hivecon.prepareStatement(queryy);
//			    	   System.out.println("queryy    "+queryy);
//			    	  ResultSet rs =  ps1.executeQuery();
//			    	   while (rs.next())
//			    	   {
//			    		   System.out.println(rs.getInt(1));
//			    	   }
//			    	   
//			    	  }
//			    	  catch (Exception e) 
//			    	  {
//			    		  System.out.println("error execution:::"+e.toString());
//						// TODO: handle exception
//					  }

//			      
//			       }
			      
			     queryy = "Show Tables" ; //3lakh
		    	   ps1 = hivecon.prepareStatement(queryy);
		    	   System.out.println("queryy    "+queryy);
		    	  ResultSet rs =  ps1.executeQuery();
		    	  while (rs.next())
			    	   {
			    		   System.out.println(rs.getString(1));
			    	   }
			      System.out.println(" Table employee created.");
			      
			      hivecon.close();
				
			}
			catch(Exception e)
				{ 
				System.out.println("error new hive  connection ="+e.toString());
			
				}
	
	}

}
