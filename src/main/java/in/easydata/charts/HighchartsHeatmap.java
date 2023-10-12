package in.easydata.charts;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.JsonElement;
import com.hyjavacharts.chart.Highchart;
import com.hyjavacharts.model.common.Color;
import com.hyjavacharts.model.common.themes.HighchartTheme;
import com.hyjavacharts.model.highcharts.ChartOptions;
import com.hyjavacharts.model.highcharts.XAxis;
import com.hyjavacharts.model.highcharts.YAxis;
import com.hyjavacharts.model.highcharts.constants.ChartType;
import com.hyjavacharts.model.highcharts.constants.HorizontalAlign;
import com.hyjavacharts.model.highcharts.constants.LabelsOverflow;
import com.hyjavacharts.model.highcharts.constants.Layout;
import com.hyjavacharts.model.highcharts.constants.VerticalAlign;
import com.hyjavacharts.model.highcharts.series.SeriesHeatmap;




public class HighchartsHeatmap {
	
	public Highchart configure(List<List<com.hyjavacharts.model.highcharts.series.seriesheatmap.Data>>   data,
			String title,
			String subtitle,int isstack,String columnlist,int isbin ,String X_field_ ,String properties_) {
        Highchart highChart = new Highchart();
        highChart.setTheme(HighchartTheme.DARK_UNICA);
        ChartOptions chartOptions = highChart.getChartOptions();
        System.out.println("X_field_ #####################         "+X_field_);
	      String titlealign ="";
        int rotation =-45;
        
        int y_rotation =0;
        String prefix ="";
		String suffix ="";
		boolean x_category =false;
		boolean x_label_check =false;
        try 
        {
			
			JsonFactory jsonFactory = new JsonFactory();
			ObjectMapper objectMapper = new ObjectMapper(jsonFactory);
			JsonNode properties = objectMapper.readTree(properties_);
			
			if (properties.isArray()) {
				
				for (JsonNode jsonNode_properties : properties) {
					
			        

						titlealign = jsonNode_properties.get("title_alignment").asText();
					System.out.println("label_rotation         "+Integer.parseInt(jsonNode_properties.get("label_rotation").asText()));
					if(Integer.parseInt(jsonNode_properties.get("label_rotation").asText()) != 0)
					{
						 rotation = Integer.parseInt(jsonNode_properties.get("label_rotation").asText());
					}
					

					if(Integer.parseInt(jsonNode_properties.get("y_label_rotation").asText()) != 0)
					{
						y_rotation = Integer.parseInt(jsonNode_properties.get("y_label_rotation").asText());
					}
					
					if((jsonNode_properties.get("prefix").asText()) != "")
					{
						prefix = jsonNode_properties.get("prefix").asText();
						
					}
					
					if((jsonNode_properties.get("suffix").asText()) != "")
					{
						suffix = jsonNode_properties.get("suffix").asText();
						
					}
					
					if(jsonNode_properties.get("x_categories_check").asBoolean() != false)
					{
						
						x_category = jsonNode_properties.get("x_categories_check").asBoolean();
						
					}
					
					if(jsonNode_properties.get("x_label_check").asBoolean() != false)
					{
						
						x_label_check = jsonNode_properties.get("x_label_check").asBoolean();
				        X_field_ = prefix+X_field_+suffix;
				        
					}
					
					
				}

			}
		
		}catch (Exception e) {
			// TODO: handle exception
		}
        
        chartOptions = new SetHighcharts_Properties().highchartProperties(highChart ,properties_);
        
        chartOptions.getChart().setType(ChartType.HEATMAP)
            .setMarginTop(40)
            .setMarginBottom(80)
            .setPlotBorderWidth(1);
        
        
//	      String titlealign ="";
//			titlealign = jsonNode_properties.get("title_alignment").asText();
			if(titlealign != "")
			{
				if(titlealign.equalsIgnoreCase("left"))
				{
				chartOptions.getTitle().setText(title).setAlign(HorizontalAlign.LEFT);
				}
				else if(titlealign.equalsIgnoreCase("right"))
				{
				chartOptions.getTitle().setText(title).setAlign(HorizontalAlign.RIGHT);
				}
				else
				{
				chartOptions.getTitle().setText(title).setAlign(HorizontalAlign.CENTER);
				}
				
			}
			else
			{
				chartOptions.getTitle().setText(title).setAlign(HorizontalAlign.CENTER);
			}
		
        
        
        chartOptions.getTitle().setText(title);
        
        XAxis xAxi = new XAxis();
        List<XAxis> lsxa = new ArrayList<XAxis>(); 
        xAxi.setGridLineWidth(1)
            .getTitle().setText(X_field_);
        xAxi.getLabels().setFormat("{value}");
               
        YAxis yAxi = new YAxis();
        List<YAxis> lsya = new ArrayList<YAxis>(); 
        yAxi.setStartOnTick(false)
            .setEndOnTick(false)
            .getTitle().setText("");
        yAxi.getLabels().setFormat("{value}").setRotation(y_rotation);
        yAxi.setMaxPadding(0.2);
               
        String colarr[] = columnlist.split(",");
        
        List<String> ls = new ArrayList<String>();
		List<String> lsData = new ArrayList<String>();
		List<String> lsDataX = new ArrayList<String>();
		
		 List<Object> arrayobj = new ArrayList<Object>();
		
		ArrayList<com.hyjavacharts.model.highcharts.series.seriesheatmap.Data> array 
		= new ArrayList<com.hyjavacharts.model.highcharts.series.seriesheatmap.Data>();
        
		String cat_name ="";
		String date_name ="";
		int countcat =0; 
		int countdate =0;
		
		for (int j=0;j<data.size();j++) 
		{	
		
			List<com.hyjavacharts.model.highcharts.series.seriesheatmap.Data> data2 = data.get(j); 
			
			String catname ="";
			String catname_ ="";
			
			for (int k=0;k <data2.size();k++) 
			{
				if(x_category == true)
				{
					catname = prefix + data2.get(k).getName() +suffix;
				}
				else
				{
					catname =  data2.get(k).getName();
				}
				
//				catname = data2.get(k).getName();
				if (cat_name.equalsIgnoreCase(data2.get(k).getName())) 
				{
					 countdate++;
					 arrayobj.add(Arrays.asList(countcat,countdate, data2.get(k).getY()));
				}
				else 
					{
					    	countdate =0 ;

					      if (k>0) 
					      {
					    	  countcat++;  
					      }
						   arrayobj.add(Arrays.asList(countcat,countdate, data2.get(k).getY()));	   
					}
					
				cat_name = data2.get(k).getName();
				date_name = data2.get(k).getClassName();

				array.add(new com.hyjavacharts.model.highcharts.series.seriesheatmap.Data()
						.setName(catname)
						.setClassName(data2.get(k).getClassName())
						.setY(data2.get(k).getY())							
						
						
					);
				
				if (j==0) 
				{
					ls.add(catname);
					
					if (!lsData.contains(data2.get(k).getClassName().replace("[", "").replace("]", ""))) 
					{
						lsData = new ArrayList<String>();
						lsData.add(data2.get(k).getClassName());
						lsDataX.add(lsData.toString().replace("[", "").replace("]", ""));
					}
					
				}
				
			} 
			
			if (j==0) 
			{
	
			xAxi.setCategories(ls);
			lsxa.add(xAxi);
			
			xAxi.setMin(0).getTitle().setText(X_field_);
//			xAxi.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
			xAxi.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(rotation);
	        chartOptions.getXAxis().add(xAxi);
	        
	        
	        
	        yAxi.setCategories(lsDataX);
			lsya.add(yAxi);
			
			yAxi.setMin(0).getTitle().setText(null);
			yAxi.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
			
	        chartOptions.getYAxis().add(yAxi);
		
			}
	  
			if (isbin ==0) 
			{      
				 SeriesHeatmap seriesHeatmap = new SeriesHeatmap();
			      if (colarr[j].length()>10) 
			      {
			    	  seriesHeatmap.setName(colarr[j].substring(0, 10));
			      }
			      else 
			      {
			    	  seriesHeatmap.setName(colarr[j]);			          
			      }
			    
			      seriesHeatmap.setDataAsArrayJavaObject(arrayobj);			
//			      seriesHeatmap.getDataLabels()
//		                .setEnabled(true)
//		                .setColor(new Color("#000000"));
			      
			      
			      chartOptions.getSeries().add(seriesHeatmap);
			}
			else
			{
				SeriesHeatmap seriesHeatmap = new SeriesHeatmap();
			      if (colarr[j].length()>10) 
			      {
			    	  seriesHeatmap.setName(colarr[j].substring(0, 10));
			      }
			      else 
			      {
			    	  seriesHeatmap.setName(colarr[j]);			          
			      }
		
			      seriesHeatmap.setDataAsArrayJavaObject(arrayobj);
//			      seriesHeatmap.setName("")
//		            .setBorderWidth(1)
//		            .getDataLabels()
//		                .setEnabled(true)
//		                .setColor(new Color("#000000"));
//			      seriesHeatmap.getDataLabels().setColor(Color.BLACK);
			      chartOptions.getSeries().add(seriesHeatmap);
			}
		
		}

        chartOptions.getColorAxisSingle()
            .setMin(0)
            .setMinColor(new Color("#FFFFFF"))
            .setMaxColor(chartOptions.getColors().get(0));
        
//        chartOptions.getLegend()
//            .setAlign(HorizontalAlign.RIGHT)
//            .setLayout(Layout.VERTICAL)
//            .setMargin(0)
//            .setVerticalAlign(VerticalAlign.TOP)
//            .setY(25)
//            .setSymbolHeight(328);

        return highChart;
    }
	
	
	
	
	
	
	
	public Highchart configure_json(List<List<com.hyjavacharts.model.highcharts.series.seriesheatmap.Data>>   data,
			String title,
			String subtitle,int isstack,String columnlist,int isbin ,String X_field_) {
        Highchart highChart = new Highchart();
        highChart.setTheme(HighchartTheme.DARK_UNICA);
        ChartOptions chartOptions = highChart.getChartOptions();
            
 
        
        chartOptions.getChart().setType(ChartType.HEATMAP)
            .setMarginTop(40)
            .setMarginBottom(80)
            .setPlotBorderWidth(1);
        chartOptions.getTitle().setText("Time batches");
        
        XAxis xAxi = new XAxis();
        List<XAxis> lsxa = new ArrayList<XAxis>(); 
        xAxi.setGridLineWidth(1)
            .getTitle().setText("");
        xAxi.getLabels().setFormat("{value}");
               
     
               
        String colarr[] = columnlist.split(",");
        
        List<String> ls = new ArrayList<String>();
		List<String> lsData = new ArrayList<String>();
		List<String> lsDataX = new ArrayList<String>();
		
		 List<Object> arrayobj = new ArrayList<Object>();
        int count_x_title = 0;
        String x_title="";
        String json ="[{\"fig\":{\"data\":[{\"colorscale\":[[0.0,\"rgb(0,0,255)\"],[1.0,\"rgb(255,0,0)\"]],\"hoverongaps\":false,\"showscale\":false,\"x\":[\"27/03/202310:41:41-27/03/202310:41:41\"],\"xgap\":1,\"y\":[\"TVOC__ppb__\",\"eCO2__ppm__\",\"PM2__5\",\"Temperature__C__\",\"Raw__H2\"],\"ygap\":1,\"z\":[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"zmax\":1,\"zmin\":0,\"type\":\"heatmap\"}],\"layout\":{\"template\":{\"data\":{\"histogram2dcontour\":[{\"type\":\"histogram2dcontour\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"choropleth\":[{\"type\":\"choropleth\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}],\"histogram2d\":[{\"type\":\"histogram2d\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"heatmap\":[{\"type\":\"heatmap\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"heatmapgl\":[{\"type\":\"heatmapgl\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"contourcarpet\":[{\"type\":\"contourcarpet\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}],\"contour\":[{\"type\":\"contour\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"surface\":[{\"type\":\"surface\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"mesh3d\":[{\"type\":\"mesh3d\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}],\"scatter\":[{\"fillpattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2},\"type\":\"scatter\"}],\"parcoords\":[{\"type\":\"parcoords\",\"line\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatterpolargl\":[{\"type\":\"scatterpolargl\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"bar\":[{\"error_x\":{\"color\":\"#2a3f5f\"},\"error_y\":{\"color\":\"#2a3f5f\"},\"marker\":{\"line\":{\"color\":\"#E5ECF6\",\"width\":0.5},\"pattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2}},\"type\":\"bar\"}],\"scattergeo\":[{\"type\":\"scattergeo\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatterpolar\":[{\"type\":\"scatterpolar\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"histogram\":[{\"marker\":{\"pattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2}},\"type\":\"histogram\"}],\"scattergl\":[{\"type\":\"scattergl\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatter3d\":[{\"type\":\"scatter3d\",\"line\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}},\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scattermapbox\":[{\"type\":\"scattermapbox\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatterternary\":[{\"type\":\"scatterternary\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scattercarpet\":[{\"type\":\"scattercarpet\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"carpet\":[{\"aaxis\":{\"endlinecolor\":\"#2a3f5f\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"minorgridcolor\":\"white\",\"startlinecolor\":\"#2a3f5f\"},\"baxis\":{\"endlinecolor\":\"#2a3f5f\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"minorgridcolor\":\"white\",\"startlinecolor\":\"#2a3f5f\"},\"type\":\"carpet\"}],\"table\":[{\"cells\":{\"fill\":{\"color\":\"#EBF0F8\"},\"line\":{\"color\":\"white\"}},\"header\":{\"fill\":{\"color\":\"#C8D4E3\"},\"line\":{\"color\":\"white\"}},\"type\":\"table\"}],\"barpolar\":[{\"marker\":{\"line\":{\"color\":\"#E5ECF6\",\"width\":0.5},\"pattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2}},\"type\":\"barpolar\"}],\"pie\":[{\"automargin\":true,\"type\":\"pie\"}]},\"layout\":{\"autotypenumbers\":\"strict\",\"colorway\":[\"#636efa\",\"#EF553B\",\"#00cc96\",\"#ab63fa\",\"#FFA15A\",\"#19d3f3\",\"#FF6692\",\"#B6E880\",\"#FF97FF\",\"#FECB52\"],\"font\":{\"color\":\"#2a3f5f\"},\"hovermode\":\"closest\",\"hoverlabel\":{\"align\":\"left\"},\"paper_bgcolor\":\"white\",\"plot_bgcolor\":\"#E5ECF6\",\"polar\":{\"bgcolor\":\"#E5ECF6\",\"angularaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"},\"radialaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"}},\"ternary\":{\"bgcolor\":\"#E5ECF6\",\"aaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"},\"baxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"},\"caxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"}},\"coloraxis\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}},\"colorscale\":{\"sequential\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]],\"sequentialminus\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]],\"diverging\":[[0,\"#8e0152\"],[0.1,\"#c51b7d\"],[0.2,\"#de77ae\"],[0.3,\"#f1b6da\"],[0.4,\"#fde0ef\"],[0.5,\"#f7f7f7\"],[0.6,\"#e6f5d0\"],[0.7,\"#b8e186\"],[0.8,\"#7fbc41\"],[0.9,\"#4d9221\"],[1,\"#276419\"]]},\"xaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\",\"title\":{\"standoff\":15},\"zerolinecolor\":\"white\",\"automargin\":true,\"zerolinewidth\":2},\"yaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\",\"title\":{\"standoff\":15},\"zerolinecolor\":\"white\",\"automargin\":true,\"zerolinewidth\":2},\"scene\":{\"xaxis\":{\"backgroundcolor\":\"#E5ECF6\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"showbackground\":true,\"ticks\":\"\",\"zerolinecolor\":\"white\",\"gridwidth\":2},\"yaxis\":{\"backgroundcolor\":\"#E5ECF6\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"showbackground\":true,\"ticks\":\"\",\"zerolinecolor\":\"white\",\"gridwidth\":2},\"zaxis\":{\"backgroundcolor\":\"#E5ECF6\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"showbackground\":true,\"ticks\":\"\",\"zerolinecolor\":\"white\",\"gridwidth\":2}},\"shapedefaults\":{\"line\":{\"color\":\"#2a3f5f\"}},\"annotationdefaults\":{\"arrowcolor\":\"#2a3f5f\",\"arrowhead\":0,\"arrowwidth\":1},\"geo\":{\"bgcolor\":\"white\",\"landcolor\":\"#E5ECF6\",\"subunitcolor\":\"white\",\"showland\":true,\"showlakes\":true,\"lakecolor\":\"white\"},\"title\":{\"x\":0.05},\"mapbox\":{\"style\":\"light\"}}},\"xaxis\":{\"side\":\"top\",\"title\":{\"text\":\"Time-level\"}},\"yaxis\":{\"title\":{\"text\":\"Features\"}}}}}]";
       
        JsonFactory jsonFactory = new JsonFactory();
		ObjectMapper objectMapper = new ObjectMapper(jsonFactory);

		try {
			JsonNode arrayNode = objectMapper.readTree(json);
			for(JsonNode  json_ : arrayNode)
			{
				System.out.println("json_::::::" + json_);
				for(JsonNode  json1 : json_)
				{
					System.out.println("json1::::::" + json1);
					
					for(JsonNode  json2 : json1)
					{
						System.out.println("json2::::::" + json2);
						for(JsonNode  json3 : json2)
						{
							count_x_title++;
							System.out.println("json3::::::" + json3);
							if(count_x_title == 4)
							{
								for(JsonNode  json4 : json3)
								{
									for(JsonNode  json5 : json4)
									{
										 x_title = json5.toString();
										 x_title= x_title.replace("\"", "").toString();
										 
										System.out.println("x_title::::::" + x_title);
										
									}
									
									
								}
							}
							
							int count1 = 0;	
							for(JsonNode  json4 : json3)
							{
								count1++;						
								System.out.println("json4::::::" + json4);
								if(count1 == 4)
								{
									String x = json4.toString();
									System.out.println("x::::::" + x);
									
									
								String x1=x.split("-")[0].replace("[", "").replace("\"", "").toString();
								String x2=x.split("-")[1].replace("]", "").replace("\"", "").toString();
									
								lsDataX.add(x1);
								lsDataX.add(x2);
								
//								System.out.println("x1::::::" + x1);
//								System.out.println("x2::::::" + x2);
								
								}
								
								if(count1 == 6)
								{
									String y = json4.toString();
									System.out.println("y::::::" + y);
									
									
									
									
									
									String y1=y.split(",")[0].replace("[", "").replace("\"", "").toString();
									String y2=y.split(",")[1].replace("", "").replace("\"", "").toString();
									String y3=y.split(",")[2].replace("", "").replace("\"", "").toString();
									String y4=y.split(",")[3].replace("", "").replace("\"", "").toString();
									String y5=y.split(",")[4].replace("]", "").replace("\"", "").toString();
									
									ls.add(y1);
									ls.add(y2);
									ls.add(y3);
									ls.add(y4);
									ls.add(y5);
									
									
//									System.out.println("y::::::" + y1);
//									System.out.println("y::::::" + y2);
//									System.out.println("y::::::" + y3);
//									System.out.println("y::::::" + y4);
//									System.out.println("y::::::" + y5);
									
									
								}
								
								if(count1 == 8)
								{
									String z = json4.toString();
									System.out.println("z::::::" + z.length());
									
									
									for(int m=0;m<5;m++)
									{
										 arrayobj.add(Arrays.asList(0,0,0));
									}
									
									
									
									
								}
								
																
							}
						}
						
					}
					
					
				}
				
				
				
				
			}
			
			
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        
		System.out.println("ls::::::" + ls);
		System.out.println("ls lsDataX::::::" + lsDataX);
		System.out.println("arrayobj ::::::" + arrayobj);
		   YAxis yAxi = new YAxis();
	        List<YAxis> lsya = new ArrayList<YAxis>(); 
	        yAxi.getTitle().setText("");
	     
		
		
		xAxi.setCategories(lsDataX);
		lsxa.add(xAxi);
		
		xAxi.setMin(0).getTitle().setText("");
		xAxi.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
		
        chartOptions.getXAxis().add(xAxi);
  
        yAxi.setCategories(ls);
		lsya.add(yAxi);
		
		yAxi.setMin(0).getTitle().setText(x_title);
		yAxi.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
		
        chartOptions.getYAxis().add(yAxi);
        
      
        
 
//		ArrayList<com.hyjavacharts.model.highcharts.series.seriesheatmap.Data> array 
//		= new ArrayList<com.hyjavacharts.model.highcharts.series.seriesheatmap.Data>();
//        
//		String cat_name ="";
//		String date_name ="";
//		int countcat =0; 
//		int countdate =0;
//		
//		for (int j=0;j<data.size();j++) 
//		{	
//		
//			List<com.hyjavacharts.model.highcharts.series.seriesheatmap.Data> data2 = data.get(j); 
//			
//			String catname ="";
//			String catname_ ="";
//			
//			for (int k=0;k <data2.size();k++) 
//			{
//				
//				catname = data2.get(k).getName();
//				if (cat_name.equalsIgnoreCase(data2.get(k).getName())) 
//				{
//					 countdate++;
//					 arrayobj.add(Arrays.asList(countcat,countdate, data2.get(k).getY()));
//				}
//				else 
//					{
//					    	countdate =0 ;
//
//					      if (k>0) 
//					      {
//					    	  countcat++;  
//					      }
//						   arrayobj.add(Arrays.asList(countcat,countdate, data2.get(k).getY()));	   
//					}
//					
//				cat_name = data2.get(k).getName();
//				date_name = data2.get(k).getClassName();
//
//				array.add(new com.hyjavacharts.model.highcharts.series.seriesheatmap.Data()
//						.setName(data2.get(k).getName())
//						.setClassName(data2.get(k).getClassName())
//						.setY(data2.get(k).getY())							
//						
//						
//					);
//				
//				if (j==0) 
//				{
//					ls.add(catname);
//					
//					if (!lsData.contains(data2.get(k).getClassName().replace("[", "").replace("]", ""))) 
//					{
//						lsData = new ArrayList<String>();
//						lsData.add(data2.get(k).getClassName());
//						lsDataX.add(lsData.toString().replace("[", "").replace("]", ""));
//					}
//					
//				}
//				
//			} 
//			
//			if (j==0) 
//			{
//	
//			xAxi.setCategories(ls);
//			lsxa.add(xAxi);
//			
//			xAxi.setMin(0).getTitle().setText(X_field_);
//			xAxi.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
//			
//	        chartOptions.getXAxis().add(xAxi);
//	        
//	        
//	        
//	        yAxi.setCategories(lsDataX);
//			lsya.add(yAxi);
//			
//			yAxi.setMin(0).getTitle().setText(null);
//			yAxi.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
//			
//	        chartOptions.getYAxis().add(yAxi);
//		
//			}
//	  
//			if (isbin ==0) 
//			{      
//				 SeriesHeatmap seriesHeatmap = new SeriesHeatmap();
//			      if (colarr[j].length()>10) 
//			      {
//			    	  seriesHeatmap.setName(colarr[j].substring(0, 10));
//			      }
//			      else 
//			      {
//			    	  seriesHeatmap.setName(colarr[j]);			          
//			      }
//			    
//			      seriesHeatmap.setDataAsArrayJavaObject(arrayobj);			     
//			      chartOptions.getSeries().add(seriesHeatmap);
//			}
//			else
//			{
//				SeriesHeatmap seriesHeatmap = new SeriesHeatmap();
//			      if (colarr[j].length()>10) 
//			      {
//			    	  seriesHeatmap.setName(colarr[j].substring(0, 10));
//			      }
//			      else 
//			      {
//			    	  seriesHeatmap.setName(colarr[j]);			          
//			      }
//		
//			      seriesHeatmap.setDataAsArrayJavaObject(arrayobj);    
//			      chartOptions.getSeries().add(seriesHeatmap);
//			}
//		
//		}

        
//        chartOptions.getColorAxisSingle()
//            .setMin(0)
//            .setMinColor(new Color("#FFFFFF"))
//            .setMaxColor(chartOptions.getColors().get(0));
        
//        chartOptions.getLegend()
//            .setAlign(HorizontalAlign.RIGHT)
//            .setLayout(Layout.HORIZONTAL)
//            .setMargin(0)
//            .setVerticalAlign(VerticalAlign.TOP)
//            .setY(25)
//            .setSymbolHeight(328);

        SeriesHeatmap seriesHeatmap = new SeriesHeatmap();
        seriesHeatmap.setDataAsArrayJavaObject(arrayobj);			     
	    chartOptions.getSeries().add(seriesHeatmap);
        
        
        
        
        return highChart;
    }
	
	

}
