<html>
	<head>
		<title>Select Chart</title>
	</head>
	
	<body>
		<form name="choosechart" action="/HyJavaChartsSimpleSpringDemo/displaychart" method="post">
		    <label>Chart Name: </label>
		    <select name="chartName" size="1">
		    	<option value="line" selected="selected">Highcharts Line Chart</option>
				<option value="pie">Highcharts Pie Chart</option>
				<option value="stock">Highstock Column Chart</option>
				<option value="apex">ApexCharts Column Chart</option>
			</select>

		    <input type="submit" value="Submit">
		<form>
	</body>
</html>