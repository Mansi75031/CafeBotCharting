<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
 <%--  <%@include file="includes/jsp_dashboard_link.jsp" %> --%>
  <%-- <jsp:include page='jsp_dashboard_link.jsp'>
    <jsp:param name="articleId" value=""/>
</jsp:include> --%>
  <title>CafeBot Dash</title>
  
  
<%--   
<%String leftAds = request.getParameter("articleId");%>

<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
 --%>

 <link rel="stylesheet" href="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/css/web/kendo.common-bootstrap.min.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>">
<link rel="stylesheet" href="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/css/web/kendo.materialblack.min.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>">
<!-- <script src="/js/themes/skies.js"></script>
<script src="/js/themes/sand-signika.js"></script>
<script src="/js/themes/grid.js"></script>
<script src="/js/themes/grid-light.js"></script>
<script src="/js/themes/gray.js"></script>
<script src="/js/themes/dark-unica.js"></script>
<script src="/js/themes/dark-green.js"></script>
<script src="/js/themes/dark-blue.js"></script> -->
<!-- //https://103\.104\.73\.11:8443 -->
<link rel="stylesheet"	href="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/select2/dist/css/select2.min.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>">

<!-- <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500" rel="stylesheet" type="text/css"> -->


<link rel="stylesheet" href="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/bootstrap-daterangepicker/daterangepicker.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>">
<link rel="stylesheet" href="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/dropzone/dist/dropzone.css'/>">

<link rel="stylesheet" href="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>">
 
<link rel="stylesheet" href="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/icon_fonts_assets/font-awesome/css/font-awesome.min.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>">
    
<link rel="stylesheet" href="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/fullcalendar/dist/fullcalendar.min.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>">
<link rel="stylesheet" href="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/perfect-scrollbar/css/perfect-scrollbar.min.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>">
<link rel="stylesheet" href="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/slick-carousel/slick/slick.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>">
<link rel="stylesheet" href="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/css/main.css?version=4.4.0'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>">


<link rel="stylesheet" href="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/css/roboto_font.css'> <c:param name='jsversion' value='12'/>   </c:url>">
<link rel="stylesheet" href="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/css/cafebot_font_style.css'> <c:param name='jsversion' value='444'/>   </c:url>">


<link rel="stylesheet" href="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/css/sv_assets.css'> <c:param name='jsversion' value='354354'/>   </c:url>">
<link rel="stylesheet" href="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/css/sweetviz.css'> <c:param name='jsversion' value='354354'/>   </c:url>">
<link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">
 <link rel="stylesheet" href="<c:url value="/resources/plugins/gridstack/dist/demo.css"/>" />
	
	   <link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">



     <script src="<c:url value="/resources/plugins/gridstack/dist/gridstack-h5.js"/>"></script>

 <script src="<c:url value="/resources/plugins/gridstack/dist/es5/gridstack-jq.js"/>"></script>

<script  src="<c:url value='/resources/jsdash/jquery-3.6.0.js'> <c:param name='jsversion' value='1111'/>   </c:url>"></script>

<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/angular.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>



<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/kendo.all.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/kendo.timezones.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>


<script src="https://gitcdn.github.io/bootstrap-toggle/2.2.2/js/bootstrap-toggle.min.js"></script>


<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/theme-chooser.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>

<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/popper.js/dist/umd/popper.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/moment/moment.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/chart.js/dist/Chart.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/select2/dist/js/select2.full.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/jquery-bar-rating/dist/jquery.barrating.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/ckeditor/ckeditor.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/bootstrap-validator/dist/validator.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/bootstrap-daterangepicker/daterangepicker.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/ion.rangeSlider/js/ion.rangeSlider.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/dropzone/dist/dropzone.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/editable-table/mindmup-editabletable.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>




<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/datatables.net/js/jquery.dataTables.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>

<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/fullcalendar/dist/fullcalendar.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js'>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/tether/dist/js/tether.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/slick-carousel/slick/slick.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/bootstrap/js/dist/util.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/bootstrap/js/dist/alert.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/bootstrap/js/dist/button.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/bootstrap/js/dist/carousel.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/bootstrap/js/dist/collapse.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/bootstrap/js/dist/dropdown.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/bootstrap/js/dist/modal.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/bootstrap/js/dist/tab.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/bootstrap/js/dist/tooltip.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/bootstrap/js/dist/popover.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/js/demo_customizer.js?version=4.4.0'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<%-- <script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/js/main.js?version=4.4.0'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script> 
 --%><!-- NProgress -->
<link href="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/nprogress/nprogress.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>" rel="stylesheet">
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/nprogress/nprogress.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/notify.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>


<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/assets/js/plotly/plotly_latest.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script> 
<!-- <script src="https://cdn.plot.ly/plotly-latest.min.js"></script> -->

<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/customjs/custom_url.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>

<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/customjs/cafebot_context.js'> <c:param name='jsversion' value='io333eeeeef'/>   </c:url>"></script>


<%--  <script src="<c:url value='/https://demo.cafebot.ai:8443/cafe-botresources/customjs/custom.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
 --%> 



 <link href="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/css/cafebot_left_panel.css'> <c:param name='jsversion' value='4499667733'/>   </c:url>" rel="stylesheet">
<link href="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/css/cafebot_kendo_style.css'> <c:param name='jsversion' value='2343378'/>   </c:url>" rel="stylesheet"> 
 
	
   <link rel="stylesheet" type="text/css" href="<c:url value="/resources/css/dashboard.css"/>" />
  
  
  <link rel="stylesheet" id="theme" type="text/css" href="<c:url value="/resources/css/dashboard_dark.css"/>" />
  
 
  <link id="theme_" href="<c:url value='/resources/css/dark-unica-dash.css'> <c:param name='jsversion' value='555'/>   </c:url>" rel="stylesheet"> 
  

  
    
  <link href="https://cdn.datatables.net/1.10.9/css/jquery.dataTables.min.css" rel="stylesheet" />
  
  
 <link rel="stylesheet" type="text/css"  href="https://demo.cafebot.ai:8443/cafe-bot/resources/css/cafebot_datatable_style.css?jsversion=3.1.3">
	
	 
		<script   src="<c:url value='/resources/js/highcharts.js'> <c:param name='jsversion' value='11666'/>   </c:url>"
		></script>

<script   src="<c:url value='/resources/js/exporting.js'> <c:param name='jsversion' value='133'/>   </c:url>"
		></script>
 
<script  src="<c:url value='/resources/js/wordcloud.js'> <c:param name='jsversion' value='1122'/>   </c:url>"
		></script>	


<script  src="<c:url value='/resources/jsdash/jquery-ui.js'> <c:param name='jsversion' value='1111'/>   </c:url>"
		></script>
 
 
 <script  src="<c:url value='/resources/js/highcharts-more.js'> <c:param name='jsversion' value='13377'/>   </c:url>"
		></script>
		
		<script  src="<c:url value='/resources/js/marker-cluster.js'> <c:param name='jsversion' value='1111'/>   </c:url>"
		></script>
		
		<script  src="<c:url value='/resources/js/bullet_graph.js'> <c:param name='jsversion' value='166'/>   </c:url>"
		></script>
 
 <script  src="<c:url value='/resources/js/heatmap.js'> <c:param name='jsversion' value='1122'/>   </c:url>"
		></script>
 
        <script  src="<c:url value='/resources/js/highcharts-3d.js'> <c:param name='jsversion' value='1122'/>   </c:url>"
		></script>
		<script  src="<c:url value='/resources/js/cylinder.js'> <c:param name='jsversion' value='1122'/>   </c:url>"
		></script>
		<script  src="<c:url value='/resources/js/funnel.js'> <c:param name='jsversion' value='1122'/>   </c:url>"
		></script>
 
 
 <script src="<c:url value="/resources/plugins/gridstack/dist/events.js"/>"></script>
 
		<script src="https://cdn.datatables.net/1.10.9/js/jquery.dataTables.min.js"></script>
		
	<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/custom_jquery/jquery.dataTables.min.js'/>"></script>		
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/custom_jquery/jszip.min.js'/>"></script>		
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/custom_jquery/dataTables.buttons.min.js'/>"></script>		
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/custom_jquery/buttons.flash.min.js'/>"></script>		
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/custom_jquery/pdfmake.min.js'/>"></script>		
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/custom_jquery/vfs_fonts.js'/>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/custom_jquery/buttons.html5.min.js'/>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/custom_jquery/buttons.print.min.js'/>"></script>	
  
  
  <style>
  #dialog label, #dialog input { display:block; }
  #dialog label { margin-top: 0.5em; }
  #dialog input, #dialog textarea { width: 95%; }
  /* #tabs { margin-top: 1em; } */
  #tabs li .ui-icon-close { float: left; margin: 0.4em 0.2em 0 0; cursor: pointer; }
  #add_tab { cursor: pointer; }
  

  
  </style>
  

  <script type="text/javascript">
  
  
 /*  let grids = GridStack.initAll({animate: true,float: true, resizable: { handles: 'all'} }); */
  
  	function getParameterByName(name) {
			var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
			return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
		}
  var globaltabcount =1;
  var result_ = "";
 // var series ="";
  //var series2 ="";
  
  
  
  
  var isrealtime =0;
  function AjaxChart(varDim,_charttype,_table,_containerID,varDimFilter,chartid,tabid ,themeAjaxChart,ispublish){
	
		isrealtime =1;
	  
	  let chart;
	if (isrealtime == "1")
	{
		
		
		Highcharts.setOptions({
		    colors: ['rgba(5,141,199,0.5)', 'rgba(80,180,50,0.5)', 'rgba(237,86,27,0.5)']
		});

		const series = [{
		    name: 'Basketball',
		    id: 'basketball',
		    marker: {
		        symbol: 'circle'
		    }
		},
		{
		    name: 'Triathlon',
		    id: 'triathlon',
		    marker: {
		        symbol: 'triangle'
		    }
		},
		{
		    name: 'Volleyball',
		    id: 'volleyball',
		    marker: {
		        symbol: 'square'
		    }
		}];

setInterval(() => {
	

		async function getData() {
		    const response = await fetch('https://cdn.jsdelivr.net/gh/highcharts/highcharts@24912efc85/samples/data/olympic2012.json');
		    return response.json();
		}


		getData().then(data => {
		    const getData = sportName => {
		        const temp = [];
		        data.forEach(elm => {
		            if (elm.sport === sportName && elm.weight > 0 && elm.height > 0) {
		                temp.push([elm.height, elm.weight]);
		                
		                //console.log("temp      ",temp);
		               // temp.replaceAll('"', "'");
		            }
		        });
		        return temp;
		    };
		    series.forEach(s => {
		    	
		    	setInterval(() => {
		    		
		    		s.data = getData(s.id);
		    		 //console.log("s.data       "+s.data);
				}, 20000);
		        
		        
		        //console.log(s.data);
		        
		    });

		    Highcharts.chart(_containerID, {
		        chart: {
		            type: 'bar',
		            zoomType: 'xy'
		        },
		        title: {
		            text: 'Olympics athletes by height and weight',
		            align: 'middle'
		        },
		        subtitle: {
		            text:
		          'Source: <a href="https://www.theguardian.com/sport/datablog/2012/aug/07/olympics-2012-athletes-age-weight-height">The Guardian</a>',
		            align: 'middle'
		        },
		        xAxis: {
		            title: {
		                text: 'Height'
		            },
		            labels: {
		                format: '{value} m'
		            },
		            startOnTick: true,
		            endOnTick: true,
		            showLastLabel: true
		        },
		        yAxis: {
		            title: {
		                text: 'Weight'
		            },
		            labels: {
		                format: '{value} kg'
		            }
		        },
		        legend: {
		            enabled: true
		        },
		        plotOptions: {
		            scatter: {
		                marker: {
		                    radius: 2.5,
		                    symbol: 'circle',
		                    states: {
		                        hover: {
		                            enabled: true,
		                            lineColor: 'rgb(100,100,100)'
		                        }
		                    }
		                },
		                states: {
		                    hover: {
		                        marker: {
		                            enabled: false
		                        }
		                    }
		                }
		            }
		        },
		        tooltip: {
		            pointFormat: 'Height: {point.x} m <br/> Weight: {point.y} kg'
		        },
		        series
		    });
		}
		);
		
		
}, 2000);	
		
	console.log("Highcharts:::::",Highcharts);
	}   
	  
	//return;
	  else 
	  {
	  
	  console.log("_containerID:::::"+_containerID);
	  $("#" + _containerID).empty();
	  console.log("varDim:::::::"+varDim);
	  $.ajax({method : "POST", url : "./getchartDash_Real",
			data : {
				chartName : "type",
				fieldsprop : JSON.stringify(varDim),
			    charttype:	_charttype,
			    table:_table,
			    containerID:_containerID,
			    filterprop: JSON.stringify(varDimFilter), 
			    chartid : "1042"
			},
			success : function(result) 
			{
				console.log("result###########"+result);
				$("#" + _containerID).html(result)
			},
			error : function(data) { 
					console.log(data);
				}
			});
	  
	  } 
	
	
	
	   /*  
	    $('.grid-stack').on('resizestop', function(event, elem) {
	        alert("Start");
	    }); */
	  
  }
  
  
 
  function AjaxChart_withid(varDim,_charttype,_table,_containerID,varDimFilter,chartid,chartname,dashid){
	 // $("#" + _containerID).empty();
	 
	  console.log(varDim);
	  
	  //alert("globaltabcount::::"+globaltabcount);
	  var isexist =0;
	  $.ajax({method : "POST", url : "/cafe-bot/menu/buildTabDiv",
			data : {
				chartName : "type",
				varDim : JSON.stringify(varDim),
				_charttype:	_charttype,
				_table:_table,
				_containerID:_containerID,
				varDimFilter: JSON.stringify(varDimFilter),
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
						$("#gridtabs-"+globaltabcount).append(result)
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
		  //alert("_containerID:::::"+_containerID);
		  //alert("call div");
		console.log("isexist::::"+isexist);
		  if (isexist==0)
		  {
		  
		  $.ajax({method : "POST", url : "/cafe-bot/menu/getchartDashbyid",
				data : {
					chartName : "type",
					fieldsprop : JSON.stringify(varDim),
				    charttype:	_charttype,
				    table:_table,
				    containerID:_containerID,
				    filterprop: JSON.stringify(varDimFilter),
				    chartid:chartid,
				},
				success : function(result) 
				{
					closeChartlist();
					$("#gridtabs-"+globaltabcount).append(result);
				},
				error : function(data) { 
						console.log(data);
					}
				});
		  }
		  
	}, 1000);
	  

  }
   
  
  
  
   /* setTimeout(() => {refreshgrid();}, 1000); */ 
  
  function refreshgrid(){
	  //alert("refresh");
  let grids = GridStack.initAll({
  	animate : true,
    float : true, 
    resizable: { handles: 'all'} // do all sides for testing
  });
  }
  
  
  
  
  var addcount =1;
  var idarr= [];
  
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
  
  
  
  
  
   
   /*  $(document).ready(function() {
	  setRealtimeData();
   	
   });   */
  var json_Result = ""; 
  
  function setRealtimeData()
  {
	
	 
	 //console.log("start api data::::::",data);
	  //setInterval(function () 
	//{
		  
		  
      var x = (new Date()).getTime(), // current time
          y = Math.random();
      
      //series.addPoint([x, y]);
      
      
      var modelid =20;
      var id = "" ; // model id from url
      console.log("start api ::::::");
      
      $.ajax({method : "GET", url : "./previousmsg",
			data : {
				id : modelid,
			},
			success : function(result) 
			{
				console.log("previousmsg get data result::::::::"+result);
				json_Result = result;
				//setJsondatatochart(result);
				// var data =  ${model_};
				// console.log("previousmsg get data data::::::::"+data);
			},
			error : function(data) { 
					console.log(data);
				}
			});
      
      /* 
            console.log("start api ::::::");
		$.get("./previousmsg/"+id+"?id="+id).done(function (data) 
				{
			 		console.log("previousmsg get data ::::::::"+data);
			 		//return;
			 		setJsondatatochart(data);
				});		 */
		
		
/*   $.get("http://localhost:8585/rmqapi/getJsonDataforrealtime?modelid="+modelid).done(function (data) {
	            console.log("get data ::::::::"+data);
	   
	    	    var obj = JSON.parse(data);
	    	    for (var key in obj) 
	  			{
	    	    	 var val = obj[key];
	    	    	
	    	    	 var valarr = val.split(",");
	    	    		var xaxis = parseInt(valarr[0])+addcount;
	    				var yaxis = parseInt(valarr[1])+addcount;
	    				var x = (new Date()).getTime(), // current time
		                    y = Math.random();
		     				console.log("xaxis:::"+xaxis);
	    					console.log("yaxis::::"+yaxis);
					   		series.addPoint([xaxis, yaxis]);
	    			   if (addcount % 5 === 0) 
	    			   {
	    				   series2.addPoint([xaxis - 2, yaxis -2 ]);
	    			   } 
	    			   else 
	    			   {
	    			   }
	    		  addcount = addcount+1;
	  			}
				
	}); */
  
	 // }, 5000); 
	  
  }
  
    

  
  var loopcount =10;

  function setJsondatatochart(message)
  {
	  NProgress.start();
	  
	  debugger;
	  var tempmsg = message.replace("[", "")
  				var tmsg =  message;//.substring(1, message.length-1) //tempmsg.replace("]", "");
  				//alert("tmsg--"+tmsg);
  				var str_array = tmsg.split('#');
  				
  				//console.log("str_array.length::::::"+str_array.length);
  				
  	if (str_array.length > 0)
  		{
  					//alert("if true");
  			
  		if (str_array.length >100)
  		{
  			loopcount =100;
  		}			
  		
  		//alert("loopcount:::::"+loopcount);
  					
  			for(var i = 0; i <= loopcount; i++) 
  				{
  				   var data  =  str_array[i] ;
  					if (data == "" || data =="undefined" || data == undefined)
  					{
  						data = "";
  					}
  					var tmp1data= data.toString().replace(/&amp;quot;/gi, "\"").replace(/&quot;/gi, "\"");//.replace(/\[/gi,
  					
  					//var tmp2data= tmp1data.toString().replace(/"/gi, "#");
  					
  					//var tmpdata= tmp2data.toString().replace(/'/gi, "\"").replace(/&amp;quot;/gi, "\"").replace(/&quot;/gi, "\"").replace(/#/gi, "'");//.replace(/\[/gi, "#").replace(/\]/gi, "#");  
  					
  					/* if (tmpdata !="")
  					{	  
  						
  						if (i ==0 )
  						{
  							//sleeploadingbulkdata(500);

  						}
  						
  						//connectbulk(tmp1data);
  							
  					}
  				  */
  			
  				  			
  		if (tmp1data !="")
  		{
  		    var obj = "";
  			try 
  			    {
  		            //var json = JSON.parse(message.data);
  		    	    obj = JSON.parse(tmp1data);
  					//alert("json="+json);
  		        } catch (e) {
  		        	//console.log("errror"+e);
  		            //console.log('This doesn\'t look like a valid JSON: ', data);
  		            return;
  		     }
  	   // alert("obj--"+obj);
  	   var id =""; //1
  	   var data_json="";  //[[-2.9578741493153213, 3.2366238661699773]]
  	   var current_time ="";  // "2022-07-24T08:52:30.191784"
  	   var score ="";  //[-0.761]
  	   
  	   
  	   console.log("obj  ",obj)
  	   var Order_ID="";
  	   for(var m=0; m<= 4 ; m++)
  		   {
  		   var region = obj[m].Region;
  		 id = region;
  		   var country = obj[m].Country;
  		 data_json = country; 
  		   var Units_Sold = obj[m].Units_Sold;
  		 current_time = Units_Sold;	
		    Order_ID = obj[m].Order_ID;
		   score = Order_ID;	
  		   
  	   
  			  
  			    
  			var data_jsontemp = data_json.toString().replace("[","").replace("]","").replace("[","").replace("]","");
  	  		var data_jsonarr = data_jsontemp.split(",");
  	  	    var scoreData = score.toString().replace("[","").replace("]","");		    
  			    
  	  	    
  	  	    
  	  	 var valarr = data_jsontemp.split(",");
 		// var xaxis = parseInt(valarr[0]);
 		 
 		 var xaxis = Units_Sold;
 		 
 		 //console.log("valarr[0]::::::"+valarr[0]);
 		 //console.log("valarr[1]::::::"+valarr[1]);
			
 		   // var yaxis = parseInt(valarr[1]);
 		    
 		   var yaxis = Order_ID;
			var x = (new Date()).getTime(), // current time
             
			y = Math.random();
				//console.log("xaxis:::"+xaxis);
				//console.log("yaxis::::"+yaxis);
		  
	
	//if (!idarr.includes(id))
  	   //{
  			idarr.push(id); 
  		//if (valarr[0] !="")
		//{
		   if (Units_Sold !=""  && Units_Sold != undefined )
		{	
			console.log("set:::");
			series.addPoint([xaxis, yaxis]);
			
			 if (parseInt(scoreData)  > 1) 
			   {
				   series2.addPoint([xaxis, yaxis]);
			   } 
		   }
		//}   
				
  	  // }
				
				
				
  	  	    //console.log("data_jsontemp::::::"+data_jsontemp);
  	  		//console.log("data_jsonarr::::::"+data_jsonarr);
  	  		//console.log("scoreData::::::"+scoreData);
  			    
  		   }
  		
  	}
  		
  		
  				} //for 
  				
  			NProgress.done(true);
  		} //if
  		
  		}	
  
  function sendName() 
	{
		    console.log("subid----"+subid);
	    	stompClient.send("/app/hello", {}, JSON.stringify({'name': modelid,'subid':subid}));
	        NProgress.done(true);
	
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
							<img alt="Café Bot" src="https://demo.cafebot.ai:8443/cafe-bot/resources/images/cafebot-logo.png" >							
							
						</a>
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
						<label style="margin-bottom:0">Dark theme</label><i class="os-icon os-icon-x" onclick="closetoggle()"></i>
					</div> 
  
  </div>
</div>
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
  
  

  
</body>
</html>
