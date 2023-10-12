
$(document).ready(function() {
	
	data_heatmap();
});




var PM2__5_x_current = [];

var PM2__5_y_current =[];

var PM2__5_x_ref = [];

var PM2__5_y_ref =[];
	
	function data_heatmap()
	{

		var json='{"data_drift_report":\
			{"number_of_columns": 5, "number_of_drifted_columns": 0, "share_of_drifted_columns": 0.0, "dataset_drift": false,\
			"drift_by_columns":\
			{"PM2__5": {"column_name": "PM2__5", "column_type": "num", "stattest_name": "PSI", "stattest_threshold": 0.2, "drift_score": 0.0020450149179792178, "drift_detected": false},\
			"Raw__H2": {"column_name": "Raw__H2", "column_type": "num", "stattest_name": "PSI", "stattest_threshold": 0.2, "drift_score": 0.0014451200320265215, "drift_detected": false},\
			"TVOC__ppb__": {"column_name": "TVOC__ppb__", "column_type": "num", "stattest_name": "PSI", "stattest_threshold": 0.2, "drift_score": 0.001569042057732977, "drift_detected": false},\
			"Temperature__C__": {"column_name": "Temperature__C__", "column_type": "num", "stattest_name": "PSI", "stattest_threshold": 0.2, "drift_score": 0.001034637707857496, "drift_detected": false},\
			"eCO2__ppm__": {"column_name": "eCO2__ppm__", "column_type": "num", "stattest_name": "PSI", "stattest_threshold": 0.2, "drift_score": 0.0034158932016774743, "drift_detected": false}},\
			"ref_cur_data": {"n_features": 5, "n_drifted_features": 0, "share_drifted_features": 0.0, "dataset_drift": false,\
			"PM2__5":\
			{"current_small_hist":\
			{"x": [0.0, 4501.838, 9003.676, 13505.514, 18007.352, 22509.19, 27011.028, 31512.865999999998, 36014.704, 40516.542, 45018.38],\
			"y": [0.00021971647038375949, 7.768606946697107e-07, 4.897600031613394e-07, 3.0398896747945206e-07, 2.871006915083714e-07, 2.1954758762404868e-07, 8.444137985540333e-08, 1.1821793179756467e-07, 8.444137985540327e-08, 5.0664827913242044e-08]},\
			"ref_small_hist":\
			{"x": [0.0, 4543.226000000001, 9086.452000000001, 13629.678000000002, 18172.904000000002, 22716.130000000005, 27259.356000000003, 31802.582000000002, 36345.808000000005, 40889.03400000001, 45432.26],\
			"y": [0.00021781737819707002, 5.771430075603411e-07, 5.290477569303128e-07, 3.7273819238272034e-07, 2.825595974514169e-07, 1.6833337720509957e-07, 1.0821431391756402e-07, 4.208334430127486e-08, 1.623214708763459e-07, 4.809525063002849e-08]},\
			"feature_type": "num", "stattest_name": "Wasserstein distance (normed)", "drift_score": 0.00462937596654721, "drift_detected": false},\
			"Raw__H2":\
			{"current_small_hist":\
			{"x": [10668.0, 10981.3, 11294.6, 11607.9, 11921.2, 12234.5, 12547.8, 12861.1, 13174.4, 13487.7, 13801.0],\
			"y": [6.0667317683608385e-06, 1.6258841139206954e-05, 1.4560156244066013e-05, 1.0434778641580581e-05, 8.97876301717404e-06, 2.2568242178302316e-05, 0.0009874212626184043, 0.0016756313144212635, 0.0004084123826460492, 4.149644529558813e-05]},\
			"ref_small_hist":\
			{"x": [10668.0, 10981.5, 11295.0, 11608.5, 11922.0, 12235.5, 12549.0, 12862.5, 13176.0, 13489.5, 13803.0],\
			"y": [6.708566456017679e-06, 1.4375499548609313e-05, 1.080340572137912e-05, 1.2633014754838487e-05, 8.276802770411423e-06, 2.7269887022513427e-05, 0.0009884244992665009, 0.0016639858538114501, 0.0004149727536365222, 4.2342380488631076e-05]},\
			"feature_type": "num", "stattest_name": "Wasserstein distance (normed)", "drift_score": 0.01203564478225445, "drift_detected": false},\
			"TVOC__ppb__":\
			{"current_small_hist":\
			{"x": [0.0, 6000.0, 12000.0, 18000.0, 24000.0, 30000.0, 36000.0, 42000.0, 48000.0, 54000.0, 60000.0],\
			"y": [0.00016062241820623938, 1.2798094224384803e-06, 6.589117818495147e-07, 2.6609898882384247e-07, 2.6609898882384247e-07, 3.421272713449403e-07, 2.1541346714311058e-07, 1.9007070630274464e-07, 8.869966294128083e-08, 2.7370181707595224e-06]},\
			"ref_small_hist":\
			{"x": [0.0, 6000.0, 12000.0, 18000.0, 24000.0, 30000.0, 36000.0, 42000.0, 48000.0, 54000.0, 60000.0],\
			"y": [0.0001611994245966714, 1.2973888342619907e-06, 5.553734658946064e-07, 3.0044794056593465e-07, 2.048508685676827e-07, 1.9574638552023017e-07, 1.866419024727776e-07, 1.6843293637787245e-07, 5.462689828471539e-08, 2.5037328380494555e-06]},\
			"feature_type": "num", "stattest_name": "Wasserstein distance (normed)", "drift_score": 0.01869000340222396, "drift_detected": false},\
			"Temperature__C__":\
			{"current_small_hist":\
			{"x": [-22.01, -13.816000000000003, -5.622000000000003, 2.5719999999999956, 10.765999999999995, 18.959999999999997, 27.153999999999993, 35.347999999999985, 43.54199999999999, 51.73599999999999, 59.93],\
			"y": [0.004629986938983138, 0.00747849593751585, 0.012887879475446049, 0.005066077893155898, 0.023623139772847822, 0.058835164689563305, 0.0052052558572535925, 0.0016608570382324274, 0.0013917796409768945, 0.00126188020781905]},\
			"ref_small_hist":\
			{"x": [-22.01, -13.816000000000003, -5.622000000000003, 2.5719999999999956, 10.765999999999995, 18.959999999999997, 27.153999999999993, 35.347999999999985, 43.54199999999999, 51.73599999999999, 59.93],\
			"y": [0.004683353190750863, 0.007863366674008032, 0.01273672067036231, 0.005123355056358773, 0.02391010137882984, 0.058450247829050825, 0.004940020945688814, 0.0017566741149649136, 0.0013166722493570034, 0.0012600053424226504]},\
			"feature_type": "num", "stattest_name": "Wasserstein distance (normed)", "drift_score": 0.009769528218759477, "drift_detected": false},\
			"eCO2__ppm__":\
			{"current_small_hist":\
			{"x": [400.0, 4543.4, 8686.8, 12830.199999999999, 16973.6, 21117.0, 25260.399999999998, 29403.799999999996, 33547.2, 37690.6, 41834.0],\
			"y": [0.00023738424747198988, 1.1743520010981952e-06, 9.908595009266023e-07, 1.0092087509437616e-06, 3.11937250291708e-07, 1.4679400013727448e-07, 1.6514325015443382e-07, 1.8349250017159294e-08, 7.339700006863718e-08, 7.339700006863718e-08]},\
			"ref_small_hist":\
			{"x": [400.0, 6360.0, 12320.0, 18280.0, 24240.0, 30200.0, 36160.0, 42120.0, 48080.0, 54040.0, 60000.0],\
			"y": [0.00016579171973541516, 7.011674024799878e-07, 8.753135547299195e-07, 1.9706011965123842e-07, 1.1456983700653396e-07, 5.0410728282874944e-08, 3.207955436182951e-08, 9.165586960522716e-09, 4.582793480261358e-09, 9.165586960522716e-09]\
			},\
			"feature_type": "num", "stattest_name": "Wasserstein distance (normed)", "drift_score": 0.00810119344475417, "drift_detected": false\
			}\
			}\
			}\
			}';



			var tablejson_ = JSON.parse(json);
			//console.log(tablejson_);

			var tablekey="";
			var tableval="";
			var tablekey1="";
			var tableval1="";

			var tablekey2="";
			var tableval2="";

			var tablekey3="";
			var tableval3="";

			var tablekey4="";
			var tableval4="";

			var tablekey5="";
			var tableval5="";

			var column_array =[];
	
			
			var column_length =0;
			var count_column =0;
			var count_column_=0;

			var if_count =0;
			

			var count_columnarray =0;


			for (var key in tablejson_) 
			{
				tablekey=key;
				console.log("tablekey::"+tablekey);
				tableval=tablejson_[key];

				console.log(tableval);
				
				for (var key in tableval) 
				{
					tablekey1=key;
					console.log("tablekey1::"+tablekey1);
					tableval1=tableval[key];

					console.log(tableval1);
				
					if(tablekey1 == "number_of_columns")
						{
						column_length = tableval1;
						
						}
					

					for (var key in tableval1) 
					{
						tablekey2=key;
						console.log("tablekey2::"+tablekey2);
						tableval2=tableval1[key];

						console.log(tableval2);
					
						if(count_column < column_length)
							{
							column_array.push(tablekey2);
							if_count=0;
							}
							
						
						for (var key in tableval2) 
						{
							tablekey3=key;
							console.log("tablekey3::"+tablekey3);
							tableval3=tableval2[key];

							console.log(tableval3);
							
							console.log("tablekey2 ****************   "+tablekey2);
							console.log("column_array ****************   ",column_array);
							
							console.log("column_array ****   ##   ************   "+column_array[count_columnarray]);
							console.log("tablekey3 ***  #########  *************   "+tablekey3);
							
							
							if(count_column_ <= column_length)
							{
							
							column_name_head.push(tablekey3);
							
							
							}
							
							
							if(tablekey2 == column_array[if_count])
								{
											if(tablekey3 == "current_small_hist")
											{
				
											for (var key in tableval3) 
											{
												tablekey4=key;
												console.log("tablekey4::"+tablekey4);
												tableval4=tableval3[key];
												
												console.log(tableval4);
												
												for (var key in tableval4) 
												{
													tablekey5=key;
													console.log("tablekey5::"+tablekey5);
													tableval5=tableval4[key];
													
													console.log(tableval5);
													
													
													if(tablekey4 == "x")
														{
														
														PM2__5_x_current.push(tableval5);
														
														}
													
														if(tablekey4 == "y")
															{									
															if(tableval5.toString().includes('e'))
															{
																PM2__5_y_current.push(0);
																console.log(" ###### isExponential #################");
															}
														else
															{									
															PM2__5_y_current.push(tableval5);
															}
															
															
															}
														
												}
												
												
											}
											
											
											
				//							}
											}
										
										
										if(tablekey3 == "ref_small_hist")//if(tablekey3 == "ref_small_hist")
										{
										for (var key in tableval3) 
										{
											tablekey4=key;
											console.log("tablekey4::"+tablekey4);
											tableval4=tableval3[key];
											
											console.log(tableval4);
											
											for (var key in tableval4) 
											{
												tablekey5=key;
												console.log("tablekey5::"+tablekey5);
												tableval5=tableval4[key];
												
												console.log(tableval5);
												
											
											
												
												if(tablekey4 == "x")
													{
													
													PM2__5_x_ref.push(tableval5);
													
													}
												
													if(tablekey4 == "y")
														{
														if(tableval5.toString().includes('e'))
															{
															PM2__5_y_ref.push(0);
															console.log(" ###### isExponential #################");
															}
														else
															{
															PM2__5_y_ref.push(tableval5);
															}
														
														
				
														}
													
											}
											
											
										}
										
										
										
										
										}
										
										
										alert("i=count         "+if_count);
										buildchart(if_count+1 );
										if_count++;
								}
						
						}
					
					
							count_column++;
							
							
					}
					
				
				
				
				}
				



			}

	}
	
	var chart0 = "";
	var chart1 = "";
	var div ="";
	function buildchart(index )
	{
		
		alert("buildchart ####");
		chart0 = "chart0"+index;
		chart1 = "chart1"+index;
		 div += "<div id='container0'"+index+" class='box-css'><div class='cb-graph-css d-flex p-3 highcharts-container justify-content-center' ></div></div>";
		
		
		chart0 = Highcharts.chart("container0"+index, {
			
			  "chart" : {
			    "type" : "column"
			  },
			  "plotOptions" : {
			    "column" : {
			      "borderWidth" : 0,
			      "pointPadding" : 0.2
			    }
			  },
			  "series" : [ {
			    "data" : PM2__5_y_current,
			    "name" : ""
			  }],
			  "subtitle" : {
			    "text" : ""
			  },
			  "title" : {
			    "text" : ""
			  },
			  "tooltip" : {
			    "footerFormat" : "</table>",
			    "headerFormat" : "<span style=\"font-size:10px\">{point.key}</span><table>",
			    "pointFormat" : "<tr><td style=\"color:{series.color};padding:0\">{series.x}: </td><td style=\"padding:0\"><b>{point.y}</b></td></tr>",
			    "shared" : true,
			    "useHTML" : true
			  },
			  "xAxis" : [ {
			    "categories" : PM2__5_x_current,
			    "crosshair" : true
			  } ],
			  "yAxis" : [ {
			    "min" : 0,
			    "title" : {
			      "align" : "high",
			      "text" : ""
			    }
			  } ]
			
	});
		
		div += "<div id='container1'"+index+" class='box-css'><div class='cb-graph-css d-flex p-3 highcharts-container justify-content-center' ></div></div>";
		
		
		chart1 = Highcharts.chart("container1"+index, {
			
			  "chart" : {
			    "type" : "column"
			  },
			  "plotOptions" : {
			    "column" : {
			      "borderWidth" : 0,
			      "pointPadding" : 0.2
			    }
			  },
			  "series" : [ {
			    "data" : PM2__5_y_ref,
			    "name" : ""
			  }],
			  "subtitle" : {
			    "text" : ""
			  },
			  "title" : {
			    "text" : ""
			  },
			  "tooltip" : {
			    "footerFormat" : "</table>",
			    "headerFormat" : "<span style=\"font-size:10px\">{point.key}</span><table>",
			    "pointFormat" : "<tr><td style=\"color:{series.color};padding:0\">{series.x}: </td><td style=\"padding:0\"><b>{point.y}</b></td></tr>",
			    "shared" : true,
			    "useHTML" : true
			  },
			  "xAxis" : [ {
			    "categories" : PM2__5_x_ref,
			    "crosshair" : true
			  } ],
			  "yAxis" : [ {
			    "min" : 0,
			    "title" : {
			      "align" : "high",
			      "text" : ""
			    }
			  } ]
			
	});
		
		
		
		$("#container").html(div);
		
	}
	
	

	
	
	