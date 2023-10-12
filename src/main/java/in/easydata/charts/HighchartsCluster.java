package in.easydata.charts;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hyjavacharts.chart.Highchart;
import com.hyjavacharts.model.common.Color;
import com.hyjavacharts.model.highcharts.ChartOptions;
import com.hyjavacharts.model.highcharts.XAxis;
import com.hyjavacharts.model.highcharts.YAxis;
import com.hyjavacharts.model.highcharts.constants.ChartType;
import com.hyjavacharts.model.highcharts.constants.HorizontalAlign;
import com.hyjavacharts.model.highcharts.constants.LabelsOverflow;
import com.hyjavacharts.model.highcharts.constants.Symbol;
import com.hyjavacharts.model.highcharts.constants.TitleAlign;
import com.hyjavacharts.model.highcharts.constants.ZoomType;
import com.hyjavacharts.model.highcharts.plotoptions.scatter.Zones;
import com.hyjavacharts.model.highcharts.plotoptions.scatter.cluster.LayoutAlgorithm;
import com.hyjavacharts.model.highcharts.series.SeriesScatter;
import com.hyjavacharts.model.highcharts.yaxis.PlotBands;

public class HighchartsCluster {
	
	
//	Highcharts.chart('container', {
//	    chart: {
//	        type: 'scatter',
//	        zoomType: 'xy'
//	    },
//	    title: {
//	        text: 'Height Versus Weight of 507 Individuals'
//	    },
//	    subtitle: {
//	        text: 'Source: Heinz  2003'
//	    },
//	    xAxis: {
//	        title: {
//	            enabled: true,
//	            text: 'Height (cm)'
//	        },
//	        startOnTick: true,
//	        endOnTick: true,
//	        showLastLabel: true
//	    },
//	    yAxis: {
//	        title: {
//	            text: 'Weight (kg)'
//	        }
//	    },
//	    legend: {
//	        enabled: false
//	    },
//	    plotOptions: {
//	        scatter: {
//	            dataLabels: {
//	                enabled: true,
//	                pointFormat: ''
//	            },
//	            tooltip: {
//	                headerFormat: '<b>{series.name}</b><br>',
//	                pointFormat: '{point.x} cm, {point.y} kg',
//	                clusterFormat: 'Clustered points: {point.clusterPointsAmount}'
//	            },
//	            marker: {
//	                radius: 5
//	            },
//	            cluster: {
//	                enabled: true,
//	                allowOverlap: false,
//	                layoutAlgorithm: {
//	                    type: 'kmeans',
//	                    distance: '7%'
//	                },
//	                dataLabels: {
//	                    style: {
//	                        fontSize: '9px'
//	                    },
//	                    y: -1
//	                },
//	                marker: {
//	                    lineColor: 'rgba(0, 0, 0, 0.1)'
//	                },
//	                zones: [{
//	                    from: 1,
//	                    to: 2,
//	                    marker: {
//	                        fillColor: '#AAE0EE',
//	                        radius: 12
//	                    }
//	                }, {
//	                    from: 3,
//	                    to: 5,
//	                    marker: {
//	                        fillColor: '#65CDEF',
//	                        radius: 13
//	                    }
//	                }, {
//	                    from: 6,
//	                    to: 9,
//	                    marker: {
//	                        fillColor: '#0DA9DD',
//	                        radius: 15
//	                    }
//	                }, {
//	                    from: 10,
//	                    to: 100,
//	                    marker: {
//	                        fillColor: '#2583C5',
//	                        radius: 18
//	                    }
//	                }]
//	            }
//	        }
//	    },
//	    series: [{
//	        name: 'Male',
//	        color: 'rgba(119, 152, 191, .5)',
//	        data: []
//	    }]
//	});

	
	
	
	
	

	    @SuppressWarnings("deprecation")
		public Highchart configureCluster(List<List<com.hyjavacharts.model.highcharts.series.seriesscatter.Data>>   data,
				String title,
				String subtitle,int isstack,String columnlist,int isbin,String X_field_ ,String properties_) {
	        Highchart highChart = new Highchart();
	        ChartOptions chartOptions = highChart.getChartOptions();
	        
		      String titlealign ="";
	        int rotation = -45;
	        int y_rotation = 0;
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
	        
	        chartOptions.getChart().setType(ChartType.SCATTER)
	            .setZoomType(ZoomType.XY);
	        
	        
	        
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
			
	        
	        chartOptions.getSubtitle()
	            .setText("")
	            .setAlign(HorizontalAlign.LEFT);
	        
	        List<String> ls = new ArrayList<String>();
			List<Number> lsData = new ArrayList<Number>();
			List<Number> lsDataX = new ArrayList<Number>();
			
			ArrayList<com.hyjavacharts.model.highcharts.series.seriesscatter.Data> array 
			= new ArrayList<com.hyjavacharts.model.highcharts.series.seriesscatter.Data>();
			
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
					
					SeriesScatter seriesarea = new SeriesScatter();

//					System.out.println(j +"  data2.size():::::::::::"+data.size() );
					List<com.hyjavacharts.model.highcharts.series.seriesscatter.Data> data3 = data.get(j);
					lsData = new ArrayList<Number>();
					for (int k=0;k <data3.size();k++) 
					{
//						System.out.println(k +"  data3.size():::::::::::"+data3.size() );
						

						if(x_category == true)
						{
							catname = prefix + data3.get(k).getName() +suffix;
						}
						else
						{
							catname =  data3.get(k).getName();
						}
						
//						catname = data3.get(k).getName();

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
//					xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
					
					
					chartOptions.getXAxisSingle()
		            .setStartOnTick(true)
		            .setEndOnTick(true)
		            .setShowLastLabel(true)
		            .getTitle().setText("");
		        chartOptions.getXAxisSingle()
		            .getLabels().setFormat("");
					
					
					
					
					
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
					String lsDatain = "";
					
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
//						catname = data2.get(k).getName();

						lsData.add(data2.get(k).getY());
			
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
									
					xa.getTitle().setText(X_field_).setAlign(TitleAlign.MIDDLE);
					System.out.println("rotation           "+rotation);
					xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(rotation);
					
			        chartOptions.getXAxis().add(xa);
					}
			        
					System.out.println("isbin::::"+isbin);
					      SeriesScatter seriesBar = new SeriesScatter();    
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
	        yAxis.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(y_rotation);
	        chartOptions.getYAxis().add(yAxis);
	        
//	        chartOptions.getXAxisSingle()
//            .setStartOnTick(true)
//            .setEndOnTick(true)
//            .setShowLastLabel(true)
//            .getTitle().setText("Height");
//	        
//             chartOptions.getXAxisSingle()
//            .getLabels().setFormat("{value} ");
             
             
//	        chartOptions.getYAxisSingle().getTitle().setText("Weight");
//	        chartOptions.getYAxisSingle().getLabels().setFormat("{value} kg");
	        
	        chartOptions.getLegend().setEnabled(false);
	        
//	        chartOptions.getPlotOptions().getScatter().getDataLabels().setEnabled(true);

	        chartOptions.getPlotOptions().getScatter()
	            .getMarker()
	                .setRadius(5)
	                .setSymbol(Symbol.DIAMOND)
	                .getStates()
	                    .getHover()
	                        .setEnabled(true)
	                        .setLineColor(new Color().setRGB(100, 100, 100));
	        
	        
	        chartOptions.getPlotOptions().getScatter()
	            .getStates()
	                .getHover()
	                    .getMarker()
	                        .setEnabled(true);
	        
	        
	        chartOptions.getPlotOptions().getScatter().getCluster().setEnabled(true).setAllowOverlap(false)
	        .getLayoutAlgorithm().setType("kmeans").setDistance("7%");

	        
	        chartOptions.getTooltip().setHeaderFormat("<b>{series.name}</b><br>")
	        .setPointFormat("x : {point.x} ,y : {point.y}").setClusterFormat("Clustered points: {point.clusterPointsAmount}");
	        
	        
//	        List<Zones> lszone = new ArrayList<Zones>();
//	        chartOptions..add(new Zones().setValue(5).setFillColor(Color.BISQUE));
//	        chartOptions.getPlotOptions().getScatter().getZones().add(((PlotBands) new Zones()).setFrom(1).setTo(2).setColor(new Color("#55BF3B")));
	        
	        
//	        chartOptions.getPlotOptions().getScatter()
//	        .getCluster().setZones(new Zones().setFrom(1).setTo(2).setColor(new Color("#55BF3B")));
//	        
	        
//	        .add
//	        (new Zones().setFrom(1).setTo(2).setColor(new Color("#55BF3B")));
	        
//	        zones: [{
//                from: 1,
//                to: 2,
//                marker: {
//                    fillColor: '#AAE0EE',
//                    radius: 12
//                }
//            }, {
//                from: 3,
//                to: 5,
//                marker: {
//                    fillColor: '#65CDEF',
//                    radius: 13
//                }
//	        }]
//	        List<Zones> ls = new ArrayList<Zones>();
//	        ls.getPlotBands().add(new PlotBands().setFrom(fromfirst).setTo(tofirst).setColor(new Color(firstcolor)).setThickness(10));
// 	        yAxis.getPlotBands().add(new PlotBands().setFrom(fromsecond).setTo(tosecond).setColor(new Color(secondcolor)).setThickness(10));
// 	        yAxis.getPlotBands().add(new PlotBands().setFrom(fromthird).setTo(tothird).setColor(new Color(thirdcolor)).setThickness(10));
 	        
//	        chartOptions.getPlotOptions().getScatter().getZones().add(new Zones().setValue(5));
	        
//	        chartOptions.getPlotOptions().getScatter().getZones().add(new Zones().setValue(5));
	        
	        
//	        ScatterPlotData seriesData = new ScatterPlotData();
	        
//	        SeriesScatter seriesScatter = new SeriesScatter();
//	        seriesScatter.setName("Basketball").setId("basketball").getMarker().setSymbol(Symbol.CIRCLE);
//	        seriesScatter.setColor(new Color().setRGBA(5,141,199,0.5));
//	        seriesScatter.getDataAsJsValue().setJsValue(seriesData.getSeriesData(1));
//	        chartOptions.getSeries().add(seriesScatter);
//	        
//	        seriesScatter = new SeriesScatter();
//	        seriesScatter.setName("Triathlon").setId("triathlon").getMarker().setSymbol(Symbol.TRIANGLE);
//	        seriesScatter.setColor(new Color().setRGBA(80,180,50,0.5));
//	        seriesScatter.getDataAsJsValue().setJsValue(seriesData.getSeriesData(2));
//	        chartOptions.getSeries().add(seriesScatter);
//	        
//	        seriesScatter = new SeriesScatter();
//	        seriesScatter.setName("Volleyball").setId("volleyball").getMarker().setSymbol(Symbol.SQUARE);
//	        seriesScatter.setColor(new Color().setRGBA(237,86,27,0.5));
//	        seriesScatter.getDataAsJsValue().setJsValue(seriesData.getSeriesData(3));
//	        chartOptions.getSeries().add(seriesScatter);
	        
	        return highChart;
	    }
	
	

}
