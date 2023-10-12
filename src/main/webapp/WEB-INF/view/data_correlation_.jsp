<%@page import="org.springframework.http.HttpRequest"%>
<%@page import="org.springframework.ui.Model"%>
<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%--  <%@taglib prefix="kendo" uri="http://www.kendoui.com/jsp/tags"%>
<%@taglib prefix="demo" tagdir="/WEB-INF/tags"%>  --%>
<%@page import="java.util.HashMap"%>
<!DOCTYPE html>
<html>
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
  		
  		<script id="darkjs_"  src="<c:url value='/resources/js/highcharts.js'> <c:param name='jsversion' value='1111'/>   </c:url>"
		></script>	 	
		
		<script  src="<c:url value='/resources/js/wordcloud.js'> <c:param name='jsversion' value='1122'/>   </c:url>"
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
		
	<script  src="<c:url value='/resources/js/highcharts-more.js'> <c:param name='jsversion' value='1111'/>   </c:url>"
		></script>
		
		<script  src="<c:url value='/resources/js/marker-cluster.js'> <c:param name='jsversion' value='1111'/>   </c:url>"
		></script>
		
		
		<script  src="<c:url value='/resources/js/bullet_graph.js'> <c:param name='jsversion' value='1111'/>   </c:url>"
		></script>
		
		<script  src="<c:url value='/resources/js/heatmap.js'> <c:param name='jsversion' value='114422'/>   </c:url>"
		></script>
		
		<script  src="<c:url value='/resources/js/funnel.js'> <c:param name='jsversion' value='1122'/>   </c:url>"
		></script>	
		
		
		
		<link href="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/nprogress/nprogress.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>" rel="stylesheet">
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/nprogress/nprogress.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/notify.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
	
	
	
		<script  src="<c:url value='/resources/js/data_correlations_.js'> <c:param name='jsversion' value='11551'/>   </c:url>"
				></script>	
</head>
<body>

            <div id="container" class="box-css">
			
			</div>
			
		
			
			
			
		
</body>
</html>




