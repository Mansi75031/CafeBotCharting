package in.easydata.controller;


import java.io.IOException;
import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.Set;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.io.Reader;
import java.io.StringReader;
import java.io.UnsupportedEncodingException;
import java.io.Writer;
import java.net.HttpURLConnection;
import java.net.ProtocolException;
import java.net.URI;
import java.net.URL;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;
import java.nio.charset.StandardCharsets;
import java.nio.file.Paths;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.UUID;

import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import org.apache.batik.transcoder.TranscoderException;
import org.apache.batik.transcoder.TranscoderInput;
import org.apache.batik.transcoder.image.PNGTranscoder;
import org.apache.http.HttpRequest;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.util.Units;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;
import org.joda.time.Seconds;

import com.google.gson.JsonParser;
import com.fasterxml.jackson.databind.JsonNode;

import com.google.gson.JsonObject;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.TreeMap;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;

import org.apache.batik.transcoder.TranscoderOutput;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.postgresql.util.PSQLException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.MappingIterator;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.dataformat.csv.CsvMapper;
import com.fasterxml.jackson.dataformat.csv.CsvSchema;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
//import com.google.api.client.http.HttpRequest;
import com.hyjavacharts.chart.Highchart;
import com.hyjavacharts.model.common.themes.HighchartTheme;
import com.hyjavacharts.model.highcharts.ChartOptions;
import com.hyjavacharts.model.highcharts.XAxis;
import com.hyjavacharts.model.highcharts.YAxis;
import com.hyjavacharts.model.highcharts.constants.ChartType;
import com.hyjavacharts.model.highcharts.constants.LabelsOverflow;
import com.hyjavacharts.model.highcharts.series.SeriesHeatmap;
import com.jayway.jsonpath.Configuration;
import com.jayway.jsonpath.JsonPath;
import com.microsoft.aad.adal4j.AuthenticationContext;
import com.microsoft.aad.adal4j.AuthenticationResult;
import com.microsoft.aad.adal4j.ClientCredential;
import com.spire.ms.System.DateTime;

import in.easydata.ChartEntity;
import in.easydata.DBConClickHouse;
import in.easydata.DBconnection;
import in.easydata.DataHelper;
import in.easydata.Logging_GFG;
import in.easydata.charts.GetDataHighcharts;
import in.easydata.charts.HighchartsBarNStackBar;
import in.easydata.charts.HighchartsBubblechart;
import in.easydata.charts.HighchartsBulletChart;
import in.easydata.charts.HighchartsCluster;
import in.easydata.charts.HighchartsGuage;
import in.easydata.charts.HighchartsHeatmap;
import in.easydata.charts.HighchartsLine;
import in.easydata.charts.HighchartsOrganization;
import in.easydata.charts.HighchartsPie;
import in.easydata.charts.SQLPojo;
import in.easydata.charts.SetHighcharts_Properties;
import kong.unirest.Unirest;
import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

import javax.net.ssl.*;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;

/*@EnableKafka*/
//@RequestMapping(value = "/menu/")
@Controller
public class Visualanalytics{

	static DBConClickHouse dbcon = new DBConClickHouse();
	static Connection con = dbcon.getConnection();

	static DBconnection dbconpg = new DBconnection();
	static Connection conpg = dbconpg.getConnection();
	
	static Connection conpg2 = dbconpg.getConnection_2();

	GetDataHighcharts getchartdata =new GetDataHighcharts();
	/**
	 * 
	 * @param chartName
	 * @return
	 */
	@RequestMapping("/heatmap_")
	public ModelAndView displayChart__(HttpServletRequest request) {

		Map<String, Object> chartModel = new HashMap<String, Object>();		
		
		
//		ThreadPoolProfile profile = camelContext.getExecutorServiceManager().getDefaultThreadPoolProfile();
//		profile.setPoolSize(5);
//		profile.setMaxPoolSize(10);
	
		chartModel.put("setChart", "true");
		chartModel.put("setTable", "true");
		chartModel.put("setData", tableSchema());
		chartModel.put("setData_", "");
		return new ModelAndView("highchart_heatmap", "model", chartModel);
	}
	
	
	
	@RequestMapping(value = { "/datacorrelation" }, method = RequestMethod.GET)	
	public ModelAndView displayChart_datacorrelation(@RequestParam String chartname) {

		System.out.println("chartname #########  "+chartname);
		ModelAndView modelview = new ModelAndView();
		
		
		modelview.setViewName("/data_correlation");
		System.out.println("modelview #########  "+modelview);
		return  modelview;
	}
	
	@RequestMapping(value = { "/datacorrelation1" }, method = RequestMethod.GET)	
	public ModelAndView displayChart_datacorrelation1(@RequestParam String chartname) {

		System.out.println("chartname #########  "+chartname);
		ModelAndView modelview = new ModelAndView();
		
		
		modelview.setViewName("/data_correlation_");
		System.out.println("modelview #########  "+modelview);
		return  modelview;
	}
	
	@RequestMapping(value = { "/heatmap_json" }, method = RequestMethod.GET)	
	public ModelAndView heatmap_json(@RequestParam String chartname) {

		System.out.println("chartname #########  "+chartname);
		ModelAndView modelview = new ModelAndView();
		
		
		modelview.setViewName("/highchart_heatmap");
		System.out.println("modelview #########  "+modelview);
		return  modelview;
	}
	
	
	@RequestMapping(value = { "/airflow_dag" }, method = RequestMethod.GET)	
	public ModelAndView airflow_dag() {

//		System.out.println("chartname #########  "+chartname);
		ModelAndView modelview = new ModelAndView();
		
		
		modelview.setViewName("/dag_prop");
		System.out.println("modelview #########  "+modelview);
		return  modelview;
	}
	
	
	
	@RequestMapping("/")
	public ModelAndView displayChart(HttpServletRequest request) {

		Map<String, Object> chartModel = new HashMap<String, Object>();		
		chartModel.put("setChart", "true");
		chartModel.put("setTable", "true");
		chartModel.put("setData", tableSchema());
		chartModel.put("setData_", "");
		return new ModelAndView("chart", "model", chartModel);
	}
	
	
	@RequestMapping(value = "/getSVG", method = RequestMethod.POST)	
	public void getSVG(@RequestParam String svg) throws TranscoderException, IOException, InvalidFormatException 
	{
		 String uuid = "b-" + UUID.randomUUID().toString().split("-")[0]; 
		System.out.println("svg   ## "+svg);
		
//		String svg1 = "<?xml version=\"1.0\" standalone=\"no\"?><!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\"><svg version=\"1.1\" class=\"highcharts-root\" style=\"font-family: &quot;Lucida Grande&quot;, &quot;Lucida Sans Unicode&quot;, Arial, Helvetica, sans-serif; font-size: 12px;\" xmlns=\"http://www.w3.org/2000/svg\" width=\"1082\" height=\"398\" viewBox=\"0 0 1082 398\" role=\"img\" aria-label=\"Bar Chart\"><desc>Created with Highcharts 10.3.2</desc><defs><clipPath id=\"highcharts-4a2j3xl-1-\"><rect x=\"0\" y=\"0\" width=\"316\" height=\"759\" fill=\"none\"></rect></clipPath><clipPath id=\"highcharts-4a2j3xl-78-\"><rect x=\"0\" y=\"0\" width=\"316\" height=\"759\" fill=\"none\"></rect></clipPath></defs><rect fill=\"#ffffff\" class=\"highcharts-background\" x=\"0\" y=\"0\" width=\"1082\" height=\"398\" rx=\"0\" ry=\"0\"></rect><rect fill=\"none\" class=\"highcharts-plot-background\" x=\"205\" y=\"46\" width=\"759\" height=\"316\"></rect><g class=\"highcharts-pane-group\" data-z-index=\"0\"></g><g class=\"highcharts-grid highcharts-xaxis-grid\" data-z-index=\"1\"><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"0\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 205 48.5 L 964 48.5\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"0\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 205 65.5 L 964 65.5\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"0\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 205 81.5 L 964 81.5\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"0\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 205 98.5 L 964 98.5\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"0\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 205 115.5 L 964 115.5\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"0\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 205 131.5 L 964 131.5\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"0\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 205 148.5 L 964 148.5\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"0\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 205 165.5 L 964 165.5\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"0\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 205 181.5 L 964 181.5\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"0\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 205 198.5 L 964 198.5\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"0\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 205 214.5 L 964 214.5\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"0\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 205 231.5 L 964 231.5\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"0\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 205 248.5 L 964 248.5\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"0\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 205 264.5 L 964 264.5\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"0\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 205 281.5 L 964 281.5\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"0\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 205 298.5 L 964 298.5\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"0\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 205 314.5 L 964 314.5\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"0\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 205 331.5 L 964 331.5\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"0\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 205 347.5 L 964 347.5\" opacity=\"1\"></path></g><g class=\"highcharts-grid highcharts-yaxis-grid\" data-z-index=\"1\"><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"1\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 204.5 46 L 204.5 362\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"1\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 280.5 46 L 280.5 362\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"1\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 356.5 46 L 356.5 362\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"1\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 432.5 46 L 432.5 362\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"1\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 508.5 46 L 508.5 362\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"1\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 584.5 46 L 584.5 362\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"1\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 659.5 46 L 659.5 362\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"1\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 735.5 46 L 735.5 362\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"1\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 811.5 46 L 811.5 362\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"1\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 887.5 46 L 887.5 362\" opacity=\"1\"></path><path fill=\"none\" stroke=\"#e6e6e6\" stroke-width=\"1\" stroke-dasharray=\"none\" data-z-index=\"1\" class=\"highcharts-grid-line\" d=\"M 964.5 46 L 964.5 362\" opacity=\"1\"></path></g><rect fill=\"none\" class=\"highcharts-plot-border\" data-z-index=\"1\" stroke=\"#cccccc\" stroke-width=\"0\" x=\"205\" y=\"46\" width=\"759\" height=\"316\"></rect><g class=\"highcharts-axis highcharts-xaxis\" data-z-index=\"2\"><text x=\"24.15277099609375\" data-z-index=\"7\" text-anchor=\"middle\" transform=\"translate(0,0) rotate(270 24.15277099609375 204)\" class=\"highcharts-axis-title\" style=\"color: rgb(102, 102, 102); fill: rgb(102, 102, 102);\" y=\"204\">item_category_name</text><path fill=\"none\" class=\"highcharts-axis-line\" stroke=\"#ccd6eb\" stroke-width=\"1\" data-z-index=\"7\" d=\"M 204.5 46 L 204.5 362\"></path></g><g class=\"highcharts-axis highcharts-yaxis\" data-z-index=\"2\"><path fill=\"none\" class=\"highcharts-axis-line\" stroke=\"#ccd6eb\" stroke-width=\"0\" data-z-index=\"7\" d=\"M 205 362 L 964 362\"></path></g><g class=\"highcharts-series-group\" data-z-index=\"3\"><g class=\"highcharts-series highcharts-series-0 highcharts-bar-series highcharts-color-0 highcharts-tracker\" data-z-index=\"0.1\" opacity=\"1\" transform=\"translate(205,46) rotate(90 221.5 537.5) scale(-1 1)\" clip-path=\"url(#highcharts-4a2j3xl-78-)\"><rect x=\"312.5\" y=\"759.5\" width=\"3\" height=\"0\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"308.5\" y=\"735.5\" width=\"3\" height=\"24\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"304.5\" y=\"710.5\" width=\"3\" height=\"49\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"299.5\" y=\"756.5\" width=\"3\" height=\"3\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"295.5\" y=\"752.5\" width=\"3\" height=\"7\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"291.5\" y=\"715.5\" width=\"3\" height=\"44\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"287.5\" y=\"756.5\" width=\"3\" height=\"3\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"283.5\" y=\"750.5\" width=\"3\" height=\"9\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"279.5\" y=\"759.5\" width=\"3\" height=\"0\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"275.5\" y=\"757.5\" width=\"3\" height=\"2\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"270.5\" y=\"759.5\" width=\"3\" height=\"0\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"266.5\" y=\"758.5\" width=\"3\" height=\"1\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"262.5\" y=\"756.5\" width=\"3\" height=\"3\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"258.5\" y=\"736.5\" width=\"3\" height=\"23\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"254.5\" y=\"759.5\" width=\"3\" height=\"0\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"250.5\" y=\"758.5\" width=\"3\" height=\"1\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"245.5\" y=\"741.5\" width=\"3\" height=\"18\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"241.5\" y=\"736.5\" width=\"3\" height=\"23\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"237.5\" y=\"759.5\" width=\"3\" height=\"0\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"233.5\" y=\"756.5\" width=\"3\" height=\"3\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"229.5\" y=\"740.5\" width=\"3\" height=\"19\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"225.5\" y=\"759.5\" width=\"3\" height=\"0\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"220.5\" y=\"758.5\" width=\"3\" height=\"1\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"216.5\" y=\"756.5\" width=\"3\" height=\"3\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"212.5\" y=\"758.5\" width=\"3\" height=\"1\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"208.5\" y=\"750.5\" width=\"3\" height=\"9\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"204.5\" y=\"457.5\" width=\"3\" height=\"302\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"200.5\" y=\"657.5\" width=\"3\" height=\"102\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"196.5\" y=\"721.5\" width=\"3\" height=\"38\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"191.5\" y=\"734.5\" width=\"3\" height=\"25\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"187.5\" y=\"541.5\" width=\"3\" height=\"218\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"183.5\" y=\"752.5\" width=\"3\" height=\"7\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"179.5\" y=\"759.5\" width=\"3\" height=\"0\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"175.5\" y=\"759.5\" width=\"3\" height=\"0\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"171.5\" y=\"552.5\" width=\"3\" height=\"207\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"166.5\" y=\"748.5\" width=\"3\" height=\"11\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"162.5\" y=\"753.5\" width=\"3\" height=\"6\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"158.5\" y=\"48.5\" width=\"3\" height=\"711\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"154.5\" y=\"755.5\" width=\"3\" height=\"4\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"150.5\" y=\"229.5\" width=\"3\" height=\"530\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"146.5\" y=\"714.5\" width=\"3\" height=\"45\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"141.5\" y=\"757.5\" width=\"3\" height=\"2\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"137.5\" y=\"724.5\" width=\"3\" height=\"35\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"133.5\" y=\"718.5\" width=\"3\" height=\"41\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"129.5\" y=\"663.5\" width=\"3\" height=\"96\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"125.5\" y=\"717.5\" width=\"3\" height=\"42\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"121.5\" y=\"741.5\" width=\"3\" height=\"18\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"117.5\" y=\"726.5\" width=\"3\" height=\"33\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"112.5\" y=\"759.5\" width=\"3\" height=\"0\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"108.5\" y=\"738.5\" width=\"3\" height=\"21\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"104.5\" y=\"660.5\" width=\"3\" height=\"99\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"100.5\" y=\"735.5\" width=\"3\" height=\"24\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"96.5\" y=\"759.5\" width=\"3\" height=\"0\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"92.5\" y=\"365.5\" width=\"3\" height=\"394\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"87.5\" y=\"477.5\" width=\"3\" height=\"282\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"83.5\" y=\"757.5\" width=\"3\" height=\"2\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"79.5\" y=\"759.5\" width=\"3\" height=\"0\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"75.5\" y=\"744.5\" width=\"3\" height=\"15\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"71.5\" y=\"758.5\" width=\"3\" height=\"1\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"67.5\" y=\"757.5\" width=\"3\" height=\"2\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"62.5\" y=\"746.5\" width=\"3\" height=\"13\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"58.5\" y=\"758.5\" width=\"3\" height=\"1\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"54.5\" y=\"751.5\" width=\"3\" height=\"8\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"50.5\" y=\"752.5\" width=\"3\" height=\"7\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"46.5\" y=\"752.5\" width=\"3\" height=\"7\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"42.5\" y=\"666.5\" width=\"3\" height=\"93\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"38.5\" y=\"736.5\" width=\"3\" height=\"23\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"33.5\" y=\"758.5\" width=\"3\" height=\"1\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"29.5\" y=\"683.5\" width=\"3\" height=\"76\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"25.5\" y=\"753.5\" width=\"3\" height=\"6\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"21.5\" y=\"759.5\" width=\"3\" height=\"0\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"17.5\" y=\"759.5\" width=\"3\" height=\"0\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"13.5\" y=\"713.5\" width=\"3\" height=\"46\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"8.5\" y=\"755.5\" width=\"3\" height=\"4\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"4.5\" y=\"757.5\" width=\"3\" height=\"2\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect><rect x=\"0.5\" y=\"733.5\" width=\"3\" height=\"26\" fill=\"#2b908f\" stroke=\"#ffffff\" stroke-width=\"1\" opacity=\"1\" class=\"highcharts-point highcharts-color-0\"></rect></g><g class=\"highcharts-markers highcharts-series-0 highcharts-bar-series highcharts-color-0\" data-z-index=\"0.1\" opacity=\"1\" transform=\"translate(205,46) rotate(90 221.5 537.5) scale(-1 1)\" clip-path=\"none\"></g></g><g class=\"highcharts-exporting-group\" data-z-index=\"3\"><g class=\"highcharts-no-tooltip highcharts-button myClass\" stroke-linecap=\"round\" style=\"cursor: pointer;\" transform=\"translate(1048,10)\"><title>Chart context menu</title><rect fill=\"#ffffff\" class=\"highcharts-button-box\" x=\"0.5\" y=\"0.5\" width=\"24\" height=\"22\" rx=\"2\" ry=\"2\" stroke=\"none\" stroke-width=\"1\"></rect><path fill=\"#666666\" d=\"M 6 6.5 L 20 6.5 M 6 11.5 L 20 11.5 M 6 16.5 L 20 16.5\" class=\"highcharts-button-symbol\" data-z-index=\"1\" stroke=\"#666666\" stroke-width=\"3\"></path><text x=\"0\" data-z-index=\"1\" y=\"15.5\" style=\"color: rgb(51, 51, 51); font-weight: normal; fill: rgb(51, 51, 51);\"></text></g></g><text x=\"541\" text-anchor=\"middle\" class=\"highcharts-title\" data-z-index=\"4\" style=\"color: rgb(51, 51, 51); font-size: 18px; fill: rgb(51, 51, 51);\" y=\"24\">Bar Chart</text><text x=\"541\" text-anchor=\"middle\" class=\"highcharts-subtitle\" data-z-index=\"4\" style=\"color: rgb(102, 102, 102); fill: rgb(102, 102, 102);\" y=\"45\"></text><text x=\"10\" text-anchor=\"start\" class=\"highcharts-caption\" data-z-index=\"4\" style=\"color: rgb(102, 102, 102); fill: rgb(102, 102, 102);\" y=\"395\"></text><g class=\"highcharts-legend highcharts-no-tooltip\" data-z-index=\"7\" transform=\"translate(976,184)\"><rect fill=\"none\" class=\"highcharts-legend-box\" rx=\"0\" ry=\"0\" stroke=\"#999999\" stroke-width=\"0\" x=\"0\" y=\"0\" width=\"95\" height=\"26\"></rect><g data-z-index=\"1\"><g><g class=\"highcharts-legend-item highcharts-bar-series highcharts-color-0 highcharts-series-0\" data-z-index=\"1\" transform=\"translate(8,3)\"><text x=\"21\" text-anchor=\"start\" data-z-index=\"2\" y=\"15\" style=\"color: rgb(51, 51, 51); cursor: pointer; font-size: 12px; font-weight: bold; fill: rgb(51, 51, 51);\">sum_item_</text><rect x=\"2\" y=\"4\" width=\"12\" height=\"12\" fill=\"#2b908f\" rx=\"6\" ry=\"6\" class=\"highcharts-point\" data-z-index=\"3\"></rect></g></g></g></g><g class=\"highcharts-axis-labels highcharts-xaxis-labels\" data-z-index=\"7\"><text x=\"190\" text-anchor=\"end\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"52\" opacity=\"1\">Accessories - PS2</text><text x=\"190\" text-anchor=\"end\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"69\" opacity=\"1\">Accessories - PSVita</text><text x=\"190\" text-anchor=\"end\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"86\" opacity=\"1\">Books - Audiobooks (figure)</text><text x=\"190\" text-anchor=\"end\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"102\" opacity=\"1\">Books - Digital</text><text x=\"190\" text-anchor=\"end\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"119\" opacity=\"1\">Cinema - Collector</text><text x=\"190\" text-anchor=\"end\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"136\" opacity=\"1\">Game consoles - PS4</text><text x=\"190\" text-anchor=\"end\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"152\" opacity=\"1\">Game consoles - XBOX ONE</text><text x=\"190\" text-anchor=\"end\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"169\" opacity=\"1\">Games - PSP</text><text x=\"190\" text-anchor=\"end\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"185\" opacity=\"1\">Games Android - Digital</text><text x=\"190\" text-anchor=\"end\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"202\" opacity=\"1\">Games PC - Digital</text><text x=\"190\" text-anchor=\"end\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"219\" opacity=\"1\">Gifts - Board Games</text><text x=\"190\" text-anchor=\"end\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"235\" opacity=\"1\">Gifts - Games (compact)</text><text x=\"190\" text-anchor=\"end\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"252\" opacity=\"1\">Gifts - certificates, services</text><text x=\"190\" text-anchor=\"end\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"269\" opacity=\"1\">Movie - Blu-Ray 4K</text><text x=\"190\" text-anchor=\"end\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"285\" opacity=\"1\">Music - Gift Edition</text><text x=\"190\" text-anchor=\"end\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"302\" opacity=\"1\">Net carriers (piece)</text><text x=\"190\" text-anchor=\"end\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"319\" opacity=\"1\">Payment cards - Live! (Numeral)</text><text x=\"190\" text-anchor=\"end\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"335\" opacity=\"1\">Program - For home and office</text><text x=\"190\" text-anchor=\"end\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"352\" opacity=\"1\">System Tools</text></g><g class=\"highcharts-axis-labels highcharts-yaxis-labels\" data-z-index=\"7\"><text x=\"205\" text-anchor=\"middle\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"381\" opacity=\"1\">0</text><text x=\"508.6\" text-anchor=\"middle\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"381\" opacity=\"1\">10M</text><text x=\"812.2\" text-anchor=\"middle\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"381\" opacity=\"1\">20M</text><text x=\"280.9\" text-anchor=\"middle\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"381\" opacity=\"1\">2.5M</text><text x=\"356.8\" text-anchor=\"middle\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"381\" opacity=\"1\">5M</text><text x=\"432.7\" text-anchor=\"middle\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"381\" opacity=\"1\">7.5M</text><text x=\"584.5\" text-anchor=\"middle\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"381\" opacity=\"1\">12.5M</text><text x=\"660.4\" text-anchor=\"middle\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"381\" opacity=\"1\">15M</text><text x=\"736.3\" text-anchor=\"middle\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"381\" opacity=\"1\">17.5M</text><text x=\"888.1\" text-anchor=\"middle\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"381\" opacity=\"1\">22.5M</text><text x=\"964\" text-anchor=\"middle\" transform=\"translate(0,0)\" style=\"color: rgb(102, 102, 102); cursor: default; font-size: 11px; fill: rgb(102, 102, 102);\" y=\"381\" opacity=\"1\">25M</text></g><text x=\"1072\" class=\"highcharts-credits\" text-anchor=\"end\" data-z-index=\"8\" y=\"393\" style=\"cursor: pointer; color: rgb(153, 153, 153); font-size: 9px; fill: rgb(153, 153, 153);\">Highcharts.com</text></svg>";
		String svg1 =svg.toString();
      Reader reader = new BufferedReader(new StringReader(svg1));
	    TranscoderInput svgImage = new TranscoderInput(reader);
//		 String svg_URI_input = Paths.get("C:\\Users\\valsys\\Desktop\\chart.svg").toUri().toURL().toString();
//	        TranscoderInput input_svg_image = new TranscoderInput(svg_URI_input);  
	        
	        //Step-2: Define OutputStream to PNG Image and attach to TranscoderOutput
//	        System.out.println("input_svg_image   ## "+input_svg_image);
//	        OutputStream png_ostream = new FileOutputStream("chessboard.png");
	        String png_path = "C:\\Users\\valsys\\Desktop\\test_image\\bar-chart"+uuid+".jpg";
	        OutputStream png_ostream = new FileOutputStream(png_path);
	        TranscoderOutput output_png_image = new TranscoderOutput(png_ostream);              
	        // Step-3: Create PNGTranscoder and define hints if required
	        PNGTranscoder my_converter = new PNGTranscoder();        
	        // Step-4: Convert and Write output
	        my_converter.transcode(svgImage, output_png_image);
	        // Step 5- close / flush Output Stream
	        png_ostream.flush();
	        png_ostream.close();  
		

     imagetodoc(png_path);

		
	}
	
	public static void imagetodoc(String png_path) throws InvalidFormatException, IOException
	{
		
		
		System.out.println("png_path     "+png_path);
		String uuid2 = "b-" + UUID.randomUUID().toString().split("-")[0]; 
		
		String path2 ="C:\\Users\\valsys\\Desktop\\test_image\\bar-chart2"+uuid2+".jpg";
		
		
		File f = new File(png_path); //change path of image according to you
		FileInputStream fis = new FileInputStream(f);
		byte byteArray[] = new byte[(int)f.length()];
		fis.read(byteArray);
		String imageString = Base64.getEncoder().encodeToString(byteArray);
		//decode Base64 String to image
		FileOutputStream fos = new FileOutputStream(path2); //change path of image according to you
		byteArray = Base64.getDecoder().decode(imageString);
		fos.write(byteArray);
		 
		fis.close();
		fos.close();
		
		
        // Step 1: Creating a blank document
    XWPFDocument document = new XWPFDocument();

    // Step 2: Creating a Paragraph using
    // createParagraph() method
    XWPFParagraph paragraph
        = document.createParagraph();
    XWPFRun run = paragraph.createRun();
 
    String uuid1 = "b-" + UUID.randomUUID().toString().split("-")[0]; 
    // Step 3: Creating a File output stream of word
    // document at the required location
    FileOutputStream fout_ = new FileOutputStream(
    		new File("C:\\Users\\valsys\\Desktop\\test_image\\test_doc\\bar-chart"+uuid1+".doc")); 

    // Step 4: Creating a file input stream of image by
    // specifying its path
    File image = new File(path2); 
    FileInputStream imageData
        = new FileInputStream(image);

    // Step 5: Retrieving the image file name and image
    // type
    int imageType = XWPFDocument.PICTURE_TYPE_JPEG;
    String imageFileName = image.getName();
    
    
    System.out.println("imageFileName  "+imageFileName);
    System.out.println("imageType  "+imageType);
    // Step 6: Setting the width and height of the image
    // in pixels.
    int width = 200;
    int height = 200;

    // Step 7: Adding the picture using the addPicture()
    // method and writing into the document
    run.addPicture(imageData, imageType, imageFileName,
                   Units.toEMU(width),
                   Units.toEMU(height));
    
    document.write(fout_);
  
    // Step 8: Closing the connections
    fout_.close();
    document.close();
    // Close the file connection
						
	}
	
	
	@RequestMapping(value = "/heatmap", method = RequestMethod.POST)	
	public ModelAndView configure_json(@RequestParam String chartName) {
		
		
		System.out.println("chartName  "+chartName);
		
		
        Highchart highChart = new Highchart();
        highChart.setTheme(HighchartTheme.DARK_UNICA);
        ChartOptions chartOptions = highChart.getChartOptions();
            
 
        
        chartOptions.getChart().setType(ChartType.HEATMAP)
            .setMarginTop(40)
            .setMarginBottom(80)
            .setPlotBorderWidth(1);
        chartOptions.getTitle().setText("Time batches");
        
        XAxis xAxi = new XAxis();
        List<XAxis> lsxa = new ArrayList<XAxis>(); 
        xAxi.setGridLineWidth(1)
            .getTitle().setText("");
        xAxi.getLabels().setFormat("{value}");
               
        YAxis yAxi = new YAxis();
        List<YAxis> lsya = new ArrayList<YAxis>(); 
        yAxi.getTitle().setText("");
     
               
//        String colarr[] = columnlist.split(",");
        
        List<String> ls = new ArrayList<String>();
		List<String> lsData = new ArrayList<String>();
		List<String> lsDataX = new ArrayList<String>();
		
		 List<Object> arrayobj = new ArrayList<Object>();
        int count_x_title = 0;
        String x_title="";
        String json ="[{\"fig\":{\"data\":[{\"colorscale\":[[0.0,\"rgb(0,0,255)\"],[1.0,\"rgb(255,0,0)\"]],\"hoverongaps\":false,\"showscale\":false,\"x\":[\"27/03/202310:41:41-27/03/202310:41:41\"],\"xgap\":1,\"y\":[\"TVOC__ppb__\",\"eCO2__ppm__\",\"PM2__5\",\"Temperature__C__\",\"Raw__H2\"],\"ygap\":1,\"z\":[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],\"zmax\":1,\"zmin\":0,\"type\":\"heatmap\"}],\"layout\":{\"template\":{\"data\":{\"histogram2dcontour\":[{\"type\":\"histogram2dcontour\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"choropleth\":[{\"type\":\"choropleth\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}],\"histogram2d\":[{\"type\":\"histogram2d\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"heatmap\":[{\"type\":\"heatmap\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"heatmapgl\":[{\"type\":\"heatmapgl\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"contourcarpet\":[{\"type\":\"contourcarpet\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}],\"contour\":[{\"type\":\"contour\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"surface\":[{\"type\":\"surface\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"},\"colorscale\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]]}],\"mesh3d\":[{\"type\":\"mesh3d\",\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}],\"scatter\":[{\"fillpattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2},\"type\":\"scatter\"}],\"parcoords\":[{\"type\":\"parcoords\",\"line\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatterpolargl\":[{\"type\":\"scatterpolargl\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"bar\":[{\"error_x\":{\"color\":\"#2a3f5f\"},\"error_y\":{\"color\":\"#2a3f5f\"},\"marker\":{\"line\":{\"color\":\"#E5ECF6\",\"width\":0.5},\"pattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2}},\"type\":\"bar\"}],\"scattergeo\":[{\"type\":\"scattergeo\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatterpolar\":[{\"type\":\"scatterpolar\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"histogram\":[{\"marker\":{\"pattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2}},\"type\":\"histogram\"}],\"scattergl\":[{\"type\":\"scattergl\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatter3d\":[{\"type\":\"scatter3d\",\"line\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}},\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scattermapbox\":[{\"type\":\"scattermapbox\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scatterternary\":[{\"type\":\"scatterternary\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"scattercarpet\":[{\"type\":\"scattercarpet\",\"marker\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}}}],\"carpet\":[{\"aaxis\":{\"endlinecolor\":\"#2a3f5f\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"minorgridcolor\":\"white\",\"startlinecolor\":\"#2a3f5f\"},\"baxis\":{\"endlinecolor\":\"#2a3f5f\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"minorgridcolor\":\"white\",\"startlinecolor\":\"#2a3f5f\"},\"type\":\"carpet\"}],\"table\":[{\"cells\":{\"fill\":{\"color\":\"#EBF0F8\"},\"line\":{\"color\":\"white\"}},\"header\":{\"fill\":{\"color\":\"#C8D4E3\"},\"line\":{\"color\":\"white\"}},\"type\":\"table\"}],\"barpolar\":[{\"marker\":{\"line\":{\"color\":\"#E5ECF6\",\"width\":0.5},\"pattern\":{\"fillmode\":\"overlay\",\"size\":10,\"solidity\":0.2}},\"type\":\"barpolar\"}],\"pie\":[{\"automargin\":true,\"type\":\"pie\"}]},\"layout\":{\"autotypenumbers\":\"strict\",\"colorway\":[\"#636efa\",\"#EF553B\",\"#00cc96\",\"#ab63fa\",\"#FFA15A\",\"#19d3f3\",\"#FF6692\",\"#B6E880\",\"#FF97FF\",\"#FECB52\"],\"font\":{\"color\":\"#2a3f5f\"},\"hovermode\":\"closest\",\"hoverlabel\":{\"align\":\"left\"},\"paper_bgcolor\":\"white\",\"plot_bgcolor\":\"#E5ECF6\",\"polar\":{\"bgcolor\":\"#E5ECF6\",\"angularaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"},\"radialaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"}},\"ternary\":{\"bgcolor\":\"#E5ECF6\",\"aaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"},\"baxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"},\"caxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\"}},\"coloraxis\":{\"colorbar\":{\"outlinewidth\":0,\"ticks\":\"\"}},\"colorscale\":{\"sequential\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]],\"sequentialminus\":[[0.0,\"#0d0887\"],[0.1111111111111111,\"#46039f\"],[0.2222222222222222,\"#7201a8\"],[0.3333333333333333,\"#9c179e\"],[0.4444444444444444,\"#bd3786\"],[0.5555555555555556,\"#d8576b\"],[0.6666666666666666,\"#ed7953\"],[0.7777777777777778,\"#fb9f3a\"],[0.8888888888888888,\"#fdca26\"],[1.0,\"#f0f921\"]],\"diverging\":[[0,\"#8e0152\"],[0.1,\"#c51b7d\"],[0.2,\"#de77ae\"],[0.3,\"#f1b6da\"],[0.4,\"#fde0ef\"],[0.5,\"#f7f7f7\"],[0.6,\"#e6f5d0\"],[0.7,\"#b8e186\"],[0.8,\"#7fbc41\"],[0.9,\"#4d9221\"],[1,\"#276419\"]]},\"xaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\",\"title\":{\"standoff\":15},\"zerolinecolor\":\"white\",\"automargin\":true,\"zerolinewidth\":2},\"yaxis\":{\"gridcolor\":\"white\",\"linecolor\":\"white\",\"ticks\":\"\",\"title\":{\"standoff\":15},\"zerolinecolor\":\"white\",\"automargin\":true,\"zerolinewidth\":2},\"scene\":{\"xaxis\":{\"backgroundcolor\":\"#E5ECF6\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"showbackground\":true,\"ticks\":\"\",\"zerolinecolor\":\"white\",\"gridwidth\":2},\"yaxis\":{\"backgroundcolor\":\"#E5ECF6\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"showbackground\":true,\"ticks\":\"\",\"zerolinecolor\":\"white\",\"gridwidth\":2},\"zaxis\":{\"backgroundcolor\":\"#E5ECF6\",\"gridcolor\":\"white\",\"linecolor\":\"white\",\"showbackground\":true,\"ticks\":\"\",\"zerolinecolor\":\"white\",\"gridwidth\":2}},\"shapedefaults\":{\"line\":{\"color\":\"#2a3f5f\"}},\"annotationdefaults\":{\"arrowcolor\":\"#2a3f5f\",\"arrowhead\":0,\"arrowwidth\":1},\"geo\":{\"bgcolor\":\"white\",\"landcolor\":\"#E5ECF6\",\"subunitcolor\":\"white\",\"showland\":true,\"showlakes\":true,\"lakecolor\":\"white\"},\"title\":{\"x\":0.05},\"mapbox\":{\"style\":\"light\"}}},\"xaxis\":{\"side\":\"top\",\"title\":{\"text\":\"Time-level\"}},\"yaxis\":{\"title\":{\"text\":\"Features\"}}}}}]";
       
        JsonFactory jsonFactory = new JsonFactory();
		ObjectMapper objectMapper = new ObjectMapper(jsonFactory);

		try {
			JsonNode arrayNode = objectMapper.readTree(json);
			for(JsonNode  json_ : arrayNode)
			{
				System.out.println("json_::::::" + json_);
				for(JsonNode  json1 : json_)
				{
					System.out.println("json1::::::" + json1);
					
					for(JsonNode  json2 : json1)
					{
						System.out.println("json2::::::" + json2);
						for(JsonNode  json3 : json2)
						{
							count_x_title++;
							System.out.println("json3::::::" + json3);
							if(count_x_title == 4)
							{
								for(JsonNode  json4 : json3)
								{
									for(JsonNode  json5 : json4)
									{
										 x_title = json5.toString();
										 x_title= x_title.replace("\"", "").toString();
										 
										System.out.println("x_title::::::" + x_title);
										
									}
									
									
								}
							}
							
							int count1 = 0;	
							for(JsonNode  json4 : json3)
							{
								count1++;						
								System.out.println("json4::::::" + json4);
								if(count1 == 4)
								{
									String x = json4.toString();
									System.out.println("x::::::" + x);
									
									
								String x1=x.split("-")[0].replace("[", "").replace("\"", "").toString();
								String x2=x.split("-")[1].replace("]", "").replace("\"", "").toString();
									
								lsDataX.add(x1);
								lsDataX.add(x2);
								
//								System.out.println("x1::::::" + x1);
//								System.out.println("x2::::::" + x2);
								
								}
								
								if(count1 == 6)
								{
									String y = json4.toString();
									System.out.println("y::::::" + y);
									
									
									
									
									
									String y1=y.split(",")[0].replace("[", "").replace("\"", "").toString();
									String y2=y.split(",")[1].replace("", "").replace("\"", "").toString();
									String y3=y.split(",")[2].replace("", "").replace("\"", "").toString();
									String y4=y.split(",")[3].replace("", "").replace("\"", "").toString();
									String y5=y.split(",")[4].replace("]", "").replace("\"", "").toString();
									
									ls.add(y1);
									ls.add(y2);
									ls.add(y3);
									ls.add(y4);
									ls.add(y5);
									
									
//									System.out.println("y::::::" + y1);
//									System.out.println("y::::::" + y2);
//									System.out.println("y::::::" + y3);
//									System.out.println("y::::::" + y4);
//									System.out.println("y::::::" + y5);
									
									
								}
								
								if(count1 == 8)
								{
									String z = json4.toString();
									System.out.println("z::::::" + z.length());
									
									
									for(int m=0;m<5;m++)
									{
										 arrayobj.add(Arrays.asList(0,0,0));
									}
									
									
									
									
								}
								
																
							}
						}
						
					}
					
					
				}
				
				
				
				
			}
			
			
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        
		System.out.println("ls::::::" + ls);
		System.out.println("ls lsDataX::::::" + lsDataX);
		System.out.println("arrayobj ::::::" + arrayobj);
		 
	     
		
		
		xAxi.setCategories(lsDataX);
		lsxa.add(xAxi);
		
//		xAxi.setMin(0).getTitle().setText("");
//		xAxi.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
		
        chartOptions.getXAxis().add(xAxi);
  
        yAxi.setCategories(ls);
		lsya.add(yAxi);
		
		yAxi.setMin(0).getTitle().setText(x_title);
		yAxi.getLabels().setOverflow(LabelsOverflow.JUSTIFY);
		
        chartOptions.getYAxis().add(yAxi);
        
        SeriesHeatmap seriesHeatmap = new SeriesHeatmap();
        seriesHeatmap.setDataAsArrayJavaObject(arrayobj);			     
//	    chartOptions.getSeries().add(seriesHeatmap);
	    
//	    Highchart hc = new Highchart();
	    String containerid = "container1";
	    ModelAndView modelview = new ModelAndView();
	    Map<String, String> chartModel = new HashMap<String, String>();
	    String globalOptions = highChart.globalOptionsToJs();
		String chartOptions_ = highChart.chartOptionsToJs();
		chartModel.put("globalOptions", globalOptions);
		chartModel.put("chartOptions", chartOptions_);	
		chartModel.put("containerID", containerid);
	    
	    
	   
//	    Highchart chartModel = new Highchart();
//		chartModel = highChart;
		modelview.addObject("model", chartModel);
		modelview.setViewName("draw_charts");

		return modelview;
        
    }
	
	
	
	
	
	@RequestMapping("/dashboard_realtime")
	public ModelAndView display_(HttpServletRequest request) {

		ModelAndView modelview = new ModelAndView();
		modelview.setViewName("/dashboard_new_realtime");
		return modelview;
	}
	
	@GetMapping("/previousmsg")
	public ResponseEntity<String>  previousmsg(HttpServletRequest request, @RequestParam String id)
			throws FileNotFoundException, IOException, ParseException, net.minidev.json.parser.ParseException 
	{
//		JSONParser parser = new JSONParser();
//		JSONArray a =  (JSONArray) parser.parse(new FileReader("C:\\Users\\valsys\\Desktop\\tripti maam 10-04-23___JSON parse\\datachart.json"));
//		String jsondata = a.toString();
		
		
		org.json.simple.JSONObject jsonObject = null;
		  JSONParser parser=new JSONParser(); // this needs the "json-simple" library

		  
		        Object obj = parser.parse(new FileReader("C:\\Users\\valsys\\Desktop\\tripti maam 10-04-23___JSON parse\\datachart.json"));
		        jsonObject=(org.json.simple.JSONObject)obj;
		        String jsondata = jsonObject.toString();
		 
		
		
		
		
		
		
		
//		JSONParser parser1 = new JSONParser();
//
//        
//            Object obj = parser1.parse(new FileReader("C:\\Users\\valsys\\Desktop\\tripti maam 10-04-23___JSON parse\\datachart.json"));
//
//            JSONObject jsonObject =  (JSONObject) obj;
//    		String jsondata = jsonObject.toString();
		
		
		System.out.println("previousmsg    id:::::" + id);
//		String jsondata = "[\r\n" + 
//				" {\r\n" + 
//				"  \"Region\": \"Middle East and North Africa\",\r\n" + 
//				"  \"Country\": \"Azerbaijan\",\r\n" + 
//				"  \"Item_Type\": \"Snacks\",\r\n" + 
//				"  \"Sales_Channel\": \"Online\",\r\n" + 
//				"  \"Order_Priority\": \"C\",\r\n" + 
//				"  \"Order_Date\": \"08\\/10\\/2014\",\r\n" + 
//				"  \"Order_ID\": 53\r\n" + 				
//				" },\r\n" + 
//				" {\r\n" + 
//				"  \"Region\": \"Central America and the Caribbean\",\r\n" + 
//				"  \"Country\": \"Panama\",\r\n" + 
//				"  \"Item_Type\": \"Cosmetics\",\r\n" + 
//				"  \"Sales_Channel\": \"Offline\",\r\n" + 
//				"  \"Order_Priority\": \"L\",\r\n" + 
//				"  \"Order_Date\": \"2\\/22\\/2015\",\r\n" + 
//				"  \"Order_ID\": 87\r\n" + 				
//				" },\r\n" + 
//				" {\r\n" + 
//				"  \"Region\": \"Sub-Saharan Africa\",\r\n" + 
//				"  \"Country\": \"Sao Tome and Principe\",\r\n" + 
//				"  \"Item_Type\": \"Fruits\",\r\n" + 
//				"  \"Sales_Channel\": \"Offline\",\r\n" + 
//				"  \"Order_Priority\": \"M\",\r\n" + 
//				"  \"Order_Date\": \"09\\/12\\/2015\",\r\n" + 
//				"  \"Order_ID\": 85\r\n" + 				
//				" },\r\n" + 
//				" {\r\n" + 
//				"  \"Region\": \"Sub-Saharan Africa\",\r\n" + 
//				"  \"Country\": \"Sao Tome and Principe\",\r\n" + 
//				"  \"Item_Type\": \"Personal Care\",\r\n" + 
//				"  \"Sales_Channel\": \"Online\",\r\n" + 
//				"  \"Order_Priority\": \"M\",\r\n" + 
//				"  \"Order_Date\": \"9\\/17\\/2014\",\r\n" + 
//				"  \"Order_ID\": 89\r\n" + 				
//				" },\r\n" + 
//				" {\r\n" + 
//				"  \"Region\": \"Central America and the Caribbean\",\r\n" + 
//				"  \"Country\": \"Belize\",\r\n" + 
//				"  \"Item_Type\": \"Household\",\r\n" + 
//				"  \"Sales_Channel\": \"Offline\",\r\n" + 
//				"  \"Order_Priority\": \"H\",\r\n" + 
//				"  \"Order_Date\": \"04\\/02\\/2010\",\r\n" + 
//				"  \"Order_ID\": 12\r\n" + 				
//				" },\r\n" + 				
//				" {\r\n" + 
//				"  \"Region\": \"Sub-Saharan Africa\",\r\n" + 
//				"  \"Country\": \"Comoros\",\r\n" + 
//				"  \"Item_Type\": \"Beverages\",\r\n" + 
//				"  \"Sales_Channel\": \"Offline\",\r\n" + 
//				"  \"Order_Priority\": \"L\",\r\n" + 
//				"  \"Order_Date\": \"10\\/08\\/2014\",\r\n" + 
//				"  \"Order_ID\": 51\r\n" + 			
//				" }\r\n" + 
//				"]"; 
		
		
//		String author0="";
//		Map<String, String> json_pos_map = new LinkedHashMap<String, String>();
//		try {
//			Object document = Configuration.defaultConfiguration().jsonProvider().parse(jsondata);
//
//			json_pos_map = JsonPath.read(document, "$.[0]");
//			//$.[?(@.Order_ID < "50")].Country
//			String author1 = JsonPath.read(document, "$.[1].Region");
//			author0 = JsonPath.read(document, "$.[?(@.Order_ID < 50)].Country");
////			author0 = JsonPath.read(document, "$.[0].Region");
//			
//			//System.out.println("json_pos_map   "+json_pos_map);
//			//System.out.println("author0   "+author0);
//			//System.out.println("author1   "+author1);
//			
//			
//		} catch (Exception e) {
//			System.out.println("e   "+e);
//			// TODO: handle exception
//		}
//		
//	
//		
//		
//		JSONArray json = null;
//		try {
//			json = new JSONArray(jsondata);
//		} catch (JSONException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}  
		
		
		
		
		
//		ModelAndView modelview = new ModelAndView();
//		modelview.setViewName("/dashboard_new_realtime");
//		modelview.addObject("model_", jsondata);

		return new ResponseEntity<>(jsondata.toString(),HttpStatus.OK);
	}
	
	
	@RequestMapping(value = { "/dashboard_realtime" }, method = RequestMethod.GET)
	public ModelAndView dashboard_realtime_(HttpServletRequest request, @RequestParam String id)
			throws JsonMappingException, JsonProcessingException 
	{

		//System.out.println("id:::::" + id);
		Map<String, Object> tabModel = new HashMap<String, Object>();
		try {
			if (id.equalsIgnoreCase("0")) {
				tabModel.put("setData", buildTab("0"));
				
			} else {
				tabModel.put("setData", buildTab(id));
			}
		} catch (Exception e) {
			System.out.println("dashboard error::::" + e.toString());
		}
//		System.out.println("tabModel dashboard_new dashboard error::::" + tabModel);
		ModelAndView modelview = new ModelAndView();
		modelview.setViewName("/dashboard_new_realtime");
		modelview.addObject("model", tabModel);

		return modelview;
	}
	
	@RequestMapping("/txtLabelList")
	public ModelAndView display(HttpServletRequest request) {

		ModelAndView modelview = new ModelAndView();
		modelview.setViewName("/imagerepository");
		return modelview;
	}
		
	@RequestMapping(value = { "/dashboard" }, method = RequestMethod.GET)
	public ModelAndView displayDash(HttpServletRequest request, @RequestParam String id)
			throws JsonMappingException, JsonProcessingException 
	{

		//System.out.println("id:::::" + id);
		Map<String, Object> tabModel = new HashMap<String, Object>();
		try {
			if (id.equalsIgnoreCase("0")) {
				tabModel.put("setData", buildTab("0"));
				
			} else {
				tabModel.put("setData", buildTab(id));
			}
		} catch (Exception e) {
			System.out.println("dashboard error::::" + e.toString());
		}
//		System.out.println("tabModel dashboard_new dashboard error::::" + tabModel);
		ModelAndView modelview = new ModelAndView();
		modelview.setViewName("/dashboard");
		modelview.addObject("model", tabModel);

		return modelview;
	}

	
	
	int counttabedit = 0;
	public String buildTab(String dashID) throws IOException {

		int chartId = 0;
		PreparedStatement ps = null;
		String dashquery = " select id, position_json, tabscount,dashboard_title,theme from dashboards where id = " + dashID;
		System.out.println("dashquery:::======" + dashquery);

		List<ChartEntity> list = new ArrayList<ChartEntity>();
		int id = 0;
		String position_json = "";
		String dashboard_title = "";
		String theme ="";
        int ispublish = 0;
		// int tabscount=0;
		try {
			ps = conpg.prepareStatement(dashquery);
			ResultSet rs = ps.executeQuery();

			while (rs.next()) {
				id = rs.getInt(1);
				position_json = rs.getString(2);
				dashboard_title = rs.getString(4);
				theme = rs.getString(5);
			  //tabscount=rs.getInt(3);
			}
			
			rs.close();
			ps.close();
		}
		catch (SQLException e) 
		{
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		String complete = "";
		// System.out.println("viz_type:::::" + viz_type);
//		System.out.println("theme:::::" + theme);
//		System.out.println("id:::::" + id);
//		System.out.println("position_json:::::" + position_json);
//		System.out.println("dashboard_title:::::" + dashboard_title);

		if (id > 0) {

			// List<ChartEntity> listofcharts = getDashCharts("1");
			List<ChartEntity> listofcharts = getDashCharts(dashID);
			//System.out.println("listofcharts size:::" + listofcharts.size());

			JsonFactory jsonFactory = new JsonFactory();
			ObjectMapper objectMapper = new ObjectMapper(jsonFactory);

			JsonNode arrayNode = objectMapper.readTree(position_json);

			String chartlist = "<div id='btnpanel' class=\"cb-btn-panel\"><label for=\"name\" class=\"cb-control-label mr-2 dash-name\" id=\"dashName1\" value ='"+dashboard_title+"' style=\"margin-bottom:0\"><p class=\"label-text\" id=\"label-text\" style=\"font-size: 19px;margin-right: 20px;\">"
					+ dashboard_title
					+ "</p></label><button class=\"cb-cursor cb-primary mr-1\" id=\"edit\"  title=\"Edit\"><i class=\"os-icon os-icon-pencil-2\"></i></button><button class=\"cb-cursor cb-primary mr-1\" id=\"re-load\" onclick=\"reload()\" title=\"Re-Load\"><i class=\"os-icon os-icon-refresh-cw\" aria-hidden=\"true\"></i></button><input type='hidden' name='dashid' id='dashid' value='"
					+ dashID
					+ "' /><button  class=\" cb-primary mr-1\" id=\"chartlist\" onclick=\"openChartlist()\" title=\"Chart List\"> <i class=\"os-icon os-icon-bar-chart-up\"></i></button><div id=\"chartlistdiv\" class=\"sidenav\" ><a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeChartlist()\">&times;</a><div class=\"d-flex flex-row justify-content-between align-items-center p-3\" style=\"position:relative\"><span class=\"text-capitalize text-middle filter-class\">Chart List</span></div><div class=\"pl-3  pb-3\"><ul class=\"chart-list list-unstyled mt-3\" >";
			String chartoption = "";// "<li class=\"drop-down__item\" value='0'>--select chart--</li>";
			for (int k = 0; k < listofcharts.size(); k++) {
				if (listofcharts.get(k).getIsoriginal() == 1) {
					chartoption += "<li class=\"text-overflow\" id=\"addchartid" + k + "\"  onclick=\"addnewChart(" + k
							+ ");\" title="+ listofcharts.get(k).getSlice_name() +"><input type='hidden' id='chartid" + k + "' value='" + listofcharts.get(k).getId()
							+ "'><input type='hidden' id='varDimid" + k + "' value='"
							+ listofcharts.get(k).getQuery_context() + "'><input type='hidden' id='varChartname" + k
							+ "'  value='" + listofcharts.get(k).getSlice_name()
							+ "'><input type='hidden' id='_charttypeid" + k + "' value='"
							+ listofcharts.get(k).getViz_type() + "'><input type='hidden' id='_tableid" + k
							+ "' value='" + listofcharts.get(k).getDatasource_name()
							+ "'><input type='hidden' id='_containerdivID" + k + "' value='"
							+ listofcharts.get(k).getContainerid() + "'><input type='hidden' id='varDimFilterid" + k
							+ "' value='" + listofcharts.get(k).getFilter_context()
							+ "'><input type='hidden' id='propertiesid" + k 
							+ "' value='" + listofcharts.get(k).getProperties()
							+ "'><i class=\"os-icon os-icon-bar-chart-up\"></i> &nbsp;&nbsp;"
							+ listofcharts.get(k).getSlice_name() + "</li>";
				}
			}

			String savebtn = "<button class=\"cb-primary mr-1\" onclick=\"openNav()\"  title=\"Filter\" id=\"filterlist\"><i class=\"os-icon os-icon-filter\"></i></button><button class=\"cb-primary  mr-1\"  title=\"Save Dashboard\" id=\"btnsave\" onClick=\"saveDash();\"><i class=\"os-icon os-icon-save\" ></i></button><button class=\"cb-primary mr-1\" id=\"Add_Dashboard\"  title=\"Add Dashboard\" onClick=\"createNewDashboard();\"><i class=\"os-icon os-icon-plus\" ></i></button>";

			chartlist = chartlist + chartoption + "</ul></div></div>" + savebtn + "</div>";

			String labelinputScript = "<script>$('#dashName_').val(\'" + dashboard_title
					+ "\'); $('#edit').click(function() {var text = $('.label-text').text();var input = $('<input type=\"text\" name=\"dashName\" id=\"dashName\" class=\"form-control\"  placeholder=\"dashboard name\" value=\"' + text + '\" />');$('.label-text').text('').append(input);input.select();input.blur(function() {var text = $('#dashName').val();  $('#dashName_').val(text);  $('#dashName').parent().text(text); $('#dashName').remove();});});</script>";

			// FOR PIE
			int tabscount = 0;
			String tabStrScript = "<script>var tabcount=" + tabscount + ";</script>";
			String tabStrLst = "<div class=\"cb-top-menu\"><ul><button class=\"addtab cb-primary mr-1\" onClick=\"addtab(tabcount);\"  title=\"Add Tab\"><i class=\"os-icon os-icon-plus\"></i></button>";
			String tabStrDiv = "";

			String charts = "";
			String chartlabelScript = "";
			if (arrayNode.isArray()) {
				// System.out.println("dashjsonNode"+arrayNode);
				
				for (JsonNode jsonNode : arrayNode) {

					tabscount++;
					// javascript
					tabStrScript = "<script>var tabcount=" + tabscount + ";</script>";
					// System.out.println("dashchartjsonNode"+jsonNode);

					// tabbid
					String tabid = jsonNode.get("tabid").asText();
					String tabname = jsonNode.get("tabname").asText();
					
					// tab strip ul
					tabStrLst = tabStrLst + "<li id=\"tabli_" + tabscount + "\" onclick =\"switchtab("+tabscount+")\"><a href=\"#" + tabid
							+ "\" id=\"settabname" + tabscount + "\" title=\"" + tabname + "\">" + tabname
							+ "</a><span class=\"cb-edit-dashname cb-cursor\" id=\"opendashtitle_" + tabscount
							+ "\" onclick=\"opendashtitle(" + tabscount
							+ ")\"  title=\"Edit\"><i class=\"os-icon os-icon-pencil-2\"></i></span><span onclick=\"tabdelete("
							+ tabscount
							+ ")\" class=\"cb-cross-btn cb-cursor\"  title=\"Delete\"><i class=\"os-icon os-icon-x\"></i></span></li>";

					
					tabStrDiv = tabStrDiv + "<div id=\"" + tabid+"\" data-tabname=\"" + tabname + "\"><div id=\"grid"
							+ tabid + "\">" + "<div class=\"grid-stack\"></div></div></div>";
					
					// chart level
					//tabid = jsonNode.get("tabid").asText();
					JsonNode arrayNode1 = jsonNode.get("childs");

					for (JsonNode jsonNode1 : arrayNode1) {

						String chartId_ = jsonNode1.get("chartid").asText();
						
						
						
						
						chartId_ =chartId_.split("-")[0];
						System.out.println("1111  dashboard chartId_:::::" + chartId_);

						String x = jsonNode1.get("x").asText();
						String y = jsonNode1.get("y").asText();
						String w = jsonNode1.get("w").asText();
						String h = jsonNode1.get("h").asText();

						//System.out.println("chartId " + chartId);

						ChartEntity ch = new ChartEntity(); 		
						String vizquery = " select viz_type, id, slice_name, datasource_type, datasource_name,  query_context, containerid,"
								+ "filter_context ,properties_context from slices where id ="+chartId_+"";
				
						System.out.println("vizquery:::======" + vizquery);
						String viz_type1 = "";
						int id_=0;
						String slice_name="";
						String datasource_type="";
						String datasource_name="";
						String query_context="";
						String containerid="";
						String filter_context="";
						String properties ="";
						
						try {
							ps = conpg.prepareStatement(vizquery);
							ResultSet rs1 = ps.executeQuery();

							while (rs1.next()) {
								viz_type1 = rs1.getString(1);
								id_ = rs1.getInt(2);
								slice_name = rs1.getString(3);
								datasource_type = rs1.getString(4);
								datasource_name = rs1.getString(5);
								query_context = rs1.getString(6);
								containerid = rs1.getString(7);
								filter_context = rs1.getString(8);
								properties = rs1.getString(9);
							}
							rs1.close();
							ps.close();
						} catch (SQLException e) { // TODO Auto-generated catch block
							e.printStackTrace();
						}
						System.out.println("properties    "+properties);
						String uuid = "con" + UUID.randomUUID().toString().split("-")[0]; 
						 if (viz_type1.equalsIgnoreCase("chartcard16")) {
							charts = charts + "grids[" + (tabscount - 1) + "].addWidget({x:" + x + ",y:" + y + ",w:" + w
									+ ",h:" + h
									+ ", content: '<div class=\"d-flex justify-content-between align-items-center \">"
									+ "<div class=\"d-flex mr-2 ml-2 header-title\">"
									+ "<label for=\"chartname\" class=\"cb-control-label mr-2 ml-2 chart-title\"><p id=\"chartlablename"
									+ counttabedit + "\"  class=\"chart-label-text\">" + slice_name
									+ "</p></label></div>"
									+ "<div class=\"d-flex justify-content-end align-items-center slice-control\">"
									+ "<div >"
										+ "<div class=\"dropdown\">"
							+ "<div ><i class=\"os-icon os-icon-more-vertical cb-cursor dropbtn\" aria-hidden=\"true\"  onclick=\"dropdownopen(" + counttabedit + ")\"></i></div>"
							+ "<div id=\"myDropdown"+ counttabedit +"\" class=\"dropdown-content\">"
								+ "<a href=\"javascript:void(0)\" id=\"editchart_" + counttabedit
										+ "\" onclick=\"editchart(" + chartId_ + ");\"> Edit Chart </a>"
								+ "<a href=\"javascript:void(0)\" id=\\\"editchartname_"
										+ counttabedit + "\" > Edit Chart Name </a>"
								+ "<a href=\"javascript:void(0)\" aria-hidden=\\\"true\\\" id=\"btndelete_"
										+ counttabedit + "\" onclick=\"deleteChart(" + counttabedit + ")\"> Delete Chart </a>"
								+ "<input type=\"hidden\" value=\"" + uuid + "\" id=\"btndeletetext"
										+ counttabedit + "\">"
							+ "</div>"
						+ "</div>" + "</div> " + "</div>" + "</div>" + "<div data-chartid=\""
									+ chartId_
									+ "\" id=\"singlevalue" + uuid + "\"  class=\"box-css justify-content-center align-items-center flex-column singlevalue box-css1\">"
									+ "<h5 class=\"text-dark\">Single Value</h5><div class=\"value-text\"  id=\"singlevalue\">3</div></div>'});";
							
						} else if (viz_type1.equalsIgnoreCase("chartcard17")) {

							uuid = "table" + uuid;
							
							charts = charts + "grids[" + (tabscount - 1) + "].addWidget({x:" + x + ",y:" + y + ",w:" + w
									+ ",h:" + h
									+ ", content: '<div class=\"d-flex justify-content-between align-items-center\">"
									+ "<div class=\"d-flex mr-2 ml-2 header-title\">"
									+ "<label for=\"chartname\" class=\"cb-control-label mr-2 ml-2 chart-title\"><p id=\"chartlablename"
									+ counttabedit + "\"  class=\"chart-label-text\">" + slice_name
									+ "</p></label></div><div id=\"tablechartdiv_data"+uuid+"\"></div>"
									+ "<div class=\"d-flex justify-content-end align-items-center slice-control\">"
									+ "<div >"
										+ "<div class=\"dropdown\">"
							+ "<div ><i class=\"os-icon os-icon-more-vertical cb-cursor dropbtn\" aria-hidden=\"true\"  onclick=\"dropdownopen(" + counttabedit + ")\"></i></div>"
							+ "<div id=\"myDropdown"+ counttabedit +"\" class=\"dropdown-content\">"
								+ "<a href=\"javascript:void(0)\" id=\"editchart_" + counttabedit
										+ "\" onclick=\"editchart(" + chartId_ + ");\"> Edit Chart </a>"
								+ "<a href=\"javascript:void(0)\" id=\\\"editchartname_"
										+ counttabedit + "\" > Edit Chart Name </a>"
								+ "<a href=\"javascript:void(0)\" aria-hidden=\\\"true\\\" id=\"btndelete_"
										+ counttabedit + "\" onclick=\"deleteChart(" + counttabedit + ")\"> Delete Chart </a>"
								+ "<input type=\"hidden\" value=\"" + uuid + "\" id=\"btndeletetext"
										+ counttabedit + "\">"
							+ "</div>"
						+ "</div>" + "</div> " + "</div>" + "</div>"
									+ "<div id =\"tablechartdiv_"+uuid +"\"  data-chartid=\"" + chartId_
									+ "\" class=\"box-css justify-content-start align-items-center flex-column singlevalue box-css1 p-1\">"
									+ "<h5 class=\"text-dark\">Table Chart</h5><table id= \"table_"+uuid +"\" "
									+ " class=\"table table-striped table-bordered\"  style=\"font-size: 14px;width:100%: ;\">"
									+ " </table></div>'});";

						}
						else {

								charts = charts + "grids[" + (tabscount - 1) + "].addWidget({x:" + x + ",y:" + y + ",w:" + w
										+ ",h:" + h
										+ ", content: '<div class=\"d-flex justify-content-between align-items-center \">"
										+ "<div class=\"d-flex mr-2 ml-2 header-title\">"
										+ "<label for=\"chartname\" class=\"cb-control-label mr-2 ml-2 chart-title\"><p id=\"chartlablename"
										+ counttabedit + "\"  class=\"chart-label-text\">" + slice_name
										+ "</p></label></div>"
										+ "<div class=\"d-flex justify-content-end align-items-center slice-control\">"
										+ "<div >"
											+ "<div class=\"dropdown\">"
								+ "<div ><i class=\"os-icon os-icon-more-vertical cb-cursor dropbtn\" aria-hidden=\"true\"  onclick=\"dropdownopen(" + counttabedit + ")\"></i></div>"
								+ "<div id=\"myDropdown"+ counttabedit +"\" class=\"dropdown-content\">"
									+ "<a href=\"javascript:void(0)\" id=\"editchart_" + counttabedit
											+ "\" onclick=\"editchart(" + chartId_ + ");\"> Edit Chart </a>"
									+ "<a href=\"javascript:void(0)\" id=\\\"editchartname_"
											+ counttabedit + "\" > Edit Chart Name </a>"
									+ "<a href=\"javascript:void(0)\" aria-hidden=\\\"true\\\" id=\"btndelete_"
											+ counttabedit + "\" onclick=\"deleteChart(" + counttabedit + ")\"> Delete Chart </a>"
									+ "<input type=\"hidden\" value=\"" + uuid + "\" id=\"btndeletetext"
											+ counttabedit + "\">"
								+ "</div>"
							+ "</div>" + "</div> " + "</div>" + "</div>"
										+ "<div class=\"chart-header\" id=\"" + uuid + "\" data-chartid=\"" + chartId_
										+ "\" style=\"margin:5px\"></div>'});";

							}

						charts = charts + "AjaxChart('" + query_context + "','" + viz_type1 + "','"
								+ datasource_name + "','" + uuid + "','" + filter_context + "','"
								+ chartId_ + "' ,'"+ tabid+"' ,'"+ theme +"','"+ ispublish +"','"+ properties +"'  " + ");";

						chartlabelScript = chartlabelScript + "<script>$('#editchartname_" + counttabedit
								+ "').click(function() {\r\n" + " var text = $('#chartlablename" + counttabedit
								+ "').text();\r\n" + " var input = $('<input type=\"text\" name=\"chartName"
								+ counttabedit + "\" id=\"chartName" + counttabedit
								+ "\" class=\"form-control\"  placeholder=\"chart name\" value=\"' + text + '\" />')\r\n"
								+ " $('#chartlablename" + counttabedit + "').text('').append(input);\r\n"
								+ " input.select();\r\n" + "\r\n" + " input.blur(function() {\r\n"
								+ "   var text = $('#chartName" + counttabedit + "').val();\r\n" + "   $('#chartName"
								+ counttabedit + "').parent().text(text);\r\n" + "   $('#chartName" + counttabedit
								+ "').remove();updateChartname(" + chartId_ + ",text)\r\n" + " });\r\n" + "});</script>";

						counttabedit++;

					}

				}

				complete = tabStrScript + tabStrLst + "</ul>" + chartlist + "</div>" + tabStrDiv
						+ "\n\r<script>let grids = GridStack.initAll({animate: true,float: true, resizable: { handles: 'all'} });"
						+ charts + "  //grids.on('resizestop',function(event, el) {});   </script>" + labelinputScript
						+ " " + chartlabelScript;
				//System.out.println("complete  " + complete);

			}
		}
		else
		{
//			HttpServletRequest req= new (HttpServletRequest);
//			savenewdashboard(0, "abcd", "0", 0, req);
		}
		

		return complete;
		
	}
	

	
	
	@RequestMapping(value = "/getchartDash_Real", method = RequestMethod.POST)
	public ModelAndView getchartDash_Real(@RequestParam String chartName, String fieldsprop, String charttype, String table,
			String containerID, String filterprop, int chartid , String top_bottom ,String properties_) throws SQLException {

		SQLPojo sql = new SQLPojo();
		String sqlQuery = "";
		String columnlist = "";
		String fieldFieldNode = "";
		String filter_context = "";
		int isbin = 0;
		int istack = 0;
		String aggFieldNode ="";
		PreparedStatement ps = null;
		String tableconidquery = "select containerid ,viz_type ,dashid,filter_context from slices where id =" + chartid;
		
		System.out.println("tableconidquery   "+tableconidquery);
		
		
		String containerid = "";
		String viz_type = "";
		int dashid = 0;
		int binFieldNode = 0;
		String binTypeNode = "";
		String binSizeNode = "";
		String binCountNode = "";
		String type = "";
		String agg ="";
		
		int fromfirst = 0;
		int tofirst = 0;
		String firstcolor = "";
		int fromsecond = 0;
		int tosecond = 0;
		String secondcolor = "";
		int fromthird = 0;
		int tothird = 0;
		String thirdcolor = "";
		int fromTofunction = 0;
		int targetvalue = 0;
		
		String Y_Field = "";
		
		String X_field_ = "";
		

		try {
			ps = conpg.prepareStatement(tableconidquery);
			ResultSet rs1 = ps.executeQuery();

			while (rs1.next()) {
				containerid = rs1.getString(1);
				viz_type = rs1.getString(2);
				dashid = rs1.getInt(3);
				filter_context = rs1.getString(4);
			}
			
			rs1.close();
			ps.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		try {
			JsonFactory jsonFactory = new JsonFactory();
			ObjectMapper objectMapper = new ObjectMapper(jsonFactory);

			JsonNode arrayNode = objectMapper.readTree(fieldsprop);
			filterprop = filterprop.replace("\\\\", "");
			JsonNode arrayNodeFilter = objectMapper.readTree(filterprop);

			if (arrayNodeFilter.isArray()) {
				sql.setWhere(arrayNodeFilter, table);

			}

			String querycharttype = "";

			// FOR PIE
			if (arrayNode.isArray()) {

				sql.setTable(table + " ");
				int count = 0;
				for (JsonNode jsonNode : arrayNode) {
					 System.out.println("arrayNode"+arrayNode);
					ObjectMapper nodeMapper = new ObjectMapper();
					JsonNode jNode = nodeMapper.readTree(jsonNode.toString().replace("[", "").replace("]", ""));
					JsonNode color = jNode.get("colorfields");
					
//                    JsonNode colorNode = objectMapper.readTree(color);
                    System.out.println("color::::::" + color);
//					for (JsonNode colorNodein : color) {
						
						 fromfirst =Integer.parseInt(color.get("fromfirst").asText());// color.get("fromfirst").asText();
						 tofirst =Integer.parseInt(color.get("tofirst").asText());// color.get("tofirst").asText();
						 firstcolor = color.get("firstcolor").asText();
						 fromsecond =Integer.parseInt(color.get("fromsecond").asText());// color.get("fromsecond").asText();
						 tosecond =Integer.parseInt(color.get("tosecond").asText());// color.get("tosecond").asText();
						 secondcolor = color.get("secondcolor").asText();
						 fromthird =Integer.parseInt(color.get("fromthird").asText());// color.get("fromthird").asText();
						 tothird =Integer.parseInt(color.get("tothird").asText());// color.get("tothird").asText();
						 thirdcolor = color.get("thirdcolor").asText();
						 fromTofunction = Integer.parseInt(color.get("fromTofunction").asText());
						 targetvalue = Integer.parseInt(color.get("targetvalue").asText());

					String seriesFieldNode = jNode.get("Series").asText();

					fieldFieldNode = jNode.get("Field").asText();

					aggFieldNode = jNode.get("Agg").asText();
					if(seriesFieldNode.equalsIgnoreCase("Y-Axis"))  
//						|| (seriesFieldNode.equalsIgnoreCase("X1-Axis")))
					{
				    agg += jNode.get("Agg").asText() +",";
				    Y_Field += jNode.get("Field").asText() +",";
				    
					}
					
					sql.setX_Field(Y_Field);//Aggr(X_Field);
                    sql.setAggr(agg);
					int displaytopCheck = Integer.parseInt(jNode.get("displaytopCheck").asText());
					String displaytopvalueNode = jNode.get("displaytopvalue").asText();
					String othersNode = jNode.get("others").asText();
					
					String userlimit = jNode.get("userlimit").asText();
					
					userlimit = userlimit.split(" , ")[0];
					
					sql.setUserlimit(Integer.parseInt(userlimit));
					
					if(seriesFieldNode.equalsIgnoreCase("X-Axis")) 
					{
						
						X_field_ =  jNode.get("Field").asText();
						
						type = jNode.get("Type").asText();
						//System.out.println("type::::" + type);
						sql.setXdataType(type);
						 binFieldNode = Integer.parseInt(jNode.get("Bin").asText());
							//System.out.println("binFieldNode::::" + binFieldNode);
							sql.setIsBin(binFieldNode);
							 binTypeNode = jNode.get("BinType").asText();
							//System.out.println("binTypeNode::::" + binTypeNode);
							sql.setBinType(binTypeNode);
							 binSizeNode = jNode.get("BinSize").asText();
							//System.out.println("binSizeNode::::" + binSizeNode);
							sql.setBinSize(binSizeNode);//setBinType(binTypeNode);
							 binCountNode = jNode.get("BinCount").asText();
							//System.out.println("binCountNode::::" + binCountNode);
							sql.setBinCount(binCountNode);
					}
					
					if (binFieldNode == 1) {
						isbin=1;
					}

					// PIE

					if (charttype.equals("chartcard8")) {
						querycharttype = "pie";
						pieSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode);
					} else if (charttype.equals("chartcard9")) {
						querycharttype = "donut";
						pieSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode);
					} else if (charttype.equals("chartcard1")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "histogram";

						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					} else if (charttype.equals("chartcard2")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "bar";
						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					} else if (charttype.equals("chartcard3")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "stackedbar";
						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
						;
					}

					else if (charttype.equals("chartcard4")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "Area";
						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}
					// LINES
					else if (charttype.equals("chartcard5")) {
						querycharttype = "line";
						lineSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, displaytopvalueNode, othersNode,
								displaytopCheck);
					}
					else if (charttype.equals("chartcard6")) {
						querycharttype = "Gauge";
						singlevalueSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode);
					}
					else if (charttype.equals("chartcard7")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "StackedArea";
						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}

					else if (charttype.equals("chartcard10")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "bar100%";

						stackedSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}

					else if (charttype.equals("chartcard11")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "stacked100%";

						stackedSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}

					else if (charttype.equals("chartcard14")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "scatter";

						scatterSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}
					else if (charttype.equals("chartcard15")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "bubble";

						bubbleSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}
					 else if (charttype.equals("chartcard16")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 1) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "SingleValue";

						singlevalueSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode);
						sqlQuery = sql.getQuery(querycharttype, table);
					} else if (charttype.equals("chartcard17")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "table";

						tableSQL(sql, seriesFieldNode, fieldFieldNode);
						sqlQuery = sql.getQuery(querycharttype, table);
					}
//					else if (charttype.equals("chartcard18")) {
//						// table
////						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
//						if (count == 2) {
//							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
//								istack = 0;
//							} else {
//								istack = 1;
//							}
//						}
//						querycharttype = "bullet";
//						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
//								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
//					}
					else if (charttype.equals("chartcard18")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
//						if (count == 2) {
//							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
//								istack = 0;
//							} else {
//								istack = 1;
//							}
//						}
						querycharttype = "bullet";
//						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
//								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
						
						
						singlevalueSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode);
					}
					else if (charttype.equals("chartcard19")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "heatmap";
						heatmapSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}				
					else if (charttype.equals("chartcard20")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "Pyramid";
						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}
					else if (charttype.equals("chartcard21")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "Funnel3D";
						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}
					else if (charttype.equals("chartcard22")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "WordCloud";
						singlevalueSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode);
					}
					else if (charttype.equals("chartcard23")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "clustered";
						scatterSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}
					
				}

			}
			sqlQuery = sql.getQuery(querycharttype, table);
			columnlist = sql.getAggColumnlist();
			System.out.print("sqlQuery ::::::" + sqlQuery);

		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		ModelAndView modelview = new ModelAndView();
		
		if (charttype.equals("chartcard16")) {
			int chartModel_ = 0;
//			System.out.println("containerID:::chartcard16  " + containerID);
//          containerID ="";
			String singlevalue = "singlevalue";
			chartModel_ = getchartdata.buildsingleChart(sqlQuery, "chartcard16", "" , aggFieldNode);
//			System.out.println("chartModel_:::" + chartModel_);
			modelview.addObject("containerid", "\"" + containerID + "\"");
			modelview.addObject("jsondata", "\"" + chartModel_ + "\"");
			modelview.addObject("type", "\"" + singlevalue + "\"");
			modelview.addObject("table_name", "\"" + chartName + "\"");
			//containerID ="";
			modelview.addObject("tablecontainerid", "\"\"");
			

			// modelview.addObject("model", chartModel_);
			modelview.setViewName("draw_custom_charts");
		} 
		else if (charttype.equals("chartcard17"))
		{
			String chartModel_1 = "";
			String table1 = "table";
			chartModel_1 = getJsondataClickHouseDataobjectAPI(sqlQuery);
//			System.out.println("chartModel_1:::" + chartModel_1);
			// tableData = getTableData(chartModel_1 , containerid);
//			System.out.println("containerID:::chartcard17  " + containerID);
			modelview.addObject("jsondata", chartModel_1.toString());
			modelview.addObject("type", "\"" + table1 + "\"");
			modelview.addObject("table_name", "\"" + chartName + "\"");
			modelview.addObject("tablecontainerid", "\"" + containerID + "\"");
			modelview.addObject("containerid", "\"\"");
			modelview.setViewName("draw_custom_charts");

		} else {

			Map<String, String> chartModel = new HashMap<String, String>();
//			System.out.println("isbin:   buildddddddddddddddddd::" + isbin);
			chartModel = buildChart(sqlQuery, charttype, containerID, istack, columnlist, isbin ,chartName ,aggFieldNode,binTypeNode,fromfirst,tofirst,
					firstcolor,fromsecond,tosecond,secondcolor,fromthird,tothird,thirdcolor,fromTofunction,targetvalue ,X_field_ ,properties_);
			modelview.addObject("model", chartModel);
			modelview.setViewName("draw_charts");
		}
		return modelview;


	}
	
	

//	int counttabedit_ =0;
//	@RequestMapping(value = "/buildTab", method = RequestMethod.POST)
//	@ResponseBody
//	public ModelAndView buildTab_(@RequestParam String dashId) throws IOException {
//
//		//String dashId = "";
//		int chartId = 0;
//		PreparedStatement ps = null;
//		String dashquery = " select id, position_json, tabscount,dashboard_title from dashboards where id = " + dashId;
//		//System.out.println("dashquery:::======" + dashquery);
//
//		List<ChartEntity> list = new ArrayList<ChartEntity>();
//		int id = 0;
//		String position_json = "";
//		String dashboard_title = "";
//		 //int tabscount=0;
//		try {
//			ps = conpg.prepareStatement(dashquery);
//			ResultSet rs = ps.executeQuery();
//
//			while (rs.next()) {
//				id = rs.getInt(1);
//				position_json = rs.getString(2);
//				dashboard_title = rs.getString(4);
//				 //tabscount=rs.getInt(3);
//			}
//			
//			rs.close();
//			ps.close();
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//
//		String complete_ = "";
//		// System.out.println("viz_type:::::" + viz_type);
////		System.out.println("id:::::" + id);
////		System.out.println("position_json:::::" + position_json);
////		System.out.println("dashboard_title:::::" + dashboard_title);
//
//		if (id > 0) {
//
//			// List<ChartEntity> listofcharts = getDashCharts("1");
//			List<ChartEntity> listofcharts = getDashCharts(dashId);
//			//System.out.println("listofcharts size:::" + listofcharts.size());
//
//			JsonFactory jsonFactory = new JsonFactory();
//			ObjectMapper objectMapper = new ObjectMapper(jsonFactory);
//
//			JsonNode arrayNode = objectMapper.readTree(position_json);
//
//			String chartlist = "<div id='btnpanel' class=\"cb-btn-panel\"><label for=\"name\" class=\"cb-control-label mr-2 dash-name\" id=\"dashName1\" value ='"+dashboard_title+"' style=\"margin-bottom:0\"><p class=\"label-text\" id=\"label-text\" style=\"font-size: 19px;margin-right: 20px;\">"
//					+ dashboard_title
//					+ "</p></label><button class=\"cb-cursor cb-primary mr-2\" id=\"edit\"  title=\"Edit\"><i class=\"os-icon os-icon-pencil-2\"></i></button><input type='hidden' name='dashid' id='dashid' value='"
//					+ dashId
//					+ "' /><button  class=\" cb-primary mr-2\" id=\"chartlist\" onclick=\"openChartlist()\" title=\"Chart List\"> <i class=\"os-icon os-icon-bar-chart-up\"></i></button><div id=\"chartlistdiv\" class=\"sidenav\" ><a href=\"javascript:void(0)\" class=\"closebtn\" onclick=\"closeChartlist()\">&times;</a><div class=\"pl-3 pt-3 pb-3\"><ul class=\"chart-list list-unstyled mt-3\" >";
//			String chartoption = "";// "<li class=\"drop-down__item\" value='0'>--select chart--</li>";
//			for (int j = 0; j < listofcharts.size(); j++) {
//				if (listofcharts.get(j).getIsoriginal() == 1) {
//					chartoption += "<li class=\"text-overflow\" id=\"addchartid" + j + "\"  onclick=\"addnewChart(" + j
//							+ ");\" title="+ listofcharts.get(j).getSlice_name() +"><input type='hidden' id='chartid" + j + "' value='" + listofcharts.get(j).getId()
//							+ "'><input type='hidden' id='varDimid" + j + "' value='"
//							+ listofcharts.get(j).getQuery_context() + "'><input type='hidden' id='varChartname" + j
//							+ "'  value='" + listofcharts.get(j).getSlice_name()
//							+ "'><input type='hidden' id='_charttypeid" + j + "' value='"
//							+ listofcharts.get(j).getViz_type() + "'><input type='hidden' id='_tableid" + j
//							+ "' value='" + listofcharts.get(j).getDatasource_name()
//							+ "'><input type='hidden' id='_containerdivID" + j + "' value='"
//							+ listofcharts.get(j).getContainerid() + "'><input type='hidden' id='varDimFilterid" + j
//							+ "' value='" + listofcharts.get(j).getFilter_context()
//							+ "'><i class=\"os-icon os-icon-bar-chart-up\"></i> &nbsp;&nbsp;"
//							+ listofcharts.get(j).getSlice_name() + "</li>";
//				}
//			}
//
//			String savebtn = "<button class=\"cb-primary mr-2\" onclick=\"openNav()\"  title=\"Filter\" id=\"openfiltersidebar\"><i class=\"os-icon os-icon-filter\"></i></button><button class=\"cb-primary  mr-1\"  title=\"Save Dashboard\" id=\"btnsave\" onClick=\"saveDash();\"><i class=\"os-icon os-icon-save\" ></i></button><button class=\"cb-primary mr-2\" id=\"Add_Dashboard\" title=\"Add Dashboard\" onClick=\"createNewDashboard();\"><i class=\"os-icon os-icon-plus\" ></i></button>";
//
//			chartlist = chartlist + chartoption + "</ul></div></div>" + savebtn + "</div>";
//
//			String labelinputScript = "<script>$('#dashName_').val(\'" + dashboard_title
//					+ "\'); $('#edit').click(function() {var text = $('.label-text').text();var input = $('<input type=\"text\" name=\"dashName\" id=\"dashName\" class=\"form-control\"  placeholder=\"dashboard name\" value=\"' + text + '\" />');$('.label-text').text('').append(input);input.select();input.blur(function() {var text = $('#dashName').val();  $('#dashName_').val(text);  $('#dashName').parent().text(text); $('#dashName').remove();});});</script>";
//
//			// FOR PIE
//			int tabscount = 0;
//			String tabStrScript = "<script>var tabcount=" + tabscount + ";</script>";
//			String tabStrLst = "<div class=\"cb-top-menu\"><ul><button class=\"addtab cb-primary mr-1\" onClick=\"addtab(tabcount);\"  title=\"Add Tab\"><i class=\"os-icon os-icon-plus\"></i></button>";
//			String tabStrDiv = "";
//
//			String charts = "";
//			String chartlabelScript = "";
//			if (arrayNode.isArray()) {
//				// System.out.println("dashjsonNode"+arrayNode);
//				
//				for (JsonNode jsonNode : arrayNode) {
//
//					tabscount++;
//					// javascript
//					tabStrScript = "<script>var tabcount=" + tabscount + ";</script>";
//					// System.out.println("dashchartjsonNode"+jsonNode);
//
//					// tabbid
//					String tabid = jsonNode.get("tabid").asText();
//					String tabname = jsonNode.get("tabname").asText();
//					
//					// tab strip ul
//					tabStrLst = tabStrLst + "<li id=\"tabli_" + tabscount + "\" onclick =\"switchtab("+tabscount+")\"><a href=\"#" + tabid
//							+ "\" id=\"settabname" + tabscount + "\" title=\"" + tabname + "\">" + tabname
//							+ "</a><span class=\"cb-edit-dashname cb-cursor\" id=\"opendashtitle_" + tabscount
//							+ "\" onclick=\"opendashtitle(" + tabscount
//							+ ")\"  title=\"Edit\"><i class=\"os-icon os-icon-pencil-2\"></i></span><span onclick=\"tabdelete("
//							+ tabscount
//							+ ")\" class=\"cb-cross-btn cb-cursor\"  title=\"Delete\"><i class=\"os-icon os-icon-x\"></i></span></li>";
//
//					
//					tabStrDiv = tabStrDiv + "<div id=\"" + tabid+"\" data-tabname=\"" + tabname + "\"><div id=\"grid"
//							+ tabid + "\">" + "<div class=\"grid-stack\"></div></div></div>";
//					
//					// chart level
//					//tabid = jsonNode.get("tabid").asText();
//					JsonNode arrayNode1 = jsonNode.get("childs");
//
//					for (JsonNode jsonNode1 : arrayNode1) {
//
//						String chartId_ = jsonNode1.get("chartid").asText();
//						
//						
//						
//						
//						chartId_ =chartId_.split("-")[0];
//						//System.out.println("1111  dashboard chartId_  :::::" + chartId_);
//
//						String x = jsonNode1.get("x").asText();
//						String y = jsonNode1.get("y").asText();
//						String w = jsonNode1.get("w").asText();
//						String h = jsonNode1.get("h").asText();
//
//						//System.out.println("chartId " + chartId);
//
//						ChartEntity ch = new ChartEntity(); // (ChartEntity) listofcharts.stream().filter(a -> a.getId()
//															// == chartId).collect(Collectors.toList()).get(0);
//
////						for (int k = 0; k < listofcharts.size(); k++) {
////							if (listofcharts.get(k).getId() == chartId) {
////								ch = listofcharts.get(k);
////								break;
////							}
////						}
//
//						//String chartname = ch.getSlice_name();
//						//System.out.println("chartname  " + chartname);
//
//						// if (ch.getSlice_name().equalsIgnoreCase(""))
//
//						String vizquery = " select viz_type, id, slice_name, datasource_type, datasource_name,  query_context, containerid,filter_context from slices where id ="+chartId_+"";
//						//" select viz_type from slices where id = " + chartId_;
//
//						//System.out.println("vizquery  :::======" + vizquery);
//						String viz_type1 = "";
//						int id_=0;
//						String slice_name="";
//						String datasource_type="";
//						String datasource_name="";
//						String query_context="";
//						String containerid="";
//						String filter_context="";
//						
//						
//						try {
//							ps = conpg.prepareStatement(vizquery);
//							ResultSet rs1 = ps.executeQuery();
//
//							while (rs1.next()) {
//								viz_type1 = rs1.getString(1);
//								id_ = rs1.getInt(2);
//								slice_name = rs1.getString(3);
//								datasource_type = rs1.getString(4);
//								datasource_name = rs1.getString(5);
//								query_context = rs1.getString(6);
//								containerid = rs1.getString(7);
//								filter_context = rs1.getString(8);
//
//							}
//							
//							rs1.close();
//							ps.close();
//						} catch (SQLException e) { // TODO Auto-generated catch block
//							e.printStackTrace();
//						}
//						
//						String uuid = "con" + UUID.randomUUID().toString().split("-")[0]; 
//						 if (viz_type1.equalsIgnoreCase("chartcard16")) {
//							charts = charts + "grids[" + (tabscount - 1) + "].addWidget({x:" + x + ",y:" + y + ",w:" + 2
//									+ ",h:" + 2
//									+ ", content: '<div class=\"d-flex justify-content-between align-items-center \">"
//									+ "<div class=\"d-flex mr-2 ml-2 header-title\">"
//									+ "<label for=\"chartname\" class=\"cb-control-label mr-2 ml-2 chart-title\"><p id=\"chartlablename"
//									+ counttabedit_ + "\"  class=\"chart-label-text\">" + slice_name
//									+ "</p></label></div>"
//									+ "<div class=\"d-flex justify-content-end align-items-center slice-control\">"
//									+ "<div >"
//										+ "<div class=\"dropdown\">"
//							+ "<div ><i class=\"os-icon os-icon-more-vertical cb-cursor dropbtn\" aria-hidden=\"true\"  onclick=\"dropdownopen(" + counttabedit_ + ")\"></i></div>"
//							+ "<div id=\"myDropdown"+ counttabedit_ +"\" class=\"dropdown-content\">"
//								+ "<a href=\"javascript:void(0)\" id=\"editchart_" + counttabedit_
//										+ "\" onclick=\"editchart(" + chartId_ + ");\"> Edit Chart </a>"
//								+ "<a href=\"javascript:void(0)\" id=\\\"editchartname_"
//										+ counttabedit_ + "\" > Edit Chart Name </a>"
//								+ "<a href=\"javascript:void(0)\" aria-hidden=\\\"true\\\" id=\"btndelete_"
//										+ counttabedit_ + "\" onclick=\"deleteChart(" + counttabedit_ + ")\"> Delete Chart </a>"
//								+ "<input type=\"hidden\" value=\"" + uuid + "\" id=\"btndeletetext"
//										+ counttabedit_ + "\">"
//							+ "</div>"
//						+ "</div>" + "</div> " + "</div>" + "</div>" + "<div data-chartid=\""
//									+ chartId_
//									+ "\" id=\"singlevalue" + uuid + "\" class=\"box-css justify-content-center align-items-center flex-column singlevalue box-css1\">"
//									+ "<h5 class=\"text-dark\">Single Value</h5><div class=\"value-text\"  id=\"singlevalue\">3</div></div>'});";
////								+ "<div class=\"chart-header\" id=\"" + ch.getContainerid() + "\" data-chartid=\""
////								+ chartId + "\" style=\"margin:5px\"></div>'});";
//
//						} else if (viz_type1.equalsIgnoreCase("chartcard17")) {
//
//							uuid = "table" + uuid;
//							// _containerID = "table"+_containerID;
//							charts = charts + "grids[" + (tabscount - 1) + "].addWidget({x:" + x + ",y:" + y + ",w:" + w
//									+ ",h:" + h
//									+ ", content: '<div class=\"d-flex justify-content-between align-items-center\">"
//									+ "<div class=\"d-flex mr-2 ml-2 header-title\">"
//									+ "<label for=\"chartname\" class=\"cb-control-label mr-2 ml-2 chart-title\"><p id=\"chartlablename"
//									+ counttabedit_ + "\"  class=\"chart-label-text\">" + slice_name
//									+ "</p></label></div>"
//									+ "<div class=\"d-flex justify-content-end align-items-center slice-control\">"
//									+ "<div >"
//										+ "<div class=\"dropdown\">"
//							+ "<div ><i class=\"os-icon os-icon-more-vertical cb-cursor dropbtn\" aria-hidden=\"true\"  onclick=\"dropdownopen(" + counttabedit_ + ")\"></i></div>"
//							+ "<div id=\"myDropdown"+ counttabedit_ +"\" class=\"dropdown-content\">"
//								+ "<a href=\"javascript:void(0)\" id=\"editchart_" + counttabedit_
//										+ "\" onclick=\"editchart(" + chartId_ + ");\"> Edit Chart </a>"
//								+ "<a href=\"javascript:void(0)\" id=\\\"editchartname_"
//										+ counttabedit_ + "\" > Edit Chart Name </a>"
//								+ "<a href=\"javascript:void(0)\" aria-hidden=\\\"true\\\" id=\"btndelete_"
//										+ counttabedit_ + "\" onclick=\"deleteChart(" + counttabedit_ + ")\"> Delete Chart </a>"
//								+ "<input type=\"hidden\" value=\"" + uuid + "\" id=\"btndeletetext"
//										+ counttabedit_ + "\">"
//							+ "</div>"
//						+ "</div>" + "</div> " + "</div>" + "</div>"
//									+ "<div id=\"tablechartdiv_"+uuid +"\"   data-chartid=\"" + chartId_
//									+ "\" class=\"box-css justify-content-start align-items-center flex-column singlevalue box-css1 p-1\">"
//									+ "<h5 class=\"text-dark\">Table Chart</h5><table id= \"table_" + uuid
//									+ "\" class=\"table table-striped table-bordered\"  style=\"font-size: 14px;width:100%: ;\">"
//									+ " <thead><tr><th>test</th><th>test2</th></tr></thead></table></div>'});";
//
//						}
//						else {
//
//								charts = charts + "grids[" + (tabscount - 1) + "].addWidget({x:" + x + ",y:" + y + ",w:" + w
//										+ ",h:" + h
//										+ ", content: '<div class=\"d-flex justify-content-between align-items-center \">"
//										+ "<div class=\"d-flex mr-2 ml-2 header-title\">"
//										+ "<label for=\"chartname\" class=\"cb-control-label mr-2 ml-2 chart-title\"><p id=\"chartlablename"
//										+ counttabedit_ + "\"  class=\"chart-label-text\">" + slice_name
//										+ "</p></label></div>"
//										+ "<div class=\"d-flex justify-content-end align-items-center slice-control\">"
//										+ "<div >"
//											+ "<div class=\"dropdown\">"
//								+ "<div ><i class=\"os-icon os-icon-more-vertical cb-cursor dropbtn\" aria-hidden=\"true\"  onclick=\"dropdownopen(" + counttabedit_ + ")\"></i></div>"
//								+ "<div id=\"myDropdown"+ counttabedit_ +"\" class=\"dropdown-content\">"
//									+ "<a href=\"javascript:void(0)\" id=\"editchart_" + counttabedit_
//											+ "\" onclick=\"editchart(" + chartId_ + ");\"> Edit Chart </a>"
//									+ "<a href=\"javascript:void(0)\" id=\\\"editchartname_"
//											+ counttabedit_ + "\" > Edit Chart Name</a>"
//									+ "<a href=\"javascript:void(0)\" aria-hidden=\\\"true\\\" id=\"btndelete_"
//											+ counttabedit_ + "\" onclick=\"deleteChart(" + counttabedit_ + ")\"> Delete Chart </a>"
//									+ "<input type=\"hidden\" value=\"" + uuid + "\" id=\"btndeletetext"
//											+ counttabedit_ + "\">"
//								+ "</div>"
//							+ "</div>" + "</div> " + "</div>" + "</div>"
//										+ "<div class=\"chart-header\" id=\"" + uuid + "\" data-chartid=\"" + chartId_
//										+ "\" style=\"margin:5px\"></div>'});";
//
//							}
//
//						charts = charts + "AjaxChart('" + query_context + "','" + viz_type1 + "','"
//								+ datasource_name + "','" + uuid + "','" + filter_context + "','"
//								+ chartId_ + "' ,'"+ tabid+"' " + ");";
//
//						chartlabelScript = chartlabelScript + "<script>$('#editchartname_" + counttabedit_
//								+ "').click(function() {\r\n" + " var text = $('#chartlablename" + counttabedit_
//								+ "').text();\r\n" + " var input = $('<input type=\"text\" name=\"chartName"
//								+ counttabedit_ + "\" id=\"chartName" + counttabedit_
//								+ "\" class=\"form-control\"  placeholder=\"chart name\" value=\"' + text + '\" />')\r\n"
//								+ " $('#chartlablename" + counttabedit_ + "').text('').append(input);\r\n"
//								+ " input.select();\r\n" + "\r\n" + " input.blur(function() {\r\n"
//								+ "   var text = $('#chartName" + counttabedit_ + "').val();\r\n" + "   $('#chartName"
//								+ counttabedit_ + "').parent().text(text);\r\n" + "   $('#chartName" + counttabedit_
//								+ "').remove();updateChartname(" + chartId_ + ",text)\r\n" + " });\r\n" + "});</script>";
//
//						counttabedit_++;
//
//					}
//
//				}
//
//				complete_ = tabStrScript + tabStrLst + "</ul>" + chartlist + "</div>" + tabStrDiv
//						+ "\n\r<script>let grids_ = GridStack.initAll({animate: true,float: true, resizable: { handles: 'all'} });"
//						+ charts + "  //grids.on('resizestop',function(event, el) {});   </script>" + labelinputScript
//						+ " " + chartlabelScript;
//				//System.out.println("model_ complete  " + complete_);
//
//			}
//		}
//		Map<String, Object> tabModel = new HashMap<String, Object>();
//		try {
//			
//				tabModel.put("setData",complete_);
//			
//			
//		} catch (Exception e) {
//			System.out.println("dashboard error::::" + e.toString());
//		}
//		System.out.println("tabModel dashboard_new dashboard error::::" + tabModel);
//		ModelAndView modelview = new ModelAndView();
//		modelview.setViewName("/dashboard");
//		modelview.addObject("model", tabModel);
//		// return new ModelAndView("dashboard", "model", tabModel);
//		return modelview;
//
//	}
		
	
	
	@RequestMapping(value = "/applyDashboardFilterbyid", method = RequestMethod.POST)
	 @ResponseBody 
	public ResponseEntity<?> applyDashboardFilterbyid(@RequestParam String filterprop1,
			int dashID, int currentabindex, int chartid ,String strRRR1) {

		String returnvalue = "";
		String tabStrDiv = "";
		String complete = "";
		String charts = "";
		String Field = "";
		List<ChartEntity> arr = new ArrayList<ChartEntity>();
		List<String> fieldarray = new ArrayList<String>();
//		System.out.println("start applyDashboardFilterbyidcopy::::::::::");
		System.out.println("filterprop applyDashboardFilterbyidcopy::::::::::" + filterprop1);
//		System.out.println("dashID applyDashboardFilterbyidcopy::::::::::" + dashID);
//		System.out.println("chartid applyDashboardFilterbyidcopy::::::::::" + chartid);
//		System.out.println("json applyDashboardFilterbyidcopy::::::::::" + strRRR1);
	
		List<Integer> uniquechartid = new ArrayList<Integer>();
		
		try {
			
			JsonFactory jsonFactory = new JsonFactory();
			ObjectMapper objectMapper = new ObjectMapper(jsonFactory);

			JsonNode arrayNode = objectMapper.readTree(strRRR1);
//			System.out.println("json arrayNode::::::::::" + arrayNode);
		
			
		{
			
			//int chartid_temp  = 0;uniquechartid.get(k);
			String containerID_live = "";
		
			for (JsonNode jsonNode : arrayNode) 
			{
				for (JsonNode jsonNode1 : jsonNode) 
				{
					
				
			int chartID = Integer.parseInt(jsonNode1.get("CHARTID").asText());
				containerID_live =jsonNode1.get("CONID").asText();
				
				
				
			   String chartID_ = String.valueOf(chartID);  //chartID.split('-')[0];
			   chartID_ =chartID_.split("-")[0];

				JsonNode arrayNodefilter = objectMapper.readTree(filterprop1);
				
				if (arrayNodefilter.isArray()) 
				{
					
					try {
						
						for (JsonNode jsonNode_ : arrayNodefilter) 
						{
							for (JsonNode jsonNode_1 : jsonNode_) 
							{
							
								ObjectMapper nodeMapper = new ObjectMapper();
							
//								System.out.println("jNode::::#######################"+jsonNode_1);
								String Field_ = jsonNode_1.get("Field").asText();
							
							fieldarray.add(Field_);
//							System.out.println("Field------::::::"+Field_);
		
							
							}
						}
						}catch (Exception e) 
						{
							System.out.println("error extracting filter array:::"+e.toString());
						}
					}	
				
				
				
//				System.out.println("containerID jsonNode::::::::::" + containerID_live);
//				System.out.println("chartID jsonNode::::::::::" + chartID);
				
				List<ChartEntity> list = new ArrayList<ChartEntity>();
//					System.out.println("applyDashboardFilter:::::"+arr);
			String vizquery = " select viz_type,containerid, slice_name ,"
					+ " datasource_name,query_context,properties_context,isoriginal from slices where id = "
					             + chartID;

//			System.out.println("vizquery:::======" + vizquery);
			String viz_type1 = "";
			String ContainerID = "";
			String chartname = "";
			String datasource_name = "";
			String query_context = "";
			int isoriginal=0;
			String properties_context ="";
			PreparedStatement ps = null;

			try {
				ps = conpg.prepareStatement(vizquery);
				ResultSet rs1 = ps.executeQuery();

				while (rs1.next()) {
					viz_type1 = rs1.getString(1);
					ContainerID = rs1.getString(2);
					chartname = rs1.getString(3);
					datasource_name = rs1.getString(4);
					query_context = rs1.getString(5);			
					isoriginal = rs1.getInt(7);
					properties_context = rs1.getString(6);
					ChartEntity chartlist = new ChartEntity();
					
					int fileid = 2896;//  getFileid(ch.getDatasource_name());
					
					List<String> lsschmea =	new ArrayList<String>();
					lsschmea =	getFieldsListondashboard(datasource_name);
					
					int isexist =0;
					List<String> lsfilter = new ArrayList<String>();
					String fieldarray__ ="";
					for (int k=0;k<fieldarray.size();k++) 
					{
						   
//						System.out.println("########################################################---------------------------------------"+k);
						
						fieldarray__ =fieldarray.get(k).toString().trim();
						     
						     
						     
//						     System.out.println("fieldarray__:::::"+fieldarray__);
//						     System.out.println("####################"+lsschmea.contains(fieldarray__));
							
						     
						     if (lsschmea.contains(fieldarray__)) 
							{
								isexist = 1;
								
								try {
									
									for (JsonNode jsonNode2 : arrayNodefilter) 
									{
										for (JsonNode jsonNode2_ : jsonNode2) 
										{
										
										ObjectMapper nodeMapper = new ObjectMapper();
										
										String Field__ = jsonNode2_.get("Field").asText();
										
//										System.out.println("Field__::::::"+Field__.trim());
//										System.out.println("fieldarray__:::::"+fieldarray__);	
										
										if(Field__.trim().equalsIgnoreCase(fieldarray.get(k).trim())) 
										{
											lsfilter.add("["+jsonNode2_.toString()+"]");
										}
										
										
										}
									}
									
									
									
									}catch (Exception e) 
									{
										System.out.println("error extracting filter array:::"+e.toString());
									}
								}
							else 
							{
								isexist = 0;
							}
					}
					   
					
//					System.out.println("lsfilter:::::#############"+lsfilter.toString());
				
					
					
					
					chartlist.setDatasource_name(datasource_name);
					chartlist.setViz_type(viz_type1);
					chartlist.setQuery_context(query_context);
					chartlist.setContainerid(containerID_live);
					chartlist.setSlice_name(chartname);
					chartlist.setIsoriginal(isoriginal);
					chartlist.setFilter_context(lsfilter.toString());
					chartlist.setId(chartID);
					chartlist.setProperties(properties_context);
				
					arr.add(chartlist);
					//---AjaxChart_withid1(varDim,_charttype,_table,_containerID,varDimFilter,chartid__,varChartname,dashid);
				}
				
				rs1.close();
				ps.close();
			} catch (SQLException e) {
				System.out.println("error :::::" + e.toString());
				e.printStackTrace();
			}
			
			
				}
			}		
			
			
		}
		
		
		
	}		
		
		//}
		catch (Exception e) {
			
			// TODO: handle exception
		}
		

		return new ResponseEntity<List>(arr, HttpStatus.OK);

	}
	
	

	static int countchart = 0;

	// @SuppressWarnings("deprecation")
	@RequestMapping(value = "/buildTabDiv", method = RequestMethod.POST)
	@ResponseBody
	public String buildTabDiv(@RequestParam String varDim, String _charttype, String _table, String _containerID,
			String varDimFilter, String chartid, String chartname, int tabscount, int dashID ,String properties_) throws IOException {

//		System.out.println("counttabedit buildTabDiv::::"+counttabedit);
		countchart= counttabedit;
		// get chart id
		//countchart--;
		int chartid_increment=10;
		//String chartid_ = chartid+"-"+chartid_increment;
//		System.out.println("chartid_ buildTabDiv::::"+chartid);
		PreparedStatement ps = null;
		String filequery = " select id, position_json, tabscount,dashboard_title from dashboards where id = " + dashID;
		List<ChartEntity> list = new ArrayList<ChartEntity>();
		int id = 0;
		String position_json = "";
		String dashboard_title = "";
		int chartId = 0;
		int isExist = 0;
		
		try {
			ps = conpg.prepareStatement(filequery);
			ResultSet rs = ps.executeQuery();

			while (rs.next()) {
				id = rs.getInt(1);
				position_json = rs.getString(2);
				dashboard_title = rs.getString(4);
				// tabscount=rs.getInt(3);
			}
			rs.close();
			ps.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		List<ChartEntity> listofcharts = getDashCharts("1");

		JsonFactory jsonFactory = new JsonFactory();
		ObjectMapper objectMapper = new ObjectMapper(jsonFactory);

		JsonNode arrayNode = objectMapper.readTree(position_json);

		if (arrayNode.isArray()) {

		  
			for (JsonNode jsonNode : arrayNode) {
				// tabscount++;
				// tabbid
				String tabid = jsonNode.get("tabid").asText();
				String tabname = jsonNode.get("tabname").asText();
				// chart level
				JsonNode arrayNode1 = jsonNode.get("childs");
				//int chartID = id;
				for (JsonNode jsonNode1 : arrayNode1) {
					 String chartId_ = jsonNode1.get("chartid").asText();
               // String chartid =chartid;
					if (chartId_ == chartid) {
						isExist = 1;
						break;
					}

					//counttabedit++;
				}
			}
		}
		// end

	//	System.out.println("buildTabDiv::::");

		String complete = "";
		String charts = "";

		String x = "0";
		String y = "0";
		String w = "6";
		String h = "3";

//		System.out.println("chartId::" + chartid);
//		System.out.println("_containerID::" + _containerID);
		// String uuid=
		// "conea2a4e28";//"con"+UUID.randomUUID().toString().split("-")[0]; //Generates
		// random UUID
		String uuid = "con" + UUID.randomUUID().toString().split("-")[0]; // Generates random UUID

		_containerID = uuid;
		
		String intindex = UUID.randomUUID().toString().split("-")[1];
		//System.out.println("intindex::" + intindex);
		// System.out.println("UUID.randomUUID():::::"+UUID.randomUUID());
		// sdgsfsgdd
		// System.out.println("UUID.randomUUID():::::"+UUID.randomUUID().toString().split("-")[1]);
//		System.out.println("tabscount:::::::::::::::" + tabscount);
//		System.out.println("_charttype:::::::::::::::" + _charttype);
		String chartid_split = chartid.split("-")[0];
		if (_charttype.equals("chartcard16")) {
			w = "2";
			h = "1";

			// intindex = "\""+intindex +"\"";

			charts = charts + "grids[" + (tabscount - 1) + "].addWidget({x:" + x + ",y:" + y + ",w:" + w + ",h:" + h
					+ ", content: '<div class=\"d-flex justify-content-between align-items-center \"><div class=\"d-flex mr-2 ml-2 header-title\"><label for=\"chartname\" class=\"cb-control-label mr-2 ml-2 chart-title\"><p class=\"chart-label-text\">"+ chartname+"</p></label>"
					+ "</div><div class=\"d-flex justify-content-end align-items-center slice-control\"><div ><div class=\"dropdown\"><div ><i class=\"os-icon os-icon-more-vertical cb-cursor dropbtn\" aria-hidden=\"true\"  onclick=\"dropdownopen(" + chartid_split + ")\"></i></div><div id=\"myDropdown"+ chartid_split +"\" class=\"dropdown-content\"><a href=\"javascript:void(0)\" id=\"editchart_" + countchart + "\" onclick=\"editchart_(" + chartid_split + ");\"> Edit Chart </a><a href=\"javascript:void(0)\" aria-hidden=\"true\" id=\"btndelete_" + countchart + "\" onclick=\"deleteChart(" + countchart + ")\"> Delete Chart </a><input type=\"hidden\" value=\"" + uuid + "\" id=\"btndeletetext"+ countchart + "\"></div></div> </div></div></div>" + "<div data-chartid= \""
					+ chartid 
					+ "\" id=\"singlevalue" + _containerID + "\"  class=\"chart-header box-css justify-content-center align-items-center flex-column singlevalue box-css1\">"
					+ "<h5 class=\"text-dark\">Single Value</h5><div class=\"value-text\"  id=\"singlevalue\">3</div></div>'});";

		} else if (_charttype.equals("chartcard17")) {
			// intindex = "'"+intindex +"'";
			//_containerID = "table" + _containerID;
			
			charts = charts + "grids[" + (tabscount - 1) + "].addWidget({x:" + x + ",y:" + y + ",w:" + w + ",h:" + h
					+ ", content: '<div class=\"d-flex justify-content-between align-items-center \"><div class=\"d-flex mr-2 ml-2 header-title\"><label for=\"chartname\" class=\"cb-control-label mr-2 ml-2 chart-title\"><p class=\"chart-label-text\">"+ chartname+"</p></label>"
					+ "</div><div id=\"tablechartdiv_data"+_containerID + "\"></div><div class=\"d-flex justify-content-end align-items-center slice-control\"><div ><div class=\"dropdown\"><div ><i class=\"os-icon os-icon-more-vertical cb-cursor dropbtn\" aria-hidden=\"true\"  onclick=\"dropdownopen(" + chartid_split + ")\"></i></div><div id=\"myDropdown"+ chartid_split +"\" class=\"dropdown-content\"><a href=\"javascript:void(0)\" id=\"editchart_" + countchart + "\" onclick=\"editchart_(" + chartid_split + ");\"> Edit Chart </a><a href=\"javascript:void(0)\" aria-hidden=\"true\" id=\"btndelete_" + countchart + "\" onclick=\"deleteChart(" + countchart + ")\"> Delete Chart </a><input type=\"hidden\" value=\"" + uuid + "\" id=\"btndeletetext"+ countchart + "\"></div></div> </div></div></div>"
					+ "<div id=\"tablechartdiv_" +_containerID + "\"  data-chartid=\"" + chartid
					+ "\"  class=\"chart-header box-css justify-content-start align-items-center flex-column singlevalue box-css1 p-1\">"
					+ "<h5 class=\"text-dark\">Table Chart</h5><table id= \"table_" + _containerID
					+ "\" class=\"table table-striped table-bordered\"  style=\"font-size: 14px;width:100% ;\">"
					+ " </table></div>'});";
		}  
		/*
		 * else if(_charttype.equals("chartcard17")) { //intindex = "'"+intindex +"'";
		 * _containerID = "table"+_containerID; charts = charts + "grids[" + (tabscount
		 * - 1) + "].addWidget({x:" + x + ",y:" + y + ",w:" + w + ",h:" + h +
		 * ", content: '<div class=\"d-flex justify-content-between align-items-center mr-3 mt-2\"><div class=\"ml-2 chart-title\">"
		 * + chartname +
		 * "</div><div class=\"d-flex justify-content-end align-items-center\"><div class=\"mr-2\"><i class=\"os-icon os-icon-pencil-2 cb-cursor\" id=\"editchart_"
		 * + intindex + "\" onclick=\"editchart(" + chartid +
		 * ");\"></i></div><div class=\\\"mr-2\\\"><i class=\"os-icon os-icon-trash-2 cb-cursor\" aria-hidden=\"true\" id=\"btndelete_"
		 * + intindex + "\" onclick=\"deleteChart("
		 * +countchart+")\"></i><input type=\"hidden\" value=\"" + _containerID +
		 * "\" id=\"btndeletetext" + countchart + "\"></div></div> </div>"
		 * +"<div id=\"tablechartdiv" +_containerID + "\" data-chartid=\"" + chartid +
		 * "\"  class=\"box-css justify-content-start align-items-center flex-column singlevalue\">"
		 * +"<h5 class=\"text-dark\">Table Chart</h5><table id= \"table_" +_containerID
		 * +
		 * "\" class=\"table table-striped table-bordered\"  style=\"font-size: 14px;width:100% ;\">"
		 * +" <thead><tr><th>test</th><th>test2</th></tr></thead></table></div>'});"; }
		 */
		else {
			intindex = "\"" + intindex.trim() + "\"";

			charts = charts + "grids[" + (tabscount - 1) + "].addWidget({x:" + x + ",y:" + y + ",w:" + w + ",h:" + h
					+ ", content: '<div class=\"d-flex justify-content-between align-items-center \"><div class=\"d-flex mr-2 ml-2 header-title\"><label for=\"chartname\" class=\"cb-control-label mr-2 ml-2 chart-title\"><p class=\"chart-label-text\">"+ chartname+"</p></label>"
					+ "</div><div class=\"d-flex justify-content-end align-items-center slice-control\"><div ><div class=\"dropdown\"><div ><i class=\"os-icon os-icon-more-vertical cb-cursor dropbtn\" aria-hidden=\"true\"  onclick=\"dropdownopen(" + chartid_split + ")\"></i></div><div id=\"myDropdown"+ chartid_split +"\" class=\"dropdown-content\"><a href=\"javascript:void(0)\" id=\"editchart_" + countchart + "\" onclick=\"editchart_(" + chartid_split + ");\"> Edit Chart </a><a href=\"javascript:void(0)\" aria-hidden=\"true\" id=\"btndelete_" + countchart + "\" onclick=\"deleteChart(" + countchart + ")\"> Delete Chart </a><input type=\"hidden\" value=\"" + uuid + "\" id=\"btndeletetext"+ countchart + "\"></div></div> </div></div></div><div class=\"chart-header\" id=\"" + _containerID + "\" data-chartid=\"" + chartid
					+ "\" style=\"margin:5px\"></div>'});";

			// charts = charts + "AjaxChart("+varDim+",'"+_charttype+"','"+_table+"','"+
			// uuid+"',"+ varDimFilter + ");";
		}
		countchart++;
		//if (_charttype.equals("chartcard17")) {
			complete = "\n\r<script>  $('#uuid').val('" + _containerID + "');  " + charts + "</script>";
//		} else {
//			complete = "\n\r<script>  $('#uuid').val('" + uuid + "');  " + charts + "</script>";
//		}
			counttabedit= countchart;
		if (isExist == 1) {
			return "Exist";
		} else {
			return complete;
		}

	}
	
	
	@RequestMapping(value = "/savechart", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<?> saveChart(@RequestParam String chartName, String fieldsprop, String charttype,
			String filterprop,String properties, String tablename, int dashboardid, String tabname, String tabid, String chartNametxt,
			int chart_id , String theme_, HttpServletRequest req) throws JsonMappingException, JsonProcessingException {
		System.out.println("btn save pressed #############");
		
		System.out.println("filterprop  btn save pressed " +filterprop);
		String sqlQuery = "";
		int msg = 0;
		int sliceid = 0;
		String newPos_json = "";
		String slicename = "";
		PreparedStatement ps = null;
		String chart_type = charttype;// chartType(charttype);
		int versionDb = -1;
		String updatedatatypeQuery1="";
		String slice_nameinDB="";
		int  chartid_inDB=0;
		ResultSet rs1 = null;
		int savechartFlag =0;
		
		String sqlselec_allfromfile = "select id,slice_name from slices ";
//		System.out.println("sqlselecallfromfile--" + sqlselec_allfromfile);
		try {
			ps = conpg.prepareStatement(sqlselec_allfromfile);
			rs1 = ps.executeQuery();
			while (rs1.next()) {
				chartid_inDB = rs1.getInt(1);
				slice_nameinDB = rs1.getString(2);
				
				  if (chartid_inDB == chart_id)
		           {
					  savechartFlag =1;
		        	   updatedatatypeQuery1 = "update slices  " + "set " + "slice_name='" + chartNametxt + "',"
								+ " datasource_name='" + tablename + "'," + "viz_type = '" + chart_type + "',query_context = '"
								+ fieldsprop + "'," + "filter_context='" + filterprop + "'," + "properties_context='" + properties + "' ," + "chart_theme='"+theme_+"' where id=" + chart_id;

						ps = conpg.prepareStatement(updatedatatypeQuery1);
						ps.execute();
						ps.close();
						msg = 1;
//						System.out.println("chartid_inDB :: " + chartid_inDB);
		           }
				

					
			} 
         
			  ps.close();
			  rs1.close();
			
		} catch (Exception e) {
			versionDb = -1;
			System.out.println(e.getMessage());
			// TODO: handle exception
		}
		
		
		if (savechartFlag == 0)
		{	
		
		try {
			JsonFactory jsonFactory = new JsonFactory();
			ObjectMapper objectMapper = new ObjectMapper(jsonFactory);
//			System.out.println("fieldsprop1234:::::" + fieldsprop);
			JsonNode arrayNode = objectMapper.readTree(fieldsprop);

			JsonNode arrayNodeFilter = objectMapper.readTree(filterprop);

			String updatedatatypeQuery = "";

			Statement statement = conpg.createStatement();

			String uuid = "con" + UUID.randomUUID().toString().split("-")[0]; // Generates random UUID

			if (chart_id == 0) {

				ResultSet rs = null;

				String sqlselecfromfile = "select version from slices where upper(slice_name) like '"
						+ chartNametxt.trim() + "_V%' or upper(slice_name) like '" + chartNametxt.trim() + "'"
						+ " order by version desc limit 1";
//				System.out.println("sqlselecfromfile--" + sqlselecfromfile);
				try {
					ps = conpg.prepareStatement(sqlselecfromfile);
					rs = ps.executeQuery();
					while (rs.next()) {
						versionDb = rs.getInt(1);
					}

					ps.close();
					rs.close();

//					System.out.println("version :: " + versionDb);
				} catch (Exception e) {
					versionDb = -1;
					System.out.println(e.getMessage());
					// TODO: handle exception
				}

				if (versionDb >= 0) {
					versionDb = versionDb + 1;
					slicename = chartNametxt.trim() + "_V" + versionDb;
				} else {
					versionDb = 0;
					slicename = chartNametxt.trim();// + "_V"+versionDb;
				}

//				System.out.println("slicename:::::" + slicename);

				updatedatatypeQuery = "INSERT INTO public.slices("
						+ "	slice_name, datasource_type, datasource_name, viz_type,"
						+ " query_context,containerid,filter_context,version,chart_theme ,properties_context)" + "	VALUES ('" + slicename
						+ "', 'table', '" + tablename + "', '" + chart_type + "','" + arrayNode + "'," + "'" + uuid
						+ "','" + arrayNodeFilter + "'," + versionDb + ",'" + theme_ + "','" + properties + "') RETURNING id";

				System.out.println("updatedatatypeQuery::::::::::::" + updatedatatypeQuery);

				// PreparedStatement ps = null;
				ps = conpg.prepareStatement(updatedatatypeQuery);
				if (ps.execute()) {
					ResultSet rsEXEC = ps.getResultSet();
					rsEXEC.next();
					sliceid = rsEXEC.getInt(1);
				} else {
					sliceid = ps.getUpdateCount();
				}

//				System.out.println("slice_id::::" + sliceid);
				ps.close();
				msg = 1;
				// statement.execute(updatedatatypeQuery);
				// statement.close();

			} else {
				// slice update

				updatedatatypeQuery = "update slices  " + "set " + "slice_name='" + slicename + "',"
						+ " datasource_name='" + tablename + "'," + "viz_type = '" + chart_type + "',query_context = '"
						+ arrayNode + "'," + "filter_context='" + arrayNodeFilter + "' ," + "properties_context='" + properties + "', " + "chart_theme ='" + theme_ + "' where id=" + chart_id;

				// PreparedStatement ps = null;
				ps = conpg.prepareStatement(updatedatatypeQuery);
				ps.execute();
				ps.close();
				msg = 1;

			}

//			System.out.println("dashboardid::::" + dashboardid);
//			System.out.println("msg:::::" + msg);

			if (dashboardid != 0) 
			{
				int sliceid_ = 0;
				Thread.sleep(10);
				uuid = "con" + UUID.randomUUID().toString().split("-")[0]; // Generates random UUID
				updatedatatypeQuery = "INSERT INTO public.slices("
						+ "	slice_name, datasource_type, datasource_name, viz_type,"
						+ " query_context,containerid,filter_context,version,isoriginal,dashid,tabid,chart_theme ,properties_context )" + "	VALUES ('"
						+ slicename + "', 'table', '" + tablename + "', '" + chart_type + "','" + arrayNode + "'," + "'"
						+ uuid + "','" + arrayNodeFilter + "'," + versionDb + "," + "0," + dashboardid + ",'" + tabid
						+ "','"+theme_+"' ,'"+properties+"') RETURNING id";

				// PreparedStatement ps = null;
				ps = conpg.prepareStatement(updatedatatypeQuery);
				if (ps.execute()) {
					ResultSet rsEXEC = ps.getResultSet();
					rsEXEC.next();
					sliceid_ = rsEXEC.getInt(1);
				} else {
					sliceid_ = ps.getUpdateCount();
				}
				ps.close();
				

				newPos_json = addcharttoTab(String.valueOf(dashboardid), sliceid_, tabid, tabname ,charttype);

				msg = 1;

			}

			  try
			  {
			  
			  if (tabid == "") 
			      {}
			  else
				  {
				  String updatedashposJson = " update dashboards set position_json='" + newPos_json + "' where id=" +
				  dashboardid + " ";
				  
	//			  System.out.println("updatedashposJson::::" + updatedashposJson);
				  statement.execute(updatedashposJson); statement.close(); msg = 1; 
				  }
			  
			  } catch (Exception e) 
			  {
				  System.out.println("error update ::::" + e.toString()); msg = 0; // TODO: handle exception }
			  }

		} catch (Exception e) 
		{
			// TODO Auto-generated catch block
			System.out.println("error ::::" + e.toString());			
		}
		
	}
		ChartEntity ch = new ChartEntity();
		ch.setViz_type(String.valueOf(msg));
		ch.setSlice_name(String.valueOf(sliceid));
		List<ChartEntity> arr = new ArrayList<ChartEntity>();
		arr.add(ch);
		return new ResponseEntity<List>(arr, HttpStatus.OK);
		
	}

	
//	@RequestMapping(value = "/updatechart", method = RequestMethod.POST)
//	@ResponseBody
//	public HttpStatus updatechart(@RequestParam String chartName, String fieldsprop, String charttype,
//			String filterprop, String tablename, int dashboardid, String tabname, String tabid, String chartNametxt,
//			int slice_id) throws IOException {
//		// System.out.println("btn save pressed");
//		String sqlQuery = "";
//		try {
//			JsonFactory jsonFactory = new JsonFactory();
//			ObjectMapper objectMapper = new ObjectMapper(jsonFactory);
//
//			JsonNode arrayNode = objectMapper.readTree(fieldsprop);
//
//			JsonNode arrayNodeFilter = objectMapper.readTree(filterprop);
//
//			String updatedatatypeQuery = "";
//
//			Statement statement = conpg.createStatement();
//
//			String uuid = "con" + UUID.randomUUID().toString().split("-")[0]; // Generates random UUID			
//
//			String chart_type = chartType(charttype);
//
//			updatedatatypeQuery = "update slices set slice_name='" + chartNametxt + "'  , "
//					+ "datasource_type='table', datasource_name='" + tablename + "'," + " viz_type='" + chart_type
//					+ "', query_context='" + arrayNode + "'," + "filter_context='" + arrayNodeFilter + "' where id="
//					+ slice_id;
//
//			int sliceid = 0;
//			PreparedStatement ps = null;
//			ps = conpg.prepareStatement(updatedatatypeQuery);
//			if (ps.execute()) {
//				ResultSet rsEXEC = ps.getResultSet();
//				rsEXEC.next();
//				// sliceid = rsEXEC.getInt(1);
//			} else {
//				// sliceid = ps.getUpdateCount();
//			}
//
//			
//			ps.close();
//			String newPos_json = "";
//
//			if (dashboardid != 0)
//			{
////				System.out.println("dashboardid::::" + dashboardid);
////				System.out.println("sliceid:::::" + sliceid);
////				System.out.println("tabid:::::" + tabid);
////				System.out.println("tabname:::::" + tabname);
//				newPos_json = addcharttoTab(String.valueOf(dashboardid), sliceid, tabid, tabname,charttype);
//			}
//
//			int msg = 0;
//			try {
//
//				if (!newPos_json.equalsIgnoreCase("")) {
//					String updatedashposJson = " update dashboards set position_json='" + newPos_json + "' where id="
//							+ dashboardid + " ";
//
//					statement.execute(updatedashposJson);
//					statement.close();
//					msg = 1;
//				}
//
//			} catch (Exception e) {
//				msg = 0;
//				// TODO: handle exception
//			}
//
//		} catch (SQLException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//
//		return HttpStatus.OK;
//	}

	//List <String> chartid_savedashboard = new ArrayList<String>();
	@RequestMapping(value = "/savedashboard", method = RequestMethod.POST)
	@ResponseBody
	public HttpStatus savedashboard(@RequestParam int dashid, String jsondata, String dashName_, int projectid, String theme_,
			HttpServletRequest req) throws JsonMappingException, JsonProcessingException
	{
		System.out.println("btn savedashboard pressed");
		String sqlQuery = "";
		PreparedStatement ps = null;
		int tabscount = 0;
		//System.out.println("dashName dashboard_title Q::::" + dashName_);
		//System.out.println("theme_ dashboard_title Q::::" + theme_);

		// if (dashid == 1) {
		String dashquery = " select id, position_json, tabscount,dashboard_title from dashboards where id = " + dashid;

		System.out.println("dashquery:::::" + dashquery);

		try {
			ps = conpg.prepareStatement(dashquery);
			ResultSet rs = ps.executeQuery();

			while (rs.next()) {
				dashid = rs.getInt(1);
				// position_json = rs.getString(2);
				//dashName = rs.getString(4);
				tabscount = rs.getInt(3);
			}
			
			rs.close();
			ps.close();
			
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		// }
		// int projectid = 1;
		try {
			//dashName_ = dashboard_title;
//			System.out.println("jsondata:::::::" + jsondata);
//			System.out.println("dashid::::::" + dashid);
//			System.out.println("dashName:::::" + dashName_);
//			System.out.println("projectid:::::" + projectid);
//			System.out.println("tabscount:::::" + tabscount);
			
			Map<String, String> json_pos_map = new LinkedHashMap<String, String>();
			JsonFactory jsonFactory = new JsonFactory();
			ObjectMapper objectMapper = new ObjectMapper(jsonFactory);

			JsonNode arrayNode = objectMapper.readTree(jsondata);
			String chartid ="";
			if (arrayNode.isArray()) {

				for (JsonNode jsonNode : arrayNode) {
					String tabid = jsonNode.get("tabid").asText();
					String tabname = jsonNode.get("tabname").asText();
					 chartid = jsonNode.get("chartid").asText();
//					System.out.println("chartid111:::::" + chartid);
					//chartid_savedashboard.add(chartid);
					if (json_pos_map.containsKey(tabid + "#_#" + tabname)) {

						String storevalue = json_pos_map.get(tabid + "#_#" + tabname);

						json_pos_map.replace(tabid + "#_#" + tabname, storevalue + "," + jsonNode);
						//System.out.println("json_pos_map chartid111  :::: " + json_pos_map);
					} else {
						json_pos_map.put(tabid + "#_#" + tabname, jsonNode.toString());
//						System.out.println("json_pos_map chartid111:::: " + json_pos_map);
					}

				}
				
			}
			//System.out.println("json_pos_map chartid111:::: " + json_pos_map);
			String final_json_pos_data = "";
			int count = 0;
			for (Map.Entry<String, String> entry : json_pos_map.entrySet()) {
				JsonObject jsonObject = null;
//				System.out.println("Key input :::::: " + entry.getKey() + " Value : " + entry.getValue());
				String entryvalue = entry.getValue();
				entryvalue ="["+entryvalue+"]";
				String chartid2 = "";
				String tabid = entry.getKey().toString().split("#_#")[0];
				String tabname = entry.getKey().toString().split("#_#")[1];

				JsonNode arrayNode2 = objectMapper.readTree(entryvalue);
				
				
				
//				System.out.println("arrayNode2  Key input :::::: " + arrayNode2);
				
				List <String> chartid_slicesarr = new ArrayList<String>();
				String slices_query = " select id from slices where isoriginal =1";
                String chartid_slices_query="";
//				System.out.println("slices_query:::::" + slices_query);

				try {
					ps = conpg.prepareStatement(slices_query);
					ResultSet rs = ps.executeQuery();

					while (rs.next()) {
						chartid_slices_query = rs.getString(1);
						
						
						chartid_slicesarr.add(chartid_slices_query);
					}
					rs.close();
					ps.close();
					
				} catch (SQLException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
				
				
				
			 String jsonObjectStr ="";
			 int i=0;
				for(JsonNode jsonNode_ : arrayNode2)
				{
					
					chartid2 = jsonNode_.get("chartid").asText();
					
				
					
//					System.out.println("chartid2 arrayNode2  Key input :::::: " + chartid2);
					
					
					if(chartid2 != "0" ) 
						   { 
						String containerid = "con" + UUID.randomUUID().toString().split("-")[0]; 
						String splitchartid2=chartid2.split("-")[0];
//						System.out.println("chartid2 split arrayNode2  Key input :::::: " + splitchartid2);
					//	if(!chartid_slicesarr.contains(splitchartid2))
							
							   
							   
						  try
						  { 
							   JsonParser parser= new JsonParser(); 
							   Object   obj=parser.parse(jsonNode_.toString()); 
							    jsonObject =   (JsonObject)obj; 
							    
							    if(chartid_slicesarr.contains(splitchartid2))
							    {
							    	setDuplicateSlice(dashid,containerid,chartid2); 
								   jsonObject.remove("chartid"); 
								   //newsliceid=newsliceid +"-";
								   System.out.println("newsliceid jsonObject   arrayNode2 :::::: " + newsliceid);
							       jsonObject.addProperty("chartid", newsliceid ); 
//							       System.out.println("jsonObject   arrayNode2 :::::: " + jsonObject); 
							    }
						  
						  if (i==0) 
						  {
							  jsonObjectStr += jsonObject.toString();  
						  }
						  else 
						  {
							  
							  jsonObjectStr += ","+jsonObject.toString();
						  }
						  
						  i++;
						  
						  //jsonObject = jsonObject;
						 // json_pos_map.put(tabid + "#_#" + tabname, jsonObject.toString()); 
						 // System.out.println("json_pos_map   arrayNode2 :::::: " + json_pos_map); 
						  
				}catch (Exception e) 
						  { 
							  
						  }
				}	 
					
				}
				// json_pos_map.put(tabid + "#_#" + tabname, jsonObject.toString()); 
				 // System.out.println("json_pos_map   arrayNode2 :::::: " + json_pos_map);
				

				// String chartid = entry.getKey().toString().split("#_#")[2];

				String tempstr = "{\"tabid\":\"" + tabid + "\",\"tabname\":\"" + tabname + "\",\"childs\":["
						+ jsonObjectStr + "]}";

//				System.out.println("chartid2::::" + chartid2);
//				System.out.println("tempstr::::" + tempstr);
				if (chartid2.equalsIgnoreCase("0")) {
					tempstr = "{\"tabid\":\"" + tabid + "\",\"tabname\":\"" + tabname + "\",\"childs\":[]}";
					System.out.println("tempstr111::::" + tempstr);
				}				

				if (count == 0) {
					final_json_pos_data += tempstr;
				} else {
					final_json_pos_data += "," + tempstr;

				}

				count++;

			}

			final_json_pos_data = "[" + final_json_pos_data + "]";

			//System.out.println("final_json_pos_data:::::::::::::" + final_json_pos_data);

			String newPos_json = "";

			Statement statement = conpg.createStatement();
			int userid = 1;
			if (req.getSession().getAttribute("currentSessionUserID") != null) {
				userid = Integer.parseInt(req.getSession().getAttribute("currentSessionUserID").toString());
			}
			int msg = 0;
			try {

				if (final_json_pos_data.equalsIgnoreCase("[]")) {
					final_json_pos_data = "";
				}

				if (!final_json_pos_data.equalsIgnoreCase("")) {

					String updatedashposJson = "";

					if (dashid == 0) {
						// insert
						updatedashposJson = "INSERT INTO public.dashboards(dashboard_title, position_json, tabscount,projectid,userid ,theme)"
								+ "VALUES ('" + dashName_ + "', '" + final_json_pos_data + "', " + (count + 1) + ","
								+ projectid + "," + userid + " ,"+ theme_ +")";

					} else {
						updatedashposJson = " update dashboards set position_json='" + final_json_pos_data + "',"
								+ "dashboard_title='" + dashName_ + "' , theme ='"+theme_+"'  where id=" + dashid + " ";
					}

					//System.out.println("updatedashposJson Q::::" + updatedashposJson);

					statement.execute(updatedashposJson);
					statement.close();
					msg = 1;

				} else {
					//System.out.println("else:::::");
					String updatedashposJson = "";

					if (dashid == 0) {
						// insert
						updatedashposJson = "INSERT INTO public.dashboards(dashboard_title, position_json, tabscount,projectid,userid ,theme)"
								+ "VALUES ('" + dashName_ + "', '" + final_json_pos_data + "', " + (count + 1) + ","
								+ projectid + "," + userid + ","+theme_+")";
					} else {
						updatedashposJson = " update dashboards set dashboard_title='" + dashName_ + "' ,theme ='"+theme_+"' where id="
								+ dashid + " ";
					}

					//System.out.println("updatedashposJson Q::::" + updatedashposJson);

					statement.execute(updatedashposJson);
					statement.close();
					msg = 1;
				}

			} catch (Exception e) {
				msg = 0; // TODO: handle exception
				System.out.println("error::::" + e.toString());
			}

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return HttpStatus.OK;
	}
	

	@RequestMapping(value = "/getdashboardcharts", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<?> getdashboardcharts(@RequestParam String dashid) {

		return new ResponseEntity<List>(getDashCharts("1"), HttpStatus.OK);
	}
	
	
	String  newsliceid = "";
	public String setDuplicateSlice(int dashid, String containerID,String chartid) {
		PreparedStatement ps = null;
//		System.out.println("chartid   newsliceid  ::::" + chartid);
		String chartid_= chartid.split("-")[0];
		String filequery = " select id, slice_name, datasource_type, datasource_name, viz_type, query_context, containerid,filter_context,"
				+ "chart_theme,properties_context from slices where id ="+chartid_+"";
		
		System.out.println("filequery   filequery  ::::" + filequery);
		
		
		List<ChartEntity> list = new ArrayList<ChartEntity>();
		System.out.println("chartid   newsliceid  ::::" + chartid_);
		//chartid=chartid+"-10";
		int id = 0;
		String slice_name = "";
		String datasource_type = "";
		String datasource_name = "";
		String viz_type = "";
		String query_context = "";
		String containerid = "";
		String filter_context = "";
		String chart_Theme ="";
        int chartid_increment=10;
        String properties_context = "";
		String uuid = containerID;
		// "conea2a4e28";//"con"+UUID.randomUUID().toString().split("-")[0]; //Generates
									// random UUID

		try {
			ps = conpg.prepareStatement(filequery);
			ResultSet rs = ps.executeQuery();

			while (rs.next()) {
				id = rs.getInt(1);
				slice_name = rs.getString(2);
				datasource_type = rs.getString(3);
				datasource_name = rs.getString(4);
				viz_type = rs.getString(5);
				query_context = rs.getString(6);

				containerid = rs.getString(7);
				filter_context = rs.getString(8);
				chart_Theme = rs.getString(9);
				properties_context = rs.getString(10);
				//id=id+'-';

				ChartEntity ls = new ChartEntity();
				ls.setId(id);
				ls.setSlice_name(slice_name);
				ls.setDatasource_type(datasource_type);
				ls.setDatasource_name(datasource_name);
				ls.setViz_type(viz_type);
				ls.setQuery_context(query_context);
				ls.setContainerid(uuid);
				ls.setFilter_context(filter_context);
				ls.setChart_Theme(chart_Theme);
				ls.setProperties(properties_context);
				list.add(ls);
			}

			rs.close();
			ps.close();
			Statement statement = conpg.createStatement();

			// String uuid= "con"+UUID.randomUUID().toString().split("-")[0]; //Generates
			// random UUID

			String updatedatatypeQuery = "INSERT INTO public.slices("
					+ "slice_name, datasource_type, datasource_name, viz_type, query_context,"
					+ "containerid,filter_context,properties_context, chart_theme,dashid ,isoriginal )"
					+ "	VALUES ('" + slice_name + "', '" + datasource_type + "', '" + datasource_name + "', '"
					+ viz_type + "'," + "'" + query_context + "','" + containerID + "','" + filter_context + "', '"+properties_context+"','" + chart_Theme + "', '"+dashid
					+ "',0) returning id ";

			PreparedStatement ps_ = null;
			ps = conpg.prepareStatement(updatedatatypeQuery);
			
			
			if (ps.execute()) {
				ResultSet rsEXEC = ps.getResultSet();
				rsEXEC.next();
				newsliceid = rsEXEC.getString(1);
			} else {
				//newsliceid = ps.getUpdateCount();
			}
			
			
			ps.close();
			//System.out.println("newsliceid  ::::" + newsliceid);
			// statement.execute(updatedatatypeQuery);
			// statement.close();

		} catch (SQLException e) {
			newsliceid = "";
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return newsliceid + "#_#" + uuid;
	}

	public List<ChartEntity> setDuplicateChart(String dashid) {
		PreparedStatement ps = null;

		String filequery = "SELECT id, chartdiv, charttype, columndim, dashboardid, fileid, periodicity,"
				+ " title, titlediv FROM public.charts"; // by chartid="+dashid+"

		List<ChartEntity> list = new ArrayList<ChartEntity>();

		int id = 0;
		String chartdiv = "";
		String charttype = "";
		String columndim = "";
		String dashboardid = "";
		String fileid = "";
		String periodicity = "";
		String title = "";
		String titlediv = "";

		try {
			ps = conpg.prepareStatement(filequery);
			ResultSet rs = ps.executeQuery();

			while (rs.next()) {
				id = rs.getInt(1);
				chartdiv = rs.getString(2);
				charttype = rs.getString(3);
				columndim = rs.getString(4);
				dashboardid = rs.getString(5);
				fileid = rs.getString(6);

				periodicity = rs.getString(7);
				title = rs.getString(8);
				titlediv = rs.getString(9);

				ChartEntity ls = new ChartEntity();
				ls.setId(id);
				ls.setSlice_name(chartdiv);
				ls.setDatasource_type(charttype);
				ls.setDatasource_name(columndim);
				ls.setViz_type(dashboardid);
				ls.setQuery_context(fileid);
				ls.setContainerid(periodicity);
				ls.setFilter_context(titlediv);
				// ls.settitlediv(titlediv);
				list.add(ls);
			}

			rs.close();
			ps.close();
			
			Statement statement = conpg.createStatement();

			// String uuid= "con"+UUID.randomUUID().toString().split("-")[0]; //Generates
			// random UUID

			String updateChartQuery = "INSERT INTO public.charts( chartdiv, charttype, columndim, dashboardid,"
					+ " fileid, periodicity, title, titlediv) " + "VALUES " + "('" + chartdiv + "','" + charttype
					+ "','" + columndim + "','" + dashboardid + "'," + "'" + fileid + "','" + periodicity + "','"
					+ title + "','" + titlediv + "')";

			statement.execute(updateChartQuery);
			statement.close();

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return list;
	}

	public List<ChartEntity> getDashCharts(String dashid) {
		PreparedStatement ps = null;
		String getDashChartsQ = " select id, slice_name, datasource_type, datasource_name, viz_type,"
				+ " query_context, containerid,filter_context,isoriginal from slices where isoriginal =1 order by id  desc limit 100 ";
		List<ChartEntity> list = new ArrayList<ChartEntity>();

		System.out.println("getDashCharts::::::###$$$$ ");

		try {
			ps = conpg.prepareStatement(getDashChartsQ);
			ResultSet rs = ps.executeQuery();
			int id = 0;
			String slice_name;
			String datasource_type;
			String datasource_name;
			String viz_type;
			String query_context;
			String containerid;
			String filter_context;
			int isoriginal;
			while (rs.next()) {
				id = rs.getInt(1);
				slice_name = rs.getString(2);
				datasource_type = rs.getString(3);
				datasource_name = rs.getString(4);
				viz_type = rs.getString(5);
				query_context = rs.getString(6);

				containerid = rs.getString(7);
				filter_context = rs.getString(8);
				isoriginal = rs.getInt(9);

				ChartEntity ls = new ChartEntity();
				ls.setId(id);
				ls.setSlice_name(slice_name);
				ls.setDatasource_type(datasource_type);
				ls.setDatasource_name(datasource_name);
				ls.setViz_type(viz_type);
				ls.setQuery_context(query_context);
				// System.out.println("containerid:::::"+containerid);
				ls.setContainerid(containerid);
				ls.setFilter_context(filter_context);
				ls.setIsoriginal(isoriginal);
				list.add(ls);
			}
			
			rs.close();
			ps.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return list;
	}

	public List<ChartEntity> getDashChartsbyid(int chartid) {
		PreparedStatement ps = null;
		String filequery = " select id, slice_name, datasource_type, datasource_name,"
				+ " viz_type, query_context, containerid,filter_context,isoriginal" + " from slices where id=" + chartid
				+ " ";
		List<ChartEntity> list = new ArrayList<ChartEntity>();

		try {
			ps = conpg.prepareStatement(filequery);
			ResultSet rs = ps.executeQuery();
			int id = 0;
			String slice_name;
			String datasource_type;
			String datasource_name;
			String viz_type;
			String query_context;
			String containerid;
			String filter_context;
			int isoriginal = 0;
			while (rs.next()) {
				id = rs.getInt(1);
				slice_name = rs.getString(2);
				datasource_type = rs.getString(3);
				datasource_name = rs.getString(4);
				viz_type = rs.getString(5);
				query_context = rs.getString(6);

				containerid = rs.getString(7);
				filter_context = rs.getString(8);
				isoriginal = rs.getInt(9);

				ChartEntity ls = new ChartEntity();
				ls.setId(id);
				ls.setSlice_name(slice_name);
				ls.setDatasource_type(datasource_type);
				ls.setDatasource_name(datasource_name);
				ls.setViz_type(viz_type);
				ls.setQuery_context(query_context);
				ls.setContainerid(containerid);
				ls.setFilter_context(filter_context);
				ls.setIsoriginal(isoriginal);
				list.add(ls);
			}
			
			rs.close();
			ps.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return list;
	}

	@RequestMapping(value = "/getchart", method = RequestMethod.POST)
	public ModelAndView getChart_(@RequestParam String chartName, String fieldsprop, String charttype, String filterprop,
			String tabelname ,String properties_) throws SQLException {

		String sqlQuery = "";
		SQLPojo sql = new SQLPojo();
		System.out.println("properties_            "+properties_);

		int binFieldNode=0;
		String binTypeNode="";
		String binSizeNode="";
		String binCountNode="";		
		
//		selectData_Clickhouse_( chartName ,fieldsprop);
		
		String fieldFieldNode = "";
		String aggFieldNode = "";
		int istack = 0;
		String type = "";
		String columnlist = "";
		int isbin = 0;
		String agg="";
//		JsonNode color=null;
		int fromfirst = 0;
		int tofirst = 0;
		String firstcolor = "";
		int fromsecond = 0;
		int tosecond = 0;
		String secondcolor = "";
		int fromthird = 0;
		int tothird = 0;
		String thirdcolor = "";
		int fromTofunction =0;
		int targetvalue =0;
		String Y_Field = "";
		
		String X_field_ ="";
		
		String pie_field ="";

		try {
			JsonFactory jsonFactory = new JsonFactory();
			ObjectMapper objectMapper = new ObjectMapper(jsonFactory);

			JsonNode arrayNode = objectMapper.readTree(fieldsprop);

			JsonNode arrayNodeFilter = objectMapper.readTree(filterprop);
			
//			JsonNode properties = objectMapper.readTree(properties_);
//			
//			if (properties.isArray()) {
//				
//				for (JsonNode jsonNode_properties : properties) {
//					
//					
//					System.out.println("jsonNode_properties         "+jsonNode_properties);
//					highchart_prop.setLegend_position(jsonNode_properties.get("top_bottom").asText());
//					highchart_prop.setLabel_rotation(Integer.parseInt(jsonNode_properties.get("label_rotation").asText()));
//					highchart_prop.setData_labels(jsonNode_properties.get("data_labels").asBoolean());
//					highchart_prop.setZoom_type(jsonNode_properties.get("zoom_type").asText());
//					highchart_prop.setFont_color(jsonNode_properties.get("font_color").asText());
//					highchart_prop.setChart_flip(jsonNode_properties.get("chart_flip").asBoolean());
//					highchart_prop.setValue_conversion(Integer.parseInt(jsonNode_properties.get("value_conversion").asText()));
//					highchart_prop.setData_bar_color(jsonNode_properties.get("data_bar_color").asText());
//					highchart_prop.setTitle_alignment(jsonNode_properties.get("title_alignment").asText());
//				}
//
//			}
			
			
			if (arrayNodeFilter.isArray()) {
				sql.setWhere(arrayNodeFilter, tabelname);
//				System.out.println("setWhere::::::::::" + arrayNodeFilter);

			}
		
			// FOR PIE
			if (arrayNode.isArray()) {

				sql.setTable(tabelname);
				String querycharttype = "";
				String seriesFieldNode = "";
				int count = 0;
				for (JsonNode jsonNode : arrayNode) {
					System.out.println("jsonNode::::::" + jsonNode);
					ObjectMapper nodeMapper = new ObjectMapper();
					JsonNode jNode = nodeMapper.readTree(jsonNode.toString().replace("[", "").replace("]", ""));
					
					JsonNode color = jNode.get("colorfields");
					System.out.println("color::::::" + color);

						 fromfirst =Integer.parseInt(color.get("fromfirst").asText());// color.get("fromfirst").asText();
						 tofirst =Integer.parseInt(color.get("tofirst").asText());// color.get("tofirst").asText();
						 firstcolor = color.get("firstcolor").asText();
						 fromsecond =Integer.parseInt(color.get("fromsecond").asText());// color.get("fromsecond").asText();
						 tosecond =Integer.parseInt(color.get("tosecond").asText());// color.get("tosecond").asText();
						 secondcolor = color.get("secondcolor").asText();
						 fromthird =Integer.parseInt(color.get("fromthird").asText());// color.get("fromthird").asText();
						 
						 try {
							 
							 tothird =Integer.parseInt(color.get("tothird").asText());
						} catch (NumberFormatException e1) {
							System.out.println("NumberFormatException::::::" + e1);
							// TODO: handle exception
						}
						 
//						 tothird =Integer.parseInt(color.get("tothird").asText());// color.get("tothird").asText();
						 thirdcolor = color.get("thirdcolor").asText();
						 fromTofunction = Integer.parseInt(color.get("fromTofunction").asText());
						 targetvalue = Integer.parseInt(color.get("targetvalue").asText());
					
					//System.out.println("fromfirst::::::" + fromfirst);
					//System.out.println("tofirst::::::" + tofirst);
					//System.out.println("firstcolor::::::" + firstcolor);
					//System.out.println("fromsecond::::::" + fromsecond);
					//System.out.println("tosecond::::::" + tosecond);
					//System.out.println("secondcolor::::::" + secondcolor);
					//System.out.println("fromthird::::::" + fromthird);
					//System.out.println("tothird::::::" + tothird);
					//System.out.println("thirdcolor::::::" + thirdcolor);
					
					
					seriesFieldNode = jNode.get("Series").asText();

					fieldFieldNode = jNode.get("Field").asText();
					pie_field = fieldFieldNode;
					
					
					
					aggFieldNode = jNode.get("Agg").asText();
					if(seriesFieldNode.equalsIgnoreCase("Y-Axis"))  
//						|| (seriesFieldNode.equalsIgnoreCase("X1-Axis")))
					{
				    agg += jNode.get("Agg").asText() +",";
				    
				    Y_Field += jNode.get("Field").asText() +",";
				    				    
					}
					
					sql.setX_Field(Y_Field);
                    sql.setAggr(agg);
					int displaytopCheck = Integer.parseInt(jNode.get("displaytopCheck").asText());
					String displaytopvalueNode = jNode.get("displaytopvalue").asText();
					String othersNode = jNode.get("others").asText();

//					//System.out.println("aggFieldNode::::" + aggFieldNode);
//					System.out.println("displaytopvalueNode::::" + displaytopvalueNode);
//					System.out.println("othersNode::::" + othersNode);
					
//if ((charttype.equals("chartcard19")) || (charttype.equals("chartcard15")) ) {
	if(seriesFieldNode.equalsIgnoreCase("X-Axis"))  
//		|| (seriesFieldNode.equalsIgnoreCase("X1-Axis")))
	{
		
		X_field_ = jNode.get("Field").asText();
		
		type = jNode.get("Type").asText();
//		System.out.println("type::::" + type);
		sql.setXdataType(type);
		 binFieldNode = Integer.parseInt(jNode.get("Bin").asText());
//			System.out.println("binFieldNode::::" + binFieldNode);
			sql.setIsBin(binFieldNode);
			 binTypeNode = jNode.get("BinType").asText();
//			System.out.println("binTypeNode::::" + binTypeNode);
			sql.setBinType(binTypeNode);
			 binSizeNode = jNode.get("BinSize").asText();
//			System.out.println("binSizeNode::::" + binSizeNode);
			sql.setBinSize(binSizeNode);//setBinType(binTypeNode);
			 binCountNode = jNode.get("BinCount").asText();
//			System.out.println("binCountNode::::" + binCountNode);
			sql.setBinCount(binCountNode);
	}
			
					String userlimit = jNode.get("userlimit").asText();
					
					userlimit = userlimit.split(" , ")[0];
					
					sql.setUserlimit(Integer.parseInt(userlimit));
			
					if (binFieldNode == 1) {
						isbin++;
					}

					// PIE
					if (charttype.equals("chartcard8")) {
						querycharttype = "pie";
						pieSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode);
					} else if (charttype.equals("chartcard9")) {
						querycharttype = "donut";
						pieSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode);
					} else if (charttype.equals("chartcard1")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "histogram";

						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					} else if (charttype.equals("chartcard2")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "bar";
						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					} else if (charttype.equals("chartcard3")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "stackedbar";
						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
						;
					}

					else if (charttype.equals("chartcard4")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "Area";
						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}
					// LINES
					else if (charttype.equals("chartcard5")) {
						querycharttype = "line";
						lineSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, displaytopvalueNode, othersNode,
								displaytopCheck);
					}
					else if (charttype.equals("chartcard6")) {
						querycharttype = "Gauge";
						singlevalueSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode);
					}

					else if (charttype.equals("chartcard7")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "StackedArea";
						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}

					else if (charttype.equals("chartcard10")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "bar100%";

						stackedSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}

					else if (charttype.equals("chartcard11")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "stacked100%";

						stackedSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}

					else if (charttype.equals("chartcard14")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "scatter";

						scatterSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}

					else if (charttype.equals("chartcard15")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "bubble";

						bubbleSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					} else if (charttype.equals("chartcard16")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 1) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "SingleValue";

						singlevalueSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode);
						sqlQuery = sql.getQuery(querycharttype, tabelname);
					} else if (charttype.equals("chartcard17")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "table";

						tableSQL(sql, seriesFieldNode, fieldFieldNode);
						sqlQuery = sql.getQuery(querycharttype, tabelname);
					}
					else if (charttype.equals("chartcard18")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
//						if (count == 2) {
//							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
//								istack = 0;
//							} else {
//								istack = 1;
//							}
//						}
						querycharttype = "bullet";
//						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
//								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
						
						
						singlevalueSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode);
					}
					else if (charttype.equals("chartcard19")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "heatmap";
						heatmapSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}
					else if (charttype.equals("chartcard20")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "Pyramid";
						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}
					else if (charttype.equals("chartcard21")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "Funnel3D";
						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}
					else if (charttype.equals("chartcard22")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "WordCloud";
						singlevalueSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode);
					}
					else if (charttype.equals("chartcard23")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "clustered";
						scatterSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}
			           

					count++;

				}
//				System.out.println("isbin count ::::::" + isbin);
				if (isbin > 0) {
					isbin = 1;
				}
				
				if(charttype.equals("chartcard8") || charttype.equals("chartcard9"))
				{
					sqlQuery = sql.getQuery(querycharttype, tabelname);

//					System.out.println("columnlist ::::::" + columnlist);
					ModelAndView modelview = new ModelAndView();
					Map<String, String> chartModel = new HashMap<String, String>();
					chartModel = buildChart(sqlQuery, charttype, "container1", istack, pie_field, isbin ,chartName,aggFieldNode,binTypeNode,fromfirst,tofirst,
							firstcolor,fromsecond,tosecond,secondcolor,fromthird,tothird,thirdcolor,fromTofunction ,targetvalue ,X_field_ ,properties_);
					modelview.addObject("model", chartModel);
//					modelview.setViewName("menu/draw_charts");
					modelview.setViewName("draw_charts");
					return modelview;
					
				}
				// System.out.println("seriesFieldNode ::::::" +seriesFieldNode);
				columnlist = sql.getAggColumnlist();
				if (fieldFieldNode != "" && columnlist != "") {
					sqlQuery = sql.getQuery(querycharttype, tabelname);

//					System.out.println("columnlist ::::::" + columnlist);

				}
			}
			System.out.print("final sql::::" + sqlQuery);

		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

//		System.out.println("set istack:::" + istack);
		if (istack > 1) {
			istack = 1;
		}

		

		ModelAndView modelview = new ModelAndView();
		modelview.addObject("charttype", "\"" + charttype + "\"");

		modelview.addObject("tablecontainerid", "");
		if (charttype.equals("chartcard16")) {
			int chartModel_ = 0;
			String conid = "";
			String singlevalue = "singlevalue";
			chartModel_ = getchartdata.buildsingleChart(sqlQuery, "chartcard16", "" ,aggFieldNode);
//			System.out.println("chartModel_:::" + chartModel_);
			modelview.addObject("tablecontainerid", "\"\"");
			modelview.addObject("jsondata", "\"" + chartModel_ + "\"");
			modelview.addObject("type", "\"" + singlevalue + "\"");
			//modelview.addObject("table_name", chartName.toString());
			modelview.addObject("table_name", "\"" + chartName + "\"");
			modelview.addObject("containerid", "\"\"");
			////------------server
//			modelview.setViewName("menu/draw_custom_charts");
			modelview.setViewName("draw_custom_charts");

		} else if (charttype.equals("chartcard17")) {
			String chartModel_1 = "";
			String conid = "";
			String table = "table";
			chartModel_1 = getJsondataClickHouseDataobjectAPI(sqlQuery);
//			System.out.println("chartModel_1:::" + chartModel_1);
			modelview.addObject("tablecontainerid", "\"" + conid + "\"");
			// String tableData = getTableData(chartModel_1);
			modelview.addObject("containerid", "\"\"");
			modelview.addObject("jsondata", chartModel_1.toString());
			modelview.addObject("table_name", "\"" + chartName + "\"");
			modelview.addObject("type", "\"" + table + "\"");
			////------------server
//			modelview.setViewName("menu/draw_custom_charts");
			modelview.setViewName("draw_custom_charts");

		} else {
			if (fieldFieldNode != "" && columnlist != "") {

				Map<String, String> chartModel = new HashMap<String, String>();
				chartModel = buildChart(sqlQuery, charttype, "container1", istack, columnlist, isbin ,chartName,aggFieldNode,binTypeNode,fromfirst,tofirst,
						firstcolor,fromsecond,tosecond,secondcolor,fromthird,tothird,thirdcolor ,fromTofunction ,targetvalue ,X_field_ ,properties_);
				modelview.addObject("model", chartModel);
				////------------server
//				modelview.setViewName("menu/draw_charts");
				modelview.setViewName("draw_charts");

			}
		}
		// System.out.println("modelview:::" + modelview);
		return modelview;

		// return new ModelAndView("chartplace", "model",
		// buildChart(sqlQuery,charttype,"container1",istack,columnlist,isbin));

	}
	
	
	@RequestMapping(value = "/selectbasicfilter", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<?> selectbasicfilter(String field ,String tablename, int numberofrows_Basic) throws JsonMappingException, JsonProcessingException 
	{
		
		List<ChartEntity> arr = new ArrayList<ChartEntity>();
		
			String  BasicFilter = "SELECT DISTINCT" + field + " FROM cafebot."+tablename+" ORDER BY"  +field+ " desc limit "+numberofrows_Basic;							
			String Field_data ="";
			System.out.println("BasicFilter: query:::::::::::::" + BasicFilter);
			try {

				PreparedStatement ps = null;
				ps = con.prepareStatement(BasicFilter);
				
				ResultSet rs = ps.executeQuery();

				while (rs.next()) {
					Field_data = rs.getString(1);
				
					ChartEntity chartlist = new ChartEntity();
					chartlist.setBasicFilterFieldData(Field_data);
					arr.add(chartlist);
				}
				
				rs.close();
				ps.close();
				
//				System.out.println("selectBasicFilter**********************");
				// msg =1;
			} catch (Exception e) {
				System.out.println("slice update error:::" + e.toString());
				// TODO: handle exception
			}
			
		return new ResponseEntity<List>(arr, HttpStatus.OK);
	}
	
	
//	
//	@RequestMapping(value = "/selectbasicfilter", method = RequestMethod.POST)
//	@ResponseBody
//	public ResponseEntity<?> selectbasicfilter(String field ,String tablename, int numberofrows_Basic) throws JsonMappingException, JsonProcessingException 
//	{
//		
//		JsonFactory jsonFactory = new JsonFactory();
//		ObjectMapper objectMapper = new ObjectMapper(jsonFactory);
//
//		JsonNode fieldarrayNode = objectMapper.readTree(field);
//		System.out.println("field  "+field);
//		System.out.println("numberofrows_Basic##  "+numberofrows_Basic);
//		String field_ ="";
//		int numberofrows_Basic_=0;
//		List<ChartEntity> arr = new ArrayList<ChartEntity>();
//		
//		for (JsonNode jsonNode : fieldarrayNode) 
//		{
//			field_ = jsonNode.get("Field_Basic").asText();
//			numberofrows_Basic_ = Integer.parseInt(jsonNode.get("numberofrows_basic").asText());
//			System.out.println("field_  "+field_);
//			System.out.println("numberofrows_Basic_##  "+numberofrows_Basic_);
//
//			
//			String  BasicFilter = "SELECT DISTINCT" + field_ + " FROM cafebot."+tablename+" ORDER BY"  +field_+ " desc limit "+numberofrows_Basic_;
//			
//				
//			String Field_data ="";
//			System.out.println("BasicFilter: query:::::::::::::" + BasicFilter);
//			try {
//
//				PreparedStatement ps = null;
//				ps = con.prepareStatement(BasicFilter);
//				
//				ResultSet rs = ps.executeQuery();
//
//				while (rs.next()) {
//					Field_data = rs.getString(1);
//					
//					//System.out.println("Field_data::::::::::::::" + Field_data);
//					
//					ChartEntity chartlist = new ChartEntity();
//					chartlist.setBasicFilterFieldData(Field_data);
//					arr.add(chartlist);
//				}
//				
//				ps.close();
//				
////				System.out.println("selectBasicFilter**********************");
//				// msg =1;
//			} catch (Exception e) {
//				System.out.println("slice update error:::" + e.toString());
//				// TODO: handle exception
//			}
//			
//			
//			
//			
//		}
//		
//		
//		
//		
//		
//		
//		
//		
//		return new ResponseEntity<List>(arr, HttpStatus.OK);
//	}

	@RequestMapping(value = "/updatechartname", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<?> updatechartname(@RequestParam int chartid, String chartname) {
		String updatedatatypeQuery = "update slices  " + "set " + "slice_name='" + chartname + "'	 where id="
				+ chartid;

		try {

			PreparedStatement ps = null;
			ps = conpg.prepareStatement(updatedatatypeQuery);
			ps.execute();
			ps.close();
			
			
		} catch (Exception e) {
			System.out.println("slice update error:::" + e.toString());
			// TODO: handle exception
		}

		return new ResponseEntity<String>("", HttpStatus.OK);
	}

	String dashboard_title = "";
	List <Integer> chartid___ = new ArrayList<Integer>();
	private ServletRequest servletContext;
	@RequestMapping(value = "/setchart", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<?> setChart(@RequestParam int id, int dashID)
	{
		String dashTabName ="";
//		System.out.println("id11:::::" + id);
		PreparedStatement ps = null;
		String tabid = "";
		List<ChartEntity> list = new ArrayList<ChartEntity>();
		List<ChartEntity> arr = new ArrayList<ChartEntity>();
		int chartId=0;
		String position_json = "";
		// String dashboard_title = "";
		int dashid = 0;

		if (dashID == 0) {
	

			String slicequery = " SELECT id, datasource_name, viz_type, query_context, containerid,"
					+ " filter_context,isoriginal,slice_name,chart_theme ,properties_context  FROM slices where id = " + id;

			int _id = 0;
			String _slice_name;
			String _datasource_name;
			String _viz_type;
			String _query_context;
			String _containerid;
			String _filter_context;
			int isoriginal = 0;
			//String tabid = "";
			String chart_theme;
			String properties_context ="";

			try {
				ps = conpg.prepareStatement(slicequery);
				ResultSet rs = ps.executeQuery();
			
					while (rs.next()) 
					 {
					_id = rs.getInt(1);
					_datasource_name = rs.getString(2);
					_viz_type = rs.getString(3);
					_query_context = rs.getString(4);
					_containerid = rs.getString(5);
					_filter_context = rs.getString(6);
					isoriginal = rs.getInt(7);
					_slice_name = rs.getString(8);
					chart_theme =rs.getString(9);
					properties_context = rs.getString(10);

					
					
					
					ChartEntity chartlist = new ChartEntity();
					chartlist.setId(_id);
					chartlist.setDatasource_name(_datasource_name);
					chartlist.setViz_type(_viz_type);
					chartlist.setQuery_context(_query_context);
					chartlist.setContainerid(_containerid);
					chartlist.setFilter_context(_filter_context);
					chartlist.setIsoriginal(isoriginal);
					chartlist.setSlice_name(_slice_name);
					chartlist.setChart_Theme(chart_theme);
					chartlist.setProperties(properties_context);
					if (_id == id)
					{
					    arr.add(chartlist);

					}
//					System.out.println("arr::::::" + arr);
					chartid___.add(id) ;
				}
					
					rs.close();
					ps.close();
			
			} catch (SQLException e)

			{
				System.out.println("error :::::" + e.toString());
				e.printStackTrace();
			}
						

			
//			System.out.println("chartid___  r::::" +chartid___);
		

		} 
		else 
		{
		
			String dashquery = " select id, position_json, tabscount,dashboard_title from dashboards where id = "
					+ dashID;

//			System.out.println("dashquery:::::" + dashquery);

			try {
				ps = conpg.prepareStatement(dashquery);
				ResultSet rs = ps.executeQuery();

				while (rs.next()) {
					dashid = rs.getInt(1);
					position_json = rs.getString(2);
					dashboard_title = rs.getString(4);
					// tabscount=rs.getInt(3);
				}
				rs.close();
				ps.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			try {

				JsonFactory jsonFactory = new JsonFactory();
				ObjectMapper objectMapper = new ObjectMapper(jsonFactory);

				JsonNode arrayNode = objectMapper.readTree(position_json);

				if (arrayNode.isArray()) {

					for (JsonNode jsonNode : arrayNode) {

						tabid = jsonNode.get("tabid").asText();
						String tabname = jsonNode.get("tabname").asText();
						// chart level
						JsonNode arrayNode1 = jsonNode.get("childs");
//						System.out.println("arrayNode1 " +arrayNode1);
						
						for (JsonNode jsonNode1 : arrayNode1)
						{
							
							 chartId = Integer.parseInt(jsonNode1.get("chartid").asText());
//							 if ( chartid___.contains(chartId))
//							 {}
//							 else {
//							System.out.println("setchart call chartId:::" + chartId);

								dashTabName =	jsonNode.get("tabname").asText();
							

//			System.out.println("dashboard_title setchart call chartId:::" + dashboard_title);
			//int chartId = id;

//			System.out.println("setchart call chartId:::" + chartId);

			String slicequery = " SELECT id, datasource_name, viz_type, query_context, containerid,"
					+ " filter_context,isoriginal,slice_name,chart_theme ,properties_context FROM slices where id = " + chartId;

//			System.out.println("slicequery::::::" + slicequery);
			
			

			int _id = 0;
			String _slice_name;
			String _datasource_name;
			String _viz_type;
			String _query_context;
			String _containerid;
			String _filter_context;
			int isoriginal = 0;
			//String tabid = "";
			String chart_theme;
			String properties_context ="";

			try {
				ps = conpg.prepareStatement(slicequery);
				ResultSet rs = ps.executeQuery();
				//if ( chartid___.contains(chartId))
				// {
					
				// }
				 //else 
				 
				
					while (rs.next()) 
					 {
					_id = rs.getInt(1);
					_datasource_name = rs.getString(2);
					_viz_type = rs.getString(3);
					_query_context = rs.getString(4);
					_containerid = rs.getString(5);
					_filter_context = rs.getString(6);
					isoriginal = rs.getInt(7);
					_slice_name = rs.getString(8);
					chart_theme =rs.getString(9);
					properties_context = rs.getString(10);
					
					ChartEntity chartlist = new ChartEntity();
					chartlist.setId(_id);
					chartlist.setDatasource_name(_datasource_name);
					chartlist.setViz_type(_viz_type);
					chartlist.setQuery_context(_query_context);
					chartlist.setContainerid(_containerid);
					chartlist.setFilter_context(_filter_context);
					chartlist.setIsoriginal(isoriginal);
					chartlist.setSlice_name(_slice_name);
					chartlist.setDatasource_type(tabid);
					chartlist.setDashboard_title(dashboard_title);
					chartlist.setDashTabName(dashTabName);
					chartlist.setChart_Theme(chart_theme);
					chartlist.setProperties(properties_context);
					if (_id == chartId)
					{
					    arr.add(chartlist);
//						if (!chartid___.contains(chartId))
//						{
//							arr.add(chartlist);
//						}
						

					}
//					System.out.println("arr::::::" + arr);
					chartid___.add(chartId) ;
				}
			
					rs.close();
					ps.close();
			} catch (SQLException e)

			{
				System.out.println("error :::::" + e.toString());
				e.printStackTrace();
			}
						
							  
					}
						
					}
				}
			}catch (Exception e) {
					System.out.println("get chart error::::" + e.toString());
					// TODO: handle exception
				}
			
//			System.out.println("chartid___  r::::" +chartid___);
		
		}
	
		return new ResponseEntity<List>(arr, HttpStatus.OK);

	}


	@RequestMapping(value = "/setchartDash", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<?> setchartDash(@RequestParam int id, int dashID) 
	{

//		System.out.println("dashID:setchartDash::::" + dashID);
		PreparedStatement ps = null;

		List<ChartEntity> list = new ArrayList<ChartEntity>();
		List<ChartEntity> arr = new ArrayList<ChartEntity>();

		String slicequery = " SELECT id, datasource_name, viz_type, query_context, containerid,"
				+ " filter_context,isoriginal,slice_name FROM slices where id = " + id;

//		System.out.println("slicequery::::::" + slicequery);

		int _id = 0;
		String _slice_name;
		String _datasource_name;
		String _viz_type;
		String _query_context;
		String _containerid;
		String _filter_context;
		int isoriginal = 0;

		try {
			ps = conpg.prepareStatement(slicequery);
			ResultSet rs = ps.executeQuery();

			while (rs.next()) {
				_id = rs.getInt(1);
				_datasource_name = rs.getString(2);
				_viz_type = rs.getString(3);
				_query_context = rs.getString(4);
				_containerid = rs.getString(5);
				_filter_context = rs.getString(6);
				isoriginal = rs.getInt(7);
				_slice_name = rs.getString(8);

				ChartEntity chartlist = new ChartEntity();
				chartlist.setId(_id);
				chartlist.setDatasource_name(_datasource_name);
				chartlist.setViz_type(_viz_type);
				chartlist.setQuery_context(_query_context);
				chartlist.setContainerid(_containerid);
				chartlist.setFilter_context(_filter_context);
				chartlist.setIsoriginal(isoriginal);
				chartlist.setSlice_name(_slice_name);

				if (id == _id) {
					arr.add(chartlist);
				}

			}
			rs.close();
			ps.close();
		} catch (SQLException e) {
			System.out.println("error :::::" + e.toString());
			e.printStackTrace();
		}

//		System.out.println("arr:setchartDashbyid:::::" + arr);

		return new ResponseEntity<List>(arr, HttpStatus.OK);
	}
	
	
	@RequestMapping(value = "/setchartDashbyidedit", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<?> setchartDashbyidedit(@RequestParam int id, int dashID, String varDimFilter1) {

//		System.out.println("id11:setchartDashbyid::::" + id);
//		System.out.println("dashID:setchartDashbyid::::" + dashID);
//		System.out.println("varDimFilter:setchartDashbyid::::" + varDimFilter1);

		PreparedStatement ps = null;

		//List<ChartEntity> list = new ArrayList<ChartEntity>();
		List<ChartEntity> arr = new ArrayList<ChartEntity>();

		String slicequery = " SELECT id, datasource_name, viz_type, query_context, containerid,"
				+ " filter_context,isoriginal,slice_name FROM slices where id = " + id;

//		System.out.println("slicequery::::::" + slicequery);

		int _id = 0;
		String _slice_name;
		String _datasource_name;
		String _viz_type;
		String _query_context;
		String _containerid;
		String _filter_context;
		int isoriginal = 0;
		ChartEntity chartlist = new ChartEntity();
		try {
			ps = conpg.prepareStatement(slicequery);
			ResultSet rs = ps.executeQuery();

			while (rs.next()) {
				_id = rs.getInt(1);
				_datasource_name = rs.getString(2);
				_viz_type = rs.getString(3);
				_query_context = rs.getString(4);
				_containerid = rs.getString(5);
				isoriginal = rs.getInt(7);
				_slice_name = rs.getString(8);

				chartlist.setId(_id);
				chartlist.setDatasource_name(_datasource_name);
				chartlist.setViz_type(_viz_type);
				chartlist.setQuery_context(_query_context);
				chartlist.setContainerid(_containerid);

				chartlist.setIsoriginal(isoriginal);
				chartlist.setSlice_name(_slice_name);
			}

			// _filter_context = varDimFilter;
			chartlist.setFilter_context(varDimFilter1);
			if (id == _id) {
				arr.add(chartlist);
			}

			rs.close();
			ps.close();
			
		} catch (SQLException e) {
			System.out.println("error :::::" + e.toString());
			e.printStackTrace();
		}


//		System.out.println("arr:setchartDashbyidedit:::::" + arr);

		return new ResponseEntity<List>(arr, HttpStatus.OK);
	}

	@RequestMapping(value = "/setchartDashbyid", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<?> setchartDashbyid(@RequestParam int id, int dashID) {

//		System.out.println("id11:setchartDashbyid::::" + id);
//		System.out.println("dashID:setchartDashbyid::::" + dashID);
		PreparedStatement ps = null;

		List<ChartEntity> list = new ArrayList<ChartEntity>();
		List<ChartEntity> arr = new ArrayList<ChartEntity>();

		String slicequery = " SELECT id, datasource_name, viz_type, query_context, containerid,"
				+ " filter_context,isoriginal,slice_name FROM slices where id = " + id;

//		System.out.println("slicequery::::::" + slicequery);

		int _id = 0;
		String _slice_name;
		String _datasource_name;
		String _viz_type;
		String _query_context;
		String _containerid;
		String _filter_context;
		int isoriginal = 0;

		try {
			ps = conpg.prepareStatement(slicequery);
			ResultSet rs = ps.executeQuery();

			while (rs.next()) {
				_id = rs.getInt(1);
				_datasource_name = rs.getString(2);
				_viz_type = rs.getString(3);
				_query_context = rs.getString(4);
				_containerid = rs.getString(5);
				_filter_context = rs.getString(6);
				isoriginal = rs.getInt(7);
				_slice_name = rs.getString(8);

				ChartEntity chartlist = new ChartEntity();
				chartlist.setId(_id);
				chartlist.setDatasource_name(_datasource_name);
				chartlist.setViz_type(_viz_type);
				chartlist.setQuery_context(_query_context);
				chartlist.setContainerid(_containerid);
				chartlist.setFilter_context(_filter_context);
				chartlist.setIsoriginal(isoriginal);
				chartlist.setSlice_name(_slice_name);

				if (id == _id) {
					arr.add(chartlist);
				}
				
			}
			rs.close();
			ps.close();
		} catch (SQLException e) {
			System.out.println("error :::::" + e.toString());
			e.printStackTrace();
		}


//		System.out.println("arr:setchartDashbyid:::::" + arr);

		return new ResponseEntity<List>(arr, HttpStatus.OK);
	}

	@RequestMapping(value = "/getchartDash", method = RequestMethod.POST)
	public ModelAndView getChartDash(@RequestParam String chartName, String fieldsprop, String charttype, String table,
			String containerID, String filterprop, int chartid ,String top_bottom ,String properties_) throws SQLException {

		SQLPojo sql = new SQLPojo();
		String sqlQuery = "";
		String columnlist = "";
		String fieldFieldNode = "";
		String filter_context = "";
		String properties_context ="";
		System.out.println( "properties_       "+properties_);
		int isbin = 0;
		int istack = 0;
		String aggFieldNode ="";
		PreparedStatement ps = null;
		String tableconidquery = "select containerid ,viz_type ,dashid,filter_context , properties_context from slices where id =" + chartid;
		String containerid = "";
		String viz_type = "";
		int dashid = 0;
		int binFieldNode = 0;
		String binTypeNode = "";
		String binSizeNode = "";
		String binCountNode = "";
		String type = "";
		String agg ="";
		
		int fromfirst = 0;
		int tofirst = 0;
		String firstcolor = "";
		int fromsecond = 0;
		int tosecond = 0;
		String secondcolor = "";
		int fromthird = 0;
		int tothird = 0;
		String thirdcolor = "";
		int fromTofunction = 0;
		int targetvalue = 0;
		
		String Y_Field = "";
		
		String X_field_ = "";
		
		String pie_field ="";

		
		

		try {
			ps = conpg.prepareStatement(tableconidquery);
			ResultSet rs1 = ps.executeQuery();

			while (rs1.next()) {
				containerid = rs1.getString(1);
				viz_type = rs1.getString(2);
				dashid = rs1.getInt(3);
				filter_context = rs1.getString(4);
				properties_context = rs1.getString(5);
			}
			
			rs1.close();
			ps.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println( "properties_context       "+properties_context);
		try {
			JsonFactory jsonFactory = new JsonFactory();
			ObjectMapper objectMapper = new ObjectMapper(jsonFactory);

			JsonNode arrayNode = objectMapper.readTree(fieldsprop);
			filterprop = filterprop.replace("\\\\", "");
			JsonNode arrayNodeFilter = objectMapper.readTree(filterprop);

			if (arrayNodeFilter.isArray()) {
				sql.setWhere(arrayNodeFilter, table);

			}

			String querycharttype = "";

			// FOR PIE
			if (arrayNode.isArray()) {

				sql.setTable(table + " ");
				int count = 0;
				for (JsonNode jsonNode : arrayNode) {
					// System.out.println("arrayNode"+arrayNode);
					ObjectMapper nodeMapper = new ObjectMapper();
					JsonNode jNode = nodeMapper.readTree(jsonNode.toString().replace("[", "").replace("]", ""));
					JsonNode color = jNode.get("colorfields");
					
//                    JsonNode colorNode = objectMapper.readTree(color);
                    System.out.println("color::::::" + color);
//					for (JsonNode colorNodein : color) {
						
						 fromfirst =Integer.parseInt(color.get("fromfirst").asText());// color.get("fromfirst").asText();
						 tofirst =Integer.parseInt(color.get("tofirst").asText());// color.get("tofirst").asText();
						 firstcolor = color.get("firstcolor").asText();
						 fromsecond =Integer.parseInt(color.get("fromsecond").asText());// color.get("fromsecond").asText();
						 tosecond =Integer.parseInt(color.get("tosecond").asText());// color.get("tosecond").asText();
						 secondcolor = color.get("secondcolor").asText();
						 fromthird =Integer.parseInt(color.get("fromthird").asText());// color.get("fromthird").asText();
						 tothird =Integer.parseInt(color.get("tothird").asText());// color.get("tothird").asText();
						 thirdcolor = color.get("thirdcolor").asText();
						 fromTofunction = Integer.parseInt(color.get("fromTofunction").asText());
						 targetvalue = Integer.parseInt(color.get("targetvalue").asText());

					String seriesFieldNode = jNode.get("Series").asText();

					fieldFieldNode = jNode.get("Field").asText();
					
					pie_field = fieldFieldNode;
					
					aggFieldNode = jNode.get("Agg").asText();
					
					if(seriesFieldNode.equalsIgnoreCase("Y-Axis"))  
//						|| (seriesFieldNode.equalsIgnoreCase("X1-Axis")))
					{
				    agg += jNode.get("Agg").asText() +",";
				    Y_Field += jNode.get("Field").asText() +",";
				    
					}
					
					sql.setX_Field(Y_Field);//Aggr(X_Field);
                    sql.setAggr(agg);
					int displaytopCheck = Integer.parseInt(jNode.get("displaytopCheck").asText());
					String displaytopvalueNode = jNode.get("displaytopvalue").asText();
					String othersNode = jNode.get("others").asText();
					
					String userlimit = jNode.get("userlimit").asText();
					
					userlimit = userlimit.split(" , ")[0];
					
					sql.setUserlimit(Integer.parseInt(userlimit));
					
					if(seriesFieldNode.equalsIgnoreCase("X-Axis")) 
					{
						
						X_field_ =  jNode.get("Field").asText();
						
						type = jNode.get("Type").asText();
						//System.out.println("type::::" + type);
						sql.setXdataType(type);
						 binFieldNode = Integer.parseInt(jNode.get("Bin").asText());
							//System.out.println("binFieldNode::::" + binFieldNode);
							sql.setIsBin(binFieldNode);
							 binTypeNode = jNode.get("BinType").asText();
							//System.out.println("binTypeNode::::" + binTypeNode);
							sql.setBinType(binTypeNode);
							 binSizeNode = jNode.get("BinSize").asText();
							//System.out.println("binSizeNode::::" + binSizeNode);
							sql.setBinSize(binSizeNode);//setBinType(binTypeNode);
							 binCountNode = jNode.get("BinCount").asText();
							//System.out.println("binCountNode::::" + binCountNode);
							sql.setBinCount(binCountNode);
					}
					
					if (binFieldNode == 1) {
						isbin=1;
					}

					// PIE

					if (charttype.equals("chartcard8")) {
						querycharttype = "pie";
						pieSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode);
					} else if (charttype.equals("chartcard9")) {
						querycharttype = "donut";
						pieSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode);
					} else if (charttype.equals("chartcard1")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "histogram";

						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					} else if (charttype.equals("chartcard2")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "bar";
						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					} else if (charttype.equals("chartcard3")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "stackedbar";
						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
						
					}

					else if (charttype.equals("chartcard4")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "Area";
						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}
					// LINES
					else if (charttype.equals("chartcard5")) {
						querycharttype = "line";
						lineSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, displaytopvalueNode, othersNode,
								displaytopCheck);
					}
					else if (charttype.equals("chartcard6")) {
						querycharttype = "Gauge";
						singlevalueSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode);
					}
					else if (charttype.equals("chartcard7")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "StackedArea";
						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}

					else if (charttype.equals("chartcard10")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "bar100%";

						stackedSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}

					else if (charttype.equals("chartcard11")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "stacked100%";

						stackedSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}

					else if (charttype.equals("chartcard14")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "scatter";

						scatterSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}
					else if (charttype.equals("chartcard15")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "bubble";

						bubbleSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}
					 else if (charttype.equals("chartcard16")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 1) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "SingleValue";

						singlevalueSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode);
						sqlQuery = sql.getQuery(querycharttype, table);
					} else if (charttype.equals("chartcard17")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "table";

						tableSQL(sql, seriesFieldNode, fieldFieldNode);
						sqlQuery = sql.getQuery(querycharttype, table);
					}
//					else if (charttype.equals("chartcard18")) {
//						// table
////						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
//						if (count == 2) {
//							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
//								istack = 0;
//							} else {
//								istack = 1;
//							}
//						}
//						querycharttype = "bullet";
//						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
//								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
//					}
					else if (charttype.equals("chartcard18")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
//						if (count == 2) {
//							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
//								istack = 0;
//							} else {
//								istack = 1;
//							}
//						}
						querycharttype = "bullet";
//						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
//								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
						
						
						singlevalueSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode);
					}
					else if (charttype.equals("chartcard19")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "heatmap";
						heatmapSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}				
					else if (charttype.equals("chartcard20")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "Pyramid";
						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}
					else if (charttype.equals("chartcard21")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "Funnel3D";
						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}
					else if (charttype.equals("chartcard22")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "WordCloud";
						singlevalueSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode);
					}
					else if (charttype.equals("chartcard23")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "clustered";
						scatterSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}
					
				}

			}
			sqlQuery = sql.getQuery(querycharttype, table);
			
			if ((charttype.equals("chartcard8")) || (charttype.equals("chartcard9"))) {
				System.out.print("pie_field ::::::" + pie_field);
				columnlist =pie_field ;
			}
			else
			{
				columnlist = sql.getAggColumnlist();
			}
			
			
			
			System.out.print("columnlist########## ::::::" + columnlist);
			
			System.out.print("sqlQuery ::::::" + sqlQuery);

		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		ModelAndView modelview = new ModelAndView();
		
		if (charttype.equals("chartcard16")) {
			int chartModel_ = 0;
//			System.out.println("containerID:::chartcard16  " + containerID);
//          containerID ="";
			String singlevalue = "singlevalue";
			chartModel_ = getchartdata.buildsingleChart(sqlQuery, "chartcard16", "" , aggFieldNode);
//			System.out.println("chartModel_:::" + chartModel_);
			modelview.addObject("containerid", "\"" + containerID + "\"");
			modelview.addObject("jsondata", "\"" + chartModel_ + "\"");
			modelview.addObject("type", "\"" + singlevalue + "\"");
			modelview.addObject("table_name", "\"" + chartName + "\"");
			//containerID ="";
			modelview.addObject("tablecontainerid", "\"\"");
			

			// modelview.addObject("model", chartModel_);
			modelview.setViewName("draw_custom_charts");
		} 
		else if (charttype.equals("chartcard17"))
		{
			String chartModel_1 = "";
			String table1 = "table";
			chartModel_1 = getJsondataClickHouseDataobjectAPI(sqlQuery);
//			System.out.println("chartModel_1:::" + chartModel_1);
			// tableData = getTableData(chartModel_1 , containerid);
//			System.out.println("containerID:::chartcard17  " + containerID);
			modelview.addObject("jsondata", chartModel_1.toString());
			modelview.addObject("type", "\"" + table1 + "\"");
			modelview.addObject("table_name", "\"" + chartName + "\"");
			modelview.addObject("tablecontainerid", "\"" + containerID + "\"");
			modelview.addObject("containerid", "\"\"");
			modelview.setViewName("draw_custom_charts");

		} else {

			Map<String, String> chartModel = new HashMap<String, String>();
//			System.out.println("isbin:   buildddddddddddddddddd::" + isbin);
			chartModel = buildChart(sqlQuery, charttype, containerID, istack, columnlist, isbin ,chartName ,aggFieldNode,binTypeNode,fromfirst,tofirst,
					firstcolor,fromsecond,tosecond,secondcolor,fromthird,tothird,thirdcolor,fromTofunction,targetvalue ,X_field_,properties_context );
			modelview.addObject("model", chartModel);
			modelview.setViewName("draw_charts");
		}
		return modelview;

	}

	@RequestMapping(value = "/getchartDashbyid", method = RequestMethod.POST)
	public ModelAndView getchartDashbyid(@RequestParam String chartName, String fieldsprop, String charttype,
			String table, String _containerID, String filterprop, String chartid ,String top_bottom ,String properties_) throws SQLException {

		SQLPojo sql = new SQLPojo();
		String sqlQuery = "";
		String newsliceid = "";
		String containerid_new = "";
		String columnlist = "";
		int isbin = 0;
		int istack = 0;
		int count = 0;
		String fieldFieldNode = "";
		String aggFieldNode="";
		PreparedStatement ps = null;
		chartid=chartid.split("-")[0];
		System.out.println("chartid getchartDashbyid:::======" + chartid);
//		String color="";
		int fromfirst = 0;
		int tofirst = 0;
		String firstcolor = "";
		int fromsecond = 0;
		int tosecond = 0;
		String secondcolor = "";
		int fromthird = 0;
		int tothird = 0;
		String thirdcolor = "";
		

		String tableconidquery = " select viz_type, id, slice_name, datasource_type, datasource_name,  query_context, containerid,filter_context ,properties_context from slices where id ="+chartid+"";
		//"select containerid ,viz_type ,dashid,filter_context from slices where id =" + chartid;
		String viz_type1 = "";
		int id_=0;
		String slice_name="";
		String datasource_type="";
		String datasource_name="";
		String query_context="";
		String containerid="";
		String filter_context="";
		String properties_context ="";
		
		
		int binFieldNode = 0;

		String binTypeNode = "";

		String binSizeNode = "";

		String binCountNode = "";
		String type = "";
	    String agg ="";
	    int fromTofunction = 0;
	    int targetvalue = 0;
	    
	    String Y_Field = ""; 
	    
	     String X_field_ = "";
	     
	     String pie_field ="";

			
	     
		
		try {
			ps = conpg.prepareStatement(tableconidquery);
			ResultSet rs1 = ps.executeQuery();

			while (rs1.next()) {
				viz_type1 = rs1.getString(1);
				id_ = rs1.getInt(2);
				slice_name = rs1.getString(3);
				datasource_type = rs1.getString(4);
				datasource_name = rs1.getString(5);
				query_context = rs1.getString(6);
				containerid = rs1.getString(7);
				filter_context = rs1.getString(8);
				properties_context = rs1.getString(9);
			}
			rs1.close();
			ps.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
//		System.out.println("viz_type --" + viz_type1);
//		System.out.println("containerid --" + containerid);

		try {
			JsonFactory jsonFactory = new JsonFactory();
			ObjectMapper objectMapper = new ObjectMapper(jsonFactory);

			JsonNode arrayNode = objectMapper.readTree(query_context);

			JsonNode arrayNodeFilter = objectMapper.readTree(filter_context);
			JsonNode arrayNodeFilter1 = objectMapper.readTree(filterprop);
		
			if (arrayNodeFilter1.isArray()) 
			{
				sql.setWhere(arrayNodeFilter1, table);
			}
			else if (arrayNodeFilter.isArray()) 
			{
				sql.setWhere(arrayNodeFilter, table);
			}

			System.out.println("arrayNode  " + arrayNode);

			String querycharttype = "";

			if (arrayNode.isArray()) {

				sql.setTable(table + " ");

				for (JsonNode jsonNode : arrayNode) {

					ObjectMapper nodeMapper = new ObjectMapper();

					JsonNode jNode = nodeMapper.readTree(jsonNode.toString().replace("[", "").replace("]", ""));

					
					JsonNode color = jNode.get("colorfields");
					
//                    JsonNode colorNode = objectMapper.readTree(color);
                    System.out.println("color::::::" + color);
//					for (JsonNode colorNodein : color) {
						
						fromfirst =Integer.parseInt(color.get("fromfirst").asText());// color.get("fromfirst").asText();
						 tofirst =Integer.parseInt(color.get("tofirst").asText());// color.get("tofirst").asText();
						 firstcolor = color.get("firstcolor").asText();
						 fromsecond =Integer.parseInt(color.get("fromsecond").asText());// color.get("fromsecond").asText();
						 tosecond =Integer.parseInt(color.get("tosecond").asText());// color.get("tosecond").asText();
						 secondcolor = color.get("secondcolor").asText();
						 fromthird =Integer.parseInt(color.get("fromthird").asText());// color.get("fromthird").asText();
						 tothird =Integer.parseInt(color.get("tothird").asText());// color.get("tothird").asText();
						 thirdcolor = color.get("thirdcolor").asText();
						 fromTofunction = Integer.parseInt(color.get("fromTofunction").asText());
						 targetvalue = Integer.parseInt(color.get("targetvalue").asText());

					System.out.print(jsonNode.toString() + "\n charttype " + charttype);

					String seriesFieldNode = jNode.get("Series").asText();
					
//					System.out.println("seriesFieldNode::::::  " + seriesFieldNode);

					fieldFieldNode = jNode.get("Field").asText();

					pie_field = fieldFieldNode;
					
					 aggFieldNode = jNode.get("Agg").asText();
					 if(seriesFieldNode.equalsIgnoreCase("Y-Axis"))  
//							|| (seriesFieldNode.equalsIgnoreCase("X1-Axis")))
						{
					    agg += jNode.get("Agg").asText() +",";
					    Y_Field += jNode.get("Field").asText() +",";
					    
						}
						
						sql.setX_Field(Y_Field);//Aggr(X_Field);
					 
	                    sql.setAggr(agg);
					int displaytopCheck = Integer.parseInt(jNode.get("displaytopCheck").asText());

					String displaytopvalueNode = jNode.get("displaytopvalue").asText();

					String othersNode = jNode.get("others").asText();

					

					String userlimit = jNode.get("userlimit").asText();
					
					userlimit = userlimit.split(" , ")[0];
					
					sql.setUserlimit(Integer.parseInt(userlimit));
					
					if(seriesFieldNode.equalsIgnoreCase("X-Axis"))  
					{
						
						X_field_ = jNode.get("Field").asText();
						type = jNode.get("Type").asText();
						//System.out.println("type::::" + type);
						sql.setXdataType(type);
						
						 binFieldNode = Integer.parseInt(jNode.get("Bin").asText());
							//System.out.println("binFieldNode::::" + binFieldNode);
							sql.setIsBin(binFieldNode);
							 binTypeNode = jNode.get("BinType").asText();
							//System.out.println("binTypeNode::::" + binTypeNode);
							sql.setBinType(binTypeNode);
							 binSizeNode = jNode.get("BinSize").asText();
							//System.out.println("binSizeNode::::" + binSizeNode);
							sql.setBinSize(binSizeNode);//setBinType(binTypeNode);
							 binCountNode = jNode.get("BinCount").asText();
							//System.out.println("binCountNode::::" + binCountNode);
							sql.setBinCount(binCountNode);
					}				

					if (binFieldNode == 1) {
						isbin =1;
					}
					
					// PIE

					if (charttype.equals("chartcard8")) {
						querycharttype = "pie";
						pieSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode);
					} else if (charttype.equals("chartcard9")) {
						querycharttype = "donut";
						pieSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode);
					} else if (charttype.equals("chartcard1")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "histogram";

						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					} else if (charttype.equals("chartcard2")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "bar";
						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					} else if (charttype.equals("chartcard3")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "stackedbar";
						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
						;
					} else if (charttype.equals("chartcard4")) {
						// bar chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "Area";
						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}
					// LINES
					else if (charttype.equals("chartcard5")) {
						querycharttype = "line";
						lineSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, displaytopvalueNode, othersNode,
								displaytopCheck);
					}
					else if (charttype.equals("chartcard6")) {
						querycharttype = "Gauge";
						singlevalueSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode);
					}
					else if (charttype.equals("chartcard7")) {
						// StackedArea chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "StackedArea";
						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}

					else if (charttype.equals("chartcard10")) {
						// bar100 chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "bar100%";

						stackedSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}

					else if (charttype.equals("chartcard11")) {
						// stacked100 chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "stacked100%";

						stackedSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}

					else if (charttype.equals("chartcard14")) {
						// scatter chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "scatter";

						scatterSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}

					else if (charttype.equals("chartcard15")) {
						// bubble chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "bubble";

						bubbleSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					} else if (charttype.equals("chartcard16")) {
						// SingleValue chart
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 1) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "SingleValue";

						singlevalueSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode);
						sqlQuery = sql.getQuery(querycharttype, table);
					} else if (charttype.equals("chartcard17")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
//						System.out.println("seriesFieldNode::::::::::::::::" + seriesFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "table";

						tableSQL(sql, seriesFieldNode, fieldFieldNode);
						sqlQuery = sql.getQuery(querycharttype, table);
					}
//					else if (charttype.equals("chartcard18")) {
//						// table
////						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
//						if (count == 2) {
//							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
//								istack = 0;
//							} else {
//								istack = 1;
//							}
//						}
//						querycharttype = "bullet";
//						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
//								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
//					}
					else if (charttype.equals("chartcard18")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
//						if (count == 2) {
//							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
//								istack = 0;
//							} else {
//								istack = 1;
//							}
//						}
						querycharttype = "bullet";
//						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
//								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
						
						
						singlevalueSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode);
					}
					else if (charttype.equals("chartcard19")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "heatmap";
						heatmapSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}
					else if (charttype.equals("chartcard20")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "Pyramid";
						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}
					else if (charttype.equals("chartcard21")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "Funnel3D";
						barSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}
					else if (charttype.equals("chartcard22")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "WordCloud";
						singlevalueSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode);
					}
					else if (charttype.equals("chartcard23")) {
						// table
//						System.out.println("fieldFieldNode::::::::::::::::" + fieldFieldNode);
						if (count == 2) {
							if (fieldFieldNode.equalsIgnoreCase("") || fieldFieldNode.equalsIgnoreCase("[]")) {
								istack = 0;
							} else {
								istack = 1;
							}
						}
						querycharttype = "clustered";
						scatterSQL(sql, seriesFieldNode, fieldFieldNode, aggFieldNode, binFieldNode, binTypeNode,
								binSizeNode, binCountNode, displaytopvalueNode, othersNode, displaytopCheck);
					}
					

				}

			}
			sqlQuery = sql.getQuery(querycharttype, table);
			// sqlQuery = sql.getQuery("pie", table);
			
			if ((charttype.equals("chartcard8")) || (charttype.equals("chartcard9"))) {
				System.out.print("pie_field ::::::" + pie_field);
				columnlist = pie_field;
			}
			else
			{
				columnlist = sql.getAggColumnlist();
			}
//			columnlist = sql.getAggColumnlist();
			System.out.print("sqlQuery_getchartDashbyid::::::" + sqlQuery);

			System.out.print("columnlist @@@@@@@@@@@@ ::::::" + columnlist);
			
			
		} catch (JsonParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		ModelAndView modelview = new ModelAndView();

		if (charttype.equals("chartcard16")) {
			int chartModel_ = 0;
//			System.out.println("containerID:::chartcard16  " + _containerID);
			//containerID ="";
			String singlevalue = "singlevalue";
			chartModel_ = getchartdata.buildsingleChart(sqlQuery, "chartcard16", "" , aggFieldNode);
//			System.out.println("chartModel_:::" + chartModel_);
			modelview.addObject("containerid", "\"" + _containerID + "\"");
			modelview.addObject("jsondata", "\"" + chartModel_ + "\"");
			modelview.addObject("type", "\"" + singlevalue + "\"");
			modelview.addObject("table_name", "\"" + chartName + "\"");
			//containerID ="";
			modelview.addObject("tablecontainerid", "\"\"");
			

			// modelview.addObject("model", chartModel_);
			modelview.setViewName("draw_custom_charts");
		} else if (charttype.equals("chartcard17")) {
			String chartModel_1 = "";
			String table1 = "table";
			chartModel_1 = getJsondataClickHouseDataobjectAPI(sqlQuery);
//			System.out.println("chartModel_1:::" + chartModel_1);
			// tableData = getTableData(chartModel_1 , containerid);
//			System.out.println("containerID:::chartcard17  " + _containerID);
			modelview.addObject("jsondata", chartModel_1.toString());
			modelview.addObject("type", "\"" + table1 + "\"");
			modelview.addObject("table_name", "\"" + chartName + "\"");
			modelview.addObject("tablecontainerid", "\"" + _containerID + "\"");
			modelview.addObject("containerid", "\"\"");
			modelview.setViewName("draw_custom_charts");

		} 
		else 
		{

			Map<String, String> chartModel = new HashMap<String, String>();
			chartModel = buildChart(sqlQuery, charttype, _containerID, istack, columnlist, isbin ,chartName ,aggFieldNode,binTypeNode,fromfirst,tofirst,
					firstcolor,fromsecond,tosecond,secondcolor,fromthird,tothird,thirdcolor,fromTofunction ,targetvalue ,X_field_,properties_context );
			modelview.addObject("model", chartModel);
			modelview.setViewName("draw_charts");
		}
		
		return modelview;

	}

	
	public Map<String, String> buildChart(String chartQuery, String chartType, String containerid, int istack,
			String columnlist, int isbin ,String chartName, String agg, String binType ,int fromfirst, int tofirst,
			String firstcolor,int fromsecond,int tosecond,String secondcolor,int fromthird, int tothird, String thirdcolor ,
			int fromTofunction ,int targetvalue , String X_field_ ,String properties_) throws SQLException 
	{

		SQLPojo sql = new SQLPojo();
		Highchart hc = null;
        System.out.println("isbin ######  "+isbin);
		Map<String, String> chartModel = new HashMap<String, String>();
//		String bintype = sql.getBinType();
		System.out.println("bintype ######  "+binType);
		
		if (chartName != "")
			       {					
					if (chartType.equals("chartcard1"))
					{
						hc = new HighchartsBarNStackBar().configureHistogram(getchartdata.getSeriesDataBar(chartQuery ,isbin ,properties_), chartName, "", istack,
								columnlist ,isbin ,X_field_,properties_);
						hc.setTheme(HighchartTheme.DARK_UNICA);
					}
			
					else if (chartType.equals("chartcard2"))
					{			
						hc = new HighchartsBarNStackBar().configure(getchartdata.getSeriesDataBar(chartQuery,isbin ,properties_), chartName, "", istack,
								columnlist, isbin,X_field_,properties_);
						hc.setTheme(HighchartTheme.DARK_UNICA);			
					}			
					else if (chartType.equals("chartcard3")) 
					{
						hc = new HighchartsBarNStackBar().configureStack(getchartdata.getSeriesDataBar(chartQuery,isbin ,properties_), chartName, "",
								istack, columnlist ,isbin,X_field_,properties_);
						hc.setTheme(HighchartTheme.DARK_UNICA);
					} 
					else if (chartType.equals("chartcard5")) 
					{
						hc = new HighchartsLine().configure(getchartdata.getSeriesDataLine(chartQuery,isbin ,properties_), chartName, "",
								isbin, columnlist,X_field_,properties_);
						hc.setTheme(HighchartTheme.DARK_UNICA);
					} 
//					else if (chartType.equals("chartcard6")) 
//					{
//						hc = new HighchartsGuage().configure();
//						hc.setTheme(HighchartTheme.DARK_UNICA);
//					} 
					else if (chartType.equals("chartcard6")) 
					{
						hc = new HighchartsGuage().configure(getchartdata.getSeriesGauge(chartQuery ,properties_), chartName,columnlist,agg, "",
								fromfirst, tofirst,
								firstcolor, fromsecond, tosecond, secondcolor, fromthird, tothird, thirdcolor,fromTofunction,properties_);
						hc.setTheme(HighchartTheme.DARK_UNICA);
					} 
					else if (chartType.equals("chartcard4")) 
					{
						hc = new HighchartsBarNStackBar().configureStackArea(getchartdata.getSeriesDataArea(chartQuery,isbin ,properties_), chartName, "",
								istack, columnlist,isbin,X_field_,properties_);
						hc.setTheme(HighchartTheme.DARK_UNICA);
					} 
					else if (chartType.equals("chartcard8")) 
					{
						hc = new HighchartsPie().configure_(getchartdata.getSeriesData(chartQuery ,properties_ ),chartName ,isbin ,columnlist,properties_);
						hc.setTheme(HighchartTheme.DARK_UNICA);
					} 
					else if (chartType.equals("chartcard9")) 
					{
						hc = new HighchartsPie().configure_(getchartdata.getSeriesData(chartQuery ,properties_) ,chartName ,isbin ,columnlist,properties_);
						hc.setTheme(HighchartTheme.DARK_UNICA);
					}
					else if (chartType.equals("chartcard7")) 
					{
						hc = new HighchartsBarNStackBar().configureStackArea100(getchartdata.getSeriesDataArea(chartQuery ,isbin ,properties_),
								chartName, "", istack, columnlist ,isbin,X_field_,properties_);
						hc.setTheme(HighchartTheme.DARK_UNICA);
					} else if (chartType.equals("chartcard10")) 
					{			
						hc = new HighchartsBarNStackBar().configureBar100(getchartdata.getSeriesDataBar(chartQuery,isbin ,properties_), chartName, "",
								istack, columnlist, isbin,X_field_,properties_);
						hc.setTheme(HighchartTheme.DARK_UNICA);			
					} 
					else if (chartType.equals("chartcard11")) 
					{
						hc = new HighchartsBarNStackBar().configureColumnStack100(getchartdata.getSeriesDataBar(chartQuery,isbin ,properties_),
								chartName, "", istack, columnlist ,isbin,X_field_,properties_);
						hc.setTheme(HighchartTheme.DARK_UNICA);
					}			
					else if (chartType.equals("chartcard14")) 
					{
						hc = new HighchartsBarNStackBar().configureScatter(getchartdata.getSeriesDataScatter(chartQuery,isbin ,properties_), chartName, "",
								istack, columnlist, isbin ,X_field_,properties_);
						hc.setTheme(HighchartTheme.DARK_UNICA);
					}			
					else if (chartType.equals("chartcard15")) 
					{
						hc = new HighchartsBubblechart().configureBubblechart(getchartdata.getSeriesDataBubble(chartQuery,isbin ,properties_), chartName, "",
								istack, columnlist, isbin ,X_field_,properties_);
						hc.setTheme(HighchartTheme.DARK_UNICA);
					}			
					else if (chartType.equals("chartcard18")) 
					{			
						hc = new HighchartsBulletChart().configureBulletChart(getchartdata.getSeriesGauge(chartQuery ,properties_), chartName, columnlist,agg,
								targetvalue,fromTofunction ,properties_);
						hc.setTheme(HighchartTheme.DARK_UNICA);
						
//						hc = new HighchartsBulletChart().configureBulletChart(getchartdata.getSeriesDataBullet(chartQuery), chartName, "", istack,
//								columnlist, isbin ,fromfirst, tofirst,
//								firstcolor, fromsecond, tosecond, secondcolor, fromthird, tothird, thirdcolor);
//						hc.setTheme(HighchartTheme.DARK_UNICA);
					}
					else if (chartType.equals("chartcard19")) 
					{
						hc = new HighchartsHeatmap().configure(getchartdata.getSeriesDataHeatmap(chartQuery ,properties_), chartName, "",
								istack, columnlist, isbin,X_field_ ,properties_);
						hc.setTheme(HighchartTheme.DARK_UNICA);
					}
					else if (chartType.equals("chartcard20"))
					{		
						hc = new HighchartsBarNStackBar().configurePyramid(getchartdata.getSeriesDataColumnPyramid(chartQuery ,isbin ,properties_), chartName, "", istack,
								columnlist, isbin,X_field_,properties_);
						hc.setTheme(HighchartTheme.DARK_UNICA);		
					}
					else if (chartType.equals("chartcard21"))
					{		
						hc = new HighchartsGuage().configure3dFunnel(getchartdata.getSeriesDataFunnel3D(chartQuery,isbin ,properties_), chartName, "", istack,
								columnlist, isbin,X_field_,properties_);
						hc.setTheme(HighchartTheme.DARK_UNICA);		
					}
					else if (chartType.equals("chartcard22"))
					{		
						hc = new HighchartsGuage().configureWordCloud(getchartdata.getSerieswordCloud(chartQuery), chartName, "",properties_);
						hc.setTheme(HighchartTheme.DARK_UNICA);		
					}
					else if (chartType.equals("chartcard23"))
					{		
						hc = new HighchartsCluster().configureCluster(getchartdata.getSeriesDataScatter(chartQuery,isbin ,properties_), chartName, "",
								istack, columnlist, isbin,X_field_ ,properties_ );
						hc.setTheme(HighchartTheme.DARK_UNICA);	
					}
					
		}
		else
		{			

				if (chartType.equals("chartcard1")) 
				{
					hc = new HighchartsBarNStackBar().configureHistogram(getchartdata.getSeriesDataBar(chartQuery,isbin ,properties_), "Histogram", "", istack,
							columnlist ,isbin,X_field_,properties_ );
					hc.setTheme(HighchartTheme.DARK_UNICA);
				}		
				else if (chartType.equals("chartcard2"))
				{		
					hc = new HighchartsBarNStackBar().configure(getchartdata.getSeriesDataBar(chartQuery,isbin ,properties_), "Bar Chart", "", istack,
							columnlist, isbin ,X_field_,properties_);
					hc.setTheme(HighchartTheme.DARK_UNICA);	
					
//					
//					hc = new HighchartsOrganization().configure();
//					hc.setTheme(HighchartTheme.DARK_UNICA);	
				}		
				else if (chartType.equals("chartcard3")) 
				{
					hc = new HighchartsBarNStackBar().configureStack(getchartdata.getSeriesDataBar(chartQuery,isbin ,properties_), "Stacked Bar Chart", "",
							istack, columnlist ,isbin,X_field_,properties_);
					hc.setTheme(HighchartTheme.DARK_UNICA);
				}
				else if (chartType.equals("chartcard5")) 
				{
					hc = new HighchartsLine().configure(getchartdata.getSeriesDataLine(chartQuery ,isbin ,properties_), "Line Chart", ""
							,isbin,columnlist,X_field_,properties_);
					hc.setTheme(HighchartTheme.DARK_UNICA);
				} 
				else if (chartType.equals("chartcard6")) 
				{
					hc = new HighchartsGuage().configure(getchartdata.getSeriesGauge(chartQuery,properties_), "Gauge Series",columnlist,agg, "",
							 fromfirst, tofirst,
							firstcolor, fromsecond, tosecond, secondcolor, fromthird, tothird, thirdcolor,fromTofunction ,properties_);
					hc.setTheme(HighchartTheme.DARK_UNICA);
				} 
				else if (chartType.equals("chartcard4")) 
				{
					hc = new HighchartsBarNStackBar().configureStackArea(getchartdata.getSeriesDataArea(chartQuery ,isbin,properties_), "Area Chart", "",
							istack, columnlist, isbin,X_field_,properties_);
					hc.setTheme(HighchartTheme.DARK_UNICA);
				} 
				else if (chartType.equals("chartcard8")) 
				{
					hc = new HighchartsPie().configure_(getchartdata.getSeriesData(chartQuery,properties_) ,"Pie Chart" ,isbin ,columnlist,properties_);
					hc.setTheme(HighchartTheme.DARK_UNICA);
				} 
				else if (chartType.equals("chartcard9")) 
				{
					hc = new HighchartsPie().configure_(getchartdata.getSeriesData(chartQuery ,properties_) ,"Donut Chart" ,isbin ,columnlist,properties_);
					hc.setTheme(HighchartTheme.DARK_UNICA);
				} 
				else if (chartType.equals("chartcard7")) 
				{
					hc = new HighchartsBarNStackBar().configureStackArea100(getchartdata.getSeriesDataArea(chartQuery,isbin ,properties_),
							"Stacked Area Chart 100%", "", istack, columnlist ,isbin,X_field_,properties_);
					hc.setTheme(HighchartTheme.DARK_UNICA);
				} 
				else if (chartType.equals("chartcard10")) 
				{		
					hc = new HighchartsBarNStackBar().configureBar100(getchartdata.getSeriesDataBar(chartQuery,isbin ,properties_), "Bar Chart 100%", "",
							istack, columnlist, isbin ,X_field_,properties_);
					hc.setTheme(HighchartTheme.DARK_UNICA);				
				}
				else if (chartType.equals("chartcard11"))
				{
					hc = new HighchartsBarNStackBar().configureColumnStack100(getchartdata.getSeriesDataBar(chartQuery,isbin ,properties_),
							"Stacked Column Chart 100%", "", istack, columnlist,isbin ,X_field_,properties_);
					hc.setTheme(HighchartTheme.DARK_UNICA);
				}					
				else if (chartType.equals("chartcard14"))
				{
					hc = new HighchartsBarNStackBar().configureScatter(getchartdata.getSeriesDataScatter(chartQuery,isbin ,properties_), "Scatter Chart ", "",
							istack, columnlist, isbin,X_field_,properties_);
					hc.setTheme(HighchartTheme.DARK_UNICA);
					
//					hc = new HighchartsCluster().configureCluster(getchartdata.getSeriesDataScatter(chartQuery,isbin), "Scatter Chart ", "",
//							istack, columnlist, isbin);
//					hc.setTheme(HighchartTheme.DARK_UNICA);
					
					
					
				}		
				else if (chartType.equals("chartcard15")) 
				{
					hc = new HighchartsBubblechart().configureBubblechart(getchartdata.getSeriesDataBubble(chartQuery,isbin ,properties_), "Bubble Chart ", "",
							istack, columnlist, isbin ,X_field_,properties_);
					hc.setTheme(HighchartTheme.DARK_UNICA);
					
					
//					hc = new HighchartsPackedBubbleChart().configure(getchartdata.getSeriesDataBubble(chartQuery,isbin), "Packed Bubble Chart ", "",
//							istack, columnlist, isbin);
//					hc.setTheme(HighchartTheme.DARK_UNICA);
					
					
					
				}
				else if (chartType.equals("chartcard18"))
				{
					hc = new HighchartsBulletChart().configureBulletChart(getchartdata.getSeriesGauge(chartQuery ,properties_), "Bullet Chart", columnlist,agg,
							targetvalue, fromTofunction,properties_);
					hc.setTheme(HighchartTheme.DARK_UNICA);
				}
				else if (chartType.equals("chartcard19")) 
				{
					hc = new HighchartsHeatmap().configure(getchartdata.getSeriesDataHeatmap(chartQuery ,properties_), "Heat Map", "",
							istack, columnlist, isbin,X_field_ ,properties_);
					hc.setTheme(HighchartTheme.DARK_UNICA);
					
//					hc = new HighchartsHeatmap().configure_json(getchartdata.getSeriesDataHeatmap(chartQuery), "Heat Map", "",
//							istack, columnlist, isbin,X_field_);
//					hc.setTheme(HighchartTheme.DARK_UNICA);
					
					
					
				}
				else if (chartType.equals("chartcard20"))
				{		
					hc = new HighchartsBarNStackBar().configurePyramid(getchartdata.getSeriesDataColumnPyramid(chartQuery ,isbin ,properties_), "Column Pyramids", "", istack,
							columnlist, isbin,X_field_,properties_);
					hc.setTheme(HighchartTheme.DARK_UNICA);		
				}
				else if (chartType.equals("chartcard21"))
				{		
					hc = new HighchartsGuage().configure3dFunnel(getchartdata.getSeriesDataFunnel3D(chartQuery,isbin ,properties_), "Funnel Chart", "", istack,
							columnlist, isbin,X_field_ ,properties_);
					hc.setTheme(HighchartTheme.DARK_UNICA);		
				}
				else if (chartType.equals("chartcard22"))
				{		
					hc = new HighchartsGuage().configureWordCloud(getchartdata.getSerieswordCloud(chartQuery), "Word Cloud", "" ,properties_);
					hc.setTheme(HighchartTheme.DARK_UNICA);		
				}
				else if (chartType.equals("chartcard23"))
				{		
					hc = new HighchartsCluster().configureCluster(getchartdata.getSeriesDataScatter(chartQuery,isbin ,properties_), "Marker-Clusters", "",
							istack, columnlist, isbin,X_field_ ,properties_);
					hc.setTheme(HighchartTheme.DARK_UNICA);	
				}
				
				
				
		}
	
		String globalOptions = hc.globalOptionsToJs();
		String chartOptions = hc.chartOptionsToJs();
		chartModel.put("globalOptions", globalOptions);
		chartModel.put("chartOptions", chartOptions);	
		chartModel.put("containerID", containerid);
		
		return chartModel;
		
	}

	@RequestMapping(value = "/getChartDim", method = RequestMethod.POST)
	public @ResponseBody String getChartDim(String type) {

//		System.out.println("type:::::" + type);

		if (type.equals("chartcardpie")) {
			return chartSchemaLine();
		} 
		else if (type.equals("chartcard1")) {
			return chartBars();
		} 
		else if (type.equals("chartcard2")) {
			return chartBarsSingle();
		} 
		else if (type.equals("chartcard3")) {
			return chartBars();
		} 
		else if (type.equals("chartcard4")) {
			return chartBars();
		} 
		else if (type.equals("chartcard5")) {
			return chartSchemaLine();
		}
		else if (type.equals("chartcard6")) {
			return chartGauge();
		}
		else if (type.equals("chartcard7")) {
			return chartStackedArea();
		}
		else if (type.equals("chartcard8")) {
			return chartSchemaPie();
		}
		else if (type.equals("chartcard9")) {
			return chartSchemaDonut();
		}
		else if (type.equals("chartcard10")) {
			return chartBars100p();
		}
		else if (type.equals("chartcard11")) {
			return chartStacked100p();
		}
		else if (type.equals("chartcard14")) {
			return chartSchemaScatters();
		}
		else if (type.equals("chartcard15")) {
			return chartSchemabubbles();
		}
		else if (type.equals("chartcard16")) {
			return chartSingleValue();
		}
		else if (type.equals("chartcard17")) {
			return chartTable();
		}
		else if (type.equals("chartcard18")) {
			return chartBullet();
		}
		else if (type.equals("chartcard19")) {
			return chartSchemaHeatmap();
		}
		else if (type.equals("chartcard20")) {
			return chartBarsSingle();
		}
		else if (type.equals("chartcard21")) {
			return chartFunnel3D();
		}
		else if (type.equals("chartcard22")) {
			return chartWordClod();
		}
		else if (type.equals("chartcard23")) {
			return chartSchemaScatters();
		}				
		else 
		{
			return chartBars();
		}
		// return chartSchemaPie();
	}

	@RequestMapping(value = "/getFields", method = RequestMethod.POST)
	public @ResponseBody String getFields(String type) {
		// DBCHExample e = new DBCHExample();
		// e.main();
		return tableSchema();
	}

	@RequestMapping(value = "/getFieldsvalue", method = RequestMethod.POST)
	public @ResponseBody List<ChartEntity> getFieldsvalue(String tablename, String colname) {

		List<ChartEntity> arr = new ArrayList<ChartEntity>();

		String filenameQ = "select  " + colname + ",count() as cnt  from cafebot." + tablename + " " + " group by "
				+ colname + "  " + " order by " + colname + " Asc";

		PreparedStatement ps = null;

		try {

			ps = con.prepareStatement(filenameQ);
			ResultSet rs = ps.executeQuery();
			int count = 0;
			while (rs.next()) {
				ChartEntity ch = new ChartEntity();
				ch.setViz_type(rs.getString(1));
				ch.setSlice_name(rs.getString(2));
				arr.add(ch);
				count++;

			}
			rs.close();
			ps.close();
		} catch (Exception e) {
			System.out.println("error getting columnname list:::" + e.toString());
			// TODO: handle exception
		}

		return arr;
	}

	public static String tableSchema() {
		String lists = "[{\"colname\":\"campaign\",\"datatype\":\"number\",\"symbol\":\"#\"},"
				+ "{\"colname\":\"age\",\"datatype\":\"number\",\"symbol\":\"#\"},"
				+ "{\"colname\":\"job\",\"datatype\":\"text\",\"symbol\":\"Aa\"},"
				+ "{\"colname\":\"marital\",\"datatype\":\"text\",\"symbol\":\"Aa\"},"
				+ "{\"colname\":\"education\",\"datatype\":\"text\",\"symbol\":\"Aa\"},"
				+ "{\"colname\":\"default\",\"datatype\":\"text\",\"symbol\":\"Aa\"},"
				+ "{\"colname\":\"balance\",\"datatype\":\"number\",\"symbol\":\"#\"},"
				+ "{\"colname\":\"housing\",\"datatype\":\"text\",\"symbol\":\"Aa\"},"
				+ "{\"colname\":\"loan\",\"datatype\":\"text\",\"symbol\":\"Aa\"},"
				+ "{\"colname\":\"contact\",\"datatype\":\"text\",\"symbol\":\"Aa\"},"
				+ "{\"colname\":\"day\",\"datatype\":\"number\",\"symbol\":\"#\"},"
				+ "{\"colname\":\"month\",\"datatype\":\"text\",\"symbol\":\"Aa\"},"
				+ "{\"colname\":\"duration\",\"datatype\":\"number\",\"symbol\":\"#\"},"
				+ "{\"colname\":\"pdays\",\"datatype\":\"number\",\"symbol\":\"#\"},"
				+ "{\"colname\":\"previous\",\"datatype\":\"number\",\"symbol\":\"#\"},"
				+ "{\"colname\":\"poutcome\",\"datatype\":\"text\",\"symbol\":\"Aa\"},"
				+ "{\"colname\":\"y\",\"datatype\":\"text\",\"symbol\":\"Aa\"}]";

		return lists;
	}

	@RequestMapping(value = "/getFieldsList", method = RequestMethod.POST)
	public @ResponseBody String getFieldsList(String tableid) {
		//tableid = "PT84430568S";
		System.out.println("tableid:::::::" + tableid);

		// get file id by table id
		int fileid = 2896;
		getFileid(tableid);
	    //*******int fileid = getFileid(tableid);
	    System.out.println("fileid:::::::::::::" + fileid);
		String filenameQ = "select columnname,datatype from fileschema where fileid =" + fileid
				+ " order by columnname Asc";

		String lists = "[";
		PreparedStatement ps = null;

		try {

			System.out.println("filenameQ::::::::" + filenameQ);

			ps = conpg2.prepareStatement(filenameQ);
			ResultSet rs = ps.executeQuery();
			int count = 0;
			while (rs.next()) {
				// ChartEntity ch = new ChartEntity();
				// ch.setViz_type(rs.getString(1));
				// ch.setSlice_name(rs.getString(2));
				// arr.add(ch);

				String symbol = "Aa";
				String datatype = rs.getString(2);
				if (rs.getString(2).equalsIgnoreCase("int")) {
					symbol = "#";
					datatype = "number";
				} else if (rs.getString(2).equalsIgnoreCase("float")) {
					symbol = "f";
					datatype = "number";
				} else if (rs.getString(2).equalsIgnoreCase("datetime")) {
					symbol = "T";
					datatype = "time";
				}

				if (count == 0) {
					lists += "{\"colname\":\" " + rs.getString(1) + "\",\"datatype\":\"" + datatype
							+ "\" ,\"symbol\":\"" + symbol + "\"  }";
				} else {
					lists += ",{\"colname\":\" " + rs.getString(1) + "\",\"datatype\":\"" + datatype
							+ "\" ,\"symbol\":\"" + symbol + "\"  }";

				}
				// System.out.println("lists:::::::" + lists);
				count++;

			}

			lists += "]";
			
			rs.close();
			ps.close();

		}catch (Exception e)
		{
			System.out.println("error getting columnname list:::" + e.toString());
			// TODO: handle exception
		}

		return lists;
	}
	
	
	
	
	/*
	 * @RequestMapping(value = "/getFieldsList", method = RequestMethod.POST)
	 * public @ResponseBody String getFieldsList(String tableid) {
	 * 
	 * String lists = "[";
	 * 
	 * JSONParser parser = new JSONParser(); try { Object obj = parser.parse(new
	 * FileReader("C:/Users/valsys/Desktop/trapti_ma'am code/Json_convert.json"));
	 * File file = new
	 * File("C:\\Users\\valsys\\Desktop\\trapti_ma'am code\\Json_convert.json");
	 * String filename = file.getName(); System.out.println( "filename:::::::::: "
	 * +filename); // A JSON object. Key value pairs are unordered. JSONObject
	 * supports java.util.Map interface. // JSONObject jsonFile = new JSONObject();
	 * // System.out.println(obj); List<Integer> ls= new ArrayList<Integer>();
	 * 
	 * JsonParser parser_ = new JsonParser(); JsonElement tradeElement =
	 * parser_.parse( obj.toString()); JsonArray trade =
	 * tradeElement.getAsJsonArray(); // System.out.println("#########"+trade);
	 * String datatype = ""; int count = 0;
	 * 
	 * for (JsonElement e : trade) {
	 * 
	 * JsonObject obj_ = e.getAsJsonObject(); Set<Map.Entry<String, JsonElement>>
	 * entries = ( obj_).entrySet();
	 * 
	 * for(Map.Entry<String, JsonElement> entry: entries) { int value_int = 0; float
	 * value_float = 0; String key = entry.getKey(); JsonElement value =
	 * entry.getValue(); // System.out.println( "value   " +value); try { value_int
	 * = Integer.parseInt(entry.getValue().getAsString()); // System.out.println(
	 * "value_int " +value_int); ls.add(value_int);
	 * 
	 * datatype = "number"; // System.out.println( "datatype " +datatype); }catch
	 * (Exception e_) { }
	 * 
	 * if (value_int == 0) { try { value_float =
	 * Float.parseFloat(entry.getValue().getAsString()); // System.out.println(
	 * "value_float " +value_float); datatype = "Float"; // System.out.println(
	 * "datatype " +datatype); }catch (Exception e_) { // datatype = "String"; //
	 * System.out.println( "datatype " +datatype); // TODO: handle exception }
	 * 
	 * }
	 * 
	 * if ((value_int == 0) && (value_float == 0) ) { String value_string =
	 * entry.getValue().getAsString(); // System.out.println( "value_string "
	 * +value_string); datatype = "text"; // System.out.println( "datatype "
	 * +datatype);
	 * 
	 * }
	 * 
	 * 
	 * 
	 * // ChartEntity ch = new ChartEntity(); // ch.setViz_type(rs.getString(1)); //
	 * ch.setSlice_name(rs.getString(2)); // arr.add(ch);
	 * 
	 * String symbol = "Aa"; // String datatype = rs.getString(2); if
	 * (datatype.equalsIgnoreCase("number")) { symbol = "#"; datatype = "number"; }
	 * else if (datatype.equalsIgnoreCase("float")) { symbol = "f"; datatype =
	 * "float"; } else if (datatype.equalsIgnoreCase("text")) { symbol = "Aa";
	 * datatype = "text"; }
	 * 
	 * if (count == 0) { lists += "{\"colname\":\" " + key + "\",\"datatype\":\"" +
	 * datatype + "\" ,\"symbol\":\"" + symbol + "\"  }"; } else { lists +=
	 * ",{\"colname\":\" " + key + "\",\"datatype\":\"" + datatype +
	 * "\" ,\"symbol\":\"" + symbol + "\"  }";
	 * 
	 * } // count++;
	 * 
	 * 
	 * }
	 * 
	 * } lists += "]"; System.out.println("lists:::::::" + lists); } catch
	 * (Exception e) { e.printStackTrace(); }
	 * 
	 * return lists; }
	 */


	public List<String> getFieldsListondashboard(String tableid) {

//		System.out.println("tableid:::::::" + tableid);

		// get file id by table id
		// int fileid=2896; //getFileid(tableid);
		int fileid = getFileid(tableid);
		String filenameQ = "select columnname,datatype from fileschema where fileid =" + fileid
				+ " order by columnname Asc";

		List<String> ls = new ArrayList<String>();

		PreparedStatement ps = null;

		try {

//			System.out.println("filenameQ11::::::::" + filenameQ);

			ps = conpg2.prepareStatement(filenameQ);
			ResultSet rs = ps.executeQuery();
			int count = 0;
			while (rs.next()) {

				ls.add(rs.getString(1));

			}
			
			rs.close();
			ps.close();
		} catch (Exception e) {
			ls = new ArrayList<String>();
			System.out.println("error getting columnname list on dashboard:::" + e.toString());
			// TODO: handle exception
		}
//		System.out.println("ls::::::::" + ls);
		return ls;
	}

	@RequestMapping(value = "/getTotalRecordCount", method = RequestMethod.POST)
	public @ResponseBody String getTotalRecordCountt(String tableid) {

//		System.out.println("tableid:::::::" + tableid);

		String filenameQ = "select count() as cnt from cafebot." + tableid + " ";

		String lists = "";
		PreparedStatement ps = null;

		try {

//			System.out.println("filenameQ count::::::::" + filenameQ);

			ps = con.prepareStatement(filenameQ);
			ResultSet rs = ps.executeQuery();
			int count = 0;
			while (rs.next()) {
				lists = String.valueOf(rs.getInt(1));
			}
			
			rs.close();
			ps.close();
		} catch (Exception e) {
			lists = "-1";
			System.out.println("error getting columnname list:::" + e.toString());
			// TODO: handle exception
		}

		return lists;
	}

	public int getFileid(String tabelname) {

		int fileid = 0;
		String filenameQ = "select id from file where tablename='" + tabelname
				+ "' and isoriginal=1 order by id desc limit 1";

//		System.out.println("filenameQ:::::" + filenameQ);
		PreparedStatement ps = null;
		// List<ChartEntity> arr = new ArrayList<ChartEntity>();

		try {
			ps = conpg2.prepareStatement(filenameQ);
			ResultSet rs = ps.executeQuery();

			while (rs.next()) {
				fileid = rs.getInt(1);
			}
			System.out.println("fileid:::::" + fileid);
			rs.close();
			ps.close();
		} catch (Exception e) {
			fileid = 0;
			System.out.println("error getting tablelist:::" + e.toString());
			// TODO: handle exception
		}

		return fileid;
	}

	@RequestMapping(value = "/getTablelist", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<?> getTablelist() {
//--------------conpg2  cafebot database
		String filenameQ = "select fileid,fname,userid,created from filename where status =6 order by id desc limit 10";
		PreparedStatement ps = null;
		List<ChartEntity> arr = new ArrayList<ChartEntity>();

		try {
			ps = conpg2.prepareStatement(filenameQ);
			ResultSet rs = ps.executeQuery();

			while (rs.next()) {
				ChartEntity ch = new ChartEntity();
				ch.setViz_type(rs.getString(1));
				ch.setSlice_name(rs.getString(2));
				ch.setSlice_userid(rs.getInt(3));
				ch.setSlile_created(rs.getString(4));
				arr.add(ch);
			}

			rs.close();
			ps.close();
		} catch (Exception e) {
			System.out.println("error getting tablelist:::" + e.toString());
			// TODO: handle exception
		}

		System.out.println("table list:::::" + arr.toString());
		// return arr.toString();
		return new ResponseEntity<List>(arr, HttpStatus.OK);
		
		
	}
	
//	@RequestMapping(value = "/searchData", method = RequestMethod.POST)
//	@ResponseBody
//	public ResponseEntity<?> searchData(@RequestParam Integer userid, String daterange, String dataset_name ) {
////--------------conpg2  cafebot database
//		
//		System.out.println("userid  ##################     "+userid);
//		System.out.println("daterange  ##################     "+daterange);
//		System.out.println("dataset_name  ##################     "+dataset_name);
//		
//		
//		
//		String filenameQ = "select fileid,fname,userid,created from filename where userid ="+userid+"  status =6 order by id desc";
//		PreparedStatement ps = null;
//		List<ChartEntity> arr = new ArrayList<ChartEntity>();
//
//		try {
//			ps = conpg2.prepareStatement(filenameQ);
//			ResultSet rs = ps.executeQuery();
//
//			while (rs.next()) {
//				ChartEntity ch = new ChartEntity();
//				ch.setViz_type(rs.getString(1));
//				ch.setSlice_name(rs.getString(2));
//				ch.setSlice_userid(rs.getInt(3));
//				ch.setSlile_created(rs.getString(4));
//				arr.add(ch);
//			}
//
//			rs.close();
//			ps.close();
//		} catch (Exception e) {
//			System.out.println("error getting tablelist:::" + e.toString());
//			// TODO: handle exception
//		}
//
//		System.out.println("table list:::::" + arr.toString());
//		// return arr.toString();
//		return new ResponseEntity<List>(arr, HttpStatus.OK);
//		
//		
//	}
	
	
	@RequestMapping(value = "/user_id__users", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<?> user_id__users() {
//--------------conpg2  cafebot database
		
		String filenameQ = "select id,username from users order by id desc";
		PreparedStatement ps = null;
		List<ChartEntity> arr = new ArrayList<ChartEntity>();

		int id =0;
		String user_name ="";
		
		try {
			ps = conpg2.prepareStatement(filenameQ);
			ResultSet rs = ps.executeQuery();

			while (rs.next()) {
				ChartEntity ch = new ChartEntity();
				ch.setSlice_userid(rs.getInt(1));				
				ch.setSlice_user_name(rs.getString(2));
				arr.add(ch);
			}

			rs.close();
			ps.close();
		} catch (Exception e) {
			System.out.println("error getting tablelist:::" + e.toString());
			// TODO: handle exception
		}

		System.out.println("table list:::::" + arr.toString());
		// return arr.toString();
		return new ResponseEntity<List>(arr, HttpStatus.OK);
		
		
	}
	
	
	@RequestMapping(value = "/setdata_source", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<?> setdata_source(int user_id_,String datasource_name,String  date_ ,int project_id_) throws JsonMappingException,
	JsonProcessingException  ,PSQLException{
//--------------conpg2  cafebot database
		System.out.println("user_id_ %%%%  "+user_id_);
		System.out.println("datasource_name %%%%  "+datasource_name);
		
		String default_date = "1900-01-01";
		
		System.out.println("project_id   %%%%  "+project_id_);
		
		
		JsonFactory jsonFactory = new JsonFactory();
		ObjectMapper objectMapper = new ObjectMapper(jsonFactory);

		JsonNode arrayNode = objectMapper.readTree(date_);
		String s_date ="";
		String e_date ="";
		
		
		
		for (JsonNode jsonNode : arrayNode) {
			
				 s_date= jsonNode.get("s_date").asText();
				
				 e_date =jsonNode.get("e_date").asText();
		}
		
		System.out.println("s_date   %%%%  "+s_date);	
		System.out.println("e_date   %%%%  "+e_date);	
		
		
		String arrfilter ="";
		
		if (!datasource_name.equalsIgnoreCase("")) 
		{
			arrfilter +=" and fname like '"+datasource_name+"%'";
		}
		
		
		if (user_id_!= 0) 
		{
			arrfilter +=" and userid="+user_id_;
		}
		
		
		if (project_id_!= 0) 
		{
			arrfilter +=" and projectid="+project_id_;
		}
		
//		 ( created  >=  '"+s_date+"' and   created  <=  '"+e_date+"')
//		 (created BETWEEN '"+s_date+"'  and   '"+e_date+"') 
		
		
		
		
		if (!s_date.equalsIgnoreCase(e_date)) 
		{
			if (!s_date.equalsIgnoreCase(default_date)) 
			{
				arrfilter +=" and  (created BETWEEN '"+s_date+"' ";
			}
			
			
			if (!s_date.equalsIgnoreCase(default_date)) 
			{
				arrfilter +="  and   '"+e_date+"')  ";
			}
		}
		else
		{
			arrfilter +=" and  created = '"+s_date+"%' ";
		}
		
		
		System.out.println("111111111111111111 ");	
        String filenameQ = "select userid,fname,fileid from filename where status =6 "+arrfilter+" order by id desc limit 10";
        
        List<ChartEntity> arr = new ArrayList<ChartEntity>();
        
		PreparedStatement ps = null;					
		
		try {
			ps = conpg2.prepareStatement(filenameQ);
			ResultSet rs = ps.executeQuery();

			while (rs.next()) {
				ChartEntity ch = new ChartEntity();
				ch.setSlice_userid(rs.getInt(1));				
				ch.setSlice_name(rs.getString(2));
				ch.setViz_type(rs.getString(3));
				arr.add(ch);
			}

			rs.close();
			ps.close();
		} catch (Exception e) {
			System.out.println("error getting tablelist:::" + e.toString());
			// TODO: handle exception
		}
		
//		
//		if((datasource_name == "") && (user_id_ == 0) && (project_id_ == 0) && (s_date == default_date))
//		{
//			System.out.println("111111111111111111 ");	
//            filenameQ = "select userid,fname,fileid from filename where status =6 order by id desc limit 10";
//			
//			PreparedStatement ps = null;					
//			
//			try {
//				ps = conpg2.prepareStatement(filenameQ);
//				ResultSet rs = ps.executeQuery();
//
//				while (rs.next()) {
//					ChartEntity ch = new ChartEntity();
//					ch.setSlice_userid(rs.getInt(1));				
//					ch.setSlice_name(rs.getString(2));
//					ch.setViz_type(rs.getString(3));
//					arr.add(ch);
//				}
//
//				rs.close();
//				ps.close();
//			} catch (Exception e) {
//				System.out.println("error getting tablelist:::" + e.toString());
//				// TODO: handle exception
//			}
//			
//		}
//		else if((datasource_name == "") && (user_id_ == 0) && (project_id_ == 0) && (s_date != default_date))
//		{
//            filenameQ = "select userid,fname,fileid from filename where status =6  and  ( created  >=  '"+s_date+"' and   created  <=  '"+e_date+"') order by id desc limit 10";
//			
//			PreparedStatement ps = null;					
//			
//			try {
//				ps = conpg2.prepareStatement(filenameQ);
//				ResultSet rs = ps.executeQuery();
//
//				while (rs.next()) {
//					ChartEntity ch = new ChartEntity();
//					ch.setSlice_userid(rs.getInt(1));				
//					ch.setSlice_name(rs.getString(2));
//					ch.setViz_type(rs.getString(3));
//					arr.add(ch);
//				}
//
//				rs.close();
//				ps.close();
//			} catch (Exception e) {
//				System.out.println("error getting tablelist:::" + e.toString());
//				// TODO: handle exception
//			}
//			
//		}
//		else if((datasource_name == "") && (user_id_ == 0) && (project_id_ != 0) && (s_date == default_date))
//		{
//            filenameQ = "select userid,fname,fileid from filename where status =6  and projectid = "+project_id_+" order by id desc limit 10";
//			
//			PreparedStatement ps = null;					
//			
//			try {
//				ps = conpg2.prepareStatement(filenameQ);
//				ResultSet rs = ps.executeQuery();
//
//				while (rs.next()) {
//					ChartEntity ch = new ChartEntity();
//					ch.setSlice_userid(rs.getInt(1));				
//					ch.setSlice_name(rs.getString(2));
//					ch.setViz_type(rs.getString(3));
//					arr.add(ch);
//				}
//
//				rs.close();
//				ps.close();
//			} catch (Exception e) {
//				System.out.println("error getting tablelist:::" + e.toString());
//				// TODO: handle exception
//			}
//			
//		}
//		else if((datasource_name == "") && (user_id_ == 0) && (project_id_ != 0) && (s_date != default_date))
//		{
//            filenameQ = "select userid,fname,fileid from filename where status =6  and projectid = "+project_id_+" and  ( created  >=  '"+s_date+"' and   created  <=  '"+e_date+"') order by id desc limit 10";
//			
//			PreparedStatement ps = null;					
//			
//			try {
//				ps = conpg2.prepareStatement(filenameQ);
//				ResultSet rs = ps.executeQuery();
//
//				while (rs.next()) {
//					ChartEntity ch = new ChartEntity();
//					ch.setSlice_userid(rs.getInt(1));				
//					ch.setSlice_name(rs.getString(2));
//					ch.setViz_type(rs.getString(3));
//					arr.add(ch);
//				}
//
//				rs.close();
//				ps.close();
//			} catch (Exception e) {
//				System.out.println("error getting tablelist:::" + e.toString());
//				// TODO: handle exception
//			}
//			
//		}
//		else if((datasource_name != "") && (user_id_ == 0)  && (project_id_ == 0) && (s_date == default_date))
//		{
//			filenameQ = "select userid,fname,fileid from filename where status =6 and fname like '"+datasource_name+"%' order by id desc";
//			
//			PreparedStatement ps = null;					
//			
//			try {
//				ps = conpg2.prepareStatement(filenameQ);
//				ResultSet rs = ps.executeQuery();
//
//				while (rs.next()) {
//					ChartEntity ch = new ChartEntity();
//					ch.setSlice_userid(rs.getInt(1));				
//					ch.setSlice_name(rs.getString(2));
//					ch.setViz_type(rs.getString(3));
//					arr.add(ch);
//				}
//
//				rs.close();
//				ps.close();
//			} catch (Exception e) {
//				System.out.println("error getting tablelist:::" + e.toString());
//				// TODO: handle exception
//			}
//		}
//		else if((datasource_name != "") && (user_id_ == 0)  && (project_id_ == 0) && (s_date != default_date))
//		{
//			filenameQ = "select userid,fname,fileid from filename where status =6 and fname like '"+datasource_name+"%' and  ( created  >=  '"+s_date+"' and   created  <=  '"+e_date+"')  order by id desc";
//			
//			PreparedStatement ps = null;					
//			
//			try {
//				ps = conpg2.prepareStatement(filenameQ);
//				ResultSet rs = ps.executeQuery();
//
//				while (rs.next()) {
//					ChartEntity ch = new ChartEntity();
//					ch.setSlice_userid(rs.getInt(1));				
//					ch.setSlice_name(rs.getString(2));
//					ch.setViz_type(rs.getString(3));
//					arr.add(ch);
//				}
//
//				rs.close();
//				ps.close();
//			} catch (Exception e) {
//				System.out.println("error getting tablelist:::" + e.toString());
//				// TODO: handle exception
//			}
//		}
//		else if((datasource_name != "") && (user_id_ == 0)  && (project_id_ != 0) && (s_date == default_date))
//		{
//			filenameQ = "select userid,fname,fileid from filename where status =6 and fname like '"+datasource_name+"%' and projectid = "+project_id_+" order by id desc";
//			
//			PreparedStatement ps = null;					
//			
//			try {
//				ps = conpg2.prepareStatement(filenameQ);
//				ResultSet rs = ps.executeQuery();
//
//				while (rs.next()) {
//					ChartEntity ch = new ChartEntity();
//					ch.setSlice_userid(rs.getInt(1));				
//					ch.setSlice_name(rs.getString(2));
//					ch.setViz_type(rs.getString(3));
//					arr.add(ch);
//				}
//
//				rs.close();
//				ps.close();
//			} catch (Exception e) {
//				System.out.println("error getting tablelist:::" + e.toString());
//				// TODO: handle exception
//			}
//		}
//		else if((datasource_name != "") && (user_id_ == 0)  && (project_id_ != 0) && (s_date != default_date))
//		{
//			filenameQ = "select userid,fname,fileid from filename where status =6 and fname like '"+datasource_name+"%' and projectid = "+project_id_+" and  ( created  >=  '"+s_date+"' and   created  <=  '"+e_date+"')  order by id desc";
//			
//			PreparedStatement ps = null;					
//			
//			try {
//				ps = conpg2.prepareStatement(filenameQ);
//				ResultSet rs = ps.executeQuery();
//
//				while (rs.next()) {
//					ChartEntity ch = new ChartEntity();
//					ch.setSlice_userid(rs.getInt(1));				
//					ch.setSlice_name(rs.getString(2));
//					ch.setViz_type(rs.getString(3));
//					arr.add(ch);
//				}
//
//				rs.close();
//				ps.close();
//			} catch (Exception e) {
//				System.out.println("error getting tablelist:::" + e.toString());
//				// TODO: handle exception
//			}
//		}
//		else if((user_id_ != 0) && (datasource_name == "")  && (project_id_ == 0) && (s_date == default_date))
//		{
//			filenameQ = "select userid,fname,fileid from filename where status =6 and userid="+user_id_+"  order by id desc";
//			 		PreparedStatement ps = null;	
//
//			int id =0;
//			String user_name ="";
//			
//			try {
//				ps = conpg2.prepareStatement(filenameQ);
//				ResultSet rs = ps.executeQuery();
//
//				while (rs.next()) {
//					ChartEntity ch = new ChartEntity();
//					ch.setSlice_userid(rs.getInt(1));				
//					ch.setSlice_name(rs.getString(2));
//					ch.setViz_type(rs.getString(3));
//					arr.add(ch);
//				}
//
//				rs.close();
//				ps.close();
//			} catch (Exception e) {
//				System.out.println("error getting tablelist:::" + e.toString());
//				// TODO: handle exception
//			}
//			
//		}
//		else if((user_id_ != 0) && (datasource_name == "")  && (project_id_ == 0) && (s_date != default_date))
//		{
//			filenameQ = "select userid,fname,fileid from filename where status =6 and userid="+user_id_+" and  ( created  >=  '"+s_date+"' and   created  <=  '"+e_date+"')  order by id desc";
//			 		PreparedStatement ps = null;	
//
//			int id =0;
//			String user_name ="";
//			
//			try {
//				ps = conpg2.prepareStatement(filenameQ);
//				ResultSet rs = ps.executeQuery();
//
//				while (rs.next()) {
//					ChartEntity ch = new ChartEntity();
//					ch.setSlice_userid(rs.getInt(1));				
//					ch.setSlice_name(rs.getString(2));
//					ch.setViz_type(rs.getString(3));
//					arr.add(ch);
//				}
//
//				rs.close();
//				ps.close();
//			} catch (Exception e) {
//				System.out.println("error getting tablelist:::" + e.toString());
//				// TODO: handle exception
//			}
//			
//		}
//		else if((user_id_ != 0) && (datasource_name == "")  && (project_id_ != 0) && (s_date == default_date))
//		{
//			filenameQ = "select userid,fname,fileid from filename where status =6 and userid="+user_id_+" and projectid = "+project_id_+" order by id desc";
//			 		PreparedStatement ps = null;	
//
//			int id =0;
//			String user_name ="";
//			
//			try {
//				ps = conpg2.prepareStatement(filenameQ);
//				ResultSet rs = ps.executeQuery();
//
//				while (rs.next()) {
//					ChartEntity ch = new ChartEntity();
//					ch.setSlice_userid(rs.getInt(1));				
//					ch.setSlice_name(rs.getString(2));
//					ch.setViz_type(rs.getString(3));
//					arr.add(ch);
//				}
//
//				rs.close();
//				ps.close();
//			} catch (Exception e) {
//				System.out.println("error getting tablelist:::" + e.toString());
//				// TODO: handle exception
//			}
//			
//		}
//		else if((user_id_ != 0) && (datasource_name == "")  && (project_id_ != 0) && (s_date != default_date))
//		{
//			filenameQ = "select userid,fname,fileid from filename where status =6 and userid="+user_id_+" and projectid = "+project_id_+" and  ( created  >=  '"+s_date+"' and   created  <=  '"+e_date+"')  order by id desc";
//			 		PreparedStatement ps = null;	
//
//			int id =0;
//			String user_name ="";
//			
//			try {
//				ps = conpg2.prepareStatement(filenameQ);
//				ResultSet rs = ps.executeQuery();
//
//				while (rs.next()) {
//					ChartEntity ch = new ChartEntity();
//					ch.setSlice_userid(rs.getInt(1));				
//					ch.setSlice_name(rs.getString(2));
//					ch.setViz_type(rs.getString(3));
//					arr.add(ch);
//				}
//
//				rs.close();
//				ps.close();
//			} catch (Exception e) {
//				System.out.println("error getting tablelist:::" + e.toString());
//				// TODO: handle exception
//			}
//			
//		}
//		else
//		{
//			 filenameQ = "select userid,fname,fileid from filename where status =6 and "
//					+ "fname like '"+datasource_name+"%' and userid="+user_id_+" and projectid = "+project_id_+" and  ( created  >=  '"+s_date+"' and   created  <=  '"+e_date+"')  "
//							+ "order by id desc";
//			PreparedStatement ps = null;
//
//			int id =0;
//			String user_name ="";
//			
//			try {
//				ps = conpg2.prepareStatement(filenameQ);
//				ResultSet rs = ps.executeQuery();
//
//				while (rs.next()) {
//					ChartEntity ch = new ChartEntity();
//					ch.setSlice_userid(rs.getInt(1));				
//					ch.setSlice_name(rs.getString(2));
//					ch.setViz_type(rs.getString(3));
//					arr.add(ch);
//				}
//
//				rs.close();
//				ps.close();
//			} catch (Exception e) {
//				System.out.println("error getting tablelist:::" + e.toString());
//				// TODO: handle exception
//			}
//		}
		
		
System.out.println("filenameQ    "+filenameQ);
		System.out.println("table list:::::" + arr.toString());
		// return arr.toString();
		return new ResponseEntity<List>(arr, HttpStatus.OK);
		
		
	}
	
	

	@RequestMapping(value = "/getDashboardlist", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<?> getDashboardlist() {
		String filenameQ = "select id,dashboard_title from dashboards order by id desc";

		PreparedStatement ps = null;

		List<ChartEntity> arr = new ArrayList<ChartEntity>();

		try {
			ps = conpg.prepareStatement(filenameQ);
			ResultSet rs = ps.executeQuery();

			while (rs.next()) {
				ChartEntity ch = new ChartEntity();
				ch.setViz_type(rs.getString(1));
				ch.setSlice_name(rs.getString(2));
				arr.add(ch);
			}

			rs.close();
			ps.close();
		} catch (Exception e) {
			System.out.println("error getting dashboard list :::" + e.toString());
			// TODO: handle exception
		}

//		System.out.println("dashboard list:::::" + arr.toString());
		// return arr.toString();
		return new ResponseEntity<List>(arr, HttpStatus.OK);
	}

	@RequestMapping(value = "/getDashboardtablist", method = RequestMethod.POST)
	@ResponseBody
	public ResponseEntity<?> getDashboardtablist(String dashid) {

		List<String> temparr = new ArrayList<String>();
		List<ChartEntity> arr = new ArrayList<ChartEntity>();

		try {
			temparr = getTab(dashid);

			for (int k = 0; k < temparr.size(); k++) {
				ChartEntity ch = new ChartEntity();

				String str[] = temparr.get(k).split("#_#");
//				System.out.println("str[0]:::::" + str[0]);
				ch.setViz_type(str[0]);
				ch.setSlice_name(str[1]);
				arr.add(ch);
			}
//			System.out.println("arr tab list :::" + arr.toString());
		} catch (Exception e) {
			System.out.println("error tab list ::::" + e.toString());
			String uidname = UUID.randomUUID().toString();
			temparr.add(uidname);
			// TODO: handle exception
		}
		return new ResponseEntity<List>(arr, HttpStatus.OK);
	}

	public List<String> getTab(String dashID) throws IOException {

		List<String> lstab = new ArrayList<String>();

		PreparedStatement ps = null;
		String filequery = " select id, position_json, tabscount from dashboards where id = " + dashID;
		List<ChartEntity> list = new ArrayList<ChartEntity>();
		int id = 0;
		String position_json = "";
		// int tabscount=0;
		try {
			ps = conpg.prepareStatement(filequery);
			ResultSet rs = ps.executeQuery();

			while (rs.next()) {
				id = rs.getInt(1);
				position_json = rs.getString(2);
				// tabscount=rs.getInt(3);
			}
			
			rs.close();
			ps.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		List<ChartEntity> listofcharts = getDashCharts("1");

		JsonFactory jsonFactory = new JsonFactory();
		ObjectMapper objectMapper = new ObjectMapper(jsonFactory);

		JsonNode arrayNode = objectMapper.readTree(position_json);

		if (arrayNode.isArray()) {
			// System.out.println("dashjsonNode"+arrayNode);
			for (JsonNode jsonNode : arrayNode) {

				String tabid = jsonNode.get("tabid").asText();
				String tabname = jsonNode.get("tabname").asText();

				if (!lstab.contains(tabname)) {
					lstab.add(tabid + "#_#" + tabname);
				}

			}
		}

//		System.out.println("lstab:::::" + lstab.toString());
		return lstab;

	}

	public static String chartSchemaLine() {
		String varlists = "[{\"series\": \"X-Axis\",\"datatype\": \"number,text,time\",\"symbol\":\"#,Aa,T\",\"mandatory\":\"true\",\"aggregation\":\"false\",\"multiple\":\"false\"},"
				+ "{\"series\": \"Y-Axis\",\"datatype\": \"number,time\",\"symbol\":\"#,T,Multi\",\"mandatory\":\"true\",\"aggregation\":\"true\",\"multiple\":\"true\"}]";
				//+ "{\"series\": \"X1-Axis\",\"datatype\": \"number,time\",\"symbol\":\"#,T\",\"mandatory\":\"false\",\"aggregation\":\"false\",\"multiple\":\"false\"}]";

		return varlists;
	}

	public static String chartSchemaPie() {
		String varlists = "[{\"series\": \"Arcs\",\"datatype\": \"number,time\",\"symbol\":\"#,T\",\"mandatory\":\"true\",\"aggregation\":\"true\",\"multiple\":\"false\"},"
				+ "{\"series\": \"Series\",\"datatype\":\"number,text,time\",\"symbol\":\"#,Aa,T\",\"mandatory\":\"true\",\"aggregation\":\"false\",\"multiple\":\"false\"}]";
		return varlists;
	}

	public static String chartSchemaDonut() {
		String varlists = "[{\"series\": \"Arcs\",\"datatype\": \"number,time\",\"symbol\":\"#,T\",\"mandatory\":\"true\",\"aggregation\":\"true\",\"multiple\":\"false\"},"
				+ "{\"series\": \"Series\",\"datatype\":\"number,text,time\",\"symbol\":\"#,Aa,T\",\"mandatory\":\"true\",\"aggregation\":\"false\",\"multiple\":\"false\"}]";
		return varlists;
	}

	public static String chartHistogram() {

		String varlists = "[{\"series\": \"X-Axis\",\"datatype\": \"number,time\",\"symbol\":\"#,T\",\"mandatory\":\"true\",\"aggregation\":\"false\",\"multiple\":\"false\"},"
				+ "{\"series\": \"Y-Axis\",\"datatype\": \"number,time\",\"symbol\":\"#,T,Multi\",\"mandatory\":\"true\",\"aggregation\":\"true\",\"multiple\":\"true\"},"
				+ "{\"series\": \"X1-Axis\",\"datatype\": \"number\",\"symbol\":\"#\",\"mandatory\":\"false\",\"aggregation\":\"false\",\"multiple\":\"false\"}]";
		return varlists;
		// x axis with and condition between two x -axis

	}

	public static String chartBarsSingle() {
		String varlists = "[{\"series\": \"X-Axis\",\"datatype\": \"number,time,text\",\"symbol\":\"#,Aa,T\",\"mandatory\":\"true\",\"aggregation\":\"false\",\"multiple\":\"false\"},"
				+ "{\"series\": \"Y-Axis\",\"datatype\": \"number,time\",\"symbol\":\"#,T,Multi\",\"mandatory\":\"true\",\"aggregation\":\"true\",\"multiple\":\"true\"}"

				+ "]";
		return varlists;
	}
	public static String chartFunnel3D() {
		String varlists = "[{\"series\": \"X-Axis\",\"datatype\": \"number,time,text\",\"symbol\":\"#,Aa,T\",\"mandatory\":\"true\",\"aggregation\":\"false\",\"multiple\":\"false\"},"
				+ "{\"series\": \"Y-Axis\",\"datatype\": \"number,time\",\"symbol\":\"#,T\",\"mandatory\":\"true\",\"aggregation\":\"true\",\"multiple\":\"false\"}"

				+ "]";
		return varlists;
	}
	public static String chartGauge() {
//		String varlists = "[{\"series\": \"X-Axis\",\"datatype\": \"number,time,text\",\"symbol\":\"#,Aa,T\",\"mandatory\":\"true\",\"aggregation\":\"false\",\"multiple\":\"false\"},"
//				+ "{\"series\": \"Y-Axis\",\"datatype\": \"number,time\",\"symbol\":\"#,T,Multi\",\"mandatory\":\"true\",\"aggregation\":\"true\",\"multiple\":\"true\"}"
//
//				+ "]";
		
		String varlists = "[{\"series\": \"Y-Axis\",\"datatype\": \"number,text\",\"symbol\":\"#,Aa\",\"mandatory\":\"true\",\"aggregation\":\"true\",\"multiple\":\"false\"}]";

		return varlists;
	}

	public static String chartBars() {

		String varlists = "[{\"series\": \"X-Axis\",\"datatype\": \"number,text,time\",\"symbol\":\"#,Aa,T\",\"mandatory\":\"true\",\"aggregation\":\"false\",\"multiple\":\"false\"},"
				+ "{\"series\": \"Y-Axis\",\"datatype\": \"number,time\",\"symbol\":\"#,T,Multi\",\"mandatory\":\"true\",\"aggregation\":\"true\",\"multiple\":\"true\"}"
				+ ","
				+ "{\"series\": \"X1-Axis\",\"datatype\": \"number\",\"symbol\":\"#\",\"mandatory\":\"false\",\"aggregation\":\"false\",\"multiple\":\"false\"}"
				+ "]";
		return varlists;
	
	}

	public static String chartBars100p() {

		String varlists = "[{\"series\": \"X-Axis\",\"datatype\": \"number,text,time\",\"symbol\":\"#,Aa,T\",\"mandatory\":\"true\",\"aggregation\":\"false\",\"multiple\":\"false\"},"
				+ "{\"series\": \"Y-Axis\",\"datatype\": \"number,time\",\"symbol\":\"#,T,Multi\",\"mandatory\":\"true\",\"aggregation\":\"true\",\"multiple\":\"true\"}"
				+ ","
				+ "{\"series\": \"X1-Axis\",\"datatype\": \"number\",\"symbol\":\"#\",\"mandatory\":\"false\",\"aggregation\":\"false\",\"multiple\":\"false\"}"
				+ "]";
		return varlists;
		
	}

	public static String chartStacked100p() {

		String varlists = "[{\"series\": \"X-Axis\",\"datatype\": \"number,text,time\",\"symbol\":\"#,Aa,T\",\"mandatory\":\"true\",\"aggregation\":\"false\",\"multiple\":\"false\"},"
				+ "{\"series\": \"Y-Axis\",\"datatype\": \"number,time\",\"symbol\":\"#,T,Multi\",\"mandatory\":\"true\",\"aggregation\":\"true\",\"multiple\":\"true\"}"
				+ ","
				+ "{\"series\": \"X1-Axis\",\"datatype\": \"number\",\"symbol\":\"#\",\"mandatory\":\"false\",\"aggregation\":\"false\",\"multiple\":\"false\"}"
				+ "]";
		return varlists;
		// x axis with and condition between two y -axis
	}

	public static String chartMix() {
		String varlists = "[{\"series\": \"X-Axis\",\"datatype\": \"number,time\",\"symbol\":\"#,T\",\"mandatory\":\"true\",\"aggregation\":\"true\",\"multiple\":\"true\"},"
				+ "{\"series\": \"Y-Axis\",\"datatype\": \"number,text,time\",\"symbol\":\"#,T,Multi\",\"mandatory\":\"true\",\"aggregation\":\"false\",\"multiple\":\"false\"}]";
		return varlists;
		// x axis with and condition between two x -axis
	}

	public static String chartStackedArea() {

		String varlists = "[{\"series\": \"X-Axis\",\"datatype\": \"number,text,time\",\"symbol\":\"#,Aa,T\",\"mandatory\":\"true\",\"aggregation\":\"false\",\"multiple\":\"false\"},"
				+ "{\"series\": \"Y-Axis\",\"datatype\": \"number,time\",\"symbol\":\"#,T,Multi\",\"mandatory\":\"true\",\"aggregation\":\"true\",\"multiple\":\"true\"},"
				+ "{\"series\": \"X1-Axis\",\"datatype\": \"number\",\"symbol\":\"#\",\"mandatory\":\"true\",\"aggregation\":\"false\",\"multiple\":\"false\"}]";
		return varlists;
		// x axis with and condition between two x -axis
	}

	public static String chartMixed() {

		String varlists = "[{\"series\": \"X-Axis\",\"datatype\": \"number,time\",\"symbol\":\"#,T\",\"mandatory\":\"true\",\"aggregation\":\"false\",\"multiple\":\"false\"},"
				+ "{\"series\": \"Y-Axis\",\"datatype\": \"number,time\",\"symbol\":\"#,T,Multi\",\"mandatory\":\"true\",\"aggregation\":\"true\",\"multiple\":\"true\"}]";
		return varlists;
		// x axis with and condition between two x -axis

	}

	public static String chartSchemaScatters() {
		String varlists = "[{\"series\": \"X-Axis\",\"datatype\": \"number,text,time\",\"symbol\":\"#,Aa,T\",\"mandatory\":\"true\",\"aggregation\":\"false\",\"multiple\":\"false\"},"
				+ "{\"series\": \"Y-Axis\",\"datatype\": \"number,text,time\",\"symbol\":\"#,T,Multi\",\"mandatory\":\"true\",\"aggregation\":\"true\",\"multiple\":\"true\"},"
				+ "{\"series\": \"X1-Axis\",\"datatype\": \"number\",\"symbol\":\"#\",\"mandatory\":\"false\",\"aggregation\":\"false\",\"multiple\":\"false\"}]";
		return varlists;
	}

	public static String chartSchemabubbles() {
		String varlists = "[{\"series\": \"X-Axis\",\"datatype\": \"text\",\"symbol\":\"Aa\",\"mandatory\":\"true\",\"aggregation\":\"false\",\"multiple\":\"false\"},"
				+ "{\"series\": \"Y-Axis\",\"datatype\": \"number\",\"symbol\":\"#\",\"mandatory\":\"true\",\"aggregation\":\"false\",\"multiple\":\"false\"},"
//				+ "{\"series\": \"Lines\",\"datatype\": \"number\",\"symbol\":\"#,Aa,T\",\"mandatory\":\"false\",\"aggregation\":\"true\",\"multiple\":\"false\"},"
				+ "{\"series\": \"Z-Axis\",\"datatype\": \"number\",\"symbol\":\"#\",\"mandatory\":\"true\",\"aggregation\":\"true\",\"multiple\":\"false\"}]";
		      //  + "{\"series\": \"Z1-Axis\",\"datatype\": \"number,text,time\",\"symbol\":\"#,T\",\"mandatory\":\"true\",\"aggregation\":\"true\",\"multiple\":\"false\"}]";
		return varlists;
	}

	public static String chartSingleValue() {
		String varlists = "[{\"series\": \"Y-Axis\",\"datatype\": \"number,text\",\"symbol\":\"#,Aa\",\"mandatory\":\"true\",\"aggregation\":\"true\",\"multiple\":\"false\"}]";

		return varlists;
	}
	public static String chartWordClod() {
		String varlists = "[{\"series\": \"Y-Axis\",\"datatype\": \"number,text,time\",\"symbol\":\"#,Aa,T\",\"mandatory\":\"true\",\"aggregation\":\"true\",\"multiple\":\"false\"}]";

		return varlists;
	}

	public static String chartTable() {
		String varlists = "[{\"series\": \"Table-Axis\",\"datatype\": \"number,text,time\",\"symbol\":\"#,Aa,T\",\"mandatory\":\"true\",\"aggregation\":\"true\",\"multiple\":\"true\"}]";

		return varlists;
	}
	public static String chartBullet() {
//		String varlists = "[{\"series\": \"X-Axis\",\"datatype\": \"text\",\"symbol\":\"Aa\",\"mandatory\":\"true\",\"aggregation\":\"false\",\"multiple\":\"false\"},"
//				+ "{\"series\": \"Y-Axis\",\"datatype\": \"number,time\",\"symbol\":\"#,T,Multi\",\"mandatory\":\"true\",\"aggregation\":\"true\",\"multiple\":\"true\"}"
//
//				+ "]";
		
		String varlists = "[{\"series\": \"Y-Axis\",\"datatype\": \"number,text,time\",\"symbol\":\"#,Aa,T\",\"mandatory\":\"true\",\"aggregation\":\"true\",\"multiple\":\"false\"}]";

		
		
		return varlists;
	}
	public static String chartSchemaHeatmap() {
		String varlists = "[{\"series\": \"X-Axis\",\"datatype\": \"text,number,time\",\"symbol\":\"#,Aa,T\",\"mandatory\":\"true\",\"aggregation\":\"false\",\"multiple\":\"false\"},"
				+ "{\"series\": \"X1-Axis\",\"datatype\": \"number,time,text\",\"symbol\":\"#,Aa,T\",\"mandatory\":\"true\",\"aggregation\":\"false\",\"multiple\":\"false\"},"
//				+ "{\"series\": \"Lines\",\"datatype\": \"number\",\"symbol\":\"#,Aa,T\",\"mandatory\":\"false\",\"aggregation\":\"true\",\"multiple\":\"false\"},"
				+ "{\"series\": \"Y-Axis\",\"datatype\": \"number\",\"symbol\":\"#\",\"mandatory\":\"true\",\"aggregation\":\"true\",\"multiple\":\"true\"}]";
		      //  + "{\"series\": \"Z1-Axis\",\"datatype\": \"number,text,time\",\"symbol\":\"#,T\",\"mandatory\":\"true\",\"aggregation\":\"true\",\"multiple\":\"false\"}]";
		return varlists;
	}


	public static String getDataCSV() {
		File input = new File("C:\\Users\\amitj\\Desktop\\Use Cases Data\\Claim Propensity\\claim_chart.csv");

		String json = null;
		try {

			CsvSchema csv = CsvSchema.emptySchema().withHeader();
			CsvMapper csvMapper = new CsvMapper();
			MappingIterator<Map<?, ?>> mappingIterator = csvMapper.reader().forType(Map.class).with(csv)
					.readValues(input);
			List<Map<?, ?>> list = mappingIterator.readAll();

			ObjectMapper objectMapper = new ObjectMapper();
			json = objectMapper.writerWithDefaultPrettyPrinter().writeValueAsString(list);

		} catch (Exception e) {
			e.printStackTrace();
		}

		return json;
	}

	public static List<Map<?, ?>> readObjectsFromCsv(File file) throws IOException {
		CsvSchema bootstrap = CsvSchema.emptySchema().withHeader();
		CsvMapper csvMapper = new CsvMapper();
		MappingIterator<Map<?, ?>> mappingIterator = csvMapper.reader(Map.class).with(bootstrap).readValues(file);

		return mappingIterator.readAll();
	}

	public static void writeAsJson(List<Map<?, ?>> data, File file) throws IOException {
		ObjectMapper mapper = new ObjectMapper();
		mapper.writeValue(file, data);
	}

	public static SQLPojo pieSQL(SQLPojo sql, String series, String field, String agg) throws IOException {

//		System.out.println("series pie:::::" + series);

		if (series.equals("Arcs")) {
			if (agg != "" || agg != null) {
				sql.setAgg(agg, field);
				sql.setIsAgg(true);
			}
		}

		if (series.equals("Series")) {
			sql.setFields(field);
		}

		return sql;

	}

	public static SQLPojo lineSQL(SQLPojo sql, String series, String field, String agg, String displaytopvalueNode,
			String othersNode, int displaytopCheck) throws IOException {
		// {"Series":"Arcs","Field":"campaign","Agg":"Sum"}
//		System.out.println("series line:::::" + series);

		if (series.equals("X-Axis")) {
			sql.setFields(field);
		}
		if (series.equals("Y-Axis")) {
			if (displaytopCheck == 1) {
				sql.setDisplaytopvalue(displaytopvalueNode);
				sql.setOthers(othersNode);
			} else if (agg != "" || agg != null) {
				sql.setAgg(agg, field);
				sql.setAggColumnlist(agg, field);
				sql.setIsAgg(true);
			}

		}


		return sql;
	}


	public static SQLPojo barSQL(SQLPojo sql, String series, String field, String agg, int isbin, String binTypeNode,
			String binSizeNode, String binCountNode, String displaytopvalueNode, String othersNode, int displaytopCheck)
			throws IOException {

		// {"Series":"Arcs","Field":"campaign","Agg":"Sum"}
//		System.out.println("series line:::::" + series);
		if (series.equals("X-Axis")) {
			sql.setFields(field);
			sql.setIsBin(isbin);
			sql.setBinType(binTypeNode);
			sql.setBinSize(binSizeNode);
			sql.setBinCount(binCountNode);
		}
		if (series.equals("X1-Axis")) {
			sql.setFields(field);
			sql.setIsBin(isbin);
			sql.setBinType(binTypeNode);
			sql.setBinSize(binSizeNode);
			sql.setBinCount(binCountNode);
		}
		if (series.equals("Y-Axis")) {
			if (displaytopCheck == 1) {
				sql.setDisplaytopvalue(displaytopvalueNode);
				sql.setOthers(othersNode);
			} else if (agg != "" || agg != null) {
				sql.setAgg(agg, field);
				sql.setAggColumnlist(agg, field);
				sql.setIsAgg(true);
			}

		}

		return sql;
	}

	public static SQLPojo stackedSQL(SQLPojo sql, String series, String field, String agg, int isbin,
			String binTypeNode, String binSizeNode, String binCountNode, String displaytopvalueNode, String othersNode,
			int displaytopCheck) throws IOException {

		// {"Series":"Arcs","Field":"campaign","Agg":"Sum"}
//		System.out.println("series line:::::" + series);
		if (series.equals("X-Axis")) {
			sql.setFields(field);
			sql.setIsBin(isbin);
			sql.setBinType(binTypeNode);
			sql.setBinSize(binSizeNode);
			sql.setBinCount(binCountNode);
		}
		if (series.equals("X1-Axis")) {
			sql.setFields(field);
			sql.setIsBin(isbin);
			sql.setBinType(binTypeNode);
			sql.setBinSize(binSizeNode);
			sql.setBinCount(binCountNode);
		}
		if (series.equals("Y-Axis")) {
			if (displaytopCheck == 1) {
				sql.setDisplaytopvalue(displaytopvalueNode);
				sql.setOthers(othersNode);
			} else if (agg != "" || agg != null) {
				sql.setAgg(agg, field);
				sql.setAggColumnlist(agg, field);
				sql.setIsAgg(true);
			}

		}

		return sql;
	}

	public static SQLPojo scatterSQL(SQLPojo sql, String series, String field, String agg, int isbin,
			String binTypeNode, String binSizeNode, String binCountNode, String displaytopvalueNode, String othersNode,
			int displaytopCheck) throws IOException {

		// {"Series":"Arcs","Field":"campaign","Agg":"Sum"}
//		System.out.println("series line:::::" + series);
		if (series.equals("X-Axis")) {
			sql.setFields(field);
			sql.setIsBin(isbin);
			sql.setBinType(binTypeNode);
			sql.setBinSize(binSizeNode);
			sql.setBinCount(binCountNode);
		}
		if (series.equals("X1-Axis")) {
			sql.setFields(field);
			sql.setIsBin(isbin);
			sql.setBinType(binTypeNode);
			sql.setBinSize(binSizeNode);
			sql.setBinCount(binCountNode);
		}
		if (series.equals("Y-Axis")) {
			if (displaytopCheck == 1) {
				sql.setDisplaytopvalue(displaytopvalueNode);
				sql.setOthers(othersNode);
			} else if (agg != "" || agg != null) {
				sql.setAgg(agg, field);
				sql.setAggColumnlist(agg, field);
				sql.setIsAgg(true);
			}

		}

		return sql;
	}

	public static SQLPojo bubbleSQL(SQLPojo sql, String series, String field, String agg, int isbin, String binTypeNode,
			String binSizeNode, String binCountNode, String displaytopvalueNode, String othersNode, int displaytopCheck)
			throws IOException {

		// {"Series":"Arcs","Field":"campaign","Agg":"Sum"}
//		System.out.println("series line:::::" + series);
		if (series.equals("X-Axis")) {
			sql.setFields(field);
			sql.setIsBin(isbin);
			sql.setBinType(binTypeNode);
			sql.setBinSize(binSizeNode);
			sql.setBinCount(binCountNode);
		}
		if (series.equals("Y-Axis")) {
			sql.setFields(field);
			sql.setIsBin(isbin);
			sql.setBinType(binTypeNode);
			sql.setBinSize(binSizeNode);
			sql.setBinCount(binCountNode);
		}
//		if (series.equals("Y-Axis")) {
//			if (displaytopCheck == 1) {
//				sql.setDisplaytopvalue(displaytopvalueNode);
//				sql.setOthers(othersNode);
//			} else if (agg != "" || agg != null) {
//				sql.setAgg(agg, field);
//				sql.setAggColumnlist(agg, field);
//				sql.setIsAgg(true);
//			}
//
//		}
		if (series.equals("Z-Axis")) {
			if (displaytopCheck == 1) {
				sql.setDisplaytopvalue(displaytopvalueNode);
				sql.setOthers(othersNode);
			} else if (agg != "" || agg != null) {
				sql.setAgg(agg, field);
				sql.setAggColumnlist(agg, field);
				sql.setIsAgg(true);
			}

		}

		return sql;
	}
	
	public static SQLPojo heatmapSQL(SQLPojo sql, String series, String field, String agg, int isbin, String binTypeNode,
			String binSizeNode, String binCountNode, String displaytopvalueNode, String othersNode, int displaytopCheck)
			throws IOException {

		if (series.equals("X-Axis")) {
			sql.setFields(field);
		}
		if (series.equals("Y-Axis")) {
			if (displaytopCheck == 1) {
				sql.setDisplaytopvalue(displaytopvalueNode);
				sql.setOthers(othersNode);
			} else if (agg != "" || agg != null) {
				sql.setAgg(agg, field);
				sql.setAggColumnlist(agg, field);
				sql.setIsAgg(true);
			}

		}

		if (series.equals("X1-Axis")) {
			sql.setFields(field);
		}
		
		return sql;
	}

	public static SQLPojo singlevalueSQL(SQLPojo sql, String series, String field, String agg) throws IOException {

		// {"Series":"Arcs","Field":"campaign","Agg":"Sum"}
//		System.out.println("series line:::::" + series);

		if (series.equals("Y-Axis")) {
			sql.setFields(field);
			sql.setAgg(agg, field);
			sql.setAggColumnlist(agg, field);
			sql.setIsAgg(true);

		}

		return sql;
	}

	public static SQLPojo tableSQL(SQLPojo sql, String series, String field) throws IOException {

		// {"Series":"Arcs","Field":"campaign","Agg":"Sum"}
//		System.out.println("series line: tableSQL:::: " + series);

		if (series.equals("Table-Axis")) {
			sql.setFields(field);
		}

		return sql;
	}

	public String chartType(String chartid) {
		String charttype = "line";

		if (chartid.equalsIgnoreCase("chartcard1")) {
			charttype = "Histogram";
		} else if (chartid.equalsIgnoreCase("chartcard2")) {
			charttype = "Bar";
		} else if (chartid.equalsIgnoreCase("chartcard3")) {
			charttype = "Stacked Bar Chart";
		} else if (chartid.equalsIgnoreCase("chartcard4")) {
			charttype = "Area Chart";
		} else if (chartid.equalsIgnoreCase("chartcard5")) {
			charttype = "Line Chart";
		} else if (chartid.equalsIgnoreCase("chartcard6")) {
			charttype = "Gauge Series";
		} else if (chartid.equalsIgnoreCase("chartcard7")) {
			charttype = "Stacked Bar Chart %";
		} else if (chartid.equalsIgnoreCase("chartcard8")) {
			charttype = "Pie Chart";
		} else if (chartid.equalsIgnoreCase("chartcard9")) {
			charttype = "Donut Chart";
		} else if (chartid.equalsIgnoreCase("chartcard10")) {
			charttype = "Bar 100%";
		} else if (chartid.equalsIgnoreCase("chartcard11")) {
			charttype = "Stacked 100%";
		} else if (chartid.equalsIgnoreCase("chartcard14")) {
			charttype = "Scatter Plot";
		} else if (chartid.equalsIgnoreCase("chartcard15")) {
			charttype = "Bubble";
		} else if (chartid.equalsIgnoreCase("chartcard16")) {
			charttype = "Single Value Chart";
		} else if (chartid.equalsIgnoreCase("chartcard17")) {
			charttype = "Table";
		} else if (chartid.equalsIgnoreCase("chartcard18")) {
			charttype = "Bullet";
		}
		else if (chartid.equalsIgnoreCase("chartcard19")) {
			charttype = "Heat Map";
		}
		else if (chartid.equalsIgnoreCase("chartcard20")) {
			charttype = "Column Pyramids";
		}
		else if (chartid.equalsIgnoreCase("chartcard21")) {
			charttype = "Funnel Chart";
		}
		else if (chartid.equalsIgnoreCase("chartcard22")) {
			charttype = "Word Cloud";
		}
		else if (chartid.equalsIgnoreCase("chartcard23")) {
			charttype = "Marker-Clusters";
		}

		return charttype;

	}

	public String addcharttoTab(String dashID, int sliceid, String tabid, String tabname ,String charttype) throws IOException {

		PreparedStatement ps = null;
		String filequery = " select id, position_json, tabscount from dashboards where id = " + dashID;
	
		
		 
//		System.out.println("charttype  :::: ::" + charttype);
//		System.out.println("filequery::::" + filequery);

	
		int id = 0;
		String position_json = "";
		// int tabscount=0;
		try {
			ps = conpg.prepareStatement(filequery);
			ResultSet rs = ps.executeQuery();

			while (rs.next()) {
				id = rs.getInt(1);
				position_json = rs.getString(2);
				// tabscount=rs.getInt(3);
			}
			
			rs.close();
			ps.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		// List<ChartEntity> listofcharts = getDashCharts("1");
//		System.out.println("position_json::::::::::" + position_json);

		JsonFactory jsonFactory = new JsonFactory();
//		System.out.println("111111");

		ObjectMapper objectMapper = new ObjectMapper(jsonFactory);
//		System.out.println("11111122222222");
		JsonNode arrayNode = objectMapper.readTree(position_json);

//		System.out.println("1111112222333333");
		String posJson = "";
		int countout = 0;
		Map<String, String> json_pos_map = new LinkedHashMap<String, String>();
		if (arrayNode.isArray()) {
			// System.out.println("dashjsonNode"+arrayNode);

			int ismatched = 0;
			String tempposJson = "{\"tabid\":\"" + tabid + "\",\"tabname\":\"" + tabname + "\",\"childs\":[";
			//int countout = 0;		
			
			
			
			///treemap 
			
			TreeMap<Integer, String> tmap = new TreeMap<Integer, String>();
			
			for (JsonNode jsonNode : arrayNode) 
			{
				String tabid_ = jsonNode.get("tabid").asText();
				String tabname_ = jsonNode.get("tabname").asText();

//				System.out.println("tabid_::::::::::::::::::::::" + tabid_);

				int tabid_arr =  Integer.parseInt(tabid_.split("-")[1]);
				
				
				if (tabid_.equalsIgnoreCase(tabid)) 
				{
//					System.out.println("inside################################");
					ismatched = 1;

					tempposJson = "{\"tabid\":\"" + tabid_ + "\",\"tabname\":\"" + tabname_ + "\",\"childs\":[";

					JsonNode arrayNode1 = jsonNode.get("childs");
					int countin = 0;

					for (JsonNode jsonNode1 : arrayNode1) 
					{

						if (countin == 0) {
							tempposJson += jsonNode1;
						} else {
							tempposJson += "," + jsonNode1;
						}

						countin++;
					}

//					System.out.println("countin::::::" + countin);
			
			
					if (countin == 0) {
						if(charttype.equalsIgnoreCase("chartcard16"))
						{
							tempposJson += "{\"x\":6,\"y\":0,\"w\":2,\"h\":1, \"tabid\": \"" +tabid+"\",\"tabname\":\"" +tabname+"\", \"chartid\":\"" + sliceid + "\" }]}";
						}else
						{
							tempposJson += "{\"x\":6,\"y\":0,\"w\":6,\"h\":3, \"tabid\": \"" +tabid+"\",\"tabname\":\"" +tabname+"\", \"chartid\":\"" + sliceid + "\" }]}";
							
						}
					}
					else
					{
						if(charttype.equalsIgnoreCase("chartcard16"))
						{
							tempposJson += ",{\"x\":6,\"y\":0,\"w\":2,\"h\":1, \"tabid\": \"" +tabid+"\",\"tabname\":\"" +tabname+"\", \"chartid\":\"" + sliceid + "\" }]}";
						}
						else					
						{
						tempposJson += ",{\"x\":6,\"y\":0,\"w\":6,\"h\":3, \"tabid\": \"" +tabid+"\",\"tabname\":\"" +tabname+"\", \"chartid\":\"" + sliceid + "\" }]}";
						}
					}
					System.out.println("tempposJson::::::::::::inside::::::::::::::::" + tempposJson);
				
					
					
//					System.out.println("tabid_###############:::::"+tabid_);
					
					tmap.put(tabid_arr, tabid_+"#_#"+tempposJson);
					
					
					
					
				} else {

//					System.out.println("jsonNode::::::::::::::" + jsonNode);
//					System.out.println("jsonNode::::::::" + jsonNode);

					
					
					if (!tabid.equalsIgnoreCase("0")) 
					{

						if (countout == 0) 
						{
							posJson += jsonNode;
							
							tmap.put(tabid_arr, tabid_+"#_#"+jsonNode);
							
						} 
						else 
						{
							posJson += "," + jsonNode;
							
							tmap.put(tabid_arr, tabid_+"#_#"+jsonNode);
							
						}

					} 
					else 
					{
						posJson = "]";

					}

//					System.out.println("tabid_###############:::::"+tabid_);
					
					
					
				}

				if (ismatched == 1) {
					// break;
				}

				countout++;
			}

//		System.out.println("if############:::::::::");
		
				
	List<String> lsdashJson = new ArrayList<String>();
		//treemap 
		 for(int k = 1; k<= tmap.size(); k++)
		 {
			 lsdashJson.add(tmap.get(k).split("#_#")[1]);
			 //posJson += tmap.get(String.valueOf(k));
		 
		 }
		
		 
	            posJson =  lsdashJson.toString();
//		        System.out.println("lsdashJson:::::"+posJson);
		 
//			    System.out.println("countout:::::::::" + countout);   
//			System.out.println("posJson:::::::::" + posJson);
		}
		

		return posJson;

	}

	@RequestMapping(value = "/savenewdashboard", method = RequestMethod.POST)
	@ResponseBody
	public String savenewdashboard(@RequestParam int dashid, String dashname, String projectid, int isrealtime,
			HttpServletRequest req) throws JsonMappingException, JsonProcessingException {
		// System.out.println("btn save pressed");
		String sqlQuery = "";
		String msg = "0";
		int intindex =1;
		int newdashid = 0;
		
		String Darktheme = "DarkTheme";
		try {

			if (projectid == "" || projectid == "--select--") {
				projectid = "0";
			}

//			System.out.println("dashid:::::::" + dashid);
//			System.out.println("dashname:::::::" + dashname);
			String updatedashposJson = "";
			Statement statement = conpg.createStatement();
			
//			String intindex = UUID.randomUUID().toString().split("-")[1];
			
			DataHelper dh = new DataHelper();

			int isexist = dh.isDashboardexist(dashname);

//			System.out.println("isexist::::" + isexist);
			if (isexist == 1) {
				msg = "99"; // exist
			} else if (isexist == 0 || isexist == -1) {
				msg = "-1"; // error
			} else {

				if (dashid == 0) {
					// insert
					int userid = 1;
							//Integer.parseInt(req.getSession().getAttribute("currentSessionUserID").toString());
					
					if (isrealtime == 0) {
						updatedashposJson = "INSERT INTO public.dashboards(dashboard_title, position_json, tabscount , theme"
								+ ")" + "VALUES ('" + dashname
								+ "', '[{\"tabid\":\"tabs-1\",\"tabname\":\"New Tab_" + intindex + "\",\"childs\":[]}]'"
								+ ",1, '" + Darktheme+"') RETURNING id";

						////---------------server
//						updatedashposJson = "INSERT INTO public.dashboards(dashboard_title, position_json, tabscount,projectid,isrealtime,userid"
//								+ ")" + "VALUES ('" + dashname
//								+ "', '[{\"tabid\":\"tabs-1\",\"tabname\":\"New Tab_" + intindex + "\",\"childs\":[]}]'"
//								+ ",1,"+projectid+",0,"+userid +") RETURNING id";
//						
						
						
					} else {

						updatedashposJson = "INSERT INTO public.dashboards(dashboard_title, position_json, tabscount,"
								+ "projectid,isrealtime,userid)" + "VALUES ('" + dashname
								+ "', '[{\"tabid\":\"tabs-1\",\"tabname\":\"New Tab_" + intindex
								+ "\",\"childs\":[{\"x\":\"0\",\"y\":\"0\",\"w\":\"6\",\"h\":\"4\",\"tabid\":\"tabs-1\",\"tabname\":\"New Tab_3e5a\",\"chartId\":681}]}]'"
								+ ",1," + "" + projectid + "," + isrealtime + "," + userid + ") RETURNING id";
					}

//					System.out.println("updatedashposJson---" + updatedashposJson);
					PreparedStatement ps = null;
					ResultSet rs;

					ps = conpg.prepareStatement(updatedashposJson);
					ResultSet fileflowrs;
					if (ps.execute()) {
						fileflowrs = ps.getResultSet();
						fileflowrs.next();
						newdashid = fileflowrs.getInt(1);
					} else {
						newdashid = ps.getUpdateCount();
					}

					ps.close();

					msg = String.valueOf(newdashid);

				} else {
					
				}
			}
			
		} catch (Exception e) {
			System.out.println("create dashboard error::::" + e.toString());
			msg = "0"; // TODO: handle exception
		}

//		System.out.println("new dashboardid0:::::::::" + msg);

		return msg;
	}

	//@Transactional
	public String getJsondataClickHouseDataobjectAPI(String sqlQuery) {

		DBConClickHouse dbconch = new DBConClickHouse();
		Connection conch = dbconch.getConnection();
		// JsonArray js = Json.createArrayBuilder().build();
		JsonArray js = new JsonArray();
		String q = sqlQuery;

//		System.out.println("getJsondataClickHouseDataobjectAPI data query:::::::::::::::: ==" + q);
		try {
			PreparedStatement ps = null;
			ps = conch.prepareStatement(q);
			ResultSet rs = ps.executeQuery();

			// JSONArray json = new JSONArray();
			java.sql.ResultSetMetaData rsmd = rs.getMetaData();

			int numColumns = rsmd.getColumnCount();

			List<String> colls = new ArrayList<String>();

			for (int i = 1; i <= numColumns; i++) {
				String column_name = rsmd.getColumnName(i);
				colls.add(column_name);
			}

			// System.out.println("ls col --"+colls.toString());

			Collections.sort(colls, new Comparator<String>() {
				public int compare(String s1, String s2) {
					return s1.compareToIgnoreCase(s2);
				}
			});

//			System.out.println("ds ls col sort --" + colls.toString());

			while (rs.next()) {
				
				JsonObject obj = new JsonObject();

				for (int i = 0; i < colls.size(); i++) {
					String column_name = colls.get(i); // rsmd.getColumnName(i);
					// if (!column_name.equalsIgnoreCase("data") )
					{
						String val = "";
						if (rs.getObject(column_name) != null) {
							
							val = rs.getObject(column_name).toString();
						}

						obj.addProperty(column_name, val);
						
					}
					
				}

				js.add(obj);

			}
			
			rs.close();
			ps.close();
		} catch (Exception e) {
			// js.add("Error-");
			System.out.println("JsondataClickHouseDataobject error ==" + e.toString());
		}
		// System.out.println("js ==" + js);
		return js.toString();

	}

	public String getTableData(String table, String containerID) {

		JsonParser parser = new JsonParser();
		JsonElement tradeElement = parser.parse(table);
		JsonArray trade = tradeElement.getAsJsonArray();
		
		String tablediv = "";
		PreparedStatement ps = null;

//		System.out.println("containerid --" + containerID);
		// String containerid = containerID;
		ChartEntity ch = new ChartEntity();

		String tableStr = " <html> <style>\r\n" + "table, th, td {\r\n" + "  border:1px solid black;\r\n" + "}\r\n"
				+ "</style> <body> <table id = \"" + containerID + "\" class=\"table table-striped table-bordered\">";

		tablediv = "";
		// if (viz_type.equalsIgnoreCase("chartcard17"))
		// {

		for (JsonElement e : trade) {
			tableStr = tableStr + "<tr>";
			JsonObject obj = e.getAsJsonObject();

			Set<Entry<String, JsonElement>> keySet = obj.entrySet();

			for (Entry<String, JsonElement> s : keySet) {
				tableStr += "<td>" + s.getKey() + "</td>";
			}
			tableStr += "</tr> ";

		}
		// }
		tableStr += "</table> </body> </html> ";

//		System.out.println("table --" + tableStr);

		return tableStr;
	}
	
//
//	@Transactional
//	@RequestMapping(value = "/getAllDashboardsDetails", method = RequestMethod.POST)
//	public @ResponseBody List<Analytics_DashBoard> getAllDashboardsDetails() 
//	{
//		String str ="";
//		
//		System.out.println("getAllDashboardsDetails:::::");
//			List<Analytics_DashBoard> dashls = dashdao.getList();
//			
//	    	Collections.sort(dashls, new Comparator<Analytics_DashBoard>() {     
//	    		public int compare(final Analytics_DashBoard object1, final Analytics_DashBoard object2) 
//	    		  { 
//	    			int count =0;
//	    			 if (object1.getCreated_on().compareTo(object2.getCreated_on()) > 0) {
//	    				 count = -1;
//	    		        } else if (object1.getCreated_on().compareTo(object2.getCreated_on()) < 0) {
//	    		        	count = 1;
//	    		        } else if (object1.getCreated_on().compareTo(object2.getCreated_on()) == 0) {
//	    		        	count =0;
//	    		        } else    
//	    		        {    
//	    		        	count =0;
//	    		                //return object1.getCreated().before(object2.getCreated()) ? 1 : 0;
//	    		        }
//	    			 return count;
//	    		  }
//	    		  });  
//			
//				return dashls;
//		
//	}
//	  
////	@Transactional
//	@RequestMapping(value = "/getAllSliceDetails", method = RequestMethod.POST)
//	public @ResponseBody List<Slices> getAllSliceDetails() 
//	{
//		String str ="";
//		
//		System.out.println("getAllSliceDetails:::::");
//		
//			List<Slices> slicels = slicedao.getListOriginal(1);
//			
//			
//			Collections.sort(slicels, new Comparator<Slices>() {     
//	    		public int compare(final Slices object1, final Slices object2) 
//	    		  { 
//	    			int count =0;
//	    			 if (object1.getCreated_on().compareTo(object2.getCreated_on()) > 0) {
//	    				 count = -1;
//	    		        } else if (object1.getCreated_on().compareTo(object2.getCreated_on()) < 0) {
//	    		        	count = 1;
//	    		        } else if (object1.getCreated_on().compareTo(object2.getCreated_on()) == 0) {
//	    		        	count =0;
//	    		        } else    
//	    		        {    
//	    		        	count =0;
//	    		                //return object1.getCreated().before(object2.getCreated()) ? 1 : 0;
//	    		        }
//	    			 return count;
//	    		  }
//	    		  });  
//			
//				return slicels;
//		
//	}
//	  
//	
//   
//
//	@RequestMapping(value = "/destroyDashboard", method = RequestMethod.POST)
//	public @ResponseBody Analytics_DashBoard destroy(@RequestBody Map<String, Object> model) {
//		Analytics_DashBoard target = new Analytics_DashBoard();
//		target.setId((int) model.get("id"));
//
//		//System.out.println("id *** " + (int) model.get("id"));
//			dashdao.delete(target);
//	
//		return target;
//	}
//	
//	
//	@RequestMapping(value = "/updateDashboard", method = RequestMethod.POST)
//	public @ResponseBody Analytics_DashBoard updateDashboard(@RequestBody Map<String, Object> model, HttpServletRequest req) {
//		
//		System.out.println("update dashboard");
//		int id = (int) model.get("id");
//		Analytics_DashBoard target = dashdao.getList(id).get(0);
//		
//		boolean isrealtime = (boolean) model.get("isrealtime");   
//		target.setId((int) model.get("id"));
//		target.setDashboard_title((String) model.get("dashboard_title"));
//		target.setProjectid( Integer.parseInt((String) model.get("projectid")));
//		//target.setCreated_on(new Date());
//		target.setChanged_on(new Date());  ;
//			
//		if (isrealtime) 
//		{
//			target.setIsrealtime(1);
//		} else {
//			target.setIsrealtime(0);
//		}
//		
//		
//		dashdao.saveOrUpdate(target);
//			System.out.println("update in updateDashboard session succcess");
//	   //req.getSession().setAttribute("msg", "Success");
//	
//		return target;
//	}
//	
//	
//	
//	@RequestMapping(value = "/destroySlice", method = RequestMethod.POST)
//	public @ResponseBody Slices destroySlice(@RequestBody Map<String, Object> model) {
//		
//		Slices target = new Slices();
//		target.setId((int) model.get("id"));
//
//		//System.out.println("id *** " + (int) model.get("id"));
//		slicedao.delete(target);
//	
//		return target;
//	}
//	
//	
//	@RequestMapping(value = "/updateSlice", method = RequestMethod.POST)
//	public @ResponseBody Slices updateSlice(@RequestBody Map<String, Object> model, HttpServletRequest req) 
//	{
//		
//		System.out.println("update Slice");
//		int id = (int) model.get("id");
//		Slices target = slicedao.getList(id).get(0);
//		
//		//boolean isoriginal = (boolean) model.get("isoriginal");
//		
//		target.setId((int) model.get("id"));
//		target.setSlice_name((String) model.get("slice_name"));
//		//target.setCreated_on(new Date());
//		target.setChanged_on(new Date());  ;
//			
//		/*
//		 * if (isoriginal) { target.setIsoriginal(1); } else { target.setIsoriginal(0);
//		 * }
//		 */
//		
//		
//		slicedao.saveOrUpdate(target);
//			System.out.println("update in updateSlice session succcess");
//	   //req.getSession().setAttribute("msg", "Success");
//	
//		return target;
//	}
//	
	
//	public Map<String, String>  selectData_Clickhouse(String label, String json , String tablename) 
//	{
//		//String tablename = "PT84430568S";
////		ALTER TABLE table_name ADD column_name datatype;
//		String  selectdata = "SELECT " + label + "," +json + " FROM cafebot."+tablename+" desc limit 1000";
//		Map<String, String> map_clickhouse = new HashMap<String, String>();			
//		String Field_data ="";
//		String json_data = "";
//		System.out.println("selectdata: query:::::::::::::" + selectdata);
//		try {
//
//			PreparedStatement ps = null;
//			ps = con.prepareStatement(selectdata);
//			
//			ResultSet rs = ps.executeQuery();
//
//			while (rs.next()) {
//				Field_data = rs.getString(1);
//				json_data = rs.getString(2);
//								
//				map_clickhouse.put(Field_data, json_data);
//			}
//			
//			ps.close();
//			
//			System.out.println("map_clickhouse**********************" +map_clickhouse);
//			
//		} catch (Exception e) {
//			System.out.println("selectdata error:::" + e.toString());
//			// TODO: handle exception
//		}
//		return map_clickhouse;
//	}
//	
//	
//	public void  selectDataArray_Clickhouse(String tablename) 
//	{
//		List<String > list1 = new ArrayList<String >();
//
//		int count = 0;
//		String column_name ="";
//		String add_column = "";
//		for(int i=0; i< list1.size(); i++)
//		{
//			if(count == 0)
//			{
//			  column_name = list1.get(i);
//			  count++;
//			  add_column = "ADD COLUMN IF NOT EXISTS "+ column_name +" String DEFAULT '' ";
//			}
//			else
//			{
//		      column_name = list1.get(i) ;
//		      add_column += ", ADD COLUMN IF NOT EXISTS "+ column_name +" String DEFAULT '' ";
//			}						
//		}
////		ALTER TABLE cafebot.PT84430568S ADD COLUMN IF NOT EXISTS new_column integer DEFAULT -1
//		String altercolumn ="ALTER TABLE cafebot."+tablename+" "+ add_column ;
//						
//		System.out.println("selectdata: query:::::::::::::" + altercolumn);
//		try {
//
//			PreparedStatement ps = null;
//			ps = con.prepareStatement(altercolumn);
//			
//			ResultSet rs = ps.executeQuery();
//
//			ps.close();
//			
//		} catch (Exception e) {
//			System.out.println("selectdata error:::" + e.toString());
//			// TODO: handle exception
//		}
//
//	}
	
	 public static void azure()
	    {
	        String authority = "https://login.windows.net/";
	        String tenant = "mytenant.onmicrosoft.com" ;


	        AuthenticationContext context = null;
	        AuthenticationResult result = null;
	        ExecutorService service = null;
	        try {
	            service = Executors.newFixedThreadPool(1);
	            context = new AuthenticationContext(authority + tenant + "/", true,
	                    service);
	            Future<AuthenticationResult> future = context.acquireToken(
	                    "https://graph.windows.net",
	                    new ClientCredential("AD-USERNAME", "AD-PASSWORD"), null);
	            result = future.get();
	        } catch (Exception e) {
	             e.getCause();
	        } finally {
	            service.shutdown();
	        }


	    }
	
	    @PostMapping(value = "/txtlabel")
		@ResponseBody
		public String txtlabel(@RequestParam String var_data, HttpServletRequest req) throws JsonMappingException, JsonProcessingException {
//			List<String > arr = new ArrayList<String >();
			System.out.println("txtLabel ::::::::::::");
			String msg ="";
			
			JsonFactory jsonFactory = new JsonFactory();
			ObjectMapper objectMapper = new ObjectMapper(jsonFactory);

			JsonNode labeldata_ = objectMapper.readTree(var_data);
//			arr.add(labeldata);
			int count = 0;
			int count_pg = 0;
			String add_column = "";
			String add_column_pg = "";
			int fileid =80;
			
			for (JsonNode jsonNode : labeldata_) 
			{
				for (JsonNode jsonNode_ : jsonNode) 
				{
					String column_name = jsonNode_.get("containing_label").asText();
					String column_type = jsonNode_.get("user_Label").asText();
					
					if(count == 0)
					{
					  add_column = "ADD COLUMN IF NOT EXISTS "+ column_name +" String DEFAULT ''";
					  
					add_column_pg = "("+fileid +",'" +column_name + "','" +column_type +"', 1)";
					  count++;
					}
					else
					{
//				      column_name = list1.get(i) ;
				      add_column += ", ADD COLUMN IF NOT EXISTS "+ column_name +" String DEFAULT ''";
				      add_column_pg += ", ("+fileid +",'" +column_name + "','" +column_type +"', 1)";
					}
					
					
				}
			
			}
			String altercolumn ="ALTER TABLE default.test_new "+ add_column ;
			
			System.out.println("selectdata: query:::::::::::::" + altercolumn);
			try {

				PreparedStatement ps = null;
				ps = con.prepareStatement(altercolumn);
				
				ResultSet rs = ps.executeQuery();
                msg = "ok";
				ps.close();
				
			} catch (Exception e) {
				System.out.println("selectdata error:::" + e.toString());
				// TODO: handle exception
			}
			
			
//			INSERT INTO public.fileschema(fileid, columnname, datatype, is_original)VALUES (?, ?, ?,?);
//			String altercolumn_pg ="ALTER TABLE slices "+ add_column_pg ;
			String altercolumn_pg = "INSERT INTO fileschema(fileid, columnname, datatype, is_original)VALUES "+add_column_pg+"";
			
			System.out.println("selectdata: query altercolumn_pg:::::::::::::" + altercolumn_pg);
			try {

				PreparedStatement ps = null;
				ps = conpg2.prepareStatement(altercolumn_pg);
				
				int rs = ps.executeUpdate();
                msg = "ok";
				ps.close();
				
			} catch (Exception e) {
				System.out.println("selectdata error:::" + e.toString());
				// TODO: handle exception
			}
			
			
			return msg;

		}
	    
	    
	    
	    public Map<String, String>  selectData_Clickhouse_(String slice_name, String query_context ) 
		{

			//--clickhouse--  String  selectdata = "SELECT " + label + "," +json + " FROM cafebot."+tablename+" desc limit 1000";
//			select slice_name , query_context from slices where isoriginal= 1 order by id desc limit 10 
			String  selectdata = "SELECT slice_name , query_context from slices where isoriginal= 1 order by id desc limit 10 ";
			
			Map<String, String> map_clickhouse = new HashMap<String, String>();			
			String Field_data ="";
			String json_data = "";
			System.out.println("selectdata: query:::::::::::::" + selectdata);
			try {

				PreparedStatement ps = null;
				ps = conpg.prepareStatement(selectdata);
				
				ResultSet rs = ps.executeQuery();

				while (rs.next()) {
					Field_data = rs.getString(1);
					json_data = rs.getString(2);
									
					map_clickhouse.put(Field_data, json_data);
				}
				
				rs.close();
				ps.close();
				
				
				System.out.println("map_clickhouse**********************" +map_clickhouse);
				
				 ObjectMapper objectMapper = new ObjectMapper();
				 String json ="";
			        try {
			             json = objectMapper.writeValueAsString(map_clickhouse);
			            System.out.println(json);
			        } catch (JsonProcessingException e) {
			            e.printStackTrace();
			        }
				
//				JSONObject json = new JSONObject(map_clickhouse);
				System.out.println("json::::: "+json);
				String uuid = "jsonfile" + UUID.randomUUID().toString().split("-")[0]; 
				 String path = "C:/Users/valsys/Desktop/trapti_ma'am code/javatest/"+uuid+".json";

			        try (PrintWriter out = new PrintWriter(new FileWriter(path))) {
			            out.write(json);
			        } catch (Exception e) {
			            e.printStackTrace();
			        }

			} catch (Exception e) {
				System.out.println("selectdata error:::" + e.toString());
				// TODO: handle exception
			}
			return map_clickhouse;
		}

/////////////////////// cafebot-gpt  insert		
//	    
////	    @Transactional
//		@RequestMapping(value = "/filterproperties/updateImageaugmentation", method = RequestMethod.POST)
//		public @ResponseBody String updateImageaugmentation(@RequestParam String fileid, String componentid, String modeltype,
//				String id, String prevcomponentid,
//				String projectid,String mode, String modelselect,
//				float temperature,int maximum_length,float top_p,float freqpenalty_compress, float prespenalty_compress, int bestof_compress,
//				String starttext,String probabilities,String restarttext,String fieldlist,String selectedField,
//				String ddlField, String textcolid,
//				HttpServletRequest req) throws SQLException {
//
//			int userid = 1;
//			if (req.getSession().getAttribute("currentSessionUserID") != null) 
//			{
//				userid = Integer.parseInt(req.getSession().getAttribute("currentSessionUserID").toString());
//			}
//					    
//			System.out.println("projectid---" + projectid);
//			
//			String q = "INSERT INTO fileflow (fileid, modeltype, " + " componentid, prevcomponentid,"
//					+ "rotatedegreewise,blurringmethod,flip,"
//					+ "contrast,brightness,grey,"
//					+ "resize,aspect_ratio,resize_width,resize_height,modcolname,"
//					+ "cronexpression,compress,pxper,"					
//					+ "resize_method,"+ "kwidth,"				
//					+ "shape_name,userid) VALUES(" + fileid + ",'" + modeltype + "','"
//					+ componentid + "','" + prevcomponentid + "','" + projectid + "','" + mode + "','" + modelselect + "',"
//					+ ""+ temperature+ "," + maximum_length + ","+top_p+","
//					+ ""+freqpenalty_compress+","+prespenalty_compress+","+bestof_compress+","
//					+ "'"+starttext+"','"+probabilities+"','" +restarttext+ "','"+fieldlist+"','"+selectedField+"',"
//					+ "'"+ddlField+"','"+textcolid+"',"				
//					+ "'ImageaugmentationShape',"+userid+")";
//			
//			System.out.println("updateImageaugmentation q -" + q);
//			
//
//			if (!id.equals("0")) {
//				
//				q = "update fileflow set modeltype = '" + modeltype + "',prevcomponentid='" + prevcomponentid+ "',"
//						+ "rotatedegreewise='" + projectid + "'" + ","
//						+ "blurringmethod='" + mode + "',flip='"+modelselect+"',contrast="+temperature+","
//						+ "brightness="+maximum_length+",grey="+top_p+","
//						+ "resize="+freqpenalty_compress+",aspect_ratio="+prespenalty_compress+","
//						+ "resize_width='"+bestof_compress+"',resize_height='"+starttext+"',"
//						+ "modcolname='"+ probabilities + "'  " + ","
//						+ "cronexpression='"+ restarttext + "',"
//						+ "compress='"+fieldlist+"',pxper='"+selectedField+"',"						
//						+ "resize_method='"+ddlField+"' "
//						+ ",kwidth='"+textcolid+"',"													
//						+ "userid="+userid+"   where id=" + id;
//				
//			}
//
//			System.out.println("updateImageaugmentation Q-" + q);
//
//			SQLQuery query = sessionFactory.getCurrentSession().createSQLQuery(q);
//			query.executeUpdate();
//
//			return "";
//		}
//	   
//		
/////////////////////// cafebot-gpt  update		
//		
//		
////		@Transactional
//		@RequestMapping(value = "/executeImageAugmentation", method = RequestMethod.POST)
//		public @ResponseBody ResponseEntity<String> executeImageAugmentation(@RequestParam String fileid,
//				String componentid, String init, String id, String tablename, int publish, String projectid,String prevcomponentid,
//				
//				String mode, String modelselect,
//				float temperature,int maximum_length,float top_p,float freqpenalty_compress, float prespenalty_compress, int bestof_compress,
//				String starttext,String probabilities,String restarttext,String fieldlist,String selectedField,
//				String ddlField,String textcolid,			
//				HttpServletRequest req)
//	
//						throws SQLException {
//			String returnvalue = "[]";
//			System.out.println("...................");
//			Writer fileWriter;
//			System.out.println("String projectid, ---" + projectid);
//			DataHelper dh = new DataHelper();
//			try {
//				int userid = Integer.parseInt(req.getSession().getAttribute("currentSessionUserID").toString());
//				int status = dh.getPyQueue(Integer.parseInt(id));
//				System.out.println("status--" + status);
//				if (status == 99 || status < 0 || status >= 2) {
//
//					String qfileflow = "update fileflow set modeltype = '" + tablename + "',prevcomponentid='"
//							+ prevcomponentid + "'," + "rotatedegreewise='" + projectid + "'" + ","
//							+ "blurringmethod='" + mode + "',flip='" + modelselect + "',contrast='" + temperature + "',"
//							+ "brightness='" + maximum_length + "',grey=" + top_p + "," + "resize='" + freqpenalty_compress + "',aspect_ratio='"
//							+ prespenalty_compress + "'," + "resize_width='" + bestof_compress + "',resize_height='" + starttext
//							+ "'," + "modcolname='" + probabilities + "'  " + "," + "cronexpression='" + restarttext + "',"
//							+ "compress='" + fieldlist + "',pxper='" + selectedField + "',"									
//							+ "resize_method='" + ddlField + "'  ,"
//							+ "kwidth='" + textcolid + "',	"								
//							+ "userid="+userid+"   where id=" + id;
//					
//					System.out.println("qfileflow executeImageAugmentation Q " + qfileflow);
//					SQLQuery queryfileflow = sessionFactory.getCurrentSession().createSQLQuery(qfileflow);
//					queryfileflow.executeUpdate();
//
//					String sql = returnJsonQuery(Integer.parseInt(fileid), componentid, "table");
//
//					String sqlheader = sql.split("##")[0];
//					sqlheader = sqlheader.replace("[", "").replace("]", "");
//					String jsonquery = sql.split("##")[1];
//
//					// String jsonquery = returnJsonQuery(Integer.parseInt(fileid), componentid,
//					// "table").split("##")[1];
//
//					Jsonhelper jsonhelp = new Jsonhelper();
//					String returnValue = jsonhelp.getJsonQueryClickHouse(jsonquery);
//					returnValue = returnValue.replace("\'", "#_#");
//
//					returnValue = returnValue;
//					returnValue = returnValue.replaceAll("[\\t\\n\\r]+", " ");
//					returnValue = returnValue.trim().replace("\\n", "").replaceAll(System.lineSeparator(), " ");
//
//					System.out.println("returnValue---" + returnValue);
//
//					String header = "_helper.sqlheader=" + "'" + sqlheader + "'";
//					String query = "_helper.sql=" + "'" + returnValue;
//
//					if (publish == 0)
//						query = query + " limit 100'";
//					else
//						query = query + "'";
//
//					Seconds secondsSinceEpoch = null;
//
//					if (publish == 1) {
//
//						int versionDb = dh.getFilenamewithversion(tablename);
//						String filename = "";
//
//						if (versionDb >= 0) {
//							versionDb = versionDb + 1;
//							filename = tablename.trim() + "_V" + versionDb;
//						} else {
//							versionDb = 0;
//							filename = tablename.trim();// + "_V"+versionDb;
//						}
//
//						String startdate = Constants.Paths.Folders.TIMESTART;
//
//						try {
//
//							secondsSinceEpoch = Seconds.secondsBetween(DateTime.parse(startdate), DateTime.now());
//						} catch (Exception e) {
//							logger.error(e);
//							System.out.println("cluster:::" + e.getMessage());
//						}
//
//					
//
//						// if (status == 99)
//						{
//							String q = "INSERT INTO filename (fileid, fname,version,userid,projectid,ismedia,isdata,mediatype) VALUES('"
//									+ secondsSinceEpoch.toString() + "','" + filename + "'," + versionDb + "," + userid
//									+ "," + projectid + ",1,0,'Image')";
//
//							System.out.println("filename ::::::" + q);
//
//							SQLQuery q1 = sessionFactory.getCurrentSession().createSQLQuery(q);
//							q1.executeUpdate();
//						}
//
//					}
//
//					String msg = "";
//					int flag = 0; // update or insert 0-update 1-insert
//					String tname = secondsSinceEpoch.toString();
//
//					String imagepath = Constants.Paths.Folders.Imagepathfor_conversion;
//
//					String res = imagepath + secondsSinceEpoch.toString();
//
//					System.out.println("image conversion :::::" + res);
//
//					String bots_path_download = res;
//
//					System.out.println("bots_path_download--" + bots_path_download);
//					File clusterdir = new File(bots_path_download);
//					clusterdir.mkdir();
//
//					if (status == 99) {
//						msg = dh.updateQueueForPy(Integer.parseInt(id), 0, "ImageAugmentation", flag, tname,
//								bots_path_download, Integer.parseInt(projectid),""); // insert
//					} else {
//						flag = 1;
//						msg = dh.updateQueueForPy(Integer.parseInt(id), 0, "ImageAugmentation", flag, tname,
//								bots_path_download, Integer.parseInt(projectid),""); // insert
//					}
//
//					String publishpath = "";
//
//					String ppath = Constants.Paths.Folders.publish_path;
//
//					if (publish == 0)
//						publishpath = "";
//					else
//						publishpath = "'" + ppath + secondsSinceEpoch.toString() + ".csv'\n";
//
//					// orignal
//					// publishpath = "'"+ ppath+ secondsSinceEpoch.toString() + ".csv'\n";
//					// publishpath = "publishpath=" + "'/opt/cafebot/nifi/in/" +
//					// secondsSinceEpoch.toString() + ".csv'\n";
//
//					String fileflowid = "_helper.fileid=" + "\"" + id + "\"";
//
//					String publish_path = "_helper.publish_nifi_path=" + publishpath;
//					String generated_tablename = "_helper.generated_tablename='" + secondsSinceEpoch.toString() + "'";
//					String tablename_ = "_helper.tablename=\"" + tablename + "\"";
//
//					String base_path = "base_path=" + "\"" + Constants.Paths.Folders.base_path + "\"";
//
//					String code = "import _helper\n" + fileflowid + "\n" + header + "\n" + query + "\n" + base_path + "\n"
//							+ generated_tablename + "\n" + tablename_;
//
//					// remove publish_path = "_helper.publish_nifi_path="+publishpath; because it is
//					// maintain in helper.py file
//					// String code = "import
//					// _helper\n"+fileflowid+"\n"+header+"\n"+query+"\n"+base_path+"\n"+publish_path+"\n"+generated_tablename+"\n"+tablename_;
//
//					// ################################
//					// params = {"cluster_column" : "cluster","min_k" : 2,"init" :
//					// "plus_plus","max_k" : 21, "nfolds" : 15, "max_iterations" : 10000}
//					// _helper.tablename='my new cluster file'
//
//					String filealias = "imgAugment_";
//					String bots_path = Constants.Paths.Folders.bots_path;
//					fileWriter = new FileWriter(bots_path + filealias + secondsSinceEpoch.toString() + ".py");
//					// fileWriter = new FileWriter(bots_path+"cluster.py");
//
//					// fileWriter.write(py);
//					// fileWriter.close();
//
//					// read and write file start
//
//					String dirpathmain = servletContext.getRealPath("/");
//
//					String pyfile_path = dirpathmain + Constants.Paths.Folders.REPOSITORY_PATH + "ImgAugment.py";
//					System.out.println("pyfile_path--" + pyfile_path);
//					String filetempname = filealias + secondsSinceEpoch.toString() + ".py";
//					String temppath = bots_path + filealias + secondsSinceEpoch.toString() + ".py";
//
//					String content = "";
//
//					BufferedReader reader = new BufferedReader(new FileReader(pyfile_path));
//					StringBuilder stringBuilder = new StringBuilder();
//					String line = null;
//					String ls = System.getProperty("line.separator");
//					while ((line = reader.readLine()) != null) {
//						stringBuilder.append(line);
//						stringBuilder.append(ls);
//					}
//					// delete the last new line separator
//					stringBuilder.deleteCharAt(stringBuilder.length() - 1);
//					reader.close();
//
//					content = stringBuilder.toString();
//
//					String rotatedegreewise_ = "True";
//					if (rotatedegreewise.equalsIgnoreCase("0")) {
//						rotatedegreewise_ = "False";
//					}
//
//					String flip_ = "True";
//					if (flip.equalsIgnoreCase("flip_none")) {
//						flip_ = "False";
//					}
//
//					String contrast_ = "True";
//					if (contrast.equalsIgnoreCase("-1")) {
//						contrast_ = "False";
//					}
//
//					String bright_ = "True";
//					if (brightness.equalsIgnoreCase("-128")) {
//						bright_ = "False";
//					}
//
//					String grey_ = "True";
//					if (grey == 0) {
//						grey_ = "False";
//					}
//
//					String blur_ = "True";
//					if (blurringmethod.equalsIgnoreCase("0")) {
//						blur_ = "False";
//					}
//
//					String compress_ = "True";
//					if (compress.equalsIgnoreCase("-1")) {
//						compress_ = "False";
//					}
//
//					String pxper_ = "True"; // percentage
//					if (pxper.equalsIgnoreCase("px")) {
//						pxper_ = "False";
//					}
//
//					String pxper_2 = "True"; // pixel
//					if (pxper.equalsIgnoreCase("per")) {
//						pxper_2 = "False";
//					}
//
//					if (flip_.equalsIgnoreCase("false")) {
//						flip = "";
//					}
//					String alphbeta = "";
//
//					if (contrast_.equalsIgnoreCase("true")) {
//						alphbeta = "alpha";
//						// brightness = "0";
//					} else if (bright_.equalsIgnoreCase("true")) {
//						alphbeta = "beta";
//						// contrast = "0";
//					}
//
//					String asp_ratio = "ON";
//					if (aspect_ratio == 0) {
//						asp_ratio = "OFF";
//					}
//
//					if (resize_height.equalsIgnoreCase("")) {
//						resize_height = "\'\'";
//					}
//
//					if (resize_width.equalsIgnoreCase("")) {
//						resize_width = "\'\'";
//					}
//
//					if (rotatedegreewise_.equalsIgnoreCase("false")) {
//						rotatedegreewise = "";
//					}
//
//					if (resize == 0) {
//						pxper_2 = "False";
//						pxper_ = "False";
//					}
//
//					String readfoldername = "";
//					List<ai.easydata.mhub.models.File> flList = new ArrayList<>();
//					flList = filedao.getList(Integer.parseInt(fileid));
//
//					ai.easydata.mhub.models.File fl = new ai.easydata.mhub.models.File();
//
//					if (flList.size() > 0) {
//						fl = flList.get(0);
//						readfoldername = fl.getTablename();
//					}
//
//					bots_path_download = secondsSinceEpoch.toString();
//
//					// String kwidth,String kheight,String ksize,String sigmacolor,String
//					// sigmaspace,
//
//					String params_blur_ksize_w_h = "";
//
//					if (blurringmethod.equalsIgnoreCase("Sharpen")) {
//
//					} else if (blurringmethod.equalsIgnoreCase("averaging")) {
//
//						params_blur_ksize_w_h = "params_blur['avg_ksize_w']=" + kwidth + "  \nparams_blur['avg_ksize_h']="
//								+ kheight + " ";
//					} else if (blurringmethod.equalsIgnoreCase("Gaussian Blurring")) {
//
//						params_blur_ksize_w_h = "params_blur['g_ksize_w']=" + kwidth + "  \nparams_blur['g_ksize_h']="
//								+ kheight + " ";
//					} else if (blurringmethod.equalsIgnoreCase("Median Blurring")) {
//
//						params_blur_ksize_w_h = "params_blur['ksize']=" + ksize + " ";
//					} else if (blurringmethod.equalsIgnoreCase("Bilateral Blurring")) {
//
//						params_blur_ksize_w_h = "params_blur['sigmaclr']=" + sigmacolor + " \nparams_blur['sigmaspace']="
//								+ sigmaspace + " ";
//					}
//
//					String output = code + "\n" + "params_frames =  {\'rotate_degree_wise\' : " + rotatedegreewise_ + ","
//							+ "\n" + "\'horizontal_vertical\' : " + flip_ + "," + "\'contrast\' : " + contrast_
//							+ ",\'bright\' : " + bright_ + "," + " \'rgbtogray\' : " + grey_ + ", \'rem_blur\' : " + blur_
//							+ "," + "" + "\'compress\': " + compress_ + "," + " \'resize_w_h\' : " + pxper_2
//							+ ",\'resize_prec\':" + pxper_ + "," + "\'down_path\':\'" + bots_path_download
//							+ "\',\"up_path\":\"" + readfoldername + "\" }\n";
//
//					// + "\'column\':" + textcolid + ",
//					// down_path -- generated path
//					// read path -- up_path
//
//					String params_blur = "params_blur={\'method\':\'" + blurringmethod + "\'}";
//					String params_h_v = "params_h_v={\'flipcode_v\':1,\'flipcode_h\':0,\'h_v\':\'" + flip + "\'}";
//					String params_contrast = "params_contrast={\'alpha\':" + contrast + ",'beta':" + brightness + "} ";
//					String params_rotate = "params_rotate={\'rotate_degree_wise\':" + rotatedegreewise + "}";
//					String params_compress = "params_compress={\'compress\':" + compress + "} ";
//					String params_resize_prec = "params_resize_prec={\'inter\':" + resize_method + ",\'asp_ratio\':\'"
//							+ asp_ratio + "\',\'width_prec\':" + resize_width + ",\'height_prec\':" + resize_height + "}";
//					String params_resize_w_h = "params_resize_w_h={\'inter\':" + resize_method + ",\'asp_ratio\':\'"
//							+ asp_ratio + "\',\'width\':" + resize_width + ",\'height\':" + resize_height + "}";
//
//					if (blur_.equalsIgnoreCase("False")) {
//						params_blur = "";
//					}
//
//					if (flip_.equalsIgnoreCase("False")) {
//						params_h_v = "";
//					}
//
//					if (contrast_.equalsIgnoreCase("False") && bright_.equalsIgnoreCase("False")) {
//
//						params_contrast = "";
//					}
//					if (rotatedegreewise_.equalsIgnoreCase("False")) {
//						params_rotate = "";
//					}
//
//					if (compress_.equalsIgnoreCase("False")) {
//						params_compress = "";
//					}
//
//					if (resize == 0) {
//						params_resize_prec = "";
//						params_resize_w_h = "";
//					} else {
//						if (pxper_2.equalsIgnoreCase("false")) {
//							params_resize_w_h = "";
//						}
//						if (pxper_.equalsIgnoreCase("false")) {
//							params_resize_prec = "";
//						}
//
//					}
//
//					String output_1 = "\n" + "params =  {\"id\":" + id + ",\"tablename\":\"" + tname + "\" } \n" + ""
//							+ params_blur + "\n" + params_h_v + "\n" + params_contrast + "\n" + params_rotate + "\n"
//							+ params_compress + "\n" + params_resize_prec + "\n" + params_resize_w_h + "\n"
//							+ params_blur_ksize_w_h;
//
//					/*
//					 * # params_frames={'rotate_degree_wise':False,'horizontal_vertical':False,'
//					 * contrast':False,'bright':False,'rgbtogray':False,'rem_blur':False,'compress':
//					 * False,'resize_prec':True,'resize_w_h':True,'column':'images','down_path':r'D:
//					 * \eda\imgg\blur\out'}
//					 * 
//					 * 
//					 * # params_blur={'method':'sharpen'} #
//					 * params_h_v={'flipcode_v':0,'flipcode_h':1,'h_v':'vertical'} #
//					 * params_contrast={'alpha': 2,'beta':0} #
//					 * params_rotate={'rotate_degree_wise':cv2.cv2.ROTATE_90_COUNTERCLOCKWISE} #
//					 * params_compress={'compress':60} #
//					 * params_resize_prec={'inter':cv2.INTER_AREA,'asp_ratio':'OFF','width_prec':10,
//					 * 'height_prec':20} #
//					 * params_resize_w_h={'inter':cv2.INTER_AREA,'asp_ratio':'OFF','width':100,'
//					 * height':''}
//					 */
//
//					// Writer fileWriter;
//					// fileWriter = new
//					// FileWriter(bots_path+filealias+secondsSinceEpoch.toString()+".py");
//
//					fileWriter.write("\n" + "import cv2" + "\n" + output + "\n" + output_1 + "\n" + content);
//					fileWriter.close();
//
//					// end
//
//					// returnvalue = GETPyResponse("");
//					System.out.println("..start execute image augmentation");
//					String path = bots_path + filealias + secondsSinceEpoch.toString() + ".py";
//					// String path = bots_path + "cluster.py";
//
//					String pypath = Constants.Paths.Folders.pypath;
//					ProcessBuilder pb = new ProcessBuilder(pypath, path).inheritIO();
//					Process p = pb.start();
//					System.out.println("..stop execute image augmentation");
//
//				} else {
//					returnvalue = "1"; // running
//				}
//
//			} catch (IOException e) {
//				returnvalue = "";
//				System.out.println(e.getMessage());
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//
//			return new ResponseEntity<>(returnvalue, HttpStatus.OK);
//		}
//	    
//		
/////////////////////// cafebot-gpt  get		
//		
//		
////		@Transactional
//		@RequestMapping(value = "/filterproperties/readImageAugmentation", method = RequestMethod.GET)
//		public @ResponseBody List<FilterProperties> readImageAugmentation(Integer fileid, String componentid) {
//			// System.out.println("fileid-:" + fileid + ":" + componentid);
//
//			
//			String sql = "select id, modeltype, buildquery,modcolname,cronexpression,"
//					+ "rotatedegreewise,blurringmethod,flip,contrast,brightness,grey,"
//					+ "resize,aspect_ratio,resize_width,resize_height,compress,pxper,resize_method,"
//					+ "kwidth,kheight,ksize,sigmacolor,sigmaspace "
//					+ "from fileflow where fileid="	+ fileid + " and componentid='" + componentid + "'";
//			
//			
////			String sql = "select id, modeltype, prevcomponentid,projectid,mode,"
////					+ "modelselect,temperature,maximum_length,top_p,freqpenalty_compress,prespenalty_compress,"
////					+ "bestof_compress,starttext,probabilities,restarttext,ddlFieldSequence,selectedField,userid,"				
////					+ "from fileflow where fileid="	+ fileid + " and componentid='" + componentid + "'";
//			
//			System.out.println("readImageAugmentation:::::::"+sql);
//			
//			SQLQuery queryPrepare = sessionFactory.getCurrentSession().createSQLQuery(sql);
//
//			List<Object[]> rows = queryPrepare.list();
//
//			List<FilterProperties> ls = new ArrayList<>();// = filterprop.getList(fileid,componentid);
//
//			for (Object[] row : rows) {
//				FilterProperties fp = new FilterProperties();
//				fp.setId(Integer.parseInt(row[0].toString()));
//				fp.setModeltype(row[1].toString());
//				// System.out.println("op"+row[3].toString());
//				
//				if (row[2] != null) 
//				{
//					fp.setBuildquery(row[2].toString());     
//				}
//				else 
//				{
//					fp.setBuildquery("");
//				}     
//
//				System.out.println("setBuildquery-----");
//				if (row[3] != null) {
//					fp.setModcolname(row[3].toString());
//				} else {
//					fp.setModcolname("");
//				}
//				
//				if (row[4] != null) {
//					fp.setCronexpression(row[4].toString());
//				} else {
//					fp.setCronexpression("");
//				}
//				
//				System.out.println("setCronexpression-----");
//				
//				if (row[5] != null) {
//					fp.setRotatedegreewise(row[5].toString());
//				} else {
//					fp.setRotatedegreewise("");
//				}
//				
//				
//				if (row[6] != null) {
//					fp.setBlurringmethod(row[6].toString());
//				} else {
//					fp.setBlurringmethod("");
//				}
//				
//				if (row[7] != null) {
//					fp.setFlip(row[7].toString());
//				} else {
//					fp.setFlip("");
//				}
//				
//				
//				if (row[8] != null) {
//					fp.setContrast(row[8].toString());
//				} else {
//					fp.setContrast("");
//				}
//				
//				if (row[9] != null) {
//					fp.setBrightness(row[9].toString());
//				} else {
//					fp.setBrightness("");
//				}
//				
//				
//				if (row[10] != null) {
//					fp.setGrey( Integer.parseInt(row[10].toString()) );
//				} else {
//					fp.setGrey(0);
//				}
//				
//				if (row[11] != null) {
//					fp.setResize(Integer.parseInt(row[11].toString()) );
//				} else {
//					fp.setResize(0);
//				}
//				
//				
//				if (row[12] != null) {
//					fp.setAspect_ratio(Integer.parseInt(row[12].toString()) );
//				} else {
//					fp.setAspect_ratio(0);
//				}
//				
//				
//				if (row[13] != null) {
//					fp.setResize_width(row[13].toString() );
//				} else {
//					fp.setResize_width("");
//				}
//				
//				if (row[14] != null) {
//					fp.setResize_height(row[14].toString() );
//				} else {
//					fp.setResize_height("");
//				}
//				
//				
//				if (row[15] != null) {
//					fp.setCompress(row[15].toString());
//				} else {
//					fp.setCompress("");
//				}
//		
//				if (row[16] != null) {
//					fp.setPxper(row[16].toString());
//				} else {
//					fp.setPxper("");
//				}
//				
//				if (row[17] != null) {
//					fp.setResize_method(row[17].toString());
//				} else {
//					fp.setResize_method("");
//				}
//				
//				
//				
//				if (row[18] != null) {
//					fp.setKwidth(row[18].toString());
//				} 
//				else 
//				{
//					fp.setKwidth("");
//				}
//				if (row[19] != null) {
//					fp.setKheight(row[19].toString());
//				} 
//				else 
//				{
//					fp.setKheight("");
//				}
//				if (row[20] != null) {
//					fp.setKsize(row[20].toString());
//				} 
//				else 
//				{
//					fp.setKsize("");
//				}
//				
//				if (row[21] != null) {
//					fp.setSigmacolor(row[21].toString());
//				} 
//				else 
//				{
//					fp.setSigmacolor("");
//				}
//				if (row[22] != null) {
//					fp.setSigmaspace(row[22].toString());
//				} 
//				else 
//				{
//					fp.setSigmaspace("");
//				}
//				
//				
//				
//				
//				ls.add(fp);
//			}
//			System.out.println(ls.toString());
//			return ls;
//		}
//	 
/////////////////////// milvus-insert get		
//		
////		@Transactional
//		@RequestMapping(value = "/filterproperties/readTypeConversion", method = RequestMethod.GET)
//		public @ResponseBody List<FilterProperties> readTypeConversion(Integer fileid, String componentid) {
//			// System.out.println("fileid-:" + fileid + ":" + componentid);
//
//			
//			String sql = "select id, modeltype, buildquery,modcolname,cronexpression,"
//					+ "rotatedegreewise,blurringmethod,flip,contrast,brightness,grey,"
//					+ "resize,aspect_ratio,resize_width,resize_height,compress,pxper,resize_method,"
//					+ "kwidth,kheight,ksize,sigmacolor,sigmaspace "
//					+ "from fileflow where fileid="	+ fileid + " and componentid='" + componentid + "'";
//			
//			
////			String sql = "select id, modeltype, prevcomponentid,projectid,mode,"
////					+ "modelselect,temperature,maximum_length,top_p,freqpenalty_compress,prespenalty_compress,"
////					+ "bestof_compress,starttext,probabilities,restarttext,ddlFieldSequence,selectedField,userid,"				
////					+ "from fileflow where fileid="	+ fileid + " and componentid='" + componentid + "'";
//			
//			System.out.println("readImageAugmentation:::::::"+sql);
//			
//			SQLQuery queryPrepare = sessionFactory.getCurrentSession().createSQLQuery(sql);
//
//			List<Object[]> rows = queryPrepare.list();
//
//			List<FilterProperties> ls = new ArrayList<>();// = filterprop.getList(fileid,componentid);
//
//			for (Object[] row : rows) {
//				FilterProperties fp = new FilterProperties();
//				fp.setId(Integer.parseInt(row[0].toString()));
//				fp.setModeltype(row[1].toString());
//				// System.out.println("op"+row[3].toString());
//				
//				if (row[2] != null) 
//				{
//					fp.setBuildquery(row[2].toString());     
//				}
//				else 
//				{
//					fp.setBuildquery("");
//				}     
//
//				System.out.println("setBuildquery-----");
//				if (row[3] != null) {
//					fp.setModcolname(row[3].toString());
//				} else {
//					fp.setModcolname("");
//				}
//				
//				if (row[4] != null) {
//					fp.setCronexpression(row[4].toString());
//				} else {
//					fp.setCronexpression("");
//				}
//				
//				System.out.println("setCronexpression-----");
//				
//				if (row[5] != null) {
//					fp.setRotatedegreewise(row[5].toString());
//				} else {
//					fp.setRotatedegreewise("");
//				}
//				
//				
//				if (row[6] != null) {
//					fp.setBlurringmethod(row[6].toString());
//				} else {
//					fp.setBlurringmethod("");
//				}
//				
//				if (row[7] != null) {
//					fp.setFlip(row[7].toString());
//				} else {
//					fp.setFlip("");
//				}
//				
//				
//				if (row[8] != null) {
//					fp.setContrast(row[8].toString());
//				} else {
//					fp.setContrast("");
//				}
//				
//				if (row[9] != null) {
//					fp.setBrightness(row[9].toString());
//				} else {
//					fp.setBrightness("");
//				}
//				
//				
//				if (row[10] != null) {
//					fp.setGrey( Integer.parseInt(row[10].toString()) );
//				} else {
//					fp.setGrey(0);
//				}
//				
//				if (row[11] != null) {
//					fp.setResize(Integer.parseInt(row[11].toString()) );
//				} else {
//					fp.setResize(0);
//				}
//				
//				
//				if (row[12] != null) {
//					fp.setAspect_ratio(Integer.parseInt(row[12].toString()) );
//				} else {
//					fp.setAspect_ratio(0);
//				}
//				
//				
//				if (row[13] != null) {
//					fp.setResize_width(row[13].toString() );
//				} else {
//					fp.setResize_width("");
//				}
//				
//				if (row[14] != null) {
//					fp.setResize_height(row[14].toString() );
//				} else {
//					fp.setResize_height("");
//				}
//				
//				
//				if (row[15] != null) {
//					fp.setCompress(row[15].toString());
//				} else {
//					fp.setCompress("");
//				}
//		
//				if (row[16] != null) {
//					fp.setPxper(row[16].toString());
//				} else {
//					fp.setPxper("");
//				}
//				
//				if (row[17] != null) {
//					fp.setResize_method(row[17].toString());
//				} else {
//					fp.setResize_method("");
//				}
//				
//				
//				
//				if (row[18] != null) {
//					fp.setKwidth(row[18].toString());
//				} 
//				else 
//				{
//					fp.setKwidth("");
//				}
//				if (row[19] != null) {
//					fp.setKheight(row[19].toString());
//				} 
//				else 
//				{
//					fp.setKheight("");
//				}
//				if (row[20] != null) {
//					fp.setKsize(row[20].toString());
//				} 
//				else 
//				{
//					fp.setKsize("");
//				}
//				
//				if (row[21] != null) {
//					fp.setSigmacolor(row[21].toString());
//				} 
//				else 
//				{
//					fp.setSigmacolor("");
//				}
//				if (row[22] != null) {
//					fp.setSigmaspace(row[22].toString());
//				} 
//				else 
//				{
//					fp.setSigmaspace("");
//				}
//				
//				
//				
//				
//				ls.add(fp);
//			}
//			System.out.println(ls.toString());
//			return ls;
//		}
//	 
//		
/////////////////////// milvus-insert update		
//		
////		@Transactional
//		@RequestMapping(value = "/executeTypeConversion", method = RequestMethod.POST)
//		public @ResponseBody ResponseEntity<String> executeTypeConversion(@RequestParam String fileid,
//				String componentid, String init, String id, String tablename, int publish, String projectid,String targetcolid,
//				
//				String textcolid, String embedding_model,
//				String batch_size,String vector_database,String vector_database_connection,String name_text, String index_type, String metric_type,
//				String existing_collection,String overwrite_collection,String name,
//
//				HttpServletRequest req)
//						
//						throws SQLException {
//			String returnvalue = "[]";
//			System.out.println("...................");
//			Writer fileWriter;
//			System.out.println("String projectid, ---" + projectid);
//			DataHelper dh = new DataHelper();
//			try {
//				int userid = Integer.parseInt(req.getSession().getAttribute("currentSessionUserID").toString());
//				int status = dh.getPyQueue(Integer.parseInt(id));
//				System.out.println("status--" + status);
//				if (status == 99 || status < 0 || status >= 2) {
//
////					String fileid,
////					String componentid, String init, String id, String tablename, String publish, String projectid,String targetcolid,
////					
////					String targetcolid, String embedding_model,
////					int batch_size,String vector_database,String vector_database_connection,String name_text, String index_type, String metric_type,
////					String existing_collection,String overwrite_collection,String name,
//					
//					
//					
//					
//					String qfileflow = "update fileflow set modeltype = '" + tablename + "',prevcomponentid='"
//							+ componentid + "'," + "rotatedegreewise='" + projectid + "'" + ","
//							+ "blurringmethod='" + targetcolid + "',flip='" + targetcolid + "',contrast='" + embedding_model + "',"
//							+ "brightness='" + batch_size + "',grey='" + vector_database + "'," + "resize='" + vector_database_connection + "',aspect_ratio='"
//							+ name_text + "'," + "resize_width='" + index_type + "',resize_height='" + metric_type
//							+ "'," + "modcolname='" + existing_collection + "'  " + "," + "cronexpression='" + overwrite_collection + "',"
//							+ "compress='" + name + "',"				
//							+ "userid="+userid+"   where id=" + id;
//					
////					String qfileflow =  "update fileflow set modeltype = '" + tablename + "',prevcomponentid='" + prevcomponentid+ "',"
////							+ "projectid='" + projectid + "'" + ","
////							+ "mode='" + mode + "',modelselect='"+modelselect+"',temperature='"+temperature+"',"
////							+ "maximum_length='"+maximum_length+"',top_p="+top_p+","
////							+ "freqpenalty_compress="+freqpenalty_compress+",prespenalty_compress="+prespenalty_compress+","
////							+ "bestof_compress='"+bestof_compress+"',starttext='"+starttext+"',"
////							+ "probabilities='"+ probabilities + "'  " + ","
////							+ "restarttext='"+ restarttext + "',"
////							+ "ddlFieldSequence='"+ddlFieldSequence+"',selectedField='"+selectedField+"',userid="+userid+"   where id=" + id;
//					
//					
//
//					System.out.println("qfileflow executeImageAugmentation Q " + qfileflow);
//					SQLQuery queryfileflow = sessionFactory.getCurrentSession().createSQLQuery(qfileflow);
//					queryfileflow.executeUpdate();
//
//					String sql = returnJsonQuery(Integer.parseInt(fileid), componentid, "table");
//
//					String sqlheader = sql.split("##")[0];
//					sqlheader = sqlheader.replace("[", "").replace("]", "");
//					String jsonquery = sql.split("##")[1];
//
//					// String jsonquery = returnJsonQuery(Integer.parseInt(fileid), componentid,
//					// "table").split("##")[1];
//
//					Jsonhelper jsonhelp = new Jsonhelper();
//					String returnValue = jsonhelp.getJsonQueryClickHouse(jsonquery);
//					returnValue = returnValue.replace("\'", "#_#");
//
//					returnValue = returnValue;
//					returnValue = returnValue.replaceAll("[\\t\\n\\r]+", " ");
//					returnValue = returnValue.trim().replace("\\n", "").replaceAll(System.lineSeparator(), " ");
//
//					System.out.println("returnValue---" + returnValue);
//
//					String header = "_helper.sqlheader=" + "'" + sqlheader + "'";
//					String query = "_helper.sql=" + "'" + returnValue;
//
//					if (publish == 0)
//						query = query + " limit 100'";
//					else
//						query = query + "'";
//
//					Seconds secondsSinceEpoch = null;
//
//					if (publish == 1) {
//
//						int versionDb = dh.getFilenamewithversion(tablename);
//						String filename = "";
//
//						if (versionDb >= 0) {
//							versionDb = versionDb + 1;
//							filename = tablename.trim() + "_V" + versionDb;
//						} else {
//							versionDb = 0;
//							filename = tablename.trim();// + "_V"+versionDb;
//						}
//
//						String startdate = Constants.Paths.Folders.TIMESTART;
//
//						try {
//
//							secondsSinceEpoch = Seconds.secondsBetween(DateTime.parse(startdate), DateTime.now());
//						} catch (Exception e) {
//							logger.error(e);
//							System.out.println("cluster:::" + e.getMessage());
//						}
//
//					
//
//						// if (status == 99)
//						{
//							String q = "INSERT INTO filename (fileid, fname,version,userid,projectid,ismedia,isdata,mediatype) VALUES('"
//									+ secondsSinceEpoch.toString() + "','" + filename + "'," + versionDb + "," + userid
//									+ "," + projectid + ",1,0,'Image')";
//
//							System.out.println("filename ::::::" + q);
//
//							SQLQuery q1 = sessionFactory.getCurrentSession().createSQLQuery(q);
//							q1.executeUpdate();
//						}
//
//					}
//
//					String msg = "";
//					int flag = 0; // update or insert 0-update 1-insert
//					String tname = secondsSinceEpoch.toString();
//
//					String imagepath = Constants.Paths.Folders.Imagepathfor_conversion;
//
//					String res = imagepath + secondsSinceEpoch.toString();
//
//					System.out.println("image conversion :::::" + res);
//
//					String bots_path_download = res;
//
//					System.out.println("bots_path_download--" + bots_path_download);
//					File clusterdir = new File(bots_path_download);
//					clusterdir.mkdir();
//
//					if (status == 99) {
//						msg = dh.updateQueueForPy(Integer.parseInt(id), 0, "ImageAugmentation", flag, tname,
//								bots_path_download, Integer.parseInt(projectid),""); // insert
//					} else {
//						flag = 1;
//						msg = dh.updateQueueForPy(Integer.parseInt(id), 0, "ImageAugmentation", flag, tname,
//								bots_path_download, Integer.parseInt(projectid),""); // insert
//					}
//
//					String publishpath = "";
//
//					String ppath = Constants.Paths.Folders.publish_path;
//
//					if (publish == 0)
//						publishpath = "";
//					else
//						publishpath = "'" + ppath + secondsSinceEpoch.toString() + ".csv'\n";
//
//					// orignal
//					// publishpath = "'"+ ppath+ secondsSinceEpoch.toString() + ".csv'\n";
//					// publishpath = "publishpath=" + "'/opt/cafebot/nifi/in/" +
//					// secondsSinceEpoch.toString() + ".csv'\n";
//
//					String fileflowid = "_helper.fileid=" + "\"" + id + "\"";
//
//					String publish_path = "_helper.publish_nifi_path=" + publishpath;
//					String generated_tablename = "_helper.generated_tablename='" + secondsSinceEpoch.toString() + "'";
//					String tablename_ = "_helper.tablename=\"" + tablename + "\"";
//
//					String base_path = "base_path=" + "\"" + Constants.Paths.Folders.base_path + "\"";
//
//					String code = "import _helper\n" + fileflowid + "\n" + header + "\n" + query + "\n" + base_path + "\n"
//							+ generated_tablename + "\n" + tablename_;
//
//					// remove publish_path = "_helper.publish_nifi_path="+publishpath; because it is
//					// maintain in helper.py file
//					// String code = "import
//					// _helper\n"+fileflowid+"\n"+header+"\n"+query+"\n"+base_path+"\n"+publish_path+"\n"+generated_tablename+"\n"+tablename_;
//
//					// ################################
//					// params = {"cluster_column" : "cluster","min_k" : 2,"init" :
//					// "plus_plus","max_k" : 21, "nfolds" : 15, "max_iterations" : 10000}
//					// _helper.tablename='my new cluster file'
//
//					String filealias = "imgAugment_";
//					String bots_path = Constants.Paths.Folders.bots_path;
//					fileWriter = new FileWriter(bots_path + filealias + secondsSinceEpoch.toString() + ".py");
//					// fileWriter = new FileWriter(bots_path+"cluster.py");
//
//					// fileWriter.write(py);
//					// fileWriter.close();
//
//					// read and write file start
//
//					String dirpathmain = servletContext.getRealPath("/");
//
//					String pyfile_path = dirpathmain + Constants.Paths.Folders.REPOSITORY_PATH + "ImgAugment.py";
//					System.out.println("pyfile_path--" + pyfile_path);
//					String filetempname = filealias + secondsSinceEpoch.toString() + ".py";
//					String temppath = bots_path + filealias + secondsSinceEpoch.toString() + ".py";
//
//					String content = "";
//
//					BufferedReader reader = new BufferedReader(new FileReader(pyfile_path));
//					StringBuilder stringBuilder = new StringBuilder();
//					String line = null;
//					String ls = System.getProperty("line.separator");
//					while ((line = reader.readLine()) != null) {
//						stringBuilder.append(line);
//						stringBuilder.append(ls);
//					}
//					// delete the last new line separator
//					stringBuilder.deleteCharAt(stringBuilder.length() - 1);
//					reader.close();
//
//					content = stringBuilder.toString();
//
//					String rotatedegreewise_ = "True";
//					if (rotatedegreewise.equalsIgnoreCase("0")) {
//						rotatedegreewise_ = "False";
//					}
//
//					String flip_ = "True";
//					if (flip.equalsIgnoreCase("flip_none")) {
//						flip_ = "False";
//					}
//
//					String contrast_ = "True";
//					if (contrast.equalsIgnoreCase("-1")) {
//						contrast_ = "False";
//					}
//
//					String bright_ = "True";
//					if (brightness.equalsIgnoreCase("-128")) {
//						bright_ = "False";
//					}
//
//					String grey_ = "True";
//					if (grey == 0) {
//						grey_ = "False";
//					}
//
//					String blur_ = "True";
//					if (blurringmethod.equalsIgnoreCase("0")) {
//						blur_ = "False";
//					}
//
//					String compress_ = "True";
//					if (compress.equalsIgnoreCase("-1")) {
//						compress_ = "False";
//					}
//
//					String pxper_ = "True"; // percentage
//					if (pxper.equalsIgnoreCase("px")) {
//						pxper_ = "False";
//					}
//
//					String pxper_2 = "True"; // pixel
//					if (pxper.equalsIgnoreCase("per")) {
//						pxper_2 = "False";
//					}
//
//					if (flip_.equalsIgnoreCase("false")) {
//						flip = "";
//					}
//					String alphbeta = "";
//
//					if (contrast_.equalsIgnoreCase("true")) {
//						alphbeta = "alpha";
//						// brightness = "0";
//					} else if (bright_.equalsIgnoreCase("true")) {
//						alphbeta = "beta";
//						// contrast = "0";
//					}
//
//					String asp_ratio = "ON";
//					if (aspect_ratio == 0) {
//						asp_ratio = "OFF";
//					}
//
//					if (resize_height.equalsIgnoreCase("")) {
//						resize_height = "\'\'";
//					}
//
//					if (resize_width.equalsIgnoreCase("")) {
//						resize_width = "\'\'";
//					}
//
//					if (rotatedegreewise_.equalsIgnoreCase("false")) {
//						rotatedegreewise = "";
//					}
//
//					if (resize == 0) {
//						pxper_2 = "False";
//						pxper_ = "False";
//					}
//
//					String readfoldername = "";
//					List<ai.easydata.mhub.models.File> flList = new ArrayList<>();
//					flList = filedao.getList(Integer.parseInt(fileid));
//
//					ai.easydata.mhub.models.File fl = new ai.easydata.mhub.models.File();
//
//					if (flList.size() > 0) {
//						fl = flList.get(0);
//						readfoldername = fl.getTablename();
//					}
//
//					bots_path_download = secondsSinceEpoch.toString();
//
//					// String kwidth,String kheight,String ksize,String sigmacolor,String
//					// sigmaspace,
//
//					String params_blur_ksize_w_h = "";
//
//					if (blurringmethod.equalsIgnoreCase("Sharpen")) {
//
//					} else if (blurringmethod.equalsIgnoreCase("averaging")) {
//
//						params_blur_ksize_w_h = "params_blur['avg_ksize_w']=" + kwidth + "  \nparams_blur['avg_ksize_h']="
//								+ kheight + " ";
//					} else if (blurringmethod.equalsIgnoreCase("Gaussian Blurring")) {
//
//						params_blur_ksize_w_h = "params_blur['g_ksize_w']=" + kwidth + "  \nparams_blur['g_ksize_h']="
//								+ kheight + " ";
//					} else if (blurringmethod.equalsIgnoreCase("Median Blurring")) {
//
//						params_blur_ksize_w_h = "params_blur['ksize']=" + ksize + " ";
//					} else if (blurringmethod.equalsIgnoreCase("Bilateral Blurring")) {
//
//						params_blur_ksize_w_h = "params_blur['sigmaclr']=" + sigmacolor + " \nparams_blur['sigmaspace']="
//								+ sigmaspace + " ";
//					}
//
//					String output = code + "\n" + "params_frames =  {\'rotate_degree_wise\' : " + rotatedegreewise_ + ","
//							+ "\n" + "\'horizontal_vertical\' : " + flip_ + "," + "\'contrast\' : " + contrast_
//							+ ",\'bright\' : " + bright_ + "," + " \'rgbtogray\' : " + grey_ + ", \'rem_blur\' : " + blur_
//							+ "," + "" + "\'compress\': " + compress_ + "," + " \'resize_w_h\' : " + pxper_2
//							+ ",\'resize_prec\':" + pxper_ + "," + "\'down_path\':\'" + bots_path_download
//							+ "\',\"up_path\":\"" + readfoldername + "\" }\n";
//
//					// + "\'column\':" + textcolid + ",
//					// down_path -- generated path
//					// read path -- up_path
//
//					String params_blur = "params_blur={\'method\':\'" + blurringmethod + "\'}";
//					String params_h_v = "params_h_v={\'flipcode_v\':1,\'flipcode_h\':0,\'h_v\':\'" + flip + "\'}";
//					String params_contrast = "params_contrast={\'alpha\':" + contrast + ",'beta':" + brightness + "} ";
//					String params_rotate = "params_rotate={\'rotate_degree_wise\':" + rotatedegreewise + "}";
//					String params_compress = "params_compress={\'compress\':" + compress + "} ";
//					String params_resize_prec = "params_resize_prec={\'inter\':" + resize_method + ",\'asp_ratio\':\'"
//							+ asp_ratio + "\',\'width_prec\':" + resize_width + ",\'height_prec\':" + resize_height + "}";
//					String params_resize_w_h = "params_resize_w_h={\'inter\':" + resize_method + ",\'asp_ratio\':\'"
//							+ asp_ratio + "\',\'width\':" + resize_width + ",\'height\':" + resize_height + "}";
//
//					if (blur_.equalsIgnoreCase("False")) {
//						params_blur = "";
//					}
//
//					if (flip_.equalsIgnoreCase("False")) {
//						params_h_v = "";
//					}
//
//					if (contrast_.equalsIgnoreCase("False") && bright_.equalsIgnoreCase("False")) {
//
//						params_contrast = "";
//					}
//					if (rotatedegreewise_.equalsIgnoreCase("False")) {
//						params_rotate = "";
//					}
//
//					if (compress_.equalsIgnoreCase("False")) {
//						params_compress = "";
//					}
//
//					if (resize == 0) {
//						params_resize_prec = "";
//						params_resize_w_h = "";
//					} else {
//						if (pxper_2.equalsIgnoreCase("false")) {
//							params_resize_w_h = "";
//						}
//						if (pxper_.equalsIgnoreCase("false")) {
//							params_resize_prec = "";
//						}
//
//					}
//
//					String output_1 = "\n" + "params =  {\"id\":" + id + ",\"tablename\":\"" + tname + "\" } \n" + ""
//							+ params_blur + "\n" + params_h_v + "\n" + params_contrast + "\n" + params_rotate + "\n"
//							+ params_compress + "\n" + params_resize_prec + "\n" + params_resize_w_h + "\n"
//							+ params_blur_ksize_w_h;
//
//					/*
//					 * # params_frames={'rotate_degree_wise':False,'horizontal_vertical':False,'
//					 * contrast':False,'bright':False,'rgbtogray':False,'rem_blur':False,'compress':
//					 * False,'resize_prec':True,'resize_w_h':True,'column':'images','down_path':r'D:
//					 * \eda\imgg\blur\out'}
//					 * 
//					 * 
//					 * # params_blur={'method':'sharpen'} #
//					 * params_h_v={'flipcode_v':0,'flipcode_h':1,'h_v':'vertical'} #
//					 * params_contrast={'alpha': 2,'beta':0} #
//					 * params_rotate={'rotate_degree_wise':cv2.cv2.ROTATE_90_COUNTERCLOCKWISE} #
//					 * params_compress={'compress':60} #
//					 * params_resize_prec={'inter':cv2.INTER_AREA,'asp_ratio':'OFF','width_prec':10,
//					 * 'height_prec':20} #
//					 * params_resize_w_h={'inter':cv2.INTER_AREA,'asp_ratio':'OFF','width':100,'
//					 * height':''}
//					 */
//
//					// Writer fileWriter;
//					// fileWriter = new
//					// FileWriter(bots_path+filealias+secondsSinceEpoch.toString()+".py");
//
//					fileWriter.write("\n" + "import cv2" + "\n" + output + "\n" + output_1 + "\n" + content);
//					fileWriter.close();
//
//					// end
//
//					// returnvalue = GETPyResponse("");
//					System.out.println("..start execute image augmentation");
//					String path = bots_path + filealias + secondsSinceEpoch.toString() + ".py";
//					// String path = bots_path + "cluster.py";
//
//					String pypath = Constants.Paths.Folders.pypath;
//					ProcessBuilder pb = new ProcessBuilder(pypath, path).inheritIO();
//					Process p = pb.start();
//					System.out.println("..stop execute image augmentation");
//
//				} else {
//					returnvalue = "1"; // running
//				}
//
//			} catch (IOException e) {
//				returnvalue = "";
//				System.out.println(e.getMessage());
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//
//			return new ResponseEntity<>(returnvalue, HttpStatus.OK);
//		}
//	 
//		
//		
/////////////////////// milvus-insert insert		
//
////	    @Transactional
//		@RequestMapping(value = "/filterproperties/updateTypeConversion", method = RequestMethod.POST)
//		public @ResponseBody String updateTypeConversion(@RequestParam 
//				String fileid, String componentid, String modeltype,
//				String id, String prevcomponentid,
//				String projectid,				
//				String targetcolid, String textcolid,
//				String embedding_model,String batch_size,String vector_database,String vector_database_connection, String name_text,
//				String index_type,
//				String metric_type,String existing_collection,String overwrite_collection,String name,
//				HttpServletRequest req) throws SQLException {
//
//			int userid = 1;
//			if (req.getSession().getAttribute("currentSessionUserID") != null) 
//			{
//				userid = Integer.parseInt(req.getSession().getAttribute("currentSessionUserID").toString());
//			}
//					    
//			System.out.println("projectid---" + projectid);
//			
//			String q = "INSERT INTO fileflow (fileid, modeltype, " + " componentid, prevcomponentid,"
//					+ "rotatedegreewise,blurringmethod,flip,"
//					+ "contrast,brightness,grey,"
//					+ "resize,aspect_ratio,resize_width,resize_height,modcolname,"
//					+ "cronexpression,compress,pxper,"
//					+ "shape_name,userid) VALUES(" + fileid + ",'" + modeltype + "','"
//					+ componentid + "','" + prevcomponentid + "','" + projectid + "','" + targetcolid + "','" + textcolid + "',"
//					+ "'"+ embedding_model+ "','" + batch_size + "','"+vector_database+"','"
//					+ ""+vector_database_connection+"','"+name_text+"','"+index_type+"',"
//					+ "'"+metric_type+"','"+existing_collection+"','" +overwrite_collection+ "','"+name+"',"						
//					+ "'ImageaugmentationShape',"+userid+")";
//
//			System.out.println("updateImageaugmentation q -" + q);
//			
//
//			if (!id.equals("0")) {
//				
//				q = "update fileflow set modeltype = '" + modeltype + "',prevcomponentid='" + prevcomponentid+ "',"
//						+ "rotatedegreewise='" + projectid + "'" + ","
//						+ "blurringmethod='" + targetcolid + "',flip='"+textcolid+"',contrast='"+embedding_model+"',"
//						+ "brightness='"+batch_size+"',grey="+vector_database+","
//						+ "resize="+vector_database_connection+",aspect_ratio="+name_text+","
//						+ "resize_width='"+index_type+"',resize_height='"+metric_type+"',"
//						+ "modcolname='"+ existing_collection + "'  " + ","
//						+ "cronexpression='"+ overwrite_collection + "',"
//						+ "compress='"+name+"',"
//								
//						
////						+ "resize_method='"+resize_method+"' "
////						+ ",kwidth='"+kwidth+"', kheight='"+kheight+"',"
////						+ "ksize='"+ksize+"',sigmacolor='"+sigmacolor+"'"
////						+ ",sigmaspace='"+sigmaspace+"',"
//							
//						
//						+ "userid="+userid+"   where id=" + id;
//				
//				
////				q = "update fileflow set modeltype = '" + modeltype + "',prevcomponentid='" + prevcomponentid+ "',"
////						+ "projectid='" + projectid + "'" + ","
////						+ "mode='" + mode + "',modelselect='"+modelselect+"',temperature='"+temperature+"',"
////						+ "maximum_length='"+maximum_length+"',top_p="+top_p+","
////						+ "freqpenalty_compress="+freqpenalty_compress+",prespenalty_compress="+prespenalty_compress+","
////						+ "bestof_compress='"+bestof_compress+"',starttext='"+starttext+"',"
////						+ "probabilities='"+ probabilities + "'  " + ","
////						+ "restarttext='"+ restarttext + "',"
////						+ "ddlFieldSequence='"+ddlFieldSequence+"',selectedField='"+selectedField+"',userid="+userid+"   where id=" + id;
//			}
//
//			System.out.println("updateImageaugmentation Q-" + q);
//
//			SQLQuery query = sessionFactory.getCurrentSession().createSQLQuery(q);
//			query.executeUpdate();
//
//			return "";
//		}
//
//		
//		
/////////////////////// milvus-search get				
//
////		@Transactional
//		@RequestMapping(value = "/filterproperties/readTypeConversion_milvssearch", method = RequestMethod.GET)
//		public @ResponseBody List<FilterProperties> readTypeConversion_milvssearch(Integer fileid, String componentid) {
//			// System.out.println("fileid-:" + fileid + ":" + componentid);
//
//			
//			String sql = "select id, modeltype, buildquery,modcolname,cronexpression,"
//					+ "rotatedegreewise,blurringmethod,flip,contrast,brightness,grey,"
//					+ "resize,aspect_ratio,resize_width,resize_height,compress,pxper,resize_method,"
//					+ "kwidth,kheight,ksize,sigmacolor,sigmaspace "
//					+ "from fileflow where fileid="	+ fileid + " and componentid='" + componentid + "'";
//
//			System.out.println("readImageAugmentation:::::::"+sql);
//			
//			SQLQuery queryPrepare = sessionFactory.getCurrentSession().createSQLQuery(sql);
//
//			List<Object[]> rows = queryPrepare.list();
//
//			List<FilterProperties> ls = new ArrayList<>();// = filterprop.getList(fileid,componentid);
//
//			for (Object[] row : rows) {
//				FilterProperties fp = new FilterProperties();
//				fp.setId(Integer.parseInt(row[0].toString()));
//				fp.setModeltype(row[1].toString());
//				// System.out.println("op"+row[3].toString());
//				
//				if (row[2] != null) 
//				{
//					fp.setBuildquery(row[2].toString());     
//				}
//				else 
//				{
//					fp.setBuildquery("");
//				}     
//
//				System.out.println("setBuildquery-----");
//				if (row[3] != null) {
//					fp.setModcolname(row[3].toString());
//				} else {
//					fp.setModcolname("");
//				}
//				
//				if (row[4] != null) {
//					fp.setCronexpression(row[4].toString());
//				} else {
//					fp.setCronexpression("");
//				}
//				
//				System.out.println("setCronexpression-----");
//				
//				if (row[5] != null) {
//					fp.setRotatedegreewise(row[5].toString());
//				} else {
//					fp.setRotatedegreewise("");
//				}
//				
//				
//				if (row[6] != null) {
//					fp.setBlurringmethod(row[6].toString());
//				} else {
//					fp.setBlurringmethod("");
//				}
//				
//				if (row[7] != null) {
//					fp.setFlip(row[7].toString());
//				} else {
//					fp.setFlip("");
//				}
//				
//				
//				if (row[8] != null) {
//					fp.setContrast(row[8].toString());
//				} else {
//					fp.setContrast("");
//				}
//				
//				if (row[9] != null) {
//					fp.setBrightness(row[9].toString());
//				} else {
//					fp.setBrightness("");
//				}
//				
//				
//				if (row[10] != null) {
//					fp.setGrey( Integer.parseInt(row[10].toString()) );
//				} else {
//					fp.setGrey(0);
//				}
//				
//				if (row[11] != null) {
//					fp.setResize(Integer.parseInt(row[11].toString()) );
//				} else {
//					fp.setResize(0);
//				}
//				
//				
//				if (row[12] != null) {
//					fp.setAspect_ratio(Integer.parseInt(row[12].toString()) );
//				} else {
//					fp.setAspect_ratio(0);
//				}
//				
//				
//				if (row[13] != null) {
//					fp.setResize_width(row[13].toString() );
//				} else {
//					fp.setResize_width("");
//				}
//				
//				if (row[14] != null) {
//					fp.setResize_height(row[14].toString() );
//				} else {
//					fp.setResize_height("");
//				}
//				
//				
//				if (row[15] != null) {
//					fp.setCompress(row[15].toString());
//				} else {
//					fp.setCompress("");
//				}
//		
//				if (row[16] != null) {
//					fp.setPxper(row[16].toString());
//				} else {
//					fp.setPxper("");
//				}
//				
//				if (row[17] != null) {
//					fp.setResize_method(row[17].toString());
//				} else {
//					fp.setResize_method("");
//				}
//				
//				
//				
//				if (row[18] != null) {
//					fp.setKwidth(row[18].toString());
//				} 
//				else 
//				{
//					fp.setKwidth("");
//				}
//				if (row[19] != null) {
//					fp.setKheight(row[19].toString());
//				} 
//				else 
//				{
//					fp.setKheight("");
//				}
//				if (row[20] != null) {
//					fp.setKsize(row[20].toString());
//				} 
//				else 
//				{
//					fp.setKsize("");
//				}
//				
//				if (row[21] != null) {
//					fp.setSigmacolor(row[21].toString());
//				} 
//				else 
//				{
//					fp.setSigmacolor("");
//				}
//				if (row[22] != null) {
//					fp.setSigmaspace(row[22].toString());
//				} 
//				else 
//				{
//					fp.setSigmaspace("");
//				}
//				
//				
//				
//				
//				ls.add(fp);
//			}
//			System.out.println(ls.toString());
//			return ls;
//		}
//
//		
/////////////////////// milvus-search update		
//		
////		@Transactional
//		@RequestMapping(value = "/executeTypeConversion_milvssearch", method = RequestMethod.POST)
//		public @ResponseBody ResponseEntity<String> executeTypeConversion_milvssearch(@RequestParam
//				String fileid,
//				String componentid, String init, String id, String tablename, int publish, String projectid,String targetcolid,				
//				String textcolid, String embedding_model,
//				String batch_size,String vector_database,String vector_database_connection,String name_text, String limit, String threshold,
//				String batches,String expression,
//				HttpServletRequest req)throws SQLException {
//			String returnvalue = "[]";
//			System.out.println("...................");
//			Writer fileWriter;
//			System.out.println("String projectid, ---" + projectid);
//			DataHelper dh = new DataHelper();
//			try {
//				int userid = Integer.parseInt(req.getSession().getAttribute("currentSessionUserID").toString());
//				int status = dh.getPyQueue(Integer.parseInt(id));
//				System.out.println("status--" + status);
//				if (status == 99 || status < 0 || status >= 2) {
//				
//					String qfileflow = "update fileflow set modeltype = '" + tablename + "',prevcomponentid='"
//							+ componentid + "'," + "rotatedegreewise='" + projectid + "'" + ","
//							+ "blurringmethod='" + targetcolid + "',flip='" + textcolid + "',contrast='" + embedding_model + "',"
//							+ "brightness='" + batch_size + "',grey='" + vector_database + "'," + "resize='" + vector_database_connection + "',aspect_ratio='"
//							+ name_text + "'," + "resize_width='" + limit + "',resize_height='" + threshold
//							+ "'," + "modcolname='" + batches + "'  " + "," + "cronexpression='" + expression + "',"				
//							+ "userid="+userid+"   where id=" + id;
//					
//					System.out.println("qfileflow executeImageAugmentation Q " + qfileflow);
//					SQLQuery queryfileflow = sessionFactory.getCurrentSession().createSQLQuery(qfileflow);
//					queryfileflow.executeUpdate();
//
//					String sql = returnJsonQuery(Integer.parseInt(fileid), componentid, "table");
//
//					String sqlheader = sql.split("##")[0];
//					sqlheader = sqlheader.replace("[", "").replace("]", "");
//					String jsonquery = sql.split("##")[1];
//
//					// String jsonquery = returnJsonQuery(Integer.parseInt(fileid), componentid,
//					// "table").split("##")[1];
//
//					Jsonhelper jsonhelp = new Jsonhelper();
//					String returnValue = jsonhelp.getJsonQueryClickHouse(jsonquery);
//					returnValue = returnValue.replace("\'", "#_#");
//
//					returnValue = returnValue;
//					returnValue = returnValue.replaceAll("[\\t\\n\\r]+", " ");
//					returnValue = returnValue.trim().replace("\\n", "").replaceAll(System.lineSeparator(), " ");
//
//					System.out.println("returnValue---" + returnValue);
//
//					String header = "_helper.sqlheader=" + "'" + sqlheader + "'";
//					String query = "_helper.sql=" + "'" + returnValue;
//
//					if (publish == 0)
//						query = query + " limit 100'";
//					else
//						query = query + "'";
//
//					Seconds secondsSinceEpoch = null;
//
//					if (publish == 1) {
//
//						int versionDb = dh.getFilenamewithversion(tablename);
//						String filename = "";
//
//						if (versionDb >= 0) {
//							versionDb = versionDb + 1;
//							filename = tablename.trim() + "_V" + versionDb;
//						} else {
//							versionDb = 0;
//							filename = tablename.trim();// + "_V"+versionDb;
//						}
//
//						String startdate = Constants.Paths.Folders.TIMESTART;
//
//						try {
//
//							secondsSinceEpoch = Seconds.secondsBetween(DateTime.parse(startdate), DateTime.now());
//						} catch (Exception e) {
//							logger.error(e);
//							System.out.println("cluster:::" + e.getMessage());
//						}
//
//					
//
//						// if (status == 99)
//						{
//							String q = "INSERT INTO filename (fileid, fname,version,userid,projectid,ismedia,isdata,mediatype) VALUES('"
//									+ secondsSinceEpoch.toString() + "','" + filename + "'," + versionDb + "," + userid
//									+ "," + projectid + ",1,0,'Image')";
//
//							System.out.println("filename ::::::" + q);
//
//							SQLQuery q1 = sessionFactory.getCurrentSession().createSQLQuery(q);
//							q1.executeUpdate();
//						}
//
//					}
//
//					String msg = "";
//					int flag = 0; // update or insert 0-update 1-insert
//					String tname = secondsSinceEpoch.toString();
//
//					String imagepath = Constants.Paths.Folders.Imagepathfor_conversion;
//
//					String res = imagepath + secondsSinceEpoch.toString();
//
//					System.out.println("image conversion :::::" + res);
//
//					String bots_path_download = res;
//
//					System.out.println("bots_path_download--" + bots_path_download);
//					File clusterdir = new File(bots_path_download);
//					clusterdir.mkdir();
//
//					if (status == 99) {
//						msg = dh.updateQueueForPy(Integer.parseInt(id), 0, "ImageAugmentation", flag, tname,
//								bots_path_download, Integer.parseInt(projectid),""); // insert
//					} else {
//						flag = 1;
//						msg = dh.updateQueueForPy(Integer.parseInt(id), 0, "ImageAugmentation", flag, tname,
//								bots_path_download, Integer.parseInt(projectid),""); // insert
//					}
//
//					String publishpath = "";
//
//					String ppath = Constants.Paths.Folders.publish_path;
//
//					if (publish == 0)
//						publishpath = "";
//					else
//						publishpath = "'" + ppath + secondsSinceEpoch.toString() + ".csv'\n";
//
//					// orignal
//					// publishpath = "'"+ ppath+ secondsSinceEpoch.toString() + ".csv'\n";
//					// publishpath = "publishpath=" + "'/opt/cafebot/nifi/in/" +
//					// secondsSinceEpoch.toString() + ".csv'\n";
//
//					String fileflowid = "_helper.fileid=" + "\"" + id + "\"";
//
//					String publish_path = "_helper.publish_nifi_path=" + publishpath;
//					String generated_tablename = "_helper.generated_tablename='" + secondsSinceEpoch.toString() + "'";
//					String tablename_ = "_helper.tablename=\"" + tablename + "\"";
//
//					String base_path = "base_path=" + "\"" + Constants.Paths.Folders.base_path + "\"";
//
//					String code = "import _helper\n" + fileflowid + "\n" + header + "\n" + query + "\n" + base_path + "\n"
//							+ generated_tablename + "\n" + tablename_;
//
//					// remove publish_path = "_helper.publish_nifi_path="+publishpath; because it is
//					// maintain in helper.py file
//					// String code = "import
//					// _helper\n"+fileflowid+"\n"+header+"\n"+query+"\n"+base_path+"\n"+publish_path+"\n"+generated_tablename+"\n"+tablename_;
//
//					// ################################
//					// params = {"cluster_column" : "cluster","min_k" : 2,"init" :
//					// "plus_plus","max_k" : 21, "nfolds" : 15, "max_iterations" : 10000}
//					// _helper.tablename='my new cluster file'
//
//					String filealias = "imgAugment_";
//					String bots_path = Constants.Paths.Folders.bots_path;
//					fileWriter = new FileWriter(bots_path + filealias + secondsSinceEpoch.toString() + ".py");
//					// fileWriter = new FileWriter(bots_path+"cluster.py");
//
//					// fileWriter.write(py);
//					// fileWriter.close();
//
//					// read and write file start
//
//					String dirpathmain = servletContext.getRealPath("/");
//
//					String pyfile_path = dirpathmain + Constants.Paths.Folders.REPOSITORY_PATH + "ImgAugment.py";
//					System.out.println("pyfile_path--" + pyfile_path);
//					String filetempname = filealias + secondsSinceEpoch.toString() + ".py";
//					String temppath = bots_path + filealias + secondsSinceEpoch.toString() + ".py";
//
//					String content = "";
//
//					BufferedReader reader = new BufferedReader(new FileReader(pyfile_path));
//					StringBuilder stringBuilder = new StringBuilder();
//					String line = null;
//					String ls = System.getProperty("line.separator");
//					while ((line = reader.readLine()) != null) {
//						stringBuilder.append(line);
//						stringBuilder.append(ls);
//					}
//					// delete the last new line separator
//					stringBuilder.deleteCharAt(stringBuilder.length() - 1);
//					reader.close();
//
//					content = stringBuilder.toString();
//
//					String rotatedegreewise_ = "True";
//					if (rotatedegreewise.equalsIgnoreCase("0")) {
//						rotatedegreewise_ = "False";
//					}
//
//					String flip_ = "True";
//					if (flip.equalsIgnoreCase("flip_none")) {
//						flip_ = "False";
//					}
//
//					String contrast_ = "True";
//					if (contrast.equalsIgnoreCase("-1")) {
//						contrast_ = "False";
//					}
//
//					String bright_ = "True";
//					if (brightness.equalsIgnoreCase("-128")) {
//						bright_ = "False";
//					}
//
//					String grey_ = "True";
//					if (grey == 0) {
//						grey_ = "False";
//					}
//
//					String blur_ = "True";
//					if (blurringmethod.equalsIgnoreCase("0")) {
//						blur_ = "False";
//					}
//
//					String compress_ = "True";
//					if (compress.equalsIgnoreCase("-1")) {
//						compress_ = "False";
//					}
//
//					String pxper_ = "True"; // percentage
//					if (pxper.equalsIgnoreCase("px")) {
//						pxper_ = "False";
//					}
//
//					String pxper_2 = "True"; // pixel
//					if (pxper.equalsIgnoreCase("per")) {
//						pxper_2 = "False";
//					}
//
//					if (flip_.equalsIgnoreCase("false")) {
//						flip = "";
//					}
//					String alphbeta = "";
//
//					if (contrast_.equalsIgnoreCase("true")) {
//						alphbeta = "alpha";
//						// brightness = "0";
//					} else if (bright_.equalsIgnoreCase("true")) {
//						alphbeta = "beta";
//						// contrast = "0";
//					}
//
//					String asp_ratio = "ON";
//					if (aspect_ratio == 0) {
//						asp_ratio = "OFF";
//					}
//
//					if (resize_height.equalsIgnoreCase("")) {
//						resize_height = "\'\'";
//					}
//
//					if (resize_width.equalsIgnoreCase("")) {
//						resize_width = "\'\'";
//					}
//
//					if (rotatedegreewise_.equalsIgnoreCase("false")) {
//						rotatedegreewise = "";
//					}
//
//					if (resize == 0) {
//						pxper_2 = "False";
//						pxper_ = "False";
//					}
//
//					String readfoldername = "";
//					List<ai.easydata.mhub.models.File> flList = new ArrayList<>();
//					flList = filedao.getList(Integer.parseInt(fileid));
//
//					ai.easydata.mhub.models.File fl = new ai.easydata.mhub.models.File();
//
//					if (flList.size() > 0) {
//						fl = flList.get(0);
//						readfoldername = fl.getTablename();
//					}
//
//					bots_path_download = secondsSinceEpoch.toString();
//
//					// String kwidth,String kheight,String ksize,String sigmacolor,String
//					// sigmaspace,
//
//					String params_blur_ksize_w_h = "";
//
//					if (blurringmethod.equalsIgnoreCase("Sharpen")) {
//
//					} else if (blurringmethod.equalsIgnoreCase("averaging")) {
//
//						params_blur_ksize_w_h = "params_blur['avg_ksize_w']=" + kwidth + "  \nparams_blur['avg_ksize_h']="
//								+ kheight + " ";
//					} else if (blurringmethod.equalsIgnoreCase("Gaussian Blurring")) {
//
//						params_blur_ksize_w_h = "params_blur['g_ksize_w']=" + kwidth + "  \nparams_blur['g_ksize_h']="
//								+ kheight + " ";
//					} else if (blurringmethod.equalsIgnoreCase("Median Blurring")) {
//
//						params_blur_ksize_w_h = "params_blur['ksize']=" + ksize + " ";
//					} else if (blurringmethod.equalsIgnoreCase("Bilateral Blurring")) {
//
//						params_blur_ksize_w_h = "params_blur['sigmaclr']=" + sigmacolor + " \nparams_blur['sigmaspace']="
//								+ sigmaspace + " ";
//					}
//
//					String output = code + "\n" + "params_frames =  {\'rotate_degree_wise\' : " + rotatedegreewise_ + ","
//							+ "\n" + "\'horizontal_vertical\' : " + flip_ + "," + "\'contrast\' : " + contrast_
//							+ ",\'bright\' : " + bright_ + "," + " \'rgbtogray\' : " + grey_ + ", \'rem_blur\' : " + blur_
//							+ "," + "" + "\'compress\': " + compress_ + "," + " \'resize_w_h\' : " + pxper_2
//							+ ",\'resize_prec\':" + pxper_ + "," + "\'down_path\':\'" + bots_path_download
//							+ "\',\"up_path\":\"" + readfoldername + "\" }\n";
//
//					// + "\'column\':" + textcolid + ",
//					// down_path -- generated path
//					// read path -- up_path
//
//					String params_blur = "params_blur={\'method\':\'" + blurringmethod + "\'}";
//					String params_h_v = "params_h_v={\'flipcode_v\':1,\'flipcode_h\':0,\'h_v\':\'" + flip + "\'}";
//					String params_contrast = "params_contrast={\'alpha\':" + contrast + ",'beta':" + brightness + "} ";
//					String params_rotate = "params_rotate={\'rotate_degree_wise\':" + rotatedegreewise + "}";
//					String params_compress = "params_compress={\'compress\':" + compress + "} ";
//					String params_resize_prec = "params_resize_prec={\'inter\':" + resize_method + ",\'asp_ratio\':\'"
//							+ asp_ratio + "\',\'width_prec\':" + resize_width + ",\'height_prec\':" + resize_height + "}";
//					String params_resize_w_h = "params_resize_w_h={\'inter\':" + resize_method + ",\'asp_ratio\':\'"
//							+ asp_ratio + "\',\'width\':" + resize_width + ",\'height\':" + resize_height + "}";
//
//					if (blur_.equalsIgnoreCase("False")) {
//						params_blur = "";
//					}
//
//					if (flip_.equalsIgnoreCase("False")) {
//						params_h_v = "";
//					}
//
//					if (contrast_.equalsIgnoreCase("False") && bright_.equalsIgnoreCase("False")) {
//
//						params_contrast = "";
//					}
//					if (rotatedegreewise_.equalsIgnoreCase("False")) {
//						params_rotate = "";
//					}
//
//					if (compress_.equalsIgnoreCase("False")) {
//						params_compress = "";
//					}
//
//					if (resize == 0) {
//						params_resize_prec = "";
//						params_resize_w_h = "";
//					} else {
//						if (pxper_2.equalsIgnoreCase("false")) {
//							params_resize_w_h = "";
//						}
//						if (pxper_.equalsIgnoreCase("false")) {
//							params_resize_prec = "";
//						}
//
//					}
//
//					String output_1 = "\n" + "params =  {\"id\":" + id + ",\"tablename\":\"" + tname + "\" } \n" + ""
//							+ params_blur + "\n" + params_h_v + "\n" + params_contrast + "\n" + params_rotate + "\n"
//							+ params_compress + "\n" + params_resize_prec + "\n" + params_resize_w_h + "\n"
//							+ params_blur_ksize_w_h;
//
//					/*
//					 * # params_frames={'rotate_degree_wise':False,'horizontal_vertical':False,'
//					 * contrast':False,'bright':False,'rgbtogray':False,'rem_blur':False,'compress':
//					 * False,'resize_prec':True,'resize_w_h':True,'column':'images','down_path':r'D:
//					 * \eda\imgg\blur\out'}
//					 * 
//					 * 
//					 * # params_blur={'method':'sharpen'} #
//					 * params_h_v={'flipcode_v':0,'flipcode_h':1,'h_v':'vertical'} #
//					 * params_contrast={'alpha': 2,'beta':0} #
//					 * params_rotate={'rotate_degree_wise':cv2.cv2.ROTATE_90_COUNTERCLOCKWISE} #
//					 * params_compress={'compress':60} #
//					 * params_resize_prec={'inter':cv2.INTER_AREA,'asp_ratio':'OFF','width_prec':10,
//					 * 'height_prec':20} #
//					 * params_resize_w_h={'inter':cv2.INTER_AREA,'asp_ratio':'OFF','width':100,'
//					 * height':''}
//					 */
//
//					// Writer fileWriter;
//					// fileWriter = new
//					// FileWriter(bots_path+filealias+secondsSinceEpoch.toString()+".py");
//
//					fileWriter.write("\n" + "import cv2" + "\n" + output + "\n" + output_1 + "\n" + content);
//					fileWriter.close();
//
//					// end
//
//					// returnvalue = GETPyResponse("");
//					System.out.println("..start execute image augmentation");
//					String path = bots_path + filealias + secondsSinceEpoch.toString() + ".py";
//					// String path = bots_path + "cluster.py";
//
//					String pypath = Constants.Paths.Folders.pypath;
//					ProcessBuilder pb = new ProcessBuilder(pypath, path).inheritIO();
//					Process p = pb.start();
//					System.out.println("..stop execute image augmentation");
//
//				} else {
//					returnvalue = "1"; // running
//				}
//
//			} catch (IOException e) {
//				returnvalue = "";
//				System.out.println(e.getMessage());
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//
//			return new ResponseEntity<>(returnvalue, HttpStatus.OK);
//		}
//	 
//		
//		
/////////////////////// milvus-search insert
//
////	    @Transactional
//		@RequestMapping(value = "/filterproperties/updateTypeConversion_milvssearch", method = RequestMethod.POST)
//		public @ResponseBody String updateTypeConversion_milvssearch(@RequestParam 
//				String fileid, String componentid, String modeltype,
//				String id, String prevcomponentid,
//				String projectid,				
//				String targetcolid, String textcolid,
//				String embedding_model,String batch_size,String vector_database,String vector_database_connection, String name_text,
//				String limit,
//				String threshold,String batches,String expression,				
//				HttpServletRequest req) throws SQLException {
//
//			int userid = 1;
//			if (req.getSession().getAttribute("currentSessionUserID") != null) 
//			{
//				userid = Integer.parseInt(req.getSession().getAttribute("currentSessionUserID").toString());
//			}
//					    
//			System.out.println("projectid---" + projectid);
//			
//			String q = "INSERT INTO fileflow (fileid, modeltype, " + " componentid, prevcomponentid,"
//					+ "rotatedegreewise,blurringmethod,flip,"
//					+ "contrast,brightness,grey,resize"
//					+ ",aspect_ratio,resize_width,resize_height,modcolname,"
//					+ "cronexpression,"
//					+ "shape_name,userid) VALUES(" + fileid + ",'" + modeltype + "','"
//					+ componentid + "','" + prevcomponentid + "','" + projectid + "','" + targetcolid + "','" + textcolid + "',"
//					+ "'"+ embedding_model+ "','" + batch_size + "','"+vector_database+"','"
//					+ ""+vector_database_connection+"','"+name_text+"','"+limit+"',"
//					+ "'"+threshold+"','"+batches+"','" +expression+ "',"						
//					+ "'ImageaugmentationShape',"+userid+")";
//			
//			
//			System.out.println("updateImageaugmentation q -" + q);
//			
//			if (!id.equals("0")) {
//				
//				q = "update fileflow set modeltype = '" + modeltype + "',prevcomponentid='" + prevcomponentid+ "',"
//						+ "rotatedegreewise='" + projectid + "'" + ","
//						+ "blurringmethod='" + targetcolid + "',flip='"+textcolid+"',contrast='"+embedding_model+"',"
//						+ "brightness='"+batch_size+"',grey='"+vector_database+"',"
//						+ "resize='"+vector_database_connection+"',aspect_ratio='"+name_text+"',"
//						+ "resize_width='"+limit+"',resize_height='"+threshold+"',"
//						+ "modcolname='"+ batches + "'  " + ","
//						+ "cronexpression='"+ expression + "',"
//						+ "userid="+userid+"   where id=" + id;
//				
//			}
//
//			System.out.println("updateImageaugmentation Q-" + q);
//
//			SQLQuery query = sessionFactory.getCurrentSession().createSQLQuery(q);
//			query.executeUpdate();
//
//			return "";
//		}

	    
		
//		////////////get
//		@RequestMapping(value = "/readDAGdATA1", method = RequestMethod.GET)
//		   public @ResponseBody String readDAGdATA1() throws NoSuchAlgorithmException, KeyStoreException 
//		    {
//
////			System.out.println("dag call ::::::::::::::");
////			OutputStream out = null;
////			try
////	        {
////	            URL url = new URL("https://devops.cafebot.ai/api/v1/dags?limit=100&only_active=true");
////	            HttpURLConnection http = null;
////
////	            if (url.getProtocol().toLowerCase().equals("https")) {
////	                trustAllHosts();
////	                HttpsURLConnection https = (HttpsURLConnection) url.openConnection();
////	                https.setHostnameVerifier(DO_NOT_VERIFY);
////	                http = https;
////	            } else {
////	                http = (HttpURLConnection) url.openConnection();
////	            }
////	            String SOAPAction="";
////	            http.setRequestProperty("Authorization", "Basic YWlyZmxvdzphaXJmbG93");
////	            http.setRequestProperty("Content-Type", "text/xml; charset=utf-8");
////	            http.setRequestProperty("SOAPAction", SOAPAction);
////	            http.setRequestMethod("GET");
////	            http.setDoOutput(true);
////	            http.setDoInput(true);
////	             out = http.getOutputStream();
////	             System.out.println("out :::::::::::::: "+out);
////	        }
////	        catch (Exception e)
////	        {
////	            e.printStackTrace();
////	        }
//			
//		
//			
//		    System.out.println("call start ::::::");
//		    
//		    String resdata = "";		  
//		    
////		    Unirest.config().verifySsl(false);
////		    Unirest.setTimeouts(0, 0);
////		    HttpResponse<String> response = Unirest.get("https://devops.cafebot.ai/api/v1/dags?limit=100&only_active=true")
////		      .header("Authorization", "Basic YWlyZmxvdzphaXJmbG93")
////		      .asString();
//		    
//		    
//		    
////		    KeyStore ks = KeyStore.getInstance(KeyStore.getDefaultType());
////		   
////		    SSLContext sslContext = SSLContext.getInstance("TLS");
////		    TrustManagerFactory trustMgrFactory = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm());
////            trustMgrFactory.init(ks);
//		    
////		    TrustManager[] tm = CompositeX509TrustManager.getTrustManagers(keystore);
////		    sslContext.init(null, tm, null);
//
//		    String url="https://devops.cafebot.ai/api/v1/dags?limit=100&only_active=true";
//			
////		    String url="http://192.168.5.20:8050/api/v1/dags?limit=100&only_active=true&useSSL=false";
////		    String url="http://192.168.5.20:8050/api/v1/dags?limit=100&only_active=true";
//	
//					RestTemplate restTemplate=new RestTemplate();
//					HttpHeaders headers = new HttpHeaders();
//					headers.add("Authorization", "Basic YWlyZmxvdzphaXJmbG93");
//					headers.add("Settings", "verifySsl false");
//					HttpEntity<String> request = new HttpEntity<String>(headers);
//					
//					ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, request, String.class);
//		    resdata = response.getBody();
//		    System.out.println("resdata::::"+resdata);
//		    
//		    
////		    OkHttpClient client = new OkHttpClient().newBuilder()
////		    		  .build();
////		    		MediaType mediaType = MediaType.parse("text/plain");
////		    		RequestBody body = RequestBody.create(mediaType, "");
////		    		Request request = new Request.Builder()
////		    		  .url("https://devops.cafebot.ai/api/v1/dags?limit=100&only_active=true")
////		    		  .method("GET", body)
////		    		  .addHeader("Authorization", "Basic YWlyZmxvdzphaXJmbG93")
////		    		  .build();
////		    		Response response = client.newCall(request).execute();
////		    
//		    
//		    
//		    
//		    return resdata;
//		       
//		    }
//		
//		 final static HostnameVerifier DO_NOT_VERIFY = new HostnameVerifier() {
//		        public boolean verify(String hostname, SSLSession session) {
//		            return true;
//		        }
//		    };
//		    
//		    
//		 private static void trustAllHosts() {
//		        // Create a trust manager that does not validate certificate chains
//		        TrustManager[] trustAllCerts = new TrustManager[] { new X509TrustManager() {
//		            public java.security.cert.X509Certificate[] getAcceptedIssuers() {
//		                return new java.security.cert.X509Certificate[] {};
//		            }
//
//		            public void checkClientTrusted(X509Certificate[] chain,
//		                                           String authType) throws CertificateException
//		            {
//		            }
//
//		            public void checkServerTrusted(X509Certificate[] chain,
//		                                           String authType) throws CertificateException {
//		            }
//		        } };
//
//		        // Install the all-trusting trust manager
//		        try {
//		            SSLContext sc = SSLContext.getInstance("SSL");
//		            sc.init(null, trustAllCerts, new java.security.SecureRandom());
//		            HttpsURLConnection
//		                    .setDefaultSSLSocketFactory(sc.getSocketFactory());
//		        } catch (Exception e) {
//		            e.printStackTrace();
//		        }
//		    }
//		
//		
//		
//		////////////get
//		@RequestMapping(value = "/readActiveDagdATA", method = RequestMethod.GET)
//		   public @ResponseBody String readActiveDagdATA() 
//		    {
//
//		    System.out.println("call readActiveDagdATA  start ::::::");
//		    
//		    String resdata = "";
//		    
//		    
////		    String url="http://192.168.5.20:8050/api/v1/dags?limit=100&only_active=true";
//		    
//		   String url= "http://192.168.5.20:8050/api/v1/dags?limit=100&only_active=true&paused=false";
//					
//					RestTemplate restTemplate=new RestTemplate();
//					HttpHeaders headers = new HttpHeaders();
//					headers.add("Authorization", "Basic YWlyZmxvdzphaXJmbG93");
//					HttpEntity<String> request = new HttpEntity<String>(headers);
//					
//					ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, request, String.class);
//		    resdata = response.getBody();
////		    System.out.println("resdata::::"+resdata);
//		    return resdata;
//		       
//		    }
//		
//		
//////////////get
//	@RequestMapping(value = "/readPausedDagdATA", method = RequestMethod.GET)
//	   public @ResponseBody String readPausedDagdATA() 
//	    {
//
//	    System.out.println("call readActiveDagdATA  start ::::::");
//	    
//	    String resdata = "";
//	    
//	    
////	    String url="http://192.168.5.20:8050/api/v1/dags?limit=100&only_active=true";
//	    
//	   String url= "http://192.168.5.20:8050/api/v1/dags?limit=100&only_active=true&paused=true";
//				
//				RestTemplate restTemplate=new RestTemplate();
//				HttpHeaders headers = new HttpHeaders();
//				headers.add("Authorization", "Basic YWlyZmxvdzphaXJmbG93");
//				HttpEntity<String> request = new HttpEntity<String>(headers);
//				
//				ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, request, String.class);
//	    resdata = response.getBody();
////	    System.out.println("resdata::::"+resdata);
//	    return resdata;
//	       
//	    }
//	
//	
//
//		
//		
//		
//		
//		
//		
//		
////		@RequestMapping(value = "/filterproperties/updateDAGdATA", method = RequestMethod.PATCH)
////		   public @ResponseBody String updateDAGdATA(@RequestParam boolean is_paused) 
////		    {
//	//
////		    System.out.println("call start ::::::");
////		    String resdata = "";
////		    
////		  /*  OkHttpClient client = new OkHttpClient().newBuilder()
////		      .build();
////		        MediaType mediaType = MediaType.parse("text/plain");
////		    okhttp3.RequestBody body = okhttp3.RequestBody.create(mediaType, "");
////		    Request request = new Request.Builder()
////		      .url("http://192.168.5.20:8050/api/v1/dags?limit=100&only_active=true")
////		      .method("GET", body)
////		      .addHeader("Authorization", "Basic YWlyZmxvdzphaXJmbG93")
////		      .build();
////		    try 
////		    {	
////		    Response response = client.newCall(request).execute();
////		     resdata = response.toString();
////		    }catch (Exception e) 
////		    {
////		    System.out.println("error getting dag data::::"+e.toString());
////						// TODO: handle exception
////					}*/
////		    
////		    
////		    
////		    //airflow:airflow
////		    
////		    
////		   // String url="http://192.168.5.20:8050/api/v1/dags?limit=100&only_active=true&dag_id_pattern=string";
////					
////		    String url="http://192.168.5.20:8050/api/v1/dags?limit=100&tags=string&update_mask=string&only_active=true&dag_id_pattern=string";
////		    
////					RestTemplate restTemplate=new RestTemplate();
////					HttpHeaders headers = new HttpHeaders();
////					headers.add("Authorization", "Basic YWlyZmxvdzphaXJmbG93");
////					HttpEntity<String> request = new HttpEntity<String>(headers);
////					
////					ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.PATCH, request, String.class);
////		    resdata = response.getBody();
////		    System.out.println("resdata::::"+resdata);
////		    return resdata;
////		       
////		    }
//		
//		
//		//////////// clear
//		@RequestMapping(value = "/clearDAGdATA", method = RequestMethod.POST)
//		   public @ResponseBody String clearDAGdATA(@RequestParam String dag_id ,String  dag_run_arr ,String dag_task_id) throws ClientProtocolException, IOException 
//		    {
////		    String resdata = "";
//		    System.out.println("call  clearDAGdATA start ::::::");
//		    
//		    System.out.println("dag_run_arr   "+dag_run_arr);
//		    System.out.println("dag_task_id   "+dag_task_id);
//		    
//		    dag_run_arr = dag_run_arr.replace("____", "+");
//		    
////		    dag_run_arr.replace(" 00:00", "+00:00");
//		    System.out.println("dag_run_arr  ############ "+dag_run_arr);
//		    
//		    String msg ="";
//			try 
//			{
//				InputStream inStream = null;
//				
////				url("https://devops.cafebot.ai/api/v1/dags/"+dag_id+"/clearTaskInstances")
//			URL url = new URL( "https://devops.cafebot.ai/api/v1/dags/"+dag_id+"/clearTaskInstances" );
//			
//			 try {
//			        TrustManager[] trustAllCerts = new TrustManager[] { 
//			            new X509TrustManager() {
//							
//							@Override
//							public X509Certificate[] getAcceptedIssuers() {
//								// TODO Auto-generated method stub
//								return null;
//							}
//							
//							@Override
//							public void checkServerTrusted(X509Certificate[] chain, String authType) throws CertificateException {
//								// TODO Auto-generated method stub
//								
//							}
//							
//							@Override
//							public void checkClientTrusted(X509Certificate[] chain, String authType) throws CertificateException {
//								// TODO Auto-generated method stub
//								
//							}
//						}
//			        };
//
//			        javax.net.ssl.SSLContext sc = javax.net.ssl.SSLContext.getInstance("SSL");
//			        sc.init(null, trustAllCerts, new SecureRandom());
//			      
//			        HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
//			   	     
//			   	  final HostnameVerifier allHostsValid = new HostnameVerifier() {
//		              @Override
//		              public boolean verify(final String hostname, final SSLSession session) {
//		                  return true;
//		              }
//		          };
//			        
//		          HttpsURLConnection.setDefaultHostnameVerifier(allHostsValid);
//		                  
//			        
//			    } catch (Exception e) 
//			    { 
//			       System.out.println("error ssl cert :::::"+e.toString());
//			    }
//			
//			 String jsonstr = "{\r\n  \"dag_run_id\": \""+dag_run_arr+"\",\r\n  \"dry_run\": true,\r\n  \"include_downstream\": false,\r\n  \"include_future\": false,\r\n  \"include_parentdag\": true,\r\n  \"include_past\": false,\r\n  \"include_subdags\": true,\r\n  \"include_upstream\": false,\r\n  \"only_failed\": true,\r\n  \"only_running\": false,\r\n  \"reset_dag_runs\": true,\r\n  \"task_ids\": [\""+dag_task_id+"\"]\r\n}";
//			 
//			 HttpsURLConnection conn = (HttpsURLConnection) new URL(url.toString()).openConnection();  
//			conn.setDoOutput(true);
//			conn.setInstanceFollowRedirects(false);
//			conn.setRequestMethod("POST");
//			conn.setRequestProperty("Content-Type", "application/json");
//			conn.setRequestProperty("Authorization", "Basic YWlyZmxvdzphaXJmbG93");		
//			conn.setRequestProperty("charset", "utf-8");						
//			conn.setUseCaches(false);
//			
//			try(OutputStream os = conn.getOutputStream()) {
//			    byte[] input = jsonstr.getBytes("utf-8");
//			    os.write(input, 0, input.length);			
//			}
//			
////			try(DataOutputStream wr = new DataOutputStream(conn.getOutputStream())) {
////			   wr.write( postData );
////			}
//
//			int HttpResult = conn.getResponseCode();
//			
//			InputStream resdata = conn.getInputStream();
//
//			System.out.println("HttpResult---" + HttpResult);
//			System.out.println("resdata---" + resdata);
//			String body11 = conn.getResponseMessage();//body();
//    		
//    		System.out.println("body11   "+body11);
//    		
//    		if(body11.equalsIgnoreCase("OK"))
//    		{
//    			msg = "Success";
//    			
//    			
//    		}
//    		else
//    		{
//    			msg = "No Task Instances Found!";
//    		}
//    
//			}catch (Exception e) 
//			{
//				System.out.println("clearTaskInstances ::: ---"+e.toString());
//				// TODO: handle exception
//			}
//			return msg;
//		
//		       
//		    }
//				
//		
//		
//		////////delete
//		@RequestMapping(value = "/deleteDAGdATA", method = RequestMethod.DELETE)
//		   public @ResponseBody String deleteDAGdATA(@RequestParam String dag_id) 
//		    {
//
//		    System.out.println("call start ::::::");
//		    String msg ="";
//		    String resdata = null;
//			try 
//			{
//				InputStream inStream = null;
////				url="http://192.168.5.20:8050/api/v1/dags/"+dag_id+"";
//			URL url = new URL( "https://devops.cafebot.ai/api/v1/dags/"+dag_id+"" );
//			
//			 try {
//			        TrustManager[] trustAllCerts = new TrustManager[] { 
//			            new X509TrustManager() {
//							
//							@Override
//							public X509Certificate[] getAcceptedIssuers() {
//								// TODO Auto-generated method stub
//								return null;
//							}
//							
//							@Override
//							public void checkServerTrusted(X509Certificate[] chain, String authType) throws CertificateException {
//								// TODO Auto-generated method stub
//								
//							}
//							
//							@Override
//							public void checkClientTrusted(X509Certificate[] chain, String authType) throws CertificateException {
//								// TODO Auto-generated method stub
//								
//							}
//						}
//			        };
//
//			        javax.net.ssl.SSLContext sc = javax.net.ssl.SSLContext.getInstance("SSL");
//			        sc.init(null, trustAllCerts, new SecureRandom());
//			      
//			        HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
//			   	     
//			   	  final HostnameVerifier allHostsValid = new HostnameVerifier() {
//		              @Override
//		              public boolean verify(final String hostname, final SSLSession session) {
//		                  return true;
//		              }
//		          };
//			        
//		          HttpsURLConnection.setDefaultHostnameVerifier(allHostsValid);
//		                  
//			        
//			    } catch (Exception e) 
//			    { 
//			       System.out.println("error ssl cert :::::"+e.toString());
//			    }
//			
//			 HttpsURLConnection conn = (HttpsURLConnection) new URL(url.toString()).openConnection();  
//			conn.setDoOutput(true);
//			conn.setInstanceFollowRedirects(false);
//			conn.setRequestMethod("DELETE");
//			conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded"); 
//			conn.setRequestProperty("Authorization", "Basic YWlyZmxvdzphaXJmbG93");		
//			conn.setRequestProperty("charset", "utf-8");
//			conn.setUseCaches(false);
//
//			int HttpResult = conn.getResponseCode();
//			msg = conn.getResponseMessage();
//
//			
//			}catch (Exception e) 
//			{
//				System.out.println("getKeycloakSession---"+e.toString());
//				// TODO: handle exception
//			}
//			return msg;
//			
//			
////		    HttpStatus resdata = null;	
////		    String url="http://192.168.5.20:8050/api/v1/dags/"+dag_id+"";
//////		    http://192.168.5.20:8050/api/v1/dags/tutorial_taskflow_api
////		    
////		    
////					RestTemplate restTemplate=new RestTemplate();
////					HttpHeaders headers = new HttpHeaders();
////					headers.add("Authorization", "Basic YWlyZmxvdzphaXJmbG93");			
////					HttpEntity<String> request = new HttpEntity<String>(headers);											
////					
////					ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.DELETE, request, String.class);
////		    resdata = response.getStatusCode();
//////		    System.out.println("resdata   del  ::::"+resdata);
////		    
////		    return resdata;
//		       
//		    }
//		
//		
//		
//		/////////////tasks list
//		@RequestMapping(value = "/tasksDAGdATA", method = RequestMethod.GET)
//		   public @ResponseBody String tasksDAGdATA(@RequestParam String dag_id) 
//		    {
//			
//			 System.out.println("call tasksDAGdATA start ::::::");
//			String msg ="";
//			try 
//			{
//				InputStream inStream = null;
//								
//			URL url = new URL( "https://devops.cafebot.ai/api/v1/dags/"+dag_id+"/tasks" );
//			
//			 try {
//			        TrustManager[] trustAllCerts = new TrustManager[] { 
//			            new X509TrustManager() {
//							
//							@Override
//							public X509Certificate[] getAcceptedIssuers() {
//								// TODO Auto-generated method stub
//								return null;
//							}
//							
//							@Override
//							public void checkServerTrusted(X509Certificate[] chain, String authType) throws CertificateException {
//								// TODO Auto-generated method stub
//								
//							}
//							
//							@Override
//							public void checkClientTrusted(X509Certificate[] chain, String authType) throws CertificateException {
//								// TODO Auto-generated method stub
//								
//							}
//						}
//			        };
//
//			        javax.net.ssl.SSLContext sc = javax.net.ssl.SSLContext.getInstance("SSL");
//			        sc.init(null, trustAllCerts, new SecureRandom());
//			      
//			        HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
//			   	     
//			   	  final HostnameVerifier allHostsValid = new HostnameVerifier() {
//		              @Override
//		              public boolean verify(final String hostname, final SSLSession session) {
//		                  return true;
//		              }
//		          };
//			        
//		          HttpsURLConnection.setDefaultHostnameVerifier(allHostsValid);
//		                  
//			        
//			    } catch (Exception e) 
//			    { 
//			       System.out.println("error ssl cert :::::"+e.toString());
//			    }
//			
//			 HttpsURLConnection conn = (HttpsURLConnection) new URL(url.toString()).openConnection();  
//			conn.setDoOutput(true);
//			conn.setInstanceFollowRedirects(false);
//			conn.setRequestMethod("GET");
//			conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded"); 
//			conn.setRequestProperty("Authorization", "Basic YWlyZmxvdzphaXJmbG93");		
//			conn.setRequestProperty("charset", "utf-8");
//			conn.setUseCaches(false);
//			
////			try(DataOutputStream wr = new DataOutputStream(conn.getOutputStream())) {
////			   wr.write( postData );
////			}
//
//			int HttpResult = conn.getResponseCode();
//			
//			InputStream resdata = conn.getInputStream();
//
//			System.out.println("HttpResult---" + HttpResult);
//			System.out.println("resdata---" + resdata);
//
//			if (HttpResult == 200) 
//			{
//				inStream = conn.getInputStream();
//				BufferedReader bReader = new BufferedReader(new InputStreamReader(inStream));
//				String temp, response = "";
//				while ((temp = bReader.readLine()) != null) {
//					response += temp;
//				}
//			System.out.println("response---"+response);
//			
//			JsonObject jsonObject = new JsonParser().parse(response).getAsJsonObject();
//			
//			String access_token =response;
//
//			System.out.println("access_token------"+access_token);
//				msg = access_token;
//			 }
//			else 
//			{
//				msg ="";
//			}
//			
//			
//			}catch (Exception e) 
//			{
//				System.out.println("getKeycloakSession---"+e.toString());
//				// TODO: handle exception
//			}
//			return msg;
//			
//			
//			
//			
//
//		   
////		    String resdata = "";	
////		    String url="http://192.168.5.20:8050/api/v1/dags/"+dag_id+"/tasks";
//////		    http://192.168.5.20:8050/api/v1/dags/my_dag19/tasks
////		    
////		    
////					RestTemplate restTemplate=new RestTemplate();
////					HttpHeaders headers = new HttpHeaders();
////					headers.add("Authorization", "Basic YWlyZmxvdzphaXJmbG93");			
////					HttpEntity<String> request = new HttpEntity<String>(headers);											
////					
////					ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, request, String.class);
////		    resdata = response.getBody();
////		    
//////		    System.out.println("resdata::::"+resdata);
////		    
////		    return resdata;
//		       
//		    }
//		
//		
///////////////play pause
//	@RequestMapping(value = "/pause_playDAGdATA", method = RequestMethod.POST)
//	   public @ResponseBody Integer pause_playDAGdATA(@RequestParam String dag_id
//			   ,String value) throws Exception 
//	    {
////		disableCertificateValidation();
//	    System.out.println("call pause_playDAGdATA start ::::::");
//	    System.out.println("dag id "+dag_id);
//	    System.out.println("value "+value);
////	    allowMethods("PATCH");
//	    int msg =0;
//	    
//	    OkHttpClient client = createOkHttpClient();
////	    OkHttpClient client = new OkHttpClient().newBuilder()
////	    		  .build();
//	    		MediaType mediaType = MediaType.parse("application/json");
//	    		RequestBody body = RequestBody.create(mediaType, "{\r\n    \"is_paused\":"+value+"\r\n    }");
//	    		Request request = new Request.Builder()
//	    		  .url("https://devops.cafebot.ai/api/v1/dags/"+dag_id+"?update_mask=is_paused")
//	    		  .method("PATCH", body)
//	    		  .addHeader("Content-Type", "application/json")
//	    		  .addHeader("Authorization", "Basic YWlyZmxvdzphaXJmbG93")	    		  
//	    		  .build();
//	    		Response response = client.newCall(request).execute();
//	    
//	    		msg = response.code();
//	    
//	    		System.out.println("msg pause_playDAGdATA  ::::::"+msg);
//	    
//		
//		return msg;	    	       
//	    }
//	
//	
	 private static OkHttpClient createOkHttpClient() {
	        try {
	            // Create a trust manager that trusts all certificates
	            TrustManager[] trustAllCertificates = new TrustManager[]{
	                    new X509TrustManager() {
	                        public X509Certificate[] getAcceptedIssuers() {
	                            return new X509Certificate[0];
	                        }

	                        public void checkClientTrusted(X509Certificate[] certs, String authType) {
	                        }

	                        public void checkServerTrusted(X509Certificate[] certs, String authType) {
	                        }
	                    }
	            };

	            // Create an SSL context with the trust manager
	            SSLContext sslContext = SSLContext.getInstance("TLS");
	            sslContext.init(null, trustAllCertificates, new java.security.SecureRandom());

	            // Create an SSLSocketFactory from the SSL context
	            SSLSocketFactory sslSocketFactory = sslContext.getSocketFactory();

	            // Create an OkHttpClient with the custom SSL socket factory
	            return new OkHttpClient.Builder()
	                    .sslSocketFactory(sslSocketFactory, (X509TrustManager) trustAllCertificates[0])
	                    .hostnameVerifier((hostname, session) -> true) // Bypass hostname verification
	                    .build();
	        } catch (Exception e) {
	            throw new RuntimeException(e);
	        }
	    }
//
//	
////	  private static void disableCertificateValidation() throws Exception {
////	        TrustManager[] trustAllCertificates = new TrustManager[]{
////	            new X509TrustManager() {
////	                public X509Certificate[] getAcceptedIssuers() {
////	                    return null;
////	                }
////	                public void checkClientTrusted(X509Certificate[] certs, String authType) {
////	                }
////	                public void checkServerTrusted(X509Certificate[] certs, String authType) {
////	                }
////	            }
////	        };
////
////	        // Create an SSL context with the above trust manager
////	        SSLContext sslContext = SSLContext.getInstance("TLS");
////	        sslContext.init(null, trustAllCertificates, new java.security.SecureRandom());
////
////	        // Set the default SSLSocketFactory to use the SSL context with the custom trust manager
////	        HttpsURLConnection.setDefaultSSLSocketFactory(sslContext.getSocketFactory());
////	    }
//		
//	 private static void allowMethods(String... methods) {
//	        try {
//	            Field methodsField = HttpURLConnection.class.getDeclaredField("methods");
//
//	            Field modifiersField = Field.class.getDeclaredField("modifiers");
//	            modifiersField.setAccessible(true);
//	            modifiersField.setInt(methodsField, methodsField.getModifiers() & ~Modifier.FINAL);
//
//	            methodsField.setAccessible(true);
//
//	            String[] oldMethods = (String[]) methodsField.get(null);
//	            Set<String> methodsSet = new LinkedHashSet<>(Arrays.asList(oldMethods));
//	            methodsSet.addAll(Arrays.asList(methods));
//	            String[] newMethods = methodsSet.toArray(new String[0]);
//
//	            methodsField.set(null, newMethods);
//	        } catch (NoSuchFieldException | IllegalAccessException e) {
//	            throw new IllegalStateException(e.toString());
//	        }
//	    }
//	
///////////////dag run data
//@RequestMapping(value = "/dagRunsData", method = RequestMethod.GET)
//public @ResponseBody String dagRunsData(@RequestParam String dag_id) throws IOException {
//
//	System.out.println("call dagRunsData start ::::::");
//	System.out.println("dag id "+dag_id);
//	
//	String msg ="";
//	try 
//	{
//		InputStream inStream = null;
//		
////		 url="http://192.168.5.20:8050/api/v1/dags/"+dag_id+"/dagRuns";
//	URL url = new URL("https://devops.cafebot.ai/api/v1/dags/"+dag_id+"/dagRuns");
//	
//	 try {
//	        TrustManager[] trustAllCerts = new TrustManager[] { 
//	            new X509TrustManager() {
//					
//					@Override
//					public X509Certificate[] getAcceptedIssuers() {
//						// TODO Auto-generated method stub
//						return null;
//					}
//					
//					@Override
//					public void checkServerTrusted(X509Certificate[] chain, String authType) throws CertificateException {
//						// TODO Auto-generated method stub
//						
//					}
//					
//					@Override
//					public void checkClientTrusted(X509Certificate[] chain, String authType) throws CertificateException {
//						// TODO Auto-generated method stub
//						
//					}
//				}
//	        };
//
//	        javax.net.ssl.SSLContext sc = javax.net.ssl.SSLContext.getInstance("SSL");
//	        sc.init(null, trustAllCerts, new SecureRandom());
//	      
//	        HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
//	   	     
//	   	  final HostnameVerifier allHostsValid = new HostnameVerifier() {
//              @Override
//              public boolean verify(final String hostname, final SSLSession session) {
//                  return true;
//              }
//          };
//	        
//          HttpsURLConnection.setDefaultHostnameVerifier(allHostsValid);
//                  
//	        
//	    } catch (Exception e) 
//	    { 
//	       System.out.println("error ssl cert :::::"+e.toString());
//	    }
//	
//	 HttpsURLConnection conn = (HttpsURLConnection) new URL(url.toString()).openConnection();  
//	conn.setDoOutput(true);
//	conn.setInstanceFollowRedirects(false);
//	conn.setRequestMethod("GET");
//	conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded"); 
//	conn.setRequestProperty("Authorization", "Basic YWlyZmxvdzphaXJmbG93");		
//	conn.setRequestProperty("charset", "utf-8");
//	conn.setUseCaches(false);
//
//	int HttpResult = conn.getResponseCode();
//	
//	InputStream resdata = conn.getInputStream();
//
//	System.out.println("HttpResult---" + HttpResult);
//	System.out.println("resdata---" + resdata);
//
//	if (HttpResult == 200) 
//	{
//		inStream = conn.getInputStream();
//		BufferedReader bReader = new BufferedReader(new InputStreamReader(inStream));
//		String temp, response = "";
//		while ((temp = bReader.readLine()) != null) {
//			response += temp;
//		}
//	System.out.println("response---"+response);
//	
//	JsonObject jsonObject = new JsonParser().parse(response).getAsJsonObject();
//	
//	String access_token =response;
//
//	System.out.println("access_token------"+access_token);
//		msg = access_token;
//	 }
//	else 
//	{
//		msg ="";
//	}
//	
//	System.out.println("dagRunsData   msg------"+msg);
//	}catch (Exception e) 
//	{
//		System.out.println("dagRunsData---"+e.toString());
//		// TODO: handle exception
//	}
//	return msg;
//
//   
//}
//
//
//////////////get
//@RequestMapping(value = "/readDAGdATA", method = RequestMethod.GET)
//public @ResponseBody String readDAGdATA() throws NoSuchAlgorithmException, KeyStoreException 
//{
//	String msg ="";
//	try 
//	{
//		InputStream inStream = null;
//		
//	
//	URL url = new URL( "https://devops.cafebot.ai/api/v1/dags?limit=100&only_active=true" );
//	
//	 try {
//	        TrustManager[] trustAllCerts = new TrustManager[] { 
//	            new X509TrustManager() {
//					
//					@Override
//					public X509Certificate[] getAcceptedIssuers() {
//						// TODO Auto-generated method stub
//						return null;
//					}
//					
//					@Override
//					public void checkServerTrusted(X509Certificate[] chain, String authType) throws CertificateException {
//						// TODO Auto-generated method stub
//						
//					}
//					
//					@Override
//					public void checkClientTrusted(X509Certificate[] chain, String authType) throws CertificateException {
//						// TODO Auto-generated method stub
//						
//					}
//				}
//	        };
//
//	        javax.net.ssl.SSLContext sc = javax.net.ssl.SSLContext.getInstance("SSL");
//	        sc.init(null, trustAllCerts, new SecureRandom());
//	      
//	        HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
//	   	     
//	   	  final HostnameVerifier allHostsValid = new HostnameVerifier() {
//              @Override
//              public boolean verify(final String hostname, final SSLSession session) {
//                  return true;
//              }
//          };
//	        
//          HttpsURLConnection.setDefaultHostnameVerifier(allHostsValid);
//                  
//	        
//	    } catch (Exception e) 
//	    { 
//	       System.out.println("error ssl cert :::::"+e.toString());
//	    }
//	
//	 HttpsURLConnection conn = (HttpsURLConnection) new URL(url.toString()).openConnection();  
//	conn.setDoOutput(true);
//	conn.setInstanceFollowRedirects(false);
//	conn.setRequestMethod("GET");
//	conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded"); 
//	conn.setRequestProperty("Authorization", "Basic YWlyZmxvdzphaXJmbG93");		
//	conn.setRequestProperty("charset", "utf-8");
//	conn.setUseCaches(false);
//	
////	try(DataOutputStream wr = new DataOutputStream(conn.getOutputStream())) {
////	   wr.write( postData );
////	}
//
//	int HttpResult = conn.getResponseCode();
//	
//	InputStream resdata = conn.getInputStream();
//
//	System.out.println("HttpResult---" + HttpResult);
//	System.out.println("resdata---" + resdata);
//
//	if (HttpResult == 200) 
//	{
//		inStream = conn.getInputStream();
//		BufferedReader bReader = new BufferedReader(new InputStreamReader(inStream));
//		String temp, response = "";
//		while ((temp = bReader.readLine()) != null) {
//			response += temp;
//		}
//	System.out.println("response---"+response);
//	
//	JsonObject jsonObject = new JsonParser().parse(response).getAsJsonObject();
//	
//	String access_token =response;
//
//	System.out.println("access_token------"+access_token);
//		msg = access_token;
//	 }
//	else 
//	{
//		msg ="";
//	}
//	
//	
//	}catch (Exception e) 
//	{
//		System.out.println("readDAGdATA---"+e.toString());
//		// TODO: handle exception
//	}
//	return msg;
//}


	    
//	    private String airflow_ip = "http://192.168.5.20:8050";
		

	

private String airflow_ip = "https://192.168.5.20:8050";
private String airflow_path_https = "https://192.168.5.20:8050";


 	@RequestMapping(value = "/readDAGdATA", method = RequestMethod.GET)
 	public @ResponseBody String readDAGdATA() 
  {
 		String msg ="";
 		airflow_path_https = "http://192.168.5.20:8050";
 		int airflow_trust_certificate = 1;
 	
 				
 		javax.net.ssl.SSLContext sc =null;
 		
 		if(airflow_path_https.contains("https"))
 		{
 			
 	
 			try 
 			{
 			InputStream inStream = null;
 	
 			URL url= new URL( "https://devops.cafebot.ai/api/v1/dags?limit=100&only_active=true" );
 			System.out.println("url  :::: "+url);
 			
// 			URL url = new URL( airflow_ip+"dags?limit=100&only_active=true" );
 			if(airflow_trust_certificate == 1)
				{
 			try {
 				
 					TrustManager[] trustAllCerts = new TrustManager[] { 
 					        new X509TrustManager() {
 								
 								@Override
 								public X509Certificate[] getAcceptedIssuers() {
 									// TODO Auto-generated method stub
 									return null;
 								}
 								
 								@Override
 								public void checkServerTrusted(X509Certificate[] chain, String authType) throws CertificateException {
 									// TODO Auto-generated method stub
 									
 								}
 								
 								@Override
 								public void checkClientTrusted(X509Certificate[] chain, String authType) throws CertificateException {
 									// TODO Auto-generated method stub
 									
 								}
 							}
 					    };
 	
 					    sc = javax.net.ssl.SSLContext.getInstance("SSL");
 					    sc.init(null, trustAllCerts, new SecureRandom());
 					  
 				
 			    
 			    HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
 				     
 				  final HostnameVerifier allHostsValid = new HostnameVerifier() {
 			      @Override
 			      public boolean verify(final String hostname, final SSLSession session) {
 			          return true;
 			      }
 			  };
 			    
 			  HttpsURLConnection.setDefaultHostnameVerifier(allHostsValid);
 			          
 			    
 			} catch (Exception e) 
 			{ 
 			   System.out.println("error ssl cert :::::"+e.toString());
 			}
 			}
 			HttpsURLConnection conn = (HttpsURLConnection) new URL(url.toString()).openConnection();  
 			conn.setDoOutput(true);
 			conn.setInstanceFollowRedirects(false);
 			conn.setRequestMethod("GET");
 			conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded"); 
 			conn.setRequestProperty("Authorization", "Basic YWlyZmxvdzphaXJmbG93");		
 			conn.setRequestProperty("charset", "utf-8");
 			conn.setUseCaches(false);
 	
 			//try(DataOutputStream wr = new DataOutputStream(conn.getOutputStream())) {
 			//wr.write( postData );
 			//}
 	
 			int HttpResult = conn.getResponseCode();
 	
 			InputStream resdata = conn.getInputStream();
 	
 			System.out.println("HttpResult---" + HttpResult);
 			System.out.println("resdata---" + resdata);
 	
 			if (HttpResult == 200) 
 			{
 			inStream = conn.getInputStream();
 			BufferedReader bReader = new BufferedReader(new InputStreamReader(inStream));
 			String temp, response = "";
 			while ((temp = bReader.readLine()) != null) {
 				response += temp;
 			}
 			System.out.println("response---"+response);
 	
 			JsonObject jsonObject = new JsonParser().parse(response).getAsJsonObject();
 	
 			String access_token =response;
 	
 			System.out.println("access_token------"+access_token);
 			msg = access_token;
 			}
 			else 
 			{
 			msg ="";
 			}
 	
 	
 			}catch (Exception e) 
 			{
 			System.out.println("readDAGdATA---"+e.toString());
 			// TODO: handle exception
 			}
 	
 	
 	
 			
 		}
 		else
 		{
 			System.out.println("call start ::::::");
 	    	String resdata = "";
 	    	
 	    	//airflow:airflow
 	    	
 	    	String url= "http://192.168.5.20:8050/api/v1/dags?limit=100&only_active=true";
// 	    	String url= airflow_ip+"dags?limit=100&only_active=true";
 			
 			RestTemplate restTemplate=new RestTemplate();
 			HttpHeaders headers = new HttpHeaders();
 			headers.add("Authorization", "Basic YWlyZmxvdzphaXJmbG93");
 			HttpEntity<String> request = new HttpEntity<String>(headers);
 			
 			ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, request, String.class);
 	    	msg = response.getBody();
 	    	//System.out.println("resdata::::"+resdata);    	
 			
 		}
 		return msg;
 		    
  }
  
 	
	
	////////////get
	@RequestMapping(value = "/readActiveDagdATA", method = RequestMethod.GET)
	   public @ResponseBody String readActiveDagdATA() 
	    {

	    System.out.println("call readActiveDagdATA  start ::::::");
	    
	    String resdata = "";
	    
	    
//	    String url="http://192.168.5.20:8050/api/v1/dags?limit=100&only_active=true";
	    
	   String url= airflow_ip+"/api/v1/dags?limit=100&only_active=true&paused=false";
				
				RestTemplate restTemplate=new RestTemplate();
				HttpHeaders headers = new HttpHeaders();
				headers.add("Authorization", "Basic YWlyZmxvdzphaXJmbG93");
				HttpEntity<String> request = new HttpEntity<String>(headers);
				
				ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, request, String.class);
	    resdata = response.getBody();
//	    System.out.println("resdata::::"+resdata);
	    return resdata;
	       
	    }
	
	    
////////////get
@RequestMapping(value = "/readPausedDagdATA", method = RequestMethod.GET)
public @ResponseBody String readPausedDagdATA() 
 {
  	System.out.println("call readActiveDagdATA  start ::::::");
  	String resdata = "";
  	String url= airflow_ip+"/api/v1/dags?limit=100&only_active=true&paused=true";
			
			RestTemplate restTemplate=new RestTemplate();
			HttpHeaders headers = new HttpHeaders();
			headers.add("Authorization", "Basic YWlyZmxvdzphaXJmbG93");
			HttpEntity<String> request = new HttpEntity<String>(headers);
			
			ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, request, String.class);
  resdata = response.getBody();
  return resdata;   
    
}
 	
 	
/////////// clear
@RequestMapping(value = "/clearDAGdATA", method = RequestMethod.POST)
public @ResponseBody String clearDAGdATA(@RequestParam String dag_id ,String  dag_run_arr ,String dag_task_id) throws ClientProtocolException, IOException 
{
		String msg ="";
		airflow_path_https = "http://192.168.5.20:8050";
		int airflow_trust_certificate = 1;
		 
	    System.out.println("call  clearDAGdATA start ::::::");
	    
	    System.out.println("dag_run_arr   "+dag_run_arr);
	    System.out.println("dag_task_id   "+dag_task_id);
	    
	    dag_run_arr = dag_run_arr.replace("____", "+");
	    
//	    dag_run_arr.replace(" 00:00", "+00:00");
	    System.out.println("dag_run_arr  ############ "+dag_run_arr);
				
		javax.net.ssl.SSLContext sc =null;
		
		if(airflow_path_https.contains("https"))
		{
		
				try 
				{
					InputStream inStream = null;
					
//					url("https://devops.cafebot.ai/api/v1/dags/"+dag_id+"/clearTaskInstances")
				URL url = new URL( "https://devops.cafebot.ai/api/v1/dags/"+dag_id+"/clearTaskInstances" );
				if(airflow_trust_certificate == 1)
				{
				 try {
				        TrustManager[] trustAllCerts = new TrustManager[] { 
				            new X509TrustManager() {
								
								@Override
								public X509Certificate[] getAcceptedIssuers() {
									// TODO Auto-generated method stub
									return null;
								}
								
								@Override
								public void checkServerTrusted(X509Certificate[] chain, String authType) throws CertificateException {
									// TODO Auto-generated method stub
									
								}
								
								@Override
								public void checkClientTrusted(X509Certificate[] chain, String authType) throws CertificateException {
									// TODO Auto-generated method stub
									
								}
							}
				        };
	
				         sc = javax.net.ssl.SSLContext.getInstance("SSL");
				        sc.init(null, trustAllCerts, new SecureRandom());
				      
				        HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
				   	     
				   	  final HostnameVerifier allHostsValid = new HostnameVerifier() {
			              @Override
			              public boolean verify(final String hostname, final SSLSession session) {
			                  return true;
			              }
			          };
				        
			          HttpsURLConnection.setDefaultHostnameVerifier(allHostsValid);
			                  
				        
				    } catch (Exception e) 
				    { 
				       System.out.println("error ssl cert :::::"+e.toString());
				    }
				}
				 String jsonstr = "{\r\n  \"dag_run_id\": \""+dag_run_arr+"\",\r\n  \"dry_run\": true,\r\n  \"include_downstream\": false,\r\n  \"include_future\": false,\r\n  \"include_parentdag\": true,\r\n  \"include_past\": false,\r\n  \"include_subdags\": true,\r\n  \"include_upstream\": false,\r\n  \"only_failed\": true,\r\n  \"only_running\": false,\r\n  \"reset_dag_runs\": true,\r\n  \"task_ids\": [\""+dag_task_id+"\"]\r\n}";
				 
				 HttpsURLConnection conn = (HttpsURLConnection) new URL(url.toString()).openConnection();  
				conn.setDoOutput(true);
				conn.setInstanceFollowRedirects(false);
				conn.setRequestMethod("POST");
				conn.setRequestProperty("Content-Type", "application/json");
				conn.setRequestProperty("Authorization", "Basic YWlyZmxvdzphaXJmbG93");		
				conn.setRequestProperty("charset", "utf-8");						
				conn.setUseCaches(false);
				
				try(OutputStream os = conn.getOutputStream()) {
				    byte[] input = jsonstr.getBytes("utf-8");
				    os.write(input, 0, input.length);			
				}
				
//				try(DataOutputStream wr = new DataOutputStream(conn.getOutputStream())) {
//				   wr.write( postData );
//				}
	
				int HttpResult = conn.getResponseCode();
				
				InputStream resdata = conn.getInputStream();
	
				System.out.println("HttpResult---" + HttpResult);
				System.out.println("resdata---" + resdata);
				String body11 = conn.getResponseMessage();//body();
	    		
	    		System.out.println("body11   "+body11);
	    		
	    		if(body11.equalsIgnoreCase("OK"))
	    		{
	    			msg = "Success";
	    			
	    			
	    		}
	    		else
	    		{
	    			msg = "No Task Instances Found!";
	    		}
	    
				}catch (Exception e) 
				{
					System.out.println("clearTaskInstances ::: ---"+e.toString());
					// TODO: handle exception
				}
				
			
		}
		else
		{
		
			OkHttpClient client = new OkHttpClient().newBuilder()
			.build();
			MediaType mediaType = MediaType.parse("application/json");
			okhttp3.RequestBody body = okhttp3.RequestBody.create(mediaType, "{\r\n  \"dag_run_id\": \""+dag_run_arr+"\",\r\n  \"dry_run\": true,\r\n  \"include_downstream\": false,\r\n  \"include_future\": false,\r\n  \"include_parentdag\": true,\r\n  \"include_past\": false,\r\n  \"include_subdags\": true,\r\n  \"include_upstream\": false,\r\n  \"only_failed\": true,\r\n  \"only_running\": false,\r\n  \"reset_dag_runs\": true,\r\n  \"task_ids\": [\""+dag_task_id+"\"]\r\n}");
			Request request = new Request.Builder()
			.url("http://192.168.5.20:8050/api/v1/dags/"+dag_id+"/clearTaskInstances")
			.method("POST", body)
			.addHeader("Content-Type", "application/json")
			.addHeader("Authorization", "Basic YWlyZmxvdzphaXJmbG93")
			.addHeader("Cookie", "session=95e32a98-aebc-46d8-ac9a-a58e113d2467.oJ9HoH0zzwCfNBmyRCkIQIrx7Yk")
			.build();
			Response response = client.newCall(request).execute();
			
			String body11 = response.message();//body();
			
			System.out.println("body11   "+body11);
			
			if(body11.equalsIgnoreCase("OK"))
			{
				msg = "Success";
			
			
			}
			else
			{
				msg = "No Task Instances Found!";
			}
			
			
							//resdata = response.toString();
			      System.out.println("msg::::"+msg);
			
			
		}
		return msg;
		    
}



////////delete
@RequestMapping(value = "/deleteDAGdATA", method = RequestMethod.DELETE)
public @ResponseBody String deleteDAGdATA(@RequestParam String dag_id) 
{
String msg ="";
airflow_path_https = "http://192.168.5.20:8050";
int airflow_trust_certificate = 1;

System.out.println("call  clearDAGdATA start ::::::");

javax.net.ssl.SSLContext sc =null;

if(airflow_path_https.contains("https"))
{

	 System.out.println("call start ::::::");
	   
	    String resdata = null;
		try 
		{
			InputStream inStream = null;
//			url="http://192.168.5.20:8050/api/v1/dags/"+dag_id+"";
		URL url = new URL( "https://devops.cafebot.ai/api/v1/dags/"+dag_id+"" );
		if(airflow_trust_certificate == 1)
		{
		 try {
		        TrustManager[] trustAllCerts = new TrustManager[] { 
		            new X509TrustManager() {
						
						@Override
						public X509Certificate[] getAcceptedIssuers() {
							// TODO Auto-generated method stub
							return null;
						}
						
						@Override
						public void checkServerTrusted(X509Certificate[] chain, String authType) throws CertificateException {
							// TODO Auto-generated method stub
							
						}
						
						@Override
						public void checkClientTrusted(X509Certificate[] chain, String authType) throws CertificateException {
							// TODO Auto-generated method stub
							
						}
					}
		        };

		        sc = javax.net.ssl.SSLContext.getInstance("SSL");
		        sc.init(null, trustAllCerts, new SecureRandom());
		      
		        HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
		   	     
		   	  final HostnameVerifier allHostsValid = new HostnameVerifier() {
	              @Override
	              public boolean verify(final String hostname, final SSLSession session) {
	                  return true;
	              }
	          };
		        
	          HttpsURLConnection.setDefaultHostnameVerifier(allHostsValid);
	                  
		        
		    } catch (Exception e) 
		    { 
		       System.out.println("error ssl cert :::::"+e.toString());
		    }
		}
		 HttpsURLConnection conn = (HttpsURLConnection) new URL(url.toString()).openConnection();  
		conn.setDoOutput(true);
		conn.setInstanceFollowRedirects(false);
		conn.setRequestMethod("DELETE");
		conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded"); 
		conn.setRequestProperty("Authorization", "Basic YWlyZmxvdzphaXJmbG93");		
		conn.setRequestProperty("charset", "utf-8");
		conn.setUseCaches(false);

		int HttpResult = conn.getResponseCode();
		msg = conn.getResponseMessage();

		
		}catch (Exception e) 
		{
			System.out.println("getKeycloakSession---"+e.toString());
			// TODO: handle exception
		}
		return msg;
}
else
{
	System.out.println("call start ::::::");
    HttpStatus resdata = null;	
    String url= "http://192.168.5.20:8050/api/v1/dags/"+dag_id+"";
			RestTemplate restTemplate=new RestTemplate();
			HttpHeaders headers = new HttpHeaders();
			headers.add("Authorization", "Basic YWlyZmxvdzphaXJmbG93");			
			HttpEntity<String> request = new HttpEntity<String>(headers);											
			
			ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.DELETE, request, String.class);
    resdata = response.getStatusCode();
    System.out.println("resdata   del  ::::"+resdata);
    
    return resdata.toString();
	
}
  
}


	
/////////////tasks list
@RequestMapping(value = "/tasksDAGdATA", method = RequestMethod.GET)
public @ResponseBody String tasksDAGdATA(@RequestParam String dag_id) 
  {

	String msg ="";
	airflow_path_https = "http://192.168.5.20:8050";
	int airflow_trust_certificate = 1;

	System.out.println("call  tasksDAGdATA start ::::::");

	javax.net.ssl.SSLContext sc =null;
	if(airflow_path_https.contains("https"))
	{
	try 
	{
		InputStream inStream = null;
						
	URL url = new URL( "https://devops.cafebot.ai/api/v1/dags/"+dag_id+"/tasks" );
	if(airflow_trust_certificate == 1)
	{
	 try {
	        TrustManager[] trustAllCerts = new TrustManager[] { 
	            new X509TrustManager() {
					
					@Override
					public X509Certificate[] getAcceptedIssuers() {
						// TODO Auto-generated method stub
						return null;
					}
					
					@Override
					public void checkServerTrusted(X509Certificate[] chain, String authType) throws CertificateException {
						// TODO Auto-generated method stub
						
					}
					
					@Override
					public void checkClientTrusted(X509Certificate[] chain, String authType) throws CertificateException {
						// TODO Auto-generated method stub
						
					}
				}
	        };

	        sc = javax.net.ssl.SSLContext.getInstance("SSL");
	        sc.init(null, trustAllCerts, new SecureRandom());
	      
	        HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
	   	     
	   	  final HostnameVerifier allHostsValid = new HostnameVerifier() {
             @Override
             public boolean verify(final String hostname, final SSLSession session) {
                 return true;
             }
         };
	        
         HttpsURLConnection.setDefaultHostnameVerifier(allHostsValid);
                 
	        
	    } catch (Exception e) 
	    { 
	       System.out.println("error ssl cert :::::"+e.toString());
	    }
	}
	 HttpsURLConnection conn = (HttpsURLConnection) new URL(url.toString()).openConnection();  
	conn.setDoOutput(true);
	conn.setInstanceFollowRedirects(false);
	conn.setRequestMethod("GET");
	conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded"); 
	conn.setRequestProperty("Authorization", "Basic YWlyZmxvdzphaXJmbG93");		
	conn.setRequestProperty("charset", "utf-8");
	conn.setUseCaches(false);

	int HttpResult = conn.getResponseCode();
	
	InputStream resdata = conn.getInputStream();

	System.out.println("HttpResult---" + HttpResult);
	System.out.println("resdata---" + resdata);

	if (HttpResult == 200) 
	{
		inStream = conn.getInputStream();
		BufferedReader bReader = new BufferedReader(new InputStreamReader(inStream));
		String temp, response = "";
		while ((temp = bReader.readLine()) != null) {
			response += temp;
		}
	System.out.println("response---"+response);
	
	JsonObject jsonObject = new JsonParser().parse(response).getAsJsonObject();
	
	String access_token =response;

	System.out.println("access_token------"+access_token);
		msg = access_token;
	 }
	else 
	{
		msg ="";
	}
	
	
	}catch (Exception e) 
	{
		System.out.println("getKeycloakSession---"+e.toString());
		// TODO: handle exception
	}
	return msg;
	
		}
		else
		{
			System.out.println("call tasksDAGdATA start ::::::");
		    String resdata = "";	
		    String url="http://192.168.5.20:8050/api/v1/dags/"+dag_id+"/tasks";
		    
					RestTemplate restTemplate=new RestTemplate();
					HttpHeaders headers = new HttpHeaders();
					headers.add("Authorization", "Basic YWlyZmxvdzphaXJmbG93");			
					HttpEntity<String> request = new HttpEntity<String>(headers);											
					
					ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, request, String.class);
		    resdata = response.getBody();
		    System.out.println("resdata::::"+resdata);
		    
		    return resdata;
		
		}
			
}



/////////////play pause
@RequestMapping(value = "/pause_playDAGdATA", method = RequestMethod.POST)
public @ResponseBody Integer pause_playDAGdATA(@RequestParam String dag_id
,String value) throws IOException 
   {

		int msg =0;
		airflow_path_https = "http://192.168.5.20:8050";
		int airflow_trust_certificate = 1;
		
		System.out.println("call pause_playDAGdATA start ::::::");
		System.out.println("dag id "+dag_id);
		System.out.println("value "+value);
		
		javax.net.ssl.SSLContext sc =null;
		if(airflow_path_https.contains("https"))
		{
			OkHttpClient client = createOkHttpClient();

	    		MediaType mediaType = MediaType.parse("application/json");
	    		RequestBody body = RequestBody.create(mediaType, "{\r\n    \"is_paused\":"+value+"\r\n    }");
	    		Request request = new Request.Builder()
	    		  .url("https://devops.cafebot.ai/api/v1/dags/"+dag_id+"?update_mask=is_paused")
	    		  .method("PATCH", body)
	    		  .addHeader("Content-Type", "application/json")
	    		  .addHeader("Authorization", "Basic YWlyZmxvdzphaXJmbG93")	    		  
	    		  .build();
	    		Response response = client.newCall(request).execute();
	    
	    		msg = response.code();
	    
	    		System.out.println("msg pause_playDAGdATA  ::::::"+msg);
	    
		
		return msg;	 
		
		}
		else
		{
		OkHttpClient client = new OkHttpClient().newBuilder()
				.build();
		MediaType mediaType = MediaType.parse("application/json");
		okhttp3.RequestBody body = okhttp3.RequestBody.create(mediaType, "{\r\n    \"is_paused\":"+value+"\r\n    }");
		Request request = new Request.Builder()
		.url("http://192.168.5.20:8050/api/v1/dags/"+dag_id+"?update_mask=is_paused")
		.method("PATCH", body)
		.addHeader("update_mask", "is_paused")
		.addHeader("Content-Type", "application/json")
		.addHeader("Authorization", "Basic YWlyZmxvdzphaXJmbG93")
		.addHeader("Cookie", "session=dd92bee7-98ad-4900-bab4-811a7e9fb42d.WQ_sbv5st-KLxiwatDK9ReN6ALY")
		.build();
		Response response = client.newCall(request).execute();
		msg = response.code();
		System.out.println("playyyyyyyyyyyyyyyyyyyyyyyyy");
		
		
		return msg;
		
		}

}


/////////////dag run data
@RequestMapping(value = "/dagRunsData", method = RequestMethod.GET)
public @ResponseBody String dagRunsData(@RequestParam String dag_id) throws IOException
{

		String msg ="";
		airflow_path_https = "http://192.168.5.20:8050";
		int airflow_trust_certificate = 1;
		
		javax.net.ssl.SSLContext sc =null;
		if(airflow_path_https.contains("https"))
		{
			System.out.println("call dagRunsData start ::::::");
			System.out.println("dag id "+dag_id);
			
			try 
			{
				InputStream inStream = null;
				
//				 url="http://192.168.5.20:8050/api/v1/dags/"+dag_id+"/dagRuns";
			URL url = new URL("https://devops.cafebot.ai/api/v1/dags/"+dag_id+"/dagRuns");
			if(airflow_trust_certificate == 1)
			{
			 try {
			        TrustManager[] trustAllCerts = new TrustManager[] { 
			            new X509TrustManager() {
							
							@Override
							public X509Certificate[] getAcceptedIssuers() {
								// TODO Auto-generated method stub
								return null;
							}
							
							@Override
							public void checkServerTrusted(X509Certificate[] chain, String authType) throws CertificateException {
								// TODO Auto-generated method stub
								
							}
							
							@Override
							public void checkClientTrusted(X509Certificate[] chain, String authType) throws CertificateException {
								// TODO Auto-generated method stub
								
							}
						}
			        };
		
			         sc = javax.net.ssl.SSLContext.getInstance("SSL");
			        sc.init(null, trustAllCerts, new SecureRandom());
			      
			        HttpsURLConnection.setDefaultSSLSocketFactory(sc.getSocketFactory());
			   	     
			   	  final HostnameVerifier allHostsValid = new HostnameVerifier() {
		              @Override
		              public boolean verify(final String hostname, final SSLSession session) {
		                  return true;
		              }
		          };
			        
		          HttpsURLConnection.setDefaultHostnameVerifier(allHostsValid);
		                  
			        
			    } catch (Exception e) 
			    { 
			       System.out.println("error ssl cert :::::"+e.toString());
			    }
			}
			 HttpsURLConnection conn = (HttpsURLConnection) new URL(url.toString()).openConnection();  
			conn.setDoOutput(true);
			conn.setInstanceFollowRedirects(false);
			conn.setRequestMethod("GET");
			conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded"); 
			conn.setRequestProperty("Authorization", "Basic YWlyZmxvdzphaXJmbG93");		
			conn.setRequestProperty("charset", "utf-8");
			conn.setUseCaches(false);
		
			int HttpResult = conn.getResponseCode();
			
			InputStream resdata = conn.getInputStream();
		
			System.out.println("HttpResult---" + HttpResult);
			System.out.println("resdata---" + resdata);
		
			if (HttpResult == 200) 
			{
				inStream = conn.getInputStream();
				BufferedReader bReader = new BufferedReader(new InputStreamReader(inStream));
				String temp, response = "";
				while ((temp = bReader.readLine()) != null) {
					response += temp;
				}
			System.out.println("response---"+response);
			
			JsonObject jsonObject = new JsonParser().parse(response).getAsJsonObject();
			
			String access_token =response;
		
			System.out.println("access_token------"+access_token);
				msg = access_token;
			 }
			else 
			{
				msg ="";
			}
			
			System.out.println("dagRunsData   msg------"+msg);
			}catch (Exception e) 
			{
				System.out.println("dagRunsData---"+e.toString());
				// TODO: handle exception
			}
			return msg;
		
		
		}
		else
		{

			System.out.println("call dagRunsData start ::::::");
			System.out.println("dag id "+dag_id);
			
			String resdata = "";	
			String url="http://192.168.5.20:8050/api/v1/dags/"+dag_id+"/dagRuns";
			
			RestTemplate restTemplate=new RestTemplate();
			HttpHeaders headers = new HttpHeaders();
			headers.add("Authorization", "Basic YWlyZmxvdzphaXJmbG93");			
			HttpEntity<String> request = new HttpEntity<String>(headers);											
			
			ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, request, String.class);
			resdata = response.getBody();
			//System.out.println("resdata::::"+resdata);
			
			return resdata;
		
		}

}



///////////////dag run data
//@RequestMapping(value = "/dagRunsData", method = RequestMethod.GET)
//public @ResponseBody String dagRunsData(@RequestParam String dag_id) throws IOException {
//
//System.out.println("call dagRunsData start ::::::");
//System.out.println("dag id "+dag_id);
//
//String resdata = "";	
//String url=airflow_ip+"/api/v1/dags/"+dag_id+"/dagRuns";
//
//RestTemplate restTemplate=new RestTemplate();
//HttpHeaders headers = new HttpHeaders();
//headers.add("Authorization", "Basic YWlyZmxvdzphaXJmbG93");			
//HttpEntity<String> request = new HttpEntity<String>(headers);											
//
//ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.GET, request, String.class);
//resdata = response.getBody();
////System.out.println("resdata::::"+resdata);
//
//return resdata;
//
//}    
		
}