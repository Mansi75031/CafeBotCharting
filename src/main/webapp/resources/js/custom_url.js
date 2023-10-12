
var urladdress = "";
	function geturl()
	{
		//window.jQuery = jQuery;
		
		
//		if (typeof window !== "undefined") {
//			  width = window.innerWidth;
//			  height = window.innerHeight;
//			}
//
//			console.log(width); // 0 if on the server, window width if on the client
//			console.log(height);

		
		urladdress = "";
		var url = window.location.href;
		console.log("url---"+url);
		var splitUrl = url.split('/');
		for (var j = 0; j < splitUrl.length; j++)
		{
			if (splitUrl[j] !="menu" )
			{
				if (splitUrl[j] =="" &&  j == 1)
				{
					urladdress += "//";	
				}
				else 
				{
					if (j==0)
					{
						urladdress += splitUrl[j];
					}
					else 
					{
						urladdress += splitUrl[j]+"/";
					}
					
				}
				console.log(splitUrl[j]);
			}
			else if (splitUrl[j] =="menu")
			{
				//urladdress += splitUrl[j]+"/";
				break;
			}
		}
		console.log("url---"+url);
		return urladdress;
	}
	
geturl();
	
	

var autocruizedashboard = "https://"+domain+":8585/index.jsp"; 

var autocruizetensordashboard = "https://"+domain+":8585/index_tf.jsp"; 

var autocruizeh2o3dashboard = "https://"+domain+":8585/index_h2o3.jsp"; 

var protocol = location.protocol; //https:  or http:
var domain = location.hostname;
var port = location.port;



var pycode = "https://github.com/easydatain/PyCode";
var cafebot_viz = "http://"+domain+":8088/login/"; 
var apiurl= protocol+"//"+domain;
var help_url= ""+protocol+"://"+domain+":"+port+"/help/#";
var jupyternotebook =""+protocol+"://"+domain+":8888";
var help = "https://demo.cafebot.ai:"+port+"/help/index.html" ;
var rstudio = ""+protocol+"://"+domain+":8787";  





var customli ='<li><a href='+pycode+' target="_blank"><i class="os-icon os-icon-slack"></i><span><fmt:message key="label.pycode" /></span></a></li><li><a href='+jupyternotebook+'  target="_blank">	<i class="os-icon os-icon-agenda-1"></i><span><fmt:message key="label.jupytcenotebook" /></span></a></li><li><a href='+rstudio+' target="_blank"><i class="os-icon os-icon-agenda-1"></i><span><fmt:message key="label.rstudio" /></span></a></li><li>	<a href='+help+' target="_blank"><i class="os-icon os-icon-help-circle"></i><span><fmt:message key="label.help" /></span></a></li>';




		
	function getParam(param)
	{
		   return new URLSearchParams(window.location.search).get(param);
	}
