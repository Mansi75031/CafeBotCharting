
//temperature slider start
var temperature = document.getElementById("temperature");
var temperature_value = document.getElementById("temperature_value");

temperature_value.innerHTML = temperature.value;

// This function input current value in span and add progress colour in range
temperature.oninput = function() {

 // output.innerHTML = this.value;
  document.getElementById("temperature_value").value = this.value; 
  var value = (this.value-this.min)/(this.max-this.min)*100;  
  this.style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
}

$("#temperature_value").keyup(function()

	{	
	
	var setval= $("#temperature_value").val();
  var value1= $("#temperature").val();

  var setvalmax= document.getElementById("temperature_value").max;//$("input[max]").attr('max');
  var setvalmin= document.getElementById("temperature_value").min;//$("input[min]").attr('min');
  var value = (setval-setvalmin)/(setvalmax-setvalmin)*100;
	 if(setval <= 0)
	 {
    $("#temperature_value").val(0);
		 $("#temperature").val(0).change();  
     document.getElementById("temperature").style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
 
	  }
    
    else if(setval >= 1){
      $("#temperature_value").val(1);
      $("#temperature").val(1).change();
      document.getElementById("temperature").style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
 
  }
    else{
      $("#temperature_value").val(setval);
      $("#temperature").val(setval).change();
     document.getElementById("temperature").style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
 
    }
  });
//temperature slider start end


//maximum_length slider start
var maximum_length = document.getElementById("maximum_length");
var maximum_lengthvalue = document.getElementById("maximum_lengthvalue");

maximum_lengthvalue.innerHTML = maximum_length.value;

// This function input current value in span and add progress colour in range
maximum_length.oninput = function() {

 // output.innerHTML = this.value;
  document.getElementById("maximum_lengthvalue").value = this.value; 
  var value = (this.value-this.min)/(this.max-this.min)*100;  
  this.style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
}

$("#maximum_lengthvalue").keyup(function()

	{	
	
	var setval= $("#maximum_lengthvalue").val();

  var setvalmax= document.getElementById("maximum_lengthvalue").max;//$("input[max]").attr('max');
  var setvalmin= document.getElementById("maximum_lengthvalue").min;//$("input[min]").attr('min');
  var value = (setval-setvalmin)/(setvalmax-setvalmin)*100;
	 if(setval <= 1)
	 {
    $("#maximum_lengthvalue").val(1);
		 $("#maximum_length").val(1).change();  
     document.getElementById("maximum_length").style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
 
	  }
    
    else if(setval >= 4000){
      $("#maximum_lengthvalue").val(4000);
      $("#maximum_length").val(4000).change();
      document.getElementById("maximum_length").style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
 
  }
    else{
      $("#maximum_lengthvalue").val(setval);
      $("#maximum_length").val(setval).change();
     document.getElementById("maximum_length").style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
 
    }
  });
//maximum_length slider start end

//top_p slider start
var top_p = document.getElementById("top_p");
var topp_value = document.getElementById("topp_value");

topp_value.innerHTML = top_p.value;

// This function input current value in span and add progress colour in range
top_p.oninput = function() {

 // output.innerHTML = this.value;
  document.getElementById("topp_value").value = this.value; 
  var value = (this.value-this.min)/(this.max-this.min)*100;  
  this.style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
}

$("#topp_value").keyup(function()

	{	
	
	var setval= $("#topp_value").val();

  var setvalmax= document.getElementById("topp_value").max;//$("input[max]").attr('max');
  var setvalmin= document.getElementById("topp_value").min;//$("input[min]").attr('min');
  var value = (setval-setvalmin)/(setvalmax-setvalmin)*100;
	 if(setval <= 0)
	 {
    $("#topp_value").val(0);
		 $("#top_p").val(0).change();  
     document.getElementById("top_p").style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
 
	  }
    
    else if(setval >= 1){
      $("#topp_value").val(1);
      $("#top_p").val(1).change();
      document.getElementById("top_p").style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
 
  }
    else{
      $("#topp_value").val(setval);
      $("#top_p").val(setval).change();
     document.getElementById("top_p").style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
 
    }
  });
//top_p slider start end
	
//freqpenalty_compress slider start
var freqpenalty_compress = document.getElementById("freqpenalty_compress");
var freqpenalty_compress_value = document.getElementById("freqpenalty_compress_value");

freqpenalty_compress_value.innerHTML = freqpenalty_compress.value;

// This function input current value in span and add progress colour in range
freqpenalty_compress.oninput = function() {

 // output.innerHTML = this.value;
  document.getElementById("freqpenalty_compress_value").value = this.value; 
  var value = (this.value-this.min)/(this.max-this.min)*100;  
  this.style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
}

$("#freqpenalty_compress_value").keyup(function()

	{	
	
	var setval= $("#freqpenalty_compress_value").val();

  var setvalmax= document.getElementById("freqpenalty_compress_value").max;//$("input[max]").attr('max');
  var setvalmin= document.getElementById("freqpenalty_compress_value").min;//$("input[min]").attr('min');
  var value = (setval-setvalmin)/(setvalmax-setvalmin)*100;
	 if(setval <= 0)
	 {
    $("#freqpenalty_compress_value").val(0);
		 $("#freqpenalty_compress").val(0).change();  
     document.getElementById("freqpenalty_compress").style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
 
	  }
    
    else if(setval >= 2){
      $("#freqpenalty_compress_value").val(2);
      $("#freqpenalty_compress").val(2).change();
      document.getElementById("freqpenalty_compress").style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
 
  }
    else{
      $("#freqpenalty_compress_value").val(setval);
      $("#freqpenalty_compress").val(setval).change();
     document.getElementById("freqpenalty_compress").style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
 
    }
  });
//freqpenalty_compress slider start end
	

	//prespenalty_compress slider start
var prespenalty_compress = document.getElementById("prespenalty_compress");
var prespenalty_compress_value = document.getElementById("prespenalty_compress_value");

prespenalty_compress_value.innerHTML = prespenalty_compress.value;

// This function input current value in span and add progress colour in range
prespenalty_compress.oninput = function() {

 // output.innerHTML = this.value;
  document.getElementById("prespenalty_compress_value").value = this.value; 
  var value = (this.value-this.min)/(this.max-this.min)*100;  
  this.style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
}

$("#prespenalty_compress_value").keyup(function()

	{	
	
	var setval= $("#prespenalty_compress_value").val();

  var setvalmax= document.getElementById("prespenalty_compress_value").max;//$("input[max]").attr('max');
  var setvalmin= document.getElementById("prespenalty_compress_value").min;//$("input[min]").attr('min');
  var value = (setval-setvalmin)/(setvalmax-setvalmin)*100;
	 if(setval <= 0)
	 {
    $("#prespenalty_compress_value").val(0);
		 $("#prespenalty_compress").val(0).change();  
     document.getElementById("prespenalty_compress").style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
 
	  }
    
    else if(setval >= 2){
      $("#prespenalty_compress_value").val(2);
      $("#prespenalty_compress").val(2).change();
      document.getElementById("prespenalty_compress").style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
 
  }
    else{
      $("#prespenalty_compress_value").val(setval);
      $("#prespenalty_compress").val(setval).change();
     document.getElementById("prespenalty_compress").style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
 
    }
  });
//prespenalty_compress slider start end

	//bestof_compress slider start
    var bestof_compress = document.getElementById("bestof_compress");
    var bestof_compress_value = document.getElementById("bestof_compress_value");
    
    bestof_compress_value.innerHTML = bestof_compress.value;
    
    // This function input current value in span and add progress colour in range
    bestof_compress.oninput = function() {
    
     // output.innerHTML = this.value;
      document.getElementById("bestof_compress_value").value = this.value; 
      var value = (this.value-this.min)/(this.max-this.min)*100;  
      this.style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
    }
    
    $("#bestof_compress_value").keyup(function()
    
        {	
        
        var setval= $("#bestof_compress_value").val();
    
      var setvalmax= document.getElementById("bestof_compress_value").max;//$("input[max]").attr('max');
      var setvalmin= document.getElementById("bestof_compress_value").min;//$("input[min]").attr('min');
      var value = (setval-setvalmin)/(setvalmax-setvalmin)*100;
         if(setval <= 0)
         {
        $("#bestof_compress_value").val(0);
             $("#bestof_compress").val(0).change();  
         document.getElementById("bestof_compress").style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
     
          }
        
        else if(setval >= 2){
          $("#bestof_compress_value").val(2);
          $("#bestof_compress").val(2).change();
          document.getElementById("bestof_compress").style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
     
      }
        else{
          $("#bestof_compress_value").val(setval);
          $("#bestof_compress").val(setval).change();
         document.getElementById("bestof_compress").style.background = 'linear-gradient(to right, #3d71d9 0%, #3d71d9 ' + value + '%, #ccccdc4d ' + value + '%, #ccccdc4d 100%)'
     
        }
      });
	//bestof_compress slider end




function getImagevalue(){
	$("#rotate").val();
	$("#blurring").val();
	$("input[name='flip']:checked").val();
	$("#contrast").val();
	$("#brightness").val();
	$("#compress").val();
	$("#resize").val().is(":checked");
	$("input[name='px']:checked").val();
	$("#resize_width").val();
	$("#resize_height").val();    
	$("#aspect_ratio").val().is(":checked");

}


function flipShow()
{

	if($("#resize").is(":checked"))   
		$("#horizontal_show").show();
	else
		$("#horizontal_show").hide();
}


//---------------------------------------------------------------------------------


var tableMedia = "";
var imgSrc="";
var isimage =0;
$(document).ready(function() {
			//	var url = new URL(window.location.href);
			//	console.log(para);

		//alert("start!");
	
	
/*	----------------------*/
	


	
	
	
	

	
	    
	 $("#vertical_11").kendoSplitter({
	        panes: [
	            { collapsible: true, size: "40%" },
	            { collapsible: true, size: "60%" }
	        ]
	    });

    $("#imagepage").hide();
    
			var filter;
			var id=$("#property_name").val();
			
			if ($("#shape_name").val() == "InputShape") {
				filter = "table";
			}
		
			tableMedia = $('#mediaData').DataTable();
		     
			$('#mediaData tr').off('click');

			
			 $('#mediaData').on('click', 'tr', function () {
				 console.log("clicked");   
				 var data = tableMedia.row( this ).data();
		
				 console.log("data",data);
				 
				 var p_1 = "";
				 var p_2 = "";
				 
				 for (var k = 0;k < data.length; k++)
				 {
					 
					 var pathcolum = $('#mediaData thead tr th div').eq(k).html().trim() ;
					 console.log("pathcolum::::"+pathcolum);
					 if (pathcolum.toUpperCase() == "PATH")
					 {
						 p_2 = data[k];
						 break;
					 }
					 
				 }
				 
				 
				 if (p_2 !="")
			        {
					 	console.log("p_2:::::"+p_2);
					 	getMediaimage_IMG(p_2);
			        }

			    } );
			
			
			getFilterData();
			
			
			setTimeout(() => {
				
				$("#rotatedegreewise").kendoDropDownList();
				$("#blurringmethod").kendoDropDownList();
				$("#resize_method").kendoDropDownList();
			
			}, 300);
			

		});

function getFilterData(){
	var data = {};
	data["fileid"] = $("#property_name").val();
	data["componentid"] = $("#shape_id").val();
	$.ajax({
		type : "GET",
		contentType : "application/json",
		url : "/cafe-bot/menu/filterproperties/readImageAugmentation?fileid="+$("#property_name").val()
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

				var resize =0;
				var aspect_ratio =0;
				var pxper = "";
				var width ="";
				var height ="";
				
				var kwidth="";
				var kheight="";
				var ksize ="";
				var sigmacolor="";
				var sigmaspace="";
				var bluringmethod ="";
				
				var brightness =0;
				var contrast = 0 ;
				var compress = 0;
				
				
				$.each(result, function() {
					$.each(this, function(k, v) {
						if(k=="id")
						{
							$("#txtFilterID").val(v).change();
						}
						else if(k=="modeltype")
						{
									  //editor.setValue(v);
									  $("#mode").val(v).change();	 // col name
									}
									else if(k=="modelselect")
									{		
										 $("#modelselect").val(v).change();
									}
							/*	  else if(k=="cronexpression")
								  {		
									  v = v.trim();
									  if (v != "")
							            {
										  $("#init").val(v).change();//init
							            }
							        }*/



							        else if(k=="temperature")
							        {		
							        	$("#temperature").val(v).change();
							        }
							        									   
									   else if(k=="temperature")
									   {		
										   console.log("temperature::::"+v);
										   temperature = v;
									   	$("#temperature").val(v).change();
									   	$("#temperature_value").val(v).change();
									   	
									   }
									   else if(k=="maximum_length")
									   {		
									   	$("#maximum_length").val(v).change();
									   	$("#maximum_lengthvalue").val(v).change();
									   	maximum_length = v;
									   }
									  
									   else if(k=="compress")
									   {		
									   	$("#top_p").val(v).change();
									   	$("#topp_value").text(v);
									   	compress = v;
									   }
									 
									
									else if(k=="resize_method")
									{		
									       $("#resize_method").val(v).change();//kmax
									   }

									   else if(k=="resize_width")
									   {		
										   width = v;
									       $("#resize_width").val(v).change();//kmax
									   }

									   else if(k=="resize_height")
									   {		
										   height =v ;
									      $("#resize_height").val(v).change();//kmax
										}
									 
									else if(k=="modcolname")
									  {		 //alert("v:::::"+v);
											$("#ddlFieldSequence").data('kendoDropDownList').text(v);
									  }

						
						
									
						

						});
				});


						
							
						 
						 

						}
						else 
						{

						}
					}
				});
}



function setSlidervalue(contrast,brightness,compress)
{

console.log("contrast______"+contrast);
    if(contrast == -1)
    {
      console.log("None:::"+contrast);
      $("#contrast_value").hide();
      $("#contrast_content").html("None");
      
    }
    else if(contrast == -0.5){
    	$("#contrast").val(0);
    	 $("#contrast_value").html(0);
    }
    else if(contrast == 0 )
    {
      console.log("No Contrast:::"+contrast);
      $("#contrast_value").show();
      $("#contrast_content").html("Low Contrast");
    }
    else if(contrast ==1 )
    {
      console.log("No Contrast:::"+contrast);
      $("#contrast_value").show();
      $("#contrast_content").html("No Contrast");
    }
    else if( contrast >1 && contrast <=3)
    {
      console.log("Higher:::"+contrast);
      $("#contrast_value").show();
      $("#contrast_content").html("Higher");
    }


if(brightness < -127)
    {
    	//alert("hi");
      console.log("None:::"+brightness);
      $("#brightness_value").hide();
      $("#brightness_value").html(-128);
      $("#brightness_content").show();
      $("#brightness_content").html("None");
    }
    else if(brightness < 0)
    {
      console.log("None:::"+brightness);
      $("#brightness_value").show();
      $("#brightness_content").hide();
    }
    
    /*if(brightness == -1)
    {
      console.log("None:::"+brightness);
      $("#brightness_content").html("None");
      
    }*/
    else if(brightness == 0)
    {
      console.log("No Contrast:::"+brightness);
      $("#brightness_value").show();
      $("#brightness_content").show();
      $("#brightness_content").html("No Brightness");
    }
    
     else if( brightness > 0  )
    {
      console.log("None:::"+brightness);
      $("#brightness_value").show();
      $("#brightness_content").hide();
    }


 if(compress == -1)
    {
      console.log("None:::"+compress);
      $("#compress_value").hide();
      $("#compress_content").html("None");
      
    }
    
    else if(compress < 50)
    {
      console.log("Worse:::"+compress);
      $("#compress_value").show();
      $("#compress_content").html("Worse");
    }
    
    else if( compress > 50)
    {
      console.log("Better:::"+compress);
      $("#compress_value").show();
      $("#compress_content").html("Better");
    }

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

						/*if ($("#ksize_width").val() == "")
						{
							$("#btnDBExecute").notify("Please enter the value","error");
							return;
						}
						if ($("#ksize_height").val() == "")
						{
							$("#btnDBExecute").notify("Please enter the value","error");
							return;
						}*/

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

						

						/*if ($("#ddlField").data("kendoDropDownList").text() == "" || $("#ddlField").data("kendoDropDownList").text() =="--select--")
						{
							$("#ddlField").notify("Please select target column!","info");
							return;
						}*/
 
						
						var textcolid = $("#ddlField").data("kendoDropDownList").text()

						//var mode = $("#mode").val();
						//console.log("mode::::"+mode);

						if ($("#mode").val() == "" || $("#mode").val() =="--select--")
						{
							$("#btnDBExecute").notify("Please select mode value!","info");
							return;
						}
						if ($("#modelselect").val() == "" || $("#modelselect").val() =="--select--")
						{
							$("#btnDBExecute").notify("Please select model value!","info");
							return;
						}
						
					
						
						if ($("#ddlFieldSequence").val() == "" || $("#ddlFieldSequence").val() =="--select--"  || $("#ddlFieldSequence").val() == null || $("#ddlFieldSequence").val() =="null")
						{
							$("#btnDBExecute").notify("Please select stop sequence field!","info");
							return;
						}
						
						 var fieldlist = $("#ddlFieldSequence").val() +"";
							
							
							var multi = $("#ddlFieldSequence").getKendoMultiSelect(),
							 multiDataItems = multi.dataItems(),
							  selectedField = [];
									   
						 for(var i = 0; i < multiDataItems.length; i += 1) 
						 {
							 var currentField = multiDataItems[i];
							selectedField.push(currentField.columnname); 
						}
									   
						console.log("selectedField"+selectedField);
						selectedField = selectedField+"";


			NProgress.start();
			$.ajax({
				method : "POST",
				url : "/cafe-bot/api/executeImageAugmentation",
				data : {
					fileid :$("#property_name").val(),
					componentid :	$("#shape_id").val(),
					init : $("#init").val(),				
					id: $("#txtFilterID").val(),
					tablename:$("#tablename").val(),
					publish:publish,
					projectid :pid,
					prevcomponentid: $("#prevcomponentid").val(),
					mode:$("#mode").val(),
								modelselect:$("#modelselect").val(),
								temperature:$("#temperature").val(),
								maximum_length:$("#maximum_length").val(),
								top_p:$("#top_p").val(),
								freqpenalty_compress:$("#freqpenalty_compress").val(),
								prespenalty_compress:$("#prespenalty_compress").val(),
								bestof_compress:$("#bestof_compress").val(),
								starttext:$("#starttext").val(),
								probabilities:$("#probabilities").val(),
								restarttext:$("#restarttext").val(),
								fieldlist:fieldlist,
								selectedField:selectedField,
				}
			}).success(function(result) {
							//alert("Success!-"+result);
							//$('#dresult').text(result);
							$("#executeicon").show();
							
							//$("#btnReset").attr("disabled", true);
							
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

						

						/*if ($("#ddlField").data("kendoDropDownList").text() == "" || $("#ddlField").data("kendoDropDownList").text() =="--select--")
						{
							$("#ddlField").notify("Please select target column!","info");
							return;
						}*/
 
						
						var textcolid = $("#ddlField").data("kendoDropDownList").text()

						//var mode = $("#mode").val();
						//console.log("mode::::"+mode);

						if ($("#mode").val() == "" || $("#mode").val() =="--select--")
						{
							$("#btnDBExecute").notify("Please select mode value!","info");
							return;
						}
						if ($("#modelselect").val() == "" || $("#modelselect").val() =="--select--")
						{
							$("#btnDBExecute").notify("Please select model value!","info");
							return;
						}
						
					
						
						if ($("#ddlFieldSequence").val() == "" || $("#ddlFieldSequence").val() =="--select--"  || $("#ddlFieldSequence").val() == null || $("#ddlFieldSequence").val() =="null")
						{
							$("#btnDBExecute").notify("Please select stop sequence field!","info");
							return;
						}
						
						 var fieldlist = $("#ddlFieldSequence").val() +"";
							
							
							var multi = $("#ddlFieldSequence").getKendoMultiSelect(),
							 multiDataItems = multi.dataItems(),
							  selectedField = [];
									   
						 for(var i = 0; i < multiDataItems.length; i += 1) 
						 {
							 var currentField = multiDataItems[i];
							selectedField.push(currentField.columnname); 
						}
									   
						console.log("selectedField"+selectedField);
						selectedField = selectedField+"";
						
		
						
						
						
						
						
						
						
						
					
						NProgress.start();

						$.ajax({
							method : "POST",
							url : "/cafe-bot/menu/filterproperties/updateImageaugmentation",
							data : {
								fileid :	$("#property_name").val(),
								componentid :	$("#shape_id").val(),
								modeltype : $("#tablename").val(),
								id: $("#txtFilterID").val(),
								prevcomponentid: $("#prevcomponentid").val(),
								projectid :pid,
								mode:$("#mode").val(),
								modelselect:$("#modelselect").val(),
								temperature:$("#temperature").val(),
								maximum_length:$("#maximum_length").val(),
								top_p:$("#top_p").val(),
								freqpenalty_compress:$("#freqpenalty_compress").val(),
								prespenalty_compress:$("#prespenalty_compress").val(),
								bestof_compress:$("#bestof_compress").val(),
								starttext:$("#starttext").val(),
								probabilities:$("#probabilities").val(),
								restarttext:$("#restarttext").val(),
								fieldlist:fieldlist,
								selectedField:selectedField,
								
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
							$("#executeicon").notify("Error!","error");
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






    $("#resize_width").on('blur', function(e) {

	   	if($("#resize_width").val() == "")
    	{
    		 $("#resize_height").val("");
    	   	 $("#resize_height").attr("disabled", false);
    		
    	}
    
	 if ($("#resize").prop("checked")==true)
	 {
      		console.log("resize value");
        if ($("#px").prop("checked")==true)
        {
        	///alert("1");
        
        	if ($("#aspect_ratio").prop( "checked")==true)
            {
        		//alert("2");
            	//alert("aspect ratio checked")
            	console.log("aspect ratio");

            	if($("#resize_width").val() == "" && $("#resize_height").val() == "" )
            	{
            		$("#resize_width").notify("Please fill width value!","info");
            		//alert("fill any one input value");
            		$("#resize_width").attr({"max" : 1680, "min" : 1});
            		$("#resize_height").attr({"max" : 1050, "min" : 1});
            		///return;
            	}
            	else if($("#resize_width").val() != "" && $("#resize_height").val() == "" )
            	{
            		$("#resize_width").attr({"max" : 1680, "min" : 1});
            		$("#resize_height").attr({"max" : 1050, "min" : 1});
            		$("#resize_width").val();
            		$("#resize_height").attr('disabled',true);
            		//return;
            	}
            	else if($("#resize_width").val() == "" && $("#resize_height").val() != "" )
            	{
            		$("#resize_width").attr({"max" : 1680, "min" : 1});
            		$("#resize_height").attr({"max" : 1050, "min" : 1});
            		$("#resize_width").attr('disabled',true);
            		$("#resize_height").val();
                  //$("#aspect_ratio:checked").val();
                  //return;
              }
            	
            	
            	
            	if( parseInt($("#resize_width").val()) < 100)
              	{
              		 $("#resize_width").val(100);
              		$("#resize_height").attr('disabled',true);
              	}
            	else if(parseInt($("#resize_width").val()) > 1680)
             	{
            		 $("#resize_width").val(1680);
            		 $("#resize_height").attr('disabled',true);
            	}
             	else if(parseInt($("#resize_width").val()) <= 1680 || parseInt($("#resize_width").val() >=1 ))
             	{
             		$("#resize_width").val(parseInt($("#resize_width").val()));
             		$("#resize_height").attr('disabled',true);
             		return;
             	}
            	else if($("#resize_width").val() =="")
            	{
            		//$("#resize_width").val(parseInt($("#resize_width").val()));
            		$("#resize_height").attr('disabled',false);
            	}
            	
            	 else 
                 {
               	  $("#resize_width").val(parseInt($("#resize_width").val()));
                 }
         		$("#resize_height").val();
          		
            	
          }              
          else
          {
          
        	  //alert("aspect ratio not checked")
          	console.log("aspect ratio not checked");
    	
          }
        	
        	
        	if( parseInt(  $("#resize_width").val()) < 100)
          	{
          		 $("#resize_width").val(100);
          		 
          		if ($("#aspect_ratio").prop( "checked")==true)
          		 {
          				$("#resize_height").attr('disabled',true);
          		 }
          	}
        	else if(parseInt($("#resize_width").val()) > 1680)
         	{
        		 $("#resize_width").val(1680);
           		
        		 if ($("#aspect_ratio").prop( "checked")==true)
         		 {
         				$("#resize_height").attr('disabled',true);
         		 }
        	}
        	else 
        	{
        		 $("#resize_width").val(parseInt($("#resize_width").val()));
        	}
        	
        	
      }
      else if($("#per").prop( "checked")==true)
      {
      	//alert("per value"+$("#per").val());

      	if ($("#aspect_ratio").prop( "checked")==true)
      	{
      		//alert("aspect ratio checked")
      		console.log("aspect ratio checked");
      		
      		if( parseInt(  $("#resize_width").val()) < 50)
          	{
          		 $("#resize_width").val(50);
          		$("#resize_height").attr('disabled',true);
          		return;
          	}
          	else if(parseInt($("#resize_width").val()) > 150)
         	{
         		 $("#resize_width").val(150);
         		$("#resize_height").attr('disabled',true);
         		return;
         	}

          	else if(parseInt($("#resize_width").val()) <= 150 || parseInt($("#resize_width").val() >=50 ))
         	{
          		$("#resize_width").val(parseInt($("#resize_width").val()));
         		$("#resize_height").attr('disabled',true);
         		return;
         	}
      		
      		
      		if($("#resize_width").val() == "" && $("#resize_height").val() == "" ){
      			
          		$("#resize_width").notify("Please fill width value!","info");
      			$("#resize_width").attr({"max" : 150, "min" : 50});
      			$("#resize_height").attr({"max" : 150, "min" : 50});
                  // $("#resize_width").val();
                  //  // $("#resize_height").attr('disabled',true);
                  //return;
              }
              else if($("#resize_width").val() != "" && $("#resize_height").val() == "" ){
              	
              	$("#resize_width").attr({"max" : 150, "min" : 50});
              	$("#resize_height").attr({"max" : 150, "min" : 50});
              	$("#resize_width").val();
              	//$("#resize_height").val($("#resize_width").val()).attr('disabled',true);
                  //$("#aspect_ratio:checked").val();
                 // return;
              }
              else if($("#resize_width").val() == "" && $("#resize_height").val() != "" ){
              	$("#resize_width").attr({"max" : 150, "min" : 50});
              	$("#resize_height").attr({"max" : 150, "min" : 50});
              	// $("#resize_width").val($("#resize_height").val()).attr('disabled',true);
              	$("#resize_height").val();
                  //$("#aspect_ratio:checked").val();
                 // return;
              }
      		 	
              else
              {
            	  if( $("#resize_width").val()==""){
            		  $("#resize_width").val($("#resize_width").val());
            	  }
            	  else{
            		  $("#resize_width").val(parseInt($("#resize_width").val()));
            	  }
              }
      		//$("#resize_height").attr('disabled',true);
     		$("#resize_height").val();
      		

          }
          else
          {
          	//alert("aspect ratio not checked")
          
        	  console.log("aspect ratio not checked");
         	
          }
      	
      	if( parseInt(  $("#resize_width").val()) < 50)
      	{
      		 $("#resize_width").val(50);
      	}
      	else if(parseInt($("#resize_width").val()) > 150)
     	{
     		 $("#resize_width").val(150);
     	}
      	else 
    	{
    		 $("#resize_width").val(parseInt($("#resize_width").val()));
    	}
      	
      }  

  }
  else 
  {
  	 //alert("false");
  }
	 

	 
	 
	 

});



	$("#resize_height").on('blur', function(e) {

			
		if($("#resize_height").val() == "")
    	{
    		 $("#resize_width").val("");
    	   	 $("#resize_width").attr("disabled", false);
    		
    	}
    	
		
		 if ($("#resize").prop("checked")==true)
		 {
      						console.log("resize value");
      	
      		if ($("#px").prop("checked")==true)
      		{
            
      			
      			//alert("px value"+$("#px").val());
            // console.log($("#resize_width").val());
            //$("#resize_width").val($(this).val());
            if ($("#aspect_ratio").prop( "checked")==true)
            {
            	//alert("aspect ratio checked")
            	console.log("aspect ratio");

            	
            	
            	
            	console.log("val-------------"+parseInt($("#resize_height").val()));
            	 if( parseInt(  $("#resize_height").val()) < 100)
               	{
               		 $("#resize_height").val(100);
               		$("#resize_width").attr('disabled',true);
               	}
                  else if(parseInt($("#resize_height").val()) > 1050)
               	{
              		 $("#resize_height").val(1050);
              		$("#resize_width").attr('disabled',true);
              	}
                  else if(parseInt($("#resize_height").val()) <= 1050 || parseInt($("#resize_height").val() >=1 ))
               	{
                	  $("#resize_height").val(parseInt($("#resize_height").val()));
               		$("#resize_width").attr('disabled',true);
               		return;
               	}
                  else 
                  {
                	  $("#resize_height").val(parseInt($("#resize_height").val()));
                  } 
            	 
             	//$("#resize_width").attr('disabled',true);
          		$("#resize_width").val();
             	 
            	
            	
            	if($("#resize_width").val() == "" && $("#resize_height").val() == "" ){
            		$("#resize_height").notify("Please fill height value!","info");
            		//alert("fill any one input value");
            		$("#resize_width").attr({"max" : 1680, "min" : 1});
            		$("#resize_height").attr({"max" : 1050, "min" : 1});
            		//return;
            	}
            	else if($("#resize_width").val() != "" && $("#resize_height").val() == "" ){
            		$("#resize_width").attr({"max" : 1680, "min" : 1});
            		$("#resize_height").attr({"max" : 1050, "min" : 1});
            		$("#resize_width").val();
            		$("#resize_height").attr('disabled',true);
            		//return;
            	}
            	else if($("#resize_width").val() == "" && $("#resize_height").val() != "" ){
            		$("#resize_width").attr({"max" : 1680, "min" : 1});
            		$("#resize_height").attr({"max" : 1050, "min" : 1});
            		$("#resize_width").attr('disabled',true);
            		$("#resize_height").val();
                  //$("#aspect_ratio:checked").val();
                  //return;
              }
            	
            	
            	 
            	
          }              
          else{
          	//alert("aspect ratio not checked")
          	console.log("aspect ratio not checked");

          }
            
            
            if( parseInt(  $("#resize_height").val()) < 100)
         	{
         		 $("#resize_height").val(100);
         		if ($("#aspect_ratio").prop( "checked")==true)
        		 {
         				$("#resize_width").attr('disabled',true);
         		 }
         	}
            else if(parseInt($("#resize_height").val()) > 1050)
         	{
        		 $("#resize_height").val(1050);
        		 
        		 if ($("#aspect_ratio").prop( "checked")==true)
         		 {
        			 $("#resize_width").attr('disabled',true);
         		 }
        	}
            else 
        	{
        		 $("#resize_height").val(parseInt($("#resize_height").val()));
        	}
            
      }
      else if($("#per").prop( "checked")==true)
      {
      	//alert("per value"+$("#per").val());

      	if ($("#aspect_ratio").prop( "checked")==true)
      	{
      		//alert("aspect ratio checked")
      		console.log("aspect ratio checked");

    		if( parseInt(  $("#resize_height").val()) < 50)
         	{
         		 $("#resize_height").val(50);
         		$("#resize_width").attr('disabled',true);
         	}
          	else if(parseInt($("#resize_height").val()) > 150)
         	{
         		 $("#resize_height").val(150);
         		$("#resize_width").attr('disabled',true);
         	}
            else if(parseInt($("#resize_height").val()) <= 1050 || parseInt($("#resize_height").val() >=1 ))
           	{
            	$("#resize_height").val(parseInt($("#resize_height").val()));
           		$("#resize_width").attr('disabled',true);
           		return;
           	}
            else 
            {
          	  $("#resize_height").val(parseInt($("#resize_height").val()));
            } 

      		//$("#resize_width").attr('disabled',true);
     		
      		
      		
      		if($("#resize_width").val() == "" && $("#resize_height").val() == "" ){
      			
          		$("#resize_height").notify("Please fill height value!","info");
      			$("#resize_width").attr({"max" : 150, "min" : 50});
      			$("#resize_height").attr({"max" : 150, "min" : 50});
                  // $("#resize_width").val();
                  //  // $("#resize_height").attr('disabled',true);
                  //return;
              }
              else if($("#resize_width").val() != "" && $("#resize_height").val() == "" ){
              	$("#resize_width").attr({"max" : 150, "min" : 50});
              	$("#resize_height").attr({"max" : 150, "min" : 50});
              	$("#resize_width").val();
              	// $("#resize_height").val($("#resize_width").val()).attr('disabled',true);
                  //$("#aspect_ratio:checked").val();
                  //return;
              }
              else if($("#resize_width").val() == "" && $("#resize_height").val() != "" ){
              	$("#resize_width").attr({"max" : 150, "min" : 50});
              	$("#resize_height").attr({"max" : 150, "min" : 50});
              	 $("#resize_width").attr('disabled',true);
              	$("#resize_height").val();
                  //$("#aspect_ratio:checked").val();
                  //return;
              }
      		
      
      		
      		
          }
          else{
          	//alert("aspect ratio not checked")
          	console.log("aspect ratio not checked");

          }
      	
      	if( parseInt(  $("#resize_height").val()) < 50)
     	{
     		 $("#resize_height").val(50);
     		if ($("#aspect_ratio").prop( "checked")==true)
    		 {
     		$("#resize_width").attr('disabled',true);
    		 }
     	}
      	else if(parseInt($("#resize_height").val()) > 150)
     	{
     		 $("#resize_height").val(150);
     		if ($("#aspect_ratio").prop( "checked")==true)
    		 {
     		$("#resize_width").attr('disabled',true);
    		 }
     	}
      	else 
    	{
    		 $("#resize_height").val(parseInt($("#resize_height").val()));
    	}
      	
      }  

  }
  else 
  {
	 //alert("false");
  }
		 
		 

	});


	/*	function togglescr(){
			$('#divpython').toggleClass('fullscreen');
		}*/




 function ischeckedfn_resize(value)
{
	 //alert("value:::::"+value);
 if(value=="px")
 {
	 $("#resize_width").val("");
	 $("#resize_height").val("");
	 $("#resize_width").attr("disabled", false);
	 $("#resize_height").attr("disabled", false);
	 
	 $("#resize_method").val("cv2.INTER_AREA");
	 $("#aspect_ratio").prop( "checked", false );
	 
 }
 else if(value=="per")
 {
	 $("#resize_width").val("");
	 $("#resize_height").val("");
	 $("#resize_width").attr("disabled", false);
	 $("#resize_height").attr("disabled", false);
	 
	 $("#resize_method").val("cv2.INTER_AREA");
	 $("#aspect_ratio").prop( "checked", false );
 }

}


function aspectratioChange()
{
	
	if($("#aspect_ratio").prop( "checked")==false)
	{
		 //$("#resize_width").val("");
		 //$("#resize_height").val("");
		 $("#resize_width").attr("disabled", false);
		 $("#resize_height").attr("disabled", false);
		
	}
	else if($("#aspect_ratio").prop( "checked")== true)
	{
        
		if ($("#resize_width").val() =="" && $("#resize_height").val() =="" )
        {
        	
        }
        else  if ($("#resize_width").val() !="")
        {
        	 //$("#resize_width").val("");
   		     $("#resize_height").val("");
        	 $("#resize_height").attr("disabled", true);
        }
        else  if ($("#resize_height").val() !="" )
        {
        	 //$("#resize_width").val("");
   		     $("#resize_width").val("");
        	 $("#resize_width").attr("disabled", true);
        }
       
		
		
	}
	
	
}
////-----image effect slider-----////



function onchangealider() {

	var valcont = $("#contrast").val();

	var calbright = $("#brightness").val();

	//var greyval = $("#grey").prop('checked', true);



	if (valcont >=0 && valcont <1)
	{

	console.log("valcont true:::::"+valcont);

	  var per = parseFloat((parseFloat(valcont)/7)*100);

	  var perbright = parseFloat((parseFloat(calbright)/508)*100);

	  console.log("perc:::::::"+per);

	  console.log("perb:::::::"+per);

	  var contrast = (1000*(per)/100)*2;
	  console.log("contrast vl::"+contrast);

	  var brightness = (1000*(perbright)/100)*2;
	  console.log("brightness vl::"+brightness);

	    //var brightness =  100/2000;
	   

	    if (contrast <=0)
	    {
	      contrast =100;
	    }

	    if (brightness <=0)
	    {
	      brightness =100;
	    }


	    if($("#grey").is(':checked')){
	     
	         $("#image_aug").css("-webkit-filter", "blur(0px)" +"brightness(" + brightness + "%)" + "contrast(" + contrast + "%)" + " grayscale(1)");
	      }
	      else{
	       $("#image_aug").css("-webkit-filter", "blur(0px)" +"brightness(" + brightness + "%)" + "contrast(" + contrast + "%)" + " grayscale(0)");
	      }


	  }
	  else if (valcont ==1)
	{

	console.log("valcont val1:::::"+valcont);

	  var per = parseFloat((parseFloat(valcont)/7)*100);

	  var perbright = parseFloat((parseFloat(calbright)/508)*100);

	  console.log("perc:::::::"+per);

	  console.log("perb:::::::"+per);

	  var contrast =100// (1000*(per)/100)*2;
	  console.log("contrast vl::"+contrast);

	  var brightness = (1000*(perbright)/100)*2;
	  console.log("brightness vl::"+brightness);

	    //var brightness =  100/2000;
	   

	    if (contrast ==1)
	    {
	      contrast =100;
	    }

	    if (brightness ==0)
	    {
	      brightness =100;
	    }


	    if($("#grey").is(':checked')){
	     
	         $("#image_aug").css("-webkit-filter", "blur(0px)" +"brightness(" + brightness + "%)" + "contrast(" + contrast + "%)" + " grayscale(1)");
	      }
	      else{
	       $("#image_aug").css("-webkit-filter", "blur(0px)" +"brightness(" + brightness + "%)" + "contrast(" + contrast + "%)" + " grayscale(0)");
	      }


	  }
	  else{
	    //alert("cal");

	     console.log("valcont false:::::"+valcont);
	   
	    var per = parseFloat((parseFloat(valcont)/7)*100);  //contrast

	    var perbright = parseFloat((parseFloat(calbright)/508)*100);

	    console.log("perc:::::::"+per);

	    console.log("perb:::::::"+per);

	    var contrast =  (1000*(per)/100)*2;
	    console.log("contrast vl::"+contrast);

	    var brightness = (1000*(perbright)/100)*2;
	    console.log("brightness vl::"+brightness);

	    //var brightness =  100/2000;
	   

	    if (contrast <=0)
	    {
	      contrast =100;
	    }

	    if (brightness <=0)
	    {
	      brightness =100;
	    }


	    if($("#grey").is(':checked')){
	     
	         $("#image_aug").css("-webkit-filter", "blur(0px)" +"brightness(" + brightness + "%)" + "contrast(" + contrast + "%)" + " grayscale(1)");
	      }
	      else{
	       $("#image_aug").css("-webkit-filter", "blur(0px)" +"brightness(" + brightness + "%)" + "contrast(" + contrast + "%)" + " grayscale(0)");
	      }



	  }
	}




function onchangealider__() {

	console.log("inside onchangealider:::::");
	
 var valcont = $("#contrast").val();

 var calbright = $("#brightness").val();

 if (valcont >=0)
 {


  var per = parseFloat((parseFloat(valcont)/7)*100);

  var perbright = parseFloat((parseFloat(calbright)/508)*100);

  console.log("perc:::::::"+per);

  console.log("perb:::::::"+per);

  var contrast = (1000*(per)/100)*2;
  console.log("contrast vl::"+contrast);

  var brightness = (1000*(perbright)/100)*2;
  console.log("brightness vl::"+brightness);

    //var brightness =  100/2000;
    

    if (contrast <=0)
    {
      contrast =100;
    }

    if (brightness <=0)
    {
      brightness =100;
    }


    $("#image_aug").css("-webkit-filter", "blur(0px)" +"brightness(" + brightness + "%)" + "contrast(" + contrast + "%)" );


  }
  else{
    //alert("cal");

    
    var per = parseFloat((parseFloat(valcont)/7)*100);

    var perbright = parseFloat((parseFloat(calbright)/508)*100);

    console.log("perc:::::::"+per);

    console.log("perb:::::::"+per);

    var contrast = (1000*(per)/100)*2;
    console.log("contrast vl::"+contrast);

    var brightness = (1000*(perbright)/100)*2;
    console.log("brightness vl::"+brightness);

    //var brightness =  100/2000;
    

    if (contrast <=0)
    {
      contrast =100;
    }

    if (brightness <=0)
    {
      brightness =100;
    }


    $("#image_aug").css("-webkit-filter", "blur(0px)" +"brightness(" + brightness + "%)" + "contrast(" + contrast + "%)" );



  }
}


////rotate



function rotateChange(){
          //alert("rotate");
          //flip value check
          var getflipvalue = $("input[name='flip']:checked").val();
           var flipvalue = "";
          console.log("horizontal::::"+getflipvalue);

          if (document.getElementById("rotate").value == "cv2.cv2.ROTATE_90_CLOCKWISE") {
            if(getflipvalue == "horizontal"){
              console.log("horizontal::::"+getflipvalue);
              //$("#image").css("transform" ,"scaleX(-1)" );
              flipvalue = "scaleX(-1)";
            }
            else if(getflipvalue == "vertical"){
              console.log("vertical::::"+getflipvalue);
               //$("#image").css("transform" ,"scaleY(-1)" );
               flipvalue = "scaleY(-1)";
            }
            else {
              console.log("none::::"+getflipvalue);
               //$("#image").css("transform" ,"none" );
               flipvalue = "";
            }
            $("#image").css("transform", "rotate(90deg)" + ""+flipvalue+"" );
          }
  else if (document.getElementById("rotate").value == "cv2.cv2.ROTATE_180") {
    if(getflipvalue == "horizontal"){
              console.log("horizontal::::"+getflipvalue);
              //$("#image").css("transform" ,"scaleX(-1)" );
              flipvalue = "scaleX(-1)";
            }
            else if(getflipvalue == "vertical"){
              console.log("vertical::::"+getflipvalue);
               //$("#image").css("transform" ,"scaleY(-1)" );
               flipvalue = "scaleY(-1)";
            }
            else {
              console.log("none::::"+getflipvalue);
               //$("#image").css("transform" ,"none" );
               flipvalue = "";
            }
    $("#image").css("transform", "rotate( 180deg )"  + ""+flipvalue+"");
  }
  else if (document.getElementById("rotate").value == "cv2.cv2.ROTATE_90_COUNTERCLOCKWISE") {
    if(getflipvalue == "horizontal"){
              console.log("horizontal::::"+getflipvalue);
              //$("#image").css("transform" ,"scaleX(-1)" );
              flipvalue = "scaleX(-1)";
            }
            else if(getflipvalue == "vertical"){
              console.log("vertical::::"+getflipvalue);
               //$("#image").css("transform" ,"scaleY(-1)" );
               flipvalue = "scaleY(-1)";
            }
            else {
              console.log("none::::"+getflipvalue);
               //$("#image").css("transform" ,"none" );
               flipvalue = "";
            }
    $("#image").css("transform", "rotate(-90deg)" + ""+flipvalue+"" );
  }
  else if (document.getElementById("rotate").value == "0") {
     if(getflipvalue == "horizontal"){
              console.log("horizontal::::"+getflipvalue);
              //$("#image").css("transform" ,"scaleX(-1)" );
              flipvalue = "scaleX(-1)";
            }
            else if(getflipvalue == "vertical"){
              console.log("vertical::::"+getflipvalue);
               //$("#image").css("transform" ,"scaleY(-1)" );
               flipvalue = "scaleY(-1)";
            }
            else {
              console.log("none::::"+getflipvalue);
               //$("#image").css("transform" ,"none" );
               flipvalue = "";
            }
    $("#image").css("transform", "rotate(360deg)"  + ""+flipvalue+"");
  }
}




////----------blurring change method-------/////
  function onChangeblurring(){
  if ($("#blurringmethod").val() == "averaging") {
    $("#blurring_option_div").show(); 
    $("#blur_ksize_height").show();
    $("#width_label").html("Ksize Width");
    $("#height_label").html("Ksize Height");
     $("#ksize_width").val("");
    $("#ksize_height").val("");   
  }  
  else if ($("#blurringmethod").val() == "sharpen") {
    $("#blurring_option_div").hide(); 
  }  
  else if ($("#blurringmethod").val() == "Gaussian Blurring") {
    $("#blurring_option_div").show();
    $("#blur_ksize_height").show();
     $("#width_label").html("Ksize Width");
    $("#height_label").html("Ksize Height");
     $("#ksize_width").val("");
    $("#ksize_height").val("");   
  }
  else if ($("#blurringmethod").val() == "Median Blurring") {
    $("#blurring_option_div").show(); 
    $("#blur_ksize_height").hide();
     $("#width_label").html("Ksize");
     $("#ksize_width").val("");
    $("#ksize_height").val("");   
  }  
  else if ($("#blurringmethod").val() == "Bilateral Blurring") {
    $("#blurring_option_div").show(); 
    $("#blur_ksize_height").show();
     $("#width_label").html("Sigma Color");
    $("#height_label").html("Sigma Space");
     $("#ksize_width").val("");
    $("#ksize_height").val("");   
  } 
  else if ($("#blurringmethod").val() == 0) {
	    $("#blurring_option_div").hide(); 
	    $("#blur_ksize_height").hide();
	    $("#width_label").html("Ksize Width");
	    $("#height_label").html("Ksize Height");
	     $("#ksize_width").val("");
	    $("#ksize_height").val("");   
	  } 
}


$("#ksize_width").on('blur', function(e) {
  var ksizewidth = Math.round(  $("#ksize_width").val());
var blurringval =$("#blurringmethod").val();
    
    if(blurringval == "averaging"){
    if(ksizewidth > 91){
       $("#ksize_width").val(91);
     }
    else if(ksizewidth < 2){
       $("#ksize_width").val(2);      
     } 
     else if(ksizewidth ==""){
      //console.log("Please enter the value");
    	 $("#ksize_width").notify("Please enter the value number!","info");
     }   
    else {
      $("#ksize_width").val(ksizewidth); 
    }
  }
  else if(blurringval == "Gaussian Blurring"){
    if(ksizewidth > 91){
       $("#ksize_width").val(91);
     }
    else if(ksizewidth < 3){
       $("#ksize_width").val(3);      
     }  
    else if(ksizewidth%2 == 0) {
      //alert("Please fill odd number");
    	$("#ksize_width").notify("Please enter odd integer number!","info");
    	$("#ksize_width").val(3); 
     }  
     else if(ksizewidth ==""){
      //console.log("Please enter the value");
    	 $("#ksize_width").notify("Please enter the integer value!","info");
     }  
    else {
      $("#ksize_width").val(ksizewidth); 
    }
  }
   else if(blurringval == "Median Blurring"){
    if(ksizewidth > 91){
       $("#ksize_width").val(91);
     }
    else if(ksizewidth < 1){
       $("#ksize_width").val(1);      
     }  
     else if(ksizewidth%2 == 0) {
      
    	 $("#ksize_width").notify("Please fill odd integer number!","info");
       $("#ksize_width").val(1); 
     } 
     else if(ksizewidth ==""){
    	 $("#ksize_width").notify("Please enter the integer value!","info");
     } 
    else {
      $("#ksize_width").val(ksizewidth); 
    }
  }
  else if(blurringval == "Bilateral Blurring"){
    if(ksizewidth > 255){
       $("#ksize_width").val(255);
     }
    else if(ksizewidth < 50){
       $("#ksize_width").val(50);      
     }  
      else if(ksizewidth ==""){
    	  $("#ksize_width").notify("Please enter the integer value!","info");
     } 
    else {
      $("#ksize_width").val(ksizewidth); 
    }
  }
     
     
});
$("#ksize_height").on('blur', function(e) {
   var ksizeheight = Math.round(  $("#ksize_height").val());
var blurringval =$("#blurringmethod").val();
    
    if(blurringval == "averaging"){
     if(ksizeheight > 91){
       $("#ksize_height").val(91);
     }
    else if(ksizeheight < 2){
       $("#ksize_height").val(2);      
     }
     else if(ksizeheight ==""){
      
      ksizeheight.notify("Please enter the integer value!","info");
     } 
    else {
      $("#ksize_height").val(ksizeheight); 
    }
  }
  else if(blurringval == "Gaussian Blurring"){
    if(ksizeheight > 91){
       $("#ksize_height").val(91);
     }
    else if(ksizeheight < 3){
       $("#ksize_height").val(3);      
     }
      else if(ksizeheight%2 == 0) {
    	  $("#ksize_height").notify("Please fill odd integer number!","info");
       $("#ksize_height").val(3); 
     }  
     else if(ksizeheight ==""){
      
    	 $("#ksize_height").notify("Please enter the integer value!","info");
     }   
    else {
      $("#ksize_height").val(ksizeheight); 
    }
  }
  else if(blurringval == "Bilateral Blurring"){
    if(ksizeheight > 255){
       $("#ksize_height").val(255);
     }
    else if(ksizeheight < 50){
       $("#ksize_height").val(50);      
     }  
      else if(ksizeheight ==""){
     
    	  $("#ksize_height").notify("Please enter the integer value!","info");
     } 
    else {
      $("#ksize_height").val(ksizeheight); 
    }
  }
});


function gobackimg()
{
	 $("#loadImage").hide();
	 $("#imagedivShow").hide();
    $("#imagepage").hide();
  }
function openMedia_image_aug()
{
	 $("#imagepage").show();
	 $("#loadImage").show();
	 
	var  htmlMain =" <img id='imgblr_' class='img-responsive' src='/cafe-bot/resources/images/no_image.png' style='max-width:300px;max-height:300px;filter: invert(0.8);' > ";
		 $("#imagedivShow").html(htmlMain);
	 
	 getMediaData_Img() ;
	 
	 
	 setTimeout(() => 
	 {
		// alert("start!");
		    
		 /*$("#vertical_11").kendoSplitter({
		        panes: [
		            { collapsible: true, size: "50%" },
		            { collapsible: true, size: "50%"}
		        ]
		    });*/

		/*    $("#horizontal_1").kendoSplitter({ //properties and canvas
		        orientation: "vertical",
		        panes: [
		            { collapsible: true, size: "50%" },
		            { collapsible: true, size: "50%"},
		        ]
		    });*/

		
	}, 500);
	 
	 
}


var isimageloadedFlag = 0;


function loadImage()
{

	//alert("imgSrc::::"+imgSrc);

	 if (isimageloadedFlag ==0)
	 {
		 $("#loadImage").notify("Please select atleast one image from table!","info");
		 return;
	 }	
	
	if (isimage == 1)
	 {
		 var htmlMain ="<img id='image_aug'  class='img-responsive' src='"+imgSrc+"'>";
		 $("#image_aug_div").html("");
		 $("#image_aug_div").html(htmlMain);	
		 
	 }
	else 
	 {
	
		 var htmlMain ="<img id='image_aug'  class='img-responsive' src='/cafe-bot/resources/images/no_image.png' style='filter: invert(0.8);'>";
		 $("#image_aug_div").html("");
		 $("#image_aug_div").html(htmlMain);	
	
	 }
	 
	 $("#imagepage").hide();
	  
	 resetAllsettings();
	 
      //getMediaData_Img() ;
}




function getMediaData_Img() 
	{
		
		//$('#mediaData').empty();
		var table = $('#mediaData').DataTable();
	table.clear();
	table.destroy();
	//$('#mediaData tbody').empty();
	$('#mediaData').empty();
		var pageid = 0;
		//alert("pageid--"+pageid);
		var windowdata="";
		var filter="table";		
		var id=$("#property_name").val();
		var compid=$("#prevcomponentid").val();
		
		if ($("#shape_name").val() == "FilterShape"   || $("#shape_name").val() == "SourceShape") 
		{
			var isfalse = $("#isfalse").prop('checked');
  	 	//alert("isschedule---"+isschedule);
  	    if(isfalse ==true)
  	    {
  	    	compid = compid+"false";
  	    }
  	  
		}
		
		if ($("#shape_name").val() == "InputShape") {
			filter = "table";
		}		
		NProgress.start();
		
		var data = {}
		data["fileid"] = id;
		//data["para"] = para;
		data["compID"]= compid;
		
		data["pageid"]= pageid;
		var queryflag = 1;
		var flag=0;
		var url="/cafe-bot/api/JsondataClickHouse";  //testJsondata
		

		console.log("url ---:"+url);
		
		$.ajax({
			type : "POST",
			contentType : "application/json; charset=utf-8",
			//url : "/cafe-bot/menu/foreignkeycolumn/getjsondata",
			url : url,
			data : JSON.stringify(data),
			dataType : 'json',
			success : function(result) 
			{
				console.log("pagedata result----::"+result);
				NProgress.done(true);
				
				if (result =="Process is running")
				{
					$.notify("Process is running!","info");
					return;
				}
				else if(result =="Loading Data")
				{
					$.notify("Loading Data","info");
					return;
				}
				else if (result =="Process Failed!")
				{
					$.notify("Process Failed!","info");
					return;	
				}
				
		
				if (result =="[]")
				{
					$.notify("Loading Data","info");
					return;
				}
				
				var n = result.includes("Error-");
				var m = result.includes("ErrorError");
				
				if (result == "Error-")
				{
					console.log("true ##################");
					n=true;
					$.notify("No Data Found","info");
					return;
				}
				
				if (result == "errorcode-215")
				{
					n=true;
				}
			
				
				if (result == "") 
				{   
					//alert("No Data Found");
						if(filter=="query")	
						{
							$.notify("Query Not Prepared","info");
							return;
						}
						else 
						{
							$.notify("No Data Found!","info");
							return;
						}
					//return;
				}
				else if (n == true   || m == true)
				{
					//console.log("result 2 ---"+result);
					var errorcode = result+"";
					var words = errorcode.split('-');
					if ( words.length > 1) 
					{
						if ( parseInt( words[1]) == 215)
						{
							$.notify("Can not use aggregate function in expression!","info");
							
						}
					}
					else 
					{
						$.notify("No Data Found","info");
						
					}
					
					return;
				}
				if (flag ==0 )
				{
				   flag =1;
				  
				}
				
				var parseJSONResult = result;

	
				if (parseJSONResult != null && parseJSONResult.length > 0) 
				{
					
					$("#mediadatadiv").show();
					

					rowDataSet =[];
					dynamicColumns=[];
					console.log("in paga data jsonresult");
		
					var i = 0;
					$.each(parseJSONResult[0], function(key, value) {
						var obj = {
							sTitle : key
						};
						dynamicColumns[i] = obj;
						i++;
					});
					//fetch all records from JSON result and make row data set.
					
					var i = 0;
					$.each(parseJSONResult, function(key, value) {
						var rowData = [];
						var j = 0;
						$.each(parseJSONResult[i], function(key, value) {
							
							rowData[j] = value;
							j++;
						});
					
						rowDataSet[i] = rowData;
						i++;
					});

						if (rowDataSet.length <=0)
						{
							//$.notify("No Data Found","info");
						}
					
						tableMedia =$('#mediaData').DataTable({
						 "dom" : 'Bf<"datatablediv">rt<"datatablediv">ip',
		
						"columnDefs": [{
			                "targets": '_all',
			                "createdCell": function (td, cellData, rowData, row, col) {
			                    $(td).css('padding', '3px')
			                }
			            }],
						"bDestroy" : true,
						"bScrollCollapse" : false,
						"bJQueryUI" : true,
						"bPaginate" : true,
						"pageLength" : 10,
						"sScrollX" : "50%",
						"sScrollY" : "50%",
						"bInfo" : true,
						"bFilter" : true,
						"bSort" : true,
						"aaData" : rowDataSet,
						"aoColumns" : dynamicColumns,
						"autoWidth" : false,
						"aaSorting": [],
						"lengthChange": true,
						"colReorder": true,
						"deferRender" : true
				
					//These are dynamically created columns present in JSON object.

					});
				
					
					console.log("queryflag--"+queryflag);
					//console.log("rowcolcountflag---"+rowcolcountflag);

			
					if ( queryflag == 0 )	
					{
						if (rowcount ==0)
						{
				
						}else if (rowcount >0)
						{
		
						}
				  }else if(queryflag == 1) 
				  {
					 console.log("inside query *****************************"+queryflag);
					  setTimeout(function () 
							  {
						  //NProgress.start();
						  var urlsummary ="/cafe-bot/api/JsondataClickHouseSummary";
						  
						  console.log("filter-----"+filter);
						  console.log("url------::::::"+url);
						  
					  $.ajax({
							type : "POST",
							contentType : "application/json; charset=utf-8",
							url : urlsummary, 
							data : JSON.stringify(data),
							success : function(resultcount) 
							{
								 NProgress.done(true);
								console.log("result count---"+resultcount);
								var resultstr = resultcount.split('#_#');
								console.log("resultstr-----"+resultstr);
								rowcount =  resultstr[0];
								colcount =  resultstr[1];

								console.log("  resultstr1:::::"+resultstr[1]);
								
								if (filter != "pycode")
								{
									
								}	
								if (rowcount ==0)
								{
									$.notify("No Data Found","info");

									 $("#countDiv").hide(); 
									 $("#rowcount").html("");
									 $("#colcount").html("");
								}
								else if (rowcount >0)
								{
									 $("#countDiv").show(); 
									 $("#rowcount").html(rowcount);
									 $("#colcount").html(colcount);
								}
								
								 $("[data-toggle]").tooltip('hide');
							},
						  error: function (e) {
								NProgress.done(true);
								$.notify("No Data Found","info");

								console.log("error--",e)
							}
						});
					  
					  
					  }, 300);		  
				  } //else
				
			
			
			
			
				}else 
				{
					$("#mediadatadiv").hide();
					console.log("else  no data");
					$.notify("No Data Found","info");
				}
			},
		  error: function () {
                             $.notify("No Data Found","info");
				NProgress.done(true);
			}
		});
	}
	   

	
	function getMediaimage_IMG(imagepath)
     {
		 $("#imagedivShow").show();
		 $("#imagedivShow").html("");
		
		 var id=$("#property_name").val();
		     NProgress.start();
		 
		 $
  			.ajax(
  					{
  						method : "POST",
  						url : "/cafe-bot/menu/Roles-popup/getMediaImageData", ///menu/Roles-popup/readPage
  						data : {							
  							userid : 1,
  							shareuserid : 1,
  							path:imagepath,
  							fileid:id
  						}
  					}).success(function(result)	{
  						//alert("Success!"+result);
  						
  						NProgress.done(true);
  						console.log("result---:::::::::"+result);
  						
  						var htmlMain ="";
  						var str_ = result+"";
  						
  					if (result =="")
  					{
  						isimageloadedFlag = 0;
  						
  						 htmlMain +=" <img id='imgblr_' class='img-responsive' src='/cafe-bot/resources/images/no_image.png' style='max-width:300px;height:300px;filter: invert(0.8);' > ";
  						 $("#btnMedia").notify("No media found!","info");
  						 $("#imagedivShow").html(htmlMain);
  						 //$("#imagedivShow").html(htmlMain);
  						 
						 imgSrc= "";
						 isimage = 0;
						 
  					}	
  					else 
  					{
  						
  						isimageloadedFlag = 1;
						
  						var image_path="";
  						var width="";
  						var height =""
  						var size ="";	
  						
  						var str = str_.split("#_#");
  						console.log("len ::::::"+str.length);
  						
  						for (var k=0;k<str.length;k++)
  						{
  							if (k==0){image_path = str[k];}
  							else if (k==1){width = str[k];}
  							else if (k==2){height = str[k];}
  							else if (k==3){size = str[k];}
  							
  						}
  						
  						console.log("width::::"+width);
  						console.log("height::::"+height);
  						console.log("size::::"+size);
  						
  						
  						var imagesrc = "data:image/png;base64,"+image_path;
						$("#widthdim").html("Width:"+width +" px");
						$("#heightdim").html("Height: "+height +" px");
						$("#sizedim").html("Size:" +size+" KB");
  						
  						
						 imgSrc= imagesrc;
						 isimage = 1;
  						
  						
  						htmlMain +="<img id='imgblr_'  class='img-responsive' src='"+imagesrc+"'>";
  						 $("#imagedivShow").html("");
  						 $("#imagedivShow").html(htmlMain);	
  					}
  						
  			}).error(function() {
  				NProgress.done(true);
  				$.notify("Something went wrong!","info");
  			});
  	
  }
  

	
	
	
	
	function resetAllsettings(){

		  $("#flip_none").prop('checked' , true);
		    $("#contrast").val(-1).change();
		    $("#contrast_value").text(-1).hide();
		    $("#brightness").val(0).change();
		    $("#brightness_value").text(0);
		    $("#rotatedegreewise").val(0);
		    $("#contrast_content").html("None");
		     $("#brightness_content").html("No Brightness").show();
		      $("#image_aug").css("-webkit-filter", "blur(0px)" +"brightness(100%)" + "contrast(100%)" );
		    $("#image_aug").css("transform", "none" );
		    $("#grey").prop('checked', false)
		}
	
	
	
	function onmouseover_(id) {
		  if(id == 1){
		    $("#setmaximumlength").show();
		 var maximum_length = $("#maximum_length").val();
		 $("#setmaximumlength").val(maximum_length);
		  }
		  if(id==2){
		      $("#settopp").show();
		 var top_p = $("#top_p").val();
		 $("#settopp").val(top_p);
		  }
			if(id==3){
		      $("#freqpenalty").show();
		 var freqpenalty_compress = $("#freqpenalty_compress").val();
		 $("#freqpenalty").val(freqpenalty_compress);
		  }
		  if(id==4){
		      $("#prespenalty").show();
		 var prespenalty_compress = $("#prespenalty_compress").val();
		 $("#prespenalty").val(prespenalty_compress);
		  }
		  if(id==5){
		      $("#bestof").show();
		 var bestof_compress = $("#bestof_compress").val();
		 $("#bestof").val(bestof_compress);
		  }
		  
		}
		function onmouseleave_(id)
		{
				  if(id==1)
				  {
					  setTimeout(() => {
						  $("#setmaximumlength").hide();
					}, 200);
					  
				  }
				  else if(id==2)
				  {
					  setTimeout(() => {
						  $("#settopp").hide();
					}, 200);
					  
				  }
				  else if(id==3)
				  {
					  setTimeout(() => {
						  $("#freqpenalty").hide();
					}, 200);
					  
				  }
				  else if(id==4)
				  {
					  setTimeout(() => {
						  $("#prespenalty").hide();
					}, 200);
					  
				  }
				  else if(id==5)
				  {
					  setTimeout(() => {
						  $("#bestof").hide();
					}, 200);
					  
				  }
		  
		}
	
	
		
	   function selectAll(isChecked) {
		  
		  console.log("start");
		  var checkBox = document.getElementById("selectAll");
		  console.log("checkbox",checkBox);
		  if(isChecked)
		  {
			  console.log("1");
	    	    var multiselect = $("#ddlFieldSequence").data("kendoMultiSelect");
	    	    //console.log("multiselect---",multiselect);
	    	    //console.log("length---"+ multiselect.dataSource.data().length);
	    	    var selectedValues = [];
	    	    for (var i = 0; i < multiselect.dataSource.data().length; i++) 
	    	    {
	    	    	//console.log(multiselect.dataSource.data()[i])
	    	        var item = multiselect.dataSource.data()[i];
	    	    	//console.log(item.columnname);
	    	        selectedValues.push(item.id);
	    	    }
	    	    //alert("selectedValues---"+selectedValues);
	    	    multiselect.value(selectedValues);
	    	    multiselect.close();
	    	   multiselect.value(selectedValues);
	    	    multiselect.trigger("change");
	    	    
	       } 
		  else 
		  {
			  var field = $("#ddlFieldSequence").data("kendoMultiSelect");
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

  