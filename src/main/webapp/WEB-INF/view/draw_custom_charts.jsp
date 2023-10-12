<%-- <%@page isELIgnored="false" %>  --%>
<script>

var windowdata ="";
			
/////-------------------Build Single Value Chart 				
			if(${type} == "singlevalue")	
			{
				 var chart = ${jsondata}; 
				 var table_Name = ${table_name};
				 if(table_Name == "")
		    	 {
		    	 table_Name ="Single Value Chart";
		    	 }
				 $("#single_value_name").html(table_Name);
				 $("#container1").hide();
			     $("#singlevaluediv").show();
			     //$("#tablechartdiv").hide();
			     var containerid1 = ${containerid};
			    // console.log("containerid1 singlevalue "+containerid1)
			     $("#singlevalue"+containerid1).html(chart);
			     
			}
/////-------------------Build Table								
			else 
			{
				windowdata = "";				
			     var containerid = ${tablecontainerid};
			     var table_Name = ${table_name};
			     //console.log("table_Name ::::::::::  "+table_Name);
			     var tablecontainerid = "";
			     if(table_Name == "")
			    	 {
			    	 table_Name ="Table";
			    	 }
			     
			     if(containerid == "")
			     {
			    	 
					 $("#container1").hide();

			    	 $("#tablechartdiv").show();
			    	 $('#_table').empty();
						
						$('#tablechartdiv').html(""); 
						
						var createtable="<h5 id='table_chart_name'>"+table_Name+"</h5><table id='table_' class='table table-striped table-bordered' width='100%' style='width:100%;font-size: 13px;'></table>"; 
						$("#table_chart_name").html(table_Name);
						$('#tablechartdiv').html(createtable);
						
			     	tablecontainerid ="table_";
			     }
			     else
			     {
			     		tablecontainerid ="table_"+${tablecontainerid};
			     }
			    
				var parseJSONResult = ${jsondata};
				//console.log("chart:::"+parseJSONResult);
	
				if (parseJSONResult != null && parseJSONResult.length > 0) 
				{
		
					rowDataSet =[];
					dynamicColumns=[];
					console.log("in paga data jsonresult");
					   
					var i = 0;     
					var totcolumn=0;
					
					
					$.each(parseJSONResult[0], function(key, value) 
					{
						var obj = 
						{
							sTitle : key
						};
						
						console.log(key);
						dynamicColumns[i] = obj;
							
						totcolumn = totcolumn+1;
						
						i++;
					
					});
					
					//console.log("dynamicColumns:::"+dynamicColumns.length);
		
					var i = 0;
				$.each(parseJSONResult, function(key, value) 
					{
						var rowData = [];
						var j = 0;
						$.each(parseJSONResult[i], function(key, value) 
						{
						
							rowData[j] = value;
							j++;
						});
				
						rowDataSet[i] = rowData;
						i++;
					});

				if (rowDataSet.length <=0)
						{
							
						}
					
						
				//console.log("table_::"+tablecontainerid);
						
				windowdata = $('#'+tablecontainerid).DataTable({
							 "dom" : 'Bf<"datatablediv">rt<"datatablediv">ip',
							 buttons: [ 'copy', 'excel', 'pdf', 'print' , 'csv' ],
							 //buttons: [],
		 						"columnDefs": [{
					                "targets": '_all',
					                "createdCell": function (td, cellData, rowData, row, col) {
					                    $(td).css('max-width', '200px');
					                    $(td).css('word-wrap', 'break-word')
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
				
					}).columns.adjust().draw();
						
						$(".dataTables_filter label input").addClass("form-control");
						$('#'+tablecontainerid).removeClass("form-inline");
							
				}
				
			}   
				
			
			
</script>