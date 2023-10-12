package in.easydata.charts;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hyjavacharts.chart.Highchart;
import com.hyjavacharts.model.common.Color;
import com.hyjavacharts.model.highcharts.ChartOptions;
import com.hyjavacharts.model.highcharts.Chart;
import com.hyjavacharts.model.highcharts.XAxis;
import com.hyjavacharts.model.highcharts.YAxis;
import com.hyjavacharts.model.highcharts.constants.ChartType;
import com.hyjavacharts.model.highcharts.constants.DefaultSeriesType;
import com.hyjavacharts.model.highcharts.constants.HorizontalAlign;
import com.hyjavacharts.model.highcharts.constants.Layout;
import com.hyjavacharts.model.highcharts.constants.Stacking;
import com.hyjavacharts.model.highcharts.constants.VerticalAlign;
import com.hyjavacharts.model.highcharts.series.SeriesBullet;
import com.hyjavacharts.model.highcharts.series.seriesbullet.Data;
import com.hyjavacharts.model.highcharts.yaxis.plotbands.*;

import com.hyjavacharts.model.highcharts.yaxis.PlotBands;

public class HighchartsBulletChart {
	
//	 public Highchart configureBulletChart() {
//	        Highchart highChart = new Highchart();
//	        ChartOptions chartOptions = highChart.getChartOptions();
//
//	        chartOptions.getChart().setType(ChartType.BULLET)
//	            .setInverted(true)
//	            .setMarginLeft(135)
//	            .setMarginTop(40);
//	        chartOptions.getChart().setDefaultSeriesType(DefaultSeriesType.BULLET);
//	        //chartOptions.getPlotOptions().getBullet().setStacking(Stacking.NORMAL);
//	        
//	        System.out.println("ChartType.BULLET::::::::::::::::");
//	        chartOptions.getTitle().setText("2017 YTD");
//	        chartOptions.getLegend().setEnabled(false);
//	        
//	        XAxis xAxis = new XAxis();
//	        xAxis.getCategories().add("<span class=\"hc-cat-title\"><b>Revenue</b></span><br/>U.S. $ (1,000s)");
//	        chartOptions.getXAxis().add(xAxis);
//	        
//	        YAxis yAxis = new YAxis();
////	        yAxis.setGridLineWidth(0)
////	            .getTitle().setText(null);
//	        yAxis.getPlotBands().add(new PlotBands().setFrom(0).setTo(150).setColor(new Color("#666")));
//	        yAxis.getPlotBands().add(new PlotBands().setFrom(150).setTo(225).setColor(new Color("#999")));
//	        yAxis.getPlotBands().add(new PlotBands().setFrom(225).setTo(9e9).setColor(new Color("#bbb")));
//	        chartOptions.getYAxis().add(yAxis);
//	        
//	        chartOptions.getPlotOptions().getBullet()
//	            .setPointPadding(0.25)
//	            .setBorderWidth(0)
//	            .setColor(new Color("#000"))
//	            .getTargetOptions().setWidth("140%").setHeight(3);
//	        
//	        chartOptions.getCredits().setEnabled(false);
//	        chartOptions.getExporting().setEnabled(false);
//	        chartOptions.getTooltip().setPointFormat("<b>{point.y}</b> (with target at {point.target})");
//	        
//	        SeriesBullet seriesBullet = new SeriesBullet();
//	        seriesBullet.getDataAsArrayObject().add(new Data().setY(275).setTarget(250));
//	        chartOptions.getSeries().add(seriesBullet);
//	        
//	        return highChart;
//	    }

		public Highchart configureBulletChart(List<Number> data,
				String title,String columnlist,String agg,int targetValue,int fromTofunction,String properties_) {
	        Highchart highChart = new Highchart();
	        ChartOptions chartOptions = highChart.getChartOptions();

	        chartOptions.getChart().setType(ChartType.BULLET)
	            .setInverted(true)
	            .setMarginLeft(135)
	            .setMarginTop(40);
	        
		    String titlealign ="";
		      
		  	String prefix ="";
			String suffix ="";
			boolean x_category =false;
			boolean x_label_check =false;
			String X_field_ ="";
			
			String colarr = columnlist.split(",")[0];
			if (colarr.length()>20) 
			      {
				colarr = colarr.substring(0, 20);
			          
			      }
			
			
			
	        try 
	        {
				
				JsonFactory jsonFactory = new JsonFactory();
				ObjectMapper objectMapper = new ObjectMapper(jsonFactory);
				JsonNode properties = objectMapper.readTree(properties_);
				
				if (properties.isArray()) {
					
					for (JsonNode jsonNode_properties : properties) {
						
							titlealign = jsonNode_properties.get("title_alignment").asText();
							
							

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
								colarr = prefix+colarr+suffix;
						        
							}
							
							
							
							
							
							
							
						
					}

				}
			
			}catch (Exception e) {
				// TODO: handle exception
			}
	        
	        int yValue = 0;
	        int targetvalue = 0;
	        List<Number> datavaluearr = new ArrayList<Number>();
	        for(int n =0; n<data.size();n++)
	        {
//	        	targetvalue	 = data.get(0).intValue();
	        	yValue = data.get(0).intValue();
	        	datavaluearr.add(targetvalue);
	        	if(yValue == 0)
	        	{
	        		yValue = 200;
	        	}
	        	
	        }
	        
	        
	        System.out.println("yValue aggggr  ############ "+yValue);
	        
	        
//	        System.out.println("targetvalue  "+targetvalue);
//	        System.out.println("fromTofunction  "+fromTofunction);

	        String catname = columnlist.split(",")[0];
	        
	        List<String> ls = new ArrayList<String>();

			XAxis xa = new XAxis();
			List<XAxis> lsxa = new ArrayList<XAxis>();     
			
//			System.out.println("columnlist:::::::::::"+columnlist);
			 
			
			
			
			
			
			
//	        System.out.println("ChartType.BULLET::::::::::::::::");
			
	        
	        
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
			
	        chartOptions.getLegend().setEnabled(false);
	        
	        XAxis xAxis = new XAxis();

	        chartOptions.getCredits().setEnabled(false);
	        chartOptions.getExporting().setEnabled(false);
	        chartOptions.getTooltip().setPointFormat("<b>{point.y}</b> (with target at {point.target})");
	        
						ls.add(colarr);

				xa.setCategories(ls);
				lsxa.add(xa);

		        chartOptions.getXAxis().add(xa);

		        int interval = yValue / 3;
		        int start = 0;
		        int end =  yValue;
	            int from1st = 0;
		        int to1st = 0;
		        int fromsecond_ = 0;
		        int  tosecond_ =0;
		        int fromthird_ = 0;
		        int  tothird_ =0;

		        int yvalue = yValue;
		        yvalue = yvalue + (yvalue/100*10);
		        
		        to1st =yvalue/100*50;
		        fromsecond_ = to1st;
		        tosecond_ = yvalue/100*75;
		        fromthird_ = tosecond_;
		        tothird_ = yvalue ;
		        
//		        System.out.println("from1st:::::"+from1st);
//		        System.out.println("to1st:::::"+to1st);
//		        System.out.println("fromsecond_:::::"+fromsecond_);
//		        System.out.println("tosecond_:::::"+tosecond_);
//		        System.out.println("fromthird_:::::"+fromthird_);
//		        System.out.println("tothird_:::::"+tothird_);
//		        System.out.println("tothird_:::::"+tothird_);
//		        
//		        System.out.println("targetValue  ## :::::"+targetValue);
//		        
		        
		        
				YAxis yAxis = new YAxis();
		        yAxis.setGridLineWidth(0)
		            .getTitle().setText(null);

		        if(fromTofunction == 0)
		        {
		        	yAxis.getPlotBands().add(new PlotBands().setFrom(from1st).setTo(to1st).setColor(new Color("#212529")));
			        yAxis.getPlotBands().add(new PlotBands().setFrom(fromsecond_).setTo(tosecond_).setColor(new Color("#495057")));
			        yAxis.getPlotBands().add(new PlotBands().setFrom(fromthird_).setTo(tothird_).setColor(new Color("#dee2e6")));
		        			        	
		        }
		        else
		        {
		        	yAxis.getPlotBands().add(new PlotBands().setFrom(from1st).setTo(to1st).setColor(new Color("#212529")));
			        yAxis.getPlotBands().add(new PlotBands().setFrom(fromsecond_).setTo(tosecond_).setColor(new Color("#495057")));
			        yAxis.getPlotBands().add(new PlotBands().setFrom(fromthird_).setTo(tothird_).setColor(new Color("#dee2e6")));
		        	targetvalue = targetValue ;
		        }
	
		        chartOptions.getYAxis().add(yAxis);
				
		        chartOptions.getPlotOptions().getBullet()
	            .setPointPadding(0.25)
	            .setBorderWidth(0)
	            .setColor(new Color("#000"))
	            .getTargetOptions().setWidth("200%");

		        	        
	        SeriesBullet seriesBullet = new SeriesBullet();
	        seriesBullet.getDataAsArrayObject().add(new Data().setY( yValue).setTarget( targetvalue ));
	        chartOptions.getSeries().add(seriesBullet);
	        
	        return highChart;
	    }
	    
	    /**
	     * @return 
	     * 
	     */
//	    public void BulletGraph() {
//	        setHeight("120px");
//	    }

}


