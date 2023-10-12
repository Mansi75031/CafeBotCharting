
  var globaltabcount =1;
  var tabfiltercount =0;
  var dropzonefilter =0;
  var observer="";
  var target="";
  var globalTheme = "DarkTheme";
  var selectcount = 0;			
  var basicresult_length =0;
  var globalTablename = "";
  var globaltabcount_  = 0;
  var chartid_increment =0;
  var tabfilter_k=0;
  var tabfilter_k_edit=0;
  var globalFilterCount_edit=0
  var tabFilterSet =0;
  var globalFilterCountSet=0;
  var chart_filter_set_list_index_adv =[];
  var chart_filter_set_list_index_topn =[];
  var chart_filter_set_list_index_basic =[];
  var chart_filter_set_list_index_tab =[];
  
  var legend_button =0;

  var chartProperties_ = "";
  
  
 ////----------Tab Switch 
  
  function switchtab(tabcount)
  {

  		  globaltabcount = tabcount;
  
  		  var ij=0;
  			  $('.dropzonefilter').children().each(function()
		  		{
  				  dropzonefilter = $(this).attr('data-tabid');
//  				  console.log("globaltabcount "+globaltabcount );
//  				  console.log("dropzonefilter   "+dropzonefilter); 
  				  var str = dropzonefilter.split(',')[0];
  				//console.log("str   "+str); 
  				dropzonefilter = str;
  			 
		  		if(globaltabcount != dropzonefilter)
		  			{		  
		  				 $("#tabfilter"+(ij)).hide();
		  			}
		  		else if(globaltabcount == dropzonefilter)
		  			 {
		  				//alert("tabfiltercount show"+tabfiltercount);
		  				 $("#tabfilter"+(ij)).show();
		  				filter_Hide_Show();
		  			 }
		  		
		  		ij = ij+1;
		  			
  				});
  			  
  			/*  
  			 setTimeout(() => {
					//	alert("selectcount "+selectcount);
						$('#searchbasicfilter'+selectcount).keyup(function(){
				//alert("hi");

			    var searchText = $(this).val();
			    //alert("hi"+searchText);

			    $('.searchtext'+selectcount).each(function(){    

			        var currentLiText = $(this).text(),
			            showCurrentLi = currentLiText.toUpperCase().indexOf(searchText.toUpperCase()) !== -1;

			        $(this).toggle(showCurrentLi);

			    });     
			});
				
						
					}, 500);
				 */
  			  
  			  
  			target = document.querySelector('.grid-stack');
  			try {
  			 // adddlert("Welcome guest!");

 	           setTimeout(() => 
 	           {
 		  //  alert("on");
 		    
 		    	var  observer2 = new MutationObserver(function(mutations) {
 	    		    //  alert("observer")
 		    		//console.log('mutations  '+mutations);
 		    		if (mutations != undefined)
 	      		   {
 	    		    	window.dispatchEvent(new Event('resize'));
 	    		    	//console.log('size changed!###############');
 	    		    	
 	    		    	//console.log(":::::", mutations[0].target.gridstack);
 	    		    	if (mutations[0].target.gridstack != undefined)
 	 	      		   { 	
		 	    		    	gs_height = mutations[0].target.gridstack.el.clientHeight;
		 	    		    	gs_width= mutations[0].target.gridstack.el.clientWidth;
		 	    		    	
		 	    		     	$('.chart-header div').children().first().height=gs_height;
		 	    		    	$('.chart-header div').children().first().width=gs_width;
 	    		    	
 	    		    	
 	 	      		   }
 	      		   }	
 	    		    	
 	    		      });
 		    
 		    	 
		  		  setTimeout(() => {
					
		  			//  alert("2 on");
		  			  
		  			  
		  			  
		  			   let container = document.querySelector(".grid-stack");
		 		        new ResizeObserver(outputsize).observe(container);
		 		   // console.log("observer2::",observer2)
		 		       observer2.observe(target, {
		 		            attributes: true,
		 		            childList: true,
		 		            subtree: true,
		 		            characterData: true
		 		          });
		  			  
				}, 1000);  	 
 		    	 
		  		observer2.disconnect();
 		 
 		   
 		    
 		    }, 2000);
  			  
  			  
  			  
  			}
  			catch(err) {
  			  console.log("err:::"+err.message);
  			}
  			 		
  }
  	
////----------Switch between Dark and Light Theme  
  
  function toggleTheme()
  {
 // console.log("globalTheme toggleTheme :::::::::::"+globalTheme);
//  debugger;
          var theme = document.getElementById('theme');
          //alert(theme)
          var theme_ = document.getElementById('theme_');
          var charttheme_js = document.getElementById('charttheme_js');
         
          if($("#switch-3").is(':checked')){
		
		//          theme_.setAttribute('href', './resources/css/dark-unica.css');
          $("#theme_").attr('href', './resources/css/dark-unica.css');
//          theme.setAttribute('href', './resources/css/dashboard_light.css');
          $("#theme").attr('href', './resources/css/dashboard_light.css');
          
          globalTheme = "LightTheme" ;
//          $("#slidetoggle").hide();
		
			
          } else {

//          if (theme.getAttribute('href') == './resources/css/dashboard_light.css'  || theme_.getAttribute('href') == './resources/css/dark-unica.css') {
//          theme_.setAttribute('href', './resources/css/dark-unica-dash.css');
          $("#theme_").attr('href', './resources/css/dark-unica-dash.css');
//          theme.setAttribute('href', './resources/css/dashboard_dark.css');
          $("#theme").attr('href', './resources/css/dashboard_dark.css');
          globalTheme = "DarkTheme" ;
//          $("#slidetoggle").hide();



          }
          
          
          
//          alert("globalTheme toggleTheme :::::::::::"+globalTheme);
         // console.log("globalTheme :::::::::::"+globalTheme);
          console.log("globalTheme toggleTheme :::::::::::"+globalTheme);
      }
  
//  function toggleTheme()
//  {
//	 // console.log("globalTheme toggleTheme :::::::::::"+globalTheme);
////	  debugger;
//	          var theme = document.getElementById('theme');
//	          //alert(theme)
//	          var theme_ = document.getElementById('theme_');
//	          var charttheme_js = document.getElementById('charttheme_js');
//	         
//	          if($("#switch-3").is(':checked')){
////	          if (theme.getAttribute('href') == './resources/css/dashboard_light.css'  || theme_.getAttribute('href') == './resources/css/dark-unica.css') {
////	          theme_.setAttribute('href', './resources/css/dark-unica-dash.css');
//	          $("#theme_").attr('href', './resources/css/dark-unica-dash.css');
////	          theme.setAttribute('href', './resources/css/dashboard_dark.css');
//	          $("#theme").attr('href', './resources/css/dashboard_dark.css');
//	          globalTheme = "DarkTheme" ;
////	          $("#slidetoggle").hide();
//	          } else {
////	          theme_.setAttribute('href', './resources/css/dark-unica.css');
//	          $("#theme_").attr('href', './resources/css/dark-unica.css');
////	          theme.setAttribute('href', './resources/css/dashboard_light.css');
//	          $("#theme").attr('href', './resources/css/dashboard_light.css');
//	          
//	          globalTheme = "LightTheme" ;
////	          $("#slidetoggle").hide();
//	          }
//	          
//	          
//	          
////	          alert("globalTheme toggleTheme :::::::::::"+globalTheme);
//	         // console.log("globalTheme :::::::::::"+globalTheme);
//	          console.log("globalTheme toggleTheme :::::::::::"+globalTheme);
//	      }	
  
 ////------------ Load Dashboard After Save Chart
  

  function AjaxChart(varDim,_charttype,_table,_containerID,varDimFilter,chartid,tabid ,themeAjaxChart,ispublish,properties)
  {
	  
	  globalTablename = _table;
	  
	  
	  //server
	  //$('#Add_Dashboard').hide();
	  
//	  ispublish =1;
	  $.ajax({method : "POST", url : "./getchartDash",
			data : {
				chartName : "type",
				fieldsprop : varDim,
			    charttype:	_charttype,
			    table:_table,
			    containerID:_containerID,
			    filterprop: varDimFilter,
			    chartid : chartid,
			    properties_ :JSON.stringify(properties), 
			},
			success : function(result) 
			{
				
				//alert("getchartDash");
				//console.log("result###########"+result);
				
				console.log("_charttype ## "+_charttype);
				console.log("_containerID ## "+_containerID);
				
				
				if(_charttype == "chartcard17")
					{
					$("#tablechartdiv_data"+_containerID).html(result);
					//$("#table_" + _containerID).append(result);
					}
				else if(_charttype == "chartcard16")
				{
					$("#singlevalue" + _containerID).append(result);
				}
				else
					{					
				        $("#" + _containerID).append(result);
					}
			
			  		 var tabid_loadchart1 = tabid.split('-')[1];
		  				//console.log("tabid_loadchart1   "+tabid_loadchart1); 
		  				
		  				
		  				globaltabcount_ = tabid_loadchart1;
		  				
		  				
		  				//console.log("globaltabcount--###########"+globaltabcount);
			  		if(varDimFilter == "[]")
		    		{}
			    	else
			    	{
			    		
			    	//alert("fgfgfg");
			    	loadchart1(chartid ,_containerID ,_table);
			    	switchtab(1);
			    	filter_Hide_Show();
			    	
			    	
			    	}
			  		
			  		if(ispublish == 1)
			  			{
			  			publishmode_validations();
			  			
			  			}
			 		
			},
			error : function(data) { 
					console.log(data);
				}
			});
	  
	  globaltabcount =1;
		  console.log("themeAjaxChart::::----:::::  "+themeAjaxChart);
		  //toggleTheme();
		  var theme = document.getElementById('theme');
	      var theme_ = document.getElementById('theme_');
	      //var charttheme_js = document.getElementById('charttheme_js');
		 
	      
	      if (themeAjaxChart == "DarkTheme")
		   	{
			  theme_.setAttribute('href', './resources/css/dark-unica-dash.css');	      	
		      theme.setAttribute('href', './resources/css/dashboard_dark.css');
		      $("#switch-3").prop('checked' , false);
//			  $("#slidetoggle").hide();
		    globalTheme = "DarkTheme" ;
		   	}
		  else {
		      	theme_.setAttribute('href', './resources/css/dark-unica.css');
		      	theme.setAttribute('href', './resources/css/dashboard_light.css');
		      	$("#switch-3").prop('checked' , true);
		      globalTheme = "LightTheme" ;
		      	
//		      $("#slidetoggle").hide();
		      	//globalTheme = LightTheme ;
		      }
		
	  
           // publishmode_validations();
      
  }
  
  
////------------------Build Chart After Applying Filter
  
  function AjaxChart_withid1(varDim,_charttype,_table,_containerID1,varDimFilter,chartid,chartname,dashid ,properties)
  {
	 // $("#" + _containerID).empty();
	 
//	  console.log("varDim  ----  "+varDim);
//	  console.log("chartid--  "+chartid);
	  
	  debugger;
	  applyProperties();
//	  
//	  
//	  properties= chartProperties_;
	  
	  
	  
	  
	  console.log("varDimFilter apply filter chartid--  ",varDimFilter);
//	
//	  console.log("globaltabcount::::"+globaltabcount);
	  var isexist =0;

		 // debugger;
		 // console.log("_containerID:::::     "+_containerID1);
		  if(_charttype == "chartcard16"){
			  _containerID1=_containerID1.split("singlevalue")[1];
			 /// console.log("_containerID singlevalue split:::::     "+_containerID1);
		  }
		   if(_charttype == "chartcard17"){
			  _containerID1=_containerID1.split("tablechartdiv_table")[1];
			//  console.log("_containerID table_ split:::::     "+_containerID1);
		  } 
		  //alert("call div");
		//console.log("isexist::::"+isexist);
		  if (isexist==0)
		  {
		  
		  $.ajax({method : "POST", url : "./getchartDashbyid",
				data : {
					chartName : "type",
					fieldsprop : JSON.stringify(varDim),
				    charttype :	_charttype,
				    table :_table,
				    _containerID :_containerID1,
				    filterprop : JSON.stringify(varDimFilter),
				    chartid :chartid,
				    properties_ : JSON.stringify(properties),
				    
				},
				success : function(result) 
				{    
	
				if(_charttype == "chartcard17")
				{
					$("#tablechartdiv_data"+_containerID1).html(result);// $("#tablechartdiv_"+_containerID1).html(result);
				}
				else if(_charttype == "chartcard16")
				{
				   $("#singlevalue"+_containerID1).html(result);
				}
			else
				{
		
			    $("#"+_containerID1).html(result);
				}
			
				},
				error : function(data) { 
						console.log(data);
					}
				});
		  }
		  
	//}, 1000);
	  
  }
  
////------------------Build Chart After Dropping Chart into Dashboard
  

  function AjaxChart_withid(varDim,_charttype,_table,_containerID,varDimFilter,chartid,chartname,dashid ,properties)
  {	  
	  chartid_increment++;
	 chartid=chartid+"-"+chartid_increment;	 	
	  var isexist =0;
	  $.ajax({method : "POST", url : "./buildTabDiv",
			data : {
				chartName : "type",
				varDim : varDim,
				_charttype:	_charttype,
				_table:_table,
				_containerID:_containerID,
				varDimFilter: varDimFilter,
				chartid:chartid,
			    tabscount:globaltabcount,
			    chartname:chartname,
			    dashID:dashid,
			    properties_ : properties,
			},
			success : function(result) 
			{
				console.log("result:::::######"+result);
	
			if (result =="Exist")
			{
				isexist =1;
				closeChartlist();
				$.notify("Chart already Exist!","info");
//				alert("Chart already Exist!");
			}	
			else 
			{	
				//console.log("globaltabcount::::"+globaltabcount);
				refreshgrid();
				$("#gridtabs-"+globaltabcount).append(result);
				isexist =0;
				closeChartlist();
			}
				
				
			},
			error : function(data) { 
					console.log(data);
				}
			});
	  
	
	  
	  setTimeout(() => {
		  
	  
		  _containerID = $("#uuid").val();

		  if (isexist==0)
		  {
		  
		  $.ajax({method : "POST", url : "./getchartDashbyid",
				data : {
					chartName : "type",
					fieldsprop : varDim,
				    charttype :	_charttype,
				    table :_table,
				    _containerID :_containerID,
				    filterprop : varDimFilter,
				    chartid :chartid,
				    properties_ : properties,
				},
				success : function(result) 
				{
				
					closeChartlist();
				
					
					if(_charttype == "chartcard17")
					{
						$("#tablechartdiv_data"+_containerID).append(result);
					}
					else 
					{
						$("#gridtabs-"+globaltabcount).append(result);
					}		
			
				},
				error : function(data) { 
						console.log(data);
					}
				});
		  }
		  
	}, 1000);
	  
	  
	 /*  return;
	  else 
	  {
		  $("#tabs").hide();
		  $("#singlevaluediv").show();
	  } */
  }
  
  
  
  
  /* setTimeout(() => {refreshgrid();}, 1000); */
  
   function refreshgrid(){
	  //alert("refresh");
  let grids = GridStack.initAll({
  	animate: true,
    float: true, 
    resizable: { handles: 'all'} // do all sides for testing
  });
  } 
  
   function refreshgrid_(){
		  //alert("refresh");
	  let grids_ = GridStack.initAll({
	  	animate: true,
	    float: true, 
	    resizable: { handles: 'all'} // do all sides for testing
	  });
	  } 
 
 
   function singlevalue()
  {
 	  $("#tabs").hide();
 	  $("#singlevaluediv").show();
  } 
  
  function deletechart_(index)
  {
 	 
 	 
 	 $("#con2fe080bf").parent().parent().remove();
 	 saveDash();
 	 
  }
  
  
   function  deleteChart(index)
   {
 	 // alert("index::::"+index);
 	  
 	  var indexid = $("#btndeletetext"+index).val();// index.trim();
 	  
 	 // alert("indexid12::::"+indexid);
 	
 	  $("#btndeletetext"+index).parent().parent().parent().parent().parent().parent().parent().remove();  
 	
 	 // $(this).parent().parent().parent().parent().parent().remove();
 	 // saveDash();
 	// console.log("indexid  "+indexid);
 	
   }
  
  
 	function editchart(index){
 	    		  var dashid = $("#dashid").val();
                    
 	    		  ////----------------server
// 	    		    window.open('./chart?id='+index+'&dashID='+dashid,'_blank' );
 	    		  
 	  window.open('/CafeBotCharting?id='+index+'&dashID='+dashid,'_blank' );
 	  
  		 			
 		}
   
 	function editchart_(index)
 	{	
 		$.notify("Please Save Dashboard to go into edit mode!","info");
 		
//       alert("Save DashBoard First...");			    		 					
 	}

     
     var chartid = 0;
     function addnewChart(id)
     {
     	if(addTab_Flag == 0)
     		{
     		
     		$.notify("Please Save Dashboard to Add Chart in New Tab...","info");
//     		alert("Please Save Dashboard to Add Chart in New Tab...");
     		}
     	
     	
        // console.log("globaltabcount::::::::::"+globaltabcount);	
         chartid= $("#chartid"+id).val();
     	var varDim = "";//$("#vardimid"+id).val();
     	var _charttype = $("#_charttypeid"+id).val();
     	var _table =$("#_tableid"+id).val();
     	var _containerID = $("#_containerdivID"+id).val();
         var _varDimFilter =   $("#varDimFilterid"+id).val();
     	
     	var varChartname = $("#varChartname"+id).val();
         var dashid = $("#dashid").val();
     	var table_ = $("#_tableid"+id).val();
     	var properties = $("#propertiesid"+id).val();
     	
     	
     	console.log(varDim+":"+_charttype+":"+_table+":"+_containerID+":"+_varDimFilter+":"+varChartname+ " : "+properties);
     	//console.log("varDimFilter.length-// ",_varDimFilter);
     	AjaxChart_withid(varDim,_charttype,_table,_containerID,_varDimFilter,chartid,varChartname,dashid ,properties);
     	
     	globalTablename = _table;
     	//console.log("varDimFilter.length12 "+_varDimFilter);
     	if(_varDimFilter == "[]")
     		{}
     	else
     	{   
     	loadchartFilterbyid(chartid ,table_);
     	
     	filter_Hide_Show();
     	
     	
     	}
 	
     }
     
     
 ////---------------------Save Dashboard

      function saveDash() 
      {
  	    var items = [];
  	    
  	   addTab_Flag =1;
     	
  	    
  	    var tabs = $("#tabs").children();
  	   // console.log("tabs:::::",tabs);
  	    var tabname = $("#tabs-"+globaltabcount).text();
  	   // console.log("tabname:::::",tabname);
  	    var dashName = document.getElementById("label-text").textContent;
  	  //  console.log("dashName:::::"+dashName);
  	    var dashid = $("#dashid").val();
  	    var projectid =1;
  	    var containerid__="";
  	    $('.grid-stack.grid-stack-animate').each(function() 
  			     {
  			    		 //top div tab wise 
  			    		 const listItems = $(this).children();
  			    		 const listArray = Array.from(listItems);
  			    		 
  			    	//	 console.log("len::::::"+listArray.length);
  			    		 
  			    		 
  			    		 
  			    		 // or
  			    		 //const listArray = [...listItems];
  			    		 listArray.forEach((item) => {
  			    			 //charts div
  			    			 //console.log(item);
  			    			 const listItems_ = $(item).children();
  				    		 const listArray_ = Array.from(listItems_);
  			    			 
  				    		 
  				    		 
  				    		 listArray_.forEach((item_) => {
  				    			 //console.log(item_);
  				        		 const listItems_1 = $(item_).children();
  					    		 const listArray_1 = Array.from(listItems_1);
  					    		 //var oddcount =1;
  					    		 var countchartdiv = 0;
  					    		 var chartid__ = "";
  					    		 
  					    		 
  					    		 
  					    		 
  					    		 listArray_1.forEach((item_1) => 
  					    		 {
  					    			 //console.log(item_1);
  						    		 
  					    			if (countchartdiv % 2 != 0)
  					    			{
  					    				//alert("countchartdiv--" +countchartdiv);
  					    			
  					    				 const listItems_2 = $(item_1).children();
  							    		 const listArray_2 = Array.from(listItems_2);
  					    			
  							    		// console.log(item_1);
  							    		 
  							    		 var chartid__ = $(item_1).attr('data-chartid');
  							    		 containerid__ =$(item_1).attr('id');
  							    		 var x=$(item_1).parent().parent().attr('gs-x');
  							    		 var y=$(item_1).parent().parent().attr('gs-y');
  							    		 var w=$(item_1).parent().parent().attr('gs-w');
  							    		 var h=$(item_1).parent().parent().attr('gs-h');
  							    		 var tabid_=  $(this).parent().parent().attr('id');
//  							    		console.log("xxxx    chartid__:::::"+x);
//  							    		 console.log("chartid__:::::"+chartid__);
//  							    		 console.log("tabid:::::"+tabid_);
  							    		 //alert("x-----"+ x);
  							    		 items.push({
  							 	            x: x, 							 	            
  							 	            y: y,
  							 	            w: w,
  							 	            h: h,
  							 	            tabid: tabid_,
  							 	            tabname: $(this).parent().parent().data('tabname'),
  							 	            chartid: chartid__
  							 	        });
  				
  					    			}
  					    			 
  					    			countchartdiv = countchartdiv+1;
  					    			// alert("countchartdiv--" +countchartdiv);
  					    			 
  					    		 });	
  					    	
  				    		 });
  				    		 	    		 
  			    		 });
  			    		 
  			    		 if(listArray.length == 0)
  			    		 {
  			    		 items.push({
  			    			 tabid: $(this).parent().parent().attr('id'),
  				 	         tabname: $(this).parent().parent().data('tabname'),
  				 	         chartid: 0
  				 	         });
  			    		 }
  			    	
  			     });
  			 
  	   // console.log(JSON.stringify(items));
//  	    alert("globalTheme theme::::::::::::::::"+globalTheme);
  	   console.log("globalTheme theme::::::::::::::::"+globalTheme);
  	    
  	    if (globalTheme == "DarkTheme" )
  	    	{
  	    	var theme="DarkTheme";
  	    	}
  	    else
  	    	{
  	    	var theme="LightTheme";
  	    	}
  	  // console.log("theme::::::::::::::::"+theme);
//  	    alert("dashid  "+dashid);
  	    $.ajax({method : "POST", url : "./savedashboard",
  			data : {
  				dashid : dashid,
  				jsondata : JSON.stringify(items),
  				dashName_ : dashName,
  				projectid : projectid,
  			   containerid: containerid__,
  			   theme_ : theme,
  			   
  			},
  			success : function(result) 
  			{
  				
  				NProgress.done(true);
  				console.log("result::::"+result);
  				
//  				alert("Saved Successfully...");
  				
  				$.notify("Saved successfully!","success");
  				
  				/* setInterval(() => {
  					
 				}, 1000); */
  				
  				/* setTimeout(() => {
  					alert("Saved Successfully...").hide();
  					//alert.hide();
 				}, 2000); */
  				
  				setTimeout(() => {
  					window.location.reload();
  					//alert.hide();
 				}, 300);
  				
  				
  			
  			},
  			error : function(data) { 
  					console.log(data);
  				}
  			});
  	    
  	    
  	    
  	    
  	} 
     
      
 /////-------------------Apply Filter To the Tab     
      
      globaltabcount =1;
      function applyFilterbyid()
      {
      	//alert("Filter applied successfully!");
//      	debugger;
      	//globaltabcount = 1;
      	var str =0;
      	var currentabindex  = globaltabcount;
      	var dashid = $("#dashid").val();
      	var chartid__ = 0;
      	var chartidArray = [];
      	var containerid="";
      	
      	var listofdimsfilter ="";
      	var filterselect1="";
 		var filterselect2="";
 		var filterselect3="";   
 			var filterselectvalue1="";
 		var filterselectvalue2="";
 		var field="";
 		var types="";
 		var filterselecttypevalue ="";
 		var andorvalue =" and ";
 			
 		var filtertopn = "";
 		var filtertopvalue = "";
 	    var basicFilterValue ="";
 		
      	
      	//console.log("tabfilter:applyFilter::::",tabfilter);
      //	console.log("globaltabcount---  "+globaltabcount);
      	var strRRR =  [];
      	var ls = [];
     
     	var str =[];
      	//console.log("chartid:::::"+chartid);

         var i=0;
  		var varDimfilter = [];
  
  		//console.log("tabfilter:applyFilter::::"+tabfilter_k);
  		var j=0;
  		var tabid_applyFilterbyid="";
  		
  		
  		$('.dropzonefilter').children().each(function()
  		{
  			console.log("globaltabcount applyFilter  " +globaltabcount );
  			//alert("each child::::");
//  			debugger;
  			 
  			 //alert("i---"+i);
  		   	 //alert(" j  "+j);
  			
  			//console.log("j::::--"+j);
  			//chartid__ = $("#tabfilter"+j).attr('data-chartid');
  			
  			 tabid_applyFilterbyid=$(this).attr('data-tabid');
  			//console.log("tabid_applyFilterbyid:applyFilter::::"+tabid_applyFilterbyid);
  			var str=tabid_applyFilterbyid.split(',')[0];
  			console.log("str:applyFilter::::"+str);
  	    	//console.log("chartid:applyFilter::::"+chartid__);
  	    	
  		//});
  		
  	    if(globaltabcount == str )//== globaltabcount
  	    	{
  	    	
  	    	//console.log("containerid:applyFilter::::"+containerid);
  	    	var basicFilterValue_Array = [];
  	 		var bsArray = [];
  		 listofdimsfilter = $('#tabfilter'+j).find(".dropzoneselect");
  		
  		console.log("j   ::::::"+j);
  		console.log("listofdimsfilter length::::::",listofdimsfilter.length);
  		console.log("listofdimsfilter::::::",listofdimsfilter);
  		//escape 1st item which is filter
  		
  			//console.log("i::::--"+i);
  				
   				 field = $(listofdimsfilter).data('field');	
   				//console.log("field::::::"+field);
   				 types =	$(listofdimsfilter).data('types');

   				
   				 filterselecttypevalue = $('#select_option'+i).find(":selected").val();
   				//var filterselecttypevalue = $('select_option').val();
   				
   				console.log("filterselecttypevalue:::::::::::"+filterselecttypevalue);

   				
  				if(types=='text' && filterselecttypevalue == 'adv' )
   				{
   				
  	 				 filterselect1 = $(listofdimsfilter).find("select")[2];
  	 				 filterselect2 = $(listofdimsfilter).find("select")[3];
  	 				 filterselect3 = $(listofdimsfilter).find("select")[1];
  	 			
  	 				 
  	 				 
  	 				filterselect1= $(filterselect1).val();
  	  				filterselect2=$(filterselect2).val();
   				}
   				else if((types=='number' && filterselecttypevalue == 'adv' ) || (types=='time' && filterselecttypevalue == 'adv' ))
   				{
   					
   					
   					
   					 filterselect1 = $(listofdimsfilter).find("select")[1];
  	 				 filterselect2 = $(listofdimsfilter).find("select")[2];
  	 				 filterselect3 = $(listofdimsfilter).find("select")[3];
  	 			    
//  	 				console.log("filterselect1:::::",filterselect1);
//  	 				console.log("filterselect2:::::",filterselect2);
//  	 				console.log("filterselect3:::::",filterselect3);	
  	 				filterselect1=$(filterselect2).val();
  	 				filterselect2=$(filterselect3).val();
  	  	 			
  	 								 			
   				}
  				
//  	 			filterselect3=$(filterselect3).val();
   			
   				//console.log("listofdimsfilter[i]:::::",listofdimsfilter);
   				var filterand = $(listofdimsfilter).find("input[type='radio']")[0];
   				var filteror = $(listofdimsfilter).find("input[type='radio']")[1];
   				console.log("filterand:::::",filterand);			
   					
   				if (filterselecttypevalue =="adv")
   				{
   				    filterselectvalue1 = $(listofdimsfilter).find(".filterselectvalue")[0];
 	 			    filterselectvalue2 = $(listofdimsfilter).find(".filterselectvalue")[1];
 	 				filterselectvalue1 = $(filterselectvalue1).val();
 	 				filterselectvalue2 = $(filterselectvalue2).val();
   				
   					if ($(filterand).prop( "checked")== false)
	  	 				{
	  	 					andorvalue = " or ";
	  	 				}
   					else
   						{
   						andorvalue = " and "
   						}
   						 
   					basicFilterValue_Array = [];
   					filtertopn="";
  					filtertopvalue=0;
   				}
   				else if (filterselecttypevalue =="basicfiltering")
  				{
  					
  					 filterselect1 = "";
  				     filterselect2 = "";
  					 andorvalue ="";
  				
  					//var c=$(".allselectcheckbox").attr("class");
  					//console.log("c:::::################" +selectcount);
  					
  					var selectcount_=listofdimsfilter.length;
  					for(v=1;v<=selectcount_; v++)
  					{
  					if($("#chkLocal"+i).prop("checked") == true)
  						{
  						
//  						alert("checkAll::::::::::::::  " +selectcount);
  						for(b=0;b<basicresult_length;b++)
  						{				 							
  							basicFilterValue = $("#allcheck"+b).val();
  							//console.log("basicFilterValue  "+basicFilterValue);
  							//basicFilterValue_Array.add
  							
  							bsArray.push
  							({										
 						    'BasicFilterValue' : basicFilterValue,																		
 				        	});
  							
  							//basicFilterValue_Array.push(basicFilterValue);
  							//console.log("basicFilterValue_Array  ",basicFilterValue_Array);
  							
  						}
  						basicFilterValue_Array.push(bsArray);
  						//console.log("basicFilterValue_Array  ",basicFilterValue_Array);
  						}
  					
  				
  					//if(document.getElementByClass('isAgeSelected').checked)
  					else if (($("#chkLocal"+i).prop("checked") == false ) && ($(".allselectcheckbox:checked").prop("checked") == true))
 					{
// 						alert("basicfiltering::::::::::::::********  ");
 						 var child1 =0;
 						 $('.dropzonefilter.ui-droppable').children().each(function()
									 {
 							  child1++;
//								 	 //$(".allselectcheckbox:checked").prop("checked") == true)
									 })
 						console.log("child1 ######   "+child1);
 						 
 						 /*for(c=0; c< child1 ; c++)
 							 {*/
		 						var bsArray =[]; 	 
 							 $('.allselectcheckbox.allcheck'+i).each(function()
 									 {
 								     if($(this).prop("checked") == true)
			 							{
	 									 basicFilterValue = $(this).val();	
	 									console.log("basicFilterValue  "+basicFilterValue);
	 									 bsArray.push
				 							({										
										    'BasicFilterValue' : basicFilterValue,																		
								        	});
	 									
	 									
	 									console.log("bsArray  ",bsArray);
			 							}
 								  
 									 });
 							  basicFilterValue_Array.push(bsArray);						
	 					console.log("basicFilterValue_Array  ",basicFilterValue_Array);	 				
 				     }  					  									
  					else if($("#chkLocal"+i).prop("checked") == false)
  						{
  						
//  						alert("#chkLocal0.pro == false  " +i);
  						basicFilterValue_Array = [];
  						filterselecttypevalue = "";
  						}
  					}
  					
  					console.log("basicFilterValue_Array  ",basicFilterValue_Array);
  					
  					filtertopn="";
  					filtertopvalue=0;
  					filterselectvalue1="";
  					filterselectvalue2="";
  				}
   				
   				else if (filterselecttypevalue =="topn")
   				{
   				      filterselect1 = "";
   				      filterselect2 = "";
   			       andorvalue = "";
   				   filterselect3 = $("#filtertopn"+i).val();
   				   //console.log("filterselect3:::::",filterselect3);
   					
   					if (filterselect3=="bottom")
   					{
   						filtertopn="bottom";
   					}
   					else 
   					{
   						 filtertopn="top";
   					}
   					
   					basicFilterValue_Array=[];
   				    filtertopvalue =$("#topninput"+i).val();
   				  //alert("i  "+i);
   				  }

   				ls.push({
   					//'Types' : $(listofdimsfilter[i]).data('series'),
   					'Types' : types,
   					'Field' : field,
   					'filterselect1' : filterselect1,
   					'filterselect2' : filterselect2,
   					'filterselectvalue1': filterselectvalue1,
   					'filterselectvalue2': filterselectvalue2,
   				  	'andorvalue':andorvalue,
   				  	'filterselecttypevalue':filterselecttypevalue,
   				  	'filtertopn':filtertopn,
   				  	'filtertopvalue':filtertopvalue,
   				    'basic_Fil_Val_Array'  :	basicFilterValue_Array,
   				    'userLimit_basic ' : 0,
   				});
  				
   				
   				
   				
  				
  				
  				
  		 		
  		 		
  		 		
  	    	//});
  		}
      //alert("j  "+j);
  		j = j+1;
  		i= i+1;
  		
  		closeNav();
  		});
  		
  		//console.log("ls::::::"+ls);
  		varDimfilter.push(ls);
  		console.log("varDimfilter:::##",varDimfilter);
  		
  		
  		  $("#gridtabs-"+globaltabcount ).children($('.grid-stack.grid-stack-animate')).children().each(function()
 	    			{
 	    	    	
 	    			//var gsx_ = $(this).attr('gs-x');
 	    			//console.log("gsx_    ::::"+gsx_);
 	    		chartid__ =  $(this).children().children().eq(1).data('chartid');
 	    		//console.log("chartid__:  applyFilter::::"+chartid__);
 	    		containerid=$(this).children().children().eq(1).attr('id');
 	    		
 	    		var chartid_split = chartid__.toString();
 	    		//chartid_split = chartid_split.split('-')[0];
 	    		//console.log("chartid_split :  applyFilter::::"+chartid_split);
 	    		if(chartid_split.includes("-"))
 	    			{
 	    			
 	    			$.notify("Save Dashboard to apply filter!!!","info");
 	    			
// 	    			alert("Save Dashboard to apply filter!!!");
 	    			return;
 	    			}
 	    		
 	    		  
  		var str=[];
 		   str.push({
 		 			 'CONID':containerid,
 		 			 'CHARTID':chartid__
 			       });
 		 
 			
 		strRRR.push(str);
 		
 		
 		});
 		
  		
 		
 		//console.log("strRRR::::::",strRRR);
  		
  		
  		
  		
  					
  				NProgress.start();
  				$.ajax({
  					method : "POST",			
  					url : "./applyDashboardFilterbyid",
  					data : {
  						filterprop1 : JSON.stringify(varDimfilter),
  						dashID : dashid,
  						currentabindex : currentabindex,
  						chartid : chartid__,
  						strRRR1: JSON.stringify(strRRR),
  					},
  					success : function(result) 
  					{
  						NProgress.done(true);
  						console.log("chart result applyDashboardFilter--",result);
  						
  				     	var arr = result;

 	    				
 			    		   for (var k = 0; k < arr.length; k++) 
 			    		   {
 			    			                    var _containerID1 =arr[k].containerid;
 			    		    					var varDim = arr[k].query_context;
 			    		    					var varDimFilter1 = varDimfilter
 			    		    					var _charttype =arr[k].viz_type;
 			    		    					var _table = arr[k].datasource_name;
 			    		    				
 			    		    					var chartid = arr[k].id;
 			    		    					var varChartname =arr[k].slice_name;
 			    		    					var dashid = arr[k].isoriginal;
 			    		    					
 			    		    					var properties = arr[k].properties;
 			    		    					
 			    		    					console.log('properties###  ',properties);
 			    		    					
 			    		    					console.log('varDimFilter1 ',varDimFilter1);
// 			    		    					console.log('varDim ',varDim);
// 			    		    					console.log('_charttype ',_charttype);
// 			    		    					console.log('_table ',_table);
// 			    		    					console.log('_containerID1 ',_containerID1);
// 			    		    					console.log('chartid ',chartid__);
// 			    		    					console.log('varChartname ',varChartname);
// 			    		    					console.log('dashid ',dashid);
// 			    		    					
 			    		    				//alert("loadchartFilterbyidedit");
 			    		    					
 			    		    					
 			    		    					
 			    		    					
 			    		    					
 			    		    					if(chartid == 1110)
 			    		    						{
 			    		    						setTimeout(() => {
 			    		    							chartProperties_ = properties;
 			    		    							AjaxChart_withid1(varDim,_charttype,_table,_containerID1,varDimFilter1,chartid,varChartname,dashid ,properties);
 	 			    		    						
													}, 1000);
 			    		    						
 			    		    						}
 			    		    					
 			    			    		    	
 			    		 				     	tabfilter_k_edit=tabfilter_k_edit+1;
 			    	 				     	//alert("tabfilter_k_edit--" +tabfilter_k_edit);
 			    		   }
 			    		  
  				},
  				error : function(data) {
  					NProgress.done(true);
  					console.log(data);
  				}
  			});
  				
  	
      }
     
     $(document).ready(function() {
     	loading();
     	chart_properties();
     	
     	
     	//$("#Properties").html();
     	
     });
     	function loading(){
     	$('#chartlist').click(function(){
     		$('.drop-down').toggleClass('drop-down--active');
     	});
     	 let grids = GridStack.initAll({
     	    	animate: true,
     	      float: true, 
     	      resizable: { handles: 'all'} // do all sides for testing
     	    });
     	 
     	 
     	 
     	 
     	var tabs = $("#tabs").tabs();
     	//console.log("tabsready---",tabs);	

     	//filter
     	$('.ui-tabs-anchor').on('click', function (e) 
     			{
     				
     				var target = $(e.target).attr("id") // activated tab
     				//alert("target:::"+target);
     				
     				target = target.replace("settabname","");
     				//alert("target:::"+target);
     				
     				
     				for (var k=1;k<=tabcount;k++)
     				{
     					
     					if (k == parseInt(target))
     					{
     						//alert("inside::::"+target);
     						target = parseInt(target);
     						//alert("target::::"+target); 
     						$("#tabfilter"+target).hide();
     						globaltabcount = target;
     						
     					}
     					else 
     					{
     						 $("#tabfilter"+k).show();
     						 
     					}
     					
     				}
  
     			});			
     	
     	
     	
     	
     	try {
     	
      		    observer = new MutationObserver(function(mutations) 
      		    		{
      		    	
      		    	
      		   if (mutations != undefined)
      		   {
 		     			  window.dispatchEvent(new Event('resize'));
 		  		    	//console.log('size changed!###############');
 		  		    	
 		  		    	//console.log(mutations);
 		  		    	gs_height = mutations[0].target.gridstack.el.clientHeight;
 		  		    	gs_width= mutations[0].target.gridstack.el.clientWidth;
 		  		    	
 		  		    	//console.log(gs_height);
 		  		    	//console.log(gs_width);
 		  		  
 		  		    	//mutations[0].target.gridstack.el.parentElement
 		  		    	$('.chart-header div').children().first().height=gs_height;
 		  		    	$('.chart-header div').children().first().width=gs_width;
      		   } 	
     		    	
     		      });
     	}catch(err) 
     	{
     		
     	}   
     		       target = document.querySelector('.grid-stack'); 
     		    	
     			//alert("ready");
     			setTimeout(() => {
     				//alert("on");
     				
     				
     				/* let container = document.querySelector(".grid-stack");
     			    
     				new ResizeObserver(outputsize).observe(container);
     				
     			    console.log("observer::",observer)
     				   observer.observe(target, {
     				        attributes: true
     				      }); */
     				
     				
     			    var $div = document.getElementsByClassName(
     			    	    "grid-stack"
     			    	);

     			    
     				Array.from($div).forEach((div) => {
     					  observer.observe(div, {
     					    attributes: true, 
     					  });
     					})
     				
     				
     				
     				
     			//new ResizeSensor(jQuery('.grid-stack'), function(){console.log('content dimension changed');});
     			}, 100);
     			
     			   
     			globaltabcount=1;
     			
     }

     function outputsize() {
     	
     	  //  console.log('content dimension changed');
     	}
     	//outputsize()

     	function getParameterByName(name) {
 			var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
 			return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
 		}
     	
     	
     	
     	
     	function loadchart1(chartid ,_containerID ,_table){
     		//d = new $.Deferred();

     		
     		//alert("_id:loadchartFilterbyid:::"+chartid);
     		// console.log("chartid-loadchart1-  "+chartid);
     		// console.log("globaltabcount-- 1111 "+globaltabcount_);
     		//$(".dropzone").empty();
     		//$("div.dropzonefilter").empty();
     		//$("div.dropzone").empty();	
     		return new Promise((resolve) => {

     		 	var _id=0;			  
     		 	if (getParameterByName('id') != null)
     			{
     				_id = getParameterByName('id');
     				    				
     			}
     			else		
     				{
     				return;
     				} 

     			$.ajax({method : "POST",	
     				async: false,
     				url : "./setchartDash",
     				data : {
     					id : chartid,
     					dashID:_id,
     				},
     				success : function(result) {

     					
     					console.log("result filter:setchartDash::::::::::::",result);
     		    	var arr = result;

     		    	
     		    	
     		    	if(globalFilterCount !=0)
     	    		{
     		    		globalFilterCountSet=globalFilterCountSet+1;	
     	    		}
     		    	
     		    	var bintype ="";
     		   for (var k = 0; k < arr.length; k++) 
     		   {
//     		    	debugger;
     		    					var queryArr = JSON.parse(arr[k].query_context);
     		    					var filterArr = JSON.parse(arr[k].filter_context);
     		    					 for (var m = 0; m < queryArr.length; m++) 
     		    		     		   {
     		    						 var series = queryArr[m][0].Series;
     		    						 console.log("series######  "+series);
     		    						 if(series == "X-Axis")
     		    							 {
     		    							 
     		    							 var bintype = queryArr[m][0].BinType;
         		    						 console.log("bintype######  "+bintype);
     		    							 
     		    							 }
     		    						
     		    		     		   }
     		    					//console.log('filterArr',filterArr);

     		    		for(let j = 0; j < filterArr.length; j++)
     		    		{
//     		  		    			debugger;
//     		    			alert("globalFilterCountSet  "+globalFilterCountSet);
     		    			if(filterArr.length > 1)
	  		    				{
	  		    				 if(j > 0)
	  		    					{
	  		    					globalFilterCountSet++;
	  		    					tabFilterSet++;
	  		    					}
	  		    				 else
	  		    					 {
	  		    					 if(globalFilterCountSet != 0)
	  		    						 {
	  		    						globalFilterCountSet++;
	  		    						 
	  		    						 }
	  		    					 
	  		    					 
	  		    					 
	  		    					 
	  		    					
	  		    					 }
	  		    				
	  		    				 }
     		    			else
     		    				{
     		    				globalFilterCountSet =tabFilterSet;
     		    				}
     		    			globalFilterCountSet =tabFilterSet;
     		    			var sym='#';
     		    			if (filterArr[j][0].Types.includes('text')){
     		    				sym="Aa";}
     		    				else if(filterArr[j][0].Types.includes('date'))
     		    					{sym="Date";}
     		    				else
     		    					{sym="#";}
     	                    var optionselected= filterArr[j][0].filterselecttypevalue;
     	                    
     	                    var option1 ="";
     	                    var option2 ="";
     	                    var option3 ="";
     	                    //alert("globalFilterCountSet  "+globalFilterCountSet);
     	                    if(optionselected == "adv")
     	                 	{
     	                    //  $("#select_option option:selected" ).val(); 
     	                      option1 = "selected";
     	  
     	                 	}
     	                 else if(optionselected == "topn")
     		             	{
     		                 	//$("#select_option option:selected" ).val(); 
     		                 	option2 = "selected";
     		             	}
     	                 else if(optionselected == "basicfiltering")
 			             	{
 			                 	//$("#select_option option:selected" ).val(); 
 			                 	option3 = "selected";
 			                 	//alert("globalFilterCountSet  "+globalFilterCountSet);
 			                   var set_userlimitBasic = filterArr[j][0].userLimit_basic;
 	   							 console.log("set_userlimitBasic---"+set_userlimitBasic);
 	   							 
 			                 	 var set_userBasic_check = filterArr[j][0].limitBasic_check;
 								
 								 console.log("set_userBasic_check---"+set_userBasic_check);
 								   var checkedValue = "";
 									if(set_userBasic_check == 0)
 										{											
 										   $('#numberofrowsdivs_basic'+globalFilterCountSet).hide();										
 										}
 									else
 										{
 										   checkedValue = "checked";
 										   $('#numberofrowsdivs_basic'+globalFilterCountSet).hide();
 										}
// 			                 	onChangedata(globalFilterCountSet); 			              	
 			             	}
     	                    var andorvalueselected= filterArr[j][0].andorvalue;
     	                    var and ="";
     	                    var or ="";
     	                    if( andorvalueselected == " and ")
 						    {										                     
     	                    	and = "checked";
 							}
 					   else if( andorvalueselected == " or ")
 						   {
 						   or = "checked";
                            }
     	                    
     	                   var optionselectedADV1= filterArr[j][0].filterselect1;
						   console.log("optionselectedADV1####---"+optionselectedADV1);
						   
						  // var optionselectedADV2= filterArr[j][0].filterselect2;
		                    var option11 ="";
		                    var option12 ="";
		                    var option13 ="";
		                    var option14 ="";
		                    var option15 ="";
		                    var option16 ="";
		                    var option17 ="";
		                    var option18 ="";
		                    var option19 ="";
		                    var option10 ="";
		                    
		                    var option41 ="";
		                    var option42 ="";
		                    var option43 ="";
		                    var option44 ="";
		                    var option45 ="";
		                    var option46 ="";
		                    
		                    var option51 ="";
		                    var option52 ="";
		                    var option53 ="";
		                    var option54 ="";
		                    
		                    
		                    
		                    
						   if( optionselectedADV1 == "contains")
							    {										                     
							      option11 = "selected";
								}
						   else if( optionselectedADV1 == "does not contain")
							   {
							   option12 = "selected";
                               }
						   else if(optionselectedADV1 == "starts with")
							   {        
							   option13 = "selected";
							   }
						   else if( optionselectedADV1 == "does not start with")
							   {
							   option14 = "selected";
                               }
					      else if(optionselectedADV1 == "is")
							   {        
					    	  option15 = "selected";
							   }
					      else if( optionselectedADV1 == "is not")
							   {
					    	  option16 = "selected";
                               }
				          else if(optionselectedADV1 == "is blank")
							   {        
				        	  option17 = "selected";
							   }
				          else if(optionselectedADV1 == "is not blank")
							   {        
				        	  option18 = "selected";
							   }
				          else if( optionselectedADV1 == "is empty")
							   {
				        	  option19 = "selected";
                               }
			              else if(optionselectedADV1 == "is not empty")
							   {        
			            	  option10 = "selected";
							   }
						   
			              else if(optionselectedADV1 == "is after")
						   {        
				    	  option41 = "selected";
						   }
				      else if( optionselectedADV1 == "is on or after")
						   {
				    	  option42 = "selected";
                         }
			          else if(optionselectedADV1 == "is before")
						   {        
			        	  option43 = "selected";
						   }
			          else if(optionselectedADV1 == "is on or before")
						   {        
			        	  option44 = "selected";
						   }
			          else if( optionselectedADV1 == "is blank")
						   {
			        	  option45 = "selected";
                          }
		              else if(optionselectedADV1 == "is not blank")
						   {        
		            	  option46 = "selected";
						   }
		              else if(optionselectedADV1 == "is less than")
					   {        
		        	  option51 = "selected";
					   }
		          else if(optionselectedADV1 == "is less than or equal to")
					   {        
		        	  option52 = "selected";
					   }
		          else if( optionselectedADV1 == "is greater than")
					   {
		        	  option53 = "selected";
                     }
	              else if(optionselectedADV1 == "is greater than or equal to")
					   {        
	            	  option54 = "selected";
					   }
						   
						   
						   var optionselectedADV2= filterArr[j][0].filterselect2;	
						   console.log("optionselectedADV2####---"+optionselectedADV2);
						   
						   
			                    var option21 ="";
			                    var option22 ="";
			                    var option23 ="";
			                    var option24 ="";
			                    var option25 ="";
			                    var option26 ="";
			                    var option27 ="";
			                    var option28 ="";
			                    var option29 ="";
			                    var option20 ="";
			                    
			                    var option31 ="";
			                    var option32 ="";
			                    var option33 ="";
			                    var option34 ="";
			                    var option35 ="";
			                    var option36 ="";
			                    
			                    var option61 ="";
			                    var option62 ="";
			                    var option63 ="";
			                    var option64 ="";
			                   
			                    
							   if( optionselectedADV2 == "contains")
								    {										                     
								      option21 = "selected";
									}
							   else if( optionselectedADV2 == "does not contain")
								   {
								   option22 = "selected";
                                   }
							   else if(optionselectedADV2 == "starts with")
								   {        
								   option23 = "selected";
								   }
							   else if( optionselectedADV2 == "does not start with")
								   {
								   option24 = "selected";
                                   }
						      else if(optionselectedADV2 == "is")
								   {        
						    	  option25 = "selected";
								   }
						      else if( optionselectedADV2 == "is not")
								   {
						    	  option26 = "selected";
                                   }
					          else if(optionselectedADV2 == "is blank")
								   {        
					        	  option27 = "selected";
								   }
					          else if(optionselectedADV2 == "is not blank")
								   {        
					        	  option28 = "selected";
								   }
					          else if( optionselectedADV2 == "is empty")
								   {
					        	  option29 = "selected";
                                   }
				              else if(optionselectedADV2 == "is not empty")
								   {        
				            	  option20 = "selected";
								   }
							   
							   
				              else if(optionselectedADV2 == "is after")
							   {        
					    	  option31 = "selected";
							   }
					      else if( optionselectedADV2 == "is on or after")
							   {
					    	  option32 = "selected";
                              }
				          else if(optionselectedADV2 == "is before")
							   {        
				        	  option33 = "selected";
							   }
				          else if(optionselectedADV2 == "is on or before")
							   {        
				        	  option34 = "selected";
							   }
				          else if( optionselectedADV2 == "is blank")
							   {
				        	  option35 = "selected";
                               }
			              else if(optionselectedADV2 == "is not blank")
							   {        
			            	  option36 = "selected";
							   }
							   
			              else if(optionselectedADV2 == " < ")
						   {        
			        	  option61 = "selected";
						   }
			          else if(optionselectedADV2 == "<=")
						   {        
			        	  option62 = "selected";
						   }
			          else if( optionselectedADV2 == ">")
						   {
			        	  option63 = "selected";
                         }
		              else if(optionselectedADV2 == ">=")
						   {        
		            	  option64 = "selected";
						   }
							   
							   
     	                    
     	                    
     	                    
     	                    
//     							alert("globalFilterCountSet  "+globalFilterCountSet);
     							   var comparisontxt = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:0;top: -35px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+tabFilterSet+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+tabFilterSet+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+globalFilterCountSet+"' disabled><option value='adv'  "+option1+" >Advance</option><option value='topn'  "+option2+">Top N</option><option value='basicfiltering' "+option3+" >Basic Filtering</option></select><div class='mt-2' id='optiondivtopn"+globalFilterCountSet+"' ><select class='form-control' id='top_bottom' style='display:none;' form-control><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+globalFilterCountSet+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
     								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+globalFilterCountSet+")' disabled><option value='contains' "+option11+">contains</option><option value='does not contain' "+option12+">does not contain</option><option value='starts with' "+option13+">starts with</option><option value='does not start with' "+option14+">does not start with</option><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is blank' "+option17+">is blank</option><option value='is not blank' "+option18+">is not blank</option><option value='is empty' "+option19+">is empty</option><option value='is not empty' "+option10+">is not empty</option></select></div>"
     								+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+globalFilterCountSet+"'  onblur='filtervaluekeyup("+globalFilterCountSet+")'></div>"
     								+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='and"+globalFilterCountSet+"' value=' and '  "+and+" disabled><label class='css-iwo4qd' for='and"+globalFilterCountSet+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ "" +globalFilterCountSet+"' id='or"+globalFilterCountSet+"' value=' or ' "+or+" disabled><label class='css-iwo4qd' for='or"+globalFilterCountSet+"'>Or </label></div></div>"
     								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+globalFilterCountSet+")' disabled><option value='contains' "+option21+">contains</option><option value='does not contain' "+option22+">does not contain</option><option value='starts with' "+option23+">starts with</option><option value='does not start with' "+option24+">does not start with</option><option value='is' "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is blank' "+option27+">is blank</option><option value='is not blank' "+option28+">is not blank</option><option value='is empty' "+option29+">is empty</option><option value='is not empty' "+option20+">is not empty</option></select></div>"
     								+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+globalFilterCountSet+"' onblur='filterinvaluekeyup("+globalFilterCountSet+")'></div></div>"
     								+"<div class='cb-range-form-div mt-2' id='basicfiltercheck"+globalFilterCountSet+"' style='display:none'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form mb-0'><label class='css-12xei9w'><input type='checkbox' id='limitvalue_basic"+globalFilterCountSet+"' "+checkedValue+"  class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' onclick='limitbasicvalue("+globalFilterCountSet+")' autocomplete='off' disabled><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Limit Value</span></label></div></div></div></div>"
    								+"<div class='cb-range-form-div' id='numberofrowsdivs_basic"+globalFilterCountSet+"' style='display:none'><div class='cb-range-Label'><span class='label'><div class='cb-range-text'>Number of rows</div></span><div class='cb-input-css'><input type='number' list='numberlist_basic' id='numberofrows_basic"+globalFilterCountSet+"' onblur ='numberOfRowsBasic"+globalFilterCountSet+"'  name='numberofrows_basic"+globalFilterCountSet+"' class='form-control' value="+set_userlimitBasic+" min='5' max='50000' disabled/><datalist id='numberlist_basic'><option value='5000'>5000</option><option value='10000'>10000</option><option value='25000'>25000</option><option value='50000'>50000</option></datalist></div></div></div>"   								
     								+"<div id='basicselectdiv"+globalFilterCountSet+"' style='display:none'><div class='mt-2 cb-basic-height'><ul class='list-unstyled pl-0' id='selectbasicdata"+globalFilterCountSet+"' ></ul></div></div>"
     								+"<div id='topnselectdiv"+globalFilterCountSet+"' value= '"+ filterArr[j][0].filterselecttypevalue+"' style='display:none' disabled><div class='mt-2'><span>Show items</span><select id='filtertopn"+globalFilterCountSet+"' value ='"+ filterArr[j][0].filtertopn+"'  class='form-control' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' value='"+filterArr[j][0].filtertopvalue+"' id='topninput"+globalFilterCountSet+"'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>";


     			    				var comparisonnumber = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:0;top: -35px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+tabFilterSet+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+tabFilterSet+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+globalFilterCountSet+"'  disabled><option value='adv'  "+option1+" >Advance</option><option value='topn'  "+option2+">Top N</option><option value='basicfiltering' "+option3+" >Basic Filtering</option></select><div class='mt-2' id='optiondivtopn"+globalFilterCountSet+"' ><select class='form-control' id='top_bottom' style='display:none;' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+globalFilterCountSet+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"     			    			
     			    				+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+globalFilterCountSet+")' disabled><option value='<' "+option51+" >is less than</option><option value='<='  "+option52+">is less than or equal to</option><option value='>' "+option53+">is greater than</option><option value='>=' "+option54+">is greater than or equal to</option><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is blank' "+option17+">is blank</option><option value='is not blank' "+option18+">is not blank</option></select></div>"    								
     			    				+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+globalFilterCountSet+"'  onblur='filtervaluekeyup("+globalFilterCountSet+")'></div>"
     			    				+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='and"+globalFilterCountSet+"' value='and' "+and+" disabled><label class='css-iwo4qd' for='and"+globalFilterCountSet+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='or"+globalFilterCountSet+"' value='or' "+or+" disabled><label class='css-iwo4qd' for='or"+globalFilterCountSet+"'>Or </label></div></div>"
     								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+globalFilterCountSet+")' disabled><option value='<' "+option61+" >is less than</option><option value='<=' "+option62+" >is less than or equal to</option><option value='>' "+option63+">is greater than</option><option value='>=' "+option64+">is greater than or equal to</option><option value='is'  "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is blank' "+option35+">is blank</option><option value='is not blank' "+option36+">is not blank</option></select></div>"
    								+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+globalFilterCountSet+"' onblur='filterinvaluekeyup("+globalFilterCountSet+")'></div></div>"	    								    								    			    			  			    				
     								+"<div class='cb-range-form-div mt-2' id='basicfiltercheck"+globalFilterCountSet+"' style='display:none'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form mb-0'><label class='css-12xei9w'><input type='checkbox' id='limitvalue_basic"+globalFilterCountSet+"' "+checkedValue+" class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' onclick='limitbasicvalue("+globalFilterCountSet+")' autocomplete='off' disabled><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Limit Value</span></label></div></div></div></div>"
    								+"<div class='cb-range-form-div' id='numberofrowsdivs_basic"+globalFilterCountSet+"' style='display:none'><div class='cb-range-Label'><span class='label'><div class='cb-range-text'>Number of rows</div></span><div class='cb-input-css'><input type='number' list='numberlist_basic' id='numberofrows_basic"+globalFilterCountSet+"' onblur ='numberOfRowsBasic"+globalFilterCountSet+"' name='numberofrows_basic"+globalFilterCountSet+"' class='form-control' value="+set_userlimitBasic+" min='5' max='50000' disabled/><datalist id='numberlist_basic'><option value='5000'>5000</option><option value='10000'>10000</option><option value='25000'>25000</option><option value='50000'>50000</option></datalist></div></div></div>"   								    								
     								+"<div id='basicselectdiv"+globalFilterCountSet+"' style='display:none'><div class='mt-2 cb-basic-height'><ul class='list-unstyled pl-0' id='selectbasicdata"+globalFilterCountSet+"' ></ul></div></div>"
     								+"<div id='topnselectdiv"+globalFilterCountSet+"' value= '"+ filterArr[j][0].filterselecttypevalue+"' disabled style='display:none' ><div class='mt-2'><span>Show items</span><select id='filtertopn"+globalFilterCountSet+"' class='form-control' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' value='"+filterArr[j][0].filtertopvalue+"' id='topninput"+globalFilterCountSet+"'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>";

     								
     								var comparisondate = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:0;top: -35px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+tabFilterSet+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+tabFilterSet+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+globalFilterCountSet+"'  disabled><option value='adv' "+option1+">Advance</option><option value='topn'  "+option2+">Top N</option><option value='basicfiltering' "+option3+" >Basic Filtering</option></select><div class='mt-2' id='optiondivtopn"+globalFilterCountSet+"'><select class='form-control' id='top_bottom' style='display:none;' form-control><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+globalFilterCountSet+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"    								
     								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+globalFilterCountSet+")' disabled><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is after' "+option41+">is after</option><option value='is on or after' "+option42+">is on or after</option><option value='is before' "+option43+">is before</option><option value='is on or before' "+option44+">is on or before</option><option value='is blank' "+option45+">is blank</option><option value='is not blank' "+option46+">is not blank</option></select></div>"
    								+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+globalFilterCountSet+"'  onblur='filtervaluekeyup("+globalFilterCountSet+")'></div>"
    								+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='and"+globalFilterCountSet+"' value='and' "+and+" disabled><label class='css-iwo4qd' for='and"+globalFilterCountSet+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='or"+globalFilterCountSet+"' value='or' "+or+" disabled><label class='css-iwo4qd' for='or"+globalFilterCountSet+"'>Or </label></div></div>"
     								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+globalFilterCountSet+")' disabled><option value='is' "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is after' "+option31+">is after</option><option value='is on or after' "+option32+">is on or after</option><option value='is before'  "+option33+">is before</option><option value='is on or before' "+option34+">is on or before</option><option value='is blank' "+option35+">is blank</option><option value='is not blank' "+option36+">is not blank</option></select></div>"
    								+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+globalFilterCountSet+"' onblur='filterinvaluekeyup("+globalFilterCountSet+")'></div></div>"	    									    							    								
     								+"<div class='cb-range-form-div mt-2' id='basicfiltercheck"+globalFilterCountSet+"' style='display:none'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form mb-0'><label class='css-12xei9w'><input type='checkbox' id='limitvalue_basic"+globalFilterCountSet+"' "+checkedValue+" class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' onclick='limitbasicvalue("+globalFilterCountSet+")' autocomplete='off' disabled><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Limit Value</span></label></div></div></div></div>"
    								+"<div class='cb-range-form-div' id='numberofrowsdivs_basic"+globalFilterCountSet+"' style='display:none'><div class='cb-range-Label'><span class='label'><div class='cb-range-text'>Number of rows</div></span><div class='cb-input-css'><input type='number' list='numberlist_basic' id='numberofrows_basic"+globalFilterCountSet+"' onblur ='numberOfRowsBasic"+globalFilterCountSet+"' name='numberofrows_basic"+globalFilterCountSet+"' class='form-control' value="+set_userlimitBasic+" min='5' max='50000' disabled/><datalist id='numberlist_basic'><option value='5000'>5000</option><option value='10000'>10000</option><option value='25000'>25000</option><option value='50000'>50000</option></datalist></div></div></div>"   								    								
     								+"<div id='basicselectdiv"+globalFilterCountSet+"' style='display:none'><div class='mt-2 cb-basic-height'><ul class='list-unstyled pl-0' id='selectbasicdata"+globalFilterCountSet+"' ></ul></div></div>"
     								+"<div id='topnselectdiv"+globalFilterCountSet+"' value= '"+ filterArr[j][0].filterselecttypevalue+"' style='display:none' disabled><div class='mt-2'><span>Show items</span><select id='filtertopn"+globalFilterCountSet+"' class='form-control' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' value='"+filterArr[j][0].filtertopvalue+"' id='topninput"+globalFilterCountSet+"'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>	";

      	    				var elfitem="";

     	    				elfitem = "<div class='column-card DataMapping_column-card__2VBWp ui-draggable ui-draggable-handle dropzoneselect'  draggable='true' "
     	    				+ "data-field='"+filterArr[j][0].Field +"' data-types='"+filterArr[j][0].Types+"' > <span class='datatype'>"+sym+"</span>"
     	    				+ "<span class='DataMapping_column-title__2yLXi'>"+filterArr[j][0].Field+"</span><span style='text-align: -webkit-right; display:none' ><a href='Javascript:void(0);' class='xicon delete'  title='Remove'>X</a></span>"

     	    				
     		    			if (filterArr[j][0].Types.includes("text")) { //multi
     		    				elfitem = elfitem + comparisontxt;
     		    			//alert("text");
     		    			}
     		    			else if (filterArr[j][0].Types.includes("number"))
     		    			{
     		    				elfitem = elfitem + comparisonnumber;
     		    				//alert("number");
     		    			}
     		    			else
     		    			{
     		    				elfitem = elfitem + comparisondate;
     		    			//	alert("date");
     		    			}
     		    			
     	    			
     		    			elfitem = elfitem + "</div>";
     		    			
     		    			var divmain= "<div id='tabfilter"+(tabFilterSet)+"' class=\"tabfilter\" data-chartid='"+ chartid+"' data-tabid='"+globaltabcount_+","+chartid+", " +_containerID+" ' >"+elfitem+"</div>";
     		    			//console.log("divmain--    "+divmain);
     		    	
     		    			$('.dropzonefilter').append(divmain);
     		    			
//     		    			chart_filter_set_list_index_tab.push(tabFilterSet  ,  globaltabcount_);
     		    			
     		    			 if(optionselected == "adv")
			                 	{
     		    				 
     		    				chart_filter_set_list_index_adv.push({
     								//'Types' : $(listofdimsfilter[i]).data('series'),
     								'index' : globalFilterCountSet,
     								'tabFilterSet' :tabFilterSet,
     								'optionselected' :optionselected,
     								'globaltabcount_':globaltabcount_
     							});
     		    		
 	    					 console.log("chart_filter_set_list_index_adv     "+chart_filter_set_list_index_adv);
 	    					
 	    					 selectcount = selectcount + 1;
 	    					 
			                      option1 = "selected";		                
			                      
			                 	}
			                 else if(optionselected == "topn")
				             	{
//			                	 alert("topn  "+globalFilterCountSet );
			                	 
			                	 chart_filter_set_list_index_topn.push({
	     								//'Types' : $(listofdimsfilter[i]).data('series'),
	     								'index' : globalFilterCountSet,
	     								'tabFilterSet' :tabFilterSet,
	     								'optionselected' :optionselected,
	     								'globaltabcount_':globaltabcount_
	     							});
			                	 
			                	 
//			                	 chart_filter_set_list_index_topn.push(globalFilterCountSet  ,  tabFilterSet  ,  optionselected);
			                	 console.log("chart_filter_set_list_index_topn     "+chart_filter_set_list_index_topn);
			                	 
			                	 selectcount = selectcount + 1;
			                	 
				                 	option2 = "selected";

				                 	
				             	}
			                 else if(optionselected == "basicfiltering")
				             	{
			                	
//			                	 alert("basicfiltering  "+globalFilterCountSet );
				                 	option3 = "selected";
				             
				                 		
					                 	selectcount = globalFilterCountSet;
					                 	chart_filter_set_list_index_basic.push({			     								
		     								'index' : globalFilterCountSet,
		     								'tabFilterSet' :tabFilterSet,
		     								'optionselected' :optionselected,
		     								'globaltabcount_':globaltabcount_
		     							});
			
				                 		selectBasicFilter_set(globalFilterCountSet,filterArr[j][0].Field,filterArr[j][0].basic_Fil_Val_Array ,_table ,set_userlimitBasic,selectcount);

					                	 console.log("chart_filter_set_list_index_basic     "+chart_filter_set_list_index_basic);
					                
				             	}
     		    			
     		    		}
    		 
     				    }
     		   $('.dropzonefilter').children().each(function()
    			  		{
    	  				  var dropzonefilter = $(this).attr('data-tabid');
    	  				
    	  				  var str = dropzonefilter.split(',')[0];
    	  				//console.log("str   "+str); 
    	  				dropzonefilter = str;
    	  				
    	  				if(dropzonefilter != 1)
    		  			{
    		  				//alert("tabfiltercount hide"+tabFilterSet);
    		  				
    		  				 $("#tabfilter"+(tabFilterSet)).hide();
    		  			}
    		  		else if(dropzonefilter == 1)
    		  			 {
    		  				//alert("tabfiltercount show"+tabFilterSet);
    		  				 $("#tabfilter"+(tabFilterSet)).show();
    		  			 }
    		  		
    		  		    // ij = ij+1;
    	  				
    			  		});
     		   
     		   
     		  // console.log("loadfilter tabFilterSet:::::"+tabFilterSet);
     		   
     		   tabfilter_k=tabFilterSet;
     		   
     		  // console.log("loadfilter tabfilter_k:::::"+tabfilter_k);
     		   
     		   tabFilterSet=tabFilterSet+1;    		  
     		  
     	  				  
     	   },
     	   
     		    error : function(data) { 
     		    	console.log(data);
     		    }
     		});
     			
     	    resolve();
     	});
     	}

     	
     	function filter_Hide_Show()
     	{
     		
//     		debugger;
			
   				var chart_filter_set_list_index_adv_var = chart_filter_set_list_index_adv ;
				var chart_filter_set_list_index_topn_var =  chart_filter_set_list_index_topn ;
				var chart_filter_set_list_index_basic_var = chart_filter_set_list_index_basic;
				 
				 
				 console.log("chart_filter_set_list_index_adv_var  ",chart_filter_set_list_index_adv_var);
				 console.log("chart_filter_set_list_index_topn_var  ",chart_filter_set_list_index_topn_var);
				 console.log("chart_filter_set_list_index_basic_var  ",chart_filter_set_list_index_basic_var);
				 
				 for(let j = 0; j < chart_filter_set_list_index_adv_var.length; j++)					 
		    		{		    			
			    	var index_adv = chart_filter_set_list_index_adv_var[j].index;			    		
					var tabfilter_adv =chart_filter_set_list_index_adv_var[j].tabFilterSet;
					var option_adv =chart_filter_set_list_index_adv_var[j].optionselected;
					var tabcount_adv =chart_filter_set_list_index_adv_var[j].globaltabcount_;
					
					 console.log("index_adv  "+index_adv);
					 console.log("tabfilter_adv  "+tabfilter_adv);
					 console.log("option_adv  "+option_adv);		
					 console.log("tabcount_adv  "+tabcount_adv);	
					 
					 if(option_adv == "adv")
	     	          	{
						 if(globaltabcount == tabcount_adv)
							 {
	     	            
	     	             	    $("#optiondivselect"+index_adv).show(); 
	     					    $("#topnselectdiv"+index_adv).hide();
	     						$("#basicselectdiv"+index_adv).hide();
	     						$("#basicfiltercheck"+index_adv).hide();
	     						$("#limitvalue_basic"+index_adv).hide(); 
	     						$("#numberofrowsdivs_basic"+index_adv).hide();
	     						$("#selectbasicdata"+index_adv).hide();		
	     						
							 }  
	     	          	}
					
					 
		    		}
			
				 
				 for(let j = 0; j < chart_filter_set_list_index_topn_var.length; j++)					 
		    		{	
					 
			    	var index_topn = chart_filter_set_list_index_topn_var[j].index;			    		
					var tabfilter_topn =chart_filter_set_list_index_topn_var[j].tabFilterSet;
					var option_topn =chart_filter_set_list_index_topn_var[j].optionselected;
					var tabcount_topn =chart_filter_set_list_index_topn_var[j].globaltabcount_;
					
					 console.log("index_topn  "+index_topn);
					 console.log("tabfilter_topn  "+tabfilter_topn);
					 console.log("option_topn  "+option_topn);	
					 console.log("tabcount_topn  "+tabcount_topn);
					 
					 if(option_topn == "topn")
	     	          	{
						 if(globaltabcount == tabcount_topn)
							 {
							
	     	              		$("#topnselectdiv"+index_topn).show();
	     	              		
	     	              		$("#optiondivselect"+index_topn).hide(); 									   
	     						$("#basicselectdiv"+index_topn).hide();
	     						   
	     						$("#limitvalue_basic"+index_topn).hide(); 
	     					    $("#numberofrowsdivs_basic"+index_topn).hide();
	     						$("#selectbasicdata"+index_topn).hide();	
	     						 $("#basicfiltercheck"+index_topn).hide();
	     						  
							 
							 }
						 
	     	          	}
					
		    		}
			
				 for(let j = 0; j < chart_filter_set_list_index_basic_var.length; j++)					 
		    		{	
					 
			    	var index_basic = chart_filter_set_list_index_basic_var[j].index;			    		
					var tabfilter_basic =chart_filter_set_list_index_basic_var[j].tabFilterSet;
					var option_basic =chart_filter_set_list_index_basic_var[j].optionselected;
					var tabcount_basic =chart_filter_set_list_index_basic_var[j].globaltabcount_;
					
					 console.log("index_basic  "+index_basic);
					 console.log("tabfilter_basic  "+tabfilter_basic);
					 console.log("option_basic  "+option_basic);	
					 console.log("tabcount_basic  "+tabcount_basic);
					 
					  if(option_basic == "basicfiltering")
	     	          	{
						  if(globaltabcount == tabcount_basic)
							 {
	     						$("#basicselectdiv"+index_basic).show();
	     						$("#limitvalue_basic"+index_basic).show(); 
	     						$("#basicfiltercheck"+index_basic).show();
	     								
	     						$("#selectbasicdata"+index_basic).show();
	     						$("#optiondivselect"+index_basic).hide(); 
	     						$("#topnselectdiv"+index_basic).hide();
							 } 
	     	              	
	     	          	}
			 
		    		}

     	}
     	
     	

     	function loadchartFilterbyidedit(chartid,varDimFilter){
     	
     		return new Promise((resolve) => {

     		 	var _id=0;			  
     		 	if (getParameterByName('id') != null)
     			{
     				_id = getParameterByName('id');
     				   				
     			}
     			else		
     				{
     				return;
     				} 

     			$.ajax({method : "POST",	
     				async: false,
     				url : "./setchartDashbyidedit",
     				data : {
     					id : chartid,
     					dashID : _id,
     					varDimFilter1 : varDimFilter,
     				},
     				success : function(result) {

     					
     					//console.log("result filter:setchartDashbyid::::::::::::",result);
     		    	var arr = result;
     		    	//console.log("tabfilter_k edit--  "+tabfilter_k);
     		    	globalFilterCount_edit=globalFilterCount_edit+1;
     		   for (var k = 0; k < tabfilter_k; k++) 
     		   {
     		    
     		    					var queryArr = JSON.parse(arr[k].query_context);
     		    					var filterArr = JSON.parse(arr[k].filter_context);
     		    					
     		    					console.log('filterArr',filterArr);

     		    		for(let j = 0; j < filterArr.length; j++)
     		    		{
     		  		    
     		    			var sym='#';
     		    			if (filterArr[j][0].Types.includes('text')){
     		    				sym="Aa";}
     		    				else if(filterArr[j][0].Types.includes('date'))
     		    					{sym="Date";}
     		    				else
     		    					{sym="#";}
     	                    var optionselected= filterArr[j][0].filterselecttypevalue;
     	                    
     	                    var option1 ="";
     	                    var option2 ="";
     	                    var option3 ="";
     	                    //alert("globalFilterCountSet  "+globalFilterCountSet);
     	                    if(optionselected == "adv")
     	                 	{
     	                    //  $("#select_option option:selected" ).val(); 
     	                      option1 = "selected";
     	  
     	                 	}
     	                 else if(optionselected == "topn")
     		             	{
     		                 	//$("#select_option option:selected" ).val(); 
     		                 	option2 = "selected";
     		             	}
     	                 else if(optionselected == "basicfiltering")
 			             	{
 			                 	//$("#select_option option:selected" ).val(); 
 			                 	option3 = "selected";
 			                 	//alert("globalFilterCountSet  "+globalFilterCountSet);
// 			                 	onChangedata(globalFilterCount_edit);
 			                 	
 			                 	
 			                 	
 			             	}
     	                    
     						  
     	                   var optionselectedADV1= filterArr[j][0].filterselect1;
						   console.log("optionselectedADV1####---"+optionselectedADV1);
						   
						  // var optionselectedADV2= filterArr[j][0].filterselect2;
		                    var option11 ="";
		                    var option12 ="";
		                    var option13 ="";
		                    var option14 ="";
		                    var option15 ="";
		                    var option16 ="";
		                    var option17 ="";
		                    var option18 ="";
		                    var option19 ="";
		                    var option10 ="";
		                    
		                    var option41 ="";
		                    var option42 ="";
		                    var option43 ="";
		                    var option44 ="";
		                    var option45 ="";
		                    var option46 ="";
		                    
		                    var option51 ="";
		                    var option52 ="";
		                    var option53 ="";
		                    var option54 ="";
		                    
		                    
		                    
		                    
						   if( optionselectedADV1 == "contains")
							    {										                     
							      option11 = "selected";
								}
						   else if( optionselectedADV1 == "does not contain")
							   {
							   option12 = "selected";
                               }
						   else if(optionselectedADV1 == "starts with")
							   {        
							   option13 = "selected";
							   }
						   else if( optionselectedADV1 == "does not start with")
							   {
							   option14 = "selected";
                               }
					      else if(optionselectedADV1 == "is")
							   {        
					    	  option15 = "selected";
							   }
					      else if( optionselectedADV1 == "is not")
							   {
					    	  option16 = "selected";
                               }
				          else if(optionselectedADV1 == "is blank")
							   {        
				        	  option17 = "selected";
							   }
				          else if(optionselectedADV1 == "is not blank")
							   {        
				        	  option18 = "selected";
							   }
				          else if( optionselectedADV1 == "is empty")
							   {
				        	  option19 = "selected";
                               }
			              else if(optionselectedADV1 == "is not empty")
							   {        
			            	  option10 = "selected";
							   }
						   
			              else if(optionselectedADV1 == "is after")
						   {        
				    	  option41 = "selected";
						   }
				      else if( optionselectedADV1 == "is on or after")
						   {
				    	  option42 = "selected";
                         }
			          else if(optionselectedADV1 == "is before")
						   {        
			        	  option43 = "selected";
						   }
			          else if(optionselectedADV1 == "is on or before")
						   {        
			        	  option44 = "selected";
						   }
			          else if( optionselectedADV1 == "is blank")
						   {
			        	  option45 = "selected";
                          }
		              else if(optionselectedADV1 == "is not blank")
						   {        
		            	  option46 = "selected";
						   }
		              else if(optionselectedADV1 == "is less than")
					   {        
		        	  option51 = "selected";
					   }
		          else if(optionselectedADV1 == "is less than or equal to")
					   {        
		        	  option52 = "selected";
					   }
		          else if( optionselectedADV1 == "is greater than")
					   {
		        	  option53 = "selected";
                     }
	              else if(optionselectedADV1 == "is greater than or equal to")
					   {        
	            	  option54 = "selected";
					   }
						   
						   
						   var optionselectedADV2= filterArr[j][0].filterselect2;	
						   console.log("optionselectedADV2####---"+optionselectedADV2);
						   
						   
			                    var option21 ="";
			                    var option22 ="";
			                    var option23 ="";
			                    var option24 ="";
			                    var option25 ="";
			                    var option26 ="";
			                    var option27 ="";
			                    var option28 ="";
			                    var option29 ="";
			                    var option20 ="";
			                    
			                    var option31 ="";
			                    var option32 ="";
			                    var option33 ="";
			                    var option34 ="";
			                    var option35 ="";
			                    var option36 ="";
			                    
			                    var option61 ="";
			                    var option62 ="";
			                    var option63 ="";
			                    var option64 ="";
			                   
			                    
							   if( optionselectedADV2 == "contains")
								    {										                     
								      option21 = "selected";
									}
							   else if( optionselectedADV2 == "does not contain")
								   {
								   option22 = "selected";
                                   }
							   else if(optionselectedADV2 == "starts with")
								   {        
								   option23 = "selected";
								   }
							   else if( optionselectedADV2 == "does not start with")
								   {
								   option24 = "selected";
                                   }
						      else if(optionselectedADV2 == "is")
								   {        
						    	  option25 = "selected";
								   }
						      else if( optionselectedADV2 == "is not")
								   {
						    	  option26 = "selected";
                                   }
					          else if(optionselectedADV2 == "is blank")
								   {        
					        	  option27 = "selected";
								   }
					          else if(optionselectedADV2 == "is not blank")
								   {        
					        	  option28 = "selected";
								   }
					          else if( optionselectedADV2 == "is empty")
								   {
					        	  option29 = "selected";
                                   }
				              else if(optionselectedADV2 == "is not empty")
								   {        
				            	  option20 = "selected";
								   }
							   
							   
				              else if(optionselectedADV2 == "is after")
							   {        
					    	  option31 = "selected";
							   }
					      else if( optionselectedADV2 == "is on or after")
							   {
					    	  option32 = "selected";
                              }
				          else if(optionselectedADV2 == "is before")
							   {        
				        	  option33 = "selected";
							   }
				          else if(optionselectedADV2 == "is on or before")
							   {        
				        	  option34 = "selected";
							   }
				          else if( optionselectedADV2 == "is blank")
							   {
				        	  option35 = "selected";
                               }
			              else if(optionselectedADV2 == "is not blank")
							   {        
			            	  option36 = "selected";
							   }
							   
			              else if(optionselectedADV2 == " < ")
						   {        
			        	  option61 = "selected";
						   }
			          else if(optionselectedADV2 == "<=")
						   {        
			        	  option62 = "selected";
						   }
			          else if( optionselectedADV2 == ">")
						   {
			        	  option63 = "selected";
                         }
		              else if(optionselectedADV2 == ">=")
						   {        
		            	  option64 = "selected";
						   }
							   
							   
							   
	 						   var andorvalueselected= filterArr[j][0].andorvalue;
	    	                       var and ="";
	    	                       var or ="";
	 	    	                    if( andorvalueselected == " and ")
	 							    {										                     
	 	    	                    	and = "checked";
	 								}
	    						   else if( andorvalueselected == " or ")
	    							   {
	    							   or = "checked";
	    	                           }
	 						   
	                     
	   							   
	   							   console.log("andorvalueselected-------"+andorvalueselected);
     	                    
     	                    
     	                    
     	                    
 	    	    	                  //  "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:0;top: -35px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+tabFilterSet+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+tabFilterSet+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+globalFilterCountSet+"' disabled><option value='adv'  "+option1+" >Advance</option><option value='topn'  "+option2+">Top N</option><option value='basicfiltering' "+option3+" >Basic Filtering</option></select><div class='mt-2' id='optiondivtopn"+globalFilterCountSet+"' ><select class='form-control' id='top_bottom' style='display:none;' form-control><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+globalFilterCountSet+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
     	                  // console.log("globalFilterCount---"+globalFilterCount);
     							   var comparisontxt = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:0;top: -35px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+tabfilter_k_edit+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+tabfilter_k_edit+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+globalFilterCount_edit+"' disabled><option value='adv'  "+option1+" >Advance</option><option value='topn'  "+option2+">Top N</option><option value='basicfiltering' "+option3+" >Basic Filtering</option></select><div class='mt-2' id='optiondivtopn"+globalFilterCount_edit+"' style=''><select class='form-control' id='top_bottom' style='display:none;' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+globalFilterCount_edit+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
     								+"<div class='mt-2 mb-2'><select class='form-control'  disabled><option value='contains' "+option11+">contains</option><option value='does not contain' "+option12+">does not contain</option><option value='starts with' "+option13+">starts with</option><option value='does not start with' "+option14+">does not start with</option><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is blank' "+option17+">is blank</option><option value='is not blank' "+option18+">is not blank</option><option value='is empty' "+option19+">is empty</option><option value='is not empty' "+option10+">is not empty</option></select></div>"
     								+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+globalFilterCount_edit+"'  onblur='filtervaluekeyup("+globalFilterCount_edit+")'></div>"
     								+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCount_edit+"' id='and"+globalFilterCount_edit+"'  value='"+ filterArr[j][0].andorvalue+"'  "+and+" disabled><label class='css-iwo4qd' for='and"+globalFilterCount_edit+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCount_edit+"' id='or"+globalFilterCount_edit+"'  value='"+ filterArr[j][0].andorvalue+"'  "+or+" disabled><label class='css-iwo4qd' for='or"+globalFilterCount_edit+"'>Or </label></div></div>"
     								+"<div class='mt-2 mb-2'><select class='form-control'  disabled><option value='contains' "+option21+">contains</option><option value='does not contain' "+option22+">does not contain</option><option value='starts with' "+option23+">starts with</option><option value='does not start with' "+option24+">does not start with</option><option value='is' "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is blank' "+option27+">is blank</option><option value='is not blank' "+option28+">is not blank</option><option value='is empty' "+option29+">is empty</option><option value='is not empty' "+option20+">is not empty</option></select></div>"
     								+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+globalFilterCount_edit+"' onblur='filterinvaluekeyup("+globalFilterCount_edit+")'></div></div>"
     								+"<div class='cb-range-form-div mt-2' id='basicfiltercheck"+globalFilterCount_edit+"' style='display:none'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form mb-0'><label class='css-12xei9w'><input type='checkbox' id='limitvalue_basic"+globalFilterCount_edit+"' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' onclick='limitbasicvalue("+globalFilterCount_edit+")' autocomplete='off' disabled><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Limit Value</span></label></div></div></div></div>"
    								+"<div class='cb-range-form-div' id='numberofrowsdivs_basic"+globalFilterCount_edit+"' style='display:none'><div class='cb-range-Label'><span class='label'><div class='cb-range-text'>Number of rows</div></span><div class='cb-input-css'><input type='number' list='numberlist_basic' id='numberofrows_basic"+globalFilterCount_edit+"' name='numberofrows_basic"+globalFilterCount_edit+"' class='form-control' value='1000' min='5' max='50000' disabled/><datalist id='numberlist_basic'><option value='5000'>5000</option><option value='10000'>10000</option><option value='25000'>25000</option><option value='50000'>50000</option></datalist></div></div></div>"   								    								
     								+"<div id='basicselectdiv"+globalFilterCount_edit+"' ><div class='mt-2 cb-basic-height'><ul class='list-unstyled pl-0' id='selectbasicdata"+globalFilterCount_edit+"' ></ul></div></div>"
     								+"<div id='topnselectdiv"+globalFilterCount_edit+"' value= '"+ filterArr[j][0].filterselecttypevalue+"' style='display:none' disabled><div class='mt-2'><span>Show items</span><select id='filtertopn"+globalFilterCount_edit+"' value ='"+ filterArr[j][0].filtertopn+"'  class='form-control' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' value='"+filterArr[j][0].filtertopvalue+"' id='topninput"+globalFilterCount_edit+"'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>";


	     							  var comparisonnumber = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:0;top: -35px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+tabFilterSet+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+tabfilter_k_edit+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+globalFilterCount_edit+"'  disabled><option value='adv'  "+option1+" >Advance</option><option value='topn'  "+option2+">Top N</option><option value='basicfiltering' "+option3+" >Basic Filtering</option></select><div class='mt-2' id='optiondivtopn"+globalFilterCount_edit+"' ><select class='form-control' id='top_bottom' style='display:none;' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+globalFilterCount_edit+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"     			    			
	   			    				+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+globalFilterCount_edit+")' disabled><option value='<' "+option51+" >is less than</option><option value='<='  "+option52+">is less than or equal to</option><option value='>' "+option53+">is greater than</option><option value='>=' "+option54+">is greater than or equal to</option><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is blank' "+option17+">is blank</option><option value='is not blank' "+option18+">is not blank</option></select></div>"    								
	   			    				+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+globalFilterCount_edit+"'  onblur='filtervaluekeyup("+globalFilterCount_edit+")'></div>"
	   			    				+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCount_edit+"' id='and"+globalFilterCount_edit+"' value='and' "+and+" disabled><label class='css-iwo4qd' for='and"+globalFilterCount_edit+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCount_edit+"' id='or"+globalFilterCount_edit+"' value='or' "+or+" disabled><label class='css-iwo4qd' for='or"+globalFilterCount_edit+"'>Or </label></div></div>"
	   								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+globalFilterCount_edit+")' disabled><option value='<' "+option61+" >is less than</option><option value='<=' "+option62+" >is less than or equal to</option><option value='>' "+option63+">is greater than</option><option value='>=' "+option64+">is greater than or equal to</option><option value='is'  "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is blank' "+option35+">is blank</option><option value='is not blank' "+option36+">is not blank</option></select></div>"
	  								+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+globalFilterCount_edit+"' onblur='filterinvaluekeyup("+globalFilterCount_edit+")'></div></div>"	    								    								    			    			  			    				
	   								+"<div class='cb-range-form-div mt-2' id='basicfiltercheck"+globalFilterCount_edit+"' style='display:none'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form mb-0'><label class='css-12xei9w'><input type='checkbox' id='limitvalue_basic"+globalFilterCount_edit+"' "+checkedValue+" class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' onclick='limitbasicvalue("+globalFilterCount_edit+")' autocomplete='off' disabled><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Limit Value</span></label></div></div></div></div>"
	  								+"<div class='cb-range-form-div' id='numberofrowsdivs_basic"+globalFilterCount_edit+"' style='display:none'><div class='cb-range-Label'><span class='label'><div class='cb-range-text'>Number of rows</div></span><div class='cb-input-css'><input type='number' list='numberlist_basic' id='numberofrows_basic"+globalFilterCount_edit+"' onblur ='numberOfRowsBasic"+globalFilterCount_edit+"' name='numberofrows_basic"+globalFilterCount_edit+"' class='form-control' value="+set_userlimitBasic+" min='5' max='50000' disabled/><datalist id='numberlist_basic'><option value='5000'>5000</option><option value='10000'>10000</option><option value='25000'>25000</option><option value='50000'>50000</option></datalist></div></div></div>"   								    								
	   								+"<div id='basicselectdiv"+globalFilterCount_edit+"' style='display:none'><div class='mt-2 cb-basic-height'><ul class='list-unstyled pl-0' id='selectbasicdata"+globalFilterCount_edit+"' ></ul></div></div>"
	   								+"<div id='topnselectdiv"+globalFilterCount_edit+"' value= '"+ filterArr[j][0].filterselecttypevalue+"' disabled style='display:none' ><div class='mt-2'><span>Show items</span><select id='filtertopn"+globalFilterCount_edit+"' class='form-control' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' value='"+filterArr[j][0].filtertopvalue+"' id='topninput"+globalFilterCount_edit+"'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>";
	
	   								
	   								var comparisondate = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:0;top: -35px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+tabFilterSet+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+tabfilter_k_edit+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+globalFilterCount_edit+"'  disabled><option value='adv' "+option1+">Advance</option><option value='topn'  "+option2+">Top N</option><option value='basicfiltering' "+option3+" >Basic Filtering</option></select><div class='mt-2' id='optiondivtopn"+globalFilterCount_edit+"'><select class='form-control' id='top_bottom' style='display:none;' form-control><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+globalFilterCount_edit+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"    								
	   								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+globalFilterCount_edit+")' disabled><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is after' "+option41+">is after</option><option value='is on or after' "+option42+">is on or after</option><option value='is before' "+option43+">is before</option><option value='is on or before' "+option44+">is on or before</option><option value='is blank' "+option45+">is blank</option><option value='is not blank' "+option46+">is not blank</option></select></div>"
	  								+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+globalFilterCount_edit+"'  onblur='filtervaluekeyup("+globalFilterCount_edit+")'></div>"
	  								+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCount_edit+"' id='and"+globalFilterCount_edit+"' value='and' "+and+" disabled><label class='css-iwo4qd' for='and"+globalFilterCount_edit+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCount_edit+"' id='or"+globalFilterCount_edit+"' value='or' "+or+" disabled><label class='css-iwo4qd' for='or"+globalFilterCount_edit+"'>Or </label></div></div>"
	   								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+globalFilterCount_edit+")' disabled><option value='is' "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is after' "+option31+">is after</option><option value='is on or after' "+option32+">is on or after</option><option value='is before'  "+option33+">is before</option><option value='is on or before' "+option34+">is on or before</option><option value='is blank' "+option35+">is blank</option><option value='is not blank' "+option36+">is not blank</option></select></div>"
	  								+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+globalFilterCount_edit+"' onblur='filterinvaluekeyup("+globalFilterCount_edit+")'></div></div>"	    									    							    								
	   								+"<div class='cb-range-form-div mt-2' id='basicfiltercheck"+globalFilterCount_edit+"' style='display:none'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form mb-0'><label class='css-12xei9w'><input type='checkbox' id='limitvalue_basic"+globalFilterCount_edit+"' "+checkedValue+" class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' onclick='limitbasicvalue("+globalFilterCount_edit+")' autocomplete='off' disabled><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Limit Value</span></label></div></div></div></div>"
	  								+"<div class='cb-range-form-div' id='numberofrowsdivs_basic"+globalFilterCount_edit+"' style='display:none'><div class='cb-range-Label'><span class='label'><div class='cb-range-text'>Number of rows</div></span><div class='cb-input-css'><input type='number' list='numberlist_basic' id='numberofrows_basic"+globalFilterCount_edit+"' onblur ='numberOfRowsBasic"+globalFilterCount_edit+"' name='numberofrows_basic"+globalFilterCount_edit+"' class='form-control' value="+set_userlimitBasic+" min='5' max='50000' disabled/><datalist id='numberlist_basic'><option value='5000'>5000</option><option value='10000'>10000</option><option value='25000'>25000</option><option value='50000'>50000</option></datalist></div></div></div>"   								    								
	   								+"<div id='basicselectdiv"+globalFilterCount_edit+"' style='display:none'><div class='mt-2 cb-basic-height'><ul class='list-unstyled pl-0' id='selectbasicdata"+globalFilterCount_edit+"' ></ul></div></div>"
	   								+"<div id='topnselectdiv"+globalFilterCount_edit+"' value= '"+ filterArr[j][0].filterselecttypevalue+"' style='display:none' disabled><div class='mt-2'><span>Show items</span><select id='filtertopn"+globalFilterCount_edit+"' class='form-control' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' value='"+filterArr[j][0].filtertopvalue+"' id='topninput"+globalFilterCount_edit+"'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>	";

     			    				var elfitem="";

     			    				elfitem = "<div class='column-card DataMapping_column-card__2VBWp ui-draggable ui-draggable-handle dropzoneselect'  draggable='true' "
     			    				+ "data-field='"+filterArr[j][0].Field +"' data-types='"+filterArr[j][0].Types+"' > <span class='datatype'>"+sym+"</span>"
     			    				+ "<span class='DataMapping_column-title__2yLXi'>"+filterArr[j][0].Field+"</span><span style='text-align: -webkit-right;position:absolute;right: -2px; top: 8px;  display:none'><a href='Javascript:void(0);' class='xicon delete'  title='Remove'>X</a></span>"

     			    				 if(optionselected == "adv")
     				                 	{
     				                    //  $("#select_option option:selected" ).val(); 
     				                    
     				                   // alert("adv  "+globalFilterCountSet );
     				                      option1 = "selected";
     				                      setTimeout(() => {
     				                    	  $("#optiondivselect"+globalFilterCount_edit).show(); 
     										  $("#topnselectdiv"+globalFilterCount_edit).hide();
     										  $("#basicselectdiv"+globalFilterCount_edit).hide();
     										  $("#numberofrowsdivs_basic"+globalFilterCount_edit).hide();
     										  $("#basicfiltercheck"+globalFilterCount_edit).hide();
     									}, 2000);
     				                      
     				                 	}
     				                 else if(optionselected == "topn")
     					             	{
     				                	// alert("topn  "+globalFilterCountSet );
     					                 	option2 = "selected";
     					                 	setTimeout(() => {
     					                 		$("#optiondivselect"+globalFilterCount_edit).hide(); 
     										    $("#topnselectdiv"+globalFilterCount_edit).show();
     										    $("#basicselectdiv"+globalFilterCount_edit).hide();
     										    $("#numberofrowsdivs_basic"+globalFilterCount_edit).hide();
     										    $("#basicfiltercheck"+globalFilterCount_edit).hide();
     										}, 2000);
     					                 	
     					             	}
     				                 else if(optionselected == "basicfiltering")
     					             	{
     				                	// alert("basicfiltering  "+globalFilterCountSet );
     					                 	option3 = "selected";
     					                 	setTimeout(() => {
     					                 		$("#optiondivselect"+globalFilterCount_edit).hide(); 
     										    $("#topnselectdiv"+globalFilterCount_edit).hide();
     										    $("#basicselectdiv"+globalFilterCount_edit).show();
//     										    $("#numberofrowsdivs_basic"+globalFilterCount_edit).show();
     										    $("#basicfiltercheck"+globalFilterCount_edit).show();
     											  var basicfiltervalue___ = filterArr[j][0].basic_Fil_Val_Array;
     											//  console.log("basicfiltervalue___::::::: ",basicfiltervalue___ );
     											    selectBasicFilter_set(globalFilterCount_edit,filterArr[j][0].Field,filterArr[j][0].basic_Fil_Val_Array ,_table , filterArr[j][0].userLimit_basic);
     										    //selectBasicFilter_set(j,filterArr[j][0].basic_Fil_Val_Array);
     										    
     										}, 1000);
     					                 	
     					             	}
     			    			
     			    			 	 $('#numberofrows_basic'+globalFilterCount_edit).change(function() {
     			    						//alert("numberofrows_basic@@@@@");
     			    						var basic_userlimit=$("#numberofrows_basic"+globalFilterCount_edit).val();
     			    					
     			    						//console.log('basic_userlimit:::'+basic_userlimit);	
     			    						  selectBasicFilter_set(globalFilterCount_edit,filterArr[j][0].Field,filterArr[j][0].basic_Fil_Val_Array ,_table , filterArr[j][0].userLimit_basic);
     										  //$("#btnChart").trigger("click");
     			    					});
     		    			
     		    			if (filterArr[j][0].Types.includes("text")) 
     		    			{ //multi
     		    				elfitem = elfitem + comparisontxt;
     		    			//alert("text");
     		    			}
     		    			else if (filterArr[j][0].Types.includes("number"))
     		    			{
     		    				elfitem = elfitem + comparisonnumber;
     		    			//	alert("number");
     		    			}
     		    			else
     		    			{
     		    				elfitem = elfitem + comparisondate;
     		    			//	alert("date");
     		    			}
     		    			
     	    			
     		    			elfitem = elfitem + "</div>";
     		    			
     		    			var divmain= "<div id='tabfilter"+(tabfilter_k_edit)+"' class =\"tabfilter\" data-chartid='"+chartid+"''>"+elfitem+"</div>";
     		    			//console.log("divmain--    "+divmain);
     		    			 if(optionselected == "adv")
			                 	{
			                   
			                   
			                    	  $("#optiondivselect"+globalFilterCount_edit).show(); 
									  $("#topnselectdiv"+globalFilterCount_edit).hide();
									  $("#basicselectdiv"+globalFilterCount_edit).hide();
									  $("#basicfiltercheck"+globalFilterCount_edit).hide();
									  $("#limitvalue_basic"+globalFilterCount_edit).hide(); 
									  $("#numberofrowsdivs_basic"+globalFilterCount_edit).hide();
									  $("#selectbasicdata"+globalFilterCount_edit).hide();		
									  
									  
			                 	}
			                 else if(optionselected == "topn")
				             	{
			                	        $("#basicfiltercheck"+globalFilterCount_edit).hide();
				                 		$("#topnselectdiv"+globalFilterCount_edit).show();
				                 		$("#optiondivselect"+globalFilterCount_edit).hide(); 									   
									    $("#basicselectdiv"+globalFilterCount_edit).hide();
									   
									    $("#limitvalue_basic"+globalFilterCount_edit).hide(); 
										$("#numberofrowsdivs_basic"+globalFilterCount_edit).hide();
										$("#selectbasicdata"+globalFilterCount_edit).hide();
				             	}			
			                 else if(optionselected == "basicfiltering")
				             	{
			                	// alert("basicfiltering  "+globalFilterCountSet );
				                 	
				                 		
									    $("#basicselectdiv"+globalFilterCount_edit).show();
									    $("#limitvalue_basic"+globalFilterCount_edit).show(); 
										$("#basicfiltercheck"+globalFilterCount_edit).show();
										
										$("#selectbasicdata"+globalFilterCount_edit).show();
										$("#optiondivselect"+globalFilterCount_edit).hide(); 
									    $("#topnselectdiv"+globalFilterCount_edit).hide();
									   
				                 	
				             	}
     		    			
     		    			
     		    			$('.dropzonefilter').append(divmain);
     		    		}
     		    			 
     				    }
     				       		
     	   },
     		    error : function(data) { 
     		    	console.log(data);
     		    }
     		});

     	    resolve();
     	});
     	}


 ////----------build filter when building chart
 var globalFilterCount=0;
 //var tabfilter_k=0;


 function loadchartFilterbyid(chartid ,table_)
 {  
//	 debugger;
   if(globalFilterCountSet> 0)
 	  {
 	  globalFilterCount=globalFilterCountSet; 	
 	  }

   if(tabfilter_k > 0)
	   {
	   tabfilter_k=tabfilter_k+1;
	   }
 	 
 
 	return new Promise((resolve) => {

 	 	var _id=0;			  
 	 	if (getParameterByName('id') != null)
 		{
 			_id = getParameterByName('id');
 						
 		}
 		else		
 			{
 			return;
 			} 

 		$.ajax({method : "POST",	
 			async: false,
 			url : "./setchartDashbyid",
 			data : {
 				id : chartid,
 				dashID:_id,
 			},
 			success : function(result) {

 				
 				console.log("result filter:setchartDashbyid::::::::::::",result);
 	    	var arr = result;
// 	    	console.log("arr:setchartDashbyid::::::::::::",arr);
// 	    	console.log("arr:setchartDashbyid::::::::::::",arr.length);
// 	    	console.log("arr:globalFilterCount:::::::::::"+globalFilterCount);
 	    	//tabfilter_k=tabfilter_k+1;
 	    	if(globalFilterCount !=0)
 	    		{
 	    		  globalFilterCount = globalFilterCount+1;
 	    		}
 	    	
 	    	
// 	    	alert("globalFilterCount  "+globalFilterCount);
// 	    	alert("globalFilterCountSet  "+globalFilterCountSet); 
 	   for ( var k=0 ; k < arr.length; k++) 
 	   {
 		   
 	    					var queryArr = JSON.parse(arr[k].query_context);
 	    					var filterArr = JSON.parse(arr[k].filter_context);
 	    					
 	    					console.log('filterArr',filterArr);
 	    					console.log('filterArr length   ',filterArr.length);

 	    		for(let j = 0; j < filterArr.length; j++)
 	    		{
 	  		    			if(filterArr.length > 1)
 	  		    				{
 	  		    				 if(j > 0)
 	  		    					{
 	  		    					  globalFilterCount++;
 	  		    					}
 	  		    				
 	  		    				 }


 	    			var sym='#';
 	    			if (filterArr[j][0].Types.includes('text')){
 	    				sym="Aa";}
 	    				else if(filterArr[j][0].Types.includes('date'))
 	    					{sym="Date";}
 	    				else
 	    					{sym="#";}
                     var optionselected= filterArr[j][0].filterselecttypevalue;
                     //console.log("optionselected--"+optionselected);
                     
                     
                     var option1 ="";
                     var option2 ="";
                     var option3 ="";
                     //alert("globalFilterCountSet  "+globalFilterCountSet);
                     if(optionselected == "adv")
                  	{
                     //  $("#select_option option:selected" ).val(); 
                       option1 = "selected";
   
                  	}
                  else if(optionselected == "topn")
 	             	{
 	                 	//$("#select_option option:selected" ).val(); 
 	                 	option2 = "selected";
 	             	}
                  else if(optionselected == "basicfiltering")
 	             	{
//                	  debugger;
 	                 	//$("#select_option option:selected" ).val(); 
 	                 	option3 = "selected";
 	                 	//alert("globalFilterCountSet  "+globalFilterCountSet);
 	                 	
 	                 	 var set_userlimitBasic = filterArr[j][0].userLimit_basic;
 	                 	 var set_userBasic_check = filterArr[j][0].limitBasic_check;
						 console.log("set_userlimitBasic---"+set_userlimitBasic);
						 console.log("set_userBasic_check---"+set_userBasic_check);
						   var checkedValue = "";
							if(set_userBasic_check == 0)
								{
								checkedValue = "";	
//									 $('#numberofrowsdivs_basic'+globalFilterCount).hide();
									
								}
							else
								{
								checkedValue = "checked";
//								 $('#numberofrowsdivs_basic'+globalFilterCount).show();
								}
// 	                 	onChangedata(globalFilterCount);
 	                 	
 	                 	
 	                 	
 	             	}
  
                     var optionselectedADV1= filterArr[j][0].filterselect1;
					   console.log("optionselectedADV1####---"+optionselectedADV1);
					   
					  // var optionselectedADV2= filterArr[j][0].filterselect2;
	                    var option11 ="";
	                    var option12 ="";
	                    var option13 ="";
	                    var option14 ="";
	                    var option15 ="";
	                    var option16 ="";
	                    var option17 ="";
	                    var option18 ="";
	                    var option19 ="";
	                    var option10 ="";
	                    
	                    var option41 ="";
	                    var option42 ="";
	                    var option43 ="";
	                    var option44 ="";
	                    var option45 ="";
	                    var option46 ="";
	                    
	                    var option51 ="";
	                    var option52 ="";
	                    var option53 ="";
	                    var option54 ="";
	                    
	                    
	                    
	                    
					   if( optionselectedADV1 == "contains")
						    {										                     
						      option11 = "selected";
							}
					   else if( optionselectedADV1 == "does not contain")
						   {
						   option12 = "selected";
                         }
					   else if(optionselectedADV1 == "starts with")
						   {        
						   option13 = "selected";
						   }
					   else if( optionselectedADV1 == "does not start with")
						   {
						   option14 = "selected";
                         }
				      else if(optionselectedADV1 == "is")
						   {        
				    	  option15 = "selected";
						   }
				      else if( optionselectedADV1 == "is not")
						   {
				    	  option16 = "selected";
                         }
			          else if(optionselectedADV1 == "is blank")
						   {        
			        	  option17 = "selected";
						   }
			          else if(optionselectedADV1 == "is not blank")
						   {        
			        	  option18 = "selected";
						   }
			          else if( optionselectedADV1 == "is empty")
						   {
			        	  option19 = "selected";
                         }
		              else if(optionselectedADV1 == "is not empty")
						   {        
		            	  option10 = "selected";
						   }
					   
		              else if(optionselectedADV1 == "is after")
					   {        
			    	  option41 = "selected";
					   }
			      else if( optionselectedADV1 == "is on or after")
					   {
			    	  option42 = "selected";
                   }
		          else if(optionselectedADV1 == "is before")
					   {        
		        	  option43 = "selected";
					   }
		          else if(optionselectedADV1 == "is on or before")
					   {        
		        	  option44 = "selected";
					   }
		          else if( optionselectedADV1 == "is blank")
					   {
		        	  option45 = "selected";
                    }
	              else if(optionselectedADV1 == "is not blank")
					   {        
	            	  option46 = "selected";
					   }
	              else if(optionselectedADV1 == "is less than")
				   {        
	        	  option51 = "selected";
				   }
	          else if(optionselectedADV1 == "is less than or equal to")
				   {        
	        	  option52 = "selected";
				   }
	          else if( optionselectedADV1 == "is greater than")
				   {
	        	  option53 = "selected";
               }
            else if(optionselectedADV1 == "is greater than or equal to")
				   {        
          	  option54 = "selected";
				   }
					   
					   
					   var optionselectedADV2= filterArr[j][0].filterselect2;	
					   console.log("optionselectedADV2####---"+optionselectedADV2);
					   
					   
		                    var option21 ="";
		                    var option22 ="";
		                    var option23 ="";
		                    var option24 ="";
		                    var option25 ="";
		                    var option26 ="";
		                    var option27 ="";
		                    var option28 ="";
		                    var option29 ="";
		                    var option20 ="";
		                    
		                    var option31 ="";
		                    var option32 ="";
		                    var option33 ="";
		                    var option34 ="";
		                    var option35 ="";
		                    var option36 ="";
		                    
		                    var option61 ="";
		                    var option62 ="";
		                    var option63 ="";
		                    var option64 ="";
		                   
		                    
						   if( optionselectedADV2 == "contains")
							    {										                     
							      option21 = "selected";
								}
						   else if( optionselectedADV2 == "does not contain")
							   {
							   option22 = "selected";
                             }
						   else if(optionselectedADV2 == "starts with")
							   {        
							   option23 = "selected";
							   }
						   else if( optionselectedADV2 == "does not start with")
							   {
							   option24 = "selected";
                             }
					      else if(optionselectedADV2 == "is")
							   {        
					    	  option25 = "selected";
							   }
					      else if( optionselectedADV2 == "is not")
							   {
					    	  option26 = "selected";
                             }
				          else if(optionselectedADV2 == "is blank")
							   {        
				        	  option27 = "selected";
							   }
				          else if(optionselectedADV2 == "is not blank")
							   {        
				        	  option28 = "selected";
							   }
				          else if( optionselectedADV2 == "is empty")
							   {
				        	  option29 = "selected";
                             }
			              else if(optionselectedADV2 == "is not empty")
							   {        
			            	  option20 = "selected";
							   }						   
			              else if(optionselectedADV2 == "is after")
						   {        
				    	  option31 = "selected";
						   }
					      else if( optionselectedADV2 == "is on or after")
							   {
					    	  option32 = "selected";
	                        }
				          else if(optionselectedADV2 == "is before")
							   {        
				        	  option33 = "selected";
							   }
				          else if(optionselectedADV2 == "is on or before")
							   {        
				        	  option34 = "selected";
							   }
				          else if( optionselectedADV2 == "is blank")
							   {
				        	  option35 = "selected";
	                         }
			              else if(optionselectedADV2 == "is not blank")
							   {        
			            	  option36 = "selected";
							   }
							   
			              else if(optionselectedADV2 == " < ")
						   {        
			        	  option61 = "selected";
						   }
				          else if(optionselectedADV2 == "<=")
							   {        
				        	  option62 = "selected";
							   }
				          else if( optionselectedADV2 == ">")
							   {
				        	  option63 = "selected";
		                   }
			              else if(optionselectedADV2 == ">=")
							   {        
			            	  option64 = "selected";
							   }
						   						
 						   
 						   var andorvalueselected= filterArr[j][0].andorvalue;
    	                       var and ="";
    	                       var or ="";
 	    	                    if( andorvalueselected == " and ")
 							    {										                     
 	    	                    	and = "checked";
 								}
    						   else if( andorvalueselected == " or ")
    							   {
    							   or = "checked";
    	                           }
 						   
                     
   							   
   							   console.log("andorvalueselected-------"+andorvalueselected);
 	    	                    
 	    			var comparisontxt = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:0;top: -35px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+tabfilter_k+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+tabfilter_k+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+globalFilterCount+"' disabled><option value='adv'  "+option1+" >Advance</option><option value='topn'  "+option2+">Top N</option><option value='basicfiltering' "+option3+" >Basic Filtering</option></select><div class='mt-2' id='optiondivtopn"+globalFilterCount+"' ><select class='form-control' id='top_bottom' style='display:none;' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+globalFilterCount+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
 					+"<div class='mt-2 mb-2'><select class='form-control'  disabled><option value='contains' "+option11+">contains</option><option value='does not contain' "+option12+">does not contain</option><option value='starts with' "+option13+">starts with</option><option value='does not start with' "+option14+">does not start with</option><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is blank' "+option17+">is blank</option><option value='is not blank' "+option18+">is not blank</option><option value='is empty' "+option19+">is empty</option><option value='is not empty' "+option10+">is not empty</option></select></div>"
 					+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"'  onblur='filtervaluekeyup("+globalFilterCount+")'></div>"
 					+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCount+"' id='and"+globalFilterCount+"'  value=' and ' "+and+" disabled><label class='css-iwo4qd' for='and"+globalFilterCount+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCount+"' id='or"+globalFilterCount+"'  value=' or ' "+or+" disabled><label class='css-iwo4qd' for='or"+globalFilterCount+"'>Or </label></div></div>"
 					+"<div class='mt-2 mb-2'><select class='form-control'  disabled><option value='contains' "+option21+">contains</option><option value='does not contain' "+option22+">does not contain</option><option value='starts with' "+option23+">starts with</option><option value='does not start with' "+option24+">does not start with</option><option value='is' "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is blank' "+option27+">is blank</option><option value='is not blank' "+option28+">is not blank</option><option value='is empty' "+option29+">is empty</option><option value='is not empty' "+option20+">is not empty</option></select></div>"
 					+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+globalFilterCount+"' onblur='filterinvaluekeyup("+globalFilterCount+")'></div></div>"
 					+"<div class='cb-range-form-div mt-2' id='basicfiltercheck"+globalFilterCount+"' style='display:none'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form mb-0'><label class='css-12xei9w'><input type='checkbox' id='limitvalue_basic"+globalFilterCount+"' "+checkedValue+" class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' onclick='limitbasicvalue("+globalFilterCount+")' autocomplete='off' disabled><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Limit Value</span></label></div></div></div></div>"
					+"<div class='cb-range-form-div' id='numberofrowsdivs_basic"+globalFilterCount+"' value= '"+set_userlimitBasic+"' style='display:none'><div class='cb-range-Label'><span class='label'><div class='cb-range-text'>Number of rows</div></span><div class='cb-input-css'><input type='number' list='numberlist_basic' id='numberofrows_basic"+globalFilterCount+"' name='numberofrows_basic"+globalFilterCount+"' class='form-control' value='1000' min='5' max='50000' disabled/><datalist id='numberlist_basic'><option value='5000'>5000</option><option value='10000'>10000</option><option value='25000'>25000</option><option value='50000'>50000</option></datalist></div></div></div>"   								    								     														
 					+"<div id='basicselectdiv"+globalFilterCount+"' ><div class='mt-2 cb-basic-height'><ul class='list-unstyled pl-0' id='selectbasicdata"+globalFilterCount+"' ></ul></div></div>"
 					+"<div id='topnselectdiv"+globalFilterCount+"' value= '"+ filterArr[j][0].filterselecttypevalue+"'  style='display:none' disabled><div class='mt-2'><span>Show items</span><select id='filtertopn"+globalFilterCount+"' value ='"+ filterArr[j][0].filtertopn+"'  class='form-control' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' value='"+filterArr[j][0].filtertopvalue+"' id='topninput"+globalFilterCount+"' onblur='topninput("+globalFilterCount+")'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>";

 	    			var comparisonnumber = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:0;top: -35px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+tabfilter_k+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+tabfilter_k+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+globalFilterCount+"'  disabled><option value='adv'  "+option1+" >Advance</option><option value='topn'  "+option2+">Top N</option><option value='basicfiltering' "+option3+" >Basic Filtering</option></select><div class='mt-2' id='optiondivtopn"+globalFilterCount+"' ><select class='form-control' id='top_bottom' style='display:none;' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+globalFilterCount+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"     			    			
	    		    +"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+globalFilterCount+")' disabled><option value='<' "+option51+" >is less than</option><option value='<='  "+option52+">is less than or equal to</option><option value='>' "+option53+">is greater than</option><option value='>=' "+option54+">is greater than or equal to</option><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is blank' "+option17+">is blank</option><option value='is not blank' "+option18+">is not blank</option></select></div>"    								
	    			+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+globalFilterCount+"'  onblur='filtervaluekeyup("+globalFilterCount+")'></div>"
	    			+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCount+"' id='and"+globalFilterCount+"' value='and'  "+and+" disabled><label class='css-iwo4qd' for='and"+globalFilterCount+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCount+"' id='or"+globalFilterCount+"' value='or' "+or+" disabled><label class='css-iwo4qd' for='or"+globalFilterCount+"'>Or </label></div></div>"
					+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+globalFilterCount+")' disabled><option value='<' "+option61+" >is less than</option><option value='<=' "+option62+" >is less than or equal to</option><option value='>' "+option63+">is greater than</option><option value='>=' "+option64+">is greater than or equal to</option><option value='is'  "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is blank' "+option35+">is blank</option><option value='is not blank' "+option36+">is not blank</option></select></div>"
					+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+globalFilterCount+"' onblur='filterinvaluekeyup("+globalFilterCount+")'></div></div>"	    								    								    			    			  			    				
					+"<div class='cb-range-form-div mt-2' id='basicfiltercheck"+globalFilterCount+"' style='display:none'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form mb-0'><label class='css-12xei9w'><input type='checkbox' id='limitvalue_basic"+globalFilterCount+"' "+checkedValue+" class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' onclick='limitbasicvalue("+globalFilterCount+")' autocomplete='off' disabled><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Limit Value</span></label></div></div></div></div>"
					+"<div class='cb-range-form-div' id='numberofrowsdivs_basic"+globalFilterCount+"' value='"+set_userlimitBasic+"' style='display:none'><div class='cb-range-Label'><span class='label'><div class='cb-range-text'>Number of rows</div></span><div class='cb-input-css'><input type='number' list='numberlist_basic' id='numberofrows_basic"+globalFilterCount+"' name='numberofrows_basic"+globalFilterCount+"' class='form-control' value='1000' min='5' max='50000' disabled/><datalist id='numberlist_basic'><option value='5000'>5000</option><option value='10000'>10000</option><option value='25000'>25000</option><option value='50000'>50000</option></datalist></div></div></div>"   								    								     																			
 					+"<div id='basicselectdiv"+globalFilterCount+"' ><div class='mt-2 cb-basic-height'><ul class='list-unstyled pl-0' id='selectbasicdata"+globalFilterCount+"' ></ul></div></div>"
 					+"<div id='topnselectdiv"+globalFilterCount+"' value= '"+ filterArr[j][0].filterselecttypevalue+"' style='display:none' disabled><div class='mt-2'><span>Show items</span><select id='filtertopn"+globalFilterCount+"' value ='"+ filterArr[j][0].filtertopn+"'  class='form-control' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' value='"+filterArr[j][0].filtertopvalue+"' id='topninput"+globalFilterCount+"' onblur='topninput("+globalFilterCount+")'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>";

						
					var comparisondate = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:0;top: -35px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+tabfilter_k+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+tabfilter_k+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+globalFilterCount+"'  disabled><option value='adv' "+option1+">Advance</option><option value='topn'  "+option2+">Top N</option><option value='basicfiltering' "+option3+" >Basic Filtering</option></select><div class='mt-2' id='optiondivtopn"+globalFilterCount+"'><select class='form-control' id='top_bottom' style='display:none;' form-control><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+globalFilterCount+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"    								
					+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+globalFilterCount+")' disabled><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is after' "+option41+">is after</option><option value='is on or after' "+option42+">is on or after</option><option value='is before' "+option43+">is before</option><option value='is on or before' "+option44+">is on or before</option><option value='is blank' "+option45+">is blank</option><option value='is not blank' "+option46+">is not blank</option></select></div>"
					+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+globalFilterCount+"'  onblur='filtervaluekeyup("+globalFilterCount+")'></div>"
					+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCount+"' id='and"+globalFilterCount+"' value='and' "+and+" disabled><label class='css-iwo4qd' for='and"+globalFilterCount+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCount+"' id='or"+globalFilterCount+"' value='or' "+or+" disabled><label class='css-iwo4qd' for='or"+globalFilterCount+"'>Or </label></div></div>"
					+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+globalFilterCount+")' disabled><option value='is' "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is after' "+option31+">is after</option><option value='is on or after' "+option32+">is on or after</option><option value='is before'  "+option33+">is before</option><option value='is on or before' "+option34+">is on or before</option><option value='is blank' "+option35+">is blank</option><option value='is not blank' "+option36+">is not blank</option></select></div>"
					+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+globalFilterCount+"' onblur='filterinvaluekeyup("+globalFilterCount+")'></div></div>"	    									    							    								
					+"<div class='cb-range-form-div mt-2' id='basicfiltercheck"+globalFilterCount+"' style='display:none'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form mb-0'><label class='css-12xei9w'><input type='checkbox' id='limitvalue_basic"+globalFilterCount+"' "+checkedValue+" class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' onclick='limitbasicvalue("+globalFilterCount+")' autocomplete='off' disabled><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Limit Value</span></label></div></div></div></div>"
					+"<div class='cb-range-form-div' id='numberofrowsdivs_basic"+globalFilterCount+"' value='"+set_userlimitBasic+"' style='display:none'><div class='cb-range-Label'><span class='label'><div class='cb-range-text'>Number of rows</div></span><div class='cb-input-css'><input type='number' list='numberlist_basic' id='numberofrows_basic"+globalFilterCount+"' name='numberofrows_basic"+globalFilterCount+"' class='form-control' value='1000' min='5' max='50000' disabled/><datalist id='numberlist_basic'><option value='5000'>5000</option><option value='10000'>10000</option><option value='25000'>25000</option><option value='50000'>50000</option></datalist></div></div></div>"   								    								     																			
 					+"<div id='basicselectdiv"+globalFilterCount+"' ><div class='mt-2 cb-basic-height'><ul class='list-unstyled pl-0' id='selectbasicdata"+globalFilterCount+"' ></ul></div></div>"
 					+"<div id='topnselectdiv"+globalFilterCount+"' value= '"+ filterArr[j][0].filterselecttypevalue+"' style='display:none' disabled><div class='mt-2'><span>Show items</span><select id='filtertopn"+globalFilterCount+"' value ='"+ filterArr[j][0].filtertopn+"'  class='form-control' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' value='"+filterArr[j][0].filtertopvalue+"' id='topninput"+globalFilterCount+"' onblur='topninput("+globalFilterCount+")'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>";

//     				var comparisonnumber = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:0;top: -35px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+tabfilter_k+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+tabfilter_k+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+globalFilterCount+"' disabled><option value='adv'  "+option1+" >Advance</option><option value='topn'  "+option2+">Top N</option><option value='basicfiltering' "+option3+" >Basic Filtering</option></select><div class='mt-2' id='optiondivtopn"+globalFilterCount+"' ><select class='form-control' id='top_bottom' style='display:none;' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+globalFilterCount+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
// 					+"<div class='mt-2 mb-2'><select class='form-control'  disabled><option value='contains' "+option11+">contains</option><option value='does not contain' "+option12+">does not contain</option><option value='starts with' "+option13+">starts with</option><option value='does not start with' "+option14+">does not start with</option><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is blank' "+option17+">is blank</option><option value='is not blank' "+option18+">is not blank</option><option value='is empty' "+option19+">is empty</option><option value='is not empty' "+option10+">is not empty</option></select></div>"
// 					+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+globalFilterCount+"'  onblur='filtervaluekeyup("+globalFilterCount+")'></div>"
// 					+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='and"+globalFilterCount+"'  value=' and ' "+and+" disabled><label class='css-iwo4qd' for='and"+globalFilterCount+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='or"+globalFilterCount+"'  value=' or ' "+or+" disabled><label class='css-iwo4qd' for='or"+globalFilterCount+"'>Or </label></div></div>"
// 					+"<div class='mt-2 mb-2'><select class='form-control'  disabled><option value='contains' "+option21+">contains</option><option value='does not contain' "+option22+">does not contain</option><option value='starts with' "+option23+">starts with</option><option value='does not start with' "+option24+">does not start with</option><option value='is' "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is blank' "+option27+">is blank</option><option value='is not blank' "+option28+">is not blank</option><option value='is empty' "+option29+">is empty</option><option value='is not empty' "+option20+">is not empty</option></select></div>"
// 					+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+globalFilterCount+"' onblur='filterinvaluekeyup("+globalFilterCount+")'></div></div>"
// 					+"<div class='cb-range-form-div mt-2' id='basicfiltercheck"+globalFilterCount+"' style='display:none'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form mb-0'><label class='css-12xei9w'><input type='checkbox' id='limitvalue_basic"+globalFilterCount+"' "+checkedValue+" class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' onclick='limitbasicvalue("+globalFilterCount+")' autocomplete='off' disabled><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Limit Value</span></label></div></div></div></div>"
//					+"<div class='cb-range-form-div' id='numberofrowsdivs_basic"+globalFilterCount+"' value='"+set_userlimitBasic+"' style='display:none'><div class='cb-range-Label'><span class='label'><div class='cb-range-text'>Number of rows</div></span><div class='cb-input-css'><input type='number' list='numberlist_basic' id='numberofrows_basic"+globalFilterCount+"' name='numberofrows_basic"+globalFilterCount+"' class='form-control' value='1000' min='5' max='50000' disabled/><datalist id='numberlist_basic'><option value='5000'>5000</option><option value='10000'>10000</option><option value='25000'>25000</option><option value='50000'>50000</option></datalist></div></div></div>"   								    								     																			
// 					+"<div id='basicselectdiv"+globalFilterCount+"' ><div class='mt-2 cb-basic-height'><ul class='list-unstyled pl-0' id='selectbasicdata"+globalFilterCount+"' ></ul></div></div>"
// 					+"<div id='topnselectdiv"+globalFilterCount+"' value= '"+ filterArr[j][0].filterselecttypevalue+"' style='display:none' disabled><div class='mt-2'><span>Show items</span><select id='filtertopn"+globalFilterCount+"' value ='"+ filterArr[j][0].filtertopn+"'  class='form-control' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' value='"+filterArr[j][0].filtertopvalue+"' id='topninput"+globalFilterCount+"' onblur='topninput("+globalFilterCount+")'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>";
//
//     				var comparisondate = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:0;top: -35px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+tabfilter_k+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+tabfilter_k+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+globalFilterCount+"' disabled><option value='adv' "+option1+">Advance</option><option value='topn'  "+option2+">Top N</option><option value='basicfiltering' "+option3+" >Basic Filtering</option></select><div class='mt-2' id='optiondivtopn"+globalFilterCount+"'><select class='form-control' id='top_bottom' style='display:none;' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+globalFilterCount+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
// 					+"<div class='mt-2 mb-2'><select class='form-control'  disabled><option value='contains' "+option11+">contains</option><option value='does not contain' "+option12+">does not contain</option><option value='starts with' "+option13+">starts with</option><option value='does not start with' "+option14+">does not start with</option><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is blank' "+option17+">is blank</option><option value='is not blank' "+option18+">is not blank</option><option value='is empty' "+option19+">is empty</option><option value='is not empty' "+option10+">is not empty</option></select></div>"
// 					+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+globalFilterCount+"' onblur='filtervaluekeyup("+globalFilterCount+")'></div>"
// 					+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='and"+globalFilterCount+"'  value=' and ' "+and+" disabled><label class='css-iwo4qd' for='and"+globalFilterCount+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='or"+globalFilterCount+"'  value=' or ' "+or+" disabled><label class='css-iwo4qd' for='or"+globalFilterCount+"'>Or </label></div></div>"
// 					+"<div class='mt-2 mb-2'><select class='form-control'  disabled><option value='contains' "+option21+">contains</option><option value='does not contain' "+option22+">does not contain</option><option value='starts with' "+option23+">starts with</option><option value='does not start with' "+option24+">does not start with</option><option value='is' "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is blank' "+option27+">is blank</option><option value='is not blank' "+option28+">is not blank</option><option value='is empty' "+option29+">is empty</option><option value='is not empty' "+option20+">is not empty</option></select></div>"
// 					+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+globalFilterCount+"' onblur='filterinvaluekeyup("+globalFilterCount+")'></div></div>"
// 					+"<div class='cb-range-form-div mt-2' id='basicfiltercheck"+globalFilterCount+"' style='display:none'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form mb-0'><label class='css-12xei9w'><input type='checkbox' id='limitvalue_basic"+globalFilterCount+"' "+checkedValue+" class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' onclick='limitbasicvalue("+globalFilterCount+")' autocomplete='off' disabled><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Limit Value</span></label></div></div></div></div>"
//					+"<div class='cb-range-form-div' id='numberofrowsdivs_basic"+globalFilterCount+"' '"+set_userlimitBasic+"' style='display:none'><div class='cb-range-Label'><span class='label'><div class='cb-range-text'>Number of rows</div></span><div class='cb-input-css'><input type='number' list='numberlist_basic' id='numberofrows_basic"+globalFilterCount+"' name='numberofrows_basic"+globalFilterCount+"' class='form-control' value='1000' min='5' max='50000' disabled/><datalist id='numberlist_basic'><option value='5000'>5000</option><option value='10000'>10000</option><option value='25000'>25000</option><option value='50000'>50000</option></datalist></div></div></div>"   								    								     																			
// 					+"<div id='basicselectdiv"+globalFilterCount+"' ><div class='mt-2 cb-basic-height'><ul class='list-unstyled pl-0' id='selectbasicdata"+globalFilterCount+"' ></ul></div></div>"
// 					+"<div id='topnselectdiv"+globalFilterCount+"' value= '"+ filterArr[j][0].filterselecttypevalue+"' style='display:none' disabled><div class='mt-2'><span>Show items</span><select id='filtertopn"+globalFilterCount+"'  value ='"+ filterArr[j][0].filtertopn+"'  class='form-control' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' value='"+filterArr[j][0].filtertopvalue+"' id='topninput"+globalFilterCount+"' onblur='topninput("+globalFilterCount+")'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>	";

     				var elfitem="";

     				elfitem = "<div class='column-card DataMapping_column-card__2VBWp ui-draggable ui-draggable-handle dropzoneselect'  draggable='true' "
     				+ "data-field='"+filterArr[j][0].Field +"' data-types='"+filterArr[j][0].Types+"' > <span class='datatype'>"+sym+"</span>"
     				+ "<span class='DataMapping_column-title__2yLXi'>"+filterArr[j][0].Field+"</span><span style='text-align: -webkit-right;position:absolute;right: -2px; top: 8px;  display:none'><a href='Javascript:void(0);' class='xicon delete'  title='Remove'>X</a></span>"

//     				if(optionselected == "adv")
//                  	{
//                     //  $("#select_option option:selected" ).val(); 
//                     
//                    // alert("adv  "+globalFilterCount );
//                       option1 = "selected";
//                       setTimeout(() => {
//                     	  $("#optiondivselect"+globalFilterCount).show(); 
// 						  $("#topnselectdiv"+globalFilterCount).hide();
// 						  $("#basicselectdiv"+globalFilterCount).hide();
// 						 $('#numberofrows_basic'+globalFilterCount).hide();
// 						 $('#numberofrowsdivs_basic'+globalFilterCount).hide();
//						  $("#limitvalue_basic"+globalFilterCount).hide(); 
//						 $("#basicfiltercheck"+globalFilterCount).hide();
//						 selectcount++;
// 					}, 2000);
//                       
//                  	}
//                  else if(optionselected == "topn")
// 	             	{
//                 	// alert("topn  "+globalFilterCount );
// 	                 	option2 = "selected";
// 	                 	setTimeout(() => {
// 	                 		$("#optiondivselect"+globalFilterCount).hide(); 
// 						    $("#topnselectdiv"+globalFilterCount).show();
// 						    $("#basicselectdiv"+globalFilterCount).hide();
// 						   $('#numberofrows_basic'+globalFilterCount).hide();
// 						  $("#limitvalue_basic"+globalFilterCount).hide(); 
// 						 $("#basicfiltercheck"+globalFilterCount).hide();
// 						$('#numberofrowsdivs_basic'+globalFilterCount).hide();
// 						selectcount++;
// 						}, 2000);
// 	                 	
// 	             	}
//                  else if(optionselected == "basicfiltering")
//	             	{
//              	 
//	                 	option3 = "selected";
//	                 	
//                 const globalFilterCountSet_local = globalFilterCount;
//                   				                 	
//	                 	setTimeout(() => {
//	                 		
//		                 	selectcount = globalFilterCountSet_local;
//		                 	//alert("selectcount  "+selectcount );
////	                 		 $("#numberofrowsdivs_basic"+globalFilterCount).show();
//	                 		//selectBasicFilter_set(globalFilterCount,filterArr[j][0].Field,filterArr[j][0].basic_Fil_Val_Array ,_table ,set_userlimitBasic,selectcount);
//	 						selectBasicFilter_setbyid(globalFilterCount,filterArr[j][0].Field,filterArr[j][0].basic_Fil_Val_Array ,globalTablename ,filterArr[j][0].userLimit_basic ,selectcount);
//
//	                 		setTimeout(() => {
//		                 		
//	                 		
//						    $("#basicselectdiv"+globalFilterCount).show();
//						    $("#limitvalue_basic"+globalFilterCount).show(); 
//							$("#basicfiltercheck"+globalFilterCount).show();
//						   
//							$("#selectbasicdata"+globalFilterCount).show();
//							$("#optiondivselect"+globalFilterCount).hide(); 
//						    $("#topnselectdiv"+globalFilterCount).hide();
//// 					
////						    if(set_userBasic_check == 0)
////								{								
////								 $('#numberofrowsdivs_basic'+globalFilterCount).hide();					
////								}
////						    else
////								{							
////								 $('#numberofrowsdivs_basic'+globalFilterCount).show();
////								}
//						    
//			 					
//			 					
//			 					
//							
//	                 		}, 1000);						    
//						}, 300);
//	                 	
//	             	}
     			
 	    			if (filterArr[j][0].Types.includes("text")) { //multi
 	    				elfitem = elfitem + comparisontxt;
 	    			//alert("text");
 	    			}
 	    			else if (filterArr[j][0].Types.includes("number"))
 	    			{
 	    				elfitem = elfitem + comparisonnumber;
 	    				//alert("number");
 	    			}
 	    			else
 	    			{
 	    				elfitem = elfitem + comparisondate;
 	    				//alert("date");
 	    			}
 	    			
     			
 	    			elfitem = elfitem + "</div>";
 	    			
 	    			var divmain= "<div id='tabfilter"+(tabfilter_k)+"' class=\"tabfilter\" data-chartid='"+ chartid+"' data-tabid='"+globaltabcount+"," + chartid+"'>" +elfitem+"</div>";
 	    			//console.log("divmain--    "+divmain);
 	    			
 	    			
 	    			
 	    			$('.dropzonefilter').append(divmain);
 	    			
 	    			
 	    			 if(optionselected == "adv")
	                 	{
	    				 
	    				chart_filter_set_list_index_adv.push({
							//'Types' : $(listofdimsfilter[i]).data('series'),
							'index' : globalFilterCount,
							'tabFilterSet' :tabfilter_k,
							'optionselected' :optionselected,
							'globaltabcount_':globaltabcount
						});
	    		
					 console.log("chart_filter_set_list_index_adv     "+chart_filter_set_list_index_adv);
					
					 selectcount = selectcount + 1;
					 
	                      option1 = "selected";		                
	                      
	                 	}
	                 else if(optionselected == "topn")
		             	{
//	                	 alert("topn  "+globalFilterCountSet );
	                	 
	                	 chart_filter_set_list_index_topn.push({
								//'Types' : $(listofdimsfilter[i]).data('series'),
								'index' : globalFilterCount,
								'tabFilterSet' :tabfilter_k,
								'optionselected' :optionselected,
								'globaltabcount_':globaltabcount
							});
	                	 
	                	 
//	                	 chart_filter_set_list_index_topn.push(globalFilterCountSet  ,  tabFilterSet  ,  optionselected);
	                	 console.log("chart_filter_set_list_index_topn     "+chart_filter_set_list_index_topn);
	                	 
	                	 selectcount = selectcount + 1;
	                	 
		                 	option2 = "selected";

		                 	
		             	}
	                 else if(optionselected == "basicfiltering")
		             	{
	                	
//	                	 alert("basicfiltering  "+globalFilterCountSet );
		                 	option3 = "selected";
		             
		                 		
			                 	selectcount = globalFilterCount;
			                 	chart_filter_set_list_index_basic.push({			     								
  								'index' : globalFilterCount,
  								'tabFilterSet' :tabfilter_k,
  								'optionselected' :optionselected,
  								'globaltabcount_':globaltabcount
  							});
	
		                 		//selectBasicFilter_set(globalFilterCountSet,filterArr[j][0].Field,filterArr[j][0].basic_Fil_Val_Array ,_table ,set_userlimitBasic,selectcount);
		                 		selectBasicFilter_setbyid(globalFilterCount,filterArr[j][0].Field,filterArr[j][0].basic_Fil_Val_Array ,globalTablename ,filterArr[j][0].userLimit_basic ,selectcount);
		                 		
			                	 console.log("chart_filter_set_list_index_basic     "+chart_filter_set_list_index_basic);
			                	
		                 	
		             	}
 	    			
 	    			
 	    			
 	    			 globalFilterCountSet = globalFilterCountSet+1;
 	    			 if(tabfilter_k == 0)
 	    				 {
 	    				tabfilter_k++;
 	    				 }
 	    			 else
 	    			{
 	    				tabfilter_k++;
 	    			}
 	    		}
 	 
 			    }
 	   //globalFilterCount=globalFilterCount+1;
 			    	
    },
 	    error : function(data) { 
 	    	console.log(data);
 	    }
 	});

     resolve();
 });
 }


    function topninput(index)
    {
      var displaytopvalue=$("#topninput"+index).val();
    }



 function showFilterDiv()
	 {
	     var index ="";	
	     $("#tabfilter"+index).show();  
	 }
 
 function openNav()
	 {
	 	document.getElementById("mySidenav").style.width = "250px";	
	 }
 
 function closeNav()
	 {
	 	document.getElementById("mySidenav").style.width = "0";
	 }
     
    
     
     
 function tabdelete(index)
	 {
	 	let text = "Are you sure ,you want delete this tab!";
	 	
	 	if (confirm(text) == true) 
	 	{
	 		text = "You pressed OK!";
	 		
	 		$("#tabli_"+index).remove();
	 		$("#tabs-"+index).remove();
	 	
	 		    if (index==1) 
	 			{
	 				$("#tabli_"+(index+1)).addClass("ui-tabs-active ui-state-active");
	 				$("#tabs-"+(index+1)).show();	 				
	 			}
	 		   else 
	 		   {
	 				$("#tabli_"+(index-1)).addClass("ui-tabs-active ui-state-active");
	 				$("#tabs-"+(index-1)).show();
	 		   }
	 			
	 		
	 		
	 	} 
	 	else 
	 	{
	    }
	 }
     
 	
 	function contentDiv()
 	{
 		  $('.slide-in').toggleClass('show');
 		  $('.contentblock').toggle();
 		  $('.contentshow').toggle();
 	}
 	function closetoggle()
 	{
 		 $('.slide-in').toggleClass('show');
 	}
 	
 	function addtab(t)
 	{
 		tabcount= t+1;		
 		$("#addddashtitle").show();
 		$("#popUptitleDive").html("ADD tab");
 		$("#btnAddtab").show();
 		$("#btnUpdatetab").hide();
 		$("#addtabcount").val(tabcount);
 		//$('#dashtabname').val("dash name");
 		$('#dashtabname').attr("placeholder","dash name");
// 		dashtabname
 	}
 	
 	 var addTab_Flag =1;
 	 function getdashnameAdd()
 	    {
 	    	var newtabname= $("#dashtabname").val();
 	    	var tabno= $("#addtabcount").val();
 	    	 $("#tabs ul:first").append(  
 	                 "<li  id='tabli_"+tabno+"' ><a class='' href='#tabs-" + tabno + "' id=\"settabname"+tabno+"\"  title=\""+newtabname+"\"> "+newtabname+"</a><span class=\"cb-edit-dashname cb-cursor\" id=\"opendashtitle_"+tabno+"\" onclick=\"opendashtitle("+tabno+")\"  title=\"Edit\"><i class=\"os-icon os-icon-pencil-2\"></i></span><span onclick='tabdelete("+tabno+")' class='cb-cross-btn cb-cursor'  title=\"Delete\"><i class='os-icon os-icon-x'></i></span></li>"  
 	          );  
 	
 	   	     $("<div id='tabs-" + tabno + "' data-tabname='" + newtabname + "'><div id='gridtabs-"+tabno+"'><div class='grid-stack'></div></div></div>").appendTo("#tabs");
 	   	 	   	 
 	         // Refreshing the tab as we have just added new tab  
 	         $("#tabs").tabs("refresh");  

 	         $("#tabs").find('li a[href="#tabs-' + tabno + '"]').trigger("click");  
 	          	       
 	         tabcount= tabno;
 	       
 	         globaltabcount = tabno;
 	         
 	         refreshgrid(); 	    	 	    
 	         $("#addddashtitle").hide();
 	         $("#dashtabname").val("");
 	         addTab_Flag =0;
     
 	    }
 	
 	
 	 function onChangedata(index)
 	 {			
 			if ($("#select_option"+index).val() == "adv")
 			{
 				$("#optiondivselect"+index).show();
 				$("#basicselectdiv"+index).hide();
 				$("#topnselectdiv"+index).hide();				 
				$("#basicfiltercheck"+index).hide();
				$("#limitvalue_basic"+index).hide(); 
				$("#numberofrowsdivs_basic"+index).hide();
				$("#selectbasicdata"+index).hide();
 				
 			}
 			else if ($("#select_option"+index).val() == "basicfiltering")
 			{ 				 		
 				$("#optiondivselect"+index).hide();
 				$("#basicselectdiv"+index).show(); 			
 				$("#topnselectdiv"+index).hide();
 				 $("#basicfiltercheck"+index).show();
 				$("#limitvalue_basic"+index).show(); 
// 				$("#numberofrowsdivs_basic"+index).show();
 				$("#selectbasicdata"+index).show();
 				
 			}
 			else if ($("#select_option"+index).val() == "topn")
 			{ 				
 				$("#optiondiv"+index).hide();
 				$("#optiondivselect"+index).hide();
 				$("#basicselectdiv"+index).hide();
 			    $("#topnselectdiv"+index).show();
 			    $("#basicfiltercheck"+index).hide();
				$("#limitvalue_basic"+index).hide(); 
				$("#numberofrowsdivs_basic"+index).hide();
				$("#selectbasicdata"+index).hide();
 			}
 		}
 	 
 	 
 	 function selectCheckbox(basicFilter_)
 	 {
 			   for (var x=0 ; x<=basicFilter_.length ; x++)
 				{
 								    					
 				var basicFilter_value = basicFilter_[0][x].BasicFilterValue;
 	
 				var allselectcheckbox_ = $('#allcheck'+x).val();
 			
 				}
 	 }
 	 
 	  var checkboxfiltercount =1 ;
	   
	   function selectBasicFilter_set(index,Field_Basic, basicFilter_ ,_table,set_userlimitBasic,selectcount){
//		debugger;
		console.log("selectcount  "+selectcount);//change---------------------
		  var numberofrows_basic = $("#numberofrows_basic"+selectcount).val();
	 	 	console.log("numberofrows_basic::::     "+numberofrows_basic);
			var selectbasicfilter="";
			var li="";
			//alert("selectBasicFilter:::::::::###########");
			$.ajax({method : "POST",					
				url : "./selectbasicfilter",
				data : {
					field : Field_Basic,
					tablename :_table ,
					numberofrows_Basic : set_userlimitBasic ,
				},
				success : function(result) {
					
					NProgress.done(true);
					
					console.log("chart selectBasicFilter result--",result);		
					
					
					var basicFilterData ="";
				    basicresult_length = result.length;
					//console.log("basicresult_length result--"+basicresult_length);	
					
					for(var v=0;v<basicresult_length;v++)
					{
						basicFilterData = result[v].basicFilterFieldData;
					//	console.log("basicFilterData result--",basicFilterData);	
						
						var checkFlag = false;
						//console.log("basicFilter_.length result--"+basicFilter_.length);	
						for (var x=0 ; x<basicFilter_[0].length ; x++)
						{	
							//alert("x::::::::::::::"+x);
							if(basicFilter_[0][x].BasicFilterValue === basicFilterData)
							{
								checkFlag = true;
							}
						}
					
						var checkedValue = "";
						if(checkFlag){
							checkedValue = "checked";
						}
						
						//selectbasicfilter+="<li><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='allcheck"+v+"' "+checkedValue+" data-id = 'allcheckfalse' value='"+basicFilterData+"' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus allselectcheckbox allcheck"+checkboxfiltercount+"'  autocomplete='off' ><span class='css-a2zrvp'></span><span class='css-a3753h-Label text-overflow' title='"+basicFilterData+"' style='max-width: 100px;'> "+basicFilterData+" </span></label></div></div> </div></li>"
						selectbasicfilter+="<li class='searchtext"+selectcount+"'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='allcheck"+v+"' "+checkedValue+" data-id = 'allcheckfalse' onclick='checkedBasicFilter("+v+" , "+selectcount+")' value='"+basicFilterData+"' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus allselectcheckbox allcheck"+selectcount+"'  autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label text-overflow' title='"+basicFilterData+"' style='max-width:100px;display:block'> "+basicFilterData+" </span></label></div></div> </div></li>"
	 	 			
					}
					//console.log("selectbasicfilter"+selectbasicfilter);
					
					checkboxfiltercount =checkboxfiltercount+1;
					
					
					//li+="<li><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal"+selectcount+"' onclick='checkall("+selectcount+", this.checked)' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Select All </span></li>"+selectbasicfilter;
					li+="<li><div class='cb-range-form-div'><div class='cb-input-css align-items-center'><input type='text' class='form-control searchbasicfilter mr-2 visibility-class' placeholder='search ....' id='searchbasicfilter"+selectcount+"' onkeyup='searchonkey("+selectcount+")'><i class='os-icon os-icon-search mr-2 cb-cursor' aria-hidden='true' id='openSearchbox' onclick='searchboxOpen("+selectcount+")'></i></div></div></li><li><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal"+selectcount+"' onclick='checkall("+selectcount+", this.checked)' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Select All</span></li>"+selectbasicfilter;
		 	 		
					//console.log(li);
					//alert("selectcount "+selectcount);
					$("#selectbasicdata"+selectcount).html(li);
					
		
	 				 /*setTimeout(() => {
	 					//	alert("selectcount "+selectcount);
	 						$('#searchbasicfilter'+globaltabcount).keyup(function(){
	 				//alert("hi");

	 			    var searchText = $(this).val();
	 			    //alert("hi"+searchText);

	 			    $('.searchtext'+globaltabcount).each(function(){    

	 			        var currentLiText = $(this).text(),
	 			            showCurrentLi = currentLiText.toUpperCase().indexOf(searchText.toUpperCase()) !== -1;

	 			        $(this).toggle(showCurrentLi);

	 			    });     
	 			});
	 				
	 					}, 300);*/
			
				},
			error : function(data) {
				NProgress.done(true);
				console.log(data);
			}
		});
		  
		 }

	   
	   function checkedBasicFilter(index ,index1)
	   {
	 	  //index = selectcount;
	 	  if($("#allcheck"+index).prop("checked") == true)
	 		{
	 		//alert("checkedBasicFilter::::::::::::::");
//	 		 $("#btnChart").trigger("click");
	 		}
	 	  else if(($("#allcheck"+index).prop("checked") == false) && ($("#chkLocal"+index1).prop("checked") == true))
	       {
//	 	  alert("#####");
	 	   $("#chkLocal"+index1).prop("checked", false);
//	 	   $("#btnChart").trigger("click");
	 	  }
	 	  else if($("#allcheck"+index).prop("checked") == false)
	 		  {		  
	 		 // alert("checkedBasicFilter false::::::::::::::");
//	 		  $("#btnChart").trigger("click");
	 		  }
	 	  
	 	  
	   }
	   
 	   function selectBasicFilter_setbyid(index,Field_Basic, basicFilter_ ,globalTablename ,set_userlimitBasic,selectcount)
 	   {

 	 	  $("#numberofrows_basic"+selectcount).val(set_userlimitBasic);

 	 	 	var selectbasicfilter="";
 	 	 	var li="";
 	 	 	//alert("selectBasicFilter:::::::::");
 	 	 	$.ajax({method : "POST",					
 	 	 		url : "./selectbasicfilter",
 	 	 		data : {
 	 	 			field : Field_Basic,
 	 	 			tablename : globalTablename,
 	 	 			numberofrows_Basic : set_userlimitBasic ,
 	 	 		},
 	 	 		success : function(result) {
 	 	 			NProgress.done(true);
 	 	 			//console.log("chart selectBasicFilter result--",result);		
 	 	 			var basicFilterData ="";
 	 	 		    basicresult_length = result.length;
 	 	 			//console.log("basicresult_length result--"+basicresult_length);	
 	 	 			//console.log("selectcount------"+selectcount);	
 	 	 			
 	 	 			
 	 	 		    $("#selectbasicdata"+selectcount).empty();
 	 	 		    
 	 	 			for(var v=0;v<result.length;v++)
 	 	 			{
 	 	 				basicFilterData = result[v].basicFilterFieldData;
 	 	 				//console.log("basicFilterData result--",basicFilterData);	
 	 	 				
 	 	 				var checkFlag = false;
 	 	 				
 	 	 				for (var x=0 ; x<basicFilter_[0].length ; x++)
 	 	 				{
 	 	 					if(basicFilter_[0][x].BasicFilterValue === basicFilterData){
 	 	 						
 	 	 					//alert("1234");
 	 	 						checkFlag = true;
 	 	 					}
 	 	 				}
 	 	 				
 	 	 				var checkedValue = "";
 	 	 				if(checkFlag){
 	 	 					checkedValue = "checked";
 	 	 				}
 	 	 				
 	 	 				
 	 	 				selectbasicfilter+="<li class='searchtext"+selectcount+"'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='allcheck"+v+"' "+checkedValue+" data-id = 'allcheckfalse' onclick='applyFilterbyid_()' value='"+basicFilterData+"' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus allselectcheckbox allcheck"+selectcount+"'  autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label text-overflow' title='"+basicFilterData+"' style='max-width:100px;display:block'> "+basicFilterData+" </span></label></div></div> </div></li>"
 	 	 				//selectbasicfilter+="<li class='searchtext'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='allcheck"+v+"' "+checkedValue+" data-id = 'allcheckfalse' value='"+basicFilterData+"' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus allselectcheckbox allcheck"+checkboxfiltercount+"'  autocomplete='off' ><span class='css-a2zrvp'></span><span class='css-a3753h-Label text-overflow' title='"+basicFilterData+"' style='max-width: 100px;'> "+basicFilterData+" </span></label></div></div> </div></li>"
 	 	 		 		
 	 	 			
 	 	 			}
 	 	 			//console.log("selectbasicfilter"+selectbasicfilter);
 	 	 			checkboxfiltercount =checkboxfiltercount+1;
 	 	 			
 	 	 			//li+="<li><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal"+selectcount+"' onclick='checkall("+selectcount+", this.checked)' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Select All </span></li>"+selectbasicfilter;
 	 	 			
 	 	 			li+="<li><div class='cb-range-form-div'><div class='cb-input-css align-items-center'><input type='text' class='form-control searchbasicfilter mr-2 visibility-class' placeholder='search ....' id='searchbasicfilter"+selectcount+"' onkeyup='searchonkey("+selectcount+")'><i class='os-icon os-icon-search mr-2 cb-cursor' aria-hidden='true' id='openSearchbox' onclick='searchboxOpen("+selectcount+")'></i></div></div></li><li><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal"+selectcount+"' onclick='checkall("+selectcount+", this.checked)' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Select All</span></li>"+selectbasicfilter;
 	 	 		
 	 	 				 $("#selectbasicdata"+selectcount).html(li);
 	 	 				 
 	 	 				 /*
 	 	 				 setTimeout(() => {
 	 	 						
 	 	 						$('#searchbasicfilter'+globaltabcount).keyup(function(){
 	 	 				//alert("hi");

 	 	 			    var searchText = $(this).val();
 	 	 			    //alert("hi"+searchText);

 	 	 			    $('.searchtext').each(function(){    

 	 	 			        var currentLiText = $(this).text(),
 	 	 			            showCurrentLi = currentLiText.toUpperCase().indexOf(searchText.toUpperCase()) !== -1;

 	 	 			        $(this).toggle(showCurrentLi);

 	 	 			    });     
 	 	 			});
 	 	 				
 	 	 						
 	 	 					}, 300);
 	 	 				 
 	 	 				 */
 	 	 				 
 	 	 					selectcount++;
 			},
 			error : function(data) {
 				NProgress.done(true);
 				console.log(data);
 			}
 		});
 		  
 		 }
 		 
 	   
 	  function checkall(index, isChecked)
 		{		
 		    if(isChecked) 
 		    {
 		    	//alert("allselectcheckbox allcheck "+index );
 		    $(".allselectcheckbox.allcheck"+index).each(function() { 
 		   	   // alert("##########");
 		    this.checked = true; 
 		   
 		    });
 		    }
 		    else 
 		    {
 		    $(".allselectcheckbox.allcheck"+index).each(function() {
 		    this.checked = false;
 		    });
 		    }
 		  
 		     
 		}
 	   
// 	 function checkall(index, isChecked)
// 		{			
// 	     if(isChecked) 
// 	     {
// 	  
// 	       $('#allcheck'+index).each(function() 
// 	    	{ 
// 	    		$(".allcheck"+index).prop("checked", true);
// 	        });
// 	     }
// 	     else 
// 	     {
//            $('#allcheck'+index).each(function() 
// 	  		    { 
// 	  		    	$(".allcheck"+index).prop("checked", false);
// 	  		    });
// 	     }
// 	     
// 	}
 		   
 	function applyFilterbyid_()
 		{		
 		
 		$.notify("Save Dashboard to apply filter!!!","info");
// 			alert("Save Dashboard to apply filter!!!");			
 		}
 		
 		
 	function opendashtitle(index)
	 	{
 		
 		var tabname = $('#settabname'+index).html();
 		console.log("tabname  "+tabname);
 		$('#dashtabname').val(tabname);
	 		$("#dashtabhidden").val(index);
	 		$("#addddashtitle").show();
	 		$("#popUptitleDive").html("Edit tab");
	 		$("#btnAddtab").hide();
	 		$("#btnUpdatetab").show();
	 		
	 		
	 		
	 	}
     function closedash()
	     {
	     	$("#addddashtitle").hide();
	     }
     function getdashnameUpdate()
	     {	     	
	     	var indexid = $("#dashtabhidden").val();
	     	var getdashname=$("#dashtabname").val();
	     
	     	$("#settabname"+indexid).html(getdashname);
	     	$("#settabname"+indexid).attr("title",getdashname);
	     
	     	var data_tabname_dashtabname = $("#tabs-"+indexid).attr("data-tabname",getdashname);	 
	     	$("#addddashtitle").hide();
	     	$("#dashtabhidden").val("");
	        $("#dashtabname").val("");
	     	
	     }
     function openChartlist() 
       {
         document.getElementById("chartlistdiv").style.width = "250px";
       }
     
    function closeChartlist() 
       {
         document.getElementById("chartlistdiv").style.width = "0";
       }
         
     function updateChartname(index,name)
	     {    	
	     	$.ajax({method : "POST",	
	 			async: false,
	 			url : "./updatechartname",
	 			data : {
	 				chartid : index,
	 				chartname:name,
	 			},
	 			success : function(result) {
	 			 },
	 	    error : function(data) { 
	 	    	console.log(data);
	 	    }
	 	});
	     	
	     	
	     } 
     
     
     function filtervaluekeyup(index)
	     {  
	        var displaytopvalue=$("#filtervalueid"+index).val();    	  
	     }
     
     
     function showitemvalue(value,index)
     {
 		//alert("hi"+value);
 		
 		if(value=="contains"){
 			
 		}
		 else if(value=="contains"){
		 			
		}
		 else if(value=="does not contain"){
		
		}
		 else if(value=="starts with"){
		
		}
		 else if(value=="does not start with"){
		
		}
 		else if(value=="is"){
 			
 		}
 		else if(value=="is not"){
 			
 		}
 		else if(value=="is after"){
 			
 		}
 		else if(value=="is on or after"){
 			
 		}
 		else if(value=="is before"){

 		}
 		else if(value=="is on or before"){

 		}
 		else if(value=="is blank"){
 			
 		}
		 else if(value=="is not blank"){
		 			
		}
		 else if(value=="is empty"){
		
		}
		 else if(value=="is not empty"){
		
		}
 		else if(value=="is not blank"){
 			$("#filterinvalueid"+index).hide();
 		}
 	}
     
     function filtervaluekeyup(index)
	     {
	     	//alert("hi");
	       var displaytopvalue=$("#filtervalueid"+index).val();     	  
	     }
	     
     
     function filterinvaluekeyup(index)
	     {
	     	  //alert("hi");
	     	  var displaytopvalue=$("#filterinvalueid"+index).val();
	     	  //console.log("displaytopvalue::"+displaytopvalue);
	     	  //$("#btnChart").trigger("click");
	     }
    
     function createNewDashboard()
	     {
	 		  var dashid =0;
	 		  var projectid =0;
	 		  $.ajax({method : "POST", url : "./savenewdashboard",
	 				data : {
	 				    dashid:dashid,
	 				    projectid:0,
	 				    isrealtime:0,
	 				    dashname:"abcd",
	 				    
	 				},
	 				success : function(result) 
	 				{
	 					console.log("result:::::"+result);
	 					
	 				if (result =="0")
	 				{
	 					$.notify("Something went wrong!","error");
//	 					alert("Something went wrong!");
	 				}	
	 				else 
	 				{	
	 					
	 				//----mansi
	 					/////----------server
	 					//window.open('/cafe-bot/menu/dashboard?id='+result,'_blank' );
	 					
	 					
	 					window.open('/CafeBotCharting/dashboard?id='+result,'_blank' );
	 					
	 				}
	 					
	 					
	 				},
	 				error : function(data) { 
	 						console.log(data);
	 					}
	 				});
	 		  
	 		
	 	 
	
	 	  }
     
     
     function searchboxOpen(index){
    		if($("#searchbasicfilter"+index).hasClass("visibility-classremove") || $("#searchbasicfilter"+index).hasClass("visibility-class"))
    		{
    			$("#searchbasicfilter"+index).toggleClass("visibility-classremove");
    			$("#searchbasicfilter"+index).toggleClass("visibility-class");	
    		}	
    	}
     
 	function dropdownopen(index) {
 		document.getElementById("myDropdown"+index).classList.toggle("show");
 	}

 	// Close the dropdown if the user clicks outside of it
 	window.onclick = function(event) {
 		if (!event.target.matches('.dropbtn')) {
 			var dropdowns = document.getElementsByClassName("dropdown-content");
 			var i;
 			for (i = 0; i < dropdowns.length; i++) {
 				var openDropdown = dropdowns[i];
 				if (openDropdown.classList.contains('show')) {
 					openDropdown.classList.remove('show');
 				}
 			}
 		}
 	}
     
 	document.addEventListener('click', function handleClickOutsideBox(event) {
 		  const chartlist = document.getElementById('chartlist');
 		  const chartlistdiv = document.getElementById('chartlistdiv');

 		  if (!chartlist.contains(event.target) && !chartlistdiv.contains(event.target)) {
 		   
 		    closeChartlist();
 		  }
 		});
 	
 	document.addEventListener('click', function handleClickOutsideBox(event) {
 		  const filterlist = document.getElementById('filterlist');
 		  const sidenavdiv = document.getElementById('mySidenav');

 		  if (!filterlist.contains(event.target) && !sidenavdiv.contains(event.target)) {
 		   
 		    closeNav();
 		  }
 		});
 	
 	document.addEventListener('click', function handleClickOutsideBox(event) {
 		
 		  const btnToggle = document.getElementById('btnToggle');
 		  const slidetoggle = document.getElementById('slidetoggle');

 		  if (!btnToggle.contains(event.target) && !slidetoggle.contains(event.target)) {
 			  
 		    $("#removeshow").removeClass("show");
 		  }
 		});
 	
 	
 	
 	function limitbasicvalue(index)
 	{
		 if($("#limitvalue_basic"+index).prop('checked')) 
			 {
			    $("#numberofrowsdivs_basic"+index).hide();
			 } 
		 else
			 {
			 
			    $("#numberofrowsdivs_basic"+index).hide();
			    
			 }
	}
 	
 	function numberOfRowsBasic(index)
 	{
 		
 						//alert("hi");
 			 		var numberlist_basic = Math.round($("#numberofrows_basic").val());
 			 
 			 			if (numberlist_basic < 10 ) 
 			 			{
 			 			   $("#numberofrows_basic").val(5);
 			 			}
 			 			else if (numberlist_basic > 50000  )
 			 			{
 			 			   $("#numberofrows_basic").val(50000);
 			 			}
 			 			else 
 			 			{
 			     		   $("#numberofrows_basic").val(numberlist_basic); 
 			    		}
 			 	 
 		
 	}
 	
 	
	function searchonkey(index){
		//alert("hi");
	    var searchText = $('#searchbasicfilter'+index).val();
	    //alert("hi"+searchText);

	    $('.searchtext'+index).each(function(){    

	        var currentLiText = $(this).text(),
	            showCurrentLi = currentLiText.toUpperCase().indexOf(searchText.toUpperCase()) !== -1;

	        $(this).toggle(showCurrentLi);

	    });  
		
	}
	
	function publishmode_validations()
	{
		$('.addtab').hide();
		$('.cb-edit-dashname').hide();
		$('#edit').hide();
		$('#chartlist').hide();
		$('#Add_Dashboard').hide();
		$('.slice-control').hide();
		$('.slice-control').removeClass('d-flex');
		$('.cb-cross-btn').hide();
		$('#btnsave').hide();
			
	}
	
	
	function reload()
	{
		window.location.reload();
	}
	
	
	function chart_properties()
	{

		var displayvalue="<div class='settingselectdiv'>"
			+"<div>"
			+"<div class='cb-range-Label d-none'><div class='form-inline'>"
			+"<div class='cb-form'>"
			+"<label class='css-12xei9w'>"
			+"<input type='checkbox' id='displaychat' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' autocomplete='off'>"
			+"<span class='css-a2zrvp'></span>"
			+"<span class='css-a3753h-Label'>  Display value in chart</span>"
			+"</label>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"<div class='cb-range-form-div d-none'>"
			+"<div class='cb-range-Label'>"
			+"<span class='label'><div class='cb-range-text'>Display legend</div></span>"
			+"<div>"
			+"<div class='cb-input-css'>"
			+"<select class='form-control' id='displaylegend' name='displaylegend'>"
			+"<option value='sidebar'>In the sidebar</option>"
			+"<option value='nexttochart'>Next to chart</option>"
			+"<option value='inchart'>In chart</option>"
			+"</select>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"<div class='cb-range-form-div'>"
			+"<div class='cb-range-Label'>"
			+"<div class='form-inline'>"
			+"<div class='cb-form'>"
			+"<label class='css-12xei9w'>"
			+"<input type='checkbox' id='limitvalue' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' autocomplete='off'>"
			+"<span class='css-a2zrvp'></span>"
			+"<span class='css-a3753h-Label'>  Limit Value</span>"
			+"</label>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"<div class='cb-range-form-div' id='numberofrowsdivs' style='display:none;'>"
			+"<div class='cb-range-Label'>"
			+"<span class='label'><div class='cb-range-text'>Number of rows</div></span>"
			+"<div>"
			+"<div class='cb-input-css'>"
			+"<select class='form-control' id='numberofrows_' name='numberofrows_'>"
			+"<option value='1000'>1000</option>"
			+"<option value='2000'>2000</option>"
			+"<option value='5000'>5000</option>"
			+"<option value='10000'>10000</option>"
			+"</select>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"<div class='cb-range-form-div' id='numberofrowsdiv' style='display:none;'>"
			+"<div class='cb-range-Label'>"
			+"<input type='number' list='numberlist' id='numberofrows' name='numberofrows' class='form-control' value='1000' min='5' max='50000'/>"
			+"<datalist id='numberlist'>"
			+"<option value='5000'>5000</option>"
			+"<option value='10000'>10000</option>"
			+"<option value='25000'>25000</option>"
			+"<option value='50000'>50000</option>"
			+"</datalist>"
			+"</div>"
			+"</div>"
			+"<div class='cb-range-form-div'>"
			+"<div class='cb-range-Label'>"
			+"<span class='label'><div class='cb-range-text'>Toggle between Dark & Light</div></span>"
			+"</div>"
			+"<div class='form-inline'>"
			+"<div class='cb-form'>"
			+"<div class='cb-form-switch cb-light'>"
			+"<div class='css-wtrf37 cb-focus'>"
			+"<input type='checkbox' id='switch-3'   onclick='toggleTheme()'>"
			+"<label for='switch-3'></label>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"<div class='cb-range-form-div'  id='tarvaluediv' style='display:none;'>"
			+"<div class='cb-range-Label'>"
			+"<span class='label'><div class='cb-range-text'>Target Value</div></span>"
			+"<div>"
			+"<div class='d-flex align-items-center'>"
			+"<input type='number' class='form-control' id='target_value' name='target_value' value='0'>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"<div class='cb-range-form-div' id='fromTodiv' style='display:none;'>"
			+"<div class='d-flex align-items-center'>"
			+"<div class='cb-range-form-div'>"
			+"<div class='cb-range-Label'>"
			+"<span class='label'><div class='cb-range-text'>From</div></span>"
			+"<div>"
			+"<div class='cb-input-css'>"
			+"<input type='number' class='form-control me-1' id='from_first' name='from_first' value='0' disabled>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"<div class='cb-range-form-div'>"
			+"<div class='cb-range-Label'>"
			+"<span class='label'><div class='cb-range-text'>To</div></span>"
			+"<div>"
			+"<div class='cb-input-css'>"
			+"<input type='number' class='form-control me-1' id='to_first' name='to_first' value='1000' onblur='gaugeblur() '>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"<div class='cb-range-form-div' id='display_firstcolor'>"
			+"<div class='cb-range-Label'>"
			+"<span class='label'><div class='cb-range-text'>Color</div></span>"
			+"<div>"
			+"<div class='d-flex align-items-center'>"
			+"<input type='color'  id='color_first' name='color_first'  value='#55BF3B'>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"	
			+"<hr>"
			+"<div class='d-flex align-items-center'>"
			+"<div class='cb-range-form-div'>"
			+"<div class='cb-range-Label'>"
			+"<span class='label'><div class='cb-range-text'>From</div></span>"
			+"<div>"
			+"<div class='cb-input-css'>"
			+"<input type='number' class='form-control me-1' id='from_second' name='from_second' value='1000'  disabled onblur='gaugeblur()'>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"<div class='cb-range-form-div'>"
			+"<div class='cb-range-Label'>"
			+"<span class='label'><div class='cb-range-text'>To</div></span>"
			+"<div>"
			+"<div class='cb-input-css'>"
			+"<input type='number' class='form-control me-1' id='to_second' name='to_second' value='2000' onblur='gaugeblur()'>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"<div class='cb-range-form-div' id='display_secondcolor'>"
			+"<div class='cb-range-Label'>"
			+"<span class='label'><div class='cb-range-text'>Color</div></span>"
			+"<div>"
			+"<div class='d-flex align-items-center'>"
			+"<input type='color'  id='color_second' name='color_second' value='#DDDF0D' >"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"	
			+"<hr>"
			+"<div class='d-flex align-items-center'>"
			+"<div class='cb-range-form-div'>"
			+"<div class='cb-range-Label'>"
			+"<span class='label'><div class='cb-range-text'>From</div></span>"
			+"<div>"
			+"<div class='cb-input-css'>"
			+"<input type='number' class='form-control me-1' id='from_third' name='from_third' value='2000' disabled onblur='gaugeblur()'>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"<div class='cb-range-form-div'>"
			+"<div class='cb-range-Label'>"
			+"<span class='label'><div class='cb-range-text'>To</div></span>"
			+"<div>"
			+"<div class='cb-input-css'>"
			+"<input type='number' class='form-control me-1' id='to_third' name='to_third'  value='3000' max='2147483647' onblur='gaugeblur()'>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"<div class='cb-range-form-div'  id='display_thirdcolor'>"
			+"<div class='cb-range-Label'>"
			+"<span class='label'><div class='cb-range-text'>Color</div></span>"
			+"<div>"
			+"<div class='d-flex align-items-center'>"
			+"<input type='color'  id='color_third' name='color_third' value='#DF5353'>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"	
			+"</div>"
			+"<div class='cb-range-Label cb-button-layout' style='display:none;' id='ApplyfromTo'>"
			+"<button class='me-2 cb-primary' id='fromtofunction_' onclick='fromTofunction_()' disabled  title='Apply'>Apply</button>"
			+"<button class='cb-primary' title='Reset' id ='resetselectionfromTofunction_' onclick='resetSelection_fromTofunction_()'><i class='fa fa-refresh' aria-hidden='true'></i></button>"
			+"</div>"	
			+"</div>"
			+"<div class='DataMapping_column-card__2VBWp dropzoneselect cb-cursor' id='properties_div' style='position:relative;min-height:auto'>"
			+"<span>Properties</span>"
			+"<span class='' style='text-align: -webkit-right;position:absolute;right:14px;top:13px;'><a class='chart-accordion' data-bs-toggle='collapse' data-bs-target='#chart_settings' ><i class='fa fa-caret-down' aria-hidden='true'></i></a></span>"
			+"<div id='chart_settings' class='collapse show'>"
			+"<div class='cb-range-form-div mt-2' id ='legend_placement_div' >"
			+"<div class='cb-range-Label'>"
			+"<span class='label'><div class='cb-range-text'>Legend Placement</div></span>"
			+"<div>"
			+"<div class='cb-input-css'>"
			+"<select class='form-control' id='placement' name='placement'>"
			+"<option value='select'> --select--  </option>"
			+"<option value='top left'>Top Left</option>"
			+"<option value='top right'>Top Right</option>"
			+"<option value='top center'>Top Center</option>"
			+"<option value='bottom left'>Bottom Left</option>"	
			+"<option value='bottom right'>Bottom Right</option>"
			+"<option value='bottom center'>Bottom Center</option>"
			+"<option value='middle left'>Middle Left</option>"
			+"<option value='middle right'>Middle Right</option>"
			+"<option value='middle center'>Middle Center</option>"
			+"</select>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"<div class='cb-range-form-div'  id ='x-axis_labeldiv' >"
			+"<div class='cb-range-Label'>"
			+"<span class='label'><div class='cb-range-text' id='label_rotation_change'>X-axis Label Rotation</div></span>"
			+"<div>"
			+"<div class='cb-input-css'>"
			+"<select class='form-control' id='label_rotation' name='label_rotation'>"
			+"<option value='0'>0</option>"
			+"<option value='10'>10</option>"
			+"<option value='-10'>-10</option>"
			+"<option value='45'>45</option>"
			+"<option value='-45'>-45</option>"
			+"<option value='60'>60</option>"
			+"<option value='-60'>-60</option>"
			+"<option value='90'>90</option>"
			+"<option value='-90'>-90</option>"
			+"<option value='180'>180</option>"
			+"<option value='-180'>-180</option>"
			+"</select>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"<div class='cb-range-form-div' id ='y-axis_labeldiv'>"
			+"<div class='cb-range-Label'>"
			+"<span class='label'><div class='cb-range-text'>Y-axis Label Rotation</div></span>"
			+"<div>"
			+"<div class='cb-input-css'>"
			+"<select class='form-control' id='y_label_rotation' name='y_label_rotation'>"
			+"<option value='0'>0</option>"
			+"<option value='10'>10</option>"
			+"<option value='-10'>-10</option>"
			+"<option value='45'>45</option>"
			+"<option value='-45'>-45</option>"
			+"<option value='60'>60</option>"
			+"<option value='-60'>-60</option>"
			+"<option value='90'>90</option>"
			+"<option value='-90'>-90</option>"
			+"<option value='180'>180</option>"
			+"<option value='-180'>-180</option>"
		    +"</select>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"<div class='cb-range-form-div ' id='zoomtype_div'>"
			+"<div class='cb-range-Label'>"
			+"<span class='label'><div class='cb-range-text'>Data Zoom Type</div></span>"
			+"<div>"
			+"<div class='cb-input-css'>"
			+"<select class='form-control' id='zoom_type' name='zoom_type'>"
			+"<option value='select'> --select--  </option>"
			+"<option value='X'>X</option>"
			+"<option value='Y'>Y</option>"
			+"<option value='XY'>XY</option>"
			+"</select>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"<hr>"
			+"</div>"
			+"<div class='d-flex' id= 'toggle_div'>"
			+"<div class='cb-range-form-div me-3' id='data_labels_div'>"
			+"<div class='cb-range-Label'>"
			+"<span class='label'><div class='cb-range-text'>Data Labels</div></span>"
			+"<div class='form-inline'>"
			+"<div class='cb-form'>"
			+"<div class='cb-form-switch cb-light'>"
			+"<div class='css-wtrf37 cb-focus'>"
			+"<input type='checkbox' id='data_labels'>"
			+"<label for='data_labels'></label>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"<div class='cb-range-form-div' id='chart_flip_div'>"
			+"<div class='cb-range-Label'>"
			+"<span class='label'><div class='cb-range-text'>Chart Flip</div></span>"
			+"<div class='form-inline'>"
			+"<div class='cb-form'>"
			+"<div class='cb-form-switch cb-light'>"
			+"<div class='css-wtrf37 cb-focus'>"
			+"<input type='checkbox' id='chart_flip'>"
			+"<label for='chart_flip'></label>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"<div id = 'color_div'>"
			+"<div class='d-flex'>"
			+"<div class='cb-range-form-div me-3 ' >"
			+"<div class='cb-range-Label'>"
			+"<span class='label'><div class='cb-range-text'>Data Labels Color</div></span>"
			+"<div>"
			+"<div class='cb-input-css'>"
			+"<input type='color'  id='font_color' name='font_color' value='#d8d9da' >"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"	
			+"<div class='cb-range-form-div d-none ' id = 'data_bar_div'>"
			+"<div class='cb-range-Label'>"
			+"<span class='label'><div class='cb-range-text'>Databar Color</div></span>"
			+"<div>"
			+"<div class='cb-input-css'>"
			+"<input type='color'  id='data_bar' name='data_bar' value='#d8d9da' >"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"<div id = 'data_bar_div1'>"
			+"</div>"	
			+"</div>"
			+"<hr>"
			+"</div>"
			+"<div class='cb-range-form-div' id = 'value_conversion_div'>"
			+"<div class='cb-range-Label'>"
			+"<span class='label'><div class='cb-range-text'>Values Conversion</div></span>"
			+"<div>"
			+"<div class='cb-input-css'>"
			+"<select class='form-control' id='value_conversion' name='value_conversion'>"
			+"<option value='select'> --select--  </option>"
			+"<option value='10'>10</option>"
			+"<option value='100'>100</option>"
			+"<option value='1000'>1000</option>"
			+"<option value='10000'>10000</option>"
			+"<option value='100000'>100000</option>"
			+"<option value='1000000'>1000000</option>"
			+"<option value='10000000'>10000000</option>"
			+"<option value='100000000'>100000000</option>"
			+"<option value='1000000000'>1000000000</option>"
			+"<option value='10000000000'>10000000000</option>"
			+"</select>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"<div class='cb-range-form-div' id='title_alignment_div'>"
			+"<div class='cb-range-Label'>"
			+"<span class='label'><div class='cb-range-text'>Title Alignment</div></span>"
			+"<div>"
			+"<div class='cb-input-css '>"
			+"<select class='form-control' id='title_alignment' name='title_alignment'>"
			+"<option value='select'> --select--  </option>"
			+"<option value='Left'>Left</option>"
			+"<option value='Right'>Right</option>"
			+"<option value='Center'>Center</option>"
			+"</select>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
//			+"<div class='cb-range-form-div' id='opacity_div'>"
//			+"<div class='cb-range-Label'>"
//			+"<span class='label'><div class='cb-range-text'>Opacity</div></span>"
//			+"<div>"
//			+"<div class='cb-input-css '>"
//			+"<input type='range' class='ms-1' id='opacity' name='opacity' value='1' min='0' max='1' step='0.1'>"
//			+"<p id='opacity_value'> 1 </p>"
//			+"</div>"
//			+"</div>"
//			+"</div>"
//			+"</div>"
			+"<hr>"
			+"<div class='cb-range-form-div' id='prefix_div'>"
			+"<div class='cb-range-Label'>"
			+"<span class='label'><div class='cb-range-text'>Prefix</div></span>"
			+"<div>"
			+"<div class='cb-input-css '>"
			+"<input type='text' class='form-control' id='prefix' name='prefix' value=''>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"<div class='cb-range-form-div' id='suffix_div'>"
			+"<div class='cb-range-Label'>"
			+"<span class='label'><div class='cb-range-text'>Suffix</div></span>"
			+"<div>"
			+"<div class='cb-input-css '>"
			+"<input type='text' class='form-control' id='suffix' name='suffix' value=''>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"<div class='cb-range-form-div' id='categories_checkbox_div'>"
			+"<div class='cb-range-Label'>"
			+"<div class='form-inline'>"
			+"<div class='cb-form'>"
			+"<label class='css-12xei9w'>"
			+"<input type='checkbox' id='categories_check' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' autocomplete='off'>"
			+"<span class='css-a2zrvp'></span>"
			+"<span class='css-a3753h-Label'>  X-axis Categories</span>"
			+"</label>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"<div class='cb-range-form-div' id='Label_checkbox_div'>"
			+"<div class='cb-range-Label'>"
			+"<div class='form-inline'>"
			+"<div class='cb-form'>"
			+"<label class='css-12xei9w'>"
			+"<input type='checkbox' id='label_check' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' autocomplete='off'>"
			+"<span class='css-a2zrvp'></span>"
			+"<span class='css-a3753h-Label'>  X-axis Label</span>"
			+"</label>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"<div class='cb-range-Label cb-button-layout'>"
			+"<button class='cb-primary' id='save_properties' onclick='getlegend_position()'>Save</button>"
			+"<button class='cb-primary' onclick='resetSelection_properties()'>Reset</button>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>";

		$("#Properties").html(displayvalue);
		
	}
	
	
	
	function applyProperties()
	{
		  var properties =[];
		  var legend_plc = "";
		  var top_bottom ="";
		  var label_rotation = 0;
		  var data_labels = false;
		  var zoom_type ="";
		  var font_color = "";
		  var chart_flip = false;
		  var value_conversion =0;
		  var data_bar_color = "";
		  var title_alignment ="";
		  var color = [];
		  var y_label_rotation = 0;
		  var prefix ="";
		  var suffix = "";
//		  var opacity ="";
		 var x_label_check = false;
		 var x_categories_check = false;
		  
//		  y_label_rotation
		  
		  
		  
		  if(legend_button == 1)
			  {
//			   legend_plc= $("#displaylegend").val();
			   top_bottom =$("#placement").val();
			   
			   if(top_bottom == "select")
				   {
				   top_bottom ="";
				   }
               else
				   {
            	   top_bottom = $("#placement").val();
				   }
		   
			   
			   
				
			   label_rotation = $("#label_rotation").val();
			   
			   y_label_rotation = $("#y_label_rotation").val();
			   
			   
			   if($("#data_labels").prop("checked")==true)
				   {
				   data_labels = true;
				   }
			   else
				   {
				   data_labels = false;
				   }
			   
			   
			   zoom_type = $("#zoom_type").val();
			   
			   if(zoom_type == "select")
				   {
					   zoom_type ="";
				   }
	           else
				   {
		    	   zoom_type = $("#zoom_type").val();
				   }
		   
			   
			   font_color = $("#font_color").val();
			  
			   if($("#chart_flip").prop("checked")==true)
				   {
				   chart_flip = true;
				   }
			   else
				   {
				   chart_flip = false;
				   }
			   
			   value_conversion = $("#value_conversion").val();
			   
			   if(value_conversion == "select")
				   {
				   value_conversion =0;
				   }
			   else
				   {
				   value_conversion = $("#value_conversion").val();
				   }
			   
//			   alert ("value_conversion          "+value_conversion);
			   
			   data_bar_color = $("#data_bar").val();
			   color.push(data_bar_color);
			   title_alignment =$("#title_alignment").val();
			   
			   if(title_alignment == "select")
				   {
					   title_alignment ="";
				   }
		       else
				   {
				   title_alignment = $("#title_alignment").val();
				   }
			   
			   
			   prefix = $("#prefix").val();
			   
			   suffix = $("#suffix").val();
			   
//			   opacity = $("#opacity").val();
			   
			   console.log("prefix   "+prefix);
				console.log("suffix   "+suffix);
//				console.log("opacity   "+opacity);
				
				
				 
			   if($("#categories_check").prop("checked")==true)
				   {
				   x_categories_check = true;
				   }
			   else
				   {
				   x_categories_check = false;
				   }
				  
			   
			   if($("#label_check").prop("checked")==true)
				   {
				   x_label_check = true;
				   }
			   else
				   {
				   x_label_check = false;
				   }  
				  var id=0;
			   var _charttype = $("#_charttypeid"+id).val();
				 
				
			   
//			   if(databar_colordiv_append_inc >0)
//			   {
//			   for(var d=0; d<databar_colordiv_append_inc; d++)
//					{
//					var color_bar = $("#databar_color"+d).val();
//					color.push(color_bar);
//					
//					}
//			   
//			   }
			   
//			   console.log("color   ",color);
//				console.log("legend_plc   "+legend_plc);
//				console.log("top_bottom   "+top_bottom);
			   properties.push({
					  'top_bottom' : top_bottom,
					  'label_rotation' : label_rotation,
					  'y_label_rotation' : y_label_rotation,
					  'data_labels' : data_labels,
					  'zoom_type' : zoom_type,
					  'font_color' : font_color,
					  'chart_flip' : chart_flip,
					  'value_conversion' : value_conversion,
					  'data_bar_color' : "",
					  'title_alignment' : title_alignment,
					  'charttype' : _charttype,
					  'prefix' : prefix,
					  'suffix' : suffix,
					  'x_categories_check' : x_categories_check,
					  'x_label_check' : x_label_check,
					  									  
				  });
			   
			
			   chartProperties_ = properties;
			   
			   
			  }
		  else
			  {
			  properties.push({
				  'top_bottom' : "",
				  'label_rotation' : 0,
				  'y_label_rotation' : 0,
				  'data_labels' : false,
				  'zoom_type' : "",
				  'font_color' : "",
				  'chart_flip' : false,
				  'value_conversion' : 0,
				  'data_bar_color' : "",
				  'title_alignment' : "",
				  'charttype' : $("#chartingtype").val(),
				  'prefix' : "",
				  'suffix' : "",
				  'x_categories_check' : false,
				  'x_label_check' : false,
			  });
			  
			  }
		  
		
		
		
	}
	
	
	function getlegend_position()
	{
		legend_button =1;
		var legend_plc= $("#displaylegend").val();
		var top_bottom =$("#placement").val();
		
		console.log("legend_plc   "+legend_plc);
		console.log("top_bottom   "+top_bottom);
		
//		$("#btnChart").trigger('click');
		applyProperties();
		
	}
	
	
	 
// 	function onChange_numberOfRowsBasic(index)
// 	
// 	 $('#numberofrows_basic'+accordianind_).change(function() {
//			//alert("numberofrows_basic@@@@@");
//			var basic_userlimit=$("#numberofrows_basic"+accordianind_).val();
//		
//			//console.log('basic_userlimit:::'+basic_userlimit);	
//		    selectBasicFilter(globalselectedtabnlename);
//			//$("#btnChart").trigger("click");
//		});
