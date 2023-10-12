var structures=[
{
	"name":"Single Folder",
	"value":"sing_fold",
	"img":""
},{
	"name":"Multi Folder",
	"value":"multi_fold",
	"img":""
}
/*,{
	"name":"Binomial",
	"value":"binomial",
	"img":""
}*/
];

var channels=[
{
	"name":"RGB",
	"value":"rgb"
	
},{
	"name":"Grayscale",
	"value":"grayscale"
	
}
];

var mediaType=[
{
	"name":"Image",
	"value":"image"
},{
	"name":"Audio",
	"value":"audio"
},{
	"name":"Video",
	"value":"video"
},{
	"name":"Text",
	"value":"text"
}
];


var labels=[
	{
		"name":"Label by folder name",
		"value":"default"
		
	},{
		"name":"Label by name ",
		"value":"custom"
		
	},{
		"name":"Label by image name",
		"value":"customlist"
		
	}
	];





/*
<input list="encodings" value="" class="col-sm-6 custom-select custom-select-sm">
<datalist id="encodings">
    <option value="ISO-8859-1">ISO-8859-1</option>
    <option value="cp1252">ANSI</option>
    <option value="utf8">UTF-8</option>
</datalist>
*/

//var globalindex =1;
var x = 0; //Initial field counter
$(document).ready(function(){
	
		creatDropDownList('structure',structures);
		creatDropDownList('channel',channels);
		creatDropDownList('mediaType',mediaType);
		creatDropDownList('labelselect',labels);
		
		
     $('.list_add_button').click(function()
           {
                //Check maximum number of input fields
            if (x==0)
                {
              $('#addlabellist').addClass('cb-mediamaxheight');
                }
        
                    x++; //Increment field counter
                    var list_fieldHTML = '<div class="mb-2 d-flex align-items-center cb-range-Label add-newfeature" id="removefield'+x+'">\
					<a href="javascript:void(0);" class="list_remove_button btn btn-secondary btn-sm mr-2" onclick="removeselect('+x+')"><i class="os-icon os-icon-trash-2"></i></a>\
					<div class="cb-input-css">\
					<input name="list'+x+'" id="list'+x+'" type="text" placeholder="Containing label" onblur="onblurUDF('+x+');"  class="form-control labelText mr-2"/>\
					</div>\
					<div class="cb-input-css">\
					<select id="list'+x+'_'+x+'" name="list'+x+'_'+x+'" type="text" placeholder="User label" class="form-control labelText">\
					<option value="integer">Int</option>\
					<option value="float">Float</option>\
					<option value="text">String</option>\
					<option value="boolean">Boolean</option>\
					</select>\
					</div>\
					</div>'; //New input field html 
                    $('#addlabellist').show();
                    $('#addlabellist').append(list_fieldHTML); //Add field html
                   
                  });
		
});

function removeselect(index)
{
			
$("#removefield"+index).remove();
x--;
				
}


  function onblurUDF(index)
  {
	  
	   var value_ = $("list"+index).val();
	   $("list"+index+"_"+index).val(value_);
	   
	  
	  
	}


$('.list_wrapper').on('click', '.list_remove_button', function()
        {
           $(this).closest('div.add-newfeature').remove(); //Remove field html
           x--; //Decrement field counter
           if(x <=0){
         	  // alert(media_list_fieldHTML.length)
         	   $('#addlabellist').hide(); 
            }
           
         });

function creatDropDownList(id,data){

//console.log('data ',data);		
	var opt='';
		for(var i=0;i<data.length;i++){
			opt=opt+'<option value="'+data[i].value+'">'+data[i].name+'</option>';
			
		}


	$('#'+id).html(opt);
}


function lableChange()
{

	 var labelselect = $("#labelselect").val();
	 
	 if (labelselect =="default")
	 {
		 $("#txtLabelDiv").hide();
		 $("#txtLabelListDiv").hide();
		 $('#addlabellist').hide();
		 $('#addlabellist').removeClass('cb-mediamaxheight');
		 removeImageLabel();
	 }
	 else if (labelselect =="customlist")
	 {
		 $("#txtLabelDiv").hide();
		 $("#txtLabelListDiv").show();
		 
		// $('#addlabellist').show();
		 
	 }
	 else if (labelselect =="custom")
	 {
		 $("#txtLabelDiv").show();
		 $("#txtLabelListDiv").hide();
		 $('#addlabellist').removeClass('cb-mediamaxheight');
		 $('#addlabellist').hide();
		 removeImageLabel();
	 }
	 
	 
	
}


function onSaveData(e){
 //console.log('model ',e.model);
	var name = e.model.name;
	
    var data = this.dataSource.data();
    var count=0;
    for(item in data){
        if(data[item].name == name){
            count++;
        }
        console.log('count'+count);
        if(count>1){
        	$('input[name="name"]').notify("File name already exist!","info");
        	  e.preventDefault();
           }
    }
	
}



function repoChange()
{
	   
	var repotype = $("#repoType").val();

	//alert("repotype:::"+repotype);   
	
	
	if (repotype== "fileserver" )
	{
		$("#connectionDiv").hide();
	}
	else if (repotype =="cafebot")
	{
		$("#connectionDiv").hide();
	}
	else 
	{
		$("#connectionDiv").show();
		//s3 connection
		s3ConnectionList();
	}

}



function s3ConnectionList(){
	// alert('hello');
	$.ajax({
		url:BASE_URL+'/connection/search?type=S3',
			
	}).done(function(data){
		
	// NProgress.done(true);
	setDropdowns3(data)
	console.log('s3 1conn',data);
		
	}).error(function(erro){
	// NProgress.done(true);
	});
	
}


function setDropdowns3(data){
	console.log('s3 conn',data);
	
	var conId=-1;
	// alert(jobDataTemp);
	if(jobDataTemp){
		conId=jobDataTemp.fromConnection.id;
		// alert(jobDataTemp.dir);
		
		if(jobDataTemp.dir.length>0 && (jobDataTemp.fromConnection.connectionType=='S3')){
			var dir1=jobDataTemp.dir;
			convertDirEntityFolderListS3(jobDataTemp.dir);
		}
		
		
	// $('#s3dir').val(jobDataTemp.dir);
	}
	var selected='';
	
	
	var S3ConnectionHTML = '';// '<option value="0">Choose One</option>';
	for(var v=0;v<data.length;v++){
		if(data[v].id==conId){
			selected='selected="selected"';
		}else{
			selected='';
		}
		
		S3ConnectionHTML+='<option value="'+data[v].id+'" '+selected+'>'+data[v].connectionName+'</option>';
	}
	$('#connectionList').html(S3ConnectionHTML);
	console.log('ddd '+S3ConnectionHTML)
}


function structureEditor(container, options) {
					$(
							"<input data-text-field='name' data-value-field='value' data-bind='value: "+options.field+"' />")
							.appendTo(container).kendoDropDownList({
								dataSource : {
					                    data: structures,
					                    schema: {
					                        model: {
					                            id: "value",
					                            fields: {
					                                mediaType: { type: "string" }
					                            }
					                        }
					               }
								
								}
								
							});
				}


function channelEditor(container, options) {
					$(
							"<input data-text-field='name' data-value-field='value' data-bind='value: "+options.field+"' />")
							.appendTo(container).kendoDropDownList({
								dataSource : {
					                    data: channels,
					                    schema: {
					                        model: {
					                            id: "value",
					                            fields: {
					                                mediaType: { type: "string" }
					                            }
					                        }
					               }
								
								}
								
							});
				}





function mediaTypeEditor(container, options) {
					$(
							"<input data-text-field='name' data-value-field='value' data-bind='value: "+options.field+"' />")
							.appendTo(container).kendoDropDownList({
								dataSource : {
					                    data: mediaType,
					                    schema: {
					                        model: {
					                            id: "value",
					                            fields: {
					                                mediaType: { type: "string" }
					                            }
					                        }
					               }
								
								}
								
							});
				}




  var custListvalue={'key':'','value':''};
  var custList = [];

		function checkText()
		{
			
			var count =0;
			 var keyname ="";
			$('input[type="text"].labelText').each(function () 
					{
			    
			   
			    if (count ==0)
			    {
			    	console.log("------"+$(this).val());
			    	keyname = $(this).val();
			    	count++;
			    }
			    else if (count==1)
			    {
			    	count =0;
			    	var value = $(this).val();
			    	custListvalue={'key':keyname,'value':value};
			    	keyname ="";
			    	custList.push(custListvalue);
			    }
			    
			});
			
			console.log("call custList:::::"+ JSON.stringify(custList) );
			return custList;
		}


		
		 var featureListvalue={'key':'','value':''};
		  var featurecustList = [];

				function checkfeatureListText()
				{
					
					var count =0;
					 var keyname ="";
					$('.featureText').each(function () 
							{
					    
					   //alert("count::::"+count);
					    if (count ==0)
					    {
					    	//console.log("------"+$(this).val());
					    	keyname = $(this).val();
					    	count++;
					    }
					    else if (count==1)
					    {
					    	count =0;
					    	var value = $(this).val();
					    	//alert("value:::"+value);
					    	featureListvalue={'key':keyname,'value':value};
					    	keyname ="";
					    	featurecustList.push(featureListvalue);
					    }
					    
					});
					
					console.log("call custList:::::"+ JSON.stringify(featurecustList) );
					return featurecustList;
				}
		
		

function imageDownload(e){

    var dataItem = this.dataItem($(e.currentTarget).closest("tr"));
    var value = dataItem.path;
    var filename=dataItem.name+"."+dataItem.archiveType;
    var v = value.replace(/\\/gi, "/");
    window.location = './dw_repository?path=' + v+"&filename="+filename;
    //alert(value);
					//$('#modelinfowindow').data('kendoWindow').center().open();
        //$('#modelinfodata').load('./readmojoinfo?id='+value); 
			}

function addfeature()
{
    if($('#addfeature').is(":checked"))  
    { 
        $(".media_list_wrapper").show();
        $('#addmedialist').show();
        $('#addmedialist').removeClass('cb-mediamaxheight');
    }
    else
    {
        $(".media_list_wrapper").hide();
        $('#addmedialist').hide();
        
        
        medialistclear();
    }
}

var a = 0; //assertion
var assertion_list_maxField;
   


  //Once add button is clicked   


   //$("#addfeature").prop( "checked")==false

   //add feature
 





$('.media_list_add_button').click(function()
    {
	
	//alert("a::::"+a);
	 if (a==0)
     {
     	 $('#addmedialist').addClass('cb-mediamaxheight');
     }
     
	 
	 
    //Check maximum number of input fields        
        a++; //Increment field counter
        var media_list_fieldHTML='<div class=" mb-2 d-flex align-items-center cb-range-Label media-listremove">\
        	<a href="javascript:void(0);" class="media_list_remove_button  btn btn-secondary btn-sm mr-2"><i class="os-icon os-icon-trash-2"></i></a>\
        <div class="cb-input-css">\
       <input type="text" class="form-control  featureText  mr-2" name="list['+a+'][]">\
        </div>\
        <div class="cb-input-css">\
        <select class="form-control mb-2 mb-sm-0   featureText " id="assertion_number" name="list['+a+'][]">\
        <option value="text">text</option>\
        </select>\
        </div>\
        </div>';
      
        
        
/*        <option value="int">int</option>\
        <option value="float">float</option>\
        <option value="datetime">datetime</option>\*/
        
       
        
        $('#addmedialist').append(media_list_fieldHTML); //Add field html
        $('#addmedialist').show();
      });
    
    
    
    //Once remove button is clicked
    $('.media_list_wrapper').on('click', '.media_list_remove_button', function()
    {
       $(this).closest('div.media-listremove').remove(); //Remove field html
       a--; //Decrement field counter
      
       if(a <=0)
       {
    	  // alert(media_list_fieldHTML.length)
    	  
    	   $('#addmedialist').hide(); 
    	   
       }
       
       
       
     });
    
    
    
    
    function medialistclear()
    {
    	a =0;
    	$(".media-listremove").remove();
    	$('#addmedialist').hide(); 
    	  
    }

    	function removeImageLabel()
    	{
    		x=0;
    	  $(".add-newfeature").remove();
    	  $('#addlabellist').hide();
    	}
    	
    	
    	function getData()
    	{
    		var ls= [];
    		var labellistdata = [];
    		var y=1;
    		
//    		debugger;
    		
    		$('#addlabellist').children().each(function()
				  	{
						  var containing_label = $("#list"+y).val();
						  var user_Label =$("#list"+y+"_"+y).val();
						  
						  ls.push({
							  'containing_label' : containing_label,
							  'user_Label' : user_Label
							  
						  });
						  
						 
				  		y++;
				    });
    		 labellistdata.push(ls);
    		console.log("labellistdata ::: ",labellistdata);

    	    //NProgress.start();
			$.ajax({method : "POST",					
				url : "./txtlabel",				
				data : {
					var_data : JSON.stringify(labellistdata),
				},
				success : function(data) 
				{		
					console.log(data);
					var msg = data;
					if(msg == "ok")
						{
						alert("Successfully uploaded!");
						}
					
					//NProgress.done(true);
					
				},
				error : function(data) {
					alert("error");
					//console.log(data);
				}
			});
	
    		
    	}
    	
    	function openMediaObject()
    	{
    		$("#openMediaObject").modal("show");
    	}
    	
    	function closeMediaObject()
    	{
    		$('#addlabellist').children().each(function(){
    			this.remove();
    			
    		});
    		
    		$("#openMediaObject").modal("hide");
    		x=0;
    		
    	}
    	
