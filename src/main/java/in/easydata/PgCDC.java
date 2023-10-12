package in.easydata;


import java.awt.Event;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.LinkedList;
import java.util.Properties;

import in.easydata.*;

public class PgCDC {

//    public PgCDC(String server, String database, String user, String password, String publication, String slot) {
//		// TODO Auto-generated constructor stub
//	}

	public static void main(String[] args) {
        try {
        	
        	/* ***************************************************************************
        	 * 
        	 * Creating database, table and publication
        	 * ATENTION: Before, perform the settings described in README
        	 * 
        	 * ***************************************************************************

				$ psql
				  
					CREATE DATABASE test;
					
					\c test
					
					CREATE TABLE cidade (
						codigo int not null,
						data_fund date not null,
						nome text
					);
					
					ALTER TABLE cidade REPLICA IDENTITY FULL;
					
					INSERT INTO cidade VALUES (1, '1554-01-25', 'SAO PAULO'), (2, '1960-04-21', 'BRASILIA'), (3, '1565-03-01', 'RIO DE JANEIRO');
					
					CREATE PUBLICATION cidade_pub FOR TABLE cidade;

        	 * ***************************************************************************/

            // Parameters (REPLACE VALUES)

            String server = "192.168.5.20:7432"; // PostgreSQL server (host:port)
            String database = "cafebot"; // PostgreSQL database
            String user = "postgres"; // PostgreSQL username
            String password = "cafebot@2021"; // PostgreSQL password
            String publication = "cidade_pub"; // PostgreSQL publication name
            String slot = "slot_teste_cidade_pub"; // PostgreSQL slot name (OPTIONAL, DEFAUL "easy_slot_" + publication name)

            // Instantiate pgEasyReplication class

            PGEasyReplication pgEasyReplication = new PGEasyReplication(server, database, user, password, publication, slot);

            // Snapshot

//            GetSnapshotsRequest request = new GetSnapshotsRequest();
//            DataSnapshot dataSnapshot
            
            
            in.easydata.Event eventSnapshots =  pgEasyReplication.getSnapshot();
            LinkedList<String> snapshots = eventSnapshots.getData();

            System.out.println("TEST: Printing snapshot ...");

            for (String snapshot : snapshots) {
                System.out.println(snapshot);
            }

            // Initialize logical replication

            boolean slotDropIfExists = false; // Drop slot if exists (OPTIONAL, DEFAULT false)

            pgEasyReplication.initializeLogicalReplication(slotDropIfExists);

            // Making data changes

            Class.forName("org.postgresql.Driver");

            String url = "jdbc:postgresql://" + server + "/" + database;
            Properties props = new Properties();
            props.setProperty("user", user);
            props.setProperty("password", password);

            Connection conn = DriverManager.getConnection(url, props);

            if (conn != null)
                System.out.println("TEST: Connected to PostgreSQL Server");

            conn.setAutoCommit(true);
            Statement st = conn.createStatement();

            System.out.println("TEST: Changing data ...");

            st.execute("INSERT INTO x_test_sat4 VALUES ('aa', '1929-10-19', 'UBERLANDIA','bb' , 'cc' , 'dd' , 'ee' , 'ff');");
            st.execute("UPDATE x_test_sat4 SET period = '20' WHERE period = '114';");
            st.execute("UPDATE x_test_sat4 SET subject = 'TERRA DO PAO DE QUEIJO' WHERE period = '114';");
            st.execute("DELETE FROM x_test_sat4 WHERE subject = '201';");

            st.close();

            // Capture data changes

            boolean isSimpleEvent = false; // Simple JSON data change (DEFAULT is true). Set false to return details like xid, xCommitTime, numColumns, TupleType, LSN, etc.
            boolean withBeginCommit = false; // Include BEGIN and COMMIT events (DEFAULT is false).
            String outputFormat = "application/json"; // Mime type output format (DEFAULT is "application/json"). Until now, JSON is the only available option.
            Long startLSN = null; // Start LSN (DEFAULT is null). If null, get all the changes pending.

            while (true) {
                in.easydata.Event eventChanges = pgEasyReplication.readEvent(isSimpleEvent, withBeginCommit, outputFormat, startLSN); 
                // Using DEFAULT values: readEvent(), readEvent(isSimpleEvent), readEvent(isSimpleEvent, withBeginCommit)
                
                LinkedList<String> changes = eventChanges.getData();

                System.out.println("TEST: Printing data changes ...");

                for (String change : changes) {
                    System.out.println(change);
                }

                System.out.println("TEST: Last LSN: " + eventChanges.getLastLSN().toString());

                try {
                    Thread.sleep(3000); // Sleep 3 seconds
                } catch (InterruptedException ex) {
                    ex.printStackTrace();
                }

            }

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}





