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


<c:url value="/menu/selectprop/readnlps" var="readNlp" >
	<c:param name="fileid" value="<%= request.getParameter(\"fileid\") %>"></c:param>
</c:url>

<fmt:message var="doxai" key='label.tab_doxai' />	
<% String valueTemplatedoxai = pageContext.getAttribute("doxai").toString() ; %>

<fmt:message var="schedule" key='label.tab_schedule' />	
<% String valueTemplateschedule = pageContext.getAttribute("schedule").toString() ; %>

           
<link rel="stylesheet" href="<c:url value='/resources/css/cafebot_font_style_new.css'> <c:param name='jsversion' value='1'/>   </c:url>">
<link href="<c:url value='/resources/css/cafebot_left_panel_new.css'> <c:param name='jsversion' value='1'/>   </c:url>" rel="stylesheet">
<link href="<c:url value='/resources/css/cafebot_kendo_style_new.css'> <c:param name='jsversion' value='1'/>   </c:url>" rel="stylesheet"> 


<div class="element-wrapper"  id ="divpython" >

<div class="cb-left-pannelwidth">
    
    <jsp:include page="dataaction.jsp" >
 		<jsp:param name="pagename" value="scoring" />
	</jsp:include>


<!-- <h6 class="element-header" style="padding: 5px;
	font-size: 13px;margin-block-end: 1.5em;">ADD EXPRESSIONS</h6> -->
	<kendo:tabStrip name="tabStripD">
		<kendo:tabStrip-animation>
			<kendo:tabStrip-animation-open effects="fadeIn"></kendo:tabStrip-animation-open>
		</kendo:tabStrip-animation>
		<kendo:tabStrip-activate>
			<script>
				function(e) {
					if($(e.item).find("> .k-link").text()=="Metrics"){
//getMetricsData();
}
}
</script>
</kendo:tabStrip-activate>
<kendo:tabStrip-items>
	<kendo:tabStrip-item text="Milvsinsert" selected="true">
		<kendo:tabStrip-item-content>
			<div class="table-responsive">
				<div class="cb-range-css">
						
						
				<div class="cb-range-form-div">
						<div class="cb-range-Label">
							<span class="label"><div class="cb-range-text"><fmt:message key="label.name" /></div></span> 
							<div>
								<div class="cb-input-css">
									<input type="text" class="form-control" id="tablename"/>							
								</div>
							</div>
						</div>
					</div>	
    				 
    				 
    	


					<div class="cb-range-form-div">
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

                        <div class="cb-range-form-div">
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
                            <div class="form-inline">
                                <div class="cb-form">               
                                    <label class="css-12xei9w">
                                        <input type="checkbox" id="existing_collection"  class="css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0" onchange="existingModel()">
                                        <span class="css-a2zrvp"></span> 
                                        <span class="css-a3753h-Label">  Use Existing Collection</span>               
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="cb-range-form-div" id="overwritediv">
                            <div class="form-inline">
                                <div class="cb-form">               
                                    <label class="css-12xei9w">
                                        <input type="checkbox" id="overwrite_collection"  class="css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0" onchange="existingModel()">
                                        <span class="css-a2zrvp"></span> 
                                        <span class="css-a3753h-Label">  Overwrite Existing Collection</span>               
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="cb-range-form-div" id="namediv" style="display:none">
							<div class="cb-range-Label">
								<span class="label"><div class="cb-range-text">Name</div></span>
							</div> 
							<div>
								<div class="cb-input-css">
									<select  id="name" class="form-control">
										<option value="name">Name</option>              
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

                        <div class="cb-range-form-div">
							<div class="cb-range-Label">
								<span class="label"><div class="cb-range-text">Index Type</div></span>
							</div> 
							<div>
								<div class="cb-input-css">
									<select  id="index_type" class="form-control">
										<option value="FLAT">FLAT</option>  
                                        <option value="IVF_FLAT">IVF_FLAT</option>  
                                        <option value="IVF_SQ8">IVF_SQ8</option>  
                                        <option value="IVF_PQ">IVF_PQ</option>  
                                        <option value="HNSW">HNSW</option>              
                                        <option value="ANNOY">ANNOY</option>  
									</select>
								</div>
							</div>
						</div>

                        <div class="cb-range-form-div">
							<div class="cb-range-Label">
								<span class="label"><div class="cb-range-text">Metric Type</div></span>
							</div> 
							<div>
								<div class="cb-input-css">
									<select  id="metric_type" class="form-control">
										<option value="L2">L2</option>  
                                        <option value="IP">IP</option>  
									</select>
								</div>
							</div>
						</div>
					<%
    					
    					String headerTemplate = "<div class='cb-range-Label'><div class='form-inline'><div class='cb-form'> <label class='css-12xei9w ml-1'><input type='checkbox' name='selectAll' id='selectAll' onchange='selectAll(this.checked)' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 css-1alx95u'>	<span class='css-a2zrvp'></span><span class='css-a3753h-Label ml-1'>  Select All</span> </label></div></div> </div>";
    					
    				%>	
			
								
						
					<div class="cb-range-form-div multiselect-dropdown-css">
						<div class="cb-range-Label">
							<span class="label"><div class="cb-range-text">Select Target Field</div></span> 
						</div>
							<div>
								<div class="cb-input-css"> 
									<kendo:multiSelect name="ddlField" ID="ddlField"  headerTemplate="<%=headerTemplate%>"
									   placeholder="--select--"   change="clearAll"
									dataTextField="columnname" class="form-control kendo-select multiselect-height-css" 
									dataValueField="calvalue" >
									<kendo:dataSource>
										<kendo:dataSource-transport>
											<kendo:dataSource-transport-read url="${readNlp}" type="POST"
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
								</kendo:multiSelect>
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
 
 <script src="<c:url value='/resources/js/customjs/milvsinsert.js'><c:param name='jsversion' value='187778'/>   </c:url>"></script>
  
  