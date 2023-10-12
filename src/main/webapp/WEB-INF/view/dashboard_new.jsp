<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>CafeBot Dash</title>
 <link rel="stylesheet" href="<c:url value='/resources/css/web/kendo.common-bootstrap.min.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>">
<link rel="stylesheet" href="<c:url value='/resources/css/web/kendo.materialblack.min.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>">
<!-- <script src="/js/themes/skies.js"></script>
<script src="/js/themes/sand-signika.js"></script>
<script src="/js/themes/grid.js"></script>
<script src="/js/themes/grid-light.js"></script>
<script src="/js/themes/gray.js"></script>
<script src="/js/themes/dark-unica.js"></script>
<script src="/js/themes/dark-green.js"></script>
<script src="/js/themes/dark-blue.js"></script> -->

<link rel="stylesheet"	href="<c:url value='/resources/assets/bower_components/select2/dist/css/select2.min.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>">

<!-- <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500" rel="stylesheet" type="text/css"> -->


<link rel="stylesheet" href="<c:url value='/resources/assets/bower_components/bootstrap-daterangepicker/daterangepicker.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>">
<link rel="stylesheet" href="<c:url value='/resources/assets/bower_components/dropzone/dist/dropzone.css'/>">

<link rel="stylesheet" href="<c:url value='/resources/assets/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>">
 
<link rel="stylesheet" href="<c:url value='/resources/assets/icon_fonts_assets/font-awesome/css/font-awesome.min.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>">
    
<link rel="stylesheet" href="<c:url value='/resources/assets/bower_components/fullcalendar/dist/fullcalendar.min.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>">
<link rel="stylesheet" href="<c:url value='/resources/assets/bower_components/perfect-scrollbar/css/perfect-scrollbar.min.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>">
<link rel="stylesheet" href="<c:url value='/resources/assets/bower_components/slick-carousel/slick/slick.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>">
<link rel="stylesheet" href="<c:url value='/resources/assets/css/main.css?version=4.4.0'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>">


<link rel="stylesheet" href="<c:url value='/resources/css/roboto_font.css'> <c:param name='jsversion' value='12'/>   </c:url>">
<link rel="stylesheet" href="<c:url value='/resources/css/cafebot_font_style.css'> <c:param name='jsversion' value='444'/>   </c:url>">


<link rel="stylesheet" href="<c:url value='/resources/css/sv_assets.css'> <c:param name='jsversion' value='354354'/>   </c:url>">
<link rel="stylesheet" href="<c:url value='/resources/css/sweetviz.css'> <c:param name='jsversion' value='354354'/>   </c:url>">

     <script src="<c:url value="/resources/plugins/gridstack/dist/gridstack-h5.js"/>"></script>

 <script src="<c:url value="/resources/plugins/gridstack/dist/es5/gridstack-jq.js"/>"></script>

<script src="<c:url value='/resources/js/jquery-3.6.0.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
	
<script src="<c:url value='/resources/js/angular.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>



<script src="<c:url value='/resources/js/kendo.all.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/resources/js/kendo.timezones.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>

<link rel="stylesheet" href="<c:url value='/resources/css/bootstrap-toggle.min.css'> <c:param name='jsversion' value='354354'/>   </c:url>">
<script src="<c:url value='/resources/js/bootstrap-toggle.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>

<script src="<c:url value='/resources/theme-chooser.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>

<script src="<c:url value='/resources/assets/bower_components/popper.js/dist/umd/popper.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/cafe-bot/resources/assets/bower_components/moment/moment.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/cafe-bot/resources/assets/bower_components/chart.js/dist/Chart.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/cafe-bot/resources/assets/bower_components/select2/dist/js/select2.full.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/resources/assets/bower_components/jquery-bar-rating/dist/jquery.barrating.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/resources/assets/bower_components/ckeditor/ckeditor.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/resources/assets/bower_components/bootstrap-validator/dist/validator.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/resources/assets/bower_components/bootstrap-daterangepicker/daterangepicker.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/resources/assets/bower_components/ion.rangeSlider/js/ion.rangeSlider.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/resources/assets/bower_components/dropzone/dist/dropzone.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/resources/assets/bower_components/editable-table/mindmup-editabletable.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>




<script src="<c:url value='/resources/assets/bower_components/datatables.net/js/jquery.dataTables.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/resources/assets/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>

<script src="<c:url value='/resources/assets/bower_components/fullcalendar/dist/fullcalendar.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/resources/assets/bower_components/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js'>   </c:url>"></script>
<script src="<c:url value='/resources/assets/bower_components/tether/dist/js/tether.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/resources/assets/bower_components/slick-carousel/slick/slick.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/resources/assets/bower_components/bootstrap/js/dist/util.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/resources/assets/bower_components/bootstrap/js/dist/alert.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/resources/assets/bower_components/bootstrap/js/dist/button.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/resources/assets/bower_components/bootstrap/js/dist/carousel.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/resources/assets/bower_components/bootstrap/js/dist/collapse.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/resources/assets/bower_components/bootstrap/js/dist/dropdown.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/resources/assets/bower_components/bootstrap/js/dist/modal.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/resources/assets/bower_components/bootstrap/js/dist/tab.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/resources/assets/bower_components/bootstrap/js/dist/tooltip.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/resources/assets/bower_components/bootstrap/js/dist/popover.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/resources/assets/js/demo_customizer.js?version=4.4.0'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<%-- <script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/js/main.js?version=4.4.0'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script> 
 --%><!-- NProgress -->
<link href="<c:url value='/resources/nprogress/nprogress.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>" rel="stylesheet">
<script src="<c:url value='/resources/nprogress/nprogress.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='/resources/js/notify.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>


<script src="<c:url value='/resources/assets/js/plotly/plotly_latest.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script> 
<!-- <script src="https://cdn.plot.ly/plotly-latest.min.js"></script> -->

<script src="<c:url value='/resources/js/customjs/custom_url.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>

<script src="<c:url value='/resources/js/customjs/cafebot_context.js'> <c:param name='jsversion' value='io333eeeeef'/>   </c:url>"></script>


<%--  <script src="<c:url value='/https://demo.cafebot.ai:8443/cafe-botresources/customjs/custom.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
 --%> 



 <link href="<c:url value='/resources/css/cafebot_left_panel.css'> <c:param name='jsversion' value='4499667733'/>   </c:url>" rel="stylesheet">
<link href="<c:url value='/resources/css/cafebot_kendo_style.css'> <c:param name='jsversion' value='2343378'/>   </c:url>" rel="stylesheet"> 
	
	
	
	
	
	
	
	
	<link href="<c:url value='/resources/plugins/gridstack/dist/demo.css'> <c:param name='jsversion' value='2343378'/>   </c:url>" rel="stylesheet"> 
	 
	<link href="<c:url value='/resources/css/jquery-ui.css'> <c:param name='jsversion' value='2343378'/>   </c:url>" rel="stylesheet"> 
	  
 <link id="theme" href="<c:url value='/resources/css/dashboard_light.css'> <c:param name='jsversion' value='2343378'/>   </c:url>" rel="stylesheet"> 
 <link id="theme_" href="<c:url value='/resources/css/dark-unica_.css'> <c:param name='jsversion' value='2343378'/>   </c:url>" rel="stylesheet"> 
  
  
  
  
<%--     <script src="<c:url value="/resources/js/dark-unica.js"/>"></script> --%>
    <link id="theme_" href="<c:url value='/resources/css/dataTables.min.css'> <c:param name='jsversion' value='2343378'/>   </c:url>" rel="stylesheet"> 
  
	
<script src="<c:url value='/resources/js/highcharts.js'> <c:param name='jsversion' value='io333eeeeef'/>   </c:url>"></script>
<script src="<c:url value='/resources/js/exporting.js'> <c:param name='jsversion' value='io333eeeeef'/>   </c:url>"></script>


<script id = "charttheme_js" src=""></script>

<script src="<c:url value='/resources/js/jquery-ui.js'> <c:param name='jsversion' value='io333eeeeef'/>   </c:url>"></script>

 
 <script src="<c:url value='/resources/plugins/gridstack/dist/events.js'> <c:param name='jsversion' value='io333eeeeef'/>   </c:url>"></script>

 
 <script src="<c:url value='/resources/js/jquery.dataTables.min.js'> <c:param name='jsversion' value='io333eeeeef'/>   </c:url>"></script>
		
  
  <style>
  #dialog label, #dialog input { display:block; }
  #dialog label { margin-top: 0.5em; }
  #dialog input, #dialog textarea { width: 95%; }
  /* #tabs { margin-top: 1em; } */
  #tabs li .ui-icon-close { float: left; margin: 0.4em 0.2em 0 0; cursor: pointer; }
  #add_tab { cursor: pointer; }
  .top-bar .logo-w img{
  width:auto;
  }
::-webkit-scrollbar {
    width: 4px;
    height: 4px;
}
  
  </style>
  <script type="text/javascript">
  var globaltabcount =1;
  var tabfiltercount =0;
  var dropzonefilter =0;
  var observer="";
  var target="";
  var globalTheme = "LightTheme";
  
  //Highcharts.setOptions(Highcharts.skies);
  
  function switchtab(tabcount)
  {
	 
	  console.log("tab switched")
	  //alert(tabcount);
	  //alert("switchtab");
  	//console.log(obj);
  	//setTimeout(function() {
  		 //$("#tabs").find('li a[href="#tabs-' + tabcount + '"]').trigger("click");
  		  globaltabcount = tabcount;
  		
  		//var tabfiltercount =0;
  		 //var dropzonefilter =$('.dropzonefilter').children().attr('data-tabid');
  				 
  		
  		  var ij=0;
  			  $('.dropzonefilter').children().each(function()
		  		{
  				  dropzonefilter = $(this).attr('data-tabid');
  				  console.log("globaltabcount "+globaltabcount );
  				  console.log("dropzonefilter   "+dropzonefilter); 
		  		  
  				  
  				  
  				  var str = dropzonefilter.split(',')[0];
  				console.log("str   "+str); 
  				dropzonefilter = str;
  				
  				  
  				//alert("globaltabcount:::"+globaltabcount);
		  		//alert("dropzonefilter::::"+dropzonefilter);
		  		  
		  		if(globaltabcount != dropzonefilter)
		  			{
		  				//alert("tabfiltercount hide"+tabfiltercount);
		  				
		  				 $("#tabfilter"+(ij)).hide();
		  			}
		  		else if(globaltabcount == dropzonefilter)
		  			 {
		  				//alert("tabfiltercount show"+tabfiltercount);
		  				 $("#tabfilter"+(ij)).show();
		  			 }
		  		
		  		ij = ij+1;
		  			//tabfiltercount=tabfiltercount+1;  
		  			
			
		  		/* observer = new MutationObserver(function(mutations) {
	    		    //  alert("observer")
	    		    	window.dispatchEvent(new Event('resize'));
	    		    	console.log('size changed!###############');
	    		    	
	    		    	console.log(mutations);
	    		    	gs_height = mutations[0].target.gridstack.el.clientHeight;
	    		    	gs_width= mutations[0].target.gridstack.el.clientWidth;
	    		    	
	    		    	//console.log(gs_height);
	    		    	//console.log(gs_width);
	    		  
	    		    	//mutations[0].target.gridstack.el.parentElement
	    		    	$('.chart-header div').children().first().height=gs_height;
	    		    	$('.chart-header div').children().first().width=gs_width;
	    		    	
	    		    	
	    		      });
	    		    
	    		       target = document.querySelector('.grid-stack');
	    		    	
	    			
	    				let container = document.querySelector(".grid-stack");
	    			    new ResizeObserver(outputsize).observe(container);
	    				console.log("observer::",observer)
	    				   observer.observe(target, {
	    				        attributes: true
	    				      });
	    				 */
	    			//new ResizeSensor(jQuery('.grid-stack'), function(){console.log('content dimension changed');});
	    				// window.dispatchEvent(new Event('resize'));
	     		    //	console.log('size changed!###############');
		  		 //loading();
  			
  				});
  			  
  			// loading();
  			 
   		       
  			 
  		    	
  			//alert("ready");
//  			setTimeout(() => {
  				//alert("on");
  				
  				
  			
  			
  		    
  		 
  		 
  		 /* $('.dropzonefilter').children().attr('data-tabid').each(function()
  				 {
  			      alert("dropzonefilter");
  				 });
  		  */
  		 
		  //}, 3000)    	
  }
  	
 
  function toggleTheme() {
	  console.log("globalTheme toggleTheme :::::::::::"+globalTheme);
          var theme = document.getElementById('theme');
          var theme_ = document.getElementById('theme_');
          var charttheme_js = document.getElementById('charttheme_js');
         
          
          if (theme.getAttribute('href') == '<c:url value="/resources/css/dashboard_light.css"/>'  || theme_.getAttribute('href') == '<c:url value="/resources/css/dark-unica_.css"/>') {
          	theme_.setAttribute('href', '<c:url value="/resources/css/dark-unica-dash.css"/>');
          	charttheme_js.setAttribute('src', 'https://code.highcharts.com/highcharts-more.js');
          	theme.setAttribute('href', '<c:url value="/resources/css/dashboard_dark.css"/>');
          	globalTheme = "DarkTheme" ;
          	
          } else {
          	theme_.setAttribute('href', '<c:url value="/resources/css/dark-unica_.css"/>');
          	theme.setAttribute('href', '<c:url value="/resources/css/dashboard_light.css"/>');
          	charttheme_js.setAttribute('src', '');
          	globalTheme = "LightTheme" ;
          }
          
          console.log("globalTheme :::::::::::"+globalTheme);
          
      }   
  	
  
  var globaltabcount_  = 0;
  function AjaxChart(varDim,_charttype,_table,_containerID,varDimFilter,chartid,tabid ,themeAjaxChart){
	  
	  console.log("_containerID:::::"+_containerID);
	  console.log("_charttype:::::"+_charttype);
	  console.log("theme:::::::::::::"+themeAjaxChart);
	
	  //$("#" + _containerID).empty();
	  console.log("AjaxChartchartid:::::::"+chartid);
	  console.log("vardim:::",varDim);
	  console.log("varDimFilter:::",varDimFilter);
	  $.ajax({method : "POST", url : "/CafeBotCharting/getchartDash",
			data : {
				chartName : "type",
				fieldsprop : varDim,
			    charttype:	_charttype,
			    table:_table,
			    containerID:_containerID,
			    filterprop: varDimFilter,
			    chartid : chartid,
			},
			success : function(result) 
			{
				
				//alert("getchartDash");
				console.log("result###########"+result);
				if(_charttype == "chartcard17")
					{
					$("#table_" + _containerID).append(result);
					}
				else if(_charttype == "chartcard16")
				{
					$("#singlevalue" + _containerID).append(result);
					}
				else
					{					
				    $("#" + _containerID).append(result);
					}
				
			  		//var tab_from_class=document.getElementById('tabli_1').getAttribute('aria-controls');
			  		
			  		
				    console.log("tabID:::::"+tabid);
			  		console.log("varDimFilter###########"+varDimFilter);
			  		console.log("varDimFilter length###########"+varDimFilter.length);
			  		 var tabid_loadchart1 = tabid.split('-')[1];
		  				console.log("tabid_loadchart1   "+tabid_loadchart1); 
		  				
		  				
		  				globaltabcount_ = tabid_loadchart1;
		  				
		  				
		  				console.log("globaltabcount--###########"+globaltabcount);
			  		if(varDimFilter == "[]")
		    		{}
		    	else
		    	{
		    		
		    	//alert("fgfgfg");
		    	loadchart1(chartid ,_containerID);
		    	//tabFilterSet=tabFilterSet+1;
		    	console.log("tabFilterSet--   " +tabFilterSet);

		    	}
			  		
			},
			error : function(data) { 
					console.log(data);
				}
			});
	  
	  globaltabcount =1;
	  console.log("globalTheme::::----:::::  "+globalTheme);
	  //toggleTheme();
	  var theme = document.getElementById('theme');
      var theme_ = document.getElementById('theme_');
      var charttheme_js = document.getElementById('charttheme_js');
	  if (themeAjaxChart == "DarkTheme" )
	   	{
		  theme_.setAttribute('href', '<c:url value="/resources/css/dark-unica-dash.css"/>');
	      	charttheme_js.setAttribute('src', 'https://code.highcharts.com/highcharts-more.js');
	      	theme.setAttribute('href', '<c:url value="/resources/css/dashboard_dark.css"/>');
	      	 $("#switch-3").prop('checked' , true);
	      	globalTheme = "DarkTheme";
	   
	   	}
	  else {
	      	theme_.setAttribute('href', '<c:url value="/resources/css/dark-unica_.css"/>');
	      	theme.setAttribute('href', '<c:url value="/resources/css/dashboard_light.css"/>');
	      	charttheme_js.setAttribute('src', '');
	      	 $("#switch-3").prop('checked' , false);
	      	globalTheme = "LightTheme" ;
	      }
	  
	  
  }
  
  function AjaxChart_withid1(varDim,_charttype,_table,_containerID1,varDimFilter,chartid,chartname,dashid)
  {
	 // $("#" + _containerID).empty();
	 
	  console.log("varDim  ----  "+varDim);
	  console.log("chartid--  "+chartid);
	  console.log("varDimFilter chartid--  ",varDimFilter);
	
	  console.log("globaltabcount::::"+globaltabcount);
	  var isexist =0;

		 // debugger;
		  console.log("_containerID:::::     "+_containerID1);
		  if(_charttype == "chartcard16"){
			  _containerID1=_containerID1.split("singlevalue")[1];
			  console.log("_containerID singlevalue split:::::     "+_containerID1);
		  }
		   if(_charttype == "chartcard17"){
			  _containerID1=_containerID1.split("tablechartdiv_table")[1];
			  console.log("_containerID table_ split:::::     "+_containerID1);
		  } 
		  //alert("call div");
		console.log("isexist::::"+isexist);
		  if (isexist==0)
		  {
		  
		  $.ajax({method : "POST", url : "/CafeBotCharting/getchartDashbyid",
				data : {
					chartName : "type",
					fieldsprop : JSON.stringify(varDim),
				    charttype :	_charttype,
				    table :_table,
				    _containerID :_containerID1,
				    filterprop : JSON.stringify(varDimFilter),
				    chartid :chartid,
				},
				success : function(result) 
				{
					
				
					//alert("getchartDashbyid");
				console.log("resultgetchartDashbyid-- "+result);
				console.log("globaltabcount-- "+globaltabcount);
				console.log("_containerID1    -- "+_containerID1);
				console.log("_charttype     -- "+_charttype);
					//closeChartlist();
					//$("#gridtabs-"+globaltabcount).html(result);
				if(_charttype == "chartcard17")
				{
				$("#table_"+_containerID1).html(result);
				}
				else if(_charttype == "chartcard16")
				{
				$("#singlevalue"+_containerID1).html(result);
				}
			else
				{
			//	alert("_containerID"+_containerID1);
				// $("#" + _containerID).html("");
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
  
  
var chartid_increment =0;
  function AjaxChart_withid(varDim,_charttype,_table,_containerID,varDimFilter,chartid,chartname,dashid)
  {
	  
	  chartid_increment++;
	 
	  console.log("tabcount::::"+tabcount);
	 
	  console.log("globaltabcount::::"+globaltabcount);
	
	  console.log(varDim);
	  console.log("chartid--  "+chartid);
	  //chartid=chartid.split("-").[0];
	 chartid=chartid+"-"+chartid_increment;
	 console.log("chartid_increment chartid--  "+chartid);
	 console.log("_containerID AjaxChart_withid--  "+_containerID);
	  var isexist =0;
	  $.ajax({method : "POST", url : "/CafeBotCharting/buildTabDiv",
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
			},
			success : function(result) 
			{
				console.log("result:::::"+result);
				
			if (result =="Exist")
			{
				isexist =1;
				closeChartlist();
				alert("Chart already Exist!");
			}	
			else 
			{	
				
			
				console.log("globaltabcount::::"+globaltabcount);
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
		  console.log("_containerID:::::"+_containerID);
		  //$("#uuid").val(_containerID);
		  //alert("call div");
		console.log("isexist::::"+isexist);
		  if (isexist==0)
		  {
		  
		  $.ajax({method : "POST", url : "/CafeBotCharting/getchartDashbyid",
				data : {
					chartName : "type",
					fieldsprop : varDim,
				    charttype :	_charttype,
				    table :_table,
				    _containerID :_containerID,
				    filterprop : varDimFilter,
				    chartid :chartid,
				},
				success : function(result) 
				{
					//alert("getchartDashbyid");
				console.log("resultgetchartDashbyid-- "+result);
					closeChartlist();
					$("#gridtabs-"+globaltabcount).append(result);
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
  
  
  </script>
</head>
<body class="full-screen menu-position-side menu-side-left color-scheme-dark">


<input type="hidden" id="uuid" name="uuid" value="">

<!-- <input type="button" onclick="deletechart(1);"  value="Delete"/>
 -->
<div class="layout-w">
		<div class="content-w">
			<div class="all-wrapper solid-bg-all">
				<div class="top-bar color-scheme-dark" style="height:50px;">

					<div class="logo-w" style="padding: 11px 15px;!important">
						<a class="logo" href="blendprojects">
							<img alt="Café Bot" src="https://demo.cafebot.ai:8443/cafe-bot/resources/images/cafebot_icon.png" style="height: 36px!important;">							
							<div class="logo-label" style="color: #fff !important;">CaféBot</div>
						</a>
					</div>
					
					

					 <div class="cb-content-div">
     <button class=" enquiry cb-primary" id="btnToggle" onclick="contentDiv()">
     	<i class="os-icon os-icon-settings"></i>
  </button>
     <div class="slide-in from-left" id="removeshow">
  <div class="slide-in-content">
    
    <div class="cb-toggle-button" id="slidetoggle">
						<div class="form-inline">
							<div class="css-wtrf37">
								<input type="checkbox" id="switch-3" onclick="toggleTheme()" class="form-control">
								<label for="switch-3"></label>
							</div>
						</div>&nbsp;&nbsp;
						<label>Dark theme</label><i class="os-icon os-icon-x" onclick="closetoggle()"></i>
					</div> 
  
  </div>
</div>
</div> 


				<!-- 	<div class="cb-toggle-button">
						<div class="form-inline">
							<div class="css-wtrf37">
								<input type="checkbox" id="switch-3" onclick="toggleTheme()" class="form-control">
								<label for="switch-3"></label>
							</div>
						</div>&nbsp;&nbsp;
						<label>Dark theme</label>
					</div>  -->
				</div>
			</div>
		</div>
	</div>
  <div class="">  
   
   <!-- <input type="text" name="dashName" id="dashName"  value=""  placeholder="dashboard name" /> -->
   
 <div id="tabs">

	${model.setData}
	

</div>
  
 <!--  <div id="singlevaluediv" > 
  </div> -->
 <!--  <div id="singlevaluediv" style="display:none;" class="box-css justify-content-center align-items-center flex-column singlevalue">
		 
            <h5>Single Value</h5>
            <div class="value-text"  id="singlevalue" >3</div>
  </div> --> 
  
  <div id="afterfilterscriptdiv"  style="display: none;" ></div>
  
          <div id="mySidenav" class="sidenav cb-select-div">
								<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
						<div class="DataMapping_chart-dimension__2tNga user-select-none p-3" data-types="number,time,text" style="overflow-y:auto;height: calc(100% - 67px);">
						
						<div class="d-flex flex-row justify-content-between align-items-center DataMapping_chart-dimension-header__3FrwJ" style="position:relative">
						<span class="text-capitalize text-middle filter-class">Filters</span>
					</div>
					<div class="dropzonefilter DataMapping_dropzone__2L06t mt-4" ></div>
				</div>
				<div class="cb-save-filter">
				 <button class="cb-primary" id = "applyFilterbyid" onclick="applyFilterbyid()">Apply Filter</button> 
				</div>
			</div>
  
  
  </div>
<div class="popup-container description-poup " id="addddashtitle"  style="display: none;">
						<div class="popup-header">
							<div class="drawer-header">
								<div class="drawer-title-wrapper">
									<div class="drawer-title" style="flex: 1" id="popUptitleDive">
										Edit tab name
									</div>
									<div>
										<a href="javaScript:void(0)" onclick="closedash()">
											<i class="os-icon os-icon-x"></i>
										</a>
									</div>
								</div>
							</div>
							<div class="drawer-body">
								<div class="pipeline-content">
									<div class="row">
										<div class="col-5">       
											<div class="cb-range-form-div">
												<div class="cb-range-Label width">
													<span class="label"><div class="cb-range-text">Dash Name</div></span>
													<div>
														<div class="cb-input-css">
														<input type="hidden" id="dashtabhidden" name="dashtabhidden">
														<input type="hidden" id="addtabcount" name="addtabcount" value="">
															<input id="dashtabname" name="dashtabname" class="form-control" value="" placeholder="dash name" />
														</div>
													</div>
												</div>
											</div>

							

 </div>
 </div>
 </div>
 </div>
 <div class="drawer-footer">
 <button class="cb-primary"  id="btnUpdatetab" onclick="getdashnameUpdate()">Update</button>
 <button class="cb-primary"  id ="btnAddtab"   onclick="getdashnameAdd()">Add</button>
 </div>
 </div>
 </div>
  <script type="text/javascript">
  
  //let grids = GridStack.initAll(options);
   
    
    
//    GridStack.init(opts, document.getElementById('gridCont'))
//    .load([{x:0, y:0, content: '0'}, {x:1, y:0, content: '1'}]);

  //var globaltabcount = 1;
 var tabfilter_k=0;
 var tabfilter_k_edit=0;
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
	 console.log("indexid  "+indexid);
	
  }
 
 
	function editchart(index){
	    		  var dashid = $("#dashid").val();

	  window.open('/CafeBotCharting?id='+index+'&dashID='+dashid,'_blank' );
 		 			
		}
  
	function editchart_(index)
	{		
      alert("Save DashBoard First...");			    		 					
	}

    
    var chartid = 0;
    function addnewChart(id)
    {
    	if(addTab_Flag == 0)
    		{
    		alert("Please Save Dashboard to Add Chart in New Tab...");
    		}
    	
    	
        console.log("globaltabcount::::::::::"+globaltabcount);	
        chartid= $("#chartid"+id).val();
    	var varDim = "";//$("#vardimid"+id).val();
    	var _charttype = $("#_charttypeid"+id).val();
    	var _table =$("#_tableid"+id).val();
    	var _containerID = $("#_containerdivID"+id).val();
        var _varDimFilter =   $("#varDimFilterid"+id).val();
    	
    	var varChartname = $("#varChartname"+id).val();
        var dashid = $("#dashid").val();
    	
    	console.log("varChartname::::::::::"+varChartname);
    	
    	console.log("id"+id,"chartid "+chartid, "varDim "+varDim , "_charttype "+_charttype, "_table "+_table, "_containerID ",_containerID,"varDimFilter "+_varDimFilter,"varChartname "+varChartname);
    
    	console.log(varDim+":"+_charttype+":"+_table+":"+_containerID+":"+_varDimFilter+":"+varChartname);
    	console.log("varDimFilter.length-// ",_varDimFilter);
    	AjaxChart_withid(varDim,_charttype,_table,_containerID,_varDimFilter,chartid,varChartname,dashid);
    	
    	console.log("varDimFilter.length12 "+_varDimFilter);
    	if(_varDimFilter == "[]")
    		{}
    	else
    	{
   
    	loadchartFilterbyid(chartid);
    	
    	console.log("tabfilter_k--bbbbb" +tabfilter_k);
    	}
	
    }
    
    

     function saveDash() 
     {
 	    var items = [];
 	    
 	   addTab_Flag =1;
    	
 	    
 	    var tabs = $("#tabs").children();
 	    console.log("tabs:::::",tabs);
 	    var tabname = $("#tabs-"+globaltabcount).text();
 	    console.log("tabname:::::",tabname);
 	    var dashName = document.getElementById("label-text").textContent;
 	    console.log("dashName:::::"+dashName);
 	    var dashid = $("#dashid").val();
 	    var projectid =1;
 	    var containerid__="";
 	    $('.grid-stack.grid-stack-animate').each(function() 
 			     {
 			    		 //top div tab wise 
 			    		 const listItems = $(this).children();
 			    		 const listArray = Array.from(listItems);
 			    		 
 			    		 console.log("len::::::"+listArray.length);
 			    		 
 			    		 
 			    		 
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
 					    			
 							    		 console.log(item_1);
 							    		 
 							    		 var chartid__ = $(item_1).attr('data-chartid');
 							    		 containerid__ =$(item_1).attr('id');
 							    		 var x=$(item_1).parent().parent().attr('gs-x');
 							    		 var y=$(item_1).parent().parent().attr('gs-y');
 							    		 var w=$(item_1).parent().parent().attr('gs-w');
 							    		 var h=$(item_1).parent().parent().attr('gs-h');
 							    		 var tabid_=  $(this).parent().parent().attr('id');
 							    		console.log("xxxx    chartid__:::::"+x);
 							    		 console.log("chartid__:::::"+chartid__);
 							    		 console.log("tabid:::::"+tabid_);
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
 			 
 	    console.log(JSON.stringify(items));
 	    
 	   console.log("globalTheme theme::::::::::::::::"+globalTheme);
 	    
 	    if (globalTheme == "DarkTheme" )
 	    	{
 	    	var theme="DarkTheme";
 	    	}
 	    else
 	    	{
 	    	var theme="LightTheme";
 	    	}
 	   console.log("theme::::::::::::::::"+theme);
 	    
 	    $.ajax({method : "POST", url : "/CafeBotCharting/savedashboard",
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
 				
 				alert("Saved Successfully...");
 				/* setInterval(() => {
 					
				}, 1000); */
 				
 				/* setTimeout(() => {
 					alert("Saved Successfully...").hide();
 					//alert.hide();
				}, 2000); */
 				
 				
 				
 				window.location.reload();
 			
 				/* $('#tabs').html("");
 				$('script').each(function () {
 				    $(this).remove();
 				});
 				
 				 $.ajax({method : "POST", url : "/CafeBotCharting/buildTab",
 					data : {
 						dashId : dashid, 					
 					}, 					
 					success : function(result) 
 					{						
 						
 						    setTimeout(() => {
  							$("#tabs").html(result);	
 						}, 1000);   
 						 
 						console.log("result###########",result);
  		
 					},
 					error : function(data) { 
 						
 					alert("error!!!");
 							console.log(data);
 						}
 					}); */
 				
 			////
 				
 				
 				
 				//$("#gridtabs-"+globaltabcount).append(result)
 			},
 			error : function(data) { 
 					console.log(data);
 				}
 			});
 	    
 	    
 	    
 	    
 	} 
    
     
     
     globaltabcount =1;
     function applyFilterbyid()
     {
     	//alert("Filter applied successfully!");
     	
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
     	
     	
     	//console.log("tabfilter:applyFilter::::",tabfilter);
     	console.log("globaltabcount---  "+globaltabcount);
     	var strRRR =  [];
     	var ls = [];
    
    	var str =[];
     	//console.log("chartid:::::"+chartid);

        var i=0;
 		var varDimfilter = [];
 
 		console.log("tabfilter:applyFilter::::"+tabfilter_k);
 		var j=0;
 		var tabid_applyFilterbyid="";
 		
 		
 		$('.dropzonefilter').children().each(function()
 		{
 			console.log("globaltabcount  " +globaltabcount );
 			//alert("each child::::");
 			
 			 i=i+1;
 			 //alert("i---"+i);
 		   	 //alert(" j  "+j);
 			
 			console.log("j::::--"+j);
 			//chartid__ = $("#tabfilter"+j).attr('data-chartid');
 			
 			 tabid_applyFilterbyid=$(this).attr('data-tabid');
 			console.log("tabid_applyFilterbyid:applyFilter::::"+tabid_applyFilterbyid);
 			var str=tabid_applyFilterbyid.split(',')[0];
 			console.log("str:applyFilter::::"+str);
 	    	//console.log("chartid:applyFilter::::"+chartid__);
 	    	
 		//});
 		
 	    if(globaltabcount == str )//== globaltabcount
 	    	{
 	    	
 	    	console.log("containerid:applyFilter::::"+containerid);
 	  	
 		 listofdimsfilter = $('#tabfilter'+j).find(".dropzoneselect");
 		

 		console.log("listofdimsfilter::::::",listofdimsfilter);
 		//escape 1st item which is filter
 		
 			console.log("i::::--"+i);
 				
  				 field = $(listofdimsfilter).data('field');	
  				console.log("field::::::"+field);
  				 types =	$(listofdimsfilter).data('types');

  				
  				 filterselecttypevalue = $('#select_option'+i).find(":selected").val();
  				//var filterselecttypevalue = $('select_option').val();
  				
  				console.log("filterselecttypevalue:::::::::::"+filterselecttypevalue);

  				
 				if(types=='text' && filterselecttypevalue == 'adv' )
  				{
  				
 	 				 filterselect1 = $(listofdimsfilter).find("select")[2];
 	 				 filterselect2 = $(listofdimsfilter).find("select")[3];
 	 				 filterselect3 = $(listofdimsfilter).find("select")[1];
 	 			
  				}
  				else if((types=='number' && filterselecttypevalue == 'adv' ) || (types=='time' && filterselecttypevalue == 'adv' ))
  				{
  					 filterselect1 = $(listofdimsfilter).find("select")[1];
 	 				 filterselect2 = $(listofdimsfilter).find("select")[2];
 	 				 filterselect3 = $(listofdimsfilter).find("select")[3];
 	 			    
 	 				console.log("filterselect1:::::",filterselect1);
 	 				console.log("filterselect2:::::",filterselect2);
 	 				console.log("filterselect3:::::",filterselect3);	
 	 								 			
  				}
 				filterselect1= $(filterselect1).val();
 	 			filterselect2=$(filterselect2).val();
  			
  				console.log("listofdimsfilter[i]:::::",listofdimsfilter);
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
 	 				
  				}
  				else if (filterselecttypevalue =="basic")
  				{
  					andorvalue ="";
  				}
  				
  				else if (filterselecttypevalue =="topn")
  				{
  				      filterselect1 = "";
  				      filterselect2 = "";
  			       andorvalue = "";
  				   filterselect3 = $("#filtertopn"+i).val();
  				   console.log("filterselect3:::::",filterselect3);
  					
  					if (filterselect3=="bottom")
  					{
  						filtertopn="bottom";
  					}
  					else 
  					{
  						 filtertopn="top";
  					}
  					
  					
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
  				  	'filtertopvalue':filtertopvalue
  				});
 				
  				
  				
  				
 				
 				
 				
 		 		
 		 		
 		 		
 	    	//});
 		}
     
 		j = j+1;
 		//i= i+1;
 		
 		closeNav();
 		});
 		
 		console.log("ls::::::"+ls);
 		varDimfilter.push(ls);
 		console.log("varDimfilter:::",varDimfilter);
 		
 		
 		  $("#gridtabs-"+globaltabcount ).children($('.grid-stack.grid-stack-animate')).children().each(function()
	    			{
	    	    	
	    			//var gsx_ = $(this).attr('gs-x');
	    			//console.log("gsx_    ::::"+gsx_);
	    		chartid__ =  $(this).children().children().eq(1).data('chartid');
	    		console.log("chartid__:  applyFilter::::"+chartid__);
	    		containerid=$(this).children().children().eq(1).attr('id');
	    		
	    		var chartid_split = chartid__.toString();
	    		//chartid_split = chartid_split.split('-')[0];
	    		console.log("chartid_split :  applyFilter::::"+chartid_split);
	    		if(chartid_split.includes("-"))
	    			{
	    			alert("Save Dashboard to apply filter!!!");
	    			return;
	    			}
	    		
	    		  
 		var str=[];
		   str.push({
		 			 'CONID':containerid,
		 			 'CHARTID':chartid__
			       });
		 
			
		strRRR.push(str);
		
		
		});
		
		
		console.log("strRRR::::::",strRRR);
 		
 		
 		
 		
 					
 				NProgress.start();
 				$.ajax({
 					method : "POST",			
 					url : "/CafeBotCharting/applyDashboardFilterbyid",
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
			    		    					var varDimFilter1 = arr[k].filter_context;
			    		    					var _charttype =arr[k].viz_type;
			    		    					var _table = arr[k].datasource_name;
			    		    					
			    		    					var chartid = arr[k].id;
			    		    					var varChartname =arr[k].slice_name;
			    		    					var dashid = arr[k].isoriginal;
			    		    					
			    		    					console.log('varDimFilter ',varDimFilter1);
			    		    					console.log('varDim ',varDim);
			    		    					console.log('_charttype ',_charttype);
			    		    					console.log('_table ',_table);
			    		    					console.log('_containerID1 ',_containerID1);
			    		    					console.log('chartid ',chartid__);
			    		    					console.log('varChartname ',varChartname);
			    		    					console.log('dashid ',dashid);
			    		    					
			    		    				alert("loadchartFilterbyidedit");
			    		    				AjaxChart_withid1(varDim,_charttype,_table,_containerID1,varDimfilter,chartid,varChartname,dashid);
			    		    				
			    		    				
			    		    				//alert("tabfilter_k_edit--" +tabfilter_k_edit);
			    	 				     	
			    		    				
			    		    				//loadchartFilterbyidedit(chartid__ , varDimFilter1);
			    	 				     	
			    	 				     	
			    	 				     	tabfilter_k_edit=tabfilter_k_edit+1;
			    	 				     	//alert("tabfilter_k_edit--" +tabfilter_k_edit);
			    		   }
 				},
 				error : function(data) {
 					NProgress.done(true);
 					console.log(data);
 				}
 			});
 			//});	
 	
     }
    
    $(document).ready(function() {
    	loading();
    	
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
    	console.log("tabsready---",tabs);	

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
     		   observer = new MutationObserver(function(mutations) {
    		    //  alert("observer")
    		    	window.dispatchEvent(new Event('resize'));
    		    	console.log('size changed!###############');
    		    	
    		    	console.log(mutations);
    		    	gs_height = mutations[0].target.gridstack.el.clientHeight;
    		    	gs_width= mutations[0].target.gridstack.el.clientWidth;
    		    	
    		    	//console.log(gs_height);
    		    	//console.log(gs_width);
    		  
    		    	//mutations[0].target.gridstack.el.parentElement
    		    	$('.chart-header div').children().first().height=gs_height;
    		    	$('.chart-header div').children().first().width=gs_width;
    		    	
    		    	
    		      });
    		    
    		       target = document.querySelector('.grid-stack');
    		    	
    			//alert("ready");
    			setTimeout(() => {
    				//alert("on");
    				let container = document.querySelector(".grid-stack");
    			    new ResizeObserver(outputsize).observe(container);
    				console.log("observer::",observer)
    				   observer.observe(target, {
    				        attributes: true
    				      });
    				
    			//new ResizeSensor(jQuery('.grid-stack'), function(){console.log('content dimension changed');});
    			}, 1000);
    			
    			   
    			globaltabcount=1;
    			
    }

    function outputsize() {
    	
    	console.log('content dimension changed');
    	}
    	//outputsize()

    	function getParameterByName(name) {
			var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
			return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
		}
    	
    	
    	var tabFilterSet =0;
    	var globalFilterCountSet=0;
    	
    	function loadchart1(chartid ,_containerID){
    		//d = new $.Deferred();

    		
    		//alert("_id:loadchartFilterbyid:::"+chartid);
    		 console.log("chartid-loadchart1-  "+chartid);
    		 console.log("globaltabcount-- 1111 "+globaltabcount_);
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
    				url : "/CafeBotCharting/setchartDash",
    				data : {
    					id : chartid,
    					dashID:_id,
    				},
    				success : function(result) {

    					
    					console.log("result filter:setchartDash::::::::::::",result);
    		    	var arr = result;

    		    	globalFilterCountSet=globalFilterCountSet+1;	
    		   for (var k = 0; k < arr.length; k++) 
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
    	                    var andorvalueselected= filterArr[j][0].andorvalue;
    	                    var and ="";
    	                    var or ="";
    	                    if( andorvalueselected == " and ")
						    {										                     
    	                    	and = "checked";
							}
					   else if( andorvalueselected == "or")
						   {
						   or = "checked";
                        }
    	                    
    	                    
    	                    
    						   var optionselectedADV1= filterArr[j][0].filterselect1;
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
    						   
    						   var optionselectedADV2= filterArr[j][0].filterselect2;											 
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
    	                    
    							   
    							   console.log("globalFilterCountSet---"+globalFilterCountSet);
    							   var comparisontxt = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:0;top: -35px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+tabFilterSet+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+tabFilterSet+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+globalFilterCountSet+"' disabled><option value='adv'  "+option1+" >Advance</option><option value='topn'  "+option2+">Top N</option></select><div class='mt-2' id='optiondivtopn"+globalFilterCountSet+"' ><select class='form-control' id='top_bottom' style='display:none;' form-control><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+globalFilterCountSet+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
    								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+globalFilterCountSet+")' disabled><option value='contains' "+option11+">contains</option><option value='does not contain' "+option12+">does not contain</option><option value='starts with' "+option13+">starts with</option><option value='does not start with' "+option14+">does not start with</option><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is blank' "+option17+">is blank</option><option value='is not blank' "+option18+">is not blank</option><option value='is empty' "+option19+">is empty</option><option value='is not empty' "+option10+">is not empty</option></select></div>"
    								+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+globalFilterCountSet+"'  onblur='filtervaluekeyup("+globalFilterCountSet+")'></div>"
    								+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='and"+globalFilterCountSet+"' value=' and '  "+and+" disabled><label class='css-iwo4qd' for='and"+globalFilterCountSet+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ "" +globalFilterCountSet+"' id='or"+globalFilterCountSet+"' value=' or ' "+or+" disabled><label class='css-iwo4qd' for='or"+globalFilterCountSet+"'>Or </label></div></div>"
    								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+globalFilterCountSet+")' disabled><option value='contains' "+option21+">contains</option><option value='does not contain' "+option22+">does not contain</option><option value='starts with' "+option23+">starts with</option><option value='does not start with' "+option24+">does not start with</option><option value='is' "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is blank' "+option27+">is blank</option><option value='is not blank' "+option28+">is not blank</option><option value='is empty' "+option29+">is empty</option><option value='is not empty' "+option20+">is not empty</option></select></div>"
    								+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+globalFilterCountSet+"' onblur='filterinvaluekeyup("+globalFilterCountSet+")'></div></div>"
    								+"<div id='basicselectdiv"+globalFilterCountSet+"' style='display:none'><div class='mt-2'><table style='width:100%'><thead><tr><th><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal'  class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off' ><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Select All </span></th></tr></thead><tbody><tr class='row'><td class='col-md-6'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal' checked='checked' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'> 0.10 </span></label></div></div> </div></td><td class='col-md-6'><div class='cb-range-Label'>149013</div></td></tr></tbody></table></div></div>"
    								+"<div id='topnselectdiv"+globalFilterCountSet+"' value= '"+ filterArr[j][0].filterselecttypevalue+"' disabled><div class='mt-2'><span>Show items</span><select id='filtertopn"+globalFilterCountSet+"' value ='"+ filterArr[j][0].filtertopn+"'  class='form-control' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' value='"+filterArr[j][0].filtertopvalue+"' id='topninput"+globalFilterCountSet+"'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>";


    			    				var comparisonnumber = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:0;top: -35px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+tabFilterSet+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+tabFilterSet+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+globalFilterCountSet+"' disabled><option value='adv'  "+option1+" >Advance</option><option value='topn'  "+option2+">Top N</option></select><div class='mt-2' id='optiondivtopn"+globalFilterCountSet+"' ><select class='form-control' id='top_bottom' style='display:none;' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+globalFilterCountSet+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
    								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+globalFilterCountSet+")' disabled><option value='contains' "+option11+">contains</option><option value='does not contain' "+option12+">does not contain</option><option value='starts with' "+option13+">starts with</option><option value='does not start with' "+option14+">does not start with</option><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is blank' "+option17+">is blank</option><option value='is not blank' "+option18+">is not blank</option><option value='is empty' "+option19+">is empty</option><option value='is not empty' "+option10+">is not empty</option></select></div>"
    								+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+globalFilterCountSet+"' onblur='filtervaluekeyup("+globalFilterCountSet+")'></div>"
    								+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='and"+globalFilterCountSet+"' value='and' checked  "+and+" disabled><label class='css-iwo4qd' for='and"+globalFilterCountSet+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='or"+globalFilterCountSet+"' value='or' "+or+" disabled><label class='css-iwo4qd' for='or"+globalFilterCountSet+"'>Or </label></div></div>"
    								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+globalFilterCountSet+")' disabled><option value='contains' "+option21+">contains</option><option value='does not contain' "+option22+">does not contain</option><option value='starts with' "+option23+">starts with</option><option value='does not start with' "+option24+">does not start with</option><option value='is' "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is blank' "+option27+">is blank</option><option value='is not blank' "+option28+">is not blank</option><option value='is empty' "+option29+">is empty</option><option value='is not empty' "+option20+">is not empty</option></select></div>"
    								+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+globalFilterCountSet+"' onblur='filterinvaluekeyup("+globalFilterCountSet+")'></div></div>"
    								+"<div id='basicselectdiv"+globalFilterCountSet+"' style='display:none'><div class='mt-2'><table style='width:100%'><thead><tr><th><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal'  class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Select All </span></th></tr></thead><tbody><tr class='row'><td class='col-md-6'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal' checked='checked' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'> 0.10 </span></label></div></div> </div></td><td class='col-md-6'><div class='cb-range-Label'>149013</div></td></tr></tbody></table></div></div>"
    								+"<div id='topnselectdiv"+globalFilterCountSet+"' value= '"+ filterArr[j][0].filterselecttypevalue+"' disabled/* style='display:none' */><div class='mt-2'><span>Show items</span><select id='filtertopn"+globalFilterCountSet+"' class='form-control' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' value='"+filterArr[j][0].filtertopvalue+"' id='topninput"+globalFilterCountSet+"'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>";

    								
    								var comparisondate = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:0;top: -35px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+tabFilterSet+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+tabFilterSet+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+globalFilterCountSet+"' disabled><option value='adv' "+option1+">Advance</option><option value='topn'  "+option2+">Top N</option></select><div class='mt-2' id='optiondivtopn"+globalFilterCountSet+"'><select class='form-control' id='top_bottom' style='display:none;' form-control><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+globalFilterCountSet+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
    								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+globalFilterCountSet+")' disabled><option value='contains' "+option11+" disabled>contains</option><option value='does not contain' "+option12+">does not contain</option><option value='starts with' "+option13+">starts with</option><option value='does not start with' "+option14+">does not start with</option><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is blank' "+option17+">is blank</option><option value='is not blank' "+option18+">is not blank</option><option value='is empty' "+option19+">is empty</option><option value='is not empty' "+option10+">is not empty</option></select></div>"
    								+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+globalFilterCountSet+"' onblur='filtervaluekeyup("+globalFilterCountSet+")'></div>"
    								+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='and"+globalFilterCountSet+"' value='and' checked "+and+" disabled><label class='css-iwo4qd' for='and"+globalFilterCountSet+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='or"+globalFilterCountSet+"' value='or' "+or+" disabled><label class='css-iwo4qd' for='or"+globalFilterCountSet+"'>Or </label></div></div>"
    								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+globalFilterCountSet+")' disabled><option value='contains' "+option21+">contains</option><option value='does not contain' "+option22+">does not contain</option><option value='starts with' "+option23+">starts with</option><option value='does not start with' "+option24+">does not start with</option><option value='is' "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is blank' "+option27+">is blank</option><option value='is not blank' "+option28+">is not blank</option><option value='is empty' "+option29+">is empty</option><option value='is not empty' "+option20+">is not empty</option></select></div>"
    								+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+globalFilterCountSet+"' onblur='filterinvaluekeyup("+globalFilterCountSet+")'></div></div>"
    								+"<div id='basicselectdiv"+globalFilterCountSet+"' style='display:none'><div class='mt-2'><table style='width:100%'><thead><tr><th><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal'  class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Select All </span></th></tr></thead><tbody><tr class='row'><td class='col-md-6'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal' checked='checked' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'> 0.10 </span></label></div></div> </div></td><td class='col-md-6'><div class='cb-range-Label'>149013</div></td></tr></tbody></table></div></div>"
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
    		    			console.log("divmain--    "+divmain);
    		    	
    		    			$('.dropzonefilter').append(divmain);
    		    			
    		    			//alert("optionselected"+optionselected);
   	    				 if(optionselected == "adv")
   		                 	{
   		                    //  $("#select_option option:selected" ).val(); 
   		                     // alert("adv "+globalFilterCountSet);
   		                    //  setTimeout(() => {
   		                    	  $("#optiondivselect"+globalFilterCountSet).show(); 
   								  $("#topnselectdiv"+globalFilterCountSet).hide();
   							//}, 2000);
   		                      
   		                 	}
   		                 else if(optionselected == "topn")
   			             	{
   			                 	//$("#select_option option:selected" ).val(); 
   			                 //alert("topn "+globalFilterCountSet);
   			                 //	setTimeout(() => {
   			                 		
   			                 		var counttopn=globalFilterCountSet;
   			                 	   // alert("topn globalFilterCountSet"+globalFilterCountSet);
   			                 		
   			                 	    $("#optiondivselect"+counttopn).hide(); 
   								    $("#topnselectdiv"+counttopn).show();
   								$
   			                 	//}, 1000);
   			                 	
   			             	}
   		    			
    		    			
    		    			
    		    			
    		    		}
   		 
    				    }
    		   $('.dropzonefilter').children().each(function()
   			  		{
   	  				  var dropzonefilter = $(this).attr('data-tabid');
   	  				  console.log("globaltabcount "+globaltabcount );
   	  				  console.log("dropzonefilter   "+dropzonefilter); 
   			  		  
   	  				  
   	  				  
   	  				  var str = dropzonefilter.split(',')[0];
   	  				console.log("str   "+str); 
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
    		   
    		   
    		   console.log("loadfilter tabFilterSet:::::"+tabFilterSet);
    		   
    		   tabfilter_k=tabFilterSet;
    		   
    		   console.log("loadfilter tabfilter_k:::::"+tabfilter_k);
    		   
    		   tabFilterSet=tabFilterSet+1;    		  
    		  
    	  				  
    	   },
    	   
    		    error : function(data) { 
    		    	console.log(data);
    		    }
    		});
    			
    	    resolve();
    	});
    	}

var globalFilterCount_edit=0
    	function loadchartFilterbyidedit(chartid,varDimFilter){
    		//d = new $.Deferred();

    		
    		///alert("_id:loadchartFilterbyidedit:::"+chartid);
    		 console.log("chartid--  "+chartid);
    		 console.log("varDimFilter--  ",varDimFilter);
    		 //console.log("tabfilter_k edit--  "+tabfilter_k);
    		 console.log("tabfilter_k_edit:loadchartFilterbyidedit:::"+tabfilter_k_edit);
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
    				url : "/CafeBotCharting/setchartDashbyidedit",
    				data : {
    					id : chartid,
    					dashID : _id,
    					varDimFilter1 : varDimFilter,
    				},
    				success : function(result) {

    					
    					console.log("result filter:setchartDashbyid::::::::::::",result);
    		    	var arr = result;
    		    	console.log("tabfilter_k edit--  "+tabfilter_k);
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
    	                    
    						   var optionselectedADV1= filterArr[j][0].filterselect1;
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
    						   
    						   var optionselectedADV2= filterArr[j][0].filterselect2;											 
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
    							   
    							   var andorvalueselected= filterArr[j][0].andorvalue;
    	    	                    var and ="";
    	    	                    var or ="";
	    	    	                    if( andorvalueselected == " and ")
	    							    {										                     
	    	    	                    	and = "checked";
	    								}
		    						   else if( andorvalueselected == "or")
		    							   {
		    							   or = "checked";
		    	                           }
    							   
    	                   console.log("globalFilterCount---"+globalFilterCount);
    							   var comparisontxt = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:0;top: -35px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+tabfilter_k_edit+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+tabfilter_k_edit+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+globalFilterCount_edit+"' disabled><option value='adv'  "+option1+" >Advance</option><option value='topn'  "+option2+">Top N</option></select><div class='mt-2' id='optiondivtopn"+globalFilterCount_edit+"' style=''><select class='form-control' id='top_bottom' style='display:none;' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+globalFilterCount_edit+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
    								+"<div class='mt-2 mb-2'><select class='form-control'  disabled><option value='contains' "+option11+">contains</option><option value='does not contain' "+option12+">does not contain</option><option value='starts with' "+option13+">starts with</option><option value='does not start with' "+option14+">does not start with</option><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is blank' "+option17+">is blank</option><option value='is not blank' "+option18+">is not blank</option><option value='is empty' "+option19+">is empty</option><option value='is not empty' "+option10+">is not empty</option></select></div>"
    								+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+globalFilterCount_edit+"'  onblur='filtervaluekeyup("+globalFilterCount_edit+")'></div>"
    								+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='and"+globalFilterCount_edit+"'  value='"+ filterArr[j][0].andorvalue+"'  "+and+" disabled><label class='css-iwo4qd' for='and"+globalFilterCount_edit+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='or"+globalFilterCount_edit+"'  value='"+ filterArr[j][0].andorvalue+"'  "+or+" disabled><label class='css-iwo4qd' for='or"+globalFilterCount_edit+"'>Or </label></div></div>"
    								+"<div class='mt-2 mb-2'><select class='form-control'  disabled><option value='contains' "+option21+">contains</option><option value='does not contain' "+option22+">does not contain</option><option value='starts with' "+option23+">starts with</option><option value='does not start with' "+option24+">does not start with</option><option value='is' "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is blank' "+option27+">is blank</option><option value='is not blank' "+option28+">is not blank</option><option value='is empty' "+option29+">is empty</option><option value='is not empty' "+option20+">is not empty</option></select></div>"
    								+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+globalFilterCount_edit+"' onblur='filterinvaluekeyup("+globalFilterCount_edit+")'></div></div>"
    								+"<div id='basicselectdiv"+globalFilterCount_edit+"' style='display:none'><div class='mt-2'><table style='width:100%'><thead><tr><th><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal'  class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Select All </span></th></tr></thead><tbody><tr class='row'><td class='col-md-6'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal' checked='checked' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'> 0.10 </span></label></div></div> </div></td><td class='col-md-6'><div class='cb-range-Label'>149013</div></td></tr></tbody></table></div></div>"
    								+"<div id='topnselectdiv"+globalFilterCount_edit+"' value= '"+ filterArr[j][0].filterselecttypevalue+"' style='display:none' disabled><div class='mt-2'><span>Show items</span><select id='filtertopn"+globalFilterCount_edit+"' value ='"+ filterArr[j][0].filtertopn+"'  class='form-control' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' value='"+filterArr[j][0].filtertopvalue+"' id='topninput"+globalFilterCount_edit+"'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>";


    			    				var comparisonnumber = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:0;top: -35px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+tabfilter_k_edit+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+tabfilter_k_edit+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option "+globalFilterCount_edit+"' disabled><option value='adv'  "+option1+" >Advance</option><option value='topn'  "+option2+">Top N</option></select><div class='mt-2' id='optiondivtopn"+globalFilterCount_edit+"' style=''><select class='form-control' id='top_bottom' style='display:none;' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+globalFilterCount_edit+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
    								+"<div class='mt-2 mb-2'><select class='form-control'  disabled><option value='contains' "+option11+">contains</option><option value='does not contain' "+option12+">does not contain</option><option value='starts with' "+option13+">starts with</option><option value='does not start with' "+option14+">does not start with</option><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is blank' "+option17+">is blank</option><option value='is not blank' "+option18+">is not blank</option><option value='is empty' "+option19+">is empty</option><option value='is not empty' "+option10+">is not empty</option></select></div>"
    								+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+globalFilterCount_edit+"' onblur='filtervaluekeyup("+globalFilterCount_edit+")'></div>"
    								+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='and"+globalFilterCount_edit+"'  value='"+ filterArr[j][0].andorvalue+"'  "+and+" disabled><label class='css-iwo4qd' for='and"+globalFilterCount_edit+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='or"+globalFilterCount_edit+"'  value='"+ filterArr[j][0].andorvalue+"'  "+or+" disabled><label class='css-iwo4qd' for='or"+globalFilterCount_edit+"'>Or </label></div></div>"
    								+"<div class='mt-2 mb-2'><select class='form-control'  disabled><option value='contains' "+option21+">contains</option><option value='does not contain' "+option22+">does not contain</option><option value='starts with' "+option23+">starts with</option><option value='does not start with' "+option24+">does not start with</option><option value='is' "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is blank' "+option27+">is blank</option><option value='is not blank' "+option28+">is not blank</option><option value='is empty' "+option29+">is empty</option><option value='is not empty' "+option20+">is not empty</option></select></div>"
    								+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+globalFilterCount_edit+"' onblur='filterinvaluekeyup("+globalFilterCount_edit+")'></div></div>"
    								+"<div id='basicselectdiv"+globalFilterCount_edit+"' style='display:none'><div class='mt-2'><table style='width:100%'><thead><tr><th><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal'  class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Select All </span></th></tr></thead><tbody><tr class='row'><td class='col-md-6'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal' checked='checked' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'> 0.10 </span></label></div></div> </div></td><td class='col-md-6'><div class='cb-range-Label'>149013</div></td></tr></tbody></table></div></div>"
    								+"<div id='topnselectdiv"+globalFilterCount_edit+"' value= '"+ filterArr[j][0].filterselecttypevalue+"' style='display:none' disabled><div class='mt-2'><span>Show items</span><select id='filtertopn"+globalFilterCount_edit+"' class='form-control' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' value='"+filterArr[j][0].filtertopvalue+"' id='topninput"+globalFilterCount_edit+"'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>";

    			    				var comparisondate = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:0;top: -35px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+tabfilter_k_edit+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+tabfilter_k_edit+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+globalFilterCount_edit+"' disabled><option value='adv' "+option1+">Advance</option><option value='topn'  "+option2+">Top N</option></select><div class='mt-2' id='optiondivtopn"+globalFilterCount_edit+"'><select class='form-control' id='top_bottom' style='display:none;' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+globalFilterCount_edit+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
    								+"<div class='mt-2 mb-2'><select class='form-control'  disabled><option value='contains' "+option11+">contains</option><option value='does not contain' "+option12+">does not contain</option><option value='starts with' "+option13+">starts with</option><option value='does not start with' "+option14+">does not start with</option><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is blank' "+option17+">is blank</option><option value='is not blank' "+option18+">is not blank</option><option value='is empty' "+option19+">is empty</option><option value='is not empty' "+option10+">is not empty</option></select></div>"
    								+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+globalFilterCount_edit+"' onblur='filtervaluekeyup("+globalFilterCount_edit+")'></div>"
    								+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='and"+globalFilterCount_edit+"'  value='"+ filterArr[j][0].andorvalue+"'  "+and+" disabled><label class='css-iwo4qd' for='and"+globalFilterCount_edit+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='or"+globalFilterCount_edit+"'  value='"+ filterArr[j][0].andorvalue+"'  "+or+" disabled><label class='css-iwo4qd' for='or"+globalFilterCount_edit+"'>Or </label></div></div>"
    								+"<div class='mt-2 mb-2'><select class='form-control'  disabled><option value='contains' "+option21+">contains</option><option value='does not contain' "+option22+">does not contain</option><option value='starts with' "+option23+">starts with</option><option value='does not start with' "+option24+">does not start with</option><option value='is' "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is blank' "+option27+">is blank</option><option value='is not blank' "+option28+">is not blank</option><option value='is empty' "+option29+">is empty</option><option value='is not empty' "+option20+">is not empty</option></select></div>"
    								+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+globalFilterCount_edit+"' onblur='filterinvaluekeyup("+globalFilterCount_edit+")'></div></div>"
    								+"<div id='basicselectdiv"+globalFilterCount_edit+"' style='display:none'><div class='mt-2'><table style='width:100%'><thead><tr><th><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal'  class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Select All </span></th></tr></thead><tbody><tr class='row'><td class='col-md-6'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal' checked='checked' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'> 0.10 </span></label></div></div> </div></td><td class='col-md-6'><div class='cb-range-Label'>149013</div></td></tr></tbody></table></div></div>"
    								+"<div id='topnselectdiv"+globalFilterCount_edit+"' value= '"+ filterArr[j][0].filterselecttypevalue+"' style='display:none' disabled><div class='mt-2'><span>Show items</span><select id='filtertopn"+globalFilterCount_edit+"' class='form-control' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' value='"+filterArr[j][0].filtertopvalue+"' id='topninput"+globalFilterCount_edit+"'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>	";

    			    				var elfitem="";

    			    				elfitem = "<div class='column-card DataMapping_column-card__2VBWp ui-draggable ui-draggable-handle dropzoneselect'  draggable='true' "
    			    				+ "data-field='"+filterArr[j][0].Field +"' data-types='"+filterArr[j][0].Types+"' > <span class='datatype'>"+sym+"</span>"
    			    				+ "<span class='DataMapping_column-title__2yLXi'>"+filterArr[j][0].Field+"</span><span style='text-align: -webkit-right;position:absolute;right: -2px; top: 8px;  display:none'><a href='Javascript:void(0);' class='xicon delete'  title='Remove'>X</a></span>"

    			    				
    			    				 if(optionselected == "adv")
    				                 	{
    				                    //  $("#select_option option:selected" ).val(); 
    				                      //alert("adv---"+globalFilterCount_edit);
    				                      setTimeout(() => {
    				                    	  $("#optiondivselect"+globalFilterCount_edit).show(); 
    										  $("#topnselectdiv"+globalFilterCount_edit).hide();
    									}, 2000);
    				                      
    				                 	}
    				                 else if(optionselected == "topn")
    					             	{
    					                 	//$("#select_option option:selected" ).val(); 
    					                // alert("topn--"+globalFilterCount_edit);
    					                 
    					                 	setTimeout(() => {
    					                 		$("#optiondivselect"+globalFilterCount_edit).hide(); 
    										    $("#topnselectdiv"+globalFilterCount_edit).show();
    										}, 2000);
    					                 	
    					             	}
    		    			
    		    			if (filterArr[j][0].Types.includes("text")) { //multi
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
    		    			console.log("divmain--    "+divmain);
    		    			
    		    			
    		    			
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

var globalFilterCount=0;
//var tabfilter_k=0;
function loadchartFilterbyid(chartid ){
  console.log("globaltabcount-----"+globaltabcount);
  console.log("globalFilterCountSet-----"+globalFilterCountSet);
  if(globalFilterCountSet> 0)
	  {
	  
	 
	  globalFilterCount=globalFilterCountSet;
	  //tabfilter_k=globalFilterCountSet;
	  //$("#tabfilter"+tabfilter_k)
	  }
  
  
  
  console.log("globalFilterCount-----"+globalFilterCount);
//	alert("_id:loadchartFilterbyid:::"+chartid);
	 console.log("chartid--  "+chartid);
	 console.log("tabfilter_k--  "+tabfilter_k);
	 tabfilter_k=tabfilter_k+1;
	// alert("tabfilter_k   " +tabfilter_k);
	// alert("_tabfilter_k:loadchartFilterbyid:::");
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
			url : "/CafeBotCharting/setchartDashbyid",
			data : {
				id : chartid,
				dashID:_id,
				//tabid:"tabs-"+globaltabcount;
			},
			success : function(result) {

				
				console.log("result filter:setchartDashbyid::::::::::::",result);
	    	var arr = result;
	    	console.log("arr:setchartDashbyid::::::::::::",arr);
	    	console.log("arr:setchartDashbyid::::::::::::",arr.length);
	    	console.log("arr:globalFilterCount:::::::::::"+globalFilterCount);
	    	//tabfilter_k=tabfilter_k+1;
	    	globalFilterCount=globalFilterCount+1;
	   for ( var k=0 ; k < arr.length; k++) 
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
                    console.log("optionselected--"+optionselected);
                    var option1 ="";
                    var option2 ="";
                    
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
 
					   var optionselectedADV1= filterArr[j][0].filterselect1;
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
					   
					   var optionselectedADV2= filterArr[j][0].filterselect2;											 
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
						   
						   var andorvalueselected= filterArr[j][0].andorvalue;
   	                       var and ="";
   	                       var or ="";
	    	                    if( andorvalueselected == " and ")
							    {										                     
	    	                    	and = "checked";
								}
   						   else if( andorvalueselected == "or")
   							   {
   							   or = "checked";
   	                           }
						   
                    
	    			var comparisontxt = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:0;top: -35px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+tabfilter_k+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+tabfilter_k+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+globalFilterCount+"' disabled><option value='adv'  "+option1+" >Advance</option><option value='topn'  "+option2+">Top N</option></select><div class='mt-2' id='optiondivtopn"+globalFilterCount+"' ><select class='form-control' id='top_bottom' style='display:none;' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+globalFilterCount+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
					+"<div class='mt-2 mb-2'><select class='form-control'  disabled><option value='contains' "+option11+">contains</option><option value='does not contain' "+option12+">does not contain</option><option value='starts with' "+option13+">starts with</option><option value='does not start with' "+option14+">does not start with</option><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is blank' "+option17+">is blank</option><option value='is not blank' "+option18+">is not blank</option><option value='is empty' "+option19+">is empty</option><option value='is not empty' "+option10+">is not empty</option></select></div>"
					+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"'  onblur='filtervaluekeyup("+globalFilterCount+")'></div>"
					+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='and"+globalFilterCount+"'  value=' and ' "+and+" disabled><label class='css-iwo4qd' for='and"+globalFilterCount+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='or"+globalFilterCount+"'  value=' or ' "+or+" disabled><label class='css-iwo4qd' for='or"+globalFilterCount+"'>Or </label></div></div>"
					+"<div class='mt-2 mb-2'><select class='form-control'  disabled><option value='contains' "+option21+">contains</option><option value='does not contain' "+option22+">does not contain</option><option value='starts with' "+option23+">starts with</option><option value='does not start with' "+option24+">does not start with</option><option value='is' "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is blank' "+option27+">is blank</option><option value='is not blank' "+option28+">is not blank</option><option value='is empty' "+option29+">is empty</option><option value='is not empty' "+option20+">is not empty</option></select></div>"
					+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+globalFilterCount+"' onblur='filterinvaluekeyup("+globalFilterCount+")'></div></div>"
					+"<div id='basicselectdiv"+globalFilterCount+"' style='display:none'><div class='mt-2'><table style='width:100%'><thead><tr><th><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal'  class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Select All </span></th></tr></thead><tbody><tr class='row'><td class='col-md-6'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal' checked='checked' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'> 0.10 </span></label></div></div> </div></td><td class='col-md-6'><div class='cb-range-Label'>149013</div></td></tr></tbody></table></div></div>"
					+"<div id='topnselectdiv"+globalFilterCount+"' value= '"+ filterArr[j][0].filterselecttypevalue+"'  style='display:none' disabled><div class='mt-2'><span>Show items</span><select id='filtertopn"+globalFilterCount+"' value ='"+ filterArr[j][0].filtertopn+"'  class='form-control' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' value='"+filterArr[j][0].filtertopvalue+"' id='topninput"+globalFilterCount+"' onblur='topninput("+globalFilterCount+")'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>";


    				var comparisonnumber = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:0;top: -35px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+tabfilter_k+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+tabfilter_k+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+globalFilterCount+"' disabled><option value='adv'  "+option1+" >Advance</option><option value='topn'  "+option2+">Top N</option></select><div class='mt-2' id='optiondivtopn"+globalFilterCount+"' ><select class='form-control' id='top_bottom' style='display:none;' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+globalFilterCount+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
					+"<div class='mt-2 mb-2'><select class='form-control'  disabled><option value='contains' "+option11+">contains</option><option value='does not contain' "+option12+">does not contain</option><option value='starts with' "+option13+">starts with</option><option value='does not start with' "+option14+">does not start with</option><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is blank' "+option17+">is blank</option><option value='is not blank' "+option18+">is not blank</option><option value='is empty' "+option19+">is empty</option><option value='is not empty' "+option10+">is not empty</option></select></div>"
					+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+globalFilterCount+"'  onblur='filtervaluekeyup("+globalFilterCount+")'></div>"
					+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='and"+globalFilterCount+"'  value=' and ' "+and+" disabled><label class='css-iwo4qd' for='and"+globalFilterCount+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='or"+globalFilterCount+"'  value=' or ' "+or+" disabled><label class='css-iwo4qd' for='or"+globalFilterCount+"'>Or </label></div></div>"
					+"<div class='mt-2 mb-2'><select class='form-control'  disabled><option value='contains' "+option21+">contains</option><option value='does not contain' "+option22+">does not contain</option><option value='starts with' "+option23+">starts with</option><option value='does not start with' "+option24+">does not start with</option><option value='is' "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is blank' "+option27+">is blank</option><option value='is not blank' "+option28+">is not blank</option><option value='is empty' "+option29+">is empty</option><option value='is not empty' "+option20+">is not empty</option></select></div>"
					+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+globalFilterCount+"' onblur='filterinvaluekeyup("+globalFilterCount+")'></div></div>"
					+"<div id='basicselectdiv"+globalFilterCount+"' style='display:none'><div class='mt-2'><table style='width:100%'><thead><tr><th><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal'  class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Select All </span></th></tr></thead><tbody><tr class='row'><td class='col-md-6'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal' checked='checked' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'> 0.10 </span></label></div></div> </div></td><td class='col-md-6'><div class='cb-range-Label'>149013</div></td></tr></tbody></table></div></div>"
					+"<div id='topnselectdiv"+globalFilterCount+"' value= '"+ filterArr[j][0].filterselecttypevalue+"' style='display:none' disabled><div class='mt-2'><span>Show items</span><select id='filtertopn"+globalFilterCount+"' value ='"+ filterArr[j][0].filtertopn+"'  class='form-control' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' value='"+filterArr[j][0].filtertopvalue+"' id='topninput"+globalFilterCount+"' onblur='topninput("+globalFilterCount+")'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>";

    				var comparisondate = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:0;top: -35px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+tabfilter_k+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+tabfilter_k+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+globalFilterCount+"' disabled><option value='adv' "+option1+">Advance</option><option value='topn'  "+option2+">Top N</option></select><div class='mt-2' id='optiondivtopn"+globalFilterCount+"'><select class='form-control' id='top_bottom' style='display:none;' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+globalFilterCount+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
					+"<div class='mt-2 mb-2'><select class='form-control'  disabled><option value='contains' "+option11+">contains</option><option value='does not contain' "+option12+">does not contain</option><option value='starts with' "+option13+">starts with</option><option value='does not start with' "+option14+">does not start with</option><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is blank' "+option17+">is blank</option><option value='is not blank' "+option18+">is not blank</option><option value='is empty' "+option19+">is empty</option><option value='is not empty' "+option10+">is not empty</option></select></div>"
					+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+globalFilterCount+"' onblur='filtervaluekeyup("+globalFilterCount+")'></div>"
					+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='and"+globalFilterCount+"'  value=' and ' "+and+" disabled><label class='css-iwo4qd' for='and"+globalFilterCount+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+ ""+globalFilterCountSet+"' id='or"+globalFilterCount+"'  value=' or ' "+or+" disabled><label class='css-iwo4qd' for='or"+globalFilterCount+"'>Or </label></div></div>"
					+"<div class='mt-2 mb-2'><select class='form-control'  disabled><option value='contains' "+option21+">contains</option><option value='does not contain' "+option22+">does not contain</option><option value='starts with' "+option23+">starts with</option><option value='does not start with' "+option24+">does not start with</option><option value='is' "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is blank' "+option27+">is blank</option><option value='is not blank' "+option28+">is not blank</option><option value='is empty' "+option29+">is empty</option><option value='is not empty' "+option20+">is not empty</option></select></div>"
					+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+globalFilterCount+"' onblur='filterinvaluekeyup("+globalFilterCount+")'></div></div>"
					+"<div id='basicselectdiv"+globalFilterCount+"' style='display:none'><div class='mt-2'><table style='width:100%'><thead><tr><th><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal'  class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Select All </span></th></tr></thead><tbody><tr class='row'><td class='col-md-6'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal' checked='checked' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'> 0.10 </span></label></div></div> </div></td><td class='col-md-6'><div class='cb-range-Label'>149013</div></td></tr></tbody></table></div></div>"
					+"<div id='topnselectdiv"+globalFilterCount+"' value= '"+ filterArr[j][0].filterselecttypevalue+"' style='display:none' disabled><div class='mt-2'><span>Show items</span><select id='filtertopn"+globalFilterCount+"'  value ='"+ filterArr[j][0].filtertopn+"'  class='form-control' disabled><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' value='"+filterArr[j][0].filtertopvalue+"' id='topninput"+globalFilterCount+"' onblur='topninput("+globalFilterCount+")'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>	";

    				var elfitem="";

    				elfitem = "<div class='column-card DataMapping_column-card__2VBWp ui-draggable ui-draggable-handle dropzoneselect'  draggable='true' "
    				+ "data-field='"+filterArr[j][0].Field +"' data-types='"+filterArr[j][0].Types+"' > <span class='datatype'>"+sym+"</span>"
    				+ "<span class='DataMapping_column-title__2yLXi'>"+filterArr[j][0].Field+"</span><span style='text-align: -webkit-right;position:absolute;right: -2px; top: 8px;  display:none'><a href='Javascript:void(0);' class='xicon delete'  title='Remove'>X</a></span>"

    				
    				 if(optionselected == "adv")
	                 	{
	                    //  $("#select_option option:selected" ).val(); 
	                      //alert("adv---"+globalFilterCount);
	                      setTimeout(() => {
	                    	  
	                    	  //alert("hi----"+globalFilterCount)
	                    	  $("#optiondivselect"+globalFilterCount).show(); 
							  $("#topnselectdiv"+globalFilterCount).hide();
						}, 2000);
	                      
	                 	}
	                 else if(optionselected == "topn")
		             	{
		                 	//$("#select_option option:selected" ).val(); 
		                // alert("topn--"+globalFilterCount);
		                 
		                 setTimeout(() => { 
		                	 
		                // alert("hi----"+globalFilterCount)
		                	 $("#topnselectdiv"+globalFilterCount).show();
		                
		                 		$("#optiondivselect"+globalFilterCount).hide(); 
							    
							}, 2000);
		                 	
		             	}
	    			
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
	    			console.log("divmain--    "+divmain);
	    			
	    			
	    			
	    			$('.dropzonefilter').append(divmain);
	    			
	    			 globalFilterCountSet = globalFilterCountSet+1;
	    			
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



   function onChangedata(index){
		//alert('hi')

		if ($("#select_option"+index).val() == "adv"){
			$("#optiondivselect"+index).show();
			$("#basicselectdiv"+index).hide();
			$("#topnselectdiv"+index).hide();
		}
		else if ($("#select_option"+index).val() == "basic"){
			$("#optiondivselect"+index).hide();
			$("#basicselectdiv"+index).show();
			$("#topnselectdiv"+index).hide();
		}
		else if ($("#select_option"+index).val() == "topn"){
			$("#optiondiv"+index).hide();
			$("#optiondivselect"+index).hide();
			$("#basicselectdiv"+index).hide();
			$("#topnselectdiv"+index).show();
		}
	}


   function topninput(index){
   //	alert("hi");
   
   	  var displaytopvalue=$("#topninput"+index).val();
   	  console.log("displaytopvalue::"+displaytopvalue);
   	  
   //	$("#topninput"+index).val(displaytopvalue);
   	 //document.getElementById("topninput"+index).value = displaytopvalue;
   //	 $("#topninput"+index)
     }



function showFilterDiv()
{
   var index ="";	
	
   
      $("#tabfilter"+index).show();
   
   
}

    
    
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	
}
function closeNav() {
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
	
		   if (index==1)  //tabcount validation
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
    
	
	function contentDiv(){
		  // $("#confusion_matrix_summary").toggle();
		  $('.slide-in').toggleClass('show');
		  $('.contentblock').toggle();
		  $('.contentshow').toggle();
		}
	function closetoggle(){
		 $('.slide-in').toggleClass('show');
		}
	
	
	//var tabcount=0;
	
	function addtab(t)
	{
		tabcount= t+1;
		
		$("#addddashtitle").show();
		$("#popUptitleDive").html("ADD tab");
		$("#btnAddtab").show();
		$("#btnUpdatetab").hide();
		//alert("tabcount::::"+tabcount);
		$("#addtabcount").val(tabcount);
		
		
		
	}
	
	var addTab_Flag =1;
	 function getdashnameAdd()
	    {
	    	//"<li><a href=\"#tabs-1\">Dash 1</a></li>"+
	    	//tabcount= t+1;
	    	
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
	    	//  $("#tabs").tabs("add","#tabs-3","Friends Discussions");
	    
	         $("#addddashtitle").hide();
	         $("#dashtabname").val("");
	         //
	         addTab_Flag =0;
	        
	        
	         
	    }
	
	
	
	function opendashtitle(index)
	{
		$("#dashtabhidden").val(index);
		$("#addddashtitle").show();
		$("#popUptitleDive").html("Edit tab");
		$("#btnAddtab").hide();
		$("#btnUpdatetab").show();
		
	}
    function closedash(){
    	$("#addddashtitle").hide();
    }
    function getdashnameUpdate()
    {
    	
    	var indexid = $("#dashtabhidden").val();
    	var getdashname=$("#dashtabname").val();
    	console.log("getdashname::"+getdashname);
    	
    	$("#settabname"+indexid).html(getdashname);
    	$("#settabname"+indexid).attr("title",getdashname);
    	//$("#tabs-"+indexid).data-tabname(getdashname);
    	//var data_tabname_dashtabname = $("#tabs-"+indexid).data('tabname',getdashname);
    	var data_tabname_dashtabname = $("#tabs-"+indexid).attr("data-tabname",getdashname);
    	console.log("data_tabname_dashtabname ::  "+data_tabname_dashtabname);
    	
    	$("#addddashtitle").hide();
    	$("#dashtabhidden").val("");
    	 $("#dashtabname").val("");
    	
    }
    function openChartlist() {
        document.getElementById("chartlistdiv").style.width = "250px";
        }
    
   function closeChartlist() 
   {
        document.getElementById("chartlistdiv").style.width = "0";
    }
        
    function updateChartname(index,name)
    {
    	//alert("name::::"+name);
    	//alert("index::::"+index);
    	//update chart name
    	$.ajax({method : "POST",	
			async: false,
			url : "/CafeBotCharting/updatechartname",
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
    
    
    function filtervaluekeyup(index){
    	//alert("hi");
    	  var displaytopvalue=$("#filtervalueid"+index).val();
    	  console.log("displaytopvalue::"+displaytopvalue);
    	  
    	 /*  if(displaytopvalue !="")
    	  {
    	   	  $("#btnChart").trigger("click");
    	  } */
    	  
       }
    
    
    function showitemvalue(value,index){
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
    function filtervaluekeyup(index){
    	//alert("hi");
    	  var displaytopvalue=$("#filtervalueid"+index).val();
    	  console.log("displaytopvalue::"+displaytopvalue);
    	  
       }
    
    
    function filterinvaluekeyup(index){
    	//alert("hi");
    	  var displaytopvalue=$("#filterinvalueid"+index).val();
    	  console.log("displaytopvalue::"+displaytopvalue);
    	  //$("#btnChart").trigger("click");
      }
   
    
    function andorChange(index)
	{
		//alert("hi");
		//if ($("#filtervalueid"+index).val() !="")
		//{
			// $("#btnChart").trigger("click");
		//}
	}
    
    function createNewDashboard()
    {
		  var dashid =0;
		  var projectid =0;
		  $.ajax({method : "POST", url : "/CafeBotCharting/savenewdashboard",
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
					alert("Something went wrong!");
				}	
				else 
				{	
					
				//----mansi
					window.open('/CafeBotCharting/dashboard_new?id='+result,'_blank' );
					//window.open('/CafeBotCharting/dashboard?id='+result,'_blank' );
				   //http://localhost:8060/CafeBotCharting/dashboard?id=1
				}
					
					
				},
				error : function(data) { 
						console.log(data);
					}
				});
		  
		
	 

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
		//alert("hi")
		  const btnToggle = document.getElementById('btnToggle');
		  const slidetoggle = document.getElementById('slidetoggle');

		  if (!btnToggle.contains(event.target) && !slidetoggle.contains(event.target)) {
			  //alert("in")
		    $("#removeshow").removeClass("show");
		  }
		});
    </script>
</body>
</html>
