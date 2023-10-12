


var json ='{"data_quality_dataset_report":{"data_quality":{"name": "data_quality", "datetime": "2023-04-17 11:47:40.913320","data":{"utility_columns": {"date": null, "id": null, "target": null, "prediction": null}, "num_feature_names": ["PM2__5", "Raw__H2", "TVOC__ppb__", "Temperature__C__", "eCO2__ppm__"], "cat_feature_names": [], "text_feature_names": [], "datetime_feature_names": [], "target_names": null,\
	"metrics": {"reference": {"PM2__5": {"feature_type": "num", "number_of_rows": 36612, "count": 36612, "infinite_count": 0, "infinite_percentage": 0.0, "missing_count": 0, "missing_percentage": 0.0, "unique_count": 1074, "unique_percentage": 2.93, "percentile_25": 1.33, "percentile_50": 1.88, "percentile_75": 2.18, "max": 45432.26, "min": 0.0, "mean": 188.08, "most_common_value": 1.86, "most_common_value_percentage": 1.01, "std": 1993.55},\
	"Raw__H2": {"feature_type": "num", "number_of_rows": 36612, "count": 36612, "infinite_count": 0, "infinite_percentage": 0.0, "missing_count": 0, "missing_percentage": 0.0, "unique_count": 1650, "unique_percentage": 4.51, "percentile_25": 12830.0, "percentile_50": 12924.0, "percentile_75": 13109.0, "max": 13803, "min": 10668, "mean": 12943.23, "most_common_value": 12969, "most_common_value_percentage": 0.56, "std": 272.11}, "TVOC__ppb__":{\
	"feature_type": "num", "number_of_rows": 36612, "count": 36612, "infinite_count": 0, "infinite_percentage": 0.0, "missing_count": 0, "missing_percentage": 0.0, "unique_count": 1783, "unique_percentage": 4.87, "percentile_25": 128.0, "percentile_50": 977.0, "percentile_75": 1189.0, "max": 60000, "min": 0, "mean": 1918.8, "most_common_value": 0, "most_common_value_percentage": 4.43, "std": 7745.29}, "Temperature__C__": {\
	"feature_type": "num", "number_of_rows": 36612, "count": 36612, "infinite_count": 0, "infinite_percentage": 0.0, "missing_count": 0, "missing_percentage": 0.0, "unique_count": 15265, "unique_percentage": 41.69, "percentile_25": 10.89, "percentile_50": 20.1, "percentile_75": 25.38, "max": 59.93, "min": -22.01, "mean": 15.92, "most_common_value": 24.48, "most_common_value_percentage": 0.35, "std": 14.37}, "eCO2__ppm__": {\
	"feature_type": "num", "number_of_rows": 36612, "count": 36612, "infinite_count": 0, "infinite_percentage": 0.0, "missing_count": 0, "missing_percentage": 0.0, "unique_count": 1357, "unique_percentage": 3.71, "percentile_25": 400.0, "percentile_50": 400.0, "percentile_75": 438.0, "max": 60000, "min": 400, "mean": 667.39, "most_common_value": 400, "most_common_value_percentage": 51.03, "std": 1875.51}},\
	"current": {"PM2__5": {"feature_type": "num", "number_of_rows": 13153, "count": 13153, "infinite_count": 0, "infinite_percentage": 0.0, "missing_count": 0, "missing_percentage": 0.0, "unique_count": 651, "unique_percentage": 4.95, "percentile_25": 1.31, "percentile_50": 1.87, "percentile_75": 2.17, "max": 45018.38, "min": 0.0, "mean": 186.85, "most_common_value": 1.82, "most_common_value_percentage": 1.16, "std": 1949.18},\
	"Raw__H2": {"feature_type": "num", "number_of_rows": 13153, "count": 13153, "infinite_count": 0, "infinite_percentage": 0.0, "missing_count": 0, "missing_percentage": 0.0, "unique_count": 1214, "unique_percentage": 9.23, "percentile_25": 12830.0, "percentile_50": 12923.0, "percentile_75": 13109.0, "max": 13801, "min": 10668, "mean": 12940.26, "most_common_value": 12969, "most_common_value_percentage": 0.52, "std": 277.05\
	},"TVOC__ppb__":{"feature_type": "num", "number_of_rows": 13153, "count": 13153, "infinite_count": 0, "infinite_percentage": 0.0, "missing_count": 0, "missing_percentage": 0.0, "unique_count": 1306, "unique_percentage": 9.93, "percentile_25": 134.0, "percentile_50": 986.0, "percentile_75": 1191.0, "max": 60000, "min": 0, "mean": 2063.36, "most_common_value": 0, "most_common_value_percentage": 4.16, "std": 8165.99},"Temperature__C__":{"feature_type": "num", "number_of_rows": 13153, "count": 13153, "infinite_count": 0, "infinite_percentage": 0.0, "missing_count": 0, "missing_percentage": 0.0, "unique_count": 6983, "unique_percentage": 53.09, "percentile_25": 11.25, "percentile_50": 20.15, "percentile_75": 25.37, "max": 59.93, "min": -22.01, "mean": 16.04, "most_common_value": 24.55, "most_common_value_percentage": 0.39, "std": 14.3}, "eCO2__ppm__": {"feature_type": "num", "number_of_rows": 13153, "count": 13153, "infinite_count": 0, "infinite_percentage": 0.0, "missing_count": 0, "missing_percentage": 0.0, "unique_count": 833, "unique_percentage": 6.33, "percentile_25": 400.0, "percentile_50": 400.0, "percentile_75": 438.0, "max": 41834, "min": 400, "mean": 677.25, "most_common_value": 400, "most_common_value_percentage": 50.56, "std": 1900.15}}},\
	"correlations":{"reference":{"pearson":{"TVOC__ppb__": {"eCO2__ppm__": 0.6188895351298982, "PM2__5": 0.47573460141609764, "Temperature__C__": 0.08728572168728523, "Raw__H2": -0.6536618229305405},\
	"eCO2__ppm__": {"TVOC__ppb__": 0.6188895351298982, "PM2__5": 0.5777731973696264, "Temperature__C__": 0.07679066962627987, "Raw__H2": -0.6857267732534158},\
	"PM2__5": {"TVOC__ppb__": 0.47573460141609764, "eCO2__ppm__": 0.5777731973696264, "Temperature__C__": 0.02993146185738857, "Raw__H2": -0.424281919089359},\
	"Temperature__C__": {"TVOC__ppb__": 0.08728572168728523, "eCO2__ppm__": 0.07679066962627987, "PM2__5": 0.02993146185738857, "Raw__H2": -0.13953396264805046},\
	"Raw__H2": {"TVOC__ppb__": -0.6536618229305405, "eCO2__ppm__": -0.6857267732534158, "PM2__5": -0.424281919089359, "Temperature__C__": -0.13953396264805046}},\
	"spearman": {"TVOC__ppb__": {"eCO2__ppm__": 0.31892399779237723, "PM2__5": 0.14772150833479888, "Temperature__C__": 0.057531427001385534, "Raw__H2": -0.18983463991214428},\
	"eCO2__ppm__": {"TVOC__ppb__": 0.31892399779237723, "PM2__5": 0.4331958153236838, "Temperature__C__": 0.17076109634485026, "Raw__H2": -0.7158235193187427},\
	"PM2__5": {"TVOC__ppb__": 0.14772150833479888, "eCO2__ppm__": 0.4331958153236838, "Temperature__C__": 0.013126844192691781, "Raw__H2": -0.2940207868763261},\
	"Temperature__C__": {"TVOC__ppb__": 0.057531427001385534, "eCO2__ppm__": 0.17076109634485026, "PM2__5": 0.013126844192691781, "Raw__H2": -0.21017758562041777},\
	"Raw__H2": {"TVOC__ppb__": -0.18983463991214428, "eCO2__ppm__": -0.7158235193187427, "PM2__5": -0.2940207868763261, "Temperature__C__": -0.21017758562041777}},\
	"kendall": {"TVOC__ppb__": {"eCO2__ppm__": 0.20250523521197727, "PM2__5": 0.07593902296226558, "Temperature__C__": 0.04965973768878177, "Raw__H2": -0.08883525173163598},\
	"eCO2__ppm__": {"TVOC__ppb__": 0.20250523521197727, "PM2__5": 0.34204090910259966, "Temperature__C__": 0.12179617181959325, "Raw__H2": -0.5923710849803148},\
	"PM2__5": {"TVOC__ppb__": 0.07593902296226558, "eCO2__ppm__": 0.34204090910259966, "Temperature__C__": 0.006811322245042859, "Raw__H2": -0.20913856143035892},\
	"Temperature__C__": {"TVOC__ppb__": 0.04965973768878177, "eCO2__ppm__": 0.12179617181959325, "PM2__5": 0.006811322245042859, "Raw__H2": -0.1393028580309722},\
	"Raw__H2": {"TVOC__ppb__": -0.08883525173163598, "eCO2__ppm__": -0.5923710849803148, "PM2__5": -0.20913856143035892, "Temperature__C__": -0.1393028580309722}},\
	"cramer_v": {}},"current":{"pearson":{"TVOC__ppb__": {"eCO2__ppm__": 0.636675892909173, "PM2__5": 0.48580652947772085, "Temperature__C__": 0.05586279396397609, "Raw__H2": -0.6728204307739134},\
	"eCO2__ppm__": {"TVOC__ppb__": 0.636675892909173, "PM2__5": 0.6041489017595626, "Temperature__C__": 0.06106929444808007, "Raw__H2": -0.7011737928657068},\
	"PM2__5": {"TVOC__ppb__": 0.48580652947772085, "eCO2__ppm__": 0.6041489017595626, "Temperature__C__": 0.010342161584142185, "Raw__H2": -0.45087483610801343},\
	"Temperature__C__": {"TVOC__ppb__": 0.05586279396397609, "eCO2__ppm__": 0.06106929444808007, "PM2__5": 0.010342161584142185, "Raw__H2": -0.10392066092175062},\
	"Raw__H2": {"TVOC__ppb__": -0.6728204307739134, "eCO2__ppm__": -0.7011737928657068, "PM2__5": -0.45087483610801343, "Temperature__C__": -0.10392066092175062}},\
	"spearman":{"TVOC__ppb__": {"eCO2__ppm__": 0.3326737355337705, "PM2__5": 0.15592650519297485, "Temperature__C__": 0.054851365370127254, "Raw__H2": -0.19442862259432986},\
	"eCO2__ppm__": {"TVOC__ppb__": 0.3326737355337705, "PM2__5": 0.44179152386116755, "Temperature__C__": 0.1530746569708681, "Raw__H2": -0.7202190384424952},"PM2__5": {"TVOC__ppb__": 0.15592650519297485, "eCO2__ppm__": 0.44179152386116755, "Temperature__C__": 0.017779496309363527, "Raw__H2": -0.30954664279620336},\
	"Temperature__C__": {"TVOC__ppb__": 0.054851365370127254, "eCO2__ppm__": 0.1530746569708681, "PM2__5": 0.017779496309363527, "Raw__H2": -0.19971804575956995},\
	"Raw__H2": {"TVOC__ppb__": -0.19442862259432986, "eCO2__ppm__": -0.7202190384424952, "PM2__5": -0.30954664279620336, "Temperature__C__": -0.19971804575956995}},\
	"kendall":{"TVOC__ppb__": {"eCO2__ppm__": 0.21342943459791752, "PM2__5": 0.08026091969006836, "Temperature__C__": 0.048761333629263395, "Raw__H2": -0.09314437638405094},\
	"eCO2__ppm__": {"TVOC__ppb__": 0.21342943459791752, "PM2__5": 0.3484410810725369, "Temperature__C__": 0.10842148367979804, "Raw__H2": -0.5949872133926684},"PM2__5": {"TVOC__ppb__": 0.08026091969006836, "eCO2__ppm__": 0.3484410810725369, "Temperature__C__": 0.008808945369524486, "Raw__H2": -0.2192493705178484},"Temperature__C__": {"TVOC__ppb__": 0.048761333629263395, "eCO2__ppm__": 0.10842148367979804, "PM2__5": 0.008808945369524486, "Raw__H2": -0.1320179072251546},"Raw__H2": {"TVOC__ppb__": -0.09314437638405094, "eCO2__ppm__": -0.5949872133926684, "PM2__5": -0.2192493705178484, "Temperature__C__": -0.1320179072251546}},"cramer_v": {}}}}},\
	"timestamp": "2023-04-17 11:47:40.913320"} }';
	
	
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

var tablekey6="";
var tableval6="";

var tablekey7="";
var tableval7="";

var yArray= "";

var x_Array =[];

var x_Array_new =[];

var x_Array_new_count = 0;

var pearson_current_data_Array =[];

var spearman_current_data_Array =[];

var kendall_current_data_Array =[];

var cramer_v_current_data_Array =[];


var pearson_reference_data_Array =[];

var spearman_reference_data_Array =[];

var kendall_reference_data_Array =[];

var cramer_v_reference_data_Array =[];

var count =0;

var count_person=0;

var myMap = new Map();

for (var key in tablejson_) 
   {
   tablekey =key;
   tableval=tablejson_[key];
   
//   console.log("tablekey1::"+tablekey1);
   console.log(tableval);
	   for(var key in tableval)
	   {
	   tablekey1 = key;
//	   console.log("tablekey1::"+tablekey1);
	   tableval1 = tableval[key];
	
//	   console.log(tableval1);
	
		     for(var key in tableval1)
		     {
		     tablekey2 = key;
		     console.log("tablekey2::"+tablekey2);
		     
		     
		     tableval2 = tableval1[key];
		     console.log(tableval2);
		  
		     
		     
			     for(var key in tableval2)
			     {
			    	 tablekey3 = key;
			    	 tableval3 = tableval2[key];
			    	 console.log("tablekey3::"+tablekey3);
			        
			         console.log(tableval3);
		        
			         
			         for(var key in tableval3)
				     {
				    	 tablekey4 = key;
				    	 tableval4 = tableval3[key];
				    	 console.log("tablekey4   ::   "+tablekey4);
				        
				         console.log(tableval4);
				         if(tableval4 == "PM2__5")
				        	 {
				        	 var y1 = tableval4;
//				        	 console.log("y1###:: "+y1);				        	 				        	 				        	 
				        	 }
				        
				         if(tablekey4 == "current")
			        	 {
				        	 x_Array_new_count = 0;
				        	 
				        	 var TVOC__ppb___count =0;
			        	 for(var key in tableval4)
					     {
					    	 tablekey5 = key;
					    	 tableval5 = tableval4[key];
//					    	 console.log("tablekey5:  :"+tablekey5);
//					    	 console.log(tableval5);
					    	
					    	 if(tablekey5 == "pearson")
					    	 {
					    		
					    		 let obj1Len = Object.keys(tableval5).length;
						    	 if (obj1Len == 0) {
						    		 
						    		 
						    		 console.log("emptyyyyyyyyyyyy   tableval5  ##:  pearson current :",tableval5);
						    	   
						    	 } 
						    	 else
						    	 {
						    	 console.log("not   emptyyyyyyyyyyyy   tableval5  ##:  pearson current :",tableval5);
						    		 
						    		 
					    		 var colcount = 0;
					    		 
					    		 for(var key in tableval5)
							     {
							    	 tablekey6 = key;
							    	 tableval6 = tableval5[key];
//							    	 console.log("tablekey6:  #######  :"+tablekey6);
							    	 
							    		 x_Array_new.push(tablekey6);
							    		
//							         console.log(tableval6);
						
							 // if(x_Array_new.includes(tablekey6))
							        {
							    	  TVOC__ppb___count = 0;
							    	
							    	 // colcount = 0;
							    	  var flag=0 ;
							   for(var key in tableval6)
								     {
//							        	 console.log("tablekey7:    assssssssssdddddddddddddffffffffffffffffhhhhhhhhh  :");
								    	 tablekey7 = key;
								    	 tableval7 = tableval6[key];
//								    	 console.log("tablekey7: #### :"+tablekey7);
								        	
								    	 
								    	 var tableval7_round =Math.round((tableval7 + Number.EPSILON) * 100) / 100
								        	
								        if (colcount == TVOC__ppb___count)
								        {
								        	pearson_current_data_Array.push(Array.of(x_Array_new_count,TVOC__ppb___count, 1));	
								        	pearson_current_data_Array.push(Array.of(x_Array_new_count,(TVOC__ppb___count+1), tableval7_round));
								        	 
								        	 //TVOC__ppb___count = TVOC__ppb___count+1;
								        	 TVOC__ppb___count++;
								        	 flag = flag+1;
								        }
								        else 
								        {
//								        	alert("value:::::"+parseInt(flag));
								        	if ( parseInt(flag) == 1)
								        	{
								        		flag = 0;
								        		TVOC__ppb___count++;
								        	}
								        	
								        	pearson_current_data_Array.push(Array.of(x_Array_new_count,TVOC__ppb___count, tableval7_round));
								        	 TVOC__ppb___count++; 
								        	 
								        	 
//								        	 console.log("len:::"+x_Array_new.length);
//								        	 console.log("colcount:::"+colcount);								        	 								     
								        	 
								        }
								    	 
								    	 
								     }
							   flag =0;
							   
							   
							   
							     }

							         x_Array_new_count++;
							         colcount++;
							     }
					    		 
					    		 
					    		 
					    		 pearson_current_data_Array.push(Array.of((x_Array_new_count-1),TVOC__ppb___count, 1));
					    		 
					    	 }
					    		 }
					      
					     }
			        	 
			        	 }
				         
				         
				         
				         if(tablekey4 == "reference")
			        	 {
				        	 x_Array_new_count = 0;
				        	 
				        	 var TVOC__ppb___count =0;
			        	 for(var key in tableval4)
					     {
					    	 tablekey5 = key;
					    	 tableval5 = tableval4[key];
//					    	 console.log("tablekey5:  :"+tablekey5);
//					    	 console.log(tableval5);/
					    	//console.log("len##################"+tableval5.size);
					    	 
					    	 
					    	 
					    	 
					    	 if(tablekey5 == "pearson")
					    	 {
					    		 let obj1Len = Object.keys(tableval5).length;
						    	 if (obj1Len == 0) {
						    		 
						    		 
						    		 console.log("emptyyyyyyyyyyyy   tableval5  ##:  pearson reference :",tableval5);
						    	   
						    	 } 
						    	 else
						    	 {
						    		 
						    	 console.log("not   emptyyyyyyyyyyyy   tableval5  ##:  pearson reference :",tableval5);
						    	 }
					    		 var colcount = 0;
					    		 
					    		 for(var key in tableval5)
							     {
							    	 tablekey6 = key;
							    	 tableval6 = tableval5[key];
//							    	 console.log("tablekey6:  #######  :"+tablekey6);
							    	 
							    	 
//							         console.log(tableval6);/
							        
							        {
							    	  TVOC__ppb___count = 0;
							    	
							    	 // colcount = 0;
							    	  var flag=0 ;
							   for(var key in tableval6)
								     {
//							        	 console.log("tablekey7:    assssssssssdddddddddddddffffffffffffffffhhhhhhhhh  :");
								    	 tablekey7 = key;
								    	 tableval7 = tableval6[key];
//								    	 console.log("tablekey7: #### :"+tablekey7);
								        	
								    	 
								    	 var tableval7_round =Math.round((tableval7 + Number.EPSILON) * 100) / 100
								        	
								        if (colcount == TVOC__ppb___count)
								        {
								        	 pearson_reference_data_Array.push(Array.of(x_Array_new_count,TVOC__ppb___count, 1));	
								        	 pearson_reference_data_Array.push(Array.of(x_Array_new_count,(TVOC__ppb___count+1), tableval7_round));
								        	 
								        	 //TVOC__ppb___count = TVOC__ppb___count+1;
								        	 TVOC__ppb___count++;
								        	 flag = flag+1;
								        }
								        else 
								        {
//								        	alert("value:::::"+parseInt(flag));
								        	if ( parseInt(flag) == 1)
								        	{
								        		flag = 0;
								        		TVOC__ppb___count++;
								        	}
								        	
								        	 pearson_reference_data_Array.push(Array.of(x_Array_new_count,TVOC__ppb___count, tableval7_round));
								        	 TVOC__ppb___count++; 
								        	 
								        	 
//								        	 console.log("len:::"+x_Array_new.length);
//								        	 console.log("colcount:::"+colcount);								        	 								     
								        	 
								        }
								    	 
								    	 
								     }
							   flag =0;
							   
							   
							   
							     }

							         x_Array_new_count++;
							         colcount++;
							     }
					    		 
					    		 
					    		 
					    		 pearson_reference_data_Array.push(Array.of((x_Array_new_count-1),TVOC__ppb___count, 1));
					    		 
					    	 }
					    		 }
					      
					     }
			        	 
			        	 
				         
				         
				         if(tablekey4 == "current")
			        	 {
				        	 x_Array_new_count = 0;
				        	 
				        	 var TVOC__ppb___count =0;
			        	 for(var key in tableval4)
					     {
					    	 tablekey5 = key;
					    	 tableval5 = tableval4[key];
//					    	 console.log("tablekey5:  :"+tablekey5);
//					    	 console.log(tableval5);
					    	//console.log("len##################"+tableval5.size);
					    	 
					    	 
					    	 
					    	 
					    	 if(tablekey5 == "spearman")
					    	 {
					    		 let obj1Len = Object.keys(tableval5).length;
						    	 if (obj1Len == 0) {
						    		 
						    		 
						    		 console.log("emptyyyyyyyyyyyy   tableval5  ##:  spearman current :",tableval5);
						    	   
						    	 } 
						    	 else
						    	 {
						    		 
						    	 console.log("not   emptyyyyyyyyyyyy   tableval5  ##:  spearman current :",tableval5);
						    	 
					    		 
					    		 var colcount = 0;
					    		 
					    		 for(var key in tableval5)
							     {
							    	 tablekey6 = key;
							    	 tableval6 = tableval5[key];
//							    	 console.log("tablekey6:  #######  :"+tablekey6);
							    	
							    	 
//							         console.log(tableval6);
							        
							 // if(x_Array_new.includes(tablekey6))
							        {
							    	  TVOC__ppb___count = 0;
							    	
							    	 // colcount = 0;
							    	  var flag=0 ;
							   for(var key in tableval6)
								     {
//							        	 console.log("tablekey7:    assssssssssdddddddddddddffffffffffffffffhhhhhhhhh  :");
								    	 tablekey7 = key;
								    	 tableval7 = tableval6[key];
//								    	 console.log("tablekey7: #### :"+tablekey7);
								        	
								    	 
								    	 var tableval7_round =Math.round((tableval7 + Number.EPSILON) * 100) / 100
								        	
								        if (colcount == TVOC__ppb___count)
								        {
								        	spearman_current_data_Array.push(Array.of(x_Array_new_count,TVOC__ppb___count, 1));	
								        	spearman_current_data_Array.push(Array.of(x_Array_new_count,(TVOC__ppb___count+1), tableval7_round));
								        	 
								        	 //TVOC__ppb___count = TVOC__ppb___count+1;
								        	 TVOC__ppb___count++;
								        	 flag = flag+1;
								        }
								        else 
								        {
//								        	alert("value:::::"+parseInt(flag));
								        	if ( parseInt(flag) == 1)
								        	{
								        		flag = 0;
								        		TVOC__ppb___count++;
								        	}
								        	
								        	spearman_current_data_Array.push(Array.of(x_Array_new_count,TVOC__ppb___count, tableval7_round));
								        	 TVOC__ppb___count++; 
								        	 
								        	 
//								        	 console.log("len:::"+x_Array_new.length);
//								        	 console.log("colcount:::"+colcount);								        	 								     
								        	 
								        }
								    	 
								    	 
								     }
							   flag =0;
							   
							   
							   
							     }

							         x_Array_new_count++;
							         colcount++;
							     }
					    		 
					    		 
					    		 
					    		 spearman_current_data_Array.push(Array.of((x_Array_new_count-1),TVOC__ppb___count, 1));
					    		 
					    	 }
					    	}
					      
					     }
			        	 
			        	 }
				         
				         
				         
				         if(tablekey4 == "reference")
			        	 {
				        	 
				        	 x_Array_new_count = 0;
				        	 var TVOC__ppb___count =0;
			        	 for(var key in tableval4)
					     {
					    	 tablekey5 = key;
					    	 tableval5 = tableval4[key];
					    	 console.log("tablekey5:   spearman  :"+tablekey5);
					    	 console.log(tableval5);
					    
					    	 if(tablekey5 == "spearman")//spearman_reference_data_Array
					    	 {
					    		 let obj1Len = Object.keys(tableval5).length;
					    		 
					    		 
					    		 console.log("obj1Len:   spearman  :"+obj1Len);
					    		 
						    	 if (obj1Len == 0) {
						    		 
						    		 
						    		 console.log("emptyyyyyyyyyyyy   tableval5  ##:  spearman reference :",tableval5);
						    	   
						    	 } 
						    	 else
						    	 {
						    		 
						    	 console.log("not   emptyyyyyyyyyyyy   tableval5  ##:  spearman reference :",tableval5);
						    	 
					    		 
					    		 var colcount = 0;
					    		 
					    		 for(var key in tableval5)
							     {
							    	 tablekey6 = key;
							    	 tableval6 = tableval5[key];
							    	 console.log("tablekey6:  #######  :"+tablekey6);
							    
							         console.log(tableval6);
							      
							         
							 // if(x_Array_new.includes(tablekey6))
							        {
							    	  TVOC__ppb___count = 0;
							    	
							    	 // colcount = 0;
							    	  var flag=0 ;
							   for(var key in tableval6)
								     {
							        	 console.log("tablekey7:    assssssssssdddddddddddddffffffffffffffffhhhhhhhhh  :");
								    	 tablekey7 = key;
								    	 tableval7 = tableval6[key];
//								    	 console.log("tablekey7: #### :"+tablekey7);
								        	
								    	 
								    	 var tableval7_round =Math.round((tableval7 + Number.EPSILON) * 100) / 100
								        	
								        if (colcount == TVOC__ppb___count)
								        {
								        	spearman_reference_data_Array.push(Array.of(x_Array_new_count,TVOC__ppb___count, 1));	
								        	spearman_reference_data_Array.push(Array.of(x_Array_new_count,(TVOC__ppb___count+1), tableval7_round));
								        	 
								        	 //TVOC__ppb___count = TVOC__ppb___count+1;
								        	 TVOC__ppb___count++;
								        	 flag = flag+1;
								        }
								        else 
								        {
//								        	alert("value:::::"+parseInt(flag));
								        	if ( parseInt(flag) == 1)
								        	{
								        		flag = 0;
								        		TVOC__ppb___count++;
								        	}
								        	
								        	spearman_reference_data_Array.push(Array.of(x_Array_new_count,TVOC__ppb___count, tableval7_round));
								        	 TVOC__ppb___count++; 
								        	 
								        	 
//								        	 console.log("len:::"+x_Array_new.length);
//								        	 console.log("colcount:::"+colcount);								        	 								     
								        	 
								        }
								    	 
								    	 
								     }
							   flag =0;
							   
							   
							   
							     }

							         x_Array_new_count++;
							         colcount++;
							     }
					    		 
					    		 
					    		 
					    		 spearman_reference_data_Array.push(Array.of((x_Array_new_count-1),TVOC__ppb___count, 1));
					    		 
					    	 }
					    		 }
					      
					     }
			        	 
			        	 }
				         
				         
				         if(tablekey4 == "current")
			        	 {
				        	 
				        	 x_Array_new_count = 0;
				        	 var TVOC__ppb___count =0;
			        	 for(var key in tableval4)
					     {
					    	 tablekey5 = key;
					    	 tableval5 = tableval4[key];
//					    	 console.log("tablekey5: kendall :"+tablekey5);
					    	 console.log(tableval5);
					    	//console.log("len##################"+tableval5.size);
					    	 
					    	 
					    	 
					    	 
					    	 if(tablekey5 == "kendall")
					    	 {
					    	
					    		 let obj1Len = Object.keys(tableval5).length;
						    	 if (obj1Len == 0) 
						    	 {
						    		 
						    		 
						    		 console.log("emptyyyyyyyyyyyy   tableval5  ##:  kendall current :",tableval5);
						    	   
						    	 } 
						    	 else
						    	 {
						    		 
						    	 console.log("not   emptyyyyyyyyyyyy   tableval5  ##:  kendall current :",tableval5);
						    	 
					    		 var colcount = 0;
					    		 
					    		 for(var key in tableval5)
							     {
							    	 tablekey6 = key;
							    	 tableval6 = tableval5[key];
//							    	 console.log("tablekey6:  #######  :"+tablekey6);
							    	 
//							    		 x_Array_new.push(tablekey6);
							    		 
							    	
							    	 
							    	 
							    	 
							         console.log(tableval6);
							        
							         
						
							        {
							    	  TVOC__ppb___count = 0;
							    	
							    	 // colcount = 0;
							    	  var flag=0 ;
							   for(var key in tableval6)
								     {
//							        	 console.log("tablekey/7:    assssssssssdddddddddddddffffffffffffffffhhhhhhhhh  :");
								    	 tablekey7 = key;
								    	 tableval7 = tableval6[key];
//								    	 console.log("tablekey7: #### :"+tablekey7);
								        	
								    	 
								    	 var tableval7_round =Math.round((tableval7 + Number.EPSILON) * 100) / 100
								        	
								        if (colcount == TVOC__ppb___count)
								        {
								        	kendall_current_data_Array.push(Array.of(x_Array_new_count,TVOC__ppb___count, 1));	
								        	kendall_current_data_Array.push(Array.of(x_Array_new_count,(TVOC__ppb___count+1), tableval7_round));
								        	 
								        	 //TVOC__ppb___count = TVOC__ppb___count+1;
								        	 TVOC__ppb___count++;
								        	 flag = flag+1;
								        }
								        else 
								        {
//								        	alert("value:::::"+parseInt(flag));
								        	if ( parseInt(flag) == 1)
								        	{
								        		flag = 0;
								        		TVOC__ppb___count++;
								        	}
								        	
								        	kendall_current_data_Array.push(Array.of(x_Array_new_count,TVOC__ppb___count, tableval7_round));
								        	 TVOC__ppb___count++; 
								        	 
								        	 
//								        	 console.log("len:::"+x_Array_new.length);
//								        	 console.log("colcount:::"+colcount);								        	 								     
								        	 
								        }
								    	 
								    	 
								     }
							   flag =0;
							   
							   
							   
							     }

							         x_Array_new_count++;
							         colcount++;
							     }
					    		 
					    		 
					    		 
					    		 kendall_current_data_Array.push(Array.of((x_Array_new_count-1),TVOC__ppb___count, 1));
					    		 
					    	 }
					    		 }
					      
					     }
			        	 
			        	 }
				         
				         
				         
				         if(tablekey4 == "reference")
			        	 {
				        	 
				        	 x_Array_new_count = 0;
				        	 var TVOC__ppb___count =0;
			        	 for(var key in tableval4)
					     {
					    	 tablekey5 = key;
					    	 tableval5 = tableval4[key];
					    	 console.log("tablekey5:  :"+tablekey5);
					    	 console.log(tableval5);					    	
					    	 
					    	 if(tablekey5 == "kendall")//spearman_reference_data_Array
					    	 {
					    		 let obj1Len = Object.keys(tableval5).length;
						    	 if (obj1Len == 0) 
						    	 {
						    		 
						    		 
						    		 console.log("emptyyyyyyyyyyyy   tableval5  ##:  kendall reference :",tableval5);
						    	
						    	 } 
						    	 else
						    	 {
						    		 
						    	 console.log("not   emptyyyyyyyyyyyy   tableval5  ##:  kendall reference :",tableval5);
						    	 
					    		 
					    		 var colcount = 0;
					    		 
					    		 for(var key in tableval5)
							     {
							    	 tablekey6 = key;
							    	 tableval6 = tableval5[key];
//							    	 console.log("tablekey6:  ###    kendall    ####  :"+tablekey6);
							    	
							         console.log(tableval6);
							         
							
							        {
							    	  TVOC__ppb___count = 0;
							    	
							    	 // colcount = 0;
							    	  var flag=0 ;
							   for(var key in tableval6)
								     {
//							        	 console.log("tablekey7:    assssssssssdddddddddddddffffffffffffffffhhhhhhhhh  :");
								    	 tablekey7 = key;
								    	 tableval7 = tableval6[key];
//								    	 console.log("tablekey7: #### :"+tablekey7);
								        	
								    	 
								    	 var tableval7_round =Math.round((tableval7 + Number.EPSILON) * 100) / 100
								        	
								        if (colcount == TVOC__ppb___count)
								        {
								        	kendall_reference_data_Array.push(Array.of(x_Array_new_count,TVOC__ppb___count, 1));	
								        	kendall_reference_data_Array.push(Array.of(x_Array_new_count,(TVOC__ppb___count+1), tableval7_round));
								        	 
								        	 //TVOC__ppb___count = TVOC__ppb___count+1;
								        	 TVOC__ppb___count++;
								        	 flag = flag+1;
								        }
								        else 
								        {
//								        	alert("value:::::"+parseInt(flag));
								        	if ( parseInt(flag) == 1)
								        	{
								        		flag = 0;
								        		TVOC__ppb___count++;
								        	}
								        	
								        	kendall_reference_data_Array.push(Array.of(x_Array_new_count,TVOC__ppb___count, tableval7_round));
								        	 TVOC__ppb___count++; 
								        	 
								        	 
//								        	 console.log("len:::"+x_Array_new.length);
//								        	 console.log("colcount:::"+colcount);								        	 								     
								        	 
								        }
								    	 
								    	 
								     }
							   flag =0;
							   
							   
							   
							     }

							         x_Array_new_count++;
							         colcount++;
							     }
					    		 
					    		 
					    		 
					    		 kendall_reference_data_Array.push(Array.of((x_Array_new_count-1),TVOC__ppb___count, 1));
					    		 
					    	 }
					    		 }
					      
					     }
			        	 
			        	 }
				         
				         
				         if(tablekey4 == "current")
			        	 {
				        	 
				        	 x_Array_new_count = 0;
				        	 var TVOC__ppb___count =0;
			        	 for(var key in tableval4)
					     {
					    	 tablekey5 = key;
					    	 tableval5 = tableval4[key];
					    	 
					    	 if(tablekey5 == "cramer_v")
					    	 {
					    		 
					    		 
//					    		 console.log("tableval5 cramer_v  tableval5  ##:  cramer_v  :",tableval5);
					    		 
//					    		 console.log("emptyyyyyyyyyyyy   tableval5  ##:  cramer_v  :",tableval5);
					    		 let obj1Len = Object.keys(tableval5).length;
						    	 if (obj1Len == 0) {
						    		 
						    		 
						    		 console.log("emptyyyyyyyyyyyy   tableval5  ##:  cramer_v current :",tableval5);
						    	    
						    	 } 
						    	 else
						    		 {
						    		 console.log("not   emptyyyyyyyyyyyy   tableval5  ##:  cramer_v current :",tableval5);
						    		 
						    		 
					    		 var colcount = 0;
					    		 
					    		 for(var key in tableval5)
							     {
							    	 tablekey6 = key;
							    	 tableval6 = tableval5[key];
//							    	 console.log("tablekey6:    cramer_v    #######  :"+tablekey6);
							    	 
//							         console.log(tableval6);
							        
							         
						
							        {
							    	  TVOC__ppb___count = 0;
							    	
							    	 // colcount = 0;
							    	  var flag=0 ;
							   for(var key in tableval6)
								     {
//							        	 console.log("tablekey7:   cramer_v   ddffffffffffffffffhhhhhhhhh  :");
								    	 tablekey7 = key;
								    	 tableval7 = tableval6[key];
//								    	 console.log("tablekey7: #### :"+tablekey7);
								        	
								    	 
								    	 var tableval7_round =Math.round((tableval7 + Number.EPSILON) * 100) / 100
								        	
								        if (colcount == TVOC__ppb___count)
								        {
								        	cramer_v_current_data_Array.push(Array.of(x_Array_new_count,TVOC__ppb___count, 1));	
								        	cramer_v_current_data_Array.push(Array.of(x_Array_new_count,(TVOC__ppb___count+1), tableval7_round));
								        	 
								        	 //TVOC__ppb___count = TVOC__ppb___count+1;
								        	 TVOC__ppb___count++;
								        	 flag = flag+1;
								        }
								        else 
								        {
//								        	alert("value:::::"+parseInt(flag));
								        	if ( parseInt(flag) == 1)
								        	{
								        		flag = 0;
								        		TVOC__ppb___count++;
								        	}
								        	
								        	cramer_v_current_data_Array.push(Array.of(x_Array_new_count,TVOC__ppb___count, tableval7_round));
								        	 TVOC__ppb___count++; 
								        	 
								        	 
//								        	 console.log("len:::"+x_Array_new.length);
//								        	 console.log("colcount:::"+colcount);								        	 								     
								        	 
								        }
								    	 
								    	 
								     }
							   flag =0;
							   
							   
							   
							     }

							         x_Array_new_count++;
							         colcount++;
							     }
					    		 
					    		 
					    		 
					    		 cramer_v_current_data_Array.push(Array.of((x_Array_new_count-1),TVOC__ppb___count, 1));
					    		 
					    	 }
					    		 }
					      
					     }
			        	 
			        	 }
				         
				         
				         
				         if(tablekey4 == "reference")
			        	 {
				        	 
				        	 x_Array_new_count = 0;
				        	 var TVOC__ppb___count =0;
			        	 for(var key in tableval4)
					     {
					    	 tablekey5 = key;
					    	 tableval5 = tableval4[key];
					    	 console.log("tablekey5:  cramer_v    :"+tablekey5);
					    	 console.log("tableval5   tableval5:  cramer_v    :",tableval5);
					    	
					    	 if(tablekey5 == "cramer_v")
					    	 {
					    		 let obj1Len = Object.keys(tableval5).length;
						    	 if (obj1Len == 0) {
						    		 
						    		 
						    		 console.log("emptyyyyyyyyyyyy   tableval5  ##:  cramer_v  reference :",tableval5);
						    	    
						    	 } 
						    	 else
						    		 {
						    		 console.log("not   emptyyyyyyyyyyyy   tableval5  ##:  cramer_v  reference :",tableval5);
						    		 
					    		 
					    		 var colcount = 0;
					    		 
					    		 for(var key in tableval5)
							     {
							    	 tablekey6 = key;
							    	 tableval6 = tableval5[key];
//							    	 console.log("tablekey6:  #######  :"+tablekey6);
							    	
							         console.log(tableval6);
							
							        {
							    	  TVOC__ppb___count = 0;
							    	
							    	 // colcount = 0;
							    	  var flag=0 ;
							   for(var key in tableval6)
								     {
//							        	 console.log("tablekey7:    assssssssssdddddddddddddffffffffffffffffhhhhhhhhh  :");
								    	 tablekey7 = key;
								    	 tableval7 = tableval6[key];
//								    	 console.log("tablekey7: #### :"+tablekey7);
								        	
								    	 
								    	 var tableval7_round =Math.round((tableval7 + Number.EPSILON) * 100) / 100
								        	
								        if (colcount == TVOC__ppb___count)
								        {
								        	cramer_v_reference_data_Array.push(Array.of(x_Array_new_count,TVOC__ppb___count, 1));	
								        	cramer_v_reference_data_Array.push(Array.of(x_Array_new_count,(TVOC__ppb___count+1), tableval7_round));
								        	 
								        	 //TVOC__ppb___count = TVOC__ppb___count+1;
								        	 TVOC__ppb___count++;
								        	 flag = flag+1;
								        }
								        else 
								        {
//								        	alert("value:::::"+parseInt(flag));
								        	if ( parseInt(flag) == 1)
								        	{
								        		flag = 0;
								        		TVOC__ppb___count++;
								        	}
								        	
								        	cramer_v_reference_data_Array.push(Array.of(x_Array_new_count,TVOC__ppb___count, tableval7_round));
								        	 TVOC__ppb___count++; 
								        	 
								        	 
//								        	 console.log("len:::"+x_Array_new.length);
//								        	 console.log("colcount:::"+colcount);								        	 								     
								        	 
								        }
								    	 
								    	 
								     }
							   flag =0;
							   
							   
							   
							     }

							         x_Array_new_count++;
							         colcount++;
							     }
					    		 
					    		 
					    		 
					    		 cramer_v_reference_data_Array.push(Array.of((x_Array_new_count-1),TVOC__ppb___count, 1));
					    		 
					    	 }
					    		 }
					      
					     }
			        	 
			        	 }
				         
				         
				         
				         
				         
				         for(var key in tableval4)
					     {
					    	 tablekey5 = key;
					    	 tableval5 = tableval4[key];
//					    	 console.log("tablekey5::"+tablekey5);
					        
					    	 if(tablekey5 == "pearson")
					    		 {
					    		 if(count_person == 0)
					    		 {
					    		 for(var key in tableval5)
							     {
							    	 tablekey7 = key;
							    	 tableval7 = tableval5[key];
//							    	 console.log("tablekey7::"+tablekey7);
							    	 x_Array.push(tablekey7);
//							         console.log(tableval7);
							     }
					    		 
					    		 }
					    		 
					    		 count_person++;
					    		 }
					    	 
					    	 if(x_Array.length > 0)
					    		 {
					    		 
//					    		 console.log("x_Array::",x_Array);
					    		 }
					    	 
					    	 
					    	 
//					         console.log(tableval5);
					         
					         for(var key in tableval5)
						     {
						    	 tablekey6 = key;
						    	 tableval6 = tableval5[key];
//						    	 console.log("tablekey6::"+tablekey6);
						        
//						         console.log(tableval6);
						     }
					         
					         
					         
					         
					     }
				         
				         
				     }
			         
			         
			         
			         
			     }
		     }
	   }
   }
   

	console.log("pearson_current_data_Array  ",pearson_current_data_Array);
	
	console.log("pearson_reference_data_Array  ### ",pearson_reference_data_Array);
	
console.log("spearman_current_data_Array  ",spearman_current_data_Array);
	
	console.log("spearman_reference_data_Array  ### ",spearman_reference_data_Array);
	
console.log("kendall_current_data_Array  ",kendall_current_data_Array);
	
	console.log("kendall_reference_data_Array  ### ",kendall_reference_data_Array);
	
console.log("cramer_v_current_data_Array  ",cramer_v_current_data_Array);
	
	console.log("cramer_v_reference_data_Array  ### ",cramer_v_reference_data_Array);
	
	 console.log("x_Array_new:: ",x_Array_new);
	 

	 
