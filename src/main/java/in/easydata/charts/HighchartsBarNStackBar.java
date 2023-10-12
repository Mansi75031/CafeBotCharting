package in.easydata.charts;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.json.simple.JSONArray;
import org.omg.CosNaming.IstringHelper;
//package in.easydata.charts;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

//import java.util.ArrayList;
//import java.util.List;

import com.hyjavacharts.chart.Highchart;
import com.hyjavacharts.model.common.Color;
import com.hyjavacharts.model.common.themes.HighchartTheme;
import com.hyjavacharts.model.highcharts.ChartOptions;
import com.hyjavacharts.model.highcharts.exporting.buttons.*;
import com.hyjavacharts.model.highcharts.plotoptions.wordcloud.Rotation;
import com.hyjavacharts.model.highcharts.XAxis;
import com.hyjavacharts.model.highcharts.YAxis;
import com.hyjavacharts.model.highcharts.constants.ChartType;
import com.hyjavacharts.model.highcharts.constants.HorizontalAlign;
import com.hyjavacharts.model.highcharts.constants.LabelsOverflow;
import com.hyjavacharts.model.highcharts.constants.Layout;
import com.hyjavacharts.model.highcharts.constants.Stacking;
import com.hyjavacharts.model.highcharts.constants.TextAlign;
import com.hyjavacharts.model.highcharts.constants.TitleAlign;
import com.hyjavacharts.model.highcharts.constants.VerticalAlign;
import com.hyjavacharts.model.highcharts.constants.ZoomType;
import com.hyjavacharts.model.highcharts.series.SeriesArea;
import com.hyjavacharts.model.highcharts.series.SeriesBar;
import com.hyjavacharts.model.highcharts.series.SeriesColumn;
import com.hyjavacharts.model.highcharts.series.SeriesColumnpyramid;
import com.hyjavacharts.model.highcharts.series.SeriesLine;
import com.hyjavacharts.model.highcharts.series.SeriesScatter;
import com.spire.pdf.tables.table.DataTable;

public class HighchartsBarNStackBar {

	public Highchart configure(List<List<com.hyjavacharts.model.highcharts.series.seriesbar.Data>>   data,
			String title,
			String subtitle,int isstack,String columnlist,int isbin ,String X_field_ ,String properties_) 
	{
		Highchart highChart = new Highchart();
		highChart.setTheme(HighchartTheme.DARK_UNICA);
		ChartOptions chartOptions = highChart.getChartOptions();
		int rotation =0;
		
		int y_rotation =0;
		
		JsonNode color_bar =null;
		String[]  color_bar_ = null;
		
		String titlealign = "";
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
					
//					String color_bar = jsonNode_properties.get("data_bar_color").asText();
					 color_bar = jsonNode_properties.get("data_bar_color");
					 
					 titlealign = jsonNode_properties.get("title_alignment").asText();
					 
					System.out.println("color_bar         "+color_bar);
					
					System.out.println("label_rotation         "+Integer.parseInt(jsonNode_properties.get("label_rotation").asText()));
					System.out.println("y_label_rotation         "+Integer.parseInt(jsonNode_properties.get("y_label_rotation").asText()));
					
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
		
        String colarr[] = columnlist.split(",");
		

        
        
//        title = prefix+title+suffix;
      
//        String colarr__[] = columnlist.split(",");
//		
//		System.out.println("colarr__   "+colarr__.length);
//		
//		for(int col = 0; col<colarr__.length ; col++)
//		{
//			
//			colarr[col] =  prefix+colarr__[col]+suffix;
//			System.out.println("colarr[col] ##   "+colarr[col]);
//			
//		}
		
		
		chartOptions = new SetHighcharts_Properties().highchartProperties(highChart ,properties_);

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
			chartOptions.getTitle().setText(title);
		}
		
		chartOptions.getSubtitle().setText(subtitle);

		chartOptions.getChart().setType(ChartType.BAR)
		.setPlotShadow(false)    
		.setPlotBackgroundColor(null)
		.setPlotBorderWidth(null);
		
		
		
		
		if (isstack == 1) 
		{
			//chartOptions.getPlotOptions() .getBar().setStacking(Stacking.NORMAL);
		}
		
		
		
		List<String> ls = new ArrayList<String>();
		List<Number> lsData = new ArrayList<Number>();
		List<Number> lsDataX = new ArrayList<Number>();
		
		List<Integer> lsData_y = new ArrayList<Integer>();
		
		ArrayList<com.hyjavacharts.model.highcharts.series.seriesbar.Data> array 
		= new ArrayList<com.hyjavacharts.model.highcharts.series.seriesbar.Data>();
		
		XAxis xa = new XAxis();
		List<XAxis> lsxa = new ArrayList<XAxis>();     
		
		System.out.println("columnlist:::::::::::"+columnlist);
		 
		
		
		
		
		
		
		
		
		
		
		
		
		
		
//		System.out.println("colarr:::::::::::"+colarr.length);
		//xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY).getStyle().setCssValue("{ color: 'Gainsboro'}");
		
        YAxis yAxis = new YAxis();
        yAxis.setMin(0).getTitle().setText("").setAlign(TitleAlign.HIGH);
        //.getStyle().setCssValue("{ color: '#cdcdcd'}");
        yAxis.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(y_rotation);
        chartOptions.getYAxis().add(yAxis);
        //yAxis.getLabels().setOverflow(LabelsOverflow.JUSTIFY).getStyle().setCssValue("{ color: 'Gainsboro'}");
		
//        chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT).setVerticalAlign(VerticalAlign.MIDDLE);
		
		chartOptions.getPlotOptions().getBar().getLabel().setConnectorAllowed(false);
		
		
		chartOptions.getResponsive().getRulesSingle()
			.getCondition().setMaxWidth(500);
//		chartOptions.getResponsive().getRulesSingle()
//			.getChartOptions().getLegend()
//				.setLayout(Layout.HORIZONTAL).setAlign(HorizontalAlign.CENTER).setVerticalAlign(VerticalAlign.BOTTOM);
		System.out.println("data.size():::::::::::"+data.size());
		
		
//		 exporting: {
//		    buttons: {
//		      customButton: {
//		        menuItems: ["viewFullscreen", "printChart", "separator", "downloadPNG", "downloadJPEG", "downloadPDF", "downloadSVG"],
//		        className: 'myClass',
//		        text: "Custom button",
//		      },
//		    },
//		  },

		
		List<String> ls_menuitems = new ArrayList<String>();
		ls_menuitems.add("downloadSVG");
		chartOptions.getExporting().getButtons().getContextButton().setMenuItems(ls_menuitems).setClassName("myClass");
		
//		highChart.getChartOptions().getExporting().getButtons().get_genericOption()
		
		int count = 0;
		if(isbin == 1)
		{ 
			for (int j=0;j<data.size();j++) 
			{	
				xa = new XAxis();
//				List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data2 = data.get(j); 
				lsData = new ArrayList<Number>();
				String catname ="";
				String catname_ ="";
				
				SeriesBar seriesBar = new SeriesBar();
				
//				for (int m=0;m<data2.size();m++) 
//				{
//				System.out.println(j +"  data2.size():::::::::::"+data.size() );
				List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data3 = data.get(j);
				for (int k=0;k <data3.size();k++) 
				{
//					System.out.println(k +"  data3.size():::::::::::"+data3.size() );
					
					if(x_category == true)
					{
						catname = prefix + data3.get(k).getName() +suffix;
					}
					else
					{
						catname =  data3.get(k).getName();
					}
					
					lsData.add(data3.get(k).getY());
					array.add(new com.hyjavacharts.model.highcharts.series.seriesbar.Data().
							setName(catname).
							setY(data3.get(k).getY())	
						);
					if(count == 0)
					{
					
					System.out.println(" X_field_::::::::::"+X_field_);
					xa.setMin(0).getTitle().setText(X_field_).setAlign(TitleAlign.MIDDLE);
					}
					if(j == 0)
					{
						ls.add(catname);
					}
					
					count++;
				}
								
//				}
				
				xa.setCategories(ls);
				
				lsxa.add(xa);
				
				xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(rotation);
				
		        chartOptions.getXAxis().add(xa);
		        
		        xa = new XAxis();
		        
		        if (colarr[j].length()>10) 
			      {
			          seriesBar.setName(colarr[j].substring(0, 10));  
			          chartOptions.getSeries().add(seriesBar);
			      }
			      else 
			      {
			          seriesBar.setName(colarr[j]);
			          chartOptions.getSeries().add(seriesBar);			          
			      }

				 seriesBar.setDataAsArrayNumber(lsData);
				
			}
			
		}
		else
		{   
			int coooont = 0;
			for (int j=0;j<data.size();j++) 
			{	
			
				List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data2 = data.get(j); 
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
				
					lsData.add(data2.get(k).getY());
					
					array.add(new com.hyjavacharts.model.highcharts.series.seriesbar.Data().
							setName(data2.get(k).getName()).
							setY(data2.get(k).getY())	
						);
					
//					lsData_y.add((Integer) data2.get(k).getY());
					
					
					if (j==0) 
					{
						ls.add(catname);
					}
					
					
				}
				
				if (j==0) 
				{
					xa.setCategories(ls);
					lsxa.add(xa);
					
					xa.setMin(0).getTitle().setText(X_field_);
					xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(rotation);
					
			        chartOptions.getXAxis().add(xa);
		        
				}
				
//			int max_value = maxValue(lsData);
			
//			System.out.println("max_value #### "+max_value);

				SeriesBar seriesBar = new SeriesBar();
				
				 if (colarr[j].length()>10) 
				      {
					 seriesBar.setName(colarr[j].substring(0, 10));
				      }
				 else
				 {
					 seriesBar.setName(colarr[j]);
				 }
				
				
				
				
				
//				
//				      SeriesBar seriesBar = new SeriesBar();
// 
//				      if (colarr[j].length()>10) 
//				      {
//				    	  
//				    	  if(color_bar.isArray())
//				    	  {
//				    		  int d=0;
//				    		  for (JsonNode jsonNode_color_bar : color_bar) 
//				    		  {
//				    			  
//				    			 if(j == 0)
//				    			 {
//				    				 System.out.println("jsonNode_color_bar           :::::"+jsonNode_color_bar);
//				    				 
//				    				 seriesBar = new SeriesBar();
//				    				 
//					    			  System.out.println("color_bar_[q]           :::::"+jsonNode_color_bar.toString());
//
//					    			  seriesBar.setName(colarr[d].substring(0, 10)).setColor(new Color(jsonNode_color_bar.toString().replace("\"", "").toString()));
//	 
//				    			 }
//				    		
//				    			
//				    			 d++;
//					    	  }
//	
//				    	  }
//
//				      }
//				      else 
//				      {
//				    	  if(color_bar.isArray())
//				    	  {
//				    		  int d=0;
//				    		  for (JsonNode jsonNode_color_bar : color_bar) 
//				    		  {
//				    			  
//				    			 if(j == 0)
//				    			 {
//				    				 System.out.println("jsonNode_color_bar           :::::"+jsonNode_color_bar);
//				    				 
//				    				 seriesBar = new SeriesBar();
//				    				 
//					    			  System.out.println("color_bar_[q]           :::::"+jsonNode_color_bar.toString());
//
//					    			  seriesBar.setName(colarr[d]).setColor(new Color(jsonNode_color_bar.toString().replace("\"", "").toString()));
//	 
//				    			 }
//				    		
//				    			
//				    			 d++;
//					    	  }
//				    	   
//				    	  }
//				
//				      }
			 
				      
				      seriesBar.setDataAsArrayNumber(lsData);
		                chartOptions.getSeries().add(seriesBar);
				} 

				
			}
		
		return highChart;
	}
	
	
//	public int maxValue(List<Number> lsData){
//		
//
//		
//		
//		
//		
//			  List<Integer> list = new ArrayList<Integer>();
//			  for (int i = 0; i < lsData.size(); i++) {
//			    list.add(lsData.get(i));
//			  }
//			  return Collections.max(list);
//			
//		
//		
////		 List<Number> list = new ArrayList<Number>();
////		 
////		 
////		 lsData.
////		  
////		  for (int i = 0; i < lsData.size(); i++) {
////			  
////			  list.add(lsData.get(i));
////		    list.add((Integer) lsData.get(i));
////		  }
////		  
////		  
////		  return Collections.max(list);		
//		}
	
	
	
//	public Highchart configure_barbin(List<List<com.hyjavacharts.model.highcharts.series.seriesbar.Data>>   data,
//			String title,
//			String subtitle,int isstack,String columnlist,int isbin) 
//	{
//		Highchart highChart = new Highchart();
//		highChart.setTheme(HighchartTheme.DARK_UNICA);
//		ChartOptions chartOptions = highChart.getChartOptions();
//		chartOptions.getTitle().setText(title);
//		chartOptions.getSubtitle().setText(subtitle);
//
//		chartOptions.getChart().setType(ChartType.BAR)
//		.setPlotShadow(false)    
//		.setPlotBackgroundColor(null)
//		.setPlotBorderWidth(null);
//		
//		if (isstack == 1) 
//		{
//			//chartOptions.getPlotOptions() .getBar().setStacking(Stacking.NORMAL);
//		}
//		
//		List<String> ls = new ArrayList<String>();
//		List<Number> lsData = new ArrayList<Number>();
//		List<Number> lsDataX = new ArrayList<Number>();
//		
//		ArrayList<com.hyjavacharts.model.highcharts.series.seriesbar.Data> array 
//		= new ArrayList<com.hyjavacharts.model.highcharts.series.seriesbar.Data>();
//		
//		XAxis xa = new XAxis();
//		List<XAxis> lsxa = new ArrayList<XAxis>();     
//		
////		System.out.println("columnlist:::::::::::"+columnlist);
//		 
//		String colarr[] = columnlist.split(",");
////		System.out.println("colarr:::::::::::"+colarr.length);
//		
//        YAxis yAxis = new YAxis();
//        yAxis.setMin(0).getTitle().setText("").setAlign(TitleAlign.HIGH);
//        yAxis.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
//        chartOptions.getYAxis().add(yAxis);
//       
//        chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT).setVerticalAlign(VerticalAlign.MIDDLE);
//		
//		chartOptions.getPlotOptions().getBar().getLabel().setConnectorAllowed(false);
//		
//		
//		chartOptions.getResponsive().getRulesSingle()
//			.getCondition().setMaxWidth(500);
//		chartOptions.getResponsive().getRulesSingle()
//			.getChartOptions().getLegend()
//				.setLayout(Layout.HORIZONTAL).setAlign(HorizontalAlign.CENTER).setVerticalAlign(VerticalAlign.BOTTOM);
//	
//			for (int j=0;j<data.size();j++) 
//			{	
//			
////				List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data2 = data.get(j); 
//				lsData = new ArrayList<Number>();
//				String catname ="";
//				String catname_ ="";
//				
//				SeriesBar seriesBar = new SeriesBar();
//				
////				for (int m=0;m<data2.size();m++) 
////				{
////				System.out.println(j +"  data2.size():::::::::::"+data.size() );
//				List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data3 = data.get(j);
//				for (int k=0;k <data3.size();k++) 
//				{
////					System.out.println(k +"  data3.size():::::::::::"+data3.size() );
//					catname = data3.get(k).getName();
//
//					lsData.add(data3.get(k).getY());
//					array.add(new com.hyjavacharts.model.highcharts.series.seriesbar.Data().
//							setName(data3.get(k).getName()).
//							setY(data3.get(k).getY())	
//						);
//					if(j == 0)
//					{
//					ls.add(catname);
//					}
//				}
//								
////				}
//
//				xa.setCategories(ls);
//				lsxa.add(xa);
//				xa.setMin(0).getTitle().setText(null);
//				xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
//				
//		        chartOptions.getXAxis().add(xa);
//		        if (colarr[j].length()>10) 
//			      {
//			          seriesBar.setName(colarr[j].substring(0, 10));  
//			          chartOptions.getSeries().add(seriesBar);
//			      }
//			      else 
//			      {
//			          seriesBar.setName(colarr[j]);
//			          chartOptions.getSeries().add(seriesBar);			          
//			      }
//
//				 seriesBar.setDataAsArrayNumber(lsData);
//				
//			}
//		
//		
//		return highChart;
//	}
//	
//	public Highchart configure_barbin_(List<List<List<com.hyjavacharts.model.highcharts.series.seriesbar.Data>>>   data,
//			String title,
//			String subtitle,int isstack,String columnlist,int isbin) 
//	{
//		Highchart highChart = new Highchart();
//		highChart.setTheme(HighchartTheme.DARK_UNICA);
//		ChartOptions chartOptions = highChart.getChartOptions();
//		chartOptions.getTitle().setText(title);
//		chartOptions.getSubtitle().setText(subtitle);
//
//		chartOptions.getChart().setType(ChartType.BAR)
//		.setPlotShadow(false)    
//		.setPlotBackgroundColor(null)
//		.setPlotBorderWidth(null);
//		
//		if (isstack == 1) 
//		{
//			//chartOptions.getPlotOptions() .getBar().setStacking(Stacking.NORMAL);
//		}
//		
//		List<String> ls = new ArrayList<String>();
//		List<Number> lsData = new ArrayList<Number>();
//		List<Number> lsDataX = new ArrayList<Number>();
//		
//		ArrayList<com.hyjavacharts.model.highcharts.series.seriesbar.Data> array 
//		= new ArrayList<com.hyjavacharts.model.highcharts.series.seriesbar.Data>();
//		
//		XAxis xa = new XAxis();
//		List<XAxis> lsxa = new ArrayList<XAxis>();     
//		
////		System.out.println("columnlist:::::::::::"+columnlist);
//		 
//		String colarr[] = columnlist.split(",");
////		System.out.println("colarr:::::::::::"+colarr.length);
//		
//        YAxis yAxis = new YAxis();
//        yAxis.setMin(0).getTitle().setText("").setAlign(TitleAlign.HIGH);
//        yAxis.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
//        chartOptions.getYAxis().add(yAxis);
//       
//        chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT).setVerticalAlign(VerticalAlign.MIDDLE);
//		
//		chartOptions.getPlotOptions().getBar().getLabel().setConnectorAllowed(false);
//		
//		
//		chartOptions.getResponsive().getRulesSingle()
//			.getCondition().setMaxWidth(500);
//		chartOptions.getResponsive().getRulesSingle()
//			.getChartOptions().getLegend()
//				.setLayout(Layout.HORIZONTAL).setAlign(HorizontalAlign.CENTER).setVerticalAlign(VerticalAlign.BOTTOM);
//	
//			for (int j=0;j<data.size();j++) 
//			{	
//			
//				List<List<com.hyjavacharts.model.highcharts.series.seriesbar.Data>> data2 = data.get(j); 
//				lsData = new ArrayList<Number>();
//				String catname ="";
//				String catname_ ="";
//				
//				SeriesBar seriesBar = new SeriesBar();
//				
//				for (int m=0;m<data2.size();m++) 
//				{
////				System.out.println(m +"  data2.size():::::::::::"+data2.size() );
//				List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data3 = data2.get(m);
//				for (int k=0;k <data3.size();k++) 
//				{
////					System.out.println(k +"  data3.size():::::::::::"+data3.size() );
//					catname = data3.get(k).getName();
//
//					lsData.add(data3.get(k).getY());
//					array.add(new com.hyjavacharts.model.highcharts.series.seriesbar.Data().
//							setName(data3.get(k).getName()).
//							setY(data3.get(k).getY())	
//						);
//					if(j == 0)
//					{
//					ls.add(catname);
//					}
//				}
//								
//				}
//
//				xa.setCategories(ls);
//				lsxa.add(xa);
//				xa.setMin(0).getTitle().setText(null);
//				xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
//				
//		        chartOptions.getXAxis().add(xa);
//		        if (colarr[j].length()>10) 
//			      {
//			          seriesBar.setName(colarr[j].substring(0, 10));  
//			          chartOptions.getSeries().add(seriesBar);
//			      }
//			      else 
//			      {
//			          seriesBar.setName(colarr[j]);
//			          chartOptions.getSeries().add(seriesBar);			          
//			      }
//
//				 seriesBar.setDataAsArrayNumber(lsData);
//				
//			}
//		
//		
//		return highChart;
//	}
	
	
	public Highchart configurePyramid(List<List<com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data>>   data,
			String title,
			String subtitle,int isstack,String columnlist,int isbin,String X_field_,String properties_) 
	{
		Highchart highChart = new Highchart();
		highChart.setTheme(HighchartTheme.DARK_UNICA);
		ChartOptions chartOptions = highChart.getChartOptions();
		
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
	
		//chartOptions.getTitle().setText(title).getStyle().setCssValue("{ color: '#cdcdcd'}");
		
		
        
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
		
		chartOptions.getSubtitle().setText(subtitle);

		chartOptions.getChart().setType(ChartType.COLUMNPYRAMID)
		.setPlotShadow(false)    
		.setPlotBackgroundColor(null)
		.setPlotBorderWidth(null);
		//chartOptions.getChart().setPlotBackgroundImage("https://commons.wikimedia.org/wiki/File:Computer-screen-code-glitch-animation-gif-background-free.gif");
		
		
//	System.out.println(" configure isstack-------"+isstack);
		
		if (isstack == 1) 
		{
			//chartOptions.getPlotOptions() .getBar().setStacking(Stacking.NORMAL);
		}
		
		
		
		List<String> ls = new ArrayList<String>();
		List<Number> lsData = new ArrayList<Number>();
		List<Number> lsDataX = new ArrayList<Number>();
		
		ArrayList<com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data> array 
		= new ArrayList<com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data>();
		
		XAxis xa = new XAxis();
		List<XAxis> lsxa = new ArrayList<XAxis>();     
		
//		System.out.println("columnlist:::::::::::"+columnlist);
		 
		String colarr[] = columnlist.split(",");
//		System.out.println("colarr:::::::::::"+colarr.length);
		//xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY).getStyle().setCssValue("{ color: 'Gainsboro'}");
		
        YAxis yAxis = new YAxis();
        yAxis.setMin(0).getTitle().setText("").setAlign(TitleAlign.HIGH);
        //.getStyle().setCssValue("{ color: '#cdcdcd'}");
        yAxis.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(y_rotation);
        chartOptions.getYAxis().add(yAxis);
        //yAxis.getLabels().setOverflow(LabelsOverflow.JUSTIFY).getStyle().setCssValue("{ color: 'Gainsboro'}");
		
//        chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT).setVerticalAlign(VerticalAlign.MIDDLE);
		
		chartOptions.getPlotOptions().getBar().getLabel().setConnectorAllowed(false);
		
		
		chartOptions.getResponsive().getRulesSingle()
			.getCondition().setMaxWidth(500);
//		chartOptions.getResponsive().getRulesSingle()
//			.getChartOptions().getLegend()
//				.setLayout(Layout.HORIZONTAL).setAlign(HorizontalAlign.CENTER).setVerticalAlign(VerticalAlign.BOTTOM);
//		System.out.println("data.size():::::::::::"+data.size());
		
		
		if(isbin == 1)
		{ 
			
			for (int j=0;j<data.size();j++) 
			{	
				 xa = new XAxis();
//				List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data2 = data.get(j); 
				lsData = new ArrayList<Number>();
				String catname ="";
				String catname_ ="";
				
				SeriesColumnpyramid seriesBar = new SeriesColumnpyramid();
				
//				for (int m=0;m<data2.size();m++) 
//				{
//				System.out.println(j +"  data2.size():::::::::::"+data.size() );
				List<com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data> data3 = data.get(j);
				for (int k=0;k <data3.size();k++) 
				{
//					System.out.println(k +"  data3.size():::::::::::"+data3.size() );
					
					if(x_category == true)
					{
						catname = prefix + data3.get(k).getName() +suffix;
					}
					else
					{
						catname =  data3.get(k).getName();
					}
					
//					catname = data3.get(k).getName();

					lsData.add(data3.get(k).getY());
					array.add(new com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data().
							setName(catname).
							setY(data3.get(k).getY())	
						);
					if(j == 0)
					{
					ls.add(catname);
					xa.setMin(0).getTitle().setText(X_field_).setAlign(TitleAlign.MIDDLE);
					}
				}
								
//				}

				xa.setCategories(ls);
				lsxa.add(xa);
				
//				xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
				xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(rotation);
				
		        chartOptions.getXAxis().add(xa);
		        
		        xa = new XAxis();
		        if (colarr[j].length()>10) 
			      {
			          seriesBar.setName(colarr[j].substring(0, 10));  
			          chartOptions.getSeries().add(seriesBar);
			      }
			      else 
			      {
			          seriesBar.setName(colarr[j]);
			          chartOptions.getSeries().add(seriesBar);			          
			      }

				 seriesBar.setDataAsArrayNumber(lsData);
				
			}
        	
		}
		else
		{
			for (int j=0;j<data.size();j++) 
			{	
			
				List<com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data> data2 = data.get(j); 
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
					
//					catname = data2.get(k).getName();

					lsData.add(data2.get(k).getY());
					
					array.add(new com.hyjavacharts.model.highcharts.series.seriescolumnpyramid.Data().
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
					xa.setCategories(ls);
					lsxa.add(xa);
					
					xa.setMin(0).getTitle().setText(X_field_).setAlign(TitleAlign.MIDDLE);
//					xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
					xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(rotation);
			        chartOptions.getXAxis().add(xa);
		        
				}
		        
		        
				SeriesColumnpyramid seriesBar = new SeriesColumnpyramid();
				      
				
				      
//				      System.out.println("catname:::::"+catname);
//				      System.out.println("colarr[j].length():::::"+colarr[j]);
//				    System.out.println("isbin::::"+isbin);  
				if (isbin ==0) 
				{      
				      if (colarr[j].length()>10) 
				      {
				          seriesBar.setName(colarr[j].substring(0, 10));
//				          System.out.println("isffffff::::");  
				      }
				      else 
				      {
				          seriesBar.setName(colarr[j]);
//				          System.out.println("else   ::::");  
				          
				      }
				}else 
				{
					 if (colarr[j].length()>10) 
				      {
				          seriesBar.setName(colarr[j].substring(0, 10));
//				          System.out.println("isffffff::::");  
				      }
				      else 
				      {
				          seriesBar.setName(colarr[j]);
//				          System.out.println("else   ::::");  
				          
				      }
       
				}  
			                    seriesBar.setDataAsArrayNumber(lsData);
				                chartOptions.getSeries().add(seriesBar);
				
			}
			
			
		}
		
			
		
		//chartOptions.set
		
		return highChart;
	}
	
	
	
	
	
	// top categories and others 
//	
//	public Highchart configure_(List<List<com.hyjavacharts.model.highcharts.series.seriesbar.Data>>   data,
//			String title,
//			String subtitle,int isstack,String columnlist,String X_field_) 
//	{
//		Highchart highChart = new Highchart();
//		ChartOptions chartOptions = highChart.getChartOptions();
//	    		
//		chartOptions.getTitle().setText(title);
//		chartOptions.getSubtitle().setText(subtitle);
//
//		chartOptions.getChart().setType(ChartType.BAR)
//		.setPlotShadow(false)
//		.setPlotBackgroundColor(null)
//		.setPlotBorderWidth(null);
//		
////	System.out.println(" configure isstack-------"+isstack);
//		
//		if (isstack == 1) 
//		{
//			//chartOptions.getPlotOptions() .getBar().setStacking(Stacking.NORMAL);
//		}
//		
//		
//		
//		List<String> ls = new ArrayList<String>();
//		List<Number> lsData = new ArrayList<Number>();
//		List<Number> lsDataX = new ArrayList<Number>();
//		
//		ArrayList<com.hyjavacharts.model.highcharts.series.seriesbar.Data> array 
//		= new ArrayList<com.hyjavacharts.model.highcharts.series.seriesbar.Data>();
//		
//		XAxis xa = new XAxis();
//		List<XAxis> lsxa = new ArrayList<XAxis>();     
//		
////		System.out.println("columnlist:::::::::::"+columnlist);
//		 
//		String colarr[] = columnlist.split(",");
//		
//		
//		
//		//chartOptions.setXAxis(lsxa);
//		
//		
//        YAxis yAxis = new YAxis();
//        yAxis.setMin(0).getTitle().setText("").setAlign(TitleAlign.HIGH);
//        yAxis.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
//        chartOptions.getYAxis().add(yAxis);
//
////		chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT).setVerticalAlign(VerticalAlign.MIDDLE);
//		chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT).setVerticalAlign(VerticalAlign.MIDDLE);
//        chartOptions.getPlotOptions()
//            .getSeries()
//                .setPointStart(2010)
//                .getLabel().setConnectorAllowed(false);
//		
//		chartOptions.getPlotOptions().getBar().getLabel().setConnectorAllowed(false);
//		
//		
//		chartOptions.getResponsive().getRulesSingle()
//			.getCondition().setMaxWidth(500);
//		chartOptions.getResponsive().getRulesSingle()
//			.getChartOptions().getLegend()
//				.setLayout(Layout.HORIZONTAL).setAlign(HorizontalAlign.CENTER).setVerticalAlign(VerticalAlign.BOTTOM);
//
////		
////		 chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT)
////         .setVerticalAlign(VerticalAlign.TOP).setX(-40).setY(80).setFloating(true)
////         .setBorderWidth(1).setShadow(true)
////         .getBackgroundColor().setColorValue("((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF')");
////     
//		
//		Double db = 0.0;
//		int dbcount =0;
//		int topcount = 9;
//		int addotherflag =0;
//		List<List<com.hyjavacharts.model.highcharts.series.seriesbar.Data>>   datatemp = new ArrayList<List<com.hyjavacharts.model.highcharts.series.seriesbar.Data>>();
//		List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> datatempchild = new ArrayList<com.hyjavacharts.model.highcharts.series.seriesbar.Data>();
//		
//		for (int j=0;j<data.size();j++) 
//		{	
//		
////			System.out.println("temp in ");
//			List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data2 = data.get(j);     
//			lsData = new ArrayList<Number>();
//			
//			for (int k=0;k <data2.size();k++) 
//			{
//				
//				//lsData.add(data2.get(k).getY()) ;
////				System.out.println("temp in 2 ");
//				if ((k+1) <= topcount ) 
//				{
//				
//				datatempchild.add(new com.hyjavacharts.model.highcharts.series.seriesbar.Data().
//						setName(data2.get(k).getName()).
//						setY(data2.get(k).getY())	
//					);
//				
//				System.out.println("datatempchild::::"+datatempchild);
//				}
//				else 
//				{
//					
//					//calculate db   SUM avg max min count count unique median
//					db = db + data2.get(k).getY().floatValue();
//					System.out.println("db::::"+db);
//					addotherflag =1;
//					dbcount++;
//				}
//			
//			}
//			
//			
//			//datatemp.add(datatempchild);
//		
//		}
//		
//		 
//	if (addotherflag > 0) 
//	{	
//		//calculate db   SUM avg max min count count unique median
//		datatempchild.add(new com.hyjavacharts.model.highcharts.series.seriesbar.Data().
//				setName("others").    
//				setY(db)	
//			); 
//		
//		
//    }	
//	
//	datatemp.add(datatempchild);
//	
//	System.out.println("datatemp size:::"+datatemp.size());    
//	System.out.println("datatemp:::::"+datatemp.toString());
//		 
//		 
//		for (int j=0;j<datatemp.size();j++) 
//		{	
//		
//			List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data2 = datatemp.get(j); 
//			lsData = new ArrayList<Number>();
//			
//			for (int k=0;k <data2.size();k++) 
//			{
//				String catname ="";
//				catname = data2.get(k).getName();
//				lsData.add(data2.get(k).getY()) ;
//				
//				array.add(new com.hyjavacharts.model.highcharts.series.seriesbar.Data().
//						setName(data2.get(k).getName()).
//						setY(data2.get(k).getY())	
//					);
//				
//				
//				if (j==0) 
//				{
//					ls.add(catname);
//				}
//			}
//			
//			if (j==0) 
//			{
//			xa.setCategories(ls);
//			lsxa.add(xa);
//			
//			xa.getTitle().setText(X_field_);
//	        chartOptions.getXAxis().add(xa);
//			}
//	        
//	        
//			      SeriesBar seriesBar = new SeriesBar();
//			      
//			      if (colarr[j].length()>10) 
//			      {
//			          seriesBar.setName(colarr[j].substring(0, 10));
//			          
//			      }
//			      else 
//			      {
//			          seriesBar.setName(colarr[j]);
//			          
//			      }
//			      
//		                    seriesBar.setDataAsArrayNumber(lsData);
//			                chartOptions.getSeries().add(seriesBar);
//			
//			
//		}
//		
//		return highChart;
//	}
//	
	

	public Highchart configureStack(List<List<com.hyjavacharts.model.highcharts.series.seriesbar.Data>>   data,
			String title,
			String subtitle,int isstack,String columnlist, int isbin,String X_field_ ,String properties_) 
	{
		Highchart highChart = new Highchart();
		ChartOptions chartOptions = highChart.getChartOptions();
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
		
		
		
//      String titlealign ="";
//		titlealign = jsonNode_properties.get("title_alignment").asText();
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
		

		chartOptions.getSubtitle().setText(subtitle);

		chartOptions.getChart().setType(ChartType.COLUMN)
		.setPlotShadow(false)
		.setPlotBackgroundColor(null)
		.setPlotBorderWidth(null);
	System.out.println("configureStack isstack-------"+isstack);
		
//		if (isstack == 1) 
//		{
			chartOptions.getPlotOptions().getColumn().setStacking(Stacking.NORMAL);
//		}
		
		
		
		List<String> ls = new ArrayList<String>();
		List<Number> lsData = new ArrayList<Number>();
		List<Number> lsDataX = new ArrayList<Number>();
		
		ArrayList<com.hyjavacharts.model.highcharts.series.seriescolumn.Data> array 
		= new ArrayList<com.hyjavacharts.model.highcharts.series.seriescolumn.Data>();
		
		XAxis xa = new XAxis();
		List<XAxis> lsxa = new ArrayList<XAxis>();     
		
//		System.out.println("columnlist:::::::::::"+columnlist);
		 
		String colarr[] = columnlist.split(",");
		 YAxis yAxis = new YAxis();
	        yAxis.setMin(0).getTitle().setText("").setAlign(TitleAlign.HIGH);
	        yAxis.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(y_rotation);
	        chartOptions.getYAxis().add(yAxis);

//			chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT).setVerticalAlign(VerticalAlign.MIDDLE);
//			chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT).setVerticalAlign(VerticalAlign.MIDDLE);
	        chartOptions.getPlotOptions()
	            .getSeries()	            
	                .getLabel().setConnectorAllowed(false);
	        
			chartOptions.getPlotOptions().getBar().getLabel().setConnectorAllowed(false);
			
			
			chartOptions.getResponsive().getRulesSingle()
				.getCondition().setMaxWidth(500);
//			chartOptions.getResponsive().getRulesSingle()
//				.getChartOptions().getLegend()
//					.setLayout(Layout.HORIZONTAL).setAlign(HorizontalAlign.CENTER).setVerticalAlign(VerticalAlign.BOTTOM);
		
			
			if(isbin == 1)
			{ 
				for (int j=0;j<data.size();j++) 
				{	
				
//					List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data2 = data.get(j); 
					lsData = new ArrayList<Number>();
					String catname ="";
					String catname_ ="";
					
					SeriesColumn seriesBar = new SeriesColumn();
					
//					for (int m=0;m<data2.size();m++) 
//					{
//					System.out.println(j +"  data2.size():::::::::::"+data.size() );
					List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data3 = data.get(j);
					for (int k=0;k <data3.size();k++) 
					{
//						System.out.println(k +"  data3.size():::::::::::"+data3.size() );
//						catname = data3.get(k).getName();
						if(x_category == true)
						{
							catname = prefix + data3.get(k).getName() +suffix;
						}
						else
						{
							catname =  data3.get(k).getName();
						}
						
						lsData.add(data3.get(k).getY());
						array.add(new com.hyjavacharts.model.highcharts.series.seriescolumn.Data().
								setName(catname).
								setY(data3.get(k).getY())	
							);
						if(j == 0)
						{
						ls.add(catname);
						xa.setMin(0).getTitle().setText(X_field_).setAlign(TitleAlign.MIDDLE);
						}
					}
									
//					}

					xa.setCategories(ls);
					lsxa.add(xa);
					
//					xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
					xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(rotation);
					
			        chartOptions.getXAxis().add(xa);
			        
			        xa = new XAxis();
			        
			        if (colarr[j].length()>10) 
				      {
				          seriesBar.setName(colarr[j].substring(0, 10));  
				          chartOptions.getSeries().add(seriesBar);
				      }
				      else 
				      {
				          seriesBar.setName(colarr[j]);
				          chartOptions.getSeries().add(seriesBar);			          
				      }

					 seriesBar.setDataAsArrayNumber(lsData);
					
				}
				
			}
			else
			{
				
						
				try {	
					
			//		System.out.println("data size ::::"+data.size());
					
				for (int j=0;j<data.size();j++) 
				{	
				
					List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data2 = data.get(j); 
					lsData = new ArrayList<Number>();
					
					for (int k=0;k <data2.size();k++) 
					{
						String catname ="";
						
						if(x_category == true)
						{
							catname = prefix + data2.get(k).getName() +suffix;
						}
						else
						{
							catname =  data2.get(k).getName();
						}
						
						
						
//						catname = data2.get(k).getName();
						lsData.add(data2.get(k).getY()) ;
						
						array.add(new com.hyjavacharts.model.highcharts.series.seriescolumn.Data().
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
						xa.setCategories(ls);
						lsxa.add(xa);
						
						xa.setMin(0).getTitle().setText(X_field_).setAlign(TitleAlign.MIDDLE);
//						xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
						xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(rotation);						
				        chartOptions.getXAxis().add(xa);
			        
					}
					
			//		System.out.println("colarr[j]:::::::::::::::"+colarr[j]);
					      SeriesColumn seriesBar = new SeriesColumn();
					      
					      if (colarr[j].length()>10) 
					      {
					          seriesBar.setName(colarr[j].substring(0, 10));
					          
					      }
					      else 
					      {
					          seriesBar.setName(colarr[j]);
					          
					      }
					      
				                    seriesBar.setDataAsArrayNumber(lsData);
					                chartOptions.getSeries().add(seriesBar);
					
					
				}
				
				}catch (Exception e) 
				{
					System.out.println("error getting series stacked:::"+e.toString());
					// TODO: handle exception
				}
			}
       
							
		
		return highChart;
	}
	
//	public Highchart configureStack(List<List<com.hyjavacharts.model.highcharts.series.seriesbar.Data>>   data,
//			String title,
//			String subtitle,int isstack,String columnlist, int isbin) 
//	{
//		Highchart highChart = new Highchart();
//		ChartOptions chartOptions = highChart.getChartOptions();
//	    		
//		chartOptions.getTitle().setText(title);
//		chartOptions.getSubtitle().setText(subtitle);
//
//		chartOptions.getChart().setType(ChartType.COLUMN)
//		.setPlotShadow(false)
//		.setPlotBackgroundColor(null)
//		.setPlotBorderWidth(null);
////	System.out.println("configureStack isstack-------"+isstack);
//		
//		if (isstack == 1) 
//		{
//			chartOptions.getPlotOptions().getColumn().setStacking(Stacking.NORMAL);
//		}
//		
//		
//		
//		List<String> ls = new ArrayList<String>();
//		List<Number> lsData = new ArrayList<Number>();
//		List<Number> lsDataX = new ArrayList<Number>();
//		
//		ArrayList<com.hyjavacharts.model.highcharts.series.seriesbar.Data> array 
//		= new ArrayList<com.hyjavacharts.model.highcharts.series.seriesbar.Data>();
//		
//		XAxis xa = new XAxis();
//		List<XAxis> lsxa = new ArrayList<XAxis>();     
//		
////		System.out.println("columnlist:::::::::::"+columnlist);
//		 
//		String colarr[] = columnlist.split(",");
//		
//		
//			
//			if(isbin == 1)
//			{ 
//				
//				for (int j=0;j<data.size();j++) 
//				{	
//					List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data2 = data.get(j); 
//					lsData = new ArrayList<Number>();
////					List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data2 = data.get(j); 
////					lsData = new ArrayList<Number>();
//					String catname ="";
//					String catname_ ="";
//					for (int k=0;k <data2.size();k++) 
//					{
//						
//						catname = data2.get(k).getName();
//
//						lsData.add(data2.get(k).getY());
//						
//						array.add(new com.hyjavacharts.model.highcharts.series.seriesbar.Data().
//								setName(data2.get(k).getName()).
//								setY(data2.get(k).getY())	
//							);
//						
//						
//						if (j==0) 
//						{
//							ls.add(catname);
//						}
//					}
//					
//					if (j==0) 
//					{
//					xa.setCategories(ls);//.getLabels().setUseHTML(true).setFormat(xa);
//					lsxa.add(xa);
////					xa.setWidth(20);//getResponsive().getRulesSingle()
//					
//					xa.setMin(0).getTitle().setText(null);//.setAlign(TitleAlign.HIGH);
//					xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
//					
//			        chartOptions.getXAxis().add(xa);
//			        
//					}
//
//					    System.out.println("isbin::::"+isbin);
//					    
//				}
//				
//				
//				for(int c=0;c<colarr.length ; c++)
//				{
//					SeriesBar seriesBar = new SeriesBar();
//					if (colarr[c].length()>10) 
//					      {
//					          seriesBar.setName(colarr[c].substring(0, 10));
//					          System.out.println("isffffff::::");  
//					          System.out.println("colarr[c]::::" +c  +"," +colarr[c]);  
//					          chartOptions.getSeries().add(seriesBar);
//					      }
//					      else 
//					      {
//					          seriesBar.setName(colarr[c]);
//					          System.out.println("else   ::::");  
//					          System.out.println("colarr[c]::::"+colarr[c]);
//					          
//					      }
//					seriesBar.setDataAsArrayNumber(lsData);
//				}
//				
//			}
//			else
//			{
//				
//						
//				try {	
//					
//			//		System.out.println("data size ::::"+data.size());
//					
//				for (int j=0;j<data.size();j++) 
//				{	
//				
//					List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data2 = data.get(j); 
//					lsData = new ArrayList<Number>();
//					
//					for (int k=0;k <data2.size();k++) 
//					{
//						String catname ="";
//						catname = data2.get(k).getName();
//						lsData.add(data2.get(k).getY()) ;
//						
//						array.add(new com.hyjavacharts.model.highcharts.series.seriesbar.Data().
//								setName(data2.get(k).getName()).
//								setY(data2.get(k).getY())	
//							);
//						
//						
//						if (j==0) 
//						{
//							ls.add(catname);
//						}
//					}
//					
//					if (j==0) 
//					{
//					xa.setCategories(ls);
//					lsxa.add(xa);
//					
//					xa.getTitle().setText(null);
//			        chartOptions.getXAxis().add(xa);
//					}
//			        
//			//		System.out.println("colarr[j]:::::::::::::::"+colarr[j]);
//					      SeriesBar seriesBar = new SeriesBar();
//					      
//					      if (colarr[j].length()>10) 
//					      {
//					          seriesBar.setName(colarr[j].substring(0, 10));
//					          
//					      }
//					      else 
//					      {
//					          seriesBar.setName(colarr[j]);
//					          
//					      }
//					      
//				                    seriesBar.setDataAsArrayObject(array);
//					                chartOptions.getSeries().add(seriesBar);
//					
//					
//				}
//				
//				}catch (Exception e) 
//				{
//					System.out.println("error getting series stacked:::"+e.toString());
//					// TODO: handle exception
//				}
//			}
//			 YAxis yAxis = new YAxis();
//		        yAxis.setMin(0).getTitle().setText("Avg").setAlign(TitleAlign.HIGH);
//		        yAxis.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
//		        chartOptions.getYAxis().add(yAxis);
//
////				chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT).setVerticalAlign(VerticalAlign.MIDDLE);
//				chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT).setVerticalAlign(VerticalAlign.MIDDLE);
//		        chartOptions.getPlotOptions()
//		            .getSeries()		              
//		                .getLabel().setConnectorAllowed(false);
//		        
//				chartOptions.getPlotOptions().getBar().getLabel().setConnectorAllowed(false);
//				
//				
//				chartOptions.getResponsive().getRulesSingle()
//					.getCondition().setMaxWidth(500);
//				chartOptions.getResponsive().getRulesSingle()
//					.getChartOptions().getLegend()
//						.setLayout(Layout.HORIZONTAL).setAlign(HorizontalAlign.CENTER).setVerticalAlign(VerticalAlign.BOTTOM);
//							
//		
//		return highChart;
//	}
	
	
	public Highchart configureHistogram_(List<List<com.hyjavacharts.model.highcharts.series.seriesbar.Data>>   data,
			String title,
			String subtitle,int isstack,String columnlist, int isbin ,String X_field_) 
	{
		Highchart highChart = new Highchart();
		ChartOptions chartOptions = highChart.getChartOptions();
		
		System.out.printf("data   #######   ",data);
		System.out.println(data);
//		System.out.println(Arrays.toString(data));
//		 System.out.println(Arrays.deepToString(data));
		chartOptions.getTitle().setText(title);
		chartOptions.getSubtitle().setText(subtitle);

		chartOptions.getChart().setType(ChartType.COLUMN)
//		.setInverted(false)
//		.setStyledMode(true)
		.setZoomType(ZoomType.X)
		.setPlotShadow(false)
		.setPlotBackgroundColor(null)
		.setPlotBorderWidth(null);
		
//		chartOptions.getData().setTable("datatable");
		
//	System.out.println("configureHistogram isstack-------"+isstack);
		
		if (isstack == 1) 
		{
			//chartOptions.getPlotOptions() .getBar().setStacking(Stacking.NORMAL);
		}
		
		
		
		List<String> ls = new ArrayList<String>();
		List<Number> lsData = new ArrayList<Number>();
		List<Number> lsDataX = new ArrayList<Number>();
		
		List<com.hyjavacharts.model.highcharts.series.seriescolumn.Data> array 
		= new ArrayList<com.hyjavacharts.model.highcharts.series.seriescolumn.Data>();
		
		XAxis xa = new XAxis();
		List<XAxis> lsxa = new ArrayList<XAxis>();     
		
//		System.out.println("columnlist:::::::::::"+columnlist);
		 
		String colarr[] = columnlist.split(",");
		if(isbin == 1)
		{ 
			
			for (int j=0;j<data.size();j++) 
			{	
			
//				List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data2 = data.get(j); 
				lsData = new ArrayList<Number>();
				String catname ="";
				String catname_ ="";
				
				SeriesBar seriesBar = new SeriesBar();
				
//				for (int m=0;m<data2.size();m++) 
//				{
//				System.out.println(j +"  data2.size():::::::::::"+data.size() );
				List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data3 = data.get(j);
				for (int k=0;k <data3.size();k++) 
				{
//					System.out.println(k +"  data3.size():::::::::::"+data3.size() );
					catname = data3.get(k).getName();

					lsData.add(data3.get(k).getY());
					array.add(new com.hyjavacharts.model.highcharts.series.seriescolumn.Data().
							setName(data3.get(k).getName()).
							setY(data3.get(k).getY())
						);
					if(j == 0)
					{
					ls.add(catname);
					xa.setMin(0).getTitle().setText(X_field_).setAlign(TitleAlign.MIDDLE);
					}
				}
								
//				}

				xa.setCategories(ls);
				lsxa.add(xa);
//				xa.setReversed(true);
				xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY);//.setAlign(HorizontalAlign.RIGHT);//.setRotation(-90);
				xa.getTitle().setText(X_field_).setAlign(TitleAlign.MIDDLE);
		        chartOptions.getXAxis().add(xa);
//		        chartOptions.getXAxis().add(xa);
		        
		        xa = new XAxis();
		        
		        if (colarr[j].length()>10) 
			      {
			          seriesBar.setName(colarr[j].substring(0, 10));  
			          chartOptions.getSeries().add(seriesBar);
			      }
			      else 
			      {
			          seriesBar.setName(colarr[j]);
			          chartOptions.getSeries().add(seriesBar);			          
			      }

				 seriesBar.setDataAsArrayNumber(lsData);
				
			}
			
		}
		else {
			try {	
				for (int j=0;j<data.size();j++) 
				{	
				
					List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data2 = data.get(j); 
					lsData = new ArrayList<Number>();
					
					for (int k=0;k <data2.size();k++) 
					{
						String catname ="";
						catname = data2.get(k).getName();
						lsData.add(data2.get(k).getY()) ;
						
						
						array.add(new com.hyjavacharts.model.highcharts.series.seriescolumn.Data().
								setName(data2.get(k).getName()).
								setY(data2.get(k).getY())
								//.setDrilldown(data2.get(k).getName())		
							);
						
						
						if (j==0) 
						{
							ls.add(catname);
						}
					}
					
					if (j==0) 
					{
					xa.setCategories(ls);
					lsxa.add(xa);
//					xa.setReversed(false);
					
					xa.getLabels().setOverflow(LabelsOverflow.ALLOW);//.setAlign(HorizontalAlign.RIGHT);;//.setRotation(-90);//.setRotation(+90);
					xa.getTitle().setText(X_field_).setAlign(TitleAlign.MIDDLE);

			        chartOptions.getXAxis().add(xa);
					}
			        
//					System.out.println("colarr[j]:::::::::::::::"+colarr[j]);
			        
					      SeriesColumn seriesBar = new SeriesColumn();
					      
					      if (colarr[j].length()>10) 
					      {
					          seriesBar.setName(colarr[j].substring(0, 10));
					          
					      }
					      else 
					      {
					          seriesBar.setName(colarr[j]);
					          
					      }
					      
				                    seriesBar.setDataAsArrayObject(array);
					                chartOptions.getSeries().add(seriesBar);
					
					
				}
				}catch (Exception e) 
				{
					System.out.println("error getting series area::::"+e.toString());
					// TODO: handle exception
				}
			
		}


        YAxis yAxis = new YAxis();
        yAxis.setMin(0).getTitle().setText("").setAlign(TitleAlign.HIGH);//.setTextAlign(TextAlign);
        yAxis.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
        yAxis.setReversed(true);
        chartOptions.getYAxis().add(yAxis);
        
//		chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT).setVerticalAlign(VerticalAlign.MIDDLE);

		chartOptions.getPlotOptions().getBar().getLabel().setConnectorAllowed(false);
		
		
		chartOptions.getResponsive().getRulesSingle()
			.getCondition().setMaxWidth(500);
//		chartOptions.getResponsive().getRulesSingle()
//			.getChartOptions().getLegend()
//				.setLayout(Layout.HORIZONTAL).setAlign(HorizontalAlign.CENTER).setVerticalAlign(VerticalAlign.BOTTOM);
							
		return highChart;
	}
	
	
	public Highchart configureHistogram(List<List<com.hyjavacharts.model.highcharts.series.seriesbar.Data>>   data,
			String title,
			String subtitle,int isstack,String columnlist, int isbin ,String X_field_ ,String properties_) 
	{
		Highchart highChart = new Highchart();
		
		ChartOptions chartOptions = highChart.getChartOptions();
		
		int rotation =-45;
		int y_rotation =0;
		
        String titlealign ="";
        
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
					
					titlealign  = jsonNode_properties.get("title_alignment").asText();
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
		
//		 top_bottom_ =highchart_prop.getLegend_position();
//	     label_rotation = highchart_prop.getLabel_rotation();
//		 data_labels = highchart_prop.isData_labels();
//		 zoom_type = highchart_prop.getZoom_type();
//		 font_color = highchart_prop.getFont_color();
//		 chart_flip = highchart_prop.isChart_flip();
//		 value_conversion = highchart_prop.getValue_conversion();
//		 data_barcolor = highchart_prop.getData_bar_color();
//		 title_alignment = highchart_prop.getTitle_alignment();

		
//        String titlealign ="";
//		titlealign = jsonNode_properties.get("title_alignment").asText();
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
			chartOptions.getTitle().setText(title);
		}
	    		
		chartOptions.getSubtitle().setText(subtitle);

		chartOptions.getChart().setType(ChartType.COLUMN)
		.setPlotShadow(false)
		.setPlotBackgroundColor(null)
		.setPlotBorderWidth(null);
		
//	System.out.println("configureHistogram isstack-------"+isstack);
		
		if (isstack == 1) 
		{
			//chartOptions.getPlotOptions() .getBar().setStacking(Stacking.NORMAL);
		}
		
		
		
		List<String> ls = new ArrayList<String>();
		List<Number> lsData = new ArrayList<Number>();
		List<Number> lsDataX = new ArrayList<Number>();
		
		ArrayList<com.hyjavacharts.model.highcharts.series.seriesbar.Data> array 
		= new ArrayList<com.hyjavacharts.model.highcharts.series.seriesbar.Data>();
		
		XAxis xa = new XAxis();
		List<XAxis> lsxa = new ArrayList<XAxis>();     
		
//		System.out.println("columnlist:::::::::::"+columnlist);
		 
		String colarr[] = columnlist.split(",");
		if(isbin == 1)
		{ 
			
			for (int j=0;j<data.size();j++) 
			{	
			
//				List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data2 = data.get(j); 
				lsData = new ArrayList<Number>();
				String catname ="";
				String catname_ ="";
				
				SeriesBar seriesBar = new SeriesBar();
				
//				for (int m=0;m<data2.size();m++) 
//				{
//				System.out.println(j +"  data2.size():::::::::::"+data.size() );
				List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data3 = data.get(j);
				for (int k=0;k <data3.size();k++) 
				{
//					System.out.println(k +"  data3.size():::::::::::"+data3.size() );
					if(x_category == true)
					{
						catname = prefix + data3.get(k).getName() +suffix;
					}
					else
					{
						catname =  data3.get(k).getName();
					}

					lsData.add(data3.get(k).getY());
					array.add(new com.hyjavacharts.model.highcharts.series.seriesbar.Data().
							setName(catname).
							setY(data3.get(k).getY())	
						);
					if(j == 0)
					{
					ls.add(catname);
					xa.setMin(0).getTitle().setText(X_field_).setAlign(TitleAlign.MIDDLE);
					}
				}
								
//				}

				xa.setCategories(ls);
				lsxa.add(xa);
				
//				xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
				xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(rotation);
		        chartOptions.getXAxis().add(xa);
		        
		        xa = new XAxis();
		        
		        if (colarr[j].length()>10) 
			      {
			          seriesBar.setName(colarr[j].substring(0, 10));  
			          chartOptions.getSeries().add(seriesBar);
			      }
			      else 
			      {
			          seriesBar.setName(colarr[j]);
			          chartOptions.getSeries().add(seriesBar);			          
			      }

				 seriesBar.setDataAsArrayNumber(lsData);
				
			}
			
		}
		else {
			try {	
				for (int j=0;j<data.size();j++) 
				{	
				
					List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data2 = data.get(j); 
					lsData = new ArrayList<Number>();
					
					for (int k=0;k <data2.size();k++) 
					{
						String catname ="";
						
						if(x_category == true)
						{
							catname = prefix + data2.get(k).getName() +suffix;
						}
						else
						{
							catname =  data2.get(k).getName();
						}
						
						
						
//						catname = data2.get(k).getName();
						lsData.add(data2.get(k).getY()) ;
						
						array.add(new com.hyjavacharts.model.highcharts.series.seriesbar.Data().
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
					xa.setCategories(ls);
					lsxa.add(xa);
					
					xa.getTitle().setText(X_field_).setAlign(TitleAlign.MIDDLE);
					
					xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(rotation);
					
			        chartOptions.getXAxis().add(xa);
					}
			        
//					System.out.println("colarr[j]:::::::::::::::"+colarr[j]);
			        
					      SeriesColumn seriesBar = new SeriesColumn();
					      
					      if (colarr[j].length()>10) 
					      {
					          seriesBar.setName(colarr[j].substring(0, 10));//.setColor(new Color("#DF5353"));
					          
					      }
					      else 
					      {
					          seriesBar.setName(colarr[j]);//.setColor(new Color("#DF5353"));;
					          
					      }
					      
				                    seriesBar.setDataAsArrayNumber(lsData);
					                chartOptions.getSeries().add(seriesBar);
					
					
				}
				}catch (Exception e) 
				{
					System.out.println("error getting series area::::"+e.toString());
					// TODO: handle exception
				}
			
		}

		
		
        YAxis yAxis = new YAxis();
        yAxis.setMin(0).getTitle().setText("").setAlign(TitleAlign.HIGH);
        yAxis.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(y_rotation);
        chartOptions.getYAxis().add(yAxis);

		chartOptions.getPlotOptions().getBar().getLabel().setConnectorAllowed(false);
				
		chartOptions.getResponsive().getRulesSingle()
			.getCondition().setMaxWidth(500);

		return highChart;
	}
	
	public Highchart configureStackArea100(List<List<com.hyjavacharts.model.highcharts.series.seriesarea.Data>>   data,
			String title,
			String subtitle,int isstack,String columnlist, int isbin,String X_field_ ,String properties_) 
	{
		Highchart highChart = new Highchart();
		ChartOptions chartOptions = highChart.getChartOptions();
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
	
		chartOptions.getSubtitle().setText(subtitle);

		chartOptions.getChart().setType(ChartType.AREA)
		.setPlotShadow(false)
		.setPlotBackgroundColor(null)
		.setPlotBorderWidth(null);
	System.out.println("configureStack isstack-------"+isstack);
		
//		if (isstack == 1) 
//		{
			chartOptions.getPlotOptions().getArea().setStacking(Stacking.PERCENT);
//		}
		
		
		
		List<String> ls = new ArrayList<String>();
		List<Number> lsData = new ArrayList<Number>();
		List<Number> lsDataX = new ArrayList<Number>();
		
		ArrayList<com.hyjavacharts.model.highcharts.series.seriesarea.Data> array 
		= new ArrayList<com.hyjavacharts.model.highcharts.series.seriesarea.Data>();
		
		XAxis xa = new XAxis();
		List<XAxis> lsxa = new ArrayList<XAxis>();     
		
//		System.out.println("columnlist:::::::::::"+columnlist);
		 
		String colarr[] = columnlist.split(",");
		
		if(isbin == 1)
		{ 
			
			for (int j=0;j<data.size();j++) 
			{				
				String catname ="";
				String catname_ ="";
				
				SeriesArea seriesarea = new SeriesArea();

//				System.out.println(j +"  data2.size():::::::::::"+data.size() );
				List<com.hyjavacharts.model.highcharts.series.seriesarea.Data> data3 = data.get(j);
				lsData = new ArrayList<Number>();
				for (int k=0;k <data3.size();k++) 
				{
//					System.out.println(k +"  data3.size():::::::::::"+data3.size() );
					

					if(x_category == true)
					{
						catname = prefix + data3.get(k).getName() +suffix;
					}
					else
					{
						catname =  data3.get(k).getName();
					}
					
//					catname = data3.get(k).getName();

					lsData.add(data3.get(k).getY());
					array.add(new com.hyjavacharts.model.highcharts.series.seriesarea.Data().
							setName(catname).
							setY(data3.get(k).getY())	
						);
					if(j == 0)
					{
					ls.add(catname);
					xa.setMin(0).getTitle().setText(X_field_).setAlign(TitleAlign.MIDDLE);
					}
				}

				xa.setCategories(ls);
				lsxa.add(xa);
				
//				xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
				xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(rotation);
				
		        chartOptions.getXAxis().add(xa);
		        
		        xa = new XAxis();
		        
		        if (colarr[j].length()>10) 
			      {
		        	seriesarea.setName(colarr[j].substring(0, 10));  
			          chartOptions.getSeries().add(seriesarea);
			      }
			      else 
			      {
			    	  seriesarea.setName(colarr[j]);
			          chartOptions.getSeries().add(seriesarea);			          
			      }

		        seriesarea.setDataAsArrayNumber(lsData);
				
			}		
			
			
		}
		else
		{
			
		
			try {	
				
		//		System.out.println("data size ::::"+data.size());
				
			for (int j=0;j<data.size();j++) 
			{	
			
				List<com.hyjavacharts.model.highcharts.series.seriesarea.Data> data2 = data.get(j); 
				lsData = new ArrayList<Number>();
				
				for (int k=0;k <data2.size();k++) 
				{
					String catname ="";
					

					if(x_category == true)
					{
						catname = prefix + data2.get(k).getName() +suffix;
					}
					else
					{
						catname =  data2.get(k).getName();
					}
					
					
//					catname = data2.get(k).getName();
					lsData.add(data2.get(k).getY()) ;
					
					array.add(new com.hyjavacharts.model.highcharts.series.seriesarea.Data().
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
				xa.setCategories(ls);
				lsxa.add(xa);
				
				xa.getTitle().setText(X_field_).setAlign(TitleAlign.MIDDLE);
				xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(rotation);
		        chartOptions.getXAxis().add(xa);
				}
		        
		//		System.out.println("colarr[j]:::::::::::::::"+colarr[j]);
				      SeriesArea seriesBar = new SeriesArea();
				      
				      if (colarr[j].length()>10) 
				      {
				          seriesBar.setName(colarr[j].substring(0, 10));
				          
				      }
				      else 
				      {
				          seriesBar.setName(colarr[j]);				          
				      }
				      
			                    seriesBar.setDataAsArrayNumber(lsData);
				                chartOptions.getSeries().add(seriesBar);
				
				
			}
			
			}catch (Exception e) 
			{
				System.out.println("error getting series stacked:::"+e.toString());
				// TODO: handle exception
			}
	}
		
		//chartOptions.setXAxis(lsxa);
		
		
        YAxis yAxis = new YAxis();
        yAxis.setMin(0).getTitle().setText("").setAlign(TitleAlign.HIGH);
        yAxis.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(y_rotation);
        chartOptions.getYAxis().add(yAxis);

//		chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT).setVerticalAlign(VerticalAlign.MIDDLE);

		chartOptions.getPlotOptions().getBar().getLabel().setConnectorAllowed(false);
		
		
		chartOptions.getResponsive().getRulesSingle()
			.getCondition().setMaxWidth(500);
//		chartOptions.getResponsive().getRulesSingle()
//			.getChartOptions().getLegend()
//				.setLayout(Layout.HORIZONTAL).setAlign(HorizontalAlign.CENTER).setVerticalAlign(VerticalAlign.BOTTOM);
							
		
		return highChart;
	}
	
	public Highchart configureStackArea(List<List<com.hyjavacharts.model.highcharts.series.seriesarea.Data>>   data,
			String title,
			String subtitle,int isstack,String columnlist, int isbin,String X_field_ ,String properties_) 
	{
		Highchart highChart = new Highchart();
		ChartOptions chartOptions = highChart.getChartOptions();
	    		
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
	        

		chartOptions.getSubtitle().setText(subtitle);

		chartOptions.getChart().setType(ChartType.AREA)
		.setPlotShadow(false)
		.setPlotBackgroundColor(null)
		.setPlotBorderWidth(null);

		if (isstack == 1) 
		{
			chartOptions.getPlotOptions() .getArea().setStacking(Stacking.NORMAL);
		}
		
		 YAxis yAxis = new YAxis();
	        yAxis.setMin(0).getTitle().setText("").setAlign(TitleAlign.HIGH);
	        yAxis.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(y_rotation);
	        chartOptions.getYAxis().add(yAxis);
	        		
//			chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT).setVerticalAlign(VerticalAlign.MIDDLE);
			
			chartOptions.getPlotOptions().getBar().getLabel().setConnectorAllowed(false);
					
			chartOptions.getResponsive().getRulesSingle()
				.getCondition().setMaxWidth(500);
//			chartOptions.getResponsive().getRulesSingle()
//				.getChartOptions().getLegend()
//					.setLayout(Layout.HORIZONTAL).setAlign(HorizontalAlign.CENTER).setVerticalAlign(VerticalAlign.BOTTOM);
								
			
		
		List<String> ls = new ArrayList<String>();
		List<Number> lsData = new ArrayList<Number>();
		List<Number> lsDataX = new ArrayList<Number>();
		
		ArrayList<com.hyjavacharts.model.highcharts.series.seriesarea.Data> array 
		= new ArrayList<com.hyjavacharts.model.highcharts.series.seriesarea.Data>();
		
		XAxis xa = new XAxis();
		List<XAxis> lsxa = new ArrayList<XAxis>();     

		String colarr[] = columnlist.split(",");
		
		if(isbin == 1)
		{ 			
			for (int j=0;j<data.size();j++) 
			{				
				String catname ="";
				String catname_ ="";
				
				SeriesArea seriesarea = new SeriesArea();

//				System.out.println(j +"  data2.size():::::::::::"+data.size() );
				List<com.hyjavacharts.model.highcharts.series.seriesarea.Data> data3 = data.get(j);
				lsData = new ArrayList<Number>();
				for (int k=0;k <data3.size();k++) 
				{
//					System.out.println(k +"  data3.size():::::::::::"+data3.size() );
					

					if(x_category == true)
					{
						catname = prefix + data3.get(k).getName() +suffix;
					}
					else
					{
						catname =  data3.get(k).getName();
					}
					
					
//					catname = data3.get(k).getName();

					lsData.add(data3.get(k).getY());
					array.add(new com.hyjavacharts.model.highcharts.series.seriesarea.Data().
							setName(catname).
							setY(data3.get(k).getY())	
						);
					if(j == 0)
					{
					ls.add(catname);
					xa.setMin(0).getTitle().setText(X_field_).setAlign(TitleAlign.MIDDLE);
					}
				}

				xa.setCategories(ls);
				lsxa.add(xa);
				
//				xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
				xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(rotation);
		        chartOptions.getXAxis().add(xa);
		        
		        xa = new XAxis();
		        
		        if (colarr[j].length()>10) 
			      {
		        	seriesarea.setName(colarr[j].substring(0, 10));  
			          chartOptions.getSeries().add(seriesarea);
			      }
			      else 
			      {
			    	  seriesarea.setName(colarr[j]);
			          chartOptions.getSeries().add(seriesarea);			          
			      }

		        seriesarea.setDataAsArrayNumber(lsData);
				
			}			
			
		}
		else
		{
		
			try {	

			for (int j=0;j<data.size();j++) 
			{	
			
				List<com.hyjavacharts.model.highcharts.series.seriesarea.Data> data2 = data.get(j); 
				lsData = new ArrayList<Number>();
				
				for (int k=0;k <data2.size();k++) 
				{
					String catname ="";
					
					if(x_category == true)
					{
						catname = prefix + data2.get(k).getName() +suffix;
					}
					else
					{
						catname =  data2.get(k).getName();
					}
					
//					catname = data2.get(k).getName();
					lsData.add(data2.get(k).getY()) ;
					
					array.add(new com.hyjavacharts.model.highcharts.series.seriesarea.Data().
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
				xa.setCategories(ls);
				lsxa.add(xa);
				
				xa.getTitle().setText(X_field_).setAlign(TitleAlign.MIDDLE);
				xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(rotation);
		        chartOptions.getXAxis().add(xa);
				}
		        
		//		System.out.println("colarr[j]:::::::::::::::"+colarr[j]);
				      SeriesArea seriesarea = new SeriesArea();
				      
				      if (colarr[j].length()>10) 
				      {
				    	  seriesarea.setName(colarr[j].substring(0, 10));
				          
				      }
				      else 
				      {
				    	  seriesarea.setName(colarr[j]);
				          
				      }
				      
				                seriesarea.setDataAsArrayNumber(lsData);
				                chartOptions.getSeries().add(seriesarea);
				
				
			}
			
			}catch (Exception e) 
			{
				System.out.println("error getting series stacked:::"+e.toString());
				// TODO: handle exception
			}
		}
       
		return highChart;
	}
	
	
//	public Highchart configureArea(List<List<com.hyjavacharts.model.highcharts.series.seriesbar.Data>>   data,
//			String title,
//			String subtitle,int isstack,String columnlist,int isbin,String X_field_) 
//	{
//		Highchart highChart = new Highchart();
//		ChartOptions chartOptions = highChart.getChartOptions();
//	    		
//		chartOptions.getTitle().setText(title);
//		chartOptions.getSubtitle().setText(subtitle);
//
//		chartOptions.getChart().setType(ChartType.AREA)
//		.setPlotShadow(false)
//		.setPlotBackgroundColor(null)
//		.setPlotBorderWidth(null);
//		
////	System.out.println("isstack-------"+isstack);
//		
//		if (isstack == 1) 
//		{
//			//chartOptions.getPlotOptions() .getBar().setStacking(Stacking.NORMAL);
//		}
//		
//		
//		
//		List<String> ls = new ArrayList<String>();
//		List<Number> lsData = new ArrayList<Number>();
//		List<Number> lsDataX = new ArrayList<Number>();
//		
//		ArrayList<com.hyjavacharts.model.highcharts.series.seriesbar.Data> array 
//		= new ArrayList<com.hyjavacharts.model.highcharts.series.seriesbar.Data>();
//		
//		XAxis xa = new XAxis();
//		List<XAxis> lsxa = new ArrayList<XAxis>();     
//		
////		System.out.println("columnlist:::::::::::"+columnlist);
//		 
//		String colarr[] = columnlist.split(",");
//		
//		if(isbin == 1)
//		{ 
//			
//			for (int j=0;j<data.size();j++) 
//			{	
//				List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data2 = data.get(j); 
//				lsData = new ArrayList<Number>();
////				List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data2 = data.get(j); 
////				lsData = new ArrayList<Number>();
//				String catname ="";
//				String catname_ ="";
//				for (int k=0;k <data2.size();k++) 
//				{
//					
//					catname = data2.get(k).getName();
//
//					lsData.add(data2.get(k).getY());
//					
//					array.add(new com.hyjavacharts.model.highcharts.series.seriesbar.Data().
//							setName(data2.get(k).getName()).
//							setY(data2.get(k).getY())	
//						);
//					
//					
//					if (j==0) 
//					{
//						ls.add(catname);
//						xa.setMin(0).getTitle().setText(X_field_).setAlign(TitleAlign.MIDDLE);
//					}
//				}
//				
//				if (j==0) 
//				{
//				xa.setCategories(ls);//.getLabels().setUseHTML(true).setFormat(xa);
//				lsxa.add(xa);
////				xa.setWidth(20);//getResponsive().getRulesSingle()
//				
//				//.setAlign(TitleAlign.HIGH);
//				xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
//				
//		        chartOptions.getXAxis().add(xa);
//		        
//		        xa = new XAxis();
//		        
//				}
//
////				    System.out.println("isbin::::"+isbin);
//				    
//			}
//			
//			
//			for(int c=0;c<colarr.length ; c++)
//			{
//				SeriesBar seriesBar = new SeriesBar();
//				if (colarr[c].length()>10) 
//				      {
//				          seriesBar.setName(colarr[c].substring(0, 10));
////				          System.out.println("isffffff::::");  
////				          System.out.println("colarr[c]::::" +c  +"," +colarr[c]);  
//				          chartOptions.getSeries().add(seriesBar);
//				      }
//				      else 
//				      {
//				          seriesBar.setName(colarr[c]);
////				          System.out.println("else   ::::");  
////				          System.out.println("colarr[c]::::"+colarr[c]);
//				          
//				      }
//				seriesBar.setDataAsArrayNumber(lsData);
//			}
//			
//			
//			 
//        	
//		}
//		else
//		{
//			for (int j=0;j<data.size();j++) 
//			{	
//			
//				List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data2 = data.get(j); 
//				lsData = new ArrayList<Number>();
//				
//				for (int k=0;k <data2.size();k++) 
//				{
//					String catname ="";
//					catname = data2.get(k).getName();
//					lsData.add(data2.get(k).getY()) ;
//					
//					array.add(new com.hyjavacharts.model.highcharts.series.seriesbar.Data().
//							setName(data2.get(k).getName()).
//							setY(data2.get(k).getY())	
//						);
//					
//					//chartOptions.getTooltip().setPointFormat("X : "+data2.get(k).getName() "<br/> " Weight:" {point.y} kg");
//					
//					
//					if (j==0) 
//					{
//						ls.add(catname);
//					}
//				}
//				
//				if (j==0) 
//				{
//				xa.setCategories(ls);
//				lsxa.add(xa);
//				
//				xa.getTitle().setText(X_field_).setAlign(TitleAlign.MIDDLE);
//		        chartOptions.getXAxis().add(xa);
//				}
//		        
//		        
//				      SeriesArea seriesBar = new SeriesArea();
//				      
//				      if (colarr[j].length()>10) 
//				      {
//				          seriesBar.setName(colarr[j].substring(0, 10));
//				          
//				      }
//				      else 
//				      {
//				          seriesBar.setName(colarr[j]);
//				          
//				      }
//				      
//			                    seriesBar.setDataAsArrayNumber(lsData);
//				                chartOptions.getSeries().add(seriesBar);
//						
//			}
//		}
//        YAxis yAxis = new YAxis();
//        yAxis.setMin(0).getTitle().setText("").setAlign(TitleAlign.HIGH);
//        yAxis.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
//        chartOptions.getYAxis().add(yAxis);
//        
//		
////		chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT).setVerticalAlign(VerticalAlign.MIDDLE);
//	
//		chartOptions.getPlotOptions().getBar().getLabel().setConnectorAllowed(false);
//		
//		
//		chartOptions.getResponsive().getRulesSingle()
//			.getCondition().setMaxWidth(500);
////		chartOptions.getResponsive().getRulesSingle()
////			.getChartOptions().getLegend()
////				.setLayout(Layout.HORIZONTAL).setAlign(HorizontalAlign.CENTER).setVerticalAlign(VerticalAlign.BOTTOM);
//							
//		SeriesBar seriesLine = new SeriesBar();
//		
//		seriesLine.setDataAsArrayObject(array);
//
//	
//		
//		return highChart;
//	}
	
	
	public Highchart configureBar100(List<List<com.hyjavacharts.model.highcharts.series.seriesbar.Data>>   data,
			String title,
			String subtitle,int isstack,String columnlist,int isbin,String X_field_ ,String properties_) 
	{
		Highchart highChart = new Highchart();
		highChart.setTheme(HighchartTheme.DARK_UNICA);
		ChartOptions chartOptions = highChart.getChartOptions();
		
	    String titlealign ="";
		int rotation =0;
		
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
		

		chartOptions.getSubtitle().setText(subtitle);

		chartOptions.getChart().setType(ChartType.BAR)
		.setPlotShadow(false)    
		.setPlotBackgroundColor(null)
		.setPlotBorderWidth(null);
		
		
//	System.out.println(" configure isstack-------"+isstack);
		
//		if (isstack == 1) 
//		{
			chartOptions.getPlotOptions() .getBar().setStacking(Stacking.PERCENT);
//		}
		
		
		
		List<String> ls = new ArrayList<String>();
		List<Number> lsData = new ArrayList<Number>();
		List<Number> lsDataX = new ArrayList<Number>();
		
		ArrayList<com.hyjavacharts.model.highcharts.series.seriesbar.Data> array 
		= new ArrayList<com.hyjavacharts.model.highcharts.series.seriesbar.Data>();
		
		XAxis xa = new XAxis();
		List<XAxis> lsxa = new ArrayList<XAxis>();     
		
//		System.out.println("columnlist:::::::::::"+columnlist);
		 
		String colarr[] = columnlist.split(",");

        YAxis yAxis = new YAxis();
        yAxis.setMin(0).getTitle().setText("").setAlign(TitleAlign.HIGH);
        yAxis.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(y_rotation);
        chartOptions.getYAxis().add(yAxis);
        
//		chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT).setVerticalAlign(VerticalAlign.MIDDLE);
	
		chartOptions.getPlotOptions().getBar().getLabel().setConnectorAllowed(false);
		
		
		chartOptions.getResponsive().getRulesSingle()
			.getCondition().setMaxWidth(500);
//		chartOptions.getResponsive().getRulesSingle()
//			.getChartOptions().getLegend()
//				.setLayout(Layout.HORIZONTAL).setAlign(HorizontalAlign.CENTER).setVerticalAlign(VerticalAlign.BOTTOM);

//		 chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT)
//         .setVerticalAlign(VerticalAlign.TOP).setX(-40).setY(80).setFloating(true)
//         .setBorderWidth(1).setShadow(true);
		 
		if(isbin == 1)
		{ 
			
			for (int j=0;j<data.size();j++) 
			{				
				String catname ="";
				String catname_ ="";
				
				SeriesArea seriesarea = new SeriesArea();

//				System.out.println(j +"  data2.size():::::::::::"+data.size() );
				List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data3 = data.get(j);
				lsData = new ArrayList<Number>();
				for (int k=0;k <data3.size();k++) 
				{
//					System.out.println(k +"  data3.size():::::::::::"+data3.size() );
					

					if(x_category == true)
					{
						catname = prefix + data3.get(k).getName() +suffix;
					}
					else
					{
						catname =  data3.get(k).getName();
					}
					
					
//					catname = data3.get(k).getName();

					lsData.add(data3.get(k).getY());
					array.add(new com.hyjavacharts.model.highcharts.series.seriesbar.Data().
							setName(catname).
							setY(data3.get(k).getY())	
						);
					if(j == 0)
					{
					ls.add(catname);
					xa.setMin(0).getTitle().setText(X_field_).setAlign(TitleAlign.MIDDLE);
					}
				}

				xa.setCategories(ls);
				lsxa.add(xa);
				
				xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
				xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(rotation);
		        chartOptions.getXAxis().add(xa);
		        
		        xa = new XAxis();
		        
		        if (colarr[j].length()>10) 
			      {
		        	seriesarea.setName(colarr[j].substring(0, 10));  
			          chartOptions.getSeries().add(seriesarea);
			      }
			      else 
			      {
			    	  seriesarea.setName(colarr[j]);
			          chartOptions.getSeries().add(seriesarea);			          
			      }

		        seriesarea.setDataAsArrayNumber(lsData);
				
			}		
			
			
		}		
		else
		{
		
		for (int j=0;j<data.size();j++) 
		{	
		
			List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data2 = data.get(j); 
			lsData = new ArrayList<Number>();
			String catname ="";
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
				lsData.add(data2.get(k).getY()) ;
				
				array.add(new com.hyjavacharts.model.highcharts.series.seriesbar.Data().
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
			xa.setCategories(ls);
			lsxa.add(xa);
			
			xa.getTitle().setText(X_field_).setAlign(TitleAlign.MIDDLE);
			xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(rotation);
	        chartOptions.getXAxis().add(xa);
			}
	        
	        
			      SeriesBar seriesBar = new SeriesBar();
			      
			/*
			 * if (colarr[j].length()>10) { seriesBar.setName(colarr[j].substring(0, 10));
			 * 
			 * } else { seriesBar.setName(colarr[j]);
			 * 
			 * }
			 */
			      
//			      System.out.println("catname:::::"+catname);	
//			    System.out.println("isbin::::"+isbin);  
			if (isbin ==0) 
			{      
			      if (colarr[j].length()>10) 
			      {
			          seriesBar.setName(colarr[j].substring(0, 10));
			          
			      }
			      else 
			      {
			          seriesBar.setName(colarr[j]);
			          
			      }
			}else 
			{
				 if (colarr[j].length()>10) 
			      {
			          seriesBar.setName(colarr[j].substring(0, 10));
			          
			      }
			      else 
			      {
			          seriesBar.setName(colarr[j]);
			          
			      }
//			      if (catname.length()>10) 
//			      {
//			          seriesBar.setName(catname.substring(0, 10));
//			          
//			      }
//			      else 
//			      {
//			          seriesBar.setName(catname);
//			          
//			      }        
			}  
		                    seriesBar.setDataAsArrayNumber(lsData);
			                chartOptions.getSeries().add(seriesBar);
			
		}
		}
		
		//chartOptions.set
		
		return highChart;
	}
	
	
	public Highchart configureColumnStack100(List<List<com.hyjavacharts.model.highcharts.series.seriesbar.Data>>   data,
			String title,
			String subtitle,int isstack,String columnlist, int isbin,String X_field_ ,String properties_) 
	{
		Highchart highChart = new Highchart();
		ChartOptions chartOptions = highChart.getChartOptions();
	    		
		chartOptions = new SetHighcharts_Properties().highchartProperties(highChart ,properties_);
		
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
        
		chartOptions.getSubtitle().setText(subtitle);

		chartOptions.getChart().setType(ChartType.COLUMN)
		.setPlotShadow(false)
		.setPlotBackgroundColor(null)
		.setPlotBorderWidth(null);
//	System.out.println("configureStack isstack-------"+isstack);
		
//		if (isstack == 1) 
//		{
			chartOptions.getPlotOptions() .getColumn().setStacking(Stacking.PERCENT);
//		}
		
		
		
		List<String> ls = new ArrayList<String>();
		List<Number> lsData = new ArrayList<Number>();
		List<Number> lsDataX = new ArrayList<Number>();
		
		ArrayList<com.hyjavacharts.model.highcharts.series.seriescolumn.Data> array 
		= new ArrayList<com.hyjavacharts.model.highcharts.series.seriescolumn.Data>();
		
		XAxis xa = new XAxis();
		List<XAxis> lsxa = new ArrayList<XAxis>();     
		
//		System.out.println("columnlist:::::::::::"+columnlist);
		 
		String colarr[] = columnlist.split(",");
		
		if(isbin == 1)
		{ 
			
			for (int j=0;j<data.size();j++) 
			{				
				String catname ="";
				String catname_ ="";
				
				SeriesArea seriesarea = new SeriesArea();

//				System.out.println(j +"  data2.size():::::::::::"+data.size() );
				List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data3 = data.get(j);
				lsData = new ArrayList<Number>();
				for (int k=0;k <data3.size();k++) 
				{
//					System.out.println(k +"  data3.size():::::::::::"+data3.size() );

					if(x_category == true)
					{
						catname = prefix + data3.get(k).getName() +suffix;
					}
					else
					{
						catname =  data3.get(k).getName();
					}
					
					
					
//					catname = data3.get(k).getName();

					lsData.add(data3.get(k).getY());
					array.add(new com.hyjavacharts.model.highcharts.series.seriescolumn.Data().
							setName(catname).
							setY(data3.get(k).getY())	
						);
					if(j == 0)
					{
					ls.add(catname);
					xa.setMin(0).getTitle().setText(X_field_).setAlign(TitleAlign.MIDDLE);
					}
				}

				xa.setCategories(ls);
				lsxa.add(xa);
				
				xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(rotation);
				
		        chartOptions.getXAxis().add(xa);
		        
		        xa = new XAxis();
		        
		        if (colarr[j].length()>10) 
			      {
		        	seriesarea.setName(colarr[j].substring(0, 10));  
			          chartOptions.getSeries().add(seriesarea);
			      }
			      else 
			      {
			    	  seriesarea.setName(colarr[j]);
			          chartOptions.getSeries().add(seriesarea);			          
			      }

		        seriesarea.setDataAsArrayNumber(lsData);
				
			}		
			       	
		}
		else
		{
	try {	
		
//		System.out.println("data size ::::"+data.size());
		
	for (int j=0;j<data.size();j++) 
	{	
	
		List<com.hyjavacharts.model.highcharts.series.seriesbar.Data> data2 = data.get(j); 
		lsData = new ArrayList<Number>();
		
		for (int k=0;k <data2.size();k++) 
		{
			String catname ="";
			

			if(x_category == true)
			{
				catname = prefix + data2.get(k).getName() +suffix;
			}
			else
			{
				catname =  data2.get(k).getName();
			}
			
			
//			catname = data2.get(k).getName();
			lsData.add(data2.get(k).getY()) ;
			
			array.add(new com.hyjavacharts.model.highcharts.series.seriescolumn.Data().
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
		xa.setCategories(ls);
		lsxa.add(xa);
		
		xa.getTitle().setText(X_field_).setAlign(TitleAlign.MIDDLE);
		
		xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(rotation);
		
        chartOptions.getXAxis().add(xa);
		}
        
//		System.out.println("colarr[j]:::::::::::::::"+colarr[j]);
		      SeriesBar seriesBar = new SeriesBar();
		      
		      if (colarr[j].length()>10) 
		      {
		          seriesBar.setName(colarr[j].substring(0, 10));
		          
		      }
		      else 
		      {
		          seriesBar.setName(colarr[j]);
		          
		      }
		      
	                    seriesBar.setDataAsArrayNumber(lsData);
		                chartOptions.getSeries().add(seriesBar);
		
		
	}
	
	}catch (Exception e) 
	{
		System.out.println("error getting series stacked:::"+e.toString());
		// TODO: handle exception
	}
		}
		
        YAxis yAxis = new YAxis();
        yAxis.setMin(0).getTitle().setText("").setAlign(TitleAlign.HIGH);
        yAxis.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(y_rotation);
        chartOptions.getYAxis().add(yAxis);
    
//		chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT).setVerticalAlign(VerticalAlign.MIDDLE);

		chartOptions.getPlotOptions().getBar().getLabel().setConnectorAllowed(false);
		
		
		chartOptions.getResponsive().getRulesSingle()
			.getCondition().setMaxWidth(500);
//		chartOptions.getResponsive().getRulesSingle()
//			.getChartOptions().getLegend()
//				.setLayout(Layout.HORIZONTAL).setAlign(HorizontalAlign.CENTER).setVerticalAlign(VerticalAlign.BOTTOM);
							
		
		return highChart;
	}
	
	
	public Highchart configureScatter(List<List<com.hyjavacharts.model.highcharts.series.seriesscatter.Data>>   data,
			String title,
			String subtitle,int isstack,String columnlist,int isbin ,String X_field_,String properties_) 
	{
		Highchart highChart = new Highchart();
		ChartOptions chartOptions = highChart.getChartOptions();
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

		chartOptions.getSubtitle().setText(subtitle);

		chartOptions.getChart().setType(ChartType.SCATTER)
		.setZoomType(ZoomType.XY)
		.setPlotShadow(false)
		.setPlotBackgroundColor(null)
		.setPlotBorderWidth(null);
		
	System.out.println("isstack-------"+isstack);
		
		if (isstack == 1) 
		{
			//chartOptions.getPlotOptions() .getBar().setStacking(Stacking.NORMAL);
		}
		
		
		
		List<String> ls = new ArrayList<String>();
		List<Number> lsData = new ArrayList<Number>();
		List<Number> lsDataX = new ArrayList<Number>();
		
		ArrayList<com.hyjavacharts.model.highcharts.series.seriesscatter.Data> array 
		= new ArrayList<com.hyjavacharts.model.highcharts.series.seriesscatter.Data>();
		
		XAxis xa = new XAxis();
		List<XAxis> lsxa = new ArrayList<XAxis>();     
		
		
		
		
//		System.out.println("columnlist:::::::::::"+columnlist);
		 
		String colarr[] = columnlist.split(",");
//		System.out.println("colarr:::::::::::"+colarr);
		
		if(isbin == 1)
		{ 
			

			for (int j=0;j<data.size();j++) 
			{				
				String catname ="";
				String catname_ ="";
				
				SeriesScatter seriesarea = new SeriesScatter();

//				System.out.println(j +"  data2.size():::::::::::"+data.size() );
				List<com.hyjavacharts.model.highcharts.series.seriesscatter.Data> data3 = data.get(j);
				lsData = new ArrayList<Number>();
				for (int k=0;k <data3.size();k++) 
				{
//					System.out.println(k +"  data3.size():::::::::::"+data3.size() );
					

					if(x_category == true)
					{
						catname = prefix + data3.get(k).getName() +suffix;
					}
					else
					{
						catname =  data3.get(k).getName();
					}
					
//					catname = data3.get(k).getName();

					lsData.add(data3.get(k).getY());
					array.add(new com.hyjavacharts.model.highcharts.series.seriesscatter.Data().
							setName(catname).
							setY(data3.get(k).getY())	
						);
					if(j == 0)
					{
					ls.add(catname);
					xa.setMin(0).getTitle().setText(X_field_).setAlign(TitleAlign.MIDDLE);
					}
				}

				xa.setCategories(ls);
				lsxa.add(xa);
				
				xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(rotation);
				
		        chartOptions.getXAxis().add(xa);
		        
		        xa = new XAxis();
		        
		        if (colarr[j].length()>10) 
			      {
		        	seriesarea.setName(colarr[j].substring(0, 10));  
			          chartOptions.getSeries().add(seriesarea);
			      }
			      else 
			      {
			    	  seriesarea.setName(colarr[j]);
			          chartOptions.getSeries().add(seriesarea);			          
			      }

		        seriesarea.setDataAsArrayNumber(lsData);
				
			}		
			
        	
		}
		else
		{	
	for (int j=0;j<data.size();j++) 
	{	
	
		List<com.hyjavacharts.model.highcharts.series.seriesscatter.Data> data2 = data.get(j); 
		lsData = new ArrayList<Number>();
		String catname ="";
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
			
//			catname = data2.get(k).getName();
			lsData.add(data2.get(k).getY()) ;
			
			array.add(new com.hyjavacharts.model.highcharts.series.seriesscatter.Data().
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
		xa.setCategories(ls);
		lsxa.add(xa);
		
		xa.getTitle().setText(X_field_).setAlign(TitleAlign.MIDDLE);
		xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(rotation);
        chartOptions.getXAxis().add(xa);
		}
        
		System.out.println("isbin::::"+isbin);
		      SeriesScatter seriesBar = new SeriesScatter();    
				      if (colarr[j].length()<10) 
				      {
				    	  seriesBar.setName(colarr[j]);
				          
				          
				      }
				      else 
				      {
				    	  seriesBar.setName(colarr[j].substring(0, 10));
				          
				      }
 
			                    seriesBar.setDataAsArrayNumber(lsData);
				                chartOptions.getSeries().add(seriesBar);
				
	}
		}
        YAxis yAxis = new YAxis();
        yAxis.setMin(0).getTitle().setText("").setAlign(TitleAlign.HIGH);
        yAxis.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(y_rotation);
        chartOptions.getYAxis().add(yAxis);
        
   
		
//		chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT).setVerticalAlign(VerticalAlign.MIDDLE);
	
		//chartOptions.getPlotOptions().getScatter().getLabel().setConnectorAllowed(false);
		chartOptions.getPlotOptions().getScatter()
        .getStates()
            .getHover()
                .getMarker()
                    .setEnabled(false);
		
		chartOptions.getResponsive().getRulesSingle()
			.getCondition().setMaxWidth(500);
//		chartOptions.getResponsive().getRulesSingle()
//			.getChartOptions().getLegend()
//				.setLayout(Layout.HORIZONTAL).setAlign(HorizontalAlign.CENTER).setVerticalAlign(VerticalAlign.BOTTOM);
									
		return highChart;
	}


	
}
