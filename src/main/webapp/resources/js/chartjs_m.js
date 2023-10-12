

var edit_ModeFlag =0;
var dashboard_title ="";
var dashTabName="";
var chartType = [];
var chartDims = [];
	
var globalchartType ="chartcard2";
var selectedtabid=0;
var selectedtabname ="";
var type = "";
	
var globalselectedtabnlename ="";
var globaltheme_chart ="darktheme_chart"; 	
var selectcount = 0;	
var selectcount_ =0;
var selectcount_flag = 0;
var basicresult_length =0;
	var chartName_ ="Bar Chart";
	var chartnameSaved ="";
	var toggle_ThemeFlag = 0;
	var legend_Placement="";
	
	var indexi=0;
	 
////------------------Switch Between Dark and Light Theme		
	 function toggleTheme() {
		  //alert("hi")
		  		
		          var theme = document.getElementById('theme_');
		          var dark_ = document.getElementById('dark_');
		          var darkjs_ = document.getElementById('darkjs_');
		         // alert(theme)		        		           
		        if($("#switch-3").is(':checked')){
		     
		            	$("#dark_").attr('href', '../resources/css/dark-unica.css');
		        	
						$("#theme_").attr('href', '../resources/css/chart_light.css');
							
						$("#theme_").prop("disabled", false)
							
						globaltheme_chart = "lighttheme_chart"; 
						toggle_ThemeFlag = 0;
		        
		        
		        
		        
		        }
					else{
						//alert("darktheme_chart");
						
						$("#dark_").attr('href', '../resources/css/dark-unica-dash.css');
						$("#theme_").removeAttr('href', '../resources/css/chart_light.css');
						
						$("#dark_").prop("disabled", false)
										
		         		globaltheme_chart = "darktheme_chart";
						toggle_ThemeFlag =1;
						
		         
		        
						
						
		         
					}
		        
		      }  
	
	$(document).ready(function() {
		
		
		$("#charttype").html(chartName_);
		
		
		$('.delete').on('click','a',function() {
			
		//alert("hi")
			//alert(	$(this).parent().parent('div').html());              		
			$(this).parent().parent('div').remove();
			$("#btnChart").trigger('click');
				});
		
		
		
		openDataset();
		
		setTimeout(() => {
			
			//console.log("id1234-"+type);
		//getDim(type;)
		//if (type == "")
		//	{
			
			
			if (getParameterByName('id') != null)
				{
				  //alert("edit");
				  //getDim(type);
				}
				else		
				{
					//alert("new");
					$("#chartingtype").val("chartcard2"); 
					getDim('chartcard2');
			
				}
			
		}, 300);
		
		
		$("input").blur(function(){
			  //alert("This input field has lost its focus.");
			  $("#btnChart").trigger("click");
			});
		    
		
		function getParameterByName(name) {
			var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
			return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
		}			
		//console.log('id--' + getParameterByName('id'))

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
					 //$("[data-toggle]").tooltip();
				}
				$(".column-card").draggable({helper : 'clone'});
			}

		
		
		
////----------------- Build Dimension of Selected Chart		
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
								//console.log(chartType);
								
								
								
								
								
		$(".dropzone").droppable({accept : ".column-card",drop : function(ev, ui) {
									
									
									var droppedItem = $(ui.draggable).clone();
									//console.log('droppedItem');
									//console.log(droppedItem);
									droppedItem.addClass('remove');
									
					//column data type ---always single
					
					var coltype = $(droppedItem).data('types');
					//console.log("coltype---------" + coltype);
					
					
					//place holder data type ---single or plural
					
					var placetype = $(this).parent().data('types');
					
					//console.log("placetype---------" + placetype);
					
					//place holder data aggregation ---true or flase
					var placeagg = String($(this).parent().data('agg'));
					
					var multi = String($(this).parent().data('multi'));
					//console.log(">>"+placeagg);
					
				 if (!placetype.includes(coltype)) 
					{
					// $('input[name="name"]').notify("You are not authorised!!","info");
						alert('No Match!')
						return;
					} 
					
					
					var el = $("<span style='text-align: -webkit-right;'><a href='Javascript:void(0);' class='xicon delete' id='remove"+indexi+"' title='Remove'><i class='fa fa-times' aria-hidden='true'></i></a></span>");

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
							$(_agg).insertAfter($(droppedItem.find('span')[1]));
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
							//console.log("remove button1",$(droppedItem.find('span')[1]));
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
								//console.log("span number",$(droppedItem.find('span')[1]));
								 $(_aggx).insertAfter($(droppedItem.find('span')[2]));
							
							$(el).insertAfter($(droppedItem.find('.selectxaxisdiv')[0])); 
						
						
						//$(this).empty();
						//$(el).insertAfter($(droppedItem.find('span')[1]));
						$(this).append(droppedItem);
					}

					$('.delete').on('click',function() {
					
					//alert("remove");    
					
					//alert($(this).parent().parent('div').remove());
					
					$(this).parent().parent('div').remove();
					
					//alert($("#btnChart").trigger('click'));
						
					$("#btnChart").trigger('click');
					
					
					
					
					//$("#tablechartdiv").empty();
					// $("#container1").show();
					//$("#container1 > .highcharts-container").remove();
					/* var imgAdd='<div class="cb-graph-css d-flex p-3 highcharts-container" ><img src="<c:url value="/resources/images/line_graph.png"/>" style="width: 500px"></div>';
					$("#container1").append(imgAdd);  */
					//$("#singlevaluediv").empty();
					//$("#btnChart").trigger('click');
					$("#container1").empty();
					$("#btnChart").trigger('click');
					//$("#container1").show();
					//$("#container1").empty();
					/*  if($("#container1").empty()){
				     var imgAdd='<div class="cb-graph-css d-flex p-3 highcharts-container" ><img src="<c:url value="/resources/images/line_graph.png"/>" style="width: 500px"></div>';
					 $("#container1").append(imgAdd);
					} */ 
					$("#singlevaluediv").hide();
					
					//if()
					
					});
						
						setTimeout(() => {
							//alert("call get chart");
							$("#btnChart").trigger('click');
							
						}, 200);
						
					}
				}

				);
								
								
}
			
			$(".dropzonefilter").droppable(function() {
				filterfields();
			
			});
			
			var accordianind=0;

/////-------------------Build Blank Filter Div 
			function filterfields()
			{
				if	($('.dropzone.ui-droppable').children().length == 0 )
				{
				   $(".dropzonefilter").droppable("disable");
				}
				
				$(".dropzonefilter").droppable({accept:".column-card",drop:function(ev,ui) 
					{

				var droppedItem = $(ui.draggable).clone();
				droppedItem.addClass('dropzoneselect ');
				
				
							//column data type ---always single
							var coltype = $(droppedItem).data('types');					
							var col = $(droppedItem).data('field');
							
							//console.log("coltype---------" + coltype);
							//place holder data type ---single or plural
							var placetype = $(this).parent().data('types');
							//place holder data aggregation ---true or flase
							var placeagg = "true";// String($(this).parent().data('agg'));
							
							var multi = "true"; //String($(this).parent().data('multi'));
							//console.log(">>"+placeagg);

							var el = $("<span style='text-align: -webkit-right;'><a href='Javascript:void(0);' class='xicon delete' title='Remove'><i class='fa fa-times' aria-hidden='true'></i></a></span>");

							var filtertype ="";//$("<div class='dummy'></div>"); //$("<div class='mt-3'><span style='text-align: -webkit-right;'>Filter Type</span></div><div class='mt-3'><select class='form-control' ><option value='adv'>Advance</option><option value='basic'>Basic</option><option value='topn'>Top N</option></select></div>");
							var tablename__ = globalselectedtabnlename;
								//globalselectedtabnlename;
							
							console.log("tablename__---------" + tablename__);
			
							var comparisontxt = $("<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:14px;top: -21px;'><a class='chart-accordion' data-bs-toggle='collapse' href='#collapseOne"+accordianind+"'><i class='fa fa-caret-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+accordianind+"' class='collapse show' data-bs-parent='#accordion'><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+accordianind+"' onchange='onChangedata("+accordianind+" ,\"" + tablename__ + "\");'><option value='adv'>Advance</option><option value='topn'>Top N</option><option value='basicfiltering' >Basic Filtering</option></select><div class='mt-2' id='optiondivtopn"+accordianind+"' style='display:none'><select class='form-control' id='top_bottom'><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+accordianind+"' ><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+accordianind+")'><option value='contains'>contains</option><option value='does not contain'>does not contain</option><option value='starts with'>starts with</option><option value='does not start with'>does not start with</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option><option value='is empty'>is empty</option><option value='is not empty'>is not empty</option></select></div>"
								+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' id='filtervalueid"+accordianind+"' onblur='filtervaluekeyup("+accordianind+")'></div>"
								+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+col+"andor' id='and"+accordianind+"' value='and' onchange='andorChange("+accordianind+")' checked><label class='css-iwo4qd' for='and"+accordianind+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+col+"andor' id='or"+accordianind+"' value='or' onchange='andorChange("+accordianind+")'><label class='css-iwo4qd' for='or"+accordianind+"'>Or </label></div></div>"
								+"<div class='mt-2 mb-2'><select class='form-control' ><option value='contains'>contains</option><option value='does not contain'>does not contain</option><option value='starts with'>starts with</option><option value='does not start with'>does not start with</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option><option value='is empty'>is empty</option><option value='is not empty'>is not empty</option></select></div>"
								+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' id='filterinvalueid"+accordianind+"' onblur='filterinvaluekeyup("+accordianind+")'></div></div>"
								+"<div class='cb-range-form-div mt-2' id='basicfiltercheck"+accordianind+"' style='display:none'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form mb-0'><label class='css-12xei9w'><input type='checkbox' id='limitvalue_basic"+accordianind+"' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' onclick='limitbasicvalue("+accordianind+")' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Limit Value</span></label></div></div></div></div>"
								+"<div class='cb-range-form-div' id='numberofrowsdivs_basic"+accordianind+"' style='display:none;'><div class='cb-range-Label'><span class='label'><div class='cb-range-text'>Number of rows</div></span><div class='cb-input-css'><input type='number' list='numberlist_basic' id='numberofrows_basic"+accordianind+"' name='numberofrows_basic"+accordianind+"' class='form-control' value='1000' min='5' max='50000'/><datalist id='numberlist_basic'><option value='5000'>5000</option><option value='10000'>10000</option><option value='25000'>25000</option><option value='50000'>50000</option></datalist></div></div></div>"
								+"<div id='basicselectdiv"+accordianind+"' style='display:none'><div class='mt-2 cb-basic-height'><ul class='list-group' id='selectbasicdata"+accordianind+"' ></ul></div></div>"
								+"<div id='topnselectdiv"+accordianind+"' style='display:none'><div class='mt-2'><span>Show items</span><select id='topninputvalue"+accordianind+"'   class='form-control'><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='form-control' text='number' id='topninput"+accordianind+"' onblur='topninput("+accordianind+")' autocomplete='off'></div><div class='mt-2 d-none' ><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>");
							
							var comparisonnumber = $("<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:14px;top: -21px;'><a class='chart-accordion' data-bs-toggle='collapse' href='#collapseOne"+accordianind+"'><i class='fa fa-caret-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+accordianind+"' class='collapse show' data-bs-parent='#accordion"+accordianind+"'><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+accordianind+"' onchange='onChangedata("+accordianind+",\"" + tablename__ + "\");'><option value='adv'>Advance</option><option value='topn'>Top N</option><option value='basicfiltering' >Basic Filtering</option></select><div class='mt-2' id='optiondivtopn"+accordianind+"' style='display:none'></div><div id='optiondivselect"+accordianind+"'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+accordianind+")'><option value='<'>is less than</option><option value='<='>is less than or equal to</option><option value='>'>is greater than</option><option value='>='>is greater than or equal to</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"
								+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' id='filtervalueid"+accordianind+"'  onblur='filtervaluekeyup("+accordianind+")'></div>"
								+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+col+"andor' id='and"+accordianind+"' value='and' checked onchange='andorChange("+accordianind+")'><label class='css-iwo4qd' for='and"+accordianind+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+col+"andor' id='or"+accordianind+"' value='or' onchange='andorChange("+accordianind+")'><label class='css-iwo4qd' for='or"+accordianind+"'>Or </label></div></div>"
								+"<div class='mt-2 mb-2'><select class='form-control'><option value='<'>is less than</option><option value='<='>is less than or equal to</option><option value='>'>is greater than</option><option value='>='>is greater than or equal to</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"
								+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' id='filterinvalueid"+accordianind+"' onblur='filterinvaluekeyup("+accordianind+")'></div></div>"
								+"<div class='cb-range-form-div mt-2' id='basicfiltercheck"+accordianind+"' style='display:none'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form mb-0'><label class='css-12xei9w'><input type='checkbox' id='limitvalue_basic"+accordianind+"' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' onclick='limitbasicvalue("+accordianind+")' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Limit Value</span></label></div></div></div></div>"
								+"<div class='cb-range-form-div' id='numberofrowsdivs_basic"+accordianind+"' style='display:none;'><div class='cb-range-Label'><span class='label'><div class='cb-range-text'>Number of rows</div></span><div class='cb-input-css'><input type='number' list='numberlist_basic' id='numberofrows_basic"+accordianind+"' name='numberofrows_basic"+accordianind+"' class='form-control' value='1000' min='5' max='50000'/><datalist id='numberlist_basic'><option value='5000'>5000</option><option value='10000'>10000</option><option value='25000'>25000</option><option value='50000'>50000</option></datalist></div></div></div>"
								+"<div id='basicselectdiv"+accordianind+"' style='display:none'><div class='mt-2 cb-basic-height'><ul class='list-group' id='selectbasicdata"+accordianind+"' ></ul></div></div>"
								+"<div id='topnselectdiv"+accordianind+"' style='display:none'><div class='mt-2'><span>Show items</span><select id='topninputvalue"+accordianind+"' class='form-control'><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='form-control' text='number' id='topninput"+accordianind+"' onblur='topninput("+accordianind+")' autocomplete='off'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>");
							
							var comparisondate = $("<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:14px;top: -21px;'><a class='chart-accordion' data-bs-toggle='collapse' href='#collapseOne"+accordianind+"'><i class='fa fa-caret-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+accordianind+"' class='collapse show' data-bs-parent='#accordion"+accordianind+"'><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+accordianind+"' onchange='onChangedata("+accordianind+",\"" + tablename__ + "\");'><option value='adv'>Advance</option><option value='topn'>Top N</option><option value='basicfiltering' >Basic Filtering</option></select><div class='mt-2' id='optiondivtopn"+accordianind+"' style='display:none'></div><div id='optiondivselect"+accordianind+"'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+accordianind+")'><option value='is'>is</option><option value='is not'>is not</option><option value='is after'>is after</option><option value='is on or after'>is on or after</option><option value='is before'>is before</option><option value='is on or before'>is on or before</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"
								+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' id='filtervalueid"+accordianind+"'  onblur='filtervaluekeyup("+accordianind+")'></div>"
								+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+col+"andor' id='and"+accordianind+"' value='and' onchange='andorChange("+accordianind+")' checked><label class='css-iwo4qd' for='and"+accordianind+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+col+"andor' id='or"+accordianind+"' value='or' onchange='andorChange("+accordianind+")'><label class='css-iwo4qd' for='or"+accordianind+"' onchange='andorChange("+accordianind+")'>Or </label></div></div>"
								+"<div class='mt-2 mb-2'><select class='form-control'><option value='is'>is</option><option value='is not'>is not</option><option value='is after'>is after</option><option value='is on or after'>is on or after</option><option value='is before'>is before</option><option value='is on or before'>is on or before</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"
								+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' id='filterinvalueid"+accordianind+"' onblur='filterinvaluekeyup("+accordianind+")'></div></div>"
								+"<div class='cb-range-form-div mt-2' id='basicfiltercheck"+accordianind+"' style='display:none'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form mb-0'><label class='css-12xei9w'><input type='checkbox' id='limitvalue_basic"+accordianind+"' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' onclick='limitbasicvalue("+accordianind+")' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Limit Value</span></label></div></div></div></div>"
								+"<div class='cb-range-form-div' id='numberofrowsdivs_basic"+accordianind+"' style='display:none;'><div class='cb-range-Label'><span class='label'><div class='cb-range-text'>Number of rows</div></span><div class='cb-input-css'><input type='number' list='numberlist_basic' id='numberofrows_basic"+accordianind+"' name='numberofrows_basic"+accordianind+"' class='form-control' value='1000' min='5' max='50000'/><datalist id='numberlist_basic'><option value='5000'>5000</option><option value='10000'>10000</option><option value='25000'>25000</option><option value='50000'>50000</option></datalist></div></div></div>"
								+"<div id='basicselectdiv"+accordianind+"' style='display:none'><div class='mt-2 cb-basic-height'><ul class='list-group' id='selectbasicdata"+accordianind+"' ></ul></div></div>"
								+"<div id='topnselectdiv"+accordianind+"' style='display:none'><div class='mt-2'><span>Show items</span><select id='topninputvalue"+accordianind+"' class='form-control'><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='form-control' text='number' id='topninput"+accordianind+"' onblur='topninput("+accordianind+")' autocomplete='off'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>");
							
							
							if(accordianind > 0)
								{
								selectcount++;
								}
							
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
								   var accordianind_ = accordianind-1;
								   $('#numberofrows_basic'+accordianind_).change(function() {
										//alert("numberofrows_basic@@@@@");
										var basic_userlimit=$("#numberofrows_basic"+accordianind_).val();
									
										//console.log('basic_userlimit:::'+basic_userlimit);	
									    selectBasicFilter(globalselectedtabnlename);
										//$("#btnChart").trigger("click");
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
				$("#chart_id").val("0");
				$("#chartNametxt").val("");
				//alert("type::::"+type);
				var data = {};
				$("#chartingtype").val(type);
				$.ajax(
					{type : "POST",
					async:false,
					contentType : "application/json",
					url : "./getChartDim?type="+type,
					dataType : 'text',
					success : function(result) {
					//console.log("result--"+result);
					jsonData = JSON.parse(result);
					charttype(jsonData);
//					filterfields();
					//loadchart1();
					

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
			//var varDim = [];
			
			
/////----------------------Build Chart			
			
			$("#btnChart").click(function(e) {
					//get all the divs with droppable
		//alert("call chart ");
					//console.log($('div.DataMapping_chart-dimension__2tNga')[1]);
					var varDim = [];
					var listofdims = $('div.DataMapping_chart-dimension__2tNga');
                   // console.log("listofdims----"+listofdims);
					//escape 1st item which is filter
					//$("#tablechartdiv").html("");
					
					var bintype = "";
					var binsize = "";
					var bincount = "";
					var displaytopCheck =0;
					var displaytopvalue ="";
					 var others ="";
					 var Agg ="";
					
					 
					 
					 
					 
					 
					for (var i = 1; i < listofdims.length; i++) 
					{
						
						 //console.log("listofdims1----"+listofdims.length);
						//console.log(listofdims[i].find('.column-card'));
						var listofchild = $('.column-card',listofdims[i])
				
			if (listofchild.length != 0) {
							
							
					for (var j = 0; j < listofchild.length; j++) 
							{
						//console.log("Jjjjjj -----#####:::::"+j);	
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

										  if(isbintext === undefined)
											  {
											  isbintext = "";
											  bintype = "";
											  binsize ="";
											  bincount ="";
											  
											  }
										// alert("isbintext:::"+isbintext)
										// alert("bintype:::"+bintype);
										 
								//console.log("isbintext#####:::::"+isbintext);		 
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
										 //alert("yaxisradio:::::"+yaxisradio);
										 if (yaxisradio =="tonradio"+j)
										 {
											 displaytopCheck =1;
											 displaytopvalue =  $("#displaytopvalue"+j).val(); 
											 
											 if($("#others"+j).prop( "checked")==true)
											 {
												 //alert("true");
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
											 
											 //console.log("filterselecttypevalue####::::"+filterselecttypevalue);
											 
											 Agg =  filterselecttypevalue; 
										 } 
										 
										 
									 }
									 //var limit=15;
					 					 //var defaultlimit=$("#limitvalue").val(limit); 
					 				
								 	
									 //alert("Agg::::"+Agg);
									 //var userlimit = 0;
									 
									 
						//var userlimitvalue= $("#numberofrows").val(); //$("#numberofrows option:selected").val(); //$("#numberofrows").val();
						 if($("#limitvalue").prop('checked')) 
						 {
							 var userlimitvalue= $("#numberofrows").val(); //$("#numberofrows option:selected").val(); //$("#numberofrows").val();

							 console.log("userlimitvalue--" +userlimitvalue);
						 }
						 else
							 {
							 var userlimitvalue= 1000;
							 console.log("else  userlimitvalue--" +userlimitvalue);
							 }
									 
									 
									// console.log("numberofrows--" +userlimitvalue);
						//alert($(listofchild[j]).data('field'));
									 
									 ls.push({'Series' : $(listofdims[i]).data('series'),
								 	'Field' : $(listofchild[j]).data('field'),
								 	'Agg' : Agg,
								 	'displaytopvalue' : displaytopvalue,
								 	'others' : others,
								 	'displaytopCheck':displaytopCheck,
								 	'Bin':isbin,
								 	'BinType':bintype,
								 	'BinSize':binsize,
								 	'BinCount':bincount,
								  	'userlimit':userlimitvalue
								  	
								 });
				
								 //console.log("ls#####:::::",ls);
								 
								 varDim.push(ls);
								
								 //console.log(ls);
								
				
								 
								 
								 
								
							}
								//console.log($('.column-card',listofdims[i]));
							}
					}
					
					console.log("vardim:::",varDim);
					
					console.log("listofdims.length::::"+varDim.length);
					
					var chartingtype12 = $("#chartingtype").val();
					//console.log("chartingtype12:::"+chartingtype12);
					if((chartingtype12 == "chartcard16") || (chartingtype12 == "chartcard17" ))
						{
						if (varDim.length < 1)
						 {
							  // alert("singlechart11"); 
						 
							 var imgAdd='<div class="cb-graph-css d-flex p-3 highcharts-container justify-content-center" ><img src="./resources/images/line_graph.png" style="width: 500px"></div>';
							  $("#container1").html(imgAdd);
							  $("#container1").show();
							  $("#tablechartdiv").hide();
							  return;
						 } 
						
						}
					else if((chartingtype12 == "chartcard15"))
					{
					if (varDim.length < 3)
					 {
						  // alert("singlechart11"); 
					 
						 var imgAdd='<div class="cb-graph-css d-flex p-3 highcharts-container justify-content-center" ><img src="./resources/images/line_graph.png" style="width: 500px"></div>';
						  $("#container1").html(imgAdd);
						  $("#container1").show();
						  $("#tablechartdiv").hide();
						  return;
					 } 
					
					}
					else
					{
						
					  // alert("singlechart");
					   if (varDim.length <= 1)
					 {
						   //alert("singlechart11"); 
					 
						 var imgAdd='<div class="cb-graph-css d-flex p-3 highcharts-container justify-content-center" ><img src="./resources/images/line_graph.png" style="width: 500px"></div>';
						  $("#container1").html(imgAdd);
						  return;
					 }  
					   
					}
					
						
							var varDimfilter = [];
						var listofdimsfilter = $('div.dropzoneselect');
						//console.log("listofdimsfilter:::::"+listofdimsfilter);
						
						//escape 1st item which is filter
						for (var i = 0; i < listofdimsfilter.length; i++) {
                                                        var filterselect1="";
							var filterselect2="";
							var filterselect3="";   
							var filterselectvalue1="";
							var filterselectvalue2="";
                            var basicFilterValue ="";
							var basicFilterValue_Array = [];
							var bsArray = [];
							var basicFilter_userlimitvalue = 0;
							
							
									var ls = [];
				 				var field = $(listofdimsfilter[i]).data('field');	
				 				var types =	$(listofdimsfilter[i]).data('types');

				 				var filterselecttype = $(listofdimsfilter[i]).find("select")[0];
				 				//console.log("filterselecttype:::::",filterselecttype);
				 				
				 				
				 				var filterselecttypevalue = $(filterselecttype).val();
				 				
				 				console.log("filterselecttypevalue:::::::::::"+filterselecttypevalue);
				 				
				 				
								if(types=='text' && filterselecttypevalue == 'adv' )
				 				{
				 				
					 				 filterselect1 = $(listofdimsfilter[i]).find("select")[2];
					 				 filterselect2 = $(listofdimsfilter[i]).find("select")[3];
					 				 filterselect3 = $(listofdimsfilter[i]).find("select")[1];
					 			
					 				//console.log("filterselect1:::::",filterselect1);
					 				//console.log("filterselect2:::::",filterselect2);
					 				//console.log("filterselect3:::::",filterselect3);
				 				}
				 				else if((types=='number' && filterselecttypevalue == 'adv' ) || (types=='time' && filterselecttypevalue == 'adv' ))
				 				{
				 					 filterselect1 = $(listofdimsfilter[i]).find("select")[1];
					 				 filterselect2 = $(listofdimsfilter[i]).find("select")[2];
					 				 filterselect3 = $(listofdimsfilter[i]).find("select")[3];
					 			    
//					 				console.log("filterselect1:::::",filterselect1);
//					 				console.log("filterselect2:::::",filterselect2);
//					 				console.log("filterselect3:::::",filterselect3);	
					 								 			
				 				}
								filterselect1= $(filterselect1).val();
					 			filterselect2=$(filterselect2).val();
				 				
				 				
				 				//var filterselect1 = $(listofdimsfilter[i]).find("select")[2];
				 				//var filterselect2 = $(listofdimsfilter[i]).find("select")[3];
				 				//var filterselect3 = $(listofdimsfilter[i]).find("select")[1];
				 			
				 				//console.log("listofdimsfilter[i]:::::",listofdimsfilter[i]);
				 				var filterand = $(listofdimsfilter[i]).find("input[type='radio']")[0];
				 				var filteror = $(listofdimsfilter[i]).find("input[type='radio']")[1];
				 				
				 				
				 				
				 				
				 				//div.find("input[type='radio']")
				 				
				 				//$("#chkClass").prop( "checked")==false
				 				//console.log("filterand:::::",filterand);
				 				//console.log("ischecked::::"+$(filterand).prop( "checked"));
				 				
				 				var andorvalue =" and ";
				 			
				 				var filtertopn = "";
				 				var filtertopvalue = "";
				 				
				 					
				 				if (filterselecttypevalue =="adv")
				 				{
				 					
				 				    filterselectvalue1 = $(listofdimsfilter[i]).find(".filterselectvalue")[0];
					 			    filterselectvalue2 = $(listofdimsfilter[i]).find(".filterselectvalue")[1];
					 				filterselectvalue1 = $(filterselectvalue1).val();
					 				filterselectvalue2 = $(filterselectvalue2).val();
				 					if ($(filterand).prop( "checked")== false)
					 				{
					 					andorvalue = " or ";
					 				}
					 				
				 				}
				 				else if (filterselecttypevalue =="basicfiltering")
				 				{
				 					
				 					 filterselect1 = "";
				 				     filterselect2 = "";
				 					andorvalue ="";
				 				
				 					if (selectcount_flag == 0)
				 						{
				 						if($('.dropzonefilter').children().length > 1)
				 						{
				 							var drop_child = $('.dropzonefilter').children().length;
				 						 selectcount_ = drop_child-1;
				 						
				 						}
				 						selectcount_flag ++;
				 						}
				 					console.log("selectcount_:::  "+selectcount_);
				 					//selectcount--;
				 					//var c=$(".allselectcheckbox").attr("class");
				 					//console.log("c:::::"+c);
				 					if($("#chkLocal"+selectcount_).prop("checked") == true)
				 						{
				 						
				 						//alert("checkAll::::::::::::::  ");
				 						for(b=0;b<basicresult_length;b++)
				 						{				 							
				 							basicFilterValue = $("#allcheck"+b).val();
				 							//console.log("basicFilterValue  "+basicFilterValue);
				 							//basicFilterValue_Array.add
				 							
				 							bsArray.push
				 							({										
										    'BasicFilterValue' : basicFilterValue,																		
								        	});
				 							
				 							//basicFilterValue_Array.push(basicFilterValue);
				 							//console.log("basicFilterValue_Array  ",basicFilterValue_Array);
				 							
				 						}
				 						basicFilterValue_Array.push(bsArray);
				 						//console.log("basicFilterValue_Array  ",basicFilterValue_Array);
				 						}
				 					
				 				
				 					//if(document.getElementByClass('isAgeSelected').checked)
				 					else if (($("#chkLocal"+selectcount_).prop("checked") == false ) && ($(".allselectcheckbox:checked").prop("checked") == true))
				 					//else if (($("#chkLocal0").prop("checked") == false ) && (document.getElementByClassName('allselectcheckbox').checked))
				 					{
				 						
				 				
				 						//alert("basicfiltering::::::::::::::********  ");
					 					for(b=0;b<=basicresult_length;b++)
					 						{
					 						   if($("#allcheck"+b).prop("checked") == true)
					 							{
					 							 basicFilterValue = $("#allcheck"+b).val();					 						
					 							// console.log("basicFilterValue  "+basicFilterValue);
					 							 
					 							  bsArray.push
						 							({										
												    'BasicFilterValue' : basicFilterValue,																		
										        	});
					 							
					 							
					 							
					 							//basicFilterValue_Array.add
					 							
					 							
					 							}
					 						 
					 						}
					 					 basicFilterValue_Array.push(bsArray);
					 					//console.log("basicFilterValue_Array  ",basicFilterValue_Array);
					 				
				 				     }
				 					
				 					else if($("#chkLocal"+selectcount_).prop("checked") == false)
				 						{
				 						
				 						//alert("#chkLocal0.pro == false");
				 						basicFilterValue_Array = [];
				 						filterselecttypevalue = "";
				 						}
				 					
				 				    basicFilter_userlimitvalue= $("#numberofrows_basic"+selectcount_).val(); //numberofrows__basic0
									console.log("basicFilter_userlimitvalue-----" +basicFilter_userlimitvalue);
				 					$('#numberofrows_basic').val(basicFilter_userlimitvalue);
									//selectcount_ ++;
				 				}
				 				
				 				else if (filterselecttypevalue =="topn")
				 				{
				 				    //filterselect1 = $(listofdimsfilter[i]).find("select")[2];
				 				    //filterselect2 = $(listofdimsfilter[i]).find("select")[3];
				 				     filterselect1 = "";
				 				     filterselect2 = "";
				 			       andorvalue = "";
				 				   filterselect3 = $("#topninputvalue"+i).val();
				 				   //console.log("filterselect3:::::",filterselect3);
				 					
				 					if (filterselect3=="bottom")
				 					{
				 						filtertopn="bottom";
				 					}
				 					else 
				 					{
				 						 filtertopn="top";
				 					}
				 					
				 					
				 				    filtertopvalue =$("#topninput"+i).val();
				 					
				 				  }
				 				
				 				
				 				//console.log("filtertopvalue::::"+filtertopvalue);	
				 				
				 				//console.log('filterselectvalue1');				 				

				 				ls.push({
										//'Types' : $(listofdimsfilter[i]).data('series'),
										'Types' : types,
										'Field' : field,
										'filterselect1' : filterselect1,
										'filterselect2' : filterselect2,
										'filterselectvalue1': filterselectvalue1,
										'filterselectvalue2': filterselectvalue2,
									  	'andorvalue':andorvalue,
									  	'filterselecttypevalue':filterselecttypevalue,
									  	'filtertopn':filtertopn,
									  	'filtertopvalue':filtertopvalue,
									    'basic_Fil_Val_Array'  :	basicFilterValue_Array,
									    'userLimit_basic' : basicFilter_userlimitvalue
									});
								varDimfilter.push(ls);							
						}
						console.log("varDimfilter ",varDimfilter);
						
						var tabelname = globalselectedtabnlename;
							//globalselectedtabnlename ;//$("#tablelistData").val();
						
						if (tabelname =="0")
						{
							alert("Please select table!");
							return;
						}
						
						//alert("call get chart");
						
						$("#container").empty();
						type = "";
						
						//alert("call chart start ");
						var chartField_color=[];
						var lscolor =[];
						var ChartType12 =$("#chartingtype").val();
						
						if(ChartType12 == "chartcard17")
						{
							 $('.dropzone.Table-Axis').children().each(function()
									  	{
											  var Field12 = $(this).attr('data-field');
											  
								  lscolor.push({
												 	'Color' : "red",
												 	'Field_': Field12,
												 	
												 	
										      });
									  		
									    });
								  chartField_color.push(lscolor);
						 }
						 else 
						 {
						  $('.dropzone.Y-Axis').children().each(function()
							  	{
									  var Field12 = $(this).attr('data-field');
									  
						  lscolor.push({
										 	'Color' : "red",
										 	'Field_': Field12,
										 	
								      });
							  		
							    });
						  chartField_color.push(lscolor);
		      	            }
						  //console.log("chartField_color:::::###--",chartField_color);
						
							  		
						  //console.log("chartName_:::::::::::::###--"+chartnameSaved);
						
						  //chartName_
						  if(chartnameSaved != "")
							  {
							  type = chartnameSaved;
							  }
						
////------------------legend placement
						  
						
						  
						  
//						  legend_Placement = $("#placement").val();
//						  console.log("legend_Placement:::::::::::::######"+legend_Placement);
						 // $("#chartname").val(""); 
						
					NProgress.start();
						$.ajax({method : "POST",			
							async:false,
							url : "./getchart",
							data : {
								chartName : type,
								fieldsprop : JSON.stringify(varDim),
								charttype:	$("#chartingtype").val(),
								filterprop : JSON.stringify(varDimfilter),
								tabelname:tabelname,
							},
							success : function(result) {
								NProgress.done(true);
								//$("#tablechartdiv").html("");
								console.log("chart result--"+result);
								/* $('.highcharts-series.highcharts-series-hover').each(function()
										{
									
										            alert(".highcharts-series.highcharts-series-hover");
													$(this).attr('stroke').html("");
										}); */
										
										if(ChartType12 == "chartcard17")
											{
											$("#tablechartdiv_data").empty();
											setTimeout(() => 
											{
											
												$("#tablechartdiv_data").append(result);
											
											}, 5);	
											}
										else
											{
												$("#variables").append(result);
											}
									
								
								
								/* $('.highcharts-series.highcharts-tracker').children().each(function()
								{
											$(this)..attr('stroke').html("");
								}); */
								
								
								
								
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

			
			
/////-------------------Save Chart 			
			
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
								// alert("true");
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
							 
							// console.log("filterselecttypevalue####::::"+filterselecttypevalue);
							 
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
					 
					 //var userlimitvalue= $("#numberofrows").val(); //$("#numberofrows option:selected").val(); //$("#numberofrows").val();
                     if($("#limitvalue").prop('checked')) 
						 {
							 var userlimitvalue= $("#numberofrows").val(); //$("#numberofrows option:selected").val(); //$("#numberofrows").val();
	
							 console.log("userlimitvalue--" +userlimitvalue);
						 }
					 else
						 {
						 var userlimitvalue= 1000;
						 console.log("userlimitvalue--" +userlimitvalue);
						 }
					// console.log("numberofrows--" +userlimitvalue);
					 
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
				 	'BinCount':bincount,
				 	'userlimit':userlimitvalue
				 	
				 });

				 varDim.push(ls);
				
				 //console.log(ls);
				
			}
				//console.log($('.column-card',listofdims[i]));
			}
	}
	
	//console.log("vardim:::",varDim);
	
	//console.log("listofdims.length 2::::"+varDim.length);
	
	
	
	 //if (varDim.length <= 1)
	 //{
	//	 return;
	 //}
		
			var varDimfilter = [];
		var listofdimsfilter = $('div.dropzoneselect');
var filterselect1="";
var filterselect2="";
var filterselect3="";
var basicFilterValue ="";
var basicFilterValue_Array = [];
var bsArray = [];
var userLimit_basicFilter =0;
var limitbasicCheck = 0;
var basicFilter_userlimitvalue = 0;



		//escape 1st item which is filter
		for (var i = 0; i < listofdimsfilter.length; i++) {
			

					var ls = [];
 				var field = $(listofdimsfilter[i]).data('field');	
 				var types =	$(listofdimsfilter[i]).data('types');

 				var filterselecttype = $(listofdimsfilter[i]).find("select")[0];
 				//console.log("filterselecttype:::::",filterselecttype);
 				
 				
 				var filterselecttypevalue = $(filterselecttype).val();
 				
 				//console.log("filterselecttypevalue:::::::::::"+filterselecttypevalue);
 				if(types=='text' && filterselecttypevalue == 'adv' )
 				{
 				
	 				 filterselect1 = $(listofdimsfilter[i]).find("select")[2];
	 				 filterselect2 = $(listofdimsfilter[i]).find("select")[3];
	 				 filterselect3 = $(listofdimsfilter[i]).find("select")[1];
	 			
	 				//console.log("filterselect1:::::",filterselect1);
	 				//console.log("filterselect2:::::",filterselect2);
	 				//console.log("filterselect3:::::",filterselect3);
 				}
 				else if((types=='number' && filterselecttypevalue == 'adv' ) || (types=='time' && filterselecttypevalue == 'adv' ))
 				{
 					 filterselect1 = $(listofdimsfilter[i]).find("select")[1];
	 				 filterselect2 = $(listofdimsfilter[i]).find("select")[2];
	 				 filterselect3 = $(listofdimsfilter[i]).find("select")[3];
	 			    
//	 				console.log("filterselect1:::::",filterselect1);
//	 				console.log("filterselect2:::::",filterselect2);
//	 				console.log("filterselect3:::::",filterselect3);	
	 								 			
 				}
				filterselect1= $(filterselect1).val();
	 			filterselect2=$(filterselect2).val();
 				
 				
 				//var filterselect1 = $(listofdimsfilter[i]).find("select")[2];
 				//var filterselect2 = $(listofdimsfilter[i]).find("select")[3];
 				//var filterselect3 = $(listofdimsfilter[i]).find("select")[1];
 			
 				//console.log("listofdimsfilter[i]:::::",listofdimsfilter[i]);
 				var filterand = $(listofdimsfilter[i]).find("input[type='radio']")[0];
 				var filteror = $(listofdimsfilter[i]).find("input[type='radio']")[1];
 				
 				
 				
 				
 				//div.find("input[type='radio']")
 				
 				//$("#chkClass").prop( "checked")==false
// 				console.log("filterand:::::",filterand);
// 				console.log("ischecked::::"+$(filterand).prop( "checked"));
 				
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
 				
 				else if (filterselecttypevalue =="basicfiltering")
 				{
 					
 					 filterselect1 = "";
 				     filterselect2 = "";
 					andorvalue ="";
 				
 					if (selectcount_flag == 0)
 						{
 						if($('.dropzonefilter').children().length > 1)
 						{
 						 selectcount_ = selectcount--;
 						
 						}
 						selectcount_flag ++;
 						}
 					
 					//selectcount--;
 					//var c=$(".allselectcheckbox").attr("class");
 					//console.log("c:::::"+c);
 					if($("#chkLocal"+selectcount_).prop("checked") == true)
 						{
 						
 					//	alert("checkAll::::::::::::::  ");
 						for(b=0;b<basicresult_length;b++)
 						{				 							
 							basicFilterValue = $("#allcheck"+b).val();
 							//console.log("basicFilterValue  "+basicFilterValue);
 							//basicFilterValue_Array.add
 							
 							bsArray.push
 							({										
						    'BasicFilterValue' : basicFilterValue,																		
				        	});
 							
 							//basicFilterValue_Array.push(basicFilterValue);
 							//console.log("basicFilterValue_Array  ",basicFilterValue_Array);
 							
 						}
 						basicFilterValue_Array.push(bsArray);
 						//console.log("basicFilterValue_Array  ",basicFilterValue_Array);
 						}
 					
 				
 					//if(document.getElementByClass('isAgeSelected').checked)
 					else if (($("#chkLocal"+selectcount_).prop("checked") == false ) && ($(".allselectcheckbox:checked").prop("checked") == true))
 					//else if (($("#chkLocal0").prop("checked") == false ) && (document.getElementByClassName('allselectcheckbox').checked))
 					{
 						
 				
 						//alert("basicfiltering::::::::::::::********  ");
	 					for(b=0;b<=basicresult_length;b++)
	 						{
	 						   if($("#allcheck"+b).prop("checked") == true)
	 							{
	 							 basicFilterValue = $("#allcheck"+b).val();					 						
	 							// console.log("basicFilterValue  "+basicFilterValue);
	 							 
	 							  bsArray.push
		 							({										
								    'BasicFilterValue' : basicFilterValue,																		
						        	});
	 							
	 							
	 							
	 							//basicFilterValue_Array.add
	 							
	 							
	 							}
	 						 
	 						}
	 					 basicFilterValue_Array.push(bsArray);
	 					//console.log("basicFilterValue_Array  ",basicFilterValue_Array);
	 				
 				     }
 					
 					else if($("#chkLocal"+selectcount_).prop("checked") == false)
 						{
 						
 					//	alert("#chkLocal0.pro == false");
 						basicFilterValue_Array = [];
 						filterselecttypevalue = "";
 						}
 					
 				    basicFilter_userlimitvalue= $("#numberofrows_basic"+selectcount_).val(); //numberofrows__basic0
					console.log("basicFilter_userlimitvalue-----" +basicFilter_userlimitvalue);
					 if($("#limitvalue_basic"+selectcount_).prop('checked')) {
				           // alert("Checked Box Selected");
						 limitbasicCheck = 1;
				        } else {
				            //alert("Checked Box deselect");
				        	limitbasicCheck = 0;
				        }
				
 				}
 				
 				else if (filterselecttypevalue =="topn")
 				{
 			
 				      filterselect1 = "";
 				      filterselect2 = "";
 			       andorvalue = "";
 				   filterselect3 = $("#topninputvalue"+i).val();

 				 
 					if (filterselect3=="bottom")
 					{
 						filtertopn="bottom";
 					}
 					else 
 					{
 						 filtertopn="top";
 					}
 					
 					
 				    filtertopvalue =$("#topninput"+i).val();
 					
 				  }
				
 				var filterselectvalue1 = $(listofdimsfilter[i]).find(".filterselectvalue")[0];
 				var filterselectvalue2 = $(listofdimsfilter[i]).find(".filterselectvalue")[1];
 			
 				ls.push({
						//'Types' : $(listofdimsfilter[i]).data('series'),
						'Types' : types,
						'Field' : field,
						'filterselect1' : filterselect1,
						'filterselect2' : filterselect2,
						'filterselectvalue1': $(filterselectvalue1).val(),
						'filterselectvalue2': $(filterselectvalue2).val(),
					  	'andorvalue':andorvalue,
					  	'filterselecttypevalue':filterselecttypevalue,
					  	'filtertopn':filtertopn,
					  	'filtertopvalue':filtertopvalue,
					  	'basic_Fil_Val_Array' : basicFilterValue_Array,
					  	'userLimit_basic' : basicFilter_userlimitvalue,
					  	'limitBasic_check' : limitbasicCheck ,
					});
				varDimfilter.push(ls);
					
		}

		console.log("varDimfilter::: ",varDimfilter);
	

					//--mansi
					var tablename = globalselectedtabnlename ;//$("#tablelistData").val();
					//var tablename = "PT84430568S";
					 
					if (tablename =="" || tablename=="0" || tablename == undefined)
					{
						alert("Please select table!");
						return;
					}
					
					
					//type = "line";
					//console.log("id101-------------------"+this.id);
					if (this.id > 0){
						type=this.id;
					}
					else {
						type = globalchartType;
					}
					//console.log("globalchartType----"+globalchartType);
					//type = globalchartType;
					var dashboardid = globaldashid ;  //selectedtabid;//  $("#dashboardlistData").val();
					var tabid = selectedtabid ;//$("#tablistData").val();
					var tabname = selectedtabname;//$("#tablistData option:selected").text();
					var chartNametxt = $("#chartNametxt").val();
					//console.log("chartNametxt:::::"+chartNametxt);
					/* if (dashboardid != "0")
					{
					  /*  if (tabid =="")
					   {
						   	alert("Please select tab!");
						   	return;
					   } 
					
					}
					else 
					{
					    // var _dashid  = $("#dash_id").val();
					     //var _chartid = $("#chart_id").val();
					} */
					
//alert ("globaltheme_chart  "+globaltheme_chart);
					if(globaltheme_chart == "darktheme_chart")
						{						
				 	    var theme_chart="DarkTheme";				 	    	
						}
					else
						{
						 var theme_chart="LightTheme";
						}
					
					
					if (chartNametxt.trim() =="")
					{
						alert("Please enter chart name");
						return;
					}
					
//					console.log("dashboardid:::::"+dashboardid);
//					console.log("tabname:::::"+tabname);
//					console.log("tabid:::::"+tabid);
					var chart_id = $("#chart_id").val();
					
					NProgress.start();
					$.ajax({method : "POST",					
						url : "./savechart",
						
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
							theme_:theme_chart,
						},
						success : function(data) 
						{
							
						
							NProgress.done(true);
							//console.log("result::::",data);
							
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
								//$("#btnSave").doNotify("Save successfully","info");
								alert("Save successfully");
							
								//$("#btnSave").notify("Save successfully!","success");
								$("#chart_id").val(sliceid);
								$("#chartname").val(chartNametxt); 
								$("#dash_id").val($("#dash_id").val()+","+dashboardid); 
								$("#tab_id").val($("#chart_id").val()+","+chart_id);
								//$("#descriptiopoup").model('hide');
								closeModal();
							}
							else 
							{
								//$("#btnSave").doNotify("Something went wrong","error");
							alert("Something went wrong");
								//$(".saved").notify("Something went wrong!","info"); 
								//$("#btnSave").notify("Something went wrong!","info");
							}
							
//							setTimeout(() => {
//								window.location.reload();
//							}, 2000);
							
						},
						error : function(data) {
							//console.log(data);
						}
					});
				});
				
				
				
				
$("#chartcard1, #chartcard2, #chartcard3,#chartcard4,#chartcard5,#chartcard6,#chartcard7,#chartcard8,#chartcard9,#chartcard10,#chartcard11,#chartcard12,#chartcard13,#chartcard14,#chartcard15,#chartcard16,#chartcard17 ,#chartcard18").click(
	function(e) 
	{
		//console.log("id-------------------"+this.id);
		$("#wrapper").toggleClass("toggled");
		
		if(this.id =="chartcard1" )
		{
		 
		$("#charttype").html("Histogram");
		$("#charttype").attr('data-bs-original-title', "Histogram").tooltip();
			//getDim("chartcard1");
		}
	 else if (this.id =="chartcard2")
		{	    					    					
		 $("#charttype").html("Bar");	
		 $("#charttype").attr('data-bs-original-title', "Bar").tooltip();
		 //getDim("chartcard2");
		}
		else if(this.id =="chartcard3" )
		{
			$("#charttype").html("Stacked Bar Chart");
			$("#charttype").attr('data-bs-original-title', "Stacked Bar Chart").tooltip();
			//getDim("chartcard3");
		}
		else if(this.id =="chartcard4" )
		{
			$("#charttype").html("Area Chart");	    
			$("#charttype").attr('data-bs-original-title', "Area Chart").tooltip();
			//getDim("chartcard4");
		}
		else if(this.id =="chartcard5" )
		{
			$("#charttype").html("Line Chart");
			$("#charttype").attr('data-bs-original-title', "Line Chart").tooltip();
			//getDim("chartcard5");
		}
	
		else if(this.id =="chartcard6" )
		{
			$("#charttype").html("Mix Chart");
			$("#charttype").attr('data-bs-original-title', "Mix Chart").tooltip();
			//getDim("chartcard6");
		}
		else if(this.id =="chartcard7" )
		{	    						
			$("#charttype").html("Stacked Bar Chart %");
			$("#charttype").attr('data-bs-original-title', "Stacked Bar Chart %").tooltip();
			//getDim("chartcard7");
		}
		else if(this.id =="chartcard8" )
		{
			$("#charttype").html("Pie Chart");
			$("#charttype").attr('data-bs-original-title', "Pie Chart").tooltip();
			//getDim("chartcard8");
		}
		else if(this.id =="chartcard9" )
		{
			$("#charttype").html("Donut Chart");
			$("#charttype").attr('data-bs-original-title', "Donut Chart").tooltip();
			//getDim("chartcard9");
		}
		else if(this.id =="chartcard10" )
		{
			$("#charttype").html("Bar 100%");
			$("#charttype").attr('data-bs-original-title', "Bar 100%").tooltip();
			//getDim("chartcard10");
		}
		else if(this.id =="chartcard11" )
		{
			$("#charttype").html("Stacked 100%");
			$("#charttype").attr('data-bs-original-title', "Stacked 100%").tooltip();
			//getDim("chartcard11");
		}
		else if(this.id =="chartcard12" )
		{
			$("#charttype").html("Pivot Table");
			$("#charttype").attr('data-bs-original-title', "Pivot Table").tooltip();
			//getDim("chartcard12");
		}
		else if(this.id =="chartcard13" )
		{
			$("#charttype").html("Colored");
			$("#charttype").attr('data-bs-original-title', "Colored").tooltip();
			//getDim("chartcard13");
		}
		else if(this.id =="chartcard14" )
		{
			$("#charttype").html("Scatter Plot");
			$("#charttype").attr('data-bs-original-title', "Scatter Plot").tooltip();
			//getDim("chartcard14");
		}
		else if(this.id =="chartcard15" )
		{
			$("#charttype").html("Bubble");
			$("#charttype").attr('data-bs-original-title', "Bubble").tooltip();
			//getDim("chartcard15");
		}
		else if(this.id =="chartcard16" )
		{
			$("#charttype").html("Single Value Chart");
			$("#charttype").attr('data-bs-original-title', "Single Value Chart").tooltip();
			//getDim("chartcard16");
		}
		else if(this.id =="chartcard17" )
		{
			$("#charttype").html("Table");
			$("#charttype").attr('data-bs-original-title', "Table").tooltip();
			//getDim("chartcard17");
		}
		else if(this.id =="chartcard18" )
		{
			$("#charttype").html("Bullet");
			$("#charttype").attr('data-bs-original-title', "Bullet").tooltip();
			//getDim("chartcard18");
		}
		
		
		
		/* if(this.id > 0)
		{
			getDim(this.id);
			
		}
		else 
		{
			globalchartType = this.id; 
			
			getDim(this.id);
		} */
		globalchartType = this.id; 
		
		getDim(this.id);
		
		$("#container1").show();
		$("#container1 > .highcharts-container").remove();
		$("#accordion").empty();
		
		//console.log('index:::'+index);	
		var imgAdd='<div class="cb-graph-css d-flex p-3 highcharts-container justify-content-center" ><img src="./resources/images/line_graph.png" style="width: 500px"></div>';
		$("#container1").append(imgAdd);
		$("#singlevaluediv").hide();
		$("#tablechartdiv").hide();
	});




$("#btnGetFields").click(function(e) {
	type = 1
	$.ajax({
		type : "POST",
		contentType : "application/json",
		url : "./getFields?type="
		+ type,
		dataType : 'text',
		success : function(result) {
			//console.log("result--"	+ result);
			jsonData = JSON.parse(result);
			table(jsonData);
							//charttype(jsonData);
							/* if (result != "") 
							{
							$("#tablename").val(result).change();
						} */
					},
					error : function(data) {
						//console.log(data);
					}
				});
});




var el=new Array();


/////-------------------Build Filter at Edit Mode 

function loadchart1()
{
	//d = new $.Deferred();
	
	edit_ModeFlag =1;
    getDim(type);
	
    $(".dropzone").empty();
	
    $("div.dropzonefilter").empty();
	
	$("#btnSave").text("Update");
	
	$("#menu-toggle").off('click');
	
	//$("#openDataset").off('click');
	
	$("#openDataset").removeAttr("onclick");
	
	
	//openDataset();
	//openDataset
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
			{
			return;
			}
		
		
		
		
		
		
		//alert("set chart call:::"+_id);   
		
		$.ajax({method : "POST",	
			async: false,
			url : "./setchart",
			data : {
				id : _id,
				dashID:_dashID,
			},
			success : function(result) {
	    	//console.log("result--");
	    	
	    	NProgress.done(true);
	    	//console.log("result arr :::::",result);
	    	
	    	
	    	
	    	
	    	var arr = result;
			var chart_id =0;
	    	  				//loop all fields
	    				var time = 5000;
	    				
	    				for (let k = 0; k < arr.length; k++) 
	    				{
	    						
	    				if (_id == arr[k].id)	
		    			{
	    					
	    					  
	    					  var theme = document.getElementById('theme_');
	    				      var dark_ = document.getElementById('dark_');
	    				      var darkjs_ = document.getElementById('darkjs_');
	    				      //var Chart_Theme =arr[k].chart_Theme;
	    					  var Chart_Theme =arr[k].chart_Theme;
	    					  var trim_charttheme = Chart_Theme.trim();
	    					//  console.log("trim_charttheme######## "+trim_charttheme);
		    					
	    					 //alert( $("#switch-3").val());
	    						
	    	    	  		  if(trim_charttheme == "DarkTheme")
	    	    	  		  {
	    	    	  		  
	    	    	  		 //alert("dark");
	    	    	  		// theme.removeAttribute('disabled');
	    	    	  		  //dark_.setAttribute('href', '<c:url value="/resources/css/dark-unica-dash.css"/>');
				    	    	  	    $("#dark_").removeAttr('href');	
				    	    	  	    $("#dark_").attr('href', '../resources/css/dark-unica-dash.css');	
				    	    	  	    $("#theme_").removeAttr('href');
			    	    	  		
	    	    	  		         globaltheme_chart ="darktheme_chart";
	    	    	  		  }
	    	    	  		  
	    	    	  		  else
	    	    	  		  {
	    	    	  		        // alert("light");
	    	    	  		        // alert( $("#switch-3").val())
	    	    	  		        //theme.setAttribute('disabled');
	    	    	  			
	    	    	  		            $("#dark_").removeAttr('href');
	    	    	  		            $("#dark_").attr('href', '../resources/css/dark-unica.css');													
	    	    	  		            $("#theme_").attr('href', '../resources/css/chart_light.css');
	    	    	  		            $("#theme_").prop('disabled' , false);
	    
	    	    	  		 		  globaltheme_chart ="lighttheme_chart";
	    	    	  		  
	    	    	  		  }
	    					
	    					
	    				 if(arr[k].viz_type =="Histogram" || arr[k].viz_type =="chartcard1" )
	    					{
	    					 chartnameSaved = arr[k].slice_name;
	    					$("#charttype").html("Histogram");
	    					$("#charttype").attr('data-bs-original-title', "Histogram").tooltip();
	    						getDim("chartcard1");
	    					}
	    				 else if (arr[k].viz_type =="Bar" || arr[k].viz_type =="chartcard2")
	    					{	 
	    					 
	    					 chartnameSaved = arr[k].slice_name;
	    					 $("#charttype").html("Bar");	
	    					 $("#charttype").attr('data-bs-original-title', "Bar").tooltip();
	    					 getDim("chartcard2");
	    					}
	    					else if(arr[k].viz_type =="Stacked Bar Chart" || arr[k].viz_type =="chartcard3" )
	    					{
	    						$("#charttype").html("Stacked Bar Chart");
	    						$("#charttype").attr('data-bs-original-title', "Stacked Bar Chart").tooltip();
	    						getDim("chartcard3");
	    						chartnameSaved = arr[k].slice_name;
	    					}
	    					else if(arr[k].viz_type =="Area Chart" || arr[k].viz_type =="chartcard4" )
	    					{
	    						$("#charttype").html("Area Chart");	    
	    						$("#charttype").attr('data-bs-original-title', "Area Chart").tooltip();
	    						getDim("chartcard4");
	    						chartnameSaved = arr[k].slice_name;
	    					}
	    					else if(arr[k].viz_type =="Line Chart" || arr[k].viz_type =="chartcard5" )
	    					{
	    						$("#charttype").html("Line Chart");
	    						$("#charttype").attr('data-bs-original-title', "Line Chart").tooltip();
	    						getDim("chartcard5");
	    						chartnameSaved = arr[k].slice_name;
	    					}
	    				
	    					else if(arr[k].viz_type =="Mix Chart" || arr[k].viz_type =="chartcard6" )
	    					{
	    						$("#charttype").html("Mix Chart");
	    						$("#charttype").attr('data-bs-original-title', "Mix Chart").tooltip();
	    						getDim("chartcard6");
	    						chartnameSaved = arr[k].slice_name;
	    					}
	    					else if(arr[k].viz_type =="Stacked Bar Chart %"  || arr[k].viz_type =="chartcard7" )
	    					{	    						
	    						$("#charttype").html("Stacked Bar Chart %");
	    						$("#charttype").attr('data-bs-original-title', "Stacked Bar Chart %").tooltip();
	    						getDim("chartcard7");
	    						chartnameSaved = arr[k].slice_name;
	    					}
	    					else if(arr[k].viz_type =="Pie Chart" || arr[k].viz_type =="chartcard8" )
	    					{
	    						$("#charttype").html("Pie Chart");
	    						$("#charttype").attr('data-bs-original-title', "Pie Chart").tooltip();
	    						getDim("chartcard8");
	    						chartnameSaved = arr[k].slice_name;
	    					}
	    					else if(arr[k].viz_type =="Donut Chart" || arr[k].viz_type =="chartcard9" )
	    					{
	    						$("#charttype").html("Donut Chart");
	    						$("#charttype").attr('data-bs-original-title', "Donut Chart").tooltip();
	    						getDim("chartcard9");
	    						chartnameSaved = arr[k].slice_name;
	    					}
	    					else if(arr[k].viz_type =="Bar 100%" || arr[k].viz_type =="chartcard10" )
	    					{
	    						$("#charttype").html("Bar 100%");
	    						$("#charttype").attr('data-bs-original-title', "Bar 100%").tooltip();
	    						getDim("chartcard10");
	    						chartnameSaved = arr[k].slice_name;
	    					}
	    					else if(arr[k].viz_type =="Stacked 100%" || arr[k].viz_type =="chartcard11" )
	    					{
	    						$("#charttype").html("Stacked 100%");
	    						$("#charttype").attr('data-bs-original-title', "Stacked 100%").tooltip();
	    						getDim("chartcard11");
	    						chartnameSaved = arr[k].slice_name;
	    					}
	    					else if(arr[k].viz_type =="Pivot Table" || arr[k].viz_type =="chartcard12" )
	    					{
	    						$("#charttype").html("Pivot Table");
	    						$("#charttype").attr('data-bs-original-title', "Pivot Table").tooltip();
	    						getDim("chartcard12");
	    						chartnameSaved = arr[k].slice_name;
	    					}
	    					else if(arr[k].viz_type =="Colored" || arr[k].viz_type =="chartcard13" )
	    					{
	    						$("#charttype").html("Colored");
	    						$("#charttype").attr('data-bs-original-title', "Colored").tooltip();
	    						getDim("chartcard13");
	    						chartnameSaved = arr[k].slice_name;
	    					}
	    					else if(arr[k].viz_type =="Scatter Plot" || arr[k].viz_type =="chartcard14" )
	    					{
	    						$("#charttype").html("Scatter Plot");
	    						$("#charttype").attr('data-bs-original-title', "Scatter Plot").tooltip();
	    						getDim("chartcard14");
	    						chartnameSaved = arr[k].slice_name;
	    					}
	    					else if(arr[k].viz_type =="Bubble" || arr[k].viz_type =="chartcard15" )
	    					{
	    						$("#charttype").html("Bubble");
	    						$("#charttype").attr('data-bs-original-title', "Bubble").tooltip();
	    						getDim("chartcard15");
	    						chartnameSaved = arr[k].slice_name;
	    					}
	    					else if(arr[k].viz_type =="Single Value Chart" || arr[k].viz_type =="chartcard16" )
	    					{
	    						$("#charttype").html("Single Value Chart");
	    						$("#charttype").attr('data-bs-original-title', "Single Value Chart").tooltip();
	    						$("#single_value_name").html(chartnameSaved); 
	    						getDim("chartcard16");
	    						chartnameSaved = arr[k].slice_name;
	    					}
	    					else if(arr[k].viz_type =="Table" || arr[k].viz_type =="chartcard17" )
	    					{
	    						$("#charttype").html("Table");
	    						$("#charttype").attr('data-bs-original-title', "Table").tooltip();
	    						$("#table_chart_name").html(chartnameSaved);  
	    						getDim("chartcard17");
	    						chartnameSaved = arr[k].slice_name;
	    					}
	    					else if(arr[k].viz_type =="Bullet" || arr[k].viz_type =="chartcard18" )
	    					{
	    						$("#charttype").html("Bullet");
	    						$("#charttype").attr('data-bs-original-title', "Bullet").tooltip();
	    						getDim("chartcard18");
	    						chartnameSaved = arr[k].slice_name;
	    					}
	    				
	    				 var dsname= arr[k].containerid
	    				 //console.log("dsname::::::::::::::"+dsname);
	    				 $("#dataobjectname").show();
	    				 $("#dataobjectname").html(dsname) ; 
	    				    
	    				 
	    					globalselectedtabnlename = arr[k].datasource_name;
	    					
	    				//	console.log("globalselectedtabnlename::::::"+globalselectedtabnlename);
	    					
	    					setFieldList(dsname,globalselectedtabnlename,"");
	    						
	    					  
	    					$("#btnGetFields").trigger("click");
	    					//console.log('query_context'); 
	    					
	    					chart_id = arr[k].id;
	    					$("#chart_id").val(chart_id);   
	    					
	    					
	    					
	    					
	    					/* if(arr[k].viz_type == "chartcard17")
	    						{
	    						$("#table_chart_name").html(chartnameSaved);  
	    						}
	    					if(arr[k].viz_type == "chartcard17")
    						{
    						$("#table_chart_name").html(chartnameSaved);  
    						} */
	    					     //table_chart_name
	    					// $("#charttype").html(chartName_) ;
	    					//  $("#charttype").attr('data-bs-original-title', chartName_).tooltip();
//	    					console.log("arr[k].slice_name::::::::::::::"+chartName_);
//	    					console.log("arr[k].dashboard_title::::::::::::::"+arr[k].dashboard_title);
//	    					console.log("arr[k].dashTabName::::::::::::::"+arr[k].dashTabName);
	    					dashboard_title =arr[k].dashboard_title;
	    					
	    					
	    					selectedtabid = arr[k].datasource_type; 
	    					selectedtabname =  arr[k].dashTabName;
	    					
	    					
	    					//alert("selectedtabid::::"+selectedtabid);
	    					//alert("selectedtabname::::"+selectedtabname);
	    					
	    					
	    					
	    					dashTabName =arr[k].dashTabName;
	    					getDashboardlist();
	    					$("#chartname").show();
		    					if (arr[k].slice_name != "")
		    					{
			    					$("#chartNametxt").val(arr[k].slice_name);
			    					document.getElementById("chartNametxt").disabled = true;
			    								    					
			    					$("ul#dashboardlistData li").attr("disabled","disabled")
			    					//$("ul#dashboardlistData li").off('setTabList');
			    					$("ul#dashboardlistData li").prop('onclick', null);
			    					
		    					 }
	    					
		    					
	    					var queryArr = JSON.parse(arr[k].query_context);
	    					var filterArr = JSON.parse(arr[k].filter_context);
	    					
//	    					console.log('filterArr',filterArr);
//	    					console.log('queryArr',queryArr);
//	    					
//	    					console.log("filterArr.length:::::"+filterArr.length);
	    					
	    					var table_loadchart1 =globalselectedtabnlename;
	    						//globalselectedtabnlename;
	    					//console.log("table_loadchart1:::::::::  "+table_loadchart1);
	    					
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
				    			
				    			
				    			
				    			  var optionselected= filterArr[j][0].filterselecttypevalue;
            
				                    var option1 ="";
				                    var option2 ="";
				                    var option3 ="";

				                    if(optionselected == "adv")
				                 	{
				                    //  $("#select_option option:selected" ).val(); 
				                      option1 = "selected";
				  
				                 	}
				                 else if(optionselected == "topn")
					             	{
					                 	//$("#select_option option:selected" ).val(); 
					                 	option2 = "selected";
					             	}
				                 else if(optionselected == "basicfiltering")
					             	{
					                 	
					                 	option3 = "selected";
					                 	var set_userlimitBasic = filterArr[j][0].userLimit_basic;
										var checkedValue = "";
					                 	var set_userBasic_check = filterArr[j][0].limitBasic_check;
										 console.log("set_userlimitBasic---"+set_userlimitBasic);
										 console.log("set_userBasic_check---"+set_userBasic_check);
										 var checkedValue = "";
											if(set_userBasic_check == 0)
												{
													
													 $('#numberofrowsdivs_basic'+j).hide();
													
													
												}
											else
												{
											
												checkedValue = "checked";
												 $('#numberofrowsdivs_basic'+j).show();
												}
											
												
					                 	
					                 	onChangedata(j ,table_loadchart1);
					                 	
					                 	
					                 	
					             	}
				                    
				                    
								   var optionselectedADV1= filterArr[j][0].filterselect1;
								  // var optionselectedADV2= filterArr[j][0].filterselect2;
				                    var option11 ="";
				                    var option12 ="";
				                    var option13 ="";
				                    var option14 ="";
				                    var option15 ="";
				                    var option16 ="";
				                    var option17 ="";
				                    var option18 ="";
				                    var option19 ="";
				                    var option10 ="";
								   if( optionselectedADV1 == "contains")
									    {										                     
									      option11 = "selected";
										}
								   else if( optionselectedADV1 == "does not contain")
									   {
									   option12 = "selected";
                                       }
								   else if(optionselectedADV1 == "starts with")
									   {        
									   option13 = "selected";
									   }
								   else if( optionselectedADV1 == "does not start with")
									   {
									   option14 = "selected";
                                       }
							      else if(optionselectedADV1 == "is")
									   {        
							    	  option15 = "selected";
									   }
							      else if( optionselectedADV1 == "is not")
									   {
							    	  option16 = "selected";
                                       }
						          else if(optionselectedADV1 == "is blank")
									   {        
						        	  option17 = "selected";
									   }
						          else if(optionselectedADV1 == "is not blank")
									   {        
						        	  option18 = "selected";
									   }
						          else if( optionselectedADV1 == "is empty")
									   {
						        	  option19 = "selected";
	                                   }
					              else if(optionselectedADV1 == "is not empty")
									   {        
					            	  option10 = "selected";
									   }
								   
								   var optionselectedADV2= filterArr[j][0].filterselect2;											 
					                    var option21 ="";
					                    var option22 ="";
					                    var option23 ="";
					                    var option24 ="";
					                    var option25 ="";
					                    var option26 ="";
					                    var option27 ="";
					                    var option28 ="";
					                    var option29 ="";
					                    var option20 ="";
									   if( optionselectedADV2 == "contains")
										    {										                     
										      option21 = "selected";
											}
									   else if( optionselectedADV2 == "does not contain")
										   {
										   option22 = "selected";
                                           }
									   else if(optionselectedADV2 == "starts with")
										   {        
										   option23 = "selected";
										   }
									   else if( optionselectedADV2 == "does not start with")
										   {
										   option24 = "selected";
                                           }
								      else if(optionselectedADV2 == "is")
										   {        
								    	  option25 = "selected";
										   }
								      else if( optionselectedADV2 == "is not")
										   {
								    	  option26 = "selected";
	                                       }
							          else if(optionselectedADV2 == "is blank")
										   {        
							        	  option27 = "selected";
										   }
							          else if(optionselectedADV2 == "is not blank")
										   {        
							        	  option28 = "selected";
										   }
							          else if( optionselectedADV2 == "is empty")
										   {
							        	  option29 = "selected";
		                                   }
						              else if(optionselectedADV2 == "is not empty")
										   {        
						            	  option20 = "selected";
										   }
									  
									   
									   
				    			
									   var comparisontxt = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:14px;top: -21px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+j+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+j+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+j+"' disabled><option value='adv'  "+option1+" >Advance</option><option value='topn'  "+option2+">Top N</option><option value='basicfiltering' "+option3+" >Basic Filtering</option></select><div class='mt-2' id='optiondivtopn"+j+"' style=''><select class='form-control' id='top_bottom' style='display:none;'><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+j+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
	    								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+j+")'><option value='contains' "+option11+">contains</option><option value='does not contain' "+option12+">does not contain</option><option value='starts with' "+option13+">starts with</option><option value='does not start with' "+option14+">does not start with</option><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is blank' "+option17+">is blank</option><option value='is not blank' "+option18+">is not blank</option><option value='is empty' "+option19+">is empty</option><option value='is not empty' "+option10+">is not empty</option></select></div>"
	    								+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+j+"'  onblur='filtervaluekeyup("+j+")'></div>"
	    								+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+"andor' id='and"+j+"' value='and' checked><label class='css-iwo4qd' for='and"+j+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+"andor' id='or"+j+"' value='or' onchange='andorChange("+j+")'><label class='css-iwo4qd' for='or"+j+"'>Or </label></div></div>"
	    								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+j+")'><option value='contains' "+option21+">contains</option><option value='does not contain' "+option22+">does not contain</option><option value='starts with' "+option23+">starts with</option><option value='does not start with' "+option24+">does not start with</option><option value='is' "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is blank' "+option27+">is blank</option><option value='is not blank' "+option28+">is not blank</option><option value='is empty' "+option29+">is empty</option><option value='is not empty' "+option20+">is not empty</option></select></div>"
	    								+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+j+"' onblur='filterinvaluekeyup("+j+")'></div></div>"
	    								+"<div class='cb-range-form-div mt-2' id='basicfiltercheck"+j+"' style='display:none'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form mb-0'><label class='css-12xei9w'><input type='checkbox' id='limitvalue_basic"+j+"' "+checkedValue+" class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' onclick='limitbasicvalue("+accordianind+")' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Limit Value</span></label></div></div></div></div>"
	    								+"<div class='cb-range-form-div' id='numberofrowsdivs_basic"+j+"' style='display:none'><div class='cb-range-Label'><span class='label'><div class='cb-range-text'>Number of rows</div></span><div class='cb-input-css'><input type='number' list='numberlist_basic' id='numberofrows_basic"+j+"' name='numberofrows_basic"+j+"' class='form-control' value="+set_userlimitBasic+" min='5' max='50000'/><datalist id='numberlist_basic'><option value='5000'>5000</option><option value='10000'>10000</option><option value='25000'>25000</option><option value='50000'>50000</option></datalist></div></div></div>"	    								
	    								+"<div id='basicselectdiv"+j+"' style='display:none'><div class='mt-2 cb-basic-height'><ul class='list-group' id='selectbasicdata"+j+"' ></ul></div></div>"
	    								+"<div id='topnselectdiv"+j+"' value= '"+ filterArr[j][0].filterselecttypevalue+"'><div class='mt-2'><span>Show items</span><select id='filtertopn"+j+"' value ='"+ filterArr[j][0].filtertopn+"'  class='form-control'><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' value='"+filterArr[j][0].filtertopvalue+"' id='topninput"+j+"'  onblur='topninput("+j+")' autocomplete='off'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>";


	    			    				var comparisonnumber = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:14px;top: -21px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+j+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+j+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+j+"' disabled><option value='adv'  "+option1+" >Advance</option><option value='topn'  "+option2+">Top N</option><option value='basicfiltering' "+option3+" >Basic Filtering</option></select><div class='mt-2' id='optiondivtopn"+j+"' style=''><select class='form-control' id='top_bottom' style='display:none;'><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+j+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
	    								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+j+")'><option value='contains' "+option11+">contains</option><option value='does not contain' "+option12+">does not contain</option><option value='starts with' "+option13+">starts with</option><option value='does not start with' "+option14+">does not start with</option><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is blank' "+option17+">is blank</option><option value='is not blank' "+option18+">is not blank</option><option value='is empty' "+option19+">is empty</option><option value='is not empty' "+option10+">is not empty</option></select></div>"
	    								+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+j+"' onblur='filtervaluekeyup("+j+")'></div>"
	    								+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+"andor' id='and"+j+"' value='and' checked onchange='andorChange("+j+")'><label class='css-iwo4qd' for='and"+j+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+"andor' id='or"+j+"' value='or' onchange='andorChange("+j+")'><label class='css-iwo4qd' for='or"+j+"'>Or </label></div></div>"
	    								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+j+")'><option value='contains' "+option21+">contains</option><option value='does not contain' "+option22+">does not contain</option><option value='starts with' "+option23+">starts with</option><option value='does not start with' "+option24+">does not start with</option><option value='is' "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is blank' "+option27+">is blank</option><option value='is not blank' "+option28+">is not blank</option><option value='is empty' "+option29+">is empty</option><option value='is not empty' "+option20+">is not empty</option></select></div>"
	    								+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+j+"' onblur='filterinvaluekeyup("+j+")'></div></div>"
	    								+"<div class='cb-range-form-div mt-2' id='basicfiltercheck"+j+"' style='display:none'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form mb-0'><label class='css-12xei9w'><input type='checkbox' id='limitvalue_basic"+j+"' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' onclick='limitbasicvalue("+accordianind+")' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Limit Value</span></label></div></div></div></div>"
	    								+"<div class='cb-range-form-div' id='numberofrowsdivs_basic"+j+"' style='display:none;'><div class='cb-range-Label'><span class='label'><div class='cb-range-text'>Number of rows</div></span><div class='cb-input-css'><input type='number' list='numberlist_basic' id='numberofrows_basic"+j+"' name='numberofrows_basic"+j+"' class='form-control' value="+set_userlimitBasic+" min='5' max='50000'/><datalist id='numberlist_basic'><option value='5000'>5000</option><option value='10000'>10000</option><option value='25000'>25000</option><option value='50000'>50000</option></datalist></div></div></div>"	    									    								
	    								+"<div id='basicselectdiv"+j+"' style='display:none'><div class='mt-2 cb-basic-height'><ul class='list-group' id='selectbasicdata"+j+"' ></ul></div></div>"
	    								+"<div id='topnselectdiv"+j+"' value= '"+ filterArr[j][0].filterselecttypevalue+"' /* style='display:none' */><div class='mt-2'><span>Show items</span><select id='filtertopn"+j+"' class='form-control'><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' value='"+filterArr[j][0].filtertopvalue+"' id='topninput"+j+"'  onblur='topninput("+j+")' autocomplete='off'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>";

	    								
	    								var comparisondate = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:14px;top: -21px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+j+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+j+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+j+"' disabled><option value='adv' "+option1+">Advance</option><option value='topn'  "+option2+">Top N</option><option value='basicfiltering' "+option3+" >Basic Filtering</option></select><div class='mt-2' id='optiondivtopn"+j+"'></div><div id='optiondivselect"+j+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
	    								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+j+")'><option value='contains' "+option11+">contains</option><option value='does not contain' "+option12+">does not contain</option><option value='starts with' "+option13+">starts with</option><option value='does not start with' "+option14+">does not start with</option><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is blank' "+option17+">is blank</option><option value='is not blank' "+option18+">is not blank</option><option value='is empty' "+option19+">is empty</option><option value='is not empty' "+option10+">is not empty</option></select></div>"
	    								+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+j+"' onblur='filtervaluekeyup("+j+")'></div>"
	    								+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+"andor' id='and"+j+"' value='and' checked onchange='andorChange("+j+")'><label class='css-iwo4qd' for='and"+j+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+"andor' id='or"+j+"' value='or' onchange='andorChange("+j+")'><label class='css-iwo4qd' for='or"+j+"'>Or </label></div></div>"
	    								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+j+")'><option value='contains' "+option21+">contains</option><option value='does not contain' "+option22+">does not contain</option><option value='starts with' "+option23+">starts with</option><option value='does not start with' "+option24+">does not start with</option><option value='is' "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is blank' "+option27+">is blank</option><option value='is not blank' "+option28+">is not blank</option><option value='is empty' "+option29+">is empty</option><option value='is not empty' "+option20+">is not empty</option></select></div>"
	    								+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+j+"' onblur='filterinvaluekeyup("+j+")'></div></div>"
	    								+"<div class='cb-range-form-div mt-2' id='basicfiltercheck"+j+"' style='display:none'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form mb-0'><label class='css-12xei9w'><input type='checkbox' id='limitvalue_basic"+j+"' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' onclick='limitbasicvalue("+accordianind+")' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Limit Value</span></label></div></div></div></div>"
	    								+"<div class='cb-range-form-div' id='numberofrowsdivs_basic"+j+"' style='display:none;'><div class='cb-range-Label'><span class='label'><div class='cb-range-text'>Number of rows</div></span><div class='cb-input-css'><input type='number' list='numberlist_basic' id='numberofrows_basic"+j+"' name='numberofrows_basic"+j+"' class='form-control' value="+set_userlimitBasic+" min='5' max='50000'/><datalist id='numberlist_basic'><option value='5000'>5000</option><option value='10000'>10000</option><option value='25000'>25000</option><option value='50000'>50000</option></datalist></div></div></div>"	    									    								
	    								+"<div id='basicselectdiv"+j+"' style='display:none'><div class='mt-2 cb-basic-height'><ul class='list-group' id='selectbasicdata"+j+"' ></ul></div></div>"
	    								+"<div id='topnselectdiv"+j+"' value= '"+ filterArr[j][0].filterselecttypevalue+"' style='display:none'><div class='mt-2'><span>Show items</span><select id='filtertopn"+j+"' class='form-control'><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' value='"+filterArr[j][0].filtertopvalue+"' id='topninput"+j+"'  onblur='topninput("+j+")' autocomplete='off'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>	";
								
				    				var elfitemfilter="";

				    				elfitemfilter = "<div class='column-card DataMapping_column-card__2VBWp ui-draggable ui-draggable-handle dropzoneselect'  draggable='true' "
				    				+ "data-field='"+filterArr[j][0].Field +"' data-types='"+filterArr[j][0].Types+"' > <span class='datatype'>"+sym+"</span>"
				    				+ "<span class='DataMapping_column-title__2yLXi' data-bs-toggle='tooltip' title='"+filterArr[j][0].Field+"'>"+filterArr[j][0].Field+"</span><span style='text-align: -webkit-right;'><a href='Javascript:void(0);' class='xicon delete'  title='Remove'><i class='fa fa-times' aria-hidden='true'></i></a></span>"
//debugger;
				    				
				    				 if(optionselected == "adv")
					                 	{
					                    //  $("#select_option option:selected" ).val(); 
					                      option1 = "selected";
					                      setTimeout(() => {
					                    	  $("#optiondivselect"+j).show(); 
											  $("#topnselectdiv"+j).hide();
											  $("#basicselectdiv"+j).hide();
											  $("#basicfiltercheck"+j).hide();
											  $("#numberofrows_basic"+j).hide();
											  $('#numberofrowsdivs_basic'+j).hide();		
										}, 2000);
					                      
					                 	}
					                 else if(optionselected == "topn")
						             	{
						                 	//$("#select_option option:selected" ).val(); 
						                 	option2 = "selected";
						                 	setTimeout(() => {
						                 		$("#optiondivselect"+j).hide(); 
											    $("#topnselectdiv"+j).show();
											    $("#basicselectdiv"+j).hide();
											    $("#basicfiltercheck"+j).hide();
											    $("#numberofrows_basic"+j).hide();
											    $('#numberofrowsdivs_basic'+j).hide();			
											}, 2000);
						                 	
						             	}
					                 else if(optionselected == "basicfiltering")
						             	{
						                 	//$("#select_option option:selected" ).val(); 
					                	
						                 	option2 = "selected";
						                 	setTimeout(() => {
						                 		$("#basicfiltercheck"+j).show();
						                 		$("#optiondivselect"+j).hide(); 
											    $("#topnselectdiv"+j).hide();
											    $("#basicselectdiv"+j).show();
											    $('#numberofrows_basic'+j).val(set_userlimitBasic);
												
//													if(set_userlimitBasic > 0)
//													{
//													$("#limitvalue_basic"+selectcount":checked").prop("checked");
//													// $("#limitvalue_basic"+selectcount).prop('checked');
//												            alert("Checked Box Selected");
//												             $("#numberofrowsdivs_basic"+selectcount).show();
//												       
//													
//													}
										
											    selectBasicFilter_set(j,filterArr[j][0].basic_Fil_Val_Array ,table_loadchart1,set_userlimitBasic);
											    
											    if(set_userBasic_check == 0)
													{								
													 $('#numberofrowsdivs_basic'+j).hide();					
													}
										        else
													{							
													 $('#numberofrowsdivs_basic'+j).show();
													}
											    
											    $('#numberofrows_basic'+j).change(function() {
													//alert("numberofrows_basic@@@@@");
													var basic_userlimit=$("#numberofrows_basic"+j).val();
												
													//console.log('basic_userlimit:::'+basic_userlimit);	
													 selectBasicFilter_set(j,filterArr[j][0].basic_Fil_Val_Array ,table_loadchart1,set_userlimitBasic);
												   
												});
											    
											}, 1000);
						                 	
						             	}
				    				
				    			
				    				
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
				    			
				    			//console.log("elfitemfilter:::::",elfitemfilter);
				    			
				    			$('.dropzonefilter').append(elfitemfilter);
				    			
				    			
				    		}
				    		
						//	console.log("queryArr.length:::::"+queryArr.length);
							
			setTimeout(() => {
				
				
				
	    		for(var i = 0; i < queryArr.length; i++)
	    		{
//	    			console.log('dim Series',queryArr[i][0].Series);
//	    			console.log(queryArr[i][0].Field);
//	    			console.log(queryArr[i][0].Datatype);
//	    			console.log(queryArr[i][0].Agg);

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
	    				+"<span class='DataMapping_column-title__2yLXi' data-bs-toggle='tooltip' title='"+queryArr[i][0].Field+"'>"+queryArr[i][0].Field+"</span>";

	    				//console.log("queryArr[i][0].Agg:::::"+queryArr[i][0].Agg);
	    				
	    				if(queryArr[i][0].Agg !='')
	    				{
	    					elitem = elitem 
	    					+"<div class='selectaxisdiv' style='width:150px'><ul class='list-unstyled cb-custom-dropdown'>"
	    					+"<li onclick='openDropCartyaxis("+i+" ,event)' ><i class='fa fa-caret-down' aria-hidden='true'></i>&nbsp;<span id='yaxisdivtext"+i+"'>Aggregate</span></li></ul>"
	    					+"<div class='dropdown-cart cb-yaxisdiv' id='opencartyaxis"+i+"' style='display: none;' >"
	    					+"<div class='cb-cursor' onclick='closeDropCartyaxis("+i+" ,event)' style='float: right;right: 11px;position: absolute;top: 4px;'><i class='fa fa-times' aria-hidden='true'></i></div>"
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
	    				+"<a href='Javascript:void(0);'  class='xicon delete'  title='Remove'><i class='fa fa-times' aria-hidden='true'></i></a></span>"
	    				+"</div>";    
	    				
	    				//console.log("elitem::::::",elitem);
//	    				console.log("queryArr[i][0].Series:::::"+queryArr[i][0].Series);
//	    				
//	    				console.log("queryArr[i][0]"+queryArr[i][0]);
//	    				
//	    				console.log("queryArr[i][0].BinSize:::::"+queryArr[i][0].BinSize);
	    				$('div.dropzone.'+queryArr[i][0].Series).append(elitem);
	    				
	    				$("#aggregateval"+i).val(queryArr[i][0].Agg);
	    				
	    				$("#bintype"+i).val(queryArr[i][0].BinType);
						
//	    				console.log("elitem::::::",elitem);
//						console.log("time::::::"+time);

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

		
	}, 2000);
	  
	  
/*	  var theme = document.getElementById('theme_');
      var dark_ = document.getElementById('dark_');
      var darkjs_ = document.getElementById('darkjs_');
      //var Chart_Theme =arr[k].chart_Theme;
	  var Chart_Theme =arr[k].chart_Theme;
	  var trim_charttheme = Chart_Theme.trim();
	 */
	  
	 // console.log("Chart_Theme:::::::"+trim_charttheme);
	  

       
	   	 }
	    				//$("#btnChart").trigger("click");
	    	  			
			}	    
	    				NProgress.start();
	    	  		setTimeout(() => 
	    	  		{
	    	  		
	    	  			
	    	  		/*	
	    	  		  if(trim_charttheme == "DarkTheme")
	    	  		  {
	    	  		  
	    	  		 //alert("dark");
	    	  		// theme.removeAttribute('disabled');
	    	  		  //dark_.setAttribute('href', '<c:url value="/resources/css/dark-unica-dash.css"/>');
	    	  		$("#dark_").removeAttr('href');	
	    	  		 $("#dark_").attr('href', './resources/css/dark-unica-dash.css');	
	    	  		$("#theme_").removeAttr('href');
	    	  		          $("#switch-3").prop('checked' , false);
	    	  		          globaltheme_chart ="darktheme_chart";
	    	  		  }
	    	  		  
	    	  		  else
	    	  		  {
	    	  		        // alert("light");
	    	  		      
	    	  		        //theme.setAttribute('disabled');
	    	  			
	    	  		            $("#dark_").removeAttr('href');
	    	  		            $("#dark_").attr('href', './resources/css/dark-unica.css');													
	    	  		            $("#theme_").attr('href', './resources/css/chart_light.css');
	    	  		            $("#theme_").prop('disabled' , false);
	    	  			
	    	  		        $("#switch-3").prop('checked' , true);
	    	  		 		globaltheme_chart ="lighttheme_chart";
	    	  		 
	    	  		  
	    	  		  }*/
	    	  		  if(trim_charttheme == "DarkTheme")
		    	  		  {
	    	  			$("#switch-3").prop('checked' , false);
		    	  		  }
	    	  		  else
	    	  			  {
	    	  			$("#switch-3").prop('checked' , true);
	    	  			  }
	    	  			$("#selectdimension").hide();
	    	  			$("#btnChart").trigger("click");
	    	  			NProgress.done(true);
			    	  	
					},2000);		
	    	  				


	    },
	    error : function(data) { 
	    	NProgress.done(true);
	    	//console.log(data);
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
//				console.log('el--'+el.length);
//				console.log("**********",el);
			//var l="";
			for (i=0;i<el.length;i++){  
				//setTimeout(() => { 
					//console.log('el[i]');
					//console.log(el[i]);
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
			//alert("sdsdsds");
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
				//console.log("1st");
				resolve();
			});   
		}

		function second() {
			return new Promise((resolve) => {
				//console.log("2nd");
				resolve();
			});
		}
		
	//end load
});


function getTablelist()
{

	$.ajax({type : "POST",
		async:false,
		url : './getTablelist',		
		success : function(result) {
			//console.log("data:::::"+JSON.stringify( result));
			setDropdown(result);
		},
		error : function(data) {
			//console.log(data);
		}
	});

}




function setDropdown(data)
{

	var selected='';
	var userHTML='';
//	console.log("len:::::"+data.length);
	
	
	for(var v=0;v<data.length;v++)
	{
		userHTML+='<li class="cb-cursor"><div class="d-flex justify-content-start align-items-center"><div class="cb-range-form-div me-2"><div class="cb-range-Label"><div class="form-inline"><div class="cb-form"><label class="css-12xei9w"><input  type="checkbox" id="chkDeploy'+v+'" value="'+data[v].viz_type+'" onclick="setTotalRecordCount('+v+')" class="css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus"><span class="css-a2zrvp"></span></label></div></div> </div></div><div class="me-2"><i class="fa fa-database" aria-hidden="true"></i></div><div class="me-2 text-ecllipsis" title="'+data[v].slice_name+'" onclick="setFieldList(\''+data[v].slice_name+'\',\''+data[v].viz_type+'\','+v+')">'+data[v].slice_name+'</div></div></li>';
		//userHTML+='<option value="'+data[v].viz_type+'"  '+selected+' >'+data[v].slice_name+'</option>';
	}
	$('#tablelistDatas').html(userHTML);


}


function getDashboardlist()
{

	$.ajax(
		{type : "POST",
		async:false,
		url : './getDashboardlist',		   
		success : function(result) {
			//console.log("data:::::"+JSON.stringify( result));
			setDropdownDashboard(result);
		},
		error : function(data) {
			//console.log(data);
		}
	});

}


function setDropdownDashboard(data)
{

	var selected='';
	var userHTML='';
	//console.log("len:::::"+data.length);
	
	for(var v=0;v<data.length;v++)
	{
		var vizType = data[v].viz_type;
		
	if (dashboard_title == data[v].slice_name )
		{
		//alert("dashboard_title");
		//console.log("data[v]::::",data[v]);
		userHTML+='<li id="dashli'+v+'"  class="dashliclass cb-cursor active" value = "'+data[v].slice_name+'"  onclick="setTabList(\''+data[v].viz_type+'\','+v+')"><div class="d-flex justify-content-start align-items-center"><div class="me-2"><i class="fa fa-database" aria-hidden="true"></i></div><div class="me-2"  >'+data[v].slice_name+'</div></div></li>';
		setTabList(vizType,v);
		}
	else		
		{
	//	console.log("data[v]::::",data[v]);
		userHTML+='<li id="dashli'+v+'"  class="dashliclass cb-cursor" value = "'+data[v].slice_name+'"  onclick="setTabList(\''+data[v].viz_type+'\','+v+')"><div class="d-flex justify-content-start align-items-center"><div class="me-2"><i class="fa fa-database" aria-hidden="true"></i></div><div class="me-2"  >'+data[v].slice_name+'</div></div></li>';
		}

    }
	if($('.dashliclass').hasClass('active'))
		{
	//	console.log("dashliclass active "+vizType);
		
		setTabList(vizType,v);
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
			url : "./getDashboardtablist?dashid="+dashid,
			dataType : 'text',
			success : function(result) {
				//console.log("result 2--"	+ result);
				jsonData = JSON.parse(result);
				tablist_(jsonData);
		//charttype(jsonData);
		/* if (result != "") 
		{
		$("#tablename").val(result).change();
	} */
},
error : function(data) {
	//console.log(data);
}
});
		
		
	}
	
	
function tablist_(data) 
{
	
	var selected='';
	var userHTML='';
	//console.log("len:::::"+data.length);
	//console.log("data:::::tablist_",data);
	
	for(var v=0;v<data.length;v++)
	{
		//console.log("data[v].slice_name:::::tablist_",data[v].slice_name);
	
		//if(data[v].slice_name == )
	if (dashTabName == data[v].slice_name)
		{
		userHTML+='<li id="tabli'+v+'" class="tabliclass cb-cursor active " value = \''+data[v].slice_name+'\' onclick="setTabid(\''+data[v].viz_type+'\',\''+data[v].slice_name+'\','+v+')">'+data[v].slice_name+'</li>';
		}
	else 
		{
		userHTML+='<li id="tabli'+v+'" class="tabliclass cb-cursor " value = \''+data[v].slice_name+'\' onclick="setTabid(\''+data[v].viz_type+'\',\''+data[v].slice_name+'\','+v+')">'+data[v].slice_name+'</li>';
		
		}
	}
	$('#tablistData').html(userHTML);
	
}



function setTabid(tabid,name,index)
{
	//alert("name:::"+name);
//	 console.log("tabid  "+tabid);
//	 console.log("name  "+name);
	 //alert("edit_ModeFlag ::: " +edit_ModeFlag);
if (edit_ModeFlag == 0)
{
	$(".tabliclass").removeClass("active");
	$("#tabli"+index).addClass("active");

//alert("setTabid");

selectedtabid = tabid;
selectedtabname= name;
if(tabid == "")
	{
	 selectedtabid = $(".tabliclass.active").text();
	 
	// console.log("selectedtabid  "+selectedtabid);
	}
	 
}

	
	}


function setFieldList(name,value,index)
{
	globalselectedtabnlename = "PT84430568S";//value;
//	globalselectedtabnlename = value;
	
	///clean while selecting new dataset##########
	$("#container1").show();
	$("#container1 > .highcharts-container").remove();
	$("#accordion").empty();
	$('.dropzone').children().remove();
	
	////console.log('index:::'+index);	
	var imgAdd='<div class="cb-graph-css d-flex p-3 highcharts-container justify-content-center" ><img src="./resources/images/line_graph.png" style="width: 500px"></div>';
	$("#container1").append(imgAdd);
	$("#singlevaluediv").hide();
	$("#tablechartdiv").hide();
	
	
   $('input:checkbox').prop('checked',false);
   $("#dataobjectname").html(name) ; 
   //$("#dataobjectname").prop('title', name);
   $("#dataobjectname").attr('data-bs-original-title', name).tooltip();
   
 
//	var tableid = value;
	var tableid ="PT84430568S";
	
		$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "./getFieldsList?tableid="+tableid,
			dataType : 'text',
			success : function(result) {
				closeDataset();
				//console.log("result 2--"	+ result);
				jsonData = JSON.parse(result);
				table_(jsonData);
		
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
		 // alert("uncheck")
		  $("#chkDeploy"+index).prop( "checked", true );
		  
			var tableid = tid;//$("#tablelistData").val();
			//alert("tableid::::"+tableid);
			$.ajax({
				type : "POST",
				contentType : "application/json",
				url : "./getTotalRecordCount?tableid="+tableid ,
				dataType : 'text',
				success : function(result) {
					
					//console.log("result count ::::"+result);
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
			url : "./getFieldsList?tableid="+tableid ,
			dataType : 'text',
			success : function(result) {
				//console.log("result 2--"	+ result);
				var lists = JSON.parse(result);
				
				//table_(jsonData);
				$("#previewmetadata").empty();
				
				for (var i = 0; i < lists.length; i++) 
				{
				 	var obj = lists[i];
				 
				 	var card ="<li><div class='d-flex justify-content-start align-items-center'><div class='d-flex me-2'><span class='datatype'>"+ obj.symbol+"</span><span class='DataMapping_column-title__2yLXi text-ecllipsis' data-bs-toggle='tooltip' title='"+ obj.colname + "'>"+ obj.colname + "</span></li>";
				 	$("#previewmetadata").append(card);
				}
				

},
error : function(data) {
	console.log(data);
}
});
		
		
	}

/////-------------------Build Basic Filter at Edit Mode 

function selectBasicFilter_set(index, basicFilter_ ,tablename_ ,set_userlimitBasic)
{
	var Field_Basic =$('.dropzone.X-Axis').children().attr('data-field');
	 var dropzone_length = $('.dropzonefilter').children().length;
	    selectcount = dropzone_length-1;
	//console.log("set_userlimitBasic ::::::::::::::############# "+set_userlimitBasic);
	if (Field_Basic === undefined)
		{
		//alert("###########");
		Field_Basic =$('.dropzone.Arcs').children().attr('data-field');
		}
	var numberofrows_basic = $("#numberofrows_basic"+selectcount).val();
//	console.log("basicFilter_     "+basicFilter_[0].length);
//	console.log("Field_Basic  "+Field_Basic);
	var selectbasicfilter="";
	var li="";
	//alert("selectBasicFilter:::::::::");
	$.ajax({method : "POST",					
		url : "./selectbasicfilter",
		data : {
			field : Field_Basic,
			tablename : tablename_,
			numberofrows_Basic : numberofrows_basic ,
		},
		success : function(result) {
			NProgress.done(true);
			//console.log("chart selectBasicFilter result--",result);		
			var basicFilterData ="";
		    basicresult_length = result.length;
			//console.log("basicresult_length result--"+basicresult_length);	
			
			
			if($('.dropzonefilter').children().length > 1)
				{
					var drop_child = $('.dropzonefilter').children().length;
					selectcount = drop_child-2;
				
				}
		    $("#selectbasicdata"+selectcount).empty();
		    
			for(var v=0;v<result.length;v++)
			{
				basicFilterData = result[v].basicFilterFieldData;
				//console.log("basicFilterData result--",basicFilterData);	
				
				var checkFlag = false;
				
				for (var x=0 ; x<basicFilter_[0].length ; x++)
				{
					if(basicFilter_[0][x].BasicFilterValue === basicFilterData){
						
					//alert("1234");
						checkFlag = true;
					}
				}
				
				var checkedValue = "";
				if(checkFlag){
					checkedValue = "checked";
				}
				
				
				selectbasicfilter+="<li class='searchtext'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='allcheck"+v+"' "+checkedValue+" data-id = 'allcheckfalse' onclick='checkedBasicFilter("+v+")' value='"+basicFilterData+"' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus allselectcheckbox'  autocomplete='off' ><span class='css-a2zrvp'></span><span class='css-a3753h-Label text-overflow' title='"+basicFilterData+"' style='max-width:100px;display:block'> "+basicFilterData+" </span></label></div></div> </div></li>"
				
			
			}
			//console.log("selectbasicfilter"+selectbasicfilter);
			
			
			//li+="<li><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal"+selectcount+"' onclick='checkall("+selectcount+", this.checked)' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Select All </span></li>"+selectbasicfilter;
			
			li+="<li><div class='cb-range-form-div'><div class='cb-input-css align-items-center'><input type='text' class='form-control searchbasicfilter me-2 visibility-class' placeholder='search ....' id='searchbasicfilter' ><i class='fa fa-search me-2 cb-cursor' aria-hidden='true' id='openSearchbox' onclick='searchboxOpen()'></i></div></div></li><li><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal"+selectcount+"' onclick='checkall("+selectcount+", this.checked)' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Select All</span></li>"+selectbasicfilter;
			//console.log(li);
			
			//selectCheckbox(basicFilter_);
		
			
			
		
				 $("#selectbasicdata"+selectcount).html(li);
				 
				 
				 setTimeout(() => {
						
						$('#searchbasicfilter').keyup(function(){
				//alert("hi");

			    var searchText = $(this).val();
			    //alert("hi"+searchText);

			    $('.searchtext').each(function(){    

			        var currentLiText = $(this).text(),
			            showCurrentLi = currentLiText.toUpperCase().indexOf(searchText.toUpperCase()) !== -1;

			        $(this).toggle(showCurrentLi);

			    });     
			});
				
						
					}, 300);
				 
				 
				 
					selectcount++;
		
			
			
	},
	error : function(data) {
		NProgress.done(true);
		console.log(data);
	}
});
  
 }
 
function searchboxOpen(){
	if($("#searchbasicfilter").hasClass("visibility-classremove") || $("#searchbasicfilter").hasClass("visibility-class"))
	{
		$("#searchbasicfilter").toggleClass("visibility-classremove");
		$("#searchbasicfilter").toggleClass("visibility-class");	
	}	
}

 function selectCheckbox(basicFilter_){
	 
		for (var x=0 ; x<=basicFilter_.length ; x++)
			{
							    					
			var basicFilter_value = basicFilter_[0][x].BasicFilterValue;
							    					
			//console.log("basicFilter_#####################   "+basicFilter_value);
	
			var allselectcheckbox_ = $('#allcheck'+x).val();//$("#allcheck0").val();//$("#allcheck0").val();$(".element-classname").text();
			//console.log("allselectcheckbox#####################   "+allselectcheckbox_);
						
			}
 }

 
/////-------------------Build Basic Filter 

function selectBasicFilter(tablename_){
	var Field_Basic =$('.dropzonefilter').children().attr('data-field');
	 var dropzone_length = $('.dropzonefilter').children().length;
	    selectcount = dropzone_length-1;
	
	if(Field_Basic === undefined)
		{
		//alert("##@@@@@");
		 Field_Basic =$('.dropzonefilter').children().attr('data-field');
		 
		}
	var numberofrows_basic = $("#numberofrows_basic"+selectcount).val();
	//numberofrows_basic
	
	
	//console.log("Field_Basic  "+Field_Basic);
	var selectbasicfilter="";
	var li="";
	//alert("selectBasicFilter:::::::::");
	$.ajax({method : "POST",					
		url : "./selectbasicfilter",
		data : {
			field : Field_Basic,
			tablename : tablename_,
			numberofrows_Basic : numberofrows_basic,
		},
		success : function(result) {
			NProgress.done(true);
			//console.log("chart selectBasicFilter result--",result);		
			var basicFilterData ="";
		    basicresult_length = result.length;
			//console.log("basicresult_length result--"+basicresult_length);	
		   
		    console.log("selectcount::::::  "+selectcount);
//			$("#selectbasicdata0 > .li").remove();
		//	$("#selectbasicdata"+selectcount).remove();
		   
		    
			$("#selectbasicdata"+selectcount).empty();
			for(var v=0;v<result.length;v++)
			{
				basicFilterData = result[v].basicFilterFieldData;
				
				selectbasicfilter+="<li class='searchtext'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='allcheck"+v+"' data-id = 'allcheckfalse' onclick='checkedBasicFilter("+v+")' value='"+basicFilterData+"' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus allselectcheckbox'  autocomplete='off' ><span class='css-a2zrvp'></span><span class='css-a3753h-Label text-overflow' title='"+basicFilterData+"' style='max-width:100px;display:block'> "+basicFilterData+" </span></label></div></div> </div></li>"
	
			}
	
			//li+="<li><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal"+selectcount+"' onclick='checkall("+selectcount+", this.checked)' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Select All </span></li>"+selectbasicfilter;
			li+="<li><div class='cb-range-form-div'><div class='cb-input-css align-items-center'><input type='text' class='form-control searchbasicfilter me-2 visibility-class' placeholder='search ....' id='searchbasicfilter' ><i class='fa fa-search me-2 cb-cursor' aria-hidden='true' id='openSearchbox' onclick='searchboxOpen()'></i></div></div></li><li><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal"+selectcount+"' onclick='checkall("+selectcount+", this.checked)' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Select All</span></li>"+selectbasicfilter;
			
			//console.log(li);
			
			$("#selectbasicdata"+selectcount).html(li);
			
			setTimeout(() => {
				
				$('#searchbasicfilter').keyup(function(){
		//alert("hi");

	    var searchText = $(this).val();
	    //alert("hi"+searchText);

	    $('.searchtext').each(function(){    

	        var currentLiText = $(this).text(),
	            showCurrentLi = currentLiText.toUpperCase().indexOf(searchText.toUpperCase()) !== -1;

	        $(this).toggle(showCurrentLi);

	    });     
	});
		
				
			}, 300);
			
			
			selectcount++;
			 var dropzone_length = $('.dropzonefilter').children().length;
			    selectcount = dropzone_length;
	},
	error : function(data) {
		NProgress.done(true);
		console.log(data);
	}
});
  
 }

	
  function checkedBasicFilter(index)
  {
	  //index = selectcount;
	  if($("#allcheck"+index).prop("checked") == true)
		{
		//alert("checkedBasicFilter::::::::::::::");
		 $("#btnChart").trigger("click");
		}
	  else if($("#allcheck"+index).prop("checked") == false)
		  {		  
		 // alert("checkedBasicFilter false::::::::::::::");
		  $("#btnChart").trigger("click");
		  }
	  
	  
  }
  

	
	//originally used
	function table_(lists) 
	{
		
		$("#column-cards").empty();
		
		for (var i = 0; i < lists.length; i++) 
		{
		 	var obj = lists[i];
		 	//console.log(obj.colname);
		 	var card = "<div class=\"column-card DataMapping_column-card__2VBWp\" draggable=\"true\" data-field=\"" + obj.colname + "\" data-types=\"" 
		 	+ obj.datatype + "\" id='accordindiv"+i+"'> <span class=\"datatype\">"+ obj.symbol
		 	+ "</span><span class=\"DataMapping_column-title__2yLXi\" data-bs-toggle='tooltip' title='"+ obj.colname + "'>"+ obj.colname + "</span></div>";
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
    	//console.log("e::",e);
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
            	$('#add_border').removeClass("cb-border-right-none");
            	$('#add_border1').addClass("cb-border-right-none");
            	$('#add_border2').removeClass("cb-border-right-none");
            	$('#add_border3').removeClass("cb-border-right-none");
            	$('#add_border4').removeClass("cb-border-right-none");
            }
            else if (target == "add_border2") {
            	$('#add_border').removeClass("cb-border-right-none");
            	$('#add_border1').removeClass("cb-border-right-none");
            	$('#add_border2').addClass("cb-border-right-none");
            	$('#add_border3').removeClass("cb-border-right-none");
            	$('#add_border4').removeClass("cb-border-right-none");
            }
            else if (target == "add_border3") {
            	$('#add_border').removeClass("cb-border-right-none");
            	$('#add_border1').removeClass("cb-border-right-none");
            	$('#add_border2').removeClass("cb-border-right-none");
            	$('#add_border3').addClass("cb-border-right-none");
            	$('#add_border4').removeClass("cb-border-right-none");
            }
            else if (target == "add_border4") {
            	$('#add_border').removeClass("cb-border-right-none");
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
		
    	$("#descriptiopoup").show();
    	$("#wrapper").addClass("toggled");
    }
	
	
	
    function closeModal()
    {
    	$("#descriptiopoup").hide()
    }
    function openDataset(){
    	$("#selectdimension").show();
    	getTablelist();
    	$("#datasourcesearch").val("");
    	$("#wrapper").addClass("toggled");
    }
    function closeDataset()
    {
    	
    	if (globalselectedtabnlename =="")
    	{
    		//alert("Please select data set!");
    		//return;
    		$("#selectdimension").hide();
    	}
    	else 
    	{
    	   	$("#selectdimension").hide();
    	   	
    	}
     
    }
    
    

   
   function onChangedata(index ,tablename_){
		//alert('hi')

		if ($("#select_option"+index).val() == "adv"){
			$("#optiondivselect"+index).show();
			$("#basicselectdiv"+index).hide();
			$("#topnselectdiv"+index).hide();
			$("#basicfiltercheck"+index).hide();
			$("#numberofrowsdivs_basic"+index).hide();
		}
		else if ($("#select_option"+index).val() == "basicfiltering"){
			
		//alert("basicfiltering--------");
			$("#optiondivselect"+index).hide();
			$("#basicselectdiv"+index).show();
			selectBasicFilter(tablename_);
			$("#topnselectdiv"+index).hide();
			$("#basicfiltercheck"+index).show();
			//$("#numberofrowsdivs_basic"+index).show();//numberofrowsdivs_basic0
		}
		else if ($("#select_option"+index).val() == "topn"){
			$("#optiondiv"+index).hide();
			$("#optiondivselect"+index).hide();
			$("#basicselectdiv"+index).hide();
			$("#topnselectdiv"+index).show();
			$("#basicfiltercheck"+index).hide();
			$("#numberofrowsdivs_basic"+index).hide();
		}
	}

   function openDropCartyaxis(index,event) 
    {
		//alert("gg");
		$("#opencartyaxis"+index).fadeToggle( "fast");
		//event.stopPropagation();
	}
	function closeDropCartyaxis(index,event)
	{
		//alert("hide");
		$("#opencartyaxis"+index).hide();
		//event.stopPropagation();
	}
	
	$(document).click(function()
			{
		//$(".cb-yaxisdiv").hide();
	});
	function ischeckedfn(value,index)
	  {
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
		//alert("index"+index)
		//console.log("indeex::::: "+index);
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
				//alert("hi");
				$("#opencartyaxis"+index).hide();
				$("#yaxisdivtext"+index).html("topn");
			}
		}
		else if(radiocheck =="aggregateradio"+index+"")
		{
			//alert("agg")
			$("#opencartyaxis"+index).hide();
			$("#yaxisdivtext"+index).html("Aggregate");
		}


//		console.log($("#displaytopvalue"+index).val());
//		console.log($("#bintext"+index).val());
//		console.log($("#aggregateval"+index).val());
//		console.log(radiocheck);
//		
		$("#btnChart").trigger("click");
		
		
	  }
	function openDropCart(index,event) 
	{
	 //alert("gg");
	 $("#opencart"+index).fadeToggle( "fast");
	 event.stopPropagation();
	 
	}
	
	function closeDropCart(index,event)
	{
	//alert("hide");
	 $("#opencart"+index).hide();
	 event.stopPropagation();
	  
	 }
	$(document).click(function(){
		//alert(index);
	   // $(".cb-xaxisdiv").hide();
	});
	
	function bintype(index)
	{
		//alert("hi"+$("#bintype").val())
		if($("#bintype"+index).val()=="binsize")
		{	
					
			$("#binsize"+index).attr('disabled', false);
			$("#bincount"+index).attr('disabled', true);
		}
		else if($("#bintype"+index).val()=="binnumber"){
			
			$("#bincountdiv"+index).show();
			
			$("#bincount"+index).attr('disabled', false)
			$("#binsize"+index).attr('disabled', true);
			
		}
	}
	function getxaxis(index) 
	{
		$("#minvalue"+index).val();
		$("#maxvalue"+index).val();
		$("#binsize"+index).val();
		$("#bincount"+index).val();
		
		if($("#binsize"+index).val()=='' && $("#bincount"+index).val()==''){
			alert("please fill bin");
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
		
//		console.log($("#minvalue"+index).val());
//		console.log($("#maxvalue"+index).val());
//		console.log($("#binsize"+index).val());
//		console.log($("#bincount"+index).val());
		
		$("#btnChart").trigger("click");
		
	}
  
  function binsizekeyup(index){
	  var binsize=$("#binsize"+index).val();
	 // console.log("binsize::"+binsize);
	  $("#btnChart").trigger("click");
  }
 
    function minvaluekeyup(index){
  	  var minvalue=$("#minvalue"+index).val();
  	 // console.log("minvalue::"+minvalue);
  	 $("#btnChart").trigger("click");
    }
    
    function maxvaluekeyup(index){
    	  var maxvalue=$("#maxvalue"+index).val();
    	//  console.log("maxvalue::"+maxvalue);
    	  $("#btnChart").trigger("click");
      }
    
    function bincountkeyup(index){
  	  var bincount=$("#bincount"+index).val();
  	//  console.log("bincount::"+bincount);
  	 $("#btnChart").trigger("click");
    }
    
    function displaytopvaluekeyup(index){
    	//alert("hi");
    	  var displaytopvalue=$("#displaytopvalue"+index).val();
    	//  console.log("displaytopvalue::"+displaytopvalue);
    	  $("#btnChart").trigger("click");
      }
    
    function filtervaluekeyup(index){
    	//alert("hi");
    	  var displaytopvalue=$("#filtervalueid"+index).val();
    	//  console.log("displaytopvalue::"+displaytopvalue);
    	  
    	  if(displaytopvalue !="")
    	  {
    	   	  $("#btnChart").trigger("click");
    	  }
    	  
       }
    function filterinvaluekeyup(index){
    	//alert("hi");
    	  var displaytopvalue=$("#filterinvalueid"+index).val();
    	//  console.log("displaytopvalue::"+displaytopvalue);
    	  $("#btnChart").trigger("click");
      }
		function topninput(index){
	    	//alert("hi");
	    	  var displaytopvalue=$("#topninput"+index).val();
	    	//  console.log("displaytopvalue::"+displaytopvalue);
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

		}	
	
function opennewChartwindow()
{
	 window.open('./visualanalytics','_self' );
	 $("#wrapper").addClass("toggled");
}


function gotohome()
{
	 window.open('./visualanalytics','_self' );	
	 $("#wrapper").addClass("toggled");
}
	
	
	
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});
$('#searchdashboarddata').keyup(function(){
	

    var searchText = $(this).val();
    //alert("hi"+searchText)

    $('#dashboardlistData > li').each(function(){
    	

        var currentLiText = $(this).text(),
            showCurrentLi = currentLiText.toUpperCase().indexOf(searchText.toUpperCase()) !== -1;

        $(this).toggle(showCurrentLi);

    });     
});
$('#searchtableddata').keyup(function(){
	

    var searchText = $(this).val();
    //alert("hi"+searchText)

    $('#tablistData > li').each(function(){
    	

        var currentLiText = $(this).text(),
            showCurrentLi = currentLiText.toUpperCase().indexOf(searchText.toUpperCase()) !== -1;

        $(this).toggle(showCurrentLi);

    });     
});



function resetSelection()
{
	      //alert("hi")
			    $("#dashboardlistData li").removeClass("active");
				$("#tablistData li").removeClass("active");
				$("#tablistData").empty();
	}
	
	
	
$('#datasourcesearch').keyup(function()
{
    var searchText = $(this).val();
    $('#tablelistDatas > li').each(function(){

        var currentLiText = $(this).text(),
            showCurrentLi = currentLiText.toUpperCase().indexOf(searchText.toUpperCase()) !== -1;

        $(this).toggle(showCurrentLi);

    });     
});




var displayvalue="<div class='settingselectdiv'>"
	+"<div>"
	+"<div class='cb-range-Label'><div class='form-inline'>"
	+"<div class='cb-form'>"
	+"<label class='css-12xei9w'>"
	+"<input type='checkbox' id='displaychat' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' autocomplete='off'>"
	+"<span class='css-a2zrvp'></span>"
	+"<span class='css-a3753h-Label'>  Display value in chart</span>"
	+"</label>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div class='cb-range-form-div'>"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>Display legend</div></span>"
	+"<div>"
	+"<div class='cb-input-css' >"
	+"<select class='form-control' id='displaylegend' name='displaylegend'>"
	+"<option value='sidebar'>In the sidebar</option>"
	+"<option value='nexttochart'>Next to chart</option>"
	+"<option value='inchart'>In chart</option>"
	+"</select>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div class='cb-range-form-div'>"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>Placement</div></span>"
	+"<div>"
	+"<div class='cb-input-css'>"
	+"<select class='form-control' id='placement' name='placement'>"
	+"<option value='top'>Top</option>"
	+"<option value='bottom'>Bottom</option>"
	+"<option value='left'>Left</option>"
	+"<option value='right'>Right</option>"
	+"</select>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div class='cb-range-form-div'>"
	+"<div class='cb-range-Label'>"
	+"<div class='form-inline'>"
	+"<div class='cb-form'>"
	+"<label class='css-12xei9w'>"
	+"<input type='checkbox' id='limitvalue' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' autocomplete='off'>"
	+"<span class='css-a2zrvp'></span>"
	+"<span class='css-a3753h-Label'>  Limit Value</span>"
	+"</label>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div class='cb-range-form-div' id='numberofrowsdivs' style='display:none;'>"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>Number of rows</div></span>"
	+"<div>"
	+"<div class='cb-input-css'>"
	+"<select class='form-control' id='numberofrows_' name='numberofrows_'>"
	+"<option value='1000'>1000</option>"
	+"<option value='2000'>2000</option>"
	+"<option value='5000'>5000</option>"
	+"<option value='10000'>10000</option>"
	+"</select>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div class='cb-range-form-div' id='numberofrowsdiv' style='display:none;'>"
	+"<div class='cb-range-Label'>"
	+"<input type='number' list='numberlist' id='numberofrows' name='numberofrows' class='form-control' value='1000' min='5' max='50000'/>"
	+"<datalist id='numberlist'>"
	+"<option value='5000'>5000</option>"
	+"<option value='10000'>10000</option>"
	+"<option value='25000'>25000</option>"
	+"<option value='50000'>50000</option>"
	+"</datalist>"
	+"</div>"
	+"</div>"
	+"<div class='cb-range-form-div'>"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>Toggle between Dark & Light</div></span>"
	+"</div>"
	+"<div class='form-inline'>"
	+"<div class='cb-form'>"
	+"<div class='cb-form-switch cb-light'>"
	+"<div class='css-wtrf37 cb-focus'>"
	+"<input type='checkbox' id='switch-3'   onclick='toggleTheme()'>"
	+"<label for='switch-3'></label>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>";


	
	$("#displayvalue").html(displayvalue);
	
	 $("#switch-3").prop('checked' , false);
	
	
	$("#limitvalue").change(function() {
	        if($("#limitvalue").prop('checked')) {
	           // alert("Checked Box Selected");
	             $("#numberofrowsdiv").show();
	        } else {
	            //alert("Checked Box deselect");
	             $("#numberofrowsdiv").hide();
	             $("#numberofrows").val(1000); 
	             $("#btnChart").trigger("click");
	        }
	    });
	
	
	$("#numberofrows").change(function() {
		var userlimit=$("#numberofrows").val();
	
		//console.log('userlimit:::'+userlimit);	
		$("#btnChart").trigger("click");
	});
	
	
	$("#numberofrows").on('blur', function(e) {
			//alert("hi");
 		var numberlist=Math.round($("#numberofrows").val());
 
 			if (numberlist < 5 ) {
 				$("#numberofrows").val(5);
 				}
 				else if (numberlist > 50000  ) {
 					$("#numberofrows").val(50000);
 					}
 					else {
     				 $("#numberofrows").val(numberlist); 
    				}
 				});
	
	/*
	$('#numberofrows_basic').change(function() {
		alert("numberofrows_basic@@@@@");
		var basic_userlimit=$("#numberofrows_basic").val();
	
		console.log('basic_userlimit:::'+basic_userlimit);	
		selectBasicFilter(globalselectedtabnlename);
		//$("#btnChart").trigger("click");
	});*/
	
	
	$("#numberofrows_basic").on('blur', function(e) 
	  {
			//alert("hi");
 		var numberlist_basic = Math.round($("#numberofrows_basic").val());
 
 			if (numberlist_basic < 10 ) 
 			{
 			   $("#numberofrows_basic").val(5);
 			}
 			else if (numberlist_basic > 50000  )
 			{
 			   $("#numberofrows_basic").val(50000);
 			}
 			else 
 			{
     		   $("#numberofrows_basic").val(numberlist_basic); 
    		}
 	  });
	
	function checkall(index, isChecked){
		//alert("hi"+isChecked);	
		//$(".allselectcheckbox"+index).prop("checked", $("#chkLocal"+index).prop("checked"));
		
		
     
     if(isChecked) {
     //alert("hiin"+isChecked);
     
    $('.allselectcheckbox').each(function() { 
    //alert('.allselectcheckbox')
    
    this.checked = true; 
   
    });
    } else {
    $('.allselectcheckbox').each(function() {
    this.checked = false;
    });
    }
     $("#btnChart").trigger("click");
		}
	  
	
	
	
	$('#placement').change(function() 
				{
	 var $placement = $(this).find('option:selected');
	    var value = $placement.val();//to get content of "value" attrib
	    var text = $placement.text();

	    
				});
		
	function limitbasicvalue(index){
		 if($("#limitvalue_basic"+index).prop('checked')) {
		           // alert("Checked Box Selected");
		             $("#numberofrowsdivs_basic"+index).show();
		        } else {
		            //alert("Checked Box deselect");
		             $("#numberofrowsdivs_basic"+index).hide();
		             $("#numberofrows_basic"+index).val(1000); 
		             selectBasicFilter(globalselectedtabnlename);
		            
		        }
		}
		
	function searchonkey(index){
		
	    var searchText = $('#searchbasicfilter'+index).val();
	    //alert("hi"+searchText);

	    $('.searchtext').each(function(){    

	        var currentLiText = $(this).text(),
	            showCurrentLi = currentLiText.toUpperCase().indexOf(searchText.toUpperCase()) !== -1;

	        $(this).toggle(showCurrentLi);

	    });  
		
	}  
	/*$('#searchbasicfilter').keyup(function(){
		//alert("hi");

	   
	});*/
