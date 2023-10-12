<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%-- <%@taglib prefix="kendo" uri="http://www.kendoui.com/jsp/tags"%>
<%@taglib prefix="demo" tagdir="/WEB-INF/tags"%> --%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<c:url value="/menu/Users-popup/create" var="createUrl" />
<c:url value="/menu/Users-popup/read" var="readUrl" />
<c:url value="/menu/Users-popup/update" var="updateUrl" />
<c:url value="/menu/Users-popup/destroy" var="destroyUrl" />

<link rel="shortcut icon" type="image/x-icon"
	href="${pageContext.request.contextPath}/resources/images/favicon.ico" />

<!DOCTYPE html>
<html>
<head>
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">

 <script  src="<c:url value='/resources/js/jquery-3.6.0.js'> <c:param name='jsversion' value='11111'/>   </c:url>"></script>	
  		
	 <script src="https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/datatables.net/js/jquery.dataTables.min.js?jsversion=3.1.3"></script>
  		

  		<script src="https://demo.cafebot.ai:8443/cafe-bot/resources/assets/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js?jsversion=3.1.3"></script>
  		<link href="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/nprogress/nprogress.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   
		</c:url>" rel="stylesheet">
		
		 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		 
<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/nprogress/nprogress.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>

<link rel="stylesheet" href="https://demo.cafebot.ai:8443/cafe-bot/resources/css/cafebot_font_style.css?jsversion=5112345">
<link href="https://demo.cafebot.ai:8443/cafe-bot/resources/css/cafebot_left_panel.css?jsversion=yuyu" rel="stylesheet">


<script src="<c:url value='https://demo.cafebot.ai:8443/cafe-bot/resources/js/notify.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>

 
  <link href="<c:url value='/resources/css/fixedColumns.dataTables.css'> <c:param name='jsversion' value='555'/>   </c:url>" rel="stylesheet"> 







  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"></script>

<title> ${title} </title>
<%-- <%@ include file='menuheader.jsp'%> --%>

<!-- <script>
var userscount = ${usercount};
</script> -->
</head>
<body class="full-screen menu-position-side menu-side-left color-scheme-dark">

<div class="container">

							<div class="row">
								<div class="col-sm-12">
				
							
									<!--START - Recent Ticket Comments-->
									<div class="element-wrapper">
										<h6 class="element-header">Dag List</h6>
					
					
				

				<div class="element-box-tp">
					<div class="btn-group">
                        <button class="cb cb-primary"  onclick ="ajaxCall()">All <span class="badge badge-pill badge-light ml-1"  ID="dag_count">57</span></button>
                        <!-- <button class="cb cb-cancel"   onclick ="activeDag()" >Active <span class="badge badge-pill badge-info ml-1">2</span></button>
                        <button class="cb cb-cancel"  onclick ="pauseDag()" >Pause <span class="badge badge-pill badge-info ml-1">55</span></button> -->
					</div>
							<div class="table-responsive">
	
	<table class="table table-bordered" id="dag_table" width="100%" style="width:100%">
      <<thead id="thdata">
												<tr>
												<th>Name</th>
												</tr>
												</thead>
												<tbody id="tddata">
												<tr>
												<td>Name</td>
												</tr>
												</tbody>
    </table>

											</div>
										</div>
									</div>
									<!--END - Recent Ticket Comments-->
								</div>
							</div>
					</div>
					<div aria-hidden="true" aria-labelledby="myLargeModalLabel" class="modal fade bd-example-modal-lg" id="dag_tasklist" role="dialog" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" >
              Task List
            </h5>
            <button aria-label="Close" class="close" data-dismiss="modal" type="button"><span aria-hidden="true"> &times;</span></button>
          </div>
          <div class="modal-body">
          <table class="table table-bordered" id="table_takslist" width="100%" style="width:100%">
                            <thead id="thtaskdata"> 
                                <th>name</th>       
                            </thead>
                            <tbody id="tdtaskdata">
                                
                            </tbody>
                        </table>
          </div>
          
        </div>
      </div>
    </div>		

	 <script src="<c:url value='/resources/js/dag_prop.js'><c:param name='jsversion' value='3ddd45345'/>   </c:url>"></script>
	
<script src="<c:url value='/resources/js/dataTables.fixedColumns.min.js'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>"></script>


	
</body>


</html>