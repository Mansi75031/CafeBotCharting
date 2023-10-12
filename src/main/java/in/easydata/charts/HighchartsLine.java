
package in.easydata.charts;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hyjavacharts.chart.Highchart;
import com.hyjavacharts.model.highcharts.ChartOptions;
import com.hyjavacharts.model.highcharts.XAxis;
import com.hyjavacharts.model.highcharts.YAxis;
import com.hyjavacharts.model.highcharts.constants.ChartType;
import com.hyjavacharts.model.highcharts.constants.HorizontalAlign;
import com.hyjavacharts.model.highcharts.constants.LabelsOverflow;
import com.hyjavacharts.model.highcharts.constants.Layout;
import com.hyjavacharts.model.highcharts.constants.TitleAlign;
import com.hyjavacharts.model.highcharts.constants.VerticalAlign;
import com.hyjavacharts.model.highcharts.series.SeriesBar;
import com.hyjavacharts.model.highcharts.series.SeriesLine;
//import com.hyjavacharts.model.highcharts.series.seriespie.Data;
import com.hyjavacharts.model.highcharts.series.seriesline.Data;
import com.hyjavacharts.model.highcharts.series.seriesline.data.*;;

public class HighchartsLine {

	public Highchart configure(List<List<com.hyjavacharts.model.highcharts.series.seriesline.Data>>   data,
			String title,
			String subtitle ,int isbin ,String columnlist,String X_field_ ,String properties_) {
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
		chartOptions.getChart().setType(ChartType.LINE);
		
		
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
		
		
		
		
		chartOptions.getTitle().setText(title);
		chartOptions.getSubtitle().setText(subtitle);

//		chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT).setVerticalAlign(VerticalAlign.MIDDLE);
		chartOptions.getPlotOptions()
			.getSeries()
				//.setPointStart(2010)
				.getLabel().setConnectorAllowed(false);
		
		chartOptions.getResponsive().getRulesSingle()
			.getCondition().setMaxWidth(500);
//		chartOptions.getResponsive().getRulesSingle()
//			.getChartOptions().getLegend()
//				.setLayout(Layout.HORIZONTAL).setAlign(HorizontalAlign.CENTER).setVerticalAlign(VerticalAlign.BOTTOM);
		
		ArrayList<com.hyjavacharts.model.highcharts.series.seriesline.Data> array 
		= new ArrayList<com.hyjavacharts.model.highcharts.series.seriesline.Data>();
		

		//System.out.println("columnlist:::::::::::"+columnlist);
		 
		String colarr[] = columnlist.split(",");
		//System.out.println("colarr:::::::::::"+colarr.length);
		
		XAxis xa = new XAxis();
		List<XAxis> lsxa = new ArrayList<XAxis>(); 
		
		YAxis yAxis = new YAxis();
        yAxis.setMin(0).getTitle().setText("").setAlign(TitleAlign.HIGH);
        yAxis.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(y_rotation);
        chartOptions.getYAxis().add(yAxis);
		
		
		
		List<String> ls = new ArrayList<String>();
		List<Number> lsData = new ArrayList<Number>();
		
		if(isbin == 1)
		{ 
			for (int j=0;j<data.size();j++) 
			{	
			
				String catname ="";
				String catname_ ="";
				
				SeriesLine seriesLine = new SeriesLine();

				//System.out.println(j +"  data2.size():::::::::::"+data.size() );
				List<com.hyjavacharts.model.highcharts.series.seriesline.Data> data3 = data.get(j);
				lsData = new ArrayList<Number>();
				for (int k=0;k <data3.size();k++) 
				{
					//System.out.println(k +"  data3.size():::::::::::"+data3.size() );
					

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
					array.add(new com.hyjavacharts.model.highcharts.series.seriesline.Data().
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
		        	seriesLine.setName(colarr[j].substring(0, 10));  
			          chartOptions.getSeries().add(seriesLine);
			      }
			      else 
			      {
			    	  seriesLine.setName(colarr[j]);
			          chartOptions.getSeries().add(seriesLine);			          
			      }

		        seriesLine.setDataAsArrayNumber(lsData);
				
			}
			
			
			 
        	
		}
		else
		{
			for (int j=0;j<data.size();j++) 
			{	
			
				List<com.hyjavacharts.model.highcharts.series.seriesline.Data> data2 = data.get(j); 
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
					
					array.add(new com.hyjavacharts.model.highcharts.series.seriesline.Data().
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
		        
		        
				SeriesLine seriesLine = new SeriesLine();
				      
				
				      
//				      System.out.println("catname:::::"+catname);
//				      System.out.println("colarr[j].length():::::"+colarr[j]);
				    //System.out.println("isbin::::"+isbin);  
     
				      if (colarr[j].length()>10) 
				      {
				    	  seriesLine.setName(colarr[j].substring(0, 10));
				          //System.out.println("isffffff::::");  
				      }
				      else 
				      {
				    	  seriesLine.setName(colarr[j]);
				          //System.out.println("else   ::::");  
				          
				      }
				      seriesLine.setDataAsArrayNumber(lsData);
		                chartOptions.getSeries().add(seriesLine);
				} 

				
			}
		
		
							
	
		
//		seriesLine.setDataAsArrayObject(data);
//
//		chartOptions.getSeries().add(seriesLine);
		
		return highChart;
	}
	
}


