package in.easydata;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;
import java.net.URL;
import java.security.KeyStore;
import java.security.cert.Certificate;
import java.security.cert.CertificateFactory;

import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.TrustManagerFactory;
import javax.net.ssl.X509TrustManager;
import javax.security.cert.CertificateException;
import javax.security.cert.X509Certificate;

public class TestSSL {
	
	
	
	public static void main(String[] args) throws Exception {
	    {
	        class InsecureTrustManager implements X509TrustManager {
	            public java.security.cert.X509Certificate[] getAcceptedIssuers1() {
	                return null;
	            }

	            public void checkServerTrusted(X509Certificate[] chain, String authType) throws CertificateException {
	                // BAD: Does not verify the certificate chain, allowing any certificate.
	            }

	            public void checkClientTrusted(X509Certificate[] chain, String authType) throws CertificateException {

	            }

				@Override
				public void checkClientTrusted(java.security.cert.X509Certificate[] arg0, String arg1)
						throws java.security.cert.CertificateException {
					// TODO Auto-generated method stub
					
				}

				@Override
				public void checkServerTrusted(java.security.cert.X509Certificate[] arg0, String arg1)
						throws java.security.cert.CertificateException {
					// TODO Auto-generated method stub
					
				}

				@Override
				public java.security.cert.X509Certificate[] getAcceptedIssuers() {
					// TODO Auto-generated method stub
					return null;
				}
	        }
	        SSLContext context = SSLContext.getInstance("TLS");
	        TrustManager[] trustManager = new TrustManager[] { new InsecureTrustManager() };
	        context.init(null, trustManager, null);
	    }
	    {
	        SSLContext context = SSLContext.getInstance("TLS");
	        File certificateFile = new File("path/to/self-signed-certificate");
	        // Create a `KeyStore` with default type
	        KeyStore keyStore = KeyStore.getInstance(KeyStore.getDefaultType());
	        // `keyStore` is initially empty
	        keyStore.load(null, null);
	        Certificate generatedCertificate;
	        try (InputStream cert = new FileInputStream(certificateFile)) {
	            generatedCertificate =CertificateFactory.getInstance("X509")
	                    .generateCertificate(cert);
	        }
	        // Add the self-signed certificate to the key store
	        keyStore.setCertificateEntry(certificateFile.getName(), generatedCertificate);
	        // Get default `TrustManagerFactory`
	        TrustManagerFactory tmf = TrustManagerFactory.getInstance(TrustManagerFactory.getDefaultAlgorithm());
	        // Use it with our key store that trusts our self-signed certificate
	        tmf.init(keyStore);
	        TrustManager[] trustManagers = tmf.getTrustManagers();
	        context.init(null, trustManagers, null);
	        // GOOD, we are not using a custom `TrustManager` but instead have
	        // added the self-signed certificate we want to trust to the key
	        // store. Note, the `trustManagers` will **only** trust this one
	        // certificate.
	        
	        URL url = new URL("https://devops.cafebot.ai/api/v1/dags?limit=100&only_active=true");
	        HttpsURLConnection conn = (HttpsURLConnection) url.openConnection();
	        conn.setSSLSocketFactory(context.getSocketFactory());
	    }
	}

}
