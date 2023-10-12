
<script>
		//alert("barchart---");
	/* 	Highcharts.theme = {
    colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572',
             '#FF9655', '#FFF263', '#6AF9C4'],
    chart: {
        backgroundColor:{
        	style: {
            color: '#696969',
           // font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
        }
        },
        
        
         {
            linearGradient: [0, 0, 500, 500],
            stops: [
                [0, 'rgb(0, 0, 0)'],
                [1, 'rgb(0, 0, 0)']
            ]
        } 
		
    },
    title: {
        style: {
            color: '#cdcdcd',
            font: 'bold 16px "Trebuchet MS", Verdana, sans-serif'
        }
    },
    subtitle: {
        style: {
            color: '#666666',
            font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
        }
    },
    legend: {
        itemStyle: {
            font: '9pt Trebuchet MS, Verdana, sans-serif',
            color: 'Gainsboro'
        },
        itemHoverStyle:{
            color: 'gray'
        },
        
    },
    
   // xa.getLabels().setOverflow(LabelsOverflow.JUSTIFY).getStyle().setCssValue("{ color: 'Gainsboro'}");
        xaxis :  {  
        	labels : {
        		
          Style : {
        	  font: '9pt Trebuchet MS, Verdana, sans-serif',
        	  color: 'Gainsboro'
        		
        	  },
         // text : null
        }
      } ,
      yAxis :  {
    	    labels : {
    	      	  Style : {
    	        	  font: '9pt Trebuchet MS, Verdana, sans-serif',
    	        	  color: 'Gainsboro',
    	        		  stroke: 'none'
    	        	  },
    	    }
      },
      series :  {
    	    data : {
    	    labels : {
    	      enabled : false,
    	      Style : {	        	 
	        		  stroke: 'none'
	        	  },
    	     
    	    }
    	    
    	    } ,
    	    
    	     data : {
    	    label : {
    	      enabled : false,
    	      stroke:'none'
    	    },
    	   } 
      },
      rect:{
	    	Style:{
	    		stroke: ""
	    		/* noStroke(),
	    		fill:'none',
	    		strokeStyle : 'none' 
	        },
	    }
      series : {
    	  dataSeries :{
	      	  Style : {
	      		stroke: 'none'
	        	  },
	    
    	  }
    	  } 
    
}; */
// Apply the theme
		//Highcharts.setOptions(Highcharts.theme);
	 	//${model.globalOptions == null ? "" : "Highcharts.setOptions(Highcharts.theme);"}
	 	
	 	${model.globalOptions == null ? "" : "Highcharts.setOptions("+=model.globalOptions+=");"}
		var chart = Highcharts.chart(${model.containerID}, ${model.chartOptions}); 
		/* Highcharts.setOptions(Highcharts["_modules"]["Extensions/Themes/SandSignika.js"].options); */

			
		setTimeout(() =>{
			chart.redraw();
		}, 1000);
		
		
		
		/* function save_as_svg()
		{
			 var chart = $('#container').highcharts();
	            chart.redraw()
	            svg = chart.getSVG()
	                .replace(/</g, '\n&lt;') // make it slightly more readable
	                .replace(/>/g, '&gt;');

	        document.body.innerHTML = '<pre>' + svg + '</pre>';
	        console.log("svg   "+svg);
			
		}
		
		 */
		
		
		
		
		
		
		
		
		
		
		
	
		
		
		
		
		
	/* 	function download()
		{
		var svg = chart.getSVG({
            chart:{
                width:100,
                height:100
            }
        });
         //.replace(/</g, '\n&lt;') // make it slightly more readable
           // .replace(/>/g, '&gt;');
		// document.body.innerHTML = '<pre>'+ svg +'</pre>';
		
		console.log("svg   "+svg);
		//svg.prepend("<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC -//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd>");
				//svg = "<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC -//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd>"+svg;
				  document.body.innerHTML = '<pre>'+ svg +'</pre>';
		
				 // console.log("svg########   "+svg);
				  
				  
		//svgAPI(svg);
		
		
		} */
		
		
		
		
		
	    </script>
	
		
		
		
		
		
	  


