package in.easydata.charts;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hyjavacharts.chart.Highchart;
import com.hyjavacharts.model.common.Color;
import com.hyjavacharts.model.highcharts.ChartOptions;
import com.hyjavacharts.model.highcharts.constants.HorizontalAlign;
import com.hyjavacharts.model.highcharts.constants.Layout;
import com.hyjavacharts.model.highcharts.constants.VerticalAlign;
import com.hyjavacharts.model.highcharts.constants.ZoomType;

public class SetHighcharts_Properties {
	
	private static String legend_pos_;
	private  String legend_position;
	private  int label_rotation ;
	private  boolean data_labels;
    private  String zoom_type;
	private  String font_color;
	private  boolean chart_flip;
	private  int value_conversion;
	private  String data_bar_color;
	private  String title_alignment;


	public String getLegend_position() {
		return legend_position;
	}

	public void setLegend_position(String legend_position) {
		this.legend_position = legend_position;
	}

	public int getLabel_rotation() {
		return label_rotation;
	}

	public void setLabel_rotation(int label_rotation) {
		this.label_rotation = label_rotation;
	}

	public boolean isData_labels() {
		return data_labels;
	}

	public void setData_labels(boolean data_labels) {
		this.data_labels = data_labels;
	}

	public String getZoom_type() {
		return zoom_type;
	}

	public void setZoom_type(String zoom_type) {
		this.zoom_type = zoom_type;
	}

	public String getFont_color() {
		return font_color;
	}

	public void setFont_color(String font_color) {
		this.font_color = font_color;
	}

	public boolean isChart_flip() {
		return chart_flip;
	}

	public void setChart_flip(boolean chart_flip) {
		this.chart_flip = chart_flip;
	}

	public int getValue_conversion() {
		return value_conversion;
	}

	public void setValue_conversion(int value_conversion) {
		this.value_conversion = value_conversion;
	}

	public String getData_bar_color() {
		return data_bar_color;
	}

	public void setData_bar_color(String data_bar_color) {
		this.data_bar_color = data_bar_color;
	}

	public String getTitle_alignment() {
		return title_alignment;
	}

	public void setTitle_alignment(String title_alignment) {
		this.title_alignment = title_alignment;
	}
	
	public ChartOptions highchartProperties(Highchart highchart ,String properties_)
	{
		String charttype ="";
		
		
		try {
			
			JsonFactory jsonFactory = new JsonFactory();
			ObjectMapper objectMapper = new ObjectMapper(jsonFactory);
			JsonNode properties = objectMapper.readTree(properties_);
			
			if (properties.isArray()) {
				
				for (JsonNode jsonNode_properties : properties) {
					
					
					System.out.println("jsonNode_properties         "+jsonNode_properties);
					setLegend_position(jsonNode_properties.get("top_bottom").asText());
					setLabel_rotation(Integer.parseInt(jsonNode_properties.get("label_rotation").asText()));
					setData_labels(jsonNode_properties.get("data_labels").asBoolean());
					setZoom_type(jsonNode_properties.get("zoom_type").asText());
					setFont_color(jsonNode_properties.get("font_color").asText());
					setChart_flip(jsonNode_properties.get("chart_flip").asBoolean());
					setValue_conversion(Integer.parseInt(jsonNode_properties.get("value_conversion").asText()));
					setData_bar_color(jsonNode_properties.get("data_bar_color").asText());
					setTitle_alignment(jsonNode_properties.get("title_alignment").asText());
					
					
					charttype = jsonNode_properties.get("charttype").asText();
					
				}

			}
		
		}catch (Exception e) {
			// TODO: handle exception
		}
			
			
		ChartOptions chartOptions = highchart.getChartOptions();
		
		chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT).setVerticalAlign(VerticalAlign.MIDDLE);
		
		if(this.getLegend_position() != "")
		{
			if(this.getLegend_position().equalsIgnoreCase("null"))
			{
				System.out.println("this.getLegend_pos      ition():::::::::::"+this.getLegend_position());
			}
			else {
			System.out.println("this.getLegend_position():::::::::::"+this.getLegend_position());
				String top_bottom = this.getLegend_position().split(" ")[0];
				String left_right = this.getLegend_position().split(" ")[1];
				
				System.out.println("top_bottom:::::::::::"+top_bottom);
				System.out.println("left_right:::::::::::"+left_right);
				
				  if((top_bottom.equalsIgnoreCase("middle"))  && (left_right.equalsIgnoreCase("right")) )
			        {

					  chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT).setVerticalAlign(VerticalAlign.MIDDLE);

			        }
				  else if((top_bottom.equalsIgnoreCase("top")) && (left_right.equalsIgnoreCase("right"))  )
			        {
//					  chartOptions.getResponsive().getRulesSingle()
//						.getChartOptions().getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT).setVerticalAlign(VerticalAlign.TOP);
					  
					  chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT).setVerticalAlign(VerticalAlign.TOP);


			        }
				  else if((top_bottom.equalsIgnoreCase("bottom")) && (left_right.equalsIgnoreCase("right"))  )
			        {

					  chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT).setVerticalAlign(VerticalAlign.BOTTOM);
			        
			        } 
				  else if((top_bottom.equalsIgnoreCase("middle"))  && (left_right.equalsIgnoreCase("center")) )
			        {

					  chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.CENTER).setVerticalAlign(VerticalAlign.MIDDLE);

			        }
				  else if((top_bottom.equalsIgnoreCase("top")) && (left_right.equalsIgnoreCase("center"))  )
			        {

					  chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.CENTER).setVerticalAlign(VerticalAlign.TOP);


			        }
				  else if((top_bottom.equalsIgnoreCase("bottom")) && (left_right.equalsIgnoreCase("center"))  )
			        {

					  chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.CENTER).setVerticalAlign(VerticalAlign.BOTTOM);

			        
			        } 
				  else if((top_bottom.equalsIgnoreCase("middle"))  && (left_right.equalsIgnoreCase("left"))  )
			        {

					  chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.LEFT).setVerticalAlign(VerticalAlign.MIDDLE);


			        }
				  else if((top_bottom.equalsIgnoreCase("top")) && (left_right.equalsIgnoreCase("left"))  )
			        {
				  
					  chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.LEFT).setVerticalAlign(VerticalAlign.TOP);
			        }
				  else 
			        {
				  
					  chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.LEFT).setVerticalAlign(VerticalAlign.BOTTOM);

			        }
		}  	   
		}
		else
		{
			 chartOptions.getLegend().setLayout(Layout.VERTICAL).setAlign(HorizontalAlign.RIGHT).setVerticalAlign(VerticalAlign.MIDDLE);			
		}
		
		
		if(this.getZoom_type().equalsIgnoreCase("XY"))
		{
			chartOptions.getChart().setZoomType(ZoomType.XY);
		}
		else if(this.getZoom_type().equalsIgnoreCase("X"))
		{
			chartOptions.getChart().setZoomType(ZoomType.X);
		}
		else if(this.getZoom_type().equalsIgnoreCase("Y"))
		{
			chartOptions.getChart().setZoomType(ZoomType.Y);
		}
		
		
		
		if(this.isChart_flip())
		{			
			chartOptions.getChart().setInverted(true);			
		}
		else
		{
			chartOptions.getChart().setInverted(false);
		}
		
		
		if(this.isData_labels())
		{			
			if(charttype.equalsIgnoreCase("chartcard15"))
			{
				chartOptions.getPlotOptions().getBubble().getDataLabels().setEnabled(true);
			}
			else if(charttype.equalsIgnoreCase("chartcard1"))
			{
				chartOptions.getPlotOptions().getColumn().getDataLabels().setEnabled(true);
			}
			else if(charttype.equalsIgnoreCase("chartcard2"))
			{
				chartOptions.getPlotOptions().getBar().getDataLabels().setEnabled(true);//.setColor(new Color("#DF5353"));
			}
			else if(charttype.equalsIgnoreCase("chartcard3"))
			{
				chartOptions.getPlotOptions().getColumn().getDataLabels().setEnabled(true);
			}
			else if(charttype.equalsIgnoreCase("chartcard4"))
			{
				chartOptions.getPlotOptions().getArea().getDataLabels().setEnabled(true);
			}
			else if(charttype.equalsIgnoreCase("chartcard5"))
			{
				chartOptions.getPlotOptions().getLine().getDataLabels().setEnabled(true);
			}
			else if(charttype.equalsIgnoreCase("chartcard7"))
			{
				chartOptions.getPlotOptions().getArea().getDataLabels().setEnabled(true);
			}
			else if(charttype.equalsIgnoreCase("chartcard8"))
			{
				chartOptions.getPlotOptions().getPie().getDataLabels().setEnabled(true);
			}
			else if(charttype.equalsIgnoreCase("chartcard9"))
			{
				chartOptions.getPlotOptions().getPie().getDataLabels().setEnabled(true);
			}
			else if(charttype.equalsIgnoreCase("chartcard10"))
			{
				chartOptions.getPlotOptions().getBar().getDataLabels().setEnabled(true);
			}
			else if(charttype.equalsIgnoreCase("chartcard11"))
			{
				chartOptions.getPlotOptions().getColumn().getDataLabels().setEnabled(true);
			}
			else if(charttype.equalsIgnoreCase("chartcard14"))
			{
				chartOptions.getPlotOptions().getScatter().getDataLabels().setEnabled(true);
			}
			else if(charttype.equalsIgnoreCase("chartcard15"))
			{
				chartOptions.getPlotOptions().getBubble().getDataLabels().setEnabled(true);
			}
			else if(charttype.equalsIgnoreCase("chartcard18"))
			{
				chartOptions.getPlotOptions().getBullet().getDataLabels().setEnabled(true);
			}
			else if(charttype.equalsIgnoreCase("chartcard19"))
			{
				chartOptions.getPlotOptions().getHeatmap().getDataLabels().setEnabled(true);
			}
			else if(charttype.equalsIgnoreCase("chartcard20"))
			{
				chartOptions.getPlotOptions().getPyramid().getDataLabels().setEnabled(true);
			}
			else if(charttype.equalsIgnoreCase("chartcard21"))
			{
				chartOptions.getPlotOptions().getFunnel().getDataLabels().setEnabled(true);
			}
			else if(charttype.equalsIgnoreCase("chartcard23"))
			{
				chartOptions.getPlotOptions().getScatter().getDataLabels().setEnabled(true);
			}
			 
		}
		else
		{
			if(charttype.equalsIgnoreCase("chartcard15"))
			{
				chartOptions.getPlotOptions().getBubble().getDataLabels().setEnabled(false);
			}
			else if(charttype.equalsIgnoreCase("chartcard1"))
			{
				chartOptions.getPlotOptions().getColumn().getDataLabels().setEnabled(false);
			}
			else if(charttype.equalsIgnoreCase("chartcard2"))
			{
				chartOptions.getPlotOptions().getBar().getDataLabels().setEnabled(false);
			}
			else if(charttype.equalsIgnoreCase("chartcard3"))
			{
				chartOptions.getPlotOptions().getColumn().getDataLabels().setEnabled(false);
			}
			else if(charttype.equalsIgnoreCase("chartcard4"))
			{
				chartOptions.getPlotOptions().getArea().getDataLabels().setEnabled(false);
			}
			else if(charttype.equalsIgnoreCase("chartcard5"))
			{
				chartOptions.getPlotOptions().getLine().getDataLabels().setEnabled(false);
			}
			else if(charttype.equalsIgnoreCase("chartcard7"))
			{
				chartOptions.getPlotOptions().getArea().getDataLabels().setEnabled(false);
			}
			else if(charttype.equalsIgnoreCase("chartcard8"))
			{
				chartOptions.getPlotOptions().getPie().getDataLabels().setEnabled(false);
			}
			else if(charttype.equalsIgnoreCase("chartcard9"))
			{
				chartOptions.getPlotOptions().getPie().getDataLabels().setEnabled(false);
			}
			else if(charttype.equalsIgnoreCase("chartcard10"))
			{
				chartOptions.getPlotOptions().getBar().getDataLabels().setEnabled(false);
			}
			else if(charttype.equalsIgnoreCase("chartcard11"))
			{
				chartOptions.getPlotOptions().getColumn().getDataLabels().setEnabled(false);
			}
			else if(charttype.equalsIgnoreCase("chartcard14"))
			{
				chartOptions.getPlotOptions().getScatter().getDataLabels().setEnabled(false);
			}
			else if(charttype.equalsIgnoreCase("chartcard15"))
			{
				chartOptions.getPlotOptions().getBubble().getDataLabels().setEnabled(false);
			}
			else if(charttype.equalsIgnoreCase("chartcard18"))
			{
				chartOptions.getPlotOptions().getBullet().getDataLabels().setEnabled(false);
			}
			else if(charttype.equalsIgnoreCase("chartcard19"))
			{
				chartOptions.getPlotOptions().getHeatmap().getDataLabels().setEnabled(false);
			}
			else if(charttype.equalsIgnoreCase("chartcard20"))
			{
				chartOptions.getPlotOptions().getPyramid().getDataLabels().setEnabled(false);
			}
			else if(charttype.equalsIgnoreCase("chartcard21"))
			{
				chartOptions.getPlotOptions().getFunnel().getDataLabels().setEnabled(false);
			}
			else if(charttype.equalsIgnoreCase("chartcard23"))
			{
				chartOptions.getPlotOptions().getScatter().getDataLabels().setEnabled(false);
			}
			
		}
		
		System.out.println("this.getFont_color()    "+this.getFont_color());
		
		if(!this.getFont_color().equalsIgnoreCase(""))
		{
//			System.out.println("this.getFont_color()    iffffffffffffff");
//			chartOptions.getPlotOptions().getBar().getDataLabels().setColor(new Color(this.getFont_color()));
	
			
			if(charttype.equalsIgnoreCase("chartcard15"))
			{
				chartOptions.getPlotOptions().getBubble().getDataLabels().setColor(new Color(this.getFont_color()));
			}
			else if(charttype.equalsIgnoreCase("chartcard1"))
			{
				chartOptions.getPlotOptions().getColumn().getDataLabels().setColor(new Color(this.getFont_color()));
			}
			else if(charttype.equalsIgnoreCase("chartcard2"))
			{
				chartOptions.getPlotOptions().getBar().getDataLabels().setColor(new Color(this.getFont_color()));
			}
			else if(charttype.equalsIgnoreCase("chartcard3"))
			{
				chartOptions.getPlotOptions().getColumn().getDataLabels().setColor(new Color(this.getFont_color()));
			}
			else if(charttype.equalsIgnoreCase("chartcard4"))
			{
				chartOptions.getPlotOptions().getArea().getDataLabels().setColor(new Color(this.getFont_color()));
			}
			else if(charttype.equalsIgnoreCase("chartcard5"))
			{
				chartOptions.getPlotOptions().getLine().getDataLabels().setColor(new Color(this.getFont_color()));
			}
			else if(charttype.equalsIgnoreCase("chartcard7"))
			{
				chartOptions.getPlotOptions().getArea().getDataLabels().setColor(new Color(this.getFont_color()));
			}
			else if(charttype.equalsIgnoreCase("chartcard8"))
			{
				System.out.println("this.getFont_color()    iffffffffffffff");
				chartOptions.getPlotOptions().getPie().getDataLabels().setColor(new Color(this.getFont_color()));
			}
			else if(charttype.equalsIgnoreCase("chartcard9"))
			{
				System.out.println("this.getFont_color()    iffffffffffffff");
				chartOptions.getPlotOptions().getPie().getDataLabels().setColor(new Color(this.getFont_color()));
			}
			else if(charttype.equalsIgnoreCase("chartcard10"))
			{
				chartOptions.getPlotOptions().getBar().getDataLabels().setColor(new Color(this.getFont_color()));
			}
			else if(charttype.equalsIgnoreCase("chartcard11"))
			{
				chartOptions.getPlotOptions().getColumn().getDataLabels().setColor(new Color(this.getFont_color()));
			}
			else if(charttype.equalsIgnoreCase("chartcard14"))
			{
				chartOptions.getPlotOptions().getScatter().getDataLabels().setColor(new Color(this.getFont_color()));
			}
			else if(charttype.equalsIgnoreCase("chartcard15"))
			{
				chartOptions.getPlotOptions().getBubble().getDataLabels().setColor(new Color(this.getFont_color()));
			}
			else if(charttype.equalsIgnoreCase("chartcard18"))
			{
				chartOptions.getPlotOptions().getBullet().getDataLabels().setColor(new Color(this.getFont_color()));
			}
			else if(charttype.equalsIgnoreCase("chartcard19"))
			{
				chartOptions.getPlotOptions().getHeatmap().getDataLabels().setColor(new Color(this.getFont_color()));
			}
			else if(charttype.equalsIgnoreCase("chartcard20"))
			{
				chartOptions.getPlotOptions().getPyramid().getDataLabels().setColor(new Color(this.getFont_color()));
			}
			else if(charttype.equalsIgnoreCase("chartcard21"))
			{
				chartOptions.getPlotOptions().getFunnel().getDataLabels().setColor(new Color(this.getFont_color()));
			}
			else if(charttype.equalsIgnoreCase("chartcard23"))
			{
				chartOptions.getPlotOptions().getScatter().getDataLabels().setColor(new Color(this.getFont_color()));
			}
		
		
		
			
		}
		else
		{
			System.out.println("this.getFont_color()    elseeeeeeeeeeeeeee");
//			chartOptions.getPlotOptions().getBar().getDataLabels().setColor(new Color("#d8d9da"));
		
			if(charttype.equalsIgnoreCase("chartcard15"))
			{
				chartOptions.getPlotOptions().getBubble().getDataLabels().setColor(new Color("#d8d9da"));
			}
			else if(charttype.equalsIgnoreCase("chartcard1"))
			{
				chartOptions.getPlotOptions().getColumn().getDataLabels().setColor(new Color("#d8d9da"));
			}
			else if(charttype.equalsIgnoreCase("chartcard2"))
			{
				chartOptions.getPlotOptions().getBar().getDataLabels().setColor(new Color("#d8d9da"));
			}
			else if(charttype.equalsIgnoreCase("chartcard3"))
			{
				chartOptions.getPlotOptions().getColumn().getDataLabels().setColor(new Color("#d8d9da"));
			}
			else if(charttype.equalsIgnoreCase("chartcard4"))
			{
				chartOptions.getPlotOptions().getArea().getDataLabels().setColor(new Color("#d8d9da"));
			}
			else if(charttype.equalsIgnoreCase("chartcard5"))
			{
				chartOptions.getPlotOptions().getLine().getDataLabels().setColor(new Color("#d8d9da"));
			}
			else if(charttype.equalsIgnoreCase("chartcard7"))
			{
				chartOptions.getPlotOptions().getArea().getDataLabels().setColor(new Color("#d8d9da"));
			}
			else if(charttype.equalsIgnoreCase("chartcard8"))
			{
				chartOptions.getPlotOptions().getPie().getDataLabels().setColor(new Color("#d8d9da"));
			}
			else if(charttype.equalsIgnoreCase("chartcard9"))
			{
				chartOptions.getPlotOptions().getPie().getDataLabels().setColor(new Color("#d8d9da"));
			}
			else if(charttype.equalsIgnoreCase("chartcard10"))
			{
				chartOptions.getPlotOptions().getBar().getDataLabels().setColor(new Color("#d8d9da"));
			}
			else if(charttype.equalsIgnoreCase("chartcard11"))
			{
				chartOptions.getPlotOptions().getColumn().getDataLabels().setColor(new Color("#d8d9da"));
			}
			else if(charttype.equalsIgnoreCase("chartcard14"))
			{
				chartOptions.getPlotOptions().getScatter().getDataLabels().setColor(new Color("#d8d9da"));
			}
			else if(charttype.equalsIgnoreCase("chartcard15"))
			{
				chartOptions.getPlotOptions().getBubble().getDataLabels().setColor(new Color("#d8d9da"));
			}
			else if(charttype.equalsIgnoreCase("chartcard18"))
			{
				chartOptions.getPlotOptions().getBullet().getDataLabels().setColor(new Color("#d8d9da"));
			}
			else if(charttype.equalsIgnoreCase("chartcard19"))
			{
				chartOptions.getPlotOptions().getHeatmap().getDataLabels().setColor(new Color("#d8d9da"));
			}
			else if(charttype.equalsIgnoreCase("chartcard20"))
			{
				chartOptions.getPlotOptions().getPyramid().getDataLabels().setColor(new Color("#d8d9da"));
			}
			else if(charttype.equalsIgnoreCase("chartcard21"))
			{
				chartOptions.getPlotOptions().getFunnel().getDataLabels().setColor(new Color("#d8d9da"));
			}
			else if(charttype.equalsIgnoreCase("chartcard23"))
			{
				chartOptions.getPlotOptions().getScatter().getDataLabels().setColor(new Color("#d8d9da"));
			}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		}
		
		
		return chartOptions;
	
	}
	
}
