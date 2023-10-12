package in.easydata.charts;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Base64;
import java.util.UUID;

import org.apache.commons.io.FileUtils;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.util.Units;
import org.apache.poi.xwpf.usermodel.ParagraphAlignment;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;


public class pngto_document {
	
//	public static void main( String[] args ) throws InvalidFormatException, IOException{
//		String uuid = "b-" + UUID.randomUUID().toString().split("-")[0];
//		
//		
//	
////		  XWPFDocument doc = new XWPFDocument();
////
////		    XWPFParagraph title = doc.createParagraph();    
////		    XWPFRun run = title.createRun();
////		    run.setText("Fig.1 A Natural Scene");
////		    run.setBold(true);
////		    title.setAlignment(ParagraphAlignment.CENTER);
////
////		    String imgFile = "C:\\Users\\valsys\\Desktop\\bar-chart.jpeg";
////		    FileInputStream is = new FileInputStream(imgFile);
////		    run.addBreak();
////		    run.addPicture(is, XWPFDocument.PICTURE_TYPE_JPEG, imgFile, Units.toEMU(200), Units.toEMU(200)); // 200x200 pixels
////		    is.close();
////
////		   FileOutputStream fout = new FileOutputStream(
////		            new File("C:\\Users\\valsys\\Desktop\\test_doc\\WordFile"+uuid+".docx"));
////		    doc.write(fout);
////		    fout.close();   
//		
//		
//		
//	 // Step 1: Creating a blank document
//		try {
//    XWPFDocument document = new XWPFDocument();
//
//    // Step 2: Creating a Paragraph using
//    // createParagraph() method
//    XWPFParagraph paragraph
//        = document.createParagraph();
//    XWPFRun run = paragraph.createRun();
//
//    // Step 3: Creating a File output stream of word
//    // document at the required location
//    FileOutputStream fout = new FileOutputStream(
//        new File("C:\\Users\\valsys\\Desktop\\test_doc\\WordFile"+uuid+".doc"));
//
//    // Step 4: Creating a file input stream of image by
//    // specifying its path
//    File image = new File("C:\\Users\\valsys\\Desktop\\bar-chart.jpg");
//    FileInputStream imageData
//        = new FileInputStream(image);
//
//    // Step 5: Retrieving the image file name and image
//    // type
//    int imageType = XWPFDocument.PICTURE_TYPE_JPEG;
//    String imageFileName = image.getName();
//
//    System.out.println("imageFileName   "+imageFileName);
//    
//    
//    // Step 6: Setting the width and height of the image
//    // in pixels.
//    int width = 200;
//    int height = 200;
//
//    // Step 7: Adding the picture using the addPicture()
//    // method and writing into the document
//    run.addPicture(imageData, imageType, imageFileName,
//                   Units.toEMU(width),
//                   Units.toEMU(height));
//    
//    System.out.println("imageFileName   "+imageFileName);
//    
//    document.write(fout);
//
//    // Step 8: Closing the connections
//    fout.close();
//    document.close();
//    
//    
//		}catch (Exception e) {
//			System.out.println(e);
//			// TODO: handle exception
//		}
//    
//	}
	
	
	
	 private String inputFilePath = "C:\\Users\\valsys\\Desktop\\pie-chartb-9bf51593.jpg";
	    private String outputFilePath = "C:\\Users\\valsys\\Desktop\\test_doc\\pie-chartb-9bf51593-copy.jpg";

	    
	    public void fileToBase64StringConversion() throws IOException {
	        // load file from /src/test/resources
	        ClassLoader classLoader = getClass().getClassLoader();
	        File inputFile = new File(classLoader
	          .getResource(inputFilePath)
	          .getFile());

	        byte[] fileContent = FileUtils.readFileToByteArray(inputFile);
	        String encodedString = Base64
	          .getEncoder()
	          .encodeToString(fileContent);

	        // create output file
	        File outputFile = new File(inputFile
	          .getParentFile()
	          .getAbsolutePath() + File.pathSeparator + outputFilePath);

	        // decode the string and write to file
	        byte[] decodedBytes = Base64
	          .getDecoder()
	          .decode(encodedString);
	        FileUtils.writeByteArrayToFile(outputFile, decodedBytes);

	        FileUtils.contentEquals(inputFile, outputFile);
	    }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
