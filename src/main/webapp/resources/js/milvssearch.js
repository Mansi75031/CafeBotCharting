

		
		
	//---------------------------------------------------------------------------------
		    
			$(document).ready(function() {
				//	var url = new URL(window.location.href);
				//	console.log(para);
				var filter;
				var id=$("#property_name").val();
				
				if ($("#shape_name").val() == "InputShape") {
					filter = "table";
				}
				
				
				getFilterData();
				
			});
			
			   //limit slider start
     var limit = document.getElementById("limit");
     var limit_value = document.getElementById("limit_value");
     
     limit_value.innerHTML = limit.value;
     
     // This function input current value in span and add progress colour in range
     limit.oninput = function() {
     
      // output.innerHTML = this.value;
       document.getElementById("limit_value").value = this.value; 
       var value = (this.value-this.min)/(this.max-this.min)*100;  
       this.style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
    
       
    }
     
     $("#limit_value").keyup(function()
     
         {	
         
         var setval= $("#limit_value").val();
     
       var setvalmax= document.getElementById("limit_value").max;//$("input[max]").attr('max');
       var setvalmin= document.getElementById("limit_value").min;//$("input[min]").attr('min');
       var value = (setval-setvalmin)/(setvalmax-setvalmin)*100;
          if(setval <= 1)
          {
         $("#limit_value").val(1);
              $("#limit").val(1).change();  
          document.getElementById("limit").style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
      
           }
         
         else if(setval >= 100){
           $("#limit_value").val(100);
           $("#limit").val(2).change();
           document.getElementById("limit").style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
      
       }       
         else{
           $("#limit_value").val(setval);
           $("#limit").val(setval).change();
          document.getElementById("limit").style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
      
         }
         
       });
     //limit slider end
	 
	 //threshold slider start
        var threshold = document.getElementById("threshold");
        var threshold_value = document.getElementById("threshold_value");
        
        threshold_value.innerHTML = threshold.value;
        
        // This function input current value in span and add progress colour in range
        threshold.oninput = function() {
        
         // output.innerHTML = this.value;
          document.getElementById("threshold_value").value = this.value; 
          var value = (this.value-this.min)/(this.max-this.min)*100;  
          this.style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
                 
       }
        
        $("#threshold_value").keyup(function()
        
            {	
            
            var setval= $("#threshold_value").val();
        
          var setvalmax= document.getElementById("threshold_value").max;//$("input[max]").attr('max');
          var setvalmin= document.getElementById("threshold_value").min;//$("input[min]").attr('min');
          var value = (setval-setvalmin)/(setvalmax-setvalmin)*100;
             if(setval <= 50)
             {
            $("#threshold_value").val(50);
                 $("#threshold").val(50).change();  
             document.getElementById("threshold").style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
         
              }
           
            
            else if(setval >= 100){
              $("#threshold_value").val(100);
              $("#threshold").val(100).change();
              document.getElementById("threshold").style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
         
          }       
            else{
              $("#threshold_value").val(setval);
              $("#threshold").val(setval).change();
             document.getElementById("threshold").style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
         
            }
            
          });
        //threshold slider end
				
			function getFilterData(){
				var data = {};
				data["fileid"] = $("#property_name").val();
				data["componentid"] = $("#shape_id").val();
				$.ajax({
					type : "GET",
					contentType : "application/json",
					url : "/cafe-bot/menu/filterproperties/readTypeConversion_milvssearch?fileid="+$("#property_name").val()
							+"&componentid="+$("#shape_id").val(),
					dataType : 'json',
					success : function(result) {
						if (result == "") {
								$("#btnDBExecute").notify("Not Saved!","info");
								$("#btnPyExecute").attr("disabled", true);
								
								$("#executeicon").hide();
								getTablename();
							return;
						}
						if (result != null && result.length > 0) {
							
							$("#btnDBExecute").attr("disabled", true);
							$("#btnPyExecute").attr("disabled", false);
							
							var aspect_ratio =0;
							var name="";
							var overwrite_collection=0;
							
							$.each(result, function() {
								  $.each(this, function(k, v) {
									  if(k=="id")
									  {
										  $("#txtFilterID").val(v).change();
									  }
									  else if(k=="modeltype")
									  {
										  //editor.setValue(v);
										  $("#tablename").val(v).change();	 // col name
									  }
									  else if (k == "targetcolid"){
										$("#ddlField").data('kendoDropDownList').value(v);
									  }
									  else if(k=="embedding_model")
									  {		
										  $("#embedding_model").val(v).change();	 
									  }
									  else if(k=="batch_size")
									  {		 
										  $("#batch_size").val(v).change();	 
									  }									  
									  else if(k=="vector_database")
									  {		 
										  $("#vector_database").val(v).change();	 
									  }
									  else if(k=="vector_database_connection")
									  {		 
										  $("#vector_database_connection").val(v).change();	 
									  }
									  else if(k=="name_text")
									  {		 
										  $("#name_text").val(v).change();	 
									  }
									  else if(k=="index_type")
									  {		 
										  $("#index_type").val(v).change();	 
									  }
									  else if(k=="metric_type")
									  {		 
										  $("#metric_type").val(v).change();	 
									  }
									else if(k=="limit")
									   {		
										   console.log("limit::::"+v);
										   limit = v;
									   	$("#limit").val(v).change();
									   	$("#limit_value").val(v).change();
									   	
									   }
									   else if(k=="threshold")
									   {		
										   console.log("threshold::::"+v);
										   threshold = v;
									   	$("#threshold").val(v).change();
									   	$("#threshold_value").val(v).change();
									   	
									   }
									   else if(k=="batches")
									   {		
										   console.log("batches::::"+v);
										   batches = v;
									   	$("#batches").val(v).change();
									   	
									   }
									   else if(k=="expression")
									   {		
										   console.log("expression::::"+v);
										   expression = v;
									   	$("#expression").val(v).change();
									   	
									   }
								/*	  else if(k=="cronexpression")
									  {		
										  v = v.trim();
										  if (v != "")
								            {
											  $("#init").val(v).change();//init
								            }
									  }*/
								
									  //}
							  });
					      });
							
											
							
						}
						else 
						{
							
						}
					}
				});
			 }
			
			function getTablename(){
				var data = {};
				data["fileid"] = $("#property_name").val();
				data["componentid"] = $("#shape_id").val();
				$.ajax({
					type : "GET",
					contentType : "application/json",
					url : "/cafe-bot/menu/filterproperties/getTablename?fileid="+$("#property_name").val()
							+"&componentid="+$("#shape_id").val(),
					dataType : 'text',
				}).success(function(result) {
					console.log("result--"+result);
					if (result != "") 
					{
						$("#tablename").val(result).change();
					}
				}).error(function(data) {
					console.log(data);
				}); 
			 }
			
			


			
			function findGetParameter(parameterName) 
			{
			    var result = null,
			        tmp = [];
			    location.search
			        .substr(1)   
			        .split("&")
			        .forEach(function (item) {
			          tmp = item.split("=");
			          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
			        });
			    return result;
			}



			function Execute(publish) 
		    {		
				//alert("start");
				
				  var pid = getParam("id");
				   if (pid ==0 || pid =="")
				   {
					   $("#btnDBExecute").notify("No Project found!","error");
					   return;
				   }
				   
				
				var isSuccess=0;	
				if( $("#property_name").val()==0){
					$("#btnDBExecute").notify("Not Linked!","info");
					return;
				}
				
				var tablename = $("#tablename").val();
				if (tablename == "")
				{
					$("#btnDBExecute").notify("Please enter table name!","error");
					return;
				}
					
				
				
				var embedding_model =$("#embedding_model").val();
				if (embedding_model == "")
				{
					$("#btnDBExecute").notify("Please enter embedding model!","error");
					return;
				}
				
				var batch_size =$("#batch_size").val();
				if (batch_size == "")
				{
					$("#btnDBExecute").notify("Please enter batch size!","error");
					return;
				}
				var vector_database =$("#vector_database").val();
				if (vector_database == "")
				{
					$("#btnDBExecute").notify("Please enter vector database!","error");
					return;
				}
				
				var vector_database_connection =$("#vector_database_connection").val();
				if (vector_database_connection == "")
				{
					$("#btnDBExecute").notify("Please enter vector database connection!","error");
					return;
				}
				var name_text =$("#name_text").val();
				if (name_text == "")
				{
					$("#btnDBExecute").notify("Please enter name!","error");
					return;
				}
				var limit =$("#limit").val();
				if (limit == "")
				{
					$("#btnDBExecute").notify("Please enter limit value!","error");
					return;
				}
				var threshold =$("#threshold").val();
				if (threshold == "")
				{
					$("#btnDBExecute").notify("Please enter threshold value!","error");
					return;
				}
				var batches =$("#batches").val();
				if (batches == "")
				{
					$("#btnDBExecute").notify("Please enter batches value!","error");
					return;
				}
				
				var expression =$("#expression").val();
				if (expression == "")
				{
					$("#btnDBExecute").notify("Please enter expression value!","error");
					return;
				}
				
				
				if ($("#ddlField").data("kendoDropDownList").text() == "" || $("#ddlField").data("kendoDropDownList").text() =="--select--")
					{
						$("#ddlField").notify("Please select target column!","info");
						return;
					}
					
					
					//console.log("target text",$("#ddlField").data("kendoDropDownList").text());
					///var textcolid = $("#ddlField").data("kendoDropDownList").text()
		
				var ddlFieldweights =$("#ddlFieldweights").val() +"";
				
				
						
					
				NProgress.start();
					$.ajax({
							method : "POST",
							url : "/cafe-bot/api/executeTypeConversion_milvssearch",
							data : {
									fileid :$("#property_name").val(),
									componentid :	$("#shape_id").val(),
									init : $("#init").val(),				
									id: $("#txtFilterID").val(),
									tablename:$("#tablename").val(),
									publish:publish,
									projectid :pid,
									targetcolid=$("#ddlField").data("kendoDropDownList").value(),
									textcolid : textcolid,
									embedding_model :embedding_model,
									batch_size:batch_size,
									vector_database:vector_database,
									vector_database_connection:vector_database_connection,
									name_text:name_text,
									limit:limit,
									threshold:threshold,
									batches:batches,
									expression:expression,
									
								   }
							}).success(function(result) {
								//alert("Success!-"+result);
								//$('#dresult').text(result);
								$("#executeicon").show();
								if (result =="1")
								{
									 $("#btnPyExecute").notify("Already Running!","info");
								}
								else if (result != "0")
								{			
									$("#btnPyExecute").notify("Your data has been queued!","success");	
								}
								else 
								{
									//$("#btnPyExecute").notify("Check Your Expression!","error");
								}
						    }).error(function() {
						  	     $("#btnPyExecute").notify("Error!","error");
							        //alert("error");
						    }); 
					
					NProgress.done(true);
			   	}
			
			function btnFilterClick() 
		       {	
				
				//alert("123");
				  var pid = getParam("id");
				   if (pid ==0 || pid =="")
				   {
					   $("#btnDBExecute").notify("No Project found!","error");
					   return;
				   }
				   
				
				var isSuccess=0;	
				if( $("#property_name").val()==0){
					$("#btnDBExecute").notify("Not Linked!","info");
					return;
				}
				
				var tablename = $("#tablename").val();
				if (tablename == "")
				{
					$("#btnDBExecute").notify("Please enter table name!","error");
					return;
				}
					
				
				var embedding_model =$("#embedding_model").val();
				if (embedding_model == "")
				{
					$("#btnDBExecute").notify("Please enter embedding model!","error");
					return;
				}
				
				var batch_size =$("#batch_size").val();
				if (batch_size == "")
				{
					$("#btnDBExecute").notify("Please enter batch size!","error");
					return;
				}
				var vector_database =$("#vector_database").val();
				if (vector_database == "")
				{
					$("#btnDBExecute").notify("Please enter vector database!","error");
					return;
				}
				
				var vector_database_connection =$("#vector_database_connection").val();
				if (vector_database_connection == "")
				{
					$("#btnDBExecute").notify("Please enter vector database connection!","error");
					return;
				}
				var name_text =$("#name_text").val();
				if (name_text == "")
				{
					$("#btnDBExecute").notify("Please enter name!","error");
					return;
				}
				var limit =$("#limit").val();
				if (limit == "")
				{
					$("#btnDBExecute").notify("Please enter limit value!","error");
					return;
				}
				var threshold =$("#threshold").val();
				if (threshold == "")
				{
					$("#btnDBExecute").notify("Please enter threshold value!","error");
					return;
				}
				var batches =$("#batches").val();
				if (batches == "")
				{
					$("#btnDBExecute").notify("Please enter batches value!","error");
					return;
				}
				
				var expression =$("#expression").val();
				if (expression == "")
				{
					$("#btnDBExecute").notify("Please enter expression value!","error");
					return;
				}
				
				
				if ($("#ddlField").data("kendoDropDownList").text() == "" || $("#ddlField").data("kendoDropDownList").text() =="--select--")
					{
						$("#ddlField").notify("Please select target column!","info");
						return;
					}
					
					console.log("target text",$("#ddlField").data("kendoDropDownList").text());
					var textcolid = $("#ddlField").data("kendoDropDownList").text();
		
			
		
				NProgress.start();
				
					$.ajax({
							method : "POST",
							url : "/cafe-bot/menu/filterproperties/updateTypeConversion_milvssearch",
							data : {
									fileid :	$("#property_name").val(),
									componentid :	$("#shape_id").val(),
									modeltype : $("#tablename").val(),
									id: $("#txtFilterID").val(),
									prevcomponentid: $("#prevcomponentid").val(),
									projectid :pid,
									targetcolid=$("#ddlField").data("kendoDropDownList").value(),
									textcolid : textcolid,
									embedding_model :embedding_model,
									batch_size:batch_size,
									vector_database:vector_database,
									vector_database_connection:vector_database_connection,
									name_text:name_text,
									limit:limit,
									threshold:threshold,
									batches:batches,
									expression:expression,
								
								   }
							}).success(function(result) {
								//alert("Success!-"+result);
								NProgress.done(true);
								$("#btnPyExecute").attr("disabled", false);
								if (result != "0")
								{
									$("#btnDBExecute").notify("Success!","success");
									$("#btnDBExecute").attr("disabled", true);
									//$("#btnDBExecute").attr("disabled", true);
									//SetJson();
								}
								else 
								{
									$("#btnDBExecute").notify("Something went wrong,please try again!","error");
								}
								
								setJsonafterSave();
								getFilterData();
								
						    }).error(function() {
						    	NProgress.done(true);
						  	     $("#btnDBExecute").notify("Error!","error");
							        //alert("error");
						    }); 
			   	}
			
			function checkClusterStatus()
			 {
				// alert("call");
				 console.log("id--"+$("#txtFilterID").val());
				//alert($("#shape_name").val());
				 NProgress.start();
					
					$.ajax({
							method : "POST",
							url : "/cafe-bot/menu/filterproperties/checkPyCodeStatus",  //checkPyCodeStatus  //checkPyStatus
							data : {
									fileid :	$("#property_name").val(),
									componentid :	$("#shape_id").val(),
									id: $("#txtFilterID").val()
								   }
							}).success(function(result) {
								console.log("result-"+result);
								NProgress.done(true);
								var resultarr = result.split("#_#");
								result = resultarr[0];
								var err = resultarr[1];
								
								if (result == "5" || result == "99")
								{
									$("#executeicon").notify("Not Saved!","info");
								}
								else if (result == "0"){$("#executeicon").notify(err+"!","info");}
								else if (result == "1"){$("#executeicon").notify(err+"!","info");}
								//else if (result == "2"){$("#executeicon").notify("Execution completed!","success");}
								else if (result == "2"){$("#executeicon").notify(err+"!","success");}
								else if (result == "3"){$("#executeicon").notify(err+"!","success");}
								
								else if (result == "-1"){$("#executeicon").notify(err+"!","error");}
								//else if (result == "-2"){$("#executeicon").notify("Execution Failed!","error");}
								else if (result == "-2"){$("#executeicon").notify(err+"!","error");}
								else if (result == "-3"){$("#executeicon").notify(err+"!","error");}
												   else {$("#executeicon").notify(err+"!","error");}
								
						    }).error(function() {
						    	NProgress.done(true);
						  	     $("#btnDBExecute").notify("Error!","error");
							        //alert("error");
						    }); 
			 }		
			
		
				$("#kmin").on('blur', function(e) {
					   
					if($(this).val() > 24)
					    {
						      $(this).val('24');
						      return false;
						}
					   else if($(this).val() < 2)
					    {
						      $(this).val('2');
						      return false;
						}

					  });
					
					$("#kmax").on('blur', function(e) {
					  
						 if($(this).val() > 25)
					    {
					      $(this).val('25');
					      return false;
					    }
					    else  if($(this).val() < 2)
					    {
						      $(this).val('2');
						      return false;
						    }

					  });
			 
					 function getParam(param){
						   return new URLSearchParams(window.location.search).get(param);
						 }

					 
			 

			   function ExecuteChart()
			   {
				   
			 	   $('#bottom-pane').html("");
					$('#bottom-pane').html("<i id='maxiwindowb' class='os-icon os-icon-external-link' style='position: absolute;z-index:999;font-size:20;color:#eee;top: 10px;right:10px;' onclick='togglescreen(1);'></i><i id='miniwindowb' class='os-icon os-icon-minimize-2' style='position: absolute;z-index:999;font-size:20;color:#eee;top: 10px;right:10px;display:none' onclick='togglescreen(2);'></i><br><br><div id='bottom-panechild'></div><br><div id='bottom-panechild_bar'></div>");
					
								 $.ajax({
										method : "POST",
										url : "/cafe-bot/upload/async/getClusterpath",
										data : {
											txtFilterID :$("#txtFilterID").val()
										}
									}).success(function(result) {
										NProgress.done(true);
										if (result =="")
										{
											console.log("result 1 --- "+result);
											//setTimeout(function(){ loaddiv(); }, 1000);
											//$("#chartsout").html("There is no EDA or Wait for Some time!");
											  $("#btnPyExecuteChart").notify("There is no Chart or Wait for Some time!","info");
											//alert("There is no EDA or Wait for Some time!");
										}
										//alert("result--"+result);
										else 
										{
											setTimeout(function(){ loaddiv(result); }, 1000);
											
											$("#btnPyExecuteChart").notify("Chart Generated!","success");
											$("#chartsout").html(result);
										}
										//$("#btnEDA").notify("Success!","success");
										//isSuccess=1;
										//SetJson();
							}).error(function() {
								NProgress.done(true);
								$("#btnPyExecuteChart").notify("Error!","error");
								//alert("error");
							});  
				  
				  
				  
				  
				  
			   }	
			
			   
			   function loaddiv(result)
				{
				   console.log("result--"+result);
					var splitter = $("#vertical").data("kendoSplitter");
					
					$('#maxiwindowb').css('display','none'); 
					
					splitter.ajaxRequest("#bottom-panechild", "/cafe-bot/resources/bots/"+result+"/cluster_bubble.html");   
			    	splitter.ajaxRequest("#bottom-panechild_bar", "/cafe-bot/resources/bots/"+result+"/cluster_pop.html");   
			    	    
			    	$('#bottom-pane').toggleClass('fullscreen');
			    	 
					$('#miniwindowb').css('display','inline');  
						
						NProgress.done(true);
				}
				 
			   function loaddiv2()
			   {
				   var path = "PT70250134S";
				   console.log("path----"+path);
				
				   $.ajax({
										method : "POST",
										url : "/cafe-bot/upload/async/getClusterFile",
										data : {
											path :	path
										}
									}).success(function(data) {
										NProgress.done(true);
										
										if (data =="")
										{
											$("#bottom-panechild").html("No Data Found !");   
									    	$("#bottom-panechild_bar").html("");    
									    	  $('#maxiwindowb').css('display','none');  
											    $('#miniwindowb').css('display','inline');  
												$('#bottom-pane').toggleClass('fullscreen');
												NProgress.done(true);
										}
										//alert("result--"+result);
										else 
										{
										 var str = data.split("vvWYrMRehxN");
											//console.log("str[0]-----"+str[0]);
											//console.log("str[1]-----"+str[1]);
											
									    	$("#bottom-panechild").html(str[0]);   
									    	//$("#bottom-panechild_bar").html(str[1]);   
									    	    $('#maxiwindowb').css('display','none');  
											    $('#miniwindowb').css('display','inline');  
												$('#bottom-pane').toggleClass('fullscreen');
												NProgress.done(true);
										}   
									
							}).error(function() {
								NProgress.done(true);
								$.notify("Error!","error");
								//alert("error");
							});  
				   } 
			   
			   
			   
				
						
		function selectAll(isChecked) {
	  
	  console.log("start");
	  var checkBox = document.getElementById("selectAll");
	  console.log("checkbox",checkBox);
	  if(isChecked)
	  {
		  console.log("1");
  	    var multiselect = $("#ddlField").data("kendoMultiSelect");
  	    //console.log("multiselect---",multiselect);
  	    //console.log("length---"+ multiselect.dataSource.data().length);
  	    var selectedValues = [];
  	    for (var i = 0; i < multiselect.dataSource.data().length; i++) 
  	    {
  	    	//console.log(multiselect.dataSource.data()[i])
  	        var item = multiselect.dataSource.data()[i];
  	    	//console.log(item.columnname);
  	        selectedValues.push(item.calvalue);
  	    }
  	    //alert("selectedValues---"+selectedValues);
  	    multiselect.value(selectedValues);
  	    multiselect.close();
  	   multiselect.value(selectedValues);
  	    multiselect.trigger("change");
  	    
     } 
	  else 
	  {
		  var field = $("#ddlField").data("kendoMultiSelect");
		  //field.refresh();
		  field.value([]);
		  //field.close();
		  field.trigger("change");
	  }

}



function clearAll(e)
{
	  var totalItems = this.dataSource.data().length;
  var selected = this.value().length;
  //alert("selected--"+selected);
  if (totalItems != selected ) 
  {
   //$('#selectAll').prop('checked', false);
      $('input[name="selectAll"]').each(function() {
			this.checked = false;
		});

  }
  else
  {
	  $('input[name="selectAll"]').each(function() {
			this.checked = true;
		});
	  
    //$('#selectAll').prop('checked', true);
  }
	  
}