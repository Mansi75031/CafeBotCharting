package in.easydata.charts;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hyjavacharts.model.highcharts.series.seriespie.Data;

import in.easydata.DBConClickHouse;
import in.easydata.DBconnection;


public class GetDataHighcharts {
	
	static DBConClickHouse dbcon = new DBConClickHouse();
	static Connection con = dbcon.getConnection();

	static DBconnection dbconpg = new DBconnection();
	static Connection conpg = dbconpg.getConnection();
	
//	static Connection conpg2 = dbconpg.getConnection_2();
	
//	static Connection hive_con = dbconpg.getConnection_hive();
	
	
//	public List<List<com.hyjavacharts.model.highcharts.series.seriesbar.Data>> getSeriesDataBarbin(String sqlQuery , int isbin) {
//
//		PreparedStatement ps = null;
//
//		List<List<com.hyjavacharts.model.highcharts.series.seriesbar.Data>> lsmain = new ArrayList<List<com.hyjavacharts.model.highcharts.series.seriesbar.Data>>();
////		List<List<List<com.hyjavacharts.model.highcharts.series.seriesbar.Data>>> lsmain_ = new ArrayList<List<List<com.hyjavacharts.model.highcharts.series.seriesbar.Data>>>();
//
//		System.out.println("sqlQuery::::::before split:::::#######" + sqlQuery);
//
//			String sqlbin[] = sqlQuery.split("#_#_#");
//		
//			
//			ArrayList<com.hyjavacharts.model.highcharts.series.seriesbar.Data> array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriesbar.Data>();
//		
//
//			
//			for (int j = 0; j < sqlbin.length; j++) 
//			{
//				
//				array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriesbar.Data>();
//				
//				
//				 //lsmain = new ArrayList<List<com.hyjavacharts.model.highcharts.series.seriesbar.Data>>();
//				String sqlbin_ = sqlbin[j];
//			
//				String sql[] = sqlbin_.split("#_#");
//
////			System.out.println("sql len::::" + sql);
//
//			for (int k = 0; k < sql.length; k++) 
//			{
//				sqlQuery = sql[k];
//
//				System.out.println("sqlQuery:::::::::::" + sqlQuery);
//
//				
//				try {
////					System.out.println("sqlQuery:::::::::::#######getSeriesDataBar" + sqlQuery);
//					ps = con.prepareStatement(sqlQuery);
//					ResultSet rs = ps.executeQuery();
//					ResultSetMetaData rsmd = rs.getMetaData();
//
//					int count = 1;
//
//					while (rs.next()) {
//
//						array.add(new com.hyjavacharts.model.highcharts.series.seriesbar.Data().setName(rs.getString(1))
//								.setY(rs.getDouble(2)));
//					
//						count++;
//						
//					}
//
//					
//
//					rs.close();
//					ps.close();
//
//				} catch (SQLException e) {
//					// TODO Auto-generated catch block
//					e.printStackTrace();
//				}
//				
//			}
//			
//			lsmain.add(array);
//			
//			
//			
//			}
//
//		return lsmain;
//
//	}
	
	public List<List<com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data>> getSeriesDataColumnPyramid(String sqlQuery,int isbin ,String properties_) throws SQLException {

		double value_conversion =0;
        try 
        {
			
			JsonFactory jsonFactory = new JsonFactory();
			ObjectMapper objectMapper = new ObjectMapper(jsonFactory);
			JsonNode properties = objectMapper.readTree(properties_);
			
			if (properties.isArray()) {
				
				for (JsonNode jsonNode_properties : properties) {

					value_conversion =Integer.parseInt(jsonNode_properties.get("value_conversion").asText());// jsonNode_properties.get("value_conversion").asText();
			
				}

			}
		
		}catch (Exception e) {
			// TODO: handle exception
		}
		
		System.out.println("value_conversion      ##### "+value_conversion);
		
		
		
		
		
		PreparedStatement ps = null;
		
//		PreparedStatement ps1 = null;
		
		List<List<com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data>> lsmain = new ArrayList<List<com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data>>();

		System.out.println("sqlQuery::::::before split:::::#######" + sqlQuery);
		
		
//		String query = "CREATE TABLE IF NOT EXISTS employee ( eid int, name String, salary String, destignation String) COMMENT ‘Employee details’ ROW FORMAT DELIMITED"
//		         +" FIELDS TERMINATED BY ‘\t’ LINES TERMINATED BY ‘\n’STORED AS TEXTFILE";
//		
//		System.out.println("query::::::::#######" + query);
//		
//		 // create statement
//		ps1 = hive_con.prepareStatement(query);
//		ps1.executeQuery();
//	
//		hive_con.close();
		
		
		
		
		
		

		if(isbin == 1)
			{
				
	
//				System.out.println("sqlQuery::::::before split:::::#######" + sqlQuery);
	
					String sqlbin[] = sqlQuery.split("#_#_#");
								
					ArrayList<com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data> array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data>();
				
					for (int j = 0; j < sqlbin.length; j++) 
					{					
						array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data>();
	
						String sqlbin_ = sqlbin[j];
					
						String sql[] = sqlbin_.split("#_#");
	
					for (int k = 0; k < sql.length; k++) 
					{
						sqlQuery = sql[k];
						
						if(k < 2)
						{
							System.out.println("sqlQuery:::::::::::" + sqlQuery);
							
						}
	
						
						
						try {
							ps = con.prepareStatement(sqlQuery);
							ResultSet rs = ps.executeQuery();
							ResultSetMetaData rsmd = rs.getMetaData();
	
							int count = 1;
							double value = 0;
							while (rs.next()) {
								
									value = rs.getDouble(2);
									if(value_conversion > 0)
									{
									if(value > value_conversion)
									{
										
										value = (value_conversion / value);
										
									}
									else
									{
										value = (value * value_conversion);
									}
									}
									
	
								array.add(new com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data().setName(rs.getString(1))
										.setY(value));
							
								count++;
								
							}						
	
							rs.close();
							ps.close();
	
						} catch (SQLException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
						}
						
					}
					
					lsmain.add(array);
													
					}
			}
			else
			{
		String sql[] = sqlQuery.split("#_#");

//		System.out.println("sql len::::" + sql);

		for (int k = 0; k < sql.length; k++) {
			sqlQuery = sql[k];

//			System.out.println("sqlQuery:::::::::::" + sqlQuery);

			ArrayList<com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data> array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data>();

			try {
				System.out.println("sqlQuery:::::::::::#######getSeriesDataBar" + sqlQuery);
				ps = con.prepareStatement(sqlQuery);
				ResultSet rs = ps.executeQuery();
				ResultSetMetaData rsmd = rs.getMetaData();

				int count = 1;
				double value = 0;
				while (rs.next()) {
					
						value = rs.getDouble(2);
						if(value_conversion > 0)
						{
						if(value > value_conversion)
						{
							
							value = (value_conversion / value);
							
						}
						else
						{
							value = (value * value_conversion);
						}
						}
						

					array.add(new com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data().setName(rs.getString(1))
							.setY(value));

					count++;
				}

				lsmain.add(array);

//				System.out.println("array:::::" + array.toString());

				rs.close();
				ps.close();

			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		}
			}
//		System.out.println("lsmain::::::" + lsmain.size());
		// return array;

		return lsmain;

	}
	
//	public List<List<com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data>> getSeriesDataColumnPyramidbin(String sqlQuery ,int isbin) {
//
//		PreparedStatement ps = null;
//
//		List<List<com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data>> lsmain = new ArrayList<List<com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data>>();
//
//		System.out.println("sqlQuery::::::before split:::::#######" + sqlQuery);
//
//		if(isbin == 1)
//		{
//			
//
//			System.out.println("sqlQuery::::::before split:::::#######" + sqlQuery);
//
//				String sqlbin[] = sqlQuery.split("#_#_#");
//							
//				ArrayList<com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data> array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data>();
//			
//				for (int j = 0; j < sqlbin.length; j++) 
//				{					
//					array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data>();
//
//					String sqlbin_ = sqlbin[j];
//				
//					String sql[] = sqlbin_.split("#_#");
//
//				for (int k = 0; k < sql.length; k++) 
//				{
//					sqlQuery = sql[k];
//
//					System.out.println("sqlQuery:::::::::::" + sqlQuery);
//					
//					try {
//						ps = con.prepareStatement(sqlQuery);
//						ResultSet rs = ps.executeQuery();
//						ResultSetMetaData rsmd = rs.getMetaData();
//
//						int count = 1;
//
//						while (rs.next()) {
//
//							array.add(new com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data().setName(rs.getString(1))
//									.setY(rs.getDouble(2)));
//						
//							count++;
//							
//						}						
//
//						rs.close();
//						ps.close();
//
//					} catch (SQLException e) {
//						// TODO Auto-generated catch block
//						e.printStackTrace();
//					}
//					
//				}
//				
//				lsmain.add(array);
//												
//				}
//		}
//		else
//		{
//		String sql[] = sqlQuery.split("#_#");
//
////		System.out.println("sql len::::" + sql);
//
//		for (int k = 0; k < sql.length; k++) {
//			sqlQuery = sql[k];
//
//			System.out.println("sqlQuery:::::::::::" + sqlQuery);
//
//			ArrayList<com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data> array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data>();
//
//			try {
//				System.out.println("sqlQuery:::::::::::#######getSeriesDataBar" + sqlQuery);
//				ps = con.prepareStatement(sqlQuery);
//				ResultSet rs = ps.executeQuery();
//				ResultSetMetaData rsmd = rs.getMetaData();
//
//				int count = 1;
//
//				while (rs.next()) {
//
//					array.add(new com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data().setName(rs.getString(1))
//							.setY(rs.getDouble(2)));
//
//					count++;
//				}
//
//				lsmain.add(array);
//
//				System.out.println("array:::::" + array.toString());
//
//				rs.close();
//				ps.close();
//
//			} catch (SQLException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//
//		}
//		}
////		System.out.println("lsmain::::::" + lsmain.size());
//		// return array;
//
//		return lsmain;
//
//	}
	
	
	public List<List<com.hyjavacharts.model.highcharts.series.seriesfunnel.Data>> getSeriesDataFunnel3D(String sqlQuery ,int isbin ,String properties_) {

		
		double value_conversion =0;
        try 
        {
			
			JsonFactory jsonFactory = new JsonFactory();
			ObjectMapper objectMapper = new ObjectMapper(jsonFactory);
			JsonNode properties = objectMapper.readTree(properties_);
			
			if (properties.isArray()) {
				
				for (JsonNode jsonNode_properties : properties) {

					value_conversion =Integer.parseInt(jsonNode_properties.get("value_conversion").asText());// jsonNode_properties.get("value_conversion").asText();
			
				}

			}
		
		}catch (Exception e) {
			// TODO: handle exception
		}
		
		System.out.println("value_conversion      ##### "+value_conversion);
		
		
		
		PreparedStatement ps = null;

		List<List<com.hyjavacharts.model.highcharts.series.seriesfunnel.Data>> lsmain = new ArrayList<List<com.hyjavacharts.model.highcharts.series.seriesfunnel.Data>>();

		System.out.println("sqlQuery::::::before split:::::#######" + sqlQuery);
		if(isbin == 1)
		{
			

//			System.out.println("sqlQuery::::::before split:::::#######" + sqlQuery);

				String sqlbin[] = sqlQuery.split("#_#_#");
							
				ArrayList<com.hyjavacharts.model.highcharts.series.seriesfunnel.Data> array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriesfunnel.Data>();
			
				for (int j = 0; j < sqlbin.length; j++) 
				{					
					array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriesfunnel.Data>();

					String sqlbin_ = sqlbin[j];
				
					String sql[] = sqlbin_.split("#_#");

				for (int k = 0; k < sql.length; k++) 
				{
					sqlQuery = sql[k];

					if(k < 2)
					{
						System.out.println("sqlQuery:::::::::::" + sqlQuery);
						
					}					
					
					try {
						ps = con.prepareStatement(sqlQuery);
						ResultSet rs = ps.executeQuery();
						ResultSetMetaData rsmd = rs.getMetaData();

						int count = 1;
						double value = 0;
						while (rs.next()) {
							
						
							value = rs.getDouble(2);
							if(value_conversion > 0)
							{
							if(value > value_conversion)
							{
								
								value = (value_conversion / value);
								
							}
							else
							{
								value = (value * value_conversion);
							}
							}
							

							array.add(new com.hyjavacharts.model.highcharts.series.seriesfunnel.Data().setName(rs.getString(1))
									.setY(value));
						
							count++;
							
						}						

						rs.close();
						ps.close();

					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					
				}
				
				lsmain.add(array);
												
				}
		}
		else
		{

		String sql[] = sqlQuery.split("#_#");

//		System.out.println("sql len::::" + sql);

		for (int k = 0; k < sql.length; k++) {
			sqlQuery = sql[k];

			System.out.println("sqlQuery:::::::::::" + sqlQuery);

			ArrayList<com.hyjavacharts.model.highcharts.series.seriesfunnel.Data> array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriesfunnel.Data>();

			try {
				System.out.println("sqlQuery:::::::::::#######getSeriesDataBar" + sqlQuery);
				ps = con.prepareStatement(sqlQuery);
				ResultSet rs = ps.executeQuery();
				ResultSetMetaData rsmd = rs.getMetaData();

				int count = 1;
				double value = 0;
				while (rs.next()) {
					
				
					value = rs.getDouble(2);
					if(value_conversion > 0)
					{
					if(value > value_conversion)
					{
						
						value = (value_conversion / value);
						
					}
					else
					{
						value = (value * value_conversion);
					}
					}
					

					array.add(new com.hyjavacharts.model.highcharts.series.seriesfunnel.Data().setName(rs.getString(1))
							.setY(value));

					count++;
				}

				lsmain.add(array);

//				System.out.println("array:::::" + array.toString());

				rs.close();
				ps.close();

			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		}
		}

		return lsmain;

	}
	
//	public List<List<com.hyjavacharts.model.highcharts.series.serieswordcloud.Data>> getSeriesDataWordCloud(String sqlQuery) {
//
//		PreparedStatement ps = null;
//
//		List<List<com.hyjavacharts.model.highcharts.series.serieswordcloud.Data>> lsmain = new ArrayList<List<com.hyjavacharts.model.highcharts.series.serieswordcloud.Data>>();
//
//		System.out.println("sqlQuery::::::before split:::::#######" + sqlQuery);
//
//		String sql[] = sqlQuery.split("#_#");
//
////		System.out.println("sql len::::" + sql);
//
//		for (int k = 0; k < sql.length; k++) {
//			sqlQuery = sql[k];
//
//			System.out.println("sqlQuery:::::::::::" + sqlQuery);
//
//			ArrayList<com.hyjavacharts.model.highcharts.series.serieswordcloud.Data> array = new ArrayList<com.hyjavacharts.model.highcharts.series.serieswordcloud.Data>();
//
//			try {
//				System.out.println("sqlQuery:::::::::::#######getSeriesDataBar" + sqlQuery);
//				ps = con.prepareStatement(sqlQuery);
//				ResultSet rs = ps.executeQuery();
//				ResultSetMetaData rsmd = rs.getMetaData();
//
//				int count = 1;
//
//				while (rs.next()) {
//
//					array.add(new com.hyjavacharts.model.highcharts.series.serieswordcloud.Data().setName(rs.getString(1))
//							.setId(rs.getString(2)));
//
//					count++;
//				}
//
//				lsmain.add(array);
//
//				System.out.println("array:::::" + array.toString());
//
//				rs.close();
//				ps.close();
//
//			} catch (SQLException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//
//		}
//
////		System.out.println("lsmain::::::" + lsmain.size());
//		// return array;
//
//		return lsmain;
//
//	}
	
	public int buildsingleChart(String chartQuery, String chartType, String containerid ,String aggFieldNode_)
	{

		int chartModel_ = 0;

		int globalOptions = 0;
		int chartOptions = 0;
		//int containerid1 = 0;

		if (chartType.equals("chartcard16")) {
			chartOptions = getSeriessinglvalue(chartQuery , aggFieldNode_);
		}

		chartModel_ = chartOptions;
		// chartModel_=containerid1;

//		System.out.println("globalOptions:::::" + globalOptions);

//		System.out.println("chartOptions:::::" + chartOptions);

//		System.out.println("chartModel_:::::" + chartModel_);
		

		return chartModel_;
		
	}

	
	public List<Number> getSeriesGauge(String sqlQuery ,String properties_) {
		
		
		double value_conversion =0;
        try 
        {
			
			JsonFactory jsonFactory = new JsonFactory();
			ObjectMapper objectMapper = new ObjectMapper(jsonFactory);
			JsonNode properties = objectMapper.readTree(properties_);
			
			if (properties.isArray()) {
				
				for (JsonNode jsonNode_properties : properties) {

					value_conversion =Integer.parseInt(jsonNode_properties.get("value_conversion").asText());// jsonNode_properties.get("value_conversion").asText();
			
				}

			}
		
		}catch (Exception e) {
			// TODO: handle exception
		}
		
		System.out.println("value_conversion      ##### "+value_conversion);
		
		List<Number> array = new ArrayList<Number>();
		PreparedStatement ps = null;

		double count = 0;
		String sql[] = sqlQuery.split("#_#");

//		System.out.println("sql len::::" + sql);

		for (int k = 0; k < sql.length; k++) {
			sqlQuery = sql[k];
			
			try {
				
				System.out.println("sqlQuery:::::::::::#######" + sqlQuery);

				ps = con.prepareStatement(sqlQuery);

				ResultSet rs = ps.executeQuery();
				double value = 0;
				while (rs.next()) {

//					value = rs.getDouble(1);
//					if(value_conversion > 0)
//					{
//					if(value > value_conversion)
//					{
//						
//						value = (value_conversion / value);
//						
//					}
//					else
//					{
//						value = (value * value_conversion);
//					}
//					}
					
					
				   count = rs.getDouble(1);
					array.add(count);
				}

				rs.close();
				ps.close();

			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			
		}
//		System.out.println("sqlQuery::::::" + sqlQuery);
		

		
//		System.out.println("count_:::::::::::::::#######" + count_);
//		System.out.println("count:::::::::::::::#######" + count);
		return array;

	}
	
	public List<String> getSerieswordCloud(String sqlQuery) {
		List<String> array = new ArrayList<String>();
		PreparedStatement ps = null;

		String count = "";
		
//		System.out.println("sqlQuery::::::" + sqlQuery);
		

		try {
//			System.out.println("sqlQuery:::::::::::#######" + sqlQuery);

			ps = con.prepareStatement(sqlQuery);

			ResultSet rs = ps.executeQuery();

			while (rs.next()) {

			   count = rs.getString(1);
				array.add(count);
			}

			rs.close();
			ps.close();

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
//		System.out.println("count_:::::::::::::::#######" + count_);
//		System.out.println("count:::::::::::::::#######" + count);
		return array;

	}

	public int getSeriessinglvalue(String sqlQuery ,String aggFieldNode_) {
		//ArrayList<Data> array = new ArrayList<Data>();
		PreparedStatement ps = null;

		int count = 0;
		float count_ = 0;
//		System.out.println("sqlQuery::::::" + sqlQuery);
		

		try {
//			System.out.println("sqlQuery:::::::::::#######" + sqlQuery);

			ps = con.prepareStatement(sqlQuery);

			ResultSet rs = ps.executeQuery();

			while (rs.next()) {
//				     System.out.print(rs.getString(1));
				if (aggFieldNode_.equalsIgnoreCase("avg") || aggFieldNode_.equalsIgnoreCase("medianTDigest"))
				{
					count_ = rs.getFloat(1);
					//count = (int)Math.round(count_);
					count = (int) count_;
				}
				else
				{
					count = rs.getInt(1);
				}
				
				
			}

			rs.close();
			ps.close();

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return count;

	}

	public ArrayList<Data> getSeriesData(String sqlQuery ,String properties_) {
		
		double value_conversion =0;
        try 
        {
			
			JsonFactory jsonFactory = new JsonFactory();
			ObjectMapper objectMapper = new ObjectMapper(jsonFactory);
			JsonNode properties = objectMapper.readTree(properties_);
			
			if (properties.isArray()) {
				
				for (JsonNode jsonNode_properties : properties) {

					value_conversion =Integer.parseInt(jsonNode_properties.get("value_conversion").asText());// jsonNode_properties.get("value_conversion").asText();
			
				}

			}
		
		}catch (Exception e) {
			// TODO: handle exception
		}
		
		System.out.println("value_conversion      ##### "+value_conversion);
		
		
		
		ArrayList<Data> array = new ArrayList<Data>();

		PreparedStatement ps = null;

		try {
			ps = con.prepareStatement(sqlQuery);
			// sqlQuery= "SELECT COUNT (item_category_name) FROM cafebot.PT84430568S";
//			System.out.println("sqlQuery:::::::::::" + sqlQuery);
			ResultSet rs = ps.executeQuery();
            double value =0;
			while (rs.next()) {
				

			
				value = rs.getDouble(2);
				if(value_conversion > 0)
				{
				if(value > value_conversion)
				{
					
					value = (value_conversion / value);
					
				}
				else
				{
					value = (value * value_conversion);
				}
				}
				
//				     System.out.print(rs.getString(1));
				array.add(new Data().setName(rs.getString(1)).setY(value));
			}
			rs.close();
			ps.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return array;
	}

	public List<List<com.hyjavacharts.model.highcharts.series.seriesscatter.Data>> getSeriesDataScatter(
			String sqlQuery ,int isbin ,String properties_) {
		
		double value_conversion =0;
        try 
        {
			
			JsonFactory jsonFactory = new JsonFactory();
			ObjectMapper objectMapper = new ObjectMapper(jsonFactory);
			JsonNode properties = objectMapper.readTree(properties_);
			
			if (properties.isArray()) {
				
				for (JsonNode jsonNode_properties : properties) {

					value_conversion =Integer.parseInt(jsonNode_properties.get("value_conversion").asText());// jsonNode_properties.get("value_conversion").asText();
			
				}

			}
		
		}catch (Exception e) {
			// TODO: handle exception
		}
		
		System.out.println("value_conversion      ##### "+value_conversion);
		
		
		

		PreparedStatement ps = null;

		List<List<com.hyjavacharts.model.highcharts.series.seriesscatter.Data>> lsmain = new ArrayList<List<com.hyjavacharts.model.highcharts.series.seriesscatter.Data>>();

		
		
		
		if(isbin == 1)
		{			
			System.out.println("sqlQuery::::::before split:::::#######" + sqlQuery);

				String sqlbin[] = sqlQuery.split("#_#_#");
							
				
				for (int j = 0; j < sqlbin.length; j++) 
				{					
					ArrayList<com.hyjavacharts.model.highcharts.series.seriesscatter.Data> array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriesscatter.Data>();
					
					String sqlbin_ = sqlbin[j];
				
					String sql[] = sqlbin_.split("#_#");

				for (int k = 0; k < sql.length; k++) 
				{
					sqlQuery = sql[k];
					if(k < 2)
					{
						System.out.println("sqlQuery:::::::::::" + sqlQuery);
						
					}
//					System.out.println("sqlQuery:::::::::::" + sqlQuery);
					
					try {
						ps = con.prepareStatement(sqlQuery);
						ResultSet rs = ps.executeQuery();
						ResultSetMetaData rsmd = rs.getMetaData();

						int count = 1;
						double value =0;
						while (rs.next()) {
							
						
							value = rs.getDouble(2);
							if(value_conversion > 0)
							{
							if(value > value_conversion)
							{
								
								value = (value_conversion / value);
								
							}
							else
							{
								value = (value * value_conversion);
							}
							}

							array.add(new com.hyjavacharts.model.highcharts.series.seriesscatter.Data().setName(rs.getString(1))
									.setY(value));
						
							count++;
							
						}						

						rs.close();
						ps.close();

					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					
				}
				
				lsmain.add(array);
												
				}
		}
		else
		{
//		System.out.println("sqlQuery::::::wo split:::::#######" + sqlQuery);

		String sql[] = sqlQuery.split("#_#");

//		System.out.println("sql len::::" + sql);

		for (int k = 0; k < sql.length; k++) {
			sqlQuery = sql[k];

//			System.out.println("sqlQuery:::::::::::" + sqlQuery);

			ArrayList<com.hyjavacharts.model.highcharts.series.seriesscatter.Data> array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriesscatter.Data>();


			try {
//				System.out.println("sqlQuery:::::::::::#######" + sqlQuery);
//

				ps = con.prepareStatement(sqlQuery);

				ResultSet rs = ps.executeQuery();
				ResultSetMetaData rsmd = rs.getMetaData();

				int count = 1;
				double value =0;
				while (rs.next()) {
					
					
					
					value = rs.getDouble(2);
					if(value_conversion > 0)
					{
					if(value > value_conversion)
					{
						
						value = (value_conversion / value);
						
					}
					else
					{
						value = (value * value_conversion);
					}
					}

					array.add(new com.hyjavacharts.model.highcharts.series.seriesscatter.Data().setName(rs.getString(1))
							.setY(value));

					count++;
				}

				lsmain.add(array);

				//System.out.println("array:::::" + array.toString());

				rs.close();
				ps.close();

			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		}
		}
//		System.out.println("lsmain::::::" + lsmain.size());
		// return array;

		return lsmain;

	}
	
	
//	public List<List<com.hyjavacharts.model.highcharts.series.seriesbullet.Data>> getSeriesDataBullet(String sqlQuery ,String properties_) {
//
//		PreparedStatement ps = null;
//
//		List<List<com.hyjavacharts.model.highcharts.series.seriesbullet.Data>> lsmain = new ArrayList<List<com.hyjavacharts.model.highcharts.series.seriesbullet.Data>>();
//
////		System.out.println("sqlQuery::::::wo split:::::#######" + sqlQuery);
//
//		String sql[] = sqlQuery.split("#_#");
//
////		System.out.println("sql len::::" + sql);
//
//		for (int k = 0; k < sql.length; k++) {
//			sqlQuery = sql[k];
//
////			System.out.println("sqlQuery:::::::::::" + sqlQuery);
//
//			ArrayList<com.hyjavacharts.model.highcharts.series.seriesbullet.Data> array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriesbullet.Data>();
//
//
//			try {
////				System.out.println("sqlQuery:::::::::::#######" + sqlQuery);
//
//
////				System.out.println("sqlQuery12:::::::::::#######" + sqlQuery);
//				ps = con.prepareStatement(sqlQuery);
//
//				ResultSet rs = ps.executeQuery();
//				ResultSetMetaData rsmd = rs.getMetaData();
//
//				int count = 1;
//
//				while (rs.next()) {
//					array.add(new com.hyjavacharts.model.highcharts.series.seriesbullet.Data()
//							
//							//.setName(rs.getString(1))
//							
//					        .setX(rs.getDouble(2))
//					       // .setY(rs.getDouble(3))
//					        .setName(rs.getString(1))
//					      //  .setZ(rs.getInt(4))
//					       // .setName(rs.getString(1))
//					        );
//							
//					count++;
//				}
//
//				lsmain.add(array);
//
//				rs.close();
//				ps.close();
//
//			} catch (SQLException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//
//		}
//		//array.add(new Data().setX(95).setY(95).setZ(13.8).setName("BE").setDescription("Belgium"));
////		System.out.println("lsmain::::::" + lsmain.size());
//		// return array;
//
//		return lsmain;
//
//	}

	public List<List<com.hyjavacharts.model.highcharts.series.seriesbubble.Data>> getSeriesDataBubble(String sqlQuery ,int isbin ,String properties_) {

		double value_conversion =0;
        try 
        {
			
			JsonFactory jsonFactory = new JsonFactory();
			ObjectMapper objectMapper = new ObjectMapper(jsonFactory);
			JsonNode properties = objectMapper.readTree(properties_);
			
			if (properties.isArray()) {
				
				for (JsonNode jsonNode_properties : properties) {

					value_conversion =Integer.parseInt(jsonNode_properties.get("value_conversion").asText());// jsonNode_properties.get("value_conversion").asText();
			
				}

			}
		
		}catch (Exception e) {
			// TODO: handle exception
		}
		
		System.out.println("value_conversion      ##### "+value_conversion);
		
		
		
		PreparedStatement ps = null;

		List<List<com.hyjavacharts.model.highcharts.series.seriesbubble.Data>> lsmain = new ArrayList<List<com.hyjavacharts.model.highcharts.series.seriesbubble.Data>>();

		
		if(isbin == 1)
		{			
			System.out.println("sqlQuery::::::before split:::::#######" + sqlQuery);

				String sqlbin[] = sqlQuery.split("#_#_#");
							
				
				for (int j = 0; j < sqlbin.length; j++) 
				{					
					ArrayList<com.hyjavacharts.model.highcharts.series.seriesbubble.Data> array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriesbubble.Data>();
					
					String sqlbin_ = sqlbin[j];
				
					String sql[] = sqlbin_.split("#_#");

				for (int k = 0; k < sql.length; k++) 
				{
					sqlQuery = sql[k];
					if(k < 2)
					{
						System.out.println("sqlQuery:::::::::::" + sqlQuery);
						
					}
//					System.out.println("sqlQuery:::::::::::" + sqlQuery);
					
					try {
						ps = con.prepareStatement(sqlQuery);
						ResultSet rs = ps.executeQuery();
						ResultSetMetaData rsmd = rs.getMetaData();

						int count = 1;
						double value =0;
						while (rs.next()) {
							
							
							
							value = rs.getDouble(2);
							if(value_conversion > 0)
							{
							if(value > value_conversion)
							{
								
								value = (value_conversion / value);
								
							}
							else
							{
								value = (value * value_conversion);
							}
							}

							array.add(new com.hyjavacharts.model.highcharts.series.seriesbubble.Data()
									.setX(value)
							        .setY(rs.getDouble(3))
							        .setName(rs.getString(1)));
						
							count++;
							
						}						

						rs.close();
						ps.close();

					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					
				}
				
				lsmain.add(array);
												
				}
		}
		else
		{
	
//		System.out.println("sqlQuery::::::wo split:::::#######" + sqlQuery);

		String sql[] = sqlQuery.split("#_#");

//		System.out.println("sql len::::" + sql);

		for (int k = 0; k < sql.length; k++) {
			sqlQuery = sql[k];

//			System.out.println("sqlQuery:::::::::::" + sqlQuery);

			ArrayList<com.hyjavacharts.model.highcharts.series.seriesbubble.Data> array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriesbubble.Data>();


			try {
//				System.out.println("sqlQuery:::::::::::#######" + sqlQuery);


//				System.out.println("sqlQuery12:::::::::::#######" + sqlQuery);
				ps = con.prepareStatement(sqlQuery);

				ResultSet rs = ps.executeQuery();
				ResultSetMetaData rsmd = rs.getMetaData();

				int count = 1;
				double value =0;
				while (rs.next()) {
					
				
					value = rs.getDouble(2);
					if(value_conversion > 0)
					{
					if(value > value_conversion)
					{
						
						value = (value_conversion / value);
						
					}
					else
					{
						value = (value * value_conversion);
					}
					}
					
					
					
					
					array.add(new com.hyjavacharts.model.highcharts.series.seriesbubble.Data()
							
							//.setName(rs.getString(1))
							
					        .setX(value)
					        .setY(rs.getDouble(3))
					        .setName(rs.getString(1))
					      //  .setZ(rs.getInt(4))
					       // .setName(rs.getString(1))
					        );
					
					
//					array.add(new com.hyjavacharts.model.highcharts.series.seriesbubble.Data()
//							.setX(rs.getInt(1))
//							.setY(rs.getInt(2))
//							.setZ(rs.getInt(3))
//							.setName("BE")
//							.setDescription("Belgium")
//							);
					
					count++;
				}

				lsmain.add(array);

				//System.out.println("array:::::" + array.toString());

				rs.close();
				ps.close();

			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		}
		}
		//array.add(new Data().setX(95).setY(95).setZ(13.8).setName("BE").setDescription("Belgium"));
//		System.out.println("lsmain::::::" + lsmain.size());
		// return array;

		return lsmain;

	}

	
	public List<List<com.hyjavacharts.model.highcharts.series.seriesheatmap.Data>> getSeriesDataHeatmap(String sqlQuery ,String properties_) {

		
		double value_conversion =0;
        try 
        {
			
			JsonFactory jsonFactory = new JsonFactory();
			ObjectMapper objectMapper = new ObjectMapper(jsonFactory);
			JsonNode properties = objectMapper.readTree(properties_);
			
			if (properties.isArray()) {
				
				for (JsonNode jsonNode_properties : properties) {

					value_conversion =Integer.parseInt(jsonNode_properties.get("value_conversion").asText());// jsonNode_properties.get("value_conversion").asText();
			
				}

			}
		
		}catch (Exception e) {
			// TODO: handle exception
		}
		
		System.out.println("value_conversion      ##### "+value_conversion);
		
		
		
		PreparedStatement ps = null;

		List<List<com.hyjavacharts.model.highcharts.series.seriesheatmap.Data>> lsmain = new ArrayList<List<com.hyjavacharts.model.highcharts.series.seriesheatmap.Data>>();

		System.out.println("sqlQuery::::::wo split:::::#######" + sqlQuery);

		String sql[] = sqlQuery.split("#_#");

//		System.out.println("sql len::::" + sql);

		for (int k = 0; k < sql.length; k++) {
			sqlQuery = sql[k];

//			System.out.println("sqlQuery:::::::::::" + sqlQuery);

			ArrayList<com.hyjavacharts.model.highcharts.series.seriesheatmap.Data> array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriesheatmap.Data>();


			try {
//				System.out.println("sqlQuery:::::::::::#######" + sqlQuery);


//				System.out.println("sqlQuery12:::::::::::#######" + sqlQuery);
				ps = con.prepareStatement(sqlQuery);

				ResultSet rs = ps.executeQuery();
				ResultSetMetaData rsmd = rs.getMetaData();

				int count = 1;
				double value = 0;
				while (rs.next()) {
					
				
					value = rs.getDouble(3);
					if(value_conversion > 0)
					{
					if(value > value_conversion)
					{
						
						value = (value_conversion / value);
						
					}
					else
					{
						value = (value * value_conversion);
					}
					}
					
					
					array.add(new com.hyjavacharts.model.highcharts.series.seriesheatmap.Data()
							
							//.setName(rs.getString(1))
							 .setName(rs.getString(1))
					        .setClassName(rs.getString(2))
					        .setY(value)
					       
					      //  .setZ(rs.getInt(4))
					       // .setName(rs.getString(1))
					        );
					
					
//					array.add(new com.hyjavacharts.model.highcharts.series.seriesbubble.Data()
//							.setX(rs.getInt(1))
//							.setY(rs.getInt(2))
//							.setZ(rs.getInt(3))
//							.setName("BE")
//							.setDescription("Belgium")
//							);
					
					count++;
				}

				lsmain.add(array);

				//System.out.println("array:::::" + array.toString());

				rs.close();
				ps.close();

			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		}
		//array.add(new Data().setX(95).setY(95).setZ(13.8).setName("BE").setDescription("Belgium"));
//		System.out.println("lsmain::::::" + lsmain.size());
		// return array;

		return lsmain;

	}
	
	public List<List<com.hyjavacharts.model.highcharts.series.seriesarea.Data>> getSeriesDataArea(String sqlQuery ,int isbin ,String properties_) {


		double value_conversion =0;
        try 
        {
			
			JsonFactory jsonFactory = new JsonFactory();
			ObjectMapper objectMapper = new ObjectMapper(jsonFactory);
			JsonNode properties = objectMapper.readTree(properties_);
			
			if (properties.isArray()) {
				
				for (JsonNode jsonNode_properties : properties) {

					value_conversion =Integer.parseInt(jsonNode_properties.get("value_conversion").asText());// jsonNode_properties.get("value_conversion").asText();
			
				}

			}
		
		}catch (Exception e) {
			// TODO: handle exception
		}
		
		System.out.println("value_conversion      ##### "+value_conversion);
		
		
		
		
		
		
		
		
		List<List<com.hyjavacharts.model.highcharts.series.seriesarea.Data>> lsmain = new ArrayList<List<com.hyjavacharts.model.highcharts.series.seriesarea.Data>>();
		PreparedStatement ps = null;
		
		if(isbin == 1)
		{			
			System.out.println("sqlQuery::::::before split:::::#######" + sqlQuery);

				String sqlbin[] = sqlQuery.split("#_#_#");
							
				
				for (int j = 0; j < sqlbin.length; j++) 
				{					
					ArrayList<com.hyjavacharts.model.highcharts.series.seriesarea.Data> array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriesarea.Data>();
					
					String sqlbin_ = sqlbin[j];
				
					String sql[] = sqlbin_.split("#_#");

				for (int k = 0; k < sql.length; k++) 
				{
					sqlQuery = sql[k];
					if(k < 2)
					{
						System.out.println("sqlQuery:::::::::::" + sqlQuery);
						
					}
//					System.out.println("sqlQuery:::::::::::" + sqlQuery);
					
					try {
						ps = con.prepareStatement(sqlQuery);
						ResultSet rs = ps.executeQuery();
						ResultSetMetaData rsmd = rs.getMetaData();

						int count = 1;
						double value =0;
						while (rs.next()) {

							
							value = rs.getDouble(2);
							if(value_conversion > 0)
							{
							if(value > value_conversion)
							{
								
								value = (value_conversion / value);
								
							}
							else
							{
								value = (value * value_conversion);
							}
							}
							
							array.add(new com.hyjavacharts.model.highcharts.series.seriesarea.Data().setName(rs.getString(1))
									.setY(value));
						
							count++;
							
						}						

						rs.close();
						ps.close();

					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					
				}
				
				lsmain.add(array);
												
				}
		}
		else
		{
	
		String sql[] = sqlQuery.split("#_#");

		for (int k = 0; k < sql.length; k++) {
			sqlQuery = sql[k];

			ArrayList<com.hyjavacharts.model.highcharts.series.seriesarea.Data> array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriesarea.Data>();

			try {
				System.out.println("sqlQuery:::::::::::#######" + sqlQuery);

				ps = con.prepareStatement(sqlQuery);

				ResultSet rs = ps.executeQuery();
				ResultSetMetaData rsmd = rs.getMetaData();

				int count = 1;
				double value =0;
				while (rs.next()) {
					
				
					value = rs.getDouble(2);
					if(value_conversion > 0)
					{
					if(value > value_conversion)
					{
						
						value = (value_conversion / value);
						
					}
					else
					{
						value = (value * value_conversion);
					}
					}
					

					array.add(new com.hyjavacharts.model.highcharts.series.seriesarea.Data().setName(rs.getString(1))
							.setY(value));

					count++;
				}

				lsmain.add(array);

				//System.out.println("array:::::" + array.toString());

				rs.close();
				ps.close();

			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}

		}
		}
//		System.out.println("lsmain::::::" + lsmain.size());
		// return array;

		return lsmain;

	}

	public List<List<com.hyjavacharts.model.highcharts.series.seriesline.Data>> getSeriesDataLine(String sqlQuery ,int isbin ,String properties_) {

		
		double value_conversion =0;
        try 
        {
			
			JsonFactory jsonFactory = new JsonFactory();
			ObjectMapper objectMapper = new ObjectMapper(jsonFactory);
			JsonNode properties = objectMapper.readTree(properties_);
			
			if (properties.isArray()) {
				
				for (JsonNode jsonNode_properties : properties) {

					value_conversion =Integer.parseInt(jsonNode_properties.get("value_conversion").asText());// jsonNode_properties.get("value_conversion").asText();
			
				}

			}
		
		}catch (Exception e) {
			// TODO: handle exception
		}
		
		System.out.println("value_conversion      ##### "+value_conversion);
		
		List<List<com.hyjavacharts.model.highcharts.series.seriesline.Data>> lsmain = new ArrayList<List<com.hyjavacharts.model.highcharts.series.seriesline.Data>>();
//		System.out.println("sqlQuery:::::::::::" + sqlQuery);
		
		if(isbin == 1)
		{
			PreparedStatement ps = null;

			System.out.println("sqlQuery::::::before split:::::#######" + sqlQuery);

				String sqlbin[] = sqlQuery.split("#_#_#");
							
				ArrayList<com.hyjavacharts.model.highcharts.series.seriesline.Data> array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriesline.Data>();
			
				for (int j = 0; j < sqlbin.length; j++) 
				{					
					array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriesline.Data>();

					String sqlbin_ = sqlbin[j];
				
					String sql[] = sqlbin_.split("#_#");

				for (int k = 0; k < sql.length; k++) 
				{
					sqlQuery = sql[k];
					if(k < 2)
					{
						System.out.println("sqlQuery:::::::::::" + sqlQuery);
						
					}
//					System.out.println("sqlQuery:::::::::::" + sqlQuery);
					
					try {
						ps = con.prepareStatement(sqlQuery);
						ResultSet rs = ps.executeQuery();
						ResultSetMetaData rsmd = rs.getMetaData();

						int count = 1;
						double value =0;
						while (rs.next()) {
							
							
							value = rs.getDouble(2);
							if(value_conversion > 0)
							{
							if(value > value_conversion)
							{
								
								value = (value_conversion / value);
								
							}
							else
							{
								value = (value * value_conversion);
							}
							}
							

							array.add(new com.hyjavacharts.model.highcharts.series.seriesline.Data().setName(rs.getString(1))
									.setY(value));
						
							count++;
							
						}						

						rs.close();
						ps.close();

					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					
				}
				
				lsmain.add(array);
												
				}
		}
		else
		{
	
		String sql[] = sqlQuery.split("#_#");

//		System.out.println("sql len::::" + sql);
		for (int k = 0; k < sql.length; k++) {
			sqlQuery = sql[k];
			ArrayList<com.hyjavacharts.model.highcharts.series.seriesline.Data> array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriesline.Data>();
			
			PreparedStatement ps = null;

			try {
				ps = con.prepareStatement(sqlQuery);
				ResultSet rs = ps.executeQuery();

				int count = 1;
				double value =0;
				while (rs.next()) {
					
				
					value = rs.getDouble(2);
					if(value_conversion > 0)
					{
					if(value > value_conversion)
					{
						
						value = (value_conversion / value);
						
					}
					else
					{
						value = (value * value_conversion);
					}
					}
					
					
					// System.out.println("key:::"+rs.getString(1));
					// System.out.println("value:::"+rs.getString(2));
					array.add(new com.hyjavacharts.model.highcharts.series.seriesline.Data().setName(rs.getString(1))
							.setY(value));
					// new Data().setX(1).setY(61.41)

					count++;
				}

				lsmain.add(array);
				
				rs.close();
				ps.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		}
		return lsmain;

	}
	
//	public ArrayList<com.hyjavacharts.model.highcharts.series.seriesgauge.Data> getSeriesDataGauge(String sqlQuery) {
//
////		List<List<com.hyjavacharts.model.highcharts.series.seriesline.Data>> lsmain = new ArrayList<List<com.hyjavacharts.model.highcharts.series.seriesline.Data>>();
////		System.out.println("sqlQuery:::::::::::" + sqlQuery);
//		String sql[] = sqlQuery.split("#_#");
//
////		System.out.println("sql len::::" + sql);
//		ArrayList<com.hyjavacharts.model.highcharts.series.seriesgauge.Data> array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriesgauge.Data>();
//		for (int k = 0; k < sql.length; k++) {
//			sqlQuery = sql[k];
////			
////			System.out.println("sqlQuery:::::::::::" + sqlQuery);
//
//			PreparedStatement ps = null;
//
//			try {
//				ps = con.prepareStatement(sqlQuery);
//				ResultSet rs = ps.executeQuery();
//
//				int count = 1;
//
//				while (rs.next()) {
//					// System.out.println("key:::"+rs.getString(1));
//					// System.out.println("value:::"+rs.getString(2));
//					array.add(new com.hyjavacharts.model.highcharts.series.seriesgauge.Data().setName(rs.getString(1))
//							.setY(rs.getDouble(2)));
//					// new Data().setX(1).setY(61.41)
//
//					count++;
//				}
//
////				System.out.println("array:::::" + array.toString());
//
//				rs.close();
//				ps.close();
//			} catch (SQLException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//		}
//		return array;
//
//	}
	


	public List<List<com.hyjavacharts.model.highcharts.series.seriesbar.Data>> getSeriesDataBar(String sqlQuery , int isbin ,String properties_) {

		
		double value_conversion =0;
        try 
        {
			
			JsonFactory jsonFactory = new JsonFactory();
			ObjectMapper objectMapper = new ObjectMapper(jsonFactory);
			JsonNode properties = objectMapper.readTree(properties_);
			
			if (properties.isArray()) {
				
				for (JsonNode jsonNode_properties : properties) {

					value_conversion =Integer.parseInt(jsonNode_properties.get("value_conversion").asText());// jsonNode_properties.get("value_conversion").asText();
			
				}

			}
		
		}catch (Exception e) {
			// TODO: handle exception
		}
		
		System.out.println("value_conversion      ##### "+value_conversion);
		
		
		List<List<com.hyjavacharts.model.highcharts.series.seriesbar.Data>> lsmain = new ArrayList<List<com.hyjavacharts.model.highcharts.series.seriesbar.Data>>();
	
		if(isbin == 1)
		{
			PreparedStatement ps = null;

			System.out.println("sqlQuery::::::before split:::::#######" + sqlQuery);

				String sqlbin[] = sqlQuery.split("#_#_#");
							
				ArrayList<com.hyjavacharts.model.highcharts.series.seriesbar.Data> array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriesbar.Data>();
			
				for (int j = 0; j < sqlbin.length; j++) 
				{					
					array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriesbar.Data>();

					String sqlbin_ = sqlbin[j];
				
					String sql[] = sqlbin_.split("#_#");

				for (int k = 0; k < sql.length; k++) 
				{
					sqlQuery = sql[k];
					if(k < 2)
					{
						System.out.println("sqlQuery:::::::::::" + sqlQuery);
						
					}
//					System.out.println("sqlQuery:::::::::::" + sqlQuery);
					
					try {
						ps = con.prepareStatement(sqlQuery);
						ResultSet rs = ps.executeQuery();
						ResultSetMetaData rsmd = rs.getMetaData();

						int count = 1;
						double value = 0;
						while (rs.next()) {
							
							
							value = rs.getDouble(2);
							if(value_conversion > 0)
							{
							if(value > value_conversion)
							{
								
								value = (value_conversion / value);
								
							}
							else
							{
								value = (value * value_conversion);
							}
							}
							
							

							array.add(new com.hyjavacharts.model.highcharts.series.seriesbar.Data().setName(rs.getString(1))
									.setY(value));
						
							count++;
							
						}						

						rs.close();
						ps.close();

					} catch (SQLException e) {
						// TODO Auto-generated catch block
						e.printStackTrace();
					}
					
				}
				
				lsmain.add(array);
												
				}
		}
		else
		{
			PreparedStatement ps = null;
			
			System.out.println("sqlQuery::::::before split:::::#######" + sqlQuery);
				
		String sql[] = sqlQuery.split("#_#");

			for (int k = 0; k < sql.length; k++) 
			{
				sqlQuery = sql[k];
	
				System.out.println("sqlQuery:::::::::::" + sqlQuery);
	
				ArrayList<com.hyjavacharts.model.highcharts.series.seriesbar.Data> array = new ArrayList<com.hyjavacharts.model.highcharts.series.seriesbar.Data>();
	
				try {
//					System.out.println("sqlQuery:::::::::::#######getSeriesDataBar" + sqlQuery);
					ps = con.prepareStatement(sqlQuery);
					ResultSet rs = ps.executeQuery();
					ResultSetMetaData rsmd = rs.getMetaData();
	
					int count = 1;
					double value = 0;
	
					while (rs.next()) {
						
						value = rs.getDouble(2);
						if(value_conversion > 0)
						{
						if(value > value_conversion)
						{
							
							value = (value_conversion / value);
							
						}
						else
						{
							value = (value * value_conversion);
						}
						}
						
	
						array.add(new com.hyjavacharts.model.highcharts.series.seriesbar.Data().setName(rs.getString(1))
								.setY(value));
	
						count++;
						
					}
	
					lsmain.add(array);
	
					rs.close();
					ps.close();
	
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
	
			}

		}

		return lsmain;

	}
	
	
	public String getBinQuery(String tablename, int bintype, int bin_size, String colname_, String stragg2, String where, Boolean isAgg ,int userlimit) {

		//tablename = "PT84430568S";
		bintype = 0; // 0 bin size // 1 number of bin
		String sqlcountperbin ="";
		int global_count = 0;
//		bin_size = 10;
		int totrowcount = 0;

		SQLPojo sqlpojo = new SQLPojo();
		List<Map<Integer, String>> lsmap = new ArrayList<Map<Integer, String>>();

		Map<Integer, String> binmap = new HashMap<Integer, String>();
		Map<Integer, String> binmap2 = new HashMap<Integer, String>();
		////// ----------bin size---------------------

//		String colname = sqlpojo.getFields();
//		System.out.println("where ##::::::" + where);
//		System.out.println("colname Q::::::" + colname_);
		String colname = colname_.split(",")[0];
//		System.out.println("tablename Q::::::" + tablename);
//		System.out.println("bintype Q::::::" + bintype);
//		System.out.println("bin_size Q::::::" + bin_size);

		String sqldistinctvalue = "select distinct \"" + colname + "\" from cafebot." + tablename + " order by \""
				+ colname + "\" asc";

//		System.out.println("sqldistinctvalue Q::::::" + sqldistinctvalue);

		PreparedStatement ps = null;

		List<String> distinctvaluearray = new ArrayList<String>();

		try {
			ps = con.prepareStatement(sqldistinctvalue);
			ResultSet rs = ps.executeQuery();
			ResultSetMetaData rsmd = rs.getMetaData();

			while (rs.next()) {
				distinctvaluearray.add(rs.getString(1));
			}

//			System.out.println("distinctvaluearray :::::" + distinctvaluearray);

			rs.close();
			ps.close();

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		String totalcountQ = "select count() from cafebot." + tablename;

		try {
			ps = con.prepareStatement(totalcountQ);
			ResultSet rs = ps.executeQuery();

			while (rs.next()) {
				totrowcount = rs.getInt(1);
			}

//			System.out.println("totrowcount :::::" + totrowcount);
			rs.close();
			ps.close();

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		// 0 bin size
		if (bintype == 0) {

			int distinctvalue = 0;
			int bin_index = 1;
			String disvalue = "";
			for (int k = 0; k < distinctvaluearray.size(); k++) {
				if (distinctvalue != (bin_size - 1)) {
					if (distinctvalue == 0) {
						disvalue += "'" + distinctvaluearray.get(k) + "'";

					} else {
						disvalue += ",'" + distinctvaluearray.get(k) + "'";

					}

					distinctvalue++;

				} else {
					if (disvalue.endsWith(",")) {
						disvalue = disvalue.substring(0, disvalue.length() - 1);
					}

					binmap.put(bin_index, disvalue);
					bin_index++;
					disvalue = "";
					distinctvalue = 0;
				}

				binmap.put(bin_index, disvalue);
			}

			if (distinctvalue > 0 && (distinctvalue < bin_size)) {
				binmap.put(bin_index, disvalue);
			}

//			System.out.println("binmap::::" + binmap.toString());

			lsmap.add(binmap);

			// ------------------------

//			System.out.println("totrowcount:::::" + totrowcount);
//			System.out.println("bin_size:::::" + bin_size);

			int total_row_per_bin = bin_size;

//			System.out.println("total_row_per_bin::::::::::" + total_row_per_bin);

			// int total_row_per_bin = total_no_of_bin * bin_size;
			int offset = 0;

			String sql = "";

			String stragg[] = stragg2.split(",");

			System.out.println("len=====" + stragg.length);
//			System.out.println("stragg__________" + stragg.toString());

			for (int k = 0; k < stragg.length; k++) {
				
				offset =0;
				total_row_per_bin = bin_size;
				
				sql += "SELECT " + colname  + ","+ stragg[k].replaceAll( ",$", " ") + " FROM cafebot."
						+ tablename + " WHERE 1=1 " + where;

				if (isAgg) {
					sql = sql + " GROUP BY " + colname_.trim().replaceAll(",$", " ");
				}

				if (isAgg) {
					sql = sql + " ORDER BY " + stragg[k].trim().replaceAll(",$", " ") + " DESC";
				}

				if (stragg.length != (k + 1)) {
					sql += "#_#";
				}

//				System.out.println("sql###########" + sql);

				// ------------------------------

				int totnopofbin = totrowcount / bin_size;
				System.out.println("totnopofbin::::::::::" + totnopofbin);
				String sqlcountperbin_="";
                int count_ =0;
				
                
                for (int j = 0; j < totnopofbin; j++) // change to
				{
					
					 sqlcountperbin_ = "select " +j +","+ stragg[k].replaceAll(",$", " ") + " " + "from cafebot."
							+ tablename + " where 1=1 " + where + "and  "+colname+" in " + "(select \"" + colname
							+ "\" from cafebot." + tablename + " " + " ORDER BY \"" + colname + "\" asc limit " + offset
							+ "," + total_row_per_bin + ") " + " ORDER BY " + stragg[k].replaceAll(",$", " ")
							+ " DESC limit "+userlimit;

					 
//					 sqlcountperbin_ = "select " +global_count +","+ stragg[k].replaceAll(",$", " ") + " " + "from cafebot."
//								+ tablename + " where 1=1 " + where + "and  item_category_name in " + "(select \"" + colname
//								+ "\" from cafebot." + tablename + " " + " ORDER BY \"" + colname + "\" asc limit " + offset
//								+ "," + total_row_per_bin + ") " + " ORDER BY " + stragg[k].replaceAll(",$", " ")
//								+ " DESC limit 10";      ////////change
					
					
					
					
					if(k > 0)
					{
						if (count_ !=  0) 
						{
							sqlcountperbin += "#_#" +sqlcountperbin_;
						}
						else
						{
							sqlcountperbin += "#_#_#" +sqlcountperbin_;
						}
						
					}
					else
					{
						if (count_ !=  0) 
						{
							sqlcountperbin += "#_#" +sqlcountperbin_;
						}
						else
						{
							sqlcountperbin += sqlcountperbin_;
						}
					}
					
					count_++;
//					System.out.println("sqlcountperbin::::::" + sqlcountperbin);
//					try {
//						ps = con.prepareStatement(sqlcountperbin);
//						ResultSet rs = ps.executeQuery();
//
//						while (rs.next()) {
//							totrowcount = rs.getInt(1);
//							binmap2.put(bin_index, String.valueOf(totrowcount));
//							bin_index++;
//						}
//
//						rs.close();
//						ps.close();
//
//					} catch (SQLException e) {
//						System.out.println("error noof bin ::::::" + e.toString());
//						// TODO Auto-generated catch block
//						e.printStackTrace();
//					}
//					global_count = j ;
//					global_count++;
					offset = offset + total_row_per_bin;
//					try {
////						Thread.sleep(1000);
//					} catch (InterruptedException e) {
//						// TODO Auto-generated catch block
//						e.printStackTrace();
//					}
				}

//				System.out.println("binmap2 :::::" + binmap2);

				lsmap.add(binmap2);

				// -----------------------
			}

		}
//		System.out.println("sqlcountperbin :::::" + sqlcountperbin);
//		if (bintype == 0) {
//			// 1 number of bin
//
////			System.out.println("totrowcount:::::" + totrowcount);
////			System.out.println("bin_size:::::" + bin_size);
//
//			int total_row_per_bin = totrowcount / bin_size;
//
//			System.out.println("total_row_per_bin::::::::::#####" + total_row_per_bin);
//
//			// int total_row_per_bin = total_no_of_bin * bin_size;
//			int offset = 0;
//
//			// totrowcount =0;
//			int bin_index = 1;
//
//			String sql = "";
//
//			String[] stragg = stragg2.split(",");
//
////			System.out.println("len=====" + stragg.length);
////			System.out.println("stragg__________" + stragg.toString());
//
//			for (int k = 0; k < stragg.length; k++) {
//				
//				sql += "SELECT " + colname +","+ stragg[k].replaceAll( ",$", " ") + " FROM cafebot."
//						+ tablename + " WHERE 1=1 " + where;
//
//				if (isAgg) {
//					sql = sql + " GROUP BY " + colname_.trim().replaceAll(",$", " ");
//				}
//
//				if (isAgg) {
//					sql = sql + " ORDER BY " + stragg[k].trim().replaceAll(",$", " ") + " DESC";
//				}
//
//				if (stragg.length != (k + 1)) {
//					sql += "#_#";
//				}
//				
//
////				sql += "SELECT " + sqlpojo.getFields().trim() + stragg[k].replaceAll(",$", " ") + " FROM cafebot."
////						+ sqlpojo.getTable() + " WHERE 1=1 " + sqlpojo.getWhere();
////
////				if (sqlpojo.getIsAgg()) {
////					sql = sql + " GROUP BY " + sqlpojo.getFields().trim().replaceAll(",$", " ");
////				}
////
////				if (sqlpojo.getIsAgg()) {
////					sql = sql + " ORDER BY " + stragg[k].trim().replaceAll(",$", " ") + " DESC";
////				}
////
////				if (stragg.length != (k + 1)) {
////					sql += "#_#";
////				}
//                String sqlcountperbin_ ="";
//				System.out.println("sql###########" + sql);
//				int count = 0;
//				// ------------------------------
//				for (int j = 0; j < total_row_per_bin; j++) // change to
//				{
////					global_count++;
//					        sqlcountperbin_ = "#_# select " +global_count+ "," + stragg[k].replaceAll(",$", " ") + " " + "from cafebot."
//							+ tablename + " where 1=1 " + where + "and  "+colname+" in " + "(select \"" + colname
//							+ "\" from cafebot." + tablename + " " + " ORDER BY \"" + colname + "\" asc limit " + offset
//							+ "," + total_row_per_bin + ") " + " ORDER BY " + stragg[k].replaceAll(",$", " ")
//							+ " DESC limit 10";
//					        
//					        
////					        sqlcountperbin_ = "select " +global_count+ "," + stragg[k].replaceAll(",$", " ") + " " + "from cafebot."
////									+ tablename + " where 1=1 " + where + "and  item_category_name in " + "(select \"" + colname
////									+ "\" from cafebot." + tablename + " " + " ORDER BY \"" + colname + "\" asc limit " + offset
////									+ "," + total_row_per_bin + ") " + " ORDER BY " + stragg[k].replaceAll(",$", " ")
////									+ " DESC limit 10";
//					        
//					        
//					        sqlcountperbin += sqlcountperbin_;
////							if (count !=  0) {
////								sqlcountperbin += " #_# "  +sqlcountperbin_;
////							}
////							else
////							{
////								sqlcountperbin += " #_# " +sqlcountperbin_;
////							}
//							
//							
//					count++;				 
////					System.out.println("sqlcountperbin::::::" + sqlcountperbin);
//					
////					try {
////						ps = con.prepareStatement(sqlcountperbin);
////						ResultSet rs = ps.executeQuery();
////
////						while (rs.next()) {
////							totrowcount = rs.getInt(1);
////							binmap2.put(bin_index, String.valueOf(totrowcount));
////							bin_index++;
////						}
////
////						rs.close();
////						ps.close();
////
////					} catch (SQLException e) {
////						System.out.println("error noof bin ::::::" + e.toString());
////						// TODO Auto-generated catch block
////						e.printStackTrace();
////					}
//					global_count++;
//					offset = offset + total_row_per_bin;
//					try {
//						Thread.sleep(1000);
//					} catch (InterruptedException e) {
//						// TODO Auto-generated catch block
//						e.printStackTrace();
//					}
//					
//				}
//
//				System.out.println("binmap2 :::::" + binmap2);
//				System.out.println("sqlcountperbin :::::" + sqlcountperbin);
////				lsmap.add(binmap2);
////				System.out.println("lsmap :::::" + lsmap);
//				// -----------------------
//
//			}
//
//		}

		///////// binning end ---------------------------
		return sqlcountperbin;
	}

	public String returnBinQuery(String tablename, int bintype, int bin_size, String field, String colname,String where ,String agg,String chartType ,int userlimit,String type) {

		//tablename = "PT84430568S";
		bintype = 0; // 0 bin size // 1 number of bin

		// bin_size = 10;
		int totrowcount = 0;

		String sqlcountperbin = "";
//		System.out.println("   aggcol   "+aggcol);
		
//		System.out.println("   aggr   "+agg);
		////// ----------bin size---------------------
		
		if(chartType.equalsIgnoreCase("chartcard19"))
		{
//			System.out.println("colname   "+colname);
			String colname_size1 = colname.split(",")[0];
//			System.out.println("colname_size1   "+colname_size1);
			String colname_size2 = colname.split(",")[1];
//			System.out.println("colname_size2   "+colname_size2);

					colname = colname_size1 +" , "+colname_size2;
			
		}
		else
		{
//			System.out.println("colname   "+colname);
			String colname_size1 = colname.split(",")[0];
//			System.out.println("colname_size1   "+colname_size1);
			colname = colname_size1;
		}
		
		
//		String aggcol_ = aggcol.split(" as ")[1];
////		String aggcol_1 = aggcol.split(" toFloat ")[0];
//		System.out.println("aggcol   "+aggcol);
////		System.out.println("aggcol_1   "+aggcol_1);
////		aggcol = aggcol.split("_")[2];
//		String field ="";
//		
//		String[] splits = aggcol_.split("_");
//        //This regEx splits the String on ‘e’
//        for(int i=1; i<splits.length;i++) {
//            System.out.print(splits[i]);
////            if(i>0)
////            {
//            	  field += splits[i] +"_";
////            }
////            field += splits[i] +"_";
//           // agg = splits[0] +"_";
//            
//        }
        
//        System.out.println("field   "+field);
		// String sqldistinctvalue = "select distinct \""+colname+"\" from
		// cafebot.PT84430568S order by \""+colname+"\" asc";

		String sqldistinctvalue = "select distinct \"" + colname + "\" from cafebot." + tablename + " order by \""
				+ colname + "\" asc";

//		System.out.println("sqldistinctvalue Q 2::::" + sqldistinctvalue);

		PreparedStatement ps = null;

		List<String> distinctvaluearray = new ArrayList<String>();

		try {
			ps = con.prepareStatement(sqldistinctvalue);
			ResultSet rs = ps.executeQuery();
			ResultSetMetaData rsmd = rs.getMetaData();

			while (rs.next()) {
				distinctvaluearray.add(rs.getString(1));
			}

//			System.out.println("distinctvaluearray :::::" + distinctvaluearray);

			rs.close();
			ps.close();

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		String totalcountQ ="";
		
//		System.out.println("type###########   "+type);
		
		
		if(type.equalsIgnoreCase("text"))
		{
			 totalcountQ = "SELECT count(toFloat32OrZero( "+colname+")) as count"+colname+"  FROM cafebot."+ tablename+" WHERE 1=1 ";			
		}
		else
		{
			 totalcountQ = "SELECT max(toFloat32OrZero( "+colname+")) as max_"+colname+"  FROM cafebot."+ tablename+" WHERE 1=1 ";
		}
		//String totalcountQ = "select count() from cafebot." + tablename;
		
//		System.out.println("totalcountQ :::::" + totalcountQ);
				
		try {
			ps = con.prepareStatement(totalcountQ);
			ResultSet rs = ps.executeQuery();

			while (rs.next()) {
				totrowcount = rs.getInt(1);
			}

			System.out.println("totrowcount :::::" + totrowcount);
			
			rs.close();
			ps.close();

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		// 0 bin size
		if (bintype == 0) {

			int distinctvalue = 0;
			int bin_index = 1;
			String disvalue = "";

			// ------------------------

//			System.out.println("totrowcount:::::" + totrowcount);
//			System.out.println("bin_size:::::" + bin_size);
			int total_row_per_bin = bin_size;
//			System.out.println("total_row_per_bin::::::::::" + total_row_per_bin);

			// int total_row_per_bin = total_no_of_bin * bin_size;
			int offset = 0;
			String sql = "";
		
			int totnopofbin = totrowcount / bin_size;
			int interval = totrowcount / bin_size;
			 int start = 0;
		        int end = 0;
//	            int from1st = 0;
//		        int to1st = 0;
//		        for (int i = 0; i < 3; i++) {
//		      				              
//		            }
			
			

			for (int j = 0; j < bin_size; j++) // change to
			{
			
					 start = j * interval;
			         end = start + interval;
				
				if (j > 0) 
				{
					sqlcountperbin += "#_#";
				
				}

//				String where1 = " (select \"" + aggcol + "\" from cafebot." + tablename + " ORDER BY \"" 
//				+ aggcol + "\" asc limit " + offset + "," + total_row_per_bin + ") ";
//				
				
				
//				sqlcountperbin += "select " + j + "," + aggcol + " " + "from cafebot." + tablename + " where 1=1 "
//						+ " " +where+ " and "+colname+" in " + " (select \"" + colname + "\" from cafebot." + tablename + " "
//						+ " ORDER BY \"" + colname + "\" asc limit " + offset + "," + total_row_per_bin + ") "
//						+ " ORDER BY " + aggcol + " DESC ";
				
				
//				sqlcountperbin += "select " + j + "," + end + " " + "from cafebot."+tablename+" where 1=1  "+where+""
//						  +" and "+colname+" in  (select \""+colname+"\" from cafebot."+tablename+" where 1=1 "
////						  and "
////						  + " "+aggcol+" in  (select "+aggcol+" from cafebot."+tablename+" where 1=1 ORDER BY "+aggcol+" asc limit "
////						  + "" + offset + "," + total_row_per_bin + ")"
//						  + " ORDER BY "+colname+" asc limit " + start + "," + end + ")"
//						  +"  ORDER BY "+aggcol+" DESC ";
				

//				sqlcountperbin +=  "select "+colname+","+aggcol+" from "
//				+"("
//				+" select "+colname+","+field+" from cafebot."+tablename+" limit " + start + "," + end +")"
//				+"group by "+colname;
				
				
				sqlcountperbin += "select "+j+", "+agg+"(sum_sum_item_cnt_day_) as sm1 from "
				+"("
				+"select "+colname+" , "+agg+"(toFloat32OrZero( " +field+")) as sum_sum_item_cnt_day_ from "
				+ "( select "+colname+","+field+" from cafebot."+tablename+" limit " + start + "," + end +")group by "+colname+"  limit " +userlimit
				+") where 1=1 "+where
				+" group by "+j+ "";
				
				
				
				
				
				
//				offset = offset + total_row_per_bin;
//				System.out.println("sqlcountperbin::::::" + sqlcountperbin);
//				offset =  totnopofbin;
				
//				totnopofbin = totnopofbin + totnopofbin;
			}
		}

//		if (bintype == 1) {
//			// 1 number of bin
//
////			System.out.println("bin_size:::::" + bin_size);
//
//			int total_row_per_bin = totrowcount / bin_size;
//
////			System.out.println("total_row_per_bin::::::::::" + total_row_per_bin);
//
//			// int total_row_per_bin = total_no_of_bin * bin_size;
//			int offset = 0;
//
//			for (int j = 0; j < bin_size; j++) // change to
//			{
//
//				if (j > 0) {
//					sqlcountperbin += "#_#";
//				}
//
//				sqlcountperbin += "select " + j + ", " + aggcol + " " + "from cafebot." + tablename + " where 1=1 "
//						+ " " +where+ "   and  "+colname+" in " + "(select \"" + colname + "\" from cafebot." + tablename + " "
//						+ " ORDER BY \"" + colname + "\" asc limit " + offset + "," + total_row_per_bin + ") "
//						+ " ORDER BY " + aggcol + " DESC ";
//
//				offset = offset + total_row_per_bin;
//			}
//
//		}

		///////// binning end ---------------------------
		return sqlcountperbin;
	}

}
