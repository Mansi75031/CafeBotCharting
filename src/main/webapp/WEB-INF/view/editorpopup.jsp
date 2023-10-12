<%@page import="org.springframework.http.HttpRequest"%>
<%@page import="org.springframework.ui.Model"%>
<%@page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@taglib prefix="kendo" uri="http://www.kendoui.com/jsp/tags"%>
<%@taglib prefix="demo" tagdir="/WEB-INF/tags"%>
<%@page import="java.util.HashMap"%>
<link rel="shortcut icon" type="image/x-icon"
href="${pageContext.request.contextPath}/resources/images/favicon.ico" />

<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %> 


<!DOCTYPE html>
<html>
<head>
  <title>${title}</title>

  <link rel="stylesheet" href="<c:url value='/resources/css/bootstrap_datetimepicker.css'> <c:param name='jsversion' value='1eerer1'/>   </c:url>">

 <script src="<c:url value='/resources/js/custom_jquery/bootstrap_datetimepicker.min.js'><c:param name='jsversion' value='tterererer'/>   </c:url>"></script>

  <link rel="stylesheet" href="<c:url value='/resources/css/cafebot_custom-style.css'><c:param name='jsversion' value='44532235'/>   </c:url>">
  
  <%--   <link href="<c:url value='/resources/css/cafebot_left_panel.css'> <c:param name='jsversion' value='${sessionScope.jsversion}'/>   </c:url>" rel="stylesheet"> --%>
  <style>

    .tooltip.show {
      opacity: 1;
      z-index: 99999;         
    }

    .k-grid tbody .k-button {
     min-width: 47px;
   }

   .mojowindow {
     float: left;
     margin: 30px 30px 120px 30px;
     text-align: center;
   }

   .armchair img {
     display: block;
     margin-bottom: 10px;
   }

   .k-window-content p {
     margin-bottom: 1em;
   }

   .k-window-content a {
     color: #BBB;
   }
   div.k-window-content{
    padding: 0;
  }
  @media screen and (max-width: 1023px) {
   div.k-window {
    display: none !important;
  }
}


/* Remove default bullets */
ul, #formulaUl {
  list-style-type: none;
}

/* Remove margins and padding from the parent ul */
#formulaUl {
  margin: 0;
  padding: 0;
}

/* Style the caret/arrow */
.caret {
  cursor: pointer;
  user-select: none; /* Prevent text selection */
}

/* Create the caret/arrow with a unicode, and style it */
.caret::before {
  content: "\25B6";
  color: #faecec;
  display: inline-block;
  margin-right: 4%;
}

/* Rotate the caret/arrow icon when clicked on (using JavaScript) */
.caret-down::before {
  transform: rotate(90deg);
}

/* Hide the nested list */
.nested {
  display: none;
}

/* Show the nested list when the user clicks on the caret/arrow (with JavaScript) */
.active {
  display: block;
}
.nav-item {
    background: none;
    border-style: hidden;
    border-width: 0;
}
.cb-calender-set-button{
margin-top: 396px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.bootstrap-datetimepicker-widget.dropdown-menu:before, .bootstrap-datetimepicker-widget.dropdown-menu:after{
content:none;
}
.bootstrap-datetimepicker-widget.dropdown-menu{
	left:8% !important;
}
</style>

</head>
<body class="menu-position-side menu-side-left full-screen color-scheme-dark" style="zoom: 0.92;    height: 100vh;">
  <fmt:setLocale value="${sessionScope.language}"/>
  <fmt:setBundle basename="${sessionScope.languagefilebasename}"/>
  
  
  <div class="all-wrapper no-padding-content with-side-panel solid-bg-all">
    <input type="hidden" ID="fileid" name="fileid" value="${fileid}" />
    <input type="hidden" ID="flagpage" name="flagpage" value="${flagpage}" />
    <input type="hidden" ID="inputID" name="inputID" value="${inputID}" />

    <div class="layout-w"> 

      <div class="content-w">
        <div class="content-i">
          <div class="content-box">
            <div class="todo-app-w">
              
              <div class="colum-panel desktopview">
                <div class="column-sidebar">                  

                  <div class="flavor">
                    <div class="row" style="margin-left: 0px;">
                     <div  style="width: 80%;">
                      <input style="width: 100%" type="text" placeholder="search column in display list...." id="columnsearch" class="form-control">
                    </div>

                  </div>
                  <br>
                  
                  <h5 class="editor-heading">
                  Column List</h5>
                </div>
                <div  class="todo-sidebar-section-contents column-height">
                 <ul id="optionalColumn" class="projects-list column-list">
                 </ul>
               </div>	
             </div>
           </div>
           
           <div class="sidenav" id="mySidenav">
            <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
            
            
            <div class="column-sidebar">
              <div class="flavor"><h5 class="editor-heading"> Column</h5>

              </div>

              <div  class="todo-sidebar-section-contents column-height">  
               <ul id="optionalColumn_2" class="projects-list column-list">
               </ul>
             </div> 

           </div>

         </div>



         <span class="mobileview" onclick="openNav()">&#9776;</span>
         <!--END - To Do SIDEBAR-->
         <div class="todo-content todos" id="main">  
          <div class="row">
            <div class="testing-string clearfix">
              <div class="all-tasks-w">
                <div class="tasks-section">
                  <div class="mb-0 mt-0">                  
                    <h5 class="form-header editor-heading">

                    </h5>
                   <!--  <div class="form-desc">
                      Write here... 
                    </div> -->

                    <pre id="filtervaluepopup"    style="max-width:90%;min-width:300px;height:200px;text-transform:initial;"     > </pre>

                    <%-- <div class="reset-button">
                      <div class="todo-sidebar-section-contents">
                       <button type="button" onclick="cleareditorTxt()" class="cb-cancel"><fmt:message key="label.reset" /></button>
                       <button type="button" onclick="saveeditorTxt()" class="cb-cancel"> <fmt:message key="label.okbtn" /> </button>
                     </div>
                   </div>      --%>
                   
                   <div class="cb-button-layout">
                    <button type="button" onclick="saveeditorTxt()" class="cb-primary"> <fmt:message key="label.okbtn" /> </button>
                    <button type="button" onclick="cleareditorTxt()" class="cb-cancel" ><fmt:message key="label.reset" /></button>

                  </div>



                </div>
                <div class="mb-0 mt-0">  
                 <ul class="airthmetic-list">
                  <li class="btn btn-sm btn-secondary col-md-1 col-sm-1 col-xs-1 mr-2 mb-2">
                   <a href="javascript:void(0)" ondblclick="btnControl('+')">
                    <div class="icon-w">
                      <div class="os-icon os-icon-common-03 os-icons"></div>
                    </div>
                  </a> 
                </li>
                <li class="btn btn-sm btn-secondary col-md-1 col-sm-1 col-xs-1 mr-2 mb-2">
                 <a href="javascript:void(0)" ondblclick="btnControl('-')">
                  <div class="icon-w">
                    <div class="os-icon os-icon-minus2 os-icons"></div>
                  </div> 
                </a>   
              </li>
              <li class="btn btn-sm btn-secondary col-md-1 col-sm-1 col-xs-1 mr-2 mb-2">
               <a href="javascript:void(0)" ondblclick="btnControl('>')" >
                <div class="icon-w">
                  <div class="os-icon os-icon-chevron-right os-icons"></div>
                </div>   
              </a> 
            </li>
            <li class="btn btn-sm btn-secondary col-md-1 col-sm-1 col-xs-1 mr-2 mb-2">
             <a href="javascript:void(0)" ondblclick="btnControl('<')" >
              <div class="icon-w">
                <div class="os-icon os-icon-chevron-left os-icons"></div>
              </div>    
            </a>  
          </li>                          
          <li class="btn btn-sm btn-secondary col-md-1 col-sm-1 col-xs-1 mr-2 mb-2">
           <a href="javascript:void(0)" ondblclick="btnControl('/')" >
            <div class="icon-w">
              <div class="os-icon os-icon-divide os-icons"></div>
            </div> 
          </a> 
        </li>
        <li class="btn btn-sm btn-secondary col-md-1 col-sm-1 col-xs-1 mr-2 mb-2">
         <a href="javascript:void(0)" ondblclick="btnControl('*')">
          <div class="icon-w">
            <div class="os-icon os-icon-multiplication os-icons"></div>
          </div>  
        </a>   
      </li>
      <li class="btn btn-sm btn-secondary col-md-1 col-sm-1 col-xs-1 mr-2 mb-2">
        <a href="javascript:void(0)" ondblclick="btnControl('=')" >
          <div class="icon-w">
            <div class="os-icon os-icon-equal os-icons"></div>
          </div>  
        </a> 
      </li>
      <li class="btn btn-sm btn-secondary col-md-1 col-sm-1 col-xs-1 mr-2 mb-2">
        <a href="javascript:void(0)" ondblclick="btnControl('|')">
          <div class="icon-w">
            <div class="os-icon os-icon-or os-icons"></div>
          </div>  
        </a> 
      </li>
      <li class="btn btn-sm btn-secondary col-md-1 col-sm-1 col-xs-1 mr-2 mb-2">
       <a href="javascript:void(0)" ondblclick="btnControl('!')">
        <div class="icon-w">
          <div class="os-icon os-icon-excla os-icons"></div>
        </div>  
      </a>  
    </li>
    <li class="btn btn-sm btn-secondary col-md-1 col-sm-1 col-xs-1 mr-2 mb-2">
      <a href="javascript:void(0)" ondblclick="btnControl('!')">
        <div class="icon-w">
          <div class="os-icon os-icon-single os-icons"></div>
        </div>  
      </a>  
    </li>
  </ul>
</div>
</div>

<!-- <div class="tasks-section">
  <div class="mb-0 mt-0">        
    <h5 class="form-header editor-heading">
      Details
    </h5>
    <div class="form-desc">
      An explanation of your regex will be automatically generated as you type.
    </div>        
  </div>

</div> -->
</div>

</div>

<div class="explanation">

  <div class="forl">

    <div class="mb-2">
     <ul class="nav nav-tabs nav-listing" role="tablist" >
      <li class="nav-item ">
        <a class="nav-link text-body-1 active" data-toggle="tab" href="#expression">Formula</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link text-body-1" data-toggle="tab" href="#regx">Regx</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link text-body-1" data-toggle="tab" href="#datetime">Datetime</a>
      </li>
    </ul>
  </div>
  <div class="tab-content">
    <div id="expression" class="tab-pane active">

      <div class="cb-range-form-div">
        <div class="cb-range-Label">

          <div>
            <div class="cb-input-css">
             <input type="text" placeholder="search formula in display list...." id="formulasearch" class="form-control">
           </div>
         </div>
       </div>
     </div>

     <div class="cb-range-form-div">
      <div class="cb-range-Label">

        <div>
          <div class="cb-input-css">
            <select class="form-control" onchange="getFormulalist();" id="selectid">
             <!--  <option value="1" selected> Aggregate Function </option> -->
             <option value="0">  --select formula--  </option>
             <option value="1" selected> All  </option>    
             <option value="2">  DateTime   </option>    
             <option value="3" > Table Functions   </option>    
             <option value="4" > Dictionaries   </option>    
             <option value="5" > Data Types   </option>    
             <option value="6" > Operators   </option>
             <option value="7" > Conditional   </option> 
             <option value="8" > Mathematical Functions  </option>      
			<option value="9"> Generic Conversion</option>
			<option value="10">  String   </option> 
           </select>
         </div>
       </div>
     </div>
   </div>


   <div class="formulas" id="explanations"> 

    <ul id="formulalist" class="formula-list"></ul>
  </div>
</div>

<div id="regx" class="tab-pane">
 

    <div class="cb-range-form-div">
     <div class="cb-range-Label">
      <div>
        <div class="cb-input-css">
          <input type="text" placeholder="search pattern in display list...." id="patternsearch" class="form-control">
        </div>
      </div>
    </div>
  </div>
  
  
  <div class="cb-range-form-div">
    <div class="cb-range-Label">

      <div>
        <div class="cb-input-css">
         <select class="form-control" onchange="getRegexList(1);" id="selectregexid">
          <option value="0" >All</option>
          <option value="1"> Digits   </option>    
          <option value="2" > Alphanumeric Characters   </option>    
          <option value="3" > Email   </option>    
          <option value="4" > Password Strength   </option>    
          <option value="5" > Username   </option>
          <option value="6" > URL   </option> 
          <option value="7">IP Address</option>      
          <option value="8">Dates</option>
          <option value="9">Time</option>
          <option value="10">HTML Tags</option>
          <option value="11">Javascript Handlers</option>
          <option value="12">Slug</option>
          <option value="13">Match Duplicates in a String</option>
          <option value="14">Phone Numbers</option>
          <option value="15"> File Path</option>
          
        </select>
      </div>
    </div>
  </div>
</div>


	<div class="formulas" id="regxdiv"> 
	
	    <ul id="regexlist" class="formula-list"></ul>
	  </div>


	<!-- <div  class="regex-list">
	 <ul id="regexlist" class="listingregex">
	 </ul>
	</div>  -->

</div>



		<div id="datetime" class="tab-pane" >
		<div class="mt-2">
		  <div class="cb-range-Label">
		 <!-- <span class="label"><div class="cb-range-text">Date</div></span> -->
		      <div>
		        <div class="cb-input-css" style="position:relative">
		          <input type="hidden" name="datetimepicker_" id="datetimepicker_" class="form-control">
		        </div>
		      </div>
		    </div>
		    <div class="cb-button-layout cb-calender-set-button">
		    <button class="cb-primary" onclick="setdate();">SET </button>
		    </div>
		    </div>
		  </div>
</div>


		<div id="refrence" style="display: none;">
		  <div class="refrences">
		    <div class="tasks-section">
		      <div class="tasks-header-w">
		        <div class="element-box testing-popup" style="overflow: auto; height: 250px;">
		          <h5 class="form-header editor-heading">
		            Help :
		            <a class="add-task-btn editor-btn" href="javascript:void(0)" onclick="closehelp()"><i class="os-icon os-icon-close"></i></a>
		          </h5>
		
		          <div class="form-desc justify-content editor-content"   id="helpcontent">
		
		          </div>
		
		        </div>
		      </div>
		    </div>
		  </div>
		</div>


		<div id="regxrefrence" style="display: none;">
		  <div class="refrences">
		    <div class="tasks-section">
		      <div class="tasks-header-w">
		        <div class="element-box testing-popup" style="overflow: auto; height: 250px;">
		          <h5 class="form-header editor-heading">
		            Help :
		            <a class="add-task-btn editor-btn" href="javascript:void(0)" onclick="closeRegxhelp()"><i class="os-icon os-icon-close"></i></a>
		          </h5>
		
		          <div class="form-desc justify-content editor-content"   id="helpRegxcontent">
		
		          </div>
		
		        </div>
		      </div>
		    </div>
		  </div>
		</div>



</div>
</div>


<!-- <div class="explanation">    
  <div class="explanations" id="explanations">
   <div class="tasks-section" id="task-section1">
    <div class="tasks-header-w bottom-space">
      <a class="tasks-header-toggler" href="javascript:void(0)">
        <i class="os-icon os-icon-ui-23"></i></a>
        <h5 class="tasks-header editor-heading">
          Formula
        </h5>
      </div>
      <div class="tasks-list-w">  
        <div class="row">               
          <div class="token-list quick">
            <div class="element-wrapper compact">
              <div class="element-box-tp tab">
                <div class="clearfix"></div>
                <ul class="all-token">
                  <li onclick="getFormulalist(1)"><a href="#" class="tablinks" id="defaultOpen"> Aggregate Function </a></li>
                  <li onclick="getFormulalist(2)"><a href="#" class="tablinks"> DateTime</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="formulas">  
            <div  class="tabcontent">
              <ul id="formulalist" class="formula-list"></ul>
            </div>                  
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="refrence" style="display: none;">
    <div class="refrences">
      <div class="tasks-section">
        <div class="tasks-header-w">
          <div class="element-box">
            <h5 class="form-header editor-heading">
              Testing String
              <a class="add-task-btn editor-btn" href="javascript:void(0)" onclick="closehelp()"><i class="os-icon os-icon-close"></i></a>
            </h5>

            <div class="form-desc justify-content"   id="helpcontent">

            </div>

          </div>
        </div>
      </div>
    </div>
  </div>

</div> -->

</div> 
</div>
</div>

</div>
</div>
</div>
</div>
</div>
<div class="display-type"></div>
</div>



<!-- <script type="text/javascript">

  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

document.getElementById("defaultOpen").click();
</script> -->

 <script src="<c:url value='/resources/js/customjs/editorpopup.js'><c:param name='jsversion' value='rsadxrtdt'/>   </c:url>"></script>
 

<script>  
  function myFunction() {
    $('#refrence').show();
    $('#explanations').hide();    
  }
  function closehelp() {
    $('#refrence').hide();
    $('#explanations').show();
  }   
</script>
<script>
  function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
</script>
<!-- <script type="text/javascript">
  // Tasks foldable trigger
  $('.tasks-header-toggler').on('click', function () {
    $(this).closest('.tasks-section').find('.tasks-list-w').slideToggle(100);
    return false;
  });
</script> -->


</body>
</html>
