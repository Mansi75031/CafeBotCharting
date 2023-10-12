
//editmode=1
var edit_ModeFlag =0;

var dashboard_title ="";


var global_dash_name="";

var dashTabName="";

var selectedtabid=0;

var selectedtabname ="";

var chartType = [];

var chartDims = [];
	
var globalchartType ="chartcard2";

var type = "";

var global_indexi = 0;

var binX1 = 0;
	
var globalselectedtabnlename ="";

var globaltheme_chart ="darktheme_chart"; 	
//basicfilter div index while build
var selectcount = 0;	
//get data of basic filter , numberofrows_basic 
var selectcount_ =0;

var fromTofunction =0;

var custom_userlimit = 0;

//var selectcount_1 = 1;
//selectcount_-1
var selectcount_flag = 0;

var basicresult_length =0;

	var chartName_ ="Bar Chart";
	
	var chartnameSaved ="";
	
	var toggle_ThemeFlag = 0;
	
	var legend_Placement="";
	
	var indexi=0;
	
	var filter_list =[];
	
	var basic_filter_index =[];
	
	var legend_button =0;
	
	 
////------------------Switch Between Dark and Light Theme		
	 function toggleTheme() {
		
		  		
		          var theme = document.getElementById('theme_');
		          var dark_ = document.getElementById('dark_');
		          var darkjs_ = document.getElementById('darkjs_');
		     	        		           
		        if($("#switch-3").is(':checked')){
		     
		            	$("#dark_").attr('href', './resources/css/dark-unica.css');
		        	
						$("#theme_").attr('href', './resources/css/chart_light.css');
							
						$("#theme_").prop("disabled", false)
							
						globaltheme_chart = "lighttheme_chart"; 
						toggle_ThemeFlag = 0;
		       
		        }
					else{
												
						$("#dark_").attr('href', './resources/css/dark-unica-dash.css');
						$("#theme_").removeAttr('href', './resources/css/chart_light.css');
						
						$("#dark_").prop("disabled", false)
										
		         		globaltheme_chart = "darktheme_chart";
						toggle_ThemeFlag =1;
					
					}
		        
		      }  
	
	$(document).ready(function() {
		user_id__users();
		
		
//		$('#date_range').datetimepicker({
//		    format:'DD/MM/YYYY',
//		     useCurrent: false,
//		    keepOpen: false, 
//		    inline: false, 
//		     debug: true,
//		      showClose: true,
//		       icons: {
//		           close: 'fa fa-check',
//		           color: 'black'
//		       },
//		});

		
		
		/*  $('input[name="date_range"]').icker({
			    opens: 'left'
			  }, function(start, end, label) {
			    console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
			  });
		
		
		
		  $('input[name="date_range"]').daterangepicker();
		
		*/

		$('input[name="date_range"]').daterangepicker(
				{
				    locale: {
				      format: 'YYYY-MM-DD'
				    },
				    startDate: '1900-01-01',
				    endDate: '2013-12-31'
				}, 
				function(start, end, label) {
				    //alert("A new date range was chosen: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
				});
	
		
		
		$("#charttype").html(chartName_);
		
		$('.delete').on('click','a',function() { 
			
			$(this).parent().parent('div').remove();
			$("#btnChart").trigger('click');
				});
		
		openDataset();
		
		setTimeout(() => {
		
			if (getParameterByName('id') != null)
				{
				  
				}
				else		
				{
					$("#chartingtype").val("chartcard2"); 
					getDim('chartcard2');
			
				}
			
		}, 300);
		
		
//		$("input").blur(function(){
//			  
//			  $("#btnChart").trigger("click");
//			});
		    
		
		function getParameterByName(name) {
			var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
			return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
		}			
		
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
		    var ab = 0;
		    var edit_modeflag_count = 0;
		    
		    
			function charttype(varlists) 
			{
//				alert("i_y  " +i_y);
				indexi =0;
				
				
				
				
				
				
				$("#variables").empty();
				chartType = [];
				for (var i = 0; i < varlists.length; i++) {
					var obj = varlists[i];
				///populate with
				chartType.push(obj.series);
				var varcard = "<div class=\"col-xl-4 col-lg-4 col-6\">";
				
				if (obj.multiple == "true") {
					varcard = varcard + "<div class=\"DataMapping_chart-dimension__2tNga user-select-none cb-variables-height\" data-series=\"" + obj.series + "\"data-agg=\"" + obj.aggregation + "\"data-types=\"" + obj.datatype + "\"data-multi=\"" + obj.multiple + "\">";
				} else {
					varcard = varcard + "<div class=\"DataMapping_chart-dimension__2tNga user-select-none cb-variables-height\" data-series=\"" + obj.series + "\"data-agg=\"" + obj.aggregation + "\"data-types=\"" + obj.datatype + "\"data-multi=\"" + obj.multiple + "\">";
				}
			
				varcard = varcard + "<div class=\"d-flex flex-row justify-content-between align-items-center DataMapping_chart-dimension-header__3FrwJ\">";
				
				varcard = varcard + "<span class=\"text-left\">";
				
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
					
									if (obj.mandatory == "true") {
										varcard = varcard + "*";
									}
									varcard = varcard + "</span></div>";
									varcard = varcard + "<div class=\"dropzone " + obj.series +" DataMapping_dropzone__2L06t\"></div></div></div>";
					
									$("#variables").append(varcard);
								}
																
		$(".dropzone").droppable({accept : ".column-card",drop : function(ev, ui) {
			
									var droppedItem = $(ui.draggable).clone();
									//console.log('droppedItem');
									//console.log(droppedItem);
									droppedItem.addClass('remove');
									
					//column data type ---always single
					
					var coltype = $(droppedItem).data('types');
					
					//place holder data type ---single or plural
					
					var placetype = $(this).parent().data('types');
					
					var binseries = $(this).parent().data('series');
					
					//place holder data aggregation ---true or flase
					var placeagg = String($(this).parent().data('agg'));
					
					var multi = String($(this).parent().data('multi'));
					
					
				 if (!placetype.includes(coltype)) 
					{					
						//alert('No Match!')
						$.notify("No Match!" ,"error");
						return;
					} 
				 if(binseries == "X-Axis")
					 {
					 ab = 0;					 
					 }
				 
				 if(binseries == "X1-Axis")
					 {
					 ab = 1;					 
					 }
				 
				 if(binseries == "Y-Axis")
				 {
					 if(indexi == 0)
						 {
						 indexi++;	
						 }
					 
					 if(edit_ModeFlag == 1)
						{
						

						if(edit_modeflag_count == 0)
							{
							
							indexi = i_y +1;
							
							}
							
						
						 edit_modeflag_count++;
						}
					 				 
				 }
				 
				 
				 
				 
					var el = $("<span style='text-align: -webkit-right;'><a href='Javascript:void(0);' class='xicon delete' id='remove"+ab+"'  onclick = 'axis_delete("+ab+")' title='Remove'><i class='fa fa-times' aria-hidden='true'></i></a></span>");
                       
					if (placeagg.includes("true")) {
//						databar_colordiv_append(); /////////////////#######################
					    el = $("<span style='text-align: -webkit-right;'><a href='Javascript:void(0);' class='xicon delete' id='removey"+indexi+"'  onclick = 'yaxis_delete("+indexi+")' title='Remove'><i class='fa fa-times' aria-hidden='true'></i></a></span>");

						
						if($("#chartingtype").val() == "chartcard17"   || $("#chartingtype").val() == "chartcard22"  )
							{
						var _agg=$("<div class='selectxaxisdiv' style='width:150px'><ul class='list-unstyled cb-custom-dropdown'>"
		    					+"<li onclick='openDropCartyaxis("+indexi+",event)' style='display: none;'><i class='fa fa-caret-down' aria-hidden='true'></i>&nbsp;<span id='yaxisdivtext"+indexi+"'></span> </li></ul>"
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
							}
						else
							{
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
							}
	
	
		                indexi++;	
		

						$(el).insertAfter($(droppedItem.find('span')[1]));
						$(_agg).insertAfter($(droppedItem.find('span')[1]));
						
						if (multi.includes("true")) { //multi
							if ($(this).children().length == 0) {
								$(this).empty();
								
							}						
							
						}
						else{ //not multi
							$(this).empty();
							
							$(el).insertAfter($(droppedItem.find('span')[1]));
							$(_agg).insertAfter($(droppedItem.find('span')[1]));
						}
						$(this).append(droppedItem);
						
						$("select.form-control").change(
							function() 
							{$(this).children("option:selected").val();
						});
					} else {
//						indexi =0;
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

						
//					    el = $("<span style='text-align: -webkit-right;'><a href='Javascript:void(0);' class='xicon delete' id='remove"+indexi+"'  onclick = 'axis_delete("+indexi+")' title='Remove'><i class='fa fa-times' aria-hidden='true'></i></a></span>");

						
						if(binseries == "X1-Axis")
							{
							ab = 1;
							binX1 =0;
							var _aggx=$("<div class='selectxaxisdiv' style='width:150px'>"
									+"<ul class='list-unstyled cb-custom-dropdown'>"
								      +"<li  id='dropdownshowxaxis"+ab+"' onclick='openDropCart("+ab+",event)' style='display: none;' ><i class='fa fa-caret-down' aria-hidden='true'></i>&nbsp;<span id='xaxisdivtext"+ab+"'  class='xaxisdivtextclass' ></span></li></ul>"
								      +"<div class='dropdown-cart cb-xaxisdiv' id='opencart"+ab+"' style='display: none;' >"
								      +"<div class='cb-cursor' id='hidexaxis"+ab+"' onclick='closeDropCart("+ab+",event)' style='float: right;right: 11px;position: absolute;top: 4px;'><i class='fa fa-times' aria-hidden='true'></i></div>"
								+"<div >"
								    +"<div class='cb-range-form-div'>"
														+"<div class='cb-range-Label'>"
															+"<span class='label'><div class='cb-range-text'>Bin type</div></span>"
															+"<div>"
																+"<div class='cb-input-css'>"
																	+"<select id='bintype"+ab+"' name='bintype"+ab+"' class='form-control queue-select' onchange='bintype("+ab+")'>"
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
																+"<input type='number' name='minvalue"+ab+"' id='minvalue"+ab+"' value='0.1' class='form-control' disabled onblur='minvaluekeyup("+ab+")'>"
																+"</div>"
																+"</div>"
																+"</div>"
																+"</div>"
																+"<div class='cb-range-form-div'  style='display:none'>"
														+"<div class='cb-range-Label'>"
															+"<span class='label'><div class='cb-range-text'>Max value</div></span>"
															+"<div>"
																+"<div class='cb-input-css'>"
																+"<input type='number' name='maxvalue"+ab+"' id='maxvalue"+ab+"' value='307980' class='form-control' disabled onblur='maxvaluekeyup("+ab+")'>"
																+"</div>"
																+"</div>"
																+"</div>"
																+"</div>"
																+"<div class='cb-range-form-div'>"
														+"<div class='cb-range-Label'>"
															+"<span class='label'><div class='cb-range-text'>Bin size</div></span>"
															+"<div>"
																+"<div class='cb-input-css'>"
																+"<input type='number' id='binsize"+ab+"' name='binsize"+ab+"' class='form-control' onblur='binsizekeyup("+ab+")'>"
																+"</div>"
																+"</div>"
																+"</div>"
																+"</div>"
										+"<div class='cb-range-form-div' id='bincountdiv"+ab+"'>"
														+"<div class='cb-range-Label'>"
															+"<span class='label'><div class='cb-range-text'>Bin Count</div></span>"
															+"<div>"
																+"<div class='cb-input-css'>"
																+"<input type='number' id='bincount"+ab+"' name='bincount"+ab+"' class='form-control' onblur='bincountkeyup("+ab+")'>"
																+"</div>"
																+"</div>"
																+"</div>"
																+"</div>"
										+"<div class='cb-range-Label cb-button-layout'>"
										+"<button class='cb-primary' id='getxaxis"+ab+"' onclick='getxaxis("+ab+")'>Save</button>"
										+"</div>"
								+"</div></div>")
							
							}
						else
						{
						
						if($("#chartingtype").val() == "chartcard8" || $("#chartingtype").val() == "chartcard9"  
							|| $("#chartingtype").val() == "chartcard19" || $("#chartingtype").val() == "chartcard15")
						{

							ab = 0;
							binX1 =0;
							var _aggx=$("<div class='selectxaxisdiv' style='width:150px'>"
									+"<ul class='list-unstyled cb-custom-dropdown'>"
								      +"<li  id='dropdownshowxaxis"+ab+"' onclick='openDropCart("+ab+",event)'   style='display: none;'><i class='fa fa-caret-down' aria-hidden='true'></i>&nbsp;<span id='xaxisdivtext"+ab+"'  class='xaxisdivtextclass' ></span></li></ul>"
								      +"<div class='dropdown-cart cb-xaxisdiv' id='opencart"+ab+"' style='display: none;' >"
								      +"<div class='cb-cursor' id='hidexaxis"+ab+"' onclick='closeDropCart("+ab+",event)' style='float: right;right: 11px;position: absolute;top: 4px;'><i class='fa fa-times' aria-hidden='true'></i></div>"
								+"<div >"
								    +"<div class='cb-range-form-div'>"
														+"<div class='cb-range-Label'>"
															+"<span class='label'><div class='cb-range-text'>Bin type</div></span>"
															+"<div>"
																+"<div class='cb-input-css'>"
																	+"<select id='bintype"+ab+"' name='bintype"+ab+"' class='form-control queue-select' onchange='bintype("+ab+")'>"
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
																+"<input type='number' name='minvalue"+ab+"' id='minvalue"+ab+"' value='0.1' class='form-control' disabled onblur='minvaluekeyup("+ab+")'>"
																+"</div>"
																+"</div>"
																+"</div>"
																+"</div>"
																+"<div class='cb-range-form-div'  style='display:none'>"
														+"<div class='cb-range-Label'>"
															+"<span class='label'><div class='cb-range-text'>Max value</div></span>"
															+"<div>"
																+"<div class='cb-input-css'>"
																+"<input type='number' name='maxvalue"+ab+"' id='maxvalue"+ab+"' value='307980' class='form-control' disabled onblur='maxvaluekeyup("+ab+")'>"
																+"</div>"
																+"</div>"
																+"</div>"
																+"</div>"
																+"<div class='cb-range-form-div'>"
														+"<div class='cb-range-Label'>"
															+"<span class='label'><div class='cb-range-text'>Bin size</div></span>"
															+"<div>"
																+"<div class='cb-input-css'>"
																+"<input type='number' id='binsize"+ab+"' name='binsize"+ab+"' class='form-control' onblur='binsizekeyup("+ab+")'>"
																+"</div>"
																+"</div>"
																+"</div>"
																+"</div>"
										+"<div class='cb-range-form-div' id='bincountdiv"+ab+"'>"
														+"<div class='cb-range-Label'>"
															+"<span class='label'><div class='cb-range-text'>Bin Count</div></span>"
															+"<div>"
																+"<div class='cb-input-css'>"
																+"<input type='number' id='bincount"+ab+"' name='bincount"+ab+"' class='form-control' onblur='bincountkeyup("+ab+")'>"
																+"</div>"
																+"</div>"
																+"</div>"
																+"</div>"
										+"<div class='cb-range-Label cb-button-layout'>"
										+"<button class='cb-primary' id='getxaxis"+ab+"' onclick='getxaxis("+ab+")'>Save</button>"
										+"</div>"
								+"</div></div>")
								
								
						}
						else
							{

							ab = 0;
							binX1 =0;
							var _aggx=$("<div class='selectxaxisdiv' style='width:150px'>"
									+"<ul class='list-unstyled cb-custom-dropdown'>"
								      +"<li  id='dropdownshowxaxis"+ab+"' onclick='openDropCart("+ab+",event)' ><i class='fa fa-caret-down' aria-hidden='true'></i>&nbsp;<span id='xaxisdivtext"+ab+"'  class='xaxisdivtextclass' ></span></li></ul>"
								      +"<div class='dropdown-cart cb-xaxisdiv' id='opencart"+ab+"' style='display: none;' >"
								      +"<div class='cb-cursor' id='hidexaxis"+ab+"' onclick='closeDropCart("+ab+",event)' style='float: right;right: 11px;position: absolute;top: 4px;'><i class='fa fa-times' aria-hidden='true'></i></div>"
								+"<div >"
								    +"<div class='cb-range-form-div'>"
														+"<div class='cb-range-Label'>"
															+"<span class='label'><div class='cb-range-text'>Bin type</div></span>"
															+"<div>"
																+"<div class='cb-input-css'>"
																	+"<select id='bintype"+ab+"' name='bintype"+ab+"' class='form-control queue-select' onchange='bintype("+ab+")'>"
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
																+"<input type='number' name='minvalue"+ab+"' id='minvalue"+ab+"' value='0.1' class='form-control' disabled onblur='minvaluekeyup("+ab+")'>"
																+"</div>"
																+"</div>"
																+"</div>"
																+"</div>"
																+"<div class='cb-range-form-div'  style='display:none'>"
														+"<div class='cb-range-Label'>"
															+"<span class='label'><div class='cb-range-text'>Max value</div></span>"
															+"<div>"
																+"<div class='cb-input-css'>"
																+"<input type='number' name='maxvalue"+ab+"' id='maxvalue"+ab+"' value='307980' class='form-control' disabled onblur='maxvaluekeyup("+ab+")'>"
																+"</div>"
																+"</div>"
																+"</div>"
																+"</div>"
																+"<div class='cb-range-form-div'>"
														+"<div class='cb-range-Label'>"
															+"<span class='label'><div class='cb-range-text'>Bin size</div></span>"
															+"<div>"
																+"<div class='cb-input-css'>"
																+"<input type='number' id='binsize"+ab+"' name='binsize"+ab+"' class='form-control' onblur='binsizekeyup("+ab+")'>"
																+"</div>"
																+"</div>"
																+"</div>"
																+"</div>"
										+"<div class='cb-range-form-div' id='bincountdiv"+ab+"'>"
														+"<div class='cb-range-Label'>"
															+"<span class='label'><div class='cb-range-text'>Bin Count</div></span>"
															+"<div>"
																+"<div class='cb-input-css'>"
																+"<input type='number' id='bincount"+ab+"' name='bincount"+ab+"' class='form-control' onblur='bincountkeyup("+ab+")'>"
																+"</div>"
																+"</div>"
																+"</div>"
																+"</div>"
										+"<div class='cb-range-Label cb-button-layout'>"
										+"<button class='cb-primary' id='getxaxis"+ab+"' onclick='getxaxis("+ab+")'>Save</button>"
										+"</div>"
								+"</div></div>")
							
							}
						
						
						
						
						
						}
						
						    $(_aggx).insertAfter($(droppedItem.find('span')[2]));
							
							$(el).insertAfter($(droppedItem.find('.selectxaxisdiv')[0])); 
						
						$(this).append(droppedItem);
						
						global_indexi = indexi;
						
//						indexi++;
//						ab++;
					}
						
						setTimeout(() => {
							
							
							
						
							$("#btnChart").trigger('click');
							
						}, 200);
						
					}
				}

				);				
								
}
	
			var accordianind=0;

/////-------------------Build Blank Filter Div 
			function filterfields()
			{

				console.log("accordianind  "+accordianind);
				
				if	($('.dropzone.ui-droppable').children().length == 0 )
				{

					$(".dropzonefilter").droppable({
					    disabled: true
					});

				}
				else
				{

				$(".dropzonefilter").droppable({
				    disabled: false
				});

				}
				
				$(".dropzonefilter").droppable({accept:".column-card",drop:function(ev,ui) 
					{

				var droppedItem = $(ui.draggable).clone();
				droppedItem.addClass('dropzoneselect ');
				
				filter_list.push(accordianind);
				
				console.log("filter_list---------" + filter_list);
				
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

							var el = $("<span style='text-align: -webkit-right;'><a href='Javascript:void(0);' class='xicon delete' id='remove_filter"+accordianind+"'  onclick = 'filter_delete("+accordianind+")' title='Remove'><i class='fa fa-times' aria-hidden='true'></i></a></span>");

							var filtertype ="";//$("<div class='dummy'></div>"); //$("<div class='mt-3'><span style='text-align: -webkit-right;'>Filter Type</span></div><div class='mt-3'><select class='form-control' ><option value='adv'>Advance</option><option value='basic'>Basic</option><option value='topn'>Top N</option></select></div>");
							var tablename__ = globalselectedtabnlename;								
							
							console.log("tablename__---------" + tablename__);
			
							var comparisontxt = $("<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:14px;top: -21px;'><a class='chart-accordion' data-bs-toggle='collapse' href='#collapseOne"+accordianind+"'><i class='fa fa-caret-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+accordianind+"' class='collapse show' data-bs-parent='#accordion'><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+accordianind+"' onchange='onChangedata("+accordianind+" ,\"" + tablename__ + "\" ,\"" + col + "\"  );'><option value='adv'>Advance</option><option value='topn'>Top N</option><option value='basicfiltering' >Basic Filtering</option></select><div class='mt-2' id='optiondivtopn"+accordianind+"' style='display:none'><select class='form-control' id='top_bottom'><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+accordianind+"' ><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+accordianind+")'><option value='contains'>contains</option><option value='does not contain'>does not contain</option><option value='starts with'>starts with</option><option value='does not start with'>does not start with</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option><option value='is empty'>is empty</option><option value='is not empty'>is not empty</option></select></div>"
								+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' id='filtervalueid"+accordianind+"' onblur='filtervaluekeyup("+accordianind+")'></div>"
								+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+col+"andor' id='and"+accordianind+"' value='and' onchange='andorChange("+accordianind+")' checked><label class='css-iwo4qd' for='and"+accordianind+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+col+"andor' id='or"+accordianind+"' value='or' onchange='andorChange("+accordianind+")'><label class='css-iwo4qd' for='or"+accordianind+"'>Or </label></div></div>"
								+"<div class='mt-2 mb-2'><select class='form-control' ><option value='contains'>contains</option><option value='does not contain'>does not contain</option><option value='starts with'>starts with</option><option value='does not start with'>does not start with</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option><option value='is empty'>is empty</option><option value='is not empty'>is not empty</option></select></div>"
								+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' id='filterinvalueid"+accordianind+"' onblur='filterinvaluekeyup("+accordianind+")'></div></div>"
								+"<div class='cb-range-form-div mt-2' id='basicfiltercheck"+accordianind+"' style='display:none'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form mb-0'><label class='css-12xei9w'><input type='checkbox' id='limitvalue_basic"+accordianind+"' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' onclick='limitbasicvalue("+accordianind+")' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Limit Value</span></label></div></div></div></div>"
								+"<div class='cb-range-form-div' id='numberofrowsdivs_basic"+accordianind+"' style='display:none;'><div class='cb-range-Label'><span class='label'><div class='cb-range-text'>Number of rows</div></span><div class='cb-input-css'><input type='number' list='numberlist_basic' id='numberofrows_basic"+accordianind+"' onchange = 'onchangeNumberofrows_basic("+accordianind+")' name='numberofrows_basic"+accordianind+"' class='form-control' value='1000' min='5' max='50000'/><datalist id='numberlist_basic'><option value='5000'>5000</option><option value='10000'>10000</option><option value='25000'>25000</option><option value='50000'>50000</option></datalist></div></div></div>"
								+"<div id='basicselectdiv"+accordianind+"' style='display:none'><div class='mt-2 cb-basic-height'><ul class='list-group' id='selectbasicdata"+accordianind+"' ></ul></div></div>"
								+"<div id='topnselectdiv"+accordianind+"' style='display:none'><div class='mt-2'><span>Show items</span><select id='topninputvalue"+accordianind+"'   class='form-control'><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='form-control' text='number' id='topninput"+accordianind+"' onblur='topninput("+accordianind+")' autocomplete='off'></div><div class='mt-2 d-none' ><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>");
							
							var comparisonnumber = $("<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:14px;top: -21px;'><a class='chart-accordion' data-bs-toggle='collapse' href='#collapseOne"+accordianind+"'><i class='fa fa-caret-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+accordianind+"' class='collapse show' data-bs-parent='#accordion"+accordianind+"'><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+accordianind+"' onchange='onChangedata("+accordianind+",\"" + tablename__ + "\" ,\"" + col + "\");'><option value='adv'>Advance</option><option value='topn'>Top N</option><option value='basicfiltering' >Basic Filtering</option></select><div class='mt-2' id='optiondivtopn"+accordianind+"' style='display:none'></div><div id='optiondivselect"+accordianind+"'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+accordianind+")'><option value='<'>is less than</option><option value='<='>is less than or equal to</option><option value='>'>is greater than</option><option value='>='>is greater than or equal to</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"
								+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' id='filtervalueid"+accordianind+"'  onblur='filtervaluekeyup("+accordianind+")'></div>"
								+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+col+"andor' id='and"+accordianind+"' value='and' checked onchange='andorChange("+accordianind+")'><label class='css-iwo4qd' for='and"+accordianind+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+col+"andor' id='or"+accordianind+"' value='or' onchange='andorChange("+accordianind+")'><label class='css-iwo4qd' for='or"+accordianind+"'>Or </label></div></div>"
								+"<div class='mt-2 mb-2'><select class='form-control'><option value='<'>is less than</option><option value='<='>is less than or equal to</option><option value='>'>is greater than</option><option value='>='>is greater than or equal to</option><option value='is'>is</option><option value='is not'>is not</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"
								+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' id='filterinvalueid"+accordianind+"' onblur='filterinvaluekeyup("+accordianind+")'></div></div>"
								+"<div class='cb-range-form-div mt-2' id='basicfiltercheck"+accordianind+"' style='display:none'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form mb-0'><label class='css-12xei9w'><input type='checkbox' id='limitvalue_basic"+accordianind+"' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' onclick='limitbasicvalue("+accordianind+")' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Limit Value</span></label></div></div></div></div>"
								+"<div class='cb-range-form-div' id='numberofrowsdivs_basic"+accordianind+"' style='display:none;'><div class='cb-range-Label'><span class='label'><div class='cb-range-text'>Number of rows</div></span><div class='cb-input-css'><input type='number' list='numberlist_basic' id='numberofrows_basic"+accordianind+"' onchange = 'onchangeNumberofrows_basic("+accordianind+")' name='numberofrows_basic"+accordianind+"' class='form-control' value='1000' min='5' max='50000'/><datalist id='numberlist_basic'><option value='5000'>5000</option><option value='10000'>10000</option><option value='25000'>25000</option><option value='50000'>50000</option></datalist></div></div></div>"
								+"<div id='basicselectdiv"+accordianind+"' style='display:none'><div class='mt-2 cb-basic-height'><ul class='list-group' id='selectbasicdata"+accordianind+"' ></ul></div></div>"
								+"<div id='topnselectdiv"+accordianind+"' style='display:none'><div class='mt-2'><span>Show items</span><select id='topninputvalue"+accordianind+"' class='form-control'><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='form-control' text='number' id='topninput"+accordianind+"' onblur='topninput("+accordianind+")' autocomplete='off'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>");
							
							var comparisondate = $("<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:14px;top: -21px;'><a class='chart-accordion' data-bs-toggle='collapse' href='#collapseOne"+accordianind+"'><i class='fa fa-caret-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+accordianind+"' class='collapse show' data-bs-parent='#accordion"+accordianind+"'><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+accordianind+"' onchange='onChangedata("+accordianind+",\"" + tablename__ + "\" ,\"" + col + "\");'><option value='adv'>Advance</option><option value='topn'>Top N</option><option value='basicfiltering' >Basic Filtering</option></select><div class='mt-2' id='optiondivtopn"+accordianind+"' style='display:none'></div><div id='optiondivselect"+accordianind+"'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+accordianind+")'><option value='is'>is</option><option value='is not'>is not</option><option value='is after'>is after</option><option value='is on or after'>is on or after</option><option value='is before'>is before</option><option value='is on or before'>is on or before</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"
								+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' id='filtervalueid"+accordianind+"'  onblur='filtervaluekeyup("+accordianind+")'></div>"
								+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+col+"andor' id='and"+accordianind+"' value='and' onchange='andorChange("+accordianind+")' checked><label class='css-iwo4qd' for='and"+accordianind+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+col+"andor' id='or"+accordianind+"' value='or' onchange='andorChange("+accordianind+")'><label class='css-iwo4qd' for='or"+accordianind+"' onchange='andorChange("+accordianind+")'>Or </label></div></div>"
								+"<div class='mt-2 mb-2'><select class='form-control'><option value='is'>is</option><option value='is not'>is not</option><option value='is after'>is after</option><option value='is on or after'>is on or after</option><option value='is before'>is before</option><option value='is on or before'>is on or before</option><option value='is blank'>is blank</option><option value='is not blank'>is not blank</option></select></div>"
								+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' id='filterinvalueid"+accordianind+"' onblur='filterinvaluekeyup("+accordianind+")'></div></div>"
								+"<div class='cb-range-form-div mt-2' id='basicfiltercheck"+accordianind+"' style='display:none'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form mb-0'><label class='css-12xei9w'><input type='checkbox' id='limitvalue_basic"+accordianind+"' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' onclick='limitbasicvalue("+accordianind+")' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Limit Value</span></label></div></div></div></div>"
								+"<div class='cb-range-form-div' id='numberofrowsdivs_basic"+accordianind+"' style='display:none;'><div class='cb-range-Label'><span class='label'><div class='cb-range-text'>Number of rows</div></span><div class='cb-input-css'><input type='number' list='numberlist_basic' id='numberofrows_basic"+accordianind+"' onchange = 'onchangeNumberofrows_basic("+accordianind+")' name='numberofrows_basic"+accordianind+"' class='form-control' value='1000' min='5' max='50000'/><datalist id='numberlist_basic'><option value='5000'>5000</option><option value='10000'>10000</option><option value='25000'>25000</option><option value='50000'>50000</option></datalist></div></div></div>"
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
									
									$(comparisontxt).insertAfter($(droppedItem.find('span')[2]));
									
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
							  
//								alert("filter")
							$(this).parent().parent('div').remove();
							
							$("#btnChart").trigger("click");

							var accordianind_incr = 0;
							$('.dropzonefilter.ui-droppable').children().each(function()
									{										
								       accordianind_incr++;					
									});
							accordianind = accordianind_incr;
							
						});	
							setTimeout(() => {
							
								 let accevent = document.getElementById("collapseOne"+(accordianind-1));
								  

								   accevent.addEventListener("show.bs.collapse", function () {
									  
								   
								     
								     $(this).parent().parent().removeClass("cb-accordian-height");
								     
								    // $(".column-card").removeClass("cb-accordian-height");
								   });
		  
								   accevent.addEventListener("hide.bs.collapse", function () {
								    
								     $(this).parent().parent().addClass("cb-accordian-height")
								     //$(".column-card").addClass("cb-accordian-height");
								   });
								   
							}, 300);
							
						}
				
					});
				
				
		}

			// drag zone 

			$("#menu-toggle").click(function(e) {
								
								e.preventDefault();
								$("#wrapper").toggleClass("toggled");
								e.stopPropagation();
							});

		
			
			
			
			function getDim(type) 
			{
				$("#chart_id").val("0");
				$("#chartNametxt").val("");
			
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
					filterfields();
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
					var varDim = [];
					var listofdims = $('div.DataMapping_chart-dimension__2tNga');
					
					var bintype = "";
					var binsize = "";
					var bincount = "";
					var displaytopCheck =0;
					var displaytopvalue ="";
					 var others ="";
					 var Agg ="";
					 var series_x =  "";
					
					for (var i = 1; i < listofdims.length; i++) 
					{
						
						var listofchild = $('.column-card',listofdims[i])
				
			if (listofchild.length != 0) { 
														
					for (var j = 0; j < listofchild.length; j++) 
							{
						console.log("Jjjjjj -----#####:::::"+j);	

							var ls = [];
				
									 var isbin = 0;
									 	
									 if ($(listofdims[i]).data('series')=="X-Axis")
									 {
										 series_x = $(listofdims[i]).data('series');
										 if(binX1 == 1)
										 {
										 j=0;
										 }
										 var isbintext = $("#xaxisdivtext"+j).html();
										  bintype = $("#bintype"+j).val();
										  binsize = $("#binsize"+j).val();
										  bincount = $("#bincount"+j).val();
										  
										  
//										 console.log("bintype  "+bintype);
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
										
										  if((binsize != "") || (bincount != ""))
											  {
											  bintype = $("#bintype"+j).val();
											  isbin = 1;											  
											  }
										  
										  if(bintype == "binsize")
											  {
											  bincount ="";											  
											  
											  }
										  else if (bintype == "binnumber")
											  {
											  binsize ="";											 
											  }										 
										 
										 globalcount = globalcount+1;
									 }	
									 else if ($(listofdims[i]).data('series')=="X1-Axis")
									 {
										 series_x = $(listofdims[i]).data('series');
										 if(binX1 == 1)
											 {
											 j=1;
											 }
										 var isbintext = $("#xaxisdivtext"+j).html();
										  bintype = $("#bintype"+j).val();
										  binsize = $("#binsize"+j).val();
										  bincount = $("#bincount"+j).val();
										  
										  
//										 console.log("bintype  "+bintype);
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
										
										  if((binsize != "") || (bincount != ""))
											  {
											  bintype = $("#bintype"+j).val();
											  isbin = 1;											  
											  }
										  
										  if(bintype == "binsize")
											  {
											  bincount ="";											  
											  
											  }
										  else if (bintype == "binnumber")
											  {
											  binsize ="";											 
											  }			
										  
										 globalcount = globalcount+1;
																				 
										 j=0;
									 }
									 else 
									 {
										  bintype = "";
										  binsize = "";
										 bincount = "";
										 
										 var yaxisradio =  "Aggregate" ;// $('input[name="yaxisradio0"]:checked').val();  
										
										 if (yaxisradio =="tonradio"+j)
										 {
											 displaytopCheck =1;
											 displaytopvalue =  $("#displaytopvalue"+j).val(); 
											 
											 if($("#others"+j).prop( "checked")==true)
											 {
												 
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
											 
											 var filterselecttype = $(listofdims[i]).find("select")[j];
											 var filterselecttypevalue = $(filterselecttype).val();
											 
											 console.log("Agg   #######:::"+filterselecttypevalue);
											 
											 Agg =  filterselecttypevalue; 
										 } 
										 
										 
									 }
									 
						
									 
									 
						 if($("#limitvalue").prop('checked')) 
						 {
							 if(custom_userlimit == 1)
								 {
								 var userlimitvalue = $("#numberofrows").val(); 
								 userlimitvalue += " , " +custom_userlimit;
								 }
							 else
							 {
								 var userlimitvalue = $("#numberofrows").val(); 
								 userlimitvalue += " , " +custom_userlimit;
								 
							 }
							 

							 console.log("userlimitvalue--" +userlimitvalue);
						 }
						 else
							 {
							 custom_userlimit =0;
							 var userlimitvalue= $("#numberofrows").val();
							 userlimitvalue += " , " +custom_userlimit;
							 console.log("else  userlimitvalue--" +userlimitvalue);
							 }
						 
						    var color =[];
						    var targetvalue_ =0;
						    
						    var fromfirst = 0;
					    	var tofirst = 0;
					    
					    	var fromsecond = 0;
					    	var tosecond = 0
					    	
					    	var fromthird = 0;
					    	var tothird = 0;
					    
						     fromfirst = $("#from_first").val();
					    	 tofirst = $("#to_first").val();
					    	var firstcolor = $("#color_first").val();
					    	 fromsecond = $("#from_second").val();
					    	 tosecond = $("#to_second").val();
					    	var secondcolor = $("#color_second").val();
					    	 fromthird = $("#from_third").val();
					    	 tothird = $("#to_third").val();
					    	var thirdcolor = $("#color_third").val();
					    	 targetvalue_ = $("#target_value").val();
					    	
					    	console.log("else  fromfirst--" +fromfirst);
					    	console.log("else  tofirst--" +tofirst);
					    	console.log("else  firstcolor--" +firstcolor);
					    	console.log("else  fromsecond--" +fromsecond);
					    	console.log("else  tosecond--" +tosecond);
					    	console.log("else  secondcolor--" +secondcolor);
					    	console.log("else  fromthird--" +fromthird);
					    	console.log("else  tothird--" +tothird);
					    	console.log("else  thirdcolor--" +thirdcolor);
					    	console.log("else  targetvalue_--" +targetvalue_);
					    	
//					    	 if((firstcolor == "") || (secondcolor == "") || (thirdcolor == ""))
//					    		    	{
//							    		   
//									       firstcolor = "#55BF3B";
//									      
//									       secondcolor = "#DDDF0D";
//									      
//									       thirdcolor = "#DF5353";
//									       
//					    		    	}

					    	 console.log("  thirdcolor--   " +thirdcolor);
					    	 console.log("  secondcolor--  " +secondcolor);
					    	 console.log("  firstcolor--   " +firstcolor);
					    	 
					    	 
					    	
					    	color.push({
					    		'fromfirst' : fromfirst,
					    		'tofirst' : tofirst,
					    		'firstcolor' : firstcolor,
					    		'fromsecond' : fromsecond,
					    		'tosecond' : tosecond,
					    		'secondcolor' : secondcolor,
					    		'fromthird' : fromthird,
					    		'tothird' : tothird,
					    		'thirdcolor' : thirdcolor,
					    		'fromTofunction' :fromTofunction,
					    		'targetvalue' : targetvalue_
					    	});
						 						 
									 ls.push({
								    'Series' : $(listofdims[i]).data('series'),
								 	'Field' : $(listofchild[j]).data('field'),
								 	'Type' : $(listofchild[j]).data('types'),
								 	'Agg' : Agg,
								 	'displaytopvalue' : displaytopvalue,
								 	'others' : others,
								 	'displaytopCheck':displaytopCheck,
								 	'Bin':isbin,
								 	'BinType':bintype,
								 	'BinSize':binsize,
								 	'BinCount':bincount,
								  	'userlimit':userlimitvalue,
								  	'colorfields' : color
								  	
								 });
				
								 varDim.push(ls);
								
							}
								
							}
					}
					
					console.log("vardim:::",varDim);
					
					console.log("listofdims.length::::"+varDim.length);
					
					var chartingtype12 = $("#chartingtype").val();
					//console.log("chartingtype12:::"+chartingtype12);
					if((chartingtype12 == "chartcard16") || (chartingtype12 == "chartcard17" ) || (chartingtype12 == "chartcard6") 
							|| (chartingtype12 == "chartcard22" ) || (chartingtype12 == "chartcard18" ))
						{
						if (varDim.length < 1)
						 {
							
							 var imgAdd='<div class="cb-graph-css d-flex p-3 highcharts-container justify-content-center" ><img src="./resources/images/line_graph.png" style="width: 500px"></div>';
							  $("#container1").html(imgAdd);
							  $("#container1").show();
							  $("#tablechartdiv").hide();
							  $("#fromtofunction_").prop("disabled", true);
							  return;
							 
						 } 
						
						}
					else if((chartingtype12 == "chartcard15") || (chartingtype12 == "chartcard19"))
					{
					if (varDim.length < 3)
					 {
						   
						 var imgAdd='<div class="cb-graph-css d-flex p-3 highcharts-container justify-content-center" ><img src="./resources/images/line_graph.png" style="width: 500px"></div>';
						  $("#container1").html(imgAdd);
						  $("#container1").show();
						  $("#tablechartdiv").hide();
						  return;
					 } 
					
					}
					else  if((chartingtype12 == "chartcard8") || (chartingtype12 == "chartcard9"))
					{
					if (varDim.length < 2)
					 {
						   
						 var imgAdd='<div class="cb-graph-css d-flex p-3 highcharts-container justify-content-center" ><img src="./resources/images/line_graph.png" style="width: 500px"></div>';
						  $("#container1").html(imgAdd);
						  $("#container1").show();
						  $("#tablechartdiv").hide();
						  return;
					 } 
					
					}
					else
					{
					
					   if (varDim.length <= 1)
					 {
						   console.log("series_x::    : "+series_x);
						  
							   if(series_x == "")
								   {
								   var imgAdd='<div class="cb-graph-css d-flex p-3 highcharts-container justify-content-center" ><img src="./resources/images/line_graph.png" style="width: 500px"></div>';
									  $("#container1").html(imgAdd);
									  return;
								   
								   }
							   else
								   {
								   var imgAdd='<div class="cb-graph-css d-flex p-3 highcharts-container justify-content-center" ><img src="./resources/images/line_graph.png" style="width: 500px"></div>';
									  $("#container1").html(imgAdd);
									  return;
								   }
						   
							   
						  
						 
					 } 
					 else
				     {
						 if(series_x == "")
						   {
						   var imgAdd='<div class="cb-graph-css d-flex p-3 highcharts-container justify-content-center" ><img src="./resources/images/line_graph.png" style="width: 500px"></div>';
							  $("#container1").html(imgAdd);
							  return;
						   
						   }
					     
					 }
					   
					}
					
					$(".dropzonefilter").droppable({
					    disabled: false
					});
						
							var varDimfilter = [];
						var listofdimsfilter = $('div.dropzoneselect');
						console.log("listofdimsfilter:::::",listofdimsfilter);
						console.log("listofdimsfilter len:::::"+listofdimsfilter.length);

						
						
						
						
						//escape 1st item which is filter
//						for (var i = 0; i < listofdimsfilter.length; i++) 
//						{	
						
						var filter_list_i = 0;
						//var basic_filterindex =0;
						
						if(listofdimsfilter.length > 0)
							{
						var i =0;
							console.log("i###########:::::"+i);
							
							console.log("filter_list###########:::::"+filter_list);
							for (var p = 0; p < filter_list.length; p++) 
								{
								filter_list_i = filter_list[p];
								
								console.log("i#######   filter_list        ####:::::  "+i);
								console.log("i#######   filter_list  filter_list_i      ####:::::  "+filter_list_i);
//							i=accordianind ;
							
							selectcount_ = filter_list_i;
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
				 				console.log("filterselecttype:::::",filterselecttype);
				 				
				 				
				 				var filterselecttypevalue = $(filterselecttype).val();
				 				
				 				console.log("filterselecttypevalue:::::::::::"+filterselecttypevalue);
				 				
				 				
								if(types=='text' && filterselecttypevalue == 'adv' )
				 				{
				 				
					 				 filterselect1 = $(listofdimsfilter[i]).find("select")[2];
					 				 filterselect2 = $(listofdimsfilter[i]).find("select")[3];
					 				 filterselect3 = $(listofdimsfilter[i]).find("select")[1];
					 			
				 				}
				 				else if((types=='number' && filterselecttypevalue == 'adv' ) || (types=='time' && filterselecttypevalue == 'adv' ))
				 				{
				 					 filterselect1 = $(listofdimsfilter[i]).find("select")[1];
					 				 filterselect2 = $(listofdimsfilter[i]).find("select")[2];
					 				 filterselect3 = $(listofdimsfilter[i]).find("select")[3];
					 			    					 								 			
				 				}
								
								if((edit_ModeFlag == 1) && (types=='number' && filterselecttypevalue == 'adv' ))
									{
									filterselect1= $(filterselect2).val();
						 			filterselect2=$(filterselect3).val();																			
									}
								else
									{
									filterselect1= $(filterselect1).val();
						 			filterselect2=$(filterselect2).val();									
									}
								
				 				//console.log("listofdimsfilter[i]:::::",listofdimsfilter[i]);
				 				var filterand = $(listofdimsfilter[i]).find("input[type='radio']")[0];
				 				var filteror = $(listofdimsfilter[i]).find("input[type='radio']")[1];
				 				
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
				 					basicFilterValue_Array = [];
				 	 				  
				 	 				 basicFilter_userlimitvalue =0;	
				 				}
				 				else if (filterselecttypevalue =="basicfiltering")
				 				{
				 					//var basic_filterindex =0;
				 					filterselect1 = "";
				 				    filterselect2 = "";
				 					andorvalue ="";
				 				
				 					console.log("selectcount_:::  "+selectcount_);
				 					
				 					if($("#chkLocal"+selectcount_).prop("checked") == true)
				 						{
				 										 						
				 						for(b=0;b<basicresult_length;b++)
				 						{				 							
				 							basicFilterValue = $("#allcheck"+b).val();
				 							
				 							bsArray.push
				 							({										
										    'BasicFilterValue' : basicFilterValue,																		
								        	});
				 									 							
				 						}
				 						basicFilterValue_Array.push(bsArray);
				 						//console.log("basicFilterValue_Array  ",basicFilterValue_Array);
				 						}				 				
				 					else if (($("#chkLocal"+selectcount_).prop("checked") == false ) && ($(".allselectcheckbox:checked").prop("checked") == true))
				 					    {

				 						 var child1 =0;
				 						 $('.dropzonefilter.ui-droppable').children().each(function()
			 									 {
				 							  child1++;
//			 								 	 //$(".allselectcheckbox:checked").prop("checked") == true)
			 									 })
				 						console.log("child1 ######   "+child1);
				 						 
				 						 /*for(c=0; c< child1 ; c++)
				 							 {*/
						 						var bsArray =[]; 	 
				 							 $('.allselectcheckbox.allcheck'+filter_list_i).each(function()
				 									 {
				 								     if($(this).prop("checked") == true)
							 							{
					 									 basicFilterValue = $(this).val();	
//					 									console.log("basicFilterValue  "+basicFilterValue);
					 									 bsArray.push
								 							({										
														    'BasicFilterValue' : basicFilterValue,																		
												        	});
					 									
					 									
//					 									console.log("bsArray  ",bsArray);
							 							}
				 								  
				 									 });
				 					    basicFilterValue_Array.push(bsArray);				 						
					 					console.log("basicFilterValue_Array  ",basicFilterValue_Array);
					 				
				 				     }
				 					
				 					else if($("#chkLocal"+selectcount_).prop("checked") == false)
				 						{
				 						
				 					
				 						basicFilterValue_Array = [];
				 						filterselecttypevalue = "";
				 						}
				 					
				 				    basicFilter_userlimitvalue= $("#numberofrows_basic"+filter_list_i).val(); //numberofrows__basic0
									console.log("basicFilter_userlimitvalue-----" +basicFilter_userlimitvalue);
				 					$('#numberofrows_basic').val(basicFilter_userlimitvalue);
									//selectcount_ ++;
				 				}
				 				
				 				else if (filterselecttypevalue =="topn")
				 				{				 				    
				 				     filterselect1 = "";
				 				     filterselect2 = "";
				 			       andorvalue = "";
				 				   filterselect3 = $("#topninputvalue"+selectcount_).val();
				 				   //console.log("filterselect3:::::",filterselect3);
				 					
				 					if (filterselect3=="bottom")
				 					{
				 						filtertopn="bottom";
				 					}
				 					else 
				 					{
				 						 filtertopn="top";
				 					}
				 					
				 					
				 				    filtertopvalue =$("#topninput"+selectcount_).val();
				 				   basicFilterValue_Array = [];
				  				 
				  				 basicFilter_userlimitvalue =0;
				 				  }
				 				
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
								i++;
						}
					}
//			}
						console.log("varDimfilter ",varDimfilter);
						
						var tabelname = globalselectedtabnlename;
							//globalselectedtabnlename ;//$("#tablelistData").val();
						
						if (tabelname =="0")
						{
							$.notify("Please select table!","info");
							//alert("Please select table!");
							return;
						}
						
						
						
						$("#container").empty();
						type = "";
						
						
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
//						  getMaxValue(type , varDim , varDimfilter , tabelname);
						  
						  
						  
//						  return;
						  
						  $("#fromtofunction_").prop("disabled", false);
						  var properties =[];
						  var legend_plc = "";
						  var top_bottom ="";
						  var label_rotation = 0;
						  var data_labels = false;
						  var zoom_type ="";
						  var font_color = "";
						  var chart_flip = false;
						  var value_conversion =0;
						  var data_bar_color = "";
						  var title_alignment ="";
						  var color = [];
						  var y_label_rotation = 0;
						  var prefix ="";
						  var suffix = "";
//						  var opacity ="";
						 var x_label_check = false;
						 var x_categories_check = false;
						  
//						  y_label_rotation
						  
						  
						  
						  if(legend_button == 1)
							  {
//							   legend_plc= $("#displaylegend").val();
							   top_bottom =$("#placement").val();
							   
							   if(top_bottom == "select")
								   {
								   top_bottom ="";
								   }
				               else
								   {
				            	   top_bottom = $("#placement").val();
								   }
						   
							   
							   
								
							   label_rotation = $("#label_rotation").val();
							   
							   y_label_rotation = $("#y_label_rotation").val();
							   
							   
							   if($("#data_labels").prop("checked")==true)
								   {
								   data_labels = true;
								   }
							   else
								   {
								   data_labels = false;
								   }
							   
							   
							   zoom_type = $("#zoom_type").val();
							   
							   if(zoom_type == "select")
								   {
									   zoom_type ="";
								   }
					           else
								   {
						    	   zoom_type = $("#zoom_type").val();
								   }
						   
							   
							   font_color = $("#font_color").val();
							  
							   if($("#chart_flip").prop("checked")==true)
								   {
								   chart_flip = true;
								   }
							   else
								   {
								   chart_flip = false;
								   }
							   
							   value_conversion = $("#value_conversion").val();
							   
							   if(value_conversion == "select")
								   {
								   value_conversion =0;
								   }
							   else
								   {
								   value_conversion = $("#value_conversion").val();
								   }
							   
//							   alert ("value_conversion          "+value_conversion);
							   
							   data_bar_color = $("#data_bar").val();
							   color.push(data_bar_color);
							   title_alignment =$("#title_alignment").val();
							   
							   if(title_alignment == "select")
								   {
									   title_alignment ="";
								   }
						       else
								   {
								   title_alignment = $("#title_alignment").val();
								   }
							   
							   
							   prefix = $("#prefix").val();
							   
							   suffix = $("#suffix").val();
							   
//							   opacity = $("#opacity").val();
							   
							   console.log("prefix   "+prefix);
								console.log("suffix   "+suffix);
//								console.log("opacity   "+opacity);
								
								
								 
							   if($("#categories_check").prop("checked")==true)
								   {
								   x_categories_check = true;
								   }
							   else
								   {
								   x_categories_check = false;
								   }
								  
							   
							   if($("#label_check").prop("checked")==true)
								   {
								   x_label_check = true;
								   }
							   else
								   {
								   x_label_check = false;
								   }  
								  
								 
								 
								
							   
//							   if(databar_colordiv_append_inc >0)
//							   {
//							   for(var d=0; d<databar_colordiv_append_inc; d++)
//									{
//									var color_bar = $("#databar_color"+d).val();
//									color.push(color_bar);
//									
//									}
//							   
//							   }
							   
//							   console.log("color   ",color);
//								console.log("legend_plc   "+legend_plc);
//								console.log("top_bottom   "+top_bottom);
							   properties.push({
									  'top_bottom' : top_bottom,
									  'label_rotation' : label_rotation,
									  'y_label_rotation' : y_label_rotation,
									  'data_labels' : data_labels,
									  'zoom_type' : zoom_type,
									  'font_color' : font_color,
									  'chart_flip' : chart_flip,
									  'value_conversion' : value_conversion,
									  'data_bar_color' : "",
									  'title_alignment' : title_alignment,
									  'charttype' : $("#chartingtype").val(),
									  'prefix' : prefix,
									  'suffix' : suffix,
									  'x_categories_check' : x_categories_check,
									  'x_label_check' : x_label_check,
									  									  
								  });
							   
							
							   
							   
							   
							  }
						  else
							  {
							  properties.push({
								  'top_bottom' : "",
								  'label_rotation' : 0,
								  'y_label_rotation' : 0,
								  'data_labels' : false,
								  'zoom_type' : "",
								  'font_color' : "",
								  'chart_flip' : false,
								  'value_conversion' : 0,
								  'data_bar_color' : "",
								  'title_alignment' : "",
								  'charttype' : $("#chartingtype").val(),
								  'prefix' : "",
								  'suffix' : "",
								  'x_categories_check' : false,
								  'x_label_check' : false,
							  });
							  
							  }
						  
						  
						
						  
//						  alert("databar_colordiv_append_inc   "+databar_colordiv_append_inc);
						  			console.log("properties          ",properties);			 						  				
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
								properties_ :  JSON.stringify(properties),
							},
							success : function(result) {
								NProgress.done(true);
								//$("#tablechartdiv").html("");
								
								$('#container1').html("");
								
								console.log("chart result--   "+result);
								
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
											setTimeout(() => 
											{
											
												$("#variables").append(result);
												
											}, 5);	
											}
										
										
//										chart.redraw();
//										
//										
//										var svg = chart.getSVG();
//										
////										.replace(/</g, '\n&lt;').replace(/>/g, '&gt;');
//								    
//										console.log(svg);
//										
//										
//								    document.body.innerHTML = '<pre>'+ svg +'</pre>';
//
//								    console.log(document.body.innerHTML = '<pre>'+ svg +'</pre>');
										
										
//										let pivot = new Flexmonster({
//											  container: "container1",
//											  componentFolder: "http://localhost:8181/CafeBotCharting/",
//											  report: {
//											    dataSource: {
//											      filename: ""
//											    },
//											    options: {
//											      configuratorActive: false
//											    }
//											  }
//											});
										
										
										
										
//										geturl();	
									
						},
						error : function(data) {
							NProgress.done(true);
							console.log(data);
						}
					});
					});

			
			
			
			
			
			
			
			
			
			
		
			
			
			
			
			
			
			
//			function image() {
//				  const params = {
//				    filename: 'flexmonster',
//				    header: "##CURRENT-DATE##",
//				    footer: "<div style='color:#df3800'>Table Footer</div>",
//				  };
//				  flexmonster.exportTo('image', params);
//				}
			
			
			
			
			
			
			
			
			
//			createFile();
//			  function createFile() {    
//			      var object = new ActiveXObject("Scripting.FileSystemObject");       
//			      var file = object.CreateTextFile("C:\\Users\\valsys\\Desktop\\bar123.txt", true);
//			      file.WriteLine('Hello World');
//			      alert('Filecreated');
//			      file.WriteLine('Hope is a thing with feathers, that perches on the soul.'); 
//			      file.Close();
//			  }
			
			
//			function getMaxValue(var type , var varDim ,var varDimfilter ,var tabelname)
//			{
//				
//				
//				
//				
//				
//				NProgress.start();
//				$.ajax({method : "POST",			
//					async:false,
//					url : "./getMaxValue",
//					data : {
//						chartName : type,
//						fieldsprop : JSON.stringify(varDim),
//						charttype:	$("#chartingtype").val(),
//						filterprop : JSON.stringify(varDimfilter),
//						tabelname:tabelname,
//					},
//					success : function(result) {
//						NProgress.done(true);
//						
//						
//							
//				},
//				error : function(data) {
//					NProgress.done(true);
//					console.log(data);
//				}
//			});
//				
//			}
			
/////-------------------Save Chart 			
			
$("#btnSave").click(function(e) 

{
//	debugger;
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
	 var userlimitvalue= 1000;
	 var series_x = "";
	
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
						 series_x =$(listofdims[i]).data('series');
						 if(binX1 == 1)
						 {
						 j=0;
						 }
						 var isbintext = $("#xaxisdivtext0").html();
						 
						 
						 bintype = $("#bintype"+j).val();
						  binsize = $("#binsize"+j).val();
						  bincount = $("#bincount"+j).val();
						 
						  displaytopvalue ="";
						  others ="";
						  Agg ="";

						  if((binsize != "") || (bincount != ""))
							  {
							  bintype = $("#bintype"+j).val();
							  isbin = 1;											  
							  }
						  
						  if(bintype == "binsize")
							  {
							  bincount ="";
							  }
						  else if (bintype == "binnumber")
							  {
							  binsize ="";
							  }
						 
						 globalcount = globalcount+1;
					 }	
					 else if ($(listofdims[i]).data('series')=="X1-Axis")
					 {
						 series_x =$(listofdims[i]).data('series');
						 if(binX1 == 1)
						 {
						 j=1;
						 }
					 var isbintext = $("#xaxisdivtext"+j).html();
					  bintype = $("#bintype"+j).val();
					  binsize = $("#binsize"+j).val();
					  bincount = $("#bincount"+j).val();
					  
					  
//					 console.log("bintype  "+bintype);
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
					
					  if((binsize != "") || (bincount != ""))
						  {
						  bintype = $("#bintype"+j).val();
						  isbin = 1;											  
						  }
					  
					  if(bintype == "binsize")
						  {
						  bincount ="";											  
						  
						  }
					  else if (bintype == "binnumber")
						  {
						  binsize ="";											 
						  }			
					  
					 globalcount = globalcount+1;
															 
					 j=0;
					 }
					 else 
					 {
						  bintype = "";
						  binsize = "";
						 bincount = "";
						 
						 var yaxisradio = "Aggregate";// $('input[name="yaxisradio0"]:checked').val();  
						
						 if (yaxisradio =="tonradio0")
						 {
							 displaytopCheck =1;
							 displaytopvalue =  $("#displaytopvalue0").val(); 
							 
							 if($("#others0").prop( "checked")==true)
							 {
								
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
							 
							 var filterselecttype = $(listofdims[i]).find("select")[j];
							 var filterselecttypevalue = $(filterselecttype).val();
							 
							// console.log("filterselecttypevalue####::::"+filterselecttypevalue);
							 
							 Agg =  filterselecttypevalue; 
							 //Agg =  $("#aggregateval").val(); 
						 }
						 
						 
					 }
				 	
				
					 if (bintype =="null" || bintype ==null || bintype =="undefined")
					 { 
						 isbin =0;
						 bintype ="";
					 }
					
					 if($("#limitvalue").prop('checked')) 
						 {
						 
						 custom_userlimit =1;
								 var userlimitvalue = $("#numberofrows").val(); 
								 userlimitvalue += " , " +custom_userlimit;
							
	
							 console.log("userlimitvalue--" +userlimitvalue);
						 }
					 else
						 {
						 custom_userlimit =0;
						 var userlimitvalue= $("#numberofrows").val();
						 userlimitvalue += " , " +custom_userlimit;
						 console.log("else  userlimitvalue--" +userlimitvalue);
						 }
					// console.log("numberofrows--" +userlimitvalue);
                     
                        var color =[];
                        var targetvalue_ = 0;
					    var fromfirst = $("#from_first").val();
				    	var tofirst = $("#to_first").val();
				    	var firstcolor = $("#color_first").val();
				    	var fromsecond = $("#from_second").val();
				    	var tosecond = $("#to_second").val();
				    	var secondcolor = $("#color_second").val();
				    	var fromthird = $("#from_third").val();
				    	var tothird = $("#to_third").val();
				    	var thirdcolor = $("#color_third").val();
				    	targetvalue_ = $("#target_value").val();
				    	
				    	console.log("else  fromfirst--" +fromfirst);
				    	console.log("else  tofirst--" +tofirst);
				    	console.log("else  firstcolor--" +firstcolor);
				    	console.log("else  fromsecond--" +fromsecond);
				    	console.log("else  tosecond--" +tosecond);
				    	console.log("else  secondcolor--" +secondcolor);
				    	console.log("else  fromthird--" +fromthird);
				    	console.log("else  tothird--" +tothird);
				    	console.log("else  thirdcolor--" +thirdcolor);
				    					    	 				    
				    	
				    	color.push({
				    		'fromfirst' : fromfirst,
				    		'tofirst' : tofirst,
				    		'firstcolor' : firstcolor,
				    		'fromsecond' : fromsecond,
				    		'tosecond' : tosecond,
				    		'secondcolor' : secondcolor,
				    		'fromthird' : fromthird,
				    		'tothird' : tothird,
				    		'thirdcolor' : thirdcolor,
				    		'fromTofunction' :fromTofunction,
				    		'targetvalue' :targetvalue_
				    	});
				    	
				    	console.log("  color#######--   " ,color);
					 
				 
				 ls.push({'Series' : $(listofdims[i]).data('series'),
				 	'Field' : $(listofchild[j]).data('field'),
				 	'Type' : $(listofchild[j]).data('types'),
				 	'Agg' : Agg,
					'Datatype' : $(listofchild[j]).data('types'),
				 	'displaytopvalue' : displaytopvalue,
				 	'others' : others,
				 	'displaytopCheck':displaytopCheck,
				 	'Bin':isbin,
				 	'BinType':bintype,
				 	'BinSize':binsize,
				 	'BinCount':bincount,
				 	'userlimit':userlimitvalue,
					'colorfields' : color
				 	
				 });

				 varDim.push(ls);
												
			}
				//console.log($('.column-card',listofdims[i]));
			}
	}
	
	console.log("vardim:::",varDim);	
	
	console.log("vardim  len:::"+varDim.length);	
	
	
	var chartingtype12 = $("#chartingtype").val();
	//console.log("chartingtype12:::"+chartingtype12);
	if((chartingtype12 == "chartcard16") || (chartingtype12 == "chartcard17" ) || (chartingtype12 == "chartcard6") 
			|| (chartingtype12 == "chartcard22" ) || (chartingtype12 == "chartcard18" ))
		{
		if (varDim.length < 1)
		 {
			
			 var imgAdd='<div class="cb-graph-css d-flex p-3 highcharts-container justify-content-center" ><img src="./resources/images/line_graph.png" style="width: 500px"></div>';
			  $("#container1").html(imgAdd);
			  $("#container1").show();
			  $("#tablechartdiv").hide();
			  $("#fromtofunction_").prop("disabled", true);
			  
			  closeModal();
			  
			  $.notify("Can't save blank chart!","info");
//			  $("#chartNametxt").val("");
			  
			  
			  return;
			 
		 } 
		
		}
	else if((chartingtype12 == "chartcard15") || (chartingtype12 == "chartcard19"))
	{
	if (varDim.length < 3)
	 {
		   
		 var imgAdd='<div class="cb-graph-css d-flex p-3 highcharts-container justify-content-center" ><img src="./resources/images/line_graph.png" style="width: 500px"></div>';
		  $("#container1").html(imgAdd);
		  $("#container1").show();
		  $("#tablechartdiv").hide();
		  
		  closeModal();
		  
		  $.notify("Can't save blank chart!","info");
		  
//		  $("#chartNametxt").val("");
		  
		  return;
	 } 
	
	}
	else  if((chartingtype12 == "chartcard8") || (chartingtype12 == "chartcard9"))
	{
	if (varDim.length < 2)
	 {
		   
		 var imgAdd='<div class="cb-graph-css d-flex p-3 highcharts-container justify-content-center" ><img src="./resources/images/line_graph.png" style="width: 500px"></div>';
		  $("#container1").html(imgAdd);
		  $("#container1").show();
		  $("#tablechartdiv").hide();
		  
          closeModal();
		  
		  $.notify("Can't save blank chart!","info");
		  
		  
		  return;
	 } 
	
	}
	else
	{
	
	   if (varDim.length <= 1)
	 {
		  
		 var imgAdd='<div class="cb-graph-css d-flex p-3 highcharts-container justify-content-center" ><img src="./resources/images/line_graph.png" style="width: 500px"></div>';
		  $("#container1").html(imgAdd);
		  
		  
		  closeModal();
		  
		  $.notify("Can't save blank chart!","info");
		  
//		  $("#chartNametxt").val("");
		  
		  return;
	 } 
	   else
		   {
		   if(series_x =="")
			   {
			   var imgAdd='<div class="cb-graph-css d-flex p-3 highcharts-container justify-content-center" ><img src="./resources/images/line_graph.png" style="width: 500px"></div>';
				  $("#container1").html(imgAdd);
				  
				  
				  closeModal();
				  
				  $.notify("Can't save blank chart!","info");
				  
//				  $("#chartNametxt").val("");
				  
				  return;
			   
			   }
		   
		   }
	   
	}
	
	
	
	
		
			var varDimfilter = [];
		var listofdimsfilter = $('div.dropzoneselect');
		
		console.log("listofdimsfilter:   save   ::::",listofdimsfilter);
		console.log("listofdimsfilter len   save :::::"+listofdimsfilter.length);
		
		
var filterselect1="";
var filterselect2="";
var filterselect3="";
var basicFilterValue ="";

var userLimit_basicFilter =0;
var limitbasicCheck = 0;
var basicFilter_userlimitvalue = 0;

var filter_list_i = 0;


			if(listofdimsfilter.length > 0)
				{
			var i =0;
				console.log("i###########:::::"+i);
				
				console.log("filter_list.length    ###########:::::"+filter_list.length);
				for (var p = 0; p < filter_list.length; p++) 
					{
					filter_list_i = filter_list[p];
//					console.log("i#######   filter_list        ####:::::  "+i);
//					console.log("i#######   filter_list  filter_list_i      ####:::::  "+filter_list_i);
			//	i=accordianind ;
				
				selectcount_ = filter_list_i;
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
						console.log("filterselecttype:::::",filterselecttype);
						
						
						var filterselecttypevalue = $(filterselecttype).val();
						
						console.log("filterselecttypevalue:::::::::::"+filterselecttypevalue);
						
						
					if(types=='text' && filterselecttypevalue == 'adv' )
						{
						
							 filterselect1 = $(listofdimsfilter[i]).find("select")[2];
							 filterselect2 = $(listofdimsfilter[i]).find("select")[3];
							 filterselect3 = $(listofdimsfilter[i]).find("select")[1];
						
						}
						else if((types=='number' && filterselecttypevalue == 'adv' ) || (types=='time' && filterselecttypevalue == 'adv' ))
						{
							 filterselect1 = $(listofdimsfilter[i]).find("select")[1];
							 filterselect2 = $(listofdimsfilter[i]).find("select")[2];
							 filterselect3 = $(listofdimsfilter[i]).find("select")[3];
						    					 								 			
						}
					
					if((edit_ModeFlag == 1) && (types=='number' && filterselecttypevalue == 'adv' ))
						{
						filterselect1= $(filterselect2).val();
			 			filterselect2=$(filterselect3).val();																			
						}
					else
						{
						filterselect1= $(filterselect1).val();
			 			filterselect2=$(filterselect2).val();									
						}
					
						//console.log("listofdimsfilter[i]:::::",listofdimsfilter[i]);
						var filterand = $(listofdimsfilter[i]).find("input[type='radio']")[0];
						var filteror = $(listofdimsfilter[i]).find("input[type='radio']")[1];
						
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
							basicFilterValue_Array = [];
							limitbasicCheck = 0;
							basicFilter_userlimitvalue =0;	
						}
						else if (filterselecttypevalue =="basicfiltering")
						{
							//var basic_filterindex =0;
							filterselect1 = "";
						    filterselect2 = "";
							andorvalue ="";
						
							console.log("selectcount_:::  "+selectcount_);
							
							if($("#chkLocal"+selectcount_).prop("checked") == true)
								{
												 						
								for(b=0;b<basicresult_length;b++)
								{				 							
									basicFilterValue = $("#allcheck"+b).val();
									
									bsArray.push
									({										
							    'BasicFilterValue' : basicFilterValue,																		
					        	});
											 							
								}
								basicFilterValue_Array.push(bsArray);
								//console.log("basicFilterValue_Array  ",basicFilterValue_Array);
								}				 				
							else if (($("#chkLocal"+selectcount_).prop("checked") == false ) && ($(".allselectcheckbox:checked").prop("checked") == true))
							    {
			
								 var child1 =0;
								 $('.dropzonefilter.ui-droppable').children().each(function()
										 {
									  child1++;
			//						 	 //$(".allselectcheckbox:checked").prop("checked") == true)
										 })
								console.log("child1 ######   "+child1);
								 
								 /*for(c=0; c< child1 ; c++)
									 {*/
			 						var bsArray =[]; 	 
									 $('.allselectcheckbox.allcheck'+filter_list_i).each(function()
											 {
										     if($(this).prop("checked") == true)
				 							{
												 basicFilterValue = $(this).val();	
			//									console.log("basicFilterValue  "+basicFilterValue);
												 bsArray.push
					 							({										
											    'BasicFilterValue' : basicFilterValue,																		
									        	});
												
												
			//									console.log("bsArray  ",bsArray);
				 							}
										  
											 });
							    basicFilterValue_Array.push(bsArray);				 						
								console.log("basicFilterValue_Array  ",basicFilterValue_Array);
							
						     }
							
							else if($("#chkLocal"+selectcount_).prop("checked") == false)
								{
								
							
								basicFilterValue_Array = [];
								filterselecttypevalue = "";
								}
							
						    basicFilter_userlimitvalue= $("#numberofrows_basic"+filter_list_i).val(); //numberofrows__basic0
						console.log("basicFilter_userlimitvalue-----" +basicFilter_userlimitvalue);
							$('#numberofrows_basic').val(basicFilter_userlimitvalue);
							
							 basicFilter_userlimitvalue= $("#numberofrows_basic"+filter_list_i).val(); //numberofrows__basic0
								console.log("basicFilter_userlimitvalue-----" +basicFilter_userlimitvalue);
								 if($("#limitvalue_basic"+selectcount_).prop('checked')) {
							         
									 limitbasicCheck = 1;
							        } else {				         
							        	limitbasicCheck = 0;
							        }
							
							
							
						//selectcount_ ++;
						}
						
						else if (filterselecttypevalue =="topn")
						{				 				    
						     filterselect1 = "";
						     filterselect2 = "";
					       andorvalue = "";
						   filterselect3 = $("#topninputvalue"+selectcount_).val();
						   //console.log("filterselect3:::::",filterselect3);
							
							if (filterselect3=="bottom")
							{
								filtertopn="bottom";
							}
							else 
							{
								 filtertopn="top";
							}
							
							
						   filtertopvalue =$("#topninput"+selectcount_).val();
						   basicFilterValue_Array = [];
						   limitbasicCheck = 0;
						   basicFilter_userlimitvalue =0;
						  }
						
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
						    'userLimit_basic' : basicFilter_userlimitvalue,
						    'limitBasic_check' : limitbasicCheck ,
						});
					varDimfilter.push(ls);	
					i++;
			}
			}


		console.log("varDimfilter::: ",varDimfilter);
	

					//--mansi
					var tablename = globalselectedtabnlename ;//$("#tablelistData").val();
					//var tablename = "PT84430568S";
					 
					if (tablename =="" || tablename=="0" || tablename == undefined)
					{
						
						closeModal();
						
						$("#chartNametxt").val("");
						
						$.notify("Please select table!","info");
						//alert("Please select table!");
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
					console.log("globaldashid#########----"+globaldashid);
					//type = globalchartType;
					var dashboardid = globaldashid ;  //selectedtabid;//  $("#dashboardlistData").val();
					var tabid = selectedtabid ;//$("#tablistData").val();
					var tabname = selectedtabname;//$("#tablistData option:selected").text();
					var chartNametxt = $("#chartNametxt").val();
					
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
																		
						$.notify("Please enter chart name","info");
						//alert("Please enter chart name");
						return;
					}
					
					
					
//					debugger;
					
					console.log("dashboard_title:::::"+dashboard_title);
					console.log("dashboardid:::::"+dashboardid);
					console.log("tabname:::::"+tabname);
					console.log("tabid:::::"+tabid);
					var chart_id = $("#chart_id").val();
					console.log("chart_id:::::"+chart_id);
					
					
					 var properties =[];
					  var legend_plc = "";
					  var top_bottom ="";
					  var label_rotation = 0;
					  var data_labels = false;
					  var zoom_type ="";
					  var font_color = "";
					  var chart_flip = false;
					  var value_conversion =0;
					  var data_bar_color = "";
					  var title_alignment ="";
					  var y_label_rotation = 0;
					  var  prefix = "";					   
					  var suffix = "";					   
//					  var opacity=0;
					
//					  y_label_rotation
					  
					  if(legend_button == 1)
						  {
//						   legend_plc= $("#displaylegend").val();
						   top_bottom =$("#placement").val();
						   
						   if(top_bottom == "select")
							   {
							   top_bottom ="";
							   }
			               else
							   {
			            	   top_bottom = $("#placement").val();
							   }
					   
						   
						   
							
						   label_rotation = $("#label_rotation").val();
						   
						   if(label_rotation == "select")
						   {
							   label_rotation =0;
						   }
		               else
						   {
		            	   label_rotation = $("#label_rotation").val();
						   }
						   
						   
						   y_label_rotation = $("#y_label_rotation").val();
						   
						   if(y_label_rotation == "select")
						   {
							   y_label_rotation =0;
						   }
		               else
						   {
		            	   y_label_rotation = $("#y_label_rotation").val();
						   }
						   
						   if($("#data_labels").prop("checked")==true)
							   {
							   data_labels = true;
							   }
						   else
							   {
							   data_labels = false;
							   }
						   
						   
						   zoom_type = $("#zoom_type").val();
						   
						   if(zoom_type == "select")
							   {
								   zoom_type ="";
							   }
				           else
							   {
					    	   zoom_type = $("#zoom_type").val();
							   }
					   
						   font_color = $("#font_color").val();
						  
						   if($("#chart_flip").prop("checked")==true)
							   {
							   chart_flip = true;
							   }
						   else
							   {
							   chart_flip = false;
							   }
						   
						   value_conversion = $("#value_conversion").val();
						   
						   if(value_conversion == "select")
							   {
							   value_conversion =0;
							   }
						   else
							   {
							   value_conversion = $("#value_conversion").val();
							   }
						   
//						   alert ("value_conversion          "+value_conversion);
						   
//						   data_bar_color = $("#data_bar").val();
						   
						   
//						   color.push(data_bar_color);
						   title_alignment =$("#title_alignment").val();
						   
						   if(title_alignment == "select")
							   {
								   title_alignment ="";
							   }
					       else
							   {
							   title_alignment = $("#title_alignment").val();
							   }
						   
						   prefix = $("#prefix").val();
						   
						   suffix = $("#suffix").val();
						   
//						   opacity = $("#opacity").val();
						   
						   console.log("prefix   "+prefix);
							console.log("suffix   "+suffix);
//							console.log("opacity   "+opacity);
						   
							 
							   if($("#categories_check").prop("checked")==true)
								   {
								   x_categories_check = true;
								   }
							   else
								   {
								   x_categories_check = false;
								   }
								  
							   
							   if($("#label_check").prop("checked")==true)
								   {
								   x_label_check = true;
								   }
							   else
								   {
								   x_label_check = false;
								   }  
								  
								 
							
							
							
//						   if(databar_colordiv_append_inc >0)
//						   {
//						   for(var d=0; d<databar_colordiv_append_inc; d++)
//								{
//								var color_bar = $("#databar_color"+d).val();
//								color.push(color_bar);
//								
//								}
//						   
//						   }
						   
//						   console.log("color   ",color);
//							console.log("legend_plc   "+legend_plc);
//							console.log("top_bottom   "+top_bottom);
						   properties.push({
								  'top_bottom' : top_bottom,
								  'label_rotation' : label_rotation,
								  'y_label_rotation' : y_label_rotation,
								  'data_labels' : data_labels,
								  'zoom_type' : zoom_type,
								  'font_color' : font_color,
								  'chart_flip' : chart_flip,
								  'value_conversion' : value_conversion,
								  'data_bar_color' : "",
								  'title_alignment' : title_alignment,
								  'charttype' : $("#chartingtype").val(),
								  'prefix' : prefix,
								  'suffix' : suffix,
//								  'opacity' : opacity,
								  'x_categories_check' : x_categories_check,
								  'x_label_check' : x_label_check,
								 
							  });
						  
						  }
					  else
						  {
						  properties.push({
							  'top_bottom' : "",
							  'label_rotation' : 0,
							  'y_label_rotation' : 0,
							  'data_labels' : false,
							  'zoom_type' : "",
							  'font_color' : "",
							  'chart_flip' : false,
							  'value_conversion' : 0,
							  'data_bar_color' : "",
							  'title_alignment' : "",
							  'charttype' : $("#chartingtype").val(),
							  'prefix' : "",
							  'suffix' : "",
//							  'opacity' : 1,
							  'x_categories_check' : false,
							  'x_label_check' : false,
						  });
						  
						  }
						  
					  			console.log("properties          ",properties);		
					  			
					  			
//					  			varDim.push({
//					  				'properties_' : properties,
//					  			});
//					  			
//					  			console.log("varDim ###          ",varDim);	
//					return;
					
					NProgress.start();
					$.ajax({method : "POST",					
						url : "./savechart",
						
						data : {
							chartName : type,
							fieldsprop : JSON.stringify(varDim),
							charttype:	$("#chartingtype").val(),
							filterprop: JSON.stringify(varDimfilter),
							properties : JSON.stringify(properties),
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
							
						   var msg = "";
						   var sliceid ="";
							for(var v=0;v<data.length;v++)
							{
								sliceid = data[v].slice_name;
								msg= data[v].viz_type
							}
							
							
							if (msg =="1")
							{
								
								if(edit_ModeFlag == 1)
								{
									$.notify("Updated successfully!","success");
									
									//alert("Updated successfully");
									
									/*setTimeout(() => {
										
										loadchart1();
					  					//alert.hide();
					 				}, 300);*/
									
									setTimeout(() => {
										window.location.reload();
									}, 300);
									
									
									
								}
								else
									{
									
									$.notify("Saved successfully!","success");
									//alert("Save successfully");
									
									}
								
								$("#chart_id").val(sliceid);
								$("#chartname").val(chartNametxt); 
								$("#dash_id").val($("#dash_id").val()+","+dashboardid); 
								$("#tab_id").val($("#chart_id").val()+","+chart_id);
								//$("#descriptiopoup").model('hide');
								
								$("div.dashboardlistData select").val(dashboard_title);
//								$("#dashboardlistData").val(dashboard_title);
//								getDashboardlist();
								if (chartNametxt != "")
		    					{
			    					$("#chartNametxt").val(chartNametxt);
//			    					document.getElementById("chartNametxt").disabled = true;
			    								    					
			    					$("#dashboardlistData").attr("disabled","disabled");
			    					
			    					$("#tablistData").attr("disabled","disabled");
			    					
			    					//$("ul#dashboardlistData li").off('setTabList');
//			    					$("ul#dashboardlistData li").prop('onclick', null);
			    					
		    					 }
								
								
								
								
								
								closeModal();
								
								
								
								
								
								
								
							}
							else 
							{
							
								$.notify("Something went wrong!","error");
							//alert("Something went wrong");
								
							}
							
							
							
							
							
						},
						error : function(data) {
							//console.log(data);
						}
						
					});
					
					
					closeModal();
					
					
					
//					$("#chartNametxt").val("");
//					$("#tablistData").val("");
//					
//					loadchart1();
					
				});
				
				
				
				
$("#chartcard1, #chartcard2, #chartcard3,#chartcard4,#chartcard5,#chartcard6,#chartcard7,#chartcard8,#chartcard9,#chartcard10,#chartcard11,#chartcard12,#chartcard13,#chartcard14,#chartcard15,#chartcard16,#chartcard17 ,#chartcard18 ,#chartcard19,#chartcard20 ,#chartcard21,#chartcard22 ,#chartcard23").click(
	function(e) 
	{

//		$('#dashboardlistData').val("select");
//		$('#tablistData').val("select");
		

		$("#data_bar_div").hide();
		
		legend_button =0;
		
	     resetSelection();
	
	     filter_list =[];
	 	
	 	basic_filter_index =[];
		
		dashboard_title == "";
		selectedtabid=0;

		selectedtabname ="";
		globaldashid =0;
		
		$("#dashboardlistData").attr("disabled",false);
		
		$("#tablistData").attr("disabled",false);
		
		$("#discard_changes").prop("disabled" , true);
		
		binX1 =0;
		fromTofunction =0;
		accordianind =0;
		$("#fromtofunction_").prop("disabled", true);
		
		custom_userlimit =0;
		$("#limitvalue").prop('checked' , false);
		$("#numberofrowsdiv").hide();
		$("#numberofrows").val(1000);
		
		$("#wrapper").toggleClass("toggled");
		
		
		
		
		setTimeout(() => {
			getDashboardlist();
		}, 500);
		
		
		
		
		if(this.id =="chartcard1" )
		{
		 
		$("#charttype").html("Histogram");
		
		$("#charttype").attr('data-bs-original-title', "Histogram").tooltip();
		
		
		/// -------------properties
		$("#properties_div").show();
		
		$("#legend_placement_div").show();
		
		$("#x-axis_labeldiv").show();
		
		$("#y-axis_labeldiv").show();

		$("#zoomtype_div").show();
		
		$("#data_labels_div").show();
		
		$("#chart_flip_div").show();
		
		$("#color_div").show();
		
		$("#data_bar_div").hide();
		
		$("#value_conversion_div").show();
		
		$("#title_alignment_div").show();
		
//		$("#opacity_div").show();
		
		$("#prefix_div").show();
		
		$("#suffix_div").show();
		
		$("#categories_checkbox_div").show();
		
		$("#Label_checkbox_div").show();
		
		$("#toggle_div").removeClass("d-none");
		
		}
	 else if (this.id =="chartcard2")
		{	    					    					
		 $("#charttype").html("Bar");	
		 $("#charttype").attr('data-bs-original-title', "Bar").tooltip();
			/// -------------properties
			/// -------------properties
			$("#properties_div").show();
			
			$("#legend_placement_div").show();
			
			$("#x-axis_labeldiv").show();
			
			$("#y-axis_labeldiv").show();

			$("#zoomtype_div").show();
			
			$("#data_labels_div").show();
			
			$("#chart_flip_div").show();
			
			$("#color_div").show();
			
			$("#data_bar_div").hide();
			
			$("#value_conversion_div").show();
			
			$("#title_alignment_div").show();
			
//			$("#opacity_div").show();
			
			$("#prefix_div").show();
			
			$("#suffix_div").show();
			
			$("#categories_checkbox_div").show();
			
			$("#Label_checkbox_div").show();
			
			$("#toggle_div").removeClass("d-none");
		}
		else if(this.id =="chartcard3" )
		{
			$("#charttype").html("Stacked Bar Chart");
			$("#charttype").attr('data-bs-original-title', "Stacked Bar Chart").tooltip();
			
			/// -------------properties
			$("#properties_div").show();
			
			$("#legend_placement_div").show();
			
			$("#x-axis_labeldiv").show();
			
			$("#y-axis_labeldiv").show();

			$("#zoomtype_div").show();
			
			$("#data_labels_div").show();
			
			$("#chart_flip_div").show();
			
			$("#color_div").show();
			
			$("#data_bar_div").hide();
			
			$("#value_conversion_div").show();
			
			$("#title_alignment_div").show();
			
//			$("#opacity_div").show();
			
			$("#prefix_div").show();
			
			$("#suffix_div").show();
			
			$("#categories_checkbox_div").show();
			
			$("#Label_checkbox_div").show();
			
			$("#toggle_div").removeClass("d-none");
			
		}
		else if(this.id =="chartcard4" )
		{
			$("#charttype").html("Area Chart");	    
			$("#charttype").attr('data-bs-original-title', "Area Chart").tooltip();
			
			/// -------------properties
			$("#properties_div").show();
			
			$("#legend_placement_div").show();
			
			$("#x-axis_labeldiv").show();
			
			$("#y-axis_labeldiv").show();

			$("#zoomtype_div").show();
			
			$("#data_labels_div").show();
			
			$("#chart_flip_div").show();
			
			$("#color_div").show();
			
			$("#data_bar_div").hide();
			
			$("#value_conversion_div").show();
			
			$("#title_alignment_div").show();
			
//			$("#opacity_div").show();
			
			$("#prefix_div").show();
			
			$("#suffix_div").show();
			
			$("#categories_checkbox_div").show();
			
			$("#Label_checkbox_div").show();
			
			$("#toggle_div").removeClass("d-none");
		}
		else if(this.id =="chartcard5" )
		{
			$("#charttype").html("Line Chart");
			$("#charttype").attr('data-bs-original-title', "Line Chart").tooltip();
			
			/// -------------properties
			$("#properties_div").show();
			
			$("#legend_placement_div").show();
			
			$("#x-axis_labeldiv").show();
			
			$("#y-axis_labeldiv").show();

			$("#zoomtype_div").show();
			
			$("#data_labels_div").show();
			
			$("#chart_flip_div").show();
			
			$("#color_div").show();
			
			$("#data_bar_div").hide();
			
			$("#value_conversion_div").show();
			
			$("#title_alignment_div").show();
			
//			$("#opacity_div").show();
			
			$("#prefix_div").show();
			
			$("#suffix_div").show();
			
			$("#categories_checkbox_div").show();
			
			$("#Label_checkbox_div").show();
			
			$("#toggle_div").removeClass("d-none");
		}
	
		else if(this.id =="chartcard6" )
		{
			$("#charttype").html("Gauge Series");
			$("#charttype").attr('data-bs-original-title', "Gauge Series").tooltip();
			
			/// -------------properties
			$("#properties_div").show();
			
			$("#legend_placement_div").hide();
			
			$("#x-axis_labeldiv").hide();
			
			$("#y-axis_labeldiv").hide();

			$("#zoomtype_div").hide();
			
			$("#data_labels_div").hide();
			
			$("#chart_flip_div").hide();
			
			$("#color_div").hide();
			
			$("#data_bar_div").hide();
			
			$("#value_conversion_div").hide();
			
			$("#title_alignment_div").show();
			
//			$("#opacity_div").show();
			
			$("#prefix_div").hide();
			
			$("#suffix_div").hide();
			
			$("#categories_checkbox_div").hide();
			
			$("#Label_checkbox_div").hide();
			
			$("#toggle_div").addClass("d-none");
			
			
		}
		else if(this.id =="chartcard7" )
		{	    						
			$("#charttype").html("Stacked Bar Chart %");
			$("#charttype").attr('data-bs-original-title', "Stacked Bar Chart %").tooltip();
			

			/// -------------properties
			$("#properties_div").show();
			
			$("#legend_placement_div").show();
			
			$("#x-axis_labeldiv").show();
			
			$("#y-axis_labeldiv").show();

			$("#zoomtype_div").show();
			
			$("#data_labels_div").show();
			
			$("#chart_flip_div").show();
			
			$("#color_div").show();
			
			$("#data_bar_div").hide();
			
			$("#value_conversion_div").show();
			
			$("#title_alignment_div").show();
			
//			$("#opacity_div").show();
			
			$("#prefix_div").show();
			
			$("#suffix_div").show();
			
			$("#categories_checkbox_div").show();
			
			$("#Label_checkbox_div").show();
			
			$("#toggle_div").removeClass("d-none");
			
		}
		else if(this.id =="chartcard8" )
		{
			$("#charttype").html("Pie Chart");
			$("#charttype").attr('data-bs-original-title', "Pie Chart").tooltip();
			

			/// -------------properties
			$("#properties_div").show();
			
			$("#legend_placement_div").hide();
			
			$("#x-axis_labeldiv").hide();
			
			$("#y-axis_labeldiv").hide();

			$("#zoomtype_div").hide();
			
			$("#data_labels_div").hide();
			
			$("#chart_flip_div").hide();
			
			$("#color_div").show();
			
			$("#data_bar_div").hide();
			
			$("#value_conversion_div").hide();
			
			$("#title_alignment_div").show();
			
//			$("#opacity_div").show();
			
			$("#prefix_div").hide();
			
			$("#suffix_div").hide();
			
			$("#categories_checkbox_div").hide();
			
			$("#Label_checkbox_div").hide();
			
			$("#toggle_div").addClass("d-none");
			
			
			$("#label_rotation_change").html("Label Rotation");
			
			
			
			
			
			
			
//			$("#properties_div").show();
//			$("#legend_placement_div").hide();
//			$("#zoomtype_div").hide();
//			$("#title_alignment_div").show();
//			$("#color_div").show();
//			$("#value_conversion_div").show();
//		
//			$("#data_bar_div").hide();
			
			
			
			
//			$("#toggle_div").removeClass("d-none");
//			$("#color_div").hide();
			
//			$("#toggle_div").removeClass("d-none");
				
		}
		else if(this.id =="chartcard9")
		{
			$("#charttype").html("Donut Chart");
			$("#charttype").attr('data-bs-original-title', "Donut Chart").tooltip();
			
			

			/// -------------properties
			$("#properties_div").show();
			
			$("#legend_placement_div").hide();
			
			$("#x-axis_labeldiv").hide();
			
			$("#y-axis_labeldiv").hide();

			$("#zoomtype_div").hide();
			
			$("#data_labels_div").hide();
			
			$("#chart_flip_div").hide();
			
			$("#color_div").show();
			
			$("#data_bar_div").hide();
			
			$("#value_conversion_div").hide();
			
			$("#title_alignment_div").show();
			
//			$("#opacity_div").show();
			
			$("#prefix_div").hide();
			
			$("#suffix_div").hide();
			
			$("#categories_checkbox_div").hide();
			
			$("#Label_checkbox_div").hide();
			
			$("#toggle_div").addClass("d-none");
			
			$("#label_rotation_change").html("Label Rotation");
			
			
			
			
			
			
			
//			$("#properties_div").show();
//			$("#legend_placement_div").hide();
//			$("#zoomtype_div").hide();
//			$("#title_alignment_div").show();
//			$("#value_conversion_div").show();
//			
//			$("#color_div").show();
//			
//			$("#data_bar_div").hide();
//			
//			$("#toggle_div").removeClass("d-none");
//			$("#toggle_div").addClass("d-none");
//			
//			$("#color_div").hide();
			
			
		}
		else if(this.id =="chartcard10" )
		{
			$("#charttype").html("Bar 100%");
			$("#charttype").attr('data-bs-original-title', "Bar 100%").tooltip();
			

			/// -------------properties
			$("#properties_div").show();
			
			$("#legend_placement_div").show();
			
			$("#x-axis_labeldiv").show();
			
			$("#y-axis_labeldiv").show();

			$("#zoomtype_div").show();
			
			$("#data_labels_div").show();
			
			$("#chart_flip_div").show();
			
			$("#color_div").show();
			
			$("#data_bar_div").hide();
			
			$("#value_conversion_div").show();
			
			$("#title_alignment_div").show();
			
//			$("#opacity_div").show();
			
			$("#prefix_div").show();
			
			$("#suffix_div").show();
			
			$("#categories_checkbox_div").show();
			
			$("#Label_checkbox_div").show();
			
			$("#toggle_div").removeClass("d-none");
			
		}
		else if(this.id =="chartcard11" )
		{
			$("#charttype").html("Stacked 100%");
			$("#charttype").attr('data-bs-original-title', "Stacked 100%").tooltip();
			

			/// -------------properties
			$("#properties_div").show();
			
			$("#legend_placement_div").show();
			
			$("#x-axis_labeldiv").show();
			
			$("#y-axis_labeldiv").show();

			$("#zoomtype_div").show();
			
			$("#data_labels_div").show();
			
			$("#chart_flip_div").show();
			
			$("#color_div").show();
			
			$("#data_bar_div").hide();
			
			$("#value_conversion_div").show();
			
			$("#title_alignment_div").show();
			
//			$("#opacity_div").show();
			
			$("#prefix_div").show();
			
			$("#suffix_div").show();
			
			$("#categories_checkbox_div").show();
			
			$("#Label_checkbox_div").show();
			
			$("#toggle_div").removeClass("d-none");
		}
//		else if(this.id =="chartcard12" )
//		{
//			$("#charttype").html("Pivot Table");
//			$("#charttype").attr('data-bs-original-title', "Pivot Table").tooltip();
//			$("#properties_div").hide();
//		}
//		else if(this.id =="chartcard13" )
//		{
//			$("#charttype").html("Colored");
//			$("#charttype").attr('data-bs-original-title', "Colored").tooltip();
//			
//		}
		else if(this.id =="chartcard14" )
		{
			$("#charttype").html("Scatter Plot");
			$("#charttype").attr('data-bs-original-title', "Scatter Plot").tooltip();
			

			/// -------------properties
			$("#properties_div").show();
			
			$("#legend_placement_div").show();
			
			$("#x-axis_labeldiv").show();
			
			$("#y-axis_labeldiv").show();

			$("#zoomtype_div").show();
			
			$("#data_labels_div").show();
			
			$("#chart_flip_div").show();
			
			$("#color_div").show();
			
			$("#data_bar_div").hide();
			
			$("#value_conversion_div").show();
			
			$("#title_alignment_div").show();
			
//			$("#opacity_div").show();
			
			$("#prefix_div").show();
			
			$("#suffix_div").show();
			
			$("#categories_checkbox_div").show();
			
			$("#Label_checkbox_div").show();
			
			$("#toggle_div").removeClass("d-none");
		}
		else if(this.id =="chartcard15" )
		{
			$("#charttype").html("Bubble");
			$("#charttype").attr('data-bs-original-title', "Bubble").tooltip();
			

			/// -------------properties
			$("#properties_div").show();
			
			$("#legend_placement_div").show();
			
			$("#x-axis_labeldiv").show();
			
			$("#y-axis_labeldiv").hide();

			$("#zoomtype_div").show();
			
			$("#data_labels_div").show();
			
			$("#chart_flip_div").show();
			
			$("#color_div").show();
			
			$("#data_bar_div").hide();
			
			$("#value_conversion_div").show();
			
			$("#title_alignment_div").show();
			
//			$("#opacity_div").show();
			
			$("#prefix_div").show();
			
			$("#suffix_div").show();
			
			$("#categories_checkbox_div").hide();
			
			$("#Label_checkbox_div").show();
			
			$("#toggle_div").removeClass("d-none");
		}
		else if(this.id =="chartcard16" )
		{
			$("#charttype").html("Single Value Chart");
			$("#charttype").attr('data-bs-original-title', "Single Value Chart").tooltip();
			$("#properties_div").hide();
		}
		else if(this.id =="chartcard17" )
		{
			$("#charttype").html("Table");
			$("#charttype").attr('data-bs-original-title', "Table").tooltip();
			$("#properties_div").hide();
		}
		else if(this.id =="chartcard18" )
		{
			$("#charttype").html("Bullet");
			$("#charttype").attr('data-bs-original-title', "Bullet").tooltip();

			/// -------------properties
			$("#properties_div").show();
			
			$("#legend_placement_div").hide();
			
			$("#x-axis_labeldiv").hide();
			
			$("#y-axis_labeldiv").hide();

			$("#zoomtype_div").hide();
			
			$("#data_labels_div").hide();
			
			$("#chart_flip_div").hide();
			
			$("#color_div").hide();
			
			$("#data_bar_div").hide();
			
			$("#value_conversion_div").hide();
			
			$("#title_alignment_div").show();
			
//			$("#opacity_div").show();
			
			$("#prefix_div").show();
			
			$("#suffix_div").show();
			
			$("#categories_checkbox_div").hide();
			
			$("#Label_checkbox_div").show();
			
			$("#toggle_div").addClass("d-none");
			
			
//			$("#properties_div").show();
//			
//			$("#title_alignment_div").show();
//			
//			$("#value_conversion_div").hide();
//			
//			$("#legend_placement_div").hide();
//			
//			$("#zoomtype_div").hide();
//			
//			$("#color_div").hide();
//		
//			$("#data_bar_div").hide();
//		
//			$("#toggle_div").addClass("d-none");
		}
		else if(this.id =="chartcard19" )
		{
			$("#charttype").html("Heat Map");
			$("#charttype").attr('data-bs-original-title', "Heat Map").tooltip();
			
			

			/// -------------properties
			$("#properties_div").show();
			
			$("#legend_placement_div").show();
			
			$("#x-axis_labeldiv").show();
			
			$("#y-axis_labeldiv").show();

			$("#zoomtype_div").show();
			
			$("#data_labels_div").show();
			
			$("#chart_flip_div").show();
			
			$("#color_div").show();
			
			$("#data_bar_div").hide();
			
			$("#value_conversion_div").show();
			
			$("#title_alignment_div").show();
			
//			$("#opacity_div").show();
			
			$("#prefix_div").show();
			
			$("#suffix_div").show();
			
			$("#categories_checkbox_div").show();
			
			$("#Label_checkbox_div").show();
			
			$("#toggle_div").removeClass("d-none");
			

		}
		else if(this.id =="chartcard20" )
		{
			$("#charttype").html("Column Pyramids");
			$("#charttype").attr('data-bs-original-title', "Column Pyramids").tooltip();
			

			/// -------------properties
			$("#properties_div").show();
			
			$("#legend_placement_div").show();
			
			$("#x-axis_labeldiv").show();
			
			$("#y-axis_labeldiv").show();

			$("#zoomtype_div").show();
			
			$("#data_labels_div").show();
			
			$("#chart_flip_div").show();
			
			$("#color_div").show();
			
			$("#data_bar_div").hide();
			
			$("#value_conversion_div").show();
			
			$("#title_alignment_div").show();
			
//			$("#opacity_div").show();
			
			$("#prefix_div").show();
			
			$("#suffix_div").show();
			
			$("#categories_checkbox_div").show();
			
			$("#Label_checkbox_div").show();
			
			$("#toggle_div").removeClass("d-none");
		}
		else if(this.id =="chartcard21" )
		{
			$("#charttype").html("Funnel Chart");
			$("#charttype").attr('data-bs-original-title', "Funnel Chart").tooltip();
			
			/// -------------properties
			$("#properties_div").show();
			
			$("#legend_placement_div").hide();
			
			$("#x-axis_labeldiv").hide();
			
			$("#y-axis_labeldiv").hide();

			$("#zoomtype_div").hide();
			
			$("#data_labels_div").hide();
			
			$("#chart_flip_div").hide();
			
			$("#color_div").show();
			
			$("#data_bar_div").hide();
			
			$("#value_conversion_div").show();
			
			$("#title_alignment_div").show();
			
//			$("#opacity_div").show();
			
			$("#prefix_div").show();
			
			$("#suffix_div").show();
			
			$("#categories_checkbox_div").show();
			
			$("#Label_checkbox_div").hide();
			
			$("#toggle_div").addClass("d-none");
			
			
			
			
//			$("#properties_div").show();
//			
//			$("#title_alignment_div").show();
//			
//			$("#value_conversion_div").show();
//			
//			$("#legend_placement_div").hide();
//			
//			$("#zoomtype_div").hide();
//			
//			$("#color_div").hide();
//		
//			$("#data_bar_div").hide();
//		
//			$("#toggle_div").addClass("d-none");
		}
		else if(this.id =="chartcard22" )
		{
			$("#charttype").html("Word Cloud");
			$("#charttype").attr('data-bs-original-title', "Word Cloud").tooltip();

			
			/// -------------properties
			$("#properties_div").show();
			
			$("#legend_placement_div").hide();
			
			$("#x-axis_labeldiv").hide();
			
			$("#y-axis_labeldiv").hide();

			$("#zoomtype_div").hide();
			
			$("#data_labels_div").hide();
			
			$("#chart_flip_div").hide();
			
			$("#color_div").hide();
			
			$("#data_bar_div").hide();
			
			$("#value_conversion_div").hide();
			
			$("#title_alignment_div").show();
			
//			$("#opacity_div").show();
			
			$("#prefix_div").hide();
			
			$("#suffix_div").hide();
			
			$("#categories_checkbox_div").hide();
			
			$("#Label_checkbox_div").hide();
			
			$("#toggle_div").addClass("d-none");
			
			
			
			
			
//			$("#properties_div").show();
//			
//			$("#title_alignment_div").show();
//			
//			$("#legend_placement_div").hide();
//			
//			$("#value_conversion_div").hide();
//			
//			$("#zoomtype_div").hide();
//			
//			$("#color_div").hide();
//		
//			$("#data_bar_div").hide();
//		
//			$("#toggle_div").addClass("d-none");
		}
		else if(this.id =="chartcard23" )
		{
			$("#charttype").html("Marker-Clusters");
			$("#charttype").attr('data-bs-original-title', "Marker-Clusters").tooltip();
			
			
			/// -------------properties
			$("#properties_div").show();
			
			$("#legend_placement_div").show();
			
			$("#x-axis_labeldiv").show();
			
			$("#y-axis_labeldiv").show();

			$("#zoomtype_div").show();
			
			$("#data_labels_div").show();
			
			$("#chart_flip_div").show();
			
			$("#color_div").show();
			
			$("#data_bar_div").hide();
			
			$("#value_conversion_div").show();
			
			$("#title_alignment_div").show();
			
//			$("#opacity_div").show();
			
			$("#prefix_div").show();
			
			$("#suffix_div").show();
			
			$("#categories_checkbox_div").show();
			
			$("#Label_checkbox_div").show();
			
			$("#toggle_div").removeClass("d-none");
			
			
		}
				
		 globalchartType = this.id; 
		
		 if(this.id =="chartcard6")
			 {
			 $("#fromTodiv").show();
			 $("#display_firstcolor").show(); 
			 $("#display_secondcolor").show();
			 $("#display_thirdcolor").show();
			
			 $("#ApplyfromTo").show();
			 $("#tarvaluediv").hide();
//			 $("#fromtofunction_").show();
//			 $("#resetselectionfromTofunction_").show();
			 }
		 else if(this.id =="chartcard18" )
			{
			 $("#fromTodiv").hide();
			 $("#tarvaluediv").show();			
			 $("#ApplyfromTo").show();
//			 $("#resetselectionfromTofunction_").show();			 
			}
		 else
			 {
			 $("#fromTodiv").hide();
			 $("#tarvaluediv").hide();
			 $("#ApplyfromTo").hide();
//			 $("#resetselectionfromTofunction_").hide();
			 }
		
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
							
					},
					error : function(data) {
						//console.log(data);
					}
				});
});


var el=new Array();

/////-------------------Build Filter at Edit Mode 
var i_y = 0;
function loadchart1()
{
//	alert("loadchart  ###");
	$('#resetselection').hide();
	edit_ModeFlag =1;
    getDim(type);
    
    
    $("#discard_changes").prop("disabled", true);
    
    $("#message_text").hide();
	
    $(".dropzone").empty();
	
    $("div.dropzonefilter").empty();
	
	$("#btnSave").text("Update");
	
	$("#menu-toggle").off('click');
	
	$("#openDataset").removeAttr("onclick");
		
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
		
		$.ajax({method : "POST",	
			async: false,
			url : "./setchart",
			data : {
				id : _id,
				dashID:_dashID,
			},
			success : function(result) {
	    	console.log("result--",result);
	    	
	    	NProgress.done(true);
	    	
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
	    					
	    	    	  		  if(trim_charttheme == "DarkTheme")
	    	    	  		  {	    	    	  		  	    	    	  		
				    	    	  	    $("#dark_").removeAttr('href');	
				    	    	  	    $("#dark_").attr('href', './resources/css/dark-unica-dash.css');	
				    	    	  	    $("#theme_").removeAttr('href');
			    	    	  		
				    	    	  	  $("#switch-3").prop('checked' , false);
	    	    	  		            globaltheme_chart ="darktheme_chart";
	    	    	  		  }
	    	    	  		  
	    	    	  		  else
	    	    	  		  {	    	    	  		
	    	    	  			        $("#theme_").prop('disabled' , false);
	    	    	  		            $("#dark_").removeAttr('href');
	    	    	  		            $("#dark_").attr('href', './resources/css/dark-unica.css');													
	    	    	  		            $("#theme_").attr('href', './resources/css/chart_light.css');
	    	    	  		          $("#switch-3").prop('checked' , true);
	    
	    	    	  		 		  globaltheme_chart ="lighttheme_chart";
	    	    	  		  
	    	    	  		  }
	    					 
	    	    	  		
	    	    	  		 if(arr[k].viz_type =="Histogram" || arr[k].viz_type =="chartcard1" )
		    					{
		    					 chartnameSaved = arr[k].slice_name;
		    					$("#charttype").html("Histogram");
		    					$("#charttype").attr('data-bs-original-title', "Histogram").tooltip();
		    					
		    					
		    					
		    					$("#properties_div").show();
		    	    			
		    	    			$("#legend_placement_div").show();
		    	    			
		    	    			$("#x-axis_labeldiv").show();
		    	    			
		    	    			$("#y-axis_labeldiv").show();

		    	    			$("#zoomtype_div").show();
		    	    			
		    	    			$("#data_labels_div").show();
		    	    			
		    	    			$("#chart_flip_div").show();
		    	    			
		    	    			$("#color_div").show();
		    	    			
		    	    			$("#data_bar_div").hide();
		    	    			
		    	    			$("#value_conversion_div").show();
		    	    			
		    	    			$("#title_alignment_div").show();
		    	    			
//		    	    			$("#opacity_div").show();
		    	    			
		    	    			$("#prefix_div").show();
		    	    			
		    	    			$("#suffix_div").show();
		    	    			
		    	    			$("#categories_checkbox_div").show();
		    	    			
		    	    			$("#Label_checkbox_div").show();
		    	    			
		    	    			$("#toggle_div").removeClass("d-none");
		    	    			
		    	    			
		    					getDim("chartcard1");
		    					
		    					}
		    				 else if (arr[k].viz_type =="Bar" || arr[k].viz_type =="chartcard2")
		    					{	 
		    					 
		    					 chartnameSaved = arr[k].slice_name;
		    					 $("#charttype").html("Bar");	
		    					 $("#charttype").attr('data-bs-original-title', "Bar").tooltip();
		    					
		    						/// -------------properties
		    	    				$("#properties_div").show();
		    	    				
		    	    				$("#legend_placement_div").show();
		    	    				
		    	    				$("#x-axis_labeldiv").show();
		    	    				
		    	    				$("#y-axis_labeldiv").show();

		    	    				$("#zoomtype_div").show();
		    	    				
		    	    				$("#data_labels_div").show();
		    	    				
		    	    				$("#chart_flip_div").show();
		    	    				
		    	    				$("#color_div").show();
		    	    				
		    	    				$("#data_bar_div").hide();
		    	    				
		    	    				$("#value_conversion_div").show();
		    	    				
		    	    				$("#title_alignment_div").show();
		    	    				
//		    	    				$("#opacity_div").show();
		    	    				
		    	    				$("#prefix_div").show();
		    	    				
		    	    				$("#suffix_div").show();
		    	    				
		    	    				$("#categories_checkbox_div").show();
		    	    				
		    	    				$("#Label_checkbox_div").show();
		    	    				
		    	    				$("#toggle_div").removeClass("d-none");
		    					 
		    					 getDim("chartcard2");
		    					}
		    					else if(arr[k].viz_type =="Stacked Bar Chart" || arr[k].viz_type =="chartcard3" )
		    					{
		    						$("#charttype").html("Stacked Bar Chart");
		    						$("#charttype").attr('data-bs-original-title', "Stacked Bar Chart").tooltip();
		    						
		    						/// -------------properties
		    	    				$("#properties_div").show();
		    	    				
		    	    				$("#legend_placement_div").show();
		    	    				
		    	    				$("#x-axis_labeldiv").show();
		    	    				
		    	    				$("#y-axis_labeldiv").show();

		    	    				$("#zoomtype_div").show();
		    	    				
		    	    				$("#data_labels_div").show();
		    	    				
		    	    				$("#chart_flip_div").show();
		    	    				
		    	    				$("#color_div").show();
		    	    				
		    	    				$("#data_bar_div").hide();
		    	    				
		    	    				$("#value_conversion_div").show();
		    	    				
		    	    				$("#title_alignment_div").show();
		    	    				
//		    	    				$("#opacity_div").show();
		    	    				
		    	    				$("#prefix_div").show();
		    	    				
		    	    				$("#suffix_div").show();
		    	    				
		    	    				$("#categories_checkbox_div").show();
		    	    				
		    	    				$("#Label_checkbox_div").show();
		    	    				
		    	    				$("#toggle_div").removeClass("d-none");
		    	    				
		    						getDim("chartcard3");
		    						chartnameSaved = arr[k].slice_name;
		    					}
		    					else if(arr[k].viz_type =="Area Chart" || arr[k].viz_type =="chartcard4" )
		    					{
		    						$("#charttype").html("Area Chart");	    
		    						$("#charttype").attr('data-bs-original-title', "Area Chart").tooltip();
		    					
		    						/// -------------properties
		    	    				$("#properties_div").show();
		    	    				
		    	    				$("#legend_placement_div").show();
		    	    				
		    	    				$("#x-axis_labeldiv").show();
		    	    				
		    	    				$("#y-axis_labeldiv").show();

		    	    				$("#zoomtype_div").show();
		    	    				
		    	    				$("#data_labels_div").show();
		    	    				
		    	    				$("#chart_flip_div").show();
		    	    				
		    	    				$("#color_div").show();
		    	    				
		    	    				$("#data_bar_div").hide();
		    	    				
		    	    				$("#value_conversion_div").show();
		    	    				
		    	    				$("#title_alignment_div").show();
		    	    				
//		    	    				$("#opacity_div").show();
		    	    				
		    	    				$("#prefix_div").show();
		    	    				
		    	    				$("#suffix_div").show();
		    	    				
		    	    				$("#categories_checkbox_div").show();
		    	    				
		    	    				$("#Label_checkbox_div").show();
		    	    				
		    	    				$("#toggle_div").removeClass("d-none");
		    					
		    					
		    						getDim("chartcard4");
		    						chartnameSaved = arr[k].slice_name;
		    					}
		    					else if(arr[k].viz_type =="Line Chart" || arr[k].viz_type =="chartcard5" )
		    					{
		    						$("#charttype").html("Line Chart");
		    						$("#charttype").attr('data-bs-original-title', "Line Chart").tooltip();
		    						
		    						/// -------------properties
		    	    				$("#properties_div").show();
		    	    				
		    	    				$("#legend_placement_div").show();
		    	    				
		    	    				$("#x-axis_labeldiv").show();
		    	    				
		    	    				$("#y-axis_labeldiv").show();

		    	    				$("#zoomtype_div").show();
		    	    				
		    	    				$("#data_labels_div").show();
		    	    				
		    	    				$("#chart_flip_div").show();
		    	    				
		    	    				$("#color_div").show();
		    	    				
		    	    				$("#data_bar_div").hide();
		    	    				
		    	    				$("#value_conversion_div").show();
		    	    				
		    	    				$("#title_alignment_div").show();
		    	    				
//		    	    				$("#opacity_div").show();
		    	    				
		    	    				$("#prefix_div").show();
		    	    				
		    	    				$("#suffix_div").show();
		    	    				
		    	    				$("#categories_checkbox_div").show();
		    	    				
		    	    				$("#Label_checkbox_div").show();
		    	    				
		    	    				$("#toggle_div").removeClass("d-none");
				
		    						getDim("chartcard5");
		    						chartnameSaved = arr[k].slice_name;
		    					}
		    				
		    					else if(arr[k].viz_type =="Gauge Series" || arr[k].viz_type =="chartcard6" )
		    					{
		    						$("#charttype").html("Gauge Series");
		    						$("#charttype").attr('data-bs-original-title', "Gauge Series").tooltip();
		    					   
		    						/// -------------properties
		    	    				$("#properties_div").show();
		    	    				
		    	    				$("#legend_placement_div").hide();
		    	    				
		    	    				$("#x-axis_labeldiv").hide();
		    	    				
		    	    				$("#y-axis_labeldiv").hide();

		    	    				$("#zoomtype_div").hide();
		    	    				
		    	    				$("#data_labels_div").hide();
		    	    				
		    	    				$("#chart_flip_div").hide();
		    	    				
		    	    				$("#color_div").hide();
		    	    				
		    	    				$("#data_bar_div").hide();
		    	    				
		    	    				$("#value_conversion_div").hide();
		    	    				
		    	    				$("#title_alignment_div").show();
		    	    				
//		    	    				$("#opacity_div").show();
		    	    				
		    	    				$("#prefix_div").hide();
		    	    				
		    	    				$("#suffix_div").hide();
		    	    				
		    	    				$("#categories_checkbox_div").hide();
		    	    				
		    	    				$("#Label_checkbox_div").hide();
		    	    				
		    	    				$("#toggle_div").addClass("d-none");
		    					    
		    						getDim("chartcard6");
		    						chartnameSaved = arr[k].slice_name;
		    					}
		    					else if(arr[k].viz_type =="Stacked Bar Chart %"  || arr[k].viz_type =="chartcard7" )
		    					{	    						
		    						$("#charttype").html("Stacked Bar Chart %");
		    						$("#charttype").attr('data-bs-original-title', "Stacked Bar Chart %").tooltip();
		    					
		    						/// -------------properties
		    	    				$("#properties_div").show();
		    	    				
		    	    				$("#legend_placement_div").show();
		    	    				
		    	    				$("#x-axis_labeldiv").show();
		    	    				
		    	    				$("#y-axis_labeldiv").show();

		    	    				$("#zoomtype_div").show();
		    	    				
		    	    				$("#data_labels_div").show();
		    	    				
		    	    				$("#chart_flip_div").show();
		    	    				
		    	    				$("#color_div").show();
		    	    				
		    	    				$("#data_bar_div").hide();
		    	    				
		    	    				$("#value_conversion_div").show();
		    	    				
		    	    				$("#title_alignment_div").show();
		    	    				
//		    	    				$("#opacity_div").show();
		    	    				
		    	    				$("#prefix_div").show();
		    	    				
		    	    				$("#suffix_div").show();
		    	    				
		    	    				$("#categories_checkbox_div").show();
		    	    				
		    	    				$("#Label_checkbox_div").show();
		    	    				
		    	    				$("#toggle_div").removeClass("d-none");
		    					
		    					
		    						getDim("chartcard7");
		    						chartnameSaved = arr[k].slice_name;
		    					}
		    					else if(arr[k].viz_type =="Pie Chart" || arr[k].viz_type =="chartcard8" )
		    					{
		    						$("#charttype").html("Pie Chart");
		    						$("#charttype").attr('data-bs-original-title', "Pie Chart").tooltip();
		    						

		    	    				/// -------------properties
		    	    				$("#properties_div").show();
		    	    				
		    	    				$("#legend_placement_div").hide();
		    	    				
		    	    				$("#x-axis_labeldiv").hide();
		    	    				
		    	    				$("#y-axis_labeldiv").hide();

		    	    				$("#zoomtype_div").hide();
		    	    				
		    	    				$("#data_labels_div").hide();
		    	    				
		    	    				$("#chart_flip_div").hide();
		    	    				
		    	    				$("#color_div").show();
		    	    				
		    	    				$("#data_bar_div").hide();
		    	    				
		    	    				$("#value_conversion_div").hide();
		    	    				
		    	    				$("#title_alignment_div").show();
		    	    				
//		    	    				$("#opacity_div").show();
		    	    				
		    	    				$("#prefix_div").hide();
		    	    				
		    	    				$("#suffix_div").hide();
		    	    				
		    	    				$("#categories_checkbox_div").hide();
		    	    				
		    	    				$("#Label_checkbox_div").hide();
		    	    				
		    	    				$("#toggle_div").addClass("d-none");
		    	    				
		    	    				$("#label_rotation_change").html("Label Rotation");
		    	    				
		    						
		    						getDim("chartcard8");
		    						chartnameSaved = arr[k].slice_name;
		    					}
		    					else if(arr[k].viz_type =="Donut Chart" || arr[k].viz_type =="chartcard9" )
		    					{
		    						$("#charttype").html("Donut Chart");
		    						$("#charttype").attr('data-bs-original-title', "Donut Chart").tooltip();
		    					     

		    	    				/// -------------properties
		    	    				$("#properties_div").show();
		    	    				
		    	    				$("#legend_placement_div").hide();
		    	    				
		    	    				$("#x-axis_labeldiv").hide();
		    	    				
		    	    				$("#y-axis_labeldiv").hide();

		    	    				$("#zoomtype_div").hide();
		    	    				
		    	    				$("#data_labels_div").hide();
		    	    				
		    	    				$("#chart_flip_div").hide();
		    	    				
		    	    				$("#color_div").show();
		    	    				
		    	    				$("#data_bar_div").hide();
		    	    				
		    	    				$("#value_conversion_div").hide();
		    	    				
		    	    				$("#title_alignment_div").show();
		    	    				
//		    	    				$("#opacity_div").show();
		    	    				
		    	    				$("#prefix_div").hide();
		    	    				
		    	    				$("#suffix_div").hide();
		    	    				
		    	    				$("#categories_checkbox_div").hide();
		    	    				
		    	    				$("#Label_checkbox_div").hide();
		    	    				
		    	    				$("#toggle_div").addClass("d-none");
		    	    				
		    	    				$("#label_rotation_change").html("Label Rotation");
		    	    				
		    					
		    						getDim("chartcard9");
		    						chartnameSaved = arr[k].slice_name;
		    					}
		    					else if(arr[k].viz_type =="Bar 100%" || arr[k].viz_type =="chartcard10" )
		    					{
		    						$("#charttype").html("Bar 100%");
		    						$("#charttype").attr('data-bs-original-title', "Bar 100%").tooltip();
		    						
		    						/// -------------properties
		    	    				$("#properties_div").show();
		    	    				
		    	    				$("#legend_placement_div").show();
		    	    				
		    	    				$("#x-axis_labeldiv").show();
		    	    				
		    	    				$("#y-axis_labeldiv").show();

		    	    				$("#zoomtype_div").show();
		    	    				
		    	    				$("#data_labels_div").show();
		    	    				
		    	    				$("#chart_flip_div").show();
		    	    				
		    	    				$("#color_div").show();
		    	    				
		    	    				$("#data_bar_div").hide();
		    	    				
		    	    				$("#value_conversion_div").show();
		    	    				
		    	    				$("#title_alignment_div").show();
		    	    				
//		    	    				$("#opacity_div").show();
		    	    				
		    	    				$("#prefix_div").show();
		    	    				
		    	    				$("#suffix_div").show();
		    	    				
		    	    				$("#categories_checkbox_div").show();
		    	    				
		    	    				$("#Label_checkbox_div").show();
		    	    				
		    	    				$("#toggle_div").removeClass("d-none");
				
		    						getDim("chartcard10");
		    						chartnameSaved = arr[k].slice_name;
		    					}
		    					else if(arr[k].viz_type =="Stacked 100%" || arr[k].viz_type =="chartcard11" )
		    					{
		    						$("#charttype").html("Stacked 100%");
		    						$("#charttype").attr('data-bs-original-title', "Stacked 100%").tooltip();
		    						
		    						/// -------------properties
		    	    				$("#properties_div").show();
		    	    				
		    	    				$("#legend_placement_div").show();
		    	    				
		    	    				$("#x-axis_labeldiv").show();
		    	    				
		    	    				$("#y-axis_labeldiv").show();

		    	    				$("#zoomtype_div").show();
		    	    				
		    	    				$("#data_labels_div").show();
		    	    				
		    	    				$("#chart_flip_div").show();
		    	    				
		    	    				$("#color_div").show();
		    	    				
		    	    				$("#data_bar_div").hide();
		    	    				
		    	    				$("#value_conversion_div").show();
		    	    				
		    	    				$("#title_alignment_div").show();
		    	    				
//		    	    				$("#opacity_div").show();
		    	    				
		    	    				$("#prefix_div").show();
		    	    				
		    	    				$("#suffix_div").show();
		    	    				
		    	    				$("#categories_checkbox_div").show();
		    	    				
		    	    				$("#Label_checkbox_div").show();
		    	    				
		    	    				$("#toggle_div").removeClass("d-none");
		    	    				
		    						getDim("chartcard11");
		    						chartnameSaved = arr[k].slice_name;
		    					}
		    					else if(arr[k].viz_type =="Pivot Table" || arr[k].viz_type =="chartcard12" )
		    					{
		    						$("#charttype").html("Pivot Table");
		    						$("#charttype").attr('data-bs-original-title', "Pivot Table").tooltip();
		    					    
		    					    $("#properties_div").hide();
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
		    						/// -------------properties
		    	    				$("#properties_div").show();
		    	    				
		    	    				$("#legend_placement_div").show();
		    	    				
		    	    				$("#x-axis_labeldiv").show();
		    	    				
		    	    				$("#y-axis_labeldiv").show();

		    	    				$("#zoomtype_div").show();
		    	    				
		    	    				$("#data_labels_div").show();
		    	    				
		    	    				$("#chart_flip_div").show();
		    	    				
		    	    				$("#color_div").show();
		    	    				
		    	    				$("#data_bar_div").hide();
		    	    				
		    	    				$("#value_conversion_div").show();
		    	    				
		    	    				$("#title_alignment_div").show();
		    	    				
//		    	    				$("#opacity_div").show();
		    	    				
		    	    				$("#prefix_div").show();
		    	    				
		    	    				$("#suffix_div").show();
		    	    				
		    	    				$("#categories_checkbox_div").show();
		    	    				
		    	    				$("#Label_checkbox_div").show();
		    	    				
		    	    				$("#toggle_div").removeClass("d-none");
		    						
		    						getDim("chartcard14");
		    						chartnameSaved = arr[k].slice_name;
		    					}
		    					else if(arr[k].viz_type =="Bubble" || arr[k].viz_type =="chartcard15" )
		    					{
		    						$("#charttype").html("Bubble");
		    						$("#charttype").attr('data-bs-original-title', "Bubble").tooltip();

		    	    				/// -------------properties
		    	    				$("#properties_div").show();
		    	    				
		    	    				$("#legend_placement_div").show();
		    	    				
		    	    				$("#x-axis_labeldiv").show();
		    	    				
		    	    				$("#y-axis_labeldiv").hide();

		    	    				$("#zoomtype_div").show();
		    	    				
		    	    				$("#data_labels_div").show();
		    	    				
		    	    				$("#chart_flip_div").show();
		    	    				
		    	    				$("#color_div").show();
		    	    				
		    	    				$("#data_bar_div").hide();
		    	    				
		    	    				$("#value_conversion_div").show();
		    	    				
		    	    				$("#title_alignment_div").show();
		    	    				
//		    	    				$("#opacity_div").show();
		    	    				
		    	    				$("#prefix_div").show();
		    	    				
		    	    				$("#suffix_div").show();
		    	    				
		    	    				$("#categories_checkbox_div").hide();
		    	    				
		    	    				$("#Label_checkbox_div").show();
		    	    				
		    	    				$("#toggle_div").removeClass("d-none");
		    						
		    						getDim("chartcard15");
		    						chartnameSaved = arr[k].slice_name;
		    					}
		    					else if(arr[k].viz_type =="Single Value Chart" || arr[k].viz_type =="chartcard16" )
		    					{
		    						$("#charttype").html("Single Value Chart");
		    						$("#charttype").attr('data-bs-original-title', "Single Value Chart").tooltip();
		    						$("#single_value_name").html(chartnameSaved); 
		    						$("#properties_div").hide();
		    						
		    						getDim("chartcard16");
		    						chartnameSaved = arr[k].slice_name;
		    					}
		    					else if(arr[k].viz_type =="Table" || arr[k].viz_type =="chartcard17" )
		    					{
		    						$("#charttype").html("Table");
		    						$("#charttype").attr('data-bs-original-title', "Table").tooltip();
		    						$("#table_chart_name").html(chartnameSaved);  
		    						
		    						$("#properties_div").hide();
		    						getDim("chartcard17");
		    						chartnameSaved = arr[k].slice_name;
		    					}
		    					else if(arr[k].viz_type =="Bullet" || arr[k].viz_type =="chartcard18" )
		    					{
		    						$("#charttype").html("Bullet");
		    						$("#charttype").attr('data-bs-original-title', "Bullet").tooltip();
		    						
		    						/// -------------properties
		    	    				$("#properties_div").show();
		    	    				
		    	    				$("#legend_placement_div").hide();
		    	    				
		    	    				$("#x-axis_labeldiv").hide();
		    	    				
		    	    				$("#y-axis_labeldiv").hide();

		    	    				$("#zoomtype_div").hide();
		    	    				
		    	    				$("#data_labels_div").hide();
		    	    				
		    	    				$("#chart_flip_div").hide();
		    	    				
		    	    				$("#color_div").hide();
		    	    				
		    	    				$("#data_bar_div").hide();
		    	    				
		    	    				$("#value_conversion_div").hide();
		    	    				
		    	    				$("#title_alignment_div").show();
		    	    				
//		    	    				$("#opacity_div").show();
		    	    				
		    	    				$("#prefix_div").show();
		    	    				
		    	    				$("#suffix_div").show();
		    	    				
		    	    				$("#categories_checkbox_div").hide();
		    	    				
		    	    				$("#Label_checkbox_div").show();
		    	    				
		    	    				$("#toggle_div").addClass("d-none");
		    						getDim("chartcard18");
		    						chartnameSaved = arr[k].slice_name;
		    					}
		    					else if(arr[k].viz_type =="Heat Map" || arr[k].viz_type =="chartcard19" )
		    					{
		    						$("#charttype").html("Heat Map");
		    						$("#charttype").attr('data-bs-original-title', "Heat Map").tooltip();
		    						


		    	    				/// -------------properties
		    	    				$("#properties_div").show();
		    	    				
		    	    				$("#legend_placement_div").show();
		    	    				
		    	    				$("#x-axis_labeldiv").show();
		    	    				
		    	    				$("#y-axis_labeldiv").show();

		    	    				$("#zoomtype_div").show();
		    	    				
		    	    				$("#data_labels_div").show();
		    	    				
		    	    				$("#chart_flip_div").show();
		    	    				
		    	    				$("#color_div").show();
		    	    				
		    	    				$("#data_bar_div").hide();
		    	    				
		    	    				$("#value_conversion_div").show();
		    	    				
		    	    				$("#title_alignment_div").show();
		    	    				
//		    	    				$("#opacity_div").show();
		    	    				
		    	    				$("#prefix_div").show();
		    	    				
		    	    				$("#suffix_div").show();
		    	    				
		    	    				$("#categories_checkbox_div").show();
		    	    				
		    	    				$("#Label_checkbox_div").show();
		    	    				
		    	    				$("#toggle_div").removeClass("d-none");
		    	    				
		    						getDim("chartcard19");
		    						chartnameSaved = arr[k].slice_name;
		    					}
		    					else if(arr[k].viz_type =="Column Pyramids" || arr[k].viz_type =="chartcard20" )
		    					{
		    						$("#charttype").html("Column Pyramids");
		    						$("#charttype").attr('data-bs-original-title', "Column Pyramids").tooltip();
		    						


		    	    				/// -------------properties
		    	    				$("#properties_div").show();
		    	    				
		    	    				$("#legend_placement_div").show();
		    	    				
		    	    				$("#x-axis_labeldiv").show();
		    	    				
		    	    				$("#y-axis_labeldiv").show();

		    	    				$("#zoomtype_div").show();
		    	    				
		    	    				$("#data_labels_div").show();
		    	    				
		    	    				$("#chart_flip_div").show();
		    	    				
		    	    				$("#color_div").show();
		    	    				
		    	    				$("#data_bar_div").hide();
		    	    				
		    	    				$("#value_conversion_div").show();
		    	    				
		    	    				$("#title_alignment_div").show();
		    	    				
//		    	    				$("#opacity_div").show();
		    	    				
		    	    				$("#prefix_div").show();
		    	    				
		    	    				$("#suffix_div").show();
		    	    				
		    	    				$("#categories_checkbox_div").show();
		    	    				
		    	    				$("#Label_checkbox_div").show();
		    	    				
		    	    				$("#toggle_div").removeClass("d-none");
		    	    				
		    						getDim("chartcard20");
		    						chartnameSaved = arr[k].slice_name;
		    					}
		    					else if(arr[k].viz_type =="Funnel Chart" || arr[k].viz_type =="chartcard21" )
		    					{
		    						$("#charttype").html("Funnel Chart");
		    						$("#charttype").attr('data-bs-original-title', "Funnel Chart").tooltip();
		    						
		    	    				/// -------------properties
		    	    				$("#properties_div").show();
		    	    				
		    	    				$("#legend_placement_div").hide();
		    	    				
		    	    				$("#x-axis_labeldiv").hide();
		    	    				
		    	    				$("#y-axis_labeldiv").hide();

		    	    				$("#zoomtype_div").hide();
		    	    				
		    	    				$("#data_labels_div").hide();
		    	    				
		    	    				$("#chart_flip_div").hide();
		    	    				
		    	    				$("#color_div").show();
		    	    				
		    	    				$("#data_bar_div").hide();
		    	    				
		    	    				$("#value_conversion_div").show();
		    	    				
		    	    				$("#title_alignment_div").show();
		    	    				
//		    	    				$("#opacity_div").show();
		    	    				
		    	    				$("#prefix_div").show();
		    	    				
		    	    				$("#suffix_div").show();
		    	    				
		    	    				$("#categories_checkbox_div").show();
		    	    				
		    	    				$("#Label_checkbox_div").hide();
		    	    				
		    	    				$("#toggle_div").addClass("d-none");
		
		    	    	  		  
		    	    	  		  
		    	    	  		  
		    						
		    						getDim("chartcard21");
		    						chartnameSaved = arr[k].slice_name;
		    					}
		    					else if(arr[k].viz_type =="Word Cloud" || arr[k].viz_type =="chartcard22" )
		    					{
		    						$("#charttype").html("Word Cloud");
		    						$("#charttype").attr('data-bs-original-title', "Word Cloud").tooltip();
		    						

		    	    				/// -------------properties
		    	    				$("#properties_div").show();
		    	    				
		    	    				$("#legend_placement_div").hide();
		    	    				
		    	    				$("#x-axis_labeldiv").hide();
		    	    				
		    	    				$("#y-axis_labeldiv").hide();

		    	    				$("#zoomtype_div").hide();
		    	    				
		    	    				$("#data_labels_div").hide();
		    	    				
		    	    				$("#chart_flip_div").hide();
		    	    				
		    	    				$("#color_div").hide();
		    	    				
		    	    				$("#data_bar_div").hide();
		    	    				
		    	    				$("#value_conversion_div").hide();
		    	    				
		    	    				$("#title_alignment_div").show();
		    	    				
//		    	    				$("#opacity_div").show();
		    	    				
		    	    				$("#prefix_div").hide();
		    	    				
		    	    				$("#suffix_div").hide();
		    	    				
		    	    				$("#categories_checkbox_div").hide();
		    	    				
		    	    				$("#Label_checkbox_div").hide();
		    	    				
		    	    				$("#toggle_div").addClass("d-none");
		    	    				
		    	    			
		    						getDim("chartcard22");
		    						chartnameSaved = arr[k].slice_name;
		    					}
		    					else if(arr[k].viz_type =="Marker-Clusters" || arr[k].viz_type =="chartcard23" )
		    					{
		    						$("#charttype").html("Marker-Clusters");
		    						$("#charttype").attr('data-bs-original-title', "Marker-Clusters").tooltip();
		    						
		    						/// -------------properties
		    	    				$("#properties_div").show();
		    	    				
		    	    				$("#legend_placement_div").show();
		    	    				
		    	    				$("#x-axis_labeldiv").show();
		    	    				
		    	    				$("#y-axis_labeldiv").show();

		    	    				$("#zoomtype_div").show();
		    	    				
		    	    				$("#data_labels_div").show();
		    	    				
		    	    				$("#chart_flip_div").show();
		    	    				
		    	    				$("#color_div").show();
		    	    				
		    	    				$("#data_bar_div").hide();
		    	    				
		    	    				$("#value_conversion_div").show();
		    	    				
		    	    				$("#title_alignment_div").show();
		    	    				
//		    	    				$("#opacity_div").show();
		    	    				
		    	    				$("#prefix_div").show();
		    	    				
		    	    				$("#suffix_div").show();
		    	    				
		    	    				$("#categories_checkbox_div").show();
		    	    				
		    	    				$("#Label_checkbox_div").show();
		    	    				
		    	    				$("#toggle_div").removeClass("d-none");
		    	    				
		    						
		    						getDim("chartcard23");
		    						chartnameSaved = arr[k].slice_name;
		    					}
	    				 
//	    		    if(arr[k].viz_type =="chartcard6" )
// 	    				{
// 	    				 $("#fromTodiv").show();
// 	    				 $("#display_firstcolor").show(); 
// 	    				 $("#display_secondcolor").show();
// 	    				 $("#display_thirdcolor").show();
// 	    				}
// 	    			 else
// 	    				 {
// 	    				 $("#fromTodiv").hide();
// 	    				 }
// 	    			
// 	    			 if(arr[k].viz_type =="chartcard18" )
// 	    				{
// 	    				 $("#fromTodiv").show();
// 	    				 $("#display_firstcolor").hide(); 
// 	    				 $("#display_secondcolor").hide();
// 	    				 $("#display_thirdcolor").hide();
// 	    				}
 	    			 
 	    		if(arr[k].viz_type =="chartcard6")
 	   			 {
 	   			 $("#fromTodiv").show();
 	   			 $("#display_firstcolor").show(); 
 	   			 $("#display_secondcolor").show();
 	   			 $("#display_thirdcolor").show();
 	   			
 	   			 $("#ApplyfromTo").show();
 	   			 $("#tarvaluediv").hide();
// 	   			 $("#fromtofunction_").show();
// 	   			 $("#resetselectionfromTofunction_").show();
 	   			 }
 	   		 else if(arr[k].viz_type =="chartcard18" )
 	   			{
 	   			 $("#fromTodiv").hide();
 	   			 $("#tarvaluediv").show();			
 	   			 $("#ApplyfromTo").show();
// 	   			 $("#resetselectionfromTofunction_").show();			 
 	   			}
 	   		 else
 	   			 {
 	   			 $("#fromTodiv").hide();
 	   			 $("#tarvaluediv").hide();
 	   			 $("#ApplyfromTo").hide();
// 	   			 $("#resetselectionfromTofunction_").hide();
 	   			 }
 	    			 
	    				 var dsname= arr[k].containerid;
	    				
	    				 $("#dataobjectname").show();
	    				 $("#dataobjectname").html(dsname) ; 
	    				    
	    					globalselectedtabnlename = arr[k].datasource_name;
	    					
	    					setFieldList(dsname,globalselectedtabnlename,"");
	    							    					  
	    					$("#btnGetFields").trigger("click");
	    					
	    					chart_id = arr[k].id;
	    					$("#chart_id").val(chart_id);   
	    					
	    					dashboard_title =arr[k].dashboard_title;
	    					console.log("dashboard_title   ....   "+dashboard_title);		
	
	    					selectedtabid = arr[k].datasource_type; 
	    					selectedtabname =  arr[k].dashTabName;
	    					console.log("selectedtabid   .... "+selectedtabid);	
	    					console.log("selectedtabname   .... "+selectedtabname);	
	    					dashTabName =arr[k].dashTabName;
	    					
	    					console.log("dashTabName   .... "+dashTabName);
	    					
//	    					global_dash_name = dashboard_title;
//	    					$("#dashboardlistData").val(dashboard_title);
//	    					$("#tablistData").val(dashTabName);
	    					
//	    					getDashboardlist();
	    					
//	    					$("#dashboardlistData").val(dashboard_title);
//	    					$("#tablistData").val(dashTabName);
//	    					onchangeDashboard();
	    					
	    					
	    					
	    					$("#chartname").show();
		    					if (arr[k].slice_name != "")
		    					{
			    					$("#chartNametxt").val(arr[k].slice_name);
//			    					document.getElementById("chartNametxt").disabled = true;
			    					
			    					
			    					console.log("_dashID ####  "+_dashID);
			    					
			    					if(_dashID == 0)
			    						{
			    						$("#dashboardlistData").prop("disabled",true);
				    					
				    					$("#tablistData").prop("disabled",true);	
				    					
				    					$("#dashboardlistData").val("select");	
				    					
				    					$("#tablistData").val("select");
				    					
			    						}
			    					else
			    						{
			    						$("#dashboardlistData").attr("disabled","disabled");
				    					
				    					$("#tablistData").attr("disabled","disabled");
				    					
				    					$("#dashboardlistData").val(dashboard_title);
				    					$("#tablistData").val(dashTabName);
				    					
			    						}
			    					
			    					
			    					//$("ul#dashboardlistData li").off('setTabList');
//			    					$("ul#dashboardlistData li").prop('onclick', null);
			    					
		    					 }
	    							    					
	    					var queryArr = JSON.parse(arr[k].query_context);
	    					var filterArr = JSON.parse(arr[k].filter_context);
	    					
	    					var prop_arr = JSON.parse(arr[k].properties);
	    					
	    					console.log('filterArr   ############   ',filterArr);
	    					console.log('queryArr  ##########   ',queryArr);
	    					
	    					console.log('prop_arr  ##########   ',prop_arr);
	    					
	    					var table_loadchart1 =globalselectedtabnlename;
	    					
				    		for(let j = 0; j < filterArr.length; j++)
				    		{
				    			console.log("filterArr.length---"+filterArr.length);
				    			accordianind = filterArr.length;
				    			var sym='#';
				    			if (filterArr[j][0].Types.includes('text'))
				    			        {sym="Aa";}
				    				else if(filterArr[j][0].Types.includes('date'))
				    					{sym="Date";}
				    				else
				    					{sym="#";}

				    			  var optionselected= filterArr[j][0].filterselecttypevalue;
            
				                    var option1 ="";
				                    var option2 ="";
				                    var option3 ="";

				                    if(optionselected == "adv")
				                 	{
				                   
				                      option1 = "selected";
				  
				                 	}
				                 else if(optionselected == "topn")
					             	{
					                 
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
											
//					                 	onChangedata(j ,table_loadchart1);
					                 						                 						                 	
					             	}
				                    				                    
								   var optionselectedADV1= filterArr[j][0].filterselect1;
								   console.log("optionselectedADV1####---"+optionselectedADV1);								   								  
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
				                    
				                    var option41 ="";
				                    var option42 ="";
				                    var option43 ="";
				                    var option44 ="";
				                    var option45 ="";
				                    var option46 ="";
				                    
				                    var option51 ="";
				                    var option52 ="";
				                    var option53 ="";
				                    var option54 ="";
				                    
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
								   
					              else if(optionselectedADV1 == "is after")
								   {        
						    	  option41 = "selected";
								   }
						      else if( optionselectedADV1 == "is on or after")
								   {
						    	  option42 = "selected";
                                 }
					          else if(optionselectedADV1 == "is before")
								   {        
					        	  option43 = "selected";
								   }
					          else if(optionselectedADV1 == "is on or before")
								   {        
					        	  option44 = "selected";
								   }
					          else if( optionselectedADV1 == "is blank")
								   {
					        	  option45 = "selected";
                                  }
				              else if(optionselectedADV1 == "is not blank")
								   {        
				            	  option46 = "selected";
								   }
				              else if(optionselectedADV1 == "is less than")
							   {        
				        	  option51 = "selected";
							   }
				          else if(optionselectedADV1 == "is less than or equal to")
							   {        
				        	  option52 = "selected";
							   }
				          else if( optionselectedADV1 == "is greater than")
							   {
				        	  option53 = "selected";
                             }
			              else if(optionselectedADV1 == "is greater than or equal to")
							   {        
			            	  option54 = "selected";
							   }
								   								   
								   var optionselectedADV2= filterArr[j][0].filterselect2;	
								   console.log("optionselectedADV2####---"+optionselectedADV2);
								   								   
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
					                    
					                    var option31 ="";
					                    var option32 ="";
					                    var option33 ="";
					                    var option34 ="";
					                    var option35 ="";
					                    var option36 ="";
					                    
					                    var option61 ="";
					                    var option62 ="";
					                    var option63 ="";
					                    var option64 ="";
					                   
					                    
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
						              else if(optionselectedADV2 == "is after")
									   {        
							    	  option31 = "selected";
									   }
							      else if( optionselectedADV2 == "is on or after")
									   {
							    	  option32 = "selected";
                                      }
						          else if(optionselectedADV2 == "is before")
									   {        
						        	  option33 = "selected";
									   }
						          else if(optionselectedADV2 == "is on or before")
									   {        
						        	  option34 = "selected";
									   }
						          else if( optionselectedADV2 == "is blank")
									   {
						        	  option35 = "selected";
	                                   }
					              else if(optionselectedADV2 == "is not blank")
									   {        
					            	  option36 = "selected";
									   }
									   
					              else if(optionselectedADV2 == " < ")
								   {        
					        	  option61 = "selected";
								   }
					          else if(optionselectedADV2 == "<=")
								   {        
					        	  option62 = "selected";
								   }
					          else if( optionselectedADV2 == ">")
								   {
					        	  option63 = "selected";
	                             }
				              else if(optionselectedADV2 == ">=")
								   {        
				            	  option64 = "selected";
								   }
									   									   
									   var andorvalueselected= filterArr[j][0].andorvalue;
			     	                    var and ="";
			     	                    var or ="";
			     	                    if( andorvalueselected == " and ")
			 						    {										                     
			     	                    	and = "checked";
			 							}
			 					   else if( andorvalueselected == " or ")
			 						   {
			 						   or = "checked";
			                            }
									   
			     	                   filter_list.push(j);
			     	  				
			     	  				console.log("filter_list---- j   -----" + filter_list);
			     	                    
			     	                    
									   var comparisontxt = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:14px;top: -21px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+j+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+j+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+j+"' disabled><option value='adv'  "+option1+" >Advance</option><option value='topn'  "+option2+">Top N</option><option value='basicfiltering' "+option3+" >Basic Filtering</option></select><div class='mt-2' id='optiondivtopn"+j+"' style=''><select class='form-control' id='top_bottom' style='display:none;'><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+j+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"
	    								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+j+")'><option value='contains' "+option11+">contains</option><option value='does not contain' "+option12+">does not contain</option><option value='starts with' "+option13+">starts with</option><option value='does not start with' "+option14+">does not start with</option><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is blank' "+option17+">is blank</option><option value='is not blank' "+option18+">is not blank</option><option value='is empty' "+option19+">is empty</option><option value='is not empty' "+option10+">is not empty</option></select></div>"
	    								+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+j+"'  onblur='filtervaluekeyup("+j+")'></div>"
	    								+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+"andor' id='and"+j+"' value='and' "+and+"><label class='css-iwo4qd' for='and"+j+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+"andor' id='or"+j+"' value='or' "+or+" onchange='andorChange("+j+")'><label class='css-iwo4qd' for='or"+j+"'>Or </label></div></div>"
	    								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+j+")'><option value='contains' "+option21+">contains</option><option value='does not contain' "+option22+">does not contain</option><option value='starts with' "+option23+">starts with</option><option value='does not start with' "+option24+">does not start with</option><option value='is' "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is blank' "+option27+">is blank</option><option value='is not blank' "+option28+">is not blank</option><option value='is empty' "+option29+">is empty</option><option value='is not empty' "+option20+">is not empty</option></select></div>"
	    								+"<div class='mt-2 mb-2'><input type='text' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+j+"' onblur='filterinvaluekeyup("+j+")'></div></div>"
	    								+"<div class='cb-range-form-div mt-2' id='basicfiltercheck"+j+"' style='display:none'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form mb-0'><label class='css-12xei9w'><input type='checkbox' id='limitvalue_basic"+j+"' "+checkedValue+" class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' onclick='limitbasicvalue("+j+")' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Limit Value</span></label></div></div></div></div>"
	    								+"<div class='cb-range-form-div' id='numberofrowsdivs_basic"+j+"' style='display:none'><div class='cb-range-Label'><span class='label'><div class='cb-range-text'>Number of rows</div></span><div class='cb-input-css'><input type='number' list='numberlist_basic' id='numberofrows_basic"+j+"' onchange = 'onchangeNumberofrows_basic("+j+")' name='numberofrows_basic"+j+"' class='form-control' value="+set_userlimitBasic+" min='5' max='50000'/><datalist id='numberlist_basic'><option value='5000'>5000</option><option value='10000'>10000</option><option value='25000'>25000</option><option value='50000'>50000</option></datalist></div></div></div>"	    								
	    								+"<div id='basicselectdiv"+j+"' style='display:none'><div class='mt-2 cb-basic-height'><ul class='list-group' id='selectbasicdata"+j+"' ></ul></div></div>"
	    								+"<div id='topnselectdiv"+j+"' value= '"+ filterArr[j][0].filterselecttypevalue+"'><div class='mt-2'><span>Show items</span><select id='filtertopn"+j+"' value ='"+ filterArr[j][0].filtertopn+"'  class='form-control'><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' value='"+filterArr[j][0].filtertopvalue+"' id='topninput"+j+"'  onblur='topninput("+j+")' autocomplete='off'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>";


	    			    				var comparisonnumber = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:14px;top: -21px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+j+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+j+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+j+"' disabled><option value='adv'  "+option1+" >Advance</option><option value='topn'  "+option2+">Top N</option><option value='basicfiltering' "+option3+" >Basic Filtering</option></select><div class='mt-2' id='optiondivtopn"+j+"' style=''><select class='form-control' id='top_bottom' style='display:none;'><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div></div><div id='optiondivselect"+j+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"	    			    				
	    			    				+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+j+")'><option value='<' "+option51+" >is less than</option><option value='<='  "+option52+">is less than or equal to</option><option value='>' "+option53+">is greater than</option><option value='>=' "+option54+">is greater than or equal to</option><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is blank' "+option17+">is blank</option><option value='is not blank' "+option18+">is not blank</option></select></div>"
	    								+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+j+"'  onblur='filtervaluekeyup("+j+")'></div>"
	    								+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+"andor' id='and"+j+"' value='and' "+and+" onchange='andorChange("+j+")'><label class='css-iwo4qd' for='and"+j+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+"andor' id='or"+j+"' value='or' "+or+" onchange='andorChange("+j+")'><label class='css-iwo4qd' for='or"+j+"'>Or </label></div></div>"	    								
	    								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+j+")'><option value='<' "+option61+" >is less than</option><option value='<=' "+option62+" >is less than or equal to</option><option value='>' "+option63+">is greater than</option><option value='>=' "+option64+">is greater than or equal to</option><option value='is'  "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is blank' "+option35+">is blank</option><option value='is not blank' "+option36+">is not blank</option></select></div>"
	    								+"<div class='mt-2 mb-2'><input type='number' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+j+"' onblur='filterinvaluekeyup("+j+")'></div></div>"	    								
	    								+"<div class='cb-range-form-div mt-2' id='basicfiltercheck"+j+"' style='display:none'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form mb-0'><label class='css-12xei9w'><input type='checkbox' id='limitvalue_basic"+j+"' "+checkedValue+" class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' onclick='limitbasicvalue("+j+")' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Limit Value</span></label></div></div></div></div>"
	    								+"<div class='cb-range-form-div' id='numberofrowsdivs_basic"+j+"' style='display:none;'><div class='cb-range-Label'><span class='label'><div class='cb-range-text'>Number of rows</div></span><div class='cb-input-css'><input type='number' list='numberlist_basic' id='numberofrows_basic"+j+"' onchange = 'onchangeNumberofrows_basic("+j+")' name='numberofrows_basic"+j+"' class='form-control' value="+set_userlimitBasic+" min='5' max='50000'/><datalist id='numberlist_basic'><option value='5000'>5000</option><option value='10000'>10000</option><option value='25000'>25000</option><option value='50000'>50000</option></datalist></div></div></div>"	    									    								
	    								+"<div id='basicselectdiv"+j+"' style='display:none'><div class='mt-2 cb-basic-height'><ul class='list-group' id='selectbasicdata"+j+"' ></ul></div></div>"
	    								+"<div id='topnselectdiv"+j+"' value= '"+ filterArr[j][0].filterselecttypevalue+"' /* style='display:none' */><div class='mt-2'><span>Show items</span><select id='filtertopn"+j+"' class='form-control'><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' value='"+filterArr[j][0].filtertopvalue+"' id='topninput"+j+"'  onblur='topninput("+j+")' autocomplete='off'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>";

	    								
	    								var comparisondate = "<div><div style='position:relative'><span style='text-align: -webkit-right;position:absolute;right:14px;top: -21px;'><a class='chart-accordion' data-toggle='collapse' data-target='#collapseOne"+j+"'><i class='os-icon os-icon-arrow-down' aria-hidden='true'></i></a></span></div><div id='collapseOne"+j+"' class='collapse show' ><span style='text-align: -webkit-right;'>Filter Type</span><div><select class='form-control' id='select_option"+j+"' disabled><option value='adv' "+option1+">Advance</option><option value='topn'  "+option2+">Top N</option><option value='basicfiltering' "+option3+" >Basic Filtering</option></select><div class='mt-2' id='optiondivtopn"+j+"'></div><div id='optiondivselect"+j+"' style='display:none'><div class='mt-3'><span style='text-align: -webkit-right;'>Show Items When Value</span></div>"	    								
	    								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+j+")'><option value='is' "+option15+">is</option><option value='is not' "+option16+">is not</option><option value='is after' "+option41+">is after</option><option value='is on or after' "+option42+">is on or after</option><option value='is before' "+option43+">is before</option><option value='is on or before' "+option44+">is on or before</option><option value='is blank' "+option45+">is blank</option><option value='is not blank' "+option46+">is not blank</option></select></div>"
	    								+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue1+"' id='filtervalueid"+j+"'  onblur='filtervaluekeyup("+j+")'></div>"
	    								+"<div class='mt-2 mb-2'><div class='css-radio' style='z-index:1'><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+"andor' id='and"+j+"' value='and' "+and+" onchange='andorChange("+j+")'><label class='css-iwo4qd' for='and"+j+"'>And </label><input type='radio' class='css-1kd3qvh' name='"+filterArr[j][0].Field+"andor' id='or"+j+"' value='or' "+or+" onchange='andorChange("+j+")'><label class='css-iwo4qd' for='or"+j+"'>Or </label></div></div>"
	    								+"<div class='mt-2 mb-2'><select class='form-control' onchange='showitemvalue(value,"+j+")'><option value='is' "+option25+">is</option><option value='is not' "+option26+">is not</option><option value='is after' "+option31+">is after</option><option value='is on or after' "+option32+">is on or after</option><option value='is before'  "+option33+">is before</option><option value='is on or before' "+option34+">is on or before</option><option value='is blank' "+option35+">is blank</option><option value='is not blank' "+option36+">is not blank</option></select></div>"
	    								+"<div class='mt-2 mb-2'><input type='date' class='filterselectvalue form-control' value='"+ filterArr[j][0].filterselectvalue2+"' id='filterinvalueid"+j+"' onblur='filterinvaluekeyup("+j+")'></div></div>"	    									    							
	    								+"<div class='cb-range-form-div mt-2' id='basicfiltercheck"+j+"' style='display:none'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form mb-0'><label class='css-12xei9w'><input type='checkbox' id='limitvalue_basic"+j+"' "+checkedValue+" class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' onclick='limitbasicvalue("+j+")' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Limit Value</span></label></div></div></div></div>"
	    								+"<div class='cb-range-form-div' id='numberofrowsdivs_basic"+j+"' style='display:none;'><div class='cb-range-Label'><span class='label'><div class='cb-range-text'>Number of rows</div></span><div class='cb-input-css'><input type='number' list='numberlist_basic' id='numberofrows_basic"+j+"' onchange = 'onchangeNumberofrows_basic("+accordianind+")' name='numberofrows_basic"+j+"' class='form-control' value="+set_userlimitBasic+" min='5' max='50000'/><datalist id='numberlist_basic'><option value='5000'>5000</option><option value='10000'>10000</option><option value='25000'>25000</option><option value='50000'>50000</option></datalist></div></div></div>"	    									    								
	    								+"<div id='basicselectdiv"+j+"' style='display:none'><div class='mt-2 cb-basic-height'><ul class='list-group' id='selectbasicdata"+j+"' ></ul></div></div>"
	    								+"<div id='topnselectdiv"+j+"' value= '"+ filterArr[j][0].filterselecttypevalue+"' style='display:none'><div class='mt-2'><span>Show items</span><select id='filtertopn"+j+"' class='form-control'><option value='top'>Top</option><option value='bottom'>Bottom</option></select></div><div class='mt-2'><input class='filterselectvalue form-control' text='number' value='"+filterArr[j][0].filtertopvalue+"' id='topninput"+j+"'  onblur='topninput("+j+")' autocomplete='off'></div><div class='mt-2 d-none'><label>By value</label><input class='form-control' placeholder='Add data fields here'></div></div></div></div>	";
								
				    				var elfitemfilter="";

				    				elfitemfilter = "<div class='column-card DataMapping_column-card__2VBWp ui-draggable ui-draggable-handle dropzoneselect'  draggable='true' "
				    				+ "data-field='"+filterArr[j][0].Field +"' data-types='"+filterArr[j][0].Types+"' > <span class='datatype'>"+sym+"</span>"
				    				+ "<span class='DataMapping_column-title__2yLXi' data-bs-toggle='tooltip' title='"+filterArr[j][0].Field+"'>"+filterArr[j][0].Field+"</span><span style='text-align: -webkit-right;'><a href='Javascript:void(0);' class='xicon delete' id='remove_filter"+j+"'  onclick = 'filter_delete("+j+")'  title='Remove'><i class='fa fa-times' aria-hidden='true'></i></a></span>"
				    				
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
																						
											    selectBasicFilter_set(j,filterArr[j][0].basic_Fil_Val_Array ,table_loadchart1,set_userlimitBasic ,filterArr[j][0].Field );
											    
											    if(set_userBasic_check == 0)
													{								
													 $('#numberofrowsdivs_basic'+j).hide();					
													}
										        else
													{							
													 $('#numberofrowsdivs_basic'+j).show();
													}
											    
											    $('#numberofrows_basic'+j).change(function() {
												
													var basic_userlimit=$("#numberofrows_basic"+j).val();
												
													//console.log('basic_userlimit:::'+basic_userlimit);	
													 selectBasicFilter_set(j,filterArr[j][0].basic_Fil_Val_Array ,table_loadchart1,set_userlimitBasic ,filterArr[j][0].Field);
												   
												});
											    
											}, 2000);
						                 	
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
				    			
				    			$('.dropzonefilter').append(elfitemfilter);
				    							    			
				    		}
				    		console.log("var dim   queryArr      ",queryArr);
							
							for(var p = 0; p < prop_arr.length; p++)
				    		{
			
								legend_button = 1;
								
								var top_bottom = prop_arr[p].top_bottom;
								console.log("  top_bottom      "+top_bottom);
								
								if(top_bottom == "")
			    				{
									top_bottom = "select";
			    				}
				    
				    			$("#placement").val(top_bottom);
				    			var chart_flip = prop_arr[p].chart_flip;
				    			console.log("  chart_flip      "+chart_flip);
				    			
				    			
				    			if(chart_flip == true)
				    				{
				    			
				    				 $("#chart_flip").prop('checked', true);
				    				}
				    			else
				    				{
				    				
				    				 $("#chart_flip").prop("checked", false);
				    				}
				    			
				    			var data_labels = prop_arr[p].data_labels;
				    			console.log(" data_labels      "+data_labels);	    		
				    			
				    			if(data_labels == true)
			    				{
			    			
			    				 $("#data_labels").prop('checked', true);
			    				}
			    			else
			    				{
			    				
			    				 $("#data_labels").prop("checked", false);
			    				}
				    			
				    			
				    			var label_rotation = prop_arr[p].label_rotation;
				    			console.log(" label_rotation      "+label_rotation);
				    			
				    			$("#label_rotation").val(label_rotation);
				    			
				    			
				    			var zoom_type = prop_arr[p].zoom_type;
				    			console.log(" zoom_type      "+zoom_type);
				    			
				    			
				    			if(zoom_type == "")
			    				{
				    				zoom_type = "select";
			    				}
				    			
				    			$("#zoom_type").val(zoom_type);
				    			
				    			var y_label_rotation =  prop_arr[p].y_label_rotation;
				    			
				    			$("#y_label_rotation").val(y_label_rotation);
				    			
				    			var value_conversion = prop_arr[p].value_conversion;
				    			
				    			if(value_conversion == 0)
			    				{
				    				value_conversion = "select";
			    				}
			    			
				    			$("#value_conversion").val(value_conversion);
				    			

				    			var title_alignment = prop_arr[p].title_alignment;
				    			
				    			if(title_alignment == "")
				    				{
				    				title_alignment = "select";
				    				}
				    			
				    			
				    			$("#title_alignment").val(title_alignment);
				    			
				    			
				    			var data_label_color = prop_arr[p].font_color;
				    			$("#font_color").val(data_label_color);	
				    			
				    			
//				    			var opacity = prop_arr[p].opacity;
//				    			$("#opacity").val(opacity);	
				    			
				    			var prefix = prop_arr[p].prefix;
				    			$("#prefix").val(prefix);	
				    			
				    			
				    			var suffix = prop_arr[p].suffix;
				    			$("#suffix").val(suffix);	
				    			
				    			var x_categories_check = prop_arr[p].x_categories_check;
				    			
				    			if(x_categories_check == true)
			    				{
			    			
			    				 $("#categories_check").prop('checked', true);
			    				}
			    			else
			    				{
			    				
			    				 $("#categories_check").prop("checked", false);
			    				}
				    			
				    			var x_label_check = prop_arr[p].x_label_check;
				    			
				    			if(x_label_check == true)
			    				{
			    			
			    				 $("#label_check").prop('checked', true);
			    				}
			    			else
			    				{
			    				
			    				 $("#label_check").prop("checked", false);
			    				}
				    			
				    			
				    		
				    		}
						
			setTimeout(() => {
			
				
				
	    		for(var i = 0; i < queryArr.length; i++)
	    		{
//	    			if(i == queryArr.length-1)
//	    				{
//	    				
//	    				console.log("var dim   queryArr      ",queryArr[i]);
//	    				
//	    			var data = queryArr[i].properties_;
//	    			console.log("var dim   data      "+data);
//	    			
////	    			data = JSON.stringify(data);
//	    			
//	    			
//	    			
//	    			
//	    			for(var k = 0; k<data.length; k++)
//	    				{
//	    				var legend_pos = data[k][0].top_bottom;
//	    				console.log("var dim   legend_pos      "+legend_pos);
//		    			
//		    			legend_button = 1;
//		    			 $("#placement").val(legend_pos);
//	    				}
//	    			
//	    			
//	    			
//	    			
//	    			
//	    			
//	    				}
//	    			else
//	    				{	    				
	    			console.log(queryArr[i][0].Agg);//Series
	    			
	    			var series_set = queryArr[i][0].Series;
	    			console.log("series_set  "+series_set);
	    			
	    			if(series_set == "Y-Axis")
					 {
						i_y ++;
						 				 
					 }
	    			
	    			var prop = queryArr[i][0].properties_;
	    			
	    			console.log("prop ############    ",prop);
	    			
	    			var aggset = queryArr[i][0].Agg;
//	    			if(aggset == "sum")
//	    				{
//	    				
//	    				}
//	    			else if(aggset == "count")
//	    				{
//	    				
//	    				}
//	    			else if(aggset == "uniq")
//    				{
//    				
//    				}
//	    			else if(aggset == "avg")
//    				{
//    				
//    				}
//	    			else if(aggset == "max")
//    				{
//    				
//    				}
//	    			else if(aggset == "min")
//    				{
//    				
//    				}
//	    			else if(aggset == "medianTDigest")
//    				{
//    				
//    				}

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
	    				+"<span class='DataMapping_column-title__2yLXi' data-bs-toggle='tooltip' title='"+queryArr[i][0].Field+"'>"+queryArr[i][0].Field+"</span>";

	    				if(queryArr[i][0].Agg !='')
	    				{
	    					
	    					
	    					if($("#chartingtype").val() == "chartcard17"  || $("#chartingtype").val() == "chartcard22")
							{
	    					
	    					elitem = elitem 
	    					+"<div class='selectaxisdiv' style='width:150px'><ul class='list-unstyled cb-custom-dropdown'>"
	    					+"<li onclick='openDropCartyaxis("+i_y+" ,event)' style='display:none'><i class='fa fa-caret-down' aria-hidden='true'></i>&nbsp;<span id='yaxisdivtext"+i_y+"'>Aggregate</span></li></ul>"
	    					+"<div class='dropdown-cart cb-yaxisdiv' id='opencartyaxis"+i_y+"' style='display: none;' >"
	    					+"<div class='cb-cursor' onclick='closeDropCartyaxis("+i_y+" ,event)' style='float: right;right: 11px;position: absolute;top: 4px;'><i class='fa fa-times' aria-hidden='true'></i></div>"
	    					+"<div >"
	    					+"<div class='cb-range-form-div'>"
	    					+"<div class='cb-range-Label'>"
	    					+"<div class='css-radio'>"
	    					+"<input type='radio' class='css-1kd3qvh' name='yaxisradio' id='tonradio"+i_y+"' value='tonradio'  onchange='ischeckedfn(this.value);' style='display:none'>"
	    					+"<label class='css-iwo4qd' for='tonradio"+i_y+"' style='display:none'>Topn </label>"
	    					+"<input type='radio' class='css-1kd3qvh' name='yaxisradio' id='aggregateradio"+i_y+"' value='aggregateradio' onchange='ischeckedfn(this.value);' checked>"
	    					+"<label class='css-iwo4qd' for='aggregateradio"+i_y+"'>Aggregate </label></div>"
	    					+"</div>"
	    					+"</div>"
	    					+"<div id='topnradiodiv"+i_y+"' style='display:none'>"
	    					+"<div class='cb-range-form-div'>"
							+"<div class='cb-range-Label'>"
							+"<span class='label'><div class='cb-range-text'>Display Top Values</div></span>"
								+"<div>"
									+"<div class='cb-input-css'>"
									+"<input type='number' class='form-control' id='displaytopvalue"+i_y+"' name='displaytopvalue"+i_y+"'>"
									+"</div>"
									+"</div>"
									+"</div>"
									+"</div>"
									+"<div class='cb-range-Label'>"
								+"<div class='form-inline'>"
									+"<div class='cb-form'>"
										+"<label class='css-12xei9w'>"
											+"<input type='checkbox' id='others"+i_y+"' name='others"+i_y+"' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0'>"
											+"<span class='css-a2zrvp'></span>"
											+"<span class='css-a3753h-Label'>  Others</span>"
										+"</label>"
									+"</div>"
								+"</div>"
							+"</div>"
									+"</div>"
									+"<div id='aggregateradiodiv"+i_y+"'>"
								    +"<div class='cb-range-form-div'>"
														+"<div class='cb-range-Label'>"
														+"<span class='label'><div class='cb-range-text'>Aggregate</div></span>"
															+"<div>"
																+"<div class='cb-input-css'>"
	    					+"<select class='form-control' id='aggregateval"+i_y+"' name='aggregateval"+i_y+"'>"
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
		+"<button class='cb-primary' id='getyaxis"+i_y+"' onclick='getyaxis("+i_y+")'>Save</button>"
		+"</div>"
+"</div></div></div>";
							}
	    					else
	    						{
	    						

		    					elitem = elitem 
		    					+"<div class='selectaxisdiv' style='width:150px'><ul class='list-unstyled cb-custom-dropdown'>"
		    					+"<li onclick='openDropCartyaxis("+i_y+" ,event)' ><i class='fa fa-caret-down' aria-hidden='true'></i>&nbsp;<span id='yaxisdivtext"+i_y+"'>Aggregate</span></li></ul>"
		    					+"<div class='dropdown-cart cb-yaxisdiv' id='opencartyaxis"+i_y+"' style='display: none;' >"
		    					+"<div class='cb-cursor' onclick='closeDropCartyaxis("+i_y+" ,event)' style='float: right;right: 11px;position: absolute;top: 4px;'><i class='fa fa-times' aria-hidden='true'></i></div>"
		    					+"<div >"
		    					+"<div class='cb-range-form-div'>"
		    					+"<div class='cb-range-Label'>"
		    					+"<div class='css-radio'>"
		    					+"<input type='radio' class='css-1kd3qvh' name='yaxisradio' id='tonradio"+i_y+"' value='tonradio'  onchange='ischeckedfn(this.value);' style='display:none'>"
		    					+"<label class='css-iwo4qd' for='tonradio"+i_y+"' style='display:none'>Topn </label>"
		    					+"<input type='radio' class='css-1kd3qvh' name='yaxisradio' id='aggregateradio"+i_y+"' value='aggregateradio' onchange='ischeckedfn(this.value);' checked>"
		    					+"<label class='css-iwo4qd' for='aggregateradio"+i_y+"'>Aggregate </label></div>"
		    					+"</div>"
		    					+"</div>"
		    					+"<div id='topnradiodiv"+i_y+"' style='display:none'>"
		    					+"<div class='cb-range-form-div'>"
								+"<div class='cb-range-Label'>"
								+"<span class='label'><div class='cb-range-text'>Display Top Values</div></span>"
									+"<div>"
										+"<div class='cb-input-css'>"
										+"<input type='number' class='form-control' id='displaytopvalue"+i_y+"' name='displaytopvalue"+i_y+"'>"
										+"</div>"
										+"</div>"
										+"</div>"
										+"</div>"
										+"<div class='cb-range-Label'>"
									+"<div class='form-inline'>"
										+"<div class='cb-form'>"
											+"<label class='css-12xei9w'>"
												+"<input type='checkbox' id='others"+i_y+"' name='others"+i_y+"' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0'>"
												+"<span class='css-a2zrvp'></span>"
												+"<span class='css-a3753h-Label'>  Others</span>"
											+"</label>"
										+"</div>"
									+"</div>"
								+"</div>"
										+"</div>"
										+"<div id='aggregateradiodiv"+i_y+"'>"
									    +"<div class='cb-range-form-div'>"
															+"<div class='cb-range-Label'>"
															+"<span class='label'><div class='cb-range-text'>Aggregate</div></span>"
																+"<div>"
																	+"<div class='cb-input-css'>"
		    					+"<select class='form-control' id='aggregateval"+i_y+"' name='aggregateval"+i_y+"'>"
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
			+"<button class='cb-primary' id='getyaxis"+i_y+"' onclick='getyaxis("+i_y+")'>Save</button>"
			+"</div>"
	+"</div></div></div>";
	    						
	    						}
	    					$("#yaxisdivtext"+i).html(aggset);
	    					
	    					var userlim = queryArr[i][0].userlimit;

	    					
	    				}
	    				else if(series_set == "X1-Axis")
						{
						i = 1;
						
						var bintext = queryArr[i][0].BinType;
    					if (queryArr[i][0].BinType =="")
    					{
    						bintext ="";
    					}    				
    					elitem=elitem
    					+"<div class='selectxaxisdiv' style='width:150px'>"
								+"<ul class='list-unstyled cb-custom-dropdown'>"
							      +"<li  id='dropdownshowxaxis"+i+"' onclick='openDropCart("+i+",event)' style ='display:none;'><i class='fa fa-caret-down' aria-hidden='true'></i>&nbsp;<span id='xaxisdivtext"+i+"'  class='xaxisdivtextclass' >"+bintext+"</span></li></ul>"
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
	    			else{
	    				i=0;
	    				if($("#chartingtype").val() == "chartcard8" || $("#chartingtype").val() == "chartcard9"  
							|| $("#chartingtype").val() == "chartcard19" || $("#chartingtype").val() == "chartcard15")
						{
	    					var bintext = queryArr[i][0].BinType;
	    					if (queryArr[i][0].BinType =="")
	    					{
	    						bintext ="";
	    					}	    					
	    					elitem=elitem
	    					+"<div class='selectxaxisdiv' style='width:150px'>"
									+"<ul class='list-unstyled cb-custom-dropdown'>"
								      +"<li  id='dropdownshowxaxis"+i+"' onclick='openDropCart("+i+",event)'  style='display: none;'><i class='fa fa-caret-down' aria-hidden='true'></i>&nbsp;<span id='xaxisdivtext"+i+"'  class='xaxisdivtextclass' >"+bintext+"</span></li></ul>"
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
	    				else
	    					{
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
	    				}

	    				 if(series_set == "X-Axis")
						 {
						 i = 0;
						 elitem = elitem +"<span style='text-align: -webkit-right;''>"
		    				+"<a href='Javascript:void(0);'  class='xicon delete' id='remove"+i+"'  onclick = 'axis_delete("+i+")' title='Remove'><i class='fa fa-times' aria-hidden='true'></i></a></span>"
		    				+"</div>"; 
						 }
					 
					 if(series_set == "X1-Axis")
						 {
						 i = 1;	
						 elitem = elitem +"<span style='text-align: -webkit-right;''>"
		    				+"<a href='Javascript:void(0);'  class='xicon delete' id='remove"+i+"'  onclick = 'axis_delete("+i+")' title='Remove'><i class='fa fa-times' aria-hidden='true'></i></a></span>"
		    				+"</div>"; 
						 }
					 
					
//	    				elitem = elitem +"<span style='text-align: -webkit-right;''>"
//	    				+"<a href='Javascript:void(0);'  class='xicon delete' id='remove"+i+"'  onclick = 'axis_delete("+i+")' title='Remove'><i class='fa fa-times' aria-hidden='true'></i></a></span>"
//	    				+"</div>";    
	    				
	    			if(series_set == "Y-Axis")
	   				 {
	    				elitem = elitem +"<span style='text-align: -webkit-right;''>"
	    				+"<a href='Javascript:void(0);'  class='xicon delete' id='removey"+i_y+"'  onclick = 'yaxis_delete("+i_y+")' title='Remove'><i class='fa fa-times' aria-hidden='true'></i></a></span>"
	    				+"</div>"; 
	   				 }
	    				
	    				
	    				$('div.dropzone.'+queryArr[i][0].Series).append(elitem);
	    				
	    				$("#aggregateval"+i).val(queryArr[i][0].Agg);
	    				
	    				$("#bintype"+i).val(queryArr[i][0].BinType);
						
	    				$("#yaxisdivtext"+i).html(aggset);
	    				
	    				var userlim = queryArr[i][0].userlimit;
	    				
	    				console.log("userlim   "+userlim);
	    				
	    				var userlim_Flag = userlim.split(" , ")[1];
	    				var userlim_val = userlim.split(" , ")[0];
	    				
	    				
	    				if(userlim_Flag == 1)
	    					{
	    					custom_userlimit =1;
	    					$("#limitvalue").prop('checked' , true);
	    					$("#numberofrowsdiv").show();
	    					$("#numberofrows").val(userlim_val);
	    					}
	    				else
	    					{
	    					custom_userlimit =0;
	    					$("#limitvalue").prop('checked' , false);
	    					$("#numberofrowsdiv").hide();
	    					$("#numberofrows").val(userlim_val);
	    					}

	    				var fromTo  = queryArr[i][0].colorfields;
	    				
	    				console.log("fromTo_    ",fromTo);
    				
	    					for(var m = 0; m < fromTo.length; m++)
	    		    		{
//	    						 debugger;
	    						 fromTofunction = fromTo[m].fromTofunction ;
	    						
	    						 $("#from_first").val(fromTo[m].fromfirst);
		    			    	 $("#to_first").val(fromTo[m].tofirst);
		    			    	 $("#color_first").val(fromTo[m].firstcolor);
		    			    	 $("#from_second").val(fromTo[m].fromsecond);
		    			    	 $("#to_second").val(fromTo[m].tosecond);
		    			    	 $("#color_second").val(fromTo[m].secondcolor);
		    			    	 $("#from_third").val(fromTo[m].fromthird);
		    			         $("#to_third").val(fromTo[m].tothird);
		    			    	 $("#color_third").val(fromTo[m].thirdcolor);
		    			    	 $("#target_value").val(fromTo[m].targetvalue);
	    		    		}
	    		
	  	    	  		  if(trim_charttheme == "DarkTheme")
			    	  		  {
		    	  			   $("#switch-3").prop('checked' , false);
			    	  		  }
		    	  		  else
		    	  			  {
		    	  			$("#switch-3").prop('checked' , true);
		    	  			  }
	    					
	    					
	    				
    					time += 5000;
//	    		}
	    			}
			}, 500);	

	    		
	    		
	  setTimeout(() => {
		
    		$('.delete').on('click',function() {			                		
//				alert("loadchart");
				$(this).parent().parent('div').remove();	
				$("#btnChart").trigger("click");
			});

		
	}, 2000);

	   	 }
	    					    	  			
			}	    
	    				NProgress.start();
	    	  		setTimeout(() => 
	    	  		{
	    	  		
//	    	  		  if(trim_charttheme == "DarkTheme")
//		    	  		  {
//	    	  			   $("#switch-3").prop('checked' , false);
//		    	  		  }
//	    	  		  else
//	    	  			  {
//	    	  			$("#switch-3").prop('checked' , true);
//	    	  			  }
	    	  			$("#selectdimension").hide();
	    	  			$("#btnChart").trigger("click");
	    	  			NProgress.done(true);
			    	  	
					},3000);		
	    
	    },
	    error : function(data) { 
	    	NProgress.done(true);
	    	//console.log(data);
	    }
	});
    resolve();
});
}

function loadchart2(){		
			return new Promise((resolve) => {			
			for (i=0;i<el.length;i++){  				
					$('div.dropzone.Series').append(el[i]);													
				}
			
	        resolve();
	    });
		}

		function loadchart(){			
		
			loadchart1();

		}

		if (getParameterByName('id') != null)
		{
			_id = getParameterByName('id');
			
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
	
});


function getTablelist()
{
	$.ajax({type : "POST",
		async:false,
		url : './getTablelist',		
		success : function(result) {
			
			console.log("result #######  getTablelist  ",result);
			setDropdown(result);
//			setDropdown_of_searchbutton(result);
		},
		error : function(data) {
			
		}
	});

}


//function searchData()
//{
//	var user_id = $("#user_by").val();
//	var date_range = $("#date_range").val();
//	var dataset_name = $("#user_name").val();
//	
//	console.log("user_id %%%%%%%%%%%  %%%  "+user_id);
//	console.log("date_range %%%%%%%%%%%  %%%  "+date_range);
//	
//	
//	debugger;
////	return;
//	$.ajax({type : "POST",
//		async:false,
//		url : './searchData',	
//		data : {
//			userid : user_id,
//			daterange : date_range,			
//			
//		},
//		success : function(result) {
//			
//			
//		},
//		error : function(data) {
//			
//		}
//	});
//
//}


function user_id__users()
{
	
	$.ajax({type : "POST",
		async:false,
		url : './user_id__users',	
		
		success : function(result) {
			
			console.log("result user_id__users   $$$   ",result);
			
			var selected='';
			var userHTML='<option value="select"> --select--  </option>';
var data =result;
			for(var v=0;v<data.length;v++)
			{
				userHTML+='<option value="'+data[v].slice_userid+'" >'+data[v].slice_user_name+'</option>';
			}
			
			$('#user_by').html(userHTML);
			
			
		},
		error : function(data) {
			
		}
	});

}




function setdata_source()
{
	var project_id = 0;
	
	var user_name_ ="";
	
	
	var user_id = $('#user_by').val();
      user_name_ =$('#user_name').val();
	 var date_range = $('#date_range').val();
	 project_id = $('#project_id').val();
	
	
	console.log("date_range        "+date_range);
	console.log("project_id        "+project_id);
	console.log("user_id        "+user_id);
	console.log("user_name_        "+user_name_);
	
	
	
//	debugger;
	if(user_id == "select")
        {
		user_id=0;
		}	
	
	
	console.log("date_range        "+date_range);
	console.log("project_id        "+project_id);
	console.log("user_id        "+user_id);
	console.log("user_name_        "+user_name_);
	
	if(project_id == "")
		{
		project_id = 0;
		}
	
	var Start_date = date_range.split(" - ")[0];
	var end_date = date_range.split(" - ")[1];
	
	console.log("Start_date        "+Start_date);
	console.log("end_date        "+end_date);
	var date =[];
	
	date.push({
		's_date' : Start_date,
		'e_date' : end_date,
		
	});
	console.log("date        ",date);
	
	$.ajax({type : "POST",
		async:false,
		url : './setdata_source',	
		data :{
			user_id_ :user_id,
			datasource_name : user_name_,
			date_ : JSON.stringify(date),				
			project_id_ : project_id,
		},
		success : function(result) {
			
			console.log("result setdata_source   $$$   ",result);
			var data = result;
			setDropdown(data);
			
		},
		error : function(data) {
			
		}
	});
	
	
	
}


function setDropdown(data)
{

	var selected='';
	var userHTML='';

	for(var v=0;v<data.length;v++)
	{
		userHTML+='<li class="cb-cursor"><div class="d-flex justify-content-start align-items-center"><div class="cb-range-form-div me-2"><div class="cb-range-Label"><div class="form-inline"><div class="cb-form"><label class="css-12xei9w"><input  type="checkbox" id="chkDeploy'+v+'" value="'+data[v].viz_type+'" onclick="setTotalRecordCount('+v+')" class="css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus"><span class="css-a2zrvp"></span></label></div></div> </div></div><div class="me-2"><i class="fa fa-database" aria-hidden="true"></i></div><div class="me-2 text-ecllipsis" title="'+data[v].slice_name+'" onclick="setFieldList(\''+data[v].slice_name+'\',\''+data[v].viz_type+'\','+v+')">'+data[v].slice_name+'</div></div></li>';
		//userHTML+='<option value="'+data[v].viz_type+'"  '+selected+' >'+data[v].slice_name+'</option>';
	}
	$('#tablelistDatas').html(userHTML);


}


//function setDropdown_of_searchbutton(data)
//{
//
//	var selected='';
//	var userHTML_id='<option value="select"> --select--  </option>';
//	var userHTML_name='<option value="select"> --select--  </option>';
//	var userHTML_date='<option value="select"> --select--  </option>';
//
//	for(var v=0;v<data.length;v++)
//	{
//		userHTML_id+='<option value="'+data[v].slice_userid+'">'+data[v].slice_userid+'</option>';
//	}
//	$('#user_by').html(userHTML_id);
//	
//	for(var v=0;v<data.length;v++)
//	{
//		userHTML_name+='<option value="'+data[v].slice_name+'"  '+selected+' >'+data[v].slice_name+'</option>';
//		userHTML_name+='<option value="'+data[v].slice_name+'"  '+selected+' >'+data[v].slice_name+'</option>';
//	}
//	$('#user_name').html(userHTML_name);
//	
//	for(var v=0;v<data.length;v++)
//	{
//		userHTML_date+='<option value="'+data[v].slile_created+'">'+data[v].slile_created+'</option>';
//	}
//	$('#date_range').html(userHTML_date);
//	
//	
//	
//	
//	
//}


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




var globaldashid =0;



function setDropdownDashboard(data)
{
//    debugger;
//	var selected='';
	
	
	var userHTML='<option value="select"> --select--  </option>';
//	console.log("data  :::::",data);
	var selectedindex = 0;
	
	for(var v=0;v<data.length;v++)
	{
		var vizType = data[v].viz_type;
		
		
		
		
		
	if (dashboard_title == data[v].slice_name )
		{		
		
		selectedindex = v;
		//console.log("data[v]::::",data[v]);
//		userHTML+='<option id="dashli'+v+'"  class="dashliclass cb-cursor active" value = "'+data[v].slice_name+' , '+data[v].viz_type+'"  selected  disabled ><div class="d-flex justify-content-start align-items-center"><div class="me-2"><i class="fa fa-database" aria-hidden="true"></i></div><div class="me-2"  >'+data[v].slice_name+'</div></div></option>';
		userHTML+='<option id="dashli'+v+'" value = "'+data[v].slice_name+' , '+data[v].viz_type+'" selected><div class="d-flex justify-content-start align-items-center"><div class="me-2"  >'+data[v].slice_name+'</div></div></option>';
		
		setTabList(vizType,v);
//		setTimeout(() => {
//			onchangeDashboard();
//		}, 1000);
		
		
		
		}
	else		
		{
	//	console.log("data[v]::::",data[v]);
		//userHTML+='<option id="dashli'+v+'"  class="dashliclass cb-cursor" value = "'+data[v].slice_name+'"  onclick="setTabList(\''+data[v].viz_type+'\','+v+')"><div class="d-flex justify-content-start align-items-center"><div class="me-2"><i class="fa fa-database" aria-hidden="true"></i></div><div class="me-2"  >'+data[v].slice_name+'</div></div></option>';
		userHTML+='<option id="dashli'+v+'" value = "'+data[v].slice_name+' , '+data[v].viz_type+'"><div class="d-flex justify-content-start align-items-center"><div class="me-2"  >'+data[v].slice_name+'</div></div></option>';
		
		}

    }

	$('#dashboardlistData').html(userHTML);
	
//	setTimeout(() => {
////		alert(":::::"+selectedindex);
//		//$('#dashboardlistData option[value="'+selectedindex+'"]').attr("selected", "selected");
//		//$("#dashboardlistData").attr('selectedIndex', 0);
//		$("#dashboardlistData").prop('selectedIndex',selectedindex);
//		//dash_30
//		
//	}, 300);
	  
	
	

}






function onchangeDashboard()
{
    
	 var selectedvalue  = $('#dashboardlistData').val();
	 console.log("selectedvalue  ::::  "+selectedvalue);
	 
	 dashboard_title = selectedvalue.split(" , ")[0];
	 dashid =selectedvalue.split(" , ")[1];
	 console.log("dashid  ::::  "+dashid);
	 
	 
	 
//	 debugger;
	 
	 
	 
	 globaldashid = dashid;
		
		$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "./getDashboardtablist?dashid="+dashid,
			dataType : 'text',
			success : function(result) {
				console.log(" getDashboardtablist  result 2--"	+ result);
				jsonData = JSON.parse(result);
				tablist_(jsonData);
	
},
error : function(data) {
	//console.log(data);
}
});
		
}


function setTabList(dashid,index)
{
//		alert("tablist        .....");
//		$(".dashliclass").removeClass("active");
//		$("#dashli"+index).addClass("active");
		
		globaldashid = dashid;
		
		$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "./getDashboardtablist?dashid="+dashid,
			dataType : 'text',
			success : function(result) {
				console.log(" getDashboardtablist  result 2--"	+ result);
				jsonData = JSON.parse(result);
				tablist_(jsonData);
	
},
error : function(data) {
	//console.log(data);
}
});
		
		
	}
	
	
function tablist_(data) 
{
	
	var selected='';
	var userHTML='<option value="select">--select--</option>';
	//console.log("len:::::"+data.length);
	console.log("data:::::tablist_",data);
	
	for(var v=0;v<data.length;v++)
	{
		//console.log("data[v].slice_name:::::tablist_",data[v].slice_name);
	
		//if(data[v].slice_name == )
	if (dashTabName == data[v].slice_name)
		{
		userHTML+='<option id="tabli'+v+'" class="tabliclass cb-cursor active " value = "'+data[v].viz_type+','+data[v].slice_name+','+v+'" selected >'+data[v].slice_name+'</option>';
		}
	else 
		{
		userHTML+='<option id="tabli'+v+'" class="tabliclass cb-cursor " value = "'+data[v].viz_type+','+data[v].slice_name+','+v+'" >'+data[v].slice_name+'</option>';
		
		}
	
	if(v == 0)
		{
		selectedtabid = data[v].viz_type;
		selectedtabname= data[v].slice_name;
		
		}
	
	}
	$('#tablistData').html(userHTML);
	
}



function onchangetablistData()
{
//	alert("onchangetablistData#####");
	var selectedvalue = $("#tablistData").val();
	
	console.log("selectedvalue  "+selectedvalue);
	tabid = selectedvalue.split(",")[0];
	
	console.log("tabid  "+tabid);
	var tab__ = selectedvalue.split(",")[1];
	
	console.log("tab__  "+tab__);
	
	selectedtabname = tab__;
	
	name = tab__;
	index = selectedvalue.split(",")[2];
	
	
	console.log("name   ##  "+name);
	console.log("index########  "+index);
	
	
//	debugger;

	if (edit_ModeFlag == 0)
	{
		$(".tabliclass").removeClass("active");
		$("#tabli"+index).addClass("active");



	selectedtabid = tabid;
	selectedtabname= name;
	if(tabid == "")
		{
		 selectedtabid = $(".tabliclass.active").text();
		
		}
		 
	}



}






function setTabid(tabid,name,index)
{

if (edit_ModeFlag == 0)
{
	$(".tabliclass").removeClass("active");
	$("#tabli"+index).addClass("active");



selectedtabid = tabid;
selectedtabname= name;
if(tabid == "")
	{
	 selectedtabid = $(".tabliclass.active").text();
	
	}
	 
}

	
	}


function setFieldList(name,value,index)
{
//	globalselectedtabnlename = "PT119410986S";
	globalselectedtabnlename = "PT100057220S";//value;  PT119410986S
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
   
 
//	var tableid = value;PT119410986S
//   var tableid =  "PT119410986S";
   var tableid =  "PT100057220S";
		$.ajax({
			type : "POST",
			contentType : "application/json",
			url : "./getFieldsList?tableid="+tableid,
			dataType : 'text',
			success : function(result) {
				closeDataset();
				console.log("result 2--"	+ result);
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
		   
		  $('input:checkbox').prop('checked',false);
	
		  $("#chkDeploy"+index).prop( "checked", true );
		  
			var tableid = tid;//$("#tablelistData").val();
		
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

function selectBasicFilter_set(index, basicFilter_ ,tablename_ ,set_userlimitBasic ,Field_Basic)
{

	console.log("Field_Basic ::::::::::::::############# "+Field_Basic);

	var numberofrows_basic = $("#numberofrows_basic"+index).val();
	console.log("numberofrows_basic  "+numberofrows_basic);
	console.log("selectcount  "+selectcount);

	var selectbasicfilter="";
	var li="";

	$.ajax({method : "POST",					
		url : "./selectbasicfilter",
		data : {
			field : Field_Basic,
			tablename : tablename_,
			numberofrows_Basic : numberofrows_basic ,
		},
		success : function(result) {
			NProgress.done(true);
			console.log("chart selectBasicFilter result--",result);		
			var basicFilterData ="";
		    basicresult_length = result.length;
			
			if($('.dropzonefilter').children().length > 1)
				{
					var drop_child = $('.dropzonefilter').children().length;
					selectcount = drop_child-2;
				
				}

			for(var v=0;v<result.length;v++)
			{
				basicFilterData = result[v].basicFilterFieldData;
				
				var checkFlag = false;
				
				for (var x=0 ; x<basicFilter_[0].length ; x++)
				{
					if(basicFilter_[0][x].BasicFilterValue === basicFilterData){
					
						checkFlag = true;
					}
				}
				
				var checkedValue = "";
				if(checkFlag){
					checkedValue = "checked";
				}
				
				
				selectbasicfilter+="<li class='searchtext"+index+"'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='allcheck"+v+"' "+checkedValue+" data-id = 'allcheckfalse' onclick='checkedBasicFilter("+v+" , "+index+")' value='"+basicFilterData+"' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus allselectcheckbox allcheck"+index+"'  autocomplete='off' ><span class='css-a2zrvp'></span><span class='css-a3753h-Label text-overflow' title='"+basicFilterData+"' style='max-width:100px;display:block'> "+basicFilterData+" </span></label></div></div> </div></li>"
				
			
			}
			
			li+="<li><div class='cb-range-form-div'><div class='cb-input-css align-items-center'><input type='text' class='form-control searchbasicfilter me-2 visibility-class' placeholder='search ....' id='searchbasicfilter"+index+"' onkeyup='searchonkey("+index+")'><i class='fa fa-search me-2 cb-cursor' aria-hidden='true' id='openSearchbox' onclick='searchboxOpen("+index+")'></i></div></div></li><li><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal"+index+"' onclick='checkall("+index+", this.checked)' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Select All</span></li>"+selectbasicfilter;
			
				 $("#selectbasicdata"+index).html(li);
				 
				 
				 setTimeout(() => {
						
						$('#searchbasicfilter'+index).keyup(function(){
				
			    var searchText = $(this).val();
			    
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
 
function searchboxOpen(index){
	if($("#searchbasicfilter"+index).hasClass("visibility-classremove") || $("#searchbasicfilter"+index).hasClass("visibility-class"))
	{
		$("#searchbasicfilter"+index).toggleClass("visibility-classremove");
		$("#searchbasicfilter"+index).toggleClass("visibility-class");	
	}	
}

 function selectCheckbox(basicFilter_){
	 
		for (var x=0 ; x<=basicFilter_.length ; x++)
			{
							    					
			var basicFilter_value = basicFilter_[0][x].BasicFilterValue;
			
			var allselectcheckbox_ = $('#allcheck'+x).val();//$("#allcheck0").val();//$("#allcheck0").val();$(".element-classname").text();
						
			}
 }

 
/////-------------------Build Basic Filter 


 
function selectBasicFilter(tablename_ ,index ){
	var Field_Basic="";
	var Field_Basicarr =[];
	var each_inc = 0;
	var dropzonefilter_index_ = 0;
	
	 var listofdimsfilter = $('div.dropzoneselect');
	 var i = listofdimsfilter.length;
	
	selectcount = index;
	
	console.log("basic_filter_field   selectBasicFilter   ##########::::::  "+basic_filter_field);
	
	
	
	Field_Basic  =  basic_filter_field;
	
//	for(m =0; m<listofdimsfilter.length ; m++)
//		{
//		Field_Basic = $('.dropzonefilter.ui-droppable').children().eq(m).attr('data-field');
//		if(Field_Basic != "" )
//			{
//			Field_Basic_ =Field_Basic;
//			break;
//			}
//		else
//			{
//			continue;
//			}
//		
//		}
		

		 //Field_Basic = $('.dropzonefilter.ui-droppable').children().eq(dropzonefilter_index_).attr('data-field');
		 console.log("Field_Basic_##########::::::  "+Field_Basic);

	var numberofrows_basic = $('#numberofrows_basic'+index).val();
	
	console.log("numberofrows_basic  selectBasicFilter  ##########::::::  "+numberofrows_basic);
	

	var selectbasicfilter="";
	var li="";	
	$.ajax({method : "POST",					
		url : "./selectbasicfilter",
		data : {
			field : Field_Basic,
			tablename : tablename_,
			numberofrows_Basic : numberofrows_basic,
		},
		success : function(result) {
			NProgress.done(true);
			
			var basicFilterData ="";
		    basicresult_length = result.length;
			
		    console.log("selectcount::::::  "+selectcount);

			$("#selectbasicdata"+selectcount).empty();
			for(var v=0;v<result.length;v++)
			{
				basicFilterData = result[v].basicFilterFieldData;
				
				selectbasicfilter+="<li class='searchtext"+selectcount+"'><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='allcheck"+v+"' data-id = 'allcheckfalse' onclick='checkedBasicFilter("+v+" , "+selectcount+")' value='"+basicFilterData+"' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus allselectcheckbox allcheck"+selectcount+"'  autocomplete='off' ><span class='css-a2zrvp'></span><span class='css-a3753h-Label text-overflow' title='"+basicFilterData+"' style='max-width:100px;display:block'> "+basicFilterData+" </span></label></div></div> </div></li>"
	
			}
	
			li+="<li><div class='cb-range-form-div'><div class='cb-input-css align-items-center'><input type='text' class='form-control searchbasicfilter me-2 visibility-class' placeholder='search ....' id='searchbasicfilter"+selectcount+"' onkeyup='searchonkey("+selectcount+")'><i class='fa fa-search me-2 cb-cursor' aria-hidden='true' id='openSearchbox' onclick='searchboxOpen("+selectcount+")'></i></div></div></li><li><div class='cb-range-Label'><div class='form-inline'><div class='cb-form'><label class='css-12xei9w'><input type='checkbox' id='chkLocal"+selectcount+"' onclick='checkall("+selectcount+", this.checked)' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' autocomplete='off'><span class='css-a2zrvp'></span><span class='css-a3753h-Label'>  Select All</span></li>"+selectbasicfilter;
			
			$("#selectbasicdata"+selectcount).html(li);
			
			selectcount++;
			 var dropzone_length = $('.dropzonefilter').children().length;
			    selectcount = dropzone_length;
	},
	error : function(data) {
		NProgress.done(true);
		console.log(data);
	}
});
	dropzonefilter_index_++;
 }


  function checkedBasicFilter(index ,index1)
  {
	  
	  console.log(index  +" ### "+index1);
	  
	  if ($("#allcheck"+index).is(':checked'))
		{		
		 $("#btnChart").trigger("click");
		}
	  else  
      {
		  if ($("#chkLocal"+index1).is(':checked'))
		  {
			   $("#chkLocal"+index1).prop("checked", false);
			 
			   setTimeout(() => {
				   $("#btnChart").trigger("click");
			   	}, 300);
		  }
		  else 
		  {
			    $("#btnChart").trigger("click");
		  }
	  }
	  
  }
  

	
	//originally used
	function table_(lists) 
	{
		
		$("#column-cards").empty();
		
		for (var i = 0; i < lists.length; i++) 
		{
		 	var obj = lists[i];
//		 	console.log(obj.colname);
//		 	console.log(obj.symbol);
//		 	console.log(obj.datatype);
		 	
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
        
	}
    $('nav ul li').on('shown.bs.tab', function (e) 
    {
    	
            var target = $(e.currentTarget).attr("id") // activated tab          

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
			$.notify("Please select table!","info");
			//alert("Please select table!");
			return;
		}
		
    	$("#descriptiopoup").show();
    	$("#wrapper").addClass("toggled");
    	
    	
//    	if(dashboard_title != "" || selectedtabname != "")
//    		{
//    		$("div.dashboardlistData select").val(dashboard_title);
//        	$("div.tablistData select").val(selectedtabname);
//    		}
//    	else
//    		{
    		getDashboardlist();
//    		}
    	
    	
    	
    	
    	
    	
//    	getDashboardlist();
    	
    }
	
    function closeModal()
    {
    	$("#descriptiopoup").hide()
    }
    function openDataset()
    {
    	//https://marketplace.eclipse.org/marketplace-client-intro?mpc_install=1549
    	$("#selectdimension").show();
    	getTablelist();
    	$("#datasourcesearch").val("");
    	$("#user_by").val("select");
    	$("#user_name").val("");
    	
    	$("#wrapper").addClass("toggled");
    }
    function closeDataset()
    {
    	
    	if (globalselectedtabnlename =="")
    	{
    		
    		$("#selectdimension").hide();
    	}
    	else 
    	{
    	   	$("#selectdimension").hide();
    	   	
    	}
     
    }
    
var basic_filter_field = "";
   function onChangedata(index ,tablename_ ,field){
	  

		if ($("#select_option"+index).val() == "adv"){
			$("#optiondivselect"+index).show();
			$("#basicselectdiv"+index).hide();
			$("#topnselectdiv"+index).hide();
			$("#basicfiltercheck"+index).hide();
			$("#numberofrowsdivs_basic"+index).hide();
		}
		else if ($("#select_option"+index).val() == "basicfiltering"){
			
			basic_filter_field =field ;
			$("#optiondivselect"+index).hide();
			$("#basicselectdiv"+index).show();
			selectBasicFilter(tablename_ ,index );
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
		
		$("#opencartyaxis"+index).fadeToggle( "fast");
		
	}
	function closeDropCartyaxis(index,event)
	{
		
		$("#opencartyaxis"+index).hide();
		
	}
	
	$(document).click(function()
			{
		
	});
	function ischeckedfn(value,index)
	  {
		
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
		
		var aggval = $("#aggregateval"+index).val();
		console.log("aggval::::: "+aggval);
		$("#yaxisdivtext"+index).html(aggval);
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

		if(radiocheck =="tonradio"+index+"" )
		{
			if($("#displaytopvalue"+index).val()==''){
				
				$.notify("Please fill","info");
				
				//alert("please fill");
				//$("#dropdownshowyaxis").html("topn");
			}
			else
			{
				
				$("#opencartyaxis"+index).hide();
				$("#yaxisdivtext"+index).html("topn");
			}
		}
		else if(radiocheck =="aggregateradio"+index+"")
		{
			
			$("#opencartyaxis"+index).hide();
//			$("#yaxisdivtext"+index).html("Aggregate");
			$("#yaxisdivtext"+index).html(aggval);
		}

		$("#btnChart").trigger("click");
				
	  }
	function openDropCart(index,event) 
	{

	 $("#opencart"+index).fadeToggle( "fast");
	 bintype(index);
	 event.stopPropagation();
	
	}
	
	function closeDropCart(index,event)
	{

	 $("#opencart"+index).hide();
	 event.stopPropagation();
	  
	 }
	$(document).click(function(){
	
	   // $(".cb-xaxisdiv").hide();
	});
	
	function bintype(index)
	{				
		if($("#bintype"+index).val()=="binsize")
		{	
					
			$("#binsize"+index).attr('disabled', false);
			$("#bincount"+index).val("");
			$("#bincount"+index).attr('disabled', true);
		}
		else if($("#bintype"+index).val()=="binnumber"){
			
			$("#bincountdiv"+index).show();
			
			$("#bincount"+index).attr('disabled', false)
			$("#binsize"+index).val("");
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
			
			$.notify("Please fill bin","info");
			//alert("please fill bin");
		}
		else{
//			$("#opencart"+index).hide();
			$("#opencart"+index).hide();
			 event.stopPropagation();
			$("#xaxisdivtext"+index).html("Bin Type");
		}
		
        binX1 = 1;
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
  	
  	 $("#btnChart").trigger("click");
    }
    
    function displaytopvaluekeyup(index){
    	
    	  var displaytopvalue=$("#displaytopvalue"+index).val();
    	
    	  $("#btnChart").trigger("click");
      }
    
    function filtervaluekeyup(index){
    	
    	  var displaytopvalue=$("#filtervalueid"+index).val();    
    	  
    	  if(displaytopvalue !="")
    	  {
    	   	  $("#btnChart").trigger("click");
    	  }
    	  
       }
    function filterinvaluekeyup(index){
    	
    	  var displaytopvalue=$("#filterinvalueid"+index).val();
    	
    	  $("#btnChart").trigger("click");
      }
		function topninput(index){
	    	
	    	  var displaytopvalue=$("#topninput"+index).val();
	    	
	    	  $("#btnChart").trigger("click");
	      }
		
		function showitemvalue(value,index){
						
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

    $('#dashboardlistData > li').each(function(){
    	

        var currentLiText = $(this).text(),
            showCurrentLi = currentLiText.toUpperCase().indexOf(searchText.toUpperCase()) !== -1;

        $(this).toggle(showCurrentLi);

    });     
});
$('#searchtableddata').keyup(function(){
	

    var searchText = $(this).val();
 

    $('#tablistData > li').each(function(){
    	

        var currentLiText = $(this).text(),
            showCurrentLi = currentLiText.toUpperCase().indexOf(searchText.toUpperCase()) !== -1;

        $(this).toggle(showCurrentLi);

    });     
});



function resetSelection()
{
	dashboard_title = "";
	selectedtabid=0;
	dashTabName="";
	selectedtabname ="";
	globaldashid =0;
	
	
	
	
	$("#chartNametxt").val("");
	
//	$("div.dashboardlistData select").val("select");
	
	$("#dashboardlistData").val("select");
	
//	$("div.tablistData select").val("select");
	
	$("#tablistData").val("select");

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




//
//var displayvalue="<div class='settingselectdiv'>"
//	+"<div>"
//	+"<div class='cb-range-Label d-none'><div class='form-inline'>"
//	+"<div class='cb-form'>"
//	+"<label class='css-12xei9w'>"
//	+"<input type='checkbox' id='displaychat' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' autocomplete='off'>"
//	+"<span class='css-a2zrvp'></span>"
//	+"<span class='css-a3753h-Label'>  Display value in chart</span>"
//	+"</label>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"<div class='cb-range-form-div d-none'>"
//	+"<div class='cb-range-Label'>"
//	+"<span class='label'><div class='cb-range-text'>Display legend</div></span>"
//	+"<div>"
//	+"<div class='cb-input-css' >"
//	+"<select class='form-control' id='displaylegend' name='displaylegend'>"
//	+"<option value='sidebar'>In the sidebar</option>"
//	+"<option value='nexttochart'>Next to chart</option>"
//	+"<option value='inchart'>In chart</option>"
//	+"</select>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"<div class='cb-range-form-div d-none'>"
//	+"<div class='cb-range-Label'>"
//	+"<span class='label'><div class='cb-range-text'>Placement</div></span>"
//	+"<div>"
//	+"<div class='cb-input-css'>"
//	+"<select class='form-control' id='placement' name='placement'>"
//	+"<option value='top'>Top</option>"
//	+"<option value='bottom'>Bottom</option>"
//	+"<option value='left'>Left</option>"
//	+"<option value='right'>Right</option>"
//	+"</select>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"<div class='cb-range-form-div'>"
//	+"<div class='cb-range-Label'>"
//	+"<div class='form-inline'>"
//	+"<div class='cb-form'>"
//	+"<label class='css-12xei9w'>"
//	+"<input type='checkbox' id='limitvalue' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' autocomplete='off'>"
//	+"<span class='css-a2zrvp'></span>"
//	+"<span class='css-a3753h-Label'>  Limit Value</span>"
//	+"</label>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"<div class='cb-range-form-div' id='numberofrowsdivs' style='display:none;'>"
//	+"<div class='cb-range-Label'>"
//	+"<span class='label'><div class='cb-range-text'>Number of rows</div></span>"
//	+"<div>"
//	+"<div class='cb-input-css'>"
//	+"<select class='form-control' id='numberofrows_' name='numberofrows_'>"
//	+"<option value='1000'>1000</option>"
//	+"<option value='2000'>2000</option>"
//	+"<option value='5000'>5000</option>"
//	+"<option value='10000'>10000</option>"
//	+"</select>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"<div class='cb-range-form-div' id='numberofrowsdiv' style='display:none;'>"
//	+"<div class='cb-range-Label'>"
//	+"<input type='number' list='numberlist' id='numberofrows' name='numberofrows' class='form-control' value='1000' min='5' max='50000'/>"
//	+"<datalist id='numberlist'>"
//	+"<option value='5000'>5000</option>"
//	+"<option value='10000'>10000</option>"
//	+"<option value='25000'>25000</option>"
//	+"<option value='50000'>50000</option>"
//	+"</datalist>"
//	+"</div>"
//	+"</div>"
//	+"<div class='cb-range-form-div'>"
//	+"<div class='cb-range-Label'>"
//	+"<span class='label'><div class='cb-range-text'>Toggle between Dark & Light</div></span>"
//	+"</div>"
//	+"<div class='form-inline'>"
//	+"<div class='cb-form'>"
//	+"<div class='cb-form-switch cb-light'>"
//	+"<div class='css-wtrf37 cb-focus'>"
//	+"<input type='checkbox' id='switch-3'   onclick='toggleTheme()'>"
//	+"<label for='switch-3'></label>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"<div class='cb-range-form-div'  id='tarvaluediv' style='display:none;'>"
//	+"<div class='cb-range-Label'>"
//	+"<span class='label'><div class='cb-range-text'>Target Value</div></span>"
//	+"<div>"
//	+"<div class='d-flex align-items-center'>"
//	+"<input type='number' class='form-control' id='target_value' name='target_value' value='0'>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"<div class='cb-range-form-div' id='fromTodiv' style='display:none;'>"
//	+"<div class='d-flex'>"
//	+"<div class='cb-range-form-div'>"
//	+"<div class='cb-range-Label'>"
//	+"<span class='label'><div class='cb-range-text'>From</div></span>"
//	+"<div>"
//	+"<div class='cb-input-css'>"
//	+"<input type='number' class='form-control' id='from_first' name='from_first' value='0'>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"<div class='cb-range-form-div'>"
//	+"<div class='cb-range-Label'>"
//	+"<span class='label'><div class='cb-range-text'>To</div></span>"
//	+"<div>"
//	+"<div class='cb-input-css'>"
//	+"<input type='number' class='form-control' id='to_first' name='to_first' value='1000'>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"<div class='cb-range-form-div' id='display_firstcolor'>"
//	+"<div class='cb-range-Label'>"
//	+"<span class='label'><div class='cb-range-text'>Color</div></span>"
//	+"<div>"
//	+"<div class='d-flex align-items-center'>"
//	+"<input type='color'  id='color_first' name='color_first'  value=''>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"<hr>"
//	+"<div class='d-flex'>"
//	+"<div class='cb-range-form-div'>"
//	+"<div class='cb-range-Label'>"
//	+"<span class='label'><div class='cb-range-text'>From</div></span>"
//	+"<div>"
//	+"<div class='cb-input-css'>"
//	+"<input type='number' class='form-control' id='from_second' name='from_second' value='1000'>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"<div class='cb-range-form-div'>"
//	+"<div class='cb-range-Label'>"
//	+"<span class='label'><div class='cb-range-text'>To</div></span>"
//	+"<div>"
//	+"<div class='cb-input-css'>"
//	+"<input type='number' class='form-control' id='to_second' name='to_second' value='2000'>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"<div class='cb-range-form-div' id='display_secondcolor'>"
//	+"<div class='cb-range-Label'>"
//	+"<span class='label'><div class='cb-range-text'>Color</div></span>"
//	+"<div>"
//	+"<div class='d-flex align-items-center'>"
//	+"<input type='color'  id='color_second' name='color_second' value=''>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"<hr>"
//	+"<div class='d-flex'>"
//	+"<div class='cb-range-form-div'>"
//	+"<div class='cb-range-Label'>"
//	+"<span class='label'><div class='cb-range-text'>From</div></span>"
//	+"<div>"
//	+"<div class='cb-input-css'>"
//	+"<input type='number' class='form-control' id='from_third' name='from_third' value='2000'>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"<div class='cb-range-form-div'>"
//	+"<div class='cb-range-Label'>"
//	+"<span class='label'><div class='cb-range-text'>To</div></span>"
//	+"<div>"
//	+"<div class='cb-input-css'>"
//	+"<input type='number' class='form-control' id='to_third' name='to_third'  value='3000'>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"<div class='cb-range-form-div'  id='display_thirdcolor'>"
//	+"<div class='cb-range-Label'>"
//	+"<span class='label'><div class='cb-range-text'>Color</div></span>"
//	+"<div>"
//	+"<div class='d-flex align-items-center'>"
//	+"<input type='color'  id='color_third' name='color_third' value=''>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"<div class='cb-range-Label cb-button-layout' style='display:none;' id='ApplyfromTo'>"
//	+"<button class='me-2 cb-primary' id='fromtofunction_' onclick='fromTofunction_()'  title='Apply'>Apply</button>"
//	+"<button class='cb-primary' title='Reset' id ='resetselectionfromTofunction_' onclick='resetSelection_fromTofunction_()'><i class='fa fa-refresh' aria-hidden='true'></i></button>"
//	+"</div>"	
//	+"</div>"
//	+"</div>";

//$("#fromtofunction_").trigger('click');
//$("#fromtofunction_").click(function() {
//	
//	
//	

//	
//});



var displayvalue="<div class='settingselectdiv'>"
	+"<div>"
	+"<div class='cb-range-Label d-none'><div class='form-inline'>"
	+"<div class='cb-form'>"
	+"<label class='css-12xei9w'>"
	+"<input type='checkbox' id='displaychat' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' autocomplete='off'>"
	+"<span class='css-a2zrvp'></span>"
	+"<span class='css-a3753h-Label'>  Display value in chart</span>"
	+"</label>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div class='cb-range-form-div d-none'>"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>Display legend</div></span>"
	+"<div>"
	+"<div class='cb-input-css'>"
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
	+"<div class='cb-range-form-div'  id='tarvaluediv' style='display:none;'>"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>Target Value</div></span>"
	+"<div>"
	+"<div class='d-flex align-items-center'>"
	+"<input type='number' class='form-control' id='target_value' name='target_value' value='0'>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div class='cb-range-form-div' id='fromTodiv' style='display:none;'>"
	+"<div class='d-flex align-items-center'>"
	+"<div class='cb-range-form-div'>"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>From</div></span>"
	+"<div>"
	+"<div class='cb-input-css'>"
	+"<input type='number' class='form-control me-1' id='from_first' name='from_first' value='0' disabled>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div class='cb-range-form-div'>"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>To</div></span>"
	+"<div>"
	+"<div class='cb-input-css'>"
	+"<input type='number' class='form-control me-1' id='to_first' name='to_first' value='1000' onblur='gaugeblur() '>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div class='cb-range-form-div' id='display_firstcolor'>"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>Color</div></span>"
	+"<div>"
	+"<div class='d-flex align-items-center'>"
	+"<input type='color'  id='color_first' name='color_first'  value='#55BF3B'>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"	
	+"<hr>"
	+"<div class='d-flex align-items-center'>"
	+"<div class='cb-range-form-div'>"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>From</div></span>"
	+"<div>"
	+"<div class='cb-input-css'>"
	+"<input type='number' class='form-control me-1' id='from_second' name='from_second' value='1000'  disabled onblur='gaugeblur()'>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div class='cb-range-form-div'>"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>To</div></span>"
	+"<div>"
	+"<div class='cb-input-css'>"
	+"<input type='number' class='form-control me-1' id='to_second' name='to_second' value='2000' onblur='gaugeblur()'>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div class='cb-range-form-div' id='display_secondcolor'>"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>Color</div></span>"
	+"<div>"
	+"<div class='d-flex align-items-center'>"
	+"<input type='color'  id='color_second' name='color_second' value='#DDDF0D' >"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"	
	+"<hr>"
	+"<div class='d-flex align-items-center'>"
	+"<div class='cb-range-form-div'>"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>From</div></span>"
	+"<div>"
	+"<div class='cb-input-css'>"
	+"<input type='number' class='form-control me-1' id='from_third' name='from_third' value='2000' disabled onblur='gaugeblur()'>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div class='cb-range-form-div'>"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>To</div></span>"
	+"<div>"
	+"<div class='cb-input-css'>"
	+"<input type='number' class='form-control me-1' id='to_third' name='to_third'  value='3000' max='2147483647' onblur='gaugeblur()'>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div class='cb-range-form-div'  id='display_thirdcolor'>"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>Color</div></span>"
	+"<div>"
	+"<div class='d-flex align-items-center'>"
	+"<input type='color'  id='color_third' name='color_third' value='#DF5353'>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"	
	+"</div>"
	+"<div class='cb-range-Label cb-button-layout' style='display:none;' id='ApplyfromTo'>"
	+"<button class='me-2 cb-primary' id='fromtofunction_' onclick='fromTofunction_()' disabled  title='Apply'>Apply</button>"
	+"<button class='cb-primary' title='Reset' id ='resetselectionfromTofunction_' onclick='resetSelection_fromTofunction_()'><i class='fa fa-refresh' aria-hidden='true'></i></button>"
	+"</div>"	
	+"</div>"
	+"<div class='DataMapping_column-card__2VBWp dropzoneselect cb-cursor' id='properties_div' style='position:relative;min-height:auto'>"
	+"<span>Properties</span>"
	+"<span class='' style='text-align: -webkit-right;position:absolute;right:14px;top:13px;'><a class='chart-accordion' data-bs-toggle='collapse' data-bs-target='#chart_settings' ><i class='fa fa-caret-down' aria-hidden='true'></i></a></span>"
	+"<div id='chart_settings' class='collapse'>"
	+"<div class='cb-range-form-div mt-2' id ='legend_placement_div' >"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>Legend Placement</div></span>"
	+"<div>"
	+"<div class='cb-input-css'>"
	+"<select class='form-control' id='placement' name='placement'>"
	+"<option value='select'> --select--  </option>"
	+"<option value='top left'>Top Left</option>"
	+"<option value='top right'>Top Right</option>"
	+"<option value='top center'>Top Center</option>"
	+"<option value='bottom left'>Bottom Left</option>"	
	+"<option value='bottom right'>Bottom Right</option>"
	+"<option value='bottom center'>Bottom Center</option>"
	+"<option value='middle left'>Middle Left</option>"
	+"<option value='middle right'>Middle Right</option>"
	+"<option value='middle center'>Middle Center</option>"
	+"</select>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div class='cb-range-form-div'  id ='x-axis_labeldiv' >"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text' id='label_rotation_change'>X-axis Label Rotation</div></span>"
	+"<div>"
	+"<div class='cb-input-css'>"
	+"<select class='form-control' id='label_rotation' name='label_rotation'>"
	+"<option value='0'>0</option>"
	+"<option value='10'>10</option>"
	+"<option value='-10'>-10</option>"
	+"<option value='45'>45</option>"
	+"<option value='-45'>-45</option>"
	+"<option value='60'>60</option>"
	+"<option value='-60'>-60</option>"
	+"<option value='90'>90</option>"
	+"<option value='-90'>-90</option>"
	+"<option value='180'>180</option>"
	+"<option value='-180'>-180</option>"
	+"</select>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div class='cb-range-form-div' id ='y-axis_labeldiv'>"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>Y-axis Label Rotation</div></span>"
	+"<div>"
	+"<div class='cb-input-css'>"
	+"<select class='form-control' id='y_label_rotation' name='y_label_rotation'>"
	+"<option value='0'>0</option>"
	+"<option value='10'>10</option>"
	+"<option value='-10'>-10</option>"
	+"<option value='45'>45</option>"
	+"<option value='-45'>-45</option>"
	+"<option value='60'>60</option>"
	+"<option value='-60'>-60</option>"
	+"<option value='90'>90</option>"
	+"<option value='-90'>-90</option>"
	+"<option value='180'>180</option>"
	+"<option value='-180'>-180</option>"
    +"</select>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div class='cb-range-form-div ' id='zoomtype_div'>"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>Data Zoom Type</div></span>"
	+"<div>"
	+"<div class='cb-input-css'>"
	+"<select class='form-control' id='zoom_type' name='zoom_type'>"
	+"<option value='select'> --select--  </option>"
	+"<option value='X'>X</option>"
	+"<option value='Y'>Y</option>"
	+"<option value='XY'>XY</option>"
	+"</select>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<hr>"
	+"</div>"
	+"<div class='d-flex' id= 'toggle_div'>"
	+"<div class='cb-range-form-div me-3' id='data_labels_div'>"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>Data Labels</div></span>"
	+"<div class='form-inline'>"
	+"<div class='cb-form'>"
	+"<div class='cb-form-switch cb-light'>"
	+"<div class='css-wtrf37 cb-focus'>"
	+"<input type='checkbox' id='data_labels'>"
	+"<label for='data_labels'></label>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div class='cb-range-form-div' id='chart_flip_div'>"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>Chart Flip</div></span>"
	+"<div class='form-inline'>"
	+"<div class='cb-form'>"
	+"<div class='cb-form-switch cb-light'>"
	+"<div class='css-wtrf37 cb-focus'>"
	+"<input type='checkbox' id='chart_flip'>"
	+"<label for='chart_flip'></label>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div id = 'color_div'>"
	+"<div class='d-flex'>"
	+"<div class='cb-range-form-div me-3 ' >"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>Data Labels Color</div></span>"
	+"<div>"
	+"<div class='cb-input-css'>"
	+"<input type='color'  id='font_color' name='font_color' value='#d8d9da' >"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"	
	+"<div class='cb-range-form-div d-none ' id = 'data_bar_div'>"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>Databar Color</div></span>"
	+"<div>"
	+"<div class='cb-input-css'>"
	+"<input type='color'  id='data_bar' name='data_bar' value='#d8d9da' >"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div id = 'data_bar_div1'>"
	+"</div>"	
	+"</div>"
	+"<hr>"
	+"</div>"
	+"<div class='cb-range-form-div' id = 'value_conversion_div'>"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>Values Conversion</div></span>"
	+"<div>"
	+"<div class='cb-input-css'>"
	+"<select class='form-control' id='value_conversion' name='value_conversion'>"
	+"<option value='select'> --select--  </option>"
	+"<option value='10'>10</option>"
	+"<option value='100'>100</option>"
	+"<option value='1000'>1000</option>"
	+"<option value='10000'>10000</option>"
	+"<option value='100000'>100000</option>"
	+"<option value='1000000'>1000000</option>"
	+"<option value='10000000'>10000000</option>"
	+"<option value='100000000'>100000000</option>"
	+"<option value='1000000000'>1000000000</option>"
	+"<option value='10000000000'>10000000000</option>"
	+"</select>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div class='cb-range-form-div' id='title_alignment_div'>"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>Title Alignment</div></span>"
	+"<div>"
	+"<div class='cb-input-css '>"
	+"<select class='form-control' id='title_alignment' name='title_alignment'>"
	+"<option value='select'> --select--  </option>"
	+"<option value='Left'>Left</option>"
	+"<option value='Right'>Right</option>"
	+"<option value='Center'>Center</option>"
	+"</select>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
//	+"<div class='cb-range-form-div' id='opacity_div'>"
//	+"<div class='cb-range-Label'>"
//	+"<span class='label'><div class='cb-range-text'>Opacity</div></span>"
//	+"<div>"
//	+"<div class='cb-input-css '>"
//	+"<input type='range' class='ms-1' id='opacity' name='opacity' value='1' min='0' max='1' step='0.1'>"
//	+"<p id='opacity_value'> 1 </p>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
//	+"</div>"
	+"<hr>"
	+"<div class='cb-range-form-div' id='prefix_div'>"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>Prefix</div></span>"
	+"<div>"
	+"<div class='cb-input-css '>"
	+"<input type='text' class='form-control' id='prefix' name='prefix' value=''>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div class='cb-range-form-div' id='suffix_div'>"
	+"<div class='cb-range-Label'>"
	+"<span class='label'><div class='cb-range-text'>Suffix</div></span>"
	+"<div>"
	+"<div class='cb-input-css '>"
	+"<input type='text' class='form-control' id='suffix' name='suffix' value=''>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div class='cb-range-form-div' id='categories_checkbox_div'>"
	+"<div class='cb-range-Label'>"
	+"<div class='form-inline'>"
	+"<div class='cb-form'>"
	+"<label class='css-12xei9w'>"
	+"<input type='checkbox' id='categories_check' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' autocomplete='off'>"
	+"<span class='css-a2zrvp'></span>"
	+"<span class='css-a3753h-Label'>  X-axis Categories</span>"
	+"</label>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div class='cb-range-form-div' id='Label_checkbox_div'>"
	+"<div class='cb-range-Label'>"
	+"<div class='form-inline'>"
	+"<div class='cb-form'>"
	+"<label class='css-12xei9w'>"
	+"<input type='checkbox' id='label_check' class='css-1alx94u form-control mb-2 mr-sm-2 mb-sm-0 cb-focus' autocomplete='off'>"
	+"<span class='css-a2zrvp'></span>"
	+"<span class='css-a3753h-Label'>  X-axis Label</span>"
	+"</label>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"<div class='cb-range-Label cb-button-layout'>"
	+"<button class='cb-primary' id='save_properties' onclick='getlegend_position()'>Save</button>"
	+"<button class='cb-primary' onclick='resetSelection_properties()'>Reset</button>"
	+"</div>"
	+"</div>"
	+"</div>"
	+"</div>";



	
    function fromTofunction_()
    {    	
	     fromTofunction = 1;	
    	$("#btnChart").trigger("click");  

    }
    
    function resetSelection_fromTofunction_()
    {
    	 fromTofunction = 0;	
    	 $("#from_first").val(0);
    	 $("#to_first").val(1000);
    	 $("#color_first").val("#55BF3B");
    	 $("#from_second").val(1000);
    	 $("#to_second").val(2000);
    	 $("#color_second").val("#DDDF0D");
    	 $("#from_third").val(2000);
         $("#to_third").val(3000);
    	 $("#color_third").val("#DF5353");
    	 $("#target_value").val(0);
    	 
    	 $("#btnChart").trigger("click");  
    	
    }

	$("#displayvalue").html(displayvalue);
	
	 $("#switch-3").prop('checked' , false);
	
	
	$("#limitvalue").change(function() {
		
		if(edit_ModeFlag == 1)
			{
			if(custom_userlimit == 1)
				{
				if($("#limitvalue").prop('checked')) {
			         
			             $("#numberofrowsdiv").show();
			        } else {
			           
			             $("#numberofrowsdiv").hide();
			             $("#numberofrows").val(1000); 
			             $("#btnChart").trigger("click");
			        }
				
				}
			else
				{
				custom_userlimit =0;
				if($("#limitvalue").prop('checked')) {
			          
			             $("#numberofrowsdiv").show();
			        } else {
			            
			             $("#numberofrowsdiv").hide();
			             $("#numberofrows").val(1000); 
			             $("#btnChart").trigger("click");
			        }
				}
			
			}							
	   else
		{
			custom_userlimit =0;
	        if($("#limitvalue").prop('checked')) {
	         
	             $("#numberofrowsdiv").show();
	        } else {
	         
	             $("#numberofrowsdiv").hide();
	             $("#numberofrows").val(1000); 
	             $("#btnChart").trigger("click");
	        }
			
		}
		
	    });
	
	
	$("#numberofrows").change(function() {
		custom_userlimit = 1;

		var userlimit=$("#numberofrows").val();
	
		console.log('userlimit:numberofrows::'+userlimit);	
		$("#btnChart").trigger("click");
	});
	
	
	$("#numberofrows").on('change', function(e) {
			
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

	$("#numberofrows_basic").on('blur', function(e) 
	  {
			
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
	
	function checkall(index, isChecked)
	{
	     if(isChecked) {
	    	     
	    	 $(".allselectcheckbox.allcheck"+index).each(function() { 	   
	    
	    this.checked = true; 
	   
	    });
	    } else {
	    	 $(".allselectcheckbox.allcheck"+index).each(function() { 
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
		
		console.log("index   limitbasicvalue    "+index);
//		setTimeout(() => {
			//var field = $("#limitvalue_basic"+index).parent().parent().parent().parent().parent().parent().parent().parent().attr('data-field');
		var field = $("#collapseOne"+index).parent().parent().attr('data-field');
		
		basic_filter_field = field;
			
//		}, 200); 
		
		console.log("basic_filter_field   limitbasicvalue    "+basic_filter_field);
		
		if($("#limitvalue_basic"+index).prop('checked')) {
		       
		             $("#numberofrowsdivs_basic"+index).show();
		        } else {
		           
		             $("#numberofrowsdivs_basic"+index).hide();
		             $("#numberofrows_basic"+index).val(1000); 
		             
		             
		             setTimeout(() => {
		            	 selectBasicFilter(globalselectedtabnlename ,index);
					}, 300);
		             
		             
		            
		        }
		}
		
	
	
	function searchonkey(index){
	
	    var searchText = $('#searchbasicfilter'+index).val();
	 

	    $('.searchtext'+index).each(function(){    
 
	        var currentLiText = $(this).text(),
	            showCurrentLi = currentLiText.toUpperCase().indexOf(searchText.toUpperCase()) !== -1;

	        $(this).toggle(showCurrentLi);

	    });  
		
	}

	function onchangeNumberofrows_basic(index)
	{
//		console.log("index   onchangeNumberofrows_basic    "+index);
//		setTimeout(() => {
//			var field = $("#limitvalue_basic"+index).parent().parent().parent().parent().parent().parent().parent().parent().attr('data-field');
//			basic_filter_field = field;
//			
//		}, 200); 
//		
//		console.log("basic_filter_field  onchangeNumberofrows_basic   "+basic_filter_field);
		
			console.log('onchangeNumberofrows_basic index:::'+index);	
		    selectBasicFilter(globalselectedtabnlename,index);

	}
	
	
	
	function axis_delete(index)
	{
//	alert(   "axis_delete     index  "+index);
		$("#remove"+index).parent().parent('div').remove();
			
		$("#btnChart").trigger('click');
		
		$("#container1").empty();
		$("#btnChart").trigger('click');
		
		$("#singlevaluediv").hide();
		
		
	}
	
	function yaxis_delete(index)
	{
//		alert(   "yaxis_delete     index  "+index);
		$("#removey"+index).parent().parent('div').remove();
			
		$("#btnChart").trigger('click');
		
		$("#container1").empty();
		$("#btnChart").trigger('click');
		
		$("#singlevaluediv").hide();
//		indexi --;
		
	}
	
	
	function filter_delete(index)
	{
//		alert("remove_filter index  "+index);
		$("#remove_filter"+index).parent().parent('div').remove();
			
		
		setTimeout(() => {
			$("#btnChart").trigger('click');
		}, 100);
		
		
		
		$("#container1").empty();
		

		setTimeout(() => {
			$("#btnChart").trigger('click');
		}, 100);
		
		
		
		
		$("#singlevaluediv").hide();
		
		filter_list = filter_list.filter(item => item !== index)
		
		
//		filter_list.pop(index);
		
		console.log("filter_list----remove-----" + filter_list);
		
//		filterfields();
		
		
//		if	($('.dropzone.ui-droppable').children().length == 0 )
//			{
//				accordianind = 0;
//			}
//		else
//			{
//               if(accordianind >0)
//            	   {
//            	   accordianind -1;
//            	   }
//               else
//            	   {
//            	   accordianind = 0;
//            	   }
//			
//			
//			}

		
	}
	
	
	
	function gaugeblur()
	{
		
		var from_first= $("#from_first").val();
		var to_first= $("#to_first").val();
		var from_second = $("#from_second").val();
		var to_second = $("#to_second").val();
		var from_third = $("#from_third").val();
		var to_third = $("#to_third").val();
		
		if($("#to_first").val() <= $("#from_first").val())
		{
			$("#to_first").notify("Please enter value greater than To value");
			$("#to_first").val(1000);
			return;
		}
		
		if(($("#from_second").val() > $("#to_first").val()) || ($("#from_second").val() < $("#to_first").val()))
		{			
			$("#from_second").val($("#to_first").val());			
			return;
		}
		
		if(($("#from_third").val() > $("#to_second").val()) || ($("#from_third").val() < $("#to_second").val()))
		{

			if( parseInt($("#to_second").val()) <= parseInt( ($("#from_second").val()))   ) 
			{
				
				$("#to_second").notify("Please enter greater value than from");
				return;
			}

			$("#from_third").val($("#to_second").val());	
			
			
			return;
		}	
		
		if(($("#from_third").val() > $("#to_third").val()) || ($("#from_third").val() < $("#to_second").val()))
		{
			if( parseInt($("#to_second").val()) <= parseInt( ($("#from_second").val()))   ) 
			{
				
				$("#to_second").notify("Please enter greater value than from");
				return;
			}

			$("#from_third").val($("#to_second").val());	
			
			
			return;
			
		}
		
		
		
		
		if(($("#to_third").val() <= $("#from_first").val()) || ($("#to_third").val() <= $("#to_first").val()) 
		|| ($("#to_third").val() <= $("#from_second").val()) || ($("#to_third").val() <= $("#to_second").val())
		|| ($("#to_third").val() <= $("#from_third").val()))
		{

			
			$("#to_third").notify("Please enter greater value");
		
			return;
		}		
	
	
    }
	
	
	
	
	function discardChanges()
	{
		
		if(edit_ModeFlag == 1)
			{
			
			$("#discard_changes").prop("disabled" , true);
			
			}
		else
			{
			var chartNametxt = $("#chartNametxt").val();
			var dashboardlistData = $("#dashboardlistData").val();
			var tablistData = $("#tablistData").val();
			
			console.log("chartNametxt  "+chartNametxt);
			console.log("dashboardlistData  "+dashboardlistData);
			console.log("tablistData  "+tablistData);
			
			
			if(chartNametxt != "")
				{
				$("#discard_changes").prop("disabled" , false);
				}
			
			if(dashboardlistData != "")
			{
			$("#discard_changes").prop("disabled" , false);
			}
		
			if(tablistData != "")
			{
			$("#discard_changes").prop("disabled" , false);
			}
			
			}
		
		
		
		
	
		
		
	}
	
	function runButton()
	{
		window.location.reload();
		
	}
	
//	function save_as_svg(){
//
//        
//        const element = $('.highcharts-container ').html();//  document.getElementById("container1").innerHTML;
//        var element1= "";
//        var element2= "";
//        var element_final ="";
//        console.log("element  ########"+element);
//       
//        var head = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';
//
//        element_final =head +element;
//        
//        console.log("element_final  ########"+element_final);
//        
//        svgAPI(element_final.toString());
//     
//}
//	
//	function svgAPI(element_final)
//	{
//		
////		alert("svgAPI   #####");
//		
//		NProgress.start();
//		$.ajax({method : "POST",			
//			async:false,
//			url : "./getSVG",
//			data : {
//				svg :element_final,
//			},
//			success : function(result) {
//				NProgress.done(true);
//				
//				
//					
//		},
//		error : function(data) {
//			NProgress.done(true);
//			console.log(data);
//		}
//	});
//		
//		
//	}
	
	
	function getlegend_position()
	{
		legend_button =1;
		var legend_plc= $("#displaylegend").val();
		var top_bottom =$("#placement").val();
		
		console.log("legend_plc   "+legend_plc);
		console.log("top_bottom   "+top_bottom);
		
		$("#btnChart").trigger('click');

		
	}
	
	var databar_colordiv_append_inc=0;
	var databar_colordiv_append_var = "";
	function databar_colordiv_append()
	{
		$("#data_bar_div1").html("");
		databar_colordiv_append_inc=0;
		databar_colordiv_append_var ="";
		$('.dropzone.Y-Axis').children().each(function()
				{
			databar_colordiv_append_inc++;
				});
		if(databar_colordiv_append_inc >0)
			{
			
			for(var d=0; d<databar_colordiv_append_inc; d++)
			
			databar_colordiv_append_var += "<div class='d-flex'>"
				+"<div class='cb-range-form-div me-3 '>"
			+"<div class='cb-range-Label'>"
			+"<span class='label'>"
			+"<div class='cb-range-text'>Data Bar Color</div>"
			+"</span>"
			+"<div>"
			+"<div class='cb-input-css'>"
			+"<input type='color' id='databar_color"+d+"' name='databar_color"+d+"' value='#d8d9da'>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>"
			+"</div>";
			
			}
		$("#data_bar_div1").html(databar_colordiv_append_var);
	}
	
	
/*	var opacity = document.getElementById("opacity");
	var opacity_value = document.getElementById("opacity_value");

	opacity_value.innerHTML = opacity.value;
opacity.oninput = function() {

		opacity_value.innerHTML = this.value;
}*/
	
	
//	$('#opacity').on("change mousemove", function() {
//		  $('#opacity_value').html($(this).val());
//		  $('.highcharts-series-group').css({
//		    'opacity': $(this).val()
//		  });
//		});
	
	
	function resetSelection_properties()
	{		
			legend_button = 0;
			
			$("#placement").val("select");
			
		    $("#chart_flip").prop("checked", false);
			
			$("#data_labels").prop('checked', false);
		
			$("#label_rotation").val(0);
			
			$("#zoom_type").val("select");
			
			$("#y_label_rotation").val(0);
			
			$("#value_conversion").val("select");
			
			$("#title_alignment").val("select");
			
			$("#font_color").val("#d8d9da");	
					
//			$("#opacity").val(1);	
						
			$("#prefix").val("");	
			
			$("#suffix").val("");	
			
			$("#categories_check").prop("checked", false);
		
			$("#label_check").prop("checked", false);
			 			 
			$("#btnChart").trigger('click');
			
	}
	
//	var urladdress = "";
//		function geturl()
//		{
//			
//			urladdress = "";
//			var url = window.location.href;
//			console.log("url---"+url);
//			var splitUrl = url.split('/');
//			for (var j = 0; j < splitUrl.length; j++)
//			{
//				if (splitUrl[j] !="menu" )
//				{
//					if (splitUrl[j] =="" &&  j == 1)
//					{
//						urladdress += "//";	
//					}
//					else 
//					{
//						if (j==0)
//						{
//							urladdress += splitUrl[j];
//						}
//						else 
//						{
//							urladdress += splitUrl[j]+"/";
//						}
//						
//					}
//					console.log(splitUrl[j]);
//					console.log("urladdress   "+urladdress);
//				}
//				else if (splitUrl[j] =="menu")
//				{
//					//urladdress += splitUrl[j]+"/";
//					break;
//				}
//			}
//			console.log("url---"+url);
//			
//			console.log("urladdress ############  "+urladdress);
//			return urladdress;
//		}
//		
//	geturl();
//		
//	var protocol = location.protocol; //https:  or http:
//	var domain = location.hostname;
//	var port = location.port;		
//
//	
//	console.log("protocol  "+protocol);
//
//	console.log("domain  "+domain);
//
//	console.log("port  "+port);
//	
//	var autocruizedashboard = "https://"+domain+":8585/index.jsp"; 
//
//	var autocruizetensordashboard = "https://"+domain+":8585/index_tf.jsp"; 
//
//	var autocruizeh2o3dashboard = "https://"+domain+":8585/index_h2o3.jsp"; 
//
//
//	var pycode = "https://github.com/easydatain/PyCode";
//	var cafebot_viz = "http://"+domain+":8088/login/"; 
//	var apiurl= protocol+"//"+domain;
//	var help_url= ""+protocol+"://"+domain+":"+port+"/help/#";
//	var jupyternotebook =""+protocol+"://"+domain+":8888";
//	var help = "https://demo.cafebot.ai:"+port+"/help/index.html" ;
//	var rstudio = ""+protocol+"://"+domain+":8787";  
//
//	
//	var customli ='<li><a href='+pycode+' target="_blank"><i class="os-icon os-icon-slack"></i><span><fmt:message key="label.pycode" /></span></a></li><li><a href='+jupyternotebook+'  target="_blank">	<i class="os-icon os-icon-agenda-1"></i><span><fmt:message key="label.jupytcenotebook" /></span></a></li><li><a href='+rstudio+' target="_blank"><i class="os-icon os-icon-agenda-1"></i><span><fmt:message key="label.rstudio" /></span></a></li><li>	<a href='+help+' target="_blank"><i class="os-icon os-icon-help-circle"></i><span><fmt:message key="label.help" /></span></a></li>';
//	
//		function getParam(param)
//		{
//			   return new URLSearchParams(window.location.search).get(param);
//		}
//
//	
	
	
	
	
	
	
	
	
	
	
	
	
	
	