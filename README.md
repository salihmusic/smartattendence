GoogleSheet: https://docs.google.com/spreadsheets/d/1Yolk2i68bfeKrakdJD3ow-OT0HpYd6dJv-4rOYBEOA0/edit#gid=0

# smartattendence
Smart Attendence System using RFID based embedded system


**1. INTRODUCTION**

**1.1 Overview**

The purpose of implementing an RFID-based smart attendance system using
NodeMCU and Firebase is to create an efficient and automated method for recording
attendance in various settings, such as schools, colleges, or workplaces. This project
combines Radio Frequency Identification (RFID) technology, which enables
contactless identification, with the capabilities of NodeMCU, an IoT development
board, and Firebase, a real-time database platform.
The significance of this project lies in the numerous advantages it offers over
traditional attendance tracking methods. By utilizing RFID tags, individuals can be
uniquely identified without the need for physical contact or manual input. This not
only saves time but also reduces errors and eliminates the hassle of traditional
methods, such as paper-based attendance sheets or barcode scanning.
By integrating NodeMCU, an ESP8266-based microcontroller board, the project
enables the RFID reader to connect to the internet, allowing for real-time data
transfer and remote monitoring. NodeMCU acts as a bridge between the RFID
reader and Firebase, facilitating the seamless transmission of attendance records to
the cloud-based database.
Firebase, with its robust real-time database capabilities, provides a secure and
scalable solution for storing attendance data. It allows authorized users to access
attendance records from anywhere, making it convenient for administrators,
teachers, or employers to monitor attendance and generate reports. Additionally,
Firebase's real-time synchronization ensures that attendance records are instantly
updated across all devices connected to the system.
The implementation of this RFID-based smart attendance system using NodeMCU
and Firebase offers several benefits, including:
1. Efficiency: The system automates the attendance recording process, reducing
the time and effort required for manual attendance tracking.
2. Accuracy: RFID technology provides accurate identification, minimizing the
risk of errors associated with manual data entry.
3. Real-time Monitoring: With NodeMCU and Firebase, administrators can
access attendance records in real time from any device with an internet
connection, facilitating prompt decision-making and monitoring.
4. Scalability: The system can be easily scaled to accommodate a large number
of users, making it suitable for organizations of different sizes.
5. Data Security: Firebase ensures secure storage and access to attendance
data, protecting it from unauthorized access or loss.



**1.2. Objectives and goal**

The objectives and goals of the project "RFID-based Smart Attendance System
using NodeMCU & Firebase" are as follows:
1. Develop a reliable and efficient attendance tracking system: The primary
objective is to create a system that accurately records attendance using RFID
technology. The system should be capable of automatically identifying
individuals through RFID tags and storing attendance data reliably.
2. Enable real-time data synchronization: Implement a mechanism to ensure
real-time synchronization of attendance data between the NodeMCU device
and the Firebase database. This allows authorized users to access up-to-date
attendance records from anywhere and facilitates prompt monitoring and
decision-making.
3. Provide a user-friendly interface for administrators: Create a user interface
that allows administrators or authorized personnel to view and manage
attendance data conveniently. The interface should provide features such as
generating attendance reports, adding or removing users, and monitoring
attendance trends.
4. Ensure scalability and flexibility: Design the system to be scalable and
adaptable to various environments, accommodating different numbers of
users and locations. The solution should be flexible enough to cater to the
unique requirements of educational institutions, workplaces, or other
organizations.
5. Enhance security and data privacy: Implement appropriate security measures
to protect attendance data from unauthorized access or tampering. The
system should ensure the privacy and confidentiality of sensitive information
while adhering to data protection regulations.
6. Evaluate system performance and accuracy: Conduct comprehensive testing
and evaluation to assess the performance, accuracy, and reliability of the
RFID-based attendance system. Identify any limitations or areas for
improvement and make necessary adjustments to enhance the system's
functionality.
7. Promote efficiency and time savings: The project aims to streamline the
attendance tracking process, eliminating manual data entry and reducing
administrative burden. The goal is to save time and resources for educational
institutions, businesses, or organizations by automating attendance
management.
8. By achieving these objectives and goals, the RFID-based smart attendance
system using NodeMCU and Firebase will provide an advanced and effective
solution for attendance tracking, benefiting both administrators and attendees
in terms of accuracy, efficiency, and convenience.


**2. REVIEW**

**2.1. RFID technology, smart attendance systems, NodeMCU, and Firebase**


RFID Technology:

  ● RFID (Radio Frequency Identification) technology utilizes radio waves for
  automatic identification and tracking of objects or individuals.
  
  ● Research has shown that RFID technology offers advantages such as
   contactless identification, fast data capture, and the ability to read multiple
  tags simultaneously.
  
  ● Studies have explored the application of RFID technology in various domains,
  including attendance systems, inventory management, supply chain tracking,
  and access control.
 
Smart Attendance Systems:

  ● Smart attendance systems leverage advanced technologies to automate and
  streamline the attendance tracking process.
  
  ● RFID-based attendance systems have gained popularity due to their speed,
  accuracy, and convenience compared to traditional methods.
  
  ● Existing research highlights the benefits of RFID-based attendance systems,
  such as reducing errors, saving time, and providing real-time data for
  monitoring and analysis.
  
  ● Some studies have focused on integrating RFID technology with other
  components like microcontrollers, databases, and cloud platforms to enhance
  the functionality and accessibility of attendance systems.
  
NodeMCU:

  NodeMCU is an open-source IoT (Internet of Things) development board
  based on the ESP8266 microcontroller.
  
  ● Research has demonstrated the versatility of NodeMCU in various IoT
  applications, including sensor data acquisition, wireless communication, and
  remote monitoring.
  
  ● Studies have highlighted the ease of programming NodeMCU using the
  Arduino IDE and its compatibility with a wide range of sensors and modules.
  
  ● NodeMCU's built-in Wi-Fi capabilities enable it to connect to the internet,
  making it suitable for projects requiring real-time data transfer and remote
  control.
  
Firebase:

  ● Firebase is a cloud-based platform provided by Google, offering real-time
  database capabilities and backend services for web and mobile applications.
  
  ● Research has emphasized Firebase's ease of use, scalability, and real-time
  synchronization features.
  
  ● Existing studies have explored the integration of Firebase with various IoT
  projects, including sensor data management, user authentication, and remote
  control applications.
  
  ● Researchers have highlighted Firebase's role in storing and retrieving data
  from IoT devices, facilitating data sharing, and enabling real-time updates
  across multiple devices.
  


**2.2. Advantages, Limitations and Application**

Advantages:

1. Contactless Identification: RFID technology enables contactless identification,
eliminating the need for physical contact between the attendee and the
system. This makes the process convenient, hygienic, and faster compared to
manual methods.

2. Fast and Accurate: RFID readers can quickly and accurately identify multiple
RFID tags in a short span of time, significantly reducing the time required to
record attendance. This improves efficiency and minimizes errors associated
with manual data entry.

3. Automation and Efficiency: RFID-based attendance systems automate the
attendance tracking process, reducing the administrative burden of manual
record-keeping and data entry. This frees up time and resources, allowing
administrators to focus on more critical tasks.

4. Real-Time Data: RFID systems can provide real-time attendance data,
enabling immediate monitoring and analysis. This facilitates prompt
decision-making and allows for timely intervention, such as identifying and
addressing attendance issues or anomalies.

5. Scalability: RFID-based systems are easily scalable, accommodating a large
number of attendees without compromising performance. Adding or removing
RFID tags is a straightforward process, making the system suitable for
organizations of different sizes.

6. Enhanced Security: RFID tags can be encrypted or programmed with unique
identification codes, providing a level of security that is difficult to replicate
with traditional attendance methods. Unauthorized duplication or alteration of
RFID tags is relatively challenging, improving data integrity and security.


Limitations:

1. Initial Cost: RFID-based attendance systems require an initial investment in
RFID readers, tags, and associated infrastructure. While the costs have
decreased over time, implementing an RFID system may still require a higher
upfront investment compared to traditional methods.

2. Hardware Limitations: The range and accuracy of RFID systems can be
affected by physical barriers, such as metal objects or interference from other
electronic devices. Adequate placement and configuration of RFID readers
are crucial to ensure optimal performance.

3. Tag Placement and Orientation: The positioning and orientation of RFID tags
on individuals may impact the read accuracy. Ensuring consistent and proper
tag placement becomes important to maintain reliable identification.

4. Privacy Concerns: RFID-based systems collect and store personal
identification information. Organizations must address privacy concerns and
ensure compliance with data protection regulations to maintain individuals'
privacy and data security.

Applications:

1. Educational Institutions: RFID-based attendance systems find wide
application in schools, colleges, and universities, simplifying the attendance
tracking process for both students and staff. They provide accurate
attendance records, facilitate monitoring, and assist in generating reports.

2. Workplaces: RFID-based attendance systems offer efficient tracking in
workplaces, improving time and attendance management. They can be
integrated with access control systems to regulate entry to secure areas and
provide employee attendance data for payroll processing.

3. Events and Conferences: RFID attendance systems are used to manage
attendee access, track session attendance, and provide real-time analytics for
event organizers. They streamline check-in processes and enable event data
analysis for improved planning.

4. Healthcare Facilities: RFID-based attendance systems are utilized in hospitals
and clinics for patient and staff attendance tracking. They enhance workflow
management, facilitate accurate billing, and help ensure compliance with
regulatory requirements.

5. Construction Sites and Industrial Settings: RFID-based attendance systems
are employed in construction sites and industrial settings to monitor the
presence and location of workers for safety and security purposes.

6. Public Transportation: RFID systems can be used for automated ticketing and
attendance tracking in public transportation systems, enabling efficient
passenger management and ensuring compliance with fare regulations.


**3. IMPLEMENTATION**
1. Set up the NodeMCU:

● Connect the NodeMCU board to a power source and ensure it has a
stable Wi-Fi connection.

● Install the Arduino IDE or a suitable programming environment for
NodeMCU.

● Configure the Wi-Fi settings in the NodeMCU code to connect to the
desired network.

● Install the necessary libraries for RFID reader communication and
Firebase integration.

2. Connect the RFID Reader:

● Connect the RFID reader module to the NodeMCU board using
suitable communication interfaces such as UART, SPI, or I2C.

● Ensure the power and ground connections are correctly made between
the RFID reader and the NodeMCU.

● Follow the specifications and pinouts of the RFID reader module to
establish the appropriate connections.

3. Configure the RFID Reader:

● Install the required RFID library compatible with the RFID reader
module in the Arduino IDE.

● Configure the communication protocol (UART, SPI, or I2C) in the RFID
reader library to communicate with the RFID reader.

● Implement functions or methods in the NodeMCU code to read the
RFID tags and extract their unique identification information.

4. Prepare and Assign RFID Tags:

● Attach or assign RFID tags to individuals whose attendance needs to
be tracked.

● Each RFID tag should have a unique identifier stored in its memory.

● Store the unique identification information associated with each
individual, such as their ID or name, in a suitable data structure or
database.

5. Set Up Firebase:

● Create a Firebase account and set up a new project.

● Configure the necessary security rules and permissions in Firebase to
ensure appropriate access control.

● Obtain the Firebase project credentials (API key, authentication token,
etc.) required for establishing a connection with the Firebase database.

6. Integrate Firebase with NodeMCU:

● Install the Firebase SDK or library compatible with NodeMCU.

● Implement functions or methods in the NodeMCU code to establish a
connection with the Firebase Real-time Database using the Firebase
project credentials.

● Configure the Firebase database structure, such as creating collections
or documents, to store the attendance data.

7. Implement RFID Tag Identification and Attendance Recording:

● Use the RFID reader library to identify and read the unique
identification information from the RFID tags.

● Associate the RFID tag's unique identifier with a specific individual or
user in the NodeMCU code.

● Implement an attendance recording algorithm or protocol that updates
the attendance status in the database based on the RFID tag data.

● Include logic to handle duplicate readings, timestamping, and data
synchronization with the Firebase database.

8. Test and Validate the System:

● Ensure all hardware connections are properly established.

● Upload the NodeMCU code to the board and verify that it runs without
errors.

● Test the system by bringing RFID tags within the range of the RFID
reader and observing the attendance data being recorded and
synchronized with the Firebase database.

● Verify the accuracy and reliability of the attendance recording process.

● Conduct thorough testing to identify and address any issues or bugs.

9. Deploy and Monitor:

● Deploy the RFID-based smart attendance system in the desired
environment, such as a school, workplace, or event venue.

● Continuously monitor the system's performance, ensuring that RFID
tag identification and attendance recording are functioning as
expected.

● Regularly check the Firebase database for attendance records,
generate reports as needed, and make any necessary adjustments or
improvements to the system based on feedback and requirements.




**4. SYSTEM IMPLEMENTATION**

![image](https://github.com/salihmusic/smartattendence/assets/66977617/7daeebc7-4a2e-4973-804e-f529977d63ab)

The code includes necessary libraries: dummy.h, SPI.h, and MFRC522.h. SPI.h is
for the SPI communication protocol, and MFRC522.h is a library specifically for the
MFRC522 RFID module.

The code defines the GPIO pin connections for the MFRC522 module. RST_PIN
refers to the pin connected to the reset line of the module, and SS_PIN refers to the
pin connected to the chip select line.

An instance of the MFRC522 class is created, named mfrc522, with the specified
SS_PIN and RST_PIN as parameters. Additionally, an MFRC522::MIFARE_Key
named key is declared for storing the authentication key.

Some variables are defined:

          ● blockNum is set to 4 initially and is used to indicate the block number
          on the RFID tag.

          ● bufferLen is set to 18, representing the length of the buffer used for
          reading data from a block.

          ● readBlockData is an array of bytes used to store the data read from a
          block.

          ● status is an instance of MFRC522::StatusCode used to store the status
          of operations.

![image](https://github.com/salihmusic/smartattendence/assets/66977617/ca3f9673-1639-40aa-bb13-6876e7138894)

The setup() function is called when the Arduino board starts. It initializes the serial
communication, SPI bus, and MFRC522 module. It also prints a message to the
serial monitor, prompting the user to scan a MIFARE 1K tag to write data.

![image](https://github.com/salihmusic/smartattendence/assets/66977617/f444ffe8-2109-481a-8f77-6e01f0c17766)

![image](https://github.com/salihmusic/smartattendence/assets/66977617/7fd0adce-ba94-487d-92d7-a59ee6872234)

The loop() function is the main execution loop of the program. It repeatedly performs
the following steps:

  ● Initializes the authentication key to 0xFF for all bytes.

  ● Checks if a new card is present on the MFRC522 reader. If not, it
  returns to the beginning of the loop.

  ● Reads the card's serial number.

  ● Prints the UID (Unique Identifier) and the type of the card to the serial
  monitor.

  ● Reads data from the serial input until a '#' character is received, and
  stores it in the buffer array.

  ● Writes the data from the buffer array to a specific block on the RFID tag
  using the WriteDataToBlock() function.

  ● Reads the data from the same block and stores it in the readBlockData
  array using the ReadDataFromBlock() function.

  ● Prints the contents of the readBlockData array to the serial monitor
  using the dumpSerial() function.

  ● Repeats the above steps for different blocks and data fields such as
  student ID, first name, last name, phone number, and address.


![image](https://github.com/salihmusic/smartattendence/assets/66977617/7dc8bd5d-a1cf-44a7-a5ef-e4d8a24e9111)

The WriteDataToBlock() function is used to write data to a specific block on the RFID
tag. It authenticates the block using the key, and if successful, it writes the data to
the block.

The ReadDataFromBlock() function is used to read data from a specific block on the
RFID tag. It authenticates the block using the key, and if successful, it reads the data
from the block.

The dumpSerial() function is used to print the contents of a block to the serial
monitor.

![image](https://github.com/salihmusic/smartattendence/assets/66977617/cde78894-72b6-400d-b34e-6729a5b54f9d)

If we want to add a new user to the system, first of all, it is necessary to scan a new
card. After scanning the card, we enter the ID, first name, last name, phone number,
and email address into the system. After we have saved the data, the new user's
new card is ready for use.

![image](https://github.com/salihmusic/smartattendence/assets/66977617/91a53d34-75c4-433a-b00a-fe9a20057bf9)

![image](https://github.com/salihmusic/smartattendence/assets/66977617/38d1c907-1c49-416c-81d1-3d5bfbe436b4)

After the user has scanned his card, the data is saved in a Google sheet and
displayed on the front page. It is possible to edit data or delete. If a user wants to be
edited, there is no way to change ID, just other information like name,surname,
address or phone number.

![image](https://github.com/salihmusic/smartattendence/assets/66977617/19b8367a-450f-4806-86cf-f765c244410e)

One of the features is that it can be adjusted in which sheets we want the data to be
saved. This is exclusively important so that it is easier to distribute the data for what
we need it for. For example, if Smart Attendance is used for a school/faculty, the
professor can very easily schedule attendance by lecture dates and absences.



**4.1 Google sheet code**

// Enter Spreadsheet ID here
var SS =
SpreadsheetApp.openById('1Yolk2i68bfeKrakdJD3ow-OT0HpYd6dJv-4rOYBEOA0')
;
var timezone = "europe/sarajevo"
var hours = 0
var str = "";
function doPost(e) {
var parsedData;
var result = {};
try {
parsedData = JSON.parse(e.postData.contents);
}
catch(f){
return ContentService.createTextOutput("Error in parsing request
body: " + f.message);
}
if (parsedData !== undefined){
var flag = parsedData.format;
if (flag === undefined){
flag = 0;
}
var sheet = SS.getSheetByName(parsedData.sheet_name); // sheet name
to publish data to is specified in Arduino code
var dataArr = parsedData.values.split(","); // creates an array of
the values to publish
//var date_now = Utilities.formatDate(new Date(), "CST",
"yyyy/MM/dd"); // gets the current date
//var time_now = Utilities.formatDate(new Date(), "CST", "hh:mm:ss
a"); // gets the current time
var Curr_Date = new Date(new Date().setHours(new Date().getHours()
+ hours));
var Curr_Time = Utilities.formatDate(Curr_Date, timezone,
'HH:mm:ss');
var value0 = dataArr [0]; // value0 from Arduino code - Student ID
var value1 = dataArr [1]; // value1 from Arduino code - First Name
var value2 = dataArr [2]; // value2 from Arduino code - Last Name
var value3 = dataArr [3]; // value0 from Arduino code - Phone
Number
var value4 = dataArr [4]; // value1 from Arduino code - Address
// read and execute command from the "payload_base" string
specified in Arduino code
switch (parsedData.command) {
case "insert_row":
sheet.insertRows(2); // insert full row directly below header
text
//var range = sheet.getRange("A2:D2"); // use
this to insert cells just above the existing data instead of inserting
an entire row
//range.insertCells(SpreadsheetApp.Dimension.ROWS); // use
this to insert cells just above the existing data instead of inserting
an entire row
sheet.getRange('A2').setValue(Curr_Date); // publish current
date to cell A2
sheet.getRange('B2').setValue(Curr_Time); // publish current
time to cell B2
sheet.getRange('C2').setValue(value0); // publish Student ID
from Arduino code to cell C2
sheet.getRange('D2').setValue(value1); // publish First Name
from Arduino code to cell D2
sheet.getRange('E2').setValue(value2); // publish Last Name
from Arduino code to cell E2
sheet.getRange('F2').setValue(value3); // publish Phone
Number from Arduino code to cell F2
sheet.getRange('G2').setValue(value4); // publish Address
from Arduino code to cell G2
str = "Success"; // string to return back to Arduino serial
console
SpreadsheetApp.flush();
break;
case "append_row":
var publish_array = new Array(); // create a new array
publish_array [0] = date_now; // add current date to position
0 in publish_array
publish_array [1] = time_now; // add current time to position
1 in publish_array
publish_array [2] = value0; // add value0 from Arduino code
to position 2 in publish_array
publish_array [3] = value1; // add value1 from Arduino code
to position 3 in publish_array
publish_array [4] = value2; // add value2 from Arduino code
to position 4 in publish_array
sheet.appendRow(publish_array); // publish data in
publish_array after the last row of data in the sheet
str = "Success"; // string to return back to Arduino serial
console
SpreadsheetApp.flush();
break;
}
return ContentService.createTextOutput(str);
} // endif (parsedData !== undefined)
else {
return ContentService.createTextOutput("Error! Request body empty
or in incorrect format.");
}
function doGet(req){
var doc= SpreadsheetApp.getActiveSpreadsheet();
var sheet= doc.getSheetByName('Sheet1');
var values= sheet.getDataRange().getValues();
var output=[];
for(var i =0; i<values.length; i++){
var row= {};
row['Date'] = values [i][0];
row['Time'] = values [i][1];
row['FirstName'] = values [i][2];
row['LastName'] = values [i][3];
}
return
ContentService.createTextOutput(JSON.stringify({data:output}).setMimeTy
pe(ContentService.MimeType.JSON));
}
}



**5. REALIZATION AND PRESENTATION HOW DOES SMART
ATTENDANCE WORK**


![image](https://github.com/salihmusic/smartattendence/assets/66977617/16b47737-8ab6-40ad-abfa-1a32968e7d14)
![image](https://github.com/salihmusic/smartattendence/assets/66977617/a2fc86d3-4ba7-420f-8158-934126dc84c0)
![image](https://github.com/salihmusic/smartattendence/assets/66977617/0df797f0-ac16-40a8-aee5-74bbe55834cf)
![image](https://github.com/salihmusic/smartattendence/assets/66977617/125de10a-31e9-4226-8740-d28775326a10)
![image](https://github.com/salihmusic/smartattendence/assets/66977617/22fa3bb9-0d5a-4aa1-840a-ee20112ce293)





