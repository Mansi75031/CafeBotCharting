<%@page import="org.springframework.http.HttpRequest"%>
<%@page import="org.springframework.ui.Model"%>
<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%--  <%@taglib prefix="kendo" uri="http://www.kendoui.com/jsp/tags"%>
<%@taglib prefix="demo" tagdir="/WEB-INF/tags"%>  --%>
<%@page import="java.util.HashMap"%>
<!doctype html>
	<html lang="en">
	<head>
		<!-- Required meta tags -->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>CafeBot Chart</title>
  		<link rel="shortcut icon" type="image/x-icon" href="${pageContext.request.contextPath}/resources/images/favicon.ico" />
  

 		
 
 <link  href="<c:url value='/resources/css/bootstrap.min.css'> <c:param name='jsversion' value='1111'/>   </c:url>" rel="stylesheet">

 <link href="<c:url value='/resources/css/font-awesome.css'> <c:param name='jsversion' value='1111'/>   </c:url>" rel="stylesheet">

	
		<link rel="stylesheet" type="text/css"    href="<c:url value="/resources/css/roboto_font.css"/> ">
		<link rel="stylesheet" type="text/css"    href="<c:url value="/resources/css/cafebot_font_style.css"/> ">
		<link rel="stylesheet" type="text/css"    href="<c:url value="/resources/css/cafebot_left_panel.css"/> ">
		<%-- <link href="<c:url value='/resources/cssdash/cafebot_datatable_style.css'> <c:param name='jsversion' value='224'/>   </c:url>" rel="stylesheet">
		 --%>
		 
		   <link rel="stylesheet" type="text/css" href="https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css?jsversion=2.1.7">
		<!-- <link rel="stylesheet" type="text/css" href="https://demo.cafebot.ai:8443/cafe-bot/resources/css/cafebot_datatable_style.css?jsversion=1hvvee">
      -->


     	
     	
	<script src="https://code.highcharts.com/highcharts.js"></script>
<script src="https://code.highcharts.com/modules/sankey.js"></script>
<script src="https://code.highcharts.com/modules/organization.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script> 
     	
     	
		
		<!-- NProgress -->
     	<%-- <link href="<c:url value='/resources/nprogress/nprogress.css'> <c:param name='jsversion' value='1111'/>   </c:url>" rel="stylesheet"> --%>
     
     	<link  href="<c:url value='/resources/css/chart_style.css'> <c:param name='jsversion' value='1111'/>   </c:url>" rel="stylesheet">
		<link id="theme_" href="<c:url value='/resources/css/chart_light.css'> <c:param name='jsversion' value='44366'/>   </c:url>" rel="stylesheet" disabled>
		
		
		<link id="dark_" href="<c:url value='/resources/css/dark-unica-dash.css'> <c:param name='jsversion' value='1111'/>   </c:url>" rel="stylesheet">
  		 <script  src="<c:url value='/resources/js/jquery-3.6.0.js'> <c:param name='jsversion' value='11111'/>   </c:url>"></script>	
  		 
  		 <!-- <script src="/resources/assets/bower_components/datatables.net/js/jquery.dataTables.min.js?jsversion=3.1.3"></script> -->
  		 <script src="https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/datatables.net/js/jquery.dataTables.min.js?jsversion=3.1.3"></script>
  		
  		<!-- <script src="/resources/assets/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js?jsversion=3.1.3"></script> -->
  		
  		<script src="https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js?jsversion=3.1.3"></script>
  		
  		
		></script>	
		<!--  <script id="darkjs_" src="https://code.highcharts.com/5/js/highcharts.js"></script>  -->
			
		<script  src="<c:url value='/resources/js/bootstrap.bundle.min.js'> <c:param name='jsversion' value='1111'/>   </c:url>"
				></script>
		
		
		
		<script src="<c:url value='/resources/js/util.js'> <c:param name='jsversion' value='222'/>   </c:url>"></script>
		<script src="<c:url value='/resources/js/tab.js'> <c:param name='jsversion' value='222'/>   </c:url>"></script>
		
		<%-- <script src="<c:url value='/resources/cssdash/jquery.dataTables.min.js'> <c:param name='jsversion' value='222'/>   </c:url>"></script> --%>

<!-- 		<script src="https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/datatables.net/js/jquery.dataTables.min.js?jsversion=2.1.7"></script>
        <script src="https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js?jsversion=2.1.7"></script>  -->
		
		
		<!-- <link href="https://cdn.datatables.net/1.13.1/css/jquery.dataTables.min.css" rel="stylesheet" /> -->
		<!-- <script src="https://cdn.datatables.net/1.13.1/js/jquery.dataTables.min.js"></script> -->
		
		<!-- <link rel="stylesheet" type="text/css"  href="/resources/css/cafebot_datatable_style.css?jsversion=3.1.3"> -->
		<link rel="stylesheet" type="text/css"  href="https://demo.cafebot.ai:8443/cafe-bot/resources/css/cafebot_datatable_style.css?jsversion=3.1.3">
		<script  src="<c:url value='/resources/js/jquery-ui.js'> <c:param name='jsversion' value='1111'/>   </c:url>"
		></script>	
		
	
		
		<link href="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/nprogress/nprogress.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>" rel="stylesheet">
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/nprogress/nprogress.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/notify.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
	
<style>
.highcharts-figure,
.highcharts-data-table table {
  min-width: 360px;
  max-width: 800px;
  margin: 1em auto;
}

.highcharts-data-table table {
  font-family: Verdana, sans-serif;
  border-collapse: collapse;
  border: 1px solid #ebebeb;
  margin: 10px auto;
  text-align: center;
  width: 100%;
  max-width: 500px;
}

.highcharts-data-table caption {
  padding: 1em 0;
  font-size: 1.2em;
  color: #555;
}

.highcharts-data-table th {
  font-weight: 600;
  padding: 0.5em;
}

.highcharts-data-table td,
.highcharts-data-table th,
.highcharts-data-table caption {
  padding: 0.5em;
}

.highcharts-data-table thead tr,
.highcharts-data-table tr:nth-child(even) {
  background: #f8f8f8;
}

.highcharts-data-table tr:hover {
  background: #f1f7ff;
}

#container h4 {
  text-transform: none;
  font-size: 14px;
  font-weight: normal;
}

#container p {
  font-size: 13px;
  line-height: 16px;
}

@media screen and (max-width: 600px) {
  #container h4 {
    font-size: 2.3vw;
    line-height: 3vw;
  }

  #container p {
    font-size: 2.3vw;
    line-height: 3vw;
  }
  #container1 {
    min-height: 750px;
    overflow: scroll !important;
}
}
</style>	
	
		
</head>
<body>

	 <button class="me-2 cb-primary"  id="button" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Download">Download SVG</i></button>
			

<div id="container1" class="box-css">
			<div class="cb-graph-css d-flex p-3 highcharts-container justify-content-center" >
				<img src="<c:url value="/resources/images/line_graph.png"/>" style="width: 500px">
				
	
			</div>
			</div>
			
			



<script>
	
	
	 var chart = Highcharts.chart('container1', {
		  chart: {
		    height: 700,
		    inverted: true
		    
		  },

		  title: {
		    text: 'Highcharts Org Chart'
		  },

		  accessibility: {
		    point: {
		      descriptionFormatter: function (point) {
		        var nodeName = point.toNode.name,
		          nodeId = point.toNode.id,
		          nodeDesc = nodeName === nodeId ? nodeName : nodeName + ', ' + nodeId,
		          parentDesc = point.fromNode.id;
		        return point.index + '. ' + nodeDesc + ', reports to ' + parentDesc + '.';
		      } 
		    }
		  },

		  series: [{
		    type: 'organization',
		    name: 'Highsoft',
		    keys: ['from', 'to'],
		    data: [
		      ['Shareholders', 'Board'],
		      ['Board', 'CEO'],
		      ['CEO', 'CTO'],
		      ['CEO', 'CPO'],
		      ['CEO', 'CSO'],
		      ['CEO', 'HR'],
		      ['CTO', 'Product'],
		      ['CTO', 'Web'],
		      ['CSO', 'Sales'],
		      ['HR', 'Market'],
		      ['CSO', 'Market'],
		      ['HR', 'Market'],
		      ['CTO', 'Market']
		    ],
		    levels: [{
		      level: 0,
		      color: 'silver',
		      dataLabels: {
		        color: 'black'
		      },
		      height: 25
		    }, {
		      level: 1,
		      color: 'silver',
		      dataLabels: {
		        color: 'black'
		      },
		      height: 25
		    }, {
		      level: 2,
		      color: '#980104'
		    }, {
		      level: 4,
		      color: '#359154'
		    }],
		      nodes: [{
		      id: 'Shareholders'
		    }, {
		      id: 'Board'
		    }, {
		      id: 'CEO',
		      title: 'CEO',
		      name: 'Atle Sivertsen',
		      image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2022/06/30081411/portrett-sorthvitt.jpg'
		    }, {
		      id: 'HR',
		      title: 'CFO',
		      name: 'Anne Jorunn Fjærestad',
		      color: '#007ad0',
		      image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131210/Highsoft_04045_.jpg'
		    }, {
		      id: 'CTO',
		      title: 'CTO',
		      name: 'Christer Vasseng',
		      image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131120/Highsoft_04074_.jpg'
		    }, {
		      id: 'CPO',
		      title: 'CPO',
		      name: 'Torstein Hønsi',
		      image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg'
		    }, {
		      id: 'CSO',
		      title: 'CSO',
		      name: 'Anita Nesse',
		      image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131156/Highsoft_03834_.jpg'
		    }, {
		      id: 'Product',
		      name: 'Product developers'
		    }, {
		      id: 'Web',
		      name: 'Web devs, sys admin'
		    }, {
		      id: 'Sales',
		      name: 'Sales team'
		    }, {
		      id: 'Market',
		      name: 'Marketing team',
		      column: 5
		    }], 
			
		    colorByPoint: false,
		    color: '#007ad0',
		    dataLabels: {
		    	 enabled: true,
		      color: 'white'
		    }, 
		    borderColor: 'white',
		    nodeWidth: 65
		  }],
		  tooltip: {
			   formatter: function() {
			        return 'The value for <b>' + this.series.organization.node.title + '</b>  <b>' + this.series.node.title + '</b>, '+ this.series.name;
			    }, 
		    outside: true
		  },
		  exporting: {
		    allowHTML: true,
		    sourceWidth: 800,
		    sourceHeight: 600
		  }
		});
	
	
	
	
	/* var chart = Highcharts.chart(chart1); 
	
	
	document.getElementById('button').addEventListener('click', () => {
		  var svg = chart.getSVG();
		  document.body.innerHTML = svg + '</br>' + 'SVG IMAGE';
		});  
	
	
	
	
	
	
	
	
	
	
	
	
	 //var chart = $('#container1').Highcharts();
	  //  Highcharts.chart.redraw();
	  var  svg = chart.getSVG()
	        .replace(/</g, '\n&lt;') // make it slightly more readable
	        .replace(/>/g, '&gt;');

	document.body.innerHTML = '<pre>' + svg + '</pre>';
	console.log("svg   "+svg); 
	
	Highcharts.chart('container1', {
		
		//chart.redraw();
	   var svg = chart.getSVG()
	        .replace(/</g, '\n&lt;') // make it slightly more readable
	        .replace(/>/g, '&gt;');

	document.body.innerHTML = '<pre>' + svg + '</pre>';
	console.log("svg   "+svg);
		
		
	});
	
	
	
	
	function save_as_svg()
	{
		
		var svg = $('#container1').highcharts().getSVG();
		console.log("    svg      @@@@@@@@@@@@   "+svg);
	}
	
	
	
 function save_as_svg(){

    debugger;
    
    
    var chart = $('#container1').Highcharts();
    chart.redraw();
    svg = chart.getSVG()
        .replace(/</g, '\n&lt;') // make it slightly more readable
        .replace(/>/g, '&gt;');

document.body.innerHTML = '<pre>' + svg + '</pre>';
console.log("svg   "+svg); */
    
    
    
    
    
    
    
    
    
    
    
    
    
    
/*     const element = $('.highcharts-container ').nextSibling().html();//  document.getElementById("container1").innerHTML;
   // $element.html();
    var element1= "";
    var element2= "";
    var element_final ="";
    console.log("element  ########"+element);
   
    var head = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';

    element_final =head +element;
    
    console.log("element_final  ########"+element_final);
    
    svgAPI(element_final.toString()); 
 
}

function svgAPI(element_final)
{
	
//	alert("svgAPI   #####");
	
	NProgress.start();
	$.ajax({method : "POST",			
		async:false,
		url : "./getSVG",
		data : {
			svg :element_final,
		},
		success : function(result) {
			NProgress.done(true);
			
			
				
	},
	error : function(data) {
		NProgress.done(true);
		console.log(data);
	}
});
	
	
}
*/


</script>


</body>
</html>