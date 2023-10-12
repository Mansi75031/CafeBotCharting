package in.easydata.charts;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.hyjavacharts.chart.Highchart;
import com.hyjavacharts.model.highcharts.ChartOptions;
import com.hyjavacharts.model.highcharts.XAxis;
import com.hyjavacharts.model.highcharts.YAxis;
import com.hyjavacharts.model.highcharts.constants.ChartType;
import com.hyjavacharts.model.highcharts.constants.HorizontalAlign;
import com.hyjavacharts.model.highcharts.series.SeriesBubble;
public class HighchartsBubblechart {
	
	
	
	public Highchart configureBubblechart(List<List<com.hyjavacharts.model.highcharts.series.seriesbubble.Data>>   data,
			String title,
			String subtitle,int isstack,String columnlist,int isbin,String X_field_ ,String properties_)  {
		
		
        Highchart highChart = new Highchart();
        ChartOptions chartOptions = highChart.getChartOptions();
   
	    String titlealign ="";
		int rotation =0;
		int y_rotation =0;

		String prefix ="";
		String suffix ="";
		boolean x_category =false;
		boolean x_label_check =false;
		
        try 
        {
			
			JsonFactory jsonFactory = new JsonFactory();
			ObjectMapper objectMapper = new ObjectMapper(jsonFactory);
			JsonNode properties = objectMapper.readTree(properties_);
			
			if (properties.isArray()) {
				
				for (JsonNode jsonNode_properties : properties) {
					
			        

						titlealign = jsonNode_properties.get("title_alignment").asText();
					System.out.println("label_rotation         "+Integer.parseInt(jsonNode_properties.get("label_rotation").asText()));
					if(Integer.parseInt(jsonNode_properties.get("label_rotation").asText()) != 0)
					{
						 rotation = Integer.parseInt(jsonNode_properties.get("label_rotation").asText());
					}
					

					if(Integer.parseInt(jsonNode_properties.get("y_label_rotation").asText()) != 0)
					{
						y_rotation = Integer.parseInt(jsonNode_properties.get("y_label_rotation").asText());
					}
					

					if((jsonNode_properties.get("prefix").asText()) != "")
					{
						prefix = jsonNode_properties.get("prefix").asText();
						
					}
					
					if((jsonNode_properties.get("suffix").asText()) != "")
					{
						suffix = jsonNode_properties.get("suffix").asText();
						
					}
					
//					if(jsonNode_properties.get("x_categories_check").asBoolean() != false)
//					{
//						
//						x_category = jsonNode_properties.get("x_categories_check").asBoolean();
//						
//					}
					
					if(jsonNode_properties.get("x_label_check").asBoolean() != false)
					{
						
						x_label_check = jsonNode_properties.get("x_label_check").asBoolean();
				        X_field_ = prefix+X_field_+suffix;
				        
					}
					
				}

			}
		
		}catch (Exception e) {
			// TODO: handle exception
		}
        
        
        chartOptions = new SetHighcharts_Properties().highchartProperties(highChart ,properties_);
        
        chartOptions.getChart().setType(ChartType.BUBBLE)
            .setPlotBorderWidth(null);
        
        
        
//	      String titlealign ="";
//			titlealign = jsonNode_properties.get("title_alignment").asText();
			if(titlealign != "")
			{
				if(titlealign.equalsIgnoreCase("left"))
				{
				chartOptions.getTitle().setText(title).setAlign(HorizontalAlign.LEFT);
				}
				else if(titlealign.equalsIgnoreCase("right"))
				{
				chartOptions.getTitle().setText(title).setAlign(HorizontalAlign.RIGHT);
				}
				else
				{
				chartOptions.getTitle().setText(title).setAlign(HorizontalAlign.CENTER);
				}
				
			}
			else
			{
				chartOptions.getTitle().setText(title).setAlign(HorizontalAlign.CENTER);
			}
        

		chartOptions.getSubtitle().setText(subtitle);

        chartOptions.getLegend().setEnabled(true);
        
        XAxis xAxi = new XAxis();
        List<XAxis> lsxa = new ArrayList<XAxis>(); 
        xAxi.setGridLineWidth(1)
            .getTitle().setText(X_field_);
        xAxi.getLabels().setFormat("{value}").setRotation(rotation);
        
        String colarr[] = columnlist.split(",");
        
        
    	List<String> ls = new ArrayList<String>();
		List<Number> lsData = new ArrayList<Number>();
		List<Number> lsDataX = new ArrayList<Number>();
		
		ArrayList<com.hyjavacharts.model.highcharts.series.seriesbubble.Data> array 
		= new ArrayList<com.hyjavacharts.model.highcharts.series.seriesbubble.Data>();
        
       
        
        YAxis yAxi = new YAxis();
        yAxi.setStartOnTick(false)
            .setEndOnTick(false)
            .getTitle().setText("");
        yAxi.getLabels().setFormat("{value}").setRotation(y_rotation);
        yAxi.setMaxPadding(0.2);

		for (int j=0;j<data.size();j++) 
		{	
		
			List<com.hyjavacharts.model.highcharts.series.seriesbubble.Data> data2 = data.get(j); 
			lsData = new ArrayList<Number>();
			String catname ="";
			 //System.out.println("data:configureBubblechart::::::::::::    "+data2);
			for (int k=0;k <data2.size();k++) 
			{
				
				catname = data2.get(k).getName();
				
				array.add(new com.hyjavacharts.model.highcharts.series.seriesbubble.Data()
						
						.setX(data2.get(k).getX()).
						setY(data2.get(k).getY())	
						.setZ(data2.get(k).getY())
						.setName(data2.get(k).getName())
						
					);
				
				//lsData.addAll(array);
				if (j==0) 
				{
					ls.add(catname);
				}
			}
			
			if (j==0) 
			{
				//xAxi.setCategories(ls);			
//			xAxi.setCategories(ls);
//			lsxa.add(xAxi);
//			xAxi.getLabels().setOverflow(LabelsOverflow.JUSTIFY).setRotation(rotation);
	        chartOptions.getXAxis().add(xAxi);
			
			}
			chartOptions.getTooltip().setPointFormat("<b> Name :{point.name}</b>,<br><b>X: {point.x}</b>,<br><b>Y: {point.y}</b>,<br><b>Z: {point.z}%</b>").setShared(false);
			chartOptions.getTooltip().getStyle().setCssValue("{ color: '#cdcdcd' }");;
			chartOptions.getAccessibility().getPoint().setValueDescriptionFormat("{index}. {point.name}, {point.x}, {point.y}, {point.z}%.");
			chartOptions.getResponsive().getRulesSingle()
				.getCondition().setMaxWidth(500);
			if (isbin ==0) 
			{      
				SeriesBubble SeriesBubble = new SeriesBubble();
			      if (colarr[j].length()>10) 
			      {
			    	  SeriesBubble.setName(colarr[j].substring(0, 10));
//			    	  SeriesBubble.setXAxis();
//			    	  SeriesBubble.setYAxis();
			      }
			      else 
			      {
			    	  SeriesBubble.setName(colarr[j]);
			          
			      }
			     // SeriesBubble.setZIndex(4);
			
//			        SeriesBubble.setDataAsArrayNumber(lsData);
					SeriesBubble.setDataAsArrayObject(array);	   
//					SeriesBubble.setColorByPoint(true);
			        chartOptions.getSeries().add(SeriesBubble);
			}
				    
			
		}

        
//        chartOptions.getPlotOptions().getBubble().getDataLabels().setEnabled(true);

	

        return highChart;
    }

}
