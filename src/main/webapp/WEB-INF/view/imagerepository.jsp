<%@page import="org.springframework.http.HttpRequest"%>
<%@page import="org.springframework.ui.Model"%>
<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%-- <%@taglib prefix="kendo" uri="http://www.kendoui.com/jsp/tags"%>
<%@taglib prefix="demo" tagdir="/WEB-INF/tags"%> --%>
<%@page import="java.util.HashMap"%>

<%-- <c:url value="/upload/async/saveimagefile" var="saveUrl" /> --%>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
  <!-- <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.slim.min.js"></script> -->
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>




<%-- <link href="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/nprogress/nprogress.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>" rel="stylesheet">
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/nprogress/nprogress.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script> --%>
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/notify.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>

<script src="<c:url value='/resources/js/imagerepository.js'><c:param name='jsversion' value='5555'/>   </c:url>"></script> 
<!-- Allow Upload file type  -->
<%
String[] values = {"zip"};
%>

 <div class="cb-router-main-padding">

   <div class="row">

	 <div class="col">
			<p class="d-flex justify-content-end align-items-center">Click here to view List &nbsp;<a href="imagerepository" style="color: inherit; border:1px solid #2c3235;font-size:16px;padding: 3px;" data-toggle="tooltip" title="Show Details"><i class="os-icon os-icon-list"></i><span></span></a> </p>
	 </div>
	
  </div>


<div class="row">
	<div class="col-md-4 col-sm-4 col-xs-12">
		<div class="cb-range-form-div">
			<div class="cb-range-Label">
				
				<!-- <span class="label"><div class="cb-range-text">Structure</div></span> -->
				
				<span class="label"><div class="cb-range-text">Structure <i class="os-icon os-icon-alert-circle ml-2" title="For Model Training"></i></div></span>
				
				
				<div class="cb-input-css">
					<select id="structure" class="form-control" name="structure"></select>
				</div>
			</div>
		</div>
		<div class="cb-range-form-div">
			<div class="cb-range-Label">
				<span class="label"><div class="cb-range-text">Channel</div></span>
				<div class="cb-input-css">
					<select id="channel" class="form-control" name="channel"></select>
				</div>
			</div>
		</div>
		<div class="cb-range-form-div">
			<div class="cb-range-Label">
				<span class="label"><div class="cb-range-text">Media Type</div></span>
				<div class="cb-input-css">
					<select id="mediaType" class="form-control" name="mediaType"></select>
				</div>
			</div>
		</div>
		<div class="cb-range-form-div">
			<div class="cb-range-Label">
				<span class="label"><div class="cb-range-text">File Name</div></span>
				<div class="cb-input-css">
					<input type="text" ID="txtDesImage" placeholder="File Name"	class="form-control" name="txtDesImage" required="required"/>
				</div>
			</div>
		</div>
		
		
		<div class="cb-range-form-div">
			<div class="cb-range-Label">
				<span class="label"><div class="cb-range-text">Repoistiry Type</div></span>
				<div class="cb-input-css">
					<select id="repoType" name="repoType" class="form-control" name="labelselect" onchange="repoChange();">
					<option value="fileserver">File server</option>
					<option value="cafebot">Caf&egrave;Bot S3</option>
					<option value="powescales3">Powerscale S3</option>
					<option value="s3">AWS S3</option>
					
					</select>

				</div>
			</div>
		</div>
		
		
			<div class="cb-range-form-div" style="display: none;" id="connectionDiv">
			<div class="cb-range-Label">
				<span class="label"><div class="cb-range-text">Select Connection</div></span>
				<div class="cb-input-css">
					<select id="connectionList" name="connectionList" class="form-control" >
					</select>

				</div>
			</div>
		</div>
		
		<div class="cb-range-form-div">
			<div class="cb-range-Label">
				<span class="label"><div class="cb-range-text">Label</div></span>
				<div class="cb-input-css">
					<select id="labelselect" class="form-control" name="labelselect" onchange="lableChange();"></select>

				</div>
			</div>
		</div>
		
		<div class="cb-range-form-div" id="txtLabelDiv" style="display: none">
			<div class="cb-range-Label">
				<span class="label"><div class="cb-range-text"><fmt:message key="label.modelname" /></div></span>
				<div>
					<div class="cb-input-css">
						<input type="text" ID="txtLabel" placeholder="Label" class="form-control" name="txtLabel" value=""/> 
					</div>
				</div>
			</div>
		</div>
		
		
		<!-- <div class="cb-range-form-div list_wrapper" id="txtLabelListDiv" style="display: none">
		
			<div class=" mb-2 d-flex align-items-center cb-range-Label">
				<button class="btn btn-primary btn-sm list_add_button mr-2 " type="button"> add<i class="os-icon os-icon-common-03"></i></button>
				<div class=""><span ><div class="cb-range-text">Add Image Label</div></span></div>				
				 
			</div>
			<div id="addlabellist" class="cb-mediamaxheight" style="display: none;"></div>	
			<button class="btn btn-primary btn-sm mr-2" type="button" onclick="getData();">save</button>                
		</div> -->
		
		
		
		
		
		
		<div class="cb-range-Label" >
        <div class="form-inline">
          <div class="cb-form">               
            <label class="css-12xei9w">
              <input type="checkbox" id="addfeature" class="css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0" autocomplete="off" onchange="addfeature()">
              <span class="css-a2zrvp"></span> 
              <span class="css-a3753h-Label">  Add additional feature</span>               
            </label>
          </div>
        </div> 
      </div>



      <div class="cb-range-form-div media_list_wrapper" style="display:none">
        <div class="d-flex  mb-2 align-items-center cb-range-Label">
        <button class="btn btn-primary btn-sm media_list_add_button mr-2" type="button"><i class="os-icon os-icon-common-03"></i></button>
         <div class=""><span><div class="cb-range-text">Click to add New Feature</div></span></div>	 
          
          
          
        <!--   <div class="cb-input-css">
           <input type="text" class="form-control mr-2">
         </div>
         <div class="cb-input-css">
          <select class="form-control mb-2 mb-sm-0" id="columnAdd" name="columnAdd">
            <option value="text">text</option>
            <option value="int">int</option>
            <option value="float">float</option>
            <option value="datetime">datetime</option>
          </select>
        </div> -->
        
        
        
      </div>
      <div id="addmedialist" class="cb-mediamaxheight"  style="display: none;"></div>
      
    </div>
    
    
    
    
		<div class="cb-range-form-div">
			<div class="cb-range-Label">
				<span class="label"><div class="cb-range-text">File(s)</div></span>
				<div class="controls" id="uploadDiv">
							<!-- multiple="false" -->
					<%-- <kendo:upload name="images"  upload="onUploadImage" success="onSuccessImage" dropZone=".dropZoneElement" 
					select="onSelectuploadImage"
					template="
					<span class='k-progress'></span>
					<div class='file-wrapper' style=' max-width: initial;'>
						<span class='file-heading file-name-heading' style='white-space:normal;word-wrap: break-word !important;'>Name: #=name#</span><br>
						<span class='file-heading file-size-heading'>Size: #=size# bytes</span>
						<button type='button' class='k-upload-action cancel-button' ></button>
					</div>
					">
					<kendo:upload-async autoUpload="false" saveUrl="${saveUrl}"	removeUrl="${removeUrl}" />
					<kendo:upload-validation allowedExtensions="<%= values %>" />
					</kendo:upload>
					<div class="demo-hint" style="font-size: 10px;">You can only upload <strong>zip</strong> file.</div> --%>
				</div>
			</div>
		</div>
	</div>
	<div class="col">
		<div class="dropZoneElement">
			<div class="textWrapper">
				<img alt="" src="../resources/images/up.png" onclick="onClickDropZoneImage()">
			</div>
		</div>
	</div>
</div>

</div>

<button class="cb-primary" onclick="openMediaObject()">Open Modal</button>



<div aria-hidden="true" aria-labelledby="mediaobject" class="modal fade"  id="openMediaObject" >
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<h5 class="modal-title">
					Interactive Scoring Table         
				</h5>
				<button class="close"  id="closeMediaObject" onclick="closeMediaObject();" ><span aria-hidden="true"> &times;</span></button>
			</div>

			<div class="modal-body">
			
				<div class="list_wrapper" id="addlabellist" ></div>
		
			</div>
			<div class="modal-footer">
				<button class="cb-primary list_add_button mr-2 " type="button"><i class="os-icon os-icon-common-03"></i> Add New</button>
				<button class="cb-primary mr-2" type="button" onclick="getData();">save</button> 

			</div>

		</div>
	</div>
</div>

