package in.easydata;

import java.util.Date;

public class ChartEntity{
    private int id;    
    private String slice_name;
    private String datasource_type;
    private String  datasource_name;
    private String viz_type;
    private String query_context;
    private String containerid;
    private String filter_context;
    private int isoriginal;
    private String dashboard_title;
    private String dashTabName;
    private String chart_Theme;
    private String basicFilterFieldData ;
    private String slile_created;
    private int slice_userid;
    private String slice_user_name;
    private String properties ; 
    
  
	public int getIsoriginal() {
		return isoriginal;
	}
	public void setIsoriginal(int isoriginal) {
		this.isoriginal = isoriginal;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFilter_context() {
		return filter_context;
	}
	public void setFilter_context(String filter_context) {
		this.filter_context = filter_context;
	}
	public String getSlice_name() {
		return slice_name;
	}
	public void setSlice_name(String slice_name) {
		this.slice_name = slice_name;
	}
	public String getDatasource_type() {
		return datasource_type;
	}
	public void setDatasource_type(String datasource_type) {
		this.datasource_type = datasource_type;
	}
	public String getDatasource_name() {
		return datasource_name;
	}
	public void setDatasource_name(String datasource_name) {
		this.datasource_name = datasource_name;
	}
	public String getViz_type() {
		return viz_type;
	}
	public void setViz_type(String viz_type) {
		this.viz_type = viz_type;
	}
	public String getQuery_context() {
		return query_context;
	}
	public void setQuery_context(String query_context) {
		this.query_context = query_context;
	}
	public String getContainerid() {
		return containerid;
	}
	public void setContainerid(String containerid) {
		this.containerid = containerid;
	}
	public String getDashboard_title() {
		return dashboard_title;
	}
	public void setDashboard_title(String dashboard_title) {
		this.dashboard_title = dashboard_title;
	}
	public String getDashTabName() {
		return dashTabName;
	}
	public void setDashTabName(String dashTabName) {
		this.dashTabName = dashTabName;
	}
	public String getChart_Theme() {
		return chart_Theme;
	}
	public void setChart_Theme(String chart_Theme) {
		this.chart_Theme = chart_Theme;
	}
	public String getBasicFilterFieldData() {
		return basicFilterFieldData;
	}
	public void setBasicFilterFieldData(String basicFilterFieldData) {
		this.basicFilterFieldData = basicFilterFieldData;
	}
	public String getSlile_created() {
		return slile_created;
	}
	public void setSlile_created(String slile_created) {
		this.slile_created = slile_created;
	}
	public int getSlice_userid() {
		return slice_userid;
	}
	public void setSlice_userid(int slice_userid) {
		this.slice_userid = slice_userid;
	}
	public String getSlice_user_name() {
		return slice_user_name;
	}
	public void setSlice_user_name(String slice_user_name) {
		this.slice_user_name = slice_user_name;
	}
	public String getProperties() {
		return properties;
	}
	public void setProperties(String properties) {
		this.properties = properties;
	}
	
}
