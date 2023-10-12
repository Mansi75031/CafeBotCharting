
<%String leftAds = request.getParameter("articleId");%>

<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>


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

     <script src="<c:url value="/resources/plugins/gridstack/dist/gridstack-h5.js"/>"></script>

 <script src="<c:url value="/resources/plugins/gridstack/dist/es5/gridstack-jq.js"/>"></script>

<script  src="<c:url value='/resources/jsdash/jquery-3.6.0.js'> <c:param name='jsversion' value='1111'/>   </c:url>"></script>

<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/angular.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>



<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/kendo.all.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/kendo.timezones.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>

<link href="https://gitcdn.github.io/bootstrap-toggle/2.2.2/css/bootstrap-toggle.min.css" rel="stylesheet">
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
  <link rel="stylesheet" type="text/css"  href="https://demo.cafebot.ai:8443/cafe-bot/resources/css/cafebot_datatable_style.css?jsversion=3.1.3">
	
	 <link rel="stylesheet" href="<c:url value="/resources/plugins/gridstack/dist/demo.css"/>" />
	
	   <link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
 
  <link rel="stylesheet" id="theme" type="text/css" href="<c:url value="/resources/css/dashboard_light.css"/>" />
 
  <link id="theme_" href="<c:url value='/resources/css/dark-unica.css'> <c:param name='jsversion' value='555'/>   </c:url>" rel="stylesheet"> 
  
    
  <link href="https://cdn.datatables.net/1.10.9/css/jquery.dataTables.min.css" rel="stylesheet" />
  
  

	 
		<script   src="<c:url value='/resources/js/highcharts.js'> <c:param name='jsversion' value='11666'/>   </c:url>"
		></script>

<script   src="<c:url value='/resources/js/exporting.js'> <c:param name='jsversion' value='133'/>   </c:url>"
		></script>
 



<script  src="<c:url value='/resources/jsdash/jquery-ui.js'> <c:param name='jsversion' value='1111'/>   </c:url>"
		></script>
 
 
 <script  src="<c:url value='/resources/js/highcharts-more.js'> <c:param name='jsversion' value='13377'/>   </c:url>"
		></script>
		
		<script  src="<c:url value='/resources/js/bullet_graph.js'> <c:param name='jsversion' value='166'/>   </c:url>"
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
  