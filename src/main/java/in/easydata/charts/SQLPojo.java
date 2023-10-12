package in.easydata.charts;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

//import in.easydata.controller.VisualAnalytics;
//import in.easydata.controller.VisualAnalytics;
//import in.easydata.controller.Visualanalytics;
/*import in.easydata.controller.Visualanalytics;
import in.easydata.controller.Visualanalytics;
*/
//import ai.easydata.mhub.controllers.menu.Demo;

public class SQLPojo {
	GetDataHighcharts getchart =new GetDataHighcharts();
	
	
	public SQLPojo() {
	
	}
    private String fields ; //name, age
    private String agg; //avg(salary)
    private String group; //group by "name", "age"
//    private String select; //"select ";
    private String where; //"where name='Age' = 3
    private String table; //cafebot.PT1234
    private String query;
    private Boolean isAgg;
    private String basicfilterquery;
    private String orderby;
    private String filter;
    private String aggColumnlist; 
    private int isBin; 
    private String xdataType ;

    
    private String displaytopvalue;
    private String others;
    private String binType;
    private String binSize;
    private String binCount;
    private int displaytopCheck;
    private int userlimit;
    private String aggr ;
    
    private String X_Field ;
    

	 public int getUserlimit() {
			return userlimit;
		}
	
	 
	 public void setUserlimit(int userlimit) 
	 {
			this.userlimit = userlimit;
			//System.out.println("userlimitsp::::::"+this.userlimit);		
	 }
	
	public int getDisplaytopCheck() {
		return displaytopCheck;
	}

	public void setDisplaytopCheck(int displaytopCheck) {
		this.displaytopCheck = displaytopCheck;
	}

	public String getBasicfilterquery() {
		return basicfilterquery;
	}

	public void setBasicfilterquery(String basicfilterquery) {
		this.basicfilterquery = basicfilterquery;
	}

	public String getDisplaytopvalue() {
		return displaytopvalue;
	}

	public void setDisplaytopvalue(String displaytopvalue) {
		this.displaytopvalue = displaytopvalue;
	}

	public String getOthers() {
		return others;
	}

	public void setOthers(String others) {
		this.others = others;
	}

	public String getBinType() {
		return binType;
	}

	public void setBinType(String binType) {
		this.binType = binType;
	}

	public String getBinSize() {
		return binSize;
	}

	public void setBinSize(String binSize) {
		this.binSize = binSize;
	}

	public String getBinCount() {
		return binCount;
	}

	public void setBinCount(String binCount) {
		this.binCount = binCount;
	}

	public String getQuery() {
		return query;
	}

	public void setAgg(String agg) {
		this.agg = agg;
	}

	public void setGroup(String group) {
		this.group = group;
	}

	public void setWhere(String where) {
		this.where = where;
	}

	public void setFilter(String filter) {
		this.filter = filter;
	}

	public void setAggColumnlist(String aggColumnlist) {
		this.aggColumnlist = aggColumnlist;
	}

	public int getIsBin() {
		return isBin;
	}

	public void setIsBin(int isBin) {
		this.isBin = isBin;
	}

	public String getFilter() {
		return filter;
	}

	public void setFilter(String[] filter) {
		String q="";
		for (String el:filter ) {
		q = q + " and " + el;
		}
		this.filter = filter.toString();
	}

	public String getBasicFilterquery() {
		return basicfilterquery;
	}

	public String getOrderby() {
		return orderby;
	}

	public void setOrderby(String orderby) {
		this.orderby = orderby;
	}

	public void setBasicFilterquery(String column) {
		
		String q=  "SELECT " + column + "," 
							+ " count(" + column + ") FROM cafebot." 
							+ this.getTable() + " WHERE 1=1 GROUP BY " + 
							column + " order by " + column ;
						
				this.basicfilterquery = q;				
	}

	public Boolean getIsAgg() {
		return isAgg;
	}

	public void setIsAgg(Boolean isAgg) {
		this.isAgg = isAgg;
	}

	
	
	public String getQuery(String chartType,String tablename) 
	{
		
		String sql ="";
		String returnsql= "";
		String returnsql_= "";
		if (chartType.equalsIgnoreCase("bar")  || chartType.equalsIgnoreCase("histogram") || chartType.equalsIgnoreCase("stackedbar") 
				|| chartType.equalsIgnoreCase("Area") 
				|| chartType.equalsIgnoreCase("Line") || chartType.equalsIgnoreCase("StackedArea") 
				|| chartType.equalsIgnoreCase("Mix")  || chartType.equalsIgnoreCase("bar100%") 
				|| chartType.equalsIgnoreCase("stacked100%") || chartType.equalsIgnoreCase("scatter") 
				|| chartType.equalsIgnoreCase("clustered") || chartType.equalsIgnoreCase("heatmap") 
				|| chartType.equalsIgnoreCase("Pyramid") || chartType.equalsIgnoreCase("Funnel3D")
				|| chartType.equalsIgnoreCase("") ) 
		{
			
			String stragg [] = this.getAgg().split(","); 
			
//			System.out.println("len====="+stragg.length);
//			System.out.println("stragg__________"+stragg.toString());
			
			
			
//			Visualanalytics dm = new Visualanalytics();
			int countbin = 1;
			try {
				if (this.getIsBin()==1 && !this.getBinSize().equalsIgnoreCase("")) 
				{
					//String tablename = "PT84430568S";
					//tablename = "PT84430568S";	//comment when link to tablename directly		
					
					String bintype_ = this.getBinType();//  0; //0  bin size  // 1 number of bin
					//System.out.println("bintype_:::::::::::::::"+bintype_);
					int bintype = 0;
					if (!bintype_.equalsIgnoreCase("binsize")) 
					{
						bintype =1;
					}
					
					int bin_size =  Integer.parseInt(this.getBinSize());
				
					returnsql =	getchart.getBinQuery(tablename,bintype,bin_size ,this.getFields().trim() ,this.getAgg(),this.getWhere(),this.getIsAgg() ,this.getUserlimit() );//returnBinQuery( tablename,bintype,bin_size,stragg[k].replaceAll(",$", " "),this.getFields().trim());
					
					if (!returnsql.isEmpty())//equalsIgnoreCase("")) 
					{
					
					sql +=  returnsql;
						System.out.println("2 ################sql::::::"+sql);	
					}	
					
//				System.out.println("1 sql::::::"+sql);	
					
				}
				else
				{
				
			for(int k=0;k<stragg.length;k++) 
			{
				//System.out.println("this.isBin:::::::::::::::"+this.getIsBin());
				//System.out.println("this.getBinSize:::::::::::::::"+this.getBinSize());
				//System.out.println(k+"   stragg[k].replaceAll(\",$\", \" \"):::::::::::::"+stragg[k].replaceAll(",$", " "));
				//System.out.println("this.getXdataType:::::::::::::::"+this.getXdataType());
//				if (this.getIsBin()==1 && !this.getBinSize().equalsIgnoreCase("")) 
//				{
//					if(k == 0)
//					{
//					//String tablename = "PT84430568S";
//					//tablename = "PT84430568S";	//comment when link to tablename directly		
//					
//					String bintype_ = this.getBinType();//  0; //0  bin size  // 1 number of bin
//					System.out.println("bintype_:::::::::::::::"+bintype_);
//					int bintype = 0;
//					if (!bintype_.equalsIgnoreCase("binsize")) 
//					{
//						bintype =1;
//					}
//					
//					int bin_size =  Integer.parseInt(this.getBinSize());
//				
//					returnsql =	getchart.getBinQuery(tablename,bintype,bin_size ,this.getFields().trim() ,this.getAgg(),this.getWhere(),this.getIsAgg()  );//returnBinQuery( tablename,bintype,bin_size,stragg[k].replaceAll(",$", " "),this.getFields().trim());
//					
//					if (!returnsql.isEmpty())//equalsIgnoreCase("")) 
//					{
//					
//					sql +=  returnsql;
//						System.out.println("2 ################sql::::::"+sql);	
//					}	
//					}
////				System.out.println("1 sql::::::"+sql);	
//					
//				}
			 if (this.getIsBin()==1 && !this.getBinCount().equalsIgnoreCase("")) 
				{
                    String bintype_ = this.getBinType();//  0; //0  bin size  // 1 number of bin
					String aggr[] = this.aggr.split(",");
					
					String x_field[] = this.X_Field.split(",");
					
					//System.out.println("aggr k ::::::"+aggr[k]);	
					int bintype = 0;
					if (!bintype_.equalsIgnoreCase("binnumber")) 
					{
						bintype =1;
					}
					
					int bin_size =  Integer.parseInt(this.getBinCount());
				
					returnsql_=	getchart.returnBinQuery( tablename,bintype,bin_size,x_field[k].replaceAll(",$", " "),this.getFields().trim(),this.getWhere() ,aggr[k], chartType ,this.getUserlimit() ,this.getXdataType());
					
				if (!returnsql_.isEmpty())//equalsIgnoreCase("")) 
					{
					if(k > 0)
					{
						sql +=  "#_#_#" +returnsql_;
					}
					else
					{
						sql +=  returnsql_;
					}
						
						System.out.println("2 ################sql::::::"+sql);	
					}	
				}
				else 
				{
				
				if (!sql.equalsIgnoreCase("")) 
				{
					sql +="#_#";
				}
				
//				System.out.println("2 sql::::::"+sql);	
				sql += "SELECT "+
						this.getFields().trim() +
						stragg[k].replaceAll(",$", " ") +
						" FROM cafebot."+ 
						this.getTable() +     
						" WHERE 1=1 " +
						this.getWhere();	
				
						if (this.getIsAgg()) 
						{
							sql = sql + " GROUP BY " + this.getFields().trim().replaceAll(",$", " ");
						}
						
						if (this.getIsAgg()) 
						{
							
							sql = sql + " ORDER BY " + this.getFields().trim() + stragg[k].trim().replaceAll(",$", " ") +" ASC "  + " limit "+this.getUserlimit();
							//sql = sql + " ORDER BY " + stragg[k].trim().replaceAll(",$", " ") +" ASC "  + " limit "+this.getUserlimit();
						}
					if (stragg.length != (k+1) ) 
					{
						//sql +="#_#";
					}	
					
	
//					System.out.println("2 sql::::::"+sql);	
					
			}
					
//					System.out.println("4 sql###########"+sql);
			}
				}
			}catch (NullPointerException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			

		}
		
		else if(chartType.equalsIgnoreCase("SingleValue") || chartType.equalsIgnoreCase("Gauge") || chartType.equalsIgnoreCase("bullet"))
		{
			String stragg = this.getAgg(); 
			
			//SELECT sum(toFloat32OrZero( item_id)) as sum_item_id  FROM (select * from  cafebot.PT84430568S limit 10)  WHERE 1=1 limit 10
			
			sql += "SELECT "+
					stragg.replaceAll(",$", " ") +
					" FROM ( select * from  cafebot."+this.getTable()+" limit "+this.getUserlimit()+" ) "+ 
					" WHERE 1=1 " +
					this.getWhere();
			
			
			
			if(chartType.equalsIgnoreCase("Gauge") || chartType.equalsIgnoreCase("bullet"))
					{
				
				sql += " #_# "+ "SELECT "+
						"sum(toFloat32OrZero("+ this.getFields().trim().replaceAll(",$", " ") +"))" +
						" FROM cafebot."+ 
						this.getTable() +
						" WHERE 1=1 " ;
				
				
					}
			
		
		}
		else if(chartType.equalsIgnoreCase("WordCloud"))
		{
			String stragg = this.getFields(); 

			sql += "SELECT "+
					stragg.trim().replaceAll(",$", " ") +
					" FROM cafebot."+ 
					this.getTable() +
					" WHERE 1=1 " +
					this.getWhere() +" limit "+this.getUserlimit();
					
		}
		else if(chartType.equalsIgnoreCase("table"))
		{
//			String stragg = this.getAgg(); 
			String stragg [] = this.getAgg().split(","); 
//			System.out.println("this.getFields().trim().replaceAll(\",$\", \" \")::::::"+this.getFields().trim().replaceAll(",$", " "));
			//tablename = "PT84430568S";
//			for(int k=0;k<stragg.length;k++) 
//			{
			sql += "SELECT "+
//					stragg[k].replaceAll(",$", " ") +
					this.getFields().trim().replaceAll(",$", " ") +
					" FROM cafebot."+ 
					this.getTable() +
					" WHERE 1=1 " +
					this.getWhere() +
				     " limit "+this.getUserlimit();

		}
		else if(chartType.equalsIgnoreCase("bubble"))
{
			
			String stragg [] = this.getAgg().split(","); 
			
//			System.out.println("len====="+stragg.length);
//			System.out.println("stragg__________"+stragg.toString());
			
//			String returnsql= "";
//			Visualanalytics dm = new Visualanalytics();
			int countbin = 1;
			try {
				if (this.getIsBin()==1 && !this.getBinSize().equalsIgnoreCase("")) 
				{
					//String tablename = "PT84430568S";
					//tablename = "PT84430568S";	//comment when link to tablename directly		
					
					String bintype_ = this.getBinType();//  0; //0  bin size  // 1 number of bin
					System.out.println("bintype_:::::::::::::::"+bintype_);
					int bintype = 0;
					if (!bintype_.equalsIgnoreCase("binsize")) 
					{
						bintype =1;
					}
					
					int bin_size =  Integer.parseInt(this.getBinSize());
				
					returnsql =	getchart.getBinQuery(tablename,bintype,bin_size ,this.getFields().trim() ,this.getAgg(),this.getWhere(),this.getIsAgg() ,this.getUserlimit() );//returnBinQuery( tablename,bintype,bin_size,stragg[k].replaceAll(",$", " "),this.getFields().trim());
					
					if (!returnsql.isEmpty())//equalsIgnoreCase("")) 
					{
					
					sql +=  returnsql;
						System.out.println("2 ################sql::::::"+sql);	
					}	
					
//				System.out.println("1 sql::::::"+sql);	
					
				}
				else
				{
			for(int k=0;k<stragg.length;k++) 
				
			{
//				System.out.println("this.isBin:::::::::::::::"+this.isBin);
			
//				if (this.isBin==1 && !this.getBinSize().equalsIgnoreCase("")) 
//				{
//					//String tablename = "PT84430568S";
//					//tablename = "PT84430568S";	//comment when link to tablename directly				
//					String bintype_ = this.getBinType();//  0; //0  bin size  // 1 number of bin
//					
//					int bintype = 0;
//					if (!bintype_.equalsIgnoreCase("binsize")) 
//					{
//						bintype =1;
//					}
//					
//					int bin_size =  Integer.parseInt(this.getBinSize());
//				
//					returnsql=	getchart.returnBinQuery( tablename,bintype,bin_size,stragg[k].replaceAll(",$", " "),this.getFields().trim(),this.getWhere(),this.aggr,chartType ,this.getUserlimit());
//					
//					if (!returnsql.isEmpty())//equalsIgnoreCase("")) 
//					{
//					if(k > 0)
//					{
//						sql +=  "#_#_#" +returnsql;
//					}
//					else
//					{
//						sql +=  returnsql;
//					}
//						
//						System.out.println("2 ################sql::::::"+sql);	
//					}	
//					
////				System.out.println("1 sql::::::"+sql);	
//					
//				}
				 if (this.getIsBin()==1 && !this.getBinCount().equalsIgnoreCase("")) 
					{
	                    String bintype_ = this.getBinType();//  0; //0  bin size  // 1 number of bin
						String aggr[] = this.aggr.split(",");
						String x_field[] = this.X_Field.split(",");
						
						System.out.println("aggr k ::::::"+aggr[k]);	
						int bintype = 0;
						if (!bintype_.equalsIgnoreCase("binnumber")) 
						{
							bintype =1;
						}
						
						int bin_size =  Integer.parseInt(this.getBinCount());
					
						returnsql_=	getchart.returnBinQuery( tablename,bintype,bin_size,x_field[k].replaceAll(",$", " "),this.getFields().trim(),this.getWhere() ,aggr[k], chartType ,this.getUserlimit() ,this.getXdataType());
						
					if (!returnsql_.isEmpty())//equalsIgnoreCase("")) 
						{
						if(k > 0)
						{
							sql +=  "#_#_#" +returnsql_;
						}
						else
						{
							sql +=  returnsql_;
						}
							
							System.out.println("2 ################sql::::::"+sql);	
						}	
					}
				else 
				{
				
				if (!sql.equalsIgnoreCase("")) 
				{
					sql +="#_#";
				}
				
//				System.out.println("2 sql::::::"+sql);	
				sql += "SELECT "+
						this.getFields().trim() +
						stragg[k].replaceAll(",$", " ") +
						" FROM cafebot."+ 
						this.getTable() +     
						" WHERE 1=1 " +
						this.getWhere();	
				
						if (this.getIsAgg()) 
						{
							sql = sql + " GROUP BY " + this.getFields().trim().replaceAll(",$", " ");
						}
						
						if (this.getIsAgg()) 
						{
							
							sql = sql + " ORDER BY " + this.getFields().trim() + stragg[k].trim().replaceAll(",$", " ") +" ASC limit "+this.getUserlimit();
							//sql = sql + " ORDER BY " + stragg[k].trim().replaceAll(",$", " ") +" ASC "  + " limit "+this.getUserlimit();
						}
					if (stragg.length != (k+1) ) 
					{
						//sql +="#_#";
					}	
					
	
//					System.out.println("2 sql::::::"+sql);	
					
			}
					
//					System.out.println("4 sql###########"+sql);
			}
				}
			}catch (NullPointerException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			

		}
		
		else 
		{	
            String stragg [] = this.getAgg().split(","); 
			
//			System.out.println("len====="+stragg.length);
//			System.out.println("stragg__________"+stragg.toString());
			
//			String returnsql= "";
//			Visualanalytics dm = new Visualanalytics();
			int countbin = 1;
			try {
				if (this.getIsBin()==1 && !this.getBinSize().equalsIgnoreCase("")) 
				{
					//String tablename = "PT84430568S";
					//tablename = "PT84430568S";	//comment when link to tablename directly		
					
					String bintype_ = this.getBinType();//  0; //0  bin size  // 1 number of bin
					//System.out.println("bintype_:::::::::::::::"+bintype_);
					int bintype = 0;
					if (!bintype_.equalsIgnoreCase("binsize")) 
					{
						bintype =1;
					}
					
					int bin_size =  Integer.parseInt(this.getBinSize());
				
					returnsql =	getchart.getBinQuery(tablename,bintype,bin_size ,this.getFields().trim() ,this.getAgg(),this.getWhere(),this.getIsAgg() ,this.getUserlimit() );//returnBinQuery( tablename,bintype,bin_size,stragg[k].replaceAll(",$", " "),this.getFields().trim());
					
					if (!returnsql.isEmpty())//equalsIgnoreCase("")) 
					{
					
					sql +=  returnsql;
						//System.out.println("2 ################sql::::::"+sql);	
					}	
					
//				System.out.println("1 sql::::::"+sql);	
					
				}
				else
				{
			for(int k=0;k<stragg.length;k++) 
			{
//				System.out.println("this.isBin:::::::::::::::"+this.isBin);
			
//				if (this.isBin==1 && !this.getBinSize().equalsIgnoreCase("")) 
//				{
//					//String tablename = "PT84430568S";
//					//tablename = "PT84430568S";	//comment when link to tablename directly				
//					String bintype_ = this.getBinType();//  0; //0  bin size  // 1 number of bin
//					
//					int bintype = 0;
//					if (!bintype_.equalsIgnoreCase("binsize")) 
//					{
//						bintype =1;
//					}
//					
//					int bin_size =  Integer.parseInt(this.getBinSize());
//				
//					returnsql=	getchart.returnBinQuery( tablename,bintype,bin_size,stragg[k].replaceAll(",$", " "),this.getFields().trim(),this.getWhere(),this.aggr,chartType ,this.getUserlimit());
//					
//					if (!returnsql.isEmpty())//equalsIgnoreCase("")) 
//					{
//					if(k > 0)
//					{
//						sql +=  "#_#_#" +returnsql;
//					}
//					else
//					{
//						sql +=  returnsql;
//					}
//						
//						System.out.println("2 ################sql::::::"+sql);	
//					}	
//					
////				System.out.println("1 sql::::::"+sql);	
//					
//				}
				 if (this.getIsBin()==1 && !this.getBinCount().equalsIgnoreCase("")) 
					{
	                    String bintype_ = this.getBinType();//  0; //0  bin size  // 1 number of bin
						String aggr[] = this.aggr.split(",");
						String x_field[] = this.X_Field.split(",");
						
						System.out.println("aggr k ::::::"+aggr[k]);	
						int bintype = 0;
						if (!bintype_.equalsIgnoreCase("binnumber")) 
						{
							bintype =1;
						}
						
						int bin_size =  Integer.parseInt(this.getBinCount());
					
						returnsql_=	getchart.returnBinQuery( tablename,bintype,bin_size,x_field[k].replaceAll(",$", " "),this.getFields().trim(),this.getWhere() ,aggr[k], chartType ,this.getUserlimit() ,this.getXdataType());
						
					if (!returnsql_.isEmpty())//equalsIgnoreCase("")) 
						{
						if(k > 0)
						{
							sql +=  "#_#_#" +returnsql_;
						}
						else
						{
							sql +=  returnsql_;
						}
							
							System.out.println("2 ################sql::::::"+sql);	
						}	
					}
				else 
				{
				
				if (!sql.equalsIgnoreCase("")) 
				{
					sql +="#_#";
				}
				
			sql ="SELECT "+
				this.getFields().trim() +
				this.getAgg().replaceAll(",$", " ") +
				" FROM cafebot."+ 
				this.getTable() + 
				" WHERE 1=1 " +
				this.getWhere();				
				if (this.getIsAgg())
					sql = sql + " GROUP BY " + this.getFields().trim().replaceAll(",$", " ");
				
				if (this.getIsAgg()) {
					sql = sql + " ORDER BY " + this.getFields().trim() + stragg[k].trim().replaceAll(",$", " ") +" ASC limit "+this.getUserlimit();
					//sql = sql + " ORDER BY " + this.getAgg().trim().replaceAll(",$", " ")  +" ASC "  + " limit "+this.getUserlimit();
				}
				if (stragg.length != (k+1) ) 
				{
					//sql +="#_#";
				}	
				

//				System.out.println("2 sql::::::"+sql);	
				
		}
			}	
				}
		}catch (NullPointerException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	
		}
		System.out.println("sql    "+sql);
		return sql;
	}
	
	
	
	
	public String getColumnList(String chartType) 
	{
		
		String sql ="";
		
		if (chartType.equalsIgnoreCase("bar")) 
		{
			
			String stragg [] = this.getAgg().split(","); 
			
//			System.out.println("len====="+stragg.length);
//			System.out.println("stragg__________"+stragg.toString());
			for(int k=0;k<stragg.length;k++) 
			{
				
				sql += 	this.getFields().trim() +stragg[k].replaceAll(",$", " ") ;
//				System.out.println("colum list ###########"+sql);
						
						
			}

		}
		else 
		{	
		
			String stragg [] = this.getAgg().split(","); 
			
//			System.out.println("len====="+stragg.length);
//			System.out.println("stragg__________"+stragg.toString());
			for(int k=0;k<stragg.length;k++) 
			{
				
				sql += 	this.getFields().trim() +stragg[k].replaceAll(",$", " ") ;
//				System.out.println("colum list ###########"+sql);
						
						
			}

				
		}		
				
		return sql;
	}    
	
	
	
	public void setQuery(String query) {
		this.query = query;
	}
	
	public String getWhere() {
		if (this.where==null)
			return "";
		else
			return this.where;
	}
	
	int basicdata_flag = 0;
	public void setWhere(JsonNode arrayNodeFilter,String table) {
		
		String q= "";
		//String q= this.where;
		
		
		try {
			
			for (JsonNode jsonNode : arrayNodeFilter) 
			{
				for (JsonNode jsonNode_ : jsonNode) 
				{
					
					
					
					
				//ObjectMapper nodeMapper = new ObjectMapper();
				//JsonNode jNode = nodeMapper.readTree(jsonNode.toString().replace("[", "").replace("]", ""));
				String filterselectvalue1 = jsonNode_.get("filterselectvalue1").asText();				
				String filterselectvalue2 = jsonNode_.get("filterselectvalue2").asText();
				String Field = jsonNode_.get("Field").asText();
				String Types = jsonNode_.get("Types").asText();
				String filterselect1 = jsonNode_.get("filterselect1").asText();
				String filterselect2 = jsonNode_.get("filterselect2").asText();	
				String andorvalue = jsonNode_.get("andorvalue").asText(); 
				String filterselecttypevalue = jsonNode_.get("filterselecttypevalue").asText(); 
				String filtertopn = jsonNode_.get("filtertopn").asText(); 
				String filtertopvalue =  jsonNode_.get("filtertopvalue").asText();
				JsonNode basicdata = jsonNode_.get("basic_Fil_Val_Array");//basicUserlimit
				//String basic_userlimit =  jsonNode_.get("userLimit_basic").asText();
				
				//System.out.println("basic_userlimit:::::: "+basic_userlimit);
//				System.out.println("andorvalue::::::"+andorvalue);
//				System.out.println("filterselecttypevalue::::"+filterselecttypevalue);
//				System.out.println("filterselectvalue1::::"+filterselectvalue1);
//				System.out.println("filterselectvalue2::::"+filterselectvalue2);
//				
//				System.out.println("filterselect1:::::"+filterselect1);
//				System.out.println("filterselect2:::::"+filterselect2);
//				System.out.println("filtertopn:::::"+filtertopn);
//				System.out.println("filtertopvalue:::::"+filtertopvalue);
				String _Field=Field;

				if (filterselecttypevalue.equalsIgnoreCase("adv")) 
				{
				  
					if (filterselectvalue1 !="") 
					{					
						
						if (Types.equals("number"))
						{
							_Field =  "( toFloat32OrZero(" + _Field + ")";
							filterselectvalue1 =  " toFloat32OrZero('" + filterselectvalue1 + "'))";
								
						}
						else if (Types.equals("Date")) 
						{
							filterselectvalue1 =  " toDateTime('" + filterselectvalue1 + "')";
						}
						else
						{
							
						}
							
							if (filterselect1.equalsIgnoreCase("contains")) 
							{
								filterselect1 =" like ";
								filterselectvalue1 =   "'"+ filterselectvalue1 + "%'";
							}
							else if (filterselect1.equalsIgnoreCase("does not contain")) 
							{
								filterselect1 =" NOT like ";
								filterselectvalue1 =   "'"+ filterselectvalue1 + "%'";
							}
							else if (filterselect1.equalsIgnoreCase("starts with")) 
							{
								filterselect1 =" like ";
								filterselectvalue1 =   "'%"+ filterselectvalue1 + "'";
							}
							else if (filterselect1.equalsIgnoreCase("does not start with")) 
							{
								filterselect1 =" NOT like ";
								filterselectvalue1 =   "'%"+ filterselectvalue1 + "'";
							}
							else if (filterselect1.equalsIgnoreCase("is")) 
							{
								filterselect1 =" = ";
								filterselectvalue1 =   "'"+ filterselectvalue1 + "'";
							}
							else if (filterselect1.equalsIgnoreCase("is not")) 
							{
								filterselect1 =" != ";
								filterselectvalue1 =   "'"+ filterselectvalue1 + "'";
							}
							else if (filterselect1.equalsIgnoreCase("is null")) 
							{
								filterselect1 =" isNull("+_Field+") ";
								filterselectvalue1 =   " ";
							}
							else if (filterselect1.equalsIgnoreCase("is not null")) 
							{
								filterselect1 =" isNotNull("+_Field+") ";
								filterselectvalue1 =   " ";
							}
							else if (filterselect1.equalsIgnoreCase("is empty")) 
							{
								filterselect1 =" = ";
								filterselectvalue1 =   "''";
							}
							else if (filterselect1.equalsIgnoreCase("is not empty")) 
							{
								filterselect1 =" != ";
								filterselectvalue1 =   "''";
							}							
							else if (filterselect1.equalsIgnoreCase("is after")) 
							{
								filterselect1 =" > ";
								filterselectvalue1 =   "'"+ filterselectvalue1 + "'";
							}
							else if (filterselect1.equalsIgnoreCase("is on or after")) 
							{
								filterselect1 =" >= ";
								filterselectvalue1 =   "'"+ filterselectvalue1 + "'";
							}
							else if (filterselect1.equalsIgnoreCase("is before")) 
							{
								filterselect1 =" < ";
								filterselectvalue1 =   "'"+ filterselectvalue1 + "'";
							}
							else if (filterselect1.equalsIgnoreCase("is on or before")) 
							{
								filterselect1 =" <= ";
								filterselectvalue1 =   "'"+ filterselectvalue1 + "'";
							}
							else if (filterselect1.equalsIgnoreCase("is blank")) 
							{
								filterselect1 =" = ";
								filterselectvalue1 =   "''";
							}
							else if (filterselect1.equalsIgnoreCase("is not blank")) 
							{
								filterselect1 =" != ";
								filterselectvalue1 =   "''";
							}
							else 
							{
								filterselectvalue1 =   ""+ filterselectvalue1 + "";
							}
							

					
											
						//q = q + " and " + _Field + " " + filterselect1 + " " + filterselectvalue1;
						
//				System.out.println("q################"+q);		
						
					}
					
					if (filterselectvalue2 !="") 
					{					
						//String _Field=Field;
						if (Types.equals("number"))
						{
							_Field =  "(" + _Field + ")";
							filterselectvalue2 =  " toFloat32OrZero('" + filterselectvalue2 + "'))";
							
							
//							System.out.println("_Field2::::"+_Field);
//							System.out.println("filterselectvalue2::::"+filterselectvalue2);
						}
						else if (Types.equals("Date")) 
						{
							filterselectvalue2 =  " toDateTime('" + filterselectvalue2 + "')";
						}
						else
						{
							
						}
							if (filterselect2.equalsIgnoreCase("contains")) 
							{
								filterselect2 =" like ";
								filterselectvalue2 =   "'"+ filterselectvalue2 + "%'";
							}
							else if (filterselect2.equalsIgnoreCase("does not contain")) 
							{
								filterselect2 =" NOT like ";
								filterselectvalue2 =   "'"+ filterselectvalue2 + "%'";
							}
							else if (filterselect2.equalsIgnoreCase("starts with")) 
							{
								filterselect2 =" like ";
								filterselectvalue2 =   "'%"+ filterselectvalue2 + "'";
							}
							else if (filterselect2.equalsIgnoreCase("does not start with")) 
							{
								filterselect2 =" NOT like ";
								filterselectvalue2 =   "'%"+ filterselectvalue2 + "'";
							}
							else if (filterselect2.equalsIgnoreCase("is")) 
							{
								filterselect2 =" = ";
								filterselectvalue2 =   "'"+ filterselectvalue2 + "'";
							}
							else if (filterselect2.equalsIgnoreCase("is not")) 
							{
								filterselect2 =" != ";
								filterselectvalue2 =   "'"+ filterselectvalue2 + "'";
							}
							else if (filterselect2.equalsIgnoreCase("is null")) 
							{
								filterselect2 =" isNull("+_Field+") ";
								filterselectvalue2 =   " ";
							}
							else if (filterselect2.equalsIgnoreCase("is not null")) 
							{
								filterselect2 =" isNotNull("+_Field+") ";
								filterselectvalue2 =   " ";
							}
							else if (filterselect2.equalsIgnoreCase("is empty")) 
							{
								filterselect2 =" = ";
								filterselectvalue2 =   "''";
							}
							else if (filterselect2.equalsIgnoreCase("is not empty")) 
							{
								filterselect2 =" != ";
								filterselectvalue2 =   "''";
							}							
							else if (filterselect2.equalsIgnoreCase("is after")) 
							{
								filterselect2 =" > ";
								filterselectvalue2 =   "'"+ filterselectvalue2 + "'";
							}
							else if (filterselect2.equalsIgnoreCase("is on or after")) 
							{
								filterselect2 =" >= ";
								filterselectvalue2 =   "'"+ filterselectvalue2 + "'";
							}
							else if (filterselect2.equalsIgnoreCase("is before")) 
							{
								filterselect2 =" < ";
								filterselectvalue2 =   "'"+ filterselectvalue2 + "'";
							}
							else if (filterselect2.equalsIgnoreCase("is on or before")) 
							{
								filterselect2 =" <= ";
								filterselectvalue2 =   "'"+ filterselectvalue2 + "'";
							}
							else if (filterselect2.equalsIgnoreCase("is blank")) 
							{
								filterselect2 =" = ";
								filterselectvalue2 =   "''";
							}
							else if (filterselect2.equalsIgnoreCase("is not blank")) 
							{
								filterselect2 =" != ";
								filterselectvalue2 =   "''";
							}
							else 
							{
								filterselectvalue2 =   ""+ filterselectvalue2 + "";
							}
							
						//}
						
						q = q + " and (" + _Field + " " + filterselect1 + " " + filterselectvalue1;
						
						q = q + andorvalue + _Field + " " + filterselect2 + " " + filterselectvalue2+")";
					}
					else 
					{
						q = q + " and " + _Field + " " + filterselect1 + " " + filterselectvalue1;
					}
					

					//System.out.println( Types + ":" + Field  + ":" + filterselect1  + ":" + filterselect2  + ":" + filterselectvalue2);
				 
				}
				else if (filterselecttypevalue.equalsIgnoreCase("basicfiltering")) 					
				{
					
					
					String basicdata_value_temp ="";
					
					int count =0;
					
					for (JsonNode jsonNode1 : basicdata) 
					{
						for (JsonNode jsonNode2 : jsonNode1) 
						{
							
							int jsonNode2_length = jsonNode1.size();
//							System.out.println("basicdata_value jsonNode1  "+jsonNode2_length);
							 String basicdata_value_ = jsonNode2.get("BasicFilterValue").asText();
//							System.out.println("basicdata_value   "+basicdata_value_);
							
							if (jsonNode2_length >= 2)
							{
//								System.out.println("basicdata_flag:::::   "+basicdata_flag);
								
								
								if(count==0) 
								{
									basicdata_value_temp =   basicdata_value_ ;
								}
								else 
								{
									basicdata_value_temp  += "' "+" , " + " '"+ basicdata_value_;
								}
								
							
								basicdata_flag = 1;
							}
							else 
							{
							
								basicdata_value_temp =   basicdata_value_ ;
							
							}
							
							
							count++;
							
						}
					}
					
					
					
					
					
					q = q + " and "+  _Field + " in ( '" + basicdata_value_temp+ "')   " ;
					
					System.out.println("q########"+q);
							
//							+ "(select "+_Field+" from "
//							
//							+ "(select count(),"+_Field+"  from cafebot."+table+"  group by "+_Field+" "
//								
//							+ "order by count() Desc  limit "+basic_userlimit+" )   )  ";

					//+ "(select count(),"+_Field+"  from cafebot."+table+"  group by "+_Field+" order by count() Desc  limit "+basic_userlimit+" )) ";
//				
					
				}
				else if (filterselecttypevalue.equalsIgnoreCase("topn")) 
				{
					
					if (filtertopn.equalsIgnoreCase("top")) 
					{
						//q = q +  _Field + ""
						q = q + " and "+  _Field + ""
						+ " in "
						+ "(select "+_Field+" from "
						+ "(select count(),"+_Field+"  from cafebot."+table+"  group by "+_Field+" order by count() Desc  limit "+filtertopvalue+" )   )  ";
					}
					else if(filtertopn.equalsIgnoreCase("bottom")) 
					{
						q = q + " and "+  _Field + ""
								+ " in "
								+ "(select "+_Field+" from "
								+ "(select count(),"+_Field+"  from cafebot."+table+"  group by "+_Field+" order by count() ASC  limit "+filtertopvalue+" )   )  ";
					}
					
					
				}
			}	
			}
			
		}
		catch (Exception e) {
			
		}
		
		
		
		
		this.where = q;
	}
	
	
	public String getFields() {
		return fields;
	}
	public void setFields(String field) {
		//this.setFields(((sql.getFields() == null) ? "" : sql.getFields()) + field + ","); //Agent_No
		this.fields = ((this.getFields() == null) ? "" : this.getFields()) + field + ",";
	}
	
	public String getAgg() {
		if (this.agg==null)
			return "";
		else
			return this.agg;
	}
	
	public void setAgg(String agg,String field) {
		
		//Avg(toFloat32OrZero(age))
		String a = agg + "(toFloat32OrZero(" + field + ")) as " + agg + "_" + field.trim() ; //sum(age) |
		//sql.setAgg(((sql.getAgg() == null) ? "" : sql.getAgg()) + a + ","); //count(salary), sum(age),
		
		this.agg = ((this.getAgg() == null) ? "" : this.getAgg()) + a + ",";
	}
	
	
    
	public String getAggColumnlist() 
	{
		if (this.aggColumnlist==null)
			return "";
		else
			return this.aggColumnlist;
	}

	public void setAggColumnlist(String agg,String field) {
		this.aggColumnlist = ((this.getAggColumnlist() == null) ? "" : this.getAggColumnlist())+field  + ",";
	}
	
	

	
	public String getGroup() {
		if (this.group==null)
			return "";
		else
			return this.group;
	}
	
	public void setGroup() {
		this.group = ((this.getFields() == null) ? " " : this.getFields()) + ",";
	}

	/*
	 * public String getSelect() { return select; } public void setSelect(String
	 * select) { this.select = select; }
	 */
	public String getTable() {
		return table;
	}
	public void setTable(String table) {
		this.table = table;
	}


	public String getAggr() {
		return aggr;
	}


	public void setAggr(String aggr) {
		this.aggr = aggr;
	}


	public String getXdataType() {
		return xdataType;
	}


	public void setXdataType(String xdataType) {
		this.xdataType = xdataType;
	}


	public String getX_Field() {
		return X_Field;
	}


	public void setX_Field(String x_Field) {
		X_Field = x_Field;
	}

	
    
}