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
     	
		
		<!-- NProgress -->
     	<%-- <link href="<c:url value='/resources/nprogress/nprogress.css'> <c:param name='jsversion' value='1111'/>   </c:url>" rel="stylesheet"> --%>
     
     	<link  href="<c:url value='/resources/css/chart_style.css'> <c:param name='jsversion' value='66fgf67733'/>   </c:url>" rel="stylesheet">
		<link id="theme_" href="<c:url value='/resources/css/chart_light.css'> <c:param name='jsversion' value='33'/>   </c:url>" rel="stylesheet" disabled>
		
		
		<link id="dark_" href="<c:url value='/resources/css/dark-unica-dash.css'> <c:param name='jsversion' value='55'/>   </c:url>" rel="stylesheet">
  		
  		
  		 <script  src="<c:url value='/resources/js/jquery-3.6.0.js'> <c:param name='jsversion' value='1111'/>   </c:url>"></script>	
  		 
  		 <!-- <script src="/resources/assets/bower_components/datatables.net/js/jquery.dataTables.min.js?jsversion=3.1.3"></script> -->
  		 <script src="https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/datatables.net/js/jquery.dataTables.min.js?jsversion=3.1.3"></script>
  		
  		<!-- <script src="/resources/assets/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js?jsversion=3.1.3"></script> -->
  		
  		<script src="https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js?jsversion=3.1.3"></script>
  		
  		<script id="darkjs_"  src="<c:url value='/resources/js/highcharts.js'> <c:param name='jsversion' value='27441'/>   </c:url>"
		></script>	 	
		
		<!-- <script src="https://code.highcharts.com/modules/accessibility.js"></script>
		 -->
		
		
		
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
		
		<link rel="stylesheet" type="text/css" href="https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/bootstrap-daterangepicker/daterangepicker.css?jsversion=4.1.0">
		
			<script   src="<c:url value='/resources/js/exporting.js'> <c:param name='jsversion' value='133'/>   </c:url>"
		></script>

		
		<script  src="<c:url value='/resources/js/jquery-ui.js'> <c:param name='jsversion' value='1111'/>   </c:url>"
		></script>	
		
	<script  src="<c:url value='/resources/js/highcharts-more.js'> <c:param name='jsversion' value='1444411'/>   </c:url>"
		></script>
		
		<script  src="<c:url value='/resources/js/bullet_graph.js'> <c:param name='jsversion' value='1111'/>   </c:url>"
		></script>
		
		<script  src="<c:url value='/resources/js/heatmap.js'> <c:param name='jsversion' value='1122'/>   </c:url>"
		></script>
		
		<script  src="<c:url value='/resources/js/funnel.js'> <c:param name='jsversion' value='1122'/>   </c:url>"
		></script>
		
			<script  src="<c:url value='/resources/js/marker-cluster.js'> <c:param name='jsversion' value='1111'/>   </c:url>"
		></script>
		
		
	
<!-- <script src="https://code.highcharts.com/modules/organization.js"></script> -->

				
			
				
		<script  src="<c:url value='/resources/js/wordcloud.js'> <c:param name='jsversion' value='1122'/>   </c:url>"
		></script>
		
		
		<link href="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/nprogress/nprogress.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>" rel="stylesheet">
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/nprogress/nprogress.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/notify.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>
	
	
	<link rel="stylesheet" type="text/css" href="https://demo.cafebot.ai:8443/cafe-bot/resources/css/bootstrap_datetimepicker.css?jsversion=1eerer1" />
	
	<script src="https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/moment/moment.js?jsversion=4.1.2"></script>
	
	<script type="text/javascript" src="https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/bootstrap-daterangepicker/daterangepicker.js?jsversion=4.1.2"></script>
	
</head>
<body>

	<div class="chart-header">
		<div class="container-fluid">
			<div class="row">
				<div class="col-4">
					
					<div class="logo">  
						<a class="logo-css" href="blendprojects">
							<img src="<c:url value="/resources/images/cafebot-logo.png"/>">
							<!-- <div class="logo-label-css">Caf&egrave;Bot</div> -->
						</a>
					</div>
					
					<%-- <img style="width:36px" src="<c:url value="/resources/images/cafebot_icon.png"/>">  
						<div class="logo-label" style="color: #fff !important;">CaféBot</div> --%>
					</div>


				<div class="col-8 d-flex justify-content-end align-items-center">

					<p class="cb-chart-name-css mb-0" id="chartname"></p>
				<!-- 						 <div class="cb-content-div">
    
     <div class="slide-in from-left" id="removeshow">
  <div class="slide-in-content">
    
    <div class="cb-toggle-button" id="slidetoggle">
						<div class="form-inline">
							<div class="css-wtrf37">
								<input type="checkbox" id="switch-3" onclick="toggleTheme()" class="form-control" >
								<label for="switch-3"></label>
							</div>
						</div>
						
					</div> 
  
  </div>
</div>
</div>  -->
				</div>   
			</div>

		</div>
	</div>
	<div class="container-fluid">
	<div class="row">
	
	<div class="col-2">
			
			<div class="cb-project-width align-items-center text-overflow">
                                            <div class="me-3 project-icon-font-size cb-cursor" id = "openDataset" onclick="openDataset()" data-bs-toggle="tooltip" title="Data Source">
                                             <i class="fa fa-database" aria-hidden="true"></i>
                                            </div>
                                            <div class="d-flex flex-column"> 
                                                <span> 
                                                    <div class="project-num-size" id="datasetcountdiv">Dataset</div>
                                                </span>          
                                                <div class="d-flex"> 
                                                    <span class="cb-dataset-name dataset" id="dataobjectname" data-bs-toggle="Select Dataset"> Select Dataset </span>
                                                </div>        
                                            </div>
                                        </div>
				
					
			</div>
					
			<div class="col-2">
			
			<div class="cb-project-width align-items-center text-overflow">
                                            <div class="me-3 project-icon-font-size cb-cursor" id="menu-toggle" data-bs-toggle="tooltip" title="Chart">
                                            <i class="fa fa-bar-chart" aria-hidden="true" ></i>
                                            </div>
                                            <div class="d-flex flex-column"> 
                                                <span> 
                                                    <div class="project-num-size" id="datasetcountdiv">Chart Type</div>
                                                </span>          
                                                <div class="d-flex"> 
                                                    <span class="cb-dataset-name dataset" id="charttype" data-bs-toggle="Select Chart Type" > Select Chart Type </span>
                                                </div>        
                                            </div>
                                        </div>
				
					
			</div>
					
								<div class="col text-end">
							
				
				

				<input type="hidden"  value="0"   name="chart_id" id="chart_id"  />
				
				<input type="hidden"  value="0"   name="dash_id" id="dash_id"  />
				<input type="hidden"  value="0"   name="tab_id" id="tab_id"  />
				
				<span style='text-align: -webkit-right;display: none; '  ><a href='Javascript:void(0);'  class='xicon delete' title='Remove'>X</a></span>
				
				
				 <button class="me-2 cb-primary"  onclick="save_as_svg()" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Download">Download SVG</i></button>
				
				
				<button class="me-2 cb-primary"  onclick="runButton()" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Re-Load"><i class="fa fa-refresh" aria-hidden="true"></i></button>
				<button class="me-2 cb-primary"  onclick="openModal()" data-bs-toggle="tooltip" title="Save Chart" data-bs-placement="bottom"><i class="fa fa-floppy-o" aria-hidden="true"></i></button>		
				<button class="me-2 cb-primary"  onclick="opennewChartwindow()"  data-bs-toggle="tooltip" title="Add Chart" data-bs-placement="bottom"><i class="fa fa-plus" aria-hidden="true"></i></button>
				<button class=" cb-primary"  onclick="gotohome()" data-bs-toggle="tooltip" title="Home" data-bs-placement="bottom"><i class="fa fa-home" aria-hidden="true"></i></button>
</div>
	
			
		<!-- 	<div class="col text-end">
			<span class="cb-cursor cb-button-size" id = "openDataset" onclick="openDataset()" class="btn btn-primary" data-bs-toggle="tooltip" title="Data Source"><i class="fa fa-database" aria-hidden="true"></i>
				</span>&nbsp;&nbsp; 
				<span id="menu-toggle" data-bs-toggle="tooltip" title="Chart"><i class="fa fa-bar-chart" aria-hidden="true"></i></span>&nbsp;&nbsp; 

				<input type="hidden"  value="0"   name="chart_id" id="chart_id"  />
				
				<input type="hidden"  value="0"   name="dash_id" id="dash_id"  />
				<input type="hidden"  value="0"   name="tab_id" id="tab_id"  />
				
				<span style='text-align: -webkit-right;display: none; '  ><a href='Javascript:void(0);'  class='xicon delete' title='Remove'>X</a></span>
				<span class="cb-cursor cb-button-size"  onclick="openModal()" class="btn btn-primary" data-bs-toggle="tooltip" title="Save Chart"><i class="fa fa-floppy-o" aria-hidden="true"></i></span>&nbsp;&nbsp; 				
				<span class="cb-cursor cb-button-size"  onclick="opennewChartwindow()" class="btn btn-primary" data-bs-toggle="tooltip" title="Add Chart"><i class="fa fa-plus" aria-hidden="true"></i></span>&nbsp;&nbsp; 
				<span class="cb-cursor cb-button-size"  onclick="gotohome()" class="btn btn-primary" 
				data-bs-toggle="tooltip" title="Home"><i class="fa fa-home" aria-hidden="true"></i></span>&nbsp;&nbsp; 
			</div> -->
	
	
	
	
	
			
	 
	
	
	</div>
		<div class="row">
			<div class="col-2">



				<!-- <img style="height:35px" src="<c:url value="/resources/images/cafebot_logo_new.png"/>" /> -->

				
				   
				
				<!-- <h5 class="text-uppercase">Chart Name</h5>
				<div class="mb-2">
					<input id="chartNametxt" name="chartNametxt" class="form-control" value="" placeholder="chart name" />
				</div>	 -->
				
				
				<!-- <h5 class="text-uppercase">Select table</h5>
				<div class="mb-2">
					<select id="tablelistData" class="form-control" onchange="setFieldList();"></select>
				</div>	 -->
				
				<!-- <h5 class="text-uppercase">Select Dashboard</h5>
				<div class="mb-2">
					<select id="dashboardlistData" class="form-control" onchange="setTabList();"></select>
				</div>
				
				
				<h5 class="text-uppercase">Select Tab</h5>
				<div class="mb-2">
					<select id="tablistData" class="form-control" ></select>
				</div> -->
				
			<!-- 	<div class="cb-button-layout">
					<input type="button" class="cb-primary" id="btnGetFields" value="Get Fields">
					 <input type="button" class="cb-primary" id="btnSave" value="Save"> 
				</div> -->
				<div id="column-cards"></div>
			</div>
			<div class="col-sm-2">
				<div class="row">
					<div class="col-sm-12" style="background-color:;">
						<div id="wrapper" class="toggled">
							<div id="sidebar-wrapper">


								<div id="selectChartdiv" class="" style="position: relative;width:100%">
									<div class="cb-select-chart">
									<!-- <div class="cb-close-tab serach-chart">
											<div>
              		
              			
              			<div>
              				<div class="cb-input-css">
              					<input id="searchchartname" name="searchchartname" class="form-control me-2" value="" placeholder="Search chart name...">
              				</div>
              			</div>
              		
              	</div>
											<div class=" cb-cursor" onclick="closetab()">
													<i class="fa fa-times" aria-hidden="true"></i>
													</div>
													</div> -->
										<div class="cb-flex-display" id="searchchartnamediv">
											<nav id="navigation">
												<ul class="nav cb-nav-block" role="tablist" id="select_nav">  
													<li class="nav-item  cb-chart-tab " onclick="barchartSelect()">
														<a class="nav-link cb-inner-icon" data-toggle="tab" href="#"><div class="cb-chart-selection"><i class="fa fa-caret-down" aria-hidden="true"></i><img src="<c:url value="/resources/chart_icon/bar_chart.png"/>"></div></a>
													</li> 
													<li class="nav-item  cb-chart-tab cb-border-right-none" id="add_border" >
														<a class="nav-link active" data-toggle="tab" href="#tab_chartcard1"><div class="cb-chart-selection"><img  src="<c:url value="/resources/chart_icon/bar_chart.png"/>"></div></a>
													</li>  
													<li class="nav-item  cb-chart-tab" id="add_border1">
														<a class="nav-link " data-toggle="tab" href="#tab_chartcard2"><div class="cb-chart-selection"><img  src="<c:url value="/resources/chart_icon/treemap.png"/>"></div></a>
													</li>
													<li class="nav-item  cb-chart-tab" id="add_border2">
														<a class="nav-link " data-toggle="tab" href="#tab_chartcard3"><div class="cb-chart-selection"><img  src="<c:url value="/resources/chart_icon/scatter_line.png"/>"></div></a>
													</li>
													<li class="nav-item  cb-chart-tab" id="add_border3">
														<a class="nav-link " data-toggle="tab" href="#tab_chartcard4"><div class="cb-chart-selection"><img src="<c:url value="/resources/chart_icon/globe.png"/>"></div></a>
													</li>
													<li class="nav-item  cb-chart-tab" id="add_border4">
														<a class="nav-link " data-toggle="tab" href="#tab_chartcard5"><div class="cb-chart-selection"><img src="<c:url value="/resources/chart_icon/more_chart.png"/>"></div></a>
													</li>
												</ul>
											</nav>   
											<div class="tab-content cb-tab-chart-content">
											<div class="cb-close-tab cb-cursor" onclick="closetab()">
													<i class="fa fa-times" aria-hidden="true"></i></div>
												<div class="tab-pane active" id="tab_chartcard1">
													<div class="cb-tab-title cb-margin-bottom">Basic</div>
													<div class="row">
														<div class="col-6">
															<div class="cb-bar-heading cb-margin-bottom">Bar</div>
															<div class="cb-chart-list-div">
																<div class="cb-chart-list" id="chartcard1" >
																	<img src="<c:url value="/resources/chart_icon/bar_chart.png"/>" >
																	<div class="cb-chart-content-des">
																		Histogram
																	</div>
																</div>
																<div class="cb-chart-list" id="chartcard2">
																	<img src="<c:url value="/resources/chart_icon/bargraph.png"/>" >
																	<div class="cb-chart-content-des">
																		Bars
																	</div>
																</div>
																<div class="cb-chart-list" id="chartcard3">
																	<img src="<c:url value="/resources/chart_icon/stacked.png"/>" >
																	<div class="cb-chart-content-des">
																		Stacked
																	</div>
																</div>
															    <div class="cb-chart-list" id="chartcard10" >
																	<img src="<c:url value="/resources/chart_icon/bar_100-.png"/>" >
																	<div class="cb-chart-content-des">
																		Bars 100%
																	</div>
																</div> 
																
																<div class="cb-chart-list" id="chartcard11">
																	<img src="<c:url value="/resources/chart_icon/stacked_100-.png"/>" >
																	<div class="cb-chart-content-des">
																		Stacked 100%
																	</div>
																</div> 
															 	<div class="cb-chart-list" id="chartcard20">
																	<img src="<c:url value="/resources/chart_icon/column_pyramid.png"/>">
																	<div class="cb-chart-content-des">
																		Column Pyramids
																	</div>
																</div>
																
																
															</div>
														</div>
														<div class="col-6">
															<div class="cb-bar-heading cb-margin-bottom">Line & Curves</div>
															<div class="cb-chart-list-div">
																<div class="cb-chart-list" id="chartcard5">
																	<img src="<c:url value="/resources/chart_icon/line_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Lines
																	</div>
																</div>
																<div class="cb-chart-list" id="chartcard4">
																	<img  src="<c:url value="/resources/chart_icon/area_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Stacked Area
																	</div>
																</div>
																
																<div class="cb-chart-list" id="chartcard7">
																	<img src="<c:url value="/resources/chart_icon/stackedarea_100-.png"/>">
																	<div class="cb-chart-content-des">
																		Stacked Area 100%
																	</div>
																</div>
																
															</div>
														</div>
														<div class="col-6">
															<div class="cb-bar-heading cb-margin-bottom">Pie & Donuts</div>
															<div class="cb-chart-list-div">
																<div class="cb-chart-list" id="chartcard8">
																	<img src="<c:url value="/resources/chart_icon/pie_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Pie
																	</div>
																</div>
																<div class="cb-chart-list" id="chartcard9">
																	<img  src="<c:url value="/resources/chart_icon/donout.png"/>">
																	<div class="cb-chart-content-des">
																		Donut
																	</div>
																</div>
															</div>
														</div>
														<div class="col-6">
															<div class="cb-bar-heading cb-margin-bottom">2D Chart</div>
															<div class="cb-chart-list-div">
																 <div class="cb-chart-list" id="chartcard22">
																	<img src="<c:url value="/resources/chart_icon/word_cloud.png"/>" >
																	<div class="cb-chart-content-des">
																		Word Cloud
																	</div>
																</div>
																
															</div>
														</div>

													</div>
												</div>

												<div class="tab-pane" id="tab_chartcard2">
													<div class="cb-tab-title cb-margin-bottom">Tables</div>
													<div class="row">
														<div class="col-6" >
															
														<%-- 	<div class="cb-chart-list-div">
																<div class="cb-chart-list" id="chartcard12">
																	<img src="<c:url value="/resources/chart_icon/pivot_table.png"/>">
																	<div class="cb-chart-content-des">
																		Pivot Table
																	</div>
																</div>
																<div class="cb-chart-list" id="chartcard13">
																	<img src="<c:url value="/resources/chart_icon/rectangle.png"/>">
																	<div class="cb-chart-content-des">
																		Colored
																	</div>
																</div>
															</div> --%>
															 <div class="cb-chart-list-div">
																<div class="cb-chart-list" id="chartcard16">
																	<img src="<c:url value="/resources/chart_icon/single_value_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Single Value Chart
																	</div>
																</div>
																<div class="cb-chart-list" id="chartcard17">
																	<img src="<c:url value="/resources/chart_icon/table_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Table Chart
																	</div>
																</div>
															</div> 
														</div>
														
													</div>
													
														
												</div>

												<div class="tab-pane" id="tab_chartcard3">
													<div class="cb-tab-title cb-margin-bottom">Scatters</div>
													<div class="row">
														<div class="col-6">
															<div class="cb-bar-heading cb-margin-bottom">Basic</div>
															<div class="cb-chart-list-div">
																<div class="cb-chart-list" id="chartcard14">
																	<img src="<c:url value="/resources/chart_icon/scatter_plot.png"/>">
																	<div class="cb-chart-content-des">
																		Scatter Plot
																	</div>
																</div>
																
															
															<div class="cb-chart-list" id="chartcard15">
																	<img src="<c:url value="/resources/chart_icon/bubble.png"/>">
																	<div class="cb-chart-content-des">
																		Bubble
																		
																	</div>
																</div>
																<div class="cb-chart-list" id="chartcard18">
																	<img src="<c:url value="/resources/chart_icon/bullet_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Bullet Graph
																		
																	</div>
																</div>
																<div class="cb-chart-list" id="chartcard19">
																	<img src="<c:url value="/resources/chart_icon/heat_map.png"/>">
																	<div class="cb-chart-content-des">
																		Heat Map
																		
																	</div>
																</div>
																</div>
														</div>
														
														<div class="col-6">
															<div class="cb-bar-heading cb-margin-bottom">Grouped</div>
															<div class="cb-chart-list-div">
																<div class="cb-chart-list" id="chartcard23">
																	<img src="<c:url value="/resources/chart_icon/marker_cluster.png"/>">
																	<div class="cb-chart-content-des">
																		Marker-Clusters
																		
																	</div>
																</div>
																
															</div>
														</div>
													</div>
												</div>
												<div class="tab-pane" id="tab_chartcard4">
													<div class="cb-tab-title cb-margin-bottom">Maps</div>
													<div class="row">
														<div class="col-6">
															<div class="cb-bar-heading cb-margin-bottom">Scatter</div>
															<div class="cb-chart-list-div">
															
																<div class="cb-chart-list cursor_notallowed">
																	<img src="<c:url value="/resources/chart_icon/bar_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Scatter Map
																	</div>
																</div>
																
															
															
																<div class="cb-chart-list cursor_notallowed">
																	<img src="<c:url value="/resources/chart_icon/bar_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Density Map
																	</div>
																</div>
																
														
															
																<div class="cb-chart-list cursor_notallowed">
																	<img src="<c:url value="/resources/chart_icon/bar_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Geometry Map
																	</div>
																</div>
																
														
															</div>
														</div>
														<div class="col-6">
															<div class="cb-bar-heading cb-margin-bottom">Administrative Map</div>
															<div class="cb-chart-list-div">
																<div class="cb-chart-list cursor_notallowed">
																	<img src="<c:url value="/resources/chart_icon/bubble_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Bubbles
																		
																	</div>
																</div>
																<div class="cb-chart-list cursor_notallowed">
																	<img src="<c:url value="/resources/chart_icon/bar_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Filled
																		
																	</div>
																</div>
																<div class="cb-chart-list cursor_notallowed">
																	<img src="<c:url value="/resources/chart_icon/bar_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Hexagon
																		
																	</div>
																</div>
															</div>
														</div>
														<div class="col-6">
															<div class="cb-bar-heading cb-margin-bottom">Binned</div>
															<div class="cb-chart-list-div">
																<div class="cb-chart-list cursor_notallowed">
																	<img src="<c:url value="/resources/chart_icon/bubble_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Grid Map
																	</div>
																</div>
																
															</div>
														</div>
													</div>
												</div>
												<div class="tab-pane" id="tab_chartcard5">
													<div class="cb-tab-title cb-margin-bottom">Other</div>
													<div class="row">
														<div class="col-6  d-none">
															
															<div class="cb-chart-list-div">
																<div class="cb-chart-list">
																	<img src="<c:url value="/resources/chart_icon/box_plot.png"/>">
																	<div class="cb-chart-content-des">
																		Box Plot
																	</div>
																</div>
																
																
																
																<div class="cb-chart-list">
																	<img src="<c:url value="/resources/chart_icon/bar_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Lift Chart
																	</div>
																</div>
																
																
																
																<div class="cb-chart-list">
																	<img src="<c:url value="/resources/chart_icon/bar_chart.png"/>">
																	<div class="cb-chart-content-des">
																		2D Distribution
																		
																	</div>
																</div>
																
															</div>
														</div>
														
													
													</div>
													<div class="row">
														<div class="col-6">
														<div class="cb-bar-heading cb-margin-bottom">Other built-in charts</div>
														<div class="cb-chart-list-div">
														<div class="cb-chart-list" id ="chartcard6">
																	<img src="<c:url value="/resources/chart_icon/gauge_icon.png"/>">
																	<div class="cb-chart-content-des">
																		Gauge Series
																	</div>
																</div>
															
																<div class="cb-chart-list" id="chartcard21">
																	<img src="<c:url value="/resources/chart_icon/funnel_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Funnel 2D Chart
																	</div>
																</div>
																    
																</div>
														</div>
														</div>
												</div>
											</div>
											
											
											
											
											
										</div>

									</div>
								</div>
							</div>
							<!--  Sidebar 
							<div id="sidebar-wrapper">
								<div class="row">
									
								</div> -->



							</div>
							<!-- /#sidebar-wrapper -->
						<!--<button type="button" id="menu-toggle" class="btn btn-dark">
							<i class="fas fa-th-list pr-2" aria-hidden="true"></i>Select
							Charts
						</button>-->
						
						<%-- <div class="cb-button-chart-icon cb-chart-button" id="menu-toggle" >
							<div class="cb-chart-selection">
								<i class="fa fa-caret-down" aria-hidden="true"></i>
								<img src="<c:url value="/resources/chart_icon/bar_chart.png"/>">  
							</div>
						</div> --%>

					</div>
					<div class="col-sm-12">
					
					<div class="DataMapping_chart-dimension__2tNga user-select-none cb-select-div "
						data-types="number,time,text" style="margin-bottom:0">
						
						<div class="DataMapping_chart-dimension-header__3FrwJ">
						<!-- <span class="text-capitalize text-middle">Filters</span> -->
						<div class="os-tabs-controls">
                          <ul class="nav nav-tabs smaller">
                            <li class="nav-item">
                              <a class="nav-link active" data-toggle="tab" href="#filter_tab">Filter</a>
                            </li>
                            <li class="nav-item">
                              <a class="nav-link" data-toggle="tab" href="#setting_tab">Setting</a>
                            </li>
                          </ul>
                     
                        </div>
					</div>
					<div class="tab-content cb-active-pane">
						<div class="tab-pane active" id="filter_tab">
							<div class="dropzonefilter DataMapping_dropzone__2L06t cb-placehoder-div" id="accordion">
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Drop dimension here
							</div>
						</div>
						 <div class="tab-pane " id="setting_tab">
					  	<div id="displayvalue" class="settingfilter DataMapping_dropzone__2L06t" ></div>
					  </div>
					</div>
				</div>
			
		</div>
		</div>
	</div>
	
	<div class="col-sm-8">
		<div class="row">
			<div class="col-sm-12">
				<!-- <h5 class="text-uppercase">Chart Variables</h5> -->
				<div class="cb-button-layout">
					<input type="button" class="cb-primary" id="btnChart"  style="display: none;" 	value="Get Chart"> 
					<!-- <input type="button" class="cb-primary" id="btnSave" value="Save" onclick="openModal()"> -->
				</div>
				<!-- 						<input type="button" class="btn btn-default" id="btnDim" value="Dim"> -->

				<div id="variables" class="sticky-top row" 		style="top: calc(var(- -header-height)+ 16px);">
				
			<div class="col-xl-4 col-lg-4 col-6">
			<div style="overflow-y:auto;" class="DataMapping_chart-dimension__2tNga user-select-none" data-series="X-Axis" data-agg="true" data-types="number,time" data-multi="true">
			<div class="d-flex flex-row justify-content-between align-items-center DataMapping_chart-dimension-header__3FrwJ">
			<span class="text-left"><span># </span><span>T </span></span><span class="text-capitalize text-center">X-Axis</span>
			<span class="DataMapping_dimension-required__1FreW text-right" style="opacity: 1;">*</span>
			</div>
			<div class="dropzone X-Axis DataMapping_dropzone__2L06t ui-droppable"></div></div></div>
			<div class="col-xl-4 col-lg-4 col-6"><div class="DataMapping_chart-dimension__2tNga user-select-none" data-series="Y-Axis" data-agg="false" data-types="number,text,time" data-multi="false">
			<div class="d-flex flex-row justify-content-between align-items-center DataMapping_chart-dimension-header__3FrwJ">
			<span class="text-left"><span># </span><span>T </span><span>Multi </span></span>
			<span class="text-capitalize text-center">Y-Axis</span>
			<span class="DataMapping_dimension-required__1FreW text-right" style="opacity: 1;">*</span></div>
			<div class="dropzone Y-Axis DataMapping_dropzone__2L06t ui-droppable"></div></div></div>
			<div class="col-xl-4 col-lg-4 col-6"><div class="DataMapping_chart-dimension__2tNga user-select-none" data-series="Y-Axis" data-agg="false" data-types="number,text,time" data-multi="false">
			<div class="d-flex flex-row justify-content-between align-items-center DataMapping_chart-dimension-header__3FrwJ">
			<span class="text-left"><span># </span><span>Aa </span><span>T </span></span><span class="text-capitalize text-center">Y-Axis</span>
			<span class="DataMapping_dimension-required__1FreW text-right" style="opacity: 1;"></span>
			</div>
			<div class="dropzone Y-Axis DataMapping_dropzone__2L06t ui-droppable"></div>
			</div>
			</div>
				

			</div>
		</div>
		<div class="col-sm-12">
		
			<div id="container1" class="box-css">
			<div class="cb-graph-css d-flex p-3 highcharts-container justify-content-center" >
				<img src="<c:url value="/resources/images/line_graph.png"/>" style="width: 500px">
				
	
			</div>
			</div>

		 <div id="singlevaluediv" style="display:none;" class="box-css justify-content-center align-items-center flex-column singlevalue">
		 
            <h5 id="single_value_name">Single Value</h5>
            <div class="value-text"  id="singlevalue" >3</div>
          </div> 

  <div id="tablechartdiv_data"></div>
		 <div id="tablechartdiv"  class="box-css justify-content-start align-items-center flex-column singlevalue" style="display: none;">
            <h5 id="table_chart_name">Table Chart</h5>
            
            <!-- <table id="table_" class="table table-striped table-bordered"  style="font-size: 13px;width:100%;" >
									   
									</table> -->
            
             <table id="table_" class="table table-striped table-bordered"  style="font-size: 13px;width:100%;">
				  <thead><tr><th>test</th></tr></thead>
				 <tbody> 
				</tbody>   			
			</table> 	
			
			
			
			
          </div> 

		</div>
	</div>

</div>
</div>  
</div>

  <div class="popup-container description-poup " id="descriptiopoup"  style="display: none;">
          <div class="popup-header popup-sm-header">
            <div class="drawer-header">
              <div class="drawer-title-wrapper">
                <div class="drawer-title flex-grow-1">
                  Add/Update Chart
                </div>
                <div>
                  <a href="javaScript:void(0)" onclick="closeModal()">
                  <i class="fa fa-times" aria-hidden="true"></i>
                 </a>
               </div>
             </div>

           </div>



           <div class="drawer-body">
           <div class="pipeline-content">
           <div class="row">
          <div class="col-12"> 
              <div class="cb-range-form-div">
              <div class="cb-range-Label">
              <span class="label"><div class="cb-range-text">Chart Name <span class="ms-2" title="(If you want to add this chart to existing dashboard or tab, please select below)"><i class="fa fa-info-circle" aria-hidden="true"></i></span></div></span>
              <div>
              <div class="cb-input-css">
              <input id="chartNametxt" name="chartNametxt" class="form-control" value ="" placeholder="chart name"  onblur="discardChanges()"  autocomplete ="off"/>              
              </div>              
              </div>
              <!-- <p class="mt-2 cb-chart-text"><sup>*</sup>(If you want to add this chart to existing dashboard or tab, please select below)</p>  -->
              </div>
              </div>  
               
              </div>
         
            <div class="col-12"> 
            	<div class="cb-range-form-div">
              		<div class="cb-range-Label">
              			<span class="label"><div class="cb-range-text">Select Dashboard</div></span>
              			<div>
              				<div class="cb-input-css" id="selectdashboarddiv"  onblur="discardChanges">
              					<select class="form-control" id="dashboardlistData" onchange="onchangeDashboard()">
              					<option value="select">--Select--</option>
              					</select>             					
              				</div>              				
              			</div>
              			</div>
              	</div> 
           </div> 
           <div class="col-12"> 
            	<div class="cb-range-form-div">
              		<div class="cb-range-Label">
              			<span class="label"><div class="cb-range-text">Select Tab</div></span>
              			<div>
              				<div class="cb-input-css"  onblur="discardChanges">
              					<select class="form-control" id="tablistData" onchange="onchangetablistData()">
              					<option value="select">--Select--</option>
              					</select>             					
              				</div>              				
              			</div>
              			</div>
              	</div> 
           </div>
           </div>
         <!--   <div class="cb-border-right">           
            <div class="row">
             <div class="col-5">       
              <h5 class="padding-leftcss">Select Dashboard</h5>
              	      <div class="cb-range-form-div">
              		<div class="cb-range-Label width-8">              			
              			<div>
              				<div class="cb-input-css">
              					<input id="searchdashboarddata" name="searchdashboarddata" class="form-control" value="" placeholder="Search data...">
              				</div>
              			</div>
              		</div>
              	</div> 
                    <ul class="list-unstyled cb-dataset dashboardlist padding-leftcss" id="dashboardlistData">
                    </ul>  
           </div> 
            <div class="col">
           	<h5 class="padding-leftcss">Select Tab
           	<button class="cb-cancel float-end cb-bg-light" data-bs-toggle="tooltip" title="Reset" onclick="resetSelection()"><i class="fa fa-refresh" aria-hidden="true"></i></button> </h5>
           	<div class="cb-range-form-div">
              		<div class="cb-range-Label width-8">
              			
              			<div>
              				<div class="cb-input-css">
              					<input id="searchtableddata" name="searchtableddata" class="form-control" value="" placeholder="Search table data...">
              				</div>
              			</div>
              		</div>
              	</div> 
                    <ul class="list-unstyled cb-dataset tablist" id="tablistData">
                    </ul>
           </div> 
         </div>
         </div> -->
       </div>
     </div>
     <div class="drawer-footer">
     <button class="cb-primary me-2"  id="btnCancel"   onclick="closeModal()">Cancel</button>  
      <button class="cb-primary me-2"  id="discard_changes"  onclick ="resetSelection();" disabled>Discard Changes</button>  
           <button class="cb-primary saved"  id="btnSave"  name="btnSave"  >Save</button>    

           </div>

   </div>
 </div>
 
 <div class="popup-container description-poup " id="selectdimension" style="display:none;">
	<div class="popup-header" style="height: 100%;">
		<div class="drawer-header">
			<div class="drawer-title-wrapper">
				<div class="drawer-title flex-grow-1">
					Dataset
				</div>
				<div>
				<span class="cb-cursor me-2"  onclick="gotohome()" class="btn btn-primary" 
				data-bs-toggle="tooltip" title="Home"><i class="fa fa-home" aria-hidden="true"></i></span>
					<a href="javaScript:void(0)" onclick="closeDataset()">
						<i class="fa fa-times" aria-hidden="true"></i>
					</a>
				</div>
				
			</div>

		</div>
		<div class="drawer-body">
			<div class="pipeline-content">
				<div class="border-right"></div>
				<div class="row mb-2 align-item-center">
				
				<div class="col-2">
							<div class="cb-range-Label ">
								<span class="label"><div class="cb-range-text">User By</div></span>
							</div>
							<div class="cb-input-css"> 
							<select class="form-control" id="user_by">
							</select>
							</div>
							</div>
							<div class="col-2">
							<div class="cb-range-Label ">
								<span class="label"><div class="cb-range-text">Name</div></span>
							</div>
							<div class="cb-input-css"> 
							<input type="text" class="form-control" id="user_name" name="user_name" autocomplete ="off">						
							</div>
							</div>
							<div class="col-2 ">
							<div class="cb-range-Label ">
								<span class="label"><div class="cb-range-text">Project Id</div></span>
							</div>
							<div class="cb-input-css"> 
							<input type="number" class="form-control" id="project_id" name="project_id">	
						
							</div>
							</div>
							<div class="col-2">
							<div class="cb-range-Label ">
								<span class="label"><div class="cb-range-text">Date Range</div></span>
							</div>
							<div class="cb-input-css"> 
							<input type="text" class="form-control" id="date_range" name="date_range">
							</div>
							</div>
							<div class="col-2" >
							<div class="cb-range-Label ">
								<span class="label"><div class="cb-range-text"></div></span>
							</div>
							<button class="cb-primary mt-2" onclick="setdata_source()"><i class="fa fa-search" aria-hidden="true"></i></button>
							</div>
							
							
				</div>
				<div class="row">
					<div class="col margin-leftcss">Data Source</div>
					<div class="col margin-leftcss">Meta  Data <span id="totcount" style="float:right"> 
					</span></div>
					</div>
					<div class="row">
					<div class="col-6">
					<div class="cb-range-form-div mt-2 d-none" style="margin-left:10px">
					<div class="cb-range-Label width-8">
						
						<div>
							<div class="cb-input-css">
								<input  type="text" placeholder="search data object...." id="datasourcesearch" class="form-control">							
							</div>
						</div>
					</div>
				</div>
						<ul class="list-unstyled cb-dataset" id="tablelistDatas">
							<!-- <li>
								<div class="d-flex justify-content-start align-items-center">
									<div class="cb-range-form-div me-2">
									<div class="cb-range-Label">
										<div class="form-inline">
											<div class="cb-form">               
												<label class="css-12xei9w">
													<input  type="checkbox" id="chkDeploy" class="css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0">
													<span class="css-a2zrvp"></span>              
												</label>
											</div>
										</div> 
									</div>
								</div>
								<div class="me-2"><i class="fa fa-database" aria-hidden="true"></i></div>
								<div class="me-2">euro_dollar_exchange_rate_cleaned</div>

							</div>

							</li> -->

							

						</ul>
					</div>

					<div class="col-6" > 
					
					<div class="col"> 
					<ul class="list-unstyled cb-dataset" id="previewmetadata" style="margin-top:52px">
					</ul>
					</div>
					
					
					</div>
					
					
					
					
				</div>

			</div>
		</div>


	</div>
</div>
<input id="chartingtype" type="hidden">
<!-- <input type='hidden' class='form-control searchbasicfilter' placeholder='search data list....' id='searchbasicfilter'> -->
</div>

<script  src="<c:url value='/resources/js/chartjs.js'> <c:param name='jsversion' value='12345fv'/>   </c:url>"
				></script>
				
				<!-- <script>
				$('input[name="date_range"]').daterangepicker(
						{
						    locale: {
						      format: 'YYYY-MM-DD'
						    },
						    startDate: '2013-01-01',
						    endDate: '2013-12-31'
						}, 
						function(start, end, label) {
						    //alert("A new date range was chosen: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
						});
				</script> -->


</body>
</html>