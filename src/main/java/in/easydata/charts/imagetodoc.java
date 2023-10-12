package in.easydata.charts;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import org.apache.commons.io.FileUtils;


public class imagetodoc 
{
	static List<String> dataarr = new ArrayList<>() ;
	
	
	public static void main(String...s) throws Exception{
		//encode image to Base64 String
		File f = new File("C:\\Users\\valsys\\Desktop\\pie-chartb-9bf51593.jpg"); //change path of image according to you
		FileInputStream fis = new FileInputStream(f);
		byte byteArray[] = new byte[(int)f.length()];
		fis.read(byteArray);
		String imageString = Base64.getEncoder().encodeToString(byteArray);
		//decode Base64 String to image
		FileOutputStream fos = new FileOutputStream("C:\\Users\\valsys\\Desktop\\test_doc\\pie-chartb-9bf51593-copy.jpg"); //change path of image according to you
		byteArray = Base64.getDecoder().decode(imageString);
		fos.write(byteArray);
		 
		fis.close();
		fos.close();
		}
		}
	
	
	
	
	
	
	
	
	
	
	
	
	

//	 private static String inputFilePath = "C:\\Users\\valsys\\Desktop\\pie-chartb-9bf51593.jpg";
//	    private static String outputFilePath = "C:\\Users\\valsys\\Desktop\\test_doc\\pie-chartb-9bf51593-copy.jpg";
//
//	    
//	    public static void main(String[] args) throws Exception {
//	    	
//	    	fileToBase64StringConversion();
//	    }
//	    
//	    
//	    
//	    public static void fileToBase64StringConversion() throws IOException {
//	        // load file from /src/test/resources
//	        ClassLoader classLoader = getClass().getClassLoader();
//	        File inputFile = new File(classLoader
//	          .getResource(inputFilePath)
//	          .getFile());
//
//	        byte[] fileContent = FileUtils.readFileToByteArray(inputFile);
//	        String encodedString = Base64
//	          .getEncoder()
//	          .encodeToString(fileContent);
//
//	        // create output file
//	        File outputFile = new File(inputFile
//	          .getParentFile()
//	          .getAbsolutePath() + File.pathSeparator + outputFilePath);
//
//	        // decode the string and write to file
//	        byte[] decodedBytes = Base64
//	          .getDecoder()
//	          .decode(encodedString);
//	        FileUtils.writeByteArrayToFile(outputFile, decodedBytes);
//
//	        FileUtils.contentEquals(inputFile, outputFile);
//	    }
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//	 public static void main( String[] args ){
//	      imageIoWrite();
//	    }
//	     
//	    public static void imageIoWrite() {
//	         BufferedImage bImage = null;
//	         
//	         
//	         
//	         try {
//	             File initialImage = new File("C:\\Users\\valsys\\Desktop\\chart.png"); 
//	             bImage = ImageIO.read(initialImage);
//	 
//	             ImageIO.write(bImage, "png", new File("C:\\Users\\valsys\\Desktop\\chart - Copy.png"));
//	            // ImageIO.write(bImage, "jpg", new File("C://Users/Rou/Desktop/image.png"));
//	            // ImageIO.write(bImage, "bmp", new File("C://Users/Rou/Desktop/image.bmp"));
//	 
//	         } catch (IOException e) {
//	               System.out.println("Exception occured :" + e.getMessage());
//	         }
//	         System.out.println("Images were written succesfully.");
//	    }
//	
//	
//	
	
	
	
	
	
	
	
	
	
	
	
	
	
//	public static void main(String[] args) throws Exception {
//	      Path sourceFile = Paths.get("C:\\Users\\valsys\\Desktop\\chart.png");
//
//	      String newFileName = sourceFile.getFileName().toString(); 
//	      newFileName = newFileName.substring(0, newFileName.indexOf('.')) + ".docx"; 
//	      Files.move(sourceFile, sourceFile.resolveSibling(newFileName)); 
//
//	   }
	
	
	
	
	
	
	
	
	
	
	
	
//	
//	  public static void main(String[] args) throws IOException {
//	   		 String uuid = "buc" + UUID.randomUUID().toString().split("-")[0]; 
//	   		String encodstring = null;
//	   		BufferedImage image = null;
//	   		
//	           File f =  new File("C:\\Users\\valsys\\Desktop\\chart.png");
//	           
//	           
//	           
//	           
//	           FileInputStream fileInputStreamReader = new FileInputStream(f);
//	              byte[] bytes = new byte[(int)f.length()];
////	              fileInputStreamReader.read(bytes);
//	              BufferedImage img_ = ImageIO.read(fileInputStreamReader);
////		             
////		             img_.getGraphics().drawImage(img_, 0, 0, null);
//	              
//	              
//	              
//	              
//	              
//	             encodstring=encodeFileToBase64Binary(f);
//	           
//	             System.out.println("encodedfile ##############  "+encodstring);
//	             
//	   
//	             byte[] imageBytes = new sun.misc.BASE64Decoder().decodeBuffer(encodstring);
//	             
////	             byte[] imageBytes = javax.xml.bind.DatatypeConverter.parseBase64Binary(encodstring);
//	           
//	             BufferedImage img = ImageIO.read(new ByteArrayInputStream(imageBytes));
//	             
//	             int w = img.getWidth();
//	             int h = img.getHeight();
//	             System.out.println("w ##############  "+w);
//	             System.out.println("h ##############  "+h);
//	             
//	             
//	             img.getGraphics().drawImage(img, 0, 0, null);
//              Graphics g_ = img.getGraphics();
//	             
//	             g_.drawImage(img, 0, 0, null);
//	             
//	             
//	             
//	             
//	             
//	             BufferedImage newImg = new BufferedImage(img.getWidth(), img.getHeight(), BufferedImage.TYPE_3BYTE_BGR);
//	             Graphics g = newImg.getGraphics();
//	             
//	             g.drawImage(newImg, w, h, null);
//	             
//	             
//	             int w_ = newImg.getWidth();
//	             int h_ = newImg.getHeight();
//	             System.out.println("w... ##############  "+w_);
//	             System.out.println("h ....##############  "+h_);
//	             
//	             System.out.println("g ....##############  "+g);
//	             
////	             Tools.configureJAI();
////	             RenderedImage rn=Tools.loadImage(f);
//					
//					
////	             ByteArrayInputStream bis = new ByteArrayInputStream(imageBytes);
////	             image = ImageIO.read(bis);
////	             bis.close();
//	             
//	             
//	             File data = new File("C:\\Users\\valsys\\Desktop\\chart"+uuid+".docx"); 
//
//	             ImageIO.write(newImg, "jpg", data);
//
//	             System.out.println("Success..."); 
//	             
//
//	   	
//	   	            //Re-write the image with a different color space
//	   	
////	   	            BufferedImage newImg = new BufferedImage(img.getWidth(), img.getHeight(), BufferedImage.TYPE_INT_RGB);
////	   	
////	   	            newImg.getGraphics().drawImage(img, 0, 0, null);
////	   	
////	   	            ImageIO.write(newImg, "docx", data);
// 
//	             
//	       }
//     
//     
//     
//     private static String encodeFileToBase64Binary(File file){	       	
//       String encodedfile = null;
//       try {
//      	 String uuid = "buc" + UUID.randomUUID().toString().split("-")[0]; 
//           FileInputStream fileInputStreamReader = new FileInputStream(file);
//           byte[] bytes = new byte[(int)file.length()];
//           fileInputStreamReader.read(bytes);
//           encodedfile = Base64.getEncoder().encodeToString(bytes).toString();
//           
//           System.out.println("Success.. ."+encodedfile); 
//           
//           
//       } catch (FileNotFoundException e) {
//           // TODO Auto-generated catch block
//           e.printStackTrace();
//       } catch (IOException e) {
//           // TODO Auto-generated catch block
//           e.printStackTrace();
//       }
//
//       return encodedfile;
//   }
//	 
//	 
//	 
//	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	
//	public static void main(String[] args)
//    {
//		
//		File dir = new File("C:\\Users\\valsys\\Desktop\\bar-chart.png") ;
//		 try {
//			populateFilesList(dir);
//		} catch (IOException e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
//	
//			
//	}
//	
//	private static void populateFilesList(File dir) throws IOException {
//        File[] files = dir.listFiles();
//        for(File file : files){
//            if(file.isFile()) 
//            	{
//            	dataarr.add(file.getAbsolutePath());
//            	
//            	System.out.println("dataarr "+dataarr);
//            	
//            	}
//            
//        }
//	}
	
	
	
	
	
//	public static void main(String[] args) throws IOException {
//		 String uuid = "buc" + UUID.randomUUID().toString().split("-")[0]; 
//		 
//		 
//        File f =  new File("C:\\Users\\valsys\\Desktop\\chart.png");
//          String encodstring = null;
//         
//        
//         	 
//              FileInputStream fileInputStreamReader = new FileInputStream(f);
//              byte[] bytes = new byte[(int)f.length()];
//              fileInputStreamReader.read(bytes);
//              encodstring = Base64.getEncoder().encodeToString(bytes).toString();
//          
//          
//          
//          
//          System.out.println("encodedfile ##############  "+encodstring);
//          
//
//          byte[] imageBytes = new sun.misc.BASE64Decoder().decodeBuffer(encodstring);
//          
////          byte[] imageBytes = javax.xml.bind.DatatypeConverter.parseBase64Binary(encodedfile);
//        
//          BufferedImage img = ImageIO.read(new ByteArrayInputStream(imageBytes));
//          
//          
//          
//          img.getGraphics().drawImage(img, 0, 0, null);
//          
//          
//          
//          File data = new File("C:\\Users\\valsys\\Desktop\\chart"+uuid+".doc"); 
//          
////          FileOutputStream file_ = new FileOutputStream(data);  
////          FilterOutputStream filter = new FilterOutputStream(file_);  
////          
////          
////          
////          
////          filter.write(imageBytes);
////          
////
////          
////          
////          
////
////          filter.close();  
////          file_.close();  
//          System.out.println("Success..."); 
//          
//          
//
//          
//          
////          for (int i = 0; i < img.length; i++) {
//          	
//         	 
//          	
//	            //Get the specific image
//	
////	            BufferedImage image = images[i];
//	
//	 
//	
//	            //Re-write the image with a different color space
//	
//	            BufferedImage newImg = new BufferedImage(img.getWidth(), img.getHeight(), BufferedImage.TYPE_INT_RGB);
//	
//	            newImg.getGraphics().drawImage(img, 0, 0, null);
//	
//	 
//	
//	            //Write to a JPG file
//	
////	            File file = new File("C:\\Users\\Administrator\\Desktop\\Images\\" + String.format(("Image-%d.jpg"), i));
//	
//	            ImageIO.write(newImg, "JPEG", data);
//	
////	        }
//          
//          
//          
//    }
//
//    private static String encodeFileToBase64Binary(File file){
//         String encodedfile = null;
//         try {
//        	 String uuid = "buc" + UUID.randomUUID().toString().split("-")[0]; 
//             FileInputStream fileInputStreamReader = new FileInputStream(file);
//             byte[] bytes = new byte[(int)file.length()];
//             fileInputStreamReader.read(bytes);
//             encodedfile = Base64.getEncoder().encodeToString(bytes).toString();
//             
//             System.out.println("Success.. ."+encodedfile); 
//             
//             
//         } catch (FileNotFoundException e) {
//             // TODO Auto-generated catch block
//             e.printStackTrace();
//         } catch (IOException e) {
//             // TODO Auto-generated catch block
//             e.printStackTrace();
//         }
//
//         return encodedfile;
//     }
    
    
    
//	 public static void main(String args[])
//	 {
//		 Converter converter = new Converter("input.jpg");
//		// Prepare conversion options for target format DOC
//		ConvertOptions convertOptions = new FileType().fromExtension("doc").getConvertOptions();
//		// Convert to DOC format
//		converter.convert("output.doc", convertOptions); 
//		 
//		 
//	 }
    
	
//	        public static void main (String args[]) {
//	            Document document = new Document();
//	            document.addAuthor("authorname");
//	            document.addTitle("This is my pdf doc");
//	            PdfWriter.getInstance(document, new FileOutputStream("C:\\file.pdf"));
//	            document.open();
//	            Image image = Image.getInstance("C:\\img.png");
//	            document.add(image);
//	            document.close();
//	        }
//	    
    
    
    
    
    
//    public static void main(String args[])
//            throws IOException
//        {
//            // width of the image
//            int width = 963;
//      
//            // height of the image
//            int height = 640;
//      
//            // For storing image in RAM
//            BufferedImage image = null;
//      
//            // READ IMAGE
//            try {
//            	   File input_file =  new File("C:\\Users\\valsys\\Desktop\\bar-chart.png");
//      
//                // image file path create an object of
//                // BufferedImage type and pass as parameter the
//                // width,  height and image int
//                // type. TYPE_INT_ARGB means that we are
//                // representing the Alpha , Red, Green and Blue
//                // component of the image pixel using 8 bit
//                // integer value.
//      
//                image = new BufferedImage(
//                    width, height, BufferedImage.TYPE_INT_ARGB);
//      
//                // Reading input file
//                image = ImageIO.read(input_file);
//      
//                System.out.println("Reading complete.");
//            }
//            catch (IOException e) {
//                System.out.println("Error: " + e);
//            }
//      
//            // WRITE IMAGE
//            try {
//                // Output file path
//                File output_file = new File(
//                    "C:\\Users\\valsys\\Desktop\\bar-chart.png");
//      
//                // Writing to file taking type and path as
//                ImageIO.write(image, "doc", output_file);
//      
//                System.out.println("Writing complete.");
//            }
//            catch (IOException e) {
//                System.out.println("Error: " + e);
//            }
//        }
//    
//    
    
    
    
    
    
//    public static void main(String[] args) throws IOException {
//    	
//    	 
//    	
//    	        //Create a Document object
////    	
////    	        Document doc = new Document();
////    	
////    	
////    	
////    	        //Load a Word document
////    	
////    	        doc.loadFromFile("C:\\Users\\Administrator\\Desktop\\ConvertTemplate.docx");
////    	
////    	 
////    	
////    	        //Convert the whole document into individual buffered images
////    	
////    	        BufferedImage[] images = doc.saveToImages(ImageType.Bitmap);
//    	
//    	 
//    	
//    	        //Loop through the images
//    	
//    	        for (int i = 0; i < images.length; i++) {
//    	
//    	 
//    	
//    	            //Get the specific image
//    	
//    	            BufferedImage image = images[i];
//    	
//    	 
//    	
//    	            //Re-write the image with a different color space
//    	
//    	            BufferedImage newImg = new BufferedImage(image.getWidth(), image.getHeight(), BufferedImage.TYPE_INT_RGB);
//    	
//    	            newImg.getGraphics().drawImage(image, 0, 0, null);
//    	
//    	 
//    	
//    	            //Write to a JPG file
//    	
//    	            File file = new File("C:\\Users\\Administrator\\Desktop\\Images\\" + String.format(("Image-%d.jpg"), i));
//    	
//    	            ImageIO.write(newImg, "JPEG", file);
//    	
//    	        }
//    	
//    	    }
//
//    
//    
    
//	        public static void main(String[] args) throws IOException {
//	   		 String uuid = "buc" + UUID.randomUUID().toString().split("-")[0]; 
//	   		String encodstring = null;
//	   		 
//	           File f =  new File("C:\\Users\\valsys\\Desktop\\chart.png");
//	             
//	           encodstring=encodeFileToBase64Binary(f);
//	           
//	             System.out.println("encodedfile ##############  "+encodstring);
//	             
//	   
////	             byte[] imageBytes = new sun.misc.BASE64Decoder().decodeBuffer(encodstring);
//	             
//	             byte[] imageBytes = javax.xml.bind.DatatypeConverter.parseBase64Binary(encodstring);
//	           
//	             BufferedImage img = ImageIO.read(new ByteArrayInputStream(imageBytes));
//	             	             	             
//	             img.getGraphics().drawImage(img, 0, 0, null);
//	             
//	             
//	             
//	             File data = new File("C:\\Users\\valsys\\Desktop\\chart"+uuid+".docx"); 
//	             
////	             FileOutputStream file_ = new FileOutputStream(data);  
////	             FilterOutputStream filter = new FilterOutputStream(file_);               
////	             filter.write(imageBytes);
////	             filter.close();  
////	             file_.close();  
//	             System.out.println("Success..."); 
//	             
//
//	   	
//	   	            //Re-write the image with a different color space
//	   	
//	   	            BufferedImage newImg = new BufferedImage(img.getWidth(), img.getHeight(), BufferedImage.TYPE_INT_RGB);
//	   	
//	   	            newImg.getGraphics().drawImage(img, 0, 0, null);
//	   	
//	   	            ImageIO.write(newImg, "docx", data);
//    
//	             
//	       }
    
    
	        
	      
    
    
    
	
