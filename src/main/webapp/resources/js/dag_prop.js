var jsonobj="";

$(document).ready(function() {	
		 ajaxCall(0);		 		 	 
});

function ajaxCall(index) 
{
	cleardag_flag = 0;
	$.ajax({ 
		type : "GET",
		contentType : "application/json",
		url : "./readDAGdATA",
		success : function(result) 
		{
			
			jsonobj = result;
			
			var obj = JSON.parse(jsonobj);
		     //console.log(obj);   
		     var key1="";
		     var value1="";
		     var key2="";
		     var value2="";
		     var key3="";
		     var value3="";
		     var key4="";
		     var value4="";
		     var key5="";
		     var value5="";
		     var value6="";
		     var value7="";
		     var keydata="";
		     var valuedata="";
		     var valuestring="";
		     var schedule_interval="";
		     var tr="";
		     var tags=[];
		     var count=0;
		     
		     var dag_check = "";
		     
		  var count_val=0;
		  var row_count=0;
		  var dagvalues="";
		     for (var key in obj) 
		     {
		        key1=key;
		        value1=obj[key];
		      
		        for(var key in value1)
		        {
		            key2=key;
		            value2=value1[key];
		          
		            keydata ='<tr>';
		            valuedata +='<tr id="rowdelete_'+row_count+'">';
		            for(var key in value2)
		            {
		                key3=key;
		                value3=value2[key];
		               
			            if(key3 == "is_paused")
	                	{
//	                	console.log("value3::",value3);
	                	if(value3 == false)
	                		{
	                		
	                		dag_check = "checked='checked'";
	                		
	                		}
	                	else
	                		{
	                		
	                		dag_check = " ";
	                		
	                		}
	                		
	                	
	                	}
		                
		                
		            if(key3 == "dag_id" || key3 == "is_active" || key3 == "is_paused" ||key3 == "last_pickled" || key3 == "next_dagrun" || key3 == "next_dagrun_create_after" || key3 == "next_dagrun_data_interval_end"
		                    || key3 == "schedule_interval" || key3 == "tags" || key3 == "Action")
		        	{  
		            
		                if (count ==0)
		                {
		                    keydata +='<th>'+key3+'</th>';
		                } 
		                if(key3 == "dag_id"){
		                    
							dagvalues = value3;
							//alert(dagvalues);
						}
		                if(key3 == "schedule_interval")
		                {
		                    //alert(key3)
		                    value4 =JSON.stringify(value3);
		                    value3 =value4;     
		                }
		                if(key3 == "tags")
		                {
		                    //alert(key3)
		                    value5 =JSON.stringify(value3);
		                    value3 =value5;     
		                }              
		                if(value3 == null){
		                    //alert("null")
		                    value3 ="";               
		                }
		                    keydata +='<th>'+key3+'</th>';
		                                
		                
		                valuedata +='<td>'+value3+'</td>'; 
		                //console.log("valuedata::"+valuedata)
		             
		          }   
		                else 
		                {
		                	
		                }
		                
		                
		                
		                count_val++; 
		            }
		          
		            keydata +='<th>Action</th></tr>';
		            count++;
		            valuedata +='<td><div class="d-inline-flex">\
						<div class="form-inline">\
						  <div class="css-1gx4o12">\
							<div class="css-wtrf37">\
							  <input type="checkbox" id="playdag'+row_count+'"  '+dag_check+' onchange = "pause_playDAGdATA(\''+dagvalues+'\','+row_count+')">\
							  <label for="playdag'+row_count+'"></label>\
							</div>\
						  </div>\
				</div>\<button class="btn btn-secondary btn-sm ml-2" onclick="deletedag(\''+dagvalues+'\','+row_count+')"><i class="fa fa-trash-o" aria-hidden="true"></i></button>\
				<button class="btn btn-secondary btn-sm" onclick="taskList(\''+dagvalues+'\','+row_count+')"><i class="fa fa-list" aria-hidden="true"></i></button>\
				<button class="btn btn-secondary btn-sm" onclick="clearDAGdATA(\''+dagvalues+'\','+row_count+')"><i class="fa fa-refresh" aria-hidden="true"></i></button>\
				</div></td></tr>';
		         
		            //<button class="btn btn-secondary btn-sm" onclick="clearDAGdATA(\''+dagvalues+'\','+row_count+')"><i class="fa fa-refresh" aria-hidden="true"></i></button>\
					
		            row_count++;
		            $("#dag_count").html(row_count);
		        }
		        
		     }     
		      
		     
		     $("#thdata").html(keydata);
		     $("#tddata").html(valuedata);
		     //var prop ="";
		     if(index ==0)
		     {
		     
		   $("#thdata").html(keydata);
		     $("#tddata").html(valuedata);	
		     $('#dag_table').DataTable({
		     fixedColumns: {
		     left:0,
		            right: 1
		        },
		        destroy : true, 
		     }).columns.adjust().draw();
		     }
		   else 
		   {
		   var table = $('#dag_table').DataTable();
		   table.destroy();
		   
		   $("#thdata").html(keydata);
		     $("#tddata").html(valuedata);	
		   
		   $('#dag_table').DataTable({
		     fixedColumns: {
		     left:0,
		            right: 1
		        },
		        destroy : true, 
		     }).columns.adjust().draw();
		   
		   
		   }
		     
		     
		}
	});

}


//
//function activeDag() 
//{	
////	alert("activeeeeeeeeee");
//	$('#dag_table').html("");
//	
//	$.ajax({ 
//		type : "GET",
//		contentType : "application/json",
//		url : "./readActiveDagdATA",
//		success : function(result) 
//		{
//			//console.log("result::::"+result);
//			
//			jsonobj = result;
//			
//			var obj = JSON.parse(jsonobj);
//		     //console.log(obj);   
//		     var key1="";
//		     var value1="";
//		     var key2="";
//		     var value2="";
//		     var key3="";
//		     var value3="";
//		     var key4="";
//		     var value4="";
//		     var key5="";
//		     var value5="";
//		     var value6="";
//		     var value7="";
//		     var keydata="";
//		     var valuedata="";
//		     var valuestring="";
//		     var schedule_interval="";
//		     var tr="";
//		     var tags=[];
//		     var count=0;
//		  var count_val=0;
//		  var row_count=0;
//		  var dagvalues="";
//		     for (var key in obj) 
//		     {
//		        key1=key;
//		        value1=obj[key];
//		      
//		        for(var key in value1)
//		        {
//		        	
////		        	alert("row_count  ##########  "+row_count);
//		            key2=key;
//		            value2=value1[key];
//		           // console.log("key2::"+key2);
//		           // console.log("value2::",value2);
//		            keydata ='<tr>';
//		            valuedata +='<tr id="rowdelete_'+row_count+'">';
//		            for(var key in value2)
//		            {
//		                key3=key;
//		                value3=value2[key];
//		               //console.log("key3::"+key3);
//		               // console.log("value3::",value3);
//		      
//		            if(key3 == "dag_id" || key3 == "is_active" || key3 == "is_paused" ||key3 == "last_pickled" || key3 == "next_dagrun" || key3 == "next_dagrun_create_after" || key3 == "next_dagrun_data_interval_end"
//		                    || key3 == "schedule_interval" || key3 == "tags" || key3 == "Action")
//		        	{  
//		            
//		                if (count ==0)
//		                {
//		                    keydata +='<th>'+key3+'</th>';
//		                } 
//		                if(key3 == "dag_id"){
//		                    
//							dagvalues = value3;
//							//alert(dagvalues);
//						}
//		                if(key3 == "schedule_interval")
//		                {
//		                    //alert(key3)
//		                    value4 =JSON.stringify(value3);
//		                    value3 =value4;     
//		                }
//		                if(key3 == "tags")
//		                {
//		                    //alert(key3)
//		                    value5 =JSON.stringify(value3);
//		                    value3 =value5;     
//		                }              
//		                if(value3 == null){
//		                    //alert("null")
//		                    value3 ="";               
//		                }
//		                    keydata +='<th>'+key3+'</th>';
//		                                
//		                
//		                valuedata +='<td>'+value3+'</td>'; 
//		                //console.log("valuedata::"+valuedata)
//		             
//		          }   
//		                else 
//		                {
//		                	
//		                }
//		                
//		                
//		                
//		                count_val++; 
//		            }
//		            
//		            
//		            
//		            
//		            
//		            
//		            keydata +='<th>Action</th></tr>';
//		            count++;
//		            valuedata +='<td><div class="d-inline-flex"><button class="btn btn-secondary btn-sm" onclick="deletedag(\''+dagvalues+'\','+row_count+')"><i class="fa fa-trash-o" aria-hidden="true"></i></button><button class="btn btn-secondary btn-sm" onclick="pause_playDAGdATA(\''+dagvalues+'\','+row_count+')" id="play'+row_count+'" style="display:none"><i class="fa fa-play" aria-hidden="true" ></i></button>\
//					<button class="btn btn-secondary btn-sm" id="pause'+row_count+'" ><i class="fa fa-pause" aria-hidden="true"></i></button>\
//		            		<button class="btn btn-secondary btn-sm" onclick="taskList(\''+dagvalues+'\','+row_count+')"><i class="fa fa-list" aria-hidden="true"></i></button>\
//		            		<button class="btn btn-secondary btn-sm" onclick="clearDAGdATA(\''+dagvalues+'\','+row_count+')">Clear Dag</button></div></td></tr>';
//		         
//		            row_count++;
//		        }
//		        
//		     }     
//		      
//		    
//		     $("#thdata").html(keydata);
//		     $("#tddata").html(valuedata);
//		     
//		     $('#dag_table').DataTable();
//			
//		}
//	});
//	
//	
//	//alert("2643652437");
//
//}
//
//
//
//function pauseDag() 
//{	
////	alert("pauseDag");
//	$('#dag_table').html("");
//	
//	$.ajax({ 
//		type : "GET",
//		contentType : "application/json",
//		url : "./readPausedDagdATA",
//		success : function(result) 
//		{
//			//console.log("result::::"+result);
//			
//			jsonobj = result;
//			
//			var obj = JSON.parse(jsonobj);
//		     //console.log(obj);   
//		     var key1="";
//		     var value1="";
//		     var key2="";
//		     var value2="";
//		     var key3="";
//		     var value3="";
//		     var key4="";
//		     var value4="";
//		     var key5="";
//		     var value5="";
//		     var value6="";
//		     var value7="";
//		     var keydata="";
//		     var valuedata="";
//		     var valuestring="";
//		     var schedule_interval="";
//		     var tr="";
//		     var tags=[];
//		     var count=0;
//		  var count_val=0;
//		  var row_count=0;
//		  var dagvalues="";
//		     for (var key in obj) 
//		     {
//		        key1=key;
//		        value1=obj[key];
//		      
//		        for(var key in value1)
//		        {
//		        	
////		        	alert("row_count  ##########  "+row_count);
//		            key2=key;
//		            value2=value1[key];
//		           // console.log("key2::"+key2);
//		           // console.log("value2::",value2);
//		            keydata ='<tr>';
//		            valuedata +='<tr id="rowdelete_'+row_count+'">';
//		            for(var key in value2)
//		            {
//		                key3=key;
//		                value3=value2[key];
//		               //console.log("key3::"+key3);
//		               // console.log("value3::",value3);
//		      
//		            if(key3 == "dag_id" || key3 == "is_active" || key3 == "is_paused" ||key3 == "last_pickled" || key3 == "next_dagrun" || key3 == "next_dagrun_create_after" || key3 == "next_dagrun_data_interval_end"
//		                    || key3 == "schedule_interval" || key3 == "tags" || key3 == "Action")
//		        	{  
//		            
//		                if (count ==0)
//		                {
//		                    keydata +='<th>'+key3+'</th>';
//		                } 
//		                if(key3 == "dag_id"){
//		                    
//							dagvalues = value3;
//							//alert(dagvalues);
//						}
//		                if(key3 == "schedule_interval")
//		                {
//		                    //alert(key3)
//		                    value4 =JSON.stringify(value3);
//		                    value3 =value4;     
//		                }
//		                if(key3 == "tags")
//		                {
//		                    //alert(key3)
//		                    value5 =JSON.stringify(value3);
//		                    value3 =value5;     
//		                }              
//		                if(value3 == null){
//		                    //alert("null")
//		                    value3 ="";               
//		                }
//		                    keydata +='<th>'+key3+'</th>';
//		                                
//		                
//		                valuedata +='<td>'+value3+'</td>'; 
//		                //console.log("valuedata::"+valuedata)
//		             
//		          }   
//		                else 
//		                {
//		                	
//		                }
//		                
//		                
//		                
//		                count_val++; 
//		            }
//		            
//		            
//		            
//		            
//		            
//		            
//		            keydata +='<th>Action</th></tr>';
//		            count++;
//		            valuedata +='<td><div class="d-inline-flex"><button class="btn btn-secondary btn-sm" onclick="deletedag(\''+dagvalues+'\','+row_count+')"><i class="fa fa-trash-o" aria-hidden="true"></i></button><button class="btn btn-secondary btn-sm" onclick="pause_playDAGdATA(\''+dagvalues+'\','+row_count+')" id="play'+row_count+'"><i class="fa fa-play" aria-hidden="true"></i></button>\
//					<button class="btn btn-secondary btn-sm" id="pause'+row_count+'" style="display:none"><i class="fa fa-pause" aria-hidden="true"></i></button>\
//		            		<button class="btn btn-secondary btn-sm" onclick="taskList(\''+dagvalues+'\','+row_count+')"><i class="fa fa-list" aria-hidden="true"></i></button>\
//		            		<button class="btn btn-secondary btn-sm" onclick="clearDAGdATA(\''+dagvalues+'\','+row_count+')">Clear Dag</button></div></td></tr>';
//		         
//		            row_count++;
//		        }
//		        
//		     }     
//		      
//		    
//		     $("#thdata").html(keydata);
//		     $("#tddata").html(valuedata);
//		     
//		     $('#dag_table').DataTable();
//			
//		}
//	});
//	
//	
//	//alert("2643652437");
//
//}
//



//
//function taskList(value,index)
//{
//
//        console.log("value "+value);
//        console.log("index "+index);
//
//            NProgress.start();        
//        	$.ajax({
//        		type : "GET",
//        		contentType : "application/json",
//        		url : "./tasksDAGdATA?dag_id="+value,        		       		   	
//        		success : function(result) {
//        			
//        			console.log(" tasksDAGdATA    result   "+result);
//        			alert("success");
//        			
//        			  //$("#rowdelete_"+index).remove();
//        			
//        			NProgress.done(true);
//        			
//        			
//        	},
//        	error : function(data) {
//        		NProgress.done(true);
//        		console.log(data);
//        	}
//        });
//
//}



var cleardag_flag = 0;
var dag_run ="";
function clearDAGdATA(value,index)
{

	dag_run_arr =[];
	dag_task_id =[];
	
	cleardag_flag = 1;
	
//	 dagRunsData(value);
	 
	console.log("value "+value);
	   
	 
    NProgress.start();        
	$.ajax({
		type : "GET",
		contentType : "application/json",
		url : "./dagRunsData?dag_id="+value,        		       		   	
		success : function(result) {
			
			console.log(" dagRunsData    result   "+result);
			
			dag_run = result;
			        			
			console.log(dag_run)
			
setTimeout(() => {
 console.log("dag_run ::::::::"+dag_run);

var tablejson_ = JSON.parse(dag_run);
//console.log(tablejson_);
var tablekey="";
var tableval="";
var tablekey1="";
var tableval1="";

var tablekey2="";
var tableval2="";

var tablekey3="";
var tableval3="";

var dag_run_arr =[];

var dag_count = 0;
for (var key in tablejson_) 
{
	tablekey=key;
	console.log("tablekey::"+tablekey);
	tableval=tablejson_[key];

//	console.log(tableval);
	
	for (var key in tableval) 
		{
			tablekey1=key;
			console.log("tablekey1::"+tablekey1);
			tableval1=tableval[key];

			for (var key in tableval1) 
			{
				tablekey2=key;
				console.log("tablekey2::"+tablekey2);
				tableval2=tableval1[key];

				console.log(tableval2);
				
				if(tablekey2 == "dag_run_id")
					{
					if(dag_count == 0)
						{
						dag_run_arr.push(tableval2);
						}
					
					dag_count++;
					}
			
				
			}
		}
}
	


console.log("dag_run_arr       ",dag_run_arr);


	taskList(value,index);
	var run_var = "dataset_triggered__2023-07-18T00:00:09.402329+--+00:00";
	
	
	setTimeout(() => {
		
		console.log("dag_task_id       ",dag_task_id);
        console.log("value "+value);
        console.log("index "+index);
 
        console.log("encode::::"+encodeURI(dag_run_arr));
        
        dag_run_arr = dag_run_arr+"";
        
        console.log("2####::::"+dag_run_arr);
        
          dag_run_arr = dag_run_arr.replace("+","____");
         
          console.log("encode::::"+encodeURI(dag_run_arr))
          
          
          
            NProgress.start();        
        	$.ajax({
        		type : "POST",
        		contentType : "application/json",
        		url : "./clearDAGdATA?dag_id="+value+"&dag_run_arr="+encodeURI(dag_run_arr)+"&dag_task_id="+dag_task_id,        		       		   	
        		success : function(result) {
        			
        			console.log(" clearDAGdATA    result   "+result);
        			if(result == "Success")
        				{
        				$.notify(result,"success");
        				}
        			else
        				{
        				$.notify(result,"error");
        				}
        			
        			
        			NProgress.done(true);
        			
        			
        	},
        	error : function(data) {
        		NProgress.done(true);
        		console.log(data);
        	}
        });
		
		
	}, 4000);
	
	
}, 2000);
			
			NProgress.done(true);
			return result;
			
	},
	error : function(data) {
		NProgress.done(true);
		console.log(data);
	}
});
	 
	
	
            
}


//function dagRunsData(value)
//{
//        console.log("value "+value);
//   
// 
//            NProgress.start();        
//        	$.ajax({
//        		type : "GET",
//        		contentType : "application/json",
//        		url : "./dagRunsData?dag_id="+value,        		       		   	
//        		success : function(result) {
//        			
//        			console.log(" dagRunsData    result   "+result);
//        			
//        			dag_run = result;
//        			        			
//        			console.log(dag_run)
//        			
//    setTimeout(() => {
//		 console.log("dag_run ::::::::"+dag_run);
//
//		var tablejson_ = JSON.parse(dag_run);
//		//console.log(tablejson_);
//		var tablekey="";
//		var tableval="";
//		var tablekey1="";
//		var tableval1="";
//
//		var tablekey2="";
//		var tableval2="";
//
//		var tablekey3="";
//		var tableval3="";
//
//		var dag_run_arr =[];
//
//        var dag_count = 0;
//		for (var key in tablejson_) 
//		{
//			tablekey=key;
//			console.log("tablekey::"+tablekey);
//			tableval=tablejson_[key];
//
////			console.log(tableval);
//			
//			for (var key in tableval) 
//				{
//					tablekey1=key;
//					console.log("tablekey1::"+tablekey1);
//					tableval1=tableval[key];
//
//					for (var key in tableval1) 
//					{
//						tablekey2=key;
//						console.log("tablekey2::"+tablekey2);
//						tableval2=tableval1[key];
//
//						console.log(tableval2);
//						
//						if(tablekey2 == "dag_run_id")
//							{
//							if(dag_count == 0)
//								{
//								dag_run_arr.push(tableval2);
//								}
//							
//							dag_count++;
//							}
//					
//						
//					}
//				}
//		}
//			
//
//
//		console.log("dag_run_arr       ",dag_run_arr);
//
//
//			taskList(value,index);
//			var run_var = "dataset_triggered__2023-07-18T00:00:09.402329+--+00:00";
//			
//			
//			setTimeout(() => {
//				
//				console.log("dag_task_id       ",dag_task_id);
//		        console.log("value "+value);
//		        console.log("index "+index);
//		 
//		        console.log("encode::::"+encodeURI(dag_run_arr));
//		        
//		        dag_run_arr = dag_run_arr+"";
//		        
//		        console.log("2####::::"+dag_run_arr);
//		        
//		          dag_run_arr = dag_run_arr.replace("+","____");
//		         
//		          console.log("encode::::"+encodeURI(dag_run_arr))
//		          
//		          
//		          
//		            NProgress.start();        
//		        	$.ajax({
//		        		type : "POST",
//		        		contentType : "application/json",
//		        		url : "./clearDAGdATA?dag_id="+value+"&dag_run_arr="+encodeURI(dag_run_arr)+"&dag_task_id="+dag_task_id,        		       		   	
//		        		success : function(result) {
//		        			
//		        			console.log(" clearDAGdATA    result   "+result);
//		        			if(result == "Success")
//		        				{
//		        				$.notify(result,"success");
//		        				}
//		        			else
//		        				{
//		        				$.notify(result,"error");
//		        				}
//		        			
//		        			
//		        			NProgress.done(true);
//		        			
//		        			
//		        	},
//		        	error : function(data) {
//		        		NProgress.done(true);
//		        		console.log(data);
//		        	}
//		        });
//				
//				
//			}, 2000);
//			
//			
//	}, 2000);
//        			
//        			NProgress.done(true);
//        			return result;
//        			
//        	},
//        	error : function(data) {
//        		NProgress.done(true);
//        		console.log(data);
//        	}
//        });
//            
//}


function deletedag(value,index)
{
	

	cleardag_flag = 0;
	if($("#playdag"+index).prop('checked')) 
	{
		var r1 = confirm(""+value+" is in run mode ,do you still want delete this dag?");
	}
	else
	{
		var r = confirm("Are you sure ,you want delete this row!");
	}
	
        console.log("value "+value);
        console.log("index "+index);
        
        if ((r == true) || (r1 == true)) 
		{
        
            NProgress.start();        
        	$.ajax({
        		type : "DELETE",
        		contentType : "application/json",
        		url : "./deleteDAGdATA?dag_id="+value,        		       		   	
        		success : function(result) {
        			
        				$.notify("Deleted successfully!","success");
        				
        			  $("#rowdelete_"+index).remove();

        			NProgress.done(true);
        			
        			
        	},
        	error : function(data) {
        		NProgress.done(true);
        		console.log(data);
        	}
        });
            
           
		} 
		else
		{
			
		}

}


function pause_playDAGdATA(value,index)
{

	cleardag_flag = 0;
	var value1 = "";
	var is_paused = false;
	
        if($("#playdag"+index).prop( "checked")==true)
        	{
        	is_paused = false;
        	}
        else
        	{
        	is_paused = true;
        	}      
        
         value1 = value+"_#_#_"+is_paused; 
        
            NProgress.start();        
        	$.ajax({
        		type : "POST",
        		contentType : "application/json",       	
        		url : "./pause_playDAGdATA?dag_id="+value+"&value="+is_paused,        		
        		success : function(result) {
        			
//        			alert("success");
        			console.log("pause_playDAGdATA :::::::::"+result);
        			
        			NProgress.done(true);
        			if(result == 200)
        				{
        				ajaxCall(1);
        				}
        			else
        				{
        				$.notify("Something went wrong!","error");
        				}
        			
        			
        			
        	},
        	error : function(data) {
        		NProgress.done(true);
        		console.log(data);
        	}
        });

}


function tasklistfunction(json_string) 
{
  var tagtask=json_string;
	  

      var obj = JSON.parse(tagtask);

      var taskkey="";
      var taskvalue="";
      var taskkey1="";
      var taskvalue1="";
      var taskkey2="";
      var taskvalue2="";
      var keytaskdata="";
      var valuetaskdata="";
      var taskcount=0;
      var row_taskcount=0;

      for (var key in obj) 
      {
        taskkey=key;
        taskvalue=obj[key];

        for(var key in taskvalue)
        {
          taskkey1=key;
          taskvalue1=taskvalue[key];
          keytaskdata ='<tr>';
          valuetaskdata +='<tr id="rowdelete_'+row_taskcount+'">';

            for(var key in taskvalue1)
            {
              taskkey2=key;
              taskvalue2=taskvalue1[key];

              if(taskkey2 == "owner" || taskkey2 == "start_date" || taskkey2 == "task_id" ||taskkey2 == "operator_name" ){
                  
                  keytaskdata +='<th>'+taskkey2+'</th>';
                    
                valuetaskdata +='<td>'+taskvalue2+'</td>';
              
                }
                
            }
            keytaskdata +='</tr>';                
                valuetaskdata +='</tr>';           
        }
      }

      $('#table_takslist').DataTable().columns.adjust().draw();
      $("#thtaskdata").html(keytaskdata);
     $("#tdtaskdata").html(valuetaskdata);
     
    }

var dag_task_id = [];
function tasklistfunction_dagrun(json_string) 
{	
      var tagtask=json_string;

      var obj = JSON.parse(tagtask);

      var taskkey="";
      var taskvalue="";
      var taskkey1="";
      var taskvalue1="";
      var taskkey2="";
      var taskvalue2="";
      var keytaskdata="";
      var valuetaskdata="";
      var taskcount=0;
      var row_taskcount=0;

      for (var key in obj) 
      {
        taskkey=key;
        taskvalue=obj[key];
        for(var key in taskvalue)
        {
          taskkey1=key;
          taskvalue1=taskvalue[key];
            for(var key in taskvalue1)
            {
              taskkey2=key;
              taskvalue2=taskvalue1[key];
                if(taskkey2 == "task_id")
                	{
                	
                	dag_task_id.push(taskvalue2);
                	}  
            }                   
        }
      }

      cleardag_flag =0;
    }


function taskList(value,index)
{
            NProgress.start();        
        	$.ajax({
        		type : "GET",
        		contentType : "application/json",
        		url : "./tasksDAGdATA?dag_id="+value,        		       		   	
        		success : function(result) {
        			   
        			if(cleardag_flag == 0)
        				{        				
        				$("#dag_tasklist").modal('show');
        				 tasklistfunction(result);        				
        				}
        			else
        				{
        				 tasklistfunction_dagrun(result);
        				}
          
        			 
        			
        			NProgress.done(true);
        			
        			
        	},
        	error : function(data) {
        		NProgress.done(true);
        		console.log(data);
        	}
        });

}


function dagtaskhide(){
  $("#dag_tasklist").modal('hide');
}

   
     