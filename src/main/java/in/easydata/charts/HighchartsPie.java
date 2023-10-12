package in.easydata.charts;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hyjavacharts.chart.Highchart;
import com.hyjavacharts.model.common.Color;
import com.hyjavacharts.model.highcharts.ChartOptions;
import com.hyjavacharts.model.highcharts.XAxis;
import com.hyjavacharts.model.highcharts.constants.ChartType;
import com.hyjavacharts.model.highcharts.constants.Cursor;
import com.hyjavacharts.model.highcharts.constants.HorizontalAlign;
import com.hyjavacharts.model.highcharts.constants.LabelsOverflow;
import com.hyjavacharts.model.highcharts.series.SeriesLine;
import com.hyjavacharts.model.highcharts.series.SeriesPie;
import com.hyjavacharts.model.highcharts.series.seriespie.Data;

public class HighchartsPie {

	public Highchart configure_(ArrayList<Data> data ,String title, int isbin ,String columnlist,String properties_) {
		Highchart highChart = new Highchart();
		ChartOptions chartOptions = highChart.getChartOptions();
				
		chartOptions = new SetHighcharts_Properties().highchartProperties(highChart ,properties_);
		
	      String titlealign ="";
		int rotation =0;
		
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
					
					
					
					
				
					
				}

			}
		
		}catch (Exception e) {
			// TODO: handle exception
		}
		
		
		chartOptions.getChart().setType(ChartType.PIE)
			.setPlotShadow(false)
			.setPlotBackgroundColor(null)
			.setPlotBorderWidth(null);
		
		
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
	        	
		chartOptions.getTooltip().setPointFormat("{series.name}: <b>{point.percentage:.1f}%</b>");
		
		chartOptions.getPlotOptions()
			.getPie()
				.setAllowPointSelect(true)
				.setCursor(Cursor.POINTER)
				.getDataLabels()
					.setEnabled(true)
					.setFormat("<b>{point.name}</b>: {point.percentage:.1f} %").setRotation(rotation);
					//.getStyle().setColor(new Color().setColorValue("(Highcharts.theme && Highcharts.theme.contrastTextColor) || '#cdcdcd'"));
					//.getStyle().setColor(new Color().setColorValue("(Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'"));
		
		
		System.out.println("columnlist                ###########"+columnlist);
		
		
		SeriesPie seriesPie = new SeriesPie();
		seriesPie.setName("").setColorByPoint(true);
		seriesPie.setDataAsArrayObject(data);
		chartOptions.getSeries().add(seriesPie);
		
		return highChart;
	}
	
	
	 public Highchart configure(List<List<com.hyjavacharts.model.highcharts.series.seriespie.Data>> data ,String title ,int isbin ,String columnlist) {
	        Highchart highChart = new Highchart();
	        ChartOptions chartOptions = highChart.getChartOptions();
	        
	        chartOptions.getChart().setType(ChartType.PIE);
	        chartOptions.getChart().setPlotBackgroundColor(null).setPlotBorderWidth(null).setPlotShadow(false);
	        chartOptions.getTitle().setText(title).setY(225);
	        
	        chartOptions.setColors(Arrays.asList(new Color("#01BAF2"), new Color("#71BF45"), new Color("#FAA74B")));

	        chartOptions.getLegend().setEnabled(false);
	        chartOptions.getTooltip().setPointFormat("{series.name}: <b>{point.percentage:.1f}%</b>");
	        
	        chartOptions.getPlotOptions()
			.getPie()
				.setAllowPointSelect(true)
				.setCursor(Cursor.POINTER)
				.getDataLabels()
					.setEnabled(true)
					.setFormat("<b>{point.name}</b>: {point.percentage:.1f} %")
					.getStyle().setColor(new Color().setColorValue("(Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'"));
	        
	        
	        ArrayList<com.hyjavacharts.model.highcharts.series.seriespie.Data> array 
			= new ArrayList<com.hyjavacharts.model.highcharts.series.seriespie.Data>();
			

//			System.out.println("columnlist:::::::::::"+columnlist);
			 
			String colarr[] = columnlist.split(",");
//			System.out.println("colarr:::::::::::"+colarr.length);
			
			XAxis xa = new XAxis();
			List<XAxis> lsxa = new ArrayList<XAxis>(); 
			
			List<String> ls = new ArrayList<String>();
			List<Number> lsData = new ArrayList<Number>();
			
			if(isbin == 1)
			{ 
				for (int j=0;j<data.size();j++) 
				{	
				
					String catname ="";
					String catname_ ="";
					
					SeriesPie seriesLine = new SeriesPie();

//					System.out.println(j +"  data2.size():::::::::::"+data.size() );
					List<com.hyjavacharts.model.highcharts.series.seriespie.Data> data3 = data.get(j);
					lsData = new ArrayList<Number>();
					for (int k=0;k <data3.size();k++) 
					{
//						System.out.println(k +"  data3.size():::::::::::"+data3.size() );
						catname = data3.get(k).getName();

						lsData.add(data3.get(k).getY());
						array.add(new com.hyjavacharts.model.highcharts.series.seriespie.Data().
								setName(data3.get(k).getName()).
								setY(data3.get(k).getY())	
							);
						if(j == 0)
						{
						ls.add(catname);
						}
					}

					xa.setCategories(ls);
					lsxa.add(xa);
					xa.setMin(0).getTitle().setText(null);
					xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
					
			        chartOptions.getXAxis().add(xa);
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
				
					List<com.hyjavacharts.model.highcharts.series.seriespie.Data> data2 = data.get(j); 
					lsData = new ArrayList<Number>();
					String catname ="";
					String catname_ ="";
					for (int k=0;k <data2.size();k++) 
					{
						
						catname = data2.get(k).getName();

						lsData.add(data2.get(k).getY());
						
						array.add(new com.hyjavacharts.model.highcharts.series.seriespie.Data().
								setName(data2.get(k).getName()).
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
						
						xa.setMin(0).getTitle().setText(null);
						xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
						
				        chartOptions.getXAxis().add(xa);
			        
					}
			        
			        
					SeriesPie seriesLine = new SeriesPie();
					      
					
					      
//					      System.out.println("catname:::::"+catname);
//					      System.out.println("colarr[j].length():::::"+colarr[j]);
//					    System.out.println("isbin::::"+isbin);  
	     
					      if (colarr[j].length()>10) 
					      {
					    	  seriesLine.setName(colarr[j].substring(0, 10));
//					          System.out.println("isffffff::::");  
					      }
					      else 
					      {
					    	  seriesLine.setName(colarr[j]);
//					          System.out.println("else   ::::");  
					          
					      }
					      seriesLine.setDataAsArrayNumber(lsData);
//					      seriesPie.setDataAsArrayObject(data);
//							chartOptions.getSeries().add(seriesPie);
			                chartOptions.getSeries().add(seriesLine);
					} 

					
				}
	        
	        
	        
	        
	        
	        
	        
	        
	        
	        
	        
	        
	        
	        
	        
	        
//	        SeriesPie seriesPie = new SeriesPie();
//			seriesPie.setName("Brands").setColorByPoint(true);
			
	        
	        return highChart;
	    }
	
	/**
	 * 
	 * @return
	 */
	public ArrayList<Data> getSeriesData() {
		ArrayList<Data> array = new ArrayList<Data>();
		
		array.add(new Data().setName("Chrome").setY(61.41).setSliced(true).setSelected(true));
		array.add(new Data().setName("Internet Explorer").setY(11.84));
		array.add(new Data().setName("Firefox").setY(10.85));
		array.add(new Data().setName("Edge").setY(4.67));
		array.add(new Data().setName("Safari").setY(4.18));
		array.add(new Data().setName("Sogou Explorer").setY(1.64));
		array.add(new Data().setName("Opera").setY(1.6));
		array.add(new Data().setName("QQ").setY(1.2));
		array.add(new Data().setName("Other").setY(2.61));

		return array;
	}
}
