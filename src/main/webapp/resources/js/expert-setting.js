                           
    
  
  function ischeckedfn_recursive(value)
     {
//alert("value:::::"+value);
      if(value=="on")
      {
      
       $("#labelon").css({'cursor' : "pointer"});
       $("#labeloff").css({'cursor' : "pointer"});
       $("#labelauto").css({'cursor' : "pointer"});

       $("#glmlabelon").css({'cursor' : "pointer"});
       $("#glmlabeloff").css({'cursor' : "pointer"});
       $("#glmlabelauto").css({'cursor' : "pointer"});

       $("#treelabelon").css({'cursor' : "pointer"});
       $("#treelabeloff").css({'cursor' : "pointer"});
       $("#treelabelauto").css({'cursor' : "pointer"});


        $("#randomlabelon").css({'cursor' : "pointer"});
       $("#randomlabeloff").css({'cursor' : "pointer"});
       $("#randomlabelauto").css({'cursor' : "pointer"});

        $("#extralabelon").css({'cursor' : "pointer"});
       $("#extralabeloff").css({'cursor' : "pointer"});
       $("#extralabelauto").css({'cursor' : "pointer"});

       $("#gbmlabelon").css({'cursor' : "pointer"});
       $("#gbmlabeloff").css({'cursor' : "pointer"});
       $("#gbmlabelauto").css({'cursor' : "pointer"});
      
      
      
       $("#xgblabelon").css({'cursor' : "pointer"});
       $("#xgblabeloff").css({'cursor' : "pointer"});
       $("#xgblabelauto").css({'cursor' : "pointer"});

        $("#strategylabelauto").css({'cursor' : "pointer"});
       $("#strategylabelover").css({'cursor' : "pointer"});
       $("#strategylabelunder").css({'cursor' : "pointer"});

       $("#missinglabelmean").css({'cursor' : "pointer"});
       $("#missinglabelmedian").css({'cursor' : "pointer"});
       $("#missinglabelmode").css({'cursor' : "pointer"});
       $("#missinglabeloff").css({'cursor' : "pointer"});
       $("#missinglabelauto").css({'cursor' : "pointer"});    
 
      

      
       $("#autofutureon").prop('checked',true);
       $("#autofutureon").attr('disabled',false);       
       $("#autofutureauto").prop('checked',true);
       $("#autofutureauto").attr('disabled',false);
       $("#autofutureoff").prop('checked',true);
       $("#autofutureoff").attr('disabled',false);

       $("#glmon").prop('checked',true);
        $("#glmon").attr('disabled',false); 
        $("#glmoauto").prop('checked',true);
        $("#glmoauto").attr('disabled',false);     
       $("#glmoff").prop('checked',true);
       $("#glmoff").attr('disabled',false);
       

       $("#treeon").prop('checked',true);
        $("#treeon").attr('disabled',false); 
        $("#treeoauto").prop('checked',true);
        $("#treeoauto").attr('disabled',false);    
       $("#treeoff").prop('checked',true);
        $("#treeoff").attr('disabled',false);
       

         $("#foreston").prop('checked',true); 
         $("#foreston").attr('disabled',false);  
          $("#forestauto").prop('checked',true);
        $("#forestauto").attr('disabled',false);   
        $("#forestoff").prop('checked',true);
        $("#forestoff").attr('disabled',false);
       

        $("#extraon").prop('checked',true);  
        $("#extraon").attr('disabled',false);  
         $("#extraauto").prop('checked',true);
        $("#extraauto").attr('disabled',false);  
        $("#extraoff").prop('checked',true);
        $("#extraoff").attr('disabled',false);
       

          $("#xgbon").prop('checked',true);
           $("#xgbon").attr('disabled',false);   
           $("#xgboauto").prop('checked',true);
         $("#xgboauto").attr('disabled',false);   
        $("#xgboff").prop('checked',true);
         $("#xgboff").attr('disabled',false); 
         

        $("#strategyauto").prop('checked',true);
         $("#strategyauto").attr('disabled',false);       
        $("#strategyover").prop('checked',true);
         $("#strategyover").attr('disabled',false);
        $("#strategyunder").prop('checked',true);
         $("#strategyunder").attr('disabled',false);

        $("#missingmean").prop('checked',true); 
        $("#missingmean").attr('disabled',false);     
        $("#missingmedian").prop('checked',true);
        $("#missingmedian").attr('disabled',false); 
        $("#missingmode").prop('checked',true);
        $("#missingmode").attr('disabled',false); 
        $("#missingauto").prop('checked',true);
        $("#missingauto").attr('disabled',false);
        $("#missingoff").prop('checked',true);
        $("#missingoff").attr('disabled',false); 
        
       
       
       
        $("#gbmon").prop('checked',true); 
        $("#gbmon").attr('disabled',false); 
        $("#gbmauto").prop('checked',true);
        $("#gbmauto").attr('disabled',false);    
        $("#gbmoff").prop('checked',true);
        $("#gbmoff").attr('disabled',false);
       
        
       

      }
      else if(value=="auto")
      {
        $("#labelon").css({'cursor' : "not-allowed"});
          $("#labeloff").css({'cursor': "not-allowed"});
        $("#labelauto").css({'cursor': "pointer"});

        $("#glmlabelon").css({'cursor' : "not-allowed"});
          $("#glmlabeloff").css({'cursor': "not-allowed"});
        $("#glmlabelauto").css({'cursor': "pointer"});

        $("#treelabelon").css({'cursor' : "not-allowed"});
          $("#treelabeloff").css({'cursor': "not-allowed"});
        $("#treelabelauto").css({'cursor': "pointer"});

         $("#randomlabelon").css({'cursor' : "not-allowed"});
       $("#randomlabeloff").css({'cursor' : "not-allowed"});
       $("#randomlabelauto").css({'cursor' : "pointer"});

        $("#extralabelon").css({'cursor' : "not-allowed"});
       $("#extralabeloff").css({'cursor' : "not-allowed"});
       $("#extralabelauto").css({'cursor' : "pointer"});

       $("#xgblabelon").css({'cursor' : "not-allowed"});
       $("#xgblabeloff").css({'cursor' : "not-allowed"});
       $("#xgblabelauto").css({'cursor' : "pointer"});


       $("#gbmlabelon").css({'cursor' : "not-allowed"});
       $("#gbmlabeloff").css({'cursor' : "not-allowed"});
       $("#gbmlabelauto").css({'cursor' : "pointer"});

      
      
        $("#strategylabelauto").css({'cursor' : "pointer"});
       $("#strategylabelover").css({'cursor' : "not-allowed"});
       $("#strategylabelunder").css({'cursor' : "not-allowed"});

       $("#missinglabelmean").css({'cursor' : "not-allowed"});
       $("#missinglabelmedian").css({'cursor' : "not-allowed"});
       $("#missinglabelmode").css({'cursor' : "not-allowed"});
       $("#missinglabeloff").css({'cursor' : "not-allowed"});
       $("#missinglabelauto").css({'cursor' : "pointer"});
      
      

         $("#autofutureon").prop('checked',false);
         $("#autofutureon").attr('disabled',true);
          $("#autofutureoff").prop('checked',false);
           $("#autofutureoff").attr('disabled',true);
           $("#autofutureauto").prop('checked',true);
           $("#autofutureauto").attr('disabled',false);

            $("#glmon").prop('checked',false); 
            $("#glmon").attr('disabled',true);    
        $("#glmoff").prop('checked',false);
         $("#glmoff").attr('disabled',true);
        $("#glmoauto").prop('checked',true);
        $("#glmoauto").attr('disabled',false);
       
        $("#treeon").prop('checked',false);   
         $("#treeon").attr('disabled',true);   
       $("#treeoff").prop('checked',false);
        $("#treeoff").attr('disabled',true);
       $("#treeoauto").prop('checked',true);
        $("#treeoauto").attr('disabled',false);

         $("#foreston").prop('checked',false);  
         $("#foreston").attr('disabled',true);    
        $("#forestoff").prop('checked',false);
        $("#forestoff").attr('disabled',true);
        $("#forestauto").prop('checked',true);
        $("#forestauto").attr('disabled',false);

        $("#extraon").prop('checked',false);
         $("#extraon").attr('disabled',true);     
        $("#extraoff").prop('checked',false);
         $("#extraoff").attr('disabled',true);
        $("#extraauto").prop('checked',true);
         $("#extraauto").attr('disabled',false);

          $("#xgbon").prop('checked',false);      
          $("#xgbon").attr('disabled',true);
        $("#xgboff").prop('checked',false);
        $("#xgboff").attr('disabled',true);
        $("#xgboauto").prop('checked',true);
        $("#xgboauto").attr('disabled',false);

        $("#strategyauto").prop('checked',true);
         $("#strategyauto").attr('disabled',false);     
        $("#strategyover").prop('checked',false);
         $("#strategyover").attr('disabled',true);
        $("#strategyunder").prop('checked',false);
         $("#strategyunder").attr('disabled',true);

        $("#missingmean").prop('checked',false); 
        $("#missingmean").attr('disabled',true);     
        $("#missingmedian").prop('checked',false);
        $("#missingmedian").attr('disabled',true);   
        $("#missingmode").prop('checked',false);
         $("#missingmode").attr('disabled',true); 
        $("#missingoff").prop('checked',false);
        $("#missingoff").attr('disabled',true);
 
        $("#missingauto").prop('checked',true);
        $("#missingauto").attr('disabled',false);
       
       

       
        $("#gbmon").prop('checked',false);  
        $("#gbmon").attr('disabled',true);     
        $("#gbmoff").prop('checked',false);
        $("#gbmoff").attr('disabled',true); 
        $("#gbmauto").prop('checked',true);
        $("#gbmauto").attr('disabled',false); 
       

      }
    }
  
  
    // function showCoords(event) {
    //   let x = event.clientX;
    //   let y = event.clientY;
    //   let text = "X coords: " + x + ", Y coords: " + y;
    //   document.getElementById("openTab_1").innerHTML = text;
    // }

    function opendiv(){
      
      $("#expertconfigmodal").modal('show');
    }
   
    function openTab(index){
      
      //console.log(event);
      if(index == 1){      
        //alert(index)
        $("#openTab_1").toggle("slide");
      }
      else if(index == 2){
        $("#openTab_2").toggle("slide");
      }
      else if(index == 3){
        $("#openTab_3").toggle("slide");
      }
      else if(index == 4){
        $("#openTab_4").toggle("slide");
      }
      else if(index == 5){
        $("#openTab_5").toggle("slide");
      }
      else if(index == 6){
        $("#openTab_6").toggle("slide");
      }
      else if(index == 7){
        $("#openTab_7").toggle("slide");
      }
      else if(index == 8){
        $("#openTab_8").toggle("slide");
      }
      else if(index == 9){
        $("#openTab_9").toggle("slide");
      }
      else if(index == 10){
        $("#openTab_10").toggle("slide");
      }
    }

    $( document ).ready(function() {
      // jsondataBind()
    	jsondataFunction_1();
    	$(".buttonclose").click(function(){
    		  $(this).parent().parent().hide("slide");
    		});
  });

  function closeTab(index){
    if(index == 1){      
      //alert(index)
      $("#openTab_1").toggle('hide');
    }
    else if(index == 2){
      $("#openTab_2").toggle();
    }
    else if(index == 3){
      $("#openTab_3").toggle();
    }
    else if(index == 4){
      $("#openTab_4").toggle();
    }
    else if(index == 5){
      $("#openTab_5").toggle();
    }
    else if(index == 6){
      $("#openTab_6").toggle();
    }
    else if(index == 7){
      $("#openTab_7").toggle();
    }
    else if(index == 8){
      $("#openTab_8").toggle();
    }
    else if(index == 9){
      $("#openTab_9").toggle();
    }
    else if(index == 10){
      $("#openTab_10").toggle();
    }
  }




var autocruse=[];
var autofeature1 =[];
var autofeature2 =[];
var autofeature3 =[];
var newJson="";
var newjsonflag=0;
var tab = [];



function jsondataFunction_1(){ 

	  //alert("hi")
	    var json=[{"sklearn.ensemble.ExtraTreesClassifier":{"n_estimators":[100],"criterion":["gini","entropy"],"max_features":[0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.95,1],"min_samples_split":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"min_samples_leaf":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]},"sklearn.ensemble.RandomForestClassifier":{"n_estimators":[100],"criterion":["gini","entropy"],"max_features":[0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.95,1],"min_samples_split":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"min_samples_leaf":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]},"sklearn.ensemble.GradientBoostingClassifier":{"n_estimators":[100],"learning_rate":[0.001,0.01,0.1,0.5,1.0],"max_depth":[1,2,3,4,5,6,7,8,9,10],"min_samples_split":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"min_samples_leaf":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"subsample":[0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.95,1],"max_features":[0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.95,1]},"xgboost.XGBClassifier":{"n_estimators":[100],"max_depth":[1,2,3,4,5,6,7,8,9,10],"learning_rate":[0.001,0.01,0.1,0.5,1.0],"subsample":[0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.95,1],"min_child_weight":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]}},{"sklearn.ensemble.ExtraTreesRegressor":{"n_estimators":[100],"max_features":[0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.95,1],"min_samples_split":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"min_samples_leaf":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]},"sklearn.ensemble.GradientBoostingRegressor":{"n_estimators":[100],"loss":["ls","lad","huber","quantile"],"learning_rate":[0.001,0.01,0.1,0.5,1.0],"max_depth":[1,2,3,4,5,6,7,8,9,10],"min_samples_split":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"min_samples_leaf":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"subsample":[0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.95,1],"max_features":[0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.95,1],"alpha":[0.75,0.8,0.85,0.9,0.95,0.99]},"sklearn.ensemble.AdaBoostRegressor":{"n_estimators":[100],"learning_rate":[0.001,0.01,0.1,0.5,1.0],"loss":["linear","square","exponential"]},"sklearn.tree.DecisionTreeRegressor":{"max_depth":[1,2,3,4,5,6,7,8,9,10],"min_samples_split":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"min_samples_leaf":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]},"sklearn.ensemble.RandomForestRegressor":{"n_estimators":[100],"max_features":[0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.95,1],"min_samples_split":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"min_samples_leaf":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]},"xgboost.XGBRegressor":{"n_estimators":[100],"max_depth":[1,2,3,4,5,6,7,8,9,10],"learning_rate":[0.001,0.01,0.1,0.5,1.0],"subsample":[0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.95,1],"min_child_weight":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]}},{"label_encoding":"on","onehot_encoding":"on","text_embedding":"on","feature_scaling":"on","datetime_features":"on"},{"lag_features":"on","number_of_lags":"6","lag_interactions":"on","seasonality_period":"12" ,"seasonal_columns" : ["seasonal", "trend", "residual"]}];
	    
						// console.log("result ::: ",json);

	         //alert(json.length);
						
						var jsondata = json;
	          
	          var key12 ='';
	          var count =1;
	          var autodiv='';
	          var indexid=1;
	          var maincount=1;
	          var labeldivbind='';
	          var labeldivbind1='';

	          var count_label =1;
	          var labelid=1;
						for(key in jsondata)
							{
	              
							var key_ = key;
							var value = jsondata[key];
	            
							
							// console.log("key_  ::: "+key_);
							// console.log("value ::: ",value);

	            
	            for(key in value)
				{
	                var key1 = key;
	                var value1 = value[key];
	                
	                console.log("key1  ::: "+key1);
	                console.log("value1 ::: ",value1);
	               
	                
	                
	                
	                var auto = "";
	                var on = "";
	                var off = "";
	                
	                if(value1 == "auto")
	                	{
	                	auto = "checked";
	                	}
	                else if(value1 == "on")
	            	{
	            	on = "checked";
	            	}
	                else if(value1 == "off")
	            	{
	            	off = "checked";
	            	}
	                
	                
	                
	                
	                  if(count_label == 3)
	                  {
	                	  
	                	  if(key1 == "label_encoding")
	                  	{
	                  	key1 = "Label Encoding";
	                  	}
	                  else if(key1 == "onehot_encoding")
	                      {
	                  	key1 = "One-hot Encoding";
	                  	}
	                  else if(key1 == "text_embedding")
	  	                {
	  	            	key1 = "Text Embedding";
	  	            	}
	                  else if(key1 == "feature_scaling")
	  	                {
	  	            	key1 = "Feature Scaling";
	  	            	}
	                  else if(key1 == "datetime_features")
	  	                {
	  	            	key1 = "Datetime Features";
	  	            	}
	                  
	                	  
	                	  
	                	  
	                    labeldivbind +='<div class="col-3 rowlength3">\
	                <div class="cb-range-form-div">\
	                  <div class="cb-range-Label">\
	                    <span class="label"><div class="cb-range-text"><span id="autofeaturedivtextlabel'+maincount+'">'+key1+'</span>\
	                    </div></span>\
	                    </div>\
	                    <div class="css-radio">\
	                     <input type="radio" class="css-1kd3qvh" id="auto'+labelid+'" name="auto'+labelid+'" value="auto" '+auto+'>\
	                     <label class="css-iwo4qd" id="labelauto'+labelid+'" for="auto'+labelid+'">Auto</label>\
	                     <input type="radio" class="css-1kd3qvh" id="on'+labelid+'" name="auto'+labelid+'" value="on" '+on+'>\
	                     <label class="css-iwo4qd" id="labelon'+labelid+'" for="on'+labelid+'">On</label>\
	                     <input type="radio"  class="css-1kd3qvh" id="off'+labelid+'" name="auto'+labelid+'" value="Off" '+off+'>\
	                     <label class="css-iwo4qd" id="labeloff'+labelid+'" for="off'+labelid+'">Off</label>\
	                   </div>\
	                 </div>\
	              </div>';
	              labelid++;
	              
	                  }
	                  
	                  
	                  if(count_label == 4)
	                  {
	                	  if(key1 == "lag_features")
	                      {
	                  	key1 = "Lag Features";
	                  	  }
	                      else if(key1 == "number_of_lags")
	                      {
	                  	key1 = "No. of Lags";
	                  	  }
	                      else if(key1 == "lag_interactions")
	                      {
	                  	key1 = "Lag Interactions";
	                  	  }
	                      else if(key1 == "seasonality_period")
	                      {
	                  	key1 = "Seasonality Period";
	                  	  }
	                      else if(key1 == "seasonal_columns")
	                      {
	                  	key1 = "Seasonal Columns";
	                  	  }
	                	  
	                	 
	                	  
	                	  
	                	  
	                	  
	                	  if((key1 == "No. of Lags") || (key1 == "Seasonality Period"))
	                		  {
	                		  if((value1 == "auto") || (value1 == "on") || (value1 == "off") )
	                			  {
	                              labeldivbind1 +='<div class="col-3 rowlength4">\
	                          <div class="cb-range-form-div">\
	                            <div class="cb-range-Label">\
	                              <span class="label"><div class="cb-range-text"><span id="autofeaturedivtextengineer'+maincount+'">'+key1+'</span>\
	                              </div></span>\
	                              </div>\
	                              <div class="css-radio">\
	                               <input type="radio" class="css-1kd3qvh" id="auto'+labelid+'" name="auto'+labelid+'" value="auto" '+auto+'>\
	                               <label class="css-iwo4qd" id="labelauto'+labelid+'" for="auto'+labelid+'">Auto</label>\
	                               <input type="radio" class="css-1kd3qvh" id="on'+labelid+'" name="auto'+labelid+'" value="on" '+on+'>\
	                               <label class="css-iwo4qd" id="labelon'+labelid+'" for="on'+labelid+'">On</label>\
	                               <input type="radio"  class="css-1kd3qvh" id="off'+labelid+'" name="auto'+labelid+'" value="Off" '+off+'>\
	                               <label class="css-iwo4qd" id="labeloff'+labelid+'" for="off'+labelid+'">Off</label>\
	                             </div>\
	                           </div>\
	                        </div>';
	                			  }
	                		  else               	  
	                		  {
	                		  labeldivbind1 +='<div class="col-3 rowlength4">\
	                              <div class="cb-range-form-div">\
	                                <div class="cb-range-Label">\
	                                  <span class="label"><div class="cb-range-text"><span id="autofeaturedivtextengineer'+maincount+'">'+key1+'</span>\
	                                  </div></span>\
	                                  </div>\
	                                  <div class="cb-input-css">\
	                                  <input type="number" class="form-control" id="numbervalue'+labelid+'" value="'+value1+'">\
	                                  </div>\
	                               </div>\
	                            </div>';
	                		  }
	                		  
	                		  
	                		  }               	  
	                	  else if(key1 == "Seasonal Columns")
	                	  {
	                		  var value_arr = value1;
	                		  var option_div = "";
	                		  console.log("value_arr :: "+value_arr);
	                		  for(var r =0; r< value_arr.length ; r++)
	                			  {
	                			  
	                			  var option_list =  value_arr[r];
	                			  console.log("option_list::"+option_list);
	                			  option_div += '<option value="'+option_list+'">'+option_list+'</option>'
	                			  
	                			  
	                			  }
	                		  //alert(labelid);
	                		  
	                		 
	                		  
	                		  console.log("option_div::"+option_div);
	                		  setTimeout(() => {                			                  			  
	                			  $("#selectvalue").append(option_div);
	                			  $("#selectvalue").val(value_arr);
							}, 1000);
	                		  
	                		  
	                		 
	                		  
	                		  
	                		  labeldivbind1 +='<div class="col-3 rowlength4">\
	                              <div class="cb-range-form-div">\
	                                <div class="cb-range-Label">\
	                                  <span class="label"><div class="cb-range-text"><span id="autofeaturedivtextengineer'+maincount+'">'+key1+'</span>\
	                                  </div></span>\
	                                  </div>\
	                                  <div class="cb-input-css">\
	                                  <select class="form-control" id="selectvalue" multiple>\
	                                  </select>\
	                                  </div>\
	                               </div>\
	                            </div>';
	                		  } 
	                	  else
	                		  {
	                		  
	                		  labeldivbind1 +='<div class="col-3 rowlength4">\
	                              <div class="cb-range-form-div">\
	                                <div class="cb-range-Label">\
	                                  <span class="label"><div class="cb-range-text"><span id="autofeaturedivtextengineer'+maincount+'">'+key1+'</span>\
	                                  </div></span>\
	                                  </div>\
	                                  <div class="css-radio">\
	                                   <input type="radio" class="css-1kd3qvh" id="auto'+labelid+'" name="auto'+labelid+'" value="auto" '+auto+'>\
	                                   <label class="css-iwo4qd" id="labelauto'+labelid+'" for="auto'+labelid+'">Auto</label>\
	                                   <input type="radio" class="css-1kd3qvh" id="on'+labelid+'" name="auto'+labelid+'" value="on" '+on+'>\
	                                   <label class="css-iwo4qd" id="labelon'+labelid+'" for="on'+labelid+'">On</label>\
	                                   <input type="radio"  class="css-1kd3qvh" id="off'+labelid+'" name="auto'+labelid+'" value="Off" '+off+'>\
	                                   <label class="css-iwo4qd" id="labeloff'+labelid+'" for="off'+labelid+'">Off</label>\
	                                 </div>\
	                               </div>\
	                            </div>';
	                		  
	                		  }
	                	 
	                	          
	                    
	              labelid++
	              
	                  }
	                

	                var mainkey= '';
	                

	                if(key1.startsWith('sklearn.ensemble.') ){
	                  mainkey= key1.split('sklearn.ensemble.')[1];
	                }
	                else if(key1.startsWith('xgboost.') ){
	                  mainkey = key1.split('xgboost.')[1];
	                }
	                else if(key1.startsWith('sklearn.tree.') ){
	                  mainkey = key1.split('sklearn.tree.')[1];
	                }
	               
	                
	                 console.log("mainkey:::"+mainkey);
	                 
	                 
	                 if(mainkey == "ExtraTreesClassifier")
	                	 {
	                	  var div1='';
	  	                div1 +='<span class="ml-2 cb-cursor"  >\
	  	                	<i class="fa fa-plus-circle" id="autoTab'+count+'" onclick="openTab('+count+')"></i>\
	  	                	<div class="expert-modal" id="openTab_'+count+'" style="display:none">\
	  	                	<div class="expert-modal-arrow"></div>\
	  	                	<div id="auto_featurediv'+count+'" class="autofeaturelength"><span class="buttonclose" ><i class="os-icon os-icon-x"></i></span>';
	  	                for(key in value1)
	  	                  {
	  	                      var key2 = key;
	  	                      var value2 = value1[key];

	  	                      
	  	                      
	  	                      // console.log("key2  ::: "+key2);
	  	                      // console.log("value2 ::: ",value2);
	  	                      div1 +='<div class="cb-range-form-div">\
	  	                                  <div class="cb-range-Label">\
	  	                                      <span class="label"><div class="cb-range-text" id="keyid'+indexid+'">'+key2+'</div></span> \
	  	                                  </div>\
	  	                                  <div>\
	  	                                      <div class="cb-input-css">\
	  	                                          <input type="text" class="form-control" id="valueid'+indexid+'" name="valueid'+indexid+'" value="'+value2+'">\
	  	                                      </div>\
	  	                                  </div>\
	  	                              </div>'; 
	  	                              indexid++;

	  	                              
	  	                  }
	  	                div1 +='</div></div>\
	  	                	</span>';
	  	                  count++;
	  	                  
	  	                  $(div1).insertAfter("#autofeaturedivtext5");
	                	 
	                	 }
	                 else  if(mainkey == "RandomForestClassifier")
                	 {
                	  var div1='';
  	                div1 +='<span class="ml-2 cb-cursor"  >\
  	                	<i class="fa fa-plus-circle" id="autoTab'+count+'" onclick="openTab('+count+')"></i>\
  	                	<div class="expert-modal" id="openTab_'+count+'" style="display:none">\
  	                	<div class="expert-modal-arrow"></div>\
  	                	<div id="auto_featurediv'+count+'" class="autofeaturelength"><span class="buttonclose" ><i class="os-icon os-icon-x"></i></span>';
  	                for(key in value1)
  	                  {
  	                      var key2 = key;
  	                      var value2 = value1[key];

  	                      
  	                      
  	                      // console.log("key2  ::: "+key2);
  	                      // console.log("value2 ::: ",value2);
  	                      div1 +='<div class="cb-range-form-div">\
  	                                  <div class="cb-range-Label">\
  	                                      <span class="label"><div class="cb-range-text" id="keyid'+indexid+'">'+key2+'</div></span> \
  	                                  </div>\
  	                                  <div>\
  	                                      <div class="cb-input-css">\
  	                                          <input type="text" class="form-control" id="valueid'+indexid+'" name="valueid'+indexid+'" value="'+value2+'">\
  	                                      </div>\
  	                                  </div>\
  	                              </div>'; 
  	                              indexid++;

  	                              
  	                  }
  	                div1 +='</div></div>\
  	                	</span>';
  	                  count++;
  	                  
  	                  $(div1).insertAfter("#autofeaturedivtext4");
                	 
                	 }
	                 else  if(mainkey == "GradientBoostingClassifier")
                	 {
                	  var div1='';
  	                div1 +='<span class="ml-2 cb-cursor"  >\
  	                	<i class="fa fa-plus-circle" id="autoTab'+count+'" onclick="openTab('+count+')"></i>\
  	                	<div class="expert-modal" id="openTab_'+count+'" style="display:none">\
  	                	<div class="expert-modal-arrow"></div>\
  	                	<div id="auto_featurediv'+count+'" class="autofeaturelength"><span class="buttonclose" ><i class="os-icon os-icon-x"></i></span>';
  	                for(key in value1)
  	                  {
  	                      var key2 = key;
  	                      var value2 = value1[key];

  	                      
  	                      
  	                      // console.log("key2  ::: "+key2);
  	                      // console.log("value2 ::: ",value2);
  	                      div1 +='<div class="cb-range-form-div">\
  	                                  <div class="cb-range-Label">\
  	                                      <span class="label"><div class="cb-range-text" id="keyid'+indexid+'">'+key2+'</div></span> \
  	                                  </div>\
  	                                  <div>\
  	                                      <div class="cb-input-css">\
  	                                          <input type="text" class="form-control" id="valueid'+indexid+'" name="valueid'+indexid+'" value="'+value2+'">\
  	                                      </div>\
  	                                  </div>\
  	                              </div>'; 
  	                              indexid++;

  	                              
  	                  }
  	                div1 +='</div></div>\
  	                	</span>';
  	                  count++;
  	                  
  	                  $(div1).insertAfter("#autofeaturedivtext6");
                	 
                	 }
	                 else  if(mainkey == "XGBClassifier")
                	 {
                	  var div1='';
  	                div1 +='<span class="ml-2 cb-cursor"  >\
  	                	<i class="fa fa-plus-circle" id="autoTab'+count+'" onclick="openTab('+count+')"></i>\
  	                	<div class="expert-modal" id="openTab_'+count+'" style="display:none">\
  	                	<div class="expert-modal-arrow"></div>\
  	                	<div id="auto_featurediv'+count+'" class="autofeaturelength"><span class="buttonclose" ><i class="os-icon os-icon-x"></i></span>';
  	                for(key in value1)
  	                  {
  	                      var key2 = key;
  	                      var value2 = value1[key];

  	                      
  	                      
  	                      // console.log("key2  ::: "+key2);
  	                      // console.log("value2 ::: ",value2);
  	                      div1 +='<div class="cb-range-form-div">\
  	                                  <div class="cb-range-Label">\
  	                                      <span class="label"><div class="cb-range-text" id="keyid'+indexid+'">'+key2+'</div></span> \
  	                                  </div>\
  	                                  <div>\
  	                                      <div class="cb-input-css">\
  	                                          <input type="text" class="form-control" id="valueid'+indexid+'" name="valueid'+indexid+'" value="'+value2+'">\
  	                                      </div>\
  	                                  </div>\
  	                              </div>'; 
  	                              indexid++;

  	                              
  	                  }
  	                div1 +='</div></div>\
  	                	</span>';
  	                  count++;
  	                  
  	                  $(div1).insertAfter("#autofeaturedivtext7");
                	 
                	 }
	                 
	                 
	                 if(mainkey == "ExtraTreesRegressor")
                	 {
                	  var div1='';
  	                div1 +='<span class="ml-2 cb-cursor"  >\
  	                	<i class="fa fa-plus-circle" id="autoTab'+count+'" onclick="openTab('+count+')"></i>\
  	                	<div class="expert-modal" id="openTab_'+count+'" style="display:none">\
  	                	<div class="expert-modal-arrow"></div>\
  	                	<div id="auto_featurediv'+count+'" class="autofeaturelength1"><span class="buttonclose" ><i class="os-icon os-icon-x"></i></span>';
  	                for(key in value1)
  	                  {
  	                      var key2 = key;
  	                      var value2 = value1[key];

  	                      
  	                      
  	                      // console.log("key2  ::: "+key2);
  	                      // console.log("value2 ::: ",value2);
  	                      div1 +='<div class="cb-range-form-div">\
  	                                  <div class="cb-range-Label">\
  	                                      <span class="label"><div class="cb-range-text" id="keyid'+indexid+'">'+key2+'</div></span> \
  	                                  </div>\
  	                                  <div>\
  	                                      <div class="cb-input-css">\
  	                                          <input type="text" class="form-control" id="valueid'+indexid+'" name="valueid'+indexid+'" value="'+value2+'">\
  	                                      </div>\
  	                                  </div>\
  	                              </div>'; 
  	                              indexid++;

  	                              
  	                  }
  	                div1 +='</div></div>\
  	                	</span>';
  	                  count++;
  	                 
  	                  $(div1).insertAfter("#autofeaturedivtext14");
                	 
                	 }
	                 else if(mainkey == "GradientBoostingRegressor")
                	 {
                	  var div1='';
  	                div1 +='<span class="ml-2 cb-cursor"  >\
  	                	<i class="fa fa-plus-circle" id="autoTab'+count+'" onclick="openTab('+count+')"></i>\
  	                	<div class="expert-modal" id="openTab_'+count+'" style="display:none">\
  	                	<div class="expert-modal-arrow"></div>\
  	                	<div id="auto_featurediv'+count+'" class="autofeaturelength1"><span class="buttonclose" ><i class="os-icon os-icon-x"></i></span>';
  	                for(key in value1)
  	                  {
  	                      var key2 = key;
  	                      var value2 = value1[key];

  	                      
  	                      
  	                      // console.log("key2  ::: "+key2);
  	                      // console.log("value2 ::: ",value2);
  	                      div1 +='<div class="cb-range-form-div">\
  	                                  <div class="cb-range-Label">\
  	                                      <span class="label"><div class="cb-range-text" id="keyid'+indexid+'">'+key2+'</div></span> \
  	                                  </div>\
  	                                  <div>\
  	                                      <div class="cb-input-css">\
  	                                          <input type="text" class="form-control" id="valueid'+indexid+'" name="valueid'+indexid+'" value="'+value2+'">\
  	                                      </div>\
  	                                  </div>\
  	                              </div>'; 
  	                              indexid++;

  	                              
  	                  }
  	                div1 +='</div></div>\
  	                	</span>';
  	                  count++;
  	                  
  	                  $(div1).insertAfter("#autofeaturedivtext15");
                	 
                	 }
	                 else if(mainkey == "GradientBoostingRegressor")
                	 {
                	  var div1='';
  	                div1 +='<span class="ml-2 cb-cursor"  >\
  	                	<i class="fa fa-plus-circle" id="autoTab'+count+'" onclick="openTab('+count+')"></i>\
  	                	<div class="expert-modal" id="openTab_'+count+'" style="display:none">\
  	                	<div class="expert-modal-arrow"></div>\
  	                	<div id="auto_featurediv'+count+'" class="autofeaturelength1"><span class="buttonclose" ><i class="os-icon os-icon-x"></i></span>';
  	                for(key in value1)
  	                  {
  	                      var key2 = key;
  	                      var value2 = value1[key];

  	                      
  	                      
  	                      // console.log("key2  ::: "+key2);
  	                      // console.log("value2 ::: ",value2);
  	                      div1 +='<div class="cb-range-form-div">\
  	                                  <div class="cb-range-Label">\
  	                                      <span class="label"><div class="cb-range-text" id="keyid'+indexid+'">'+key2+'</div></span> \
  	                                  </div>\
  	                                  <div>\
  	                                      <div class="cb-input-css">\
  	                                          <input type="text" class="form-control" id="valueid'+indexid+'" name="valueid'+indexid+'" value="'+value2+'">\
  	                                      </div>\
  	                                  </div>\
  	                              </div>'; 
  	                              indexid++;

  	                              
  	                  }
  	                div1 +='</div></div>\
  	                	</span>';
  	                  count++;
  	                  
  	                  $(div1).insertAfter("#autofeaturedivtext15");
                	 
                	 }
	                 else if(mainkey == "DecisionTreeRegressor")
                	 {
                	  var div1='';
  	                div1 +='<span class="ml-2 cb-cursor"  >\
  	                	<i class="fa fa-plus-circle" id="autoTab'+count+'" onclick="openTab('+count+')"></i>\
  	                	<div class="expert-modal" id="openTab_'+count+'" style="display:none">\
  	                	<div class="expert-modal-arrow"></div>\
  	                	<div id="auto_featurediv'+count+'" class="autofeaturelength1"><span class="buttonclose" ><i class="os-icon os-icon-x"></i></span>';
  	                for(key in value1)
  	                  {
  	                      var key2 = key;
  	                      var value2 = value1[key];

  	                      
  	                      
  	                      // console.log("key2  ::: "+key2);
  	                      // console.log("value2 ::: ",value2);
  	                      div1 +='<div class="cb-range-form-div">\
  	                                  <div class="cb-range-Label">\
  	                                      <span class="label"><div class="cb-range-text" id="keyid'+indexid+'">'+key2+'</div></span> \
  	                                  </div>\
  	                                  <div>\
  	                                      <div class="cb-input-css">\
  	                                          <input type="text" class="form-control" id="valueid'+indexid+'" name="valueid'+indexid+'" value="'+value2+'">\
  	                                      </div>\
  	                                  </div>\
  	                              </div>'; 
  	                              indexid++;

  	                              
  	                  }
  	                div1 +='</div></div>\
  	                	</span>';
  	                  count++;
  	                 
  	                  $(div1).insertAfter("#autofeaturedivtext12");
                	 
                	 }
	                 else if(mainkey == "RandomForestRegressor")
                	 {
                	  var div1='';
  	                div1 +='<span class="ml-2 cb-cursor"  >\
  	                	<i class="fa fa-plus-circle" id="autoTab'+count+'" onclick="openTab('+count+')"></i>\
  	                	<div class="expert-modal" id="openTab_'+count+'" style="display:none">\
  	                	<div class="expert-modal-arrow"></div>\
  	                	<div id="auto_featurediv'+count+'" class="autofeaturelength1"><span class="buttonclose" ><i class="os-icon os-icon-x"></i></span>';
  	                for(key in value1)
  	                  {
  	                      var key2 = key;
  	                      var value2 = value1[key];

  	                      
  	                      
  	                      // console.log("key2  ::: "+key2);
  	                      // console.log("value2 ::: ",value2);
  	                      div1 +='<div class="cb-range-form-div">\
  	                                  <div class="cb-range-Label">\
  	                                      <span class="label"><div class="cb-range-text" id="keyid'+indexid+'">'+key2+'</div></span> \
  	                                  </div>\
  	                                  <div>\
  	                                      <div class="cb-input-css">\
  	                                          <input type="text" class="form-control" id="valueid'+indexid+'" name="valueid'+indexid+'" value="'+value2+'">\
  	                                      </div>\
  	                                  </div>\
  	                              </div>'; 
  	                              indexid++;

  	                              
  	                  }
  	                div1 +='</div></div>\
  	                	</span>';
  	                  count++;
  	                
  	                  $(div1).insertAfter("#autofeaturedivtext13");
                	 
                	 }
	                 else if(mainkey == "XGBRegressor")
                	 {
                	  var div1='';
  	                div1 +='<span class="ml-2 cb-cursor"  >\
  	                	<i class="fa fa-plus-circle" id="autoTab'+count+'" onclick="openTab('+count+')"></i>\
  	                	<div class="expert-modal" id="openTab_'+count+'" style="display:none">\
  	                	<div class="expert-modal-arrow"></div>\
  	                	<div id="auto_featurediv'+count+'" class="autofeaturelength1"><span class="buttonclose" ><i class="os-icon os-icon-x"></i></span>';
  	                for(key in value1)
  	                  {
  	                      var key2 = key;
  	                      var value2 = value1[key];

  	                      
  	                      
  	                      // console.log("key2  ::: "+key2);
  	                      // console.log("value2 ::: ",value2);
  	                      div1 +='<div class="cb-range-form-div">\
  	                                  <div class="cb-range-Label">\
  	                                      <span class="label"><div class="cb-range-text" id="keyid'+indexid+'">'+key2+'</div></span> \
  	                                  </div>\
  	                                  <div>\
  	                                      <div class="cb-input-css">\
  	                                          <input type="text" class="form-control" id="valueid'+indexid+'" name="valueid'+indexid+'" value="'+value2+'">\
  	                                      </div>\
  	                                  </div>\
  	                              </div>'; 
  	                              indexid++;

  	                              
  	                  }
  	                div1 +='</div></div>\
  	                	</span>';
  	                  count++;
  	                 
  	                  $(div1).insertAfter("#autofeaturedivtext16");
                	 
                	 }
	                 
	                 
	                 
	                 maincount++;
	                  
	            }

	            count_label++;
	            }
	            console.log(labeldivbind);
	            $("#labeldivbind3").html(labeldivbind);
	            $("#labeldivbind4").html(labeldivbind1);
	            
	}








function save_button_new()
{
	
	 let tab1_in = new Map();
	 let tab1 = new Map();
	 let tab1_main = new Map();
	
	var length1=$("#navlength > li").length;
	 
//	if($("#expertTab1").hasClass('active'))
//		{
		
		 $('#rowlength1 > .rowcount > .rowlength').each(function()
				 {
			 
			 const listItems = $(this).children().children().children().children().children()[1];
			 
			 const listItems_id = $(this).children().children().children().children().children().eq(0).attr('id');
//			 console.log("listItems_id::::::"+listItems_id);
			 
//			 console.log("listItems::::::"+listItems);
			 if(listItems != undefined)
				 {
				 tab1 = new Map();
				 $("#"+listItems_id+" + .ml-2.cb-cursor > .expert-modal > .autofeaturelength > .cb-range-form-div").each(function()
				 {
			
					 var key = $(this).children().children().children().attr('id');

//					 console.log("key :: "+key);
					 var keyval = $(this).children().eq(1).children().children().attr('value');
//					 console.log("keyval :: "+keyval);
					 //alert("hi")
					 
					 var key1 = $("#"+key).text();
					// var value1 = $("#"+keyval).val();
					 tab1.set(key1 ,keyval);
					 
				 });
				 var val_id = $("#"+listItems_id).text();
				 tab1_in.set(val_id ,tab1);

				 }
			 
				 });
		 console.log("tab1_in :::",tab1_in);
		 console.log("tab1_in :::"+tab1_in.size);
		 
		 tab1_main.set("1",tab1_in);
		 
		 console.log("tab1_main :::",tab1_main);
		 
//		}
	
	
	let tab1_in2 = new Map();
	 let tab12 = new Map();
	
//	if($("#expertTab2").hasClass('active'))
//	{
	
	 $('#rowlength2 > .rowcount > .rowlength').each(function()
			 {
		 
		 const listItems = $(this).children().children().children().children().children()[1];
		 
		 const listItems_id = $(this).children().children().children().children().children().eq(0).attr('id');
//		 console.log("listItems_id::::::"+listItems_id);
		 
//		 console.log("listItems::::::"+listItems);
		 if(listItems != undefined)
			 {
			 tab1 = new Map();
			 $("#"+listItems_id+" + .ml-2.cb-cursor > .expert-modal > .autofeaturelength1 > .cb-range-form-div").each(function()
			 {
		
				 var key = $(this).children().children().children().attr('id');

//				 console.log("key :: "+key);
				 var keyval = $(this).children().eq(1).children().children().attr('value');
//				 console.log("keyval :: "+keyval);
				 //alert("hi")
				 
				 var key1 = $("#"+key).text();
				// var value1 = $("#"+keyval).val();
				 tab12.set(key1 ,keyval);
				 
			 });
			 var val_id = $("#"+listItems_id).text();
			 tab1_in2.set(val_id ,tab12);
			 }
		 
			 });
	 console.log("tab1_in2  :: ",tab1_in2);
//	}
	
	let tab1_in3 = new Map();
	 let tab13 = new Map();
	
//	if($("#expertTab3").hasClass('active'))
//	{
		$('#labeldivbind3  > .rowlength3').each(function()
				 {
			
			const listItemss = $(this).children().children().eq(0).children().children().children().attr('id');
//			console.log("listItemss:::"+listItemss);
			
			var listItemss_text = $("#"+listItemss).text();
			
//			console.log("listItemss_text::"+listItemss_text);
			
			const listItemss_id = $(this).children().children().eq(1).children().attr('name');
			
//			console.log("listItemss:::"+listItemss_id);
			var checkvariable = $('input[name='+listItemss_id+']:checked');
			
//			console.log("checkvariable::"+checkvariable.attr('value'));
			
//			var checkvariable_value=$("#"+checkvariable).val();			
//			console.log("checkvariable_value::"+checkvariable_value);
			tab13.set(listItemss_text ,checkvariable.attr('value'));
			
				 });
	
		console.log("tab13::",tab13);
//	}
	
	let tab1_in4 = new Map();
	 let tab14 = new Map();
	
//	if($("#expertTab4").hasClass('active'))
//	{
		$('#labeldivbind4  > .rowlength4').each(function()
				 {
			
			const listItemss = $(this).children().children().eq(0).children().children().children().attr('id');
//			console.log("listItemss:::"+listItemss);
			
			var listItemss_text = $("#"+listItemss).text();
			
//			console.log("listItemss_text::"+listItemss_text);
			
			const listItemss_id = $(this).children().children().eq(1).children().attr('name');
			
			var listItemss_idvalue="";
			
			if(listItemss_id === undefined){
				const listItemss_id = $(this).children().children().eq(1).children().attr('id');
				listItemss_idvalue = $("#"+listItemss_id).val();
//				console.log("listItemss_idvalue::"+listItemss_idvalue);
				tab14.set(listItemss_text ,listItemss_idvalue);
			}
			else{
				var checkvariable = $('input[name='+listItemss_id+']:checked');
				
//				console.log("checkvariable::"+checkvariable.attr('value'));
				tab14.set(listItemss_text ,checkvariable.attr('value'));
			}

	});

console.log("tab14::",tab14);


//}
	

//	for(var key in tab1_main)
//		{
//		var key1 = key;
//		var value = tab1_main[key1];
//		
//		console.log(key1);
//		console.log(value);
//		
//			for(key in value)
//			{
//			var key2 = key;
//			var value1 = value[key2];
//			
//			console.log(key2);
//			console.log(value1);
//			
//				for(key in value1)
//				{
//				var key3 = key;
//				var value3 = value1[key3];
//				
//				console.log(key3);
//				console.log(value3);
//				
//				
//				}
//			}
//			
//		
//		
//		}


//	for(var m =1;m<=tab1_in.size ; m++)
//		{
//		var key = tab1_in[m];
//		var val = tab1_in[key];
//		
//		console.log(key);
//		console.log(val);
//		
//		
//		}

var arr = [];
var main =[];

var main_ALL =[];

var string_arr ="";


	tab1_in.forEach(function(value, key1) {
		console.log(key1 + " = " , value);
		arr =[];
		string_arr ="";
		
		var size = value.size;
		var count = 1;
		
		
		value.forEach(function(value, key) {
			console.log(key + " = " + value);
			console.log("size = " + value.size);
			
			
				if(count == size)
				{
					
					if ( typeof value == 'number' ) 
					{
						   
					string_arr += '"'+ key +'"' + " : [" +value +"] "; 
						
					}
					else
					{
					if(value.includes(","))
					{
					
					var val_value = value.split(",");
					console.log("val_value :::"+val_value);
					console.log("val_value :::"+val_value.length);
					var arr_val= "";
					for(var s = 0;s<val_value.length ; s++)
						{
						if(s == val_value.length-1)
						{
						arr_val += '"' + val_value[s] +'"';
						}
						else
							{
							arr_val += '"' + val_value[s] +'",';
							}
						
						
						}
					
					
					string_arr += '"'+ key +'"' + " : [" +arr_val +"] "; 
					}
					else
					{
					string_arr += '"'+ key +'"' + " : [" +value +"] "; 
					}
					
					
					}
		
				
				}
			else
				{
				if ( typeof value == 'number' ) {
					   
					string_arr += '"'+ key +'"' + " : [" +value +"], "; 
					}
				else
					{
					if(value.includes(","))
					{
					
					var val_value = value.split(",");
					console.log("val_value :::"+val_value);
					console.log("val_value :::"+val_value.length);
					var arr_val= "";
					for(var s = 0;s<val_value.length ; s++)
						{
						if(s == val_value.length-1)
							{
							arr_val += '"' + val_value[s] +'"';
							}
						else
							{
							
							arr_val += '"' + val_value[s] +'",';
							}
						
						
						}
					
					
					string_arr += '"'+ key +'"' + " : [" +arr_val +"], "; 
					}
					else
					{
					string_arr += '"'+ key +'"' + " : [" +value +"], "; 
					}
					
					
					}
					

				
				}
			
				
				
				
			
			
			count++;
		});
	
		
		arr.push({
			[key1] : "{"+string_arr+"}"
		});
		
		console.log(" arr = " , arr);
		main.push(arr);
	});

	console.log(" main = " , main);
	
	
	
	var arr1 = [];
	var main1 =[];

	var string_arr1 ="";


	tab1_in2.forEach(function(value, key1) {
			console.log(key1 + " = " , value);
			
			console.log(key1 + " = size::::::::::::::::::::::::::::::::::; " , value.size);
			var size = value.size;
			var count =1;
			arr1 =[];
			string_arr1 ="";
			value.forEach(function(value, key) {
				console.log(key + " = " + value);
				console.log("size = " + value.size);
				
				
					if(count == size)
					{
						
						if ( typeof value == 'number' ) 
						{
							   
							string_arr1 += '"'+ key +'"' + " : [" +value +"] "; 
							
						}
						else
						{
						if(value.includes(","))
						{
						
						var val_value = value.split(",");
						console.log("val_value :::"+val_value);
						console.log("val_value :::"+val_value.length);
						var arr_val= "";
						for(var s = 0;s<val_value.length ; s++)
							{
							if(s == val_value.length-1)
							{
							arr_val += '"' + val_value[s] +'"';
							}
							else
								{
								arr_val += '"' + val_value[s] +'",';
								}
							
							
							}
						
						
						string_arr1 += '"'+ key +'"' + " : [" +arr_val +"] "; 
						}
						else
						{
							string_arr1 += '"'+ key +'"' + " : [" +value +"] "; 
						}
						
						
						}
			
					
					}
				else
					{
					if ( typeof value == 'number' ) {
						   
						string_arr1 += '"'+ key +'"' + " : [" +value +"], "; 
						}
					else
						{
						if(value.includes(","))
						{
						
						var val_value = value.split(",");
						console.log("val_value :::"+val_value);
						console.log("val_value :::"+val_value.length);
						var arr_val= "";
						for(var s = 0;s<val_value.length ; s++)
							{
							if(s == val_value.length-1)
								{
								arr_val += '"' + val_value[s] +'"';
								}
							else
								{
								
								arr_val += '"' + val_value[s] +'",';
								}
							
							
							}
						
						
						string_arr1 += '"'+ key +'"' + " : [" +arr_val +"], "; 
						}
						else
						{
							string_arr1 += '"'+ key +'"' + " : [" +value +"], "; 
						}
						
						
						}
						

					
					}
				
					
					
					
				
				
				count++;
			});
		
		
			
			arr1.push({
				[key1] : "{"+string_arr1+"}"
			});
			
			console.log(" arr1 = " , arr1);
			main1.push(arr1);
		});

		console.log(" main1 = " , main1);
	
	
		var arr12 = [];
		var main12 =[];

		var string_arr12 ="";

		var count_ =tab13.size;
		var count_int_ = 1;
		tab13.forEach(function(value, key1) {
				console.log(key1 + " = " , value);
				
				if(count_int_ == count_)
				{
				string_arr12 += '"'+ key1 +'"' + " : '" +value +"'  \n"; 
				}
			else
				{
				string_arr12 += '"'+ key1 +'"' + " : '" +value +"' , \n"; 
				}
				
				count_int_++;
				
			});
		main12.push("{" + string_arr12 + "}");
			console.log(" main12 = " , main12);
			
			
			var arr123 = [];
			var main123 =[];

			var string_arr123 ="";


			var count =tab14.size;
			var count_int = 1;
			tab14.forEach(function(value, key1) {
				
					console.log(key1 + " = " , value);
				if(count_int == count)
					{
					
					
					console.log("value :::"+value.length);
					var arr_val= "";
					for(var s = 0;s<value.length ; s++)
						{
						if(s == value.length-1)
						{
						arr_val += '"' + value[s] +'"';
						}
						else
							{
							arr_val += '"' + value[s] +'",';
							}
						
						
						}
					
					string_arr123 += '"'+ key1 +'"' + " : [" +arr_val +"]  \n"; 
					}
				else
					{
					string_arr123 += '"'+ key1 +'"' + " : '" +value +"' , \n"; 
					}
					
					
				count_int++;
				});
			main123.push("{"+ string_arr123 +"}");
				console.log(" main123 = " , main123);
		
				main_ALL.push(main);
				main_ALL.push(main1);
				main_ALL.push(main12);
				main_ALL.push(main123);
				
				
				console.log(" main_ALL :::: = " , main_ALL);
				setTimeout(() => {
					jsondataFunction_1_(main_ALL);
				}, 1000);
				
}


function jsondataFunction_1_(main_ALL){ 

	  //alert("hi")
	    //var json=[{"sklearn.ensemble.ExtraTreesClassifier":{"n_estimators":[100],"criterion":["gini","entropy"],"max_features":[0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.95,1],"min_samples_split":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"min_samples_leaf":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]},"sklearn.ensemble.RandomForestClassifier":{"n_estimators":[100],"criterion":["gini","entropy"],"max_features":[0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.95,1],"min_samples_split":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"min_samples_leaf":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]},"sklearn.ensemble.GradientBoostingClassifier":{"n_estimators":[100],"learning_rate":[0.001,0.01,0.1,0.5,1.0],"max_depth":[1,2,3,4,5,6,7,8,9,10],"min_samples_split":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"min_samples_leaf":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"subsample":[0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.95,1],"max_features":[0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.95,1]},"xgboost.XGBClassifier":{"n_estimators":[100],"max_depth":[1,2,3,4,5,6,7,8,9,10],"learning_rate":[0.001,0.01,0.1,0.5,1.0],"subsample":[0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.95,1],"min_child_weight":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]}},{"sklearn.ensemble.ExtraTreesRegressor":{"n_estimators":[100],"max_features":[0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.95,1],"min_samples_split":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"min_samples_leaf":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]},"sklearn.ensemble.GradientBoostingRegressor":{"n_estimators":[100],"loss":["ls","lad","huber","quantile"],"learning_rate":[0.001,0.01,0.1,0.5,1.0],"max_depth":[1,2,3,4,5,6,7,8,9,10],"min_samples_split":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"min_samples_leaf":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"subsample":[0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.95,1],"max_features":[0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.95,1],"alpha":[0.75,0.8,0.85,0.9,0.95,0.99]},"sklearn.ensemble.AdaBoostRegressor":{"n_estimators":[100],"learning_rate":[0.001,0.01,0.1,0.5,1.0],"loss":["linear","square","exponential"]},"sklearn.tree.DecisionTreeRegressor":{"max_depth":[1,2,3,4,5,6,7,8,9,10],"min_samples_split":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"min_samples_leaf":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]},"sklearn.ensemble.RandomForestRegressor":{"n_estimators":[100],"max_features":[0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.95,1],"min_samples_split":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],"min_samples_leaf":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]},"xgboost.XGBRegressor":{"n_estimators":[100],"max_depth":[1,2,3,4,5,6,7,8,9,10],"learning_rate":[0.001,0.01,0.1,0.5,1.0],"subsample":[0.05,0.1,0.15,0.2,0.25,0.3,0.35,0.4,0.45,0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.9,0.95,1],"min_child_weight":[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]}},{"label_encoding":"on","onehot_encoding":"on","text_embedding":"on","feature_scaling":"on","datetime_features":"on"},{"lag_features":"on","number_of_lags":"6","lag_interactions":"on","seasonality_period":"12" ,"seasonal_columns" : ["seasonal", "trend", "residual"]}];
	    
						// console.log("result ::: ",json);

	         //alert(json.length);
	console.log("main_ALL ::: ",main_ALL);
						var jsondata = main_ALL;
						
						console.log("jsondata ::: ",jsondata);
						
	          
	          var key12 ='';
	          var count =1;
	          var autodiv='';
	          var indexid=1;
	          var maincount=1;
	          var labeldivbind='';
	          var labeldivbind1='';

	          var count_label =1;
	          var labelid=1;
	          
	          for(key in jsondata)
				{
	              
				var key2 = key;
				var value = jsondata[key2];
	            
							
							// console.log("key_  ::: "+key_);
							// console.log("value ::: ",value);
				for(key in value)
					{
					var key3 = key;
					var value1_ = value[key];
					                
					 console.log("key1  ::: "+key1);
					 console.log("value1_ ::: ",value1_);
					  for(key in value1_)
						{
						var key4 = key;
						var value2 = value1_[key];
						                
						console.log("key1  ::: "+key1);
						console.log("value2 ::: ",value2);
					                
					                
	            for(key in value2)
				{
	                var key1 = key;
	                var value1 = value2[key];
	                
	                console.log("key1  ::: "+key1);
	                console.log("value1 ::: ",value1);
	                

	                
	                var auto = "";
	                var on = "";
	                var off = "";
	                
	                if(value1 == "auto")
	                	{
	                	auto = "checked";
	                	}
	                else if(value1 == "on")
	            	{
	            	on = "checked";
	            	}
	                else if(value1 == "off")
	            	{
	            	off = "checked";
	            	}
	                
	                
	                
	                
	                  if(count_label == 3)
	                  {
	                	  
	                	  if(key1 == "label_encoding")
	                  	{
	                  	key1 = "Label Encoding";
	                  	}
	                  else if(key1 == "onehot_encoding")
	                      {
	                  	key1 = "One-hot Encoding";
	                  	}
	                  else if(key1 == "text_embedding")
	  	                {
	  	            	key1 = "Text Embedding";
	  	            	}
	                  else if(key1 == "feature_scaling")
	  	                {
	  	            	key1 = "Feature Scaling";
	  	            	}
	                  else if(key1 == "datetime_features")
	  	                {
	  	            	key1 = "Datetime Features";
	  	            	}
	                  
	                	  
	                	  
	                	  
	                    labeldivbind +='<div class="col-3 rowlength3">\
	                <div class="cb-range-form-div">\
	                  <div class="cb-range-Label">\
	                    <span class="label"><div class="cb-range-text"><span id="autofeaturedivtextlabel'+maincount+'">'+key1+'</span>\
	                    </div></span>\
	                    </div>\
	                    <div class="css-radio">\
	                     <input type="radio" class="css-1kd3qvh" id="auto'+labelid+'" name="auto'+labelid+'" value="auto" '+auto+'>\
	                     <label class="css-iwo4qd" id="labelauto'+labelid+'" for="auto'+labelid+'">Auto</label>\
	                     <input type="radio" class="css-1kd3qvh" id="on'+labelid+'" name="auto'+labelid+'" value="on" '+on+'>\
	                     <label class="css-iwo4qd" id="labelon'+labelid+'" for="on'+labelid+'">On</label>\
	                     <input type="radio"  class="css-1kd3qvh" id="off'+labelid+'" name="auto'+labelid+'" value="Off" '+off+'>\
	                     <label class="css-iwo4qd" id="labeloff'+labelid+'" for="off'+labelid+'">Off</label>\
	                   </div>\
	                 </div>\
	              </div>';
	              labelid++;
	              
	                  }
	                  
	                  
	                  if(count_label == 4)
	                  {
	                	  if(key1 == "lag_features")
	                      {
	                  	key1 = "Lag Features";
	                  	  }
	                      else if(key1 == "number_of_lags")
	                      {
	                  	key1 = "No. of Lags";
	                  	  }
	                      else if(key1 == "lag_interactions")
	                      {
	                  	key1 = "Lag Interactions";
	                  	  }
	                      else if(key1 == "seasonality_period")
	                      {
	                  	key1 = "Seasonality Period";
	                  	  }
	                      else if(key1 == "seasonal_columns")
	                      {
	                  	key1 = "Seasonal Columns";
	                  	  }
	                	  
	                	 
	                	  
	                	  
	                	  
	                	  
	                	  if((key1 == "No. of Lags") || (key1 == "Seasonality Period"))
	                		  {
	                		  if((value1 == "auto") || (value1 == "on") || (value1 == "off") )
	                			  {
	                              labeldivbind1 +='<div class="col-3 rowlength4">\
	                          <div class="cb-range-form-div">\
	                            <div class="cb-range-Label">\
	                              <span class="label"><div class="cb-range-text"><span id="autofeaturedivtextengineer'+maincount+'">'+key1+'</span>\
	                              </div></span>\
	                              </div>\
	                              <div class="css-radio">\
	                               <input type="radio" class="css-1kd3qvh" id="auto'+labelid+'" name="auto'+labelid+'" value="auto" '+auto+'>\
	                               <label class="css-iwo4qd" id="labelauto'+labelid+'" for="auto'+labelid+'">Auto</label>\
	                               <input type="radio" class="css-1kd3qvh" id="on'+labelid+'" name="auto'+labelid+'" value="on" '+on+'>\
	                               <label class="css-iwo4qd" id="labelon'+labelid+'" for="on'+labelid+'">On</label>\
	                               <input type="radio"  class="css-1kd3qvh" id="off'+labelid+'" name="auto'+labelid+'" value="Off" '+off+'>\
	                               <label class="css-iwo4qd" id="labeloff'+labelid+'" for="off'+labelid+'">Off</label>\
	                             </div>\
	                           </div>\
	                        </div>';
	                			  }
	                		  else               	  
	                		  {
	                		  labeldivbind1 +='<div class="col-3 rowlength4">\
	                              <div class="cb-range-form-div">\
	                                <div class="cb-range-Label">\
	                                  <span class="label"><div class="cb-range-text"><span id="autofeaturedivtextengineer'+maincount+'">'+key1+'</span>\
	                                  </div></span>\
	                                  </div>\
	                                  <div class="cb-input-css">\
	                                  <input type="number" class="form-control" id="numbervalue'+labelid+'" value="'+value1+'">\
	                                  </div>\
	                               </div>\
	                            </div>';
	                		  }
	                		  
	                		  
	                		  }               	  
	                	  else if(key1 == "Seasonal Columns")
	                	  {
	                		  var value_arr = value1;
	                		  var option_div = "";
	                		  console.log("value_arr :: "+value_arr);
	                		  for(var r =0; r< value_arr.length ; r++)
	                			  {
	                			  
	                			  var option_list =  value_arr[r];
	                			  console.log("option_list::"+option_list);
	                			  option_div += '<option value="'+option_list+'">'+option_list+'</option>'
	                			  
	                			  
	                			  }
	                		  //alert(labelid);
	                		  
	                		 
	                		  
	                		  console.log("option_div::"+option_div);
	                		  setTimeout(() => {                			                  			  
	                			  $("#selectvalue").append(option_div);
	                			  $("#selectvalue").val(value_arr);
							}, 1000);
	                		  
	                		  
	                		 
	                		  
	                		  
	                		  labeldivbind1 +='<div class="col-3 rowlength4">\
	                              <div class="cb-range-form-div">\
	                                <div class="cb-range-Label">\
	                                  <span class="label"><div class="cb-range-text"><span id="autofeaturedivtextengineer'+maincount+'">'+key1+'</span>\
	                                  </div></span>\
	                                  </div>\
	                                  <div class="cb-input-css">\
	                                  <select class="form-control" id="selectvalue" multiple>\
	                                  </select>\
	                                  </div>\
	                               </div>\
	                            </div>';
	                		  } 
	                	  else
	                		  {
	                		  
	                		  labeldivbind1 +='<div class="col-3 rowlength4">\
	                              <div class="cb-range-form-div">\
	                                <div class="cb-range-Label">\
	                                  <span class="label"><div class="cb-range-text"><span id="autofeaturedivtextengineer'+maincount+'">'+key1+'</span>\
	                                  </div></span>\
	                                  </div>\
	                                  <div class="css-radio">\
	                                   <input type="radio" class="css-1kd3qvh" id="auto'+labelid+'" name="auto'+labelid+'" value="auto" '+auto+'>\
	                                   <label class="css-iwo4qd" id="labelauto'+labelid+'" for="auto'+labelid+'">Auto</label>\
	                                   <input type="radio" class="css-1kd3qvh" id="on'+labelid+'" name="auto'+labelid+'" value="on" '+on+'>\
	                                   <label class="css-iwo4qd" id="labelon'+labelid+'" for="on'+labelid+'">On</label>\
	                                   <input type="radio"  class="css-1kd3qvh" id="off'+labelid+'" name="auto'+labelid+'" value="Off" '+off+'>\
	                                   <label class="css-iwo4qd" id="labeloff'+labelid+'" for="off'+labelid+'">Off</label>\
	                                 </div>\
	                               </div>\
	                            </div>';
	                		  
	                		  }
	                	 
	                	          
	                    
	              labelid++
	              
	                  }
	                
	                  
	                  var value_json = JSON.parse(value1);
	                  
	                  var mainkey= key1;
	                  console.log("mainkey:::"+mainkey);
	                  
	                  if(mainkey == "ExtraTree Model")
	                	 {
	                	  
	                	  //alert("sdiv");
	                	  
	                	  var div1='';
	  	                div1 +='<span class="ml-2 cb-cursor"  >\
	  	                	<i class="fa fa-plus-circle" id="autoTab'+count+'" onclick="openTab('+count+')"></i>\
	  	                	<div class="expert-modal" id="openTab_'+count+'" style="display:none">\
	  	                	<div class="expert-modal-arrow"></div>\
	  	                	<div id="auto_featurediv'+count+'" class="autofeaturelength"><span class="buttonclose" ><i class="os-icon os-icon-x"></i></span>';
	  	                
	  	             
	  	                
	  	                for(key in value_json)
	  	                  {
	  	                      var key2 = key;
	  	                      var value2 = value_json[key];

	  	                      
	  	                      
	  	                       console.log("key2  ::: "+key2);
	  	                       console.log("value2 ::: ",value2);
	  	                      div1 +='<div class="cb-range-form-div">\
	  	                                  <div class="cb-range-Label">\
	  	                                      <span class="label"><div class="cb-range-text" id="keyid'+indexid+'">'+key2+'</div></span> \
	  	                                  </div>\
	  	                                  <div>\
	  	                                      <div class="cb-input-css">\
	  	                                          <input type="text" class="form-control" id="valueid'+indexid+'" name="valueid'+indexid+'" value="'+value2+'">\
	  	                                      </div>\
	  	                                  </div>\
	  	                              </div>'; 
	  	                              indexid++;

	  	                              
	  	                  }
	  	                div1 +='</div></div>\
	  	                	</span>';
	  	                  count++;
	  	                  
	  	             
	  	                  //alert(div1);
	  	                 
	  	                  
	  	                	$(div1).insertAfter("#autofeaturedivtext5");
						
	  	                	$("#autofeaturedivtext5 + .ml-2.cb-cursor").remove();
	                	 
	                	 }
	                 else  if(mainkey == "Randomforest Model")
           	 {
           	  var div1='';
	                div1 +='<span class="ml-2 cb-cursor"  >\
	                	<i class="fa fa-plus-circle" id="autoTab'+count+'" onclick="openTab('+count+')"></i>\
	                	<div class="expert-modal" id="openTab_'+count+'" style="display:none">\
	                	<div class="expert-modal-arrow"></div>\
	                	<div id="auto_featurediv'+count+'" class="autofeaturelength"><span class="buttonclose" ><i class="os-icon os-icon-x"></i></span>';
	                
	                
	                
	                for(key in value_json)
	                  {
	                      var key2 = key;
	                      var value2 = value_json[key];

	                      
	                      
	                       console.log("key2  ::: "+key2);
	                       console.log("value2 ::: ",value2);
	                      div1 +='<div class="cb-range-form-div">\
	                                  <div class="cb-range-Label">\
	                                      <span class="label"><div class="cb-range-text" id="keyid'+indexid+'">'+key2+'</div></span> \
	                                  </div>\
	                                  <div>\
	                                      <div class="cb-input-css">\
	                                          <input type="text" class="form-control" id="valueid'+indexid+'" name="valueid'+indexid+'" value="'+value2+'">\
	                                      </div>\
	                                  </div>\
	                              </div>'; 
	                              indexid++;

	                              
	                  }
	                div1 +='</div></div>\
	                	</span>';
	                  count++;
	                  
	              
	              
	                  
	                  $(div1).insertAfter("#autofeaturedivtext4");
	                  $("#autofeaturedivtext4 + .ml-2.cb-cursor").remove();
	                 
           	 }
	                 else  if(mainkey == "GBM Model")
           	 {
           	  var div1='';
	                div1 +='<span class="ml-2 cb-cursor"  >\
	                	<i class="fa fa-plus-circle" id="autoTab'+count+'" onclick="openTab('+count+')"></i>\
	                	<div class="expert-modal" id="openTab_'+count+'" style="display:none">\
	                	<div class="expert-modal-arrow"></div>\
	                	<div id="auto_featurediv'+count+'" class="autofeaturelength"><span class="buttonclose" ><i class="os-icon os-icon-x"></i></span>';
	                for(key in value_json)
	                  {
	                      var key2 = key;
	                      var value2 = value_json[key];

	                      
	                      
	                       console.log("key2  ::: "+key2);
	                       console.log("value2 ::: ",value2);
	                      div1 +='<div class="cb-range-form-div">\
	                                  <div class="cb-range-Label">\
	                                      <span class="label"><div class="cb-range-text" id="keyid'+indexid+'">'+key2+'</div></span> \
	                                  </div>\
	                                  <div>\
	                                      <div class="cb-input-css">\
	                                          <input type="text" class="form-control" id="valueid'+indexid+'" name="valueid'+indexid+'" value="'+value2+'">\
	                                      </div>\
	                                  </div>\
	                              </div>'; 
	                              indexid++;

	                              
	                  }
	                div1 +='</div></div>\
	                	</span>';
	                  count++;
	                  
	                 
	                  
	                  $(div1).insertAfter("#autofeaturedivtext6");
	                  $("#autofeaturedivtext6 + .ml-2.cb-cursor").remove();
           	 
           	 }
	                 else  if(mainkey == "XGBoost Model")
           	 {
           	  var div1='';
	                div1 +='<span class="ml-2 cb-cursor"  >\
	                	<i class="fa fa-plus-circle" id="autoTab'+count+'" onclick="openTab('+count+')"></i>\
	                	<div class="expert-modal" id="openTab_'+count+'" style="display:none">\
	                	<div class="expert-modal-arrow"></div>\
	                	<div id="auto_featurediv'+count+'" class="autofeaturelength"><span class="buttonclose" ><i class="os-icon os-icon-x"></i></span>';
	                for(key in value_json)
	                  {
	                      var key2 = key;
	                      var value2 = value_json[key];

	                      
	                      
	                       console.log("key2  ::: "+key2);
	                       console.log("value2 ::: ",value2);
	                      div1 +='<div class="cb-range-form-div">\
	                                  <div class="cb-range-Label">\
	                                      <span class="label"><div class="cb-range-text" id="keyid'+indexid+'">'+key2+'</div></span> \
	                                  </div>\
	                                  <div>\
	                                      <div class="cb-input-css">\
	                                          <input type="text" class="form-control" id="valueid'+indexid+'" name="valueid'+indexid+'" value="'+value2+'">\
	                                      </div>\
	                                  </div>\
	                              </div>'; 
	                              indexid++;

	                              
	                  }
	                div1 +='</div></div>\
	                	</span>';
	                  count++;
	                  
	                 
//	                  alert(div1);
	                  $(div1).insertAfter("#autofeaturedivtext7");
	                  $("#autofeaturedivtext7 + .ml-2.cb-cursor").remove();
           	 
           	 }
	                  
	                  if(mainkey == "ExtraTree Regressor")
	               	 {
	               	  var div1='';
	 	                div1 +='<span class="ml-2 cb-cursor"  >\
	 	                	<i class="fa fa-plus-circle" id="autoTab'+count+'" onclick="openTab('+count+')"></i>\
	 	                	<div class="expert-modal" id="openTab_'+count+'" style="display:none">\
	 	                	<div class="expert-modal-arrow"></div>\
	 	                	<div id="auto_featurediv'+count+'" class="autofeaturelength1"><span class="buttonclose" ><i class="os-icon os-icon-x"></i></span>';
	 	                for(key in value_json)
	 	                  {
	 	                      var key2 = key;
	 	                      var value2 = value_json[key];

	 	                      
	 	                      
	 	                       console.log("key2  ::: "+key2);
	 	                       console.log("value2 ::: ",value2);
	 	                      div1 +='<div class="cb-range-form-div">\
	 	                                  <div class="cb-range-Label">\
	 	                                      <span class="label"><div class="cb-range-text" id="keyid'+indexid+'">'+key2+'</div></span> \
	 	                                  </div>\
	 	                                  <div>\
	 	                                      <div class="cb-input-css">\
	 	                                          <input type="text" class="form-control" id="valueid'+indexid+'" name="valueid'+indexid+'" value="'+value2+'">\
	 	                                      </div>\
	 	                                  </div>\
	 	                              </div>'; 
	 	                              indexid++;

	 	                              
	 	                  }
	 	                div1 +='</div></div>\
	 	                	</span>';
	 	                  count++;
	 	                 
	 	                 	 	                  
	 	                  $(div1).insertAfter("#autofeaturedivtext14");
	 	                 $("#autofeaturedivtext14 + .ml-2.cb-cursor").remove();
	               	 
	               	 }
	 	                 else if(mainkey == "GBM Regressor")
	               	 {
	               	  var div1='';
	 	                div1 +='<span class="ml-2 cb-cursor"  >\
	 	                	<i class="fa fa-plus-circle" id="autoTab'+count+'" onclick="openTab('+count+')"></i>\
	 	                	<div class="expert-modal" id="openTab_'+count+'" style="display:none">\
	 	                	<div class="expert-modal-arrow"></div>\
	 	                	<div id="auto_featurediv'+count+'" class="autofeaturelength1"><span class="buttonclose" ><i class="os-icon os-icon-x"></i></span>';
	 	                for(key in value_json)
	 	                  {
	 	                      var key2 = key;
	 	                      var value2 = value_json[key];

	 	                      
	 	                      
	 	                       console.log("key2  ::: "+key2);
	 	                       console.log("value2 ::: ",value2);
	 	                      div1 +='<div class="cb-range-form-div">\
	 	                                  <div class="cb-range-Label">\
	 	                                      <span class="label"><div class="cb-range-text" id="keyid'+indexid+'">'+key2+'</div></span> \
	 	                                  </div>\
	 	                                  <div>\
	 	                                      <div class="cb-input-css">\
	 	                                          <input type="text" class="form-control" id="valueid'+indexid+'" name="valueid'+indexid+'" value="'+value2+'">\
	 	                                      </div>\
	 	                                  </div>\
	 	                              </div>'; 
	 	                              indexid++;

	 	                              
	 	                  }
	 	                div1 +='</div></div>\
	 	                	</span>';
	 	                  count++;
	 	                  
	 	                  
	 	                  $(div1).insertAfter("#autofeaturedivtext15");
	 	                 $("#autofeaturedivtext15 + .ml-2.cb-cursor").remove();
	               	 
	               	 }
	 	                 else if(mainkey == "GBM Regressor")
	               	 {
	               	  var div1='';
	 	                div1 +='<span class="ml-2 cb-cursor"  >\
	 	                	<i class="fa fa-plus-circle" id="autoTab'+count+'" onclick="openTab('+count+')"></i>\
	 	                	<div class="expert-modal" id="openTab_'+count+'" style="display:none">\
	 	                	<div class="expert-modal-arrow"></div>\
	 	                	<div id="auto_featurediv'+count+'" class="autofeaturelength1"><span class="buttonclose" ><i class="os-icon os-icon-x"></i></span>';
	 	                for(key in value_json)
	 	                  {
	 	                      var key2 = key;
	 	                      var value2 = value_json[key];

	 	                      
	 	                      
	 	                       console.log("key2  ::: "+key2);
	 	                       console.log("value2 ::: ",value2);
	 	                      div1 +='<div class="cb-range-form-div">\
	 	                                  <div class="cb-range-Label">\
	 	                                      <span class="label"><div class="cb-range-text" id="keyid'+indexid+'">'+key2+'</div></span> \
	 	                                  </div>\
	 	                                  <div>\
	 	                                      <div class="cb-input-css">\
	 	                                          <input type="text" class="form-control" id="valueid'+indexid+'" name="valueid'+indexid+'" value="'+value2+'">\
	 	                                      </div>\
	 	                                  </div>\
	 	                              </div>'; 
	 	                              indexid++;

	 	                              
	 	                  }
	 	                div1 +='</div></div>\
	 	                	</span>';
	 	                  count++;
	 	                  
	 	                  $(div1).insertAfter("#autofeaturedivtext15");
	 	                 $("#autofeaturedivtext15 + .ml-2.cb-cursor").remove();
	               	 
	               	 }
	 	                 else if(mainkey == "Decision Tree Regressor")
	               	 {
	               	  var div1='';
	 	                div1 +='<span class="ml-2 cb-cursor"  >\
	 	                	<i class="fa fa-plus-circle" id="autoTab'+count+'" onclick="openTab('+count+')"></i>\
	 	                	<div class="expert-modal" id="openTab_'+count+'" style="display:none">\
	 	                	<div class="expert-modal-arrow"></div>\
	 	                	<div id="auto_featurediv'+count+'" class="autofeaturelength1"><span class="buttonclose" ><i class="os-icon os-icon-x"></i></span>';
	 	                for(key in value_json)
	 	                  {
	 	                      var key2 = key;
	 	                      var value2 = value_json[key];

	 	                      
	 	                      
	 	                       console.log("key2  ::: "+key2);
	 	                       console.log("value2 ::: ",value2);
	 	                      div1 +='<div class="cb-range-form-div">\
	 	                                  <div class="cb-range-Label">\
	 	                                      <span class="label"><div class="cb-range-text" id="keyid'+indexid+'">'+key2+'</div></span> \
	 	                                  </div>\
	 	                                  <div>\
	 	                                      <div class="cb-input-css">\
	 	                                          <input type="text" class="form-control" id="valueid'+indexid+'" name="valueid'+indexid+'" value="'+value2+'">\
	 	                                      </div>\
	 	                                  </div>\
	 	                              </div>'; 
	 	                              indexid++;

	 	                              
	 	                  }
	 	                div1 +='</div></div>\
	 	                	</span>';
	 	                  count++;
	 	                 
	 	                  
	 	                  $(div1).insertAfter("#autofeaturedivtext12");
	 	                 $("#autofeaturedivtext12 + .ml-2.cb-cursor").remove();
	               	 
	               	 }
	 	                 else if(mainkey == "Randomforest Regressor")
	               	 {
	               	  var div1='';
	 	                div1 +='<span class="ml-2 cb-cursor"  >\
	 	                	<i class="fa fa-plus-circle" id="autoTab'+count+'" onclick="openTab('+count+')"></i>\
	 	                	<div class="expert-modal" id="openTab_'+count+'" style="display:none">\
	 	                	<div class="expert-modal-arrow"></div>\
	 	                	<div id="auto_featurediv'+count+'" class="autofeaturelength1"><span class="buttonclose" ><i class="os-icon os-icon-x"></i></span>';
	 	                for(key in value_json)
	 	                  {
	 	                      var key2 = key;
	 	                      var value2 = value_json[key];

	 	                      
	 	                      
	 	                       console.log("key2  ::: "+key2);
	 	                       console.log("value2 ::: ",value2);
	 	                      div1 +='<div class="cb-range-form-div">\
	 	                                  <div class="cb-range-Label">\
	 	                                      <span class="label"><div class="cb-range-text" id="keyid'+indexid+'">'+key2+'</div></span> \
	 	                                  </div>\
	 	                                  <div>\
	 	                                      <div class="cb-input-css">\
	 	                                          <input type="text" class="form-control" id="valueid'+indexid+'" name="valueid'+indexid+'" value="'+value2+'">\
	 	                                      </div>\
	 	                                  </div>\
	 	                              </div>'; 
	 	                              indexid++;

	 	                              
	 	                  }
	 	                div1 +='</div></div>\
	 	                	</span>';
	 	                  count++;
	 	                
//	 	                  $("#autofeaturedivtext13").html("");
	 	                 $(div1).insertAfter("#autofeaturedivtext13");
	 	                 $("#autofeaturedivtext13 + .ml-2.cb-cursor").remove();
	               	 
	               	 }
	 	                 else if(mainkey == "XGBoost Regressor")
	               	 {
	               	  var div1='';
	 	                div1 +='<span class="ml-2 cb-cursor"  >\
	 	                	<i class="fa fa-plus-circle" id="autoTab'+count+'" onclick="openTab('+count+')"></i>\
	 	                	<div class="expert-modal" id="openTab_'+count+'" style="display:none">\
	 	                	<div class="expert-modal-arrow"></div>\
	 	                	<div id="auto_featurediv'+count+'" class="autofeaturelength1"><span class="buttonclose" ><i class="os-icon os-icon-x"></i></span>';
	 	                for(key in value_json)
	 	                  {
	 	                      var key2 = key;
	 	                      var value2 = value_json[key];

	 	                      
	 	                      
	 	                       console.log("key2  ::: "+key2);
	 	                       console.log("value2 ::: ",value2);
	 	                      div1 +='<div class="cb-range-form-div">\
	 	                                  <div class="cb-range-Label">\
	 	                                      <span class="label"><div class="cb-range-text" id="keyid'+indexid+'">'+key2+'</div></span> \
	 	                                  </div>\
	 	                                  <div>\
	 	                                      <div class="cb-input-css">\
	 	                                          <input type="text" class="form-control" id="valueid'+indexid+'" name="valueid'+indexid+'" value="'+value2+'">\
	 	                                      </div>\
	 	                                  </div>\
	 	                              </div>'; 
	 	                              indexid++;

	 	                              
	 	                  }
	 	                div1 +='</div></div>\
	 	                	</span>';
	 	                  count++;
	 	                 
	 	                  $(div1).insertAfter("#autofeaturedivtext16");
	 	                 $("#autofeaturedivtext16 + .ml-2.cb-cursor").remove();
	               	 
	               	 }
	                  maincount++;
	                  
//	                var value_json = JSON.parse(value1);
//	                for(key in value_json)
//					{
//		                var key1 = key;
//		                var value_12 = value_json[key];
//		                
//		                console.log("key1  ::: "+key1);
//		                console.log("value_12 ::: ",value_12);
//		               
//					}
	                
	               
				}
	            count_label++;
	            
			}
					 
		}
	}
	          
	          
	          $("#labeldivbind3").html("");
	            $("#labeldivbind4").html("");
	            
	            $("#labeldivbind3").html(labeldivbind);
	            $("#labeldivbind4").html(labeldivbind1);      
	          
	          
	          
//	            
	}





function expertsettingModal()
{
	if($("#chkClass").prop( "checked")==true)
		{
		$("#expertTab1").show();
		$("#expertTab2").hide();
		$("#expertTab3").hide();
		$("#expertTab4").hide();
		$("#model_setting1").show();
		$("#model_setting2").hide();
		$("#model_setting3").hide();
		$("#model_setting4").hide();
	
		}
	else if($("#chkEngineering").prop( "checked")==true)
		{
		$("#expertTab1").hide();
		$("#expertTab2").hide();
		$("#expertTab3").show();
		$("#expertTab3").addClass("active");
		$("#expertTab4").hide();
		$("#model_setting1").hide();
		$("#model_setting2").hide();
		$("#model_setting3").show();
		$("#model_setting4").hide();
	
		}
	else if($("#chkTime").prop( "checked")==true)
		{
		$("#expertTab1").hide();
		$("#expertTab2").hide();
		$("#expertTab3").hide();
		$("#expertTab4").show();
		$("#expertTab3").removeClass("active");
		$("#expertTab4").addClass("active");
		$("#model_setting1").hide();
		$("#model_setting2").hide();
		$("#model_setting3").hide();
		$("#model_setting4").show();
	
		}
	else if($("#chkClass").prop( "checked")==false)
		{
		$("#expertTab1").hide();
		$("#expertTab2").show();
		$("#expertTab3").hide();
		$("#expertTab4").hide();
		$("#model_setting1").hide();
		$("#model_setting2").show();
		$("#model_setting3").hide();
		$("#model_setting4").hide();
	
		}
	
	
//	if(($("#chkClass").prop( "checked")==false) && ($("#chkTime").prop( "checked")==false)
//			&& ($("#chkEngineering").prop( "checked")==false))
//		{
//		alert("else");
//		$("#expertTab1").show();
//		$("#expertTab2").show();
//		$("#expertTab3").show();
//		$("#expertTab4").show();
//		
//	
//		}
	
	

}











function ischeckedfn_(value)
{
//alert("value:::::"+value);
 if(value=="on")
 {
 
   $("#laberegressorlabelauto").css({'cursor' : "pointer"});
   $("#laberegressorlabelon").css({'cursor' : "pointer"});
   $("#laberegressorlabeloff").css({'cursor' : "pointer"});

   $("#glmregressorlabelauto").css({'cursor' : "pointer"});
   $("#glmregressorlabelon").css({'cursor' : "pointer"});
   $("#glmregressorlabeloff").css({'cursor' : "pointer"});

   $("#treeregressorlabelauto").css({'cursor' : "pointer"});
   $("#treeregressorlabelon").css({'cursor' : "pointer"});
   $("#treeregressorlabeloff").css({'cursor' : "pointer"});


   $("#randomregressorlabelauto").css({'cursor' : "pointer"});
   $("#randomregressorlabelon").css({'cursor' : "pointer"});
   $("#randomregressorlabeloff").css({'cursor' : "pointer"});

   $("#extraregressorlabelauto").css({'cursor' : "pointer"});
   $("#extraregressorlabelon").css({'cursor' : "pointer"});
   $("#extraregressorlabeloff").css({'cursor' : "pointer"});

   $("#gbmregressorlabelauto").css({'cursor' : "pointer"});
   $("#gbmregressorlabelon").css({'cursor' : "pointer"});
   $("#gbmregressorlabeloff").css({'cursor' : "pointer"});
 
 
 
   $("#xgbregressorlabelauto").css({'cursor' : "pointer"});
   $("#xgbregressorlabelon").css({'cursor' : "pointer"});
   $("#xgbregressorlabeloff").css({'cursor' : "pointer"});

   $("#strategyregressorlabelauto").css({'cursor' : "pointer"});
   $("#strategyregressorlabelover").css({'cursor' : "pointer"});
   $("#strategyregressorlabelunder").css({'cursor' : "pointer"});

   $("#missingregressorlabelauto").css({'cursor' : "pointer"});
   $("#missingregressorlabelmean").css({'cursor' : "pointer"});
   $("#missingregressorlabelmedian").css({'cursor' : "pointer"});
   $("#missingregressorlabelmode").css({'cursor' : "pointer"});  
   $("#missingregressorlabeloff").css({'cursor' : "pointer"});  

 

   $("#autofutureregressoron").prop('checked',true);
   $("#autofutureregressoron").attr('disabled',false);       
   $("#autofutureregressorauto").prop('checked',true);
   $("#autofutureregressorauto").attr('disabled',false);
   $("#autofutureregressoroff").prop('checked',true);
   $("#autofutureregressoroff").attr('disabled',false);

   $("#glmoregressoron").prop('checked',true);
   $("#glmoregressoron").attr('disabled',false); 
   $("#glmoregressorauto").prop('checked',true);
   $("#glmoregressorauto").attr('disabled',false);     
   $("#glmoregressoroff").prop('checked',true);
   $("#glmoregressoroff").attr('disabled',false);
  

   $("#treeregressoron").prop('checked',true);
   $("#treeregressoron").attr('disabled',false); 
   $("#treeregressorauto").prop('checked',true);
   $("#treeregressorauto").attr('disabled',false);    
   $("#treeregressoroff").prop('checked',true);
   $("#treeregressoroff").attr('disabled',false);
  

   $("#forestregressoron").prop('checked',true); 
   $("#forestregressoron").attr('disabled',false);  
   $("#forestregressorauto").prop('checked',true);
   $("#forestregressorauto").attr('disabled',false);   
   $("#forestregressoroff").prop('checked',true);
   $("#forestregressoroff").attr('disabled',false);
  

   $("#extraregressoron").prop('checked',true);  
   $("#extraregressoron").attr('disabled',false);  
   $("#extraregressorauto").prop('checked',true);
   $("#extraregressorauto").attr('disabled',false);  
   $("#extraregressoroff").prop('checked',true);
   $("#extraregressoroff").attr('disabled',false);
  

   $("#xgboregressoron").prop('checked',true);
   $("#xgboregressoron").attr('disabled',false);   
   $("#xgboregressorauto").prop('checked',true);
   $("#xgboregressorauto").attr('disabled',false);   
   $("#xgboregressoroff").prop('checked',true);
   $("#xgboregressoroff").attr('disabled',false); 
    

   $("#strategyregressorauto").prop('checked',true);
   $("#strategyregressorauto").attr('disabled',false);       
   $("#strategyregressorover").prop('checked',true);
   $("#strategyregressorover").attr('disabled',false);
   $("#strategyregressorunder").prop('checked',true);
   $("#strategyregressorunder").attr('disabled',false);

   $("#missingregressormean").prop('checked',true); 
   $("#missingregressormean").attr('disabled',false);     
   $("#missingregressormedian").prop('checked',true);
   $("#missingregressormedian").attr('disabled',false); 
   $("#missingregressormode").prop('checked',true);
   $("#missingregressormode").attr('disabled',false); 
   $("#missingregressorauto").prop('checked',true);
   $("#missingregressorauto").attr('disabled',false);
   $("#missingregressoroff").prop('checked',true);
   $("#missingregressoroff").attr('disabled',false); 
  
  
  
   $("#gbmregressoron").prop('checked',true); 
   $("#gbmregressoron").attr('disabled',false); 
   $("#gbmregressorauto").prop('checked',true);
   $("#gbmregressorauto").attr('disabled',false);    
   $("#gbmregressoroff").prop('checked',true);
   $("#gbmregressoroff").attr('disabled',false);
     

 }
 else if(value=="auto")
 {
     $("#laberegressorlabelon").css({'cursor' : "not-allowed"});
     $("#laberegressorlabeloff").css({'cursor': "not-allowed"});
     $("#laberegressorlabelauto").css({'cursor': "pointer"});

     $("#glmregressorlabelon").css({'cursor' : "not-allowed"});
     $("#glmregressorlabeloff").css({'cursor': "not-allowed"});
     $("#glmregressorlabelauto").css({'cursor': "pointer"});

     $("#treeregressorlabelon").css({'cursor' : "not-allowed"});
     $("#treeregressorlabeloff").css({'cursor': "not-allowed"});
     $("#treeregressorlabelauto").css({'cursor': "pointer"});

     $("#randomregressorlabelon").css({'cursor' : "not-allowed"});
     $("#randomregressorlabeloff").css({'cursor' : "not-allowed"});
     $("#randomregressorlabelauto").css({'cursor' : "pointer"});

     $("#extraregressorlabelon").css({'cursor' : "not-allowed"});
     $("#extraregressorlabeloff").css({'cursor' : "not-allowed"});
     $("#extraregressorlabelauto").css({'cursor' : "pointer"});

     $("#xgbregressorlabelon").css({'cursor' : "not-allowed"});
     $("#xgbregressorlabeloff").css({'cursor' : "not-allowed"});
     $("#xgbregressorlabelauto").css({'cursor' : "pointer"});


     $("#gbmregressorlabelon").css({'cursor' : "not-allowed"});
     $("#gbmregressorlabeloff").css({'cursor' : "not-allowed"});
     $("#gbmregressorlabelauto").css({'cursor' : "pointer"});

 
 
     $("#strategyregressorlabelauto").css({'cursor' : "pointer"});
     $("#strategyregressorlabelover").css({'cursor' : "not-allowed"});
     $("#strategyregressorlabelunder").css({'cursor' : "not-allowed"});

     $("#missingregressorlabelmean").css({'cursor' : "not-allowed"});
     $("#missingregressorlabelmedian").css({'cursor' : "not-allowed"});
     $("#missingregressorlabelmode").css({'cursor' : "not-allowed"});
     $("#missingregressorlabeloff").css({'cursor' : "not-allowed"});
     $("#missingregressorlabelauto").css({'cursor' : "pointer"});
 
 

     $("#autofutureregressoron").prop('checked',false);
     $("#autofutureregressoron").attr('disabled',true);
     $("#autofutureregressoroff").prop('checked',false);
     $("#autofutureregressoroff").attr('disabled',true);
     $("#autofutureregressorauto").prop('checked',true);
     $("#autofutureregressorauto").attr('disabled',false);

     $("#glmoregressoron").prop('checked',false); 
     $("#glmoregressoron").attr('disabled',true);    
     $("#glmoregressoroff").prop('checked',false);
     $("#glmoregressoroff").attr('disabled',true);
     $("#glmoregressorauto").prop('checked',true);
     $("#glmoregressorauto").attr('disabled',false);
  
     $("#treeregressoron").prop('checked',false);   
     $("#treeregressoron").attr('disabled',true);   
     $("#treeregressoroff").prop('checked',false);
     $("#treeregressoroff").attr('disabled',true);
     $("#treeregressorauto").prop('checked',true);
     $("#treeregressorauto").attr('disabled',false);

     $("#forestregressoron").prop('checked',false);  
     $("#forestregressoron").attr('disabled',true);    
     $("#forestregressoroff").prop('checked',false);
     $("#forestregressoroff").attr('disabled',true);
     $("#forestregressorauto").prop('checked',true);
     $("#forestregressorauto").attr('disabled',false);

     $("#extraregressoron").prop('checked',false);
     $("#extraregressoron").attr('disabled',true);     
     $("#extraregressoroff").prop('checked',false);
     $("#extraregressoroff").attr('disabled',true);
     $("#extraregressorauto").prop('checked',true);
     $("#extraregressorauto").attr('disabled',false);

     $("#xgboregressoron").prop('checked',false);      
     $("#xgboregressoron").attr('disabled',true);
     $("#xgboregressoroff").prop('checked',false);
     $("#xgboregressoroff").attr('disabled',true);
     $("#xgboregressorauto").prop('checked',true);
     $("#xgboregressorauto").attr('disabled',false);

     $("#strategyregressorauto").prop('checked',true);
     $("#strategyregressorauto").attr('disabled',false);     
     $("#strategyregressorover").prop('checked',false);
     $("#strategyregressorover").attr('disabled',true);
     $("#strategyregressorunder").prop('checked',false);
     $("#strategyregressorunder").attr('disabled',true);

     $("#missingregressormean").prop('checked',false); 
     $("#missingregressormean").attr('disabled',true);     
     $("#missingregressormedian").prop('checked',false);
     $("#missingregressormedian").attr('disabled',true);   
     $("#missingregressormode").prop('checked',false);
     $("#missingregressormode").attr('disabled',true); 
     $("#missingregressoroff").prop('checked',false);
     $("#missingregressoroff").attr('disabled',true);
     $("#missingregressorauto").prop('checked',true);
     $("#missingregressorauto").attr('disabled',false);
  
  

   
     $("#gbmregressoron").prop('checked',false);  
     $("#gbmregressoron").attr('disabled',true);     
     $("#gbmregressoroff").prop('checked',false);
     $("#gbmregressoroff").attr('disabled',true); 
     $("#gbmregressorauto").prop('checked',true);
     $("#gbmregressorauto").attr('disabled',false); 
  

 }
}



















 