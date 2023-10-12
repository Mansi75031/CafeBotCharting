package in.easydata;

import java.io.BufferedReader;
import java.io.BufferedWriter;
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
import java.io.OutputStreamWriter;
import java.io.RandomAccessFile;
import java.io.Writer;
import java.net.HttpURLConnection;
import java.net.URL;




/*import hex.genmodel.MojoModel;
import hex.genmodel.easy.EasyPredictModelWrapper;
import hex.genmodel.easy.RowData;
import hex.genmodel.easy.exception.PredictException;
import hex.genmodel.easy.prediction.BinomialModelPrediction;*/




import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.Scanner;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;

import org.checkerframework.checker.units.qual.cd;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StopWatch;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import com.fasterxml.jackson.databind.SerializationFeature;

@Transactional
@Component
public class DataHelper  {

	// static Logger logger = Logger.getLogger(ExecuteMojo.class.getName()); //
	// Logger.getLogger(ExecuteMojo.class);

//	static Logger logger = Logger.getLogger(DataHelper.class.getName());
	
	static DBconnection dbcon = new DBconnection();
	static Connection con =  dbcon.getConnection_2();

	static DBConClickHouse dbconch = new DBConClickHouse();
	static Connection conch = dbconch.getConnection();
	
//	private SessionFactory sessionFactory;
	
	
	@Autowired
//	private  FileDao fileDao;
	
//	@Autowired
//	private SelectPropertiesDao selectPropertiesDao;
	
	/*
	 * @Autowired DBconnection dbcon;
	 */
	
	public DataHelper() {
		// this(null);
		//con = dbcon.getConnection();
		//System.out.println("con construct");
	}
	
	
	public DataHelper(Object object) {
		// TODO Auto-generated constructor stub
	}

	public static int getfileid() throws IOException, SQLException {
		int returnvalue = 0;

		// DriverManager.getConnection("jdbc:mysql://localhost:3306/feedback_analysis",
		// "root","root");
		try {

			PreparedStatement ps = null;
			String sqlselect = "select id from queue where ismojo=1 limit 1";
			ps = con.prepareStatement(sqlselect);
			ResultSet rs = ps.executeQuery();
			try {
				if (rs.next())
					returnvalue = rs.getInt("id");
				con.close();
			} catch (Exception e) {
				e.toString();
				// logger.error(e);
			}

		} catch (Exception e) {
			try {
				returnvalue = 0;
			} catch (Exception rollback) {
				// logger.error(rollback);
				// logger.debug(rollback);
				// logger.info(rollback);
				returnvalue = 0;
				// rollback.toString();
			}

			// System.out.println(e.getMessage());
		}
		return returnvalue;
	}

//	public int CreateSchema(String filename, String dir, String comments, String projectID) {
//		int id = 0;
//		int returnValue = 0;
//		String userid = "99";
//		try {
//			String tomlpath = Paths.get("\\F\\" + dir + "\\pipeline\\mojo\\pipeline.toml").toString();
//			DBconnection mConnection = new DBconnection();
//			Connection con = mConnection.getConnection();
//			// using (Connection mConnection = con)
//
//			// SqlCommand comm = new SqlCommand();
//			// comm = mConnection.CreateCommand();
//			int statusofile = 0;
//			int dbcreated = 0;
//
//			// STEP 3
//			// INSERT INTO MOJO TABLE
//			String sqlinsert = "INSERT INTO [mojofile] (filename, path,comments,status,[dbcreated],projectid,version,userid) VALUES('"
//					+ filename + "','" + dir + "','" + comments.replace("'", "''") + "'," + statusofile + ","
//					+ dbcreated + "," + projectID + ","
//					+ "(select(SELECT ISNULL((SELECT count(*) FROM mojofile WHERE upper(comments) = upper('" + comments
//					+ "')), 0)) +1)," + " '" + userid + "') ;SELECT SCOPE_IDENTITY();";
//
//			PreparedStatement ps = null;
//			ps = con.prepareStatement(sqlinsert);
//			id = ps.executeUpdate();
//
//			try {
//				ResultSet rs = ps.getGeneratedKeys();
//				if (rs.next()) {
//					id = rs.getInt(1);
//				}
//
//			} catch (Exception e) {
//				e.toString();
//				// logger.error(e);
//			}
//
//			// con.close();
//			returnValue = id;
//			// mConnection.Open();
//			// id = Convert.ToInt32(comm.ExecuteScalar());
//
//			// mConnection.Close();
//
//			String sqlcolumns = "CREATE TABLE mojoDATA_FILE_IN_" + id + "([id][int] IDENTITY(1,1) NOT NULL,"
//					+ "[mojoexecid] [int] NULL,[mojofileid] [int] NULL,[filedatetime] [datetime] NULL DEFAULT (getdate())";
//
//			File file = new File("D:\\h2oMojoWorkspace\\EDAH2O\\EDAH2O\\F\\8154089\\pipeline\\mojo\\pipeline.toml");
//			String info = "";
//			try {
//				FileReader fr = new FileReader(file);
//				BufferedReader br = new BufferedReader(fr);
//				String line;
//				int count = 0;
//				while ((line = br.readLine()) != null) {
//					// process the line
//					if (count == 2) {
//
//					} else {
//						info = info + line + "\n";
//					}
//					if (line == "[[transforms]]") {
//						break;
//					}
//
//					count++;
//					System.out.println(line);
//				}
//			} catch (Exception e) {
//				e.toString();
//				// logger.error(e);
//				// TODO: handle exception
//			}
//
//			// Toml toml = new Toml().read(file);
//			Toml toml = new Toml().read(info);
//			Toml columns = toml.getTable("columns");
//			List<ArrayList<String>> features = columns.getList("features");
//			List<ArrayList<String>> outputs = columns.getList("outputs");
//
//			for (int k = 0; k < features.size(); k++) 
//			{
//				ArrayList<String> val = features.get(k);
//
//				for (int j = 0; j < val.size() - 1; j++) 
//				{
//
//					String temp = val.get(1);
//					if (temp == "float32" || temp == "float64") 
//					{
//						sqlcolumns = sqlcolumns + " ,[" + val.get(0) + "][float] NULL";
//					} 
//					else 
//					{
//						sqlcolumns = sqlcolumns + " ,[" + val.get(0) + "][nvarchar](1024) NULL";
//					}
//				}
//			}
//
//			for (int k = 0; k < outputs.size(); k++) 
//			{
//				ArrayList<String> val = outputs.get(k);
//				
//				for (int j = 0; j < val.size() - 1; j++) 
//				{
//					String temp = val.get(1);
//					if (temp == "float32" || temp == "float64") 
//					{
//						sqlcolumns = sqlcolumns + " ,[" + val.get(0) + "][float] NULL";
//					} 
//					else 
//					{
//						sqlcolumns = sqlcolumns + " ,[" + val.get(0) + "][nvarchar](1024) NULL";
//					}
//				}
//			}
//
//			String chk = sqlcolumns.substring(0, sqlcolumns.length() - 1);
//
//			if (chk == ",") 
//			{
//				sqlcolumns = sqlcolumns.substring(0, sqlcolumns.length() - 1);
//				sqlcolumns = sqlcolumns + ")";
//			} 
//			else 
//			{
//				sqlcolumns = sqlcolumns + ")";
//			}
//
//			PreparedStatement pscreate = null;
//			pscreate = con.prepareStatement(sqlcolumns);
//			pscreate.executeUpdate();
//			con.close();
//		} catch (Exception e) {
//			e.toString();
//			// logger.error(e);
//			returnValue = id;
//		}
//		return returnValue;
//	}

	public String ReadmojoInfo(String filepath) {
		String info = "";
		try {
			String path = filepath;

			File file = new File("D:\\h2oMojoWorkspace\\java_h20\\h20\\F\\PT-231383649S\\pipeline\\mojo\\dai_build.info");
			FileReader fr = new FileReader(file);
			BufferedReader br = new BufferedReader(fr);
			String line;
			while ((line = br.readLine()) != null) {
				// process the line
				info = info + line + "\n";

				System.out.println(line);
			}

		} catch (Exception e) {
			e.toString();
			// logger.error(e);
			// TODO: handle exception
		}

		return info;

	}

//	@SuppressWarnings("null")
//	public static void callmojo(int fileid) throws IOException, SQLException {
//
//		String[] arrayOfString = { "id", "Rank#", "KEYWORDS", "ISSUE#1", "ISSUE#2", "MODULES", "CATEGORY", "FEEDBACK",
//				"SCORE", "SCOREOTCA", "TIME" }; // ((SimpleCSV) localObject1).getLabels();
//
//		try {
//
//			// Statement stmt = con.createStatement();
//			// ResultSet rs = stmt.executeQuery("select count(*) as cnt from filedetails
//			// where fileid=" + fileid);
//
//			PreparedStatement ps = null;
//			String sqlselect = "select count(*) as cnt from filedetails where fileid=" + fileid;
//			ps = con.prepareStatement(sqlselect);
//			ResultSet rs = ps.executeQuery();
//			try {
//				int rows = 0;
//				if (rs.next())
//					rows = rs.getInt(1);
//
//				rs.close();
//
//				String sqlselecfromfile = "select id, issuerank as 'Rank',KEYWORDS,topissue1 as 'ISSUE#1',topissue2 as 'ISSUE#2',MODULES,CATEGORY,"
//						+ " FEEDBACK,SCORE,SCOREOTCA,feeddatetime as 'TIME' from filedetails where fileid=" + fileid;
//				ps = con.prepareStatement(sqlselecfromfile);
//				rs = ps.executeQuery();
//
//				String[][] arrayOfString1 = new String[rows][11];
//				int row = 0;
//				while (rs.next()) {
//					arrayOfString1[row][0] = rs.getString(1);
//					arrayOfString1[row][1] = rs.getString(2);
//					arrayOfString1[row][2] = rs.getString(3);
//					arrayOfString1[row][3] = rs.getString(4);
//					arrayOfString1[row][4] = rs.getString(5);
//					arrayOfString1[row][5] = rs.getString(6);
//					arrayOfString1[row][6] = rs.getString(7);
//					arrayOfString1[row][7] = rs.getString(8);
//					arrayOfString1[row][8] = rs.getString(9);
//					arrayOfString1[row][9] = rs.getString(10);
//					arrayOfString1[row][10] = rs.getString(11);
//					row++;
//				}
//				// con.close();
//				MojoPipeline localMojoPipeline = null;
//				// localObject1 = StopWatch.start();
//				// localMojoPipeline =
//				// MojoPipeline.loadFrom("C:\\Users\\Aj\\Desktop\\DBS_MOJO\\pipeline.mojo");
//
//				localMojoPipeline = MojoPipeline
//						.loadFrom("C:\\inetpub\\wwwroot\\edafeedback\\Files\\mojo\\pipeline.mojo");
//
//				// banner("Mojo load time: " + ((StopWatch)localObject1).lapStr());
//				MojoFrameBuilder localMojoFrameBuilder = localMojoPipeline.getInputFrameBuilder();
//
//				MojoRowBuilder localMojoRowBuilder = localMojoFrameBuilder.getMojoRowBuilder();
//
//				for (String[] str2 : arrayOfString1) 
//				{
//					
//					for (int k = 0; k < str2.length; k++) 
//					{
//						localMojoRowBuilder.setValue(arrayOfString[k], str2[k]);
//					}
//					
//					localMojoRowBuilder = localMojoFrameBuilder.addRow(localMojoRowBuilder);
//				}
//
//				localMojoFrameBuilder.toMojoFrame();
//
//				StopWatch localStopWatch = StopWatch.start();
//				MojoFrame localMojoFrame = localMojoPipeline.transform(localMojoFrameBuilder);
//				String str2 = localStopWatch.lapStr((localMojoFrame).getNrows());
//
//				//SimpleCSV localSimpleCSV = SimpleCSV.read(localMojoFrame);
//				// localSimpleCSV.write(System.out);
//
//				String[][] pridiction = null;//localSimpleCSV.getData();
//
//				// String[][] arr3 = new String[rows][12];
//
//				int[] result = null;
//
//				// ps = con.prepareStatement();
//				// con.setAutoCommit(false); // Setting auto-commit off
//
//				for (int j = 0; j < rows; j++) {
////				arr3[j][0]=arrayOfString1[j][0];
////				arr3[j][1]=arrayOfString1[j][1];
////				arr3[j][2]=arrayOfString1[j][2];
////				arr3[j][3]=arrayOfString1[j][3];
////				arr3[j][4]=arrayOfString1[j][4];
////				arr3[j][5]=arrayOfString1[j][5];
////				arr3[j][6]=arrayOfString1[j][6];
////				arr3[j][7]=arrayOfString1[j][7];
////				arr3[j][8]=arrayOfString1[j][8];
////				arr3[j][9]=arrayOfString1[j][9];
////				arr3[j][10]=arrayOfString1[j][10];
////				arr3[j][11]=pridiction[j][0];
//					String SQL = "update filedetails set scoreh2o =" + pridiction[j][0] + " where id="
//							+ arrayOfString1[j][0];
//					ps.addBatch(SQL); // add statement to Batch
//				}
//				// System.out.println(arr3.length);
//
//				ps.addBatch("update file set ismojo=0 where id=" + fileid);
//				result = ps.executeBatch(); // execute the Batch
//				con.commit(); // commit
//				// con.rollback();
//				// stmt = con.createStatement();
//				// stmt.executeUpdate("update file set ismojo=0 where id=" + fileid);
//				// con.close();
//
//			} catch (Exception e) {
//				System.out.println(e);
//				con.rollback();
//			}
//		} finally {
//			if (con != null)
//				con.close(); // finally close the connection
//		}
//
//	}

	// experiment
	// id, c:\\....\\F\\, 1234.csv,tml.csv,comments
//	public String executeMojo(String tableid, String mojopath, String csvpath, String originalcsvfilename,
//			String comments, int userid, String delimiter, String qualifier)
//			throws IOException, SQLException, InterruptedException {
//		String msg = "";
//		// String originalcsvfilename="test.csv";
//		String mojofilepath = "";
//		String csvfilepath = "";
//		String tablename = "mojodata_file_in_" + tableid;
//		// String comments="comments";
//		// int userid=1;
//		DBconnection schema = new DBconnection();
//		Connection conschema = schema.getConnection();
//		DatabaseMetaData dbmd = conschema.getMetaData();
//		HashMap<String, String> columnschema = new HashMap<>();
//
//		PreparedStatement ps = null;
//		ps = con.prepareStatement("select filename, path from mojofile where id=" + tableid);
//		String filename = "";
//		String path = "";
//		if (ps.execute()) {
//			ResultSet rs = ps.getResultSet();
//			rs.next();
//			filename = rs.getString("filename");
//			path = rs.getString("path");
//		}
//		csvfilepath = mojopath + path + "\\" + csvpath;
//
//		int id = 0;
//		String querymojoexec = "INSERT INTO public.mojoexec(mojofileid, filename, 				path, 				comments, 	 userid, 		 delimiter, 			qualifier, status) values("
//				+ tableid + ",'" + originalcsvfilename + "','" + csvfilepath + "','" + comments + "'," + userid + ",'"
//				+ delimiter + "','" + qualifier + "',0) RETURNING id";
//
//		System.out.println(querymojoexec);
//
//		ps = con.prepareStatement(querymojoexec);
//
//		if (ps.execute()) {
//			ResultSet rs = ps.getResultSet();
//			rs.next();
//			id = rs.getInt(1);
//		} else {
//			id = ps.getUpdateCount();
//		}
//
//		// System.out.println("id="+id);
//		//
//
//		ResultSet resultSet = dbmd.getColumns(null, null, tablename, null);// getTables(null, null, "a_asset", types);
//		while (resultSet.next()) {
//			columnschema.put(resultSet.getString("COLUMN_NAME"), resultSet.getString("TYPE_NAME"));
//			// System.out.println(resultSet.getString("TYPE_NAME"));
//			// System.out.println(resultSet.getString("COLUMN_NAME"));
//		}
//
//		System.out.println(columnschema);
//
//		///////////// EXPERIMENT
//		MojoPipeline localMojoPipeline = null;
//		try {
//			System.out.println(mojopath);
//
//			localMojoPipeline = MojoPipeline.loadFrom(mojopath + path + "\\" + filename);
//			// "D:\\h2oMojoWorkspace\\EDAH2O\\EDAH2O\\F\\9644784\\mojozip\\mojo-pipeline\\pipeline.mojo");
//			// //mojofilepath
//		} catch (LicenseException localLicenseException) {
//			System.out.print("lic:" + localLicenseException.toString());
//		} catch (Exception e) {
//			System.out.print("normal:" + e.toString());
//		}
//
//		Thread.sleep(2000);
//
//		Object localObject1 = null;//SimpleCSV.read(csvfilepath);
//		// .read("D:\\h2oMojoWorkspace\\EDAH2O\\EDAH2O\\F\\9644784\\mojozip\\mojo-pipeline\\example10.csv");
//		// //csvfilepath
//		MojoFrameBuilder localMojoFrameBuilder = localMojoPipeline.getInputFrameBuilder();
//		String[] arrayOfString = null;// ((SimpleCSV) localObject1).getLabels();
//		String[][] arrayOfString1 = null;//((SimpleCSV) localObject1).getData();
//		MojoRowBuilder localMojoRowBuilder = localMojoFrameBuilder.getMojoRowBuilder();
//		for (String[] str2 : arrayOfString1) {
//			for (int k = 0; k < str2.length; k++) {
//				localMojoRowBuilder.setValue(arrayOfString[k], str2[k]);
//			}
//			localMojoRowBuilder = localMojoFrameBuilder.addRow(localMojoRowBuilder);
//		}
//
//		Thread.sleep(2000);
//		localMojoFrameBuilder.toMojoFrame();
//		StopWatch localStopWatch = StopWatch.start();
//		MojoFrame localMojoFrame = localMojoPipeline.transform(localMojoFrameBuilder);
//		String str2 = localStopWatch.lapStr((localMojoFrame).getNrows());
//		//SimpleCSV localSimpleCSV = SimpleCSV.read(localMojoFrame);
//
//		String[] precol = null;// localSimpleCSV.getLabels();
//		String[][] pre = null;//localSimpleCSV.getData();
//		// String [][] combineData = new String[arrayOfString.length +
//		// precol.length][arrayOfString1.length + pre.length];
//		List headerlist = new ArrayList(Arrays.asList(arrayOfString));
//		headerlist.addAll(Arrays.asList(precol));
//		String[][] combineData = new String[pre.length][headerlist.size()];
//		String header = "";
//		for (int l = 0; l < headerlist.size(); l++) {
//			if (l == 0) {
//				header = "\"" + headerlist.get(l).toString() + "\"";
//			} else {
//				header = header + "," + "\"" + headerlist.get(l).toString() + "\"";
//			}
//		}
//		// List listdata = new ArrayList(Arrays.asList(arrayOfString1));
//		// listdata.addAll(Arrays.asList(pre));
//		for (int row = 0; row < pre.length; row++) {
//			// combineData[row] = arrayOfString1[row];
//			int count = 0;
//			for (int j = 0; j < arrayOfString1[row].length; j++) {
//				combineData[row][j] = arrayOfString1[row][j];
//				count++;
//			}
//			for (int j = 0; j < pre[row].length; j++) {
//				// System.out.println("Values at arr[" + row + "][" + j + "] is " +
//				// pre[row][j]);
//				combineData[row][count] = arrayOfString1[row] + pre[row][j];
//				combineData[row][count] = pre[row][j];
//				// System.out.println("Values at comb[" + row + "][" + count + "] is " +
//				// combineData[row][count]);
//				count++;
//
//			}
//		}
//
//		List<String> qlist = new ArrayList<String>();
//		for (int q = 0; q < combineData.length - 1; q++) {
//			String value = "";
//			String colname = headerlist.get(q).toString();
//			String datatype = "";
//			if (columnschema.containsKey(colname)) {
//				datatype = columnschema.get(colname);
//			}
//			for (int j = 0; j < combineData[q].length; j++) {
//				String datawithtype = "";
//				if (datatype == "numeric") {
//					datawithtype = combineData[q][j].toString();
//				} else if (datatype == "varchar" || datatype == "character varying") {
//					datawithtype = "'" + combineData[q][j].toString() + "'";
//				} else if (datatype == "timestamp") {
//					datawithtype = "'" + combineData[q][j].toString() + "'";
//				} else if (datatype == "float8") {
//					datawithtype = combineData[q][j].toString();
//				} else {
//					datawithtype = "'" + combineData[q][j].toString() + "'";
//				}
//				if (j == 0) {
//					value = datawithtype;// combineData[q][j].toString();//.getClass().getName();
//				} else {
//					value = value + "," + datawithtype; // combineData[q][j].toString();
//				}
//			}
//
//			String query = "insert into " + tablename + "(mojoexecid,mojofileid, " + header + ")  values (" + id + ","
//					+ tableid + ", " + value + ") ;";
//			System.out.println(query);
//			qlist.add(query);
//		}
//
//		DBconnection conn = new DBconnection();
//		Connection connection = conn.getConnection();
//		Statement statement = connection.createStatement();
//
//		for (String query : qlist) {
//			statement.addBatch(query);
//		}
//		statement.executeBatch();
//		statement.close();
//		connection.close();
//
////	    if (str1 != null) {
////	      localSimpleCSV.write(str1);
////	    } else {
//		
//		
//		//localSimpleCSV.write(System.out);
//		
//		
////	    }
//
///////////////EXPERIMENT
//
//		return msg;
//
//	}

//	public String jsonSql(Object jsoncontent) throws IOException {
//
//		//String contents = new String(Files.readAllBytes(Paths.get(filepath)));
//		// System.out.println("Contents (Java 7) : " + contents);
//		String jsondata = "{\"data\":" + jsoncontent + "}"; // D:\
//		System.out.println("jsoncontent ===" + jsoncontent); 
//		//System.out.println("jsondata ===" + jsondata); 
//		List<String> tablenamelist = new ArrayList<String>();   
//		HashMap<String, String> colmap = new HashMap<String, String>();      
//		List<String> joinlist = new ArrayList<String>();
//   
//		JsonParser jsonParser = new JsonParser();
//		JsonObject objectFromString = jsonParser.parse(jsondata).getAsJsonObject();
//
//		JsonArray jsonarr = objectFromString.getAsJsonArray("data");
//		
//		Iterator<JsonElement> headeriterator = jsonarr.iterator();
//
//		List<String> arrayofheader = new ArrayList<String>();
//		int count = 0;
//		while (headeriterator.hasNext()) {
//			JsonObject jsonObject = (JsonObject) headeriterator.next();
//			if (count == 0) {
//				String tname = "";
//				for (String key : jsonObject.keySet()) {
//
//					if (key.equalsIgnoreCase("name")) {
//						tablenamelist.add(jsonObject.get(key).toString().replace("\"", ""));
//						tname = jsonObject.get(key).toString();
//						// System.out.println(key + ":" + jsonObject.get(key));
//					} else if (key.equalsIgnoreCase("entities")) {
//						// System.out.println(key + ":" + jsonObject.get(key));
//						JsonParser jsonParserentity = new JsonParser();
//						JsonObject objectFromentity = jsonParserentity
//								.parse("{\"" + key + "\":" + jsonObject.get(key) + "}").getAsJsonObject();
//						JsonArray jsonentityarr = objectFromentity.getAsJsonArray("entities");
//						 System.out.println("jsonentity==="+jsonentityarr.toString());
//
//						Iterator<JsonElement> entityiterator = jsonentityarr.iterator();
//						while (entityiterator.hasNext()) {
//							JsonObject jsonObjectentity = (JsonObject) entityiterator.next();
//
//							List<String> entities = new ArrayList<String>();
//							for (String keyentity : jsonObjectentity.keySet()) {
//								 System.out.println(keyentity + ":" + jsonObjectentity.get(keyentity));
//								entities.add(jsonObjectentity.get(keyentity).toString());
//							}
//
//							colmap.put(entities.get(0), tname + "-" + entities.get(1));
//
//						}
//					}
//
//					else if (key.equalsIgnoreCase("source")) {
//						JsonObject jobj = jsonParser.parse(jsonObject.get(key).toString()).getAsJsonObject();
//						JsonElement joinelement = jobj.get("port");
//						// System.out.println("join source" +joinelement);
//						String rep = joinelement.toString().replace("output_", "");
//						System.out.println("replace ===="+rep); 
//						 System.out.println("colmap====="+colmap.toString());
//						System.out.println("name source=" + colmap.get(rep).toString().replace("\"", ""));
//						// System.out.println("map====="+colmap.toString());
//						joinlist.add(colmap.get(rep).toString().replace("\"", ""));
//					} else if (key.equalsIgnoreCase("target")) {
//						JsonObject jobj = jsonParser.parse(jsonObject.get(key).toString()).getAsJsonObject();
//						JsonElement joinelement = jobj.get("port"); 
//						// System.out.println("join target"+joinelement);
//						String rep = joinelement.toString().replace("input_", "");
//						// System.out.println("replace ===="+rep); 
//						System.out.println("name target=" + colmap.get(rep).toString().replace("\"", ""));
//						// System.out.println("map====="+colmap.toString());
//						joinlist.add(colmap.get(rep).toString().replace("\"", ""));
//					}
//
//					arrayofheader.add(key);
//				}
//			}
//			// count++;
//		}
//
//		// select
//		// t1.data->>'name' AS name,t1.data->>'age' as age,t1.data->>'groupid' as
//		// groupid, t2.data->>'name' as name
//		// from employee t1
//		// inner join employee t2 on t1.data->>'groupid' = t2.data->>'id'
//
//		String sql = "select ";
//		List<String> tablealias = new ArrayList<String>();
//
//		for (int i = 0; i < tablenamelist.size(); i++) {
//			tablealias.add(tablenamelist.get(i) + "= t" + (i + 1));
//			for (Map.Entry<String, String> entry : colmap.entrySet()) {
//				// System.out.println(entry.getKey() + "/" + entry.getValue());
//
//				String[] tname = entry.getValue().replace("\"", "").split("-");
//				if (tname[0].equalsIgnoreCase(tablenamelist.get(i))) {
//					sql += " t" + (i + 1) + ".data->>" + "'" + tname[1] + "'";
//				}
//			}
//		}
//
//		sql += " from filedetails t1";
//
//		System.out.println("sql1=====" + sql);
//		System.out.println("joinlist======" + joinlist.toString() + "=size =" + joinlist.size());
//		System.out.println("tablealias====" + tablealias.toString());
//		String join = " inner join filedetails";
//
//		for (int k = 0; k <= joinlist.size() - 2; k++) {
//			String[] source = joinlist.get(k).replace("\"", "").split("-");
//			String[] target = joinlist.get(k + 1).replace("\"", "").split("-");
//
//			String sname = "";
//			String tname = "";
//			for (int j = 0; j < tablealias.size(); j++) {
//				String[] tablealiasname = tablealias.get(j).split("=");
//				if (source[0].equalsIgnoreCase(tablealiasname[0])) {
//					sname = tablealiasname[1];
//				}
//				if (target[0].equalsIgnoreCase(tablealiasname[0])) {
//					tname = tablealiasname[1];
//				}
//			}
//
//			join += tname + " on " + sname + ".data->>'" + source[1] + "' = " + tname + ".data->>'" + target[1] + "'";
//
//		}
//
//		sql = sql + join;
//		System.out.println("sql=======" + sql);
//
//		// System.out.println("hashMAp====="+colmap.toString());
//		// System.out.println("json return====="+arra yofheader);
//		return sql;
//
//	}

	
//	public String jsonCsv() throws IOException 
//	 {
//	 String json="";
//	 
//	 //File csvdataFile  = new File("D:\\9718114.csv");
//			Object localObject1 = null;//  SimpleCSV.read("D:\\9718114.csv");
//
//			String[] arrayOfString = null ;//((SimpleCSV) localObject1).getLabels();
//			String[][] arrayOfString1 = null ;//((SimpleCSV) localObject1).getData();
//			//System.out.println(arrayOfString1);
//			
//			JsonArray jsonarr= new JsonArray();
//			for (String[] str2 : arrayOfString1) {
//				JsonObject obj = new JsonObject();
//			
//				for (int k = 0; k < str2.length; k++)
//				{
//					obj.addProperty(arrayOfString[k], str2[k]);
//					//localMojoRowBuilder.setValue(arrayOfString[k], str2[k]);
//				}
//				jsonarr.add(obj);
//			}
//			
//			
//	 JsonParser jsonParser = new JsonParser(); 
//	 JsonObject objectFromString = jsonParser.parse("{\"data\":"+jsonarr.toString()+"}" ).getAsJsonObject();
//	 JsonArray jsonarray = objectFromString.getAsJsonArray("data");
//	 System.out.println("jsonarray==="+jsonarr.toString());
//	 Iterator<JsonElement> headeriterator = jsonarr.iterator();
//			
//			List<String> qlist = new ArrayList<String>(); 
//			//String query="";
//			for(int i = 0; i < jsonarr.size(); i++)
//			{
//	 while (headeriterator.hasNext())
//	 { 
//	    JsonObject jsonObject = (JsonObject) headeriterator.next();
//	   // System.out.println("jsonObject==="+jsonObject);
//	    String query = "insert into filedetails(fileid,data) values ("+(i+1)+",'" + jsonObject.toString() + "') ;";
//						System.out.println(query);
//						qlist.add(query);    
//	 }
//			} 
//			
//			DBconnection db = new DBconnection();
//			Connection con = db.getConnection();
//			try {
//				Statement statement = con.createStatement();
//				
//			for (String querystr : qlist) {
//					statement.addBatch(querystr); 
//				}
//				statement.executeBatch();
//				statement.close();
//				
//				
//			} catch (SQLException e) {
//				// TODO Auto-generated catch block
//				e.printStackTrace();
//			}
//			
//	 return jsonarr.toString();
//	 }

	@SuppressWarnings("serial")
	private void setJsonb(String id,String json) throws IOException {
		
		DBconnection schema = new DBconnection();
		Connection conschema = schema.getConnection_2();
		//DatabaseMetaData dbmd = conschema.getMetaData();
		//HashMap<String, String> columnschema = new HashMap<>();
        //System.out.println("enter");
		PreparedStatement ps = null;
		String filename = "";
		String path = "";
		String sql = "update blendproject set jsonschema='"+json +"' where id="+id;
    	try {
			ps = conschema.prepareStatement(sql);				
			ps.executeQuery();  
    	}
    	catch (Exception e) {
    		System.out.println(e.getMessage());			
		}
	}
	
	
	
	
	
	private void getSchema() throws SQLException {
		DBconnection schema = new DBconnection();
		Connection conschema = schema.getConnection_2();
		DatabaseMetaData dbmd = conschema.getMetaData();
		HashMap<String, String> columnschema = new HashMap<>();

		ResultSet resultSet = dbmd.getColumns(null, null, null, null);// getTables(null, null, "a_asset", types);
		while (resultSet.next()) {
			columnschema.put(resultSet.getString("COLUMN_NAME"), resultSet.getString("TYPE_NAME"));
			// System.out.println(resultSet.getString("TYPE_NAME"));
			// System.out.println(resultSet.getString("COLUMN_NAME"));
		}
		
	}
	
	public int  getTableid(String tablename) 
	{
		int id= 0;
		PreparedStatement ps = null;
		ResultSet rs = null;
		String sqlselecfromfile = "select id from file where tablename =  (select fileid from filename where fname='"+tablename+"' limit 1) || '.csv.json' ";
		try {
			ps = con.prepareStatement(sqlselecfromfile);
			rs = ps.executeQuery();
		while (rs.next())  
		{
				id = rs.getInt("id");
		}
		
		}catch (Exception e) {   
			id=0;
			System.out.println(e.getMessage());
			// TODO: handle exception
		}
		
		return id;
		
	}

	
	public String  getCHTableName(String tablename) 
	{
		String tid= "";
		PreparedStatement ps = null;
		ResultSet rs = null;
		String sqlselecfromfile = "select fileid from filename where fname='"+tablename+"' limit 1 ";
		try {
			ps = con.prepareStatement(sqlselecfromfile);
			rs = ps.executeQuery();
		while (rs.next())  
		{
			tid = rs.getString("fileid");
		}
		
		System.out.println("tid:::::::::::"+tid);
		}catch (Exception e) {   
			tid = "";
			System.out.println(e.getMessage());
			// TODO: handle exception
		}
		
		return tid;
		
	}
	
	public String  getTableNameForclickHouse(int fileid) 
	{
		String tablename =  "";
		PreparedStatement ps = null;
		ResultSet rs = null;
		String sqlselecfromfile = "select tablename from file where id= "+fileid;
		System.out.println("sqlselecfromfile--"+sqlselecfromfile);
		try {
			ps = con.prepareStatement(sqlselecfromfile);
			rs = ps.executeQuery();
		while (rs.next())  
		{   
			tablename = rs.getString("tablename");
		}
		
		}catch (Exception e) {   
			tablename = "";
			System.out.println(e.getMessage());
			// TODO: handle exception
		}
		
		tablename =tablename.replace(".csv", "");
		return tablename;
		
	}
	
	
	public String  getcomponentQuery(String componentid) 
	{
		String sqlquery =  "";
		PreparedStatement ps = null;
		ResultSet rs = null;
		String sqlselecfromfile = "select sqlquery from fileflow where componentid= '"+componentid+"'";
		try {
			ps = con.prepareStatement(sqlselecfromfile);
			rs = ps.executeQuery();
		while (rs.next())  
		{
			sqlquery = rs.getString("sqlquery");
		}
		
		}catch (Exception e) {   
			sqlquery = "";
			System.out.println(e.getMessage());
			// TODO: handle exception
		}
		
		return sqlquery;
		
	}
	
	public int checktableisQuery(int fileid) 
	{
		int msg  = 0;
		PreparedStatement ps = null;
		ResultSet rs = null;
		String sqlselecfromfile = "select isquery from file where id ="+fileid ;
		       System.out.println("sqlselecfromfile isquery--"+sqlselecfromfile);
		try {
			ps = con.prepareStatement(sqlselecfromfile);
			rs = ps.executeQuery();
				while (rs.next())  
				{
					//tname = rs.getString("tablename");
					msg=  rs.getInt("isquery");
				}
		  }catch (Exception e) 
		  {   
			msg = -1;
			System.out.println(e.getMessage());
			// TODO: handle exception
		  }
		return msg;
	}



	public List<String> getdistinctColarr(String colname,String tablenamequery,int isquery) 
	{
		System.out.println("colname==== "+colname);
		List<String> colarr  = new ArrayList<String>();
		PreparedStatement ps = null;
		ResultSet rs = null;
		
		DBConClickHouse dbconch = new DBConClickHouse();
		Connection conch = dbconch.getConnection();
		String sqlselecfromfile = "" ;
		
		
		   
		//to do check if its required -----
		//colname = colname.replace("\"", "");
		
		if (isquery==1) 
		{
			//need to verify
			sqlselecfromfile = "select arrayDistinct(groupArray("+colname+")) as colarr from cafebot."+tablenamequery ;
		}
		else    
		{
		    sqlselecfromfile = "select arrayDistinct(groupArray("+colname+")) as colarr from  cafebot."+tablenamequery ;
		}
		
		System.out.println("sqlselecfromfile--"+sqlselecfromfile);
		try {
			ps = conch.prepareStatement(sqlselecfromfile);
			rs = ps.executeQuery();
				while (rs.next())  
				{
					String arr="";
					arr =  rs.getString("colarr");
					arr = arr.replace("[", "").replace("]", "").replace("'", "");
					for (int k=0;k<arr.split(",").length;k++)    
					{
						colarr.add(arr.split(",")[k]);	
					}
					
				}
		  }catch (Exception e) 
		  {   
			  colarr =  new ArrayList<String>();
			System.out.println(e.getMessage());
			// TODO: handle exception
		  }
		return colarr;
	}
	
	/*
	 * public int getFilenamewithversion(String txtDesc) { int version = -1; txtDesc
	 * = txtDesc.toUpperCase(); PreparedStatement ps = null; ResultSet rs = null;
	 * String sqlselecfromfile =
	 * "select version from filename where upper(fname) ='"+txtDesc.trim().
	 * toUpperCase()+ "'  order by version desc limit 1";
	 * System.out.println("sqlselecfromfile--"+sqlselecfromfile); try { ps =
	 * con.prepareStatement(sqlselecfromfile); rs = ps.executeQuery(); while
	 * (rs.next()) { version = rs.getInt("version");
	 * 
	 * }
	 * 
	 * }catch (Exception e) { version = -1; System.out.println(e.getMessage()); //
	 * TODO: handle exception }
	 * 
	 * System.out.println("version :: "+version); return version;
	 * 
	 * }
	 */

	
	/*
	 * @SuppressWarnings("resource") public int getFilenamewithversion(String
	 * txtDesc) { int version = -1; txtDesc = txtDesc.toUpperCase();
	 * PreparedStatement ps = null; ResultSet rs = null;
	 * 
	 * String sqlselecfromfile =
	 * "select version from filename where upper(fname) ='"+txtDesc.trim()+
	 * "'  order by version desc limit 1"; txtDesc=txtDesc.trim()+"_V1"; String
	 * sqlselecfromfile_v1 =
	 * "select version from filename where upper(fname) ='"+txtDesc.trim()+
	 * "'  order by version desc limit 1"; txtDesc=txtDesc.trim()+"_V2"; String
	 * sqlselecfromfile_v2 =
	 * "select version from filename where upper(fname) ='"+txtDesc.trim()+
	 * "'  order by version desc limit 1";
	 * System.out.println("sqlselecfromfile--"+sqlselecfromfile); try { ps =
	 * con.prepareStatement(sqlselecfromfile); rs = ps.executeQuery();
	 * 
	 * 
	 * while (rs.next()) { version = rs.getInt("version");
	 * System.out.println("version ::-> "+version); ps =
	 * con.prepareStatement(sqlselecfromfile_v1); rs = ps.executeQuery(); while
	 * (rs.next()) { version = rs.getInt("version");
	 * System.out.println("version v1::-> "+version); ps =
	 * con.prepareStatement(sqlselecfromfile_v2); rs = ps.executeQuery(); while
	 * (rs.next()) { version = rs.getInt("version");
	 * System.out.println("version v2::-> "+version); } } }
	 * System.out.println("version :: "+version); }catch (Exception e) { version =
	 * -1; System.out.println(e.getMessage()); // TODO: handle exception } return
	 * version; }
	 */

	
	@SuppressWarnings("resource")
	public int getFilenamewithversion(String txtDesc) 
	{
		int version  = -1;
		
		
		
		txtDesc = txtDesc.toUpperCase();
		PreparedStatement ps = null;
		ResultSet rs = null;
		String sqlselecfromfile = "select version from filename where upper(fname) like '"+txtDesc.trim()+"_V%' or upper(fname) like '"+txtDesc.trim()+"'"+" order by version desc limit 1";
		System.out.println("sqlselecfromfile--"+sqlselecfromfile);
		try {
			ps = con.prepareStatement(sqlselecfromfile);
			rs = ps.executeQuery();		
		while (rs.next())  
		{
			version = rs.getInt(1);
		}
		
		ps.close();
		rs.close();
		
		System.out.println("version :: "+version);
		}catch (Exception e) {   
			version = -1;
			System.out.println(e.getMessage());
			// TODO: handle exception
		}
		return version;
	}
	
	
	
	@SuppressWarnings("resource")
	public int getSparkjobwithversion(String txtDesc) 
	{
		int version  = -1;
		txtDesc = txtDesc.toUpperCase();
		PreparedStatement ps = null;
		ResultSet rs = null;
		String sqlselecfromfile = "select version from spark_jobs where upper(job_name) like '"+txtDesc.trim()+"_V%' or upper(job_name) like '"+txtDesc.trim()+"'"+" order by version desc limit 1";
		System.out.println("sqlselecfromfile--"+sqlselecfromfile);
		try {
			ps = con.prepareStatement(sqlselecfromfile);
			rs = ps.executeQuery();		
		while (rs.next())  
		{
			version = rs.getInt(1);
		}
		
		ps.close();
		rs.close();
		
		System.out.println("version :: "+version);
		}catch (Exception e) {   
			version = -1;
			System.out.println(e.getMessage());
			// TODO: handle exception
		}
		return version;
	}
	
	
	@SuppressWarnings("resource")
	public int isDashboardexist(String dashname) 
	{
		int version  = -1;
		String txtDesc = dashname.toUpperCase();
		PreparedStatement ps = null;
		ResultSet rs = null;
		String sqlselecfromfile = "select * from dashboards where upper(dashboard_title) like '"+txtDesc.trim()+"'"+"  limit 1";
		
		System.out.println("isDashboardexist sqlselecfromfile--"+sqlselecfromfile);
		
		try {
			ps = con.prepareStatement(sqlselecfromfile);  
			rs = ps.executeQuery();		
		while (rs.next())     
		{
			version =1;
		}
		if (version !=1) {version =2;}	 //not exist
		
		ps.close();
		rs.close();
		
		System.out.println("version :: "+version);
		}catch (Exception e) 
		{   
			version = 0;
			System.out.println(e.getMessage());
			// TODO: handle exception
		}
		
		System.out.println("version::::"+version);
		
		return version;
	}
	
	
	public List<String> getAllTableList(String ConnectionIp,String uname,String pass,String dbname) 
	{
		
		DBConClickHouse dbconch = new DBConClickHouse();
		Connection conch = dbconch.getConnection();
	List<String> ls = new ArrayList<String>();
		try {    
			String tablelistQ = "SELECT name FROM system.tables where database='cafebot'";
			PreparedStatement ps = null;               
			
			ps = conch.prepareStatement(tablelistQ);
			
			ResultSet  rs = ps.executeQuery();
			
			while(rs.next()) 
			{
				//String tname = rs.getString(1);
				//System.out.println("tname--"+tname);
				ls.add(rs.getString(1));
			}
		}catch (Exception e) 
		{
			//ls.add("");
			System.out.println("clickhouse get table-" +e.toString());
			// TODO: handle exception
		}
		
		return ls;
		
	}

	
	
	public List<Map> getAllTableListCAFEBOT() 
	{
		
		/*
		 * DBConClickHouse dbconch = new DBConClickHouse(); Connection conch =
		 * dbconch.getConnection();
		 */	
		Map<String, String> tableList = new HashMap<String, String>();
		List<Map> ls = new ArrayList<Map>();
		try {    
			String tablelistQ = "select fileid,fname from filename where status =6 order by fname";
			PreparedStatement ps = null;               
			
			System.out.println("tablelistQ:::::"+tablelistQ);
			ps = con.prepareStatement(tablelistQ);
			
			ResultSet  rs = ps.executeQuery();
			
			while(rs.next()) 
			{
				 tableList = new HashMap<String, String>();
				String fid = rs.getString(1);
				String tname = rs.getString(2);
				//System.out.println("tname--"+tname);
				tableList.put("TABLENAME", tname);
				
				//ls.add(rs.getString(1));
				ls.add(tableList);
			}
			
			
			System.out.println("ls::::::"+ls.toString());
		}catch (Exception e) 
		{
			//ls.add("");
			ls = new ArrayList<Map>();
			System.out.println("clickhouse get table-" +e.toString());
			// TODO: handle exception
		}
		
		return ls;
		
	}
	
	
//	public int  loadTablefromClickhouse(String ConnectionIp,String uname,String pass,String dbname,
//			String tablename,String userDefinedTablename,SessionFactory sessionFactory) 
//	{
//		
//		int msg =0;
//	
//		int fileid = insertFileobject(tablename,userDefinedTablename,sessionFactory); 
//		
//		if (fileid > 0) 
//		{
//		
//		DBConClickHouse dbconch = new DBConClickHouse();
//		Connection conch = dbconch.getConnection();
//	List<String> ls = new ArrayList<String>();
//		try {    
//			String tablelistQ = "SELECT * FROM cafebot." + tablename+" limit 1";
//			PreparedStatement ps = null;               
//			ps = conch.prepareStatement(tablelistQ);
//		    ResultSet rs = ps.executeQuery();
//			List<String> qlist =new ArrayList<String>();
//		    if (rs.next())
//			{
//				    ResultSetMetaData rsmd = rs.getMetaData();
//			        List<String> colarr = new ArrayList<>();
//			        for (int i=1; i<=  rsmd.getColumnCount();i++) 
//					{
//						colarr.add(rsmd.getColumnName(i));
//		    String query = "INSERT INTO fileschema (fileid,columnname,datatype,datasize) "
//		    					+ "VALUES ("+fileid+",'"+rsmd.getColumnName(i)+"','text','100' ) ";
//						System.out.println(query);
//				       qlist.add(query);
//					}
//		
//				Statement statement = con.createStatement();
//
//					for (String query : qlist) {
//						statement.addBatch(query);
//					}
//					statement.executeBatch();
//					statement.close();
//     		   msg =1;     
//			}
//		 	else 
//			{
//				msg = 0;
//			}
//		    
//		    
//		    
//		}catch (Exception e) 
//		{   
//			msg =-1;
//			//ls.add("");
//			System.out.println("clickhouse get table-" +e.toString());
//			// TODO: handle exception
//		}
//	}
//		   else if (fileid ==-1) 
//		    {
//		    	msg= 2;
//		    }
//	
//				else 
//				{
//					msg= 0;
//				}
//		return msg;
//		
//	}
	
	
//	public int insertFileobject(String tablename,String userdefinedtablename,SessionFactory sessionFactory) 
//	{
//		int fileid =0;
//		try {
//		
//			DBconnection dbcon = new DBconnection();
//			Connection con = dbcon.getConnection();
//				PreparedStatement ps = null;
//	
//		int msg = checkFileexistfromclickhouse(tablename);		
//	
//		if (msg != 1 && msg != 0) 
//		{
//		System.out.println("msg----"+msg);
//		String queryinsertFile = "INSERT INTO public.file(tablename, type) VALUES ('"+tablename+"', 'ClickHouse') RETURNING id";
//
//		System.out.println(queryinsertFile);
//		ps = con.prepareStatement(queryinsertFile);
//		if (ps.execute()) {
//			ResultSet rs = ps.getResultSet();
//			rs.next();
//			fileid = rs.getInt(1);
//		} else {
//			fileid = ps.getUpdateCount();
//		}
//
//		int  versionDb = getFilenamewithversion(userdefinedtablename.trim());		
//		
//		String q = "";
//		if (versionDb >=0) 
//		{
//			int version = versionDb +1 ;
//			userdefinedtablename = userdefinedtablename +"_V"+version;
//			q = "INSERT INTO filename (fileid, fname,version,status,userid) "
//					+ "VALUES('" + tablename+ "','" + userdefinedtablename + "',"+version+",6,1)";
//		}
//		else if (versionDb ==-1) 
//		{
//			int version = 0 ;
//			q = "INSERT INTO filename (fileid, fname,version,status) VALUES('" + tablename+ "','" + userdefinedtablename + "',"+version+",6)";			
//		}
//		else 
//		{
//           //error
//			int version = 0 ;
//			userdefinedtablename = userdefinedtablename+"_V0";
//			q = "INSERT INTO filename (fileid, fname,version,status) VALUES('" + tablename+ "','" + userdefinedtablename + "',"+version+",6)";			
//		}
//		
//		//q = "INSERT INTO filename (fileid, fname,version) VALUES('" + tablename+ "','" + userdefinedtablename + "',0)";
//		SQLQuery query = sessionFactory.getCurrentSession().createSQLQuery(q);
//		query.executeUpdate();
//	
//		}
//		else 
//		{
//			fileid = -1;
//		}
//		
//		}catch (Exception e) 
//		{
//			if(fileid > 0) 
//			{ 
//			String deleteq = "delete from file where id="+fileid;
//			SQLQuery query = sessionFactory.getCurrentSession().createSQLQuery(deleteq);
//			query.executeUpdate();
//			}
//			
//			fileid=0;
//			
//			System.out.println("file insert error --"+e.toString());
//			// TODO: handle exception
//		}
//		
//		return fileid;
//	}
	
	public int checkFileexistfromclickhouse(String tablename) 
	{
		int msg  = -1;
		PreparedStatement ps = null;
		ResultSet rs = null;
		String sqlselecfromfile = "select tablename from file where tablename ='"+tablename.trim()+"' " ;
		System.out.println("sqlselecfromfile--"+sqlselecfromfile);
		try {
			ps = con.prepareStatement(sqlselecfromfile);
			rs = ps.executeQuery();
				while (rs.next())  
				{
					//tname = rs.getString("tablename");
					msg= 1;
				}
		}catch (Exception e) {   
			msg = 0;
			System.out.println(e.getMessage());
			// TODO: handle exception
		}
		return msg;
	}
	
	public int selectfileflowid(String componentid) 
	{
		String selectfileflowid = " select id  from fileflow where componentid='" + componentid+"'";
		PreparedStatement ps = null;
		ResultSet rs;
		int fileflowid = 0;
		int id = 0;
		try {
			ps = con.prepareStatement(selectfileflowid);
			rs = ps.executeQuery();

			String select = "";
			String filter = "";
			String sort = "";
			while (rs.next()) {
				fileflowid = rs.getInt(1);
			}
			rs.close();
			ps.close();
		} catch (Exception e) 
		{
			fileflowid = 0;
			System.out.println("error====" + e.toString());
		}
		return fileflowid;
	}
	
	
//	public JsonArray isInput(String prevcomponentid) 
//	{
//		JsonArray js = new JsonArray();
//		String selectfileflowid = " select fileid,isinput  from fileflow where componentid='" + prevcomponentid+"'";
//		System.out.println("selectfileflowid--"+selectfileflowid);
//		PreparedStatement ps = null;
//		ResultSet rs;
//		int isinput = 0;
//		int fileid = 0;
//		
//		try {
//			ps = con.prepareStatement(selectfileflowid);
//			rs = ps.executeQuery();
//			while (rs.next()) 
//			{
//				JsonObject obj = new JsonObject();
//				fileid  = rs.getInt(1);
//				isinput = rs.getInt(2);
//				obj.addProperty("isinput", isinput);
//				obj.addProperty("fileid", fileid);
//				js .add(obj);
//			}
//			rs.close();
//			ps.close();
//		} catch (Exception e) 
//		{
//			isinput = 0;
//			System.out.println("error====" + e.toString());
//		}
//		return js;
//	}
	
//	public JsonArray getGroupData(String queryString) throws SQLException 
//	{
//		JsonArray js = new JsonArray();
//		//String selectfileflowid = " select fileid,isinput  from fileflow where componentid='" + prevcomponentid+"'";
//		System.out.println("queryString--"+queryString);
//		PreparedStatement ps = null;
//		ResultSet rs;
//		String catname = "";
//		String agg = "";
//		
//	//	try {
//			ps = conch.prepareStatement(queryString);
//			rs = ps.executeQuery();
//			while (rs.next()) 
//			{
//				JsonObject obj = new JsonObject();
//				catname  = rs.getString(1);
//				agg = rs.getString(2);
//				obj.addProperty("catname", catname);
//				obj.addProperty("agg", agg);
//				js .add(obj);
//			}
//			rs.close();
//			ps.close();
//		//} catch (Exception e) 
//		//{
//		//	catname= "";
//		//	System.out.println("getGroupData error====" + e.toString());
//		//}
//		return js;
//	}
	
	
//	public JsonArray getlatlangdata(String queryString) throws SQLException 
//	{
//		JsonArray js = new JsonArray();
//		System.out.println("queryString--"+queryString);
//		PreparedStatement ps = null;
//		ResultSet rs;
//		String lat = "";
//		String lang = "";
//		
//	//	try {
//			ps = conch.prepareStatement(queryString);
//			rs = ps.executeQuery();
//			while (rs.next()) 
//			{
//				JsonObject obj = new JsonObject();
//				lat  = rs.getString(1);
//				lang = rs.getString(2);
//				obj.addProperty("lat", lat);
//				obj.addProperty("lang", lang);
//				js .add(obj);
//			}
//			rs.close();
//			ps.close();
//		
//		return js;
//	}
	
	
	public String writeConfigFile(int botid,String sqlquery,String config) 
	{
		
		String msg = "";
		
		String selectfileflowid = " select filepath  from botconfig where id=" + botid;
		System.out.println("selectfileflowid--"+selectfileflowid);
		PreparedStatement ps = null;
		ResultSet rs;
		String filepath  = "";
		try {
			ps = con.prepareStatement(selectfileflowid);
			rs = ps.executeQuery();
			while (rs.next()) 
			{
				filepath  = rs.getString(1);
			}
			rs.close();
			ps.close();
			
			
			/*
			 * System.out.println("filepath----"+filepath); RandomAccessFile f = new
			 * RandomAccessFile(new File(filepath), "rw"); f.seek(0); // to the beginning
			 * String str = "Sql ="+sqlquery+"\n"+ "Config="+config+"\n";
			 * f.write(str.getBytes()); f.close();
			 */
		File mFile = new File(filepath);
			FileReader fis = new FileReader(mFile);
			BufferedReader br = new BufferedReader(fis);
			String result = "";
			String line = "";
			while( (line = br.readLine()) != null){
			
				if (!line.contains("Sql") && !line.contains("SelectedData")) 
				{
					result = result+"\n" + line; 				
				}
			}

			String str = "Sql ="+sqlquery+"\n"+ "SelectedData="+config+"\n";
			result = str + result;

			mFile.delete();
			FileOutputStream fos = new FileOutputStream(mFile);
			fos.write(result.getBytes());
			fos.flush();
			fos.close();
			
			
			
		} catch (Exception e) 
		{
			msg = "";
			System.out.println("error====" + e.toString());
		}
		
		return msg;
	}
	
	
	
	
//	public String getbotconfigfilepath(int botid) 
//	{
//		JsonArray js = new JsonArray();
//		String selectfileflowid = " select filepath  from botconfig where id=" + botid;
//		PreparedStatement ps = null;
//		ResultSet rs;
//		String filepath  = "";
//		
//		try {
//			ps = con.prepareStatement(selectfileflowid);
//			rs = ps.executeQuery();
//			while (rs.next()) 
//			{
//				filepath  = rs.getString(1);
//			}
//			rs.close();
//			ps.close();
//		} catch (Exception e) 
//		{
//			filepath = "";
//			System.out.println("error====" + e.toString());
//		}
//		return filepath;
//	}
	
	public String getbotconfig(int fileid,String componentid) 
	{
		//String selectfileflowid = " select filepath  from botconfig where id=" + botid;
		String selectfileflowid = "select config from fileflow where fileid=" + fileid + " and componentid='"+ componentid + "'";
		PreparedStatement ps = null;
		ResultSet rs;
		String config = "";
		try {
			ps = con.prepareStatement(selectfileflowid);
			rs = ps.executeQuery();
			while (rs.next()) 
			{
				config  = rs.getString(1);
			}
			rs.close();
			ps.close();
		} catch (Exception e) 
		{
			config = "";
			System.out.println("getbotconfig error ==== " + e.toString());
		}
		return config;
	}
	
	
	
	public int getFilednameCount(String colname,int fileid) 
	{
		String selectfiildnamecount = "select count(*) as cnt from fileschema where fileid ="+fileid+" and upper(columnname) = '"+colname.toUpperCase()+"'" ;
				
		System.out.println("selectfiildnamecount---"+selectfiildnamecount);
		PreparedStatement ps = null;
		ResultSet rs;
		int count = 0;
		try {
			ps = con.prepareStatement(selectfiildnamecount);
			rs = ps.executeQuery();
			while (rs.next()) 
			{
				count  = rs.getInt(1);
			}
			rs.close();
			ps.close();
		} catch (Exception e) 
		{
			count = 0;
			System.out.println("get fieldname error ==== " + e.toString());
		}
		return count;
	}
	                 
//	public String dashboardproject() 
//	{
//		JsonArray js = new JsonArray();
//		String selectfileflowcompo = "select distinct ff.projectid,bp.name from fileflowcomp ff inner join blendproject bp on bp.id = ff.projectid";
//		System.out.println("selectfileflowcompo--"+selectfileflowcompo);
//		PreparedStatement ps = null;
//		ResultSet rs;
//		int id = 0;
//		String name = "";
//		
//		try {
//			ps = con.prepareStatement(selectfileflowcompo);
//			rs = ps.executeQuery();
//			while (rs.next()) 
//			{
//				JsonObject obj = new JsonObject();
//				id  = rs.getInt(1);
//				name = rs.getString(2);
//				obj.addProperty("id", id);
//				obj.addProperty("name", name);
//				js .add(obj);
//			}
//			rs.close();
//			ps.close();
//		} catch (Exception e) 
//		{
//			id = 0;
//			System.out.println("error====" + e.toString());
//		}
//		return js.toString();
//	}

	
//	public JsonArray dashboardprojectarray() 
//	{
//		JsonArray js = new JsonArray();
//		String selectfileflowcompo = "select distinct ff.projectid,bp.name from fileflowcomp ff inner join blendproject bp on bp.id = ff.projectid";
//		System.out.println("selectfileflowcompo--"+selectfileflowcompo);
//		PreparedStatement ps = null;
//		ResultSet rs;
//		int id = 0;
//		String name = "";
//		String created="";
//		try {
//			ps = con.prepareStatement(selectfileflowcompo);
//			rs = ps.executeQuery();
//			while (rs.next()) 
//			{
//				JsonObject obj = new JsonObject();
//				id  = rs.getInt(1);
//				name = rs.getString(2);
//				obj.addProperty("id", id);
//				obj.addProperty("name", name);
//				obj.addProperty("name", name);
//				js .add(obj);
//			}
//			rs.close();
//			ps.close();
//		} catch (Exception e) 
//		{
//			id = 0;
//			 js = new JsonArray();
//			System.out.println("error====" + e.toString());
//		}
//		return js;
//	}
	
//	public String dashboardList() 
//	{
//		JsonArray js = new JsonArray();
//		String selectfileflowcompo = "select ds.id,dashboard_title,created_on,us.username,"
//				+ "ds.projectid,bp.name as projectname,isrealtime from dashboards ds "
//				+ "inner join users us on us.id = ds.userid  "
//				+ "inner join blendproject bp on bp.id= ds.projectid"
//				+ " order by created_on desc";
//		System.out.println("selectfileflowcompo--"+selectfileflowcompo);
//		PreparedStatement ps = null;
//		ResultSet rs;
//		int id =0;   
//		String dashboard_title = "";
//		String created_on = "";
//		String username ="";
//		int projectid =0;
//		String projectname ="";
//		int isrealtime =0;
//		try {
//			ps = con.prepareStatement(selectfileflowcompo);
//			rs = ps.executeQuery();
//			while (rs.next()) 
//			{
//				JsonObject obj = new JsonObject();
//				id = rs.getInt(1);
//				dashboard_title  = rs.getString(2);
//				created_on = rs.getString(3);
//				username = rs.getString(4);
//				projectid=rs.getInt(5);
//				projectname=rs.getString(6);
//				isrealtime=rs.getInt(7);
//				
//				
//				obj.addProperty("id", id);
//				obj.addProperty("dashboard_title", dashboard_title);
//				obj.addProperty("created_on", created_on);
//				obj.addProperty("username", username);
//				obj.addProperty("projectid", projectid);
//				obj.addProperty("projectname", projectname);
//				obj.addProperty("isrealtime", isrealtime);
//				js .add(obj);
//			}
//			rs.close();
//			ps.close();
//		} catch (Exception e) 
//		{
//			dashboard_title = "";
//			js = new JsonArray();
//			System.out.println("error====" + e.toString());
//		}
//		return js.toString();
//	}
	
//	public JsonArray dashboardListarray() 
//	{
//		JsonArray js = new JsonArray();
//		String selectfileflowcompo = "select ds.id,dashboard_title,created_on,us.username from dashboards ds inner join users us on us.id = ds.userid";
//		System.out.println("selectfileflowcompo--"+selectfileflowcompo);
//		PreparedStatement ps = null;
//		ResultSet rs;
//		int id =0;
//		String dashboard_title = "";
//		String created_on = "";
//		String username ="";
//		try {
//			ps = con.prepareStatement(selectfileflowcompo);
//			rs = ps.executeQuery();
//			while (rs.next()) 
//			{
//				JsonObject obj = new JsonObject();
//				id = rs.getInt(1);
//				dashboard_title  = rs.getString(2);
//				created_on = rs.getString(3);
//				username = rs.getString(4);
//				obj.addProperty("id", id);
//				obj.addProperty("dashboard_title", dashboard_title);
//				obj.addProperty("created_on", created_on);
//				obj.addProperty("username", username);
//				js .add(obj);
//			}
//			rs.close();
//			ps.close();
//		} catch (Exception e) 
//		{
//			dashboard_title = "";
//			js = new JsonArray();
//			System.out.println("error====" + e.toString());
//		}
//		return js;
//	}
	

//	public String getBlendprojetcLIst(int projedtcid) 
//	{
//		JsonArray js = new JsonArray();
//		
//		String getDataobjetclistprojectwiseList = "select ff.id,ff.userid,us.username,ff.isinput,ff.ispublish,"
//				+ "ff.ismodel,ff.created,ff.modeltype,ff.modelname from fileflow  ff "
//				+ "inner join users us on us.id= ff.userid "
//				+ "where projectid in (select id from blendproject where projectid="+projedtcid+")"
//						+ " and ( isinput=1 or ismodel=1 or ispublish=1 )  and (modelname!='' ) and modeltype!='' "
//						+ "  limit 10";  
//		
//		System.out.println("getDataobjetclistprojectwiseList--"+getDataobjetclistprojectwiseList);
//		PreparedStatement ps = null;
//		ResultSet rs;
//		int id =0;
//		int userid = 0;
//		String username =""; 
//		String isinput = "";
//		String ispublish = "";
//		String ismodel ="";
//		String created ="";
//		String modeltype ="";
//		String modelname ="";
//		try {
//			ps = con.prepareStatement(getDataobjetclistprojectwiseList);
//			rs = ps.executeQuery();
//			while (rs.next()) 
//			{
//				JsonObject obj = new JsonObject();
//				id = rs.getInt(1);
//				userid =  rs.getInt(2);
//				username  = rs.getString(3);
//				isinput = rs.getString(4);
//				ispublish = rs.getString(5);
//				ismodel = rs.getString(6);
//				created = rs.getString(7);
//				modeltype = rs.getString(8);
//				modelname = rs.getString(9);
//				obj.addProperty("id", id);
//				obj.addProperty("userid", userid);
//				obj.addProperty("username", username);
//				obj.addProperty("isinput", isinput);
//				obj.addProperty("ispublish", ispublish);
//				obj.addProperty("ismodel", ismodel);
//				obj.addProperty("created", created);
//				obj.addProperty("modelname", modelname);
//				obj.addProperty("modeltype", modeltype);
//				
//				js .add(obj);
//			}
//			rs.close();
//			ps.close();
//		} catch (Exception e) 
//		{
//			//dashboard_title = "";
//			js = new JsonArray();
//			System.out.println("error====" + e.toString());
//		}
//		return js.toString();
//	}
	
	
	
//	public String getDataobjetclistprojectwiseList(int projedtcid) 
//	{
//		JsonArray js = new JsonArray();
//		
//		  
//		//String getDataobjetclistprojectwiseList = "select fname,created,fileid from filename where projectid=1 order by created";
//		
//		String getDataobjetclistprojectwiseList =  "select fname,fn.created,fileid,fl.id from filename fn "
//				+ "inner join file fl on fl.tablename= fn.fileid where fn.projectid  in (select id from blendproject where projectid ="+projedtcid+") order by fn.created";
//		
//		System.out.println("getDataobjetclistprojectwiseList--"+getDataobjetclistprojectwiseList);
//		PreparedStatement ps = null;
//		ResultSet rs;
//		int id =0;
//		String fname = "";
//		String created = "";
//		String fileid ="";
//		try {  
//			ps = con.prepareStatement(getDataobjetclistprojectwiseList);
//			rs = ps.executeQuery();
//			while (rs.next()) 
//			{
//				JsonObject obj = new JsonObject();
//				
//				fname  = rs.getString(1);
//				created = rs.getString(2);
//				fileid = rs.getString(3);
//				id = rs.getInt(4);
//				
//				obj.addProperty("id", id);
//				obj.addProperty("fname", fname);
//				obj.addProperty("created", created);
//				obj.addProperty("fileid", fileid);
//				js .add(obj);
//			}
//			rs.close();
//			ps.close();
//		} catch (Exception e) 
//		{
//			//dashboard_title = "";
//			js = new JsonArray();
//			System.out.println("error====" + e.toString());
//		}
//		return js.toString();
//	}
	
	
	
//	public String getBlendingProjetcList(int projedtcid) 
//	{
//		
//		JsonArray js = new JsonArray();
//		
//		
//		//String getDataobjetclistprojectwiseList = "select fname,created,fileid from filename where projectid=1 order by created";
//		
//		String getDataobjetclistprojectwiseList =  "select bp.id,name,bp.created,bp.userid,"
//				+ "us.username,shareduserlist from blendproject bp "
//				+ "inner join users us  on us.id= bp.userid where projectid="+projedtcid;
//		
//		System.out.println("getDataobjetclistprojectwiseList--"+getDataobjetclistprojectwiseList);
//		PreparedStatement ps = null;
//		ResultSet rs;
//		int id =0;
//		String fname = "";
//		String created = "";
//		String userid ="";
//		String username ="";
//		String sharedlist ="";
//		try {
//			ps = con.prepareStatement(getDataobjetclistprojectwiseList);
//			rs = ps.executeQuery();
//			while (rs.next()) 
//			{
//				JsonObject obj = new JsonObject();
//				id = rs.getInt(1);
//				fname  = rs.getString(2);
//				created = rs.getString(3);
//				userid = rs.getString(4);
//				username = rs.getString(5);
//				sharedlist = rs.getString(6);
//				
//				
//				obj.addProperty("id", id);
//				obj.addProperty("fname", fname);
//				obj.addProperty("created", created);
//				obj.addProperty("userid", userid);
//				obj.addProperty("username", username); 
//				obj.addProperty("sharedlist", sharedlist); 
//				
//				js .add(obj);
//			}
//			rs.close();
//			ps.close();
//		} catch (Exception e) 
//		{
//			//dashboard_title = "";
//			js = new JsonArray();
//			System.out.println("error====" + e.toString());
//		}
//		return js.toString();
//	}
	
	
	
	
	
//	public String getModellist(int projectid) 
//	{
//		JsonArray js = new JsonArray();
//		
//		
//		//String getDataobjetclistprojectwiseList = "select fname,created,fileid from filename where projectid=1 order by created";
//		
//		String getDataobjetclistprojectwiseList =  "select mf.id,comments,version,isclassification,filedatetime,us.username from mojofile  mf "
//				+ " inner join users us on us.id = mf.userid where projectid in (select id from blendproject where projectid="+projectid+")" ;
//		
//		System.out.println("getModellist Q--"+getDataobjetclistprojectwiseList);
//		PreparedStatement ps = null;
//		ResultSet rs;
//		int id =0;
//		String comments = "";
//		String version = "";
//		String isclassification ="";
//		String filedatetime="";
//		String username ="";
//		
//		try {
//			ps = con.prepareStatement(getDataobjetclistprojectwiseList);
//			rs = ps.executeQuery();
//			while (rs.next()) 
//			{
//				JsonObject obj = new JsonObject();
//				id = rs.getInt(1);
//				comments  = rs.getString(2);
//				version = rs.getString(3);
//				isclassification = rs.getString(4);
//				filedatetime = rs.getString(5);
//				username = rs.getString(6);
//				
//				
//				obj.addProperty("id", id);
//				obj.addProperty("comments", comments);
//				obj.addProperty("version", version);
//				obj.addProperty("isclassification", isclassification);
//				obj.addProperty("filedatetime", filedatetime); 
//				obj.addProperty("username", username); 
//				
//				js .add(obj);
//			}
//			rs.close();
//			ps.close();
//		} catch (Exception e) 
//		{
//			//dashboard_title = "";
//			js = new JsonArray();
//			System.out.println("error====" + e.toString());
//		}
//		return js.toString();
//	}
	
	
	
//	public String getDashboardlist(int projectid) 
//	{
//		JsonArray js = new JsonArray();
//		
//		
//		//String getDataobjetclistprojectwiseList = "select fname,created,fileid from filename where projectid=1 order by created";
//		
//		String getDataobjetclistprojectwiseList =  "select ds.id,dashboard_title,us.username,bp.name,created_on from dashboards ds "
//				+ "inner join users us on us.id = ds.userid inner join blendproject bp on bp.id = ds.projectid "
//				+ "where ds.projectid in (select id from blendproject where projectid="+projectid+")" ;
//		
//		System.out.println("getModellist Q--"+getDataobjetclistprojectwiseList);
//		PreparedStatement ps = null;
//		ResultSet rs;
//		int id =0;
//		String dashboard_title = "";
//		String username = "";
//		String projectname ="";
//		String filedatetime="";
//		
//		
//		try {
//			ps = con.prepareStatement(getDataobjetclistprojectwiseList);
//			rs = ps.executeQuery();
//			while (rs.next()) 
//			{
//				JsonObject obj = new JsonObject();
//				id = rs.getInt(1);
//				dashboard_title  = rs.getString(2);
//				username = rs.getString(3);
//				projectname = rs.getString(4);
//				filedatetime = rs.getString(5);
//				
//				
//				
//				obj.addProperty("id", id);
//				obj.addProperty("dashboard_title", dashboard_title);
//				obj.addProperty("username", username);
//				obj.addProperty("projectname", projectname);
//				obj.addProperty("filedatetime", filedatetime); 
//				
//				
//				js .add(obj);
//			}
//			rs.close();
//			ps.close();
//		} catch (Exception e) 
//		{
//			//dashboard_title = "";
//			js = new JsonArray();
//			System.out.println("error====" + e.toString());
//		}
//		return js.toString();
//	}
//	
	
	
//	public String chartList(int isadmin,int userid) 
//	{
//		JsonArray js = new JsonArray();
//		
//		
//		String selectfileflowcompo = "select ds.id,slice_name,created_on,us.username from slices ds inner join users us on us.id = ds.userid where userid ="+userid+" and isoriginal=1";
//		
//		System.out.println("chartList isadmin:::::"+isadmin);
//		if (isadmin ==1) 
//		{
//			selectfileflowcompo = "select ds.id,slice_name,created_on,us.username from slices ds inner join users us on us.id = ds.userid where isoriginal=1";
//		}
//		
//		
//		System.out.println("selectfileflowcompo--"+selectfileflowcompo);
//		PreparedStatement ps = null;
//		ResultSet rs;
//		int id =0;
//		String slice_name = "";
//		String created_on = "";
//		String username ="";
//		try {
//			ps = con.prepareStatement(selectfileflowcompo);
//			rs = ps.executeQuery();
//			while (rs.next()) 
//			{
//				JsonObject obj = new JsonObject();
//				id = rs.getInt(1);
//				slice_name  = rs.getString(2);
//				created_on = rs.getString(3);
//				username = rs.getString(4);
//				
//				obj.addProperty("id", id);
//				obj.addProperty("slice_name", slice_name);
//				obj.addProperty("created_on", created_on);
//				obj.addProperty("username", username);
//				js .add(obj);
//			}
//			rs.close();
//			ps.close();
//		} catch (Exception e) 
//		{
//			id = 0;
//			js = new JsonArray();
//			System.out.println("error====" + e.toString());
//		}
//		return js.toString();
//	}
	
	
//	public String dashboardprojectcomponent() 
//	{
//		JsonArray js = new JsonArray();
//		String selectfileflowcompo = "select ff.projectid,componentid,ff.dashboardtitle from fileflowcomp ff inner join blendproject bp on bp.id = ff.projectid  group by ff.projectid, ff.componentid,ff.dashboardtitle order by projectid ";
//		System.out.println("selectfileflowcompo--"+selectfileflowcompo);
//		PreparedStatement ps = null;
//		ResultSet rs;
//		int id = 0;   
//		String componentid = "";
//		String dashtitle ="";
//		
//		try {
//			ps = con.prepareStatement(selectfileflowcompo);
//			rs = ps.executeQuery();
//			while (rs.next()) 
//			{
//				JsonObject obj = new JsonObject();
//				id  = rs.getInt(1);
//				componentid = rs.getString(2);
//				dashtitle = rs.getString(3);
//				
//				obj.addProperty("id", id);
//				obj.addProperty("componentid", componentid);
//				obj.addProperty("dashtitle", dashtitle);
//				js .add(obj);
//			}
//			rs.close();
//			ps.close();
//		} catch (Exception e) 
//		{
//			id = 0;
//			System.out.println("error====" + e.toString());
//		}
//		return js.toString();
//	}	
	
	
	@SuppressWarnings("serial")
	public int saveEDAtitle(String title,String componentid) throws IOException {
		
		DBconnection schema = new DBconnection();
		Connection conschema = schema.getConnection_2();
		PreparedStatement ps = null;
		String filename = "";
		String path = "";
		int msg =0;
		String sql = "update fileflowcomp set dashboardtitle='"+title+"' where componentid='"+componentid+"'";
    	try {
			ps = conschema.prepareStatement(sql);				
			msg = ps.executeUpdate();  
    	}
    	catch (Exception e) {
    		System.out.println(e.getMessage());			
		}
    	return msg;
	}
	
	
	@SuppressWarnings("unchecked")
	public String getuserdefinedFilename(String fileid) 
	{

		
		String getuserdefinedFilename = "select fname from filename where fileid ='"+fileid+"'" ;
				
		System.out.println("getuserdefinedFilename q---"+getuserdefinedFilename);
		PreparedStatement ps = null;
		ResultSet rs;
		String fname = "";
		try {
			ps = con.prepareStatement(getuserdefinedFilename);
			rs = ps.executeQuery();
			while (rs.next()) 
			{
				fname  = rs.getString(1);
			}
			rs.close();   
			ps.close();
		} catch (Exception e) 
		{
			fname = "";
			System.out.println("getuserdefinedFilename error ==== " + e.toString());
		}
		return fname;
	}
	
//	public JsonArray getuserdefinedFilenameList(String userid) 
//	{
//		JsonArray js = new JsonArray();
//		String getuserdefinedFilenameList = "select fileid,fname,created,status,"
//				                             + "err,projectid,apikey,userid from filename  "
//				                             + "where "+ userid;// where status >0" ; //? need to check this status 
//		
//		System.out.println("getuserdefinedFilenameList -- "+getuserdefinedFilenameList);
//		
//		PreparedStatement ps = null;
//		ResultSet rs;
//		String fileid = "";
//		String fname = "";
//		String created = "";
//		String status = "";
//		String error = "";
//		int projectid =0;
//		String apikey ="";
//		int fileuserid =1;
//		
//		//con = buildConnection();
//		
//		//System.out.println("con in --"+con);
//		try {
//			
//			if (con.isClosed()) 
//			{
//				System.out.println("con is closed *****");
//				con = dbcon.getConnection();
//			}
//			
//			ps = con.prepareStatement(getuserdefinedFilenameList);   
//			rs = ps.executeQuery();
//			while (rs.next()) 
//			{
//				JsonObject obj = new JsonObject();
//				fileid  = rs.getString(1);
//				fname = rs.getString(2);
//				created = rs.getString(3);
//				status = rs.getString(4);
//				error = rs.getString(5);
//				projectid = rs.getInt(6);
//				apikey ="";
//				if (rs.getString(7)!=null) 
//				{
//				 	apikey =  rs.getString(7);
//				}
//				
//				fileuserid = rs.getInt(8); 
//				
//				obj.addProperty("fileid", fileid);
//				obj.addProperty("fname", fname);
//				obj.addProperty("created", created);
//				obj.addProperty("status", status);
//				obj.addProperty("error", error);
//				obj.addProperty("projectid", projectid);
//				obj.addProperty("apikey", apikey);
//				obj.addProperty("userid", fileuserid);
//				
//				js .add(obj);
//			}
//			rs.close();
//			ps.close();
//		} catch (Exception e) 
//		{
//			fileid = "";
//			fname ="";
//			System.out.println("getuserdefinedFilenameList error==== " + e.toString());
//		}
//		return js;
//	}

	
//	public JsonArray getuserdefinedFilenameListCompleted(String usercond) 
//	{
//		JsonArray js = new JsonArray();
//		String getuserdefinedFilenameList = "select fileid,fname,created,status,err,projectid "
//												+ "from filename  where status =6 and "+usercond+" " ;  //? need to check this status 
//		
//		System.out.println("getuserdefinedFilenameList -- "+getuserdefinedFilenameList);
//		
//		PreparedStatement ps = null;
//		ResultSet rs;
//		String fileid = "";
//		String fname = "";
//		String created = "";
//		int status = 0;
//		String error = "";
//		int projectid =0;
//		
//		//con = buildConnection();
//		
//		//System.out.println("con in --"+con);
//		try {
//			ps = con.prepareStatement(getuserdefinedFilenameList);   
//			rs = ps.executeQuery();
//			while (rs.next()) 
//			{
//				JsonObject obj = new JsonObject();
//				fileid  = rs.getString(1);
//				fname = rs.getString(2);
//				created = rs.getString(3);
//				status = rs.getInt(4);
//				error = rs.getString(5);
//				projectid = rs.getInt(6);
//				obj.addProperty("fileid", fileid);
//				obj.addProperty("fname", fname);
//				obj.addProperty("created", created);
//				//System.out.println("status=="+status);
//				obj.addProperty("status", status);
//				obj.addProperty("error", error);
//				obj.addProperty("projectid", projectid);
//				
//				js .add(obj);
//			}
//			rs.close();
//			ps.close();
//		} catch (Exception e) 
//		{
//			fileid = "";
//			fname ="";
//			System.out.println("getuserdefinedFilenameListCompleted error====" + e.toString());
//		}
//		return js;
//	}
	
	
	
	
	
	public int insertFileflowcomponent(String q) 
	{
		int msg = 0;		
		try {
		
			DBconnection dbcon = new DBconnection();
			Connection con = dbcon.getConnection_2();
			PreparedStatement ps = null;
	
	System.out.println(" q fileflow--"+q);
		ps = con.prepareStatement(q);
		msg = ps.executeUpdate();
		return msg;
	}catch (Exception e) {
		// TODO: handle exception
		System.out.println("file flow insert --"+e.toString());
	}
	return msg;
	}
	
	public String encryptKey(String strToEncrypt) 
	{
		String encryptkey ="";
		 String key =  "@#$e#d$a^%^&*())";
		 try {
	         byte initVector[] = new byte[16];
	         (new Random()).nextBytes(initVector);    
	         IvParameterSpec iv = new IvParameterSpec(initVector);
	         SecretKeySpec skeySpec = new SecretKeySpec(key.getBytes("UTF-8"), "AES");
	         Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5PADDING");
	         cipher.init(Cipher.ENCRYPT_MODE, skeySpec, iv);
	         byte[] cipherbytes = cipher.doFinal(strToEncrypt.getBytes());
	         byte[] messagebytes = new byte[initVector.length + cipherbytes.length];
	         System.arraycopy(initVector, 0, messagebytes, 0, 16);
	         System.arraycopy(cipherbytes, 0, messagebytes, 16, cipherbytes.length);
	         encryptkey =  java.util.Base64.getEncoder().encodeToString(messagebytes);
	     } catch (Exception ex) {
	         ex.printStackTrace();
	     }
		return encryptkey;
	}
	
	  public String decrypt(String ciphertext) 
	    {
	    	String key = "@#$e#d$a^%^&*())";
	    	try {
	            byte[] cipherbytes = java.util.Base64.getDecoder().decode(ciphertext);
	            byte[] initVector = Arrays.copyOfRange(cipherbytes,0,16);
	            byte[] messagebytes = Arrays.copyOfRange(cipherbytes,16,cipherbytes.length);
	            IvParameterSpec iv = new IvParameterSpec(initVector);
	            SecretKeySpec skeySpec = new SecretKeySpec(key.getBytes("UTF-8"), "AES");
	            Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5PADDING");
	            cipher.init(Cipher.DECRYPT_MODE, skeySpec, iv);
	            // Convert the ciphertext Base64-encoded String back to bytes, and
	            // then decrypt
	            byte[] byte_array = cipher.doFinal(messagebytes);
	            // Return plaintext as String
	            return new String(byte_array, StandardCharsets.UTF_8);
	        } catch (Exception ex) 
	    	{
	            ex.printStackTrace();
	        }
	        return "";
	    }
	   
	  
	  
	  
	  
	  
	  //public String updateFilename(int fileid ,String filename) 
	  public String updateFilename(String fileid ,String filename,int projectid) 
	  {
		  String newfilename =filename;
		  
		/*
		 * String sqlfilenameupdate = "update filename set fname='"
		 * +filename+"' where fileid=(select REPLACE(tablename, '.csv', '' ) " +
		 * "from file where id="+fileid+")";
		 */
		  														//,created =now()
		  String sqlfilenameupdate = "update filename set fname='"+filename+"' ,projectid="+projectid+"  where fileid='"+fileid+"'";
		  System.out.println("sqlfilenameupdate---"+sqlfilenameupdate);  

		  PreparedStatement ps = null;
		  	
		             //to update file created
		  	//updateFileCreated(fileid);
		 
		  try {
				ps = con.prepareStatement(sqlfilenameupdate);				
				ps.executeQuery();
				ps.close();
				
	    	}
	    	catch (Exception e) 
		    {
	    		newfilename ="";
	    		System.out.println("filename update error --"+e.getMessage());			
			}
		  
		  return filename;
	  }
	  
	  public void updateFileCreated(int fileid) 
	  {
		  
		  String sqlupdatefile = "update file set created=now() where id="+fileid;
		  System.out.println("sqlupdatefile---"+sqlupdatefile);
		  
		  PreparedStatement ps = null;
		  try {
				ps = con.prepareStatement(sqlupdatefile);				
				ps.executeQuery();  
				ps.close();
	    	}
	    	catch (Exception e) 
		  {
	    		System.out.println(e.getMessage());			
			}
	  }
	  
	  public void deleteDataobject(String fileid) 
	  {
		  String sqldeletefile = "delete from  filename where fileid='"+fileid+"'";
		  //String sqldeletefile = "delete from  filename where fname='"+fileid+"'";
		  
		  System.out.println("sqldeletefile---"+sqldeletefile);
		  PreparedStatement ps = null;
		  try {
				ps = con.prepareStatement(sqldeletefile);				
				ps.executeQuery();  
				ps.close();
	    	}
	    	catch (Exception e) 
		  {
	    		System.out.println(e.getMessage());			
			}
	  }
	  
	  
	  
	  public int deleteDashboard(String dashid) 
	  {
		  
		  int msg =0;
		  String deleteDashboardD = "delete from  dashboards where id="+dashid;
		  
		  System.out.println("deleteDashboardD---"+deleteDashboardD);
		  PreparedStatement ps = null;
		  try {
				ps = con.prepareStatement(deleteDashboardD);				
				ps.executeQuery();  
				ps.close();
				msg =1;
	    	}
	    	catch (Exception e) 
		  {
	    		msg =-1;
	    		System.out.println(e.getMessage());			
			}
		  return msg;
	  }
	  
	  
	  
	  public int deleteChart(String dashid) 
	  {
		  
		  int msg =0;
		  String deleteChartD = "delete from  slices where id="+dashid;
		  
		  System.out.println("deleteChartD---"+deleteChartD);
		  PreparedStatement ps = null;
		  try {
				ps = con.prepareStatement(deleteChartD);				
				ps.executeQuery();  
				ps.close();
				msg =1;
	    	}
	    	catch (Exception e) 
		  {
	    		msg =-1;
	    		System.out.println(e.getMessage());			
			}
		  return msg;
	  }
	  
	  
	  
	  
	  
	  public int deleteDataobjectFilename(String fileid) 
	  {
		  String sqldeletefile = "delete from  filename where fileid='"+fileid+"'";
		  //String sqldeletefile = "delete from  filename where fname='"+fileid+"'";
		  
		  int msg=0;
		  System.out.println("sqldeletefile---"+sqldeletefile);
		  PreparedStatement ps = null;
		  try {
				ps = con.prepareStatement(sqldeletefile);				
				ps.executeUpdate();  
				ps.close();
				msg =1;
	    	}
	    	catch (Exception e) 
		  {
	    		System.out.println(e.getMessage());			
			}
		  return msg;
	  }
	  
	  
	  
	  public int deleteDataobjectFull(String tablename ,int fileid,String inQuery) 
	  {
		  System.out.println("tablename--"+tablename+"--fileid--"+fileid);
		  
		  String sqldeletefilename = "delete from  filename where fileid='"+tablename+"'; ";
		  String sqldeletefile = "delete from  file where id in "+inQuery+";";             // ='"+fileid+"' ;";
		  String sqldeletefileschema = "delete from  fileschema where fileid in "+inQuery+";";  // id='"+fileid+"';";
		  
		  String finalQuery = sqldeletefilename+sqldeletefile+sqldeletefileschema;
		  
		  int msg=0;
		  System.out.println("finalQuery---"+finalQuery);    
		  PreparedStatement ps = null;
		  try {
				ps = con.prepareStatement(finalQuery);				
				ps.executeUpdate();  
				ps.close();
				msg =1;
				msg = deleteClickhouseTable(tablename);
				
	    	}
	    	catch (Exception e) 
		    {
	    		msg =0;
	    		System.out.println(e.getMessage());			
			}
		  return msg;
	  }
	
	  
	  
	  public int deleteSparkJob(int id) 
	  {
		  System.out.println("spark job id--"+id);
		  
		  String sqldeletefilename = "delete from  spark_jobs where id="+id+"; ";
		  
		  String finalQuery = sqldeletefilename;
		  
		  int msg=0;          
		  System.out.println("finalQuery---"+finalQuery);    
		  PreparedStatement ps = null;
		  try {
				ps = con.prepareStatement(finalQuery);				
				ps.executeUpdate();  
				ps.close();
				msg =1;
	    	}
	    	catch (Exception e) 
		    {
	    		msg =0;
	    		System.out.println(e.getMessage());			
			}
		  return msg;
	  }
	
	  
	  public int deleteClickhouseTable(String tablename) {
			// Alter table cafebot.testProcess delete where 1=1
		  int msg =0;
			String enterMojo = "DROP TABLE IF EXISTS cafebot." + tablename;
			try {
				PreparedStatement ps = null;
				ps = conch.prepareStatement(enterMojo);
				ps.executeUpdate();
				ps.close();
				msg =1;
				System.out.println("table delete done*****");
			} catch (Exception e) {
				System.out.println("table delete error =" + e.toString());
			}
				return msg;
		} 
	  
	  
	  
	  public int checkFileinuse(String inQuery) 
	  {
		  int msg =0;
		  String sqlfileinuse = "select count(*) as cnt  from  fileflow where fileid in "+inQuery+" and isinput =1";
		
			System.out.println("sqlfileinuse--"+sqlfileinuse);
			PreparedStatement ps = null;
			ResultSet rs;
			String module ="";
			int countfile =0;
			try {
				ps = con.prepareStatement(sqlfileinuse);
				rs = ps.executeQuery();
				while (rs.next()) 
				{
					countfile = rs.getInt(1);
				}
				rs.close();
				ps.close();
			} catch (Exception e) 
			{
				System.out.println("getModuleList =" + e.toString());
			}
			if (countfile>0) 
			{
				msg =1;
			}
			
			return msg;
	  }
	  
	  
	  
	  
	 
	  
	  public List<Integer> getIdlist(int fileid) 
	  {
		  List<Integer> ls = new ArrayList<Integer>();
		  
		  String sqlfileinuse = "select id  from  file where originalfileid="+fileid;
		
			System.out.println("sqlfileinuse--"+sqlfileinuse);
			PreparedStatement ps = null;
			ResultSet rs;
			String module ="";
			int countfile =0;
			try {
				ps = con.prepareStatement(sqlfileinuse);
				rs = ps.executeQuery();
				while (rs.next()) 
				{
					ls.add(rs.getInt(1));
				}
				rs.close();
				ps.close();
			} catch (Exception e) 
			{
				System.out.println("getModuleList =" + e.toString());
			}
			
			return ls;
	  }
	  
	  
//		public JsonArray getRolelist() 
//		{
//			JsonArray js = new JsonArray();
//			String selectrole = " select id,role  from access_role ";
//			System.out.println("selectrole--"+selectrole);
//			PreparedStatement ps = null;
//			ResultSet rs;
//			int roleid = 0;
//			String role = "";
//			
//			try {
//				ps = con.prepareStatement(selectrole);
//				rs = ps.executeQuery();
//				while (rs.next()) 
//				{
//					JsonObject obj = new JsonObject();
//					roleid  = rs.getInt(1);
//					role = rs.getString(2);
//					obj.addProperty("roleid", roleid);
//					obj.addProperty("role", role);
//					js .add(obj);
//				}
//				rs.close();
//				ps.close();
//			} catch (Exception e) 
//			{
//				roleid = 0;
//				System.out.println("error====" + e.toString());
//			}
//			return js;
//		}  
		
		
		
		
//		public JsonArray getModuleAccess(int roleid,String language) 
//		{
//			JsonArray js = new JsonArray();
//			
//		/*
//		 * String selectmodule =
//		 * " select module,moduleid,page,pageid,pageurl,title,imagepath from " +
//		 * "(select distinct 0 as id, 0 as pageid,module,null as page ,null as pageurl,moduleid,title,imagepath from access_module ac "
//		 * +
//		 * "	where  moduleid in (select moduleid from access_role_permission where roleid="
//		 * +roleid+") " + "union " +
//		 * "select * from access_module  where pageid in (select pageid from access_role_permission where roleid="
//		 * +roleid+") " + ") t order by moduleid ,pageid  ";
//		 */
//			
//			 String selectmodule =
//					  "select module,moduleid,page,pageid,pageurl,title,imagepath from  " +
//					  "(select distinct 0 as id, 0 as pageid,pg.modulename as module,null as page ,null as pageurl,moduleid,pg.title,"
//					  +
//					  " imagepath from access_module ac inner join pagemenudecode pg on pg.pageid = ac.pageid 	 "
//					  + "where ac.ismenu =1 and pg.language='"
//					  +language+"' and  moduleid in (select moduleid from access_role_permission where roleid="
//					  +roleid+")" + " union " +
//					  "select ac.id,ac.pageid,pg.modulename as module,pg.page as page ,pg.pagename as pageurl,moduleid,"
//					  + " pg.title,imagepath  from access_module ac " +
//					  " inner join pagemenudecode pg on pg.pageid = ac.pageid " +
//					  "where ac.ismenu =1 and pg.language='"+language+"' and ac.pageid in " +
//					  "(select pageid from access_role_permission where roleid="+roleid+")" +
//					  " ) t order by moduleid ,pageid ";
//			
//			
//			System.out.println("selectmodule--"+selectmodule);
//			PreparedStatement ps = null;
//			ResultSet rs;
//			String module ="";
//			int moduleid =0;
//			String page ="";
//			int pageid=0;
//			String pageurl="";
//			String title ="";
//			String imagepath ="";
//			try {
//				ps = con.prepareStatement(selectmodule);
//				rs = ps.executeQuery();
//				while (rs.next()) 
//				{
//					JsonObject obj = new JsonObject();
//					
//					module = rs.getString(1);;
//					moduleid = rs.getInt(2);
//					page = rs.getString(3);
//					pageid= rs.getInt(4);
//					pageurl = rs.getString(5);
//					title = rs.getString(6);
//					imagepath= rs.getString(7);
//					
//					if (pageid ==0) 
//					{
//						page="";
//						pageurl="";
//					}
//					
//					obj.addProperty("module", module);
//					obj.addProperty("moduleid", moduleid);
//					obj.addProperty("page", page);
//					obj.addProperty("pageid", pageid);
//					obj.addProperty("pageurl", pageurl);
//					obj.addProperty("title", title);
//					obj.addProperty("imagepath", imagepath);
//					js .add(obj);
//				}
//				rs.close();
//				ps.close();
//			} catch (Exception e) 
//			{
//				roleid = 0;
//				System.out.println("selectmodule ==" + e.toString());
//			}
//			return js;
//		}  
//		
//		public JsonArray getModuleList() 
//		{
//			JsonArray js = new JsonArray();
//			String selectmodule = "select distinct module, moduleid from access_module ";
//			System.out.println("selectmodule--"+selectmodule);
//			PreparedStatement ps = null;
//			ResultSet rs;
//			String module ="";
//			int moduleid =0;
//			try {
//				ps = con.prepareStatement(selectmodule);
//				rs = ps.executeQuery();
//				while (rs.next()) 
//				{
//					JsonObject obj = new JsonObject();
//					
//					module = rs.getString(1);;
//					moduleid = rs.getInt(2);
//					
//					obj.addProperty("module", module);
//					obj.addProperty("moduleid", moduleid);
//					js .add(obj);
//				}
//				rs.close();
//				ps.close();
//			} catch (Exception e) 
//			{
//				System.out.println("getModuleList =" + e.toString());
//			}
//			return js;
//		}  
//
//		public JsonArray getPageList(int module_id) 
//		{
//			JsonArray js = new JsonArray();
//			String selectmodule = "select distinct page, pageid from access_module where moduleid="+module_id+" and ismenu =1";
//			System.out.println("selectmodule--"+selectmodule);
//			PreparedStatement ps = null;
//			ResultSet rs;
//			String module ="";
//			int moduleid =0;
//			try {
//				ps = con.prepareStatement(selectmodule);
//				rs = ps.executeQuery();
//				while (rs.next()) 
//				{
//					JsonObject obj = new JsonObject();
//					
//					module = rs.getString(1);;
//					moduleid = rs.getInt(2);
//					
//					obj.addProperty("module", module);
//					obj.addProperty("moduleid", moduleid);
//					js .add(obj);
//				}
//				rs.close();
//				ps.close();
//			} catch (Exception e) 
//			{
//				System.out.println("getModuleList =" + e.toString());
//			}
//			return js;
//		}  

		public String updateRoleAccess(String pagelist,int roleid,int moduleid ) 
		{
			String msg ="";
			try 
			{
				PreparedStatement ps = null;
				
				System.out.println("pagelist---"+pagelist);
				String [] str = pagelist.split(",");
				System.out.println("size");
				System.out.println(str.length);
				Statement statement = con.createStatement();
					//System.out.println("str---"+str[0]);
				for (int k=0;k < str.length;k++) 
				{
					System.out.println("str---"+str[k]);
					
					String qaccess = "insert into access_role_permission (roleid,pageid,moduleid) values("+roleid+","+str[k]+","+moduleid+");";
					System.out.println("qaccess--"+qaccess);
					statement.addBatch(qaccess);
					if (Integer.parseInt(str[k]) == 107) 
					{
						String qaccessgroup = "insert into access_role_permission (roleid,pageid,moduleid) values("+roleid+",108,"+moduleid+");";
						String qaccessgroupdetail = "insert into access_role_permission (roleid,pageid,moduleid) values("+roleid+",109,"+moduleid+");";
						statement.addBatch(qaccessgroup);
						statement.addBatch(qaccessgroupdetail);
					}
					
					
				}
				     
				statement.executeBatch();
				statement.close();
				msg="1";
			}
			catch (Exception e) 
			{
				msg ="0";
				System.out.println("update access error ---"+e.toString());
			}
			
			return msg;
		}
		
		
		public String deleteAccess(int pageid,int roleid,int moduleid ) 
		{
			String msg ="";
			try 
			{
				Statement statement = con.createStatement();
					String qaccess = "delete from access_role_permission where  roleid="+roleid+" and pageid="+pageid+" and moduleid="+moduleid;
					System.out.println("qdeleteaccess--"+qaccess);
					statement.addBatch(qaccess); 
					statement.executeBatch();
					statement.close();
					msg="1";
			}
			catch (Exception e) 
			{
				msg ="0";
				System.out.println("update access error ---"+e.toString());
			}
			
			return msg;
		}
		
		
		public int getUserid()  
			 {
			int userid =0;
			try {
			
				HttpServletRequest request = ((ServletRequestAttributes)RequestContextHolder.getRequestAttributes()).getRequest();
			  	userid =  Integer.parseInt(request.getSession().getAttribute("currentSessionUserID").toString());
				System.out.println("dh userid--"+userid);
			 	
			}catch (Exception e) {
				userid =0;
				System.out.println("get user id error -"+e.toString());
				// TODO: handle exception
			}
			return userid;
	 }
			         
		
		public String updateQueueForPy(int fileflowid,int status,String type,int flag,String tablename,String down_path,int projectid) 
		{
			String msg ="";
			try 
			{
				int succmsg= getPyQueue(fileflowid); 
				System.out.println("fileflowid--"+fileflowid);
				PreparedStatement ps = null;
				Statement statement = con.createStatement();         
					
				String qaccess = "";

				// to identify type of process
				type = "PYCODE";
				String err= "Queued";
				
				if (flag ==0) 
				{
					qaccess = "insert into queue (fileflowid,status,modeltype,err,tablename,tasktype,down_path,projectid) "
							+ "values("+fileflowid+","+status+",'"+type+"','"+err+"','"+tablename+"','"+type+"','"+down_path+"',"+projectid+")";
				}
				else 
				{
					qaccess = " update queue  set status = "+status+",created = now(), "
							+ "err='"+err+"',tablename='"+tablename+"',"
							+ "down_path='"+down_path+"',projectid="+projectid+" where fileflowid ="+fileflowid;
				}
					
					System.out.println("qaccess--"+qaccess);
					statement.addBatch(qaccess); 
				    statement.executeBatch();
				    statement.close();
				msg="1";
			}
			catch (Exception e) 
			{
				msg ="0";
				System.out.println("update updateQueueForPy error ---"+e.toString());
			}
			
			return msg;
		}	
		
	
		public int getPyQueue(int fileflowid) 
		{
			int msg = 99 ;
			
			String selectmodule = "select status from queue where fileflowid="+fileflowid;// and status < 0 or status >2) ";
			System.out.println("selectmodule--"+selectmodule);
			PreparedStatement ps = null;
			ResultSet rs;
			String module ="";
			int count =0;
			try { 
				ps = con.prepareStatement(selectmodule);
				rs = ps.executeQuery();
				while (rs.next()) 
				{
					msg = rs.getInt(1);
					count++;
				}
				rs.close();
				ps.close();
			} catch (Exception e) 
			{
				msg =-1;
				System.out.println("getModuleList =" + e.toString());
			}
		/*
		 * if (count >0) { msg=1; }
		 */
			return msg;
		}  
		
		
		public String getTableforPyfeature(int fileid) 
		{
			String tablename ="";
			
			String tablenameQ = "select fname from filename fn "
					+ "inner join file fl on fl.tablename =  fn.fileid where fl.id = "+fileid+" order by fn.id desc limit 1"; 
			
			System.out.println("getTableforPyfeature--"+tablenameQ);
			PreparedStatement ps = null;
			ResultSet rs;
		
			try { 
				ps = con.prepareStatement(tablenameQ);
				rs = ps.executeQuery();
				while (rs.next()) 
				{
					tablename = rs.getString(1);
					
				}
				rs.close();
				ps.close();
			} catch (Exception e) 
			{
				tablename ="";
				System.out.println("getTableforPyfeature =" + e.toString());
			}
		
			return tablename;
		}  


		
		
		
//		public String getPyCodeQueue(int fileflowid) 
//		{
//			int msg = 99 ;
//			String err= "";
//			
//			String selectmodule = "select status,err,created,updated from queue where fileflowid="+fileflowid+" order by id desc limit 1";// and status < 0 or status >2) ";
//			System.out.println("getPyCodeQueue selectmodule--"+selectmodule);
//			PreparedStatement ps = null;
//			ResultSet rs;
//			String module ="";
//			String created ="";
//			String updated ="";   
//			String elapsedtime ="";
//			int count =0;
//			try {   
//				ps = con.prepareStatement(selectmodule);              
//				rs = ps.executeQuery();
//				System.out.println("while start :::::");
//				while (rs.next()) 
//				{    
//					msg = rs.getInt(1);
//					err = rs.getString(2);
//					created = rs.getString(3);
//					updated = rs.getString(4);
//					   
//					
//					SimpleDateFormat inputFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//					Date cdate = null;
//					Date udate = null;
//					try {
//						if (created !=null && updated !=null) 
//						{
//							cdate = inputFormat.parse(created);
//							udate = inputFormat.parse(updated);     
//				
//				   long differenceInMilliSeconds = Math.abs(cdate.getTime() - udate.getTime());
//				   System.out.println("differenceInMilliSeconds-----"+differenceInMilliSeconds);
//				   long differenceInHours = (differenceInMilliSeconds / (60 * 60 * 1000)) % 24;
//				   long differenceInMinutes = (differenceInMilliSeconds / (60 * 1000)) % 60;
//				   long differenceInSeconds = (differenceInMilliSeconds / 1000) % 60;	
//				   	
//				   
//				   elapsedtime = differenceInHours +" Hour "+differenceInMinutes+" Minutes "+differenceInSeconds +" Seconds.";
//				System.out.println("elapsedtime----"+elapsedtime);			
//						}
//					} catch (ParseException e) 
//					{
//						logger.error(e);
//						msg = 99;	
//						elapsedtime ="";
//						System.out.println("time calculation error--"+e.toString());
//					}
//					
//					
//					
//					count++;
//				}
//				System.out.println("while end ::::");
//				
//				rs.close();
//				ps.close();
//			} catch (Exception e) 
//			{
//				msg =99;
//				System.out.println("getModuleList =" + e.toString());
//				return msg+"#_#"+err+"#_#"+elapsedtime;
//			}
//		/*
//		 * if (count >0) { msg=1; }
//		 */
//			return msg+"#_#"+err+"#_#"+elapsedtime;
//		}  
		

		
		
//		public String getPredictionStatusCh(int fileflowid) 
//		{
//			int msg = 99 ;
//			String err= "";
//		  	
//			
//			//String selectmodule = "select status,err,created,updated from queue where fileflowid="+fileflowid;// and status < 0 or status >2) ";
//			
//			String selectmodule = "select status,err,created ,now() as updated from filename  where fileid=(select tablename from queue where fileflowid="+fileflowid+") ";// and status < 0 or status >2) ";
//			
//			System.out.println("getPredictionStatusCh selectmodule--"+selectmodule);
//			PreparedStatement ps = null;
//			ResultSet rs;
//			String module ="";
//			String created ="";
//			String updated ="";
//			String elapsedtime ="";
//			int count =0;
//			try { 
//				ps = con.prepareStatement(selectmodule);              
//				rs = ps.executeQuery();
//				System.out.println("while start :::::");
//				while (rs.next()) 
//				{    
//					msg = rs.getInt(1);
//					err = rs.getString(2);
//					created = rs.getString(3);
//					updated = rs.getString(4);
//					   
//					
//					SimpleDateFormat inputFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
//					Date cdate = null;
//					Date udate = null;
//					try {
//						if (created !=null && updated !=null) 
//						{
//							cdate = inputFormat.parse(created);
//							udate = inputFormat.parse(updated);     
//				
//				   long differenceInMilliSeconds = Math.abs(cdate.getTime() - udate.getTime());
//				   System.out.println("differenceInMilliSeconds-----"+differenceInMilliSeconds);
//				   long differenceInHours = (differenceInMilliSeconds / (60 * 60 * 1000)) % 24;
//				   long differenceInMinutes = (differenceInMilliSeconds / (60 * 1000)) % 60;
//				   long differenceInSeconds = (differenceInMilliSeconds / 1000) % 60;	
//				   	
//				   
//				   elapsedtime = differenceInHours +" Hour "+differenceInMinutes+" Minutes "+differenceInSeconds +" Seconds.";
//				System.out.println("elapsedtime----"+elapsedtime);			
//						}
//					} catch (ParseException e) 
//					{
//						logger.error(e);
//						msg = 99;	
//						elapsedtime ="";
//						System.out.println("time calculation error--"+e.toString());
//					}
//					
//					
//					
//					count++;
//				}
//				System.out.println("while end ::::");
//				
//				rs.close();
//				ps.close();
//			} catch (Exception e) 
//			{
//				msg =99;
//				System.out.println("getModuleList =" + e.toString());
//				return msg+"#_#"+err+"#_#"+elapsedtime;
//			}
//		/*
//		 * if (count >0) { msg=1; }
//		 */
//			return msg+"#_#"+err+"#_#"+elapsedtime;
//		}  
		
		
		
//		@Transactional
//		public JsonArray getTotalRowCountandColumn(String tablename) 
//		{
//
//			DBConClickHouse dbconch = new DBConClickHouse();
//			Connection conch = dbconch.getConnection();
//			
//			JsonArray js = new JsonArray();
//			try {    
//				String countq ="select count() as cnt from cafebot."+tablename;
//				String colq ="select * from cafebot."+tablename+" limit 1";
//						
//				PreparedStatement ps = null;               
//				ps = conch.prepareStatement(countq);        
//				ResultSet  rs = ps.executeQuery();   
//				int rowcount =0;
//				while(rs.next()) 
//				{
//					rowcount = rs.getInt(1);
//				}
//				System.out.println("rowcount--"+rowcount);
//				rs.close();
//				ps.close();
//				
//				
//				PreparedStatement pscol = null;               
//				pscol = conch.prepareStatement(colq);       
//				ResultSet  rscol = pscol.executeQuery(); 
//			    java.sql.ResultSetMetaData rsmd = rscol.getMetaData();
//			    int numColumns = rsmd.getColumnCount();
//				System.out.println("col count --"+numColumns);
//				 JsonObject obj = new JsonObject(); 
//					obj.addProperty("rowcount", rowcount);
//					obj.addProperty("colcount", numColumns);
//					js.add(obj);
//			 
//			} catch (Exception e) 
//			{
//				js.add("");
//				System.out.println("getdata=="+e.toString());    
//			}
//			return js;
//		}
		
		
		
//		private JsonObject jObjFinal = new JsonObject();
//		
//	    public JsonArray setMojoPrediction(final String claimdata, final String mojopath, final int id) {
//	        int msg = 0;
//	        JsonArray jsonreturnarray = new JsonArray();
//	        try {
//	            final JsonParser jsonParser = new JsonParser();
//	            final JsonArray jsonarr = (JsonArray)jsonParser.parse(claimdata);
//	            System.out.println("jsonarr--" + jsonarr);
//	           // DataHelper.logger.info((Object)"1");
//	            final Iterator<JsonElement> headeriterator = (Iterator<JsonElement>)jsonarr.iterator();
//	            final List<String> arrayofheader = new ArrayList<String>();
//	            int count = 0;
//	           // DataHelper.logger.info((Object)"2");
//	            while (headeriterator.hasNext()) 
//	            {
//	                final JsonObject jsonObject = (JsonObject)headeriterator.next();
//	                if (count == 0) 
//	                {
//	                    for (final String key : jsonObject.keySet()) 
//	                    {
//	                        arrayofheader.add(key);
//	                    }
//	                }
//	                ++count;
//	            }
//	            //DataHelper.logger.info((Object)"3");
//	            final Map<String, List<String>> datamap = new HashMap<String, List<String>>();
//	            final String[][] strarr = new String[jsonarr.size()][arrayofheader.size()];
//	            final Iterator<JsonElement> dataiterator = (Iterator<JsonElement>)jsonarr.iterator();
//	            int j = 0;
//	            //DataHelper.logger.info((Object)"4");
//	            while (dataiterator.hasNext()) 
//	            {
//	                final JsonObject jsonObject2 = (JsonObject)dataiterator.next();
//	                int k = 0;
//	                for (final String key2 : jsonObject2.keySet()) {
//	                    strarr[j][k] = jsonObject2.get(key2).toString();
//	                    
//	                    jObjFinal.addProperty(key2, jsonObject2.get(key2).toString());
//	                    
//	                    ++k;
//	                }
//	                ++j;
//	            }
//	            //DataHelper.logger.info((Object)"5");
//	           // final String rootpath = "C:\\apache-tomcat-9.0.19\\webapps\\edaws\\F\\";
//	             String rootpath = "";//"C:\\Tomcat_9\\webapps\\cafe-bot\\F\\";
//	             
//	             
//	             String mojoinnerpath = Constants.Paths.Folders.mojo_inner_path;
//	             String pipeline = String.valueOf(rootpath) + mojopath + mojoinnerpath+"pipeline.mojo";
//	             
//	             System.out.println("pipeline default :::"+pipeline);
//	        	String pipelinetemp = String.valueOf(rootpath) + mojopath+"/pipeline.mojo";
//	     		
//	     		File pipelinedataFile  = new File(pipeline);
//	     		
//	     		if (pipelinedataFile.exists())
//	     		{
//	     			 
//	     		}
//	     		else if (new File(pipelinetemp).exists())
//	     		{
//	     			pipeline = pipelinetemp;
//	     		}
//	             
//	            System.out.println("pipeline:::::::"+pipeline); 
//	     		
//	            //DataHelper.logger.error((Object)("10" + pipeline));
//	            pipeline = pipeline.replace("\\", "/");
//	            
//	           System.out.println("pipeline---"+pipeline);
//	            
//	           jsonreturnarray = PredictDataViaAPI(pipeline, arrayofheader, strarr,id);
//	            
//	            System.out.println("pred size--" + jsonreturnarray.size());
//	            
//			/*
//			 * if (jsonreturnarray.size() > 0) { System.out.println("update--");
//			 * this.updatePrediction(jsonreturnarray, id); }
//			 */
//	            msg = 1;
//	        }
//	        catch (Exception e) {
//	            msg = 0;
//	            System.out.println("MojoPrediction-" + e.toString());
//	            //DataHelper.logger.error((Object)e);
//	            
//	        }
//	        return jsonreturnarray;
//	    }	
		
	    
	    
//	    public JsonArray PredictDataViaAPI(final String pipeline, final List<String> arrayofheader, final String[][] strarr,final int id) {
//	        final List<String> qlist = new ArrayList<String>();
//	        final JsonArray json = new JsonArray();
//	        //DataHelper.logger.error((Object)"DB1");
//	        
//	        try 
//	        {
//	        	
//	        	System.out.println("api pipeline--"+pipeline);
//	        	//pipeline = "C:\\temp\\PT-36044425S\\pipeline.mojo";
//	            final MojoPipeline localMojoPipeline = MojoPipeline.loadFrom(pipeline);
//	            final MojoFrameBuilder localMojoFrameBuilder = localMojoPipeline.getInputFrameBuilder();
//	           // DataHelper.logger.error((Object)"DB2");
//	            
//	            System.out.println("strarr::::"+strarr.toString());
//	            
//	            final String[][] arrayOfString1 = strarr;
//	            System.out.println("arrayOfString1==" + arrayOfString1.length);
//	            MojoRowBuilder localMojoRowBuilder = localMojoFrameBuilder.getMojoRowBuilder();
//	           // DataHelper.logger.error((Object)"DB3");
//	            String[][] array;
//	            
//	            
//	            for (int length = (array = arrayOfString1).length, l = 0; l < length; ++l) {
//	                final String[] str2 = array[l];
//	                for (int k = 0; k < str2.length; ++k) {
//	                    localMojoRowBuilder.setValue((String)arrayofheader.get(k), str2[k]);
//	                }
//	                localMojoRowBuilder = localMojoFrameBuilder.addRow(localMojoRowBuilder);
//	            }
//	            
//	            
//	            //final MojoFrameBuilder frameBuilder = localMojoPipeline.getInputFrameBuilder();
//	           // final MojoRowBuilder rowBuilder = frameBuilder.getMojoRowBuilder();
//	           
//	            
//	            final MojoFrame iframe = localMojoFrameBuilder.toMojoFrame();
//	            final MojoFrame oframe = localMojoPipeline.transform(iframe);
//	            
//	            System.out.println("oframe::::::"+oframe.toString());
//	            
//	            String csvpath= pipeline.replace("pipeline.mojo", "")+"pred.csv";
//	            
//	            
//	            OutputStream out = new FileOutputStream(csvpath); 
//	            
//	            final Writer writer = new BufferedWriter(new OutputStreamWriter(out));
//	            final CSVWriter csvWriter = new CSVWriter(writer);
//	            System.out.println("write::::::"+csvWriter);
//	           
//	            CsvWritingBatchHandler.csvWriteFrame(csvWriter, oframe, true);
//	            System.out.println();
//	            
//	              
//				
//				
//				 List < Map < String, String >> list = new ArrayList < > ();
//					try (InputStream in = new FileInputStream(csvpath);) 
//					{
//					    CSV csv = new CSV(true, ',', in );
//					    List < String > fieldNames = null;
//					    if (csv.hasNext()) fieldNames = new ArrayList < > (csv.next());
//					   
//					    
//					    int count =0;
//					    while (csv.hasNext()) 
//					    {
//					    	
//					        List < String > x = csv.next();
//					        Map < String, String > obj = new LinkedHashMap < > ();
//					        for (int i = 0; i < fieldNames.size(); i++) {
//					            obj.put(fieldNames.get(i), x.get(i));
//					            
//					            jObjFinal.addProperty(fieldNames.get(i), x.get(i));
//					        }      
//	        
//					        if (count>0) 
//					        {
//					        	break;     
//					        }
//					        list.add(obj);
//					        count++;
//					        
//					        
//					        
//					    }
//					  	}
//					catch (Exception e) 
//					{
//						// TODO: handle exception
//					}
//				
//				
//             
//                
//                System.out.println("jObjFinal:::::"+jObjFinal);
//                json.add(jObjFinal);
//				
//				
//	            
//	            
//	            
//			/*
//			 * localMojoFrameBuilder.toMojoFrame(); final StopWatch localStopWatch =
//			 * StopWatch.start(); final MojoFrame localMojoFrame =
//			 * localMojoPipeline.transform(localMojoFrameBuilder); final SimpleCSV
//			 * localSimpleCSV = SimpleCSV.read(localMojoFrame); final String[] precol =
//			 * localSimpleCSV.getLabels(); final String[][] pre = localSimpleCSV.getData();
//			 * final List headerlist = arrayofheader;
//			 * headerlist.addAll(Arrays.asList(precol)); final String[][] combineData = new
//			 * String[pre.length][headerlist.size()]; final String header = ""; for (int row
//			 * = 0; row < pre.length; ++row) { int count = 0; for (int j = 0; j <
//			 * arrayOfString1[row].length; ++j) { combineData[row][j] =
//			 * arrayOfString1[row][j]; ++count; } for (int j = 0; j < pre[row].length; ++j)
//			 * { combineData[row][count] = arrayOfString1[row] + pre[row][j];
//			 * combineData[row][count] = pre[row][j]; ++count; } } for (int q = 0; q <
//			 * combineData.length; ++q) { final JsonObject obj = new JsonObject(); final
//			 * String value = ""; final String colname = headerlist.get(q).toString(); final
//			 * String datatype = ""; for (int i = 0; i < combineData[q].length; ++i) {
//			 * obj.addProperty(headerlist.get(i).toString(), combineData[q][i].toString());
//			 * } json.add((JsonElement)obj); }
//			 */
//	       
//	        
//	        
//	        
//	        }
//	        catch (FileNotFoundException flnf) {
//	            System.out.println("File not found error ::" + flnf);
//	        }
//	        catch (LicenseException localLicenseException) {
//	            System.out.println("localLicenseException" + localLicenseException);
//	            //DataHelper.logger.error((Object)localLicenseException);
//	            //updateQueueonfailure(id,localLicenseException.toString());
//	        }
//	        catch (NumberFormatException ne) 
//	        {
//	           // DataHelper.logger.error((Object)"DB9-error");
//	            System.out.println("NumberFormatException mojo--" + ne.getMessage().toString());
//	           // DataHelper.logger.error((Object)ne);
//	            //update featureset 
//	            //updateQueueonfailure(id,ne.getMessage().toString());
//	        }
//	        catch (Exception e) 
//	        {
//	            //DataHelper.logger.error((Object)"DB9-error");
//	            System.out.println("error mojo--" + e.toString());
//	           // DataHelper.logger.error((Object)e);
//	            
//	            //update featureset 
//	            //updateQueueonfailure(id,e.toString());
//	        }
//	        finally {
//	            final MojoPipeline localMojoPipeline = null;
//	           // DataHelper.logger.error((Object)"DB10finallay");
//	        }
//	        final MojoPipeline localMojoPipeline = null;
//	        //DataHelper.logger.error((Object)"DB10finallay");
//	        return json;
//	    }
		
	/*
	 * public Connection buildConnection () { Connection con =null; // con =
	 * dbcon.getConnection();// con=dbcon.getConnection();
	 * System.out.println("connection---"+con); return con; }
	 */

	    
	    public int getnulloremptyvalue(String queryString) 
		{
	    			int countrow = 0;
	    	System.out.println("queryString--"+queryString);
			PreparedStatement ps = null;
			ResultSet rs;
			String catname = "";
			String agg = "";
			
			try {
				ps = conch.prepareStatement(queryString);
				rs = ps.executeQuery();
				while (rs.next()) 
				{
					countrow++;
					break;
				}
				rs.close();
				ps.close();
			} catch (Exception e) 
			{
				catname= "";
				countrow = -1 ;
				System.out.println("getnulloremptyvalue error ====" + e.toString());
			}
			return countrow;
		}  
	    
	    
	    public int checkvalueexist(String queryString) 
	 		{
	 	    	
	    	   int countrow = 0;
	 	    	System.out.println("queryString--"+queryString);
	 			PreparedStatement ps = null;
	 			ResultSet rs;
	 			String catname = "";
	 			String agg = "";
	 			
	 			try {
	 				ps = conch.prepareStatement(queryString);
	 				rs = ps.executeQuery();
	 				while (rs.next()) 
	 				{
	 					countrow++;
	 					break;
	 				}
	 				//countrow++;
	 				rs.close();
	 				ps.close();
	 			} catch (Exception e) 
	 			{
	 				
	 				countrow = -1 ;
	 				System.out.println("checkvalueexist error ====" + e.toString());
	 			}
	 			return countrow;
	 		}  
	 	    
	    
	    
	    public int getMaxlenofcolumn(String queryString) 
 		{
 	    	
    	   int countrow = 0;
 	    	System.out.println("queryString--"+queryString);
 			PreparedStatement ps = null;
 			ResultSet rs;
 			String catname = "";
 			String agg = "";
 			
 			try {
 				ps = conch.prepareStatement(queryString);
 				rs = ps.executeQuery();
 				while (rs.next()) 
 				{
 					countrow = rs.getInt(1);
 					//break;
 				}
 				//countrow++;
 				rs.close();
 				ps.close();
 			} catch (Exception e) 
 			{
 				
 				countrow = -1 ;
 				System.out.println("checkvalueexist error ====" + e.toString());
 			}
 			return countrow;
 		} 
	    
	    
	    public int getTotalCount(String queryString) 
		{
	    	int countrow = 0;
	    	System.out.println("queryString--"+queryString);
			PreparedStatement ps = null;
			ResultSet rs;
			String catname = "";
			String agg = "";
			       
			try {
				ps = conch.prepareStatement(queryString);      
				rs = ps.executeQuery();
				while (rs.next())       
				{
					countrow  = rs.getInt("cnt");
					//break;
				}
				rs.close();
				ps.close();
			} catch (Exception e) 
			{
				catname= "";
				countrow = 0 ;
				System.out.println("getnulloremptyvalue error ====" + e.toString());
			}
			return countrow;
		}   
	    
	    
	 public int getFileflowid(String query) 
	 {
			int id = 0;
			
			System.out.println(query);
			try {
			PreparedStatement ps = null;
			ps = con.prepareStatement(query);

			if (ps.execute()) 
			{
				ResultSet rs = ps.getResultSet();
				rs.next();
				id = rs.getInt(1);
			} else 
			{
				id = ps.getUpdateCount();
			}
			}catch (Exception e) 
			{
				// TODO: handle exception
				System.out.println("getFileflowid--"+e.toString());
			}
			return id;
		 
	 }   
	  
	 
	 public int getFileflowidByModelKey(String query) 
	 {
			int id = 0;
			
			System.out.println(query);
			try 
			{
			
				PreparedStatement ps = null;
			    ResultSet rs;
			    ps = con.prepareStatement(query);
			    rs = ps.executeQuery();
			while (rs.next())       
			{
				id  = rs.getInt("fileflowid");
				//break;
			}
			rs.close();
			ps.close();
		
			}catch (Exception e) 
			{
				id = 0;
				// TODO: handle exception
				System.out.println("getFileflowid--"+e.toString());
			}
			
			System.out.println("fileflowid :::::"+id);
			return id;
		 
	 }   
	 
	 public int inserintoFlow(String q)  {
			
			PreparedStatement ps = null;
			int msg = 0;
	    	try 
	    	{
	    		 ps = con.prepareStatement(q);				
				msg = ps.executeUpdate();  
	    	}
	    	catch (Exception e) {
	    		System.out.println(e.getMessage());			
			}
	    	return msg;
		}
		
	 
	 public int updateQueueForCV(int fileflowid,int status,String type,int flag,String tablename,
			 String tasktype,String dirpath,int chkappend,String appendfileid,String txtModel,int projectid) 
		{
			int msg =0;
			try 
			{
				int succmsg= getPyQueue(fileflowid); 
				System.out.println("fileflowid--"+fileflowid);
				PreparedStatement ps = null;
				Statement statement = con.createStatement();
					
				String qaccess = "";

				// to identify type of process
				String err= "Queued";
				
				
				if (flag ==0) 
				{
					qaccess = "insert into queue (fileflowid,status,modeltype,err,tablename,tasktype,down_path,filenameid,modelkey,projectid) "
							+ "values("+fileflowid+","+status+",'"+type+"','"+err+"','"+tablename+"','"+tasktype+"',"
									+ "'"+dirpath+"','"+tablename+"','"+txtModel+"',"+projectid+")";
				}
				else 
				{
					qaccess = " update queue  set status = "+status+",err='"+err+"',"
							+ "tablename='"+tablename+"'"
							+ ",down_path='"+dirpath+"'"
							+ ",isappend="+chkappend+" ,"
							+ "modelkey='"+txtModel+"',"
							+ "tablename='"+appendfileid+"',projectid="+projectid+" where fileflowid ="+fileflowid;
				}
					
					System.out.println("qaccess--"+qaccess);
					statement.addBatch(qaccess); 
				    statement.executeBatch();
				    statement.close();
				msg=1;
			}
			catch (Exception e) 
			{
				msg =0;
				System.out.println("update updateQueueForPy error ---"+e.toString());
			}
			
			return msg;
		}	
	 
//	 
//	 public ai.easydata.mhub.models.File GetIsQueryFile(int fileid) {
//			
//			String subQuery = "select isquery,query from file where id="+fileid;
//			System.out.println("subQuery---"+subQuery);
//			ai.easydata.mhub.models.File fl = new ai.easydata.mhub.models.File(); 
//			int returnValue=0 ;
//			try {    
//				PreparedStatement ps = null;              			
//				ps = con.prepareStatement(subQuery);  
//				ResultSet  rs = ps.executeQuery(); 
//				System.out.println("  trr"+rs.next());
//					while(rs.next()) 
//					{
//						int isquery = rs.getInt("isquery");
//						System.out.println("isquery---"+isquery);
//						fl.setIsquery(isquery);
//						fl.setQuery(rs.getString("query"));
//					}
//			ps.close();
//			} catch (Exception e) 
//			{
//				System.out.println("getdata error ==" + e.toString());    
//			}
//			return fl;
//			
//		}
		
	  
//		
//	     @Transactional
//		public int dropAndCreateFileSchema(String tablename, String userdefinedtablename, String tablequery) 
//		{
//			
//			//String tablename="PT66456817S";
//			int msg=0;
//			int fileId=0;
//			try {
//		 	String findTableQuery="where tablename='"+tablename+"'";
//		 	List<in.easydata.mhub.models.File> list=fileDao.getListByCondition(findTableQuery);
//		 	
//		 	if(list.size()>0) 
//		 	{
//		 	 /* delete if already exist  file and schema */
//		 		System.out.println("---------- exist already -----------");
//		 		ai.easydata.mhub.models.File file=list.get(0);
//		 		int fileid=file.getId();
//		 		List<SelectProperties> listselectProperties=selectPropertiesDao.getList(fileid);
//		 		for(SelectProperties sp:listselectProperties) {
//		 			selectPropertiesDao.delete(sp);
//		 		}
//		 		System.out.println("---------- delete schema -----------");
//		 		fileDao.delete(file);
//		 		System.out.println("---------- delete file("+tablename+") -----------");
//		 	}
//		 	
//		 	
//		 	Seconds secondsSinceEpoch = null;
//			String generatedfilename ="";
//			String startdate = Constants.Paths.Folders.TIMESTART;
//			
//			secondsSinceEpoch = Seconds.secondsBetween(org.joda.time.DateTime.parse(startdate),org.joda.time.DateTime.now());
//			generatedfilename = secondsSinceEpoch.toString();
//		 	
//		 	ai.easydata.mhub.models.File file=new ai.easydata.mhub.models.File();
//		 	file.setType("commponent");
//		 	file.setIsoriginal(0);
//		 	file.setIsquery(1);
//		 	file.setTablename(generatedfilename);
//		 	file.setQuery(tablequery);  //just ask  tablequery is query or not
//		 	fileId=fileDao.saveOrUpdateAndGetId(file);
//		 System.out.println("fileId---"+fileId);
//		 	ResultSetMetaData rsmd = getFileSchema(fileId, tablequery);  //just ask  tablequery is query or not
//		 	if(rsmd!=null) {
//				for (int i = 1; i <= rsmd.getColumnCount(); i++) 
//				{
//				// colarr.add(rsmd.getColumnName(i));
//					SelectProperties sp=new SelectProperties();
//					String columnname=rsmd.getColumnName(i).replace("(", "").replace(")", "").replace("(", "").replace(")", "").replace(' ', '_').replace('-', '_');
//					sp.setFileid(fileId);
//					sp.setColumnname(columnname);
//					sp.setDatatype("text");
//					sp.setDatasize(100);
//					sp.setIsdisplay(1);
//					System.out.println("i"+i);
//					System.out.println("sp"+sp.toString());
//					selectPropertiesDao.save(sp);
//				}
//		 	}
//		 	
//		 	//detect datatype //optional
//		 	
//	        
//			return fileId;
//			
//			}catch (Exception e) {
//				
//				List<ai.easydata.mhub.models.File> list= fileDao.getListByFileid(fileId);
//				if(list.size()>0) {
//					fileDao.delete(list.get(0));
//				}
//				System.out.println("Exp ===>"+e.getMessage());
//				
//				return 0;
//			}
//		}
		
		
		public ResultSetMetaData getFileSchema(int fileid, String query) throws Exception {
			ResultSetMetaData rsmd=null;
			if (fileid > 0) {
				ResultSet rsfromquery=null;
				try {
					PreparedStatement psselect = null;
					String tablelistQ = "SELECT * FROM (" + query + ") limit 1";
					// String tablelistQ = "SELECT * FROM cafebot.vpa limit 1";
					psselect = conch.prepareStatement(tablelistQ);
					 rsfromquery = psselect.executeQuery();
					List<String> qlist = new ArrayList<String>();

					if (rsfromquery != null) {
					// do {
						 rsmd = rsfromquery.getMetaData();
					}
				}catch(Exception e) {
					System.out.println("Read Schema from clickhouse :: "+e.getMessage());
					throw(e);
					
				}finally {
					try {
						rsfromquery.close();
					} catch (SQLException e) {
						System.out.println(e.getMessage());
					}	
				}
			}
			return rsmd;
		}
		
		
		 public String getTablenameByApikey(String inQuery) 
		  {
			  String msg = "";
			
				PreparedStatement ps = null;
				ResultSet rs;
				
				try {
					ps = con.prepareStatement(inQuery);
					rs = ps.executeQuery();
					while (rs.next()) 
					{
						msg = rs.getString(1);
					}
					rs.close();
					ps.close();
				} catch (Exception e) 
				{
					System.out.println("getTablenameByApikey =" + e.toString());
				}
				
				
				return msg;
		  }
		 
		  
		 
		 
//		 public List<BlendProject> getProjectJsonSchema(int pid) 
//		  {
//			  List<BlendProject> ls = new ArrayList<BlendProject>() ;
//			
//				PreparedStatement ps = null;
//				ResultSet rs;
//				
//				try {
//					String sharedquery = "select id,name,userid,jsonschema from blendproject where id="+pid;
//					ps = con.prepareStatement(sharedquery);
//					rs = ps.executeQuery();
//					
//					while (rs.next()) 
//					{
//						int bpid = rs.getInt("id");
//						int uid = rs.getInt("userid");
//						String projectname = rs.getString("name");
//						String jsonschema = rs.getString("jsonschema");
//						BlendProject bp = new BlendProject();
//						
//						bp.setId(bpid);
//						bp.setName(projectname);
//						bp.setUserid(uid);
//						bp.setProjectid(pid);
//						bp.setShareduserlist(jsonschema);
//						ls.add(bp);
//						
//						
//					}
//					rs.close();
//					ps.close();
//				} catch (Exception e) 
//				{
//					ls =null;
//					System.out.println("getSharedproject =" + e.toString());
//				}
//				
//				
//				return ls;
//		  }
		
		 
//		 public List<BlendProject> getSharedproject(int userid) 
//		  {
//			  List<BlendProject> ls = new ArrayList<BlendProject>() ;
//			
//				PreparedStatement ps = null;
//				ResultSet rs;
//				
//				try {
//					String sharedquery = "select distinct project_name,userid,projectid,shareuserid,blendprojectid from blendproject_share where shareuserid="+userid;
//					ps = con.prepareStatement(sharedquery);
//					rs = ps.executeQuery();
//					
//					while (rs.next()) 
//					{
//						int bpid = rs.getInt("blendprojectid");
//						int pid = rs.getInt("projectid");
//						int uid = rs.getInt("userid");
//						String projectname = rs.getString("project_name");
//						BlendProject bp = new BlendProject();
//						
//						bp.setId(bpid);
//						bp.setName(projectname);
//						bp.setUserid(uid);
//						bp.setProjectid(pid);
//						ls.add(bp);
//						
//						
//					}
//					rs.close();
//					ps.close();
//				} catch (Exception e) 
//				{
//					ls =null;
//					System.out.println("getSharedproject =" + e.toString());
//				}
//				
//				
//				return ls;
//		  }
		 
//		 public List<BlendProject> getSharedprojectByproject(int userid,int id) 
//		  {
//			  List<BlendProject> ls = new ArrayList<BlendProject>() ;
//			
//				PreparedStatement ps = null;
//				ResultSet rs;
//				
//				try {
//					String sharedquery = "select distinct project_name,userid,projectid,shareuserid,blendprojectid from blendproject_share where shareuserid="+userid+" and blendprojectid="+id;
//					System.out.println("sharedquery---"+sharedquery);
//					ps = con.prepareStatement(sharedquery);
//					rs = ps.executeQuery();
//					
//					while (rs.next()) 
//					{
//						int bpid = rs.getInt("blendprojectid");                   
//						int pid = rs.getInt("projectid");
//						int uid = rs.getInt("shareuserid");
//						String projectname = rs.getString("project_name");
//						BlendProject bp = new BlendProject();
//						
//						bp.setId(bpid);
//						bp.setName(projectname);
//						bp.setUserid(uid);
//						bp.setProjectid(pid);
//						ls.add(bp);
//						
//						
//					}
//					rs.close();
//					ps.close();
//				} catch (Exception e) 
//				{
//					ls =null;
//					System.out.println("getSharedprojectByproject  =" + e.toString());
//				}
//				
//				
//				return ls;
//		  }
		 
		 
		 
		 
		 public String addKey(String str) 
		 {
		 		String temp="E@"+str+"s1";
		 		return temp;
		 }
		 		
		 public String removeKey(String str) 
		 {
		 		  String temp=str.substring(2, str.length()-2);
		 		  return temp;
		 }
		 
			public String shareProject(String projectname,int userid,int projectid,String userlist,int blendid ) 
			{
				String msg ="";
				try 
				{
					
					String succ= deleteShareProjectAll(userid, projectid) ;
					
					if (succ =="0") 
					{
						msg ="0";
					}	
					else 
					{	
					
					
					PreparedStatement ps = null;
					
					System.out.println("userlist---"+userlist);
			
				if (!userlist.equalsIgnoreCase("null") && userlist !=null) 
             {	
					String [] str = userlist.split(",");
					System.out.println("size");
					System.out.println(str.length);
					Statement statement = con.createStatement();
						//System.out.println("str---"+str[0]);
					for (int k=0;k < str.length;k++) 
					{
						System.out.println("str---"+str[k]);
					String qprojectshare = "insert into blendproject_share (project_name,userid,projectid,shareuserid,blendprojectid) "
																+ "values('"+projectname+"',"+userid+","+projectid+","+str[k]+","+blendid+");";
						System.out.println("qprojectshare--"+qprojectshare);
						statement.addBatch(qprojectshare);
						
					}
					     
					statement.executeBatch();
					statement.close();
					msg="1";
			
					}
				msg="1";
			}	
				
				
				}
				catch (Exception e) 
				{
					msg ="0";
					System.out.println("update project share  error ---"+e.toString());
				}
				
				return msg;
			}
			
			
//			public JsonArray getSharedProjectList(int userid) 
//			{
//				JsonArray js = new JsonArray();
//				
//			
//				
//				 String selectsharedProject = "select distinct bs.project_name,max(bs.created),us.username,bs.userid,bs.shareuserid from blendproject_share bs "
//				 		+ "inner join users us on us.id = bs.shareuserid where  userid ="+userid+"  "
//				 				+ "group by bs.project_name ,us.username,bs.userid,bs.shareuserid ";
//				
//				
//				System.out.println("selectsharedProject--"+selectsharedProject);
//				PreparedStatement ps = null;
//				ResultSet rs;
//				
//				String projectname ="";
//				int shareduserid =0;
//				String username ="";
//				String created ="";
//				int shareuserid = 0;
//				
//					try {
//					ps = con.prepareStatement(selectsharedProject);
//					rs = ps.executeQuery();
//					while (rs.next()) 
//					{
//						JsonObject obj = new JsonObject();
//						
//						projectname = rs.getString(1);;
//						created = rs.getString(2);
//						username = rs.getString(3);
//						shareduserid =  rs.getInt(5);
//						
//						DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm");
//						String output ="";
//			    		Date cdate=null;
//			    		try {
//			    	                   cdate = dateFormat.parse(created); //2020-11-23 07:40:50.049103
//			    			          output = dateFormat.format(cdate);
//			    		} 
//			    		catch (ParseException e) {
//			    		    e.printStackTrace();
//			    		}
//						obj.addProperty("projectname", projectname);
//						obj.addProperty("created", output);
//						obj.addProperty("username", username);
//						obj.addProperty("userid", userid);
//						obj.addProperty("shareduserid", shareduserid);
//						
//						js .add(obj);
//					}
//					rs.close();
//					ps.close();
//				} catch (Exception e) 
//				{
//					
//					System.out.println("selectmodule ==" + e.toString());
//				}
//				return js;
//			}  
			
			public String deleteShareProject(int userid,int shareuserid ) 
			{
				String msg ="";
				try 
				{
					Statement statement = con.createStatement();
						String qshareproject = "delete  from blendproject_share where userid ="+userid+" and shareuserid="+shareuserid;
						System.out.println("qshareproject--"+qshareproject);
						statement.addBatch(qshareproject); 
						statement.executeBatch();
						statement.close();
						msg="1";
				}
				catch (Exception e) 
				{
					msg ="0";
					System.out.println("delete shareproject error ---"+e.toString());
				}
				
				return msg;
			}
		
			
			
		public String shareDataobject(int userid,String userlist,int fileid ) 
			{
				String msg ="";
				try 
				{
					
					String succ= deleteDataobject(userid ,fileid) ;
			
				if (succ =="0") 
				{
					msg ="0";
				}	
				else 
				{	
					PreparedStatement ps = null;
					System.out.println("userlist---"+userlist);
			
					if (!userlist.equalsIgnoreCase("null") && userlist !=null) 
		             {	
							
					
					String [] str = userlist.split(",");
					System.out.println("size");
					System.out.println(str.length);
					Statement statement = con.createStatement();
						//System.out.println("str---"+str[0]);
					for (int k=0;k < str.length;k++) 
					{
						System.out.println("str---"+str[k]);
					String shareDataobject = "insert into file_share (owner_userid,fileid,shared_userid) "
																+ "values("+userid+","+fileid+","+str[k]+");";
						System.out.println("shareDataobject--"+shareDataobject);
						statement.addBatch(shareDataobject);
					}
					     
					statement.executeBatch();
					statement.close();
					msg="1";
					
				}
					msg="1";
				}
				}
				catch (Exception e) 
				{
					msg ="0";
					System.out.println("update shareDataobject share  error ---"+e.toString());
				}
				
				return msg;
			}		
		
//		public JsonArray getDataobjectList(int userid) 
//		{
//			JsonArray js = new JsonArray();
//			
//			 String selectsharedProject = "select distinct fl.tablename as filename ,max(fs.created) as created,"
//			 		+ "us.username as owner_username,fs.owner_userid as owner_userid,"
//			 		+ "fs.shared_userid as shared_userid,us.username as shared_username from file_share fs "
//			 		+ "inner join users us on us.id = fs.shared_userid "
//			 		+ "inner join users us on us.id = fs.owner_userid "
//			 		+ "inner join file fl on fl.id = fs.fileid "
//			 		+ "where  userid ="+userid+"  group by fs.shared_userid ";
//			
//			
//			System.out.println("selectsharedProject--"+selectsharedProject);
//			PreparedStatement ps = null;
//			ResultSet rs;
//			
//			String filename ="";
//			int shared_userid =0;
//			int owner_userid =0;
//			
//			String owner_username ="";
//			String shared_username ="";
//			
//			String created ="";
//			
//				try 
//				{
//				ps = con.prepareStatement(selectsharedProject);
//				rs = ps.executeQuery();
//				while (rs.next()) 
//				{
//					JsonObject obj = new JsonObject();
//					
//					filename = rs.getString(1);;
//					created = rs.getString(2);
//					owner_username = rs.getString(3);
//					owner_userid =  rs.getInt(4);
//					shared_username = rs.getString(3);
//				    shared_userid =  rs.getInt(4);
//				    
//				    
//					DateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm");
//					String output ="";
//		    		Date cdate=null;
//		    		try 
//		    		{
//		    	                   cdate = dateFormat.parse(created); //2020-11-23 07:40:50.049103
//		    			          output = dateFormat.format(cdate);
//		    		} 
//		    		catch (ParseException e) {
//		    		    e.printStackTrace();
//		    		}
//					obj.addProperty("filename", filename);
//					obj.addProperty("created", output);
//					obj.addProperty("owner_username", owner_username);
//					obj.addProperty("owner_userid", owner_userid);
//					obj.addProperty("shared_username", shared_username);
//					obj.addProperty("shared_username", shared_username);
//					
//					js .add(obj);
//				}
//				rs.close();
//				ps.close();
//			} catch (Exception e) 
//			{
//				
//				System.out.println("selectmodule ==" + e.toString());
//			}
//			return js;
//		}  	
		
		
		public String deleteDataobject( int userid , int fileid) 
		{
			String msg ="";
			try 
			{
				Statement statement = con.createStatement();
					String qdeleteDataobject = "delete  from file_share where owner_userid ="+userid+" and fileid="+fileid ;
					System.out.println("deleteDataobject--"+qdeleteDataobject);
					statement.addBatch(qdeleteDataobject); 
					statement.executeBatch();
					statement.close();
					msg="1";
			}
			catch (Exception e) 
			{
				msg ="0";
				System.out.println("delete Dataobject error ---"+e.toString());
			}
			
			return msg;
		}
		
		
		
		public String deleteShareProjectAll( int userid , int projectid) 
		{
			String msg ="";
			try 
			{
				Statement statement = con.createStatement();
					String qdeleteDataobject = "delete  from blendproject_share where userid ="+userid+" and blendprojectid="+projectid ;
					System.out.println("deleteDataobject--"+qdeleteDataobject);
					statement.addBatch(qdeleteDataobject); 
					statement.executeBatch();
					statement.close();
					msg="1";
			}
			catch (Exception e) 
			{
				msg ="0";
				System.out.println("delete Dataobject error ---"+e.toString());
			}
			
			return msg;
		}
		
		
			
//			@Transactional
//			public List<Map> getPreviewJsondataMap(String query) 
//			{
//
//				List<Map> lsmap = new ArrayList<Map>();
//				JsonArray js = new JsonArray();
//				System.out.println("getPreviewJsondataMap query == "+query);  
//				try {    
//					PreparedStatement ps = null;              
//					
//					ps = conch.prepareStatement(query);       
//					ResultSet  rs = ps.executeQuery();        
//					
//						java.sql.ResultSetMetaData rsmd = rs.getMetaData();
//						while(rs.next()) 
//						{
//						  int numColumns = rsmd.getColumnCount();
//						  Map<String, String> map = new HashMap<String, String>();
//						  
//						  for (int i=1; i<=numColumns; i++) 
//						  {
//						    String column_name = rsmd.getColumnName(i);  
//						   	String val="";
//						    	if(rs.getObject(column_name) != null) 
//						    	{
//						    		val =rs.getObject(column_name).toString();
//						    	}
//						    	
//						    	//System.out.println("column_name----"+column_name);
//						    	map.put(column_name, val);
//			         		 
//						  }    
//						  lsmap.add(map);
//						}  
//				} catch (Exception e) 
//				{
//					Map<String, String> map = new HashMap<String, String>();
//					map.put("ErrorError", "Error-");
//					lsmap.add(map);
//					//js.add("Error-");
//					System.out.println("getPreview data == " + e.toString());    
//				}
//
//			
//				return lsmap;
//			}		
			
			
			
//			@Transactional
//			public List<Map> getPreviewJsondataMapwithSchema(String query) 
//			{
//
//				List<Map> lsmap = new ArrayList<Map>();
//				JsonArray js = new JsonArray();
//				System.out.println("getPreviewJsondataMap query == "+query);  
//				try {    
//					PreparedStatement ps = null;              
//					
//					ps = conch.prepareStatement(query);       
//					ResultSet  rs = ps.executeQuery();        
//					
//						java.sql.ResultSetMetaData rsmd = rs.getMetaData();
//						while(rs.next()) 
//						{
//						  int numColumns = rsmd.getColumnCount();
//						  Map<String, String> map = new HashMap<String, String>();
//						  
//						  for (int i=1; i<=numColumns; i++) 
//						  {
//						    String column_name = rsmd.getColumnName(i);  
//						    map = new HashMap<String, String>();
//						    System.out.println("column_name:::::::"+column_name);
//						   	String val="";
//						    	if(rs.getObject(column_name) != null) 
//						    	{
//						    		val =rs.getObject(column_name).toString();
//						    	}
//						    	
//						    	//System.out.println("column_name----"+column_name);
//						    	map.put("COLUMN_NAME", column_name);
//						    	map.put("DATA_TYPE", "text");
//						    	map.put("COLUMN_DEFAULT", "");
//						    	map.put("CHARACTER_MAXIMUM_LENGTH", "");
//						    	lsmap.add(map);
//						  }  
//						  
//						 System.out.println("len:::::"+lsmap.size());
//						  
//						}  
//				} catch (Exception e) 
//				{
//					Map<String, String> map = new HashMap<String, String>();
//					map.put("ErrorError", "Error-");
//					lsmap.add(map);
//					//js.add("Error-");
//					System.out.println("getPreview data == " + e.toString());    
//				}
//
//			
//				return lsmap;
//			}		
			
			
	public int updateFileflowrequeue(int id) 
	{
		int success = 0;
					String selectModel = "update fileflow set isqueue = 1 where id=" + id;  // updated = now()
					PreparedStatement ps = null;
					ResultSet rs;
					try {
						ps = con.prepareStatement(selectModel);
						// rs = ps.executeUpdate();
						success = ps.executeUpdate();
						ps.close();
					} catch (Exception e) {
						System.out.println("updatemodel 1 ====" + e.toString());
					}
				return success;
			}	
			
	public void updateUserlog(String q)
	{
		PreparedStatement ps = null;
		ResultSet rs;
		int success =0;
		try {
			ps = con.prepareStatement(q);
			// rs = ps.executeUpdate();
			success = ps.executeUpdate();
			ps.close();
		} catch (Exception e) {
			System.out.println("updateUserlog  ====" + e.toString());
		}
	}		
	
	
//	public String getKeycloakSession(String username,String password,
//			String keycloak_admin_client_id,
//			String keycloak_admin_grant_type,
//			String keycloak_admin_client_secret,
//			String keycloak_admin_base_url,String keycloak_admin_realm) 
//	{
//		String msg ="";
//		try 
//		{
//			InputStream inStream = null;
//			String client_id = keycloak_admin_client_id;//    "cafebot_client"; 
//			String grant_type =keycloak_admin_grant_type;//  "password";
//			String client_sceret = keycloak_admin_client_secret;//  "a7c77dba-5fa2-44c1-9d5e-743469af1c4d";
//			
//			String urlParameters  = "client_id="+client_id+"&username="+username+"&password="+password+"&grant_type=password&client_secret="+client_sceret;
//			//urlParameters =   URLEncoder.encode(urlParameters);
//			System.out.println("urlParameters--"+urlParameters); 
//		byte[] postData = urlParameters.getBytes( StandardCharsets.UTF_8 );
//		int postDataLength = postData.length;
//		
//		   //http://localhost:8080
//		String request = keycloak_admin_base_url +"/auth/realms/"+keycloak_admin_realm+"/protocol/openid-connect/token";
//
//		URL url = new URL( request );
//		HttpURLConnection conn= (HttpURLConnection) url.openConnection();           
//		conn.setDoOutput(true);
//		conn.setInstanceFollowRedirects(false);
//		conn.setRequestMethod("POST");
//		conn.setRequestProperty("Content-Type", "application/x-www-form-urlencoded"); 
//		conn.setRequestProperty("charset", "utf-8");
//		conn.setRequestProperty("Content-Length", Integer.toString(postDataLength ));
//		conn.setUseCaches(false);
//		
//		try(DataOutputStream wr = new DataOutputStream(conn.getOutputStream())) {
//		   wr.write( postData );
//		}
//		
//		int HttpResult = conn.getResponseCode();
//
//		System.out.println("HttpResult---" + HttpResult);
//
//		if (HttpResult == 200) 
//		{
//			inStream = conn.getInputStream();
//			BufferedReader bReader = new BufferedReader(new InputStreamReader(inStream));
//			String temp, response = "";
//			while ((temp = bReader.readLine()) != null) {
//				response += temp;
//			}
//		System.out.println("response---"+response);
//		
//		JsonObject jsonObject = new JsonParser().parse(response).getAsJsonObject();
//		
//		String access_token ="";
//		for (String keyStr : jsonObject.keySet()) 
//		{
//	        Object keyvalue = jsonObject.get(keyStr);
//	        System.out.println("key: "+ keyStr + " value: " + keyvalue);
//	        if (keyStr.equalsIgnoreCase("access_token")) 
//	        {
//	        	access_token = keyvalue.toString();
//	        }
//	        
//		}
//			// Thread.sleep(300);
//			msg = access_token;
//		 }
//		else 
//		{
//			msg ="";
//		}
//		
//		
//		}catch (Exception e) 
//		{
//			System.out.println("getKeycloakSession---"+e.toString());
//			// TODO: handle exception
//		}
//		return msg;
//	}				
	
	
//	public int sendRabbitmqmsg(String sql ,String type,int fileflowid,String filename) 
//	{
//		int msg =0;
//		try 
//		{
//			ConnectionFactory factory = new ConnectionFactory();
//			String celeryqname= Constants.Paths.Folders.Celery_QNAME;
//			String host = Constants.Paths.Folders.Rabbitmq_URL;
//			int port =Constants.Paths.Folders.Rabbitmq_PORT;
//			String rmquser=Constants.Paths.Folders.Rabbitmq_USER;
//			String rmqpass=Constants.Paths.Folders.Rabbitmq_PASS;
//			String QUEUE_NAME = celeryqname;//get it from constant
//
//			factory.setHost(host); //get it from constant
//			factory.setPort(port);//get it from constant
//			factory.setUsername(rmquser);//get it from constant
//			factory.setPassword(rmqpass);//get it from constant
//			com.rabbitmq.client.Connection connection = factory.newConnection();
//			Channel channel = connection.createChannel();
//			channel.queueDeclare(QUEUE_NAME, true, false, false, null);
//			
//			System.out.println("host---"+host+"-port- "+port+"-rmquser- "+rmquser+"-rmqpass- "+rmqpass+"-celeryqname-"+celeryqname );
//			
//			 //sql = "SELECT * from cafebot.PT81234568S";  
//			
//			sql = sql.replace("\"", "#_#").replace("\n", " ").replace("\t", " ");
//			//System.out.println("sql ---"+sql);
//			//String message = "{\"id\": \"\", \"task\": \""+type+"\",\"args\": [\""+sql+"\"], \"kwargs\": {}, \"retries\": 0}";
//			
//			//String sql = "SELECT #_#ID#_# as #_#id#_# from cafebot.PT81234568S";
//			sql = sql.replace("\n", " ").replace("\t", " ");
//			System.out.println("sql ---"+sql);
//			
//			String message = "{\"id\": \"\", \"task\": \"downloaderApp.viz\", \"args\": [\""+sql+"\",\""+fileflowid+"\"], \"kwargs\": {}, \"retries\": 0}";
//			
//			channel.basicPublish("", QUEUE_NAME,
//					new AMQP.BasicProperties.Builder().contentType("application/json").contentEncoding("utf-8").build(),
//					message.getBytes("utf-8"));
//		    
//			System.out.println(" sweet viz [x] Sent " + message);
//			channel.close();
//			connection.close();
//			
//			msg =1;
//		}
//		catch (Exception e) 
//		{
//			msg =0;
//			System.out.println("sendRabbitmqmsg --- -- "+e.toString());
//			// TODO: handle exception
//		}
//		
//		return msg;
//	} 
	
	
	
//	public int sendRabbitmqmsgautoviz(String sql ,String type,int fileflowid,String filename) 
//	{
//		int msg =0;
//		try 
//		{
//			ConnectionFactory factory = new ConnectionFactory();
//			String celeryqname= Constants.Paths.Folders.Celery_QNAME;
//			String host = Constants.Paths.Folders.Rabbitmq_URL;
//			int port =Constants.Paths.Folders.Rabbitmq_PORT;
//			String rmquser=Constants.Paths.Folders.Rabbitmq_USER;
//			String rmqpass=Constants.Paths.Folders.Rabbitmq_PASS;
//			String QUEUE_NAME = celeryqname;//get it from constant
//			
//			factory.setHost(host); //get it from constant
//			factory.setPort(port);//get it from constant
//			factory.setUsername(rmquser);//get it from constant
//			factory.setPassword(rmqpass);//get it from constant
//			com.rabbitmq.client.Connection connection = factory.newConnection();
//			Channel channel = connection.createChannel();
//			channel.queueDeclare(QUEUE_NAME, true, false, false, null);
//			
//			
//			 //sql = "SELECT * from cafebot.PT81234568S"; 
//			 
//			 //sql = "SELECT * from cafebot.PT83044367S";
//			 
//			sql = sql.replace("\"", "#_#").replace("\n", " ").replace("\t", " ");
//			//System.out.println("sql ---"+sql);
//			//String message = "{\"id\": \"\", \"task\": \""+type+"\",\"args\": [\""+sql+"\"], \"kwargs\": {}, \"retries\": 0}";
//			
//			
//			//String sql = "SELECT #_#ID#_# as #_#id#_# from cafebot.PT81234568S";
//			sql = sql.replace("\n", " ").replace("\t", " ");
//			System.out.println("sql ---"+sql);
//			
//			String message = "{\"id\": \"\", \"task\": \"downloaderApp.autoviz\", \"args\": [\""+sql+"\",\""+fileflowid+"\"], \"kwargs\": {}, \"retries\": 0}";
//			
//			
//			
//			channel.basicPublish("", QUEUE_NAME,
//					new AMQP.BasicProperties.Builder().contentType("application/json").contentEncoding("utf-8").build(),
//					message.getBytes("utf-8"));
//		
//			System.out.println(" autoviz [x] Sent " + message);
//			channel.close();
//			connection.close();
//			
//			msg =1;
//		}
//		catch (Exception e) 
//		{
//			msg =0;
//			System.out.println("sendRabbitmqmsg --- -- "+e.toString());
//			// TODO: handle exception
//		}
//		
//		return msg;
//	} 
	
//	public int sendRabbitmqautocruisemsg(int fileflowid,String up_path,String down_path,String targ_col,
//   		 String set_acc,String set_time,String set_inter,String modeltype,String modelname,String matrix,
//   		 String up_sch_path,int islocal,int isclassification,int isshapley ,String time_col ,
//			String lic_msg,String time_transform_col,int isbeta,int serverid,int status,
//			int userid,String sql,String tasktype,String sqlqueryheader,String modcolname,int istimeseries,String samp) 
//	{
//		int msg =0;
//		try 
//		{
//			
//			int Fileflowid = fileflowid;
//			
//			 //sql = "SELECT * from cafebot.PT81234568S";  
//			sql = sql.replace("toFloat64OrZero", "toFloat64OrNul");
//			sql = sql.replace("\"", "#_#").replace("\n", " ").replace("\t", " ");
//			//String sql = "SELECT #_#ID#_# as #_#id#_# from cafebot.PT81234568S";
//			sql = sql.replace("\n", " ").replace("\t", " ").replace("toFloat64OrZero", "toFloat64OrNul");
//			
//			System.out.println("sql ---"+sql);
//
//			String sourcequery=sql;
//			int modelid =0;
//			
//			if (istimeseries ==0) 
//			{
//				time_col ="";
//			}
//			
//			
//			ConnectionFactory factory = new ConnectionFactory();
//			String celeryqname= Constants.Paths.Folders.Celery_QNAME;
//			String host = Constants.Paths.Folders.Rabbitmq_URL;
//			int port =Constants.Paths.Folders.Rabbitmq_PORT;
//			String rmquser=Constants.Paths.Folders.Rabbitmq_USER;
//			String rmqpass=Constants.Paths.Folders.Rabbitmq_PASS;
//			
//			System.out.println("host---"+host+"-port- "+port+"-rmquser- "+rmquser+"-rmqpass- "+rmqpass+"-celeryqname-"+celeryqname );
//			
//			String QUEUE_NAME = "autocruise" ;//celeryqname;//get it from constant
//			
//			factory.setHost(host); //get it from constant
//			factory.setPort(port);//get it from constant
//			factory.setUsername(rmquser);//get it from constant
//			factory.setPassword(rmqpass);//get it from constant
//			com.rabbitmq.client.Connection connection = factory.newConnection();     
//			Channel channel = connection.createChannel();
//			channel.queueDeclare(QUEUE_NAME, true, false, false, null);
//			
//			
//		
//			//int scoring =0;
//			//int test_size =0;
//			int ispredict =0;
//			//int modelkey =0;
//			
//			int isappend =0;
//			String down_path_remote ="";
//			String tablename ="";
//			String filenameid ="";
//			//scoring  ---modelid
//			
//			
//			
//			int fileid =0;
//             fileid = queueEntryismodel(fileflowid, up_path,down_path, targ_col,
//            		 set_acc,set_time,set_inter, modeltype, modelname,matrix,up_sch_path,
//        			islocal,isclassification,isshapley ,time_col ,
//        			lic_msg,time_transform_col,isbeta,serverid,
//        			status,userid,sourcequery,tasktype,sqlqueryheader,modcolname);
//			System.out.println("fileid----"+fileid);
//			if (fileid >0) 
//			{
//				if (time_col.equalsIgnoreCase("")) 
//				{
//					time_col="null";
//				}
//				
//				
//				String args ="["+fileid+", "+modelid+", \""+up_path+"\", \""+up_sch_path+"\", \""+down_path+"\","
//						+ " \""+targ_col+"\", \""+time_col+"\","
//						+ ""+set_acc+","+ set_time+", \""+matrix+"\","
//						+ " "+set_inter+", "+ispredict+", \""+modelname+"\","
//						+ " "+isclassification+","+fileflowid+","
//						+ " \""+samp+"\", "+isbeta+", "+islocal+","
//						+ " "+isappend+","
//						+ " \""+down_path_remote+"\","
//						+ "\""+tablename+"\",\""+filenameid+"\", \""+sourcequery+"\"]";
//			
//				/*
//				 * autocruise(fileid, modelid, up_path, up_sch_path, down_path, targ_col,
//				 * time_col, set_gen, set_time, scoring, test_size, ispredict, modelkey,
//				 * is_classification, fileflowid, samp, isbeta, islocal, isappend,
//				 * down_path_remote, tablename, filenameid, sourcequery):
//				 */
//			
//				//autocruiseApp    // downloaderApp
//					
//				//String autocruiseappname = Constants.Paths.Folders.AutoCruise_Rabbitmq_Appname;
//				//String autocruisemethodname = Constants.Paths.Folders.AutoCruise_Rabbitmq_Methodname;
//
//				// String message = "{\"id\": \"\", \"task\": \""+autocruiseappname+"." +autocruisemethodname+ "\", \"args\": "+args+", \"kwargs\": {}, \"retries\": 0}";
//
//				String message = "{\"id\": \"\", \"task\": \"autocruiseApp.autocruise\", \"args\": "+args+", \"kwargs\": {}, \"retries\": 0}";
//						 	     
//					channel.basicPublish("", QUEUE_NAME,
//							new AMQP.BasicProperties.Builder().contentType("application/json").contentEncoding("utf-8").build(),
//							message.getBytes("utf-8"));
//				    
//					System.out.println(" auto cruise changed [x] Sent " + message);
//					channel.close();
//					connection.close();
//					
//					msg =1;
//			}
//		}
//		catch (Exception e) 
//		{
//			msg =0;
//			System.out.println("sendRabbitmqmsg auto cruise --- -- "+e.toString());
//			// TODO: handle exception
//		}
//		
//		return msg;
//	} 
	
	       
	   
	
	public int queueEntryismodel(int Fileflowid, String up_path, String down_path, String targ_col, String set_acc, String set_time,
			String set_inter, String modeltype, String modelname,String matrix,String up_sch_path,
			int islocal,int isclassification,int isshapley ,String time_col ,
			String lic_msg,String time_transform_col,int isbeta,int serverid,
			int status,int userid,String sourcequery,String tasktype,String sqlqueryheader,String modcolname)	 
	{
		int success = 0;
		int id =0;
		
		//,String up_path_remote
		//,String down_path_remote
		
		String h2ourl = "";
		String h2ouser = "";
		String h2opass = "";
		
		 List<String> ls =  getserverconfig(serverid);
		
		if (ls.size()>=3) 
		{
			 h2ourl = ls.get(0);
			h2ouser = ls.get(1);
			h2opass = ls.get(2);;
		}
		else 
		{
//			h2ourl = Constants.Paths.Folders.H2ourl;
//			h2ouser = Constants.Paths.Folders.H2ouser;
//			h2opass = Constants.Paths.Folders.H2opass;
		}
		
		//,String up_path_remote
		//,String down_path_remote
		String selectModel = " INSERT INTO queue "
				+ "(fileflowid, up_path, down_path,targ_col, set_acc, set_time,"
				+ " set_inter,status, isscore, queuedate,ispredict,"
				+ "modeltype,modelkey,scoring,up_sch_path,islocal,isclassification,isshapley ,"
				+ "time_col ,lic_msg,time_transform_col,h2o_address,h2o_username,h2o_password,isbeta,"
				+ "userid,up_path_remote,down_path_remote,sourcequery,tasktype,sqlqueryheader,tablename) "
				+ "VALUES ( " + Fileflowid + ",'" + up_path + "', '" + down_path + "','" + targ_col + "', " + set_acc
				+ ", " + set_time + ", " + set_inter + ","+status+",0,now(),0,'" + modeltype + "',"
				+ "'" + modelname + "','"+matrix+"','"+up_sch_path+"',"
				+ ""+islocal+","+isclassification+","+isshapley+" ,"
				+ "'"+time_col+"' ,'"+lic_msg+"' ,'"+time_transform_col+"',"
				+ "'"+h2ourl+"','"+h2ouser+"','"+h2opass+"',"+ isbeta +","+userid+",'"+up_path+"',"
				+ "'" + down_path + "','"+sourcequery+"','"+tasktype+"','"+sqlqueryheader+"','"+modcolname+"') RETURNING id";
		
		System.out.println("selectModel qq :::::"+selectModel);
		
		PreparedStatement ps = null;
		ResultSet rs;
		try {
			ps = con.prepareStatement(selectModel);
			// rs = ps.executeUpdate();
			//success = ps.executeUpdate();
			
			if (ps.execute()) 
			{
				rs = ps.getResultSet();
				rs.next();
				id = rs.getInt(1);
			} else 
			{
				id = ps.getUpdateCount();
			}
			
			ps.close();
			System.out.println("queueEntryismodel queue update!");
		} catch (Exception e) {
			success = 0;
			System.out.println("queueEntryismodel=" + e.toString());
		}
		
		return id;
		
		//return success;
	}
	
	

	public int queueEntryismodelCNN(int Fileflowid, String up_path, String down_path, String targ_col, String set_acc, String set_time,
			String set_inter, String modeltype, String modelname,String matrix,String up_sch_path,
			int islocal,int isclassification,int isshapley ,String time_col ,
			String lic_msg,String time_transform_col,int isbeta,int serverid,
			int status,int userid,String sourcequery,String tasktype,String sqlqueryheader,String modcolname,
			String labels,String region,int txtexpochs,int txtAccuracysteps )	 
	{
		int success = 0;
		int id =0;
		
		//,String up_path_remote
		//,String down_path_remote
		
		String h2ourl = "";
		String h2ouser = "";
		String h2opass = "";
		
		 List<String> ls =  getserverconfig(serverid);
		
		if (ls.size()>=3) 
		{
			 h2ourl = ls.get(0);
			h2ouser = ls.get(1);
			h2opass = ls.get(2);;
		}
		else 
		{
//			h2ourl = Constants.Paths.Folders.H2ourl;
//			h2ouser = Constants.Paths.Folders.H2ouser;
//			h2opass = Constants.Paths.Folders.H2opass;
		}
		
		labels = "["+labels+"]";
		
		System.out.println("labels::::::::::::::::::"+labels);
		
		//,String up_path_remote
		//,String down_path_remote
		String selectModel = " INSERT INTO queue "
				+ "(fileflowid, up_path, down_path,targ_col, set_acc, set_time,"
				+ " set_inter,status, isscore, queuedate,ispredict,"
				+ "modeltype,modelkey,scoring,up_sch_path,islocal,isclassification,isshapley ,"
				+ "time_col ,lic_msg,time_transform_col,h2o_address,h2o_username,h2o_password,isbeta,"
				+ "userid,up_path_remote,down_path_remote,sourcequery,tasktype,sqlqueryheader,tablename,targ_val) "
				+ "VALUES ( " + Fileflowid + ",'" + up_path + "', '" + down_path + "','" + targ_col + "', " + set_acc
				+ ", " + set_time + ", " + set_inter + ","+status+",0,now(),0,'" + modeltype + "',"
				+ "'" + modelname + "','"+matrix+"','"+up_sch_path+"',"
				+ ""+islocal+","+isclassification+","+isshapley+" ,"
				+ "'"+time_col+"' ,'"+lic_msg+"' ,'"+time_transform_col+"',"
				+ "'"+h2ourl+"','"+h2ouser+"','"+h2opass+"',"+ isbeta +","+userid+",'"+up_path+"',"
				+ "'" + down_path + "','"+sourcequery+"','"+tasktype+"','"+sqlqueryheader+"','"+modcolname+"','"+labels+"') RETURNING id";
		
		
		
		PreparedStatement ps = null;
		ResultSet rs;
		try {
			ps = con.prepareStatement(selectModel);
			// rs = ps.executeUpdate();
			//success = ps.executeUpdate();
			
			if (ps.execute()) 
			{
				rs = ps.getResultSet();
				rs.next();
				id = rs.getInt(1);
			} else 
			{
				id = ps.getUpdateCount();
			}
			
			ps.close();
			System.out.println("queueEntryismodel queue update!");
		} catch (Exception e) {
			success = 0;
			System.out.println("queueEntryismodel=" + e.toString());
		}
		
		return id;
		
		//return success;
	}
	
	
	public int queueEntryispredictcafebot(int Fileflowid, String up_path, String down_path, String targ_col, int set_acc, int set_time,
			int set_inter, String modeltype, String modelname,
			String matrix,int mojofileid,String up_sch_path,int islocal,int status,String err,int userid,
			int isappend,String tablename,String filenameid,String tasktype,String sourcequery) {
		int success = 0;
		
		String mojopath =" ( select path from mojofile where id="+mojofileid+")";
		String modelkey =" ( select modelkey from mojofile where id="+mojofileid+")";
		String isclassification =" ( select isclassification from mojofile where id="+mojofileid+")";
		
		//,String up_path_remote
		//,String down_path_remote
		
		String selectModel = " INSERT INTO queue "
				+ "(fileflowid, up_path, down_path,"
				+ "targ_col, set_acc, set_time,set_inter,status, isscore, queuedate,ispredict,modeltype,"
				+ "modelkey,scoring,fileid,up_sch_path,islocal,err,userid,isclassification,isappend,tablename,"
				+ "filenameid,up_path_remote,down_path_remote,tasktype,sourcequery) "
				+ "VALUES ( " + Fileflowid + ",'" + up_path + "', " + mojopath + ","
				+ "'" + targ_col + "', " + set_acc+ ", " + set_time + ", " + set_inter + ","+status+",0,now(),1,'" + modeltype + "',"
				+ " " + modelkey + ",'"+matrix+"',"+mojofileid+" ,'"+up_sch_path+"',"+islocal+" ,"
				+ "'"+err+"',"+userid+","+isclassification+","+isappend+",'"+tablename+"',"
				+ "'"+filenameid+"','" + up_path + "',"
				+ " " + mojopath + ",'"+tasktype+"','"+sourcequery+"' )  RETURNING id";
		
		System.out.println("selectModel---"+selectModel);
		PreparedStatement ps = null;
		ResultSet rs;
		int qid =0; 
		try {
			
			ps = con.prepareStatement(selectModel);
			ResultSet fileflowrs;
			if (ps.execute()) 
			{
				fileflowrs = ps.getResultSet();
				fileflowrs.next();
				qid = fileflowrs.getInt(1);
			} 
			else 
			{
				qid = ps.getUpdateCount();
			}

			ps.close();
			
			success = qid;
			//ps = con.prepareStatement(selectModel);
			// rs = ps.executeUpdate();
			//success = ps.executeUpdate();
			//ps.close();
		
			
			System.out.println("queueEntryispredict queue update!");
		} catch (Exception e) {
			success = 0;
			System.out.println("queueEntryispredict=" + e.toString());
		}
		return success;
	}
	
	
	
	public List<String> getserverconfig(int serverid) 
	{
		//String selectfileflowid = " select filepath  from botconfig where id=" + botid;
		List<String> config = new ArrayList<String>();
		String selectfileflowid = "select url,username,pass from h2oconfig where id=" + serverid;
		PreparedStatement ps = null;
		ResultSet rs;
		String url = "";
		String username = "";
		String password = "";
		
		try {
			ps = con.prepareStatement(selectfileflowid);
			rs = ps.executeQuery();
			while (rs.next()) 
			{
				url  = rs.getString(1);
				username  = rs.getString(2);
				password  = rs.getString(3);
				config.add(url);
				config.add(username);
				config.add(password);
			}
			rs.close();    
			ps.close();
		} catch (Exception e) 
		{
			config = new ArrayList<String>();
			System.out.println("getbotconfig error ==== " + e.toString());
		}
		return config;
	}

	
	
	
	public int getAllDatatypeMappingID(String source,String destination) 
	{
		int mappingid =0;
		try     
		{	
		String sql = "SELECT id FROM datatypemapping where upper(sourcefrom) = '"+source.toUpperCase()+"'  "
				+ " and upper(destination) ='"+destination.toUpperCase()+"'";
		
		System.out.println("getAllDatatypeMappingID sql  :::::"+sql);
		PreparedStatement ps = null;
		ResultSet rs;
		ps = con.prepareStatement(sql);
		rs = ps.executeQuery();
		while (rs.next()) 
		{
			mappingid  = rs.getInt(1);
		}
		
		rs.close();    
		ps.close();
		
		}catch (Exception e) 
		{
			mappingid =0;
			System.out.println("getAllDatatype ::::"+e.toString());
			// TODO: handle exception
		}
		System.out.println("mappingid:::::::::::::::::"+mappingid);
		return mappingid;
	}
	
	
	

	public List<String> getShiftData(int mojofileid) 
	{
		
		List<String> ls = new ArrayList<>(); 
		int mappingid =0;
		try     
		{	
		String sql = "SELECT isshift,shiftcols FROM mlops where mojofileid = "+mojofileid+ " order by id desc limit 1" ;
		
		//System.out.println("getShiftData sql  :::::"+sql);
		PreparedStatement ps = null;
		ResultSet rs;
		
		int isshift =0;
		String shiftcols = "";       
		
		ps = con.prepareStatement(sql);
		rs = ps.executeQuery();
		while (rs.next()) 
		{
			isshift  = rs.getInt(1);
			ls.add(String.valueOf(isshift));
			shiftcols  = rs.getString(2);
			ls.add(shiftcols);
			
		}
		
		rs.close();    
		ps.close();
		
		}catch (Exception e) 
		{
			ls = new ArrayList<>();
			System.out.println("getAllDatatype ::::"+e.toString());
			// TODO: handle exception
		}
		System.out.println("mappingid:::::::::::::::::"+mappingid);
		return ls;
	}
	
	
	
//	public List<String> getMetrcisData(int fileflowid,String comments,int isclassification,int version) 
//	{
//		
//		List<String> ls = new ArrayList<>(); 
//		
//		String scoring = "";
//		String scoringDict = "";
//		Float score =0.0f;
//		
//		
//		try     
//		{	
//			PreparedStatement ps = null;
//			ResultSet rs;
//			
//	if (fileflowid !=0) 
//	{
//		
//			
//			
//		String sql = "SELECT scoring from queue where fileflowid ="+fileflowid ;      
//		
//		System.out.println("getMetrcisData sql  :::::"+sql);
//		
//		
//		ps = con.prepareStatement(sql);
//		rs = ps.executeQuery();
//		while (rs.next()) 
//		{
//			scoring  = rs.getString(1);
//		}
//		
//		
//		if (scoring == null) 
//		{
//			scoring ="";
//		}    
//		
//		rs.close();
//		ps.close();
//		
//	}	
//		if (!scoring.equalsIgnoreCase("")) 
//		{
//			String sqlScore = "SELECT scoredict from mojofile where comments='"+comments+"' "
//					+ " and version < "+version +" "
//					+ " and isclassification="+isclassification+"  "
//					+ "order by id desc limit 1" ;
//			
//			System.out.println("getShiftData sqlScore  :::::"+sqlScore);
//			PreparedStatement psScore = null;
//			ResultSet rsScore;
//			
//			psScore = con.prepareStatement(sqlScore);
//			rsScore = psScore.executeQuery();
//			while (rsScore.next()) 
//			{
//				scoringDict  = rsScore.getString(1);
//			}
//			
//			rsScore.close();    
//			psScore.close();
//			
//			System.out.println("scoringDict:::::::::::::"+scoringDict);
//			
//			//&& !scoringDict.equalsIgnoreCase("{}")
//			
//			if (!scoringDict.equalsIgnoreCase("") ) 
//			{
//				
//				System.out.println("inside scoring dict ");
//				
//				JsonParser jsonParser = new JsonParser();
//			    JsonObject objectFromString = jsonParser.parse(scoringDict).getAsJsonObject();
//			    
//			    for (final String key : objectFromString.keySet()) 
//	            {
//	                    String matricsscore = key ;// objectFromString.get(key).toString().replace("\"", "");
//	                    Float scoreTemp =   Float.parseFloat( objectFromString.get(key).toString());
//	                    
//	                    
//	                    System.out.println("matricsscore====="+matricsscore);
//	                    
//	                    System.out.println("scoring----"+scoring);
//	                    
//					if (matricsscore.equalsIgnoreCase(scoring) )
//					{
//						score =  Float.parseFloat(objectFromString.get(key).toString());
//					}	
//		          }
//		    
//			}
//			
//			
//			if (scoringDict ==null) 
//			{
//				scoringDict ="{}";
//			}
//			
//			ls.add(scoring);
//			ls.add(score.toString());
//			ls.add(scoringDict);
//		}
//		else 
//		{
//			ls = new ArrayList<>();
//		}
//		
//		
//		}catch (Exception e) 
//		{
//			ls = new ArrayList<>();
//			System.out.println("getAllDatatype ::::"+e.toString());
//			// TODO: handle exception
//		}
//		
//		System.out.println("ls score :::::::::::::::::"+ls);
//		
//		return ls;
//	}
	
	
	
//	public List<String> getMetrcisDataforH2O(int fileflowid,String comments,int isclassification,int version) 
//	{
//		
//		List<String> ls = new ArrayList<>(); 
//		
//		String scoring = "AUC";  //todo 
//		String scoringDict = "";
//		Float score =0.0f;
//		
//		
//		try     
//		{	
//			PreparedStatement ps = null;
//			ResultSet rs;
//			      
//			/*
//			 * if (fileflowid !=0) {
//			 * 
//			 * 
//			 * 
//			 * String sql = "SELECT scoring from queue where fileflowid ="+fileflowid ;
//			 * 
//			 * System.out.println("getMetrcisData sql  :::::"+sql);
//			 * 
//			 * 
//			 * ps = con.prepareStatement(sql); rs = ps.executeQuery(); while (rs.next()) {
//			 * scoring = rs.getString(1); }
//			 * 
//			 * 
//			 * if (scoring == null) { scoring =""; }
//			 * 
//			 * rs.close(); ps.close();
//			 * 
//			 * }
//			 */	
//			
//			
//			
//		if (!scoring.equalsIgnoreCase("")) 
//		{
//			String sqlScore = "SELECT scoredict from mojofile where comments='"+comments+"' "
//					+ " and version < "+version +" "
//					+ " and isclassification="+isclassification+"  "
//					+ "order by id desc limit 1" ;
//			
//			System.out.println("getShiftData sqlScore  :::::"+sqlScore);
//			PreparedStatement psScore = null;
//			ResultSet rsScore;
//			
//			psScore = con.prepareStatement(sqlScore);
//			rsScore = psScore.executeQuery();
//			while (rsScore.next()) 
//			{
//				scoringDict  = rsScore.getString(1);
//			}
//			
//			rsScore.close();    
//			psScore.close();
//			
//			System.out.println("scoringDict:::::::::::::"+scoringDict);
//			
//			if (!scoringDict.equalsIgnoreCase("") && !scoringDict.equalsIgnoreCase("{}")) 
//			{
//				JsonParser jsonParser = new JsonParser();
//			    JsonObject objectFromString = jsonParser.parse(scoringDict).getAsJsonObject();
//			    for (final String key : objectFromString.keySet()) 
//	            {
//	                    String matricsscore = key;// objectFromString.get(key).toString().replace("\"", "");
//	                    Float scoreTemp =   Float.parseFloat( objectFromString.get(key).toString());
//	                    
//					if (matricsscore.equalsIgnoreCase(scoring) )
//					{
//						score =  Float.parseFloat(objectFromString.get(key).toString());
//					}	
//		          }
//		    
//			}
//			
//			
//			if (scoringDict ==null) 
//			{
//				scoringDict ="{}";
//			}
//			
//			ls.add(scoring);
//			ls.add(score.toString());
//			ls.add(scoringDict);
//		}
//		else 
//		{
//			ls = new ArrayList<>();
//		}
//		
//		
//		}catch (Exception e) 
//		{
//			ls = new ArrayList<>();
//			System.out.println("getAllDatatype ::::"+e.toString());
//			// TODO: handle exception
//		}
//		
//		System.out.println("ls score :::::::::::::::::"+ls);
//		
//		return ls;
//	}
	

	
	

	public String getJobSchemaMappingID(int jobid) 
	{
		String jsonschema = "";
		try     
		{	
			
			String jobschemaSql = "select schemamapping from job where id="+jobid;
		
		System.out.println("getJobSchemaMappingID sql  :::::"+jobschemaSql);
		PreparedStatement ps = null;
		ResultSet rs;
		ps = con.prepareStatement(jobschemaSql);
		rs = ps.executeQuery();
		while (rs.next()) 
		{
			jsonschema  = rs.getString(1);
		}
		
		//jsonschema = jsonschema.replace("\"", "");  
		
		rs.close();    
		ps.close();
		
		}catch (Exception e) 
		{
			jsonschema = "";
			System.out.println("getJobSchemaMappingID ::::"+e.toString());
			// TODO: handle exception
		}
		System.out.println("jsonschema:::::::::::::::::"+jsonschema);
		return jsonschema;
	}
	
	
	        
	    
	
//public String  extractMojoZipWithCSVFile(String mojofilewithpath, String destinationPath,
//		String generatedSeq,String labelselect,String labeltxt,HashMap<String, String> listmap) 
//{
//		
//	
//	String ext ="zip";
//	String succmsg = "0";
//		int result = -1;
//		String filepath= ""; 
//		List<String> dataarr =  new ArrayList<>()  ;
//		System.out.println("mojofilewithpath---"+mojofilewithpath);
//		
//		String label ="";
//		String labelname = "";
//		
//		try {   
//		
//			String dirname ="";
//		
//	System.out.println("ext:::::"+ext);		
//		if (ext.equalsIgnoreCase(".rar")) 
//		{	     
//			
//			//rar 
//			
//			
//			  Archive archive = null;
//			  File f = new File(mojofilewithpath);
//		        try {
//		        	archive = new Archive(new FileVolumeManager(f));
//		        } 
//		        catch (RarException e) 
//		        {
//		            // TODO Auto-generated catch block
//		          System.out.println("rar error::::"+e.toString());
//		        	e.printStackTrace();
//		        } catch (IOException e) {
//		            // TODO Auto-generated catch block
//		        	System.out.println("IO  rar error::::"+e.toString());
//		            e.printStackTrace();
//		        }
//			
//			  
//			
//	            //Archive archive = new Archive(f);
//	            //archive.getMainHeader().print();
//	            FileHeader fh = archive.nextFileHeader();
//	            
//	            while(fh!=null)
//	            {        
//	            	
//	            	labelname = String.valueOf(fh).replace("/", "");
//	            	String fileName = fh.getFileNameString();//  .getName();
//					System.out.println("fileName--"+fileName);
//	            	
//					File newFile = new File(destinationPath + File.separator + fileName);
//	                    System.out.println(newFile.getAbsolutePath());
//	                  
//	                    if (fh.isDirectory()) 
//	   				 {
//	                    	 if (!newFile.isDirectory() && !newFile.mkdirs()) 
//	    			         {
//	    			             throw new IOException("Failed to create directory " + newFile);
//	    			         }
//	    			         
//	    			         dirname = fileName;
//	   				 }    
//	               	 else 
//					 {
//						 File parent = newFile.getParentFile();
//						 if (!parent.isDirectory() && !parent.mkdirs()) 
//						 {
//				             throw new IOException("Failed to create directory " + parent);
//				         }
//						 else 
//						 {
//							 dirname = fileName;
//						 }
//						 
//						 FileOutputStream os = new FileOutputStream(newFile);
//						 archive.extractFile(fh, os);
//						 os.close();
//						  dataarr.add(fileName);	
//							
//					}
//	                    
//	                	if (fileName.equalsIgnoreCase("mojo-pipeline/pipeline.mojo")) 
//	    			 	{
//	    			 		//System.out.println("rename---"+destinationPath + File.separator +fileName);
//	    			 		filepath = destinationPath + File.separator +fileName;
//	    			 	}   
//	                    
//	                    
//	                   
//	                    
//	                    
//	                    fh=archive.nextFileHeader();
//	            }
//			//rar end 
//			
//		}else {  //zip
//			
//			
//			System.out.println("destinationPath:::::::::::::::"+destinationPath);
//			
//			ZipInputStream zipIn = new ZipInputStream(new FileInputStream(mojofilewithpath));
//			ZipEntry ze = zipIn.getNextEntry();
//			
//			System.out.println("ze::::"+ze);
//			
//			
//			
//			
//			byte[] buffer = new byte[1024];
//			while (ze != null) 
//			{
//				
//				labelname = String.valueOf(ze).replace("/", "");
//				
//				String fileName = ze.getName();
//				System.out.println("fileName--"+fileName);
//				//System.out.println("file path --"+destinationPath + File.separator + fileName);
//				File newFile = new File(destinationPath + File.separator + fileName);
//				// create directories for sub directories in zip
//				//new File(newFile.getParent()).mkdirs();
//			
//				//for zip file from mac system
//				
//			//if (!fileName.equalsIgnoreCase("__MACOSX"))  
//				//{
//				
//				if (ze.isDirectory()) 
//				 {
//			         if (!newFile.isDirectory() && !newFile.mkdirs()) 
//			         {
//			             throw new IOException("Failed to create directory " + newFile);
//			         }
//			         
//			         dirname = fileName;
//			        
//				 }   
//				 else 
//				 {
//					 File parent = newFile.getParentFile();
//					 if (!parent.isDirectory() && !parent.mkdirs()) 
//					 {
//			             throw new IOException("Failed to create directory " + parent);
//			         }
//					 else 
//					 {
//						 dirname = fileName;
//					 }
//					 
//					FileOutputStream fos = new FileOutputStream(newFile);
//					int len;
//					while ((len = zipIn.read(buffer)) > 0) 
//					{
//						fos.write(buffer, 0, len);
//					}
//						fos.close();
//						
//						dataarr.add(fileName);	
//						
//				}
//				
//				if (fileName.equalsIgnoreCase("mojo-pipeline/pipeline.mojo")) 
//			 	{
//			 		//System.out.println("rename---"+destinationPath + File.separator +fileName);
//			 		filepath = destinationPath + File.separator +fileName;
//			 	}
//				 	zipIn.closeEntry();
//					ze = zipIn.getNextEntry();  
//					
//			//}//if end 			
//					
//					
//			}
//			
//			
//			
//			zipIn.closeEntry();
//			zipIn.close();
//			zipIn = null;
//			result = 1;
//		}	
//			if (dataarr.size()>0) 
//			{
//				if (labelselect.equalsIgnoreCase("default")) 
//				{
//					//label ="default";
//					label = labelname;
//				}
//				else 
//				{
//					label =  labeltxt;
//				}
//				
//				
//				succmsg = writeCSVForImageRepo( generatedSeq, labelselect,labeltxt, dataarr,listmap) ;
//			}
//			
//			
//		} catch (Exception e) {
//			result = -1;
//			succmsg ="0";
//			System.out.println("error exract--"+e.toString());
//			logger.error(e);
//		}
//		//return result+"#_#"+filepath;
//		return succmsg;
//		
//	}
	
	
//public String writeCSVForImageRepo(String generatedSeq,String labelselect,String label,List<String> dataarr,HashMap<String, String> listmap) 
//{
//	String msg ="";
//	try 
//	{
//		
//		
//		//label = "default";
//		
//		String startdate = Constants.Paths.Folders.TIMESTART; Seconds
//		  secondsSinceEpoch = null; 
//		  secondsSinceEpoch =  Seconds.secondsBetween(org.joda.time.DateTime.parse(startdate), org.joda.time.DateTime.now()); String
//		  generatedfilename = secondsSinceEpoch.toString(); 
//		  
//		  String modeldir =  Constants.Paths.Folders.FULLCSV_PATH;
//		  
//		  int count =1 ;
//		
//		      
//		  File schemacsvFile = new File(modeldir  +generatedSeq+".csv"); 
//		  System.out.println("path --" + modeldir  +generatedSeq+ ".csv");
//		  schemacsvFile.createNewFile();
//		  
//		  FileWriter csvWriterschema = new FileWriter(modeldir + "/" +generatedSeq+".csv");
//		  
//		  String headerarr [] = {"id","path","label,meta_data,json_data,seq_id,UID"};  //is_annotated
//		  
//		  int seq_id = 1;
//		  int uid = 1;
//		  int is_annotated = 0;
//		  
//		  for(int k=0;k<headerarr.length;k++)         
//		  {
//			  if (k==0) 
//			  {
//					csvWriterschema.append(headerarr[k]); 
//			  }
//			  else 
//			  {
//				  csvWriterschema.append(","+headerarr[k]);
//			  }
//		  }
//		  
//		  //to add two additional column in case of media------
//		 // csvWriterschema.append(",meta_data");
//		  //csvWriterschema.append(",json_data");     
//		
//		  csvWriterschema.append("\n");
//		
//		  
//		  
//		  for(int j=0;j<dataarr.size();j++) 
//		  {
//			  if (j==0) 
//			  {
//				    csvWriterschema.append(String.valueOf(count)+"," ); 
//					csvWriterschema.append(dataarr.get(j)+",");
//					
//					//csvWriterschema.append(generatedSeq+"/"+dataarr.get(j)+","); 
//					
//					
//				if (labelselect.equalsIgnoreCase("default")) 
//					{
//						String labelrarr[] = dataarr.get(j).split("/");
//						//System.out.println("labelrarr::::"+labelrarr.length);
//						//System.out.println("labelrarr[0]:::::"+labelrarr[0]);
//						
//						int index = (labelrarr.length - 1) -1 ;
//								if (labelrarr.length>1) 
//								{
//									csvWriterschema.append(labelrarr[index].equalsIgnoreCase("")?"":labelrarr[0]); 
//								}
//								else   
//								{
//									csvWriterschema.append(labelrarr[0]); 
//								}
//					}   
//					else if(labelselect.equalsIgnoreCase("custom")) 
//					{
//						csvWriterschema.append(label); 
//					}
//					else 
//					{
//						
//						String labelrarr[] = dataarr.get(j).split("/");
//						String labeltofind ="";
//						int index = (labelrarr.length - 1) -1 ;
//								if (labelrarr.length>1) 
//								{
//									labeltofind = labelrarr[index]; 
//								}
//								else   
//								{
//									labeltofind=labelrarr[0];
//								}
//						
//						
//						String labelvalue = getLabelFromList(listmap,labeltofind);// listmap.get(label);
//						
//						
//						
//						if (labelvalue.equalsIgnoreCase("") || labelvalue.equalsIgnoreCase("null") || labelvalue ==null) 
//						 {
//							 labelvalue = label;
//						 }
//							csvWriterschema.append(labelvalue); 
//					}
//
//					
//					//to add value to meta_data and json_data
//				String tempvalue ="";
//				  csvWriterschema.append(","+tempvalue);
//				  csvWriterschema.append(","+tempvalue);
//				  csvWriterschema.append(","+seq_id);
//				  csvWriterschema.append(","+uid);
//				 // csvWriterschema.append(",0");  //is_annotated
//					
//			  }
//			  else 
//			  {
//				    
//				    csvWriterschema.append(String.valueOf(count)+"," ); 
//					csvWriterschema.append(dataarr.get(j)+",");
//					 
//					//csvWriterschema.append(generatedSeq+"/"+dataarr.get(j)+",");
//					
//					
//					if (labelselect.equalsIgnoreCase("default")) 
//					{
//						String labelrarr[] = dataarr.get(j).split("/");
//						//System.out.println("labelrarr::::"+labelrarr.length);
//						//System.out.println("labelrarr[1]:::::"+labelrarr[0]);
//						
//						int index = (labelrarr.length - 1) -1 ;
//						
//						if (labelrarr.length>1)  
//						{
//							csvWriterschema.append(labelrarr[index].equalsIgnoreCase("")?"":labelrarr[0]); 
//						}
//						else   
//						{
//							csvWriterschema.append(labelrarr[0]); 
//						}
//						
//
//					}
//					else if(labelselect.equalsIgnoreCase("custom")) 
//					{
//						csvWriterschema.append(label); 
//					}
//					else 
//					{
//						String labelrarr[] = dataarr.get(j).split("/");
//						String labeltofind ="";
//						int index = (labelrarr.length - 1) -1 ;
//								if (labelrarr.length>1) 
//								{
//									labeltofind = labelrarr[index]; 
//								}
//								else   
//								{
//									labeltofind=labelrarr[0];
//								}
//						
//						
//						String labelvalue = getLabelFromList(listmap,labeltofind);// listmap.get(label);
//						
//						 if (labelvalue.equalsIgnoreCase("") || labelvalue.equalsIgnoreCase("null") || labelvalue ==null) 
//						 {
//							 labelvalue = label;
//						 }
//						
//						
//							csvWriterschema.append(labelvalue); 
//					}
//					
//					
//					
//					//to add value to meta_data and json_data
//				  String tempvalue ="";
//				  csvWriterschema.append(","+tempvalue);
//				  csvWriterschema.append(","+tempvalue);
//				  csvWriterschema.append(","+seq_id);
//				  csvWriterschema.append(","+uid);
//				  //csvWriterschema.append(",0");  //is_annotated
//			  }
//			  
//			  csvWriterschema.append("\n");
//			  count++;
//			  seq_id++;
//		  }
//		  
//		  csvWriterschema.flush(); 
//		  csvWriterschema.close();
//		  msg ="1";
//	}
//	catch (Exception e) {
//		msg = "0";
//		System.out.println("writecsv for image repo error ::::"+e.toString());
//		// TODO: handle exception
//	}
//	
//	return msg;
//	
//	
//	}



public String getLabelFromList(HashMap<String, String> listmap,String labeltxt) 
{

	String label ="";
	
	for (Map.Entry<String, String> entry : listmap.entrySet()) 
	{
		System.out.println("Key input :::::: " + entry.getKey() + " Value : " + entry.getValue());
		String key = entry.getKey();
		if (labeltxt!="") 
		{
			if (labeltxt.contains(key))
			{
				label = entry.getValue();
			}
		}
	}
			return label;
}


	
//	public JsonArray predictionH2o_3(String mojopath,JsonArray dataarray) throws  IOException 
//	{
//		
//		 JsonArray returnjs = new JsonArray();
//		/*
//		 * //try //{
//		 * 
//		 * final Iterator<JsonElement> headeriterator =
//		 * (Iterator<JsonElement>)dataarray.iterator(); final List<String> arrayofheader
//		 * = new ArrayList<String>(); int count = 0;
//		 * 
//		 * 
//		 * 
//		 * EasyPredictModelWrapper model = new
//		 * EasyPredictModelWrapper(MojoModel.load(mojopath)); RowData row = new
//		 * RowData(); HashMap< String, String> hmap = new HashMap<String, String>();
//		 * 
//		 * while (headeriterator.hasNext()) { JsonObject jsonObject =
//		 * (JsonObject)headeriterator.next(); JsonObject jsonObjectreturn = new
//		 * JsonObject(); for (final String key : jsonObject.keySet()) {
//		 * jsonObject.get(key).toString(); hmap = new HashMap<String, String>();
//		 * hmap.put(key, jsonObject.get(key).toString());
//		 * jsonObjectreturn.addProperty(key, jsonObject.get(key).toString()); }
//		 * row.putAll(hmap);
//		 * 
//		 * BinomialModelPrediction p = model. predictBinomial(row);
//		 * 
//		 * System.out.println("Has penetrated the prostatic capsule (1=yes; 0=no): " +
//		 * p.label); System.out.print("Class probabilities: ");
//		 * 
//		 * for (int i = 0; i < p.classProbabilities.length; i++) { if (i > 0) {
//		 * System.out.print(","); } System.out.print(p.classProbabilities[i]);
//		 * 
//		 * // jsonObjectreturn.addProperty(key, jsonObject.get(key).toString()); //to
//		 * add predcited value } returnjs.add(jsonObjectreturn); System.out.println("");
//		 * 
//		 * }
//		 */
//	//}
//	/*	catch (Exception e) 
//		{
//			returnjs = new JsonArray();     
//			System.out.println("h2o 3 error :::::"+e.toString());
//			// TODO: handle exception
//		}*/
//	 return returnjs;
//   
//	}
	
	

	
	
	
	
	
//	public int updateModelDeployment(String modeltype,int mojoid,String select_cluster, 
//			String podname,String port_range,String cpu,
//			String memory,String no_pods,
//			String cpu_max,
//			String memory_max,String modelname,String modelpath,String modelpklfile,
//			String kubernetesconfigpath,String apppath) 
//	{
//		int msg =0;
//		try 
//		{
//			
//			
//			String modeltemplatepath = getModelTemplatePath( modeltype);
//			int cluster_id= Integer.parseInt(select_cluster);
//			int cpu_max_ = Integer.parseInt(cpu_max);
//			int memory_max_ = Integer.parseInt(memory_max);
//			
//			
//			int cpu_used = Integer.parseInt(cpu);
//			int memory_used = Integer.parseInt(memory);
//			String updateclusterconfigQ = "update cluster_config set "
//					+ "cluster_version= cluster_version+1,"
//					+ "node_port="+port_range+", cpu_used=cpu_used + "+cpu_used+",memory_used=memory_used +  "+memory_used+" "
//					+ " where cluster_id="+cluster_id+"   ";
//			
//			System.out.println("updateclusterconfigQ----"+updateclusterconfigQ);
//			PreparedStatement ps = null;
//			Statement statement = con.createStatement();         
//				
//			statement.addBatch(updateclusterconfigQ);
//			
//			
//			/*
//			 * String qaccess =
//			 * "insert into deployment_details (modelid, status, cpu, memory, port," +
//			 * " modeltemplatepath, cluster_id, cpu_max, memory_max) " +
//			 * "values("+mojoid+",0,"+cpu+","+memory+","+port_range+"," +
//			 * "'"+modeltemplatepath+"',"+cluster_id+","+cpu_max_+","+memory_max_+")";
//			 * 
//			 * System.out.println("qaccess--"+qaccess);
//			 */
//			//statement.addBatch(qaccess);
//		    statement.executeBatch();
//		    statement.close();
//		
//		    
//		    int dep_id = 0;
//			String queryDeployment = "insert into deployment_details (modelid, status, cpu, memory, port,"
//					+ " modeltemplatepath, cluster_id, cpu_max, memory_max,podname,noofreplica)  values "
//					+ "("+mojoid+",0,"+cpu+","+memory+","+port_range+",'"+modeltemplatepath+"',"
//						+ ""+cluster_id+","+cpu_max_+","+memory_max_+",'"+podname+"',"+no_pods+") RETURNING id";
//
//			System.out.println(queryDeployment);
//
//			ps = con.prepareStatement(queryDeployment);
//
//			if (ps.execute()) {
//				ResultSet rs = ps.getResultSet();
//				rs.next();
//				dep_id = rs.getInt(1);
//			} else {
//				dep_id = ps.getUpdateCount();
//			}
//		    
//			
//			
//			////call api 
//			
//			
//			int select_cluster_id = Integer.parseInt(select_cluster);
//			String  modeltypetemplatepath = getModelTemplatePath(modeltype) ;
//			
//			int deploymentid = dep_id;
//			int modelkubernetesversion = getKubeversion (select_cluster_id)  ;
//			int noofreplicaset =  Integer.parseInt(no_pods);	
//			int cpu_ =  Integer.parseInt(cpu);		
//			int memory_ = Integer.parseInt(memory);
//			int cpumax_ = Integer.parseInt(cpu_max);
//			int memory_max_kube = Integer.parseInt(memory_max);
//			
//			int kubeport =  Integer.parseInt(port_range);
//			int kubetargetport = Integer.parseInt(port_range); 
//			int kubenodeport = Integer.parseInt(port_range); 
//			
//			
//			
//		/////call api 
//		    
//			/*
//			 * d = deploy('C:\\tmp\\.kube\\config', 'model','C:\\dockers\\tensor',
//			 * 'C:\\opt\\cafebot\\PT001', 'C:\\opt\\cafebot\\PT001','model.pkl', 'V1',3,
//			 * '100mil','200M','200mil','500M',
//			 * 'eda2019',"cce175f5-9bb2-469e-b253-968a33410cef",
//			 * 'amit@easydata.ai','index.docker.io','regcrededa',80,8080,32222,1)
//			 */
//		    
//			String dockerhubusername ="eda2019";
//			String dockerhubtoken ="cce175f5-9bb2-469e-b253-968a33410cef";
//			String dockerhubemail ="amit@easydata.ai";
//			String dockerhubregistryurl ="index.docker.io";
//			String dockerhubsecret ="regcrededa";
//			
//			
//			String ipadd = "103.104.73.11"; 
//			String urlString = "http://"+ipadd+":5700/deploy_pod" + "?deploymentid=" + deploymentid + ""
//					+ "&kubernetesconfigpath=" + kubernetesconfigpath + "&modelname=" + modelname + ""
//					+ "&modeltypetemplatepath="+modeltypetemplatepath+"&app_path="+apppath+""
//					+ "&modelpath="+modelpath+"&modelpklfile="+modelname+""
//					+ "&modelkubernetesversion="+modelkubernetesversion+""
//					+ "&noofreplicaset="+noofreplicaset+"&cpu="+cpu+""
//					+ "&memory="+memory+"&cpumax="+cpu_max+""
//					+ "&memorymax="+memory_max+"&dockerhubusername="+dockerhubusername+""
//					+ "&dockerhubtoken="+dockerhubtoken+""
//					+ "&dockerhubemail="+dockerhubemail+"&dockerhubregistryurl="+dockerhubregistryurl+""
//					+ "&dockerhubsecret="+dockerhubsecret+"&kubeport="+port_range+""
//					+ "&kubetargetport="+kubetargetport+"&kubenodeport="+kubenodeport;
//			
//		    
//
//			
//			  HttpURLConnection urlConnection = null; URL urlapi = null;
//			  
//			  System.out.println("urlString-- " + urlString);
//			  
//			  
//			  InputStream inStream = null; 
//			  try 
//			  { 
//				  urlapi = new URL(urlString.toString());
//			  urlConnection = (HttpURLConnection) urlapi.openConnection();
//			  urlConnection.setRequestMethod("GET"); // or POST
//			  urlConnection.setDoInput(true);
//			  urlConnection.setRequestProperty("Content-Type", "application/json");
//			  urlConnection.connect(); 
//			  int HttpResult = urlConnection.getResponseCode();
//			  
//			  System.out.println("HttpResult---" + HttpResult);
//			  
//			  if (HttpResult == HttpURLConnection.HTTP_OK) 
//			  { 
//				  inStream =  urlConnection.getInputStream(); 
//				  BufferedReader bReader = new BufferedReader(new InputStreamReader(inStream));
//				  String temp, response = "";
//			  
//			  while ((temp = bReader.readLine()) != null) 
//			  { 
//				  response += temp; 
//				  
//			  }
//			  
//			  
//			  String msg_ = response;
//			  
//			  
//			  }
//			  
//			  } catch (Exception e) 
//			  { 
//				  
//				  System.out.println("api error -- " + e.toString());
//				  logger.info("api error -- " + e.toString()); 
//			  
//			  }
//			 
//	    	///call api end 
//		    
//		    msg=1;
//			
//			/*
//			 * qaccess = " update queue  set status = "+status+",created = now(), " +
//			 * "err='"+err+"',tablename='"+tablename+"'," +
//			 * "down_path='"+down_path+"',projectid="+projectid+" where fileflowid ="
//			 * +fileflowid;
//			 */
//				
//				
//				
//		}
//		catch (Exception e) 
//		{
//			msg =0;
//			System.out.println("update updateQueueForPy error ---"+e.toString());
//		}
//		
//		return msg;
//	}	
	
	
	
	public String getModelTemplatePath(String modeltype) 
	{
		String jsonschema = "";
		try     
		{	
			
			String modeltemplatepath = "select path from webapp_template where upper(type) ='"+modeltype.toUpperCase()+"'";
		
		System.out.println("modeltemplatepath sql  :::::"+modeltemplatepath);
		PreparedStatement ps = null;
		ResultSet rs;  
		ps = con.prepareStatement(modeltemplatepath);
		rs = ps.executeQuery();
		while (rs.next()) 
		{
			jsonschema  = rs.getString(1);
		}
		
		//jsonschema = jsonschema.replace("\"", "");  
		
		rs.close();    
		ps.close();
		
		}catch (Exception e) 
		{
			jsonschema = "";
			System.out.println("getJobSchemaMappingID ::::"+e.toString());
			// TODO: handle exception
		}
		System.out.println("jsonschema:::::::::::::::::"+jsonschema);
		return jsonschema;
	}
	
	
	

	public int getKubeversion(int cluster_id) 
	{
		int version = -1;       
		try     
		{	
			   
			String getKubeversionQ = "select cluster_version from cluster_config where cluster_id ="+cluster_id;
		
		System.out.println("getKubeversionQ sql  :::::"+getKubeversionQ);
		PreparedStatement ps = null;
		ResultSet rs;  
		ps = con.prepareStatement(getKubeversionQ);
		rs = ps.executeQuery();
		while (rs.next())     
		{
			version  = rs.getInt(1);
		}
		
		//jsonschema = jsonschema.replace("\"", "");  
		
		rs.close();    
		ps.close();
		
		}catch (Exception e) 
		{
			version = 0;
			System.out.println("version error ::::"+e.toString());
			// TODO: handle exception
		}
		System.out.println("version:::::::::::::::::"+version);
		return version;
	}
	
	
	public String updateModelDeploymentStatus(int mojoid) 
	{
		String jsonschema = "0";
		try     
		{	
			
			String modeltemplatepath = "select status from deployment_details where modelid ="+mojoid+" order by id desc";
		
		System.out.println("modeltemplatepath sql  :::::"+modeltemplatepath);
		PreparedStatement ps = null;
		ResultSet rs;
		ps = con.prepareStatement(modeltemplatepath);
		rs = ps.executeQuery();
		while (rs.next()) 
		{
			jsonschema  = rs.getString(1);
		}
		
		rs.close();    
		ps.close();
		
		}catch (Exception e) 
		{
			jsonschema = "";
			System.out.println("updateModelDeploymentStatus ::::"+e.toString());
			// TODO: handle exception
		}
		System.out.println("jsonschema:::::::::::::::::"+jsonschema);
		return jsonschema;
	}
	
	
	
	
	public String getModelDeploymentdetail(int mojoid) 
	{
		String jsonschema = "0";
		try     
		{	
			
			String modeltemplatepath = "select id, created, status, cpu,"
					+ " memory, port, modeltemplatepath, cluster_id, cpu_max,"
					+ " memory_max from deployment_details where modelid ="+mojoid+" order by id desc";
		
		System.out.println("modeltemplatepath sql  :::::"+modeltemplatepath);
		PreparedStatement ps = null;
		ResultSet rs;
		ps = con.prepareStatement(modeltemplatepath);
		rs = ps.executeQuery();
		while (rs.next()) 
		{
			jsonschema  = rs.getString(1); 
		}
		
		rs.close();    
		ps.close();
		
		}catch (Exception e) 
		{
			jsonschema = "";
			System.out.println("updateModelDeploymentStatus ::::"+e.toString());
			// TODO: handle exception
		}
		System.out.println("jsonschema:::::::::::::::::"+jsonschema);
		return jsonschema;
	}
	
	
	
	  public int updateModelDeploymentDelete(int mojoid,int deployment_id) 
	  {
		 
		  int cpu =0;
		  int memory = 0;
		  int msg =0;
		  int cluster_id =0;
		  try 
		  {
			  
			  
		  String modeltemplatepath = "select id, created, status, cpu,"
					+ " memory, port, modeltemplatepath, cluster_id, cpu_max,"
					+ " memory_max from deployment_details where id ="+deployment_id+" order by id desc limit 1";
		
		System.out.println("updateModelDeploymentDelete sql  :::::"+modeltemplatepath);
		PreparedStatement ps = null;
		ResultSet rs;
		ps = con.prepareStatement(modeltemplatepath);
		rs = ps.executeQuery();
		while (rs.next()) 
		{
			cpu  = rs.getInt(4);
			memory = rs.getInt(5);
			cluster_id = rs.getInt(8);
		}
		
		System.out.println("deleted cpu ::::"+cpu);
		System.out.println("deleted memory ::::"+memory);
		System.out.println("cluster_id:::::::"+cluster_id);
		rs.close();    
		ps.close();
		
		String updateclusterconfigQ = "update cluster_config set   cpu_used=cpu_used - "+cpu+","
				                      + "memory_used=memory_used -  "+memory+"  "
				                      + "where cluster_id= "+cluster_id;
		
		System.out.println("updateclusterconfigQ----"+updateclusterconfigQ);
		Statement statement = con.createStatement();         
		statement.addBatch(updateclusterconfigQ);
	    //statement.executeBatch();
	    //statement.close();   
		
	    String deletemodeldeployment = "delete from  deployment_details "
	    		+ "where modelid="+mojoid+"  and id="+deployment_id+"  ";
		  
		  
		  System.out.println("deletemodeldeployment---"+deletemodeldeployment);
		 
		  
		    statement.addBatch(deletemodeldeployment);
		    statement.executeBatch();
		    statement.close();  
		  
		  // PreparedStatement psdel = null;
		
			/*
			 * psdel = con.prepareStatement(deletemodeldeployment); psdel.executeQuery();
			 * psdel.close();
			 */
			  msg =1;
	    	
		  }
	    	catch (Exception e) 
		  {
	    		msg =0;
	    		System.out.println("error deployment delete ::::"+e.toString());			
			}
		  return msg;
	  }
	
	  
	  
	  
		public String getH2OmodelAPI(int mojoid) 
		{
			String jsonschema = "0";
			try     
			{	
				
				String modeltemplatepath = "select h2oapi from mojofile where id ="+mojoid+" order by id desc";
			
			System.out.println("getH2OmodelAPI sql  :::::"+modeltemplatepath);
			PreparedStatement ps = null;
			ResultSet rs;
			ps = con.prepareStatement(modeltemplatepath);
			rs = ps.executeQuery();
			while (rs.next()) 
			{
				jsonschema  = rs.getString(1); 
			}
			
			if (jsonschema == null || jsonschema =="null") 
			{
				jsonschema ="";
			}
			
			rs.close();    
			ps.close();
			
			}catch (Exception e) 
			{
				jsonschema = "";
				System.out.println("getH2OmodelAPI error ::::"+e.toString());
				// TODO: handle exception
			}
			System.out.println("getH2OmodelAPI jsonschema:::::::::::::::::"+jsonschema);
			return jsonschema;
		}
	  
		
		
		
		public String getMediaType(String tablename) 
		{
			int ismedia = 0;
			String mediatype = "";
			String jsonschema ="";
			try     
			{	
				      
			String modeltemplatepath = "select ismedia,mediatype from filename where fileid ='"+tablename+"' order by id desc";
			
			System.out.println("getH2OmodelAPI sql  :::::"+modeltemplatepath);
			PreparedStatement ps = null;
			ResultSet rs;
			ps = con.prepareStatement(modeltemplatepath);
			rs = ps.executeQuery();
			while (rs.next()) 
			{
				ismedia  = rs.getInt(1); 
				mediatype = rs.getString(2);
			}
			
			if (jsonschema == null || jsonschema =="null") 
			{
				jsonschema ="";
			}
			else 
			{
				if (mediatype == null) 
				{
					mediatype ="";
				}
				
				jsonschema = ismedia+"#_#"+mediatype;
			}
			
			rs.close();    
			ps.close();
			
			}catch (Exception e) 
			{
				jsonschema = "";
				System.out.println("getH2OmodelAPI error ::::"+e.toString());
				// TODO: handle exception
			}
			
			System.out.println("getH2OmodelAPI jsonschema:::::::::::::::::"+jsonschema);
			
			return jsonschema;
		}
		
		
	  
		public int updateh2oModelAPI(int mojoid,String apitext) 
		{
			int msg =0;
			try 
			{
				String updatemojoh20api = "update mojofile set h2oapi='"+apitext+"' where id="+mojoid ;
				
				System.out.println("updatemojoh20api----"+updatemojoh20api);
				PreparedStatement ps = null;
				Statement statement = con.createStatement();         
					
				statement.addBatch(updatemojoh20api);

			    statement.executeBatch();
			    statement.close();
			    
			    msg=1;
	
					
			}
			catch (Exception e) 
			{
				msg =0;
				System.out.println("update updatemojoh20api error ---"+e.toString());
			}
			
			return msg;
		}	   
	  
		
		
		
//		public List<CafebotDTO> getAllImageList(String tablename,String uid) 
//		{
//			
//			DBConClickHouse dbconch = new DBConClickHouse();
//			Connection conch = dbconch.getConnection();
//		List<CafebotDTO> ls = new ArrayList<CafebotDTO>();
//			try {    
//				
//				
//				String str[] = uid.split(",");
//				String whereInq = "";
//				
//				for (int k=0;k<str.length;k++) 
//				{
//					if (k==0) 
//					{
//						whereInq += "'"+  str[k]+"'"; 
//					}
//					else 
//					{
//						whereInq += ",'"+  str[k]+"'";
//					}
//
//				}
//				
//				if (whereInq.equalsIgnoreCase("")) 
//				{
//				
//				}			
//				else 
//				{
//					whereInq = " UID in ("+  whereInq+")";
//					System.out.println("whereInq______________"+whereInq);
//					
//					String tablelistQ = "SELECT path,id,UID FROM "+tablename+" where "+whereInq+" order by seq_id asc ";
//					System.out.println("tablelistQ_______________"+tablelistQ);
//					
//					PreparedStatement ps = null;               
//					
//					ps = conch.prepareStatement(tablelistQ);
//					
//					ResultSet  rs = ps.executeQuery();
//					
//					while(rs.next()) 
//					{
//						String path = rs.getString(1);
//						int id = rs.getInt(2);
//						int uid_ = rs.getInt(3);
//						CafebotDTO dt = new CafebotDTO();
//						dt.setId(String.valueOf( id) );
//						dt.setVersion(String.valueOf(uid_) );
//						dt.setfName(path);
//						
//						ls.add(dt);
//					}
//				}
//					
//			}catch (Exception e) 
//			{
//				CafebotDTO dt = new CafebotDTO();
//				ls.add(dt);
//				//ls.add("");
//				System.out.println("clickhouse get table-" +e.toString());
//				// TODO: handle exception
//			}
//			
//			return ls;
//			
//		}
		
		
//	public int updateMediaAnnotation(String tablename,String annotation) 
//	{
//		
//		int createmsg =0;
//		PreparedStatement ps = null;
//		try {
//			
//			//String updateAnnotation = "update "+tablename+" set json_data='"+annotation+"'";
//			
//			String updateAnnotation = "ALTER table "+tablename+"   update json_data='"+annotation+"' where 1=1";
//			System.out.println("updateAnnotation Q::::::::"+updateAnnotation);
//			//ALTER TABLE PT99293064S UPDATE json_data='eda'  where 1=1   
//			
//			ps = conch.prepareStatement(updateAnnotation);          
//			createmsg = ps.executeUpdate();
//			System.out.println("update  clickhouse table done -" + createmsg);
//			ps.close();
//		} catch (Exception e)    
//		{
//			logger.error("error--"+e.toString());
//			    createmsg = 0;
//				System.out.println("createTable error =" + e.toString());
//		}
//		
//		return createmsg;
//		
//	}	
		
	
	
//	public int updateMediaAnnotationBatch(List<CafebotDTO> cdt) 
//	{
//		System.out.println("updateAnnotation query start::::::::");
//		int createmsg =0;
//		PreparedStatement ps = null;
//		try 
//		{
//		  //Statement statement = conch.createStatement();
//			
//			for (int k=0;k<cdt.size();k++) 
//			{
//				System.out.println("q______"+cdt.get(k).getStatus());
//				//statement.addBatch(cdt.get(k).getStatus()); 
//				
//				try {
//					
//					String updateAnnotation = cdt.get(k).getStatus();
//					System.out.println("updateAnnotation per row  Q::::::::"+updateAnnotation);
//					
//					ps = conch.prepareStatement(updateAnnotation);          
//					createmsg = ps.executeUpdate();
//					System.out.println("update  clickhouse table done -" + createmsg);
//					ps.close();
//				} catch (Exception e)    
//				{
//					logger.error("error--"+e.toString());
//					    createmsg = 0;
//						System.out.println("createTable error =" + e.toString());
//				}
//				
//			}
//			
//			
//			
//			/*
//			 * statement.executeBatch(); statement.close();
//			 */
//			createmsg =1;
//			System.out.println("createmsg----------------"+createmsg);
//		
//		} catch (Exception e)    
//		{
//			    logger.error("error--"+e.toString());
//			    createmsg = 0;
//				System.out.println("update table annotation error =" + e.toString());
//		}
//		
//		return createmsg;
//		
//	}
	
	
	
	
//	public Map<Integer, SelectProperties> getJoincolMap(int fileflowid,String componentid,String type,int fileid) 
//	{
//		
//		Map<Integer, SelectProperties> tableList = new HashMap<Integer,SelectProperties>();
//		List<Map> ls = new ArrayList<Map>();
//		try {    
//			
//
//			String tablelistQ = "select seq_id,leftcolid,leftfileid from joindetails where fileid ="+fileid+"  order by seq_id desc";
//
//			String colname = "leftcolid";
//			if (type.equalsIgnoreCase("right")) 
//			{
//				colname = "rightcolid";
//				tablelistQ = "select seq_id,rightcolid,rightfileid from joindetails where fileid ="+fileid+"  order by seq_id desc";
//
//			}   
//			
//			
//			PreparedStatement ps = null;               
//			
//			System.out.println("tablelistQ:::::"+tablelistQ);
//			ps = con.prepareStatement(tablelistQ);
//			
//			ResultSet  rs = ps.executeQuery();
//			
//			while(rs.next()) 
//			{
//				int seq_id= rs.getInt(1);
//				int colid = rs.getInt(2);
//				int fileidtype= rs.getInt(3); 
//				
//
//				SelectProperties sl = new SelectProperties();
//				
//				sl.setId(colid);
//				sl.setFileid(fileidtype);
//				
//				tableList.put(seq_id, sl);
//			}
//			
//			
//			System.out.println("tableList::::::"+tableList.toString());
//		}catch (Exception e) 
//		{
//			//ls.add("");
//			SelectProperties sl = new SelectProperties();
//			tableList = new HashMap<Integer,SelectProperties>();
//			System.out.println("clickhouse get table-" +e.toString());
//			// TODO: handle exception
//		}
//		
//		return tableList;
//		
//	}
	    
	
	public int insertMLOPS(String txtModel,int isclassification,int projectid,int version,int userid,int fileflowid) 
	{
		int msg=0;
		
		try {
		String enterMojo = "INSERT INTO public.mojofile(filename, filedatetime, path,modelkey,comments,"
				+ "modeltype,dbcreated,projectid,version,userid,status,"
				+ "down_path,up_path,time_col,time_transform_col,targ_val,up_sch_path,fileflowid,"
				+ "isclassification,shiftdict,scoredict) " + " VALUES ('',now(),'','" + txtModel + "','" + txtModel + "',"
				+ "" + "'FACEBOT',1,"+projectid+","+version+","+userid+",0,"
				+ "'','' ,'','','',''," + fileflowid + ","+isclassification+",'{}','{}')";

		
		System.out.println("enterMojo q===="+enterMojo);
		
		PreparedStatement ps = null;
		ResultSet rs_;
		int success=0;
		
			ps = con.prepareStatement(enterMojo);
			// rs = ps.executeUpdate();
			success = ps.executeUpdate();
			ps.close();
			 msg  =1;
			
		} catch (Exception e) 
		{
			msg  =0;
			//logger.error("mojoEntry error--"+e.toString());
			System.out.println("error insert into mojo ====" + e.toString());
		}	
		
		return msg;
		
	}

//	public int getModelnamewithversion(String txtDesc,int isclassification) {
//		int version = -1;
//		txtDesc = txtDesc.toUpperCase();
//		PreparedStatement ps = null;
//		ResultSet rs = null;
//		String sqlselecfromfile = "select version from mojofile "
//				                  + "where upper(comments) = '"+txtDesc.toUpperCase()+ "' "
//				                  	+ "and isclassification="+isclassification+" order by version desc limit 1";
//		
//		System.out.println("getModelnamewithversion--" + sqlselecfromfile);
//		try {
//			ps = con.prepareStatement(sqlselecfromfile);
//			rs = ps.executeQuery();
//			while (rs.next()) {
//				version = rs.getInt(1);
//			}
//
//			ps.close();
//			rs.close();
//
//			System.out.println("version :: " + version);
//		} catch (Exception e) {
//			logger.error("error--"+e.toString());
//			version = -1;
//			System.out.println(e.getMessage());
//			// TODO: handle exception
//		}
//		return version;
//	}
	
	
	@Transactional
	public int savesparkModeldetails(String modeluuid,String modelname,String modeltype,
			int userdid,int check_version,int projectid ) 
	{
	
		System.out.println("call save spark");
		int id =0;
		if (check_version ==0) 
		{
			check_version =1;
		}else   
		{
			check_version =check_version +1;
		}
		try {
	String sqlinsert = "INSERT INTO mojofile (path,filename,comments,status,filedatetime,version,"
			+ "userid,modelkey,modeltype,model_filename,scoredict,shiftdict,isclassification,issparkmodel,sparkmodeluuid,projectid) VALUES('"
			+ modeluuid + "','','" + modelname.replace("'", "''") + "',1,now(),"+check_version+","+userdid+",'" + modelname.replace("'", "''")
			+ "','"+modeltype+"','','{}','{}',0,1,'"+modeluuid+"',"+projectid+")  RETURNING id;";

	System.out.println(sqlinsert);  
	PreparedStatement ps = null;
	ps = con.prepareStatement(sqlinsert);
	
	if (ps.execute()) 
	{
		ResultSet rs = ps.getResultSet();
		rs.next();
		id = rs.getInt(1);
	} else {
		id = ps.getUpdateCount();
	}    
	      // con.close();   
		}catch (Exception e) 
		{
			
			System.out.println("savesparkModeldetails::::"+e.toString());
			// TODO: handle exception
		}
	
	return id;
	
	}
	
//	@Transactional
//	public JsonArray getsparkModeldetails(String modeluuid) 
//	{
//		System.out.println("modeluuid::::"+modeluuid);
//
//		DBConClickHouse dbconch = new DBConClickHouse();
//		Connection conch = dbconch.getConnection();
//		
//		JsonArray js = new JsonArray();
//		try {    
//			
//			String modelinfoQ ="select comments,path,modeltype,sparkmodeluuid  from mojofile where sparkmodeluuid='"+modeluuid+"'";
//					System.out.println("modelinfoQ::::"+modelinfoQ);
//			PreparedStatement ps = null;               
//			ps = con.prepareStatement(modelinfoQ);        
//			ResultSet  rs = ps.executeQuery();   
//
//
//				String modelname ="";
//				String modelpath ="";
//				String modeltype ="";
//				
//			while(rs.next()) 
//			{
//				modelname = rs.getString(1);
//				modelpath = rs.getString(4);
//				modeltype = rs.getString(3);
//			}
//			
//			JsonObject obj = new JsonObject(); 
//			obj.addProperty("modelname", modelname);
//			obj.addProperty("modelpath", modelpath);
//			obj.addProperty("modeltype", modeltype);
//			js.add(obj);
//			rs.close();
//			ps.close();
//				 
//		} catch (Exception e) 
//		{
//			js.add("");
//			System.out.println("getsparkModeldetails=="+e.toString());    
//		}
//		return js;
//	}
	
	
	
	public int getConnectionid(String conn_uuid) {

		int conn_id = -1;
		PreparedStatement ps = null;
		ResultSet rs = null;
		String sqlselecfromfile = "select id from connections where conn_uuid='"+conn_uuid+"' order by id desc limit 1";
		
		System.out.println("getConnectionidQ::::" + sqlselecfromfile);
		try {
			ps = con.prepareStatement(sqlselecfromfile);
			rs = ps.executeQuery();
			while (rs.next()) {
				conn_id = rs.getInt(1);
			}

			ps.close();
			rs.close();

			System.out.println("conn_id :: " + conn_id);
		} catch (Exception e) {
			
			//logger.error("error--"+e.toString());
			conn_id = -1;
			System.out.println(e.getMessage());
			// TODO: handle exception
		}
		return conn_id;
	}
	
	
	  
	/*
	 * public SessionFactory getSessionFactory() { return sessionFactory; }
	 * 
	 * @Required public void setSessionFactory(SessionFactory sessionFactory) {
	 * this.sessionFactory = sessionFactory; }
	 */
	   
	/*
	 * 
	 * try {
	 * System.out.println("session ************************::::"+getSessionFactory()
	 * );
	 * 
	 * System.out.println("session ************************::::"+getSessionFactory()
	 * .getCurrentSession().isOpen()); SQLQuery query =
	 * sessionFactory.getCurrentSession().
	 * createSQLQuery("select * from file limit 10"); List<Object[]> rows =
	 * query.list(); for (Object[] row : rows) {
	 * System.out.println(row[0].toString()); }
	 * 
	 * 
	 * 
	 * }catch (Exception e) {
	 * System.out.println("error session :::::::::::::::::::::::::::"+e.toString());
	 * // TODO: handle exception }
	 */



}
