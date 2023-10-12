<%@page import="org.springframework.http.HttpRequest"%>
<%@page import="org.springframework.ui.Model"%>
<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%-- <%@taglib prefix="kendo" uri="http://www.kendoui.com/jsp/tags"%>
<%@taglib prefix="demo" tagdir="/WEB-INF/tags"%> --%>
<%@page import="java.util.HashMap"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>



<fmt:setLocale value="${sessionScope.language}"/>
<fmt:setBundle basename="${sessionScope.languagefilebasename}"/>

<fmt:message var="isegment" key='label.tab_isegment' />	
<% String valueTemplateisegment = pageContext.getAttribute("isegment").toString() ; %>


<fmt:message var="schedule" key='label.tab_schedule' />	
<% String valueTemplateschedule = pageContext.getAttribute("schedule").toString() ; %>



<c:url value="/menu/selectprop/readallcolDisplayIntNTextCol" var="readUrl_Int_n_text">
	<c:param name="fileid" value="<%=request.getParameter(\"fileid\")%>"></c:param>
</c:url>


<c:url value="/menu/selectprop/read" var="readUrl" >
	<c:param name="fileid" value="<%= request.getParameter(\"fileid\") %>"></c:param>
</c:url>



<c:url value="/menu/selectprop/readnumericcolonly" var="readUrlNumeric" >
	<c:param name="fileid" value="<%= request.getParameter(\"fileid\") %>"></c:param>
</c:url>


<c:url value="/menu/filterprop/read" var="readcomp" >
	<c:param name="fileid" value="<%= request.getParameter(\"fileid\") %>"></c:param>
	<c:param name="componentid" value="<%= request.getParameter(\"componentid\") %>"></c:param>
</c:url>

<c:url value="/menu/selectprop/readsequence" var="readUrlsequence">
	<c:param name="fileid" value="0"></c:param>
</c:url>

<c:url value="/menu/selectprop/update" var="updateUrl" />


<script src="https://cdn.plot.ly/plotly-latest.min.js"></script> 



<%-- <script src="<c:url value='/resources/js/customjs/m.cluster.js'/>"></script> --%>
<link rel="stylesheet" href="<c:url value='/resources/css/cafebot_font_style_new.css'> <c:param name='jsversion' value='1'/>   </c:url>">
<link href="<c:url value='/resources/css/cafebot_left_panel_new.css'> <c:param name='jsversion' value='1'/>   </c:url>" rel="stylesheet">
<link href="<c:url value='/resources/css/cafebot_kendo_style_new.css'> <c:param name='jsversion' value='1'/>   </c:url>" rel="stylesheet"> 

<style>

  @media only-screen (max-width:400px) {
	#cont2 {
		displ
	} 
}
.k-tabstrip>.k-content {
	overflow-y: auto !important;
	/*  overflow-x: hidden !important; */
}
</style>


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
	<kendo:tabStrip-item text="Cafebot GPT" selected="true">
		<kendo:tabStrip-item-content>
			
				<div class="cb-range-css">		           

							<div class="cb-range-form-div">
								<div class="cb-range-Label">
									<span class="label"><div class="cb-range-text"><fmt:message key="label.tablename" /></div></span>
								</div>
									<div>
										<div class="cb-input-css">
											<input type="text" class="form-control" id="tablename"/>		
										</div>
									</div>								
							</div>	



							<%
							String valueTemplate = "<img alt='' style='filter: invert(94%) sepia(1%) saturate(0%) hue-rotate(175deg) brightness(93%) contrast(91%);' src='../resources/assets/img/datatypeicon/#:data.datatype#.svg'>&nbsp;&nbsp;&nbsp;&nbsp;<span>#:data.columnname#</span>";
						%>	  

						<div class="cb-range-form-div" >
							<div class="cb-range-Label">
								<span class="label"><div class="cb-range-text"><fmt:message key="label.selecttargetfield" /></div></span>
							</div>
								<div>
									<div class="cb-input-css">


										<kendo:dropDownList name="ddlField" ID="ddlField"  filter="contains"  
										template="<%=valueTemplate%>"	minLength="1" optionLabel="--select--"
										dataTextField="columnname" class="form-control kendo-select" dataValueField="id">
										<kendo:dataSource>
											<kendo:dataSource-transport>
												<kendo:dataSource-transport-read url="${readUrl_Int_n_text}" type="POST"
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
									</kendo:dropDownList>


								</div>
							</div>						
					</div>

					<div class="cb-range-form-div">
						<div class="cb-range-Label">
							<span class="label"><div class="cb-range-text">Mode</div></span>
						</div>
							<div>
								<div class="cb-input-css">
							
									<select id="mode" class="form-control kendo-select" onchange="rotateChange();"> 
										<option value="0">--select--</option>
										<option value="complete">Complete</option>
										<option value="chat">Chat</option>
									</select> 
								</div>
							</div>						
					</div>


						<div class="cb-range-form-div">
							<div class="cb-range-Label">
								<span class="label"><div class="cb-range-text">Model</div></span>
							</div>
								<div>
									<div class="cb-input-css">									
										<select id="modelselect" class="form-control kendo-select" onchange="rotateChange();"> 
											<option value="0">--select--</option>
											<option value="1">text-ada-001</option>
											<option value="2">text-curie-001</option>
											<option value="3">text-davinci-003</option>
										</select> 
									</div>
								</div>							
						</div>				
					
					
					
					<div class="cb-range-form-div">
								<div class="cb-range-Label">
									<span class="label"><div class="cb-range-text">Temperature</div></span>
								</div>
								<div style="position:relative">
									<div class="cb-input-css align-items-center ">
										<input type="range" id="temperature" name="temperature" min="0" max="1" value="0" step="0.01"> 
										<input type="number" class="form-control css-number-range" id="temperature_value"  min="0" max="1" value="0" step="0.01">    
										<div class="cb-slider-step">           
											<div class="css-dot css-first-circle"></div>
											<div class="css-dot css-second-circle"></div>  
										</div> 
									</div>
									<div class="cb-slider-mark">
										<span class="cb-slider-mark-text" >0</span>
										<span class="cb-slider-mark-text" >1</span>
                                    </div>
								</div>
							</div>
					
					

					
					<div class="cb-range-form-div">
									<div class="cb-range-Label">
										<span class="label"><div class="cb-range-text">Maximum length</div></span>
									</div>
									<div style="position:relative">
										<div class="cb-input-css align-items-center " >
											<input type="range" id="maximum_length" name="maximum_length"  min="1" max="4000" value="1" step="1" > 
											<input type="number" class="form-control css-number-range" id="maximum_lengthvalue"  min="1" max="4000" value="1" step="1">  

											<div class="cb-slider-step">           
												<div class="css-dot css-first-circle"></div>
												<div class="css-dot css-second-circle"></div>  
											</div> 
										</div>
										<div class="cb-slider-mark">
											<span class="cb-slider-mark-text" >1</span>
											<span class="cb-slider-mark-text" >4000</span>
                                        </div>
									</div>

								</div>
					
					
								       <%
    					String valueTemplatefield = "<img alt='' style='filter: invert(94%) sepia(1%) saturate(0%) hue-rotate(175deg) brightness(93%) contrast(91%);' src='../resources/assets/img/datatypeicon/#:data.datatype#.svg'>&nbsp;&nbsp;&nbsp;&nbsp;<span>#:data.columnname#</span>";
    					
    					String headerTemplate = "<div class='cb-range-Label'><div class='form-inline'><div class='cb-form'> <label class='css-12xei9w ml-1'><input type='checkbox' name='selectAll' id='selectAll' onchange='selectAll(this.checked)' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 css-1alx95u'>	<span class='css-a2zrvp'></span><span class='css-a3753h-Label ml-1'>  Select All</span> </label></div></div> </div>";
    					
    				%>	
			
								
						
					<div class="cb-range-form-div multiselect-dropdown-css">
						<div class="cb-range-Label">
							<span class="label"><div class="cb-range-text">Stop Sequence(s)</div></span> 
						</div>
							<div>
								<div class="cb-input-css"> 
									<kendo:multiSelect name="ddlFieldSequence" ID="ddlFieldSequence"  change="clearAll" headerTemplate="<%=headerTemplate%>"
									 itemTemplate="<%=valueTemplatefield%>"  placeholder="--select--" 
									dataTextField="columnname" class="form-control kendo-select multiselect-height-css" 
									dataValueField="id" >
									<kendo:dataSource>
										<kendo:dataSource-transport>
											<kendo:dataSource-transport-read url="${readUrlsequence}" type="POST"
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
					
				<!--	<div class="cb-range-form-div">
								<div class="cb-range-Label">
									<span class="label"><div class="cb-range-text">Stop Sequence(s)</div></span>
									<div>
										<div class="cb-input-css">
											<input type="text" class="form-control" id="stopseq"/>		
										</div>
									</div>
								</div>
							</div>	-->
					
					
					
					<div class="cb-range-form-div">
										<div class="cb-range-Label">
											<span class="label"><div class="cb-range-text">Top P</div></span>
										</div>
										<div style="position:relative">
											<div class="cb-input-css align-items-center " >
												<input type="range" id="top_p" name="top_p" min="0" max="1" value="0" step="0.01" > 
												<input type="number" class="form-control css-number-range" id="topp_value" name="topp_value" min="0" max="1" value="0" step="0.01">  
												<div class="cb-slider-step">           
													<div class="css-dot css-first-circle"></div>
													<div class="css-dot css-second-circle"></div>  
												</div>
											</div> 
											<div class="cb-slider-mark">
												<span class="cb-slider-mark-text" >0</span>
												<span class="cb-slider-mark-text" >1</span>
											</div>
										</div>
					</div>
					
		<div class="cb-range-form-div">
										<div class="cb-range-Label">
											<span class="label"><div class="cb-range-text">Frequency Penalty</div></span>
										</div>
										<div style="position:relative">
											<div class="cb-input-css align-items-center " >
												<input type="range" id="freqpenalty_compress" name="freqpenalty_compress" min="0" max="2" value="0" step="0.01"  > 
												<input type="number" class="form-control css-number-range" id="freqpenalty_compress_value" name="freqpenalty_compress_value" min="0" max="2" value="0" step="0.01" >  
												<div class="cb-slider-step">           
													<div class="css-dot css-first-circle"></div>
													<div class="css-dot css-second-circle"></div>  
												</div> 
											</div>
											<div class="cb-slider-mark">
												<span class="cb-slider-mark-text" >0</span>
												<span class="cb-slider-mark-text" >2</span>
											</div>
										</div>
									</div>			
					
				<div class="cb-range-form-div">
										<div class="cb-range-Label">
											<span class="label"><div class="cb-range-text">Presence Penalty</div></span>
										</div>
										<div style="position:relative">
											<div class="cb-input-css align-items-center " >
												<input type="range" id="prespenalty_compress" name="prespenalty_compress" min="0" max="2" value="0" step="0.01" > 
												<input type="number" class="form-control css-number-range" id="prespenalty_compress_value" name="prespenalty_compress_value" min="0" max="2" value="0" step="0.01">  
												<div class="cb-slider-step">           
													<div class="css-dot css-first-circle"></div>
													<div class="css-dot css-second-circle"></div>  
												</div>
											</div>
											<div class="cb-slider-mark">
												<span class="cb-slider-mark-text" >0</span>
												<span class="cb-slider-mark-text" >2</span>
											</div>
										</div>
									</div>			
					
					
		<div class="cb-range-form-div">
										<div class="cb-range-Label">
											<span class="label"><div class="cb-range-text">Best OF</div></span>
										</div>
										<div style="position:relative">
											<div class="cb-input-css align-items-center " >
												<input type="range" id="bestof_compress" name="bestof_compress" min="0" max="20" value="0" step="1"> 
												<input type="number" class="form-control css-number-range" id="bestof_compress_value" name="bestof_compress_value" min="0" max="20" value="0" step="1">  
												<div class="cb-slider-step">           
													<div class="css-dot css-first-circle"></div>
													<div class="css-dot css-second-circle"></div>  
												</div>
											</div>     
											<div class="cb-slider-mark">
												<span class="cb-slider-mark-text" >0</span>
												<span class="cb-slider-mark-text" >20</span>
											</div>
										</div>
									</div>					
					
					
							<div class="cb-range-form-div">
								<div class="cb-range-Label">
									<span class="label"><div class="cb-range-text">Inject Start  Text</div></span>
								</div>
									<div>
										<div class="cb-input-css">
											<input type="text" class="form-control" id="starttext" name="starttext"/>		
										</div>
									</div>								
							</div>	
							
							
							<div class="cb-range-form-div">
								<div class="cb-range-Label">
									<span class="label"><div class="cb-range-text">Inject Restart  Text</div></span>
								</div>
									<div>
										<div class="cb-input-css">
											<input type="text" class="form-control" id="restarttext" name="restarttext"/>		
										</div>
									</div>								
							</div>						
					
					
					
					<div class="cb-range-form-div" >
						<div class="cb-range-Label">
							<span class="label"><div class="cb-range-text">Show Probabilities</div></span>
						</div>
							<div>
								<div class="cb-input-css">
									<select id="probabilities" name="probabilities" class="form-control kendo-select" onchange="onChangeblurring();">
										<option value="0">--select--</option>
										<option value="mostlike">Most Likely</option>
								<!-- 		<option value="averaging">Averaging Blurring</option>
										<option value="Gaussian Blurring">Gaussian Blurring</option>
										<option value="Median Blurring">Median Blurring</option>
										<option value="Bilateral Blurring">Bilateral Blurring</option> -->
									</select>             
								</div>
							</div>						
					</div>
				
					
					

					<div class="cb-button-layout">
						<input type="button" id="btnDBExecute" name="btnDBExecute" class="cb-primary" onclick="btnFilterClick()" value="<fmt:message key='label.save' />" >

						<input type="hidden" class="form-control" value="0" style="width: 70%;" id="txtFilterID"/>


			<!--		<button ID="btnReset" name="btnReset" class="cb-cancel" 
						onclick="resetAllsettings()"> <fmt:message key="label.reset"/></button>	-->

						<button ID="btnPyExecute" name="btnPyExecute" class="cb-cancel" 
						onclick="Execute(1)"><i class="fa fa-play"></i> <fmt:message key="label.publish"/></button>				

						<button class="cb-cancel" id="executeicon" onclick="checkClusterStatus();">
							<i  class="os-icon os-icon-alert-octagon cb-alert" ></i></button>	
							
							
						</div>
					</div>
			

					

		</kendo:tabStrip-item-content>
	</kendo:tabStrip-item>
	
<%-- 	<kendo:tabStrip-item text="<%=valueTemplateschedule%>"   >
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

	<jsp:include page="media_display.jsp" >
		<jsp:param name="pagename" value="input" />
	</jsp:include>
</div>

</div>

<script src="<c:url value='/resources/js/customjs/cafebot_gpt.js'><c:param name='jsversion' value='44'/>   </c:url>"></script>



