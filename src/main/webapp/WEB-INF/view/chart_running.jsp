<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>

<!doctype html>
	<html lang="en">
	<head>
		<!-- Required meta tags -->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>CafeBot Chart</title>

		<!-- Bootstrap CSS -->
		
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
		rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
		crossorigin="anonymous">

		<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
		<link rel="stylesheet" type="text/css"    href="<c:url value="/resources/css/roboto_font.css"/> ">
		<link rel="stylesheet" type="text/css"    href="<c:url value="/resources/css/cafebot_font_style.css"/> ">
		<link rel="stylesheet" type="text/css"    href="<c:url value="/resources/css/cafebot_left_panel.css"/> ">
		
		
		<script   src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
		crossorigin="anonymous"></script>
		
		
		
		<script src=https://code.highcharts.com/8.2.2/highcharts.js></script>
		<script src=https://code.highcharts.com/8.2.2/modules/exporting.js></script>

		<script src="https://code.jquery.com/jquery-3.6.0.js"
		integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
		crossorigin="anonymous"></script>
		<script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"
		integrity="sha256-6XMVI0zB8cRzfZjqKcD01PBsAy3FlDASrlC8SxCpInY="
		crossorigin="anonymous"></script>
		
		<script src="<c:url value='/resources/css/util.js'> <c:param name='jsversion' value='222'/>   </c:url>"></script>
		<script src="<c:url value='/resources/css/tab.js'> <c:param name='jsversion' value='222'/>   </c:url>"></script>
		
		
		
		<style>
			body{
				background: #0b0c0e;
				font-size: 14px;
				font-family: 'Roboto', sans-serif;
				overflow:hidden;
			}


			.column-card {
				z-index: 9999;
				cursor: move;
			}

/* .DataMapping_column-card__2VBWp {
	background-color: #4bc06a;
	height: 48px;
	color: var(- -gray-100);
	border-radius: 4px;
	margin-bottom: 8px;
	padding: 16px;
	display: flex;
	flex-direction: row;
	align-items: center;
	white-space: nowrap;
	cursor: grab;
	cursor: -webkit-grab;
	cursor: -moz-grab;
} */

.DataMapping_column-card__2VBWp {
	background-color: #141619;
	height: 35px;
	color: #d8d9da;
	border-radius: 4px;
	margin-bottom: 8px;
	padding: 16px;
	display: flex;
	flex-direction: row;
	align-items: center;
	white-space: nowrap;
	cursor: grab;
	cursor: -webkit-grab;
	cursor: -moz-grab;
}

.DataMapping_chart-dimension__2tNga {
	background-color: #202226;
	border: 1px solid rgba(204, 204, 220, 0.25);
	margin-bottom: 15px;
	padding: 8px;
	border-radius: 4px;
	height: -webkit-fit-content;
	height: -moz-fit-content;
	height: fit-content;
}

.DataMapping_dropzone__2L06t {
	border: 1px dashed #c2c1c1;
	color: #c2c1c1;
	height: 37px;
	/* 	display: flex; */
	align-items: center;
	justify-content: center;
	border-radius: 4px;
}

.DataMapping_remove-assigned__3VE_f {
	border: none;
	background: none;
	color: #fff;
	margin-left: 16px;
	padding: 0;
}

a.xicon.delete {
	color: #d8d9da;
	font-size: 11px;
	margin-left: 10px;
}



.column-card {
	z-index: 9999;
	cursor: move;
}

.column-card.DataMapping_column-card__2VBWp.ui-draggable.ui-draggable-handle.remove
{
	margin-bottom: 0px;
	width: -webkit-fill-available;
}

.datatype {
	margin-right: 5px;
}

/* scrollbar */
::-webkit-scrollbar {
	width: 5px;
	height: 5px;
}

::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	-webkit-border-radius: 10px;
	border-radius: 10px;
}

::-webkit-scrollbar-thumb {
	-webkit-border-radius: 10px;
	border-radius: 10px;
	background: rgba(255, 255, 255, 0.3);
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

::-webkit-scrollbar-thumb:window-inactive {
	background: rgba(255, 255, 255, 0.3);
}

#wrapper {
	padding-left: 0;
	-webkit-transition: all 0.5s ease;
	-moz-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	transition: all 0.5s ease;
}

#wrapper.toggled {
	padding-left: 250px;
}

#sidebar-wrapper {
	z-index: 10000;
	position: fixed;
	left: 700px;;
	width: 0;
	height: -webkit-fit-content;
	height: -moz-fit-content;
	height: fit-content;
	/*height: 100%;*/
	margin-left: -433px;
	/* margin-top: 70px;*/
	overflow-y: auto;
	background: #181b1f;
	-webkit-transition: all 0.5s ease;
	-moz-transition: all 0.5s ease;
	-o-transition: all 0.5s ease;
	transition: all 0.5s ease;
}

#wrapper.toggled #sidebar-wrapper {
	width: 250px;
}

#page-content-wrapper {
	width: 100%;
	position: absolute;
	padding: 15px;
}

#wrapper.toggled #page-content-wrapper {
	position: absolute;
	margin-right: -500px;
}
/* Sidebar Styles */
.sidebar-nav {
	position: absolute;
	top: 0;
	width: 500px;
	margin: 0;
	padding: 0;
	list-style: none;
}

.sidebar-nav li {
	text-indent: 20px;
	line-height: 40px;
}

.sidebar-nav li a {
	display: block;
	text-decoration: none;
	color: #999999;
}

.sidebar-nav li a:hover {
	text-decoration: none;
	color: #fff;
	background: rgba(255, 255, 255, 0.2);
}

.sidebar-nav li a:active, .sidebar-nav li a:focus {
	text-decoration: none;
}

.sidebar-nav>.sidebar-brand {
	height: 65px;
	font-size: 18px;
	line-height: 60px;
}

.sidebar-nav>.sidebar-brand a {
	color: #999999;
}

.sidebar-nav>.sidebar-brand a:hover {
	color: #fff;
	background: none;
}

.dropzonefilter {
	height:600px;
}
.dropzoneselect{
	display:block;
	padding:11px;
	min-height:400px;
/* justify-content:center;
align-items: center;
    flex-direction: column; */
}
#column-cards {
	border: 1px dashed #c2c1c1;
	color: #c2c1c1;
	height: 575px;
	/* display: flex; */
	align-items: center;
	justify-content: center;
	border-radius: 4px;
	overflow-y:auto;
}

@media ( min-width :768px) {
	#wrapper {
		padding-left: 100px;
	}
	#wrapper.toggled {
		padding-left: 0;
	}
	#sidebar-wrapper {
		max-width: 1200px;
		width: 100%;
	}
	#wrapper.toggled #sidebar-wrapper {
		width: 0;
	}
	#page-content-wrapper {
		padding: 20px;
		position: relative;
	}
	#wrapper.toggled #page-content-wrapper {
		position: relative;
		margin-right: 0;
	}
	#column-cards {
		
		height: 613px;
		
	}
	.dropzonefilter {
		height:505px;
	}
}
.chart-header{
	background: #181b1f;
	height: 50px;
	margin-bottom: 12px;
}
.chart-header >.container-fluid {
	padding: 6px 20px 0 20px;
}
#column-cards > .column-card {
	
	border: 1px solid rgba(204, 204, 220, 0.15);
	font-size: 13px; 
	
}
.dropzone > .column-card {
	font-size: 13px;
}

.cb-chart-button {
	background: #181b1f;
	width: 104px;
	/* height: 70px;*/
	opacity: 1;
	display: block;
	float: none;
	border: 1px solid rgba(204, 204, 220, 0.15);
	padding: 0.5rem 1rem;
}
.cb-chart-selection {
	position: relative;
	/*background: #0b0c0e;*/
	max-width: 70px;
}
.cb-chart-selection i {
	position: absolute;
	right: 0;
}

.cb-button-chart-icon {
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	margin-left: 0;
	margin-bottom: 8px;
	cursor: pointer;
}
.cb-chart-content-des span{
	display: flex;
	font-size: 11px;
	color: #9c9c9c;
}
.cb-chart-selection img {
	max-width: 70px;
}
.cb-flex-display{
	display: flex;
	flex-direction: row;
	box-shadow: none;
	border: 1px solid rgba(204, 204, 220, 0.15);
}
ul.cb-nav-block{
	flex-direction: column;
}
.cb-chart-tab{
	padding: 0;
	border-bottom: 1px solid rgba(204, 204, 220, 0.15);
	border-right: 1px solid rgba(204, 204, 220, 0.15);
	opacity: 1;
	display: block;
	float: none;
	/*width: 100%;*/
}
.cb-bar-heading{
	font-weight: 500;
	font-size: 16px;
	
	border-bottom: 1px solid rgba(204, 204, 220, 0.15);
	margin: 0;
}
.cb-margin-bottom{
	margin-bottom: 20px;
}
.cb-chart-list-div {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding-top: 20px;
	margin-bottom: 5px;
}
.cb-chart-list{

	width: 50%;
	white-space: nowrap;
	margin-bottom: 15px;
	padding-right: 10px;
	box-sizing: border-box;
	cursor: pointer;
}
.cb-chart-content-des{
	display: inline-block;
	margin-left: 10px;
	vertical-align: middle;
	width: 60%;
}
.cb-chart-list img{
	width: 70%;
}
.cb-chart-list img{
	max-width: 70px;
	display: inline-block;
	
	height: auto;
	border: 1px solid rgba(204, 204, 220, 0.15);
}
.cb-inner-icon i{
	font-size: 14px;
}
.cb-inner-icon{
	background:  rgb(24, 27, 31);
}
.cb-tab-chart-content{
	border: none;
	padding: 25px;
	padding-left: 40px;
	padding-bottom: 0px;
	overflow: auto;
	flex-shrink: 1;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	min-height: 500px;
	/* height: 100%;*/
	box-sizing: border-box;

	background: #181b1f;
}
.logo {
	width: 200px;
	display: inline-block;
}
.logo img {
	max-width: 30px;
	vertical-align: middle;
	margin-bottom: 5px;
}

.logo-label-css {
	color: #fff !important;
	vertical-align: middle;
	display: inline-block;
	color: #fff;
	letter-spacing: 2px;
	text-transform: uppercase;
	font-weight: 500;
	font-size: 14px;
	position: relative;
	margin-left: 10px;
}
.logo-label-css:after {
	height: 2px;
	position: absolute;
	width: 0%;
	left: 0px;
	bottom: -5px;
	background-color: #fff;
	content: "";
	-webkit-transition: all 0.2s ease;
	transition: all 0.2s ease;
}
.logo-css:hover .logo-label-css:after {
	width: 100%;
	background-color: #fff;
}
.cb-nav-block .active {
	background: #0b0c0e;
}
.cb-border-right-none{
	border-right: 0;
}
span.DataMapping_column-title__2yLXi, .text-ecllipsis {
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}
.cb-close-tab {
	display: flex;
	justify-content: flex-end;
	align-items: center;
}
  .popup-container {
    background: #141619a3;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1040;
    display: block;
    transition: 0.5s;
    display: flex;
    justify-content: center;
     /*align-items: center; */
     
    /*border: 1px solid rgba(204, 204, 220, 0.25);*/
    color: #d8d9da;
}
.popup-container a{ 
	color: #d8d9da;
}
.popup-container a: hover{ 
	color: #fff;
}

  .popup-header {
    position: absolute;
    /* min-height: 500px; */
    height: fit-content;
    width: 1048px;
    z-index: 1040;
    background: #191b1e;
}


.drawer-header, .drawer-footer {
    background: #202226;
}
.drawer-header, .drawer-footer {
    position: relative;
    padding: 30px;
    box-shadow: 0px 1px 4px rgb(0 0 0 / 10%), 0px 2px 8px rgb(0 0 0 / 10%), 0px 0px 4px rgb(0 0 0 / 6%);
    z-index: 2;
}
.drawer-footer{
	padding: 12px;
	display: flex;
	justify-content: flex-end;
}
.drawer-title-wrapper {
    display: flex;
    align-items: center;
}
.drawer-title {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
}
.drawer-title {
    text-transform: uppercase;
}

.drawer-body {
    flex: 1;
    padding: 0;
    overflow: hidden;
    position: relative;
    padding: 30px;
}

.cb-border-right{
	    border-right: 1px solid rgba(204, 204, 220, 0.15);
    padding-right: 0px
}
.cb-select-div .dropzonefilter .DataMapping_column-title__2yLXi {
    display: inline-flex;
    max-width: 160px;
}
.cb-dataset {
    max-height: 550px;
    overflow: auto;
}
ul.list-unstyled.cb-dataset li {
    border-bottom: 1px solid rgba(204, 204, 220, 0.25);
    margin-bottom: 8px;
    line-height: 28px;
    height: 35px;
}
.cb-cursor{
cursor:pointer;
}


</style>

</head>
<body>

	<div class="chart-header">
		<div class="container-fluid">
			<div class="row">
				<div class="col-4">
					
					<div class="logo">  
						<a class="logo-css" href="blendprojects">
							<img src="<c:url value="/resources/images/cafebot_icon.png"/>">
							<div class="logo-label-css">CafèBot</div>
						</a>
					</div>
					
					<%-- <img style="width:36px" src="<c:url value="/resources/images/cafebot_icon.png"/>">  
						<div class="logo-label" style="color: #fff !important;">CaféBot</div> --%>
					</div>
   

					<div class="col-4">

					<!-- <input type="text" /> -->
				
					<!-- <button type="button" id="menu-toggle" class="cb-cancel">
						<i class="fas fa-th-list pr-2" aria-hidden="true"></i>Select
						Charts
					</button> -->
				</div>
			</div>

		</div>
	</div>
	<div class="container-fluid">
		<div class="row">
			<div class="col-2">



				<!-- <img style="height:35px" src="<c:url value="/resources/images/cafebot_logo_new.png"/>" /> -->

				<div class=""><h5 class="text-uppercase">Dimensions &nbsp;&nbsp;<span class="cb-cursor" onclick="openDataset()"><i class="fa fa-database" aria-hidden="true"></i></span> </h5></div>
				   
				
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


								<div id="selectChartdiv" class="" style="position: relative;">
									<div class="cb-select-chart">
										<div class="cb-flex-display">
											<nav id="navigation">
												<ul class="nav cb-nav-block" role="tablist" id="select_nav">  
													<li class="nav-item  cb-chart-tab" onclick="barchartSelect()">
														<a class="nav-link cb-inner-icon" data-toggle="tab" href="#"><div class="cb-chart-selection"><i class="fa fa-caret-down" aria-hidden="true"></i><img src="<c:url value="/resources/chart_icon/bar_chart.png"/>"></div></a>
													</li> 
													<li class="nav-item  cb-chart-tab" id="add_border" >
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
														<a class="nav-link " data-toggle="tab" href="#tab_chartcard5"><div class="cb-chart-selection"><img src="<c:url value="/resources/chart_icon/box_plot.png"/>"></div></a>
													</li>
												</ul>
											</nav>   
											<div class="tab-content cb-tab-chart-content">
											<div class="cb-close-tab" onclick="closetab()">
													<i class="fa fa-times" aria-hidden="true"></i></div>
												<div class="tab-pane active" id="tab_chartcard1">
													<div class="cb-tab-title cb-margin-bottom">Basic</div>
													<div class="row">
														<div class="col-6">
															<div class="cb-bar-heading cb-margin-bottom">Bar</div>
															<div class="cb-chart-list-div">
																<div class="cb-chart-list" id="chartcard1">
																	<img src="<c:url value="/resources/chart_icon/bar_chart.png"/>" >
																	<div class="cb-chart-content-des">
																		Histogram
																	</div>
																</div>
																<div class="cb-chart-list" id="chartcard2">
																	<img src="<c:url value="/resources/chart_icon/bar_chart.png"/>" >
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
															<%-- 	<div class="cb-chart-list">
																	<img src="<c:url value="/resources/chart_icon/bar_chart.png"/>" >
																	<div class="cb-chart-content-des">
																		Bars 100%
																	</div>
																</div> --%>
																
																<%-- <div class="cb-chart-list">
																	<img src="<c:url value="/resources/chart_icon/stacked.png"/>" >
																	<div class="cb-chart-content-des">
																		Stacked 100%
																	</div>
																</div> --%>
																
																
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
																<div class="cb-chart-list">
																	<img src="<c:url value="/resources/chart_icon/bar_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Mix
																	</div>
																</div>
																<div class="cb-chart-list">
																	<img src="<c:url value="/resources/chart_icon/area_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Stacked Area 100%
																	</div>
																</div>
															</div>
														</div>
														<div class="col-6">
															<div class="cb-bar-heading cb-margin-bottom">Pie & Donuts</div>
															<div class="cb-chart-list-div">
																<div class="cb-chart-list">
																	<img src="<c:url value="/resources/chart_icon/pie_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Pie
																	</div>
																</div>
																<div class="cb-chart-list">
																	<img  src="<c:url value="/resources/chart_icon/donout.png"/>">
																	<div class="cb-chart-content-des">
																		Donut
																	</div>
																</div>
															</div>
														</div>

													</div>
												</div>

												<div class="tab-pane" id="tab_chartcard2">
													<div class="cb-tab-title cb-margin-bottom">Tables</div>
													<div class="row">
														<div class="col-6">
															
															<div class="cb-chart-list-div">
																<div class="cb-chart-list">
																	<img src="<c:url value="/resources/chart_icon/pivot_table.png"/>">
																	<div class="cb-chart-content-des">
																		Pivot Table
																	</div>
																</div>
																<div class="cb-chart-list">
																	<img src="<c:url value="/resources/chart_icon/rectangle.png"/>">
																	<div class="cb-chart-content-des">
																		Colored
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
																<div class="cb-chart-list">
																	<img src="<c:url value="/resources/chart_icon/scatter_plot.png"/>">
																	<div class="cb-chart-content-des">
																		Scatter Plot
																	</div>
																</div>
																
															</div>
														</div>
														<div class="col-6">
															<div class="cb-bar-heading cb-margin-bottom">Binned</div>
															<div class="cb-chart-list-div">
																<div class="cb-chart-list">
																	<img src="<c:url value="/resources/chart_icon/bubble.png"/>">
																	<div class="cb-chart-content-des">
																		Bubble
																		<span>2 statistics per round zone</span>
																	</div>
																</div>
																<div class="cb-chart-list">
																	<img src="<c:url value="/resources/chart_icon/rectangle.png"/>">
																	<div class="cb-chart-content-des">
																		Rectangle
																		<span>2 statistics per rectangle zone</span>
																	</div>
																</div>
																<div class="cb-chart-list">
																	<img src="<c:url value="/resources/chart_icon/bar_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Hexagon
																		<span>2 statistics per hexagonal zone</span>
																	</div>
																</div>
															</div>
														</div>
														<div class="col-6">
															<div class="cb-bar-heading cb-margin-bottom">Grouped</div>
															<div class="cb-chart-list-div">
																<div class="cb-chart-list">
																	<img src="<c:url value="/resources/chart_icon/bubble_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Grouped Bubbles
																		<span>4 statistics per group</span>
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
																<div class="cb-chart-list">
																	<img src="<c:url value="/resources/chart_icon/bar_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Scatter Map
																	</div>
																</div>
																
															</div>
															<div class="cb-chart-list-div">
																<div class="cb-chart-list">
																	<img src="<c:url value="/resources/chart_icon/bar_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Density Map
																	</div>
																</div>
																
															</div>
															<div class="cb-chart-list-div">
																<div class="cb-chart-list">
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
																<div class="cb-chart-list">
																	<img src="<c:url value="/resources/chart_icon/bubble_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Bubbles
																		
																	</div>
																</div>
																<div class="cb-chart-list">
																	<img src="<c:url value="/resources/chart_icon/bar_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Filled
																		
																	</div>
																</div>
																<div class="cb-chart-list">
																	<img src="<c:url value="/resources/chart_icon/bar_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Hexagon
																		<span>2 statistics per hexagonal zone</span>
																	</div>
																</div>
															</div>
														</div>
														<div class="col-6">
															<div class="cb-bar-heading cb-margin-bottom">Binned</div>
															<div class="cb-chart-list-div">
																<div class="cb-chart-list">
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
														<div class="col-6">
															<div class="cb-bar-heading cb-margin-bottom">Other built-in charts</div>
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
																		<span>Based on kernel density estimation</span>
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
						
						<div class="cb-button-chart-icon cb-chart-button" id="menu-toggle" >
							<div class="cb-chart-selection">
								<i class="fa fa-caret-down" aria-hidden="true"></i>
								<img src="<c:url value="/resources/chart_icon/bar_chart.png"/>">  
							</div>
						</div>

					</div>
					<div class="col-sm-12">
					
						<div class="DataMapping_chart-dimension__2tNga user-select-none cb-select-div "
						data-types="number,time,text"  style='overflow-y:auto;'>
						
						<div
						class="d-flex flex-row justify-content-between align-items-center DataMapping_chart-dimension-header__3FrwJ">
						<span class="text-capitalize text-middle">Filters</span>
					</div>
					<div class="dropzonefilter DataMapping_dropzone__2L06t cb-accordion-container" id="accordion">Drop
					dimension here</div>
				</div>
			
		</div>
		</div>
	</div>
	
	<div class="col-sm-8">
		<div class="row">
			<div class="col-sm-12">
				<h5 class="text-uppercase">Chart Variables</h5>
				<div class="cb-button-layout">
					<input type="button" class="cb-primary" id="btnChart" style="display: none;"
 					value="Get Chart"> 
					<input type="button" class="cb-primary" id="btnSave" value="ADD CHART" onclick="openModal()">
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
		
			<div id="container1"
			style="background: #202226;border: 1px solid rgba(204, 204, 220, 0.25);    display: flex;justify-content: center;align-items: center;border-radius: 4px;">
			<div class="cb-graph-css d-flex p-3" >
				<img src="<c:url value="/resources/images/line_graph.png"/>" style="width: 500px">
			</div>
			</div>

		</div>
	</div>

</div>
</div>  
</div>

 <div class="popup-container description-poup " id="descriptiopoup"  style="display: none;">
          <div class="popup-header">
            <div class="drawer-header">
              <div class="drawer-title-wrapper">
                <div class="drawer-title flex-grow-1">
                  Options & types
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
              <div class="col-5">       
              	<div class="cb-range-form-div">
              		<div class="cb-range-Label width-8">
              			<span class="label"><div class="cb-range-text">Chart Name</div></span>
              			<div>
              				<div class="cb-input-css">
              					<input id="chartNametxt" name="chartNametxt" class="form-control" value="" placeholder="chart name" />
              				</div>
              			</div>
              		</div>
              	</div>       
                
                  <div class="cb-border-right">
                    <h5>Select Dashboard</h5>
                    <ul class="list-unstyled" id="dashboardlistData">
                    </ul>
                 </div>
              
           </div>
           <div class="col">
           	<h5>Select Dashboard</h5>
                    <ul class="list-unstyled" id="tablistData">
                    </ul>
           </div>
         </div>
       </div>
     </div>
     <div class="drawer-footer">
     	<button class="cb-primary">Save</button>
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
					<a href="javaScript:void(0)" onclick="closeDataset()">
						<i class="fa fa-times" aria-hidden="true"></i>
					</a>
				</div>
				
			</div>

		</div>
		<div class="drawer-body">
			<div class="pipeline-content">
				<div class="border-right"></div>
				<div class="row">

					<div class="col-6">
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

					<div class="col-6">
						<ul class="list-unstyled cb-dataset">
							<li>
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

							</li>

							<li>
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

							</li>

							<li>
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

							</li>

						</ul>
					</div>
				</div>

			</div>
		</div>


	</div>
</div>
<input id="chartingtype" type="hidden">
</div>


<script>
	var chartType = [];
	var chartDims = [];
	var globalchartType ="";

	$(document).ready(function() {
		

		//$("#chartcard2").trigger("click");
		setTimeout(() => {
			  $("#chartingtype").val("chartcard2"); 
			getDim('chartcard2');	
		}, 300);
		
		

		$("input").blur(function(){
			  //alert("This input field has lost its focus.");
			  $("#btnChart").trigger("click");
			});
		    
		//$('input').on('blur',  function () 
		//		{
		//	 		 alert("This input field has lost its focus.");
		//	  		 $("#btnChart").trigger("click");
//
	//			});

		
		function getParameterByName(name) {
			var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
			return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
		}			
		console.log('id--' + getParameterByName('id'))

		
		
		
		//getTablelist();
		getDashboardlist();

		
		
		function table(lists) {
			$("#column-cards").empty();
			for (var i = 0; i < lists.length; i++) {
				var obj = lists[i];
					//console.log(obj.colname);
					var card = "<div class=\"column-card DataMapping_column-card__2VBWp\" draggable=\"true\" data-field=\"" + obj.colname + "\" data-types=\"" 
					+ obj.datatype + "\"> <span class=\"datatype\" >"
					+ obj.symbol
					+ "</span><span class=\"DataMapping_column-title__2yLXi\" data-bs-toggle=\"tooltip\" title=\""+ obj.colname +"\">"
					+ obj.colname + "</span></div>";
					$("#column-cards").append(card);
					 $("[data-toggle]").tooltip();
				}
				$(".column-card").draggable({helper : 'clone'});
			}

		
		
		
		
			function charttype(varlists) {
				$("#variables").empty();
				chartType = [];
				for (var i = 0; i < varlists.length; i++) {
					var obj = varlists[i];
				///populate with
				chartType.push(obj.series);
				var varcard = "<div class=\"col-xl-4 col-lg-4 col-6\">";
				//console.log(varcard);
				if (obj.multiple == "true") {
					varcard = varcard + "<div style='overflow-y:auto;' class=\"DataMapping_chart-dimension__2tNga user-select-none\" data-series=\"" + obj.series + "\"data-agg=\"" + obj.aggregation + "\"data-types=\"" + obj.datatype + "\"data-multi=\"" + obj.multiple + "\">";
				} else {
					varcard = varcard + "<div class=\"DataMapping_chart-dimension__2tNga user-select-none\" data-series=\"" + obj.series + "\"data-agg=\"" + obj.aggregation + "\"data-types=\"" + obj.datatype + "\"data-multi=\"" + obj.multiple + "\">";
				}
				//console.log(1);
				//console.log(varcard);	
				varcard = varcard + "<div class=\"d-flex flex-row justify-content-between align-items-center DataMapping_chart-dimension-header__3FrwJ\">";
				//console.log(2);
				//console.log(varcard);
				varcard = varcard + "<span class=\"text-left\">";
				//console.log(3);
				//console.log(varcard);
				//console.log(31);
				//console.log(obj.symbol);
				var symbollist = obj.symbol.split(',');
				//console.log(symbollist);
				var s = "";
				for (var j = 0; j < symbollist.length; j++) {
					//	console.log(symbollist[j]);
					s = s + "<span>" + symbollist[j] + " </span>";
				}
				varcard = varcard + s;
				varcard = varcard
				+ "</span><span class=\"text-capitalize text-center\">"
				+ obj.series
				+ "</span><span class=\"DataMapping_dimension-required__1FreW text-right\" style=\"opacity: 1;\">";
					//console.log(4);
									//console.log(varcard);
									if (obj.mandatory == "true") {
										varcard = varcard + "*";
									}
									varcard = varcard + "</span></div>";
									varcard = varcard + "<div class=\"dropzone " + obj.series +" DataMapping_dropzone__2L06t\"></div></div></div>";
						//console.log(5);
									//console.log(varcard);
									$("#variables").append(varcard);
								}
								console.log(chartType);
								
								
								$(".dropzone").droppable({accept : ".column-card",drop : function(ev, ui) {

									
									
									
									var droppedItem = $(ui.draggable).clone();
									console.log('droppedItem');
									console.log(droppedItem);
									droppedItem.addClass('remove');
									
					//column data type ---always single
					
					var coltype = $(droppedItem).data('types');
					console.log("coltype---------" + coltype);
					
					
					//place holder data type ---single or plural
					
					var placetype = $(this).parent().data('types');
					
					console.log("placetype---------" + placetype);
					
					//place holder data aggregation ---true or flase
					var placeagg = String($(this).parent().data('agg'));
					
					var multi = String($(this).parent().data('multi'));
					//console.log(">>"+placeagg);
					
				 if (!placetype.includes(coltype)) 
					{
						alert('No Match!')
						return;
					} 
					
					
					var el = $("<span style='text-align: -webkit-right;'><a href='Javascript:void(0);' class='xicon delete' title='Remove'>X</a></span>");

					if (placeagg.includes("true")) {
						//var _agg = $("<div class='d-inline-block ml-2 raw-dropdown dropdown'><button aria-haspopup='true' aria-expanded='false' type='button' class='pr-5 dropdown-toggle btn btn-primary'>Sum</button><div x-placement='bottom-start' aria-labelledby='' class='dropdown-menu' style='position: absolute; top: 0px; left: 0px; margin: 0px; opacity: 0; pointer-events: none;'><a href='#' class='dropdown-item' role='button'>Count</a><a href='#' class='dropdown-item' role='button'>Count unique</a><a href='#' class='dropdown-item' role='button'>Average</a><a href='#' class='dropdown-item' role='button'>Max</a><a href='#' class='dropdown-item' role='button'>Min</a><a href='#' class='dropdown-item' role='button'>Sum</a><a href='#' class='dropdown-item' role='button'>Median</a><a href='#' class='dropdown-item' role='button'>CSV</a><a href='#' class='dropdown-item' role='button'>CSV (unique)</a></div></div>");
						var _agg = $("<select class='form-control' ><option value='sum'>Sum</option><option value='count'>Count</option><option value='uniq'>Count unique</option><option value='avg'>Avg</option><option value='max'>Max</option><option value='min'>Min</option><option value='medianTDigest'>Median</option></select>");

						//console.log("agg");	
						
						console.log("#############---",$(droppedItem.find('span')[1]));
						
						$(_agg).insertAfter($(droppedItem.find('span')[1]));
						
						if (multi.includes("true")) { //multi
							if ($(this).children().length == 0) {
								$(this).empty();
							}						
							$(el).insertAfter($(droppedItem.find('select')[0]));
						}
						else{ //not multi
							$(this).empty();
							$(el).insertAfter($(droppedItem.find('span')[1]));
						}
						$(this).append(droppedItem);
						
						$("select.form-control").change(
							function() 
							{$(this).children("option:selected").val();
						});
					} else {
						if (multi.includes("true")) { //multi
							if ($(this).children().length == 0) {
								$(this).empty();
							}						
							$(el).insertAfter($(droppedItem.find('select')[0]));
						}
						else{ //not multi
							$(this).empty();
							$(el).insertAfter($(droppedItem.find('span')[1]));
						}
						//$(this).empty();
						//$(el).insertAfter($(droppedItem.find('span')[1]));
						$(this).append(droppedItem);
					}

					//if ($(this).children().length==0){
						//    $(this).empty();
						//}
					//$(droppedItem.find('.dropzone')).remove();                               
					//alert($(this).parent().parent().find('div').data('types'));

					//
					//alert($(this).html());
					$('.delete').on('click',function() {
					//alert(	$(this).parent().parent('div').html());              		
					$(this).parent().parent('div').remove();
					$("#btnChart").trigger("click");
						//if ($(this).children().length==1){
							//$(this).parent().parent().parent().parent.find('dropzone DataMapping_dropzone__2L06t ui-droppable').text("Drop dimension here");
							//$(this).parent().text("Drop dimension here");;
							//}
						});

					//droppedItem.appendTo('#droppable');
					//var productCode = jQuery.trim($(droppedItem).children("ul").children(".DataMapping_column-title__2yLXi").text());
					// ajax request to persist product for the user 
					/* var params = new Object();
					params.productCode = productCode;
					params.userName = "azamsharp";

					$.ajax(
						{
					    type: "POST",
					    data: $.toJSON(params),
					    contentType: "application/json",
					    url: "/?chart=pie&",
					    success: function (response) {
					    }
						});
						*/

						
						setTimeout(() => {
							//alert("call get chart");
							$("#btnChart").trigger('click');
							
						}, 200);
						
					}
				}

				);
}

	
			
			
			
			
	function filterfields()
	{
		
		$(".dropzonefilter").droppable({accept:".column-card",drop:function(ev,ui) 
			{

		var droppedItem = $(ui.draggable).clone();
		droppedItem.addClass('dropzoneselect cb-accordion-content');
		
		
					//column data type ---always single
					var coltype = $(droppedItem).data('types');					
					var col = $(droppedItem).data('field');
					
					console.log("coltype---------" + coltype);
					//place holder data type ---single or plural
					var placetype = $(this).parent().data('types');
					//place holder data aggregation ---true or flase
					var placeagg = "true";// String($(this).parent().data('agg'));
					
					var multi = "true"; //String($(this).parent().data('multi'));
					//console.log(">>"+placeagg);

					var el = $("<span style='text-align: -webkit-right;'><a href='Javascript:void(0);' class='xicon delete' title='Remove'>X</a></span>");

					//if (placeagg.includes("true")) {
					//var _agg = $("<div class='d-inline-block ml-2 raw-dropdown dropdown'><button aria-haspopup='true' aria-expanded='false' type='button' class='pr-5 dropdown-toggle btn btn-primary'>Sum</button><div x-placement='bottom-start' aria-labelledby='' class='dropdown-menu' style='position: absolute; top: 0px; left: 0px; margin: 0px; opacity: 0; pointer-events: none;'><a href='#' class='dropdown-item' role='button'>Count</a><a href='#' class='dropdown-item' role='button'>Count unique</a><a href='#' class='dropdown-item' role='button'>Average</a><a href='#' class='dropdown-item' role='button'>Max</a><a href='#' class='dropdown-item' role='button'>Min</a><a href='#' class='dropdown-item' role='button'>Sum</a><a href='#' class='dropdown-item' role='button'>Median</a><a href='#' class='dropdown-item' role='button'>CSV</a><a href='#' class='dropdown-item' role='button'>CSV (unique)</a></div></div>");
					//var labelfiltertype = $("<div class='mt-3'><span style='text-align: -webkit-right;'>Filter Type</span></div>");
					
					
					var filtertype = $("<div class='mt-3'><span style='text-align: -webkit-right;'>Filter Type</span></div><div class='mt-3'><select class='form-control' onchange='getFieldvalue(\""+col+ "\")'><option value='adv'>Advance</option><option value='basic'>Basic</option><option value='topn'>Top N</option></select></div>");
					
					//var labelfilter = $("<div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>");
					
					//var comparisontxt = $("<div class='mt-2 mb-2'><input type='number' class='form-control'></div>");
      
					
					
					var comparisontxt = $("<div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
						+"<div class='mt-2 mb-2'><select class='form-control' ><option value='like'>contains</option><option value='does not contain'>does not contain</option><option value='starts with'>starts with</option><option value='does not start with'>does not start with</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option><option value='is empty'>is empty</option><option value='is not empty'>is not empty</option></select></div>"
						+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control'></div>"
						+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+col+"andor' id='and' value='and' checked><label class='css-iwo4qd' for='and'>And </label><input type='radio' class='css-1kd3qvh' name='"+col+"andor' id='or' value='or'><label class='css-iwo4qd' for='or'>Or </label></div></div>"
						+"<div class='mt-2 mb-2'><select class='form-control' ><option value='like'>contains</option><option value='does not contain'>does not contain</option><option value='starts with'>starts with</option><option value='does not start with'>does not start with</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option><option value='is empty'>is empty</option><option value='is not empty'>is not empty</option></select></div>"
						+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control'></div>");
					
					var comparisonnumber = $("<div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
						+"<div class='mt-2 mb-2'><select class='form-control' ><option value='<'>is less than</option><option value='<='>is less than or equal to</option><option value='>'>is greater than</option><option value='>='>is greater than or equal to</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"
						+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control'></div>"
						+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+col+"andor' id='and' value='and' checked><label class='css-iwo4qd' for='and'>And </label><input type='radio' class='css-1kd3qvh' name='"+col+"andor' id='or' value='or'><label class='css-iwo4qd' for='or'>Or </label></div></div>"
						+"<div class='mt-2 mb-2'><select class='form-control'><option value='<'>is less than</option><option value='<='>is less than or equal to</option><option value='>'>is greater than</option><option value='>='>is greater than or equal to</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"
						+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control'></div>");
					
					var comparisondate = $("<div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
						+"<div class='mt-2 mb-2'><select class='form-control' ><option value='is'>is</option><option value='is not'>is not</option><option value='is after'>is after</option><option value='is on or after'>is on or after</option><option value='is before'>is before</option><option value='is on or before'>is on or before</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"
						+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control'></div>"
						+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+col+"andor' id='and' value='and' checked><label class='css-iwo4qd' for='and'>And </label><input type='radio' class='css-1kd3qvh' name='"+col+"andor' id='or' value='or'><label class='css-iwo4qd' for='or'>Or </label></div></div>"
						+"<div class='mt-2 mb-2'><select class='form-control'><option value='is'>is</option><option value='is not'>is not</option><option value='is after'>is after</option><option value='is on or after'>is on or after</option><option value='is before'>is before</option><option value='is on or before'>is on or before</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"
						+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control'></div>");

					//var comparison = $("<select class='btn form-select form-select-sm' aria-label='.form-select-sm example'><option value='adv'>Advance</option><option value='basic'>Basic</option><option value='topn'>Top N</option></select>");


						//console.log("agg");	
						//console.log(_agg);

						
						//$(_agg).insertAfter($(droppedItem.find('.DataMapping_column-title__2yLXi')[0]));
						
//						$(droppedItem.find('.column-card')[0]).append(_agg);
						//console.log("column-card" + droppedItem.find('.DataMapping_column-title__2yLXi')[0]);
						//$(_agg).insertAfter($(droppedItem.find('.DataMapping_column-title__2yLXi')[0]));
						
						//$(_agg).append($(droppedItem.find('div')[1]));
						
						//if (multi.includes("true")) { //multi
							if ($(this).children().length == 0) {
								$(this).empty();
							}
 
						//$(el).insertAfter($(droppedItem.find('select')[0]));
						$(el).insertAfter($(droppedItem.find('span')[1]));
						
						//$(labelfiltertype).insertAfter($(droppedItem.find('span')[2]));
						
						$(filtertype).insertAfter($(droppedItem.find('span')[2]));
						
						if (coltype.includes("text")) { //multi
							$(comparisontxt).insertAfter($(droppedItem.find('div')[1]));
						}
						else if (coltype.includes("number"))
						{
							$(comparisonnumber).insertAfter($(droppedItem.find('div')[1]));
						}
						else
						{
							$(comparisondate).insertAfter($(droppedItem.find('div')[1]));
						}						 
						
						//console.log('droppedItem---')
						//console.log($(droppedItem))
						//$(_agg).insertAfter($(droppedItem));
						//div.dropzonefilter.DataMapping_dropzone__2L06t.ui-droppable
						
						//$('div.dropzonefilter.DataMapping_dropzone__2L06t.ui-droppable').append(_agg);
						
						/* }
						else{ //not multi
							$(this).empty();
							$(el).insertAfter($(droppedItem.find('span')[1]));
						} */
						$(this).append(droppedItem);
						/*  setTimeout(() => {
							 var contententry ='<div class="content-entry">';
						        droppedItem.find('dropzoneselect').insertBefore(contententry);

						        var contententrydiv ='</div>';

						        droppedItem.find('dropzoneselect').insertAfter(contententrydiv);
								
							}, 500); */
						
						
						
						
						$("select.form-control").change(
							function() 
							{$(this).children("option:selected").val();
						});
					/* } else {
						if (multi.includes("true")) { //multi
							if ($(this).children().length == 0) {
								$(this).empty();
							}						
							$(el).insertAfter($(droppedItem.find('select')[0]));
						}
						else{ //not multi
							$(this).empty();
							$(el).insertAfter($(droppedItem.find('span')[1]));
						}
						//$(this).empty();
						//$(el).insertAfter($(droppedItem.find('span')[1]));
						$(this).append(droppedItem);
					} */
					
					$('.delete').on('click',function() {
					//alert(	$(this).parent().parent('div').html());              		
					$(this).parent().parent('div').remove();
					//alert("delete");
					$("#btnChart").trigger("click");
				});	
					
					
					$('input').on('blur',  function () 
							{
						 		// alert("This input field has lost its focus.");
						  		 $("#btnChart").trigger("click");

							});	
					
					
				}
				
			});
		
		}

			// drag zone 

			$("#menu-toggle").click(function(e) {
								//alert('in toggle');
								e.preventDefault();
								$("#wrapper").toggleClass("toggled");
							});

			
			
			
			
			function getDim(type) {
				var data = {};
				$("#chartingtype").val(type);
				$.ajax(
					{type : "POST",
					async:false,
					contentType : "application/json",
					url : "/CafeBotCharting/getChartDim?type="+type,
					dataType : 'text',
					success : function(result) {
					//console.log("result--"+result);
					jsonData = JSON.parse(result);
					charttype(jsonData);
					filterfields();

												/* if (result != "") 
												{
													$("#tablename").val(result).change();
												} */
											},
											error : function(data) {
												console.log(data);
											}
										});
			}

			//getchart
			$("#btnChart").click(function(e) {
					//get all the divs with droppable
						//alert("call get chart ");
					//console.log($('div.DataMapping_chart-dimension__2tNga')[1]);
					var varDim = [];
					var listofdims = $('div.DataMapping_chart-dimension__2tNga');

					//escape 1st item which is filter
					for (var i = 1; i < listofdims.length; i++) {
						//console.log(listofdims[i].find('.column-card'));
						var listofchild = $('.column-card',listofdims[i])
						if (listofchild.length != 0) {
							for (var j = 0; j < listofchild.length; j++) {

							//console.log($(listofchild[j]));

							var ls = [];
								/*         				sitems={'Series':$(listofdims[i]).data('series')};        				        				
								 ls.push(sitems);
															
								 fitems={'Field':$(listofchild[j]).data('field')};        				        				
								 ls.push(items); */
								/*         				ls.push({'Series':$(listofdims[i]).data('series')});
								 ls.push({'Field':$(listofchild[j]).data('field')});
								
								 var selected="";
															
								 if($(listofchild[j]).find(":selected").text()!=null)
								 	selected = $(listofchild[j]).find(":selected").text(); */

								 var isbin = 0;
								 	
								 if (j==0)
								 {
									 isbin = 1;
								 }	
								 	
								 	
								 ls.push({'Series' : $(listofdims[i]).data('series'),
								 	'Field' : $(listofchild[j]).data('field'),
								 	'Agg' : $(listofchild[j]).find(":selected").text(),
								 	'Bin':isbin
								 });
								//console.log($(listofdims[i]).data('series') +"-" + $(listofchild[j]).data('field'));
								//var options =  $('select.btn.form-select.form-select-sm',listofchild[j]);
								//var selectedoption = $(listofchild[j]).find(":selected").text();
								varDim.push(ls);
								//console.log(ls);
								
							}
														//console.log($('.column-card',listofdims[i]));
							}
					}
						//console.log(varDim);

						var varDimfilter = [];
						var listofdimsfilter = $('div.dropzoneselect');

						//column-card DataMapping_column-card__2VBWp ui-draggable ui-draggable-handle dropzoneselect
						//console.log('listofdimsfilter');
						//console.log(listofdimsfilter);
						
						//escape 1st item which is filter
						for (var i = 0; i < listofdimsfilter.length; i++) {
							
							//console.log('.column-card');
							//console.log(listofdimsfilter[i].find('.column-card'));
							//var listofchild = $('.column-card',listofdimsfilter[i])
							
							//console.log('listofchild');
							//console.log(listofchild);
							
							//if (listofchild.length != 0) {
								//for (var j = 0; j < listofchild.length; j++) {

									var ls = [];
								/*         				sitems={'Series':$(listofdims[i]).data('series')};        				        				
			 					ls.push(sitems);
										
			 					fitems={'Field':$(listofchild[j]).data('field')};        				        				
			 					ls.push(items); */
								/*	ls.push({'Series':$(listofdims[i]).data('series')});
			 					ls.push({'Field':$(listofchild[j]).data('field')});
			
			 					var selected="";
										
			 					if($(listofchild[j]).find(":selected").text()!=null)
			 						selected = $(listofchild[j]).find(":selected").text(); */

				 				//$(droppedItem.find('span')[1])
				 				
				 				//console.log('com')
				 				//console.log($(listofdimsfilter[i]).find("select")[0])
				 				//console.log($(listofdimsfilter[i]).find("select")[1])
				 				//console.log($(listofdimsfilter[i]).find("select")[2])
				 				var field = $(listofdimsfilter[i]).data('field');	
				 				var types =	$(listofdimsfilter[i]).data('types');
				 				
				 				var filterselecttype = $(listofdimsfilter[i]).find("select")[0];
				 				console.log("filterselecttype:::::",filterselecttype);
				 				
				 				
				 				var filterselecttypevalue = $(filterselecttype).val();
				 				
				 				console.log("filterselecttypevalue:::::::::::"+filterselecttypevalue);
				 				
				 				var filtertopn = "";
				 				
				 				if (filterselecttypevalue =="adv")
				 				{
				 					
				 				}
				 				else if (filterselecttypevalue =="basic")
				 				{
				 					
				 				}
				 				else if (filterselecttypevalue =="topn")
				 				{
				 					filtertopn="";
				 				}
				 				
				 				
				 				var filterselect1 = $(listofdimsfilter[i]).find("select")[1];
				 				var filterselect2 = $(listofdimsfilter[i]).find("select")[2];
				 				
				 			
				 				console.log("listofdimsfilter[i]:::::",listofdimsfilter[i]);
				 				var filterand = $(listofdimsfilter[i]).find("input[type='radio']")[0];
				 				var filteror = $(listofdimsfilter[i]).find("input[type='radio']")[1];
				 				
				 				
				 				//div.find("input[type='radio']")
				 				
				 				//$("#chkClass").prop( "checked")==false
				 				console.log("filterand:::::",filterand);
				 				console.log("ischecked::::"+$(filterand).prop( "checked"));
				 				
				 				var andorvalue =" and ";
				 				if ($(filterand).prop( "checked")== false)
				 				{
				 					andorvalue = " or ";
				 				}
				 				
				 				
				 				var filterselectvalue1 = $(listofdimsfilter[i]).find(".filterselectvalue")[0];
				 				var filterselectvalue2 = $(listofdimsfilter[i]).find(".filterselectvalue")[1];
				 				
				 				console.log('filterselectvalue1');
				 				console.log($(filterselectvalue1).val());

				 		    ls.push({ 
								 	  	//'Types' : $(listofdimsfilter[i]).data('series'),
									  	'Types' : types,
									  	'Field' : field,
									  	'filterselect1' : $(filterselect1).val(),
									  	'filterselect2' : $(filterselect2).val(),
									  	'filterselectvalue1': $(filterselectvalue1).val(),
									  	'filterselectvalue2': $(filterselectvalue2).val(),
									  	'andorvalue':andorvalue,
									  	'filterselecttypevalue':filterselecttypevalue
								   });
								//console.log($(listofdims[i]).data('series') +"-" + $(listofchild[j]).data('field'));
								//var options =  $('select.btn.form-select.form-select-sm',listofchild[j]);
								//var selectedoption = $(listofchild[j]).find(":selected").text();
								varDimfilter.push(ls);
								//console.log(ls);
								//}
									//console.log($('.column-card',listofdims[i]));
							//}
						}

						//console.log("varDimfilter");
						//console.log(varDimfilter);
						
						var tabelname = globalselectedtabnlename ;//$("#tablelistData").val();
						
						if (tabelname =="0")
						{
							alert("Please select table!");
							return;
						}
						
						//alert("call get chart");
						
						$("#container").empty();
						type = "line";
						
						
						$.ajax({method : "POST",			
							async:false,
							url : "/CafeBotCharting/getchart",
							data : {
								chartName : type,
								fieldsprop : JSON.stringify(varDim),
								charttype:	$("#chartingtype").val(),
								filterprop : JSON.stringify(varDimfilter),
								tabelname:tabelname,
							},
							success : function(result) {
								console.log("chart result--"+result);
								$("#variables").append(result);
								//jsonData = JSON.parse(result);
								//console.log(jsonData);
							    //table(jsonData);
							    //charttype(jsonData);

							/* if (result != "") 
								{
								$("#tablename").val(result).change();
							} */
						},
						error : function(data) {
							console.log(data);
						}
					});
					});

			
			
			
			
var globalselectedtabnlename ="";
			
			
			
$("#btnSave").click(function(e) {
	var varDim = [];
	var listofdims = $('div.DataMapping_chart-dimension__2tNga');
	for (var i = 1; i < listofdims.length; i++) {
		var listofchild = $('.column-card',listofdims[i])
		if (listofchild.length != 0) {
			for (var j = 0; j < listofchild.length; j++) {
				var ls = [];
				ls.push({'Series' : $(listofdims[i]).data('series'),
					'Field' : $(listofchild[j]).data('field'),
					'Datatype' : $(listofchild[j]).data('types'),
					'Agg' : $(listofchild[j]).find(":selected").text()

				});
				varDim.push(ls);
			}
		}
	}
	var varDimfilter = [];
	var listofdimsfilter = $('div.dropzoneselect');
					//escape 1st item which is filter
					for (var i = 0; i < listofdimsfilter.length; i++) {
						var ls = [];			 					
						var field = $(listofdimsfilter[i]).data('field');	
						var types =	$(listofdimsfilter[i]).data('types');
						var filterselect1 = $(listofdimsfilter[i]).find("select")[1];
						var filterselect2 = $(listofdimsfilter[i]).find("select")[2];

						var filterselectvalue1 = $(listofdimsfilter[i]).find(".filterselectvalue")[0];
						var filterselectvalue2 = $(listofdimsfilter[i]).find(".filterselectvalue")[1];			 							 									 				
						ls.push({
							'Types' : types,
							'Field' : field,
							'filterselect1' : $(filterselect1).val(),
							'filterselect2' : $(filterselect2).val(),
							'filterselectvalue1': $(filterselectvalue1).val(),
							'filterselectvalue2': $(filterselectvalue2).val()
						});
						varDimfilter.push(ls);
					}
					
					var tablename = globalselectedtabnlename ;//$("#tablelistData").val();
					
					console.log("save tablename:::::"+tablename);
					
					if (tablename =="" || tablename=="0" || tablename == "undefined")
					{
						alert("Please select table!");
						return;
					}
					
					
					//type = "line";
					
					type = globalchartType;
					var dashboardid = $("#dashboardlistData").val();
					var tabid = $("#tablistData").val();
					var tabname = $("#tablistData option:selected").text();
					var chartNametxt = $("#chartNametxt").val();
					
					
					if (chartNametxt.trim() =="")
					{
						alert("Please enter chart name");
						return;
					}
					
					console.log("dashboardid:::::"+dashboardid);
					console.log("tabname:::::"+tabname);
					console.log("tabid:::::"+tabid);
					
					
					$.ajax({method : "POST",					
						url : "/CafeBotCharting/savechart",
						data : {
							chartName : type,
							fieldsprop : JSON.stringify(varDim),
							charttype:	$("#").val(),
							filterprop: JSON.stringify(varDimfilter),
							tablename:tablename,
							dashboardid:dashboardid,
							tabname:tabname,
							tabid:tabid,
							chartNametxt:chartNametxt,
						},
						success : function(result) 
						{
						
						},
						error : function(data) {
							console.log(data);
						}
					});
				});
				
				
				
				
$("#chartcard1, #chartcard2, #chartcard3,#chartcard4,#chartcard5").click(
	function(e) 
	{
		console.log("id-------------------"+this.id);
		$("#wrapper").toggleClass("toggled");
		
		globalchartType = this.id; 
		
		getDim(this.id);
	});




$("#btnGetFields").click(function(e) {
	type = 1
	$.ajax({
		type : "POST",
		contentType : "application/json",
		url : "/CafeBotCharting/getFields?type="
		+ type,
		dataType : 'text',
		success : function(result) {
			console.log("result--"	+ result);
			jsonData = JSON.parse(result);
			table(jsonData);
							//charttype(jsonData);
							/* if (result != "") 
							{
							$("#tablename").val(result).change();
						} */
					},
					error : function(data) {
						console.log(data);
					}
				});
});




var el=new Array();



function loadchart1(){
			//d = new $.Deferred();
			
			$(".dropzone").empty();
			$("div.dropzonefilter").empty();
			//$("div.dropzone").empty();	
			return new Promise((resolve) => {

				var _id=0;			  
				if (getParameterByName('id') != null){
					_id = getParameterByName('id');
				}
				else		
					{return;}

				$.ajax({method : "POST",	
					async: false,
					url : "/CafeBotCharting/setchart",
					data : {
						id : _id,
					},
					success : function(result) {
			    	//console.log("result--");
			    	//console.log(result);
			    	var arr = result;

			    	//$("div.dropzonefilter").empty();

			    				// private int id;    
								// private String slice_name;
								// private String datasource_type;
    							// private String  datasource_name;
    							// private String viz_type;
    							// private String query_context; [[{"Series":"Arcs","Field":"age","Agg":"Sum"}],[{"Series":"Series","Field":"campaign","Agg":"Sum"}]]
    							// private String containerid;
								// private String filter_context; //[[{"Types":"number","Field":"campaign","filterselect1":"<","filterselect2":"<","filterselectvalue1":"10","filterselectvalue2":""}]]
								//

								
			      //loop all fields
			    				
			    	for (let i = 0; i < arr.length; i++) 
			    		{
			    		
			    		  getDim(arr[i].viz_type);
			    					$("#btnGetFields").trigger("click");
			    					console.log('query_context'); 
			    					var queryArr = JSON.parse(arr[i].query_context);
			    					var filterArr = JSON.parse(arr[i].filter_context);
			    					console.log('filterArr',filterArr);
			    		//JSON.stringify(arr[i].filter_context)

						//[[{"Series":"Arcs","Field":"age","Datatype":"number","Agg":"Sum"}],[{"Series":"Series","Field":"campaign","Datatype":"number","Agg":""}]]
			    		//const el = [];
			    		//[[{"Types":"number","Field":"age","filterselect1":">","filterselect2":"<","filterselectvalue1":"50","filterselectvalue2":""}]]
			    		
			    		for(let i = 0; i < filterArr.length; i++){
			    			//console.log('Types',filterArr[i][0].Types);
			    			//console.log(filterArr[i][0].Field);
			    			//console.log(filterArr[i][0].filterselect1);
			    			//console.log(filterArr[i][0].filterselect2);
			    			//console.log(filterArr[i][0].filterselectvalue1);
			    			//console.log(filterArr[i][0].filterselectvalue2);			    			


			    			var sym='#';
			    			if (filterArr[i][0].Types.includes('text'))
			    			        {sym="Aa";}
			    				else if(filterArr[i][0].Types.includes('date'))
			    					{sym="Date";}
			    				else
			    					{sym="#";}


			    				var comparisontxt = "<div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
			    				+"<div class='mt-2 mb-2'><select class='form-control' ><option value='contains'>contains</option><option value='does not contain'>does not contain</option><option value='starts with'>starts with</option><option value='does not start with'>does not start with</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option><option value='is empty'>is empty</option><option value='is not empty'>is not empty</option></select></div>"
			    				+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' value='"+ filterArr[i][0].filterselectvalue1+"'></div>"
			    				+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[i][0].Field+"andor' id='and' value='and' checked><label class='css-iwo4qd' for='and'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[i][0].Field+"andor' id='or' value='or'><label class='css-iwo4qd' for='or'>Or </label></div></div>"
			    				+"<div class='mt-2 mb-2'><select class='form-control' ><option value='contains'>contains</option><option value='does not contain'>does not contain</option><option value='starts with'>starts with</option><option value='does not start with'>does not start with</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option><option value='is empty'>is empty</option><option value='is not empty'>is not empty</option></select></div>"
			    				+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' value='"+ filterArr[i][0].filterselectvalue2+"'></div>";

			    				var comparisonnumber = "<div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
			    				+"<div class='mt-2 mb-2'><select class='form-control' ><option value='<'>is less than</option><option value='<='>is less than or equal to</option><option value='>'>is greater than</option><option value='>='>is greater than or equal to</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"
			    				+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' value='"+ filterArr[i][0].filterselectvalue1+"'></div>"
			    				+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[i][0].Field+"andor' id='and' value='and' checked><label class='css-iwo4qd' for='and'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[i][0].Field+"andor' id='or' value='or'><label class='css-iwo4qd' for='or'>Or </label></div></div>"
			    				+"<div class='mt-2 mb-2'><select class='form-control' ><option value='<'>is less than</option><option value='<='>is less than or equal to</option><option value='>'>is greater than</option><option value='>='>is greater than or equal to</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"
			    				+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' value='"+ filterArr[i][0].filterselectvalue2+"'></div>";

			    				var comparisondate = "<div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
			    				+"<div class='mt-2 mb-2'><select class='form-control' ><option value='is'>is</option><option value='is not'>is not</option><option value='is after'>is after</option><option value='is on or after'>is on or after</option><option value='is before'>is before</option><option value='is on or before'>is on or before</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"
			    				+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' value='"+ filterArr[i][0].filterselectvalue1+"'></div>"
			    				+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[i][0].Field+"andor' id='and' value='and' checked><label class='css-iwo4qd' for='and'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[i][0].Field+"andor' id='or' value='or'><label class='css-iwo4qd' for='or'>Or </label></div></div>"
			    				+"<div class='mt-2 mb-2'><select class='form-control' ><option value='is'>is</option><option value='is not'>is not</option><option value='is after'>is after</option><option value='is on or after'>is on or after</option><option value='is before'>is before</option><option value='is on or before'>is on or before</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"
			    				+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' value='"+ filterArr[i][0].filterselectvalue2+"'></div>";

			    				var elfitem="";

			    				elfitem = "<div class='column-card DataMapping_column-card__2VBWp ui-draggable ui-draggable-handle dropzoneselect' draggable='true' "
			    				+ "data-field='"+filterArr[i][0].Field +"' data-types='"+filterArr[i][0].Types+"'> <span class='datatype'>"+sym+"</span>"
			    				+ "<span class='DataMapping_column-title__2yLXi'>"+filterArr[i][0].Field+"</span><span style='text-align: -webkit-right;'><a href='Javascript:void(0);' class='xicon delete' title='Remove'>X</a></span><div class='mt-3'><span style='text-align: -webkit-right;'>Filter Type</span></div>"
			    				+"<div class='mt-3'><select class='form-control' onchange='getFieldvalue(\"" +filterArr[i][0].Field+" \")'><option value='adv'>Advance</option><option value='basic'>Basic</option><option value='topn'>Top N</option></select></div>"

			    			if (filterArr[i][0].Types.includes("text")) { //multi
			    				elfitem = elfitem + comparisontxt;
			    			}
			    			else if (filterArr[i][0].Types.includes("number"))
			    			{
			    				elfitem = elfitem + comparisonnumber;
			    			}
			    			else
			    			{
			    				elfitem = elfitem + comparisondate;
			    			}
			    			
                            /*
							+"<div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
			    			+"<div class='mt-2 mb-2'><select class='btn form-select form-select-sm' aria-label='.form-select-sm example' style='border:1px solid #ced4da'><option value='<'>is less than</option><option value='<='>is less than or equal to</option><option value='>'>is greater than</option><option value='>='>is greater than or equal to</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"	    			
			    			+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control'></div>"
			    			+"<div class='mt-2 mb-2'><input type='radio' name='ageandor' id='and' value='and' checked=''><label class='form-check-label' for='and'>And </label><input type='radio' name='ageandor' id='or' value='or'><label class='form-check-label' for='or'>Or </label></div>"
			    			+"<div class='mt-2 mb-2'><select class='btn form-select form-select-sm' aria-label='.form-select-sm example' style='border:1px solid #ced4da'><option value='<'>is less than</option><option value='<='>is less than or equal to</option><option value='>'>is greater than</option><option value='>='>is greater than or equal to</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"
			    			+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control'></div>"			    			
			    			*/			    			
			    			
			    			elfitem = elfitem + "</div>";

			    			var finalelfitem="<div>"+elfitem+"</div>"
			    			
			    			
			    			$('.dropzonefilter').append(elfitem);
			    		}
			    		

			    		for(let i = 0; i < queryArr.length; i++){
			    			console.log('Series',queryArr[i][0].Series);
			    			console.log(queryArr[i][0].Field);
			    			console.log(queryArr[i][0].Datatype);
			    			console.log(queryArr[i][0].Agg);

			    			var sym='#';
			    			if (queryArr[i][0].Datatype == 'text'){
			    				sym="Aa";}
			    				else if(queryArr[i][0].Datatype == 'date')
			    					{sym="Date";}
			    				else
			    					{sym="#";}

			    				var elitem="";
			    				elitem = elitem + "<div class='column-card DataMapping_column-card__2VBWp ui-draggable ui-draggable-handle remove'" 
			    				+"draggable='true' data-field='"+ queryArr[i][0].Field +"' data-types='"+queryArr[i][0].Datatype+"'>"
			    				+"<span class='datatype'>"+sym+"</span>"
			    				+"<span class='DataMapping_column-title__2yLXi'>"+queryArr[i][0].Field+"</span>";

			    				if(queryArr[i][0].Agg!=''){
			    					elitem = elitem 
			    					+"<select class='form-control'>"
			    					+"<option value='sum'>Sum</option>"
			    					+"<option value='count'>Count</option>"
			    					+"<option value='uniq'>Count unique</option>"
			    					+"<option value='avg'>Avg</option>"
			    					+"<option value='max'>Max</option>"
			    					+"<option value='min'>Min</option>"
			    					+"<option value='medianTDigest'>Median</option>"
			    					+"</select>";
			    				}

			    				elitem = elitem +"<span style='text-align: -webkit-right;''>"
			    				+"<a href='Javascript:void(0);' class='xicon delete' title='Remove'>X</a></span>"
			    				+"</div>";    
			    				$('div.dropzone.'+queryArr[i][0].Series).append(elitem);
			    			}

			    					 //var els=$("<div class='column-card DataMapping_column-card__2VBWp ui-draggable ui-draggable-handle remove' draggable='true' data-field='age' data-types='number'> <span class='datatype'>#</span><span class='DataMapping_column-title__2yLXi'>age</span><select class='btn form-select form-select-sm' aria-label='.form-select-sm example'><option value='sum'>Sum</option><option value='count'>Count</option><option value='uniq'>Count unique</option><option value='avg'>Avg</option><option value='max'>Max</option><option value='min'>Min</option><option value='medianTDigest'>Median</option></select><span style='text-align: -webkit-right;'><a href='Javascript:void(0);' class='xicon delete' title='Remove'>X</a></span></div>");		    					 
			    					//var elf=$("<div class='column-card DataMapping_column-card__2VBWp ui-draggable ui-draggable-handle dropzoneselect' draggable='true' data-field='campaign' data-types='number'> <span class='datatype'>#</span><span class='DataMapping_column-title__2yLXi'>campaign</span><span style='text-align: -webkit-right;'><a href='Javascript:void(0);' class='xicon delete' title='Remove'>X</a></span><div class='mt-3'><span style='text-align: -webkit-right;'>Filter Type</span></div><div class='mt-3'><select class='btn form-select form-select-sm' aria-label='.form-select-sm example' style='border:1px solid #ced4da'><option value='adv'>Advance</option><option value='basic'>Basic</option><option value='topn'>Top N</option></select></div><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div><div class='mt-2 mb-2'><select class='btn form-select form-select-sm' aria-label='.form-select-sm example' style='border:1px solid #ced4da'><option value='<'>is less than</option><option value='<='>is less than or equal to</option><option value='>'>is greater than</option><option value='>='>is greater than or equal to</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div><div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control'></div><div class='mt-2 mb-2'><input type='radio' name='campaignandor' id='and' value='and' checked=''><label class='form-check-label' for='and'>And </label><input type='radio' name='campaignandor' id='or' value='or'><label class='form-check-label' for='or'>Or </label></div><div class='mt-2 mb-2'><select class='btn form-select form-select-sm' aria-label='.form-select-sm example' style='border:1px solid #ced4da'><option value='<'>is less than</option><option value='<='>is less than or equal to</option><option value='>'>is greater than</option><option value='>='>is greater than or equal to</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div><div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control'></div></div>")


					    	//filterfields();
					    }
					    $("#btnChart").trigger("click");
					    
					/* console.log('elitem',elitem);
					setTimeout(() => {
					$('div.dropzone.Series').append(elitem)
				}, 100); */
			    	//filterfields();



			    },
			    error : function(data) { 
			    	console.log(data);
			    }
			});
			//return el;
			//return el;
			//d.resolve();
	        //return d.promise();
	        resolve();
	    });
}



function loadchart2(){

			//d = new $.Deferred();
			return new Promise((resolve) => {
				console.log('el--'+el.length);
				console.log("**********",el);
			//var l="";
			for (i=0;i<el.length;i++){  
				//setTimeout(() => { 
					console.log('el[i]');
					console.log(el[i]);
					//l=l+el[i];
					$('div.dropzone.Series').append(el[i]);								
					//}, 100);
				}
			//$('div.dropzone.Series').html(l);
			//d.resolve();
	        //return d.promise();
	        resolve();
	    });
		}

		function loadchart(){			
			//promise = loadchart1().then(loadchart2);			 
			loadchart1();
/* 			loadchart1().then(			
			setTimeout(() => {
				loadchart2()
			}, 100)); */
			//.then(loadchart2());
		}

		if (getParameterByName('id') != null){
			_id = getParameterByName('id');
			loadchart();
		}

		function first() {
			return new Promise((resolve) => {
				console.log("1st");
				resolve();
			});   
		}

		function second() {
			return new Promise((resolve) => {
				console.log("2nd");
				resolve();
			});
		}
		
	//end load
});


function getTablelist()
{

	$.ajax(
		{type : "POST",
		async:false,
		url : '/CafeBotCharting/getTablelist',		
		success : function(result) {
			console.log("data:::::"+JSON.stringify( result));
			setDropdown(result);
		},
		error : function(data) {
			console.log(data);
		}
	});

}




function setDropdown(data)
{

	var selected='';
	var userHTML='';
	console.log("len:::::"+data.length);
	for(var v=0;v<data.length;v++)
	{
		userHTML+='<li ><div class="d-flex justify-content-start align-items-center"><div class="cb-range-form-div me-2"><div class="cb-range-Label"><div class="form-inline"><div class="cb-form"><label class="css-12xei9w"><input  type="checkbox" id="chkDeploy'+v+'" value="'+data[v].viz_type+'" onclick="checkboxclick('+v+')" class="css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0"><span class="css-a2zrvp"></span></label></div></div> </div></div><div class="me-2"><i class="fa fa-database" aria-hidden="true"></i></div><div class="me-2" onclick="setFieldList(\''+data[v].slice_name+'\',\''+data[v].viz_type+'\','+v+')">'+data[v].slice_name+'</div></div></li>';
		//userHTML+='<option value="'+data[v].viz_type+'"  '+selected+' >'+data[v].slice_name+'</option>';
	}
	$('#tablelistDatas').html(userHTML);


}


function getDashboardlist()
{

	$.ajax(
		{type : "POST",
		async:false,
		url : '/CafeBotCharting/getDashboardlist',		
		success : function(result) {
			console.log("data:::::"+JSON.stringify( result));
			setDropdownDashboard(result);
		},
		error : function(data) {
			console.log(data);
		}
	});

}


function setDropdownDashboard(data)
{

	var selected='';
	var userHTML='';
	console.log("len:::::"+data.length);
	for(var v=0;v<data.length;v++)
	{
		userHTML+='<li >'+data[v].slice_name+'</li>';
	}
	$('#dashboardlistData').html(userHTML);


}


function setFieldList(name,value,index)
{
	globalselectedtabnlename = value;
	
	   $('input:checkbox').prop('checked',false);
	
/* 	 if($("#chkDeploy"+index).prop( "checked")==true)
		{ 
		  var tid  = $("#chkDeploy"+index).val();
		//alert("tid::::"+tid);
		   $('input:checkbox').prop('checked',false);
		  $("#chkDeploy"+index).prop( "checked", true );
		  
		}    
		else 
		{
			
		} */
	
	
	var tableid = value;//$("#tablelistData").val();
		//alert("tableid::::"+tableid);
		$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "/CafeBotCharting/getFieldsList?tableid="+tableid ,
			dataType : 'text',
			success : function(result) {
				closeDataset();
				console.log("result 2--"	+ result);
				jsonData = JSON.parse(result);
				table_(jsonData);
		//charttype(jsonData);
		/* if (result != "") 
		{
		$("#tablename").val(result).change();
	} */
},
error : function(data) {
	console.log(data);
}
});
		
		
	}
	
	
	
function setTabList()
{
	var dashid = $("#dashboardlistData").val();
		//alert("tableid::::"+tableid);
		$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "/CafeBotCharting/getDashboardtablist?dashid="+dashid,
			dataType : 'text',
			success : function(result) {
				console.log("result 2--"	+ result);
				jsonData = JSON.parse(result);
				tablist_(jsonData);
		//charttype(jsonData);
		/* if (result != "") 
		{
		$("#tablename").val(result).change();
	} */
},
error : function(data) {
	console.log(data);
}
});
		
		
	}
	
	
function tablist_(data) 
{
	
	var selected='';
	var userHTML='';
	console.log("len:::::"+data.length);
	for(var v=0;v<data.length;v++)
	{
		userHTML+='<li>'+data[v].slice_name+'</li>';
	}
	$('#tablistData').html(userHTML);
	
}



	
	
	
	function table_(lists) 
	{
		
		$("#column-cards").empty();
		
		for (var i = 0; i < lists.length; i++) 
		{
		 	var obj = lists[i];
		 	//console.log(obj.colname);
		 	var card = "<div class=\"column-card DataMapping_column-card__2VBWp\" draggable=\"true\" data-field=\"" + obj.colname + "\" data-types=\"" 
		 	+ obj.datatype + "\"> <span class=\"datatype\">"+ obj.symbol
		 	+ "</span><span class=\"DataMapping_column-title__2yLXi\">"+ obj.colname + "</span></div>";
		 	$("#column-cards").append(card);
		}
		
		$(".column-card").draggable({helper : 'clone'});
		
	}

	
	
	
	
	
	
	
	function barchartSelect(){
		$("#menu-toggle").show();
        // $("#sidebar-wrapper").toggle();
        $("#wrapper").addClass("toggled");
    }
    $('nav ul li').on('shown.bs.tab', function (e) 
    {
    	console.log("e::",e);
            var target = $(e.currentTarget).attr("id") // activated tab
            //alert("target:::"+target);

            if (target == "add_border") {
            	$('#add_border').addClass("cb-border-right-none");
            	$('#add_border1').removeClass("cb-border-right-none");
            	$('#add_border2').removeClass("cb-border-right-none");
            	$('#add_border3').removeClass("cb-border-right-none");
            	$('#add_border4').removeClass("cb-border-right-none");
            }
            else if (target == "add_border1") {
            	$('#add_border1').addClass("cb-border-right-none");
            	$('#add_border2').removeClass("cb-border-right-none");
            	$('#add_border3').removeClass("cb-border-right-none");
            	$('#add_border4').removeClass("cb-border-right-none");
            }
            else if (target == "add_border2") {
            	$('#add_border1').removeClass("cb-border-right-none");
            	$('#add_border2').addClass("cb-border-right-none");
            	$('#add_border3').removeClass("cb-border-right-none");
            	$('#add_border4').removeClass("cb-border-right-none");
            }
            else if (target == "add_border3") {
            	$('#add_border1').removeClass("cb-border-right-none");
            	$('#add_border2').removeClass("cb-border-right-none");
            	$('#add_border3').addClass("cb-border-right-none");
            	$('#add_border4').removeClass("cb-border-right-none");
            }
            else if (target == "add_border4") {
            	$('#add_border1').removeClass("cb-border-right-none");
            	$('#add_border2').removeClass("cb-border-right-none");
            	$('#add_border3').removeClass("cb-border-right-none");
            	$('#add_border4').addClass("cb-border-right-none");
            }
        });     
    function closetab(){
    	    	//$("#sidebar-wrapper").hide();
    	    	$("#wrapper").addClass("toggled");
    }  

    function openModal() {
    	$("#descriptiopoup").show()
    }
    function closeModal(){
    	$("#descriptiopoup").hide()
    }
    function openDataset(){
    	$("#selectdimension").show();
    	getTablelist();
    }
    function closeDataset(){
    	$("#selectdimension").hide();
    }
    
    
    
   function checkboxclick(index)
   {
	   //alert("index::::"+index);
	   
	  if($("#chkDeploy"+index).prop( "checked")==true)
		{ 
		  var tid  = $("#chkDeploy"+index).val();
		//alert("tid::::"+tid);
		   $('input:checkbox').prop('checked',false);
		  $("#chkDeploy"+index).prop( "checked", true );
		  
		}    
		else 
		{
			
		}
	   
/*         $("#chkDeploy"+index).click(function () 
        		{
            if ($(this).is(":checked")) {
                //$("#chkDeploy"+index).val();
                alert($("input:checkbox:checked").val());
            } else {
            	alert("unchecked");
                $("#datasetdivshow").hide();
            }
        }); */
   }
 
   
   
   

	function getFieldvalue(index)
	{
		//alert("call");
		
		var colname = index.trim();//$("filtercol"+index).val();
		//alert("call:::::"+colname );
		
		
		$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "/CafeBotCharting/getFieldsvalue?tablename="+ globalselectedtabnlename+"&colname=item_category_name",
			dataType : 'text',
			success : function(result) 
			{
				console.log("result--"	+ result);
				jsonData = JSON.parse(result);
				console.log("value:::"+JSON.stringify(jsonData));
			},
						error : function(data) {
							console.log(data);
						}
					});
		
		
	}
   
    </script>

</body>
</html>