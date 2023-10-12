	
var ispredictflag = 0;

$(document).ready(function() {
		//	var url = new URL(window.location.href);
		//	console.log(para);
	
	
	   //createDropdown_1();
	
	
	$("#folds").kendoMultiSelect({filter:"contains",placeholder:"--select--"});
	
	$("#test_time_augmentations").kendoMultiSelect({filter:"contains",placeholder:"--select--"});
	
	$("#gpus").kendoMultiSelect({filter:"contains",placeholder:"--select--"});
	 
	$("#image_normalization_").kendoDropDownList({filter:"contains",placeholder:"--select--"});
	
	$("#backbone_").kendoMultiSelect({filter:"contains",placeholder:"--select--"});
	$("#augmentation_strategy_").kendoMultiSelect({filter:"contains",placeholder:"--select--"});
	$("#mix_image_").kendoMultiSelect({filter:"contains",placeholder:"--select--"});
	$("#mix_targetmixup_").kendoMultiSelect({filter:"contains",placeholder:"--select--"});
	$("#mix_concentration_").kendoMultiSelect({filter:"contains",placeholder:"--select--"});
	$("#mix_probabilitymixup_").kendoMultiSelect({filter:"contains",placeholder:"--select--"});
	$("#pool_").kendoMultiSelect({filter:"contains",placeholder:"--select--"});
	$("#pretrained_").kendoMultiSelect({filter:"contains",placeholder:"--select--"});
	$("#architecture_").kendoMultiSelect({filter:"contains",placeholder:"--select--"});
	$("#embedding_size_").kendoMultiSelect({filter:"contains",placeholder:"--select--"});
	$("#dropout_").kendoMultiSelect({filter:"contains",placeholder:"--select--"});
	$("#loss_function_").kendoMultiSelect({filter:"contains",placeholder:"--select--"});
	$("#arcface_margin_").kendoMultiSelect({filter:"contains",placeholder:"--select--"});
	$("#arcface_scale_").kendoMultiSelect({filter:"contains",placeholder:"--select--"});
	$("#optimizer_").kendoMultiSelect({filter:"contains",placeholder:"--select--"});
	$("#learning_rate_").kendoMultiSelect({filter:"contains",placeholder:"--select--"});
	$("#batch_size_").kendoMultiSelect({filter:"contains",placeholder:"--select--"});
	$("#epochs_").kendoMultiSelect({filter:"contains",placeholder:"--select--"});
	$("#schedule_").kendoMultiSelect({filter:"contains",placeholder:"--select--"});
	$("#weight_decay_").kendoMultiSelect({filter:"contains",placeholder:"--select--"});
	
	
		$("#dataicon").hide();
		$("#help").css("right","37px");
	
		$("#fileFlowId").hide();
	   	$('#isworkflow').change(function() 
	   			{
	   				   if($("#isworkflow").prop('checked') == true)
	   				   {
	   					   $("#fileFlowId").show();
	   						}
	   						else 
	   						{
	   							$("#fileFlowId").hide();
	   						}
	   			});	
	   			
	   			$('#isschedule').change(function() 
	   					{
	   						   if($("#isschedule").prop('checked') == true)
	   						   {
	   							   $("#btnSchedule").show();
	   							}
	   							else 
	   								{
	   									$("#btnSchedule").hide();
	   									updateIsShceduled(0);    //0 ==isschedule false
	   								}
	   					});	
	   	 
	   	 
	   	 
	   	 
		
		var filter;
		var id = $("#property_name").val();

		if ($("#shape_name").val() == "InputShape") {
			filter = "table";
		}

		getFilterData();
		 $('#cron-selector').cronBuilder({
			 /*                    selectorLabel: "Select time period:  ", */
			                    onChange: function(expression) {
			                        $('#jobtime').val(expression);
			                    }
			                });
			 		 
			 		 $('input[name="dtrange"]').daterangepicker({
			 			    opens: 'right',
			 			    drops: 'up'
			 		  });
			 		 
			 		 
			 		 
			 		 
			 		 
			 		
			 		//data sample slider
			 		var data_sample = document.getElementById("data_sample");
			 		var data_sample_value = document.getElementById("data_sample_value");
			 		data_sample_value.innerHTML = data_sample.value;

			 		data_sample.oninput = function() {
			 		  data_sample_value.innerHTML = this.value;
			 		}


			 		//image height slider
			 		var image_height = document.getElementById("image_height");
			 		var image_height_value = document.getElementById("image_height_value");
			 		image_height_value.innerHTML = image_height.value;

			 		image_height.oninput = function() {
			 		  image_height_value.innerHTML = this.value;
			 		}

			 		//image weight slider
			 		var image_width = document.getElementById("image_width");
			 		var image_width_value = document.getElementById("image_width_value");
			 		image_width_value.innerHTML = image_width.value;

			 		image_width.oninput = function() {
			 		  image_width_value.innerHTML = this.value;
			 		}

			 		//image dropout slider
			 		var dropout = document.getElementById("dropout");
			 		var dropout_value = document.getElementById("dropout_value");
			 		dropout_value.innerHTML = dropout.value;

			 		dropout.oninput = function() {
			 		  dropout_value.innerHTML = this.value;
			 		}



			 		//image batchsize slider
			 		var batch_size = document.getElementById("batch_size");
			 		var batch_size_value = document.getElementById("batch_size_value");
			 		batch_size_value.innerHTML = batch_size.value;

			 		batch_size.oninput = function() {
			 		  batch_size_value.innerHTML = this.value;
			 		}

			 		//image epoch slider
			 		var epochs = document.getElementById("epochs");
			 		var epoch_slider = document.getElementById("epoch_slider");
			 		epoch_slider.innerHTML = epochs.value;

			 		epochs.oninput = function() {
			 		  epoch_slider.innerHTML = this.value;
			 		}

			 		//image evalution slider
			 		var evaluation_epochs = document.getElementById("evaluation_epochs");
			 		var evaluation_epochs_value = document.getElementById("evaluation_epochs_value");
			 		evaluation_epochs_value.innerHTML = evaluation_epochs.value;

			 		evaluation_epochs.oninput = function() {
			 		  evaluation_epochs_value.innerHTML = this.value;
			 		}

			 		//image worker slider
			 		var number_of_workers = document.getElementById("number_of_workers");
			 		var number_of_workers_value = document.getElementById("number_of_workers_value");
			 		number_of_workers_value.innerHTML = number_of_workers.value;

			 		number_of_workers.oninput = function() {
			 		  number_of_workers_value.innerHTML = this.value;
			 		}


			 		//image mixprobability slider
			 		var mix_probabilitymixup = document.getElementById("mix_probabilitymixup");
			 		var mix_probabilitymixup_value = document.getElementById("mix_probabilitymixup_value");
			 		mix_probabilitymixup_value.innerHTML = mix_probabilitymixup.value;

			 		mix_probabilitymixup.oninput = function() {
			 		  mix_probabilitymixup_value.innerHTML = this.value;
			 		}


			 		//image number of image slider
			 		var number_of_image = document.getElementById("number_of_image");
			 		var number_of_image_value = document.getElementById("number_of_image_value");
			 		number_of_image_value.innerHTML = number_of_image.value;

			 		number_of_image.oninput = function() {
			 		  number_of_image_value.innerHTML = this.value;
			 		}

			 		//image probability slider
			 		var probability_threshold = document.getElementById("probability_threshold");
			 		var probability_threshold_value = document.getElementById("probability_threshold_value");
			 		probability_threshold_value.innerHTML = probability_threshold.value;

			 		probability_threshold.oninput = function() {
			 		  probability_threshold_value.innerHTML = this.value;
			 		}

			 	
			 			
			 			var metric_threshold = document.getElementById("metric_threshold");
				 		var metric_threshold_value = document.getElementById("metric_threshold_value");
				 		metric_threshold_value.innerHTML = metric_threshold.value;

				 		metric_threshold.oninput = function() {
				 			//alert("hi");
				 			metric_threshold_value.innerHTML = this.value;
				 		}
					
			 		//metric threshold slider
			 		

			 		//embedding_size slider
			 		var embedding_size = document.getElementById("embedding_size");
			 		var embedding_size_value = document.getElementById("embedding_size_value");
			 		embedding_size_value.innerHTML = metric_threshold.value;

			 		embedding_size.oninput = function() {
			 		  embedding_size_value.innerHTML = this.value;
			 		}

			 		//top_k_similar slider
			 		var top_k_similar = document.getElementById("top_k_similar");
			 		var top_k_similar_value = document.getElementById("top_k_similar_value");
			 		top_k_similar_value.innerHTML = top_k_similar.value;

			 		top_k_similar.oninput = function() {
			 		  top_k_similar_value.innerHTML = this.value;
			 		}

			 		//archface slider
			 		var arcface_margin = document.getElementById("arcface_margin");
			 		var arcface_margin_value = document.getElementById("arcface_margin_value");
			 		arcface_margin_value.innerHTML = arcface_margin.value;

			 		arcface_margin.oninput = function() {
			 		  arcface_margin_value.innerHTML = this.value;
			 		}

			 		var arcface_scale = document.getElementById("arcface_scale");
			 		var arcface_scale_value = document.getElementById("arcface_scale_value");
			 		arcface_scale_value.innerHTML = arcface_scale.value;

			 		arcface_scale.oninput = function() {
			 		  arcface_scale_value.innerHTML = this.value;
			 		}


			 			
			 		//max instance
			 		var max_instances = document.getElementById("max_instances");
			 		var max_instances_value = document.getElementById("max_instances_value");
			 		max_instances_value.innerHTML = max_instances.value;

			 		max_instances.oninput = function() {
			 		  max_instances_value.innerHTML = this.value;
			 		}

	});
	
/*	 $("#ddlModel").change(function() {
		 
		 
		 //CAFE EDA-->Generations, Time(Min), Test Size(%), Matrix
	        if($('option:selected', this).val()=="CAFEBOT"){
	        	
	        	//Generations->set_acc
	        	$('#spanAcc').text('Generations');
	        	$('#txtAccuracy').val(5);
	        	
	        	//Time(Min)->set_time
	        	$('#spanTime').text('Time(Min)');
	        	$('#txtTime').val(100);
	        	
	        	//Test Size(%)->set_inter
	        	$('#spaninter').text('Test Size(%)');
	        	$('#txtInter').val(20);
	        	
	        	//Matrix->
	        	$("#spanMatrix").show();
	        	$("#ddlMatrix").show();
	        	$("#divtextfield").show();	        	
	        	
	        	//target Column->targetcolid
	        	//ddlField
	        	
	        	//Text Column->textcolid
	        	//ddlTextField	        		        	
	        	
	        }
		 //H20 DAI-->
	        else if( $('option:selected', this).val()=="H2O")
	        {	
	        	//Accuracy->set_acc
	        	$('#spanAcc').text('Accuracy');
	        	$('#txtAccuracy').val(5);
	        	
	        	//Time->set_time
	        	$('#spanTime').text('Time');
	        	$('#txtTime').val(1);
	        	
	        	//Interpretebility->set_inter
	        	$('#spaninter').text('Interpretability');
	        	$('#txtInter').val(7);
	        	
	        	//Matrix->matrix
	        	$("#spanMatrix").hide();
	        	$("#ddlMatrix").hide();
	        	$("#divtextfield").hide();
	        	
	        	//target Column-->targetcolid
	        	//ddlField
	        	//ddlTarget

	        	
	        }			
			
	        //set_gen, set_time, test_size	
	    	
	        
	    });*/

	 
	 
	 function toggleLocal(){
			
			if ($('#chkLocal').is(':checked')) {
				$('#ftpserverconfig').hide();
			}
			else{
				$('#ftpserverconfig').show();
			}
		}
		
	 
	 function toggleLocalPredict(){
			
			if ($('#chkLocalPredict').is(':checked')) {
				$('#ftpserverconfigPredict').hide();
			}
			else{
				$('#ftpserverconfigPredict').show();
			}
		}
	 
		
		function toggleAppend(){
			
			if ($('#chkAppend').is(':checked')) {
				$('#fileList').show();
			}
			else{
				$('#fileList').hide();
			}
		}
	 
	 
	function getFilterData() {
		var data = {};
		
		var ispredict = 0;
		
		
		data["fileid"] = $("#property_name").val();
		data["componentid"] = $("#shape_id").val();
		$.ajax({
			type : "GET",
			contentType : "application/json",
			url : "/cafe-bot/menu/filterproperties/cvmodeldataMod?componentid="
					+ $("#shape_id").val(),
			dataType : 'json',
			success : function(result) {
				if (result == "") {
					$("#btnDBExecute").notify("Not Saved!","info");
					$("#executeicon").hide();
					
					getFilterDataPredict();
					
					return;
				}
				if (result != null && result.length > 0) 
				{
					$("#executeicon").show();
					$("#btnDBExecute").prop('disabled', true);
					$.each(result, function() {
						$.each(this, function(k, v) {
							
					    if (k == "id")
							{
								$("#txtFilterID").val(v).change();							
							}
							else if (k=="buildquery")
							{
							    if (v !="")
							    {
									var url = geturl();
									$("#fileFlowId").val(url +"api/runScheduleJob?fileflowid="+v);	
							    } 
						   }
							 else if (k == "issort"){
									if(v==1)
									{
										$("#isschedule").prop( "checked", true );
										 $("#btnSchedule").show();
									}
									else
									{
										$("#isschedule").prop( "checked", false );
										 $("#btnSchedule").hide();
									}
								 }
							 else if (k=="datatype")
								{
									if (v !="")
									{
										$("#jobtime").val(v).change();
										
									}
								}
								else if (k=="formula")
								{
									$("#ddlFieldimage").data('kendoDropDownList').value(v);
								}

								else if (k=="operator")
								{
									$("#ddlFieldlabel").data('kendoDropDownList').value(v);
								}
							
							 else if (k == "isdeployed"){
								if(v==1)
									$("#chkDeploy").prop( "checked", true );
								else
									$("#chkDeploy").prop( "checked", false );
							 }
							
							 else if (k == "isqueue")
							 {
									if(v==2)
										$("#chkQueue").prop( "checked", true );
									else
										$("#chkQueue").prop( "checked", false );
								}
							
							 else if (k == "islocal")
								{
									islocal =v;
									if(v==1)
										$("#chkLocal").prop( "checked", true );
									else
										$("#chkLocal").prop( "checked", false );
								}
								else if (k == "serverid")
								{
									serverid = v;
								}
								 else if (k == "modelname")
								 {
									 $("#txtModel").val(v).change();
								 }
							
							
						});
					});
					
					// $("#ddlModel").data('kendoDropDownList').value(modelid);
					
					if ($("#txtFilterID").val() !='0')
					{
						$("#btnDBExecute").attr("disabled", true);
					}
					
					
					$("#chkLocal").attr("disabled", true);
					$("#chkAppend").attr("disabled", true);
					
					/*if(islocal == 0)
					{
						$("#ftpserverconfig").show();
						$("#ddlFtpServer").val(serverid).change();
					}*/
					
					//if(isappend == 1)
					//{
					//	$("#fileList").show();
					//	$("#ddlDataObject").val(fileid).change();
					//}
					
				/*	if (ispredict ==1)
					{
						var mainVerticalTabStrip = $("#tabStripD").kendoTabStrip().data("kendoTabStrip");
						    mainVerticalTabStrip.select(1);
							getFilterDataPredict();
					}
					else 
					{
						$("#btnDBExecutePredict").prop('disabled', true);
					}*/
					
					
					
				}
			}
		});

	}

	function findGetParameter(parameterName) {
		var result = null, tmp = [];
		location.search.substr(1).split("&").forEach(function(item) {
			tmp = item.split("=");
			if (tmp[0] === parameterName)
				result = decodeURIComponent(tmp[1]);
		});
		return result;
	}

	
	 function getParam(param){
		   return new URLSearchParams(window.location.search).get(param);
		 }
	
	//String fileid, String set_acc, String set_time, String set_inter, String componentid, String colid, String id, String modeltype,
	
	 function btnClick_() 
	{
		

		  var pid = getParam("id");
		   if (pid ==0 || pid =="")
		   {
			   $("#btnPyExecute").notify("No Project found!","error");
			   return;
		   }

		var publish =1;
		var isSuccess=0;
		var ddlImageRepo = 0;// $("#ddlImageRepo").val();
		
		console.log("ddlImageRepo--"+ddlImageRepo);
		
		var txtModel = $("#txtModel").val();
		if (txtModel == "")
		{
			$("#txtModel").notify("Please enter model name!","info");
			return;
		}
		if (txtModel.trim() == "")
		{
			$("#txtModel").notify("Please enter model name!","info");
			return;
		}
		
		if( $("#property_name").val()==0)
		{
			//$("#btnDBExecute").notify("Not Linked!","info");
			//return;
		}
		
		var chkLocal  = 0;
		var ftpserverid  =0;
		

		if ($('#chkLocal').is(':checked')) 
		{
			chkLocal=1;
			ftpserverid = $("#ddlFtpServer").data("kendoDropDownList").value();
		}
		else{
			chkLocal=0;
			ftpserverid = $("#ddlFtpServer").data("kendoDropDownList").value();
			console.log("ftpserverid---"+ftpserverid);
		}
		
		
		
		
		NProgress.start();
		
		$.ajax({
			method : "POST",
			url : "/cafe-bot/api/modelCV",			
			data : {
				fileid : $("#property_name").val(),
				componentid : $("#shape_id").val(),
				id : $("#txtFilterID").val(),
				prevcomponentid : $("#prevcomponentid").val(),
				ddlImageRepo : ddlImageRepo,
				chkLocal : chkLocal,
				ftpserverid : ftpserverid,
				txtModel :txtModel,
				ratio:ratio,
				projectid:pid,
				epochs : epochs,
				ddlbatchsize:ddlbatchsize,
				publish:publish,
				
			}
		}).success(function(result) {
			isSuccess=1;
			NProgress.done(true);
			console.log("result---"+result);
			if (result =="" || result =="0")
			{
				$("#btnDBExecute").notify("Not Saved!","error");
				SetJsonSaved();
				//SetJson();
			}
			else 
			{
				$("#executeicon").show();
				$("#btnDBExecute").notify("Success!","success");
				$("#btnDBExecute").attr("disabled", true);
				//SetJson();
				setJsonafterSave();
				getFilterData();
			}
		
		}).error(function() {
			NProgress.done(true);
			$("#btnDBExecute").notify("Error!","error");
		});
			
	}

	 
	 function Execute(publish) 
		{
			   var pid = getParam("id");
			   if (pid ==0 || pid =="")
			   {
				   $("#btnPyExecute").notify("No Project found!","error");
				   return;
			   }
			
			var isSuccess=0;
			var ddlImageRepo = 0;//$("#ddlImageRepo").val();
			
			console.log("ddlImageRepo--"+ddlImageRepo);
			
			var txtModel = $("#txtModel").val();
			if (txtModel == "")
			{
				$("#txtModel").notify("Please enter model name!","info");
				return;
			}
			if (txtModel.trim() == "")
			{
				$("#txtModel").notify("Please enter model name!","info");
				return;
			}
			
			/*if (ddlImageRepo =="")
			{
				$("#ddlImageRepo").notify("Please select Image Repository!","info");
				return;
			}*/
			
			
			if( $("#property_name").val()==0)
			{
				//$("#btnDBExecute").notify("Not Linked!","info");
				//return;
			}
			
			var chkLocal  = 0;
			var ftpserverid  =0;
			

			if ($('#chkLocal').is(':checked')) 
			{
				chkLocal=1;
				ftpserverid = $("#ddlFtpServer").data("kendoDropDownList").value()
			}
			else{
				chkLocal=0;
				ftpserverid = $("#ddlFtpServer").data("kendoDropDownList").value()
				console.log("ftpserverid---"+ftpserverid);
			}
			
			var ratio = $("#slidervalue").text()
			
			
			var epochs = $("#txtTime").val();
			
			if (epochs =="++" || epochs =="+" || epochs =="-" || epochs =="--"  )
			{
				$("#txtTime").notify("Test size should be an integer value!","info");
				return;
			}
			
			if (parseInt(epochs) < 5 )
			{
				$("#txtTime").notify("Test size should be greater than 5!","info");

				return;
			}
			else if (parseInt(epochs) >1000)
			{
				$("#txtTime").notify("Test size should be less than 1000!","info");
				return;
			}
			
			
			var ddlbatchsize = $("#ddlbatchsize").val(); 
			if (ddlbatchsize =="0" || ddlbatchsize ==undefined || ddlbatchsize =="" || ddlbatchsize ==null)
			{
				$("#ddlbatchsize").notify("Please select batch size!","info");
				return;
			}
			
			
			NProgress.start();
			
			$.ajax({
				method : "POST",
				url : "/cafe-bot/api/modelCV",			
				data : {
					fileid : $("#property_name").val(),
					componentid : $("#shape_id").val(),
					id : $("#txtFilterID").val(),
					prevcomponentid : $("#prevcomponentid").val(),
					ddlImageRepo : ddlImageRepo,
					chkLocal : chkLocal,
					ftpserverid : ftpserverid,
					txtModel :txtModel,
					ratio:ratio,
					projectid:pid,
					epochs : epochs,
					ddlbatchsize:ddlbatchsize,
					
				}
			}).success(function(result) {
				isSuccess=1;
				NProgress.done(true);
				console.log("result---"+result);
				if (result =="" || result =="0")
				{
					$("#btnDBExecute").notify("Not Saved!","error");
					SetJsonSaved();
					//SetJson();
				}
				else 
				{
					$("#executeicon").show();
					$("#btnDBExecute").notify("Success!","success");
					$("#btnDBExecute").attr("disabled", true);
					//SetJson();
					setJsonafterSave();
					getFilterData();
				}
				

			}).error(function() {
				NProgress.done(true);
				$("#btnDBExecute").notify("Error!","error");
			});
				
		}

	
	
	
	function updateIsShceduled(index) 
	{
		if( $("#property_name").val()==0)
		{
			$("#btnDBExecute").notify("Not Linked!","info");
			return;
		}
		
		var dtrange = ""
		var jobtime = "";
	if (index !=0)
	{
		jobtime = $("#jobtime").val();
		if (jobtime == "")
			{
				$("#jobtime").notify("Please select job time!","info");
				//alert("Please enter field!");
				return;
			}		  
		
		dtrange = $("#dtrange").val();
	if (dtrange == "")
		{
			$("#dtrange").notify("Please enter date!","info");
			//alert("Please enter field!");
			return;
		}		  
	
	}
		NProgress.start();
		$.ajax({
			method : "POST",
			url : "/cafe-bot/menu/filterproperties/publishisschedule",
			data : {
					fileid :	$("#property_name").val(),
					componentid :	$("#shape_id").val(),
					id: $("#txtFilterID").val(),
					isschedule: index,
					cronexpression: $("#jobtime").val(),
					dtrange : $("#dtrange").val()
				   }
			}).success(function(result) {
				//alert("Success!-"+result);
				NProgress.done(true);

				if (result=="")
				{
					$("#btnSchedule").notify("Something went wrong,please try again!","info");				
				}
				else 
				{
					$("#btnSchedule").notify("Success!","success");
				}
		    }).error(function() {
		    	NProgress.done(true);
		    	$("#btnSchedule").notify("Error!","error");
			        //alert("error");
		    }); 
		
	}
	
	
	function geturl()
	{
		var urladdress = "";
		var url = window.location.href;
		//console.log("url---"+url);
		var splitUrl = url.split('/');
		for (var j = 0; j < splitUrl.length; j++)
		{
			if (splitUrl[j] !="menu")
			{
				if (splitUrl[j] =="" &&  j == 1)
				{
					urladdress += "//";	
				}
				else 
				{
					if (j==0)
					{
						urladdress += splitUrl[j];
					}
					else 
					{
						urladdress += splitUrl[j]+"/";
					}
					
				}
				//console.log(splitUrl[j]);
			}
			else if (splitUrl[j] =="menu")
			{
				//urladdress += splitUrl[j]+"/";
				break;
			}
		}
		//console.log("url---"+url);
		return urladdress;
	}
	
	 function getParam(param){
		   return new URLSearchParams(window.location.search).get(param);
		 }
	 
	
	function btnClickPredictCV() 
	{
		
		var isSuccess=0;
		if( $("#property_name").val()==0){
			//$("#btnDBExecute").notify("Not Linked!","info");
			//return;
		}
		
		 var pid = getParam("id");
		   if (pid ==0 || pid =="")
		   {
			   $("#btnDBExecute").notify("No Project found!","error");
			   return;
		   }
		
		var chkLchkLocalPredictocal  = 0;
		var ftpserverid  =0;
		var chkappend = 0;
		var appendfileid = 0;
		
		var txtModelPredict = $("#txtModelPredict").val();
		if (txtModelPredict == "")
		{
			$("#txtModelPredict").notify("Please enter model name!","info");
			return;
		}
		
		var ddlImageRepoPredict = 0;//$("#ddlImageRepoPredict").val();
		
		console.log("ddlImageRepoPredict--"+ddlImageRepoPredict);	
		
		/*if (ddlImageRepoPredict =="")
		{
			$("#ddlImageRepoPredict").notify("Please select Image Repository!","info");
			return;
		}*/
		
		
	var modelid = 	$("#ddlModel").data("kendoDropDownList").value()
		console.log("modelid--"+modelid);
	//temp for testing 
	if (modelid =="")
	{
		modelid ="1";
	}
	
	
	var compID =  $("#shape_id").val();
	
	// uncomment on production
	/*if (modelid <1)
	{
		$("#ddlModel").notify("Please select model!","info");
		return;
	}*/
	
		if ($('#chkLocal').is(':checked')) 
		{
			chkLocalPredict=1;
			ftpserverid = $("#ddlFtpServerPredict").data("kendoDropDownList").value()
		}
		else{
			chkLocalPredict=0;
			ftpserverid = $("#ddlFtpServerPredict").data("kendoDropDownList").value()
			console.log("ftpserverid---"+ftpserverid);
		}
		
		if ($('#chkAppend').is(':checked')) 
		{
			chkappend = 1;
			appendfileid = $("#ddlDataObject").data("kendoDropDownList").value()
		}
		else{
			chkappend = 0;
			appendfileid = $("#ddlDataObject").data("kendoDropDownList").value()
			//console.log("fileid---"+fileid);
		}
		
		NProgress.start();
		
		$.ajax({
			method : "POST",
			url : "/cafe-bot/api/modelpredictCV",			
			data : {
				fileid : $("#property_name").val(),
				componentid : $("#shape_id").val(),
				id : $("#txtFilterIDPredict").val(),
				prevcomponentid : $("#prevcomponentid").val(),
				mojofileid : modelid,
				chkLocalPredict : chkLocalPredict,
				ftpserverid : ftpserverid,
				chkappend :chkappend,
				appendfileid : appendfileid,
				txtModelPredict :txtModelPredict,
				ddlImageRepoPredict :ddlImageRepoPredict,
				projectid:pid,
		}
		}).success(function(result) {
			isSuccess=1;
			NProgress.done(true);
			$("#executeiconpredict").show();
			
			
			if (result == "")
			{
				$("#btnDBExecutePredict").notify("Not Saved!","error");
				SetJson();
			}
			else 
			{
				$("#btnDBExecutePredict").notify("Success!","success");
				$("#btnDBExecutePredict").attr("disabled", true);
				 
				//$("#shape_id").val(compID+"_1");
				 
				 
				SetJson();
				getFilterDataPredict();
				
			}

		}).error(function() {
			NProgress.done(true);
			$("#btnDBExecute").notify("Error!","error");
		});
			
	}

	
	function onSelectTab(e)
	{
		console.log("Selected: " + $(e.item).find("> .k-link").text());
		
		var tabV=$(e.item).find("> .k-link").text();
		
		currentSelectedTab=tabV.toUpperCase();
		
		console.log("currentSelectedTab---"+currentSelectedTab);
		
		//alert("currentSelectedTab::::"+currentSelectedTab);
		
		if (currentSelectedTab =="PREDICT")
		{
			getFilterDataPredict();
		}
		else 
		{
			var mainVerticalTabStrip = $("#tabStripD").kendoTabStrip().data("kendoTabStrip");
		    mainVerticalTabStrip.select(0);
			getFilterData();
		}
		
		
		if ( ispredictflag == 0 )
		{
				var mainVerticalTabStrip = $("#tabStripD").kendoTabStrip().data("kendoTabStrip");
				    mainVerticalTabStrip.select(0);
		}
		
		
		
	}
	 
	function getFilterDataPredict() {
		var data = {};
		var ispredict =0;
		data["fileid"] = $("#property_name").val();
		data["componentid"] = $("#shape_id").val();
		$.ajax({
			type : "GET",
			contentType : "application/json",
			url : "/cafe-bot/menu/filterproperties/cvPredictdata?componentid="
					+ $("#shape_id").val(),
			dataType : 'json',
			success : function(result) {
				if (result == "") 
				{
					$("#btnDBExecutePredict").notify("Not Saved!","info");
					$("#executeiconpredict").hide();
					
					//alert("change");
					var mainVerticalTabStrip = $("#tabStripD").kendoTabStrip().data("kendoTabStrip");
				        mainVerticalTabStrip.select(0);
				    
					return;
				}
				if (result != null && result.length > 0) {
					
					$("#btnDBExecutePredict").prop('disabled', true);
					$("#executeiconpredict").show();
					
					
					
					$.each(result, function() {
						$.each(this, function(k, v) {
							// isdeployed, isqueue,
							if (k == "id")
								$("#txtFilterIDPredict").val(v).change();							
							
							else if (k=="buildquery")
								
							{
							    if (v !="")
							    {
									//$("#fileFlowId").val(v);
									var url = geturl();
									//console.log("url **-"+url);
									$("#fileFlowId").val(url +"api/runScheduleJob?fileflowid="+v);	
										
							    } 
							    //$("#fileFlowId").val(v).change();
						    }
							 else if (k == "issort"){
									if(v==1)
									{
										$("#isschedule").prop( "checked", true );
										 $("#btnSchedule").show();
									}
									else
									{
										$("#isschedule").prop( "checked", false );
										 $("#btnSchedule").hide();
									}
								 }
							 else if (k=="datatype")
								{
									if (v !="")
									{
										$("#jobtime").val(v).change();
										
									}
								}
								else if (k=="formula")
								{
									if (v !="")
									{
										$("#dtrange").val(v).change();
									}
								}
							
							//mojofileid
							 else if (k == "targetcolid")
							 {
								modelid= v;
								 $("#ddlModel").data('kendoDropDownList').value(v);
							 }
							 else if (k == "isdeployed"){
								if(v==1)
									$("#chkDeployPredict").prop( "checked", true );
								else
									$("#chkDeployPredict").prop( "checked", false );
							 }
							
							 else if (k == "isqueue"){
									/*if(v==1)
										$("#chkQueue").prop( "checked", true );
									else
										$("#chkQueue").prop( "checked", false );*/
								 }
							 else if (k == "botid")
							 {
								 $("#ddlImageRepoPredict").data('kendoDropDownList').value(v);
							 }
							
							 else if (k == "islocal")
								{
									islocal =v;
									if(v==1)
										$("#chkLocalPredict").prop( "checked", true );
									else
										$("#chkLocalPredict").prop( "checked", false );
								}
								else if (k == "serverid")
								{
									serverid = v;
								}
							
								 else if (k == "isappend")
									{
										isappend =v;
										if(v==1)
											$("#chkAppend").prop( "checked", true );
										else
											$("#chkAppend").prop( "checked", false );
									}
								 else if (k == "componentid")  //apendfileid
									{
									 		fileid = v;
									}
								 else if (k == "modelname"){
									 $("#txtModelPredict").val(v).change();
								 }
								 else if (k =="ispublish") //ispredict
								 {
									 ispredict =v;
									 ispredictflag =v;
								 }
							
						});
					});
					
					 $("#ddlModel").data('kendoDropDownList').value(modelid);
					
					if ($("#txtFilterIDPredict").val() !='0')
					{
						$("#btnDBExecutePredict").attr("disabled", true);
					}
					
					
					$("#chkLocalPredict").attr("disabled", true);
					$("#chkAppend").attr("disabled", true);
					
					if(islocal == 0)
					{
						$("#ftpserverconfigPredict").show();
						$("#ddlFtpServerPredict").val(serverid).change();
					}
					
					if(isappend == 1)
					{
						$("#fileList").show();
						$("#ddlDataObject").val(fileid).change();
					}
					
					if (ispredict ==1)
					{
						var mainVerticalTabStrip = $("#tabStripD").kendoTabStrip().data("kendoTabStrip");
						    mainVerticalTabStrip.select(1);
							//getFilterDataPredict();
						    
								$("#btnDBExecute").prop('disabled', true);
					}
					else 
					{
						var mainVerticalTabStrip = $("#tabStripD").kendoTabStrip().data("kendoTabStrip");
					    mainVerticalTabStrip.select(0);
						
					}
					
				}
			}
		});

	}
	

	 function checkCVStatus()
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
						
						if (result == "99")
						{
							$("#executeicon").notify("Not Saved!","info");
						}
						else if (result == "0"){$("#executeicon").notify(err+"!","info");}
						else if (result == "1"){$("#executeicon").notify(err+"!","info");}
						else if (result == "2"){$("#executeicon").notify(err+"!","success");}
						else if (result == "3"){$("#executeicon").notify(err+"!","info");}
						else if (result == "5"){$("#executeicon").notify(err+"!","info");}
						else if (result == "-1"){$("#executeicon").notify(err+"!","error");}
						else if (result == "-2"){$("#executeicon").notify(err+"!","error");}
						else if (result == "-3"){$("#executeicon").notify(err+"!","error");}
						else {$("#executeicon").notify(err+"!","error");}
						
				    }).error(function() {
				    	NProgress.done(true);
				  	     $("#btnDBExecute").notify("Error!","error");
					        //alert("error");
				    }); 
	 }			
	
	 
	 
		
		$("#txtTime").on('blur', function(e) {
		    if($(this).val() > 1000)
		    {
		      $(this).val('1000');
		      return false;
		    }
		    else if($(this).val() < 5)
		    {
			      $(this).val('5');
			      return false;
			    }

		  });
		
		
		
		
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
		
		
		function checkClusterStatusPredict()
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
								id: $("#txtFilterIDPredict").val()
							   }
						}).success(function(result) {
							
							console.log("result-"+result);
							NProgress.done(true);
							
							var resultarr = result.split("#_#");
							result = resultarr[0];
							var err = resultarr[1];
							
							if (result == "5" || result == "99")
							{
								$("#executeiconpredict").notify("Not Saved!","info");
							}
							else if (result == "0"){$("#executeiconpredict").notify(err+"!","info");}
							else if (result == "1"){$("#executeiconpredict").notify(err+"!","success");}
							//else if (result == "2"){$("#executeicon").notify("Execution completed!","success");}
							else if (result == "2"){$("#executeiconpredict").notify(err+"!","success");}
							else if (result == "3"){$("#executeiconpredict").notify(err+"!","success");}
							
							else if (result == "-1"){$("#executeiconpredict").notify(err+"!","error");}
							//else if (result == "-2"){$("#executeicon").notify("Execution Failed!","error");}
							else if (result == "-2"){$("#executeiconpredict").notify(err+"!","error");}
							else if (result == "-3"){$("#executeiconpredict").notify(err+"!","error");}
											   else {$("#executeiconpredict").notify(err+"!","error");}
							
					    }).error(function() {
					    	NProgress.done(true);
					  	     $("#btnDBExecute").notify("Error!","error");
						        //alert("error");
					    }); 
		 }	
		
		
		var dd1=[{"dd1":"Image Regression","option":"1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29"},
			{"dd1":"Image Classification","option":"1,2,3,4,5,6,7,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30"},
			{"dd1":"Image Object Detection","option":"1,2,3,4,5,6,7,8,9,10,11,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36"},
			{"dd1":"Image Semantic Segmentation","option":"1,2,3,4,5,6,7,8,10,11,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,37,38"},
			{"dd1":"Image Instance Segmentation","option":"1,2,3,4"}
			];


	var dd2=[{"id":"1","dd2":"Grid Search","option":"1","type":"dropdown"},
			{"id":"2","dd2":"Experience Level","option":"2","type":"dropdown"},
			{"id":"3","dd2":"Validation Strategy","option":"3,4,5,6","type":"dropdown"},
			{"id":"4","dd2":"Folds","option":"7,8,9,10,11","type":"dropdown"},
			{"id":"5","dd2":"Data Sample","option":"10-100","type":"slider"},
			{"id":"6","dd2":"Image Height","option":"64-1024","type":"slider"},
			{"id":"7","dd2":"Image Width","option":"64-1025","type":"slider"},
			{"id":"8","dd2":"Image Channel","option":"","type":"input"},
			{"id":"9","dd2":"Image Normalization","option":"15,16,17,18,19,20","type":"dropdown"},
			{"id":"10","dd2":"Augmentation Strategy","option":"21,22,23,24","type":"dropdown"},
			{"id":"11","dd2":"Mix Image","option":"25,26","type":"dropdown"},
			{"id":"12","dd2":"Pool","option":"28,29,30,31,32","type":"dropdown"},
			{"id":"13","dd2":"Dropout","option":"0-1","type":"slider"},
			{"id":"14","dd2":"Loss Function","option":"34,35,36,87,88,89,90,91,92","type":"dropdown"},
			{"id":"15","dd2":"Optimizer","option":"37,38,39,40,41","type":"dropdown"},
			{"id":"16","dd2":"Learning Rate","option":"","type":"input"},
			{"id":"17","dd2":"Batch Size","option":"4-256","type":"slider"},
			{"id":"18","dd2":"Epochs","option":"1-50","type":"slider"},
			{"id":"19","dd2":"Schedule","option":"44,45,46","type":"drodown"},
			{"id":"20","dd2":"Weight Decay","option":"","type":"input"},
			{"id":"21","dd2":"Evaluation Epochs","option":"1-5","type":"slider"},
			{"id":"22","dd2":"Metric","option":"34,35,36,48,49,50,59,60,61,62,63,64,65,66,67,89,93","type":"dropdown"},
			{"id":"23","dd2":"Test Time Augmentations","option":"51,52","type":"dropdown"},
			{"id":"24","dd2":"GPUS","option":"","type":""},
			{"id":"25","dd2":"Mixed Precision Training","option":"","type":"radio"},
			{"id":"26","dd2":"Mixed Precision Inference","option":"","type":"radio"},
			{"id":"27","dd2":"Number of workers","option":"1-16","type":"slider"},
			{"id":"28","dd2":"Seed","option":"","type":""},
			{"id":"29","dd2":"logger","option":"55,56","type":"dropdown"},
			{"id":"30","dd2":"Probability Threshold","option":"0.05-0.95","type":"slider"},
			{"id":"31","dd2":"Metric Lou Threshold","option":"31","type":"slider"},
			{"id":"32","dd2":"Model type","option":"69,70,71","type":"dropdown"},
			{"id":"33","dd2":"X Min Column","option":"72,73,74","type":"dropdown"},
			{"id":"34","dd2":"X Max Column","option":"72,73,74","type":"dropdown"},
			{"id":"35","dd2":"Y Min Column","option":"72,73,74","type":"dropdown"},
			{"id":"36","dd2":"Y Max Column","option":"72,73,74","type":"dropdown"},
			{"id":"37","dd2":"Rle Mask Column","option":"72,73,74","type":"dropdown"},
			{"id":"38","dd2":"Architecture","option":"79,80,81,82,83,84,85,86","type":"dropdown"}

			];

	var dd3=[	{"id":"1","dd3":"No",'option':"","type":""},
		{"id":"2","dd3":"Expert","option":"","type":""},
		{"id":"3","dd3":"k fold cross validation","option":"","type":""},
		{"id":"4","dd3":"Grouped k fold cross validation","option":"","type":""},
		{"id":"5","dd3":"Custom Holdout Validation","option":"","type":""},
		{"id":"6","dd3":"Automatic Holdout Validation","option":"","type":""},
		{"id":"7","dd3":"0","option":"","type":""},
		{"id":"8","dd3":"1","option":"","type":""},
		{"id":"9","dd3":"2","option":"","type":""},
		{"id":"10","dd3":"3","option":"","type":""},
		{"id":"11","dd3":"4","option":"","type":""},
		{"id":"12","dd3":"10-100","option":"","type":""},
		{"id":"13","dd3":"64-1024","option":"","type":""},
		{"id":"14","dd3":"64-1025","option":"","type":""},
		{"id":"15","dd3":"Simple","option":"","type":""},
		{"id":"16","dd3":"No","option":"","type":""},
		{"id":"17","dd3":"Channel","option":"","type":""},
		{"id":"18","dd3":"Image","option":"","type":""},
		{"id":"19","dd3":"Imagenet","option":"","type":""},
		{"id":"20","dd3":"Min_Max","option":"","type":""},
		{"id":"21","dd3":"Inception","option":"","type":""},
		{"id":"22","dd3":"Hard","option":"","type":""},
		{"id":"23","dd3":"Custom","option":"1,2","type":""},
		{"id":"24","dd3":"Soft","option":"","type":""},
		{"id":"25","dd3":"Meduim","option":"","type":""},
		{"id":"26","dd3":"Mixup","option":"3,4","type":"dropdown"},
		{"id":"27","dd3":"Cutmix","option":"3,4","type":"dropdown"},
		{"id":"28","dd3":"Disabled","option":"","type":""},
		{"id":"29","dd3":"Average","option":"","type":""},
		{"id":"30","dd3":"CatAveragemax","option":"","type":""},
		{"id":"31","dd3":"GeM","option":"","type":""},
		{"id":"32","dd3":"Max","option":"","type":""},
		{"id":"33","dd3":"MeanAverageMax","option":"","type":""},
		{"id":"34","dd3":"MAE","option":"","type":""},
		{"id":"35","dd3":"MSE","option":"","type":""},
		{"id":"36","dd3":"RMSE","option":"","type":""},
		{"id":"37","dd3":"Adam","option":"","type":""},
		{"id":"38","dd3":"AdamW","option":"","type":""},
		{"id":"39","dd3":"RMSprop","option":"","type":""},
		{"id":"40","dd3":"SGD","option":"","type":""},
		{"id":"41","dd3":"Adadelta","option":"","type":""},
		{"id":"42","dd3":"4-256","option":"5","type":""},
		{"id":"43","dd3":"1-50","option":"","type":""},
		{"id":"44","dd3":"Linear","option":"6","type":""},
		{"id":"45","dd3":"Cosine","option":"6","type":""},
		{"id":"46","dd3":"Constant","option":"6","type":""},
		{"id":"47","dd3":"1-5","option":"8","type":""},
		{"id":"48","dd3":"MAPE","option":"","type":""},
		{"id":"49","dd3":"R2","option":"","type":""},
		{"id":"50","dd3":"SMAPE","option":"","type":""},
		{"id":"51","dd3":"Horizontal Flip","option":"23","type":""},
		{"id":"52","dd3":"veritcal flip","option":"23","type":""},
		{"id":"53","dd3":"on/off","option":"","type":""},
		{"id":"54","dd3":"1-16","option":"10","type":""},
		{"id":"55","dd3":"none","option":"12","type":""},
		{"id":"56","dd3":"Neptune","option":"13,14","type":""},
	];
	
	
var dd4=[
		{"id":"1","dd4":"Strength of the augmentations to apply. Soft strategy applies image Resize and random HorizontalFlip. Medium strategy adds ShiftScaleRotate and CoarseDropout on top. While Hard strategy applies RandomResizedCrop and RandomBrightnessContrast on top of the previous augmentations. Custom strategy allows to use own augmentations that can be defined below",
		"option":"","type":""},
		{"id":"2","dd4":"custom train augmentation","option":"","type":""},
		{"id":"3","dd4":"custom inference augmentation","option":""},
		{"id":"4","dd4":"Mix target","option":"","type":"dropdown"},
		{"id":"5","dd4":"Mix probability","option":"0-1","type":"slider"},
		{"id":"6","dd4":"automatically adjust batch size","option":"","type":""},
		{"id":"7","dd4":"learning rate schedule","option":"","type":""},
		{"id":"8","dd4":"weight decay for optimizer","option":"","type":""},
		{"id":"9","dd4":"Number of epochs before each validation loop","option":"","type":""},
		{"id":"10","dd4":"list of selected GPUs to use for the experiment","option":"","type":""},
		{"id":"11","dd4":"number of workers for the DataLoader","option":"","type":""},
		{"id":"12","dd4":"random seed. Default -1 select arbitrary value","option":"","type":""},
		{"id":"13","dd4":"number ofimages","option":"0-30","type":"slider"},
		{"id":"14","dd4":"neptune api token","option":"","type":""},
		{"id":"15","dd4":"neptune project","option":"","type":""},
		{"id":"16","dd4":"neptune api token","option":"","type":""},
		{"id":"17","dd4":"neptune project","option":"","type":""}
	];

var dd5=[
		{"id":"1","dd5":"Ratio/Max/Min","option":"","type":""},
		{"id":"2","dd5":"0-1","option":"","type":""},
		{"id":"3","dd5":"0-30","option":"","type":""},
		{"id":"4","dd5":"number ofimages","option":"0-30","type":""}
	];

var dd6=[	{"id":"1","dd6":'{"__version__": "1.1.0", "transform": {"__class_fullname__": "Compose", "p": 1.0, "transforms": [{"__class_fullname__": "Resize", "always_apply": true, "p": 1, "height": IMAGE_HEIGHT, "width": IMAGE_WIDTH, "interpolation": 1}], "bbox_params": null, "keypoint_params": null, "additional_targets": {}}}"},{"dd6":"logger type for modelling","option":"","type":""}'},
		    {"id":"2","dd6":"0-30","option":"","type":""}
        ];



	 var jsonkey="";
	 var jsonvaluename="";
	 var optiondd1="";
	 var dd1key="";	
		
	 function createDropdown_1()
	 {
		 
		 optiondd1 +='<option value="select">select</option>';

	    for (var key in dd1) 
	      {
	      	jsonkey=key;
	      	//console.log("key::"+jsonkey);
	      	var jsonvalue=dd1[key];
	      	//console.log("value::",jsonvalue);
	      	
	      	for(var key in jsonvalue){
	      	
	      		if(key == "dd1")
	      		{

	      			//var dd1key=key;
	      			var jsonvaluevalue=jsonvalue[key];
	      			//console.log("dd1key::"+jsonvaluevalue);
	      			optiondd1 +='<option value="'+jsonvaluevalue+'">'+jsonvaluevalue+'</option>';
	      			
	      		}
	      		
	      		jsonvaluename=key;
	      		//console.log("jsonvaluename::"+jsonvaluename);
	      		var jsonvaluevalue=jsonvalue[key];
	      		//console.log("jsonvaluevalue::"+jsonvaluevalue);

	      	}

	      }
	 	 
	 	 $("#problem_type").html(optiondd1);
	 }		
	 
	 
	 
	 function OnchageFunction()
	 {
			  var optVal= $("#problem_type").val();
			  
			 
			  
				var jsonkey="";
				var jsonvaluename="";
				var optiondd1="";
				var dd1key="";
				var jsonvaluevalue="";
				var optionbind="";
				
				var optionvaluebind = "<option value='select'>select</option>";
				
				 
				 //alert("optVal::::::"+optVal);
				//to get option value for dd1
				for (var key in dd1) 
				{
					 //alert("optVal::::::"+optVal);
					jsonkey=key;
					var jsonvalue=dd1[key]; 
					//alert("jsonvalue::"+jsonvalue)    
					
					//jsonvaluevalue ="";
					//optionbind ="";
					
					var count =0; 
					
					
					for(var key in jsonvalue)
					{
						//alert("key:::::"+key);
                 		       if(key == "dd1")
										{
                 			              
							     			//var dd1key=key;
							     			jsonvaluevalue=jsonvalue[key];
							     			console.log("dd1key::"+jsonvaluevalue);
						     			
							     			//alert("jsonvaluevalue::::::"+jsonvaluevalue);
										}
				
										
										if(key == "option")
										{
							     			optionbind = jsonvalue[key];
							     			//alert("optionbind::::::"+optionbind);
						     			}
						
										count = count+1;	
										
							if (count >=2)
							{
								//alert("bReak");
								break;
							}			
						
					}	
					
					//alert("jsonvaluevalue out ::::::"+jsonvaluevalue);
					//alert("optVal::::"+optVal);
					
					
					if(jsonvaluevalue == optVal)
		         	{
						
						break;
		         	}
					
					
				}		
		     			
		     		//alert("optionbind out ::"+optionbind);

				     			var strarr = optionbind.split(",");	
				     			//alert("strarr::"+strarr.length);

								var dd2key="";
								var dd2keyname="";	
				
								
					for (var key2 in dd2) 
							{
										//dd2key=key2;
										
										console.log("dd2key::"+key2);
										
										var dd2keyval=dd2[key2];
										
										//alert("dd2keyval:::::"+dd2keyval);
										
										var dd2firstval="";
										var opid= 0;
										var optype ="";
										
										var idinside ="";
										var valueinside ="";
										var countinside =0;
										
										for(var key3 in dd2keyval)
										{
											//dd2keyname=key3;
											
											//alert("key3::::"+key3);
											
											
									var dd2value=dd2keyval[key3];
											
									//alert("dd2value::"+dd2value);
											
											if(key3 == "id")
											{
												idinside = dd2keyval[key3];
												//console.log("dd2firstval::"+dd2firstval);
											}
											
											if(key3 == "dd2")
											{
												valueinside = dd2keyval[key3];
												//console.log("dd2firstval::"+dd2firstval);
											}
  	
										}

									console.log("idinside::::"+idinside);
									console.log("valueinside::::"+valueinside);
										
							/////////////////////check if exist			
								
										for (var i=0;i<strarr.length;i++)
										{

											//alert("strarr[i]::::"+strarr[i]);
											//alert("idinside::::"+idinside);
											
											if (strarr[i] ==  idinside)
											{
												console.log("strarr[i]::"+strarr[i]);

												optionvaluebind +='<option value="'+valueinside+'">'+valueinside+'</option>'	;
											    break;
											}

							
										}	
				     
							}
              	//}
					//alert("optionvaluebind::"+optionvaluebind);
				
				$("#ddafterproblemtype").html(optionvaluebind);
			
		}
	   
	 
	 
	 
	 
	function OnchageFunctionType2()
	 {
			  var optVal = $("#ddafterproblemtype").val();
			  //alert("optVal::::"+optVal );
			
			    var jsonkey="";
				var jsonvaluename="";
				var optiondd1="";
				var dd1key="";
				var jsonvaluevalue="";
				var optionbind="";
				var optionvaluebind="";
				var type ="";
				
				
				
				for (var key in dd2) 
				{
					jsonkey=key;
					var jsonvalue=dd2[key]; 
					var count =0; 
					
					for(var key in jsonvalue)
					{
						//alert("key:::::"+key);
                 		       if(key == "dd2")
										{
                 			        		jsonvaluevalue=jsonvalue[key];
							     		}
								if(key == "option")
										{
							     			optionbind = jsonvalue[key];
							     			
						     			}
								if(key == "type")
										{
											type = jsonvalue[key];
							     		}
								
								count = count+1;	
										
							if (count >=4)
							{
								break;
							}			
					}	
					
					//alert("jsonvaluevalue out ::::::"+jsonvaluevalue);
					//alert("optVal::::"+optVal);
					
					
					if(jsonvaluevalue == optVal)
		         	{
						break;
		         	}
					
					
				}		
		     			
		     		//alert("optionbind out ::"+optionbind);

				   
				//alert("type::::"+type);
		   var strarr =  "";
					
			if (type == "dropdown")
			    {
				
				//alert("inside dropdown");
				//alert("optionbind::::"+optionbind); 
				
				 strarr = optionbind.split(",");	
					 
					

					var dd2key="";
					var dd2keyname="";	
				
								
					for (var key2 in dd3) 
							{
										//dd2key=key2;
										
										//alert("dd2key::"+key2);
										
										var dd2keyval=dd3[key2];
										
										//alert("dd2keyval:::::"+dd2keyval);
										
										var dd2firstval="";
										var opid= 0;
										var optype ="";
										
										var idinside ="";
										var valueinside ="";
										var countinside =0;
										
										for(var key3 in dd2keyval)
										{
												
									var dd2value=dd2keyval[key3];
											
											
											if(key3 == "id")
											{
												idinside = dd2keyval[key3];
												//console.log("dd2firstval::"+dd2firstval);
											}
											
											if(key3 == "dd3")
											{
												valueinside = dd2keyval[key3];
												//console.log("dd2firstval::"+dd2firstval);
											}
										}

								//alert("idinside::::"+idinside);
								//	alert("valueinside::::"+valueinside);
										
							/////////////////////check if exist			
								
										for (var i=0;i<strarr.length;i++)
										{

											//alert("strarr[i]::::"+strarr[i]);
											//alert("idinside::::"+idinside);
											
											if (strarr[i] ==  idinside)
											{
												console.log("strarr[i]::"+strarr[i]);

												optionvaluebind +='<option value="'+valueinside+'">'+valueinside+'</option>'	;
											    break;
											}

							
										}	
				     
							}
					
					   //alert("out optionvaluebind:::"+optionvaluebind);
					
					       var selectHtml ="<select id='data_sample' class='form-control' style='width: 80px;display:inline;' >"+optionvaluebind+"</select>";
						           
					      alert("selectHtml:::::"+selectHtml); 
					       
					       $("#option3Div").html(selectHtml);
					
					
					  }
					else if (type == "slider")
				    {
						  strarr = optionbind.split("-");	
						  
					
					   var input ='<div class="cb-range-form-div" >\
					     		<div class="cb-range-Label">\
					     		<span class="label"><div class="cb-range-text">Problem type 3</div></span>\
					     		<div>\
					     		<div class="cb-input-css ">\
					     		<input type="range" name="data_sample" id="data_sample" min="'+strarr[0]+'"  max="'+strarr[1]+'" value="'+strarr[0]+'">\
					     		<p class="cb-value-css" id="data_sample_value"> '+strarr[0]+' </p>\
					     		</div>\
					     		</div>\
					     		</div>\
					     		</div>';
					     		//var input ='<input type="range" >';
					     		console.log("input::"+input);

					     		  $("#option3Div ").html(input);
						
					}
					else if (type == "slider")
				    {
						
						var inputradio ='<div class="form-inline" >\
				     		<div class="cb-form">\
				     		<label class="cb-form-label cb-margin-left width-7">Problem type 3</label>\
				     		<div class="cb-form-switch">\
				     		<div class="css-wtrf37">\
				     		<input type="checkbox" id="data_sample">\
				     		<label for="mixed_precision_training"></label>\
				     		</div>\
				     		</div>\
				     		</div>\
				     		</div>';  
						
						  $("#option3Div ").html(inputradio);
				    }
				 	else if(type == "input")
				 	{
			     		var inputnumber=' <div class="cb-range-form-div" >\
			     		<div class="cb-range-Label">\
			     		<span class="label"><div class="cb-range-text">Problem type 3</div></span>\
			     		<div>\
			     		<div class="cb-input-css ">\
			     		<input type="number" class="form-control" name="data_sample" id="data_sample" min="10"  max="100" >\
			     		</div>\
			     		</div>\
			     		</div>\
			     		</div>';                      		
			     		//var inputnumber ='<input type="number" >';
			     		console.log("input::"+inputnumber);
			     		
			     		
			     		 $("#option3Div ").html(inputnumber);
			     	}
					
		}
	 	 
	 



function onchangeType(){
  //alert("hi")
  if($("#problem_type").val() == "Image Regression"){
//alert("hi");
    $("#validation_strategydiv").show();
    $("#foldsdiv").show();
    $("#data_samplediv").show();
    $("#image_heightdiv").show();
    $("#image_weidthdiv").show();
    $("#image_channeldiv").show();
    $("#image_normalizationdiv").show();
    $("#augmentation_strategydiv").show();
    $("#mix_imagediv").show();
    $("#pooldiv").show();
    $("#dropoutdiv").show();
    $("#loss_functiondiv").show();
    $("#optimizerdiv").show();
    $("#learning_ratediv").show();
    $("#batch_sizediv").show();
    $("#auto_adjust_batchsizediv").show();
    $("#epochsdiv").show();
    $("#schedulediv").show();
    $("#weight_decaydiv").show();
    $("#evaluation_epochsdiv").show();
    $("#metricdiv").show();
    $("#gpusdiv").show();
    $("#mixed_precision_trainingdiv").show();
    $("#mixed_precision_inferencediv").show();
    $("#no_of_workersdiv").show();
    $("#seeddiv").show();
    $("#loggerdiv").show();
    $("#model_typediv").hide();
    $("#x_min_columndiv").hide();
    $("#x_max_columndiv").hide();
    $("#y_min_columndiv").hide();
    $("#y_max_columndiv").hide();
    $("#architecturediv").hide();
    $("#rle_mask_columndiv").hide();
    $("#rle_mask_columndiv").hide();
    $("#neptunediv").hide();
    $("#number_of_imagesdiv").show();
    $("#embedding_sizediv").hide();
    $("#top_k_similardiv").hide();
    $("#archfacediv").hide();
    $("#loss_function option[value=MAE]").attr('selected','selected');
    $("#metric option[value=MAE]").attr('selected','selected');
    $("backbone").show();
    $("#backbone option[value=tf_efficientnet_b0_ns]").attr('selected','selected');
    $("#mix_concentrationdiv").hide();
    $("#mix_targetmixupdiv").show();
    $("#max_instancesdiv").hide();
    $("#pretrained_select").show();
	$("#mixtargetmixupdiv_").show();

         //metric option
    $("#mae").show();
    $("#mse").show();
    $("#mape").show();
    $("#rmse").show();
    $("#r2").show();
    $("#smape").show();
    $("#accuacy").hide();
    $("#f05").hide();
    $("#f1").hide();
    $("#f2").hide();
    $("#logloss").hide();
    $("#mcc").hide();
    $("#precision").hide();
    $("#roc_auc").hide();
    $("#recall").hide();
    $("#map").hide();
    $("#iou").hide();
    $("#dice").hide();
    $("#coco_map").hide();

         //loss function option
    // $("#mae_").show();
    // $("#mse_").show();
    // $("#rmse_").show();
    // $("#bce").hide();
    // $("#crossentropy").hide();
    // $("#bcedice").hide();
    // $("#bcelovasz").hide();
    // $("#dice_").hide();
    // $("#focal").hide();
    // $("#focaldice").hide();
    // $("#jaccard").hide();

    $(".show_1").show();
    $(".show_2").hide();
    $(".show_3").hide();
    $(".show_4").hide();

        //backbone option



    $(".backboneoption1").show();
    $(".backboneoption2").hide();
    $(".backboneoption3").hide();

    //setting div heading
    $("#general_setting").show();
    $("#dataset_setting").show();
    $("#augmentation_setting").show();
    $("#architecture_setting").show();
    $("#training_setting").show();
    $("#prediction_setting").show();
    $("#environment_setting").show();
    $("#logging_setting").show();

  }
  if($("#problem_type").val() == "Image Classification"){
    $("#validation_strategydiv").show();
    $("#foldsdiv").show();
    $("#data_samplediv").show();
    $("#image_heightdiv").show();
    $("#image_weidthdiv").show();
    $("#image_channeldiv").hide();
    $("#image_normalizationdiv").show();
    $("#image_normalizationdiv_").hide();
    $("#augmentation_strategydiv").show();
    $("#mix_imagediv").show();
    $("#pooldiv").show();
    $("#dropoutdiv").show();
    $("#loss_functiondiv").show();
    $("#optimizerdiv").show();
    $("#learning_ratediv").show();
    $("#batch_sizediv").show();
    $("#auto_adjust_batchsizediv").show();
    $("#epochsdiv").show();
    $("#schedulediv").show();
    $("#weight_decaydiv").show();
    $("#evaluation_epochsdiv").show();
    $("#metricdiv").show();
    $("#gpusdiv").show();
    $("#mixed_precision_trainingdiv").show();
    $("#mixed_precision_inferencediv").show();
    $("#number_of_workersdiv").show();
    $("#seeddiv").show();
    $("#loggerdiv").show();
    $("#probability_thresholddiv").show();
    $("#metric_thresholddiv").hide();
    $("#model_typediv").hide();
    $("#x_min_columndiv").hide();
    $("#x_max_columndiv").hide();
    $("#y_min_columndiv").hide();
    $("#y_max_columndiv").hide();
    $("#architecturediv").hide();
    $("#rle_mask_columndiv").hide();
    $("#rle_mask_columndiv").hide();
    $("#neptunediv").hide();
    $("#number_of_imagesdiv").show();
    $("#embedding_sizediv").hide();
    $("#top_k_similardiv").hide();
    $("#archfacediv").hide();
    $("#loss_function option[value=BCE]").attr('selected','selected');
    $("#metric option[value=Accuracy]").attr('selected','selected');
    $("#backbonediv").show();
    $("#backbone option[value=tf_efficientnet_b0_ns]").attr('selected','selected');
    $("#mix_concentrationdiv").hide();
    $("#mix_targetmixupdiv").show();
    $("#max_instancesdiv").hide();
    $("#pretrained_select").show();
	$("#mixtargetmixupdiv_").show();

    $("#mae").hide();
    $("#mse").hide();
    $("#mape").hide();
    $("#rmse").hide();
    $("#r2").hide();
    $("#smape").hide();
    $("#accuacy").show();
    $("#f05").show();
    $("#f1").show();
    $("#f2").show();
    $("#logloss").show();
    $("#mcc").show();
    $("#precision").show();
    $("#roc_auc").show();
    $("#recall").show();
    $("#map").hide();
    $("#iou").hide();
    $("#dice").hide();
    $("#coco_map").hide();

    //loss function option
    // $("#mae_").hide();
    // $("#mse_").hide();
    // $("#rmse_").hide();
    // $("#bce").show();
    // $("#crossentropy").show();
    // $("#bcedice").hide();
    // $("#bcelovasz").hide();
    // $("#dice_").hide();
    // $("#focal").hide();
    // $("#focaldice").hide();
    // $("#jaccard").hide();

    $(".show_1").hide();
    $(".show_2").show();
    $(".show_3").hide();
    $(".show_4").hide();


        //backbone option


    $(".backboneoption1").show();
    $(".backboneoption2").hide();
    $(".backboneoption3").hide();

    //setting div heading
    $("#general_setting").show();
    $("#dataset_setting").show();
    $("#augmentation_setting").show();
    $("#architecture_setting").show();
    $("#training_setting").show();
    $("#prediction_setting").show();
    $("#environment_setting").show();
    $("#logging_setting").show();
    
  }
  if($("#problem_type").val() == "Image Object Detection"){
    //alert("hi")
    $("#validation_strategydiv").show();
    $("#foldsdiv").show();
    $("#data_samplediv").show();
    $("#image_heightdiv").show();
    $("#image_weidthdiv").show();
    $("#image_channeldiv").show();
    $("#image_normalizationdiv").show();
    $("#augmentation_strategydiv").show();
    $("#mix_imagediv").show();
    $("#pooldiv").hide();
    $("#dropoutdiv").hide();
    $("#loss_functiondiv").hide();
    $("#optimizerdiv").show();
    $("#learning_ratediv").show();
    $("#batch_sizediv").show();
    $("#auto_adjust_batchsizediv").show();
    $("#epochsdiv").show();
    $("#schedulediv").show();
    $("#weight_decaydiv").show();
    $("#evaluation_epochsdiv").show();
    $("#metricdiv").show();
    $("#gpusdiv").show();
    $("#mixed_precision_trainingdiv").show();
    $("#mixed_precision_inferencediv").show();
    $("#no_of_workersdiv").show();
    $("#seeddiv").show();
    $("#loggerdiv").show();
    $("#probability_thresholddiv").show();
    $("#metric_thresholddiv").show();
    $("#model_typediv").show();
    $("#x_min_columndiv").show();
    $("#x_max_columndiv").show();
    $("#y_min_columndiv").show();
    $("#y_max_columndiv").show();
    $("#rle_mask_columndiv").hide();
    $("#test_time_augmentationsdiv").hide();
    $("#architecturediv").hide();
    $("#neptunediv").hide();
    $("#number_of_imagesdiv").hide();
    $("#embedding_sizediv").hide();
    $("#top_k_similardiv").hide();
    $("#archfacediv").hide();
    $("#metric option[value=mAP]").attr('selected','selected');
      //$("#metric option[value=Accuracy]").attr('selected','selected');
    $("#backbonediv").show();
    $("#backbone option[value=tf_efficientdet_d0]").attr('selected','selected');
    $("#mix_concentrationdiv").show();
    $("#mix_targetmixupdiv").hide();
    $("#max_instancesdiv").hide();
    $("#pretrained_select").show();
    $("#metric option[value=mAP]").attr('selected','selected');
	$("#mixtargetmixupdiv_").show();
	$("#mix_targetmixupdiv").hide();
	$("#mix_concentrationdiv").show();
	$("#mix_probabilitymixupdiv").show();

     //metric option 
    $("#mae").hide();
    $("#mse").hide();
    $("#mape").hide();
    $("#rmse").hide();
    $("#r2").hide();
    $("#smape").hide();
    $("#accuacy").hide();
    $("#f05").hide();
    $("#f1").hide();
    $("#f2").hide();
    $("#logloss").hide();
    $("#mcc").hide();
    $("#precision").hide();
    $("#roc_auc").hide();
    $("#recall").hide();
    $("#map").show();
    $("#iou").hide();
    $("#dice").hide();
    $("#coco_map").hide();

    //loss function option
    // $("#mae_").hide();
    // $("#mse_").hide();
    // $("#rmse_").hide();
    // $("#bce").hide();
    // $("#crossentropy").hide();
    // $("#bcedice").hide();
    // $("#bcelovasz").hide();
    // $("#dice_").hide();
    // $("#focal").hide();
    // $("#focaldice").hide();
    // $("#jaccard").hide();

    $(".show_1").hide();
    $(".show_2").hide();
    $(".show_3").hide();
    $(".show_4").hide();

        //backbone option

    $(".backboneoption1").hide();
    $(".backboneoption2").show();
    $(".backboneoption3").hide();

    //setting div heading
    $("#general_setting").show();
    $("#dataset_setting").show();
    $("#augmentation_setting").show();
    $("#architecture_setting").show();
    $("#training_setting").show();
    $("#prediction_setting").show();
    $("#environment_setting").show();
    $("#logging_setting").show();
    
    
  /*  setTimeout(() => {
			alert("hi")
		var metric_threshold = document.getElementById("metric_threshold");
 		var metric_threshold_value = document.getElementById("metric_threshold_value");
 		metric_threshold_value.innerHTML = metric_threshold.value;

 		metric_threshold.oninput = function() {
 			//alert("hi");
 		  metric_threshold_value.innerHTML = this.value;
 		}
	}, 1000);*/
  }
  if($("#problem_type").val() == "Image Semantic Segmentation"){
    $("#validation_strategydiv").show();
    $("#foldsdiv").show();
    $("#data_samplediv").show();
    $("#image_heightdiv").show();
    $("#image_weidthdiv").show();
    $("#image_channeldiv").show();
    $("#image_normalizationdiv").show();
    $("#augmentation_strategydiv").show();
    $("#mix_imagediv").show();
    $("#pooldiv").hide();
    $("#dropoutdiv").hide();
    $("#loss_functiondiv").show();
    $("#optimizerdiv").show();
    $("#learning_ratediv").show();
    $("#batch_sizediv").show();
    $("#auto_adjust_batchsizediv").show();
    $("#epochsdiv").show();
    $("#schedulediv").show();
    $("#weight_decaydiv").show();
    $("#evaluation_epochsdiv").show();
    $("#metricdiv").show();
    $("#gpusdiv").show();
    $("#mixed_precision_trainingdiv").show();
    $("#mixed_precision_inferencediv").show();
    $("#no_of_workersdiv").show();
    $("#seeddiv").show();
    $("#loggerdiv").show();
    $("#probability_thresholddiv").show();
    $("#metric_thresholddiv").hide();
    $("#model_typediv").hide();
    $("#x_min_columndiv").hide();
    $("#x_max_columndiv").hide();
    $("#y_min_columndiv").hide();
    $("#y_max_columndiv").hide();
    $("#rle_mask_columndiv").show();
    $("#architecturediv").show();
    $("#neptunediv").hide();
    $("#number_of_imagesdiv").hide();
    $("#embedding_sizediv").hide();
    $("#top_k_similardiv").hide();
    $("#archfacediv").hide();
    $("#loss_function option[value=BCEDice]").attr('selected','selected');
    $("#metric option[value=IoU]").attr('selected','selected');
    $("#backbonediv").show();
    $("#backbone option[value=efficientnet-b0]").attr('selected','selected');
    $("#mix_concentrationdiv").hide();
    $("#mix_targetmixupdiv").show();
    $("#test_time_augmentationsdiv").show();
    $("#max_instancesdiv").hide();
    $("#pretrained_select").show();

      //metric option
    $("#mae").hide();
    $("#mse").hide();
    $("#mape").hide();
    $("#rmse").hide();
    $("#r2").hide();
    $("#smape").hide();
    $("#accuacy").hide();
    $("#f05").hide();
    $("#f1").hide();
    $("#f2").hide();
    $("#logloss").hide();
    $("#mcc").hide();
    $("#precision").hide();
    $("#roc_auc").hide();
    $("#recall").hide();
    $("#map").hide();
    $("#iou").show();
    $("#dice").show();
    $("#coco_map").hide();

    //loss function option
    // $("#mae_").hide();
    // $("#mse_").hide();
    // $("#rmse_").hide();
    // $("#bce").hide();
    // $("#crossentropy").hide();
    // $("#bcedice").show();
    // $("#bcelovasz").show();
    // $("#dice_").show();
    // $("#focal").show();
    // $("#focaldice").show();
    // $("#jaccard").show();

    $(".show_1").hide();
    $(".show_2").hide();
    $(".show_3").show();
    $(".show_4").hide();



        //backbone option

    $(".backboneoption1").hide();
    $(".backboneoption2").hide();
    $(".backboneoption3").show();
    $(".backboneoption1").eq(5).show();
    $(".backboneoption1").eq(6).show();
    $(".backboneoption1").eq(7).show();
    $(".backboneoption1").eq(8).show();
    $(".backboneoption1").eq(9).show();


    //setting div heading
    $("#general_setting").show();
    $("#dataset_setting").show();
    $("#augmentation_setting").show();
    $("#architecture_setting").show();
    $("#training_setting").show();
    $("#prediction_setting").show();
    $("#environment_setting").show();
    $("#logging_setting").show();

    
  }
  if($("#problem_type").val() == "Image Instance Segmentation"){
    //alert("im")
    $("#validation_strategydiv").show();
    $("#foldsdiv").show();
    $("#data_samplediv").show();
    $("#image_heightdiv").show();
    $("#image_widthdiv").show();
    $("#image_channeldiv").show();
    $("#image_normalizationdiv").show();
    $("#augmentation_strategydiv").show();
    $("#mix_imagediv").show();
    $("#pooldiv").hide();
    $("#dropoutdiv").hide();
    $("#loss_functiondiv").show();
    $("#optimizerdiv").show();
    $("#learning_ratediv").show();
    $("#batch_sizediv").show();
    $("#auto_adjust_batchsizediv").hide();
    $("#epochsdiv").show();
    $("#schedulediv").show();
    $("#weight_decaydiv").show();
    $("#evaluation_epochsdiv").show();
    $("#metricdiv").show();
    $("#gpusdiv").show();
    $("#mixed_precision_trainingdiv").show();
    $("#mixed_precision_inferencediv").show();
    $("#no_of_workersdiv").show();
    $("#seeddiv").show();
    $("#loggerdiv").show();
    $("#probability_thresholddiv").show();
    $("#metric_thresholddiv").hide();
    $("#model_typediv").hide();
    $("#x_min_columndiv").hide();
    $("#x_max_columndiv").hide();
    $("#y_min_columndiv").hide();
    $("#y_max_columndiv").hide();
    $("#architecturediv").show();
    $("#rle_mask_columndiv").show();
    $("#test_time_augmentationsdiv").show();
    $("#number_of_workersdiv").show();
    $("#mixtargetmixupdiv_").show();
    $("#embedding_sizediv").hide();
    $("#neptunediv").hide();
    $("#number_of_imagesdiv").hide();
    $("#top_k_similardiv").hide();
    $("#archfacediv").hide();
    $("#loss_function option[value=BCEDice]").attr('selected','selected');

    $("#metric option[value=COCO_mAP]").attr('selected','selected');
    $("#backbonediv").show();
    $("#backbone option[value=efficientnet-b0]").attr('selected','selected');
    $("#mix_concentrationdiv").hide();
    $("#mix_targetmixupdiv").show();
    $("#max_instancesdiv").show();
    $("#pretrained_select").show();

    $("#mae").hide();
    $("#mse").hide();
    $("#mape").hide();
    $("#rmse").hide();
    $("#r2").hide();
    $("#smape").hide();
    $("#accuacy").hide();
    $("#f05").hide();
    $("#f1").hide();
    $("#f2").hide();
    $("#logloss").hide();
    $("#mcc").hide();
    $("#precision").hide();
    $("#roc_auc").hide();
    $("#recall").hide();
    $("#map").hide();
    $("#iou").hide();
    $("#dice").hide();
    $("#coco_map").show();

    // $("#mae_").hide();
    // $("#mse_").hide();
    // $("#rmse_").hide();
    // $("#bce").show();
    // $("#crossentropy").hide();
    // $("#bcedice").show();
    // $("#bcelovasz").show();
    // $("#dice_").show();
    // $("#focal").show();
    // $("#focaldice").show();
    // $("#jaccard").show();


    $(".show_1").hide();
    $(".show_2").eq(1).show();
    $(".show_3").show();
    $(".show_4").show();


        //backbone option


    $(".backboneoption1").hide();
    $(".backboneoption2").hide();
    $(".backboneoption3").show();
    $(".backboneoption1").eq(5).show();
    $(".backboneoption1").eq(6).show();
    $(".backboneoption1").eq(7).show();
    $(".backboneoption1").eq(8).show();
    $(".backboneoption1").eq(9).show();

    //setting div heading
    $("#general_setting").show();
    $("#dataset_setting").show();
    $("#image_setting").show();
    $("#augmentation_setting").show();
    $("#architecture_setting").show();
    $("#training_setting").show();
    $("#prediction_setting").show();
    $("#environment_setting").show();
    $("#logging_setting").show();
    
  }

  if($("#problem_type").val() == "Image Metric Learning"){
    //alert($("#loss_function").val("arcface").change())
    //alert("metric");
    $("#validation_strategydiv").show();
    $("#foldsdiv").show();
    $("#data_samplediv").show();
    $("#image_heightdiv").show();
    $("#image_widthdiv").show();
    $("#image_channeldiv").show();
    $("#image_normalizationdiv").show();
    $("#augmentation_strategydiv").show();
    $("#mix_imagediv").hide();
    $("#pooldiv").show();
    $("#dropoutdiv").show();
    $("#loss_functiondiv").show();
    $("#optimizerdiv").show();
    $("#learning_ratediv").show();
    $("#batch_sizediv").show();
    $("#auto_adjust_batchsizediv").hide();
    $("#epochsdiv").show();
    $("#schedulediv").show();
    $("#weight_decaydiv").show();
    $("#evaluation_epochsdiv").show();
    $("#metricdiv").show();
    $("#gpusdiv").show();
    $("#mixed_precision_trainingdiv").show();
    $("#mixed_precision_inferencediv").show();
    $("#no_of_workersdiv").show();
    $("#seeddiv").show();
    $("#loggerdiv").show();
    $("#probability_thresholddiv").hide();
    $("#metric_thresholddiv").hide();
    $("#model_typediv").hide();
    $("#x_min_columndiv").hide();
    $("#x_max_columndiv").hide();
    $("#y_min_columndiv").hide();
    $("#y_max_columndiv").hide();
    $("#architecturediv").hide();
    $("#rle_mask_columndiv").hide();
    $("#test_time_augmentationsdiv").show();
    $("#number_of_workersdiv").show();
    $("#mixtargetmixupdiv_").hide();
    $("#embedding_sizediv").show();
    $("#neptunediv").hide();
    $("#number_of_imagesdiv").show();
    $("#top_k_similardiv").show();
    $("#archfacediv").hide();
     //$("#loss_function").val("arcface").change();
    $("#loss_function option[value=ArcFace]").attr('selected','selected');
    $("#metric option[value=mAP]").attr('selected','selected');
    lossFunction();
    $("#backbonediv").show();
    $("#backbone option[value=tf_efficientnet_b0_ns]").attr('selected','selected');
    $("#max_instancesdiv").hide();
    $("#pretrained_select").show();

     //metric option
    $("#mae").hide();
    $("#mse").hide();
    $("#mape").hide();
    $("#rmse").hide();
    $("#r2").hide();
    $("#smape").hide();
    $("#accuacy").hide();
    $("#f05").hide();
    $("#f1").hide();
    $("#f2").hide();
    $("#logloss").hide();
    $("#mcc").hide();
    $("#precision").hide();
    $("#roc_auc").hide();
    $("#recall").hide();
    $("#map").show();
    $("#iou").hide();
    $("#dice").hide();
    $("#coco_map").hide();


    //losss option
    // $("#mae_").hide();
    // $("#mse_").hide();
    // $("#rmse_").hide();
    // $("#bce").hide();
    // $("#crossentropy").show();
    // $("#bcedice").hide();
    // $("#bcelovasz").hide();
    // $("#dice_").hide();
    // $("#focal").hide();
    // $("#focaldice").hide();
    // $("#arcface").show();
    // $("#jaccard").hide();

    $(".show_1").hide();
    $(".show_2").eq(2).show();
    $(".show_3").hide();
    $(".show_4").show();


        //backbone option

    $(".backboneoption1").show();
    $(".backboneoption2").hide();
    $(".backboneoption3").hide();


    //setting div heading
    $("#general_setting").show();
    $("#dataset_setting").show();
    $("#image_setting").show();
    $("#augmentation_setting").show();
    $("#architecture_setting").show();
    $("#training_setting").show();
    $("#prediction_setting").show();
    $("#environment_setting").show();
    $("#logging_setting").show();
    
  }
}


	function imageReg_custom()
{
    var options_augmentation_strategy_ = document.getElementById('augmentation_strategy_').selectedOptions;
  var values_augmentation_strategy_ = Array.from(options_augmentation_strategy_).map(({ value }) => value);
  console.log("########### values_augmentation_strategy_:::::"+values_augmentation_strategy_);



  if ($("#augmentation_strategy").val() == "custom")
  {
    $("#custom_train_augmentationdivoption").show();
  }
 

 
  else if ($("#augmentation_strategy_").val() == "custom")
  {
    $("#custom_train_augmentationdivoption").show();
  }
  else if(values_augmentation_strategy_.includes("custom"))
  {
   $("#custom_train_augmentationdivoption").show(); 
 }
   else
   {
    $("#custom_train_augmentationdivoption").hide();
  }

}


	function imageReg_cutmix()
{   
//alert("cutmix")
 if ($("#mix_image").val() == "cutmix")
 {
   $("#mixtargetmixupdiv_").show();
   $("#mix_targetmixupdiv").show();
   $("#mix_probabilitymixupdiv").show();
   $("#mixtargetmixupdiv_multiple").hide();
 } 
  else if ($("#mix_image").val() == "mixup")
 {
 // alert("mixup")
   $("#mixtargetmixupdiv_").show();
   $("#mix_targetmixupdiv").show();
   $("#mix_probabilitymixupdiv").show();
   $("#mixtargetmixupdiv_multiple").hide();
 } 
 else
 {
  //alert("disabled")
   $("#mixtargetmixupdiv_").hide();
   $("#mixtargetmixupdiv_multiple").hide();
 }


}

function imageReg_cutmix_()
{ 
  var mix_image_ = document.getElementById('mix_image_').selectedOptions;
  var value_mix_image_ = Array.from(mix_image_).map(({ value }) => value);
  console.log("########### value_mix_image_:::::"+value_mix_image_);

  if (value_mix_image_ == "cutmix" || value_mix_image_ == "mixup")
 {
  //alert("mix cutmix");
   $("#mixtargetmixupdiv_multiple").show();
   $("#mixtargetmixupdiv_").hide();
 } 

else if(value_mix_image_.includes("cutmix") || value_mix_image_.includes("mixup"))
  {
    //alert("mix cutmix....");

   $("#mixtargetmixupdiv_multiple").show();
   $("#mixtargetmixupdiv_").hide();
 }
 else
 {
  //alert("dis");

 $("#mixtargetmixupdiv_multiple").hide();
   $("#mixtargetmixupdiv_").hide();
}
}

	function neptuneChange(){
	  if ($("#logger").val() == "neptune" )
	  {
	   $("#neptunediv").show();
	 }
	 else{
	  $("#neptunediv").hide();
	}
	}


function lossFunction(){

  var loss_function_ = document.getElementById('loss_function_').selectedOptions;
  var value_loss_function_ = Array.from(loss_function_).map(({ value }) => value);
  console.log("########### value_mix_image_:::::"+value_loss_function_);

  //alert("hi")
  if($("#loss_function").val() == "ArcFace"){
    $("#archfacediv").show(); 
    $("#archfacediv_").hide();   
    
  }
  
  else if(value_loss_function_ == "ArcFace"){
    $("#archfacediv").hide(); 
    $("#archfacediv_").show(); 
  }
  else{
    $("#archfacediv").hide();
    $("#archfacediv_").hide();
  }
}

	function btnClick() 
	  {
	    
	    
		  var pid = getParam("id");
		   if (pid ==0 || pid =="")
		   {
			   $("#btnPyExecute").notify("No Project found!","error");
			   return;
		   }

		var publish =1;
		var isSuccess=0;
		var ddlImageRepo = 0;// $("#ddlImageRepo").val();
		
		console.log("ddlImageRepo--"+ddlImageRepo);
		
		
		alert("start::::::");
		
		var txtModel = $("#txtModel").val();
		if (txtModel == "")
		{
			$("#txtModel").notify("Please enter model name!","info");
			return;
		}
		if (txtModel.trim() == "")
		{
			$("#txtModel").notify("Please enter model name!","info");
			return;
		}
		
		if ($("#ddlFieldimage").data("kendoDropDownList").text() == "" || $("#ddlFieldimage").data("kendoDropDownList").text() =="--select--")
		{
			$("#ddlFieldimage").notify("Please select image column!","info");
			return;
		}
		
		if ($("#ddlFieldlabel").data("kendoDropDownList").text() == "" || $("#ddlFieldlabel").data("kendoDropDownList").text() =="--select--")
		{
			$("#ddlFieldlabel").notify("Please select label column!","info");
			return;
		}
		
		
		alert("in::::::");
		
		if( $("#property_name").val()==0)
		{
			//$("#btnDBExecute").notify("Not Linked!","info");
			//return;
		}
		
		var chkLocal  = 0;
		var ftpserverid  =0;
		

		if ($('#chkLocal').is(':checked')) 
		{
			chkLocal=1;
			ftpserverid = $("#ddlFtpServer").data("kendoDropDownList").value()
		}
		else{
			chkLocal=0;
			ftpserverid = $("#ddlFtpServer").data("kendoDropDownList").value()
			console.log("ftpserverid---"+ftpserverid);
		}
	    
		
		
	    
	    
		 var varData = [];
	     var ls = [];
	     var problem_type =$("#problem_type").val();
//	     console.log("problem_type   "+problem_type);
	     var grid_search = $("#grid_search").val();
	     //console.log("grid_search   "+grid_search);
	     var experience_level = $("#experience_level").val();
	     //console.log("experience_level   "+experience_level);
	     var validation_strategy = $("#validation_strategy").val();
	     //console.log("validation_strategy   "+validation_strategy);
	     var folds = $("#folds").val(); 
	     //console.log("folds   "+folds);
	     var data_sample = $("#data_sample").val();  
	     //console.log("data_sample   "+data_sample);
	     var image_height = $("#image_height").val(); 
	     //console.log("image_height   "+image_height);
	     var image_width = $("#image_width").val(); 
	     //console.log("image_width   "+image_width);
	     var image_channel = $("#image_channel").val();
	     //console.log("image_channel   "+image_channel);
	     var image_normalization = $("#image_normalization").val(); 
	     //console.log("image_normalization   "+image_normalization);
	     var augmentation_strategy = $("#augmentation_strategy").val(); 
	     //console.log("augmentation_strategy   "+augmentation_strategy);
	     var custom_train_augmentation = $("#custom_train_augmentation").val();    
	     //console.log("custom_train_augmentation   "+custom_train_augmentation);
	     var custom_inference_augmentation = $("#custom_inference_augmentation").val();
	     //console.log("custom_inference_augmentation   "+custom_inference_augmentation);
	     var mix_targetmixup = $("#mix_targetmixup").val(); 
	     //console.log("mix_targetmixup   "+mix_targetmixup);
	     var mix_probabilitymixup = $("#mix_probabilitymixup").val();
	     //console.log("mix_probabilitymixup   "+mix_probabilitymixup);
	     var mix_image = $("#mix_image").val();   
	     //console.log("mix_image   "+mix_image);
	     var pool = $("#pool").val();  
	     //console.log("pool   "+pool);
	     var dropout = $("#dropout").val();   
	     //console.log("dropout   "+dropout);
	     var loss_function = $("#loss_function").val();  
	     //console.log("loss_function   "+loss_function);
	     var optimizer = $("#optimizer").val();
	     //console.log("optimizer   "+optimizer);
	     var learning_rate = $("#learning_rate").val();
	     //console.log("learning_rate   "+learning_rate);
	     var batch_size = $("#batch_size").val();
	     //console.log("batch_size   "+batch_size);
	     var epochs = $("#epochs").val();
	     //console.log("epochs   "+epochs);
	     var schedule = $("#schedule").val();
	     //console.log("schedule   "+schedule);
	     var weight_decay = $("#weight_decay").val();
	     //console.log("weight_decay   "+weight_decay);
	     var evaluation_epochs = $("#evaluation_epochs").val();
	     //console.log("evaluation_epochs   "+evaluation_epochs);
	     var metric = $("#metric").val();
	     //console.log("metric   "+metric);
	     var gpus = $("#gpus").val();
	     //console.log("gpus   "+gpus);
//	     $("#mixed_precision_training").prop('checked');
	     var mixed_precision_training = 0;
	        if ($('#mixed_precision_training').is(':checked')) 
	        {
	          mixed_precision_training = 1;
	        }
	        else
	        {
	        	mixed_precision_training = 0;
	        }
	        //console.log("mixed_precision_training   "+mixed_precision_training);
	     var mixed_precision_inference = 0;
	        if ($('#mixed_precision_inference').is(':checked')) 
	        {
	          mixed_precision_inference = 1;
	        }
	        else
	        {
	        	mixed_precision_inference = 0;
	        }
	        //console.log("mixed_precision_inference   "+mixed_precision_inference);
	     var seed = $("#seed").val(); 
	        //console.log("seed   "+seed);
	     var logger = $("#logger").val(); 
	        //console.log("logger   "+logger);
	     var probability_threshold = $("#probability_threshold").val();  
	        //console.log("probability_threshold   "+probability_threshold);

	     var backbone = $("#backbone").val();  
	        //console.log("backbone   "+backbone);
	 
	     var number_of_image = $("#number_of_image").val();  
	        //console.log("number_of_image   "+number_of_image);
	     var metric_threshold = $("#metric_threshold").val();  
	        //console.log("metric_threshold   "+metric_threshold);
	     var model_typediv = $("#model_typediv").val();  
	        //console.log("model_typediv   "+model_typediv);
	     var x_min_column = $("#x_min_column").val();  
	        //console.log("x_min_column   "+x_min_column);
	     var x_max_column = $("#x_max_column").val();  
	        //console.log("x_max_column   "+x_max_column);
	     var y_min_column = $("#y_min_column").val();  
	        //console.log("y_min_column   "+y_min_column);
	     var y_max_column = $("#y_max_column").val();  
	        //console.log("y_max_column   "+y_max_column);
	     var rle_mask_column = $("#rle_mask_column").val();  
	        //console.log("rle_mask_column   "+rle_mask_column);
	     var architecture = $("#architecture").val();  
	        //console.log("architecture   "+architecture);
	     var embedding_size=$("#embedding_size").val();
	     
	     var top_k_similar=$("#top_k_similar").val();
	     
	     var arcface_margin=$("#arcface_margin").val();// arcface_margin
	     
		 var arcface_scale=$("#arcface_scale").val(); //arcface_scale
		 
		 var neptune_api=$("#neptune_api").val(); // neptune_api
		 
		 var neptune_project=$("#neptune_project").val();// neptune_project
		 
		 var number_of_workers=$("#number_of_workers").val();// number_of_workers
		 
		 var auto_adjust_batchsize = 0;
	     if ($('#auto_adjust_batchsize').is(':checked')) 
	     {
	    	 auto_adjust_batchsize = 1;
	     }
	     else
	     {
	    	 auto_adjust_batchsize = 0;
	     }
	     
	     var test_time_augmentations = $("#test_time_augmentations").val(); //test_time_augmentations
	     
	     //auto_adjust_batchsize
			 // var metric_threshold=$("#metric_threshold").val(); //metric_threshold
		 ls.push({		   
			
		        'problem_type':problem_type,
		        'grid_search' : grid_search,
		        'experience_level' : experience_level,
		        'validation_strategy' : validation_strategy,
		        'folds' : folds,
		        'data_sample' : data_sample,
		        'image_height' : image_height,
		        'image_width' : image_width,
		        'image_channel' : image_channel,
		        'image_normalization' : image_normalization,
		        'augmentation_strategy' : augmentation_strategy,
		        'custom_train_augmentation' : custom_train_augmentation,
		        'custom_inference_augmentation' : custom_inference_augmentation,
		        'mix_targetmixup' : mix_targetmixup,
		        'mix_probabilitymixup' : mix_probabilitymixup,
		        'mix_image' : mix_image,
		        'pool' : pool,
		        'dropout' : dropout,
		        'loss_function' : loss_function,
		        'optimizer' : optimizer,
		        'learning_rate' : learning_rate,
		        'batch_size' : batch_size,
		        'epochs' : epochs,
		        'schedule' : schedule,
		        'weight_decay' : weight_decay,
		        'evaluation_epochs' : evaluation_epochs,
		        'metric' : metric,
		        'gpus' : gpus,
		        'mixed_precision_training' : mixed_precision_training,
		        'mixed_precision_inference' : mixed_precision_inference,
		        'seed' : seed,
		        'logger' : logger,
		        'probability_threshold' : probability_threshold,
		        'backbone' : backbone,
		        'number_of_image' : number_of_image,
		        'metric_threshold' : metric_threshold,
		        'model_typediv' : model_typediv,
		        'x_min_column' : x_min_column,
		        'x_max_column' : x_max_column,
		        'y_min_column' : y_min_column,
		        'y_max_column' : y_max_column,
		        'rle_mask_column' : rle_mask_column,
		        'architecture' : architecture,
		        'embedding_size' : embedding_size,
			'top_k_similar' : top_k_similar,
			'arcface_margin' : arcface_margin,
			'arcface_scale' : arcface_scale,
			'neptune_api' : neptune_api,
			'neptune_project' : neptune_project,
			'number_of_workers' : number_of_workers,
			'auto_adjust_batchsize' : auto_adjust_batchsize,
			'test_time_augmentations' : test_time_augmentations					 
		        });
		 
		  varData.push(ls);
         //console.log("varData :::::::::::",varData);
	     
	    NProgress.start();
	    
	    $.ajax({
	      method : "POST",
	      url : "/cafe-bot/api/modelCVNew",     
	      data : {
	    	    fileid : $("#property_name").val(),
				componentid : $("#shape_id").val(),
				id : $("#txtFilterID").val(),
				prevcomponentid : $("#prevcomponentid").val(),
		        chkLocal : chkLocal,
		        ftpserverid : ftpserverid,
		        projectid :pid,
		        txtModel :txtModel,
	        //chkappend :chkappend,
	        //appendfileid : appendfileid,
		        publish:publish,
		        ddlFieldimageid: $("#ddlFieldimage option:selected").val(),
		        ddlFieldlabelid: $("#ddlFieldlabel option:selected").val(),
		        ddlFieldimagetext: $("#ddlFieldimage").data("kendoDropDownList").text(),
		        ddlFieldlabeltext: $("#ddlFieldlabel").data("kendoDropDownList").text(),
		        var_data : JSON.stringify(varData)
	    }
	    }).success(function(result) {
	    	
	    	isSuccess=1;
			NProgress.done(true);
			console.log("result---"+result);
			if (result =="" || result =="0")
			{
				$("#btnDBExecute").notify("Not Saved!","error");
				SetJsonSaved();
				//SetJson();
			}
			else 
			{
				$("#executeicon").show();
				$("#btnDBExecute").notify("Success!","success");
				$("#btnDBExecute").attr("disabled", true);
				//SetJson();
				setJsonafterSave();
				getFilterData();
			}
			

		}).error(function() {
			NProgress.done(true);
			$("#btnDBExecute").notify("Error!","error");
		});
	      
	  }
	  


	function btnClick_Predict() 
	  {
	    
	    
	     var pid = getParam("id");
	       if (pid ==0 || pid =="")
	       {
	         $("#btnDBExecute").notify("No Project found!","error");
	         return;
	       }
	    var isSuccess=0;
	    var ddlModelPlatformType = $("#ddlModelPlatformType").val(); 
	    
	    if ($("#ddlModelPlatformType").val() == "" || $("#ddlModelPlatformType").val() =="--select--"  || $("#ddlModelPlatformType").val() == null || $("#ddlModelPlatformType").val() =="null")
	    {
	      $("#ddlModelPlatformType").notify("Please select model platform type!","info");
	      return;
	    }
	    
	    
	    var ddlModelPlatform = $("#ddlModelPlatform").val();
	    
	    if ($("#ddlModelPlatform").val() == "" || $("#ddlModelPlatform").val() =="--select--"  || $("#ddlModelPlatform").val() == null || $("#ddlModelPlatform").val() =="null")
	    {
	      $("#ddlModelPlatform").notify("Please select model platform !","info");
	      return;
	    }
	    
	     var varData = [];
	     var ls = [];
	     var problem_type =$("#problem_type").val();
//	     console.log("problem_type   "+problem_type);
	     var grid_search = $("#grid_search").val();
	     //console.log("grid_search   "+grid_search);
	     var experience_level = $("#experience_level").val();
	     //console.log("experience_level   "+experience_level);
	     var validation_strategy = $("#validation_strategy").val();
	     //console.log("validation_strategy   "+validation_strategy);
//	     var folds = $("#folds").val(); 
	     var options_folds = document.getElementById('folds').selectedOptions;
		 	var folds = Array.from(options_folds).map(({ value }) => value);
	     //console.log("folds   "+folds);
	     var data_sample = $("#data_sample").val();  
	     //console.log("data_sample   "+data_sample);
	     var image_height = $("#image_height").val(); 
	     //console.log("image_height   "+image_height);
	     var image_width = $("#image_width").val(); 
	     //console.log("image_width   "+image_width);
	     var image_channel = $("#image_channel").val();
	     //console.log("image_channel   "+image_channel);
	     var image_normalization = $("#image_normalization").val(); 
	     //console.log("image_normalization   "+image_normalization);
	     var augmentation_strategy = $("#augmentation_strategy").val(); 
	     //console.log("augmentation_strategy   "+augmentation_strategy);
	     var custom_train_augmentation = $("#custom_train_augmentation").val();    
	     //console.log("custom_train_augmentation   "+custom_train_augmentation);
	     var custom_inference_augmentation = $("#custom_inference_augmentation").val();
	     //console.log("custom_inference_augmentation   "+custom_inference_augmentation);
	     var mix_targetmixup = $("#mix_targetmixup").val(); 
	     //console.log("mix_targetmixup   "+mix_targetmixup);
	     var mix_probabilitymixup = $("#mix_probabilitymixup").val();
	     //console.log("mix_probabilitymixup   "+mix_probabilitymixup);
	     var mix_image = $("#mix_image").val();   
	     //console.log("mix_image   "+mix_image);
	     var pool = $("#pool").val();  
	     //console.log("pool   "+pool);
	     var dropout = $("#dropout").val();   
	     //console.log("dropout   "+dropout);
	     var loss_function = $("#loss_function").val();  
	     //console.log("loss_function   "+loss_function);
	     var optimizer = $("#optimizer").val();
	     //console.log("optimizer   "+optimizer);
	     var learning_rate = $("#learning_rate").val();
	     //console.log("learning_rate   "+learning_rate);
	     var batch_size = $("#batch_size").val();
	     //console.log("batch_size   "+batch_size);
	     var epochs = $("#epochs").val();
	     //console.log("epochs   "+epochs);
	     var schedule = $("#schedule").val();
	     //console.log("schedule   "+schedule);
	     var weight_decay = $("#weight_decay").val();
	     //console.log("weight_decay   "+weight_decay);
	     var evaluation_epochs = $("#evaluation_epochs").val();
	     //console.log("evaluation_epochs   "+evaluation_epochs);
	     var metric = $("#metric").val();
	     //console.log("metric   "+metric);
//	     var gpus = $("#gpus").val();
	     var options_gpus = document.getElementById('gpus').selectedOptions;
		 var gpus = Array.from(options_gpus).map(({ value }) => value);
	     //console.log("gpus   "+gpus);
//	     $("#mixed_precision_training").prop('checked');
	     var mixed_precision_training = 0;
	        if ($('#mixed_precision_training').is(':checked')) 
	        {
	          mixed_precision_training = 1;
	        }
	        else
	        {
	        	mixed_precision_training = 0;
	        }
	        //console.log("mixed_precision_training   "+mixed_precision_training);
	     var mixed_precision_inference = 0;
	        if ($('#mixed_precision_inference').is(':checked')) 
	        {
	          mixed_precision_inference = 1;
	        }
	        else
	        {
	        	mixed_precision_inference = 0;
	        }
	        //console.log("mixed_precision_inference   "+mixed_precision_inference);
	     var seed = $("#seed").val(); 
	        //console.log("seed   "+seed);
	     var logger = $("#logger").val(); 
	        //console.log("logger   "+logger);
	     var probability_threshold = $("#probability_threshold").val();  
	        //console.log("probability_threshold   "+probability_threshold);

	     var backbone = $("#backbone").val();  
	        //console.log("backbone   "+backbone);
	 
	     var number_of_image = $("#number_of_image").val();  
	        //console.log("number_of_image   "+number_of_image);
	     var metric_threshold = $("#metric_threshold").val();  
	        //console.log("metric_threshold   "+metric_threshold);
	     var model_typediv = $("#model_typediv").val();  
	        //console.log("model_typediv   "+model_typediv);
	     var x_min_column = $("#x_min_column").val();  
	        //console.log("x_min_column   "+x_min_column);
	     var x_max_column = $("#x_max_column").val();  
	        //console.log("x_max_column   "+x_max_column);
	     var y_min_column = $("#y_min_column").val();  
	        //console.log("y_min_column   "+y_min_column);
	     var y_max_column = $("#y_max_column").val();  
	        //console.log("y_max_column   "+y_max_column);
	     var rle_mask_column = $("#rle_mask_column").val();  
	        //console.log("rle_mask_column   "+rle_mask_column);
	     var architecture = $("#architecture").val();  
	        //console.log("architecture   "+architecture);
	     var embedding_size=$("#embedding_size").val();
	     
	     var top_k_similar=$("#top_k_similar").val();
	     
	     var arcface_margin=$("#arcface_margin").val();// arcface_margin
	     
		 var arcface_scale=$("#arcface_scale").val(); //arcface_scale
		 
		 var neptune_api=$("#neptune_api").val(); // neptune_api
		 
		 var neptune_project=$("#neptune_project").val();// neptune_project
		 
		 var number_of_workers=$("#number_of_workers").val();// number_of_workers
		 
		 var auto_adjust_batchsize = 0;
	         if ($('#auto_adjust_batchsize').is(':checked')) 
		     {
		    	 auto_adjust_batchsize = 1;
		     }
		     else
		     {
		    	 auto_adjust_batchsize = 0;
		     }
	     
//	     var test_time_augmentations = $("#test_time_augmentations").val(); //test_time_augmentations
	       //new variables-----------
	     var options_test_time_augmentations = document.getElementById('test_time_augmentations').selectedOptions;
		 var test_time_augmentations = Array.from(options_test_time_augmentations).map(({ value }) => value);
	     var pretrained = $("#pretrained").val();// pretrained
	     var mix_concentration = $("#mix_concentration").val();// mix_concentration
	     
	     
	   
	     
	     if(grid_search == "No")
	    	 {
	    	 ls.push({		   
	    			
	 	        'problem_type':problem_type,
	 	        'grid_search' : grid_search,
	 	        'experience_level' : experience_level,
	 	        'validation_strategy' : validation_strategy,
	 	        'folds' : folds,
	 	        'data_sample' : data_sample,
	 	        'image_height' : image_height,
	 	        'image_width' : image_width,
	 	        'image_channel' : image_channel,
	 	        'image_normalization' : image_normalization,
	 	        'augmentation_strategy' : augmentation_strategy,
	 	        'custom_train_augmentation' : custom_train_augmentation,
	 	        'custom_inference_augmentation' : custom_inference_augmentation,
	 	        'mix_targetmixup' : mix_targetmixup,
	 	        'mix_probabilitymixup' : mix_probabilitymixup,
	 	        'mix_image' : mix_image,
	 	        'pool' : pool,
	 	        'dropout' : dropout,
	 	        'loss_function' : loss_function,
	 	        'optimizer' : optimizer,
	 	        'learning_rate' : learning_rate,
	 	        'batch_size' : batch_size,
	 	        'epochs' : epochs,
	 	        'schedule' : schedule,
	 	        'weight_decay' : weight_decay,
	 	        'evaluation_epochs' : evaluation_epochs,
	 	        'metric' : metric,
	 	        'gpus' : gpus,
	 	        'mixed_precision_training' : mixed_precision_training,
	 	        'mixed_precision_inference' : mixed_precision_inference,
	 	        'seed' : seed,
	 	        'logger' : logger,
	 	        'probability_threshold' : probability_threshold,
	 	        'backbone' : backbone,
	 	        'number_of_image' : number_of_image,
	 			'metric_threshold' : metric_threshold,
	 	        'model_typediv' : model_typediv,
	 	        'x_min_column' : x_min_column,
	 	        'x_max_column' : x_max_column,
	 	        'y_min_column' : y_min_column,
	 	        'y_max_column' : y_max_column,
	 	        'rle_mask_column' : rle_mask_column,
	 	        'architecture' : architecture,
	 	        'embedding_size' : embedding_size,
	 			'top_k_similar' : top_k_similar,
	 			'arcface_margin' : arcface_margin,
	 			'arcface_scale' : arcface_scale,
	 			'neptune_api' : neptune_api,
	 			'neptune_project' : neptune_project,
	 			'number_of_workers' : number_of_workers,
	 			'auto_adjust_batchsize' : auto_adjust_batchsize,
	 			'test_time_augmentations' : test_time_augmentations,
	 			'pretrained' : pretrained,
	 			'mix_concentration' : mix_concentration
	 	        });
	    	 }
	     else
	    	 {
	    	 
	    	  
	         //new variables-----------
	    	    var options_augmentation_strategy_ = document.getElementById('augmentation_strategy_').selectedOptions;
	    	 	var values_augmentation_strategy_ = Array.from(options_augmentation_strategy_).map(({ value }) => value);
//	    	 	console.log("########### values_augmentation_strategy_:::::"+values_augmentation_strategy_);
//	    	 	if($('#grid_search').val()) 
	    	 	var options_mix_image_ = document.getElementById('mix_image_').selectedOptions;
	    	 	var values_mix_image_ = Array.from(options_mix_image_).map(({ value }) => value);
//	    	 	console.log("########### values_mix_image_:::::"+values_mix_image_);
	    	 	
	    	 	var options_mix_targetmixup_ = document.getElementById('mix_targetmixup_').selectedOptions;
	    	 	var values_mix_targetmixup_ = Array.from(options_mix_targetmixup_).map(({ value }) => value);
//	    	 	console.log("########### values_mix_targetmixup_:::"+values_mix_targetmixup_);
	    	 	
	    	 	var options_backbone_ = document.getElementById('backbone_').selectedOptions;
	    	 	var values_backbone_ = Array.from(options_backbone_).map(({ value }) => value);
//	    	 	console.log("########### values_backbone_::::::"+values_backbone_);
	    	 	
	    	 	var options_pool_ = document.getElementById('pool_').selectedOptions;
	    	 	var values_pool_ = Array.from(options_pool_).map(({ value }) => value);
//	    	 	console.log("########### values_pool_:::::::"+values_pool_);
	    	 	
	    	 	var options_pretrained_ = document.getElementById('pretrained_').selectedOptions;
	    	 	var values_pretrained_ = Array.from(options_pretrained_).map(({ value }) => value);
//	    	 	console.log("########### values_pretrained_::::::::::"+values_pretrained_);

	    	 	var options_architecture_ = document.getElementById('architecture_').selectedOptions;
	    	 	var values_architecture_ = Array.from(options_architecture_).map(({ value }) => value);
//	    	 	console.log("########### values_architecture_::::::"+values_architecture_);
	    	 	
	    	 	var options_embedding_size_ = document.getElementById('embedding_size_').selectedOptions;
	    	 	var values_embedding_size_ = Array.from(options_embedding_size_).map(({ value }) => value);
//	    	 	console.log("########### values_embedding_size_:::: "+values_embedding_size_);
	    	 	
	    	 	var options_dropout_ = document.getElementById('dropout_').selectedOptions;
	    	 	var values_dropout_ = Array.from(options_dropout_).map(({ value }) => value);
//	    	 	console.log("########### values_dropout_::::: "+values_dropout_);
	    	 	
	    	 	var options_loss_function_ = document.getElementById('loss_function_').selectedOptions;
	    	 	var values_loss_function_ = Array.from(options_loss_function_).map(({ value }) => value);
//	    	 	console.log("########### values_loss_function_:::::: "+values_loss_function_);
	    	 	
	    	 	var options_optimizer_ = document.getElementById('optimizer_').selectedOptions;
	    	 	var values_optimizer_ = Array.from(options_optimizer_).map(({ value }) => value);
//	    	 	console.log("########### values_optimizer_::::::: "+values_optimizer_);
	    	 	
	    	 	var options_learning_rate_ = document.getElementById('learning_rate_').selectedOptions;
	    	 	var values_learning_rate_ = Array.from(options_learning_rate_).map(({ value }) => value);
//	    	 	console.log("########### values_learning_rate_::::: "+values_learning_rate_);
	    	 	
	    	 	var options_batch_size_ = document.getElementById('batch_size_').selectedOptions;
	    	 	var values_batch_size_ = Array.from(options_batch_size_).map(({ value }) => value);
//	    	 	console.log("########### values_batch_size_::::: "+values_batch_size_);
	    	 	
	    	 	var options_epochs_ = document.getElementById('epochs_').selectedOptions;
	    	 	var values_epochs_ = Array.from(options_epochs_).map(({ value }) => value);
//	    	 	console.log("########### values_epochs_::::: "+values_epochs_);
	    	 	
	    	 	var options_schedule_ = document.getElementById('schedule_').selectedOptions;
	    	 	var values_schedule_ = Array.from(options_schedule_).map(({ value }) => value);
//	    	 	console.log("########### values_schedule_:::::::: "+values_schedule_);
	    	 	
	    	 	var options_weight_decay_ = document.getElementById('weight_decay_').selectedOptions;
	    	 	var values_weight_decay_ = Array.from(options_weight_decay_).map(({ value }) => value);
//	    	 	console.log("########### values_weight_decay_:::: "+values_weight_decay_);
	    	 	
	    	 	var options_test_time_augmentations = document.getElementById('test_time_augmentations').selectedOptions;
	    	 	var values_test_time_augmentations = Array.from(options_test_time_augmentations).map(({ value }) => value);
//	    	 	console.log("########### values_test_time_augmentations::::::: "+values_test_time_augmentations);
	    	 	
	    	 	var options_gpus = document.getElementById('gpus').selectedOptions;
	    	 	var values_gpus = Array.from(options_gpus).map(({ value }) => value);
//	    	 	console.log("########### values_gpus:::::: "+values_gpus);
	    	 	
	    	 	var options_mix_concentration_ = document.getElementById('mix_concentration_').selectedOptions;
	    	 	var values_mix_concentration_ = Array.from(options_mix_concentration_).map(({ value }) => value);
//	    	 	console.log("########### values_mix_concentration_:::::: "+values_mix_concentration_);
	    	 	
	    	 	var options_mix_probabilitymixup_ = document.getElementById('mix_probabilitymixup_').selectedOptions;
	    	 	var values_mix_probabilitymixup_ = Array.from(options_mix_probabilitymixup_).map(({ value }) => value);
//	    	 	console.log("########### values_mix_probabilitymixup_:::::: "+values_mix_probabilitymixup_);
	    	 	
	    	 	var options_arcface_margin_ = document.getElementById('arcface_margin_').selectedOptions;
	    	 	var values_arcface_margin_ = Array.from(options_arcface_margin_).map(({ value }) => value);
//	    	 	console.log("########### values_arcface_margin_::::::: "+values_arcface_margin_);
	    	 	
	    	 	var options_arcface_scale_ = document.getElementById('arcface_scale_').selectedOptions;
	    	 	var values_arcface_scale_ = Array.from(options_arcface_scale_).map(({ value }) => value);
//	    	 	console.log("########### values_arcface_scale_:::::: "+values_arcface_scale_);
	    	 	
	    	 	var options_folds = document.getElementById('folds').selectedOptions;
	    	 	var values_folds = Array.from(options_folds).map(({ value }) => value);
//	    	 	console.log("########### values_folds:::::: "+values_folds);
	    	 	
	    	 	var options_image_normalization_ = document.getElementById('image_normalization_').selectedOptions;
	    	 	var values_image_normalization_ = Array.from(options_image_normalization_).map(({ value }) => value);
//	    	 	console.log("########### values_image_normalization_:::::: "+values_image_normalization_);
	    	 
	    	 
	    	 
	    	 ls.push({		   
	 			
	  	        'problem_type':problem_type,
	  	        'grid_search' : grid_search,
	  	        'experience_level' : experience_level,
	  	        'validation_strategy' : validation_strategy,  	        
	  	        'data_sample' : data_sample,
	  	        'image_height' : image_height,
	  	        'image_width' : image_width,
	  	        'image_channel' : image_channel,  	         	        
	  	        'custom_train_augmentation' : custom_train_augmentation,
	  	        'custom_inference_augmentation' : custom_inference_augmentation, 	        
	  	        'evaluation_epochs' : evaluation_epochs,
	  	        'metric' : metric,  	        
	  	        'mixed_precision_training' : mixed_precision_training,
	  	        'mixed_precision_inference' : mixed_precision_inference,
	  	        'seed' : seed,
	  	        'logger' : logger,
	  	        'probability_threshold' : probability_threshold,  	        
	  	        'number_of_image' : number_of_image,
	  			'metric_threshold' : metric_threshold,
	  	        'model_typediv' : model_typediv,
	  	        'x_min_column' : x_min_column,
	  	        'x_max_column' : x_max_column,
	  	        'y_min_column' : y_min_column,
	  	        'y_max_column' : y_max_column,
	  	        'rle_mask_column' : rle_mask_column,  	         	        
	  			'top_k_similar' : top_k_similar,  			
	  			'neptune_api' : neptune_api,
	  			'neptune_project' : neptune_project,
	  			'number_of_workers' : number_of_workers,
	  			'auto_adjust_batchsize' : auto_adjust_batchsize,  				 			
	  			'values_augmentation_strategy_' : values_augmentation_strategy_,
	  			'values_mix_image_' : values_mix_image_,
	  			'values_mix_targetmixup_' : values_mix_targetmixup_,
	  			'values_backbone_' : values_backbone_,
	  			'values_pool_' : values_pool_,
	  			'values_pretrained_' : values_pretrained_,
	  			'values_architecture_' : values_architecture_,
	  			'values_embedding_size_' : values_embedding_size_,
	  			'values_dropout_' : values_dropout_,
	  			'values_loss_function_' : values_loss_function_,
	  			'values_optimizer_' : values_optimizer_,
	  			'values_learning_rate_' : values_learning_rate_,
	  			'values_batch_size_' : values_batch_size_,
	  			'values_epochs_' : values_epochs_,
	  			'values_schedule_' : values_schedule_,
	  			'values_weight_decay_' : values_weight_decay_,
	  			'values_test_time_augmentations' : values_test_time_augmentations,
	  			'values_gpus' : values_gpus,
	  			'values_mix_concentration_' : values_mix_concentration_,
	  			'values_mix_probabilitymixup_' : values_mix_probabilitymixup_,
	  			'values_arcface_margin_' : values_arcface_margin_,
	  			'values_arcface_scale_' : values_arcface_scale_,
	  			'values_folds' : values_folds,
	  			'values_image_normalization_' : values_image_normalization_ 		
	  	        });
	    	 }
	    
		
		 
		        varData.push(ls);
	            console.log("varData :::::::::::###",varData);
	    
	     
	     
	     
	    debugger;
	    NProgress.start();
	    
	    $.ajax({
	      method : "POST",
	      url : "/cafe-bot/api/modelpredict",     
	      data : {
	    	  fileid : $("#property_name").val(),
	          componentid : $("#shape_id").val(),
	          id : $("#txtFilterID").val(),
	          prevcomponentid : $("#prevcomponentid").val(),
	          mojofileid : $("#ddlModel").data("kendoDropDownList").value(),
	          modeltype : ddlModelPlatform,
	          chkLocal : chkLocal,
	          ftpserverid : ftpserverid,
	          chkappend :chkappend,
	          appendfileid : appendfileid,
	          projectid :pid,
	          txtModel :txtModel,
	    	  var_data : JSON.stringify(varData)
	    }
	    }).success(function(result) {
	      isSuccess=1;
	      NProgress.done(true);
	     
	      console.log("result--"+result);
	      if (result =="0")
	      {
	        $("#btnDBExecute").notify("Something went wrong,try gain!","error");
	         setJsonafterSave();
	      }
	      else 
	      { 
	        
	        $("#btnDBExecute").notify("Success!","success");
	        $("#btnDBExecute").attr("disabled", true);
	        
	        $("#executeicon").show();
	        //SetJson();
	        $("#table_name").val(txtModel).change();
	      
	        setJsonafterSave();
	        getFilterData();
	      }   
	    
	    }).error(function() {
	      NProgress.done(true);
	      $("#btnDBExecute").notify("Error!","error");
	    });
	      
	  }


	  
	  
$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    var links = this.el.find('.article-title');
    links.on('click', {
      el: this.el,
      multiple: this.multiple
    }, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
    $this = $(this),
    $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

  }
  var accordion = new Accordion($('.cb-accordion-container'), false);

  $(".content-entry:nth-child(1)").addClass("open").show();
  $(".cb-accordion-content:nth-child(1)").css("display","block");

  /*$(".content-entry:nth-child(2)").addClass("open").show();
  $(".cb-accordion-content:nth-child(2)").css("display","block");

  $(".content-entry:nth-child(3)").addClass("open").show();
  $(".cb-accordion-content:nth-child(3)").css("display","block");

  $(".content-entry:nth-child(4)").addClass("open").show();
  $(".cb-accordion-content:nth-child(4)").css("display","block");

    $(".content-entry:nth-child(5)").addClass("open").show();
  $(".cb-accordion-content:nth-child(5)").css("display","block");

    $(".content-entry:nth-child(6)").addClass("open").show();
  $(".cb-accordion-content:nth-child(6)").css("display","block");

  $(".content-entry:nth-child(7)").addClass("open").show();
  $(".cb-accordion-content:nth-child(7)").css("display","block");

  $(".content-entry:nth-child(8)").addClass("open").show();
  $(".cb-accordion-content:nth-child(8)").css("display","block");*/
});

function onchangeGridsearch(){
 if($("#grid_search").val() == "custom grid" && $("#experience_level").val() == "Expert"){
  if($("#problem_type").val() == "Image Regression"){
    $(".cb-hide-show").show();
    $("#image_normalizationdiv").hide();
    $("#augmentation_strategydiv").hide();
    $("#mix_imagediv").hide();
    $("#pooldiv").hide();
    $("#pretrained_select").hide();
    $("#dropoutdiv").hide();
    $("#loss_functiondiv").hide();
    $("#optimizerdiv").hide();
    $("#learning_ratediv").hide();
    $("#schedulediv").hide();
    $("#epochsdiv").hide();
    $("#batch_sizediv").hide();
    $("#weight_decaydiv").hide();
    $("#backbonediv").hide();
    $("#architecturediv").hide();
    $("#embedding_sizediv").hide();
    $("#arcfacemargindiv").hide();
    $("#mix_targetmixupdiv").hide();
    $("#mix_probabilitymixupdiv").hide();
    $("#mix_concentrationdiv").hide();
    $("#mix_concentrationdiv_").hide();
	$("#architecturediv_").hide();
	$("#embedding_sizediv_").hide();
  }
  else if($("#problem_type").val() == "Image Classification"){
    $(".cb-hide-show").show();
    $("#image_normalizationdiv").hide();
    $("#image_normalizationdiv_").show();
    $("#augmentation_strategydiv_").show();
    $("#augmentation_strategydiv").hide();
    $("#mix_imagediv").hide();
    $("#pooldiv").hide();
    $("#pretrained_select").hide();
    $("#dropoutdiv").hide();
    $("#loss_functiondiv").hide();
    $("#optimizerdiv").hide();
    $("#learning_ratediv").hide();
    $("#schedulediv").hide();
    $("#epochsdiv").hide();
    $("#batch_sizediv").hide();
    $("#weight_decaydiv").hide();
    $("#backbonediv").hide();
    $("#architecturediv").hide();
    $("#embedding_sizediv").hide();
    $("#embedding_sizediv_").hide();
    $("#arcfacemargindiv").hide();
    $("#mix_targetmixupdiv").hide();
    $("#mix_probabilitymixupdiv").hide();
    $("#mix_concentrationdiv").hide();
    $("#mix_concentrationdiv_").hide();
	$("#architecturediv_").hide();
	$("#embedding_sizediv_").hide();
  }
  else if($("#problem_type").val() == "Image Object Detection"){
    // alert("Image Object Detection")
    $(".cb-hide-show").show();
    $("#image_normalizationdiv").hide();
    $("#augmentation_strategydiv").hide();
    $("#mix_imagediv").hide();
    $("#pooldiv").hide();
    $("#pretrained_select").hide();
    $("#dropoutdiv").hide();
    $("#loss_functiondiv").hide();
    $("#optimizerdiv").hide();
    $("#learning_ratediv").hide();
    $("#schedulediv").hide();
    $("#epochsdiv").hide();
    $("#batch_sizediv").hide();
    $("#weight_decaydiv").hide();
    $("#backbonediv").hide();
    $("#architecturediv").hide();
    $("#embedding_sizediv").hide();
    $("#arcfacemargindiv").hide();
    $("#mix_targetmixupdiv").hide();
    $("#mix_probabilitymixupdiv").hide();
    $("#mix_concentrationdiv").hide();
    $("#pooldiv_").hide();
    $("#architecturediv_").hide();
    $("#embedding_sizediv_").hide();
    $("#dropoutdiv_").hide();
    $("#loss_functiondiv_").hide();
    $("#archfacediv").hide();
    $("#archfacediv_").hide();
    $("#number_of_imagesdiv").hide();
    $("#archfacediv_").hide();
	$("#architecturediv_").hide();
	$("#embedding_sizediv_").hide();
	$("#mix_targetmixupdiv_").hide();
	imageReg_cutmix_();
  }
  else if($("#problem_type").val() == "Image Semantic Segmentation"){
    $(".cb-hide-show").show();
    $("#image_normalizationdiv").hide();
    $("#augmentation_strategydiv").hide();
    $("#mix_imagediv").hide();
    $("#pooldiv").hide();
    $("#pretrained_select").hide();
    $("#dropoutdiv").hide();
    $("#dropoutdiv_").hide();
    $("#loss_functiondiv").hide();
    $("#optimizerdiv").hide();
    $("#learning_ratediv").hide();
    $("#schedulediv").hide();
    $("#epochsdiv").hide();
    $("#batch_sizediv").hide();
    $("#weight_decaydiv").hide();
    $("#backbonediv").hide();
    $("#architecturediv").hide();
    $("#embedding_sizediv").hide();
    $("#embedding_sizediv_").hide();
    $("#dropoutdiv_").hide();
    $("#arcfacemargindiv").hide();
    $("#mix_targetmixupdiv").hide();
    $("#mix_probabilitymixupdiv").hide();
    $("#mix_concentrationdiv").hide();
    $("#mix_concentrationdiv_").hide();
    $("#archfacediv_").hide();
    $("#pooldiv_").hide();
	$("#embedding_sizediv_").hide();
	$("#image_channeldiv").show();
  }
  else if($("#problem_type").val() == "Image Instance Segmentation"){
    $(".cb-hide-show").show();
    $("#image_normalizationdiv").hide();
    $("#augmentation_strategydiv").hide();
    $("#mix_imagediv").hide();
    $("#pooldiv").hide();
    $("#pretrained_select").hide();
    $("#dropoutdiv").hide();
    $("#loss_functiondiv").hide();
    $("#optimizerdiv").hide();
    $("#learning_ratediv").hide();
    $("#schedulediv").hide();
    $("#epochsdiv").hide();
    $("#batch_sizediv").hide();
    $("#weight_decaydiv").hide();
    $("#backbonediv").hide();
    $("#architecturediv").hide();
    $("#embedding_sizediv").hide();
    $("#arcfacemargindiv").hide();
    $("#mix_targetmixupdiv").hide();
    $("#mix_probabilitymixupdiv").hide();
    $("#mix_concentrationdiv").hide();
    $("#mix_concentrationdiv_").hide();
    $("#archfacediv_").hide();
	$("#embedding_sizediv_").hide();
  }
  else if($("#problem_type").val() == "Image Metric Learning"){
    $(".cb-hide-show").show();
    $("#image_normalizationdiv").hide();
    $("#augmentation_strategydiv").hide();
    $("#mix_imagediv").hide();
    $("#pooldiv").hide();
    $("#pretrained_select").hide();
    $("#dropoutdiv").hide();
    $("#loss_functiondiv").hide();
    $("#optimizerdiv").hide();
    $("#learning_ratediv").hide();
    $("#schedulediv").hide();
    $("#epochsdiv").hide();
    $("#batch_sizediv").hide();
    $("#weight_decaydiv").hide();
    $("#backbonediv").hide();
    $("#architecturediv").hide();
    $("#embedding_sizediv").hide();
    $("#arcfacemargindiv").hide();
    $("#mix_targetmixupdiv").hide();
    $("#mix_probabilitymixupdiv").hide();
    $("#mix_concentrationdiv").hide();
    $("#mixtargetmixupdiv_").hide();
    $("#mix_concentrationdiv_").hide();
    $("#mix_imagediv_").hide();
    $("#mixtargetmixupdiv_multiple").hide();
	$("#architecturediv_").hide();
  }
}
 else{
  //alert("hi")
  $(".cb-hide-show").hide();
onchangeType();
 }
}