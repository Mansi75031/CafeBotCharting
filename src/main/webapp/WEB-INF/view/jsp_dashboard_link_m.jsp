
<%String leftAds = request.getParameter("articleId");%>

<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>


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

<script src="<c:url value='/resources/js/dashboard_js/jquery-3.6.0.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
	
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
  
	
<script src="<c:url value='/resources/js/dashboard_js/highcharts.js'> <c:param name='jsversion' value='io333eeeeef'/>   </c:url>"></script>
<script src="<c:url value='/resources/js/dashboard_js/exporting.js'> <c:param name='jsversion' value='io333eeeeef'/>   </c:url>"></script>


<script id = "charttheme_js" src=""></script>

<script src="<c:url value='/resources/js/dashboard_js/jquery-ui.js'> <c:param name='jsversion' value='io333eeeeef'/>   </c:url>"></script>

 
 <script src="<c:url value='/resources/plugins/gridstack/dist/events.js'> <c:param name='jsversion' value='io333eeeeef'/>   </c:url>"></script>
 
 		
		
		
<script src="<c:url value='/resources/js/custom_jquery/jszip.min.js'/>"></script>		
<script src="<c:url value='/resources/js/custom_jquery/dataTables.buttons.min.js'/>"></script>		
<script src="<c:url value='/resources/js/custom_jquery/buttons.flash.min.js'/>"></script>		
<script src="<c:url value='/resources/js/custom_jquery/pdfmake.min.js'/>"></script>		
<script src="<c:url value='/resources/js/custom_jquery/vfs_fonts.js'/>"></script>
<script src="<c:url value='/resources/js/custom_jquery/buttons.html5.min.js'/>"></script>
<script src="<c:url value='/resources/js/custom_jquery/buttons.print.min.js'/>"></script>	
 
 
 
 
 
 
 