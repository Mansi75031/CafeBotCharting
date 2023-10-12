<%@page isELIgnored="false" %>
<script>

			//var model_ =${type};
			
			//console.log("model::::"+model_);
			//if(${type} == model)
			if(${type} == "singlevalue")	
			{
				alert ("1234");
				 //console.log( ${jsondata});
				 //var chart = ${jsondata}; 
				 $("#container1").hide();
			     $("#singlevaluediv").show();
			    // $("#tablechartdiv").hide();
			     $("#singlevalue").html(chart);
			}
								
			else 
			{
				alert ("4567");
				 $("#container1").hide();
			     //$("#singlevaluediv").hide();
			     $("#tablechartdiv").show();
			     
			     var charttype = ${charttype};
			     
			     var tablecontainerid ="table_"+ ${tablecontainerid};
			    // var tablecontainerid = ${tablecontainerid};
		
			    
			    
				var parseJSONResult = ${jsondata};
				console.log("chart:::"+parseJSONResult);
				//var parseJSONResult= chart;
				
				
				var windowdata_ = $('#table_'+tablecontainerid).DataTable();
				console.log("windowdata_:::"+windowdata_);
				windowdata_.clear();
				windowdata_.destroy();
				   
				
				if (parseJSONResult != null && parseJSONResult.length > 0) 
				{
					
				
					
					//$('#mojodata tbody').empty();
					//$('#mojodata').empty();
					   
					rowDataSet =[];
					dynamicColumns=[];
					console.log("in paga data jsonresult");
					   
					var i = 0;     
					var totcolumn=0;
					
					
					$.each(parseJSONResult[0], function(key, value) {
						var obj = {
							sTitle : key
						};
						
						console.log(key);
						dynamicColumns[i] = obj;
						
						totcolumn = totcolumn+1;
						
						i++;
					});
					console.log("dynamicColumns:::"+dynamicColumns.length);
					
					console.log("dynamicColumns:::",dynamicColumns);
					
					console.log("data:::",totcolumn);
					//fetch all records from JSON result and make row data set.
					
					var i = 0;
					$.each(parseJSONResult, function(key, value) {
						var rowData = [];
						var j = 0;
						$.each(parseJSONResult[i], function(key, value) {
							//value = value.replace("<","");
							//console.log("value--"+value);
							rowData[j] = value;
							j++;
						});
						//console.log("rowData---"+rowData);
						rowDataSet[i] = rowData;
						i++;
					});

						if (rowDataSet.length <=0)
						{
							//$.notify("No Data Found","info");
						}
					
						
						console.log("table_::"+tablecontainerid);
						$('#'+tablecontainerid).DataTable({
  								"dom" : 'Bf<"datatablediv">rt<"datatablediv">ip',
						"columnDefs": [{
                						"targets": '_all',
                			"createdCell": function (td, cellData, rowData, row, col) {
                    			
                }
            }],
						"bDestroy" : true,
						"bScrollCollapse" : false,
						"bJQueryUI" : true,
						"bPaginate" : true,
						"pageLength" : 10,
						"sScrollX" : "100%",
						"sScrollY" : "100%",
						"bInfo" : true,
						"bFilter" : true,
						"bSort" : true,
						"aaData" : rowDataSet,
						"aoColumns" : dynamicColumns,
						"autoWidth" : false,
						"aaSorting": [],
						"lengthChange": true,
						"colReorder": true,
						"deferRender" : true
				
					//These are dynamically created columns present in JSON object.

					});
					
					

				}
				
			}   
				
</script>