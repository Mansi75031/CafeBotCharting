
function resetPage ()
	{
	 $("#TextBoxContainer").html("");
	getSavedFilterData();
	
	}
$(document).ready(function(){
    $('input[type="checkbox"]').click(function(){
        if($(this).prop("checked") == true){
            //alert("Checkbox is checked.");
        	rangeCount = $("#rangeitr").val();
            addRangeDiv(rangeCount);
            //console.log("rangeCount::"+rangeCount);
            $("#rangeitr").prop('disabled', false);
            //$("#TextBoxContainer").show();

        }
        else if($(this).prop("checked") == false){
            //alert("Checkbox is unchecked.");
        	removeRangeDiv();
            $("#rangeitr").prop('disabled', true);
            rangeCount = $("#rangeitr").val();
             //console.log("rangeCount::"+rangeCount);
             //$("#TextBoxContainer").hide();
        }
    });

  
	$("#rangeitr11").on('blur', function(e) {
		  
		 if($(this).val() > 10)
	    {
	      $(this).val('10');
	      var rangeCount = $("#rangeitr").val();
	      //alert("rangeCount---"+rangeCount);
	         addRangeDiv(rangeCount);
	      return false;
	    }
	    else  if($(this).val() < 2)
	    {
		      $(this).val('2');
		      var rangeCount = $("#rangeitr").val();
		     // alert("rangeCount---"+rangeCount);
		         addRangeDiv(rangeCount);
		      return false;
		}
		 
	  });
    
    
    $("#btnGet").bind("click", function () {
        
    	$("input[name=DynamicTextBox1]").each(function () 
        {
    		lable = lable +","+$(this).val() ;
        });
        //alert(values);
        $("input[name=DynamicTextBox2]").each(function () 
            {
                maxbound = maxbound +","+$(this).val() ;
            });
         //alert(values);
         $("input[name=DynamicTextBox2]").each(function () 
           {
        	 minbound = minbound +","+$(this).val() ;
           });
         //alert(values);
                        
    }); 
    
    
    $('#selectcustomized').css('color','gray');
    $('#selectcustomized').change(function() {
       var current = $('#select').val();
       if (current != 'null') {
           $('#selectcustomized').css('color','#c3c1c1');
       } else {
           $('#selectcustomized').css('color','#c3c1c1');
       }
       addRangeDiv();
    }); 
    
    $('#ddlField').change(function() 
    {
   			 $("#customrangecheck").prop("checked", false);
			 rangeCount = 0;
			 $("#ubound").val('');
			 $("#lbound").val('');
			 $("#TextBoxContainer").html("");
			 $("#rangeitr").val(2)
    }); 
    
});

var rangeCount = 0;

	function getrangeITRvalue()
		{
		 var itrvalue = $("#rangeitr").val()
		//alert("itrvalue="+itrvalue);
		 //add div
		 
		 if (itrvalue.trim()== "" || itrvalue.trim()== "+" || itrvalue.trim()== "++" || itrvalue.trim()== "-" || itrvalue.trim()== "--")
		 {
			 $("#rangeitr").notify("Please enter integer only!","info");
			 $("#rangeitr").val(rangeCount);
			 return;
		 }
		 
		 if (parseInt(itrvalue) > 10)
		 {
			 //alert("Maximum bounds allowed is 10!");
			 $("#rangeitr").val(rangeCount);
			 $("#rangeitr").notify("Maximum bounds allowed is 10!","info");
			 return;
		 }
		 
		 if (parseInt(itrvalue) < 2)
		 {
			 //alert("Minimum bounds allowed is 2!");
			 $("#rangeitr").val(rangeCount);
			 $("#rangeitr").notify("Minimum bounds allowed is 2!","info");
			 return;
		 }
		 
	 if (parseInt(itrvalue) > parseInt(rangeCount))
		 {
		// alert("if--"+itrvalue+"-rangeCount-"+rangeCount);
		 //
			if($("#customrangecheck").prop("checked") == true)
				 {
			//alert("Checkbox is checked.");
				 
				//var div = $("<div id='data"+parseInt(itrvalue)+"'/>");
				  //    div.html(GetDynamicTextBox(""));
				    //  $("#TextBoxContainer").append(div);
				     
				      var rangeCount1 = $("#rangeitr").val();
				     //alert("rangeCount---"+rangeCount1);


				         addRangeDiv(rangeCount1); 
				      
				      
				 }
				else if($("#customrangecheck").prop("checked") == false)
				{
				        //alert("Checkbox is unchecked.");
				        	
				}
	 }
	 // remove div
	 else if (parseInt(itrvalue) < parseInt(rangeCount) )
	 {
		 //$("#data"+(parseInt(itrvalue)+1)).remove();
			
		 if($("#customrangecheck").prop("checked") == true)
			 {
			      var rangeCount1 = $("#rangeitr").val();
			         addRangeDiv(rangeCount1); 
			 }
			else if($("#customrangecheck").prop("checked") == false)
			{
			        //alert("Checkbox is unchecked.");
			        	
			}
	 }
	 else 
	 {
		 
	 }
	 	
	 	rangeCount = parseInt(itrvalue);
	}

var i;
 

 var addeduinout =0;
var idindex =0;

function addRangeDiv(index)
{
	//alert("2 index----"+index);
	 //$("#TextBoxContainer").html("");
	//removeRangeDiv(index);

	//console.log("rangeCount_::"+rangeCount);

	//console.log(rangeCount);
//alert("parseInt(index)::"+parseInt(index));
//alert("parseInt(addeduinout)::"+parseInt(addeduinout));

    if (parseInt(index) > addeduinout )
    {
    	//add
    	//alert("add")

    	//alert("parseInt(index)::"+parseInt(index));

    	//alert("addeduinout::"+addeduinout);
        
        var finaladd = parseInt(index) - addeduinout;

       //alert("finaladd::"+finaladd);
				 //$("#data"+index).remove();
				var div="";
				 for (i = 1; i <= finaladd; i++) 
				  {
					//alert("i::"+i);
                        idindex = idindex+1;
					  div = $("<div id='data"+idindex+"' class='removefield'/>");
				      div.html(GetDynamicTextBox());
				      //GetDynamicTextBox()
				      $("#TextBoxContainer").append(div);

				      //alert("addeduinout::"+addeduinout);
				      
                      addeduinout =addeduinout + 1;

				}

				$("#TextBoxContainer").append(div);


    }
     
    else if(parseInt(index) < addeduinout)
    {
    	//alert("hi")
    	//if (parseInt(index) > 0)
    	{  
    		//delete
         var count =0;
          $( ".removefield" ).each(function() 
          {

          	  if (count < parseInt(index))
          	  {
          	  	//alert("hi count")
               //$("#TextBoxContainer").append(div);
          	  }
          	  else 
          	  {
          	  	//alert("delete");

          	  	$(this).remove();
addeduinout = addeduinout -1;
                //alert(  $('.removefield').remove());
          	  	//delete
          	  }
				count = count +1;

				//alert("count::"+count);


          });


    	}

    }


	//rangeCount++;
	//console.log("rangeCount--::"+rangeCount);
	 //index--;
}




// function newGetDynamicTextBox(){
//        return='<table class="table table-bordered table-hover" id="dynamic_field">\
//               <tr>\
//                 <td><input type="text" name = "DynamicTextBox1" class="form-control name_list" /></td>\
//                 <td><input type="number" name = "DynamicTextBox2"  class="form-control name_email"/></td>\
// 				<td><input type="number" name = "DynamicTextBox3" class="form-control "/></td>\
//                 <td><button type="button" name="add" id="add" class="btn btn-primary">Add More</button></td>\
//               </tr>\
//             </table>';
//         }


//         $("#add").click(function(){
   
//    i++;
//       $('#dynamic_field').append('<tr id="row'+i+'"><td><input type="text" name = "DynamicTextBox1" class="form-control name_list"/></td><td><input type="number" name = "DynamicTextBox2" placeholder="Enter your Email" class="form-control name_email"/></td>	<td><input type="number" name = "DynamicTextBox3"  class="form-control "/></td><td><button type="button" name="remove" id="'+i+'" class="btn btn-danger btn_remove">X</button></td></tr>');  
//     });

var k=1;
function GetDynamicTextBox(value) {
	
	//alert(value);
    return '<table><tr><td><div class="cb-range-Label"><div class="cb-input-css mr-1"><input name = "DynamicTextBox1" class="form-control" type="text" value = "" /></div></div></td> <td><div class="cb-range-Label"><div class="cb-input-css mr-1"><input name = "DynamicTextBox2" class="form-control" type="number" value = "" /></div></div></td> <td><div class="cb-range-Label"><div class="cb-input-css mr-1"><input name = "DynamicTextBox3" class="form-control" type="number" value = "" /></div></div></td><td onclick="removeRangeDiv('+k+')" id="removerow('+k+')"><i class="os-icon os-icon-trash-2" ></i></td></tr></table>'
    k++;
}



function GetDynamicTextBoxwithvalue(value1,value2,value3) {
	//alert("value1--"+value1);
    return '<table><tr><td><div class="cb-range-Label"><div class="cb-input-css mr-1"><input name = "DynamicTextBox1" type="text" class="form-control" value = "'+value1+'" /></div></div></td> <td><div class="cb-range-Label"><div class="cb-input-css mr-1"><input name = "DynamicTextBox2" class="form-control" type="number" value = "'+value2+'" /></div></div></td> <td><div class="cb-range-Label"><div class="cb-input-css mr-1"><input name = "DynamicTextBox3" class="form-control" type="number" value = "'+value3+'" /></div></div></td></tr></table>'
}



//changed to new method 
function GetDynamicTextBox_1(value) {
	//alert("value2--"+value);
    return '<table><tr><td><div class="cb-range-Label"><div class="cb-input-css mr-1"><input name = "DynamicTextBox1" class="form-control" type="text" value = "" /></div></div></td> <td><div class="cb-range-Label"><div class="cb-input-css mr-1"><input name = "DynamicTextBox2" class="form-control" type="text" value = "" /></div></div></td> <td><div class="cb-range-Label"><div class="cb-input-css mr-1"><input name = "DynamicTextBox3" class="form-control" type="text" value = "" /></div></div></td></tr></table>'
}





//changed to new method 
function GetDynamicTextBoxwithvalue_1(value1,value2,value3) {
	//alert("value1--"+value1);
    return '<table><tr><td><div class="cb-range-Label"><div class="cb-input-css mr-1"><input name = "DynamicTextBox1" type="text" class="form-control" value = "'+value1+'" /></div></div></td> <td><div class="cb-range-Label"><div class="cb-input-css mr-1"><input name = "DynamicTextBox2" class="form-control" type="text" value = "'+value2+'" /></div></div></td> <td><div class="cb-range-Label"><div class="cb-input-css mr-1"><input name = "DynamicTextBox3" class="form-control" type="text" value = "'+value3+'" /></div></div></td></tr></table>'
}



function removeRangeDiv(id)
{
	alert("remove")
	//console.log("rangeCount__::"+rangeCount)

	//  $("#TextBoxContainer").html("");
	
     // $('#data'+id).remove();  


	
	
	$("#data"+id).remove();

	$("#rangeitr").val(rangeCount);

	 addeduinout =addeduinout-1;

	 //$("#rangeitr").val(rangeCount);

	 //rangeCount1=rangeCount1-1;

	 
	
}





// function deletefield(value){
// 	$("#data"+value).remove();

// }

