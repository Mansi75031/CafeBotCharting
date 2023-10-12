package in.easydata.charts;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.SortedMap;
import java.util.TreeMap;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hyjavacharts.chart.Highchart;
import com.hyjavacharts.model.common.Color;
import com.hyjavacharts.model.common.Stop;
import com.hyjavacharts.model.highcharts.ChartOptions;
import com.hyjavacharts.model.highcharts.YAxis;
import com.hyjavacharts.model.highcharts.constants.ChartType;
import com.hyjavacharts.model.highcharts.constants.HorizontalAlign;
import com.hyjavacharts.model.highcharts.constants.LabelsOverflow;
import com.hyjavacharts.model.highcharts.constants.MinorTickPosition;
import com.hyjavacharts.model.highcharts.constants.SeriesType;
import com.hyjavacharts.model.highcharts.constants.TickPosition;
import com.hyjavacharts.model.highcharts.constants.TitleAlign;
import com.hyjavacharts.model.highcharts.series.SeriesGauge;
import com.hyjavacharts.model.highcharts.series.SeriesWordcloud;
import com.hyjavacharts.model.highcharts.yaxis.PlotBands;
import com.hyjavacharts.chart.Highchart;
import com.hyjavacharts.model.common.Color;
import com.hyjavacharts.model.highcharts.ChartOptions;
import com.hyjavacharts.model.highcharts.constants.ChartType;
import com.hyjavacharts.model.highcharts.series.SeriesColumnpyramid;
import com.hyjavacharts.model.highcharts.series.SeriesFunnel;
import com.hyjavacharts.model.highcharts.series.SeriesFunnel3d;
import com.hyjavacharts.model.highcharts.series.seriesfunnel3d.Data;


public class HighchartsGuage  {
	
	    public Highchart configure(List<Number> data,
				String title,String columnlist,String agg,
				String subtitle,int fromfirst,int tofirst,
				String firstcolor,int fromsecond,int tosecond,String secondcolor,int fromthird,int tothird,String thirdcolor 
				,int fromTofunction ,String properties_) {
	        Highchart highChart = new Highchart();
	        ChartOptions chartOptions = highChart.getChartOptions();
	        int maxValue = 0;
	        int datavalue = 0;
	        
		      String titlealign ="";
	        
	        
//	        int to_Third = Integer.parseInt(tothird);
	        List<Number> datavaluearr = new ArrayList<Number>();
	        for(int n =0; n<data.size();n++)
	        {
	        	maxValue = data.get(1).intValue();
	        	datavalue = data.get(0).intValue();
	        	datavaluearr.add(datavalue);
	        	if(maxValue == 0)
	        	{
	        		maxValue = 200;
	        	}
	        
	        	
	        	
	        }
	        
	        try 
	        {
				
				JsonFactory jsonFactory = new JsonFactory();
				ObjectMapper objectMapper = new ObjectMapper(jsonFactory);
				JsonNode properties = objectMapper.readTree(properties_);
				
				if (properties.isArray()) {
					
					for (JsonNode jsonNode_properties : properties) {
						
						titlealign = jsonNode_properties.get("title_alignment").asText();
					
					}

				}
			
			}catch (Exception e) {
				// TODO: handle exception
			}
	        
	        
//	        System.out.println("tothird  "+tothird);
//	        System.out.println("maxValue  "+maxValue);
//	        System.out.println("datavalue  "+datavalue);
//	        System.out.println("agg  "+agg);
//	        
	        String catname = columnlist.split(",")[0];
	        
	        chartOptions.getChart()
            .setType(ChartType.GAUGE)
            .setPlotBorderWidth(0)
            .setPlotShadow(false)
            .setPlotBackgroundColor(null)
            .setPlotBackgroundImage(null);
	        
	        
	        
			
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
	        
	

//	        chartOptions.getPaneSingle()
//            .setStartAngle(-90)
//            .setEndAngle(89.9)
//            .setBackground(null)
//            .setCenterAsArrayString(Arrays.asList("50%", "75%"))
//            .setSize("110%");
	        
	        
	        chartOptions.getPaneSingle()
            .setStartAngle(-150)
            .setEndAngle(150);
	        
	        
	        
	        YAxis yAxis = new YAxis();
	        yAxis.setMin(0)
	            .setMax(datavalue + (datavalue /10 *100))
	            .setLineColor(new Color("#339"))
	            .setTickColor(new Color("#339"))
	            .setOffset(-25)
	            .setLineWidth(2)
	            .setMinorTickColor(new Color("#339"))
	            .setTickLength(5)
	            .setMinorTickLength(5)
	            .setEndOnTick(false)
	            .getLabels().setDistance(-20);
	        
	        
	        
	        datavalue =datavalue + (datavalue /10 *100);
	        
	        int interval = datavalue / 3;
	        int start = 0;
	        int end = datavalue;
            int from1st = 0;
	        int to1st = 0;
	        int fromsecond_ = 0;
	        int  tosecond_ =0;
	        int fromthird_ = 0;
	        int  tothird_ =0;
	        
	        
	        for (int i = 0; i < 3; i++) {
	            start = i * interval;
	            end = start + interval;
//	            for (int j = start; j < end; j++) {
	            	if(i ==0)
	            	{
	            		from1st= start;
	            		to1st = end;
	            	}
	            	else if( i == 1)
	            	{
	            		fromsecond_= start;
	            		tosecond_ = end;
	            	}
	            	else
	            	{
	            		fromthird_= start;
	            		tothird_ = end;
	            		
	            	}
	            
//	                System.out.printf("i: %d, j: %d\n",start    , end );
//	            }
	                
	                
	            }
	        
	        
	        //#55BF3B   #DDDF0D   #DF5353
	        
	        if(fromTofunction == 0)
	        {
	        	yAxis.getPlotBands().add(new PlotBands().setFrom(from1st).setTo(to1st).setColor(new Color("#55BF3B")).setThickness(10));
	 	        yAxis.getPlotBands().add(new PlotBands().setFrom(fromsecond_).setTo(tosecond_).setColor(new Color("#DDDF0D")).setThickness(10));
	 	        yAxis.getPlotBands().add(new PlotBands().setFrom(fromthird_).setTo(datavalue).setColor(new Color("#DF5353")).setThickness(10));
	 	        	        	
	        }
	        else
	        {
//	        	if(tothird >= maxValue)
//		        {
//	        		tothird = maxValue;
////		        	tothird = String.valueOf(maxValue);
//		        	
//		        }
	        	
	        	yAxis.getPlotBands().add(new PlotBands().setFrom(fromfirst).setTo(tofirst).setColor(new Color(firstcolor)).setThickness(10));
	 	        yAxis.getPlotBands().add(new PlotBands().setFrom(fromsecond).setTo(tosecond).setColor(new Color(secondcolor)).setThickness(10));
	 	        yAxis.getPlotBands().add(new PlotBands().setFrom(fromthird).setTo(tothird).setColor(new Color(thirdcolor)).setThickness(10));
	 	        	        	
	        }
	        
	        chartOptions.getYAxis().add(yAxis);
	        
//	        yAxis.getPlotBands().add(new PlotBands().setFrom(Integer.parseInt(fromfirst)).setTo(Integer.parseInt(tofirst)).setColor(new Color(firstcolor)).setThickness(10));
//	        yAxis.getPlotBands().add(new PlotBands().setFrom(Integer.parseInt(fromsecond)).setTo(Integer.parseInt(tosecond)).setColor(new Color(secondcolor)).setThickness(10));
//	        yAxis.getPlotBands().add(new PlotBands().setFrom(Integer.parseInt(fromthird)).setTo(Integer.parseInt(tothird) + 1000).setColor(new Color(thirdcolor)).setThickness(10));
	        
//	        yAxis = new YAxis();
//	        yAxis.setMin(0)
//	            .setMax(124)
//	            .setTickPosition(TickPosition.OUTSIDE)
//	            .setLineColor(new Color("#933"))
//	            .setLineWidth(2)
//	            .setMinorTickPosition(MinorTickPosition.OUTSIDE)
//	            .setTickColor(new Color("#933"))
//	            .setMinorTickColor(new Color("#933"))
//	            .setTickLength(5)
//	            .setMinorTickLength(5)
//	            .setOffset(-20)
//	            .setEndOnTick(false)
//	            .getLabels().setDistance(12);
	        chartOptions.getYAxis().add(yAxis);

	        SeriesGauge sg = new SeriesGauge();
	        
	        sg.getTooltip().setValueSuffix("");
	        sg.setName(columnlist.split(",")[0]);
	       
	        sg.getDataLabels()
            .setFormat(agg+ " : {y}")
            .setBorderWidth(0)
            .getStyle().setFontSize("16px");
	        
	        
//	        sg.getDataLabels().getFormatter()
//	            .setFunctionBody("var kmh = this.y; return '<span style=\"color:#339\">' + kmh + '</span>';");

	        sg.getDataLabels().getBackgroundColor()
	            .setStops(new ArrayList<Stop>(Arrays.asList(new Stop(0, new Color("#DDD")), new Stop(1, new Color("#FFF")))))
	            .getLinearGradient().setX1(0).setX2(0).setY1(0).setY2(1);
	        
	        chartOptions.getSeries().add(sg);
//	        System.out.println("data   "+data);
	        sg.setDataAsArrayNumber(datavaluearr);
	        
	        
	        // Some of our example charts use a REST service to retrieve data.
//	        chartOptions.getData().setCsvURL(RestService.getURI() + "/GaugeSpeedCSVData")
//	            .setEnablePolling(true)
//	            .setDataRefreshRate(3);
	        
	        return highChart;
	    }
	    
	    
	    public Highchart configure3dFunnel(List<List<com.hyjavacharts.model.highcharts.series.seriesfunnel.Data>>   data,
				String title,
				String subtitle,int isstack,String columnlist,int isbin ,String X_field_ ,String properties_) {
	    	 Highchart highChart = new Highchart();
	         ChartOptions chartOptions = highChart.getChartOptions();
	         
		     String titlealign ="";
	 		 int rotation =0;
	 		 
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
	         
	         
	         chartOptions.getChart().setType(ChartType.FUNNEL);
	         
	         
//		      String titlealign ="";
//				titlealign = jsonNode_properties.get("title_alignment").asText();
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
			
				
				chartOptions = new SetHighcharts_Properties().highchartProperties(highChart ,properties_);
				
				
	         chartOptions.getPlotOptions()
	             .getFunnel()
	                 .setCenterAsArrayString(Arrays.asList("40%", "50%"))
	                 .setNeckWidth("30%")
	                 .setNeckHeight("25%")
	                 .setWidth("80%")
	                 .getDataLabels()
	                     .setEnabled(true)
	                     .setFormat("<b>{point.name}</b> ({point.y:,.0f})")
	                    
	                     .setSoftConnector(true).setRotation(rotation);
	         
	         chartOptions.getLegend().setEnabled(false);
	         
			List<String> ls = new ArrayList<String>();
			List<Number> lsData = new ArrayList<Number>();
			List<String> lsDataX = new ArrayList<String>();
			
			ArrayList<com.hyjavacharts.model.highcharts.series.seriesfunnel.Data> array 
			= new ArrayList<com.hyjavacharts.model.highcharts.series.seriesfunnel.Data>();
	        
	        
	     
	        
	        YAxis yAxis = new YAxis();
	        yAxis.setMin(0).getTitle().setText("Avg").setAlign(TitleAlign.HIGH);
	        //.getStyle().setCssValue("{ color: '#cdcdcd'}");
	        yAxis.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
	        chartOptions.getYAxis().add(yAxis);
	        List<YAxis> lsya = new ArrayList<YAxis>(); 
	        	        
	        String colarr[] = columnlist.split(",");
	        
	        if(isbin == 1)
			{ 				
				for (int j=0;j<data.size();j++) 
				{					
					List<com.hyjavacharts.model.highcharts.series.seriesfunnel.Data> data2 = data.get(j); 
					lsData = new ArrayList<Number>();
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
						
						//catname = data2.get(k).getName();

						lsData.add(data2.get(k).getY());
						
						array.add(new com.hyjavacharts.model.highcharts.series.seriesfunnel.Data().
								setName(catname).
								setY(data2.get(k).getY())	
							);
						
						
						if (j==0) 
						{
							ls.add(catname);
						}
					}
					if (j==0) 
					{
						yAxis.setCategories(lsDataX);
						lsya.add(yAxis);
						
						yAxis.setMin(0).getTitle().setText(X_field_);
						yAxis.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
						
				        chartOptions.getYAxis().add(yAxis);
			        
					}

//					    System.out.println("isbin::::"+isbin);
					    
				}
				
				
				for(int c=0;c<colarr.length ; c++)
				{
					SeriesFunnel seriesBar = new SeriesFunnel();
					if (colarr[c].length()>10) 
					      {
					          seriesBar.setName(colarr[c].substring(0, 10));
//					          System.out.println("isffffff::::");  
//					          System.out.println("colarr[c]::::" +c  +"," +colarr[c]);  
					          chartOptions.getSeries().add(seriesBar);
					      }
					      else 
					      {
					          seriesBar.setName(colarr[c]);
//					          System.out.println("else   ::::");  
//					          System.out.println("colarr[c]::::"+colarr[c]);
					          chartOptions.getSeries().add(seriesBar);
					          
					      }
					 seriesBar.setDataAsArrayObject(array);
	                 seriesBar.getAccessibility().setEnabled(false);

				}
				
				
				 
	        	
			}
			else
			{
				for (int j=0;j<data.size();j++) 
				{	
				
					List<com.hyjavacharts.model.highcharts.series.seriesfunnel.Data> data2 = data.get(j); 
					lsData = new ArrayList<Number>();
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
						
						
						//catname = data2.get(k).getName();

						lsData.add(data2.get(k).getY());
						
						array.add(new com.hyjavacharts.model.highcharts.series.seriesfunnel.Data().
								setName(catname).
								setY(data2.get(k).getY())	
							);
						
						
						if (j==0) 
						{
							ls.add(catname);
						}
					}
					
					if (j==0) 
					{
						yAxis.setCategories(ls);
//						lsya.add(yAxis);
						
						yAxis.setMin(0).getTitle().setText(X_field_);
						yAxis.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
						
				        chartOptions.getYAxis().add(yAxis);
			        
					}
			        
			        
					SeriesFunnel seriesBar = new SeriesFunnel();
					       
					
					      
//					      System.out.println("catname:::::"+catname);
//					      System.out.println("colarr[j].length():::::"+colarr[j]);
//					    System.out.println("isbin::::"+isbin);  
					if (isbin ==0) 
					{      
					      if (colarr[j].length()>10) 
					      {
					          seriesBar.setName(colarr[j].substring(0, 10));
//					          System.out.println("isffffff::::");  
					      }
					      else 
					      {
					          seriesBar.setName(colarr[j]);
//					          System.out.println("else   ::::");  
					          
					      }
					}else 
					{
						 if (colarr[j].length()>10) 
					      {
					          seriesBar.setName(colarr[j].substring(0, 10));
//					          System.out.println("isffffff::::");  
					      }
					      else 
					      {
					          seriesBar.setName(colarr[j]);
//					          System.out.println("else   ::::");  
					          
					      }
    
					}  
				                    seriesBar.setDataAsArrayObject(array);
//				                    seriesBar.getAccessibility().setEnabled(false);
//				                    seriesBar.setName(colarr[j]);
					                chartOptions.getSeries().add(seriesBar);

				}
				
				
			}
	        
	        
	        return highChart;
	    }
	    
	    public Highchart configureWordCloud(List<String>   data,
				String title,
				String subtitle ,String properties_) {
	        Highchart highChart = new Highchart();
	        ChartOptions chartOptions = highChart.getChartOptions();
		      String titlealign ="";
	        
	        try 
	        {
				
				JsonFactory jsonFactory = new JsonFactory();
				ObjectMapper objectMapper = new ObjectMapper(jsonFactory);
				JsonNode properties = objectMapper.readTree(properties_);
				
				if (properties.isArray()) {
					
					for (JsonNode jsonNode_properties : properties) {
						
							titlealign = jsonNode_properties.get("title_alignment").asText();
						
					}

				}
			
			}catch (Exception e) {
				// TODO: handle exception
			}
	        
	        
//		      String titlealign ="";
//				titlealign = jsonNode_properties.get("title_alignment").asText();
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
	        
	        chartOptions.getChart().setType(ChartType.WORDCLOUD)
			.setPlotShadow(false)    
			.setPlotBackgroundColor(null)
			.setPlotBorderWidth(null);

	        
	        List<String> ls = new ArrayList<String>();
			List<String> lsData = new ArrayList<String>();
			List<String> lsDataX = new ArrayList<String>();
			
			List<String> array 
			= new ArrayList<String>();

					String catname ="";
					String catname_ ="";
					for (int k=0;k <data.size();k++) 
					{
						
						if(k == 0 )
						{
							catname += data.get(k);
						}
						else
						{
							catname += " , "+data.get(k);
						}
						
					}
//					getSeriesData( catname);

					SeriesWordcloud seriesBar = new SeriesWordcloud();
	
				                    seriesBar.setDataAsArrayJavaObject(getSeriesData( catname));
				                    seriesBar.getAccessibility().setEnabled(false);
//				                    seriesBar.setName(colarr[j]);
					                chartOptions.getSeries().add(seriesBar);

	        return highChart;
	    }

	    private ArrayList<Object> getSeriesData(String text) {
	       // String text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean bibendum erat ac justo sollicitudin, quis lacinia ligula fringilla. Pellentesque hendrerit, nisi vitae posuere condimentum, lectus urna accumsan libero, rutrum commodo mi lacus pretium erat. Phasellus pretium ultrices mi sed semper. Praesent ut tristique magna. Donec nisl tellus, sagittis ut tempus sit amet, consectetur eget erat. Sed ornare gravida lacinia. Curabitur iaculis metus purus, eget pretium est laoreet ut. Quisque tristique augue ac eros malesuada, vitae facilisis mauris sollicitudin. Mauris ac molestie nulla, vitae facilisis quam. Curabitur placerat ornare sem, in mattis purus posuere eget. Praesent non condimentum odio. Nunc aliquet, odio nec auctor congue, sapien justo dictum massa, nec fermentum massa sapien non tellus. Praesent luctus eros et nunc pretium hendrerit. In consequat et eros nec interdum. Ut neque dui, maximus id elit ac, consequat pretium tellus. Nullam vel accumsan lorem.";
	        String[] textAray = text.split(",");
	        
	        SortedMap<String, Integer> words = new TreeMap<String, Integer>();
	        
	        for (int i = 0; i < textAray.length; i++) {
	            Integer wordCount = words.get(textAray[i]);
	            
	            if (wordCount == null) {
	                wordCount = new Integer(1);
	                words.put(textAray[i], wordCount);
	            }
	            else {
	                wordCount = wordCount.intValue() + 1;
	                words.remove(textAray[i]);
	                words.put(textAray[i], wordCount);
	            }
	        }
	        
	        ArrayList<Object> array = new ArrayList<Object>();
	        for (String word : words.keySet()) {
	            array.add(Arrays.asList(word, words.get(word)));
	        }

	        return array;
	    }
	
	

}
