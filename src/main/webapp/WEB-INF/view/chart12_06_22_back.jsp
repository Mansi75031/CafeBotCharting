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
	<!-- 	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
		crossorigin="anonymous"> -->

<link href="<c:url value='/resources/css/bootstrap.min.css'> <c:param name='jsversion' value='1111'/>   </c:url>" rel="stylesheet">

<link href="<c:url value='/resources/css/font-awesome.css'> <c:param name='jsversion' value='1111'/>   </c:url>" rel="stylesheet">


<!-- 		<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"> -->
		
		<link rel="stylesheet" type="text/css"    href="<c:url value="/resources/css/roboto_font.css"/> ">
		<link rel="stylesheet" type="text/css"    href="<c:url value="/resources/css/cafebot_font_style.css"/> ">
		<link rel="stylesheet" type="text/css"    href="<c:url value="/resources/css/cafebot_left_panel.css"/> ">
		
		<!-- NProgress -->
<link href="<c:url value='/resources/nprogress/nprogress.css'> <c:param name='jsversion' value='1111'/>   </c:url>" rel="stylesheet">
<script src="<c:url value='/resources/nprogress/nprogress.js'> <c:param name='jsversion' value='1111'/>   </c:url>"></script>
<script src="<c:url value='/resources/js/notify.min.js'> <c:param name='jsversion' value='1111'/>   </c:url>"></script>
		
<script  src="<c:url value='/resources/js/bootstrap.bundle.min.js'> <c:param name='jsversion' value='1111'/>   </c:url>"
		></script>
		
		
<script  src="<c:url value='/resources/js/highcharts.js'> <c:param name='jsversion' value='1111'/>   </c:url>"
		></script>		
		
<script  src="<c:url value='/resources/js/exporting.js'> <c:param name='jsversion' value='1111'/>   </c:url>"
		></script>		
				

<script  src="<c:url value='/resources/js/jquery-3.6.0.js'> <c:param name='jsversion' value='1111'/>   </c:url>"
	></script>		

<script  src="<c:url value='/resources/js/jquery-3.6.0.js'> <c:param name='jsversion' value='1111'/>   </c:url>"
		></script>		


<script  src="<c:url value='/resources/js/jquery-ui.js'> <c:param name='jsversion' value='1111'/>   </c:url>"
		crossorigin="anonymous"></script>		

		
		<!-- <script src=https://code.highcharts.com/8.2.2/highcharts.js></script>
		<script src=https://code.highcharts.com/8.2.2/modules/exporting.js></script> -->

	<!-- 	<script src="https://code.jquery.com/jquery-3.6.0.js"
		integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
		crossorigin="anonymous"></script>
		
		<script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"
		integrity="sha256-6XMVI0zB8cRzfZjqKcD01PBsAy3FlDASrlC8SxCpInY="
		crossorigin="anonymous"></script> -->
		
		<script src="<c:url value='/resources/css/util.js'> <c:param name='jsversion' value='222'/>   </c:url>"></script>
		<script src="<c:url value='/resources/css/tab.js'> <c:param name='jsversion' value='222'/>   </c:url>"></script>
		
		
		
		<style>
			body{
				background: #0b0c0e;
				font-size: 14px;
				font-family: 'Roboto', sans-serif;
				/* overflow:hidden; */
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
	overflow-y:auto;
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
position:relative;
	display:block;
	padding:11px;
	min-height:350px;
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
		max-width: 1095px;
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
		
		height: 610px;
		
	}
	.dropzonefilter {
		height:570px;
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
    z-index: 9999;
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
	  /*   border-right: 1px solid rgba(204, 204, 220, 0.15);
    padding-right: 0px */
    
    background:#202226;
    margin: 0;
    border: 1px solid rgba(204, 204, 220, 0.25);
    padding: 18px 18px 0 18px;
}
.cb-select-div .dropzonefilter .DataMapping_column-title__2yLXi {
    display: inline-flex;
    max-width: 100px;
}
.cb-dataset {
    max-height: 470px;
    overflow: auto;
}
ul.list-unstyled.cb-dataset li {
    border-bottom: 1px solid rgba(204, 204, 220, 0.25);
    margin-bottom: 8px;
    line-height: 28px;
    height: 35px;
    padding:3px 15px;
    position:relative;
}
.cb-cursor{
cursor:pointer;
}
.cb-accordian-height{
min-height:40px;
}
a.chart-accordion{
color:#d8d9da;
}
a.chart-accordion:hover{
color:#fff;
}
.cb-select-div .dropzonefilter .DataMapping_column-title__2yLXi + span {
    position: absolute;
    right: 10px;
}
.cb-placehoder-div:empty::before {
  color: #c2c1c1;
}
.cb-placehoder-div[data-placeholder]:not([data-placeholder=""]):empty::before {
  content: attr(data-placeholder);
}
.cb-placehoder-div:empty::before {
  content: 'Drop dimension here';
}
/* shooping card*/
.dropdown-cart {
    margin: 2px 0;
    float: right;
    background:#181b1f;
    width: 235px;
    position: absolute;
    border-radius: 3px;
    padding: 20px;
    /*top: 25%;*/
    z-index: 9999;
    margin-left: -122px;
        border: 1px solid rgba(204, 204, 220, 0.25);
        box-shadow: 2px 2px 8px rgb(0 0 0 / 40%);

}
.dropdown-cart .dropdown-cart-header {
    border-bottom: 1px solid #E8E8E8;
    padding-bottom: 15px;
}
.dropdown-cart .dropdown-cart-items {
    padding-top: 20px;
}
.dropdown-cart .dropdown-cart-items li {
    margin-bottom: 18px;
}
.dropdown-cart .dropdown-cart-items img {
    float: left;
    margin-right: 12px;
}
/*.dropdown-cart:after {
	bottom: 100%;
	left: 89%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-bottom-color: white;
	border-width: 8px;
	margin-left: -8px;
}*/
.cb-custom-dropdown{
position:relative;
    /* background: #0b0c0e; */
    margin-bottom: 0;
    width: 100%;
     cursor: pointer;
/* border: 1px solid rgba(204, 204, 220, 0.15); */
}
ul.cb-custom-dropdown li{
   margin: 0;
    padding: 0;
     width: 100px;
    position: absolute;
    right: 0;
    bottom: -10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;



}
ul.cb-custom-dropdown li i{
    right: 0;
    position: absolute;
    top: 4px;
}
.dropzone .column-card .DataMapping_column-title__2yLXi {
    width: 170px;
}
.cb-variables-height {
    height: 76px;
}

::-webkit-calendar-picker-indicator {
    filter: invert(1);
}
.column-card + .column-card {
    margin-top: 7px;
}
ul + .cb-xaxisdiv, ul + .cb-yaxisdiv {
    margin-top: 17px;
}
ul.cb-dataset li.active {
    background: #0b0c0e;
}
ul.cb-dataset li.active:before {
    background: linear-gradient(#00b0ff 30%,#3d71d9 99%);
    border-radius: 4px;
    bottom: 0;
    content: "";
    left: 0px;
    position: absolute;
    top: 0;
    width: 4px;
}
.cb-chart-name-css{
    display: flex;
    justify-content: start;
    align-items: center;
   /*  padding: 9px; */
    text-transform: capitalize;
        max-width: 100px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.cb-button-size{
font-size:16px;
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


			<!-- 	<div class="col-8 ">

					<p class="cb-chart-name-css" id="dataobjectname"></p>
				</div> -->
			</div>

		</div>
	</div>
	<div class="container-fluid">
	<div class="row">
			
	<div class="col">
	
<div class="d-flex justify-content-between align-content-center">
<div>
					<p class="cb-chart-name-css" id="dataobjectname" data-bs-toggle="Select Dataset"" >Select Dataset</p>
					</div>
				<div>
				<span class="cb-cursor cb-button-size" onclick="openDataset()" class="btn btn-primary" data-bs-toggle="tooltip" title="Data Source"><i class="fa fa-database" aria-hidden="true"></i>
				</span>&nbsp;&nbsp; 
				<span id="menu-toggle" class="cb-cursor cb-button-size" class="btn btn-primary" data-bs-toggle="tooltip" title="Chart"><i class="fa fa-bar-chart" aria-hidden="true"></i></span>&nbsp;&nbsp; 

				<input type="hidden"  value="0"   name="chart_id" id="chart_id"  />
				
				<input type="hidden"  value="0"   name="dash_id" id="dash_id"  />
				<input type="hidden"  value="0"   name="tab_id" id="tab_id"  />
				
				<span style='text-align: -webkit-right;display: none; '  ><a href='Javascript:void(0);'  class='xicon delete' title='Remove'>X</a></span>
				<span class="cb-cursor cb-button-size"  onclick="openModal()" class="btn btn-primary" data-bs-toggle="tooltip" title="Save Chart"><i class="fa fa-floppy-o" aria-hidden="true"></i></span>&nbsp;&nbsp; 				
				<span class="cb-cursor cb-button-size"  onclick="opennewChartwindow()" class="btn btn-primary" data-bs-toggle="tooltip" title="Add Chart"><i class="fa fa-plus" aria-hidden="true"></i></span>&nbsp;&nbsp; 
</div>

				 </div>
		</div>		 
	
	
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
											<div class="cb-close-tab cb-cursor" onclick="closetab()">
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
																<div class="cb-chart-list" id="chartcard6">
																	<img src="<c:url value="/resources/chart_icon/bar_chart.png"/>">
																	<div class="cb-chart-content-des">
																		Mix
																	</div>
																</div>
																<div class="cb-chart-list" id="chartcard7">
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
						
						<div
						class="d-flex flex-row justify-content-between align-items-center DataMapping_chart-dimension-header__3FrwJ">
						<span class="text-capitalize text-middle">Filters</span>
					</div>
					<div class="dropzonefilter DataMapping_dropzone__2L06t cb-placehoder-div" id="accordion">
					Drop dimension here</div>
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
              	</div>
           </div>
           <div class="cb-border-right">
            <div class="row">
              <div class="col-5">       
              	      
                
                  
                    <h5>Select Dashboard</h5>
                    <ul class="list-unstyled cb-dataset" id="dashboardlistData">
                    </ul>
                
              
           </div>
           <div class="col">
           	<h5>Select Tab</h5>
                    <ul class="list-unstyled cb-dataset" id="tablistData">
                    </ul>
           </div>
         </div>
         </div>
       </div>
     </div>
     <div class="drawer-footer">
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
					<div class="col">Data Source</div>
					<div class="col">Meta  Data <span id="totcount" style="float:right"> 
					</span></div>
					</div>
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

					<div class="col-6" > 
					
					<div class="col"> 
					<ul class="list-unstyled cb-dataset" id="previewmetadata">
					</ul>
					</div>
					
					
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
	var globalchartType ="chartcard2";
	var selectedtabid=0;
var selectedtabname ="";
	
	var globalselectedtabnlename ="";
				
				
	
	
	var indexi=0;

	$(document).ready(function() {
		
		
		$('.delete').on('click','a',function() {
			//alert(	$(this).parent().parent('div').html());              		
			$(this).parent().parent('div').remove();
				});
		
		
		
		openDataset();
		setTimeout(() => {
			  $("#chartingtype").val("chartcard2"); 
			getDim('chartcard2');	
		}, 300);
		
		

		$("input").blur(function(){
			  //alert("This input field has lost its focus.");
			  $("#btnChart").trigger("click");
			});
		    
		
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

		
		
		
		
			function charttype(varlists) 
			{
			
				indexi =0;
				$("#variables").empty();
				chartType = [];
				for (var i = 0; i < varlists.length; i++) {
					var obj = varlists[i];
				///populate with
				chartType.push(obj.series);
				var varcard = "<div class=\"col-xl-4 col-lg-4 col-6\">";
				//console.log(varcard);
				if (obj.multiple == "true") {
					varcard = varcard + "<div class=\"DataMapping_chart-dimension__2tNga user-select-none cb-variables-height\" data-series=\"" + obj.series + "\"data-agg=\"" + obj.aggregation + "\"data-types=\"" + obj.datatype + "\"data-multi=\"" + obj.multiple + "\">";
				} else {
					varcard = varcard + "<div class=\"DataMapping_chart-dimension__2tNga user-select-none cb-variables-height\" data-series=\"" + obj.series + "\"data-agg=\"" + obj.aggregation + "\"data-types=\"" + obj.datatype + "\"data-multi=\"" + obj.multiple + "\">";
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
						//var _agg = $("<select class='form-control' ><option value='sum'>Sum</option><option value='count'>Count</option><option value='uniq'>Count unique</option><option value='avg'>Avg</option><option value='max'>Max</option><option value='min'>Min</option><option value='medianTDigest'>Median</option></select>");
							
						var _agg=$("<div class='selectxaxisdiv' style='width:150px'><ul class='list-unstyled cb-custom-dropdown'>"
		    					+"<li onclick='openDropCartyaxis("+indexi+",event)' ><i class='fa fa-caret-down' aria-hidden='true'></i>&nbsp;<span id='yaxisdivtext"+indexi+"'></span> </li></ul>"
		    					+"<div class='dropdown-cart cb-yaxisdiv' id='opencartyaxis"+indexi+"' style='display: none;' >"
		    					+"<div class='cb-cursor' onclick='closeDropCartyaxis("+indexi+",event)' style='float: right;right: 11px;position: absolute;top: 4px;'><i class='fa fa-times' aria-hidden='true'></i></div>"
		    					+"<div >"
		    					+"<div class='cb-range-form-div'>"
		    					+"<div class='cb-range-Label'>"
		    					+"<div class='css-radio'>"
		    					+"<input type='radio' class='css-1kd3qvh' name='yaxisradio"+indexi+"' id='tonradio"+indexi+"' value='tonradio"+indexi+"'  onchange='ischeckedfn(this.value,"+indexi+");' style='display:none'>"
		    					+"<label class='css-iwo4qd' for='tonradio"+indexi+"' style='display:none'>Topn </label>"
		    					+"<input type='radio' class='css-1kd3qvh' name='yaxisradio"+indexi+"' id='aggregateradio"+indexi+"' value='aggregateradio"+indexi+"' onchange='ischeckedfn(this.value,"+indexi+");' checked>"
		    					+"<label class='css-iwo4qd' for='aggregateradio"+indexi+"'>Aggregate </label></div>"
		    					+"</div>"
		    					+"</div>"
		    					+"<div id='topnradiodiv"+indexi+"' style='display:none'>"
		    					+"<div class='cb-range-form-div'>"
								+"<div class='cb-range-Label'>"
								+"<span class='label'><div class='cb-range-text'>Display Top Values</div></span>"
									+"<div>"
										+"<div class='cb-input-css'>"
										+"<input type='number' class='form-control' id='displaytopvalue"+indexi+"' name='displaytopvalue"+indexi+"' onblur='displaytopvaluekeyup("+indexi+")'>"
										+"</div>"
										+"</div>"
										+"</div>"
										+"</div>"
										+"<div class='cb-range-Label'>"
										+"<div class='form-inline'>"
											+"<div class='cb-form'>"
												+"<label class='css-12xei9w'>"
													+"<input type='checkbox' id='others"+indexi+"' name='others"+indexi+"' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0'>"
													+"<span class='css-a2zrvp'></span>"
													+"<span class='css-a3753h-Label'>  Others</span>"
												+"</label>"
											+"</div>"
										+"</div>"
									+"</div>"
										+"</div>"
										+"<div id='aggregateradiodiv"+indexi+"' >"
									    +"<div class='cb-range-form-div'>"
															+"<div class='cb-range-Label'>"
															+"<span class='label'><div class='cb-range-text'>Aggregate</div></span>"
																+"<div>"
																	+"<div class='cb-input-css'>"
		    					+"<select class='form-control' id='aggregateval"+indexi+"' name='aggregateval"+indexi+"'><option value='sum'>Sum</option><option value='count'>Count</option><option value='uniq'>Count unique</option><option value='avg'>Avg</option><option value='max'>Max</option><option value='min'>Min</option><option value='medianTDigest'>Median</option></select>"
		    					+"</div>"
								+"</div>"
							+"</div>"
			+"</div>"
			+"</div>"
			+"<div class='cb-range-Label cb-button-layout'>"
			+"<button class='cb-primary' id='getyaxis"+indexi+"' onclick='getyaxis("+indexi+")'>Save</button>"
			+"</div>"
	+"</div></div>")
					indexi++;	
						//console.log("agg");	
						//console.log(_agg);
						$(el).insertAfter($(droppedItem.find('span')[1]));
						$(_agg).insertAfter($(droppedItem.find('span')[1]));
						
						if (multi.includes("true")) { //multi
							if ($(this).children().length == 0) {
								$(this).empty();
							}						
							//$(el).insertAfter($(droppedItem.find('select')[0]));
							//$(el).insertAfter($(droppedItem.find('.selectaxisdiv')[0]));
						}
						else{ //not multi
							$(this).empty();
							//$(el).insertAfter($(droppedItem.find('span')[1]));  //original
							//$(el).insertAfter($(droppedItem.find('select')[0]));  //remove button after user to select option
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
							//$(el).insertAfter($(droppedItem.find('select')[0]));
							$(el).insertAfter($(droppedItem.find('.selectaxisdiv')[0]));
						}
						else{ //not multi
							console.log("remove button1",$(droppedItem.find('span')[1]));
							$(this).empty();
							$(el).insertAfter($(droppedItem.find('span')[1]));//original
							//$(el).insertAfter($(droppedItem.find('select')[0])); //remove button after user to select option
						}
						
						
							var _aggx=$("<div class='selectxaxisdiv' style='width:150px'>"
									+"<ul class='list-unstyled cb-custom-dropdown'>"
								      +"<li  id='dropdownshowxaxis"+indexi+"' onclick='openDropCart("+indexi+",event)'><i class='fa fa-caret-down' aria-hidden='true'></i>&nbsp;<span id='xaxisdivtext"+indexi+"'  class='xaxisdivtextclass' ></span></li></ul>"
								      +"<div class='dropdown-cart cb-xaxisdiv' id='opencart"+indexi+"' style='display: none;' >"
								      +"<div class='cb-cursor' id='hidexaxis"+indexi+"' onclick='closeDropCart("+indexi+",event)' style='float: right;right: 11px;position: absolute;top: 4px;'><i class='fa fa-times' aria-hidden='true'></i></div>"
								+"<div >"
								    +"<div class='cb-range-form-div'>"
														+"<div class='cb-range-Label'>"
															+"<span class='label'><div class='cb-range-text'>Bin type</div></span>"
															+"<div>"
																+"<div class='cb-input-css'>"
																	+"<select id='bintype"+indexi+"' name='bintype"+indexi+"' class='form-control queue-select' onchange='bintype("+indexi+")'>"
																	+"<option value='binsize'>Size of bins</option>"
																	+"<option value='binnumber'>Number of bins</option>"
																	+"</select>"
																+"</div>"
															+"</div>"
														+"</div>"
										+"</div>"
										+"<div class='cb-range-form-div' style='display:none'>"
														+"<div class='cb-range-Label'>"
															+"<span class='label'><div class='cb-range-text'>Min value</div></span>"
															+"<div>"
																+"<div class='cb-input-css'>"
																+"<input type='number' name='minvalue"+indexi+"' id='minvalue"+indexi+"' value='0.1' class='form-control' disabled onblur='minvaluekeyup("+indexi+")'>"
																+"</div>"
																+"</div>"
																+"</div>"
																+"</div>"
																+"<div class='cb-range-form-div'  style='display:none'>"
														+"<div class='cb-range-Label'>"
															+"<span class='label'><div class='cb-range-text'>Max value</div></span>"
															+"<div>"
																+"<div class='cb-input-css'>"
																+"<input type='number' name='maxvalue"+indexi+"' id='maxvalue"+indexi+"' value='307980' class='form-control' disabled onblur='maxvaluekeyup("+indexi+")'>"
																+"</div>"
																+"</div>"
																+"</div>"
																+"</div>"
																+"<div class='cb-range-form-div'>"
														+"<div class='cb-range-Label'>"
															+"<span class='label'><div class='cb-range-text'>Bin size</div></span>"
															+"<div>"
																+"<div class='cb-input-css'>"
																+"<input type='number' id='binsize"+indexi+"' name='binsize"+indexi+"' class='form-control' onblur='binsizekeyup("+indexi+")'>"
																+"</div>"
																+"</div>"
																+"</div>"
																+"</div>"
										+"<div class='cb-range-form-div' id='bincountdiv"+indexi+"'>"
														+"<div class='cb-range-Label'>"
															+"<span class='label'><div class='cb-range-text'>Bin Count</div></span>"
															+"<div>"
																+"<div class='cb-input-css'>"
																+"<input type='number' id='bincount"+indexi+"' name='bincount"+indexi+"' class='form-control' onblur='bincountkeyup("+indexi+")'>"
																+"</div>"
																+"</div>"
																+"</div>"
																+"</div>"
										+"<div class='cb-range-Label cb-button-layout'>"
										+"<button class='cb-primary' id='getxaxis"+indexi+"' onclick='getxaxis("+indexi+")'>Save</button>"
										+"</div>"
								+"</div></div>")
								console.log("span number",$(droppedItem.find('span')[1]));
								 $(_aggx).insertAfter($(droppedItem.find('span')[2]));
							
							$(el).insertAfter($(droppedItem.find('.selectxaxisdiv')[0])); 
						
						
						//$(this).empty();
						//$(el).insertAfter($(droppedItem.find('span')[1]));
						$(this).append(droppedItem);
					}

					$('.delete').on('click',function() {
					//alert(	$(this).parent().parent('div').html());              		
					$(this).parent().parent('div').remove();
						});
						
						setTimeout(() => {
							//alert("call get chart");
							$("#btnChart").trigger('click');
							
						}, 200);
						
					}
				}

				);
}
			
			var accordianind=0;

	function filterfields()
	{
		
		$(".dropzonefilter").droppable({accept:".column-card",drop:function(ev,ui) 
			{

		var droppedItem = $(ui.draggable).clone();
		droppedItem.addClass('dropzoneselect ');
		
		
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

					var filtertype ="";//$("<div class='dummy'></div>"); //$("<div class='mt-3'><span style='text-align: -webkit-right;'>Filter Type</span></div><div class='mt-3'><select class='form-control' ><option value='adv'>Advance</option><option value='basic'>Basic</option><option value='topn'>Top N</option></select></div>");
					
	
					var comparisontxt = $("<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:13px;top: -20px;'><a class='chart-accordion' data-bs-toggle='collapse' href='#collapseOne"+accordianind+"'><i class='fa fa-caret-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+accordianind+"' class='collapse show' data-bs-parent='#accordion'><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+accordianind+"' onchange='onChangedata("+accordianind+");'><option value='adv'>Advance</option><option value='topn'>Top N</option></select><div class='mt-2' id='optiondivtopn"+accordianind+"' style='display:none'><select class='form-control' id='top_bottom'><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+accordianind+"' ><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
						+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+accordianind+")'><option value='contains'>contains</option><option value='does not contain'>does not contain</option><option value='starts with'>starts with</option><option value='does not start with'>does not start with</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option><option value='is empty'>is empty</option><option value='is not empty'>is not empty</option></select></div>"
						+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' id='filtervalueid"+accordianind+"' onblur='filtervaluekeyup("+accordianind+")'></div>"
						+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+col+"andor' id='and"+accordianind+"' value='and' onchange='andorChange("+accordianind+")' checked><label class='css-iwo4qd' for='and"+accordianind+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+col+"andor' id='or"+accordianind+"' value='or' onchange='andorChange("+accordianind+")'><label class='css-iwo4qd' for='or"+accordianind+"'>Or </label></div></div>"
						+"<div class='mt-2 mb-2'><select class='form-control' ><option value='contains'>contains</option><option value='does not contain'>does not contain</option><option value='starts with'>starts with</option><option value='does not start with'>does not start with</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option><option value='is empty'>is empty</option><option value='is not empty'>is not empty</option></select></div>"
						+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' id='filterinvalueid"+accordianind+"' onblur='filterinvaluekeyup("+accordianind+")'></div></div>"
						+"<div id='basicselectdiv"+accordianind+"' style='display:none'><div class='mt-2'><table style='width:100%'><thead><tr><th><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal'  class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Select All </span></th></tr></thead><tbody><tr class='row'><td class='col-md-6'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal' checked='checked' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'> 0.10 </span></label></div></div> </div></td><td class='col-md-6'><div class='cb-range-Label'>149013</div></td></tr></tbody></table></div></div>"
						+"<div id='topnselectdiv"+accordianind+"' style='display:none'><div class='mt-2'><label>Show items</label><select class='form-control'><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='form-control' text='number' id='topninput"+accordianind+"' onblur='topninput("+accordianind+")'></div><div class='mt-2 d-none' ><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>");
					
					var comparisonnumber = $("<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:13px;top: -20px;'><a class='chart-accordion' data-bs-toggle='collapse' href='#collapseOne"+accordianind+"'><i class='fa fa-caret-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+accordianind+"' class='collapse show' data-bs-parent='#accordion"+accordianind+"'><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+accordianind+"' onchange='onChangedata("+accordianind+");'><option value='adv'>Advance</option><option value='topn'>Top N</option></select><div class='mt-2' id='optiondivtopn"+accordianind+"' style='display:none'></div><div id='optiondivselect"+accordianind+"'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
						+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+accordianind+")'><option value='<'>is less than</option><option value='<='>is less than or equal to</option><option value='>'>is greater than</option><option value='>='>is greater than or equal to</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"
						+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' id='filtervalueid"+accordianind+"'  onblur='filtervaluekeyup("+accordianind+")'></div>"
						+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+col+"andor' id='and"+accordianind+"' value='and' checked onchange='andorChange("+accordianind+")'><label class='css-iwo4qd' for='and"+accordianind+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+col+"andor' id='or"+accordianind+"' value='or' onchange='andorChange("+accordianind+")'><label class='css-iwo4qd' for='or"+accordianind+"'>Or </label></div></div>"
						+"<div class='mt-2 mb-2'><select class='form-control'><option value='<'>is less than</option><option value='<='>is less than or equal to</option><option value='>'>is greater than</option><option value='>='>is greater than or equal to</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"
						+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' id='filterinvalueid"+accordianind+"' onblur='filterinvaluekeyup("+accordianind+")'></div></div>"
						+"<div id='basicselectdiv"+accordianind+"' style='display:none'><div class='mt-2'><table style='width:100%'><thead><tr><th><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal'  class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Select All </span></th></tr></thead><tbody><tr class='row'><td class='col-md-6'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal' checked='checked' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'> 0.10 </span></label></div></div> </div></td><td class='col-md-6'><div class='cb-range-Label'>149013</div></td></tr></tbody></table></div></div>"
						+"<div id='topnselectdiv"+accordianind+"' style='display:none'><div class='mt-2'><label>Show items</label><select class='form-control'><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='form-control' text='number' id='topninput"+accordianind+"' onblur='topninput("+accordianind+")'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>");
					
					var comparisondate = $("<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:13px;top: -20px;'><a class='chart-accordion' data-bs-toggle='collapse' href='#collapseOne"+accordianind+"'><i class='fa fa-caret-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+accordianind+"' class='collapse show' data-bs-parent='#accordion"+accordianind+"'><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+accordianind+"' onchange='onChangedata("+accordianind+");'><option value='adv'>Advance</option><option value='topn'>Top N</option></select><div class='mt-2' id='optiondivtopn"+accordianind+"' style='display:none'></div><div id='optiondivselect"+accordianind+"'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
						+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+accordianind+")'><option value='is'>is</option><option value='is not'>is not</option><option value='is after'>is after</option><option value='is on or after'>is on or after</option><option value='is before'>is before</option><option value='is on or before'>is on or before</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"
						+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' id='filtervalueid"+accordianind+"'  onblur='filtervaluekeyup("+accordianind+")'></div>"
						+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+col+"andor' id='and"+accordianind+"' value='and' onchange='andorChange("+accordianind+")' checked><label class='css-iwo4qd' for='and"+accordianind+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+col+"andor' id='or"+accordianind+"' value='or' onchange='andorChange("+accordianind+")'><label class='css-iwo4qd' for='or"+accordianind+"' onchange='andorChange("+accordianind+")'>Or </label></div></div>"
						+"<div class='mt-2 mb-2'><select class='form-control'><option value='is'>is</option><option value='is not'>is not</option><option value='is after'>is after</option><option value='is on or after'>is on or after</option><option value='is before'>is before</option><option value='is on or before'>is on or before</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"
						+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' id='filterinvalueid"+accordianind+"' onblur='filterinvaluekeyup("+accordianind+")'></div></div>"
						+"<div id='basicselectdiv"+accordianind+"' style='display:none'><div class='mt-2'><table style='width:100%'><thead><tr><th><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal'  class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Select All </span></th></tr></thead><tbody><tr class='row'><td class='col-md-6'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal' checked='checked' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'> 0.10 </span></label></div></div> </div></td><td class='col-md-6'><div class='cb-range-Label'>149013</div></td></tr></tbody></table></div></div>"
						+"<div id='topnselectdiv"+accordianind+"' style='display:none'><div class='mt-2'><label>Show items</label><select class='form-control'><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='form-control' text='number' id='topninput"+accordianind+"' onblur='topninput("+accordianind+")'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>");
					
					
					
					
					accordianind++;
						
						//if (multi.includes("true")) { //multi
							if ($(this).children().length == 0) {
								$(this).empty();
							}
 
						//$(el).insertAfter($(droppedItem.find('select')[0]));
						$(el).insertAfter($(droppedItem.find('span')[1]));
						
						//$(labelfiltertype).insertAfter($(droppedItem.find('span')[2]));
						
						$(filtertype).insertAfter($(droppedItem.find('span')[2]));
						
						if (coltype.includes("text")) { //multi
							//alert("yext");
							$(comparisontxt).insertAfter($(droppedItem.find('span')[2]));
							//alert("yext");
						}
						else if (coltype.includes("number"))
						{
							$(comparisonnumber).insertAfter($(droppedItem.find('span')[2]));
						}
						else
						{
							$(comparisondate).insertAfter($(droppedItem.find('span')[2]));
						}						 
						
						$(this).append(droppedItem);
								
						
						$("select.form-control").change(
							function() 
							{$(this).children("option:selected").val();
						});
					
					$('.delete').on('click',function() {
					//alert(	$(this).parent().parent('div').html());              		
					$(this).parent().parent('div').remove();	
					$("#btnChart").trigger("click");
				});	
					setTimeout(() => {
						//alert(accordianind);
						 let accevent = document.getElementById("collapseOne"+(accordianind-1));
						   //alert(accevent);

						   accevent.addEventListener("show.bs.collapse", function () {
							   //$(this).attr('id');
						     //alert("Shown accevent");
						     
						     $(this).parent().parent().removeClass("cb-accordian-height");
						     
						    // $(".column-card").removeClass("cb-accordian-height");
						   });
  
						   accevent.addEventListener("hide.bs.collapse", function () {
						     //alert("Hidden accevent");
						     $(this).parent().parent().addClass("cb-accordian-height")
						     //$(".column-card").addClass("cb-accordian-height");
						   });
					}, 300);
					
				}
				
			});
}

			// drag zone 

			$("#menu-toggle").click(function(e) {
								//alert('in toggle');
								e.preventDefault();
								$("#wrapper").toggleClass("toggled");
								e.stopPropagation();
							});

		
			
			
			
			function getDim(type) 
			{
				
				//alert("type::::"+type);
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

			var globalcount =0;
			
			
			$("#btnChart").click(function(e) {
					//get all the divs with droppable
		//alert("call chart ");
					//console.log($('div.DataMapping_chart-dimension__2tNga')[1]);
					var varDim = [];
					var listofdims = $('div.DataMapping_chart-dimension__2tNga');

					//escape 1st item which is filter
					
					
					var bintype = "";
					var binsize = "";
					var bincount = "";
					var displaytopCheck =0;
					var displaytopvalue ="";
					 var others ="";
					 var Agg ="";
					
					 
					 
					 
					 
					 
					for (var i = 1; i < listofdims.length; i++) 
					{
						//console.log(listofdims[i].find('.column-card'));
						var listofchild = $('.column-card',listofdims[i])
				
			if (listofchild.length != 0) {
							
							
					for (var j = 0; j < listofchild.length; j++) 
							{

							//console.log($(listofchild[j]));

							var ls = [];
				

									 var isbin = 0;
									 	
									 if ($(listofdims[i]).data('series')=="X-Axis")
									 {
										 
										 var isbintext = $("#xaxisdivtext"+j).html();
										  bintype = $("#bintype"+j).val();
										  binsize = $("#binsize"+j).val();
										  bincount = $("#bincount"+j).val();
										 
										  displaytopvalue ="";
										  others ="";
										  Agg ="";

										  
										 //alert("isbintext:::"+isbintext)
										// alert("bintype:::"+bintype);
										 
								console.log("isbintext#####:::::"+isbintext);		 
										 if (isbintext !="")
										 {
											 isbin = 1; 
										 }
										 
										 
										 globalcount = globalcount+1;
									 }		
									 else 
									 {
										  bintype = "";
										  binsize = "";
										 bincount = "";
										 
										 var yaxisradio =  "Aggregate" ;// $('input[name="yaxisradio0"]:checked').val();  
										// alert("yaxisradio:::::"+yaxisradio);
										 if (yaxisradio =="tonradio"+j)
										 {
											 displaytopCheck =1;
											 displaytopvalue =  $("#displaytopvalue"+j).val(); 
											 
											 if($("#others"+j).prop( "checked")==true)
											 {
												 alert("true");
												 others = 1; 
											 }
											 else 
											 {
												 Agg ="";
												 others = 0;
											 }
											 
										 }
										  else
										 {
											 displaytopCheck =0;
											 
											 var filterselecttype = $(listofdims[i]).find("select")[0];
											 var filterselecttypevalue = $(filterselecttype).val();
											 
											 console.log("filterselecttypevalue####::::"+filterselecttypevalue);
											 
											 Agg =  filterselecttypevalue; 
										 } 
										 
										 
									 }
								 	
									 //alert("Agg::::"+Agg);
									 
									 
								 ls.push({'Series' : $(listofdims[i]).data('series'),
								 	'Field' : $(listofchild[j]).data('field'),
								 	'Agg' : Agg,
								 	'displaytopvalue' : displaytopvalue,
								 	'others' : others,
								 	'displaytopCheck':displaytopCheck,
								 	'Bin':isbin,
								 	'BinType':bintype,
								 	'BinSize':binsize,
								 	'BinCount':bincount
								 });
				
								 console.log("ls#####:::::",ls);
								 
								 varDim.push(ls);
								
								 //console.log(ls);
								
							}
								//console.log($('.column-card',listofdims[i]));
							}
					}
					
					console.log("vardim:::",varDim);
					
					console.log("listofdims.length::::"+varDim.length);
					 //if (varDim.length <= 1)
					 //{
					//	 return;
					 //}
						
							var varDimfilter = [];
						var listofdimsfilter = $('div.dropzoneselect');

						
						//escape 1st item which is filter
						for (var i = 0; i < listofdimsfilter.length; i++) {
							

									var ls = [];
				 				var field = $(listofdimsfilter[i]).data('field');	
				 				var types =	$(listofdimsfilter[i]).data('types');

				 				var filterselecttype = $(listofdimsfilter[i]).find("select")[0];
				 				console.log("filterselecttype:::::",filterselecttype);
				 				
				 				
				 				var filterselecttypevalue = $(filterselecttype).val();
				 				
				 				console.log("filterselecttypevalue:::::::::::"+filterselecttypevalue);
				 				
				 				
				 				
				 				var filterselect1 = $(listofdimsfilter[i]).find("select")[2];
				 				var filterselect2 = $(listofdimsfilter[i]).find("select")[3];
				 				var filterselect3 = $(listofdimsfilter[i]).find("select")[1];
				 			
				 				console.log("listofdimsfilter[i]:::::",listofdimsfilter[i]);
				 				var filterand = $(listofdimsfilter[i]).find("input[type='radio']")[0];
				 				var filteror = $(listofdimsfilter[i]).find("input[type='radio']")[1];
				 				
				 				
				 				//div.find("input[type='radio']")
				 				
				 				//$("#chkClass").prop( "checked")==false
				 				console.log("filterand:::::",filterand);
				 				console.log("ischecked::::"+$(filterand).prop( "checked"));
				 				
				 				var andorvalue =" and ";
				 			
				 				var filtertopn = "";
				 				var filtertopvalue = "";
				 				
				 					
				 				if (filterselecttypevalue =="adv")
				 				{
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
				 					
				 					console.log("filterselect3::::"+filterselect3);
				 					filtertopn="top";
				 					
				 					if (filterselect3=="bottom")
				 					{
				 						filtertopn="bottom";
				 					}
				 						andorvalue ="";
				 					
				 				}
				 				
				 				
				 				
				 				var filterselectvalue1 = $(listofdimsfilter[i]).find(".filterselectvalue")[0];
				 				var filterselectvalue2 = $(listofdimsfilter[i]).find(".filterselectvalue")[1];
				 				 filtertopvalue = $(listofdimsfilter[i]).find(".filterselectvalue")[1];
				 				
				 				
				 				console.log('filterselectvalue1');
				 				console.log($(filterselectvalue1).val());

				 				var filtertopn = "";
				 				var filtertopvalue = "";
				 			
				 					
				 				
				 				ls.push({
										//'Types' : $(listofdimsfilter[i]).data('series'),
										'Types' : types,
										'Field' : field,
										'filterselect1' : $(filterselect1).val(),
										'filterselect2' : $(filterselect2).val(),
										'filterselectvalue1': $(filterselectvalue1).val(),
										'filterselectvalue2': $(filterselectvalue2).val(),
									  	'andorvalue':andorvalue,
									  	'filterselecttypevalue':filterselecttypevalue,
									  	'filtertopn':filtertopn,
									  	'filtertopvalue':filtertopvalue
									});
								//console.log($(listofdims[i]).data('series') +"-" + $(listofchild[j]).data('field'));
								//var options =  $('select.btn.form-select.form-select-sm',listofchild[j]);
								//var selectedoption = $(listofchild[j]).find(":selected").text();
								varDimfilter.push(ls);
								//console.log(ls);
								
									//console.log($('.column-card',listofdims[i]));
							
						}

						//console.log("varDimfilter");
						console.log(varDimfilter);
						
						var tabelname = globalselectedtabnlename ;//$("#tablelistData").val();
						
						if (tabelname =="0")
						{
							alert("Please select table!");
							return;
						}
						
						//alert("call get chart");
						
						$("#container").empty();
						type = "line";
						
						//alert("call chart start ");
					NProgress.start();
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
								NProgress.done(true);
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
							NProgress.done(true);
							console.log(data);
						}
					});
					});

			
			
			
			
$("#btnSave").click(function(e) 

{
	var varDim = [];
	var listofdims = $('div.DataMapping_chart-dimension__2tNga');
	
		//escape 1st item which is filter
	
	
	var bintype = "";
	var binsize = "";
	var bincount = "";
	var displaytopCheck =0;
	var displaytopvalue ="";
	 var others ="";
	 var Agg ="";
	
	 
	 
	 
	 
	 
	for (var i = 1; i < listofdims.length; i++) 
	{
		//console.log(listofdims[i].find('.column-card'));
		var listofchild = $('.column-card',listofdims[i])
		if (listofchild.length != 0) {
			
			
	for (var j = 0; j < listofchild.length; j++) 
			{

			//console.log($(listofchild[j]));

			var ls = [];


					 var isbin = 0;
					 	
					 if ($(listofdims[i]).data('series')=="X-Axis")
					 {
						 
						 var isbintext = $("#xaxisdivtext0").html();
						  bintype = $("#bintype0").val();
						  binsize = $("#binsize0").val();
						  bincount = $("#bincount0").val();
						 
						  displaytopvalue ="";
						  others ="";
						  Agg ="";

						  
						 //alert("isbintext:::"+isbintext)
						// alert("bintype:::"+bintype);
						 if (isbintext !="" && isbintext !=null || isbintext !="null")
						 {
							 isbin = 1; 
						 }
						 
						 
						 globalcount = globalcount+1;
					 }		
					 else 
					 {
						  bintype = "";
						  binsize = "";
						 bincount = "";
						 
						 var yaxisradio = "Aggregate";// $('input[name="yaxisradio0"]:checked').val();  
						// alert("yaxisradio:::::"+yaxisradio);
						 if (yaxisradio =="tonradio0")
						 {
							 displaytopCheck =1;
							 displaytopvalue =  $("#displaytopvalue0").val(); 
							 
							 if($("#others0").prop( "checked")==true)
							 {
								 alert("true");
								 others = 1; 
							 }
							 else 
							 {
								 others = 0;
							 }
							 
							 
						 }
						 else
						 {
							 displaytopCheck =0;
							 
							 var filterselecttype = $(listofdims[i]).find("select")[0];
							 var filterselecttypevalue = $(filterselecttype).val();
							 
							 console.log("filterselecttypevalue####::::"+filterselecttypevalue);
							 
							 Agg =  filterselecttypevalue; 
							 //Agg =  $("#aggregateval").val(); 
						 }
						 
						 
					 }
				 	
					 //alert("Agg::::"+Agg);
					 if (bintype =="null" || bintype ==null || bintype =="undefined")
					 { 
						 isbin =0;
						 bintype ="";
					 }
					 
				 ls.push({'Series' : $(listofdims[i]).data('series'),
				 	'Field' : $(listofchild[j]).data('field'),
				 	'Agg' : Agg,
					'Datatype' : $(listofchild[j]).data('types'),
				 	'displaytopvalue' : displaytopvalue,
				 	'others' : others,
				 	'displaytopCheck':displaytopCheck,
				 	'Bin':isbin,
				 	'BinType':bintype,
				 	'BinSize':binsize,
				 	'BinCount':bincount
				 });

				 varDim.push(ls);
				
				 //console.log(ls);
				
			}
				//console.log($('.column-card',listofdims[i]));
			}
	}
	
	console.log("vardim:::",varDim);
	
	console.log("listofdims.length::::"+varDim.length);
	 //if (varDim.length <= 1)
	 //{
	//	 return;
	 //}
		
			var varDimfilter = [];
		var listofdimsfilter = $('div.dropzoneselect');

		
		//escape 1st item which is filter
		for (var i = 0; i < listofdimsfilter.length; i++) {
			

					var ls = [];
 				var field = $(listofdimsfilter[i]).data('field');	
 				var types =	$(listofdimsfilter[i]).data('types');

 				var filterselecttype = $(listofdimsfilter[i]).find("select")[0];
 				console.log("filterselecttype:::::",filterselecttype);
 				
 				
 				var filterselecttypevalue = $(filterselecttype).val();
 				
 				console.log("filterselecttypevalue:::::::::::"+filterselecttypevalue);
 				
 				
 				
 				var filterselect1 = $(listofdimsfilter[i]).find("select")[1];
 				var filterselect2 = $(listofdimsfilter[i]).find("select")[2];
 				var filterselect3 = $(listofdimsfilter[i]).find("select")[3];
 			
 				console.log("listofdimsfilter[i]:::::",listofdimsfilter[i]);
 				var filterand = $(listofdimsfilter[i]).find("input[type='radio']")[0];
 				var filteror = $(listofdimsfilter[i]).find("input[type='radio']")[1];
 				
 				
 				//div.find("input[type='radio']")
 				
 				//$("#chkClass").prop( "checked")==false
 				console.log("filterand:::::",filterand);
 				console.log("ischecked::::"+$(filterand).prop( "checked"));
 				
 				var andorvalue =" and ";
 			
 				var filtertopn = "";
 				var filtertopvalue = "";
 				
 					
 				if (filterselecttypevalue =="adv")
 				{
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
 					
 					console.log("filterselect3::::"+filterselect3);
 					filtertopn="top";
 					
 					if (filterselect3=="bottom")
 					{
 						filtertopn="bottom";
 					}
 						andorvalue ="";
 					
 				}
 				
 				
 				
 				var filterselectvalue1 = $(listofdimsfilter[i]).find(".filterselectvalue")[0];
 				var filterselectvalue2 = $(listofdimsfilter[i]).find(".filterselectvalue")[1];
 				 filtertopvalue = $(listofdimsfilter[i]).find(".filterselectvalue")[1];
 				
 				
 				console.log('filterselectvalue1');
 				console.log($(filterselectvalue1).val());

 				var filtertopn = "";
 				var filtertopvalue = "";
 			
 					
 				
 				ls.push({
						//'Types' : $(listofdimsfilter[i]).data('series'),
						'Types' : types,
						'Field' : field,
						'filterselect1' : $(filterselect1).val(),
						'filterselect2' : $(filterselect2).val(),
						'filterselectvalue1': $(filterselectvalue1).val(),
						'filterselectvalue2': $(filterselectvalue2).val(),
					  	'andorvalue':andorvalue,
					  	'filterselecttypevalue':filterselecttypevalue,
					  	'filtertopn':filtertopn,
					  	'filtertopvalue':filtertopvalue
					});
				//console.log($(listofdims[i]).data('series') +"-" + $(listofchild[j]).data('field'));
				//var options =  $('select.btn.form-select.form-select-sm',listofchild[j]);
				//var selectedoption = $(listofchild[j]).find(":selected").text();
				varDimfilter.push(ls);
				//console.log(ls);
				
					//console.log($('.column-card',listofdims[i]));
			
		}

		//console.log("varDimfilter");
		console.log(varDimfilter);
	
/* 	for (var i = 1; i < listofdims.length; i++) {
		var listofchild = $('.column-card',listofdims[i])
		if (listofchild.length != 0) {
			for (var j = 0; j < listofchild.length; j++) 
			{
				
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
					} */
					
					
					
					
					
					var tablename = globalselectedtabnlename ;//$("#tablelistData").val();
					
					if (tablename =="" || tablename=="0" || tablename == undefined)
					{
						alert("Please select table!");
						return;
					}
					
					
					//type = "line";
					
					type = globalchartType;
					var dashboardid = globaldashid ;  //selectedtabid;//  $("#dashboardlistData").val();
					var tabid = selectedtabid ;//$("#tablistData").val();
					var tabname = selectedtabname;//$("#tablistData option:selected").text();
					var chartNametxt = $("#chartNametxt").val();
					
					if (dashboardid != "0")
					{
					   if (tabid =="")
					   {
						   	alert("Please select tab!");
						   	return;
					   }
					
					}
					else 
					{
					    // var _dashid  = $("#dash_id").val();
					     //var _chartid = $("#chart_id").val();
					}
					
					if (chartNametxt.trim() =="")
					{
						alert("Please enter chart name");
						return;
					}
					
					console.log("dashboardid:::::"+dashboardid);
					console.log("tabname:::::"+tabname);
					console.log("tabid:::::"+tabid);
					
					NProgress.start();
					var chart_id = $("#chart_id").val();
					
					$.ajax({method : "POST",					
						url : "/CafeBotCharting/savechart",
						data : {
							chartName : type,
							fieldsprop : JSON.stringify(varDim),
							charttype:	$("#chartingtype").val(),
							filterprop: JSON.stringify(varDimfilter),
							tablename:tablename,
							dashboardid:dashboardid,
							tabname:tabname,
							tabid:tabid,
							chartNametxt:chartNametxt,
							chart_id:chart_id,
						},
						success : function(data) 
						{
							NProgress.done(true);
							console.log("result::::",data);
							
							//var lists = JSON.parse(JSON.stringify(result));
							
						   var msg = "";
						   var sliceid ="";
							for(var v=0;v<data.length;v++)
							{
								sliceid = data[v].slice_name;
								msg= data[v].viz_type
							}
							
							
							if (msg =="1")
							{
								alert("Save successfully");
							
								//$("#btnSave").notify("Save successfully!","success");
								$("#chart_id").val(sliceid);
								$("#dash_id").val($("#dash_id").val()+","+dashboardid); 
								$("#tab_id").val($("#chart_id").val()+","+chart_id);
								
							}
							else 
							{
								alert("Something went wrong");
								//$(".saved").notify("Something went wrong!","info"); 
								//$("#btnSave").notify("Something went wrong!","info");
							}
							
							
							
						},
						error : function(data) {
							console.log(data);
						}
					});
				});
				
				
				
				
$("#chartcard1, #chartcard2, #chartcard3,#chartcard4,#chartcard5,#chartcard6,#chartcard7,#chartcard8,#chartcard9").click(
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
				var _dashID=0;
				if (getParameterByName('id') != null)
				{
					_id = getParameterByName('id');
					_dashID=getParameterByName('dashID');
				}
				else		
					{return;}
				//alert("set chart call:::"+_id);
				
				NProgress.start();
				$.ajax({method : "POST",	
					async: false,
					url : "/CafeBotCharting/setchart",
					data : {
						id : _id,
						dashID:_dashID,
					},
					success : function(result) {
			    	//console.log("result--");
			    	
			    	NProgress.done(true);
			    	console.log("result arr :::::",result);
			    	var arr = result;
					var chart_id =0;
			    	  				//loop all fields
			    				var time = 5000;
			    	  				
			    	  				
			    				for (let k = 0; k < arr.length; k++) 
			    				{
			    					
			    					
			    				 if(arr[k].viz_type =="Histogram" || arr[k].viz_type =="chartcard1" )
			    					{
			    						getDim("chartcard1");
			    					}
			    				 else if (arr[k].viz_type =="Bar" || arr[k].viz_type =="chartcard2")
			    					{
			    						getDim("chartcard2");
			    					}
			    					else if(arr[k].viz_type =="Stacked Bar Chart" || arr[k].viz_type =="chartcard3" )
			    					{
			    						getDim("chartcard3");
			    					}
			    					else if(arr[k].viz_type =="Area Chart" || arr[k].viz_type =="chartcard4" )
			    					{
			    						getDim("chartcard4");
			    					}
			    					else if(arr[k].viz_type =="Line Chart" || arr[k].viz_type =="chartcard5" )
			    					{
			    						getDim("chartcard5");
			    					}
			    				
			    					else if(arr[k].viz_type =="Mix Chart" || arr[k].viz_type =="chartcard6" )
			    					{
			    						getDim("chartcard6");
			    					}
			    					else if(arr[k].viz_type =="Stacked Bar Chart %"  || arr[k].viz_type =="chartcard7" )
			    					{
			    						getDim("chartcard7");
			    					}
			    					else if(arr[k].viz_type =="Pie Chart" || arr[k].viz_type =="chartcard8" )
			    					{
			    						getDim("chartcard8");
			    					}
			    					else if(arr[k].viz_type =="Donut Chart" || arr[k].viz_type =="chartcard9" )
			    					{
			    						getDim("chartcard9");
			    					}
			    				 
			    				 
			    					globalselectedtabnlename = arr[k].datasource_name;
			    					setFieldList("",globalselectedtabnlename,"");
			    					
			    				    
			    					
			    					
			    					$("#btnGetFields").trigger("click");
			    					console.log('query_context'); 
			    					
			    					chart_id = arr[k].id;
			    					$("#chart_id").val(chart_id);
			    					$("#chartNametxt").val(arr[k].slice_name);
			    					
			    					
			    					var queryArr = JSON.parse(arr[k].query_context);
			    					var filterArr = JSON.parse(arr[k].filter_context);
			    					
			    					console.log('filterArr',filterArr);
			    					console.log('queryArr',queryArr);
			    					
			    					console.log("filterArr.length:::::"+filterArr.length);
			    					
						    		for(let j = 0; j < filterArr.length; j++)
						    		{
					
						    			var sym='#';
						    			if (filterArr[j][0].Types.includes('text'))
						    			        {sym="Aa";}
						    				else if(filterArr[j][0].Types.includes('date'))
						    					{sym="Date";}
						    				else
						    					{sym="#";}

						    			//alert("sym::::"+sym);

						    				var comparisontxt = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:13px;top: -20px;'><a class='chart-accordion' data-bs-toggle='collapse' href='#collapseOne"+j+"'><i class='fa fa-caret-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+j+"' class='collapse show' data-bs-parent='#accordion'><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+j+"' onchange='onChangedata("+j+");'><option value='adv'>Advance</option><option value='topn'>Top N</option></select><div class='mt-2' id='optiondivtopn"+j+"' style='display:none'><select class='form-control' id='top_bottom'><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+j+"' ><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
											+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+j+")'><option value='contains'>contains</option><option value='does not contain'>does not contain</option><option value='starts with'>starts with</option><option value='does not start with'>does not start with</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option><option value='is empty'>is empty</option><option value='is not empty'>is not empty</option></select></div>"
											+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' onblur='filtervaluekeyup("+j+")'></div>"
											+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+"andor' id='and"+j+"' value='and' checked><label class='css-iwo4qd' for='and"+j+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+"andor' id='or"+j+"' value='or' onchange='andorChange("+j+")'><label class='css-iwo4qd' for='or"+j+"'>Or </label></div></div>"
											+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+j+")'><option value='contains'>contains</option><option value='does not contain'>does not contain</option><option value='starts with'>starts with</option><option value='does not start with'>does not start with</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option><option value='is empty'>is empty</option><option value='is not empty'>is not empty</option></select></div>"
											+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+j+"' onblur='filterinvaluekeyup("+j+")'></div></div>"
											+"<div id='basicselectdiv"+j+""+j+"' style='display:none'><div class='mt-2'><table style='width:100%'><thead><tr><th><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal'  class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Select All </span></th></tr></thead><tbody><tr class='row'><td class='col-md-6'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal' checked='checked' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'> 0.10 </span></label></div></div> </div></td><td class='col-md-6'><div class='cb-range-Label'>149013</div></td></tr></tbody></table></div></div>"
											+"<div id='topnselectdiv"+j+"' style='display:none'><div class='mt-2'><label>Show items</label><select class='form-control'><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' id='topninput"+j+"' onblur='topninput("+j+")'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>";


						    				var comparisonnumber = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:13px;top: -20px;'><a class='chart-accordion' data-bs-toggle='collapse' href='#collapseOne"+j+"'><i class='fa fa-caret-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+j+"' class='collapse show' data-bs-parent='#accordion"+j+"'><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+j+"' onchange='onChangedata("+j+");'><option value='adv'>Advance</option><option value='topn'>Top N</option></select><div class='mt-2' id='optiondivtopn"+j+"' style='display:none'></div><div id='optiondivselect"+j+"'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
											+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+j+")'><option value='<'>is less than</option><option value='<='>is less than or equal to</option><option value='>'>is greater than</option><option value='>='>is greater than or equal to</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"
											+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+j+"'  onblur='filtervaluekeyup("+j+")'></div>"
											+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+"andor' id='and"+j+"' value='and' checked onchange='andorChange("+j+")'><label class='css-iwo4qd' for='and"+j+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+"andor' id='or"+j+"' value='or' onchange='andorChange("+j+")'><label class='css-iwo4qd' for='or"+j+"'>Or </label></div></div>"
											+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+j+")'><option value='<'>is less than</option><option value='<='>is less than or equal to</option><option value='>'>is greater than</option><option value='>='>is greater than or equal to</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"
											+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+j+"' onblur='filterinvaluekeyup("+j+")'></div></div>"
											+"<div id='basicselectdiv"+j+"' style='display:none'><div class='mt-2'><table style='width:100%'><thead><tr><th><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal'  class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Select All </span></th></tr></thead><tbody><tr class='row'><td class='col-md-6'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal' checked='checked' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'> 0.10 </span></label></div></div> </div></td><td class='col-md-6'><div class='cb-range-Label'>149013</div></td></tr></tbody></table></div></div>"
											+"<div id='topnselectdiv"+j+"' style='display:none'><div class='mt-2'><label>Show items</label><select class='form-control'><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' id='topninput"+j+"' onblur='topninput("+j+")'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>";

						    				var comparisondate = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:13px;top: -20px;'><a class='chart-accordion' data-bs-toggle='collapse' href='#collapseOne"+j+"'><i class='fa fa-caret-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+j+"' class='collapse show' data-bs-parent='#accordion"+j+"'><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+j+"' onchange='onChangedata("+j+");'><option value='adv'>Advance</option><option value='topn'>Top N</option></select><div class='mt-2' id='optiondivtopn"+j+"' style='display:none'></div><div id='optiondivselect"+j+"'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
											+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+j+")'><option value='is'>is</option><option value='is not'>is not</option><option value='is after'>is after</option><option value='is on or after'>is on or after</option><option value='is before'>is before</option><option value='is on or before'>is on or before</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"
											+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+j+"'  onblur='filtervaluekeyup("+j+")'></div>"
											+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+"andor' id='and"+j+"' value='and' checked onchange='andorChange("+j+")'><label class='css-iwo4qd' for='and"+j+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+"andor' id='or"+j+"' value='or' onchange='andorChange("+j+")'><label class='css-iwo4qd' for='or"+j+"'>Or </label></div></div>"
											+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+j+")'><option value='is'>is</option><option value='is not'>is not</option><option value='is after'>is after</option><option value='is on or after'>is on or after</option><option value='is before'>is before</option><option value='is on or before'>is on or before</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"
											+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"'></div></div>"
											+"<div id='basicselectdiv"+j+"' style='display:none'><div class='mt-2'><table style='width:100%'><thead><tr><th><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal'  class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Select All </span></th></tr></thead><tbody><tr class='row'><td class='col-md-6'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal' checked='checked' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'> 0.10 </span></label></div></div> </div></td><td class='col-md-6'><div class='cb-range-Label'>149013</div></td></tr></tbody></table></div></div>"
											+"<div id='topnselectdiv"+j+"' style='display:none'><div class='mt-2'><label>Show items</label><select class='form-control'><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' id='topninput"+j+"' onblur='topninput("+j+")'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>	";

						    				var elfitemfilter="";

						    				elfitemfilter = "<div class='column-card DataMapping_column-card__2VBWp ui-draggable ui-draggable-handle dropzoneselect'  draggable='true' "
						    				+ "data-field='"+filterArr[j][0].Field +"' data-types='"+filterArr[j][0].Types+"' > <span class='datatype'>"+sym+"</span>"
						    				+ "<span class='DataMapping_column-title__2yLXi'>"+filterArr[j][0].Field+"</span><span style='text-align: -webkit-right;'><a href='Javascript:void(0);' class='xicon delete' title='Remove'>X</a></span>"

						    			if (filterArr[j][0].Types.includes("text")) { //multi
						    				elfitemfilter = elfitemfilter + comparisontxt;
						    			}
						    			else if (filterArr[j][0].Types.includes("number"))
						    			{
						    				elfitemfilter = elfitemfilter + comparisonnumber;
						    			}
						    			else
						    			{
						    				elfitemfilter = elfitemfilter + comparisondate;
						    			}
						    			
			                 			
						    			elfitemfilter = elfitemfilter + "</div>";

						    			var finalelfitemfilter="<div>"+elfitemfilter+"</div>"
						    			
						    			console.log("elfitemfilter:::::",elfitemfilter);
						    			
						    			$('.dropzonefilter').append(elfitemfilter);
						    		}
						    		
									console.log("queryArr.length:::::"+queryArr.length);
									
					setTimeout(() => {
						
			    		for(var i = 0; i < queryArr.length; i++)
			    		{
			    			console.log('dim Series',queryArr[i][0].Series);
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

			    			//alert("sym 2::::"+sym)		;
			    				var elitem="";
			    				elitem = elitem + "<div class='column-card DataMapping_column-card__2VBWp ui-draggable ui-draggable-handle remove'" 
			    				+"draggable='true' data-field='"+ queryArr[i][0].Field +"' data-types='"+queryArr[i][0].Datatype+"'>"
			    				+"<span class='datatype'>"+sym+"</span>"
			    				+"<span class='DataMapping_column-title__2yLXi'>"+queryArr[i][0].Field+"</span>";

			    				console.log("queryArr[i][0].Agg:::::"+queryArr[i][0].Agg);
			    				
			    				if(queryArr[i][0].Agg !='')
			    				{
			    					elitem = elitem 
			    					+"<div class='selectaxisdiv' style='width:150px'><ul class='list-unstyled cb-custom-dropdown'>"
			    					+"<li onclick='openDropCartyaxis("+i+")' ><i class='fa fa-caret-down' aria-hidden='true'></i>&nbsp;<span id='yaxisdivtext"+i+"'>Aggregate</span></li></ul>"
			    					+"<div class='dropdown-cart cb-yaxisdiv' id='opencartyaxis"+i+"' style='display: none;' >"
			    					+"<div class='cb-cursor' onclick='closeDropCartyaxis("+i+")' style='float: right;right: 11px;position: absolute;top: 4px;'><i class='fa fa-times' aria-hidden='true'></i></div>"
			    					+"<div >"
			    					+"<div class='cb-range-form-div'>"
			    					+"<div class='cb-range-Label'>"
			    					+"<div class='css-radio'>"
			    					+"<input type='radio' class='css-1kd3qvh' name='yaxisradio' id='tonradio"+i+"' value='tonradio'  onchange='ischeckedfn(this.value);' style='display:none'>"
			    					+"<label class='css-iwo4qd' for='tonradio"+i+"' style='display:none'>Topn </label>"
			    					+"<input type='radio' class='css-1kd3qvh' name='yaxisradio' id='aggregateradio"+i+"' value='aggregateradio' onchange='ischeckedfn(this.value);' checked>"
			    					+"<label class='css-iwo4qd' for='aggregateradio"+i+"'>Aggregate </label></div>"
			    					+"</div>"
			    					+"</div>"
			    					+"<div id='topnradiodiv"+i+"' style='display:none'>"
			    					+"<div class='cb-range-form-div'>"
									+"<div class='cb-range-Label'>"
									+"<span class='label'><div class='cb-range-text'>Display Top Values</div></span>"
										+"<div>"
											+"<div class='cb-input-css'>"
											+"<input type='number' class='form-control' id='displaytopvalue"+i+"' name='displaytopvalue"+i+"'>"
											+"</div>"
											+"</div>"
											+"</div>"
											+"</div>"
											+"<div class='cb-range-Label'>"
										+"<div class='form-inline'>"
											+"<div class='cb-form'>"
												+"<label class='css-12xei9w'>"
													+"<input type='checkbox' id='others"+i+"' name='others"+i+"' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0'>"
													+"<span class='css-a2zrvp'></span>"
													+"<span class='css-a3753h-Label'>  Others</span>"
												+"</label>"
											+"</div>"
										+"</div>"
									+"</div>"
											+"</div>"
											+"<div id='aggregateradiodiv"+i+"'>"
										    +"<div class='cb-range-form-div'>"
																+"<div class='cb-range-Label'>"
																+"<span class='label'><div class='cb-range-text'>Aggregate</div></span>"
																	+"<div>"
																		+"<div class='cb-input-css'>"
			    					+"<select class='form-control' id='aggregateval"+i+"' name='aggregateval"+i+"'>"
			    					+"<option value='sum'>Sum</option>"
			    					+"<option value='count'>Count</option>"
			    					+"<option value='uniq'>Count unique</option>"
			    					+"<option value='avg'>Avg</option>"
			    					+"<option value='max'>Max</option>"
			    					+"<option value='min'>Min</option>"
			    					+"<option value='medianTDigest'>Median</option>"
			    					+"</select>"
			    					+"</div>"
									+"</div>"
								+"</div>"
				+"</div>"
				+"</div>"
				+"<div class='cb-range-Label cb-button-layout'>"
				+"<button class='cb-primary' id='getyaxis"+i+"' onclick='getyaxis("+i+")'>Save</button>"
				+"</div>"
		+"</div></div></div>";
			    				}else{
			    					
			    					
			    					var bintext = queryArr[i][0].BinType;
			    					if (queryArr[i][0].BinType =="")
			    					{
			    						bintext ="";
			    					}
			    					
			    					elitem=elitem
			    					+"<div class='selectxaxisdiv' style='width:150px'>"
											+"<ul class='list-unstyled cb-custom-dropdown'>"
										      +"<li  id='dropdownshowxaxis"+i+"' onclick='openDropCart("+i+",event)'><i class='fa fa-caret-down' aria-hidden='true'></i>&nbsp;<span id='xaxisdivtext"+i+"'  class='xaxisdivtextclass' >"+bintext+"</span></li></ul>"
										      +"<div class='dropdown-cart cb-xaxisdiv' id='opencart"+i+"' style='display: none;' >"
										      +"<div class='cb-cursor' id='hidexaxis"+i+"' onclick='closeDropCart("+i+",event)' style='float: right;right: 11px;position: absolute;top: 4px;'><i class='fa fa-times' aria-hidden='true'></i></div>"
										+"<div >"
										    +"<div class='cb-range-form-div'>"
																+"<div class='cb-range-Label'>"
																	+"<span class='label'><div class='cb-range-text'>"+bintext+"</div></span>"
																	+"<div>"
																		+"<div class='cb-input-css'>"
																			+"<select id='bintype"+i+"' name='bintype"+i+"' class='form-control queue-select' onchange='bintype("+i+")'>"
																			+"<option value='binsize'>Size of bins</option>"
																			+"<option value='binnumber'>Number of bins</option>"
																			+"</select>"
																		+"</div>"
																	+"</div>"
																+"</div>"
												+"</div>"
												+"<div class='cb-range-form-div' style='display:none'>"
																+"<div class='cb-range-Label'>"
																	+"<span class='label'><div class='cb-range-text'>Min value</div></span>"
																	+"<div>"
																		+"<div class='cb-input-css'>"
																		+"<input type='number' name='minvalue"+i+"' id='minvalue"+i+"' value='0.1' class='form-control' disabled onblur='minvaluekeyup("+i+")'>"
																		+"</div>"
																		+"</div>"
																		+"</div>"
																		+"</div>"
																		+"<div class='cb-range-form-div' style='display:none'>"
																+"<div class='cb-range-Label'>"
																	+"<span class='label'><div class='cb-range-text'>Max value</div></span>"
																	+"<div>"
																		+"<div class='cb-input-css'>"
																		+"<input type='number' name='maxvalue"+i+"' id='maxvalue"+i+"'  class='form-control' disabled onblur='maxvaluekeyup("+i+")'>"
																		+"</div>"
																		+"</div>"
																		+"</div>"
																		+"</div>"
																		+"<div class='cb-range-form-div' >"
																+"<div class='cb-range-Label'>"
																	+"<span class='label'><div class='cb-range-text'>Bin size</div></span>"
																	+"<div>"
																		+"<div class='cb-input-css'>"
																		+"<input type='number' id='binsize"+i+"' name='binsize"+i+"' value='"+queryArr[i][0].BinSize+"' class='form-control' onblur='binsizekeyup("+i+")'>"
																		+"</div>"
																		+"</div>"
																		+"</div>"
																		+"</div>"
												+"<div class='cb-range-form-div' id='bincountdiv"+i+"' style='display:none'>"
																+"<div class='cb-range-Label'>"
																	+"<span class='label'><div class='cb-range-text'>Bin Count</div></span>"
																	+"<div>"
																		+"<div class='cb-input-css'>"
																		+"<input type='number' id='bincount"+i+"' name='bincount"+i+"' value='"+queryArr[i][0].BinCount+"' class='form-control' onblur='bincountkeyup("+i+")'>"
																		+"</div>"
																		+"</div>"
																		+"</div>"
																		+"</div>"
												+"<div class='cb-range-Label cb-button-layout'>"
												+"<button class='cb-primary' id='getxaxis"+i+"' onclick='getxaxis("+i+")'>Save</button>"
												+"</div>"
										+"</div></div></div>";
			    				
			    				}

			    				elitem = elitem +"<span style='text-align: -webkit-right;''>"
			    				+"<a href='Javascript:void(0);'  class='xicon delete' title='Remove'>X</a></span>"
			    				+"</div>";    
			    				
			    				//console.log("elitem::::::",elitem);
			    				console.log("queryArr[i][0].Series:::::"+queryArr[i][0].Series);
			    				
			    				console.log("queryArr[i][0]"+queryArr[i][0]);
			    				
			    				console.log("queryArr[i][0].BinSize:::::"+queryArr[i][0].BinSize);
			    				$('div.dropzone.'+queryArr[i][0].Series).append(elitem);
			    				
			    				$("#aggregateval"+i).val(queryArr[i][0].Agg);
			    				
			    				$("#bintype"+i).val(queryArr[i][0].BinType);
	    						
			    				console.log("elitem::::::",elitem);
	    						console.log("time::::::"+time);

		    					time += 5000;
		    					
		    					//elitem="";
		    					
		    					//for (var k=0;k<1000;k++)
			    				//{
			    				//	console.log("k::::"+k);
			    				//}
			    				
		    				
			    			}
					}, 500);	
		
			    		
			    		
			  setTimeout(() => {
				  //alert("call");
		    		$('.delete').on('click',function() {
						//alert("delete");                 		
						
						$(this).parent().parent('div').remove();	
						$("#btnChart").trigger("click");
					});

				
			}, 5000);
			    		
			   	 }
					    
			    				NProgress.start();
			    	  		setTimeout(() => 
			    	  		{
			    	  			$("#selectdimension").hide();
			    	  			$("#btnChart").trigger("click");
			    	  			NProgress.done(true);
					    	  	
							}, 5000);		
			    	  				

		
			    },
			    error : function(data) { 
			    	NProgress.done(true);
			    	console.log(data);
			    }
			});
	        resolve();
	    });
}


/* function deleteDim(this)
{
	alert("remove");
	$(this).parent().parent('div').remove();
	$("#btnChart").trigger("click");
} */



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

		if (getParameterByName('id') != null)
		{
			_id = getParameterByName('id');
			//alert("call set chart ");
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
		userHTML+='<li ><div class="d-flex justify-content-start align-items-center"><div class="cb-range-form-div me-2"><div class="cb-range-Label"><div class="form-inline"><div class="cb-form"><label class="css-12xei9w"><input  type="checkbox" id="chkDeploy'+v+'" value="'+data[v].viz_type+'" onclick="setTotalRecordCount('+v+')" class="css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0"><span class="css-a2zrvp"></span></label></div></div> </div></div><div class="me-2"><i class="fa fa-database" aria-hidden="true"></i></div><div class="me-2" onclick="setFieldList(\''+data[v].slice_name+'\',\''+data[v].viz_type+'\','+v+')">'+data[v].slice_name+'</div></div></li>';
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
		console.log("data[v]::::",data[v]);
		userHTML+='<li id="dashli'+v+'"  class="dashliclass" onclick="setTabList(\''+data[v].viz_type+'\','+v+')"><div class="d-flex justify-content-start align-items-center"><div class="me-2"><i class="fa fa-database" aria-hidden="true"></i></div><div class="me-2"  >'+data[v].slice_name+'</div></div></li>';
	}
	
	$('#dashboardlistData').html(userHTML);


}



var globaldashid =0;


function setTabList(dashid,index)
{
	//alert("dashid:::::"+dashid);
	//var dashid = $("#dashboardlistData").val();
		//alert("tableid::::"+tableid);
		
		$(".dashliclass").removeClass("active");
		$("#dashli"+index).addClass("active");
		
		globaldashid = dashid;
		
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
	console.log("data:::::",data);
	for(var v=0;v<data.length;v++)
	{
		userHTML+='<li id="tabli'+v+'" class="tabliclass" onclick="setTabid(\''+data[v].viz_type+'\',\''+data[v].slice_name+'\','+v+')">'+data[v].slice_name+'</li>';
	}
	$('#tablistData').html(userHTML);
	
}



function setTabid(tabid,name,index)
{
	//alert("name:::"+name);
	
	
	$(".tabliclass").removeClass("active");
		$("#tabli"+index).addClass("active");
		
	
	selectedtabid = tabid;
	selectedtabname= name;
	
	}


function setFieldList(name,value,index)
{
	globalselectedtabnlename = value;
	
	   $('input:checkbox').prop('checked',false);
	   $("#dataobjectname").html(name) ; 
	   //$("#dataobjectname").prop('title', name);
	   $("#dataobjectname").attr('data-bs-original-title', name).tooltip('show')
	   
	   
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
	
	


function setTotalRecordCount(index)
{
	  if($("#chkDeploy"+index).prop( "checked")==true)
		{ 
		  var tid  = $("#chkDeploy"+index).val();
		       //alert("tid::::"+tid);
		   
		  $('input:checkbox').prop('checked',false);
		  $("#chkDeploy"+index).prop( "checked", true );
		  
			var tableid = tid;//$("#tablelistData").val();
			//alert("tableid::::"+tableid);
			$.ajax({
				type : "POST",
				contentType : "application/json",
				url : "/CafeBotCharting/getTotalRecordCount?tableid="+tableid ,
				dataType : 'text',
				success : function(result) {
					
					console.log("result count ::::"+result);
					if (result == "-1")
					{
						$("#totcount").html("Total record : -- ");
					}
					else 
					{
						$("#totcount").html("Total record :"+result);
						setFieldListPreview(tableid);
					}

	},
	error : function(data) {
		console.log(data);
	}

	});
		  
		}    
		else 
		{
			$("#totcount").html("Total record : -- ");
			$("#previewmetadata").empty();
		}
	

		
		
	}
	
	

function setFieldListPreview(tableid)
{

		//alert("tableid preview::::"+tableid);
		$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "/CafeBotCharting/getFieldsList?tableid="+tableid ,
			dataType : 'text',
			success : function(result) {
				console.log("result 2--"	+ result);
				var lists = JSON.parse(result);
				
				//table_(jsonData);
				$("#previewmetadata").empty();
				
				for (var i = 0; i < lists.length; i++) 
				{
				 	var obj = lists[i];
				 	//console.log(obj.colname);
				 	//var card = "<div class=\"column-card DataMapping_column-card__2VBWp\" draggable=\"true\" data-field=\"" + obj.colname + "\" data-types=\"" 
				 	//+ obj.datatype + "\" id='accordindiv"+i+"'> <span class=\"datatype\">"+ obj.symbol
				 	//+ "</span><span class=\"DataMapping_column-title__2yLXi\">"+ obj.colname + "</span></div>";
				 	
				 	
				 	var card ="<li><div class='d-flex justify-content-start align-items-center'><div class='me-2'><span class='datatype'>"+ obj.symbol+"</span><span class='DataMapping_column-title__2yLXi'>"+ obj.colname + "</span></li>";
				 	$("#previewmetadata").append(card);
				}
				

},
error : function(data) {
	console.log(data);
}
});
		
		
	}




	
	
	
	function table_(lists) 
	{
		
		$("#column-cards").empty();
		
		for (var i = 0; i < lists.length; i++) 
		{
		 	var obj = lists[i];
		 	//console.log(obj.colname);
		 	var card = "<div class=\"column-card DataMapping_column-card__2VBWp\" draggable=\"true\" data-field=\"" + obj.colname + "\" data-types=\"" 
		 	+ obj.datatype + "\" id='accordindiv"+i+"'> <span class=\"datatype\">"+ obj.symbol
		 	+ "</span><span class=\"DataMapping_column-title__2yLXi\">"+ obj.colname + "</span></div>";
		 	$("#column-cards").append(card);
		}
		
		$(".column-card").draggable({helper : 'clone'});
		
	}

	
	
	
	
	
	
	
	function barchartSelect()
	{
		$("#menu-toggle").show();
        // $("#sidebar-wrapper").toggle();
     //   $("#wrapper").addClass("toggled");
    
	
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
    
    
    
    function closetab(e){
    	    	//$("#sidebar-wrapper").hide();
    	    	$("#wrapper").addClass("toggled");
    	    	e.stopPropagation();
    }  
	$(document).click(function(){
		
		//$("#wrapper").addClass("toggled");
	})
	
	
    function openModal() 
	{
		
		var tablename = globalselectedtabnlename;
		
		if (tablename =="" || tablename=="0" || tablename == undefined)
		{
			alert("Please select table!");
			return;
		}
		
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

   function openDropCartyaxis(index,event) {
		//alert("gg");
		$("#opencartyaxis"+index).fadeToggle( "fast");
		//event.stopPropagation();
	}
	function closeDropCartyaxis(index,event){
		//alert("hide");
		$("#opencartyaxis"+index).hide();
		//event.stopPropagation();
	}
	
	$(document).click(function(){
		//$(".cb-yaxisdiv").hide();
	});
	function ischeckedfn(value,index){
		//alert("value:::::"+value);
		      if(value=="tonradio"+index+""){
		      $("#topnradiodiv"+index).show();
		      $("#aggregateradiodiv"+index).hide();
		      }
		      else if(value=="aggregateradio"+index+""){
		      $("#topnradiodiv"+index).hide();
		      $("#aggregateradiodiv"+index).show();
		      }
		  }
	function getyaxis(index) 
	{
		$("#displaytopvalue"+index).val();
		$("#bintext"+index).val();
		$("#aggregateval"+index).val();
		var radiocheck=$("input[name='yaxisradio"+index+"']:checked").val();
		
		var others = 0;

		if($("#others"+index).prop( "checked")==false)
		{
			others = 0;
		}
		else 
		{
			others = 1;
		}

		if(radiocheck =="tonradio"+index+"" ){
			if($("#displaytopvalue"+index).val()==''){
				alert("please fill");
				//$("#dropdownshowyaxis").html("topn");
			}
			else{
				$("#opencartyaxis"+index).hide();
				$("#yaxisdivtext"+index).html("topn");
			}
		}
		else if(radiocheck =="aggregateradio"+index+""){
			$("#opencartyaxis"+index).hide();
			$("#yaxisdivtext"+index).html("Aggregate");
		}


		console.log($("#displaytopvalue"+index).val());
		console.log($("#bintext"+index).val());
		console.log($("#aggregateval"+index).val());
		console.log(radiocheck);
		
		$("#btnChart").trigger("click");
		
		
	}
	function openDropCart(index,event) {
	 //alert("gg");
	 $("#opencart"+index).fadeToggle( "fast");
	 event.stopPropagation();
	 
	}
	function closeDropCart(index,event){
	//alert("hide");
	 $("#opencart"+index).hide();
	 event.stopPropagation();
	  
	 }
	$(document).click(function(){
		//alert(index);
	   // $(".cb-xaxisdiv").hide();
	});
	function bintype(index){
		//alert("hi"+$("#bintype").val())
		if($("#bintype"+index).val()=="binsize"){	
					
		}
		else if($("#bintype"+index).val()=="binnumber"){
			
			$("#bincountdiv"+index).show();
			$("#binsize"+index).attr('disabled', 'disabled');
			
		}
	}
	function getxaxis(index) {
		$("#minvalue"+index).val();
		$("#maxvalue"+index).val();
		$("#binsize"+index).val();
		$("#bincount"+index).val();
		
		if($("#binsize"+index).val()=='' && $("#bincount"+index).val()==''){
			alert("please fill bin")
		}
		else{
			$("#opencart"+index).hide();
			$("#xaxisdivtext"+index).html("Bin Type");
		}
		
		
	/* 	
		if($("#bincount"+index).val()==''){
			alert("please fill bin count")
		}
		else{
			$("#opencart"+index).hide();
			$("#xaxisdivtext"+index).html("Bin Type");
		} */
		
		console.log($("#minvalue"+index).val());
		console.log($("#maxvalue"+index).val());
		console.log($("#binsize"+index).val());
		console.log($("#bincount"+index).val());
		
		$("#btnChart").trigger("click");
		
	}
	
	/* $("#minvalue"+index).keyup(function(){
        var initVal = $(this).val();
        console.log("minvalue"+initVal);
    });

  $("#maxvalue"+index).keyup(function(){
        var initVal = $(this).val();
        console.log("maxvalue"+initVal);
    }); */
  
  function binsizekeyup(index){
	  var binsize=$("#binsize"+index).val();
	  console.log("binsize::"+binsize);
	  $("#btnChart").trigger("click");
  }
 
    function minvaluekeyup(index){
  	  var minvalue=$("#minvalue"+index).val();
  	  console.log("minvalue::"+minvalue);
  	 $("#btnChart").trigger("click");
    }
    
    function maxvaluekeyup(index){
    	  var maxvalue=$("#maxvalue"+index).val();
    	  console.log("maxvalue::"+maxvalue);
    	  $("#btnChart").trigger("click");
      }
    
    function bincountkeyup(index){
  	  var bincount=$("#bincount"+index).val();
  	  console.log("bincount::"+bincount);
  	 $("#btnChart").trigger("click");
    }
    
    function displaytopvaluekeyup(index){
    	//alert("hi");
    	  var displaytopvalue=$("#displaytopvalue"+index).val();
    	  console.log("displaytopvalue::"+displaytopvalue);
    	  $("#btnChart").trigger("click");
      }
    
    function filtervaluekeyup(index){
    	//alert("hi");
    	  var displaytopvalue=$("#filtervalueid"+index).val();
    	  console.log("displaytopvalue::"+displaytopvalue);
    	  
    	  if(displaytopvalue !="")
    	  {
    	   	  $("#btnChart").trigger("click");
    	  }
    	  
       }
    function filterinvaluekeyup(index){
    	//alert("hi");
    	  var displaytopvalue=$("#filterinvalueid"+index).val();
    	  console.log("displaytopvalue::"+displaytopvalue);
    	  $("#btnChart").trigger("click");
      }
		function topninput(index){
	    	//alert("hi");
	    	  var displaytopvalue=$("#topninput"+index).val();
	    	  console.log("displaytopvalue::"+displaytopvalue);
	    	  $("#btnChart").trigger("click");
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
		
		function andorChange(index)
		{
			//alert("hi");
			if ($("#filtervalueid"+index).val() !="")
			{
				 $("#btnChart").trigger("click");
			}
		}
			
	function editchart(index){
		//alert("editchart_");
	
		//$("#editchart_"+index)
	
		}	
	
function opennewChartwindow()
{
	 window.open('/CafeBotCharting','_blank' );	
}
	
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
		
/*  $("#binnumber"+index).keyup(function(){
        var initVal = $(this).val();
        console.log("binnumber"+initVal);
    }); */
    </script>

</body>
</html>