package in.easydata.charts;

import java.util.ArrayList;
import java.util.Arrays;

import com.hyjavacharts.chart.Highchart;
import com.hyjavacharts.model.common.Color;
import com.hyjavacharts.model.highcharts.ChartOptions;
import com.hyjavacharts.model.highcharts.constants.ChartType;
import com.hyjavacharts.model.highcharts.constants.SeriesType;
import com.hyjavacharts.model.highcharts.series.SeriesOrganization;
import com.hyjavacharts.model.highcharts.series.seriesorganization.Levels;
import com.hyjavacharts.model.highcharts.series.seriesorganization.Nodes;



public class HighchartsOrganization {
	
	
	
	   public Highchart configure() {
	        Highchart highChart = new Highchart();
	        ChartOptions chartOptions = highChart.getChartOptions();
	        
	        chartOptions.getChart().setType(ChartType.ORGANIZATION);
	        chartOptions.getChart().setInverted(true).setHeight(600);
	        chartOptions.getTitle().setText("Highcharts Org Chart");
	        
	        chartOptions.getChart().getScrollablePlotArea().setMinHeight(700).setScrollPositionY(1);
	        
	        
	        chartOptions.getTooltip().setOutside(true);

	        chartOptions.getExporting().setAllowHTML(true).setSourceWidth(800).setSourceHeight(600);

	        SeriesOrganization seriesOrganization = new SeriesOrganization();
	        seriesOrganization.setType(SeriesType.ORGANIZATION).setName("Highsoft").setKeys(Arrays.asList("from", "to"));
	        seriesOrganization.setDataAsArrayJavaObject(getSeriesData());
	        seriesOrganization.setColorByPoint(false).setColor(new Color("#007ad0")).setBorderColor(new Color("white")).setNodeWidth(65);
	        seriesOrganization.getDataLabels().setColor(new Color("white"));
	        
	        Levels level = new Levels();
	        level.setLevel(0).setColor(new Color("#535456")).setHeight(25);
	        seriesOrganization.getLevels().add(level);
	        
	        level = new Levels();
	        level.setLevel(1).setColor(new Color("#535456")).setHeight(25);
	        seriesOrganization.getLevels().add(level);
	        
	        level = new Levels();
	        level.setLevel(2).setColor(new Color("#980104"));
	        seriesOrganization.getLevels().add(level);
	        
	        level = new Levels();
	        level.setLevel(4).setColor(new Color("#359154"));
	        seriesOrganization.getLevels().add(level);
	        
	        seriesOrganization.getNodes().add(new Nodes().setId("Shareholders"));
	        seriesOrganization.getNodes().add(new Nodes().setId("Board"));
	        seriesOrganization.getNodes().add(new Nodes().setId("CEO").setTitle("CEO").setName("Grethe Hjetland")
	            .setImage("https://www.hyjavacharts.com/content/images/Grethe.jpg"));
	        seriesOrganization.getNodes().add(new Nodes().setId("HR").setTitle("HR/CFO").setName("Anne Fjærestad")
	            .setImage("https://www.hyjavacharts.com/content/images/AnneJorunn.jpg")
	            .setColor(new Color("#007ad0")).setColumn(3).setOffset("75%"));
	        seriesOrganization.getNodes().add(new Nodes().setId("CTO").setTitle("CTO").setName("Christer Vasseng")
	            .setImage("https://www.hyjavacharts.com/content/images/Christer.jpg")
	            .setColumn(4).setLayout("hanging"));
	        seriesOrganization.getNodes().add(new Nodes().setId("CPO").setTitle("CPO").setName("Torstein Hønsi")
	            .setImage("https://www.hyjavacharts.com/content/images/Torstein1.jpg")
	            .setColumn(4));
	        seriesOrganization.getNodes().add(new Nodes().setId("CSO").setTitle("CSO").setName("Anita Nesse")
	            .setImage("https://www.hyjavacharts.com/content/images/Anita.jpg")
	            .setColumn(4).setLayout("hanging"));
	        seriesOrganization.getNodes().add(new Nodes().setId("CMO").setTitle("CMO").setName("Vidar Brekke")
	                .setImage("https://www.hyjavacharts.com/content/images/Vidar.jpg")
	                .setColumn(4).setLayout("hanging"));
	        seriesOrganization.getNodes().add(new Nodes().setId("Product").setName("Product developers"));
	        seriesOrganization.getNodes().add(new Nodes().setId("Web").setName("General tech").setDescription("Web developers"));
	        seriesOrganization.getNodes().add(new Nodes().setId("Sales").setName("Sales team"));
	        seriesOrganization.getNodes().add(new Nodes().setId("Market").setName("Marketing team"));

	        chartOptions.getSeries().add(seriesOrganization);
	        
	        return highChart;
	    }
	
	
	   private ArrayList<Object> getSeriesData() {
	        ArrayList<Object> array = new ArrayList<Object>();
	        
	        array.add(Arrays.asList("Shareholders", "Board"));
	        array.add(Arrays.asList("Board", "CEO"));
	        array.add(Arrays.asList("CEO", "CTO"));
	        array.add(Arrays.asList("CEO", "CPO"));
	        array.add(Arrays.asList("CEO", "CSO"));
	        array.add(Arrays.asList("CEO", "CMO"));
	        array.add(Arrays.asList("CEO", "HR"));
	        array.add(Arrays.asList("CTO", "Product"));
	        array.add(Arrays.asList("CTO", "Web"));
	        array.add(Arrays.asList("CSO", "Sales"));
	        array.add(Arrays.asList("CMO", "Market"));

	        return array;
	    }
	    
//	    public OrganizationChart() {
//	        setHeight("100%");
//	    }
	

}
