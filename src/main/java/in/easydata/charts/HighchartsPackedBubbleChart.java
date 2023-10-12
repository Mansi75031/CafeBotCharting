package in.easydata.charts;

import java.util.ArrayList;
import java.util.List;

import com.hyjavacharts.chart.Highchart;
import com.hyjavacharts.model.common.Color;
import com.hyjavacharts.model.highcharts.ChartOptions;
import com.hyjavacharts.model.highcharts.XAxis;
import com.hyjavacharts.model.highcharts.YAxis;
import com.hyjavacharts.model.highcharts.constants.ChartType;
import com.hyjavacharts.model.highcharts.constants.LabelsOverflow;
import com.hyjavacharts.model.highcharts.constants.TitleAlign;
import com.hyjavacharts.model.highcharts.series.SeriesPackedbubble;
import com.hyjavacharts.model.highcharts.series.SeriesScatter;

public class HighchartsPackedBubbleChart {
	
	 public Highchart configure(List<List<com.hyjavacharts.model.highcharts.series.seriesbubble.Data>>   data,
				String title,
				String subtitle,int isstack,String columnlist,int isbin) {
	        Highchart highChart = new Highchart();
	        ChartOptions chartOptions = highChart.getChartOptions();
	        
	        chartOptions.getChart().setType(ChartType.PACKEDBUBBLE);
	        chartOptions.getTitle().setText("Carbon emissions around the world (2014)");

	        chartOptions.getTooltip().setUseHTML(true).setPointFormat("<b>{point.name}:</b> {point.y}m CO<sub>2</sub>");

	        chartOptions.getPlotOptions().getPackedbubble()
	            .setMinSize("20%")
	            .setMaxSize("100%")
	            .setZMin(0)
	            .setZMax(1000)
	            .getLayoutAlgorithm()
	                .setSplitSeries(true)
	                .setGravitationalConstant(0.05)
	                .setSeriesInteraction(false)
	                .setDragBetweenSeries(false)
	                .setParentNodeLimit(true);
	        
	        
	        
	        List<String> ls = new ArrayList<String>();
			List<Number> lsData = new ArrayList<Number>();
			List<Number> lsDataX = new ArrayList<Number>();
			
			ArrayList<com.hyjavacharts.model.highcharts.series.seriesbubble.Data> array 
			= new ArrayList<com.hyjavacharts.model.highcharts.series.seriesbubble.Data>();
			
			XAxis xa = new XAxis();
			List<XAxis> lsxa = new ArrayList<XAxis>();     
			
			
			
			
//			System.out.println("columnlist:::::::::::"+columnlist);
			 
			String colarr[] = columnlist.split(",");
//			System.out.println("colarr:::::::::::"+colarr);
			
			if(isbin == 1)
			{ 
				

				for (int j=0;j<data.size();j++) 
				{				
					String catname ="";
					String catname_ ="";
					
					SeriesPackedbubble seriesarea = new SeriesPackedbubble();

//					System.out.println(j +"  data2.size():::::::::::"+data.size() );
					List<com.hyjavacharts.model.highcharts.series.seriesbubble.Data> data3 = data.get(j);
					lsData = new ArrayList<Number>();
					for (int k=0;k <data3.size();k++) 
					{
//						System.out.println(k +"  data3.size():::::::::::"+data3.size() );
						catname = data3.get(k).getName();

						lsData.add(data3.get(k).getY());
						array.add(new com.hyjavacharts.model.highcharts.series.seriesbubble.Data().
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
					chartOptions.getXAxisSingle()
		            .setStartOnTick(true)
		            .setEndOnTick(true)
		            .setShowLastLabel(true)
		            .getTitle().setText("");
		        chartOptions.getXAxisSingle()
		            .getLabels().setFormat("");
					
					
					
					
					
			        chartOptions.getXAxis().add(xa);
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
		
			List<com.hyjavacharts.model.highcharts.series.seriesbubble.Data> data2 = data.get(j); 
			lsData = new ArrayList<Number>();
			String lsDatain = "";
			
			String catname ="";
			for (int k=0;k <data2.size();k++) 
			{
				
				catname = data2.get(k).getName();
//				lsData.add(Integer.parseInt("["+data2.get(k).getY() + " , " +data2.get(k+1).getY()+"]"));
				
//				lsDatain.concat("["+data2.get(k).getY() + " , " +data2.get(k+1).getY()+"]");	
//				lsData.add(Integer.parseInt(lsDatain.toString().replace("\"[", "").replace("\"]", "")));
				
				lsData.add(data2.get(k).getY());
				
				
//				lsDatain += "["+data2.get(k).getY() + " , " +data2.get(k+1).getY()+"]";
//
//				lsData.add(Integer.parseInt(lsDatain));
				
				array.add(new com.hyjavacharts.model.highcharts.series.seriesbubble.Data().
						setName(data2.get(k).getName()).
						setY(data2.get(k).getY())
//						setY(Integer.parseInt(Integer.parseInt("["+data2.get(k).getY()) + " , " +Integer.parseInt(data2.get(k+1).getY()+"]")))	
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
			
			xa.getTitle().setText(null);
	        chartOptions.getXAxis().add(xa);
			}
	        
			System.out.println("isbin::::"+isbin);
			SeriesPackedbubble seriesBar = new SeriesPackedbubble();    
					      if (colarr[j].length()<10) 
					      {
					    	  seriesBar.setName(colarr[j]).setId(colarr[j]).getMarker();
					          
					          
					      }
					      else 
					      {
					    	  seriesBar.setName(colarr[j].substring(0, 10)).setId(colarr[j].substring(0, 10)).getMarker();
					          
					      }
	 
				                    seriesBar.setDataAsArrayNumber(lsData);
					                chartOptions.getSeries().add(seriesBar);
					
		}
			}
	        YAxis yAxis = new YAxis();
	        yAxis.setMin(0).getTitle().setText("").setAlign(TitleAlign.HIGH);
	        yAxis.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
	        chartOptions.getYAxis().add(yAxis);
	        
	        
	        
	        
	        chartOptions.getPlotOptions().getPackedbubble().getDataLabels()
	            .setEnabled(true).setFormat("{point.name}").getFilter().setProperty("y").setOperator(">").setValue(250);
	        chartOptions.getPlotOptions().getPackedbubble().getDataLabels()
	            .getStyle().setColor(new Color("black")).setTextOutline("none").setFontWeight("normal");
	        

	        
	        return highChart;
	    }

}
