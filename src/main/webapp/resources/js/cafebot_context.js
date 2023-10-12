var cafebot_context = "."; // /cafe-bot/menu // .

var cafebot_context_cafebot = "/cafe-bot";

// var cafebot_context =".";

var jsversion = "3.0.1";




var protocol = location.protocol; //https:  or http:
var domain = location.hostname;
var port = location.port;


var pycode = "https://github.com/easydatain/PyCode";

var apiurl= protocol+"//"+domain;
var help_url= "https://"+domain+":8443/help/#";
var jupyternotebook ="http://"+domain+":8888";
var help = ""+protocol+"://demo.cafebot.ai:"+port+"/help/index.html" ;
var rstudio = "http://"+domain+":8787";      
	

  
	if (domain == undefined)
	{
		domain ="";
	}


var urlforcafebot = "http://" + domain + ":" + "5252/cafebotPredict";



var urlforcafebottensorflow = "http://" + domain + ":"+ "5252/cafebotPredict";


var urlformojo = apiurl + ":" + port + "/cafe-bot/api/getPrediction";

$(document).on('mouseleave', "[data-toggle]", function() {
	console.log('hi');
	$("[data-toggle]").tooltip('hide');
});

function setJsonafterSave() {
	var originaltablename = "";

	app.view
			.getFigures()
			.each(
					function(i, figure) {

						// console.log("figure.id---"+figure.id);
						if (figure.id == $("#shape_id").val()) {

							var temptablenamename = "";
							if (figure.getUserData().filter != undefined) {

								console.log("figure.getUserData().filter ---"
										+ figure.getUserData().filter);

								// publishh2o //modelt //predicth //predict

								if (figure.getUserData().filter == "table"
										|| figure.getUserData().filter == "cleandata"
										|| figure.getUserData().filter == "model"
										|| figure.getUserData().filter == "modelt"
										|| figure.getUserData().filter == "modelh"
										|| figure.getUserData().filter == "modelh3"
										|| figure.getUserData().filter == "modelknn"
										|| figure.getUserData().filter == "modelsvm"
										|| figure.getUserData().filter == "modelextratrees"
										|| figure.getUserData().filter == "modeldt"
										|| figure.getUserData().filter == "modelgbm"
										|| figure.getUserData().filter == "modelrf"
										|| figure.getUserData().filter == "modellr"
										|| figure.getUserData().filter == "modellnr"
										|| figure.getUserData().filter == "modelaf"
										|| figure.getUserData().filter == "modelxgboost"
										|| figure.getUserData().filter == "modelcatboost"
										|| figure.getUserData().filter == "modelnb"
										|| figure.getUserData().filter == "publish"
										|| figure.getUserData().filter == "publish"
										|| figure.getUserData().filter == "predict"
										|| figure.getUserData().filter == "predictmojo"
										|| figure.getUserData().filter == "predicth"
										|| figure.getUserData().filter == "union"
										|| figure.getUserData().filter == "fuzzyjoin" 
										|| figure.getUserData().filter == "modelcnn"
										|| figure.getUserData().filter == "nlpshape"
										|| figure.getUserData().filter == "objlabel"
										|| figure.getUserData().filter == "videolabel"
										|| figure.getUserData().filter == "recommendation"
										|| figure.getUserData().filter == "multirowshape" 
										|| figure.getUserData().filter == "cv" 
										|| figure.getUserData().filter == "predictcnn" 
										|| figure.getUserData().filter == "modeldeploy"
										|| figure.getUserData().filter == "predictdeployedmodel"
										|| figure.getUserData().filter == "annotator" 
										|| figure.getUserData().filter == "sparkmodel" 
										|| figure.getUserData().filter == "sparkpredict" 
										|| figure.getUserData().filter == "sparkpipeline" 
										|| figure.getUserData().filter == "unionall"	
										|| figure.getUserData().filter == "doxai"
										|| figure.getUserData().filter == "ocr"
										|| figure.getUserData().filter == "doxaipredict" 	
									) 
								{

									originaltablename = $("#table_name").val();

									if (figure.getUserData().filter == "table"
											|| figure.getUserData().filter == "cleandata") {
										tablename = $("#table_name").val();
									} else {
										tablename = getTileType(figure
												.getUserData().filter)
												+ ":" + $("#table_name").val();
									}

									console.log("input name ---" + tablename);
								} 
								else if (figure.getUserData().filter == "formula"
										|| figure.getUserData().filter == "decode"
										|| figure.getUserData().filter == "range"
										|| figure.getUserData().filter == "sum"
										|| figure.getUserData().filter == "encryption"
										|| figure.getUserData().filter == "validtype"
										|| figure.getUserData().filter == "roundingoff"
										|| figure.getUserData().filter == "flagrow"
										|| figure.getUserData().filter == "dateformat"
										|| figure.getUserData().filter == "splitvalue"		
										) 
										{
									originaltablename = $("#comp_name").val();
									tablename = getTileType(figure
											.getUserData().filter)
											+ ":" + $("#comp_name").val();
									console.log("comp_name name ---"
											+ tablename);
								}

								else if (figure.getUserData().filter == "join"
										|| figure.getUserData().filter == "union") {
									var lprevcomponentid = figure.getUserData().lprevcomponentid;
									lprevcomponentid = lprevcomponentid
											.replace("false", "");
									var rprevcomponentid = figure.getUserData().rprevcomponentid;
									rprevcomponentid = rprevcomponentid
											.replace("false", "");

									var tablename = "";
									console.log("inside join");
									console.log("lprevcomponentid---"
											+ lprevcomponentid);
									temptablenamename = getFigureTablename(lprevcomponentid);
									console.log("temptablenamename----"
											+ temptablenamename);
									tablename = temptablenamename;

									console.log("rprevcomponentid---"
											+ rprevcomponentid);
									temptablenamename = getFigureTablename(rprevcomponentid);
									console.log("temptablenamename----"
											+ temptablenamename);

									originaltablename = tablename + "_"
											+ temptablenamename;
									// tablename = tablename
									// +"_"+temptablenamename ;
									tablename = getTileType(figure
											.getUserData().filter)
											+ ":"
											+ tablename
											+ "_"
											+ temptablenamename;

								} 
								else 
								{
									var prevcomponentid = figure.getUserData().prevcomponentid;
									console.log("outside join ---"
											+ prevcomponentid);

									prevcomponentid = prevcomponentid.replace(
											"false", "");
									tablename = getFigureTablename(prevcomponentid);
									originaltablename = tablename;
									tablename = getTileType(figure
											.getUserData().filter)
											+ ":" + tablename;

								}
							}

							console.log("originaltablename-----------"
									+ originaltablename);
							if ($("#table_name").val() == ""
									|| $("#table_name").val() == undefined
									|| $("#table_name").val() == "undefined") {
								$("#table_name").val(originaltablename)
										.change();
							}

							if (figure.getUserData().filter != "table") {

								figure.getUserData().table_name = $(
										"#table_name").val();
								console.log("table changed");
							}

							console.log("figure true----");
							console.log(figure);
							figure.setColor(redcolor);
							// console.log(figure.label);

							if (tablename == "null" || tablename == "undefined"
									|| tablename == undefined
									|| tablename == "") {
								tablename == "N/A";
							}

							console.log("tablename-----------" + tablename);

							figure.label.setText(tablename);

							/*
							 * if (figure.getUserData().filter == "join" ||
							 * figure.getUserData().filter == "table" ||
							 * figure.getUserData().filter == "source" ||
							 * figure.getUserData().filter == "cleandata" ||
							 * figure.getUserData().filter == "formula" ||
							 * figure.getUserData().filter == "decode" ||
							 * figure.getUserData().filter == "range" ||
							 * figure.getUserData().filter == "sum" ||
							 * figure.getUserData().filter == "where" ||
							 * figure.getUserData().filter == "sort" ||
							 * figure.getUserData().filter == "mask" ) {
							 * figure.label.setText(tablename); }
							 */

							// figure.setBackgroundColor(redcolorbg);

							// console.log(figure.getPorts());
							console.log("ports--------");
							figure
									.getPorts()
									.each(
											function(i, port1) {

												// console.log("filter port1
												// ******** -----",port1);
												// console.log("filter
												// port1.cssClass ********
												// -----"+port1.cssClass);

												if (port1.cssClass == "draw2d_OutputPort") {

													var portname = port1.name;
													console
															.log("portname --** ::"
																	+ portname);
													var compid = $("#shape_id")
															.val();

													// to add false port
													// condition in filter
													// propagation
													if (portname
															.includes("outputF_")) {
														compid = compid
																+ "false";
														console
																.log("compid --** ::"
																		+ compid);
													}

													// console.log("filter enter
													// recurGlobal");
													fid = 0;
													port1
															.getConnections()
															.each(
																	function(i,
																			conn1) {
																		// conn1.
																		console
																				.log("before recurdelete");
																		// console.log(conn1.targetPort);
																		recurGlobal(
																				conn1.targetPort,
																				$(
																						"#property_name")
																						.val(),
																				compid,
																				tablename);
																		// console.log(conn.sourcePort.getParent().getUserData().fileID);
																	});
												}
											});

							// recurGlobal(figure.targetPort,$("#property_name").val(),$("#shape_id").val());

						}

						displayJSON(app.view);
						SetJsonSaved();
					});

}

function SetJsonSaved() {
	// alert("in click");
	// alert("jsondata"+$("#json").text());
	$.ajax({
		method : "POST",
		url : "/cafe-bot/upload/async/setJsonb",
		data : {
			id : $("#bpid").val(),
			json : $("#json").text()
		}
	}).success(function() {
		// $.notify("Success!","success");
		// $("#btncanvassave").notify("Success!","success");
		// $("#SaveJson").notify("Success!","success");
		// console.log("Success!");
	}).error(function() {
		// $.notify("Error!","error");
		$("#btncanvassave").notify("Error!", "error");
		$("#SaveJson").notify("Error!", "error");
		// alert("error");
	});
}

function returnNotsaved() {
	console.log("property_name----" + $("#property_name").val());
	console.log("txtFilterID----" + $("#txtFilterID").val());

	if ($("#property_name").val() == 0) {
		$.notify("Not saved!", "info");
		return;
	}
	/*
	 * if ($("#txtFilterID").val() ==0) { $.notify("Not saved","info"); return; }
	 */
}

function getFigureTablename(shapeid) {

	var tablename = "";
	app.view
			.getFigures()
			.each(
					function(i, figure) {

						console.log("figure.id---" + figure.id);
						console.log("shapeid  ---" + shapeid);
						var tempshapeid = shapeid + "";
						if (figure.id == tempshapeid) {
							console.log("matched");
							tablename = figure.getUserData().table_name;
							console
									.log("tablename-------------------------------------"
											+ tablename);
							// break;
						}
					});
	return tablename;
}

function getTileType(filter) {
	console.log("enter filter---" + filter);
	if (filter == "table") 
	{
		filter = "Input";
	} else if (filter == "source") {
		filter = "Source";
	} else if (filter == "clean") {
		filter = "Cleansing";
	} else if (filter == "decode") {
		filter = "Decode";
	} else if (filter == "range") {
		filter = "Range";
	} else if (filter == "sum") {
		filter = "Aggregation";
	} else if (filter == "where") {
		filter = "Filter";
	} else if (filter == "sort") {
		filter = "Sort";
	} else if (filter == "mask") {
		filter = "Mask";
	} else if (filter == "query") {
		filter = "Query";
	} else if (filter == "join") {
		filter = "Join";
	} else if (filter == "fuzzyjoin") {
		filter = "Fuzzy Join";
	} else if (filter == "union") {
		filter = "Union";
	} else if (filter == "Pivot") {
		filter = "Pivot";
	} else if (filter == "splitper") {
		filter = "Split";
	} else if (filter == "rank") {
		filter = "Rank";
	} else if (filter == "aggregatequery") {
		filter = "Aggregate Query";
	} else if (filter == "aggregatepivot") {
		filter = "Aggregate Pivot";
	} else if (filter == "publish") {
		filter = "Publish";
	} 
	else if (filter == "predict") {
		filter = "Predict";
	} 
	else if (filter == "predictmojo") {
		filter = "Predict-H2O";
	} 
	else if (filter == "predicth") {
		filter = "Scoring";
	} else if (filter == "cv") {
		filter = "CVision";
	} else if (filter == "feature") {
		filter = "Feature";
	} else if (filter == "recipe") {
		filter = "PyCode";
	} else if (filter == "cluster") {
		filter = "Cluster";
	} else if (filter == "outlier") {
		filter = "Outlier";
	} else if (filter == "dimen") {
		filter = "Dimension";
	} else if (filter == "normalization") {
		filter = "Normalization";
	} else if (filter == "geodata") {
		filter = "Geodata";
	} else if (filter == "timeinterpolate") {
		filter = "Timeinterpolate";
	} else if (filter == "encoder") {
		filter = "Encoder";
	} else if (filter == "duplication") {
		filter = "Duplication";
	} else if (filter == "stratified") {
		filter = "Stratified";
	} else if (filter == "missingvalue") {
		filter = "Missing";
	} else if (filter == "sampmethods") {
		filter = "Sampling";
	} else if (filter == "fakedata") {
		filter = "Generate Data";
	} else if (filter == "correlation") {
		filter = "Correlation";
	} else if (filter == "databinning") {
		filter = "Binning";
	} else if (filter == "model") {
		filter = "autoCruise";
	} else if (filter == "modelt") {
		filter = "Tensor";
	} else if (filter == "modelh") {
		filter = "Model";
	} else if (filter == "modelh3") {
		filter = "autoCruise H2O-3";
	} else if (filter == "transform") {
		filter = "Tensor";
	} else if (filter == "formula") {
		filter = "Expression";
	} else if (filter == "modelknn") {
		filter = "KNN";
	} else if (filter == "modelsvm") {
		filter = "SVM";
	} else if (filter == "modelextratrees") {
		filter = "ET";
	} else if (filter == "modeldt") {
		filter = "DT";
	} else if (filter == "modelgbm") {
		filter = "GBM";
	} else if (filter == "modelrf") {
		filter = "Randomforest";
	} else if (filter == "modellr") {
		filter = "GLM";
	} else if (filter == "modellnr") {
		filter = "I-Stratify";
	} else if (filter == "modelcatboost") {
		filter = "CatBoost";
	} else if (filter == "modelxgboost") {
		filter = "XGBoost";
	} else if (filter == "modelnb") {
		filter = "NaiveBayes";
	} else if (filter == "modelaf") {
		filter = "Featurize";
	} 
	else if (filter == "modelhretrain") {
		filter = "Retrain";
	} 
	 else if (filter == "modelcnn") {
			filter = "iSegment";
		} 
	
	 else if (filter == "typeconversionh") {
			filter = "Type Conversion";
		} 
	 else if (filter == "easyocr") {
			filter = "Easy Ocr";
		} 
	 else if (filter == "imagesegment") {
			filter = "Image Augmentation";
		} 
	
	 else if (filter == "videolabel") {
			filter = "Video Label";
		} 
	 else if (filter == "objlabel") {
			filter = "Img label";
		} 
	 else if (filter == "nlpshape") {
			filter = "NLP";
		} 
	 else if (filter == "recommendation") {
			filter = "Recommendation";
		} 
	 else if (filter == "multirowshape") {
			filter = "Multi row";
		} 
	else if (filter == "encryption") {
			filter = "Encryption";
		} 
	else if (filter == "validtype") {
		filter = "Validation";
	}	
	else if (filter == "roundingoff") {
		filter = "Round";
	}	
	else if (filter == "flagrow") {
		filter = "Flag";
	}	
	else if (filter == "dateformat") {
		filter = "Dateformat";
	}	
	else if (filter == "splitvalue") {
		filter = "splitvalue";
	}	
	else if (filter == "predictcnn") {
		filter = "Predict-iSegment";
	}	
	else if (filter == "modeldeploy") {
		filter = "Facebot";
	}	
	else if (filter == "predictdeployedmodel") {
		filter = "Facebot prediction";
	}	
	else if (filter == "sparkmodel") {
		filter = "SparkModel";
	}	
	else if (filter == "sparkpredict") {
		filter = "SparkPredict";
	}	
	else if (filter == "sparkpipeline") {
		filter = "SparkPipeline";
	}	
	else if (filter == "unionall") {
		filter = "Union";
	}	
	else if (filter == "speechTotextShape") {
		filter = "Speech";
	}	
	else if (filter == "ocr") {
		filter = "OCR";
	} 
	else if (filter == "doxai") {
		filter = "Doxai";
	}
	else if (filter == "doxaipredict") {
		filter = "DoxaiPredict";
	}
	else if (filter == "cvnew") {
		filter = "CAFEDL";
	}
	else 
	{
		filter = filter;
	}
	
	
	

	console.log("filter----" + filter);
	return filter;
}

// org --url : "/cafe-bot/menu/editing-popup/updateprojectsharing",
// replace -- url :
// cafebot_context+"/filterproperties/readauditlog?projectid="+projectid,

// org --url url: '/cafe-bot/tablelist?connectionid='+dataItem.id+'',
// replace --url:
// cafebot_context_cafebot+'/tablelist?connectionid='+dataItem.id+'',

// org url:'./connection/search?type=API'
// replace url:cafebot_context+'/connection/search?type=API'
