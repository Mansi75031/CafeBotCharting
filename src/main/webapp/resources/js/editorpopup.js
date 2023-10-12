

	var desctxt1 ='avg:Calculates the arithmetic mean:SELECT avg(t) FROM table';
	var desctxt2 ='count : Counts the number of rows or not-NULL values : SELECT count(num) FROM table';
	var desctxt3 ='max : Calculates the maximum. : SELECT max(column_name)FROM table';
	var desctxt4 ='min : Calculates the minimum. : SELECT min(column_name)FROM table';
	var desctxt5 ='sum: Calculates the sum. Only works for numbers.: SELECT sum(column_name)FROM table';
	var desctxt6 ='any : Selects the first encountered value.';
	var desctxt7 ='stddevPop:The result is equal to the square root of varPop.:';
	var desctxt8 ='stddevSamp:The result is equal to the square root of varSamp.varPop(x) Calculates the amount Î£((x - xÌ…)^2) / n, where n is the sample size and xÌ…is the average value of x.';
	var desctxt9 ='varSamp:Calculates the amount Î£((x - xÌ…)^2) / (n - 1), where n is the sample size and xÌ…is the average value of x.';
	var desctxt10 ='covarPop:Syntax: covarPop(x, y) ,Calculates the value of Î£((x - xÌ…)(y - yÌ…)) .';
	var desctxt11 ='covarSamp:Calculates the value of Î£((x - xÌ…)(y - yÌ…)) / (n - 1). ,Returns Float64. When n <= 1, returns +âˆž.';
	var desctxt12 ='anyHeavy:Selects a frequently occurring value using the heavy hitters algorithm. If there is a value that occurs more than in half the cases in each of the queryâ€™s execution threads, this value is returned. Normally, the result is nondeterministic: SELECT anyHeavy(AirlineID) AS res FROM ontime';
	var desctxt13 ='anyLast:Selects the last value encountered.The result is just as indeterminate as for the any function.';
	var desctxt14 ='argMin:Calculates the arg value for a minimal val value. If there are several different values of arg for minimal values of val, the first of these values encountered is output.:SELECT argMin(user, salary), argMin(tuple(user, salary)) FROM salary';
	var desctxt15 ='argMax:Calculates the arg value for a maximum val value. If there are several different values of arg for maximum values of val, the first of these values encountered is output.:SELECT argMax(user, salary), argMax(tuple(user, salary)) FROM salary';
	var desctxt16 ='avgWeighted:Calculates the weighted arithmetic mean.:SELECT avgWeighted(x, w) FROM values(\'x Int8, w Int8\', (4, 1), (1, 0), (10, 2))';
	var desctxt17 ='corr:Calculates the Pearson correlation coefficient: Î£((x - xÌ…)(y - yÌ…)) / sqrt(Î£((x - xÌ…)^2) * Î£((y - yÌ…)^2)).';
	var desctxt18 ='topK:Returns an array of the approximately most frequent values in the specified column:SELECT topK(3)(AirlineID) AS res FROM ontime';
	var desctxt19 ='topKWeighted:Similar to topK but takes one additional argument of integer type - weight. Every value is accounted weight times for frequency calculation:SELECT topKWeighted(10)(number, number) FROM numbers(1000)';
	var desctxt20 ='groupArray:Creates an array of argument values.Values can be added to the array in any (indeterminate) order:';
	var desctxt21 ='groupUniqArray:Creates an array from different argument values. Memory consumption is the same as for the uniqExact function.:';
	var desctxt22 ='groupArrayInsertAt:Creates an array from different argument values. Memory consumption is the same as for the uniqExact function.:';
	var desctxt23 ='groupArrayMovingSum:Calculates the moving sum of input values.:SELECT groupArrayMovingSum(int) AS I, groupArrayMovingSum(float) AS F,groupArrayMovingSum(dec) AS DFROM table';
	var desctxt24 ='groupArrayMovingAvg:Calculates the moving average of input values.:SELECT groupArrayMovingAvg(int) AS I,groupArrayMovingAvg(float) AS F,groupArrayMovingAvg(dec) AS D FROM table';
	var desctxt25 ='groupArraySample:Creates an array of sample argument values. The size of the resulting array is limited to max_size elements. Argument values are selected and added to the array randomly.:SELECT groupArraySample(3)(color) as newcolors FROM colors';
	var desctxt26 ='groupBitAnd:Applies bitwise AND for series of numbers.:SELECT groupBitAnd(num) FROM TABLE';
	var desctxt27 ='groupBitOr:Applies bitwise OR for series of numbers.:SELECT groupBitOr(num) FROM Table';
	var desctxt28 ='groupBitXor:Applies bitwise XOR for series of numbers.:SELECT groupBitXor(num) FROM Table';
	var desctxt29 ='groupBitmap:Bitmap or Aggregate calculations from a unsigned integer column, return cardinality of type UInt64, if add suffix -State, then return bitmap object.:SELECT groupBitmap(UserID) as num FROM Table';
	var desctxt30 ='groupBitmapAnd:Calculations the AND of a bitmap column, return cardinality of type UInt64, if add suffix -State, then return bitmap object.:SELECT groupBitmapAnd(z) FROM bitmap_column_expr_test2 WHERE like(tag_id, \'tag%\');';
	var desctxt31 ='groupBitmapOr:Calculations the OR of a bitmap column, return cardinality of type UInt64, if add suffix -State, then return bitmap object. This is equivalent to groupBitmapMerge.:SELECT groupBitmapOr(z) FROM bitmap_column_expr_test2 WHERE like(tag_id, \'tag%\');';
	var desctxt32 ='groupBitmapXor:Calculations the XOR of a bitmap column, return cardinality of type UInt64, if add suffix -State, then return bitmap object.:SELECT groupBitmapXor(z) FROM bitmap_column_expr_test2 WHERE like(tag_id, \'tag%\');';
	var desctxt33 ='sumWithOverflow:Computes the sum of the numbers, using the same data type for the result as for the input parameters. If the sum exceeds the maximum value for this data type, it is calculated with overflow.:';
	var desctxt34 ='sumMap:Totals the value array according to the keys specified in the key array.:SELECT timeslot,sumMap(statusMap.status, statusMap.requests),sumMap(statusMapTuple)FROM sum_map GROUP BY timeslot ';
	var desctxt35 ='minMap:Calculates the minimum from value array according to the keys specified in the key array.:SELECT minMap(a, b) FROM values(\'a Array(Int32), b Array(Int64)\', ([1, 2], [2, 2]), ([2, 3], [1, 1]))';
	var desctxt36 ='maxMap:Calculates the maximum from value array according to the keys specified in the key array.:SELECT maxMap(a, b) FROM values(\'a Array(Int32), b Array(Int64)\', ([1, 2], [2, 2]), ([2, 3], [1, 1]))';
	var desctxt37 ='initializeAggregation:Initializes aggregation for your input rows. It is intended for the functions with the suffix State. Use it for tests or to process columns of types AggregateFunction and AggregationgMergeTree.:SELECT uniqMerge(state) FROM (SELECT initializeAggregation(\'uniqState\', number % 3) AS state FROM system.numbers LIMIT 10000);';
	var desctxt38 ='skewPop:Computes the skewness of a sequence.:SELECT skewPop(value) FROM series_with_value_column';
	var desctxt39 ='skewSamp:Computes the sample skewness of a sequence.It represents an unbiased estimate of the skewness of a random variable if passed values form its sample.:SELECT skewSamp(value) FROM series_with_value_column';
	var desctxt40 ='kurtPop:Computes the kurtosis of a sequence.:SELECT kurtPop(value) FROM series_with_value_column';
	var desctxt41 ='kurtSamp:Computes the sample kurtosis of a sequence.It represents an unbiased estimate of the kurtosis of a random variable if passed values form its sample.:SELECT kurtSamp(value) FROM series_with_value_column';
	var desctxt42 ='uniq:Calculates the approximate number of different values of the argument.:';
	var desctxt43 ='uniqExact:Calculates the exact number of different argument values.:';
	var desctxt44 ='uniqCombined:Calculates the approximate number of different argument values.:';
	var desctxt45 ='uniqCombined64:Same as uniqCombined, but uses 64-bit hash for all data types.:';
	var desctxt46 ='uniqHLL12:Calculates the approximate number of different argument values, using the HyperLogLog algorithm.';
	var desctxt47 ='quantile:Computes an approximate quantile of a numeric data sequence.:SELECT quantile(val) FROM table';
	var desctxt48 ='quantiles:All the quantile functions also have corresponding quantiles functions: quantiles, quantilesDeterministic, quantilesTiming, quantilesTimingWeighted, quantilesExact, quantilesExactWeighted, quantilesTDigest. These functions calculate all the quantiles of the listed levels in one pass, and return an array of the resulting values.';
	var desctxt49 ='quantileExact:Exactly computes the quantile of a numeric data sequence.:SELECT quantileExact(number) FROM numbers(10)';
	var desctxt50 ='quantileExactWeighted:Exactly computes the quantile of a numeric data sequence, taking into account the weight of each element.:SELECT quantileExactWeighted(n, val) FROM t';
	var desctxt51 ='quantileTiming:With the determined precision computes the quantile of a numeric data sequence.The result is deterministic (it doesnâ€™t depend on the query processing order). The function is optimized for working with sequences which describe distributions like loading web pages times or backend response time:SELECT quantileTiming(response_time) FROM table';
	var desctxt52 ='quantileTimingWeighted:With the determined precision computes the quantile of a numeric data sequence according to the weight of each sequence member.The result is deterministic (it doesnâ€™t depend on the query processing order). The function is optimized for working with sequences which describe distributions like loading web pages times or backend response times.:SELECT quantileTimingWeighted(response_time, weight) FROM table';
	var desctxt53 ='quantileDeterministic:Computes an approximate quantile of a numeric data sequence.This function applies reservoir sampling with a reservoir size up to 8192 and deterministic algorithm of sampling. The result is deterministic. To get an exact quantile, use the quantileExact function.:SELECT quantileDeterministic(val, 1) FROM table';
	var desctxt54 ='quantileTDigest:Computes an approximate quantile of a numeric data sequence using the t-digest algorithm.The maximum error is 1%. Memory consumption is log(n), where n is a number of values. The result depends on the order of running the query, and is nondeterministic.:SELECT quantileTDigest(number) FROM numbers(10)';
	var desctxt55 ='quantileTDigestWeighted:Computes an approximate quantile of a numeric data sequence using the t-digest algorithm. The function takes into account the weight of each sequence member. The maximum error is 1%. Memory consumption is log(n), where n is a number of values.:SELECT quantileTDigestWeighted(number, 1) FROM numbers(10)';
	var desctxt56 ='simpleLinearRegression:Performs simple (unidimensional) linear regression.:SELECT arrayReduce(\'simpleLinearRegression\', [0, 1, 2, 3], [0, 1, 2, 3])';
	var desctxt57 ='stochasticLinearRegression:This function implements stochastic linear regression. It supports custom parameters for learning rate, L2 regularization coefficient, mini-batch size and has few methods for updating weights (Adam (used by default), simple SGD, Momentum, Nesterov).:CREATE TABLE IF NOT EXISTS train_data (param1 Float64,param2 Float64,target Float64) ENGINE = Memory;CREATE TABLE your_model ENGINE = Memory AS SELECT stochasticLinearRegressionState(0.1, 0.0, 5, \'SGD\')(target, param1, param2) AS state FROM train_data; ';
	var desctxt58 ='stochasticLogisticRegression:This function implements stochastic logistic regression. It can be used for binary classification problem, supports the same custom parameters as stochasticLinearRegression and works the same way.:';
	var desctxt59 ='categoricalInformationValue :Calculates the value of (P(tag = 1) - P(tag = 0))(log(P(tag = 1)) - log(P(tag = 0))) for each category.';
	var desctxt60 ='studentTTest:Applies Student\'s t-test to samples from two populations.:SELECT studentTTest(sample_data, sample_index) FROM student_ttest;';
	var desctxt61 ='welchTTest:Applies Welch\'s t-test to samples from two populations.:SELECT welchTTest(sample_data, sample_index) FROM welch_ttest;';
	var desctxt62 ='mannWhitneyUTest:Applies the Mann-Whitney rank test to samples from two populations.:SELECT mannWhitneyUTest(\'greater\')(sample_data, sample_index) FROM mww_ttest;';
	var desctxt63 ='median :The median* functions are the aliases for the corresponding quantile* functions. They calculate median of a numeric data sample.Functions->median â€” Alias for quantile.medianDeterministic â€” Alias for quantileDeterministic.medianExact â€” Alias for quantileExact.medianExactWeighted â€” Alias for quantileExactWeighted.medianTiming â€” Alias for quantileTiming.medianTimingWeighted â€” Alias for quantileTimingWeighted.medianTDigest â€” Alias for quantileTDigest.medianTDigestWeighted â€” Alias for quantileTDigestWeighted.:SELECT medianDeterministic(val, 1) FROM table';
	var desctxt64 ='rankCorr:Computes a rank correlation coefficient.:SELECT rankCorr(number, number) FROM numbers(100);';
	var desctxt65 ='Combinators:The name of an aggregate function can have a suffix appended to it. This changes the way the aggregate function works.:SELECT avgOrDefault If(x, x > 10) FROM(SELECT toDecimal32(1.23, 2) AS x)';
	var desctxt66 ='Parametric:Some aggregate functions can accept not only argument columns (used for compression), but a set of parameters â€“ constants for initialization. The syntax is two pairs of brackets instead of one. The first is for parameters, and the second is for arguments.:SELECT histogram(5)(number + 1)FROM (SELECT * FROM system.numbers LIMIT 20)';



	//TIME 67
	var desctxt67 = 'like : formatDateTime(toDate(\'2010-01-04\'), \'%g\') '+
	'<br>1)  %C	year divided by 100 and truncated to integer (00-99) example :	20 '+
	'<br>2)  %d	day of the month, zero-padded (01-31)	example : 02'+
	'<br>3)  %D	Short MM/DD/YY date, equivalent to %m/%d/%y	example : 01/02/18 '+
	'<br>4)  %e	day of the month, space-padded ( 1-31)	example : 2 '+
	'<br>5)  %F	short YYYY-MM-DD date, equivalent to %Y-%m-%d	example : 2018-01-02 '+
	'<br>6)  %G	four-digit year format for ISO week number, calculated from the week-based year defined by the ISO 8601 standard, normally useful only with %V	example : 2018 '+
	'<br>7)  %g	two-digit year format, aligned to ISO 8601, abbreviated from four-digit notation	example : 18 '+
	'<br>8)  %H	hour in 24h format (00-23)	example : 22 '+
	'<br>9)  %I	hour in 12h format (01-12)	example : 10 '+
	'<br>10)  %j	day of the year (001-366)	example : 002 '+
	'<br>11)  %m	month as a decimal number (01-12)	example : 01 '+
	'<br>12)  %M	minute (00-59)	example : 33 '+
	'<br>13)  %n	new-line character (‘’) '+	
	'<br>14)  %p	AM or PM designation	example : PM '+
	'<br>15)  %Q	Quarter (1-4)	example : 1 '+
	'<br>16)  %R	24-hour HH:MM time, equivalent to %H:%M	example : 22:33 '+
	'<br>17)  %S	second (00-59)	example : 44 '+
	'<br>18)  %t	horizontal-tab character (’) '+	
	'<br>19)  %T	ISO 8601 time format (HH:MM:SS), equivalent to %H:%M:%S	example : 22:33:44 '+
	'<br>20)  %u	ISO 8601 weekday as number with Monday as 1 (1-7)	example : 2 '+
	'<br>21)  %V	ISO 8601 week number (01-53)	example : 01 '+
	'<br>22)  %w	weekday as a decimal number with Sunday as 0 (0-6)	example : 2 '+
	'<br>23)  %y	Year, last two digits (00-99)	example : 18 '+
	'<br>24)  %Y	Year	example : 2018 '+
	'<br>25)  %%	a % sign	example : % ';


	var desctxt68 ='toYear:Converts a date or date with time to a UInt16 number containing the year number (AD).:';
	var desctxt69 ='toQuarter:Converts a date or date with time to a UInt8 number containing the quarter number.:';
	var desctxt70 ='toMonth:Converts a date or date with time to a UInt8 number containing the month number (1-12).:';
	var desctxt71 ='toDayOfYear:Converts a date or date with time to a UInt16 number containing the number of the day of the year (1-366).';
	var desctxt72 ='toDayOfMonth:Converts a date or date with time to a UInt8 number containing the number of the day of the month (1-31).';
	var desctxt73 ='toDayOfWeek:Converts a date or date with time to a UInt8 number containing the number of the day of the week (Monday is 1, and Sunday is 7).';
	var desctxt74 ='toHour:Converts a date with time to a UInt8 number containing the number of the hour in 24-hour time (0-23).This function assumes that if clocks are moved ahead, it is by one hour and occurs at 2 a.m., and if clocks are moved back, it is by one hour and occurs at 3 a.m. (which is not always true â€“ even in Moscow the clocks were twice changed at a different time).';
	var desctxt75 ='toMinute:Converts a date with time to a UInt8 number containing the number of the minute of the hour (0-59).';
	var desctxt76 ='toSecond :Converts a date with time to a UInt8 number containing the number of the second in the minute (0-59).';
	var desctxt77 ='toUnixTimestamp :For DateTime argument: converts value to the number with type UInt32 -- Unix Timestamp (https://en.wikipedia.org/wiki/Unix_time).For String argument: converts the input string to the datetime according to the timezone (optional second argument, server timezone is used by default) and returns the corresponding unix timestamp.:SELECT toUnixTimestamp(\'2017-11-05 08:07:47\', \'Asia/Tokyo\') AS unix_timestamp';
	var desctxt78 ='toStartOfYear:Rounds down a date or date with time to the first day of the year.Returns the date.';
	var desctxt79 ='toStartOfISOYear:Rounds down a date or date with time to the first day of ISO year.Returns the date.';
	var desctxt80 ='toStartOfQuarter:Rounds down a date or date with time to the first day of the quarter.The first day of the quarter is either 1 January, 1 April, 1 July, or 1 October.Returns the date.';
	var desctxt81 ='toStartOfMonth:Rounds down a date or date with time to the first day of the month.Returns the date.';
	var desctxt82 ='toMonday:Rounds down a date or date with time to the nearest Monday.Returns the date.';
	var desctxt83 ='toStartOfWeek(t[,mode]):Rounds down a date or date with time to the nearest Sunday or Monday by mode.Returns the date.The mode argument works exactly like the mode argument to toWeek(). For the single-argument syntax, a mode value of 0 is used.';
	var desctxt84 ='toStartOfDay:Rounds down a date with time to the start of the day.';
	var desctxt85 ='toStartOfHour:ounds down a date with time to the start of the hour.';
	var desctxt86 ='toStartOfMinute:Rounds down a date with time to the start of the minute.';
	var desctxt87 ='toStartOfSecond :runcates sub-seconds.:toStartOfSecond(value[, timezone]):WITH toDateTime64(\'2020-01-01 10:20:30.999\', 3) AS dt64:ELECT toStartOfSecond(dt64);';
	var desctxt88 ='toStartOfTenMinutes:ounds down a date with time to the start of the ten-minute interval.';
	var desctxt89 ='toStartOfFifteenMinutes :Rounds down the date with time to the start of the fifteen-minute interval.';
	var desctxt90 ='toStartOfInterval(time_or_data, INTERVAL x unit [, time_zone]) :This is a generalization of other functions named toStartOf*. For example,toStartOfInterval(t, INTERVAL 1 year) returns the same as toStartOfYear(t),toStartOfInterval(t, INTERVAL 1 month) returns the same as toStartOfMonth(t),toStartOfInterval(t, INTERVAL 1 day) returns the same as toStartOfDay(t),toStartOfInterval(t, INTERVAL 15 minute) returns the same as toStartOfFifteenMinutes(t) etc.';
	var desctxt91 ='toTime:Converts a date with time to a certain fixed date, while preserving the time.';
	var desctxt92 ='toRelativeYearNum:Converts a date with time or date to the number of the year, starting from a certain fixed point in the past.';
	var desctxt93 ='toRelativeQuarterNum:Converts a date with time or date to the number of the quarter, starting from a certain fixed point in the past.';
	var desctxt94 ='toRelativeMonthNum:Converts a date with time or date to the number of the month, starting from a certain fixed point in the past.';
	var desctxt95 ='toRelativeWeekNum:Converts a date with time or date to the number of the week, starting from a certain fixed point in the past.';
	var desctxt96 ='toRelativeDayNum:Converts a date with time or date to the number of the day, starting from a certain fixed point in the past.';
	var desctxt97 ='toRelativeHourNum:Converts a date with time or date to the number of the hour, starting from a certain fixed point in the past.';
	var desctxt98 ='toRelativeMinuteNum:Converts a date with time or date to the number of the minute, starting from a certain fixed point in the past.';
	var desctxt99 ='toRelativeSecondNum:Converts a date with time or date to the number of the second, starting from a certain fixed point in the past.';
	var desctxt100 ='toISOYear:Converts a date or date with time to a UInt16 number containing the ISO Year number.';
	var desctxt101 ='toISOWeek:Converts a date or date with time to a UInt8 number containing the ISO Week number.';
	var desctxt102 ='toWeek(date[,mode]):This function returns the week number for date or datetime. The two-argument form of toWeek() enables you to specify whether the week starts on Sunday or Monday and whether the return value should be in the range from 0 to 53 or from 1 to 53. If the mode argument is omitted, the default mode is 0.toISOWeek()is a compatibility function that is equivalent to toWeek(date,3).';
	var desctxt103 ='date_trunc:Truncates date and time data to the specified part of date.:SELECT now(), date_trunc(\'hour\', now());';
	var desctxt104 ='unit â€” The type of interval to add. String.:Supported values: second, minute, hour, day, week, month, quarter, year.value - Value in specified unit - Intdate â€” Date or DateTime.Returned value Returns Date or DateTime with value expressed in unit added to date.select date_add(YEAR, 3, toDate(\'2018-01-01\'));';
	var desctxt105 ='date_diff:Returns the difference between two Date or DateTime values.:SELECT dateDiff(\'hour\', toDateTime(\'2018-01-01 22:00:00\'), toDateTime(\'2018-01-02 23:00:00\'));';
	var desctxt106 ='date_sub :Subtracts a time/date interval from the provided date.:SELECT date_sub(YEAR, 3, toDate(\'2018-01-01\'));';
	var desctxt107 ='timestamp_add:Adds the specified time value with the provided date or date time value.:select timestamp_add(toDate(\'2018-01-01\'), INTERVAL 3 MONTH);';
	var desctxt108 ='timestamp_sub:Returns the difference between two dates in the specified unit.:select timestamp_sub(MONTH, 5, toDateTime(\'2018-12-18 01:02:03\'));';
	var desctxt109 ='now:Returns the current date and time.:SELECT now(); OR SELECT now(\'Europe/Moscow\');';
	var desctxt110 ='today:Accepts zero arguments and returns the current date at one of the moments of request execution.The same as â€˜toDate(now())â€™.';
	var desctxt111 ='yesterday:Accepts zero arguments and returns yesterdayâ€™s date at one of the moments of request execution.The same as â€˜today() - 1â€™.';
	var desctxt112 ='timeSlot:Rounds the time to the half hour.This function is specific to Yandex.Metrica, since half an hour is the minimum amount of time for breaking a session into two sessions if a tracking tag shows a single userâ€™s consecutive pageviews that differ in time by strictly more than this amount. This means that tuples (the tag ID, user ID, and time slot) can be used to search for pageviews that are included in the corresponding session.';
	var desctxt113 ='toYYYYMM:Converts a date or date with time to a UInt32 number containing the year and month number (YYYY * 100 + MM).';
	var desctxt114 ='toYYYYMMDD:Converts a date or date with time to a UInt32 number containing the year and month number (YYYY * 10000 + MM * 100 + DD).';
	var desctxt115 ='toYYYYMMDDhhmmss:Converts a date or date with time to a UInt64 number containing the year and month number (YYYY * 10000000000 + MM * 100000000 + DD * 1000000 + hh * 10000 + mm * 100 + ss).addYears, addMonths, addWeeks, addDays, addHours, addMinutes, addSeconds, addQuarters Function adds a Date/DateTime interval to a Date/DateTime and then return the Date/DateTime.:SELECT addYears(date, 1) AS add_years_with_date, addYears(date_time, 1) AS add_years_with_date_time';
	var desctxt116 ='subtract:subtractYears, subtractMonths, subtractWeeks, subtractDays, subtractHours, subtractMinutes, subtractSeconds, subtractQuarters Function subtract a Date/DateTime interval to a Date/DateTime and then return the Date/DateTime.:SELECT subtractYears(date, 1) AS subtract_years_with_date,subtractYears(date_time, 1) AS subtract_years_with_date_time';
	var desctxt117 ='timeSlots(StartTime, Duration,[, Size]):For a time interval starting at â€˜StartTimeâ€™ and continuing for â€˜Durationâ€™ seconds, it returns an array of moments in time, consisting of points from this interval rounded down to the â€˜Sizeâ€™ in seconds. â€˜Sizeâ€™ is an optional parameter: a constant UInt32, set to 1800 by default: timeSlots(toDateTime(\'2012-01-01 12:20:00\'), 600) = [toDateTime(\'2012-01-01 12:00:00\'), toDateTime(\'2012-01-01 12:30:00\')].This is necessary for searching for pageviews in the corresponding session.';
	var desctxt118 ='formatDateTime:Function formats a Time according given Format string. N.B.: Format is a constant expression, e.g. you can not have multiple formats for single result column.';

	var desctxt120 ='file:Creates a table from a file. This table function is similar to url and hdfs ones.file function can be used in SELECT and INSERT queries on data in File tables:Syntax file(path, format, structure)';
	var desctxt121 ='merge:merge(db_name, tables_regexp) – Creates a temporary Merge table. For more information, see the section “Table engines, Merge”.The table structure is taken from the first table encountered that matches the regular expression.:';
	var desctxt122 ='numbers:numbers(N) – Returns a table with the single ‘number’ column (UInt64) that contains integers from 0 to N-1.numbers(N, M) - Returns a table with the single ‘number’ column (UInt64) that contains integers from N to (N + M - 1).:SELECT * FROM numbers(10);';
	var desctxt123 ='remote:Allows to access remote servers without creating a Distributed table. remoteSecure - same as remote but with a secured connection.Both functions can be used in SELECT and INSERT queries.:remote(addresses_expr, db, table[, user[, password], sharding_key])';
	var desctxt124 ='url:url function creates a table from the URL with given format and structure.url function may be used in SELECT and INSERT queries on data in URL tables.:url(URL, format, structure)';
	var desctxt125 ='mysql:Allows SELECT and INSERT queries to be performed on data that is stored on a remote MySQL server.:mysql(\'host:port, database, table, user, password[, replace_query, on_duplicate_clause])';
	var desctxt126 ='postgresql:Allows SELECT and INSERT queries to be performed on data that is stored on a remote PostgreSQL server.:postgresql(\'host:port\', \'database\', \'table\', \'user\', \'password\'[, \`schema\`])';
	var desctxt127 ='jdbc:jdbc(jdbc_connection_uri, schema, table) - returns table that is connected via JDBC driver.:SELECT * FROM jdbc(\'jdbc:mysql://localhost:3306/?user=root&password=root\', \'schema\', \'table\')';
	var desctxt128 ='odbc:Returns table that is connected via ODBC.:odbc(connection_settings, external_database, external_table)';
	var desctxt129 ='hdfs:Creates a table from files in HDFS. This table function is similar to url and file ones.:hdfs(URI, format, structure)';
	var desctxt130 ='s3:Provides table-like interface to select/insert files in Amazon S3. This table function is similar to hdfs, but provides S3-specific features.:SELECT *ROM s3(\'https://storage.yandexcloud.net/my-test-bucket-768/data.csv\', \'CSV\', \'column1 UInt32, column2 UInt32, column3 UInt32\')LIMIT 2;';
	var desctxt131 ='input:input(structure) - table function that allows effectively convert and insert data sent to the server with given structure to the table with another structure.:$ cat data.csv | clickhouse-client --query="INSERT INTO test SELECT lower(col1), col3 * col3 FROM input(col1 String, col2 Date, col3 Int32) FORMAT CSV"';
	var desctxt132 ='generateRandom:Generates random data with given schema.Allows to populate test tables with data.Supports all data types that can be stored in table except LowCardinality and AggregateFunction.:SELECT * FROM generateRandom(a Array(Int8), d Decimal32(4), c Tuple(DateTime64(3), UUID), 1, 10, 2) LIMIT 3;';
	var desctxt133 ='cluster:Allows to access all shards in an existing cluster which configured in remote_servers section without creating a Distributed table. One replica of each shard is queried.:cluster(cluster_name, db.table[, sharding_key])';
	var desctxt134 ='view:Turns a subquery into a table. The function implements views (see CREATE VIEW). The resulting table doesn\'t store data, but only stores the specified SELECT query. When reading from the table, ClickHouse executes the query and deletes all unnecessary columns from the result.:SELECT * FROM view(SELECT name FROM months);';
	var desctxt135 ='null function:Creates a temporary table of the specified structure with the Null table engine. According to the Null-engine properties, the table data is ignored and the table itself is immediately droped right after the query execution. The function is used for the convenience of test writing and demonstrations.:INSERT INTO function null(\'x UInt64\') SELECT * FROM numbers_mt(1000000000);';

	var desctxt136 ='Arithmetic:For all arithmetic functions, the result type is calculated as the smallest number type that the result fits in, if there is such a type. The minimum is taken simultaneously based on the number of bits, whether it is signed, and whether it floats.:SELECT toTypeName(0), toTypeName(0 + 0), toTypeName(0 + 0 + 0), toTypeName(0 + 0 + 0 + 0)';
	var desctxt137 ='Arrays:Returns 1 for an empty array, or 0 for a non-empty array.The result type is UInt8.The function also works for strings.other notEmpty,length,emptyArrayToSingle,range(end), range(start, end [, step]):SELECT arrayConcat([1, 2], [3, 4], [5, 6]) AS res';
	var desctxt138 ='Comparison:Comparison functions always return 0 or 1 (Uint8).';
	var desctxt139 ='Logical:Logical functions accept any numeric types, but return a UInt8 number equal to 0 or 1.Zero as an argument is considered “false,” while any non-zero value is considered “true”.';
	var desctxt140 ='Type Conversion:When you convert a value from one to another data type, you should remember that in common case, it is an unsafe operation that can lead to a data loss. A data loss can occur if you try to fit value from a larger data type to a smaller data type, or if you convert values between different data types.';
	var desctxt141 ='Dates and Times:All functions for working with the date and time that have a logical use for the time zone can accept a second optional time zone argument. Example: Asia/Yekaterinburg. In this case, they use the specified time zone instead of the local (default) one.';
	var desctxt142 ='Strings:Returns 1 for an empty string or 0 for a non-empty string.The result type is UInt8.A string is considered non-empty if it contains at least one byte, even if this is a space or a null byte.The function also works for arrays. notEmpty,length,lengthUTF8,char_length, CHAR_LENGTH';
	var desctxt143 ='For Searching in Strings:The search is case-sensitive by default in all these functions. There are separate variants for case insensitive search.:position(haystack, needle[, start_pos])';
	var desctxt144 ='For Replacing in Strings:Replaces the first occurrence, if it exists, of the ‘pattern’ substring in ‘haystack’ with the ‘replacement’ substring.Hereafter, ‘pattern’ and ‘replacement’ must be constants.';
	var desctxt145 ='Conditional:if - Controls conditional branching. Unlike most systems, ClickHouse always evaluate both expressions then and else.:SELECT if(cond, then, else)';
	var desctxt146 ='Files:Reads file as a String. The file content is not parsed, so any information is read as one string and placed into the specified column.';
	var desctxt147 ='Mathematical:All the functions return a Float64 number. The accuracy of the result is close to the maximum precision possible, but the result might not coincide with the machine representable number nearest to the corresponding real number.e(),pi(),exp(x) etc';
	var desctxt148 ='Rounding:Returns the largest round number that is less than or equal to x. A round number is a multiple of 1/10N, or the nearest number of the appropriate data type if 1 / 10N isn’t exact.';
	var desctxt149 ='Working with maps:Arranges key:value pairs into Map(key, value) data type.:map(key1, value1[, key2, value2, ...])';
	var desctxt150 ='Splitting and Merging Strings and Arrays:Splits a string into substrings separated by a specified character. It uses a constant string separator which consisting of exactly one character.Returns an array of selected substrings. Empty substrings may be selected if the separator occurs at the beginning or end of the string, or if there are multiple consecutive separators.';
	var desctxt151 ='Bit:Bit functions work for any pair of types from UInt8, UInt16, UInt32, UInt64, Int8, Int16, Int32, Int64, Float32, or Float64.';
	var desctxt152 ='Bitmap:Bitmap functions work for two bitmaps Object value calculation, it is to return new bitmap or cardinality while using formula calculation, such as and, or, xor, and not, etc.';
	var desctxt153 ='Hash:Bitmap functions work for two bitmaps Object value calculation, it is to return new bitmap or cardinality while using formula calculation, such as and, or, xor, and not, etc.';
	var desctxt154 ='Pseudo-Random Numbers:All the functions accept zero arguments or one argument. If an argument is passed, it can be any type, and its value is not used for anything. The only purpose of this argument is to prevent common subexpression elimination, so that two different instances of the same function return different columns with different random numbers.';
	var desctxt155 ='Encoding:Returns the string with the length as the number of passed arguments and each byte has the value of corresponding argument. Accepts multiple arguments of numeric types. If the value of argument is out of range of UInt8 data type, it is converted to UInt8 with possible rounding and overflow.';
	var desctxt156 ='UUID:The functions for working with UUID are listed below.:';
	var desctxt157 ='URLs:All these functions don’t follow the RFC. They are maximally simplified for improved performance.:';
	var desctxt158 ='IP Addresses:Takes a UInt32 number. Interprets it as an IPv4 address in big endian. Returns a string containing the corresponding IPv4 address in the format A.B.C.d (dot-separated numbers in decimal form).';
	var desctxt159 ='JSON:In Yandex.Metrica, JSON is transmitted by users as session parameters. There are some special functions for working with this JSON. (Although in most of the cases, the JSONs are additionally pre-processed, and the resulting values are put in separate columns in their processed format.) All these functions are based on strong assumptions about what the JSON can be, but they try to do as little as possible to get the job done.';
	var desctxt160 ='External Dictionaries:For information on connecting and configuring external dictionaries, see External dictionaries.';
	var desctxt161 ='Yandex.Metrica Dictionaries:In order for the functions below to work, the server config must specify the paths and addresses for getting all the Yandex.Metrica dictionaries. The dictionaries are loaded at the first call of any of these functions. If the reference lists can’t be loaded, an exception is thrown.';
	var desctxt162 ='IN Operator:in, notIn, globalIn, globalNotIn';
	var desctxt163 ='arrayJoin:Normal functions don’t change a set of rows, but just change the values in each row (map).Aggregate functions compress a set of rows (fold or reduce).The ‘arrayJoin’ function takes each row and generates a set of rows (unfold).';
	var desctxt164 ='Geo:Calculates the distance between two points on the Earth’s surface using the great-circle formula.';
	var desctxt165 ='Nullable:Checks whether the argument is NULL.';
	var desctxt166 ='Machine Learning:Prediction using fitted regression models uses evalMLMethod function. See link in linearRegression.';
	var desctxt167 ='Introspection:You can use functions described in this chapter to introspect ELF and DWARF for query profiling.';
	var desctxt168 ='Tuples:A function that allows grouping multiple columns.	For columns with the types T1, T2, …, it returns a Tuple(T1, T2, …) type tuple containing these columns. There is no cost to execute the function.';
	var desctxt169 ='Encryption:These functions implement encryption and decryption of data with AES (Advanced Encryption Standard) algorithm.';


	
	var desctxt170 ='Configuring an External Dictionary:If dictionary is configured using xml file, than dictionary configuration has the following structure:';
	var desctxt171 ='Storing Dictionaries in Memory:There are a variety of ways to store dictionaries in memory.';
	var desctxt172 ='Dictionary Updates:ClickHouse periodically updates the dictionaries. The update interval for fully downloaded dictionaries and the invalidation interval for cached dictionaries are defined in the <lifetime> tag in seconds.';
	var desctxt173 ='Sources of External Dictionaries:An external dictionary can be connected from many different sources.';
	var desctxt174 ='Dictionary Key and Fields:The <structure> clause describes the dictionary key and fields available for queries.';
	var desctxt175 ='Hierarchical dictionaries:ClickHouse supports hierarchical dictionaries with a numeric key.';
	var desctxt176 ='Polygon Dictionaries With Grids:Polygon dictionaries allow you to efficiently search for the polygon containing specified points.or example: defining a city area by geographical coordinates.';
	var desctxt177 ='All the functions support “translocality,” the ability to simultaneously use different perspectives on region ownership. For more information, see the section “Functions for working with Yandex.Metrica dictionaries”.';

	
	var desctxt178 ='UInt(8-256):UInt8, UInt16, UInt32, UInt64, UInt256, Int8, Int16, Int32, Int64, Int128, Int256 Fixed-length integers, with or without a sign.When creating tables, numeric parameters for integer numbers can be set (e.g. TINYINT(8), SMALLINT(16), INT(32), BIGINT(64)), but ClickHouse ignores them.';
	var desctxt179 ='Float(32-64):Float32, Float64 We recommend that you store data in integer form whenever possible. For example, convert fixed precision numbers to integer values, such as monetary amounts or page load times in milliseconds.';
	var desctxt180 ='Decimal:Signed fixed-point numbers that keep precision during add, subtract and multiply operations. For division least significant digits are discarded (not rounded).';
	var desctxt181 ='Boolean:There is no separate type for boolean values. Use UInt8 type, restricted to the values 0 or 1.';
	var desctxt182 ='String:Strings of an arbitrary length. The length is not limited. The value can contain an arbitrary set of bytes, including null bytes.he String type replaces the types VARCHAR, BLOB, CLOB, and others from other DBMSs.';
	var desctxt183 ='FixedString(N):A fixed-length string of N bytes (neither characters nor code points).To declare a column of FixedString type, use the following syntax:<column_name> FixedString(N)';
	var desctxt184 ='UUID:A universally unique identifier (UUID) is a 16-byte number used to identify records. For detailed information about the UUID';
	var desctxt185 ='Date:A date. Stored in two bytes as the number of days since 1970-01-01 (unsigned). Allows storing values from just after the beginning of the Unix Epoch to the upper threshold defined by a constant at the compilation stage (currently, this is until the year 2149, but the final fully-supported year is 2148).';
	var desctxt186 ='DateTime:Allows to store an instant in time, that can be expressed as a calendar date and a time of a day.';
	var desctxt187 ='DateTime64:Allows to store an instant in time, that can be expressed as a calendar date and a time of a day, with defined sub-second precision';
	var desctxt188 ='Enum:Enumerated type consisting of named values.Named values must be declared as string = integer pairs. ClickHouse stores only numbers, but supports operations with the values through their names.';
	var desctxt189 ='LowCardinality:Changes the internal representation of other data types to be dictionary-encoded.';
	var desctxt190 ='Array(T):An array of T-type items. T can be any data type, including an array.Creating an Array You can use a function to create an array:';
	var desctxt191 ='AggregateFunction:Aggregate functions can have an implementation-defined intermediate state that can be serialized to an AggregateFunction(…) data type and stored in a table, usually, by means of a materialized view. The common way to produce an aggregate function state is by calling the aggregate function with the -State suffix. To get the final result of aggregation in the future, you must use the same aggregate function with the -Mergesuffix.';
	var desctxt192 ='Nested Data Structures:A nested data structure is like a table inside a cell. The parameters of a nested data structure – the column names and types – are specified the same way as in a CREATE TABLE query. Each table row can correspond to any number of rows in a nested data structure.';
	var desctxt193 ='Tuple(T1 ,T2 ...):Tuples are used for temporary column grouping. Columns can be grouped when an IN expression is used in a query, and for specifying certain formal parameters of lambda functions. For more information, see the sections IN operators and Higher order functions.';
	var desctxt194 ='Nullable:Allows to store special marker (NULL) that denotes “missing value” alongside normal values allowed by TypeName. For example, a Nullable(Int8) type column can store Int8 type values, and the rows that don’t have a value will store NULL.';

	var desctxt197 ='Multiword Type Names:When creating tables, you can use data types with a name consisting of several words. This is implemented for better SQL compatibility. as CHAR VARYING,DOUBLE PRECISION,CHAR LARGE OBJECT';
	var desctxt198 ='Geo:Clickhouse supports data types for representing geographical objects — locations, lands, etc.';
	var desctxt199 ='Map(key value):Map(key, value) data type stores key:value pairs.To get the value from an a Map(key, value) column, use a[key] syntax. This lookup works now with a linear complexity.';
	var desctxt200 ='SimpleAggregateFunction:SimpleAggregateFunction(name, types_of_arguments…) data type stores current value of the aggregate function, and does not store its full state as AggregateFunction does. This optimization can be applied to functions for which the following property holds: the result of applying a function f to a row set S1 UNION ALL S2 can be obtained by applying f to parts of the row set separately, and then again applying f to the results: f(S1 UNION ALL S2) = f(f(S1) UNION ALL f(S2)). This property guarantees that partial aggregation results are enough to compute the combined one, so we don’t have to store and process any extra data.';

	
	
	var desctxt201 ='Syntax SELECT if(condition, then, else) . Example: SELECT if(1, plus(2, 2), plus(2, 6));. Use "AND" and "OR" between condition .';
	var desctxt202 ='Syntax: multiIf(cond_1, then_1, cond_2, then_2, ..., else) Example : SELECT  multiIf(left < right, \'left is smaller\', left > right, \'left is greater\', left = right, \'Both equal\', \'Null value\') AS result';
	var desctxt203 ='Operators:ClickHouse transforms operators to their corresponding functions at the query parsing stage according to their priority, precedence, and associativity.';

	
	//tp 13-09-2021
	var desctxt204='Returns a Float64 number that is close to the number e.';
	var desctxt205='Returns a Float64 number that is close to the number π.';
	var desctxt206='Accepts a numeric argument and returns a Float64 number close to the exponent of the argument.';
	var desctxt207='Accepts a numeric argument and returns a Float64 number close to the natural logarithm of the argument.';
	var desctxt208='Accepts a numeric argument and returns a Float64 number close to 2 to the power of x.';
	var desctxt209='Accepts a numeric argument and returns a Float64 number close to the binary logarithm of the argument.';
	var desctxt210='Accepts a numeric argument and returns a Float64 number close to 10 to the power of x.';
	var desctxt211='Accepts a numeric argument and returns a Float64 number close to the decimal logarithm of the argument.';
	var desctxt212='Accepts a numeric argument and returns a Float64 number close to the square root of the argument.';
	var desctxt213='Accepts a numeric argument and returns a Float64 number close to the cubic root of the argument.';
	var desctxt214='If ‘x’ is non-negative, then erf(x / σ√2) is the probability that a random variable having a normal distribution with standard deviation ‘σ’ takes the value that is separated from the expected value by more than ‘x’.';
	var desctxt215='Accepts a numeric argument and returns a Float64 number close to 1 - erf(x), but without loss of precision for large ‘x’ values.';
	var desctxt216='The logarithm of the gamma function.';
	var desctxt217='Gamma function.';
	var desctxt218='The sine.';
	var desctxt219='The cosine.';
	var desctxt220='The tangent.';
	var desctxt221='The arc sine.';
	var desctxt222='The arc cosine.';
	var desctxt223='The arc tangent.';
	var desctxt224='Takes two numeric arguments x and y. Returns a Float64 number close to x to the power of y.';
	var desctxt225='Accepts a numeric argument and returns a UInt64 number close to 2 to the power of x.';
	var desctxt226='Accepts a numeric argument and returns a UInt64 number close to 10 to the power of x.';
	var desctxt227='Hyperbolic cosine.';
	var desctxt228='Inverse hyperbolic cosine.';	
	var desctxt229='Hyperbolic sine.';
	var desctxt230='Inverse hyperbolic sine.';
	var desctxt231='Inverse hyperbolic tangent.';
	var desctxt232='The function calculates the angle in the Euclidean plane, given in radians, between the positive x axis and the ray to the point (x, y) ≠ (0, 0).';
	var desctxt233='Calculates the length of the hypotenuse of a right-angle triangle. The function avoids problems that occur when squaring very large or very small numbers.';
	var desctxt234='Calculates log(1+x). The function log1p(x) is more accurate than log(1+x) for small values of x.';
	var desctxt235='Returns the sign of a real number.';
	//end
	
	
	
	//14/2/2023 start
	
	var desctxt236='toInt8:Expression returning a number or a string with the decimal representation of a number. Binary, octal, and hexadecimal representations of numbers are not supported. Leading zeroes are stripped. SELECT toInt64(nan), toInt32(32), toInt16(\'16\'), toInt8(8.8)';
	var desctxt237='toInt16:Expression returning a number or a string with the decimal representation of a number. Binary, octal, and hexadecimal representations of numbers are not supported. Leading zeroes are stripped. SELECT toInt64(nan), toInt32(32), toInt16(\'16\'), toInt8(8.8)';
	var desctxt238='toInt32:Expression returning a number or a string with the decimal representation of a number. Binary, octal, and hexadecimal representations of numbers are not supported. Leading zeroes are stripped. SELECT toInt64(nan), toInt32(32), toInt16(\'16\'), toInt8(8.8)';
	var desctxt239='toInt64:Expression returning a number or a string with the decimal representation of a number. Binary, octal, and hexadecimal representations of numbers are not supported. Leading zeroes are stripped. SELECT toInt64(nan), toInt32(32), toInt16(\'16\'), toInt8(8.8)';
	var desctxt240='toInt128:Expression returning a number or a string with the decimal representation of a number. Binary, octal, and hexadecimal representations of numbers are not supported. Leading zeroes are stripped. SELECT toInt64(nan), toInt32(32), toInt16(\'16\'), toInt8(8.8)';
	var desctxt241='toInt256:Expression returning a number or a string with the decimal representation of a number. Binary, octal, and hexadecimal representations of numbers are not supported. Leading zeroes are stripped. SELECT toInt64(nan), toInt32(32), toInt16(\'16\'), toInt8(8.8)';
	var desctxt242='toDate:Converts the argument to the Date data type. If the value is outside the range, toDate returns the border values supported by Date. If the argument has Date type, borders of Date are taken into account. SELECT now() AS x, toDate(x)';
	var desctxt243='parseDateTimeBestEffortOrZero:Same as for parseDateTimeBestEffort except that it returns zero date or zero date time when it encounters a date format that cannot be processed. parseDateTimeBestEffort(time_string [, time_zone])';
	var desctxt244='toString:Functions for converting between numbers, strings (but not fixed strings), dates, and dates with times. All these functions accept one argument. SELECT now() AS now_local, toString(now(), \'Asia/Yekaterinburg\') AS now_yekat;';
	
	//14/2/2023 end
	
	
	
	//12/04/2023//
	
	//string
	var desctxt245='substring(s, offset, length), mid(s, offset, length), substr(s, offset, length)Returns a substring starting with the byte from the ‘offset’ index that is ‘length’ bytes long. Character indexing starts from one (as in standard SQL).';
		
	var desctxt246='empty:Checks whether the input string is empty. A string is considered non-empty if it contains at least one byte, even if this is a space or a null byte. Returns 1 for an empty string or 0 for a non-empty string.';
	var desctxt247='notEmpty:Checks whether the input string is non-empty. A string is considered non-empty if it contains at least one byte, even if this is a space or a null byte. Returns 1 for a non-empty string or 0 for an empty string string.';
	var desctxt248='concat:Concatenates the strings listed in the arguments, without a separator.';
	var desctxt249='base64Encode(s):Encodes ‘s’ FixedString or String into base64.';
	var desctxt250='base64Decode(s):Decode base64-encoded FixedString or String ‘s’ into original string. In case of failure raises an exception.';
	var desctxt251='endsWith(s, suffix):Returns whether to end with the specified suffix. Returns 1 if the string ends with the specified suffix, otherwise it returns 0.';
    var desctxt252='startsWith(str, prefix):Returns 1 whether string starts with the specified prefix, otherwise it returns 0.';
	var desctxt253='trim:Removes all specified characters from the start or end of a string. By default removes all consecutive occurrences of common whitespace (ASCII character 32) from both ends of a string.';
	var desctxt254='trimLeft:Removes all consecutive occurrences of common whitespace (ASCII character 32) from the beginning of a string. It does not remove other kinds of whitespace characters (tab, no-break space, etc.).';
	var desctxt255='trimRight:Removes all consecutive occurrences of common whitespace (ASCII character 32) from the end of a string. It does not remove other kinds of whitespace characters (tab, no-break space, etc.).';
	var desctxt256='trimBoth:Removes all consecutive occurrences of common whitespace (ASCII character 32) from both ends of a string. It does not remove other kinds of whitespace characters (tab, no-break space, etc.).';
	var desctxt257= 'concatWithSeparator:Returns the concatenation strings separated by string separator. If any of the argument values is NULL, the function returns NULL.'+
	'<br>Function: concatWithSeparator(sep, expr1, expr2, expr3...)';
		
	//json-string
	var desctxt258='isValidJSON(json):Checks that passed string is a valid json.'+
	    '<br>Example:-'+
		'<br>1)SELECT isValidJSON("{"a": "hello", "b": [-100, 200.0, 300]}") = 1 '+
		'<br>2)SELECT isValidJSON("not a json") = 0 ';	
	var desctxt259='JSONHas(json[, indices_or_keys]…):If the value exists in the JSON document, 1 will be returned. If the value does not exist, 0 will be returned.'+
		'<br>Example:-'+
		'<br>1)SELECT JSONHas("{"a": "hello", "b": [-100, 200.0, 300]}", "b") = 1'+
		'<br>2)SELECT JSONHas("{"a": "hello", "b": [-100, 200.0, 300]}", "b", 4) = 0';		
	var desctxt260='JSONLength(json[, indices_or_keys]…):Return the length of a JSON array or a JSON object.'+
		'<br>Example:-'+
		'<br>1)SELECT JSONLength("{"a": "hello", "b": [-100, 200.0, 300]}", "b") = 3'+
		'<br>2)SELECT JSONLength("{"a": "hello", "b": [-100, 200.0, 300]}") = 2';						
	var desctxt261='JSONType(json[, indices_or_keys]…):Return the type of a JSON value.'+
		'<br>Example:-'+
		'<br>1)SELECT JSONType("{"a": "hello", "b": [-100, 200.0, 300]}") = "Object"'+
		'<br>2)SELECT JSONType("{"a": "hello", "b": [-100, 200.0, 300]}", "a") = "String"';						
	var desctxt262='JSONExtractKeysAndValues(json[, indices_or_keys…], Value_type):Parses key-value pairs from a JSON where the values are of the given ClickHouse data type.'+
	'<br>Example:-'+
	'<br>SELECT JSONExtractKeysAndValues("{"x": {"a": 5, "b": 7, "c": 11}}", "x", "Int8") = [("a",5),("b",7),("c",11)];';				
	var desctxt263='JSONExtractKeys:Parses a JSON string and extracts the keys.'+
		'<br>Example:-'+
		'<br>JSONExtractKeys(json[, a, b, c...])';		
	var desctxt264='JSON_EXISTS(json, path):If the value exists in the JSON document, 1 will be returned.'+
		'<br>Example:-'+
		'<br>1)SELECT JSON_EXISTS("{"hello":1}", "$.hello");'+
		'<br>2)SELECT JSON_EXISTS("{"hello":{"world":1}}", "$.hello.world");';
				
	
	var desctxt265='splitByChar(separator, s[, max_substrings]):Splits a string into substrings separated by a specified character. It uses a constant string separator which consists of exactly one character.'+
		'<br>Example:-'+
		'<br>splitByChar(separator, s[, max_substrings]))';
	var desctxt266='splitByWhitespace(s[, max_substrings]):Splits a string into substrings separated by whitespace characters. Returns an array of selected substrings.';
	
	//mathematical
	var desctxt267='floor(x[, N]):Returns the largest round number that is less than or equal to x. A round number is a multiple of 1/10N, or the nearest number of the appropriate data type if 1 / 10N isn’t exact. ';
	var desctxt268='ceil(x[, N]), ceiling(x[, N]):Returns the smallest round number that is greater than or equal to x. In every other way, it is the same as the floor function.';
	var desctxt269='trunc(x[, N]), truncate(x[, N]):Returns the round number with largest absolute value that has an absolute value less than or equal to x‘s. In every other way, it is the same as the ’floor’ function.';
	var desctxt270='round(x[, N]):Rounds a value to a specified number of decimal places.';
	var desctxt271='roundBankers:Rounds a number to a specified decimal position. If the rounding number is halfway between two numbers, the function uses banker’s rounding.'+
		'<br>Bankers rounding is a method of rounding fractional numbers. When the rounding number is halfway between two numbers, its rounded to the nearest even digit at the specified decimal position. For example: 3.5 rounds up to 4, 2.5 rounds down to 2.;';
	
	//map-String
	var desctxt272='map:Arranges key:value pairs into Map(key, value) data type.';
	var desctxt273='mapFromArrays:Merges an Array of keys and an Array of values into a Map(key, value). Notice that the second argument could also be a Map, thus it is casted to an Array when executing.';	
	var desctxt274='mapAdd:Collect all the keys and sum corresponding values.';	
	var desctxt275='mapSubtract:Collect all the keys and subtract corresponding values.';
	var desctxt276='mapContains:Determines whether the map contains the key parameter.';	
	var desctxt277='mapKeys:Returns all keys from the map parameter.';
	var desctxt278='mapValues:Returns all values from the map parameter.';
	
	//arithmetic-mathematical
	var desctxt279='plus(a, b), a + b operator:Calculates the sum of the numbers. You can also add integer numbers with a date or date and time. In the case of a date, adding an integer means adding the corresponding number of days.';
	var desctxt280='minus(a, b), a - b operator:Calculates the difference. The result is always signed.';
	var desctxt281='multiply(a, b), a * b operator:Calculates the product of the numbers.';
	var desctxt282='divide(a, b), a / b operator:Calculates the quotient of the numbers. The result type is always a floating-point type. It is not integer division. For integer division, use the ‘intDiv’ function. When dividing by zero you get ‘inf’, ‘-inf’, or ‘nan’.';
	var desctxt283='modulo(a, b), a % b operator:Calculates the remainder when dividing a by b. The result type is an integer if both inputs are integers.';
	var desctxt284='negate(a), -a operator:Calculates a number with the reverse sign. The result is always signed.';
	var desctxt285='abs(a):Calculates the absolute value of the number (a). That is, if a \< 0, it returns -a. For unsigned types it does not do anything. For signed integer types, it returns an unsigned number.';
	var desctxt286='gcd(a, b):Returns the greatest common divisor of the numbers. An exception is thrown when dividing by zero or when dividing a minimal negative number by minus one.';
	var desctxt287='lcm(a, b):Returns the least common multiple of the numbers. An exception is thrown when dividing by zero or when dividing a minimal negative number by minus one.';
	var desctxt288='max2:Compares two values and returns the maximum. The returned value is converted to Float64.';
	var desctxt289='min2:Compares two values and returns the minimum. The returned value is converted to Float64.';
	//logical-mathematical
	var desctxt290='and:Calculates the result of the logical conjunction between two or more values. Corresponds to Logical AND Operator.';
	var desctxt291='or:Calculates the result of the logical disjunction between two or more values. Corresponds to Logical OR Operator.';
	var desctxt292='not:Calculates the result of the logical negation of the value. Corresponds to Logical Negation Operator.';
	var desctxt293='xor:Calculates the result of the logical exclusive disjunction between two or more values. For more than two values the function works as if it calculates XOR of the first two values and then uses the result with the next value to calculate XOR and so on.';
	
	
	//array-string
	var desctxt294='emptyArrayString:Accepts zero arguments and returns an empty array of the appropriate type.';	
	var desctxt295='emptyArrayToSingle:Accepts an empty array and returns a one-element array that is equal to the default value.';	
	var desctxt296='range(end), range([start, ] end [, step]):Returns an array of numbers from start to end - 1 by step. The supported types are UInt8, UInt16, UInt32, UInt64, Int8, Int16, Int32, Int64.';	
	var desctxt297='array(x1, …), operator [x1, …]:Creates an array from the function arguments. The arguments must be constants and have types that have the smallest common type. At least one argument must be passed, because otherwise it isn’t clear which type of array to create.';	
	var desctxt298='arrayConcat:Combines arrays passed as arguments.';	
	var desctxt299='has(arr, elem):Checks whether the ‘arr’ array has the ‘elem’ element. Returns 0 if the element is not in the array, or 1 if it is.';	
	var desctxt300='hasAll:Checks whether one array is a subset of another.';
	var desctxt301='hasAny:Checks whether two arrays have intersection by some elements.';
	var desctxt302='hasSubstr:Checks whether all the elements of array2 appear in array1 in the same exact order. Therefore, the function will return 1, if and only if array1 = prefix + array2 + suffix.';
	var desctxt303='indexOf(arr, x):Returns the index of the first ‘x’ element (starting from 1) if it is in the array, or 0 if it is not.';		
	var desctxt304='arrayMin:Returns the minimum of elements in the source array.';		
	var desctxt305='arrayMax:Returns the maximum of elements in the source array.';		
	var desctxt306='arraySum:Returns the sum of elements in the source array.';		
	var desctxt307='arrayAvg:Returns the average of elements in the source array.';		
	var desctxt308='arrayProduct:Multiplies elements of an array.';		
	
	
	//type conversion-generic conversion
	var desctxt309='CAST(x, T):Converts an input value to the specified data type. Unlike the reinterpret function, CAST tries to present the same value using the new data type. If the conversion can not be done then an exception is raised.'+	
	'<br>Sytax :'+
	'<br>CAST(x, T)'+	
	'<br>CAST(x AS t)'+
	'<br>x::t'+
	'<br>x — A value to convert. May be of any type. T — The name of the target data type. String. t — The target data type.';
	
	var desctxt310='accurateCast(x, T):Converts x to the T data type. The difference from cast(x, T) is that accurateCast does not allow overflow of numeric types during cast if type value x does not fit the bounds of type T. For example, accurateCast(-1, UInt8) throws an exception.';		
	
	var desctxt311='toInterval(Year|Quarter|Month|Week|Day|Hour|Minute|Second):Converts a Number type argument to an Interval data type.'+		
	'<br>Sytax :'+
	'<br>toIntervalSecond(number)'+	
	'<br>toIntervalMinute(number)'+	
	'<br>toIntervalHour(number)'+	
	'<br>toIntervalDay(number)'+
	'<br>toIntervalWeek(number)'+	
	'<br>toIntervalMonth(number)'+
	'<br>toIntervalQuarter(number)'+	
	'<br>toIntervalYear(number)';
	
	
	
	
	
	
	
	
	
//	var desctxt312='';			
//	var desctxt313='';			
//	var desctxt314='';			
//	var desctxt315='';			
//	var desctxt316='';			
		
		
		
	//@rn 08/05/21
	
	
	var langToolspopup = ace.require("ace/ext/language_tools");
	//var beautify = ace.require("ace/ext/beautify"); // get reference to extension
	var editorpopup = ace.edit("filtervaluepopup");
	editorpopup.setTheme("ace/theme/twilight");
	// editor.session.setMode("ace/mode/sql");
	//editor.session.setMode("ace/mode/clickhouse_FoldMode");
	//editor.session.setMode("ace/mode/clickhouse_highlight_rules");
	//beautify.beautify(editor.session);
	editorpopup.session.setMode("ace/mode/clickhouse");
	editorpopup.session.setMode("ace/mode/clickhouse_highlight_rules");
	editorpopup.setOptions({
		enableBasicAutocompletion: true,
		enableLiveAutocompletion: true,
		enableSnippets: true
	});

	var fileidpopup =  $("#fileid").val();
	var rhymeCompleterpopup = {
	        getCompletions: function(editor, session, pos, prefix, callback) {
	            if (prefix.length === 0) { callback(null, []); return }
	            $.getJSON(
	                "/cafe-bot/menu/filterproperties/editorJsonData?path=" + prefix+"&fileid="+fileidpopup,
	                function(wordList) {
	                    // wordList like [{"word":"flow","freq":24,"score":300,"flags":"bc","syllables":"1"}]
	                    callback(null, wordList.map(function(ea) 
	                    		{
	                    	//alert("ea.word-"+ea.word);
	                        return {name: ea.word, value: ea.word, score: ea.score, meta:  ea.datatype+" :DBcolumn"}
	                    }));
	                })
	        }
	    }
	langToolspopup.addCompleter(rhymeCompleterpopup);



	var file={
			'id':'',
			'name':''
	}
	var dashtitleList=[];
	var inputID = "";
	
	
	
		$(document).ready(function() 
		{
			
			getColumnlist();
			getFormulalist();
			getRegexList();
			var flagpage = $("#flagpage").val();
			//alert("flagpage______"+flagpage);
			
			if (flagpage ==0) 
			{
			
			var eddata =  editor.getValue();
			console.log("eddata---"+eddata);
			if (eddata !="")
			{
				editorpopup.setValue(eddata);	
			}
			
			}
			else 
			{
				var id= $("#inputID").val(); 
				var eddata = $("input[name='"+id+"']").val();
				editorpopup.setValue(eddata);	
			}
			
			
			
			
			  $('#datetimepicker_').datetimepicker({
			      format:'DD/MM/YYYY HH:mm:ss',
			      useCurrent: false,
			      keepOpen: true, 
			      inline: false, 
			      debug: true,
			        showClose: false,
			     /*   icons: {
			            close: 'fa fa-check',
			            color: 'black'
			        }*/

			     
			})
			  $('#datetimepicker_').data("DateTimePicker").show();
			
			  
			
		});


		function getColumnlist()
		 {
			 //alert("id="+$("#fileidschema").val());
			var fileidpop = $("#fileid").val();
			console.log("editorpopup fileid--"+fileid);
			 var counter = 0;
			 $
				.ajax(  
						{
							type : "GET",
							contentType : "application/json",
							url : "./filterproperties/expressionreadEditorpopup?fileid="+fileidpop,
							dataType : 'json',
						}).success(function(data) 
								{
							console.log("data----"+data);
							if(data != ''){		
							//var li ="<ul style='list-style: none;text-align: left;margin: 0px;padding: 0px;padding-bottom: 0px;background: #1c1b1b;' role='listbox' tabindex='0'> ";
							var li ="";
							for(column of  data)
							{
						
							//	li +='<li style="cursor: pointer;"  ondblclick="inputEditorvalue(\''+column.id+'\',\''+column.formulavalue+'\')" ><a> '+column.formulavalue+'</a></li>';
							
								//datatype
								
								li +='<li style="cursor: pointer;" data-placement="top" data-toggle="tooltip" title="" data-original-title="Data type : '+column.datatype+ ' Column name :'+column.formulavalue+' "  ondblclick="inputEditorvalue(\''+column.id+'\',\''+column.formulavalue+'\')" ><a> '+column.formulavalue+'</a></li>';
										//	li += '<li><a href="javascript:void(0)">PCRE2 (PHP >=7.3)</a></li>';
							
							}
							//	li += "<ul>";
							console.log("limain--"+li);
							$('#optionalColumn').html(li);	
							$('[data-toggle="tooltip"]').tooltip();
						
								}else 
								{
									$.notify("No Data Found!","info");
								}	
							//getFormulalist();	
				}).error(function() 
						{
					$.notify("Something went wrong,please try again later!","error");
					//alert("error");
				}); 
		 }

		
		
	function inputEditorvalue(id,name)
	{
		console.log("id---"+id+"::value--"+name);
		editorpopup.session.insert(editorpopup.getCursorPosition(), "["+ name+"]")
	}

function btnControl(btnvalue)
	{
	 		console.log("btnvalue---"+btnvalue);
	    	editorpopup.session.insert(editorpopup.getCursorPosition(), btnvalue)
	}
	


	function saveeditorTxt()
	{
	
		
	var flagpage = $("#flagpage").val();
	//alert("flagpage==========="+flagpage);	
	if (flagpage ==0)
	{
		var calculatedvaluet = editorpopup.getValue(); 
		console.log("calculatedvaluet---"+calculatedvaluet);
		
		// var editor = window.opener.document.getElementById("filtervalue");
		//editor = ace.edit(editor);
		//alert("editor.getCursorPosition()-------"+editor.getCursorPosition());
	  	console.log("editor.getCursorPosition()----"+editor.getCursorPosition());
	  	// comment to avoid full replace in editor 
	  	editor.setValue(calculatedvaluet);
		//uncomment for text at  cursor position
	  	//editor.session.insert(editor.getCursorPosition(), calculatedvaluet);
		
		//$('#modelinfowindow').data('kendoWindow').close();
		$('#modelinfowindow12').modal('hide');
	
	}
		else 
		{
			var id= $("#inputID").val(); 
			//alert("id====="+id);
			var calculatedvaluet = editorpopup.getValue(); 
			console.log("calculatedvaluet---"+calculatedvaluet);
			
			$("input[name='"+id+"']").val(calculatedvaluet);
			$('#modelinfowindow12_filter').modal('hide');
		}
		
	}
	
	
	
	function closepopupeditor()
	{
		
		$('#modelinfowindow12').modal('hide');
		
	}
	
	
	
	function closepopupeditor_filter ()
	{
		
		$('#modelinfowindow12_filter').modal('hide');
		
	}
	
	
	
	
	 function cleareditorTxt()
	 {
		 editorpopup.setValue("");
	 }


	 
		function getFormulalist()
		 {
			//alert("index---"+index);
			var formulaList = [];
			var formula;
			
			
			var li ="";
	
			var index=$("#selectid").val();		
			//alert("index :"+index);
			
	if (index ==0)
	{
		 $('#formulalist').html("");
	}		
	else if (index ==10)
	{
		 $('#formulalist').html("");
	}		
					
	
	//101 --aggregate function
	else if (index ==101)
		{
			formula={'name':'avg','desc':'1'};
			formulaList.push(formula);
			formula={'name':'count','desc':'2'};
			formulaList.push(formula);
			formula={'name':'max','desc':'3'};
			formulaList.push(formula);
			formula={'name':'min','desc':'4'};
			formulaList.push(formula);
			formula={'name':'sum','desc':'5'};
			formulaList.push(formula);
			formula={'name':'any','desc':'6'};
			formulaList.push(formula);
			/* 21/02/21  start */
			
			
			formula={'name':'stddevPop','desc':'7'};
			formulaList.push(formula);
			formula={'name':'stddevSamp','desc':'8'};
			formulaList.push(formula);
			formula={'name':'varSamp','desc':'9'};
			formulaList.push(formula);
			formula={'name':'covarPop','desc':'10'};
			formulaList.push(formula);
			formula={'name':'covarSamp','desc':'11'};
			formulaList.push(formula);
			formula={'name':'anyHeavy','desc':'12'};
			formulaList.push(formula);
			formula={'name':'anyLast','desc':'13'};
			formulaList.push(formula);
			formula={'name':'argMin','desc':'14'};
			formulaList.push(formula);
			formula={'name':'argMax','desc':'15'};
			formulaList.push(formula);
			formula={'name':'avgWeighted','desc':'16'};
			formulaList.push(formula);
			formula={'name':'corr','desc':'17'};
			formulaList.push(formula);
			formula={'name':'topK','desc':'18'};
			formulaList.push(formula);
			formula={'name':'topKWeighted','desc':'19'};
			formulaList.push(formula);
			formula={'name':'groupArray','desc':'20'};
			formulaList.push(formula);
			formula={'name':'groupUniqArray','desc':'21'};
			formulaList.push(formula);
			formula={'name':'groupArrayInsertAt','desc':'22'};
			formulaList.push(formula);
			formula={'name':'groupArrayMovingSum','desc':'23'};
			formulaList.push(formula);
			formula={'name':'groupArrayMovingAvg','desc':'24'};
			formulaList.push(formula);
			formula={'name':'groupArraySample','desc':'25'};
			formulaList.push(formula);
			formula={'name':'groupBitAnd','desc':'26'};
			formulaList.push(formula);
			formula={'name':'groupBitOr','desc':'27'};
			formulaList.push(formula);
			formula={'name':'groupBitXor','desc':'28'};
			formulaList.push(formula);
			formula={'name':'groupBitmap','desc':'29'};
			formulaList.push(formula);
			formula={'name':'groupBitmapAnd','desc':'30'};
			formulaList.push(formula);
			formula={'name':'groupBitmapOr','desc':'31'};
			formulaList.push(formula);
			formula={'name':'groupBitmapXor','desc':'32'};
			formulaList.push(formula);
			formula={'name':'sumWithOverflow','desc':'33'};
			formulaList.push(formula);
			formula={'name':'sumMap','desc':'34'};
			formulaList.push(formula);
			formula={'name':'minMap','desc':'35'};
			formulaList.push(formula);
			formula={'name':'maxMap','desc':'36'};
			formulaList.push(formula);
			formula={'name':'initializeAggregation','desc':'37'};
			formulaList.push(formula);
			formula={'name':'skewPop','desc':'38'};
			formulaList.push(formula);
			formula={'name':'skewSamp','desc':'39'};
			formulaList.push(formula);
			formula={'name':'kurtPop','desc':'40'};
			formulaList.push(formula);
			formula={'name':'kurtSamp','desc':'41'};
			formulaList.push(formula);
			formula={'name':'uniq','desc':'42'};
			formulaList.push(formula);
			formula={'name':'uniqExact','desc':'43'};
			formulaList.push(formula);
			formula={'name':'uniqCombined','desc':'44'};
			formulaList.push(formula);
			formula={'name':'uniqCombined64','desc':'45'};
			formulaList.push(formula);
			formula={'name':'uniqHLL12','desc':'46'};
			formulaList.push(formula);
			formula={'name':'quantile','desc':'47'};
			formulaList.push(formula);
			formula={'name':'quantiles','desc':'48'};
			formulaList.push(formula);
			formula={'name':'quantileExact','desc':'49'};
			formulaList.push(formula);
			formula={'name':'quantileExactWeighted','desc':'50'};
			formulaList.push(formula);
			formula={'name':'quantileTiming','desc':'51'};
			formulaList.push(formula);
			formula={'name':'quantileTimingWeighted','desc':'52'};
			formulaList.push(formula);
			formula={'name':'quantileDeterministic','desc':'53'};
			formulaList.push(formula);
			formula={'name':'quantileTDigest','desc':'54'};
			formulaList.push(formula);
			formula={'name':'quantileTDigestWeighted','desc':'55'};
			formulaList.push(formula);
			formula={'name':'simpleLinearRegression','desc':'56'};
			formulaList.push(formula);
			formula={'name':'stochasticLinearRegression','desc':'57'};
			formulaList.push(formula);
			formula={'name':'stochasticLogisticRegression','desc':'58'};
			formulaList.push(formula);
			formula={'name':'categoricalInformationValue ','desc':'59'};
			formulaList.push(formula);
			formula={'name':'studentTTest','desc':'60'};
			formulaList.push(formula);
			formula={'name':'welchTTest','desc':'61'};
			formulaList.push(formula);
			formula={'name':'mannWhitneyUTest','desc':'62'};
			formulaList.push(formula);
			formula={'name':'median ','desc':'63'};
			formulaList.push(formula);
			formula={'name':'rankCorr','desc':'64'};
			formulaList.push(formula);
			formula={'name':'Combinators','desc':'65'};
			formulaList.push(formula);
			formula={'name':'Parametric','desc':'66'};
			formulaList.push(formula);

			/* 21/02/21  end */
			
				//var li ="<ul style='list-style: none;text-align: left;margin: 0px;padding: 0px;padding-bottom: 0px;' role='listbox' tabindex='0'> ";
					for(formulals of  formulaList)
							{
						
						
						
		//li +='<li  style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)"  onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1)" > '+formulals.name+'</li>';
		li +='<li style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)"  ><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"  onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1)" ></i></li>';

							}
					
					//li += "</ul></li>";
					
					 //$('#formulaUl').html(li);	
					 $('#formulalist').html("");	
					 $('#formulalist').html(li);	
					 
		}	
		else if (index ==2)
		{
			//console.log("limain--"+li);
			// Date time
			formulaList = [];
			
			//li += "<li><span class='caret' style='FONT-SIZE: 12px;'>DateTime </span><ul class='nested'>";
				formula={'name':'datetime','desc':'67'};
				formulaList.push(formula);
				/* 21/02/21 start */
				/* formula={'name':'toTimeZone','desc':'toTimeZone:Convert time or date and time to the specified time zone. The time zone is an attribute of the Date/DateTime types. The internal value (number of seconds) of the table field or of the resultset\'s column does not change, the column\'s type changes and its string representation changes accordingly.:SELECT toDateTime(\'2019-01-01 00:00:00\', \'UTC\') AS time_utc,toTypeName(time_utc) AS type_utc,toInt32(time_utc) AS int32utc, toTimeZone(time_utc, \'Asia/Yekaterinburg\') AS time_yekat,toTypeName(time_yekat) AS type_yekat,toInt32(time_yekat) AS int32yekat,toTimeZone(time_utc, \'US/Samoa\') AS time_samoa,toTypeName(time_samoa) AS type_samoa,toInt32(time_samoa) AS int32samoa FORMAT Vertical'};
				formulaList.push(formula); */
				
				formula={'name':'toYear','desc':'68'};
				formulaList.push(formula);
				formula={'name':'toQuarter','desc':'69'};
				formulaList.push(formula);
				formula={'name':'toMonth','desc':'70'};
				formulaList.push(formula);
				formula={'name':'toDayOfYear','desc':'71'};
				formulaList.push(formula);
				formula={'name':'toDayOfMonth','desc':'72'};
				formulaList.push(formula);
				formula={'name':'toDayOfWeek','desc':'73'};
				formulaList.push(formula);
				formula={'name':'toHour','desc':'74'};
				formulaList.push(formula);
				formula={'name':'toMinute','desc':'75'};
				formulaList.push(formula);
				formula={'name':'toSecond ','desc':'76'};
				formulaList.push(formula);
				formula={'name':'toUnixTimestamp ','desc':'77'};
				formulaList.push(formula);
				formula={'name':'toStartOfYear','desc':'78'};
				formulaList.push(formula);
				formula={'name':'toStartOfISOYear','desc':'79'};
				formulaList.push(formula);
				formula={'name':'toStartOfQuarter','desc':'80'};
				formulaList.push(formula);
				formula={'name':'toStartOfMonth','desc':'81'};
				formulaList.push(formula);
				formula={'name':'toMonday','desc':'82'};
				formulaList.push(formula);
				formula={'name':'toStartOfWeek','desc':'83'};
				formulaList.push(formula);
				formula={'name':'toStartOfDay','desc':'84'};
				formulaList.push(formula);
				formula={'name':'toStartOfHour','desc':'85'};
				formulaList.push(formula);
				formula={'name':'toStartOfMinute','desc':'86'};
				formulaList.push(formula);
				formula={'name':'toStartOfSecond ','desc':'87'};
				formulaList.push(formula);
				formula={'name':'toStartOfTenMinutes','desc':'88'};
				formulaList.push(formula);
				formula={'name':'toStartOfFifteenMinutes ','desc':'89'};
				formulaList.push(formula);
				formula={'name':'toStartOfInterval','desc':'90'};
				formulaList.push(formula);
				formula={'name':'toTime','desc':'91'};
				formulaList.push(formula);
				formula={'name':'toRelativeYearNum','desc':'92'};
				formulaList.push(formula);
				formula={'name':'toRelativeQuarterNum','desc':'93'};
				formulaList.push(formula);
				formula={'name':'toRelativeMonthNum','desc':'94'};
				formulaList.push(formula);
				formula={'name':'toRelativeWeekNum','desc':'95'};
				formulaList.push(formula);
				formula={'name':'toRelativeDayNum','desc':'96'};
				formulaList.push(formula);
				formula={'name':'toRelativeHourNum','desc':'97'};
				formulaList.push(formula);
				formula={'name':'toRelativeMinuteNum','desc':'98'};
				formulaList.push(formula);
				formula={'name':'toRelativeSecondNum','desc':'99'};
				formulaList.push(formula);
				formula={'name':'toISOYear','desc':'100'};
				formulaList.push(formula);
				formula={'name':'toISOWeek','desc':'101'};
				formulaList.push(formula);
				formula={'name':'toWeek','desc':'102'};
				formulaList.push(formula);
				formula={'name':'date_trunc','desc':'103'};
				formulaList.push(formula);
				formula={'name':'unit','desc':'104'};
				formulaList.push(formula);
				formula={'name':'date_diff','desc':'105'};
				formulaList.push(formula);
				formula={'name':'date_sub ','desc':'106'};
				formulaList.push(formula);
				formula={'name':'timestamp_add','desc':'107'};
				formulaList.push(formula);
				formula={'name':'timestamp_sub','desc':'108'};
				formulaList.push(formula);
				formula={'name':'now','desc':'109'};
				formulaList.push(formula);
				formula={'name':'today','desc':'110'};
				formulaList.push(formula);
				formula={'name':'yesterday','desc':'111'};
				formulaList.push(formula);
				formula={'name':'timeSlot','desc':'112'};
				formulaList.push(formula);
				formula={'name':'toYYYYMM','desc':'113'};
				formulaList.push(formula);
				formula={'name':'toYYYYMMDD','desc':'114'};
				formulaList.push(formula);
				formula={'name':'toYYYYMMDDhhmmss','desc':'115'};
				formulaList.push(formula);
				formula={'name':'subtract','desc':'116'};
				formulaList.push(formula);
				formula={'name':'timeSlots','desc':'117'};
				formulaList.push(formula);
				formula={'name':'formatDateTime','desc':'118'};
				formulaList.push(formula);
				
				

				/* 21/02/21  end */
			
				//formulaList.push(formula);
						for(formulals of  formulaList)
								{
									//li +='<li  style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)"  onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1)" > '+formulals.name+'</li>';
							
							li +='<li style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)"  ><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"  onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1)"></i></li>';								
							//li +='<li style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)"  onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1) "><a>'+formulals.name+'</a></li>';								
							

								}
						//li += "</ul></li>";
			
						//date time end 
				        //$('#formulaUl').html(li);	
				        $('#formulalist').html("");	
						 $('#formulalist').html(li);	
		}
		else if (index ==3)
		{  //@rn 08/05/21
			formulaList = [];
			
			//li += "<li><span class='caret' style='FONT-SIZE: 12px;'>DateTime </span><ul class='nested'>";
		formula={'name':'file','desc':'120'};
		formulaList.push(formula);
		formula={'name':'merge','desc':'121'};
		formulaList.push(formula);
		formula={'name':'numbers','desc':'122'};
		formulaList.push(formula);
		formula={'name':'remote','desc':'123'};
		formulaList.push(formula);
		formula={'name':'url','desc':'124'};
		formulaList.push(formula);
		formula={'name':'mysql','desc':'125'};
		formulaList.push(formula);
		formula={'name':'postgresql','desc':'126'};
		formulaList.push(formula);
		formula={'name':'jdbc','desc':'127'};
		formulaList.push(formula);
		formula={'name':'odbc','desc':'128'};
		formulaList.push(formula);
		formula={'name':'hdfs','desc':'129'};
		formulaList.push(formula);
		formula={'name':'s3','desc':'130'};
		formulaList.push(formula);
		formula={'name':'input','desc':'131'};
		formulaList.push(formula);
		formula={'name':'generateRandom','desc':'132'};
		formulaList.push(formula);
		formula={'name':'cluster','desc':'133'};
		formulaList.push(formula);
		formula={'name':'view','desc':'134'};
		formulaList.push(formula);
		formula={'name':'null function','desc':'135'};
		formulaList.push(formula);
		
		for(formulals of  formulaList)
					{
						//li +='<li  style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)"  onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1)" > '+formulals.name+'</li>';
				li +='<li style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)"  ><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"  onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1) "></i></li>';								
					}
			//li += "</ul></li>";
	
			//date time end 
	        //$('#formulaUl').html(li);	
	        $('#formulalist').html("");	
			 $('#formulalist').html(li);	
			}
		
		 
		else if (index ==4)
		{  
			//@rn 08/05/21
			formulaList = [];
			formula={'name':'Arithmetic','desc':'136'};
			formulaList.push(formula);
			formula={'name':'Arrays','desc':'137'};
			formulaList.push(formula);
			formula={'name':'Comparison','desc':'138'};
			formulaList.push(formula);
			formula={'name':'Logical','desc':'139'};
			formulaList.push(formula);
			formula={'name':'Type Conversion','desc':'140'};
			formulaList.push(formula);
			formula={'name':'Dates and Times','desc':'141'};
			formulaList.push(formula);
			formula={'name':'Strings','desc':'142'};
			formulaList.push(formula);
			formula={'name':'For Searching in Strings','desc':'143'};
			formulaList.push(formula);
			formula={'name':'For Replacing in Strings','desc':'144'};
			formulaList.push(formula);
			formula={'name':'Conditional','desc':'145'};
			formulaList.push(formula);
			formula={'name':'Files','desc':'146'};
			formulaList.push(formula);
			formula={'name':'Mathematical','desc':'147'};
			formulaList.push(formula);
			formula={'name':'Rounding','desc':'148'};
			formulaList.push(formula);
			formula={'name':'Working with maps','desc':'149'};
			formulaList.push(formula);
			formula={'name':'Splitting and Merging Strings and Arrays','desc':'150'};
			formulaList.push(formula);
			formula={'name':'Bit','desc':'151'};
			formulaList.push(formula);
			formula={'name':'Bitmap','desc':'152'};
			formulaList.push(formula);
			formula={'name':'Hash','desc':'153'};
			formulaList.push(formula);
			formula={'name':'Pseudo-Random Numbers','desc':'154'};
			formulaList.push(formula);
			formula={'name':'Encoding','desc':'155'};
			formulaList.push(formula);
			formula={'name':'UUID','desc':'156'};
			formulaList.push(formula);
			formula={'name':'URLs','desc':'157'};
			formulaList.push(formula);
			formula={'name':'IP Addresses','desc':'158'};
			formulaList.push(formula);
			formula={'name':'JSON','desc':'159'};
			formulaList.push(formula);
			formula={'name':'External Dictionaries','desc':'160'};
			formulaList.push(formula);
			formula={'name':'Yandex.Metrica Dictionaries','desc':'161'};
			formulaList.push(formula);
			formula={'name':'IN Operator','desc':'162'};
			formulaList.push(formula);
			formula={'name':'arrayJoin','desc':'163'};
			formulaList.push(formula);
			formula={'name':'Geo','desc':'164'};
			formulaList.push(formula);
			formula={'name':'Nullable','desc':'165'};
			formulaList.push(formula);
			formula={'name':'Machine Learning','desc':'166'};
			formulaList.push(formula);
			formula={'name':'Introspection','desc':'167'};
			formulaList.push(formula);
			formula={'name':'Tuples','desc':'168'};
			formulaList.push(formula);
			formula={'name':'Encryption','desc':'169'};
			formulaList.push(formula);
			
			for(formulals of  formulaList)
			{
				//li +='<li  style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)"  onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1)" > '+formulals.name+'</li>';
		li +='<li style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)"  ><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"  onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1) "></i></li>';								
			}
			$('#formulalist').html("");	
			 $('#formulalist').html(li);	
			
		}else if (index ==5)
		{  
			//@rn 08/05/21
			formulaList = [];
			formula={'name':'Configuring an External Dictionary','desc':'170'};
			formulaList.push(formula);
			formula={'name':'Storing Dictionaries in Memory','desc':'171'};
			formulaList.push(formula);
			formula={'name':'Dictionary Updates','desc':'172'};
			formulaList.push(formula);
			formula={'name':'Sources of External Dictionaries','desc':'173'};
			formulaList.push(formula);
			formula={'name':'Dictionary Key and Fields','desc':'174'};
			formulaList.push(formula);
			formula={'name':'Hierarchical dictionaries','desc':'175'};
			formulaList.push(formula);
			formula={'name':'Polygon Dictionaries With Grids','desc':'176'};
			formulaList.push(formula);
			formula={'name':'Internal Dictionaries','desc':'177'};
			formulaList.push(formula);
			
			for(formulals of  formulaList)
			{
				//li +='<li  style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)"  onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1)" > '+formulals.name+'</li>';
		li +='<li style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)"  ><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"  onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1) "></i></li>';								
			}
			 $('#formulalist').html("");	
			 $('#formulalist').html(li);	
		}
		else if (index == 6)
		{
			formulaList = [];
			formula={'name':'UInt(8-256)','desc':'178'};
			formulaList.push(formula);
			formula={'name':'Float(32-64)','desc':'179'};
			formulaList.push(formula);
			formula={'name':'Decimal','desc':'180'};
			formulaList.push(formula);
			formula={'name':'Boolean','desc':'181'};
			formulaList.push(formula);
			formula={'name':'String','desc':'182'};
			formulaList.push(formula);
			formula={'name':'FixedString(N)','desc':'183'};
			formulaList.push(formula);
			formula={'name':'UUID','desc':'184'};
			formulaList.push(formula);
			formula={'name':'Date','desc':'185'};
			formulaList.push(formula);
			formula={'name':'DateTime','desc':'186'};
			formulaList.push(formula);
			formula={'name':'DateTime64','desc':'187'};
			formulaList.push(formula);
			formula={'name':'Enum','desc':'188'};
			formulaList.push(formula);
			formula={'name':'LowCardinality','desc':'189'};
			formulaList.push(formula);
			formula={'name':'Array(T)','desc':'190'};
			formulaList.push(formula);
			formula={'name':'AggregateFunction','desc':'191'};
			formulaList.push(formula);
			formula={'name':'Nested Data Structures','desc':'192'};
			formulaList.push(formula);
			formula={'name':'Tuple(T1 ,T2 ...)','desc':'193'};
			formulaList.push(formula);
			formula={'name':'Nullable','desc':'194'};
			formulaList.push(formula);
			
			formula={'name':'Multiword Type Names','desc':'197'};
			formulaList.push(formula);
			formula={'name':'Geo','desc':'198'};
			formulaList.push(formula);
			formula={'name':'Map(key ,value)','desc':'199'};
			formulaList.push(formula);
			formula={'name':'SimpleAggregateFunction','desc':'200'};
			formulaList.push(formula);

			for(formulals of  formulaList)
			{
				//li +='<li  style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)"  onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1)" > '+formulals.name+'</li>';
		li +='<li style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)" ><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"   onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1) "></i></li>';								
			}
			 $('#formulalist').html("");	
			 $('#formulalist').html(li);	
							
		}
		
		else if (index ==7)
		{
			formulaList = [];
			/*formula={'name':'Operators','desc':'201'};
			formulaList.push(formula);
			formula={'name':'IN Operators','desc':'202'};
			formulaList.push(formula);*/
			
			formula={'name':'if','desc':'201'};
			formulaList.push(formula);
			
			formula={'name':'multiIf','desc':'202'};
			formulaList.push(formula);
			
			for(formulals of  formulaList)
			{
				//li +='<li  style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)"  onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1)" > '+formulals.name+'</li>';
		li +='<li style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)" ><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"    onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1) "></i></li>';								
			}
			 $('#formulalist').html("");	
			 $('#formulalist').html(li);	
		}
		
		else if (index ==8)
		{
			formulaList = [];
			
			formula={'name':'e','desc':'204'};
			formulaList.push(formula);
			formula={'name':'pi','desc':'205'};
			formulaList.push(formula);
			formula={'name':'exp','desc':'206'};
			formulaList.push(formula);
			formula={'name':'log, ln','desc':'207'};
			formulaList.push(formula);
			formula={'name':'exp2','desc':'208'};
			formulaList.push(formula);
			formula={'name':'log2','desc':'209'};
			formulaList.push(formula);
			formula={'name':'exp10','desc':'210'};
			formulaList.push(formula);
			formula={'name':'log10','desc':'211'};
			formulaList.push(formula);
			formula={'name':'sqrt','desc':'212'};
			formulaList.push(formula);
			formula={'name':'cbrt','desc':'213'};
			formulaList.push(formula);
			formula={'name':'erf','desc':'214'};
			formulaList.push(formula);
			formula={'name':'erfc','desc':'215'};
			formulaList.push(formula);
			formula={'name':'lgamma','desc':'216'};
			formulaList.push(formula);
			formula={'name':'tgamma','desc':'217'};
			formulaList.push(formula);
			formula={'name':'sin','desc':'218'};
			formulaList.push(formula);
			formula={'name':'cos','desc':'219'};
			formulaList.push(formula);
			formula={'name':'tan','desc':'220'};
			formulaList.push(formula);
			formula={'name':'asin','desc':'221'};
			formulaList.push(formula);
			formula={'name':'acos','desc':'222'};
			formulaList.push(formula);
			formula={'name':'atan','desc':'223'};
			formulaList.push(formula);
			formula={'name':'pow, power','desc':'224'};
			formulaList.push(formula);
			formula={'name':'intExp2','desc':'225'};
			formulaList.push(formula);
			formula={'name':'intExp10','desc':'226'};
			formulaList.push(formula);
			formula={'name':'cosh','desc':'227'};
			formulaList.push(formula);
			formula={'name':'acosh','desc':'228'};
			formulaList.push(formula);
			formula={'name':'sinh','desc':'229'};
			formulaList.push(formula);
			formula={'name':'asinh','desc':'230'};
			formulaList.push(formula);
			formula={'name':'atanh','desc':'231'};
			formulaList.push(formula);
			formula={'name':'atan2','desc':'232'};
			formulaList.push(formula);
			formula={'name':'hypot','desc':'233'};
			formulaList.push(formula);
			formula={'name':'log1p','desc':'234'};
			formulaList.push(formula);
			formula={'name':'sign','desc':'235'};
			formulaList.push(formula);
			
			formula={'name':'floor(x[, N])','desc':'267'};
			formulaList.push(formula);
			formula={'name':'ceil(x[, N]), ceiling(x[, N])','desc':'268'};
			formulaList.push(formula);
			formula={'name':'trunc(x[, N]), truncate(x[, N])','desc':'269'};
			formulaList.push(formula);
			formula={'name':'round(x[, N])','desc':'270'};
			formulaList.push(formula);
			formula={'name':'roundBankers','desc':'271'};
			formulaList.push(formula);
			
			
			formula={'name':'plus(a, b), a + b operator','desc':'279'};
			formulaList.push(formula);
			formula={'name':'minus(a, b), a - b operator','desc':'280'};
			formulaList.push(formula);
			formula={'name':'multiply(a, b), a * b operator','desc':'281'};
			formulaList.push(formula);
			formula={'name':'divide(a, b), a / b operator','desc':'282'};
			formulaList.push(formula);
			formula={'name':'modulo(a, b), a % b operator','desc':'283'};
			formulaList.push(formula);
			formula={'name':'negate(a), -a operator','desc':'284'};
			formulaList.push(formula);
			formula={'name':'abs(a)','desc':'285'};
			formulaList.push(formula);
			formula={'name':'gcd(a, b)','desc':'286'};
			formulaList.push(formula);
			formula={'name':'lcm(a, b)','desc':'287'};
			formulaList.push(formula);
			formula={'name':'max2','desc':'288'};
			formulaList.push(formula);
			formula={'name':'min2','desc':'289'};
			formulaList.push(formula);
			formula={'name':'and','desc':'290'};
			formulaList.push(formula);
			formula={'name':'or','desc':'291'};
			formulaList.push(formula);
			formula={'name':'not','desc':'292'};
			formulaList.push(formula);
			formula={'name':'xor','desc':'293'};
			formulaList.push(formula);
			
			
			for(formulals of  formulaList)
			{
				//li +='<li  style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)"  onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1)" > '+formulals.name+'</li>';
		
		//li +='<li style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)"  onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1) "><a>'+formulals.name+'</a></li>';								
	
	li +='<li style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)" ><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"    onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1) "></i></li>';
			
			
			}
 $('#formulalist').html("");	
 $('#formulalist').html(li);	
		}
		
		else if (index ==9)
		{
			formulaList = [];
			
			formula={'name':'toInt8','desc':'236'};
			formulaList.push(formula);
			formula={'name':'toInt16','desc':'237'};
			formulaList.push(formula);
			formula={'name':'toInt32','desc':'238'};
			formulaList.push(formula);
			formula={'name':'toInt64','desc':'239'};
			formulaList.push(formula);
			formula={'name':'toInt128','desc':'240'};
			formulaList.push(formula);
			formula={'name':'toInt256','desc':'241'};
			formulaList.push(formula);
			formula={'name':'toDate','desc':'242'};
			formulaList.push(formula);
			formula={'name':'parseDateTimeBestEffortOrZero','desc':'243'};
			formulaList.push(formula);
			formula={'name':'toString','desc':'244'};
			formulaList.push(formula);
			formula={'name':'formatDateTime','desc':'245'};
			formulaList.push(formula);
			
			
			formula={'name':'CAST(x, T)','desc':'309'};
			formulaList.push(formula);
			formula={'name':'accurateCast(x, T)','desc':'310'};
			formulaList.push(formula);
			formula={'name':'toInterval(Year|Quarter|Month|Week|Day|Hour|Minute|Second)','desc':'311'};
			formulaList.push(formula);
			
			
			for(formulals of  formulaList)
			{
				//li +='<li  style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)"  onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1)" > '+formulals.name+'</li>';
		
		//li +='<li style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)"  onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1) "><a>'+formulals.name+'</a></li>';								
	
	li +='<li style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)" ><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"    onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1) "></i></li>';
			
			
			}
 $('#formulalist').html("");	
 $('#formulalist').html(li);	
		}
	
		else if(index ==1){

			formulaList = [];

					formula={'name':'avg','desc':'1'};
					formulaList.push(formula);
					formula={'name':'count','desc':'2'};
					formulaList.push(formula);
					formula={'name':'max','desc':'3'};
					formulaList.push(formula);
					formula={'name':'min','desc':'4'};
					formulaList.push(formula);
					formula={'name':'sum','desc':'5'};
					formulaList.push(formula);
					formula={'name':'any','desc':'6'};
					formulaList.push(formula);
					/* 21/02/21  start */
					
					
					formula={'name':'stddevPop','desc':'7'};
					formulaList.push(formula);
					formula={'name':'stddevSamp','desc':'8'};
					formulaList.push(formula);
					formula={'name':'varSamp','desc':'9'};
					formulaList.push(formula);
					formula={'name':'covarPop','desc':'10'};
					formulaList.push(formula);
					formula={'name':'covarSamp','desc':'11'};
					formulaList.push(formula);
					formula={'name':'anyHeavy','desc':'12'};
					formulaList.push(formula);
					formula={'name':'anyLast','desc':'13'};
					formulaList.push(formula);
					formula={'name':'argMin','desc':'14'};
					formulaList.push(formula);
					formula={'name':'argMax','desc':'15'};
					formulaList.push(formula);
					formula={'name':'avgWeighted','desc':'16'};
					formulaList.push(formula);
					formula={'name':'corr','desc':'17'};
					formulaList.push(formula);
					formula={'name':'topK','desc':'18'};
					formulaList.push(formula);
					formula={'name':'topKWeighted','desc':'19'};
					formulaList.push(formula);
					formula={'name':'groupArray','desc':'20'};
					formulaList.push(formula);
					formula={'name':'groupUniqArray','desc':'21'};
					formulaList.push(formula);
					formula={'name':'groupArrayInsertAt','desc':'22'};
					formulaList.push(formula);
					formula={'name':'groupArrayMovingSum','desc':'23'};
					formulaList.push(formula);
					formula={'name':'groupArrayMovingAvg','desc':'24'};
					formulaList.push(formula);
					formula={'name':'groupArraySample','desc':'25'};
					formulaList.push(formula);
					formula={'name':'groupBitAnd','desc':'26'};
					formulaList.push(formula);
					formula={'name':'groupBitOr','desc':'27'};
					formulaList.push(formula);
					formula={'name':'groupBitXor','desc':'28'};
					formulaList.push(formula);
					formula={'name':'groupBitmap','desc':'29'};
					formulaList.push(formula);
					formula={'name':'groupBitmapAnd','desc':'30'};
					formulaList.push(formula);
					formula={'name':'groupBitmapOr','desc':'31'};
					formulaList.push(formula);
					formula={'name':'groupBitmapXor','desc':'32'};
					formulaList.push(formula);
					formula={'name':'sumWithOverflow','desc':'33'};
					formulaList.push(formula);
					formula={'name':'sumMap','desc':'34'};
					formulaList.push(formula);
					formula={'name':'minMap','desc':'35'};
					formulaList.push(formula);
					formula={'name':'maxMap','desc':'36'};
					formulaList.push(formula);
					formula={'name':'initializeAggregation','desc':'37'};
					formulaList.push(formula);
					formula={'name':'skewPop','desc':'38'};
					formulaList.push(formula);
					formula={'name':'skewSamp','desc':'39'};
					formulaList.push(formula);
					formula={'name':'kurtPop','desc':'40'};
					formulaList.push(formula);
					formula={'name':'kurtSamp','desc':'41'};
					formulaList.push(formula);
					formula={'name':'uniq','desc':'42'};
					formulaList.push(formula);
					formula={'name':'uniqExact','desc':'43'};
					formulaList.push(formula);
					formula={'name':'uniqCombined','desc':'44'};
					formulaList.push(formula);
					formula={'name':'uniqCombined64','desc':'45'};
					formulaList.push(formula);
					formula={'name':'uniqHLL12','desc':'46'};
					formulaList.push(formula);
					formula={'name':'quantile','desc':'47'};
					formulaList.push(formula);
					formula={'name':'quantiles','desc':'48'};
					formulaList.push(formula);
					formula={'name':'quantileExact','desc':'49'};
					formulaList.push(formula);
					formula={'name':'quantileExactWeighted','desc':'50'};
					formulaList.push(formula);
					formula={'name':'quantileTiming','desc':'51'};
					formulaList.push(formula);
					formula={'name':'quantileTimingWeighted','desc':'52'};
					formulaList.push(formula);
					formula={'name':'quantileDeterministic','desc':'53'};
					formulaList.push(formula);
					formula={'name':'quantileTDigest','desc':'54'};
					formulaList.push(formula);
					formula={'name':'quantileTDigestWeighted','desc':'55'};
					formulaList.push(formula);
					formula={'name':'simpleLinearRegression','desc':'56'};
					formulaList.push(formula);
					formula={'name':'stochasticLinearRegression','desc':'57'};
					formulaList.push(formula);
					formula={'name':'stochasticLogisticRegression','desc':'58'};
					formulaList.push(formula);
					formula={'name':'categoricalInformationValue ','desc':'59'};
					formulaList.push(formula);
					formula={'name':'studentTTest','desc':'60'};
					formulaList.push(formula);
					formula={'name':'welchTTest','desc':'61'};
					formulaList.push(formula);
					formula={'name':'mannWhitneyUTest','desc':'62'};
					formulaList.push(formula);
					formula={'name':'median ','desc':'63'};
					formulaList.push(formula);
					formula={'name':'rankCorr','desc':'64'};
					formulaList.push(formula);
					formula={'name':'Combinators','desc':'65'};
					formulaList.push(formula);
					formula={'name':'Parametric','desc':'66'};
					formulaList.push(formula);

					formula={'name':'datetime','desc':'67'};
					formulaList.push(formula);
					/* 21/02/21 start */
						/* formula={'name':'toTimeZone','desc':'toTimeZone:Convert time or date and time to the specified time zone. The time zone is an attribute of the Date/DateTime types. The internal value (number of seconds) of the table field or of the resultset\'s column does not change, the column\'s type changes and its string representation changes accordingly.:SELECT toDateTime(\'2019-01-01 00:00:00\', \'UTC\') AS time_utc,toTypeName(time_utc) AS type_utc,toInt32(time_utc) AS int32utc, toTimeZone(time_utc, \'Asia/Yekaterinburg\') AS time_yekat,toTypeName(time_yekat) AS type_yekat,toInt32(time_yekat) AS int32yekat,toTimeZone(time_utc, \'US/Samoa\') AS time_samoa,toTypeName(time_samoa) AS type_samoa,toInt32(time_samoa) AS int32samoa FORMAT Vertical'};
						formulaList.push(formula); */
						
						formula={'name':'toYear','desc':'68'};
						formulaList.push(formula);
						formula={'name':'toQuarter','desc':'69'};
						formulaList.push(formula);
						formula={'name':'toMonth','desc':'70'};
						formulaList.push(formula);
						formula={'name':'toDayOfYear','desc':'71'};
						formulaList.push(formula);
						formula={'name':'toDayOfMonth','desc':'72'};
						formulaList.push(formula);
						formula={'name':'toDayOfWeek','desc':'73'};
						formulaList.push(formula);
						formula={'name':'toHour','desc':'74'};
						formulaList.push(formula);
						formula={'name':'toMinute','desc':'75'};
						formulaList.push(formula);
						formula={'name':'toSecond ','desc':'76'};
						formulaList.push(formula);
						formula={'name':'toUnixTimestamp ','desc':'77'};
						formulaList.push(formula);
						formula={'name':'toStartOfYear','desc':'78'};
						formulaList.push(formula);
						formula={'name':'toStartOfISOYear','desc':'79'};
						formulaList.push(formula);
						formula={'name':'toStartOfQuarter','desc':'80'};
						formulaList.push(formula);
						formula={'name':'toStartOfMonth','desc':'81'};
						formulaList.push(formula);
						formula={'name':'toMonday','desc':'82'};
						formulaList.push(formula);
						formula={'name':'toStartOfWeek','desc':'83'};
						formulaList.push(formula);
						formula={'name':'toStartOfDay','desc':'84'};
						formulaList.push(formula);
						formula={'name':'toStartOfHour','desc':'85'};
						formulaList.push(formula);
						formula={'name':'toStartOfMinute','desc':'86'};
						formulaList.push(formula);
						formula={'name':'toStartOfSecond ','desc':'87'};
						formulaList.push(formula);
						formula={'name':'toStartOfTenMinutes','desc':'88'};
						formulaList.push(formula);
						formula={'name':'toStartOfFifteenMinutes ','desc':'89'};
						formulaList.push(formula);
						formula={'name':'toStartOfInterval','desc':'90'};
						formulaList.push(formula);
						formula={'name':'toTime','desc':'91'};
						formulaList.push(formula);
						formula={'name':'toRelativeYearNum','desc':'92'};
						formulaList.push(formula);
						formula={'name':'toRelativeQuarterNum','desc':'93'};
						formulaList.push(formula);
						formula={'name':'toRelativeMonthNum','desc':'94'};
						formulaList.push(formula);
						formula={'name':'toRelativeWeekNum','desc':'95'};
						formulaList.push(formula);
						formula={'name':'toRelativeDayNum','desc':'96'};
						formulaList.push(formula);
						formula={'name':'toRelativeHourNum','desc':'97'};
						formulaList.push(formula);
						formula={'name':'toRelativeMinuteNum','desc':'98'};
						formulaList.push(formula);
						formula={'name':'toRelativeSecondNum','desc':'99'};
						formulaList.push(formula);
						formula={'name':'toISOYear','desc':'100'};
						formulaList.push(formula);
						formula={'name':'toISOWeek','desc':'101'};
						formulaList.push(formula);
						formula={'name':'toWeek','desc':'102'};
						formulaList.push(formula);
						formula={'name':'date_trunc','desc':'103'};
						formulaList.push(formula);
						formula={'name':'unit','desc':'104'};
						formulaList.push(formula);
						formula={'name':'date_diff','desc':'105'};
						formulaList.push(formula);
						formula={'name':'date_sub ','desc':'106'};
						formulaList.push(formula);
						formula={'name':'timestamp_add','desc':'107'};
						formulaList.push(formula);
						formula={'name':'timestamp_sub','desc':'108'};
						formulaList.push(formula);
						formula={'name':'now','desc':'109'};
						formulaList.push(formula);
						formula={'name':'today','desc':'110'};
						formulaList.push(formula);
						formula={'name':'yesterday','desc':'111'};
						formulaList.push(formula);
						formula={'name':'timeSlot','desc':'112'};
						formulaList.push(formula);
						formula={'name':'toYYYYMM','desc':'113'};
						formulaList.push(formula);
						formula={'name':'toYYYYMMDD','desc':'114'};
						formulaList.push(formula);
						formula={'name':'toYYYYMMDDhhmmss','desc':'115'};
						formulaList.push(formula);
						formula={'name':'subtract','desc':'116'};
						formulaList.push(formula);
						formula={'name':'timeSlots','desc':'117'};
						formulaList.push(formula);
						formula={'name':'formatDateTime','desc':'118'};
						formulaList.push(formula);

						formula={'name':'file','desc':'120'};
						formulaList.push(formula);
						formula={'name':'merge','desc':'121'};
						formulaList.push(formula);
						formula={'name':'numbers','desc':'122'};
						formulaList.push(formula);
						formula={'name':'remote','desc':'123'};
						formulaList.push(formula);
						formula={'name':'url','desc':'124'};
						formulaList.push(formula);
						formula={'name':'mysql','desc':'125'};
						formulaList.push(formula);
						formula={'name':'postgresql','desc':'126'};
						formulaList.push(formula);
						formula={'name':'jdbc','desc':'127'};
						formulaList.push(formula);
						formula={'name':'odbc','desc':'128'};
						formulaList.push(formula);
						formula={'name':'hdfs','desc':'129'};
						formulaList.push(formula);
						formula={'name':'s3','desc':'130'};
						formulaList.push(formula);
						formula={'name':'input','desc':'131'};
						formulaList.push(formula);
						formula={'name':'generateRandom','desc':'132'};
						formulaList.push(formula);
						formula={'name':'cluster','desc':'133'};
						formulaList.push(formula);
						formula={'name':'view','desc':'134'};
						formulaList.push(formula);
						formula={'name':'null function','desc':'135'};
						formulaList.push(formula);

						formula={'name':'Arithmetic','desc':'136'};
						formulaList.push(formula);
						formula={'name':'Arrays','desc':'137'};
						formulaList.push(formula);
						formula={'name':'Comparison','desc':'138'};
						formulaList.push(formula);
						formula={'name':'Logical','desc':'139'};
						formulaList.push(formula);
						formula={'name':'Type Conversion','desc':'140'};
						formulaList.push(formula);
						formula={'name':'Dates and Times','desc':'141'};
						formulaList.push(formula);
						formula={'name':'Strings','desc':'142'};
						formulaList.push(formula);
						formula={'name':'For Searching in Strings','desc':'143'};
						formulaList.push(formula);
						formula={'name':'For Replacing in Strings','desc':'144'};
						formulaList.push(formula);
						formula={'name':'Conditional','desc':'145'};
						formulaList.push(formula);
						formula={'name':'Files','desc':'146'};
						formulaList.push(formula);
						formula={'name':'Mathematical','desc':'147'};
						formulaList.push(formula);
						formula={'name':'Rounding','desc':'148'};
						formulaList.push(formula);
						formula={'name':'Working with maps','desc':'149'};
						formulaList.push(formula);
						formula={'name':'Splitting and Merging Strings and Arrays','desc':'150'};
						formulaList.push(formula);
						formula={'name':'Bit','desc':'151'};
						formulaList.push(formula);
						formula={'name':'Bitmap','desc':'152'};
						formulaList.push(formula);
						formula={'name':'Hash','desc':'153'};
						formulaList.push(formula);
						formula={'name':'Pseudo-Random Numbers','desc':'154'};
						formulaList.push(formula);
						formula={'name':'Encoding','desc':'155'};
						formulaList.push(formula);
						formula={'name':'UUID','desc':'156'};
						formulaList.push(formula);
						formula={'name':'URLs','desc':'157'};
						formulaList.push(formula);
						formula={'name':'IP Addresses','desc':'158'};
						formulaList.push(formula);
						formula={'name':'JSON','desc':'159'};
						formulaList.push(formula);
						formula={'name':'External Dictionaries','desc':'160'};
						formulaList.push(formula);
						formula={'name':'Yandex.Metrica Dictionaries','desc':'161'};
						formulaList.push(formula);
						formula={'name':'IN Operator','desc':'162'};
						formulaList.push(formula);
						formula={'name':'arrayJoin','desc':'163'};
						formulaList.push(formula);
						formula={'name':'Geo','desc':'164'};
						formulaList.push(formula);
						formula={'name':'Nullable','desc':'165'};
						formulaList.push(formula);
						formula={'name':'Machine Learning','desc':'166'};
						formulaList.push(formula);
						formula={'name':'Introspection','desc':'167'};
						formulaList.push(formula);
						formula={'name':'Tuples','desc':'168'};
						formulaList.push(formula);
						formula={'name':'Encryption','desc':'169'};
						formulaList.push(formula);

						formula={'name':'Configuring an External Dictionary','desc':'170'};
						formulaList.push(formula);
						formula={'name':'Storing Dictionaries in Memory','desc':'171'};
						formulaList.push(formula);
						formula={'name':'Dictionary Updates','desc':'172'};
						formulaList.push(formula);
						formula={'name':'Sources of External Dictionaries','desc':'173'};
						formulaList.push(formula);
						formula={'name':'Dictionary Key and Fields','desc':'174'};
						formulaList.push(formula);
						formula={'name':'Hierarchical dictionaries','desc':'175'};
						formulaList.push(formula);
						formula={'name':'Polygon Dictionaries With Grids','desc':'176'};
						formulaList.push(formula);
						formula={'name':'Internal Dictionaries','desc':'177'};
						formulaList.push(formula);

						formula={'name':'UInt(8-256)','desc':'178'};
						formulaList.push(formula);
						formula={'name':'Float(32-64)','desc':'179'};
						formulaList.push(formula);
						formula={'name':'Decimal','desc':'180'};
						formulaList.push(formula);
						formula={'name':'Boolean','desc':'181'};
						formulaList.push(formula);
						formula={'name':'String','desc':'182'};
						formulaList.push(formula);
						formula={'name':'FixedString(N)','desc':'183'};
						formulaList.push(formula);
						formula={'name':'UUID','desc':'184'};
						formulaList.push(formula);
						formula={'name':'Date','desc':'185'};
						formulaList.push(formula);
						formula={'name':'DateTime','desc':'186'};
						formulaList.push(formula);
						formula={'name':'DateTime64','desc':'187'};
						formulaList.push(formula);
						formula={'name':'Enum','desc':'188'};
						formulaList.push(formula);
						formula={'name':'LowCardinality','desc':'189'};
						formulaList.push(formula);
						formula={'name':'Array(T)','desc':'190'};
						formulaList.push(formula);
						formula={'name':'AggregateFunction','desc':'191'};
						formulaList.push(formula);
						formula={'name':'Nested Data Structures','desc':'192'};
						formulaList.push(formula);
						formula={'name':'Tuple(T1 ,T2 ...)','desc':'193'};
						formulaList.push(formula);
						formula={'name':'Nullable','desc':'194'};
						formulaList.push(formula);
						
						formula={'name':'Multiword Type Names','desc':'197'};
						formulaList.push(formula);
						formula={'name':'Geo','desc':'198'};
						formulaList.push(formula);
						formula={'name':'Map(key ,value)','desc':'199'};
						formulaList.push(formula);
						formula={'name':'SimpleAggregateFunction','desc':'200'};
						formulaList.push(formula);

						formula={'name':'if','desc':'201'};
						formulaList.push(formula);
						
						formula={'name':'multiIf','desc':'202'};
						formulaList.push(formula);
						
						formula={'name':'e()','desc':'204'};
						formulaList.push(formula);
						formula={'name':'pi()','desc':'205'};
						formulaList.push(formula);
						formula={'name':'exp(x)','desc':'206'};
						formulaList.push(formula);
						formula={'name':'log(x), ln(x)','desc':'207'};
						formulaList.push(formula);
						formula={'name':'exp2(x)','desc':'208'};
						formulaList.push(formula);
						formula={'name':'log2(x)','desc':'209'};
						formulaList.push(formula);
						formula={'name':'exp10(x)','desc':'210'};
						formulaList.push(formula);
						formula={'name':'log10(x)','desc':'211'};
						formulaList.push(formula);
						formula={'name':'sqrt(x)','desc':'212'};
						formulaList.push(formula);
						formula={'name':'cbrt(x)','desc':'213'};
						formulaList.push(formula);
						formula={'name':'erf(x)','desc':'214'};
						formulaList.push(formula);
						formula={'name':'erfc(x)','desc':'215'};
						formulaList.push(formula);
						formula={'name':'lgamma(x)','desc':'216'};
						formulaList.push(formula);
						formula={'name':'tgamma(x)','desc':'217'};
						formulaList.push(formula);
						formula={'name':'sin(x)','desc':'218'};
						formulaList.push(formula);
						formula={'name':'cos(x)','desc':'219'};
						formulaList.push(formula);
						formula={'name':'tan(x)','desc':'220'};
						formulaList.push(formula);
						formula={'name':'asin(x)','desc':'221'};
						formulaList.push(formula);
						formula={'name':'acos(x)','desc':'222'};
						formulaList.push(formula);
						formula={'name':'atan(x)','desc':'223'};
						formulaList.push(formula);
						formula={'name':'pow(x, y), power(x, y)','desc':'224'};
						formulaList.push(formula);
						formula={'name':'intExp2','desc':'225'};
						formulaList.push(formula);
						formula={'name':'intExp10','desc':'226'};
						formulaList.push(formula);
						formula={'name':'cosh(x)','desc':'227'};
						formulaList.push(formula);
						formula={'name':'acosh(x)','desc':'228'};
						formulaList.push(formula);
						formula={'name':'sinh(x)','desc':'229'};
						formulaList.push(formula);
						formula={'name':'asinh(x)','desc':'230'};
						formulaList.push(formula);
						formula={'name':'atanh(x)','desc':'231'};
						formulaList.push(formula);
						formula={'name':'atan2(y, x)','desc':'232'};
						formulaList.push(formula);
						formula={'name':'hypot(x, y)','desc':'233'};
						formulaList.push(formula);
						formula={'name':'log1p(x)','desc':'234'};
						formulaList.push(formula);
						formula={'name':'sign(x)','desc':'235'};
						formulaList.push(formula);
						
						formula={'name':'toInt8','desc':'236'};
						formulaList.push(formula);
						formula={'name':'toInt16','desc':'237'};
						formulaList.push(formula);
						formula={'name':'toInt32','desc':'238'};
						formulaList.push(formula);
						formula={'name':'toInt64','desc':'239'};
						formulaList.push(formula);
						formula={'name':'toInt128','desc':'240'};
						formulaList.push(formula);
						formula={'name':'toInt256','desc':'241'};
						formulaList.push(formula);
						formula={'name':'toDate','desc':'242'};
						formulaList.push(formula);
						formula={'name':'parseDateTimeBestEffortOrZero','desc':'243'};
						formulaList.push(formula);
						formula={'name':'toString','desc':'244'};
						formulaList.push(formula);
						
						formula={'name':'substring','desc':'245'};
						formulaList.push(formula);
						
						formula={'name':'empty','desc':'246'};
						formulaList.push(formula);			
						formula={'name':'notEmpty','desc':'247'};
						formulaList.push(formula);			
						formula={'name':'concat','desc':'248'};
						formulaList.push(formula);		
						formula={'name':'base64Encode(s)','desc':'249'};
						formulaList.push(formula);			
						formula={'name':'base64Decode(s)','desc':'250'};
						formulaList.push(formula);			
						formula={'name':'endsWith(s, suffix)','desc':'251'};
						formulaList.push(formula);			
						formula={'name':'startsWith(str, prefix)','desc':'252'};
						formulaList.push(formula);			
						formula={'name':'trim','desc':'253'};
						formulaList.push(formula);			
						formula={'name':'trimLeft','desc':'254'};
						formulaList.push(formula);			
						formula={'name':'trimRight','desc':'255'};
						formulaList.push(formula);			
						formula={'name':'trimBoth','desc':'256'};
						formulaList.push(formula);			
						formula={'name':'concatWithSeparator','desc':'257'};
						formulaList.push(formula);	
						formula={'name':'isValidJSON(json)','desc':'258'};
						formulaList.push(formula);			
						formula={'name':'JSONHas(json[, indices_or_keys]…)','desc':'259'};
						formulaList.push(formula);			
						formula={'name':'JSONLength(json[, indices_or_keys]…)','desc':'260'};
						formulaList.push(formula);			
						formula={'name':'JSONType(json[, indices_or_keys]…)','desc':'261'};
						formulaList.push(formula);
						formula={'name':'JSONExtractKeysAndValues(json[, indices_or_keys…], Value_type)','desc':'262'};
						formulaList.push(formula);			
						formula={'name':'JSONExtractKeys','desc':'263'};
						formulaList.push(formula);
						formula={'name':'JSON_EXISTS(json, path)','desc':'264'};
						formulaList.push(formula);	
						
						formula={'name':'splitByChar(separator, s[, max_substrings])','desc':'265'};
						formulaList.push(formula);
						formula={'name':'splitByWhitespace(s[, max_substrings])','desc':'266'};
						formulaList.push(formula);	
																		
						formula={'name':'floor(x[, N])','desc':'267'};
						formulaList.push(formula);
						formula={'name':'ceil(x[, N]), ceiling(x[, N])','desc':'268'};
						formulaList.push(formula);
						formula={'name':'trunc(x[, N]), truncate(x[, N])','desc':'269'};
						formulaList.push(formula);
						formula={'name':'round(x[, N])','desc':'270'};
						formulaList.push(formula);
						formula={'name':'roundBankers','desc':'271'};
						formulaList.push(formula);
						
						formula={'name':'map','desc':'272'};
						formulaList.push(formula);	
						formula={'name':'mapFromArrays','desc':'273'};
						formulaList.push(formula);
						formula={'name':'mapAdd','desc':'274'};
						formulaList.push(formula);
						formula={'name':'mapSubtract','desc':'275'};
						formulaList.push(formula);
						formula={'name':'mapContains','desc':'276'};
						formulaList.push(formula);
						formula={'name':'mapKeys','desc':'277'};
						formulaList.push(formula);
						formula={'name':'mapValues','desc':'278'};
						formulaList.push(formula);
												
						formula={'name':'plus(a, b), a + b operator','desc':'279'};
						formulaList.push(formula);
						formula={'name':'minus(a, b), a - b operator','desc':'280'};
						formulaList.push(formula);
						formula={'name':'multiply(a, b), a * b operator','desc':'281'};
						formulaList.push(formula);
						formula={'name':'divide(a, b), a / b operator','desc':'282'};
						formulaList.push(formula);
						formula={'name':'modulo(a, b), a % b operator','desc':'283'};
						formulaList.push(formula);
						formula={'name':'negate(a), -a operator','desc':'284'};
						formulaList.push(formula);
						formula={'name':'abs(a)','desc':'285'};
						formulaList.push(formula);
						formula={'name':'gcd(a, b)','desc':'286'};
						formulaList.push(formula);
						formula={'name':'lcm(a, b)','desc':'287'};
						formulaList.push(formula);
						formula={'name':'max2','desc':'288'};
						formulaList.push(formula);
						formula={'name':'min2','desc':'289'};
						formulaList.push(formula);
						formula={'name':'and','desc':'290'};
						formulaList.push(formula);
						formula={'name':'or','desc':'291'};
						formulaList.push(formula);
						formula={'name':'not','desc':'292'};
						formulaList.push(formula);
						formula={'name':'xor','desc':'293'};
						formulaList.push(formula);
						
						formula={'name':'emptyArrayString','desc':'294'};
						formulaList.push(formula);
						formula={'name':'emptyArrayToSingle','desc':'295'};
						formulaList.push(formula);
						formula={'name':'range(end), range([start, ] end [, step])','desc':'296'};
						formulaList.push(formula);
						formula={'name':'array(x1, …), operator [x1, …]','desc':'297'};
						formulaList.push(formula);
						formula={'name':'arrayConcat','desc':'298'};
						formulaList.push(formula);
						formula={'name':'has(arr, elem)','desc':'299'};
						formulaList.push(formula);
						formula={'name':'hasAll','desc':'300'};
						formulaList.push(formula);
						formula={'name':'hasAny','desc':'301'};
						formulaList.push(formula);
						formula={'name':'hasSubstr','desc':'302'};
						formulaList.push(formula);
						formula={'name':'indexOf(arr, x)','desc':'303'};
						formulaList.push(formula);
						formula={'name':'arrayMin','desc':'304'};
						formulaList.push(formula);
						formula={'name':'arrayMax','desc':'305'};
						formulaList.push(formula);
						formula={'name':'arraySum','desc':'306'};
						formulaList.push(formula);
						formula={'name':'arrayAvg','desc':'307'};
						formulaList.push(formula);
						formula={'name':'arrayProduct','desc':'308'};
						formulaList.push(formula);
						
						formula={'name':'CAST(x, T)','desc':'309'};
						formulaList.push(formula);
						formula={'name':'accurateCast(x, T)','desc':'310'};
						formulaList.push(formula);
						formula={'name':'toInterval(Year|Quarter|Month|Week|Day|Hour|Minute|Second)','desc':'311'};
						formulaList.push(formula);
						
						
						
						
						for(formulals of  formulaList)
						{
						//li +='<li  style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)"  onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1)" > '+formulals.name+'</li>';
						
							//li +='<li style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)"  onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1) "><a>'+formulals.name+'</a></li>';								
					
						li +='<li style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)" ><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"    onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1) "></i></li>';
						
						
						}
					$('#formulalist').html("");	
					$('#formulalist').html(li);


				}
		else if (index ==10)
		{
			formulaList = [];
			
			formula={'name':'toString','desc':'244'};
			formulaList.push(formula);			
			formula={'name':'substring','desc':'245'};
			formulaList.push(formula);			
			formula={'name':'empty','desc':'246'};
			formulaList.push(formula);			
			formula={'name':'notEmpty','desc':'247'};
			formulaList.push(formula);			
			formula={'name':'concat','desc':'248'};
			formulaList.push(formula);		
			formula={'name':'base64Encode(s)','desc':'249'};
			formulaList.push(formula);			
			formula={'name':'base64Decode(s)','desc':'250'};
			formulaList.push(formula);			
			formula={'name':'endsWith(s, suffix)','desc':'251'};
			formulaList.push(formula);			
			formula={'name':'startsWith(str, prefix)','desc':'252'};
			formulaList.push(formula);			
			formula={'name':'trim','desc':'253'};
			formulaList.push(formula);			
			formula={'name':'trimLeft','desc':'254'};
			formulaList.push(formula);			
			formula={'name':'trimRight','desc':'255'};
			formulaList.push(formula);			
			formula={'name':'trimBoth','desc':'256'};
			formulaList.push(formula);			
			formula={'name':'concatWithSeparator','desc':'257'};
			formulaList.push(formula);		
			
			formula={'name':'isValidJSON(json)','desc':'258'};
			formulaList.push(formula);			
			formula={'name':'JSONHas(json[, indices_or_keys]…)','desc':'259'};
			formulaList.push(formula);			
			formula={'name':'JSONLength(json[, indices_or_keys]…)','desc':'260'};
			formulaList.push(formula);			
			formula={'name':'JSONType(json[, indices_or_keys]…)','desc':'261'};
			formulaList.push(formula);
			formula={'name':'JSONExtractKeysAndValues(json[, indices_or_keys…], Value_type)','desc':'262'};
			formulaList.push(formula);			
			formula={'name':'JSONExtractKeys','desc':'263'};
			formulaList.push(formula);
			formula={'name':'JSON_EXISTS(json, path)','desc':'264'};
			formulaList.push(formula);			
			formula={'name':'splitByChar(separator, s[, max_substrings])','desc':'265'};
			formulaList.push(formula);
			formula={'name':'splitByWhitespace(s[, max_substrings])','desc':'266'};
			formulaList.push(formula);	
			
			formula={'name':'map','desc':'272'};
			formulaList.push(formula);	
			formula={'name':'mapFromArrays','desc':'273'};
			formulaList.push(formula);
			formula={'name':'mapAdd','desc':'274'};
			formulaList.push(formula);
			formula={'name':'mapSubtract','desc':'275'};
			formulaList.push(formula);
			formula={'name':'mapContains','desc':'276'};
			formulaList.push(formula);
			formula={'name':'mapKeys','desc':'277'};
			formulaList.push(formula);
			formula={'name':'mapValues','desc':'278'};
			formulaList.push(formula);
			
			formula={'name':'emptyArrayString','desc':'294'};
			formulaList.push(formula);
			formula={'name':'emptyArrayToSingle','desc':'295'};
			formulaList.push(formula);
			formula={'name':'range(end), range([start, ] end [, step])','desc':'296'};
			formulaList.push(formula);
			formula={'name':'array(x1, …), operator [x1, …]','desc':'297'};
			formulaList.push(formula);
			formula={'name':'arrayConcat','desc':'298'};
			formulaList.push(formula);
			formula={'name':'has(arr, elem)','desc':'299'};
			formulaList.push(formula);
			formula={'name':'hasAll','desc':'300'};
			formulaList.push(formula);
			formula={'name':'hasAny','desc':'301'};
			formulaList.push(formula);
			formula={'name':'hasSubstr','desc':'302'};
			formulaList.push(formula);
			formula={'name':'indexOf(arr, x)','desc':'303'};
			formulaList.push(formula);
			formula={'name':'arrayMin','desc':'304'};
			formulaList.push(formula);
			formula={'name':'arrayMax','desc':'305'};
			formulaList.push(formula);
			formula={'name':'arraySum','desc':'306'};
			formulaList.push(formula);
			formula={'name':'arrayAvg','desc':'307'};
			formulaList.push(formula);
			formula={'name':'arrayProduct','desc':'308'};
			formulaList.push(formula);
			
					
			
			for(formulals of  formulaList)
			{
				//li +='<li  style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)"  onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1)" > '+formulals.name+'</li>';
		
		//li +='<li style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)"  onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1) "><a>'+formulals.name+'</a></li>';								
	
	          li +='<li style="cursor: pointer;"  ondblclick="formulaSelect(\''+formulals.name+'\',\''+formulals.desc+'\',2)" ><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"    onclick="formulahelp(\''+formulals.name+'\',\''+formulals.desc+'\',1) "></i></li>';
			
			
			}
			 $('#formulalist').html("");	
			 $('#formulalist').html(li);
			
		}
	//$('[data-toggle="tooltip"]').tooltip();
							
		 }	

		var clickflag= 1 ;
		
		function formulahelp(name,desc,flag)
		{
			var flagclick= 0;
			if (flag=="1")
			{
				console.log("name --desc---"+name+"--"+desc);
				if (name=="datetime1")
				{
					
				    $('#helpcontent').html("");
					$('#helpcontent').html($("#desctxt"+desc));
					
					//$('#formuladesc').html($("#desctxt"+desc));
				}
				else 
				{
					console.log("name --"+name);
					//$('#formuladesc').html("");
					var varname = "desctxt"+desc;
					//console.log("varname-----"+varname);
					//$('#formuladesc').html(eval(varname));
					
					//$('#refrence').show();
				    //$('#explanations').hide();
				    $('#helpcontent').html("");
					$('#helpcontent').html(eval(varname));
					
				}
				flagclick= 1;
			}
		  setTimeout(function()
				  {
			  if (flagclick ==1)
			  {
				  $('#refrence').show();
				  $('#explanations').hide(); 
			  }
		  }, 200);	
			

		}		
		
		function formulaSelect(name,desc,flag)
		{
			var flagclick= 0;
			if (name=="datetime")
				{
					editorpopup.session.insert(editorpopup.getCursorPosition(),name+"()")
				}
				else 
				{
					editorpopup.session.insert(editorpopup.getCursorPosition(),name+"()")
				}
				
				 flagclick= 2;

		}		
		
		
		  function myFunction() 
		  {
			    $('#refrence').show();
			    $('#explanations').hide();
			  }
		
		
		  function closehelp() {
			    $('#refrence').hide();
			    $('#explanations').show();
			  }	
		
		
		  $(function(){

			    $('#formulasearch').keyup(function(){

			        var searchText = $(this).val();

			        $('#formulalist > li').each(function()
			        		{

			            var currentLiText = $(this).text(),
			                showCurrentLi = currentLiText.toUpperCase().indexOf(searchText.toUpperCase()) !== -1;

			            $(this).toggle(showCurrentLi);

			        });     
			    });

			    $('#columnsearch').keyup(function(){

			        var searchText = $(this).val();

			        $('#optionalColumn > li').each(function(){

			            var currentLiText = $(this).text(),
			                showCurrentLi = currentLiText.toUpperCase().indexOf(searchText.toUpperCase()) !== -1;

			            $(this).toggle(showCurrentLi);

			        });     
			    });
			    
			    
				  
				  $('#patternsearch').keyup(function(){
				
				        var searchText = $(this).val();
				        //alert("searchText"+searchText)
				        var count =0;
				        $('#regexlist > li').each(function()
				        		{

				        	
				         var currentLiText = $("#span_"+count).text(),
				            //var currentLiText = $(this).text(),
				         showCurrentLi = currentLiText.toUpperCase().indexOf(searchText.toUpperCase()) !== -1;
				         count = count +1;
				            $(this).toggle(showCurrentLi);

				        });     
				    });
			    
			    
			    
			});		  
		  
	




		  
//regex pattern//

			var regxtxt1 ='Matchs whole numbers alone';
			var regxtxt2 ='Matches Decimal numbers alone.';
			var regxtxt3 ='Matches Whole numbers as well as decimal numbers.';
			var regxtxt4 ='Matches Whole numbers, Decimals as well as negative numbers.';
			var regxtxt5 ='Matches integer numbers, floats and fractions of floats. I.e. "2", "-3.456", "3/4", "2.1/8".';
			var regxtxt6 ='Matches Alphanumeric characters without space.';
			var regxtxt7 ='Matches Alphanumeric characters with space alone.';
			var regxtxt8 ='Matches common email Ids.';
			var regxtxt9 ='Matches common email Ids.';
			var regxtxt10 ='Matches Email addresses. Ignores email addresses containing IP addresses (which are actually valid)';
			var regxtxt11 ='Should have 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and be at least 8 characters long';
			var regxtxt12 ='Should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long';
			var regxtxt13 ='that may include _ and – having a length of 3 to 16 characters –';
			var regxtxt14='Matches a URL with its Protocol. Allows only http/https';
			var regxtxt15='Matches a Url with optional protocol (http/https).';
			var regxtxt16='Matches valid IPv4 addresses.';
			var regxtxt17='Matches a IPv6 Address. Does not support port numbers/IP address in a URL.';
			var regxtxt18='Validates both IPv4 and IPv6 addresses.';
			var regxtxt19='Date Format YYYY-MM-dd using separator -';
			var regxtxt20='Date Format dd-MM-YYYY using separators - or . or /';
			var regxtxt21='Date Format dd-mmm-YYYY using separators - or . or /';
			var regxtxt22='Time Format HH:MM 12-hour, optional leading 0';
			var regxtxt23='Time Format HH:MM 12-hour, optional leading 0, Meridiems (AM/PM)';
			var regxtxt24='Time Format HH:MM 24-hour with leading 0';
			var regxtxt25='Time Format HH:MM 24-hour, optional leading 0';
			var regxtxt26='Time Format HH:MM:SS 24-hour';
			var regxtxt27='group capture any HTML tag with tis regex';
			var regxtxt28='Strips Inline Javascript in a HTML Document.';
			var regxtxt29='Capture inline JS event handlers';
			var regxtxt30='Matches and validates a string containing a slug.';
			var regxtxt31='Searches a string for duplicate values.';
			var regxtxt32='Comprehensive regex for phone number validation';
			var regxtxt33='Matches a string containing a relative file path and mandatory Filename with its extension.';
			var regxtxt34='File Path with optional Filename, extension';
			var regxtxt35='Matches a string with a valid file name and a valid extension having a length of 3 characters.';

function getRegexList(indexvalue)
				 {
			
					//alert("index---"+index);
					var regexList = [];
					var formula;
					
					
					var li ="";
			
					var index=$("#selectregexid").val();		
					//alert("index :"+index);
					
					if(indexvalue==0)
					{
						index=0;
					}
					
					//$("#filtervaluepopup").val("");
					$("#patternsearch").val("");
					//$('#refrence').hide();
					
					
				//alert("index____________"+index);
				
				
			if (index ==0)
			{
				 $('#regexlist').html("");
				 regexList = [];

							regex={'name':'/^\d+$/','regx':'1'};
							regexList.push(regex);
							
							regex={'name':'/^\d*\.\d+$/','regx':'2'};
							regexList.push(regex);
							
							regex={'name':'/^\d*(\.\d+)?$/','regx':'3'};
							regexList.push(regex);

							regex={'name':'/^-?\d*(\.\d+)?$/','regx':'4'};
							regexList.push(regex);

							regex={'name':'/[-]?[0-9]+[,.]?[0-9]*([\/][0-9]+[,.]?[0-9]*)*/','regx':'5'};
							regexList.push(regex);

							regex={'name':'/^[a-zA-Z0-9]*$/','regx':'6'};
							regexList.push(regex);
							
							regex={'name':'/^[a-zA-Z0-9 ]*$/','regx':'7'};
							regexList.push(regex);		

							regex={'name':'/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/','regx':'8'};
							regexList.push(regex);
							
							regex={'name':'/^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/','regx':'9'};
							regexList.push(regex);
							
							var regex_=encodeURI('/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"\'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/');
							regex={'name':regex_,'regx':'10'};
							regexList.push(regex);
							
							/*regex={'name':'/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"\'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/','regx':'10'};
							regexList.push(regex);*/
							
							regex={'name':'/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/','regx':'11'};
							regexList.push(regex);		
							
							regex={'name':'/^[a-z0-9_-]{3,16}$/','regx':'12'};
							regexList.push(regex);

							regex={'name':'/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/ ','regx':'13'};
							regexList.push(regex);

							regex={'name':'/(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ ','regx':'14'};
							regexList.push(regex);

							regex={'name':'/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/ ','regx':'15'};
							regexList.push(regex);

							regex={'name':'/(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/','regx':'16'};
							regexList.push(regex);

							regex={'name':'/((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/','regx':'17'};
							regexList.push(regex);

							regex={'name':'/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/','regx':'18'};
							regexList.push(regex);

							regex={'name':'/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/','regx':'19'};
							regexList.push(regex);

							regex={'name':'/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/','regx':'20'};
							regexList.push(regex);
							
							regex={'name':'/^(0?[1-9]|1[0-2]):[0-5][0-9]$/','regx':'21'};
							regexList.push(regex);

							regex={'name':'/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/','regx':'22'};
							regexList.push(regex);

							regex={'name':'/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/','regx':'23'};
							regexList.push(regex);

							regex={'name':'/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/','regx':'24'};
							regexList.push(regex);
							
							regex={'name':'/(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/','regx':'25'};
							regexList.push(regex);

							regex={'name':'/<\/?[\w\s]*>|<.+[\W]>/','regx':'26'};
							regexList.push(regex);

							regex={'name':'/\bon\w+=\S+(?=.*>)/','regx':'27'};
							regexList.push(regex);

							var resg= encodeURI(/(?:<[^>]+\s)(on\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/)
							regex={'name':resg,'regx':'28'};
							regexList.push(regex);

							regex={'name':'/^[a-z0-9]+(?:-[a-z0-9]+)*$/','regx':'29'};
							regexList.push(regex);


							regex={'name':'/(\b\w+\b)(?=.*\b\1\b)/','regx':'30'};
							regexList.push(regex);

							regex={'name':'/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/','regx':'31'};
							regexList.push(regex);

							regex={'name':'/((\/|\\|\/\/|https?:\\\\|https?:\/\/)[a-z0-9 _@\-^!#$%&+={}.\/\\\[\]]+)+\.[a-z]+$/','regx':'32'};
							regexList.push(regex);

							regex={'name':'/^(.+)/([^/]+)$/','regx':'33'};
							regexList.push(regex);

							regex={'name':'/^[\w,\s-]+\.[A-Za-z]{3}$/','regx':'34'};
							regexList.push(regex);

							var spancount =0;


							for(formulals of  regexList)
							{
								//alert("--------"+formulals.regx);
								
								var regid = 0;
								
								if (formulals.regx == undefined)
								{
									regid = "31";
								}
								else 
								{
									regid = formulals.regx;
								}
								
								var varname = "regxtxt"+regid;		
								
								if (varname == "regxtxtundefined")
								{
									varname = "regxtxt199";
								}
								
								//alert("varname------------------"+varname);
								//alert("varname------------------"+eval(varname));
								
								li +='<li style="cursor: pointer;"  ondblclick="formulaRegxSelect(\''+escape(formulals.name)+'\',\''+formulals.regx+'\',2)"  ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"  onclick="formulaRegxhelp(\''+formulals.name+'\',\''+formulals.regx+'\',1)" ></i></li>';
								
								spancount = spancount+1;	
							
							}



							// for(formulals of  regexList)
							// 	{
								
							// 	var varname = "desctxt"+formulals.desc;
							// 	 li +='<li style="cursor: pointer;"  onclick="formulaSelect(\''+escape(formulals.name)+'\',\''+formulals.desc+'\')" ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a></li>';
							// 	spancount = spancount+1;								
							// 	}

							$('#regexlist').html("");	
							$('#regexlist').html(li);
			}		
					
			
			
				else if(index ==1){

					regexList = [];

							regex={'name':'/^\d+$/','regx':'1'};
							regexList.push(regex);
							
							regex={'name':'/^\d*\.\d+$/','regx':'2'};
							regexList.push(regex);
							
							regex={'name':'/^\d*(\.\d+)?$/','regx':'3'};
							regexList.push(regex);

							regex={'name':'/^-?\d*(\.\d+)?$/','regx':'4'};
							regexList.push(regex);

							regex={'name':'/[-]?[0-9]+[,.]?[0-9]*([\/][0-9]+[,.]?[0-9]*)*/','regx':'5'};
							regexList.push(regex);


							for(formulals of  regexList)
							{
								
								var varname = "regxtxt"+formulals.regx;							
								li +='<li style="cursor: pointer;"  ondblclick="formulaRegxSelect(\''+escape(formulals.name)+'\',\''+formulals.regx+'\',2)"  ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"  onclick="formulaRegxhelp(\''+formulals.name+'\',\''+formulals.regx+'\',1)" ></i></li>';
								spancount = spancount+1;	
							}

							
								
								// for(formulals of  regexList)
								// {
								
								// li +='<li style="cursor: pointer;"  onclick="formulaSelect(\''+escape(formulals.name)+'\',\''+formulals.desc+'\')" ><a>'+formulals.name+'</a></li>';
															
								// }

							$('#regexlist').html("");	
							$('#regexlist').html(li);


						}
						else if(index ==2){

					regexList = [];

							regex={'name':'/^[a-zA-Z0-9]*$/','regx':'6'};
							regexList.push(regex);
							
							regex={'name':'/^[a-zA-Z0-9 ]*$/','regx':'7'};
							regexList.push(regex);		
							
							var spancount =0;

							for(formulals of  regexList)
							{
								var varname = "regxtxt"+formulals.regx;						
								li +='<li style="cursor: pointer;"  ondblclick="formulaRegxSelect(\''+escape(formulals.name)+'\',\''+formulals.regx+'\',2)"  ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"  onclick="formulaRegxhelp(\''+formulals.name+'\',\''+formulals.regx+'\',1)" ></i></li>';
								spancount = spancount+1;	
							}


							// for(formulals of  regexList)
							// 	{
								
							// 	var varname = "desctxt"+formulals.desc;
								
							// 	li +='<li style="cursor: pointer;"  onclick="formulaSelect(\''+escape(formulals.name)+'\',\''+formulals.desc+'\')" ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a></li>';
							// 	spancount = spancount+1;
								
							// 	}
								
								
							$('#regexlist').html("");	
							$('#regexlist').html(li);


						}
						else if(index ==3){

					regexList = [];

							regex={'name':'/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/','regx':'8'};
							regexList.push(regex);
							
							regex={'name':'/^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/','regx':'9'};
							regexList.push(regex);		
							
							var spancount =0;

							for(formulals of  regexList)
							{
								var varname = "regxtxt"+formulals.regx;					
								li +='<li style="cursor: pointer;"  ondblclick="formulaRegxSelect(\''+escape(formulals.name)+'\',\''+formulals.regx+'\',2)"  ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"  onclick="formulaRegxhelp(\''+formulals.name+'\',\''+formulals.regx+'\',1)" ></i></li>';
								spancount = spancount+1;	
							}
							// for(formulals of  regexList)
							// 	{
								
							// 	var varname = "desctxt"+formulals.desc;
								
							// 	li +='<li style="cursor: pointer;"  onclick="formulaSelect(\''+escape(formulals.name)+'\',\''+formulals.desc+'\')" ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a></li>';
							// 	spancount = spancount+1;
								
							// 	}
							$('#regexlist').html("");	
							$('#regexlist').html(li);


						}
						else if(index ==4){

					regexList = [];
					var regex_=encodeURI('/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"\'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/');
					regex={'name':regex_,'regx':'10'};
					regexList.push(regex);
							
							regex={'name':'/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/','regx':'11'};
							regexList.push(regex);		
							
							var spancount =0;

							for(formulals of  regexList)
							{
								var varname = "regxtxt"+formulals.regx;					
								li +='<li style="cursor: pointer;"  ondblclick="formulaRegxSelect(\''+escape(formulals.name)+'\',\''+formulals.regx+'\',2)"  ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"  onclick="formulaRegxhelp(\''+formulals.name+'\',\''+formulals.regx+'\',1)" ></i></li>';
								spancount = spancount+1;	
							}
							// for(formulals of  regexList)
							// 	{
								
							// 	var varname = "desctxt"+formulals.desc;
								
							// 	li +='<li style="cursor: pointer;"  onclick="formulaSelect(\''+escape(formulals.name)+'\',\''+formulals.desc+'\')" ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a></li>';
							// 	spancount = spancount+1;
								
							// 	}
							$('#regexlist').html("");	
							$('#regexlist').html(li);


						}
						else if(index ==5){

					regexList = [];

							regex={'name':'/^[a-z0-9_-]{3,16}$/','regx':'12'};
							regexList.push(regex);
						
							var spancount =0;

							for(formulals of  regexList)
							{
								var varname = "regxtxt"+formulals.regx;						
								li +='<li style="cursor: pointer;"  ondblclick="formulaRegxSelect(\''+escape(formulals.name)+'\',\''+formulals.regx+'\',2)"  ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"  onclick="formulaRegxhelp(\''+formulals.name+'\',\''+formulals.regx+'\',1)" ></i></li>';
								spancount = spancount+1;	
							}
							// for(formulals of  regexList)
							// 	{
								
							// 	var varname = "desctxt"+formulals.desc;
								
							// 	li +='<li style="cursor: pointer;"  onclick="formulaSelect(\''+escape(formulals.name)+'\',\''+formulals.desc+'\')" ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a></li>';
							// 	spancount = spancount+1;
								
							// 	}
							$('#regexlist').html("");	
							$('#regexlist').html(li);


						}
						else if(index ==6){

					regexList = [];

							regex={'name':'/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#()?&//=]*)/ ','regx':'13'};
							regexList.push(regex);

							regex={'name':'/(https?:\/\/)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ ','regx':'14'};
							regexList.push(regex);
							var spancount =0;

							for(formulals of  regexList)
							{
								var varname = "regxtxt"+formulals.regx;								
								li +='<li style="cursor: pointer;"  ondblclick="formulaRegxSelect(\''+escape(formulals.name)+'\',\''+formulals.regx+'\',2)"  ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"  onclick="formulaRegxhelp(\''+formulals.name+'\',\''+formulals.regx+'\',1)" ></i></li>';
								spancount = spancount+1;	
							}
							// for(formulals of  regexList)
							// 	{
								
							// 	var varname = "desctxt"+formulals.desc;
								
							// 	li +='<li style="cursor: pointer;"  onclick="formulaSelect(\''+escape(formulals.name)+'\',\''+formulals.desc+'\')" ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a></li>';
							// 	spancount = spancount+1;
								
							// 	}
							$('#regexlist').html("");	
							$('#regexlist').html(li);


						}
							else if(index ==7){

					regexList = [];

							regex={'name':'/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/ ','regx':'15'};
							regexList.push(regex);

							regex={'name':'/(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/','regx':'16'};
							regexList.push(regex);

							regex={'name':'/((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/','regx':'17'};
							regexList.push(regex);

							var spancount =0;

							for(formulals of  regexList)
							{
								var varname = "regxtxt"+formulals.regx;					
								li +='<li style="cursor: pointer;"  ondblclick="formulaRegxSelect(\''+escape(formulals.name)+'\',\''+formulals.regx+'\',2)"  ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"  onclick="formulaRegxhelp(\''+formulals.name+'\',\''+formulals.regx+'\',1)" ></i></li>';
								spancount = spancount+1;	
							}
							// for(formulals of  regexList)
							// 	{
								
							// 	var varname = "desctxt"+formulals.desc;
								
							// 	li +='<li style="cursor: pointer;"  onclick="formulaSelect(\''+escape(formulals.name)+'\',\''+formulals.desc+'\')" ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a></li>';
							// 	spancount = spancount+1;
								
							// 	}
							$('#regexlist').html("");	
							$('#regexlist').html(li);


						}
							else if(index ==8){

					regexList = [];

							regex={'name':'/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/','regx':'18'};
							regexList.push(regex);

							regex={'name':'/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/','regx':'19'};
							regexList.push(regex);

							regex={'name':'/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/','regx':'20'};
							regexList.push(regex);
							
							var spancount =0;

							for(formulals of  regexList)
							{
								var varname = "regxtxt"+formulals.regx;				
								li +='<li style="cursor: pointer;"  ondblclick="formulaRegxSelect(\''+escape(formulals.name)+'\',\''+formulals.regx+'\',2)"  ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"  onclick="formulaRegxhelp(\''+formulals.name+'\',\''+formulals.regx+'\',1)" ></i></li>';
								spancount = spancount+1;	
							}
							// for(formulals of  regexList)
							// 	{
								
							// 	var varname = "desctxt"+formulals.desc;
								
							// 	li +='<li style="cursor: pointer;"  onclick="formulaSelect(\''+escape(formulals.name)+'\',\''+formulals.desc+'\')" ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a></li>';
							// 	spancount = spancount+1;
								
							// 	}
							$('#regexlist').html("");	
							$('#regexlist').html(li);


						}
						else if(index ==9){

					regexList = [];

							regex={'name':'/^(0?[1-9]|1[0-2]):[0-5][0-9]$/','regx':'21'};
							regexList.push(regex);

							regex={'name':'/((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/','regx':'22'};
							regexList.push(regex);

							regex={'name':'/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/','regx':'23'};
							regexList.push(regex);

							regex={'name':'/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/','regx':'24'};
							regexList.push(regex);
							
							regex={'name':'/(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/','regx':'25'};
							regexList.push(regex);
							var spancount =0;

							for(formulals of  regexList)
							{
								var varname = "regxtxt"+formulals.regx;							
								li +='<li style="cursor: pointer;"  ondblclick="formulaRegxSelect(\''+escape(formulals.name)+'\',\''+formulals.regx+'\',2)"  ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"  onclick="formulaRegxhelp(\''+formulals.name+'\',\''+formulals.regx+'\',1)" ></i></li>';
								spancount = spancount+1;	
							}
							// for(formulals of  regexList)
							// 	{
								
							// 	var varname = "desctxt"+formulals.desc;
								
							// 	li +='<li style="cursor: pointer;"  onclick="formulaSelect(\''+escape(formulals.name)+'\',\''+formulals.desc+'\')" ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a></li>';
							// 	spancount = spancount+1;
								
							// 	}
							$('#regexlist').html("");	
							$('#regexlist').html(li);


						}
						else if(index ==10){

					regexList = [];

							regex={'name':'/<\/?[\w\s]*>|<.+[\W]>/','regx':'26'};
							regexList.push(regex);

							
							var spancount =0;

							for(formulals of  regexList)
							{
								var varname = "regxtxt"+formulals.regx;						
								li +='<li style="cursor: pointer;"  ondblclick="formulaRegxSelect(\''+escape(formulals.name)+'\',\''+formulals.regx+'\',2)"  ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"  onclick="formulaRegxhelp(\''+formulals.name+'\',\''+formulals.regx+'\',1)" ></i></li>';
								spancount = spancount+1;	
							}
							// for(formulals of  regexList)
							// 	{
								
							// 	var varname = "desctxt"+formulals.desc;
								
							// 	li +='<li style="cursor: pointer;"  onclick="formulaSelect(\''+escape(formulals.name)+'\',\''+formulals.desc+'\')" ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a></li>';
							// 	spancount = spancount+1;
								
							// 	}
							$('#regexlist').html("");	
							$('#regexlist').html(li);


						}
						else if(index ==11){

					regexList = [];

							regex={'name':'/\bon\w+=\S+(?=.*>)/','regx':'27'};
							regexList.push(regex);

							 var resg= encodeURI(/(?:<[^>]+\s)(on\S+)=["']?((?:.(?!["']?\s+(?:\S+)=|[>"']))+.)["']?/)
							regex={'name':resg,'regx':'28'};
							regexList.push(regex);

							
							var spancount =0;
							for(formulals of  regexList)
							{
								var varname = "regxtxt"+formulals.regx;						
								li +='<li style="cursor: pointer;"  ondblclick="formulaRegxSelect(\''+escape(formulals.name)+'\',\''+formulals.regx+'\',2)"  ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"  onclick="formulaRegxhelp(\''+formulals.name+'\',\''+formulals.regx+'\',1)" ></i></li>';
								spancount = spancount+1;	
							}
							// for(formulals of  regexList)
							// 	{
								
							// 	var varname = "desctxt"+formulals.desc;
								
							// 	li +='<li style="cursor: pointer;"  onclick="formulaSelect(\''+escape(formulals.name)+'\',\''+formulals.desc+'\')" ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a></li>';
							// 	spancount = spancount+1;
								
							// 	}
							$('#regexlist').html("");	
							$('#regexlist').html(li);


						}
						else if(index ==12){

					regexList = [];

							regex={'name':'/^[a-z0-9]+(?:-[a-z0-9]+)*$/','regx':'29'};
							regexList.push(regex);

							
							var spancount =0;

							for(formulals of  regexList)
							{
								var varname = "regxtxt"+formulals.regx;				
								i +='<li style="cursor: pointer;"  ondblclick="formulaRegxSelect(\''+escape(formulals.name)+'\',\''+formulals.regx+'\',2)"  ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"  onclick="formulaRegxhelp(\''+formulals.name+'\',\''+formulals.regx+'\',1)" ></i></li>';
								spancount = spancount+1;	
							}
							// for(formulals of  regexList)
							// 	{
								
							// 	var varname = "desctxt"+formulals.desc;
								
							// 	li +='<li style="cursor: pointer;"  onclick="formulaSelect(\''+escape(formulals.name)+'\',\''+formulals.desc+'\')" ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a></li>';
							// 	spancount = spancount+1;
								
							// 	}
							$('#regexlist').html("");	
							$('#regexlist').html(li);


						}
						else if(index ==13){

					regexList = [];

							regex={'name':'/(\b\w+\b)(?=.*\b\1\b)/','regx':'30'};
							regexList.push(regex);

							
							var spancount =0;

							for(formulals of  regexList)
							{
								var varname = "regxtxt"+formulals.regx;				
								li +='<li style="cursor: pointer;"  ondblclick="formulaRegxSelect(\''+escape(formulals.name)+'\',\''+formulals.regx+'\',2)"  ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"  onclick="formulaRegxhelp(\''+formulals.name+'\',\''+formulals.regx+'\',1)" ></i></li>';
								spancount = spancount+1;	
							}
							// for(formulals of  regexList)
							// 	{
								
							// 	var varname = "desctxt"+formulals.desc;
								
							// 	li +='<li style="cursor: pointer;"  onclick="formulaSelect(\''+escape(formulals.name)+'\',\''+formulals.desc+'\')" ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a></li>';
							// 	spancount = spancount+1;
								
							// 	}
							$('#regexlist').html("");	
							$('#regexlist').html(li);


						}

							else if(index ==14){

					regexList = [];

							regex={'name':'/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/','regx':'30'};
							regexList.push(regex);

							
							var spancount =0;

							for(formulals of  regexList)
							{
								var varname = "regxtxt"+formulals.regx;							
								li +='<li style="cursor: pointer;"  ondblclick="formulaRegxSelect(\''+escape(formulals.name)+'\',\''+formulals.regx+'\',2)"  ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"  onclick="formulaRegxhelp(\''+formulals.name+'\',\''+formulals.regx+'\',1)" ></i></li>';
								spancount = spancount+1;	
							}
							// for(formulals of  regexList)
							// 	{
							
							// 	var varname = "desctxt"+formulals.desc;
								
							// 	li +='<li style="cursor: pointer;"  onclick="formulaSelect(\''+escape(formulals.name)+'\',\''+formulals.desc+'\')" ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a></li>';
							// 	spancount = spancount+1;
								
							// 	}
							$('#regexlist').html("");	
							$('#regexlist').html(li);


						}
						else if(index ==15){

					regexList = [];

							regex={'name':'/((\/|\\|\/\/|https?:\\\\|https?:\/\/)[a-z0-9 _@\-^!#$%&+={}.\/\\\[\]]+)+\.[a-z]+$/','regx':'31'};
							regexList.push(regex);

							regex={'name':'/^(.+)/([^/]+)$/','regx':'32'};
							regexList.push(regex);

							regex={'name':'/^[\w,\s-]+\.[A-Za-z]{3}$/','regx':'33'};
							regexList.push(regex);

							
							var spancount =0;

							for(formulals of  regexList)
							{
								var varname = "regxtxt"+formulals.regx;		
								li +='<li style="cursor: pointer;"  ondblclick="formulaRegxSelect(\''+escape(formulals.name)+'\',\''+formulals.regx+'\',2)"  ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a><i class="os-icon os-icon-alert-circle hover-help-icon"  onclick="formulaRegxhelp(\''+formulals.name+'\',\''+formulals.regx+'\',1)" ></i></li>';
								spancount = spancount+1;	
							}
							// for(formulals of  regexList)
							// 	{
								
							// 	var varname = "desctxt"+formulals.desc;
								
							// 	li +='<li style="cursor: pointer;"  onclick="formulaSelect(\''+escape(formulals.name)+'\',\''+formulals.desc+'\')" ><span style="display:none;" id ="span_'+spancount+'"  >'+eval(varname)+'</span><a>'+formulals.name+'</a></li>';
							// 	spancount = spancount+1;
								
							// 	}
							$('#regexlist').html("");	
							$('#regexlist').html(li);


						}
									
				 }
				 function formulaRegxSelect(name,regx,flag){
				 	var flagclick= 0;

				 	editorpopup.session.insert(editorpopup.getCursorPosition(),name+"()")


				 	flagclick= 2;

				 }	
// function formulaRegxSelect(name,desc) {
					
// 					$('#filtervaluepopup').val("["+unescape(name)+"]");
// 					$('#refrence').show();
// 					var varname = "desctxt"+desc;
// 					$('#helpcontent').html(eval(varname));
// 					// body...
// 				}

function formulaRegxhelp(name,regx,flag){
	//alert("formula")
			var flagclick= 0;
			if (flag=="1")
			{
				
				
					console.log("name --"+name);
					//$('#formuladesc').html("");
					var varname = "regxtxt"+regx;
					//console.log("varname-----"+varname);
					//$('#formuladesc').html(eval(varname));
					
					//$('#refrence').show();
				    //$('#explanations').hide();
				    $('#helpRegxcontent').html("");
					$('#helpRegxcontent').html(eval(varname));
					
				
				flagclick= 1;
			}
		  setTimeout(function()
				  {
			  //alert("flagclick::::"+flagclick)
			  if (flagclick ==1)
			  {
				  $('#regxrefrence').show();
				  $('#regxdiv').hide(); 
			  }
		  }, 200);	
			
}	



		
		
		  function closeRegxhelp() {
			    $('#regxrefrence').hide();
			    $('#regxdiv').show();
			  }

		  function clearregexTxt() 
		    {
		    	//$('#filtervaluepopup').val('');
		    	$("#patternsearch").val("");
		    	//$('#refrence').hide();
		    	
		    	getRegexList(1);
		    }


    function  setdate() {
    var date_=$("#datetimepicker_").val();
    console.log("date_"+date_);
   editorpopup.session.insert(editorpopup.getCursorPosition(),date_);
  }
    
    
    
    function setDatevalue()
    {
    	//alert("start");
    	 var date_=$("#datetimepicker_").val();
    	    console.log("date_"+date_);
        	//alert("start:::"+date_);

    	   editorpopup.session.insert(editorpopup.getCursorPosition(),date_);
    }
    
    