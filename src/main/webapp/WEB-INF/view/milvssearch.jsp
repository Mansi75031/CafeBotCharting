<%@page import="org.springframework.http.HttpRequest"%>
<%@page import="org.springframework.ui.Model"%>
<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%-- <%@taglib prefix="kendo" uri="http://www.kendoui.com/jsp/tags"%>
<%@taglib prefix="demo" tagdir="/WEB-INF/tags"%> --%>
<%@page import="java.util.HashMap"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<c:url value="/menu/selectprop/read" var="readUrl" >
	<c:param name="fileid" value="<%= request.getParameter(\"fileid\") %>"></c:param>
</c:url>


<fmt:setLocale value="${sessionScope.language}"/>
<fmt:setBundle basename="${sessionScope.languagefilebasename}"/>



<c:url value="/menu/selectprop/readallcolDisplay" var="readUrl" >
	<c:param name="fileid" value="<%= request.getParameter(\"fileid\") %>"></c:param>
</c:url>

<fmt:message var="doxai" key='label.tab_doxai' />	
<% String valueTemplatedoxai = pageContext.getAttribute("doxai").toString() ; %>

<fmt:message var="schedule" key='label.tab_schedule' />	
<% String valueTemplateschedule = pageContext.getAttribute("schedule").toString() ; %>

           

     
    
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script> 
   
<%-- <script src="<c:url value='/resources/js/customjs/m.cluster.js'/>"></script> --%>

<link rel="stylesheet" href="<c:url value='/resources/css/cafebot_font_style_new.css'> <c:param name='jsversion' value='1'/>   </c:url>">
<link href="<c:url value='/resources/css/cafebot_left_panel_new.css'> <c:param name='jsversion' value='1'/>   </c:url>" rel="stylesheet">
<link href="<c:url value='/resources/css/cafebot_kendo_style_new.css'> <c:param name='jsversion' value='1'/>   </c:url>" rel="stylesheet"> 

<div class="element-wrapper"  id ="divpython" >

<div class="cb-left-pannelwidth">
    
  <%--   <jsp:include page="dataaction.jsp" >
 		<jsp:param name="pagename" value="scoring" />
	</jsp:include> --%>


<!-- <h6 class="element-header" style="padding: 5px;
	font-size: 13px;margin-block-end: 1.5em;">ADD EXPRESSIONS</h6> -->
<!-- 	<kendo:tabStrip name="tabStripD">
		<kendo:tabStrip-animation>
			<kendo:tabStrip-animation-open effects="fadeIn"></kendo:tabStrip-animation-open>
		</kendo:tabStrip-animation>
		<kendo:tabStrip-activate> -->
			<script>
				function(e) {
					if($(e.item).find("> .k-link").text()=="Metrics"){
//getMetricsData();
}
}
</script>
</kendo:tabStrip-activate>
<kendo:tabStrip-items>
	<kendo:tabStrip-item text="Milvssearch" selected="true">
		<kendo:tabStrip-item-content>
			<div class="table-responsive">
				<div class="cb-range-css">
						
						
				<div class="cb-range-form-div">
						<div class="cb-range-Label">
							<span class="label"><div class="cb-range-text"><fmt:message key="label.name" /></div></span> 
							</div>
							<div>
								<div class="cb-input-css">
									<input type="text" class="form-control" id="tablename"/>							
								</div>
							</div>
						
					</div>	
    				 
    				 
				 <div class="cb-range-form-div">
							<div class="cb-range-Label">
								<span class="label"><div class="cb-range-text">Type</div></span>
							</div> 
							<div>
								<div class="cb-input-css">
									<select  id="type" class="form-control">
										<option value="0">Select</option>  
                                        <option value="Internal Search">Internal Search1</option>               
									</select>
								</div>
							</div>
						</div>  


						<div class="cb-range-form-div" id="embedding_modeldiv">
							<div class="cb-range-Label">
								<span class="label"><div class="cb-range-text">Embedding Model</div></span>
							</div> 
							<div>
								<div class="cb-input-css">
									<select  id="embedding_model" class="form-control">
										<option value="google/vit-base-patch16-224">google/vit-base-patch16-224</option>
										<option value="microsoft/resnet-50">microsoft/resnet-50</option>   
                                        <option value="microsoft/beit-base-patch16-224-pt22k-ft22k">microsoft/beit-base-patch16-224-pt22k-ft22k</option>   
                                        <option value="hustvl/yolos-small">hustvl/yolos-small</option>                
									</select>
								</div>
							</div>
						</div>      

                        <div class="cb-range-form-div" id="batchsizediv">
							<div class="cb-range-Label">
								<span class="label"><div class="cb-range-text">Batch Size</div></span>
							</div>
							<div>
								<div class="cb-input-css">
									<input type="number" class="form-control" id="batch_size" name="batch_size" placeholder="Enter batch size" value="1000">
								</div>
							</div>
						</div>
                        <div class="cb-range-form-div">
							<div class="cb-range-Label">
								<span class="label"><div class="cb-range-text">Vector Database</div></span>
							</div> 
							<div>
								<div class="cb-input-css">
									<select  id="vector_database" class="form-control">
										<option value="Milvs">Milvs</option>              
									</select>
								</div>
							</div>
						</div>

                        <div class="cb-range-form-div">
							<div class="cb-range-Label">
								<span class="label"><div class="cb-range-text">Vector Database Connection</div></span>
							</div> 
							<div>
								<div class="cb-input-css">
									<select  id="vector_database_connection" class="form-control">
										<option value="Milvs">Milvs</option>              
									</select>
								</div>
							</div>
						</div>                        
                        <div class="cb-range-form-div">
							<div class="cb-range-Label">
								<span class="label"><div class="cb-range-text">Name</div></span>
							</div>
							<div>
								<div class="cb-input-css">
									<input type="text" class="form-control" id="name_text" name="name_text" placeholder="Enter name">
								</div>
							</div>
						</div>
						
									       <%
    					
    					String headerTemplate = "<div class='cb-range-Label'><div class='form-inline'><div class='cb-form'> <label class='css-12xei9w ml-1'><input type='checkbox' name='selectAll' id='selectAll' onchange='selectAll(this.checked)' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 css-1alx95u'>	<span class='css-a2zrvp'></span><span class='css-a3753h-Label ml-1'>  Select All</span> </label></div></div> </div>";
    					
    				%>	
			
								
						
					<div class="cb-range-form-div multiselect-dropdown-css">
						<div class="cb-range-Label">
							<span class="label"><div class="cb-range-text">Outhput Field</div></span> 
							</div>
							<div>
								<div class="cb-input-css"> 
									<%-- <kendo:multiSelect name="ddlField" ID="ddlField"  change="clearAll" headerTemplate="<%=headerTemplate%>"
									 itemTemplate="<%=valueTemplatefield%>"  placeholder="--select--" 
									dataTextField="columnname" class="form-control kendo-select multiselect-height-css" 
									dataValueField="id" >
									<kendo:dataSource>
										<kendo:dataSource-transport>
											<kendo:dataSource-transport-read url="${readUrl}" type="POST"
											contentType="application/json" />
											<kendo:dataSource-transport-parameterMap>
												<script>
													function parameterMap(options) {
														return JSON.stringify(options);
													}
												</script>
											</kendo:dataSource-transport-parameterMap>
										</kendo:dataSource-transport>
									</kendo:dataSource>
								</kendo:multiSelect> --%>
							</div>
						</div>					
				</div>	
                        
                        <div class="cb-range-form-div">
												<div class="cb-range-Label">
													<span class="label"><div class="cb-range-text">Limit</div></span>
												</div>
												<div style="position:relative">
													<div class="cb-input-css align-items-center " >
														<input type="range" id="limit" name="limit" min="1" max="100" value="10" step="1" style="background:linear-gradient(to right, rgb(61, 113, 217) 0%, rgb(61, 113, 217) 9.09091%, rgba(204, 204, 220, 0.3) 9.09091%, rgba(204, 204, 220, 0.3) 100%)"> 
														<input type="number" class="form-control css-number-range" id="limit_value" name="limit_value" min="1" max="100" value="10" step="1">  
														<div class="cb-slider-step">           
															<div class="css-dot css-first-circle"></div>
															<div class="css-dot css-second-circle"></div>  
														</div>
													</div> 
													<div class="cb-slider-mark">
														<span class="cb-slider-mark-text" >1</span>
														<span class="cb-slider-mark-text" >100</span>
													</div>
												</div>
											</div>

                                             <div class="cb-range-form-div">
												<div class="cb-range-Label">
													<span class="label"><div class="cb-range-text">Threshold</div></span>
												</div>
												<div style="position:relative">
													<div class="cb-input-css align-items-center " >
														<input type="range"  id="threshold" name="threshold" value="50" min="50" max="100" step="1" > 
														<input type="number" class="form-control css-number-range" id="threshold_value" name="threshold_value" min="50" max="100" value="50" step="1">  
														<div class="cb-slider-step">           
															<div class="css-dot css-first-circle"></div>
															<div class="css-dot css-second-circle"></div>  
														</div>
													</div> 
													<div class="cb-slider-mark">
														<span class="cb-slider-mark-text" >50</span>
														<span class="cb-slider-mark-text" >100</span>
													</div>
												</div>
											</div>
                        <div class="cb-range-form-div">
							<div class="cb-range-Label">
								<span class="label"><div class="cb-range-text">Batches</div></span>
							</div>
							<div>
								<div class="cb-input-css">
									<input type="number" class="form-control" id="batches" name="batches" placeholder="Enter batchs value" value="10" min="1" step="1">
								</div>
							</div>
						</div>
                        <div class="cb-range-form-div">
							<div class="cb-range-Label">
								<span class="label"><div class="cb-range-text">Expression</div></span>
							</div>
							<div>
								<div class="cb-input-css">
									<input type="number" class="form-control" id="expression" name="expression" placeholder="Enter expreesion value" value="0" step="1">
								</div>
							</div>
						</div>
					

				
				
				<div class="cb-range-Label cb-button-layout">
					<input type="button" ID="btnDBExecute" name="btnDBExecute" class="cb-primary" 
					onclick="btnFilterClick()" value="<fmt:message key="label.save"/>" />

					<input type="hidden" class="form-control" value="0" style="width: 70%;" id="txtFilterID"/>

					<button ID="btnPyExecute" name="btnPyExecute" class="cb-cancel" 
					onclick="Execute(1)"><i class="fa fa-play"></i> <fmt:message key="label.publish"/></button>	
					<button class="cb-cancel" id="executeicon" onclick="checkClusterStatus();">		
						<i  class="os-icon os-icon-alert-octagon"></i>	</button>
<!--  <button ID="btnPyExecuteChart" name="btnPyExecuteChart" class="cb-cancel" onclick="ExecuteChart()"><i class="fa fa-play"></i> <fmt:message key="label.chart"/></button>	 -->
</div>	


					
				</div>
			</div>
		</kendo:tabStrip-item-content>
	</kendo:tabStrip-item>
	
<%-- <kendo:tabStrip-item text="<%=valueTemplateschedule%>">
	<kendo:tabStrip-item-content>
				<div class="cb-range-css">
			<div class="form-inline">
				<div class="cb-form">
					<label class="cb-form-label cb-margin-left width-7"><fmt:message key="label.workflowasapi" /></label>
					<div class="cb-form-switch">
						<div class="css-wtrf37">
							<input type="checkbox" id="isworkflow">
							<label for="isworkflow"></label>
						</div>
					</div>
				</div>
			</div>
			<div class="cb-range-form-div" id="fileFlowId" style="display: none;">
				<div class="cb-range-Label">		
					<div>
						<div class="cb-input-css">
							<input  class="form-control" value="" name="fileFlowId" id="fileFlowId"/>
						</div>
					</div>
				</div>
			</div>

			<div class="form-inline">
				<div class="cb-form">
					<label class="cb-form-label cb-margin-left width-7"><fmt:message key="label.schedule" /></label>
					<div class="cb-form-switch">
						<div class="css-wtrf37">
							<input type="checkbox" id="isschedule">
							<label for="isschedule"></label>
						</div>
					</div>
				</div>
			</div>

			<div>

				<div class="cb-range-Label">
					<div class="cb-range-text cron-heading"><fmt:message key="label.crontime" /></div>
				</div>

				<div class="cb-range-form-div">
					<div class="cb-range-Label">
						<div class="cb-input-css">
							<div id="cron-selector" class="cron-builder"></div>
						</div>
						<div>
							<div class="cb-input-css">
								<input id = "jobtime" type="text" class="form-control value-span">
								<span class="badge badge-dark" style="font-size: x-large;margin-left: 3px;"  data-toggle="tooltip" 
								data-placement="left" title=""  id="cronsummary">
								<i class="os-icon os-icon-alert-circle"></i></span>
							</div>
						</div>
					</div>
				</div>
				<div class="cb-range-form-div">
					<div class="cb-range-Label">
						<span class="label"><div class="cb-range-text"> <fmt:message key="label.daterange" /></div></span>
						<div>
							<div class="cb-input-css">
								<input  id="dtrange" name="dtrange" type="text" class="form-control"/>		
							</div>
						</div>
					</div>
				</div> 

				<div class="cb-range-Label cb-button-layout">

					<input type="button" ID="btnSchedule" name="btnSchedule" class="cb-primary" onclick="updateIsShceduled(1)" value="<fmt:message key="label.save"/>" style="display: none;" />

                     

				</div>

			</div>
		</div>


</kendo:tabStrip-item-content>
</kendo:tabStrip-item> --%>
	
	
</kendo:tabStrip-items>
</kendo:tabStrip>

</div>

</div>
 
 <script src="<c:url value='/resources/js/customjs/milvssearch.js'><c:param name='jsversion' value='187778'/>   </c:url>"></script>
  
  