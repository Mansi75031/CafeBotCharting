package in.easydata;

	import java.util.logging.FileHandler;

// Java program to demonstrate
	// Logger.log(Level level, String msg, Object[] param1)

import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.logging.SimpleFormatter;
import java.io.IOException;
import java.util.function.Supplier;
public class Logging_GFG {

	public static void main(String[] args) throws SecurityException, IOException
		{

			// Create a Logger
			Logger logger
				= Logger.getLogger(
						Logging_GFG.class.getName());

			// log messages using
			// log(Level level, String msg, Object[] param1)
			logger.log(Level.INFO, "logging: {0} {1}",
					new Object[] { "parameter1", "parameter2" });
			logger.log(Level.WARNING, "logging: {0} {1} {2}",
					new Object[] { "p1", "p2", "p3" ,"p4" });
			
			
			
			
			
			 Supplier<String> StrSupplier
	            = () -> new String("Logger messages");
			
			
	            logger.log(Level.SEVERE,
	                    StrSupplier);
			
	            logger.log(Level.SEVERE,
	                    new RuntimeException("Error"),
	                    StrSupplier);
	            
	            
	            
	            
	            
	            
	            FileHandler fileHandler = new FileHandler("status.log");
	            logger.addHandler(fileHandler);
	            
	            FileHandler handler
	            = new FileHandler("C:\\Users\\valsys\\Desktop\\New Text Document.txt");
	        handler.setFormatter(new SimpleFormatter());
	  
	        // Add file handler as
	        // handler of logs
	        logger.addHandler(handler);
	  
	        // set Logger level()
	        logger.setLevel(Level.FINER);
	        logger.exiting(Logging_GFG.class.getName(),
	        		Logging_GFG.class.getMethods()[0].getName(),
                    new String("Java is Platform Independent"));
	            
	        
	        
	      
	        
	        logger.warning("This is a warning!");
//	            Log Level (in descending order)	Use
//	            
//	            SEVERE	   serious failure
//	            WARNING	   warning message, a potential problem
//	            INFO	   general runtime information
//	            CONFIG	   configuration information
//	            FINE	   general developer information (tracing messages)
//	            FINER	   detailed developer information (tracing messages)
//	            FINEST	   highly detailed developer information(tracing messages)
//	            OFF	       turn off logging for all levels (capture nothing)
//	            ALL	       turn on logging for all levels (capture everything)
	            
	           
		}
	

}
