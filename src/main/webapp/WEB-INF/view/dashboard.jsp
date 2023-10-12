<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>CafeBot Dash</title>
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
		
		<!-- <script src="https://code.highcharts.com/modules/export-data.js"></script> -->
 
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
 
      <%--   <script  src="<c:url value='/resources/js/highcharts-3d.js'> <c:param name='jsversion' value='1122'/>   </c:url>"
		></script> --%>
		<script  src="<c:url value='/resources/js/cylinder.js'> <c:param name='jsversion' value='1122'/>   </c:url>"
		></script>
		<script  src="<c:url value='/resources/js/funnel.js'> <c:param name='jsversion' value='1122'/>   </c:url>"
		></script>
 
 <script  src="<c:url value='/resources/js/wordcloud.js'> <c:param name='jsversion' value='1122'/>   </c:url>"
		></script>	
 
 <script  src="<c:url value='/resources/plugins/gridstack/dist/events.js'> <c:param name='jsversion' value='1'/>   </c:url>"
		></script>
 

 
		<script src="https://cdn.datatables.net/1.10.9/js/jquery.dataTables.min.js"></script>
		
	<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/custom_jquery/jquery.dataTables.min.js'/>"></script>		
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/custom_jquery/jszip.min.js'/>"></script>		
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/custom_jquery/dataTables.buttons.min.js'/>"></script>		
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/custom_jquery/buttons.flash.min.js'/>"></script>		
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/custom_jquery/pdfmake.min.js'/>"></script>		
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/custom_jquery/vfs_fonts.js'/>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/custom_jquery/buttons.html5.min.js'/>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/custom_jquery/buttons.print.min.js'/>"></script>	
  
    <script   src="<c:url value='/resources/js/dashboardjs.js'> <c:param name='jsversion' value='12584'/>   </c:url>"
		></script>
  
  <style>
  #dialog label, #dialog input { display:block; }
  #dialog label { margin-top: 0.5em; }
  #dialog input, #dialog textarea { width: 95%; }
  /* #tabs { margin-top: 1em; } */
  #tabs li .ui-icon-close { float: left; margin: 0.4em 0.2em 0 0; cursor: pointer; }
  #add_tab { cursor: pointer; }

::-webkit-scrollbar {
    width: 4px;
    height: 4px;
}
  
  </style>
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
						<label class="mr-2" style="margin-bottom:0">Light theme</label><i class="os-icon os-icon-x theme-cross-icon" onclick="closetoggle()"></i>
					</div> 
  
  </div>
</div>
</div>
			</div>
		</div>
	</div>
  <div class="">  
   
   <!-- <input type="text" name="dashName" id="dashName"  value=""  placeholder="dashboard name" /> -->
   
 <div id="tabs" >

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
					
					<!-- <div class="" id ='Properties'></div> -->
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
