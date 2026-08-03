// digital-data.js
// Excellent Institute - Digital Services (DCA Exclusive Practical Guide)

const digitalBookData = [
    {
        id: "chapter1",
        title: "Chapter 1: Digital Identity Cards",
        topics: [
            {
                heading: "Aadhaar, PAN, and Voter ID Download",
                text: "Instead of carrying physical cards, you can download official PDFs that are 100% legally valid.<br><br><b>Step 1:</b> Click the official link below.<br><b>Step 2:</b> Enter your ID number (or enrollment number).<br><b>Step 3:</b> Type the OTP sent to your registered mobile.<br><b>Step 4:</b> Download the PDF. <i>(Note: e-Aadhaar is locked. The password is the first 4 letters of your name in CAPITAL + your birth year, e.g., RAHU2005)</i>.<br><br>🔗 <a href=\"https://myaadhaar.uidai.gov.in/\" target=\"_blank\" style=\"color: #4338ca; font-weight: bold;\">Download e-Aadhaar (UIDAI)</a><br>🔗 <a href=\"https://www.onlineservices.nsdl.com/paam/requestAndDownloadEPAN.html\" target=\"_blank\" style=\"color: #4338ca; font-weight: bold;\">Download e-PAN (NSDL)</a><br>🔗 <a href=\"https://voters.eci.gov.in/\" target=\"_blank\" style=\"color: #4338ca; font-weight: bold;\">Download e-EPIC / Voter ID</a>",
                shortcut: "Always ensure your mobile number is linked to your IDs to receive OTPs.",
                imgSrc: "images/digi-01-id-cards.jpg"
            },
            {
                heading: "Using DigiLocker",
                text: "DigiLocker is your government-approved digital schoolbag. If the traffic police stop you, showing a Driving License inside this app is legally accepted!<br><br><b>Step 1:</b> Open the portal or download the mobile app.<br><b>Step 2:</b> Sign up using your Aadhaar number and Mobile OTP.<br><b>Step 3:</b> Click 'Search Documents' to find your 10th Board Marksheet, Vehicle RC, or Ration Card, and click 'Fetch'.<br><br>🔗 <a href=\"https://www.digilocker.gov.in/\" target=\"_blank\" style=\"color: #4338ca; font-weight: bold;\">Visit DigiLocker Official Portal</a>",
                shortcut: "Documents in DigiLocker are verified directly by the government servers.",
                imgSrc: "images/digi-02-digilocker.jpg"
            }
        ]
    },
    {
        id: "chapter2",
        title: "Chapter 2: Daily Online Tasks",
        topics: [
            {
                heading: "Paying Electricity Bills Online",
                text: "No more standing in long lines under the hot sun! You can pay your bills directly from your computer.<br><br><b>Step 1:</b> Open your local electricity website (e.g., TPCODL for Odisha).<br><b>Step 2:</b> Click on 'Pay Bill Online'.<br><b>Step 3:</b> Type your 12-digit Consumer Number (found on an old paper bill).<br><b>Step 4:</b> Verify the name on the screen, then pay securely using UPI, PhonePe, or a Debit Card.<br><br>🔗 <a href=\"https://www.tpcodl.com/\" target=\"_blank\" style=\"color: #4338ca; font-weight: bold;\">TPCODL (Odisha) Bill Payment</a>",
                shortcut: "Always check the Consumer Name on the screen before entering your UPI PIN.",
                imgSrc: "images/digi-03-electricity.jpg"
            },
            {
                heading: "Train & Bus Ticket Booking",
                text: "Book your travel tickets from home.<br><br><b>Step 1:</b> Open the IRCTC portal.<br><b>Step 2:</b> Log in to your free account.<br><b>Step 3:</b> Enter your 'From' and 'To' stations, and select a travel date.<br><b>Step 4:</b> Choose your class (Sleeper, 3AC) and complete the payment. Your ticket will be emailed to you instantly.<br><br>🔗 <a href=\"https://www.irctc.co.in/\" target=\"_blank\" style=\"color: #4338ca; font-weight: bold;\">IRCTC Official Train Booking</a><br>🔗 <a href=\"https://www.redbus.in/\" target=\"_blank\" style=\"color: #4338ca; font-weight: bold;\">RedBus Ticket Booking</a>",
                shortcut: "An e-ticket on your phone + your physical Aadhaar card is all you need to travel.",
                imgSrc: "images/digi-04-tickets.jpg"
            }
        ]
    },
    {
        id: "chapter3",
        title: "Chapter 3: Government Portals",
        topics: [
            {
                heading: "Filling Govt Scheme Forms (PM-Kisan)",
                text: "Help farmers register for government financial aid of ₹6000 per year.<br><br><b>Step 1:</b> Open the PM-Kisan portal.<br><b>Step 2:</b> Click on 'New Farmer Registration'.<br><b>Step 3:</b> Enter their Aadhaar number and Mobile number carefully.<br><b>Step 4:</b> Fill in their land details (Khata/Plot No.) and upload a scanned PDF of their land records (RoR), then submit.<br><br>🔗 <a href=\"https://pmkisan.gov.in/\" target=\"_blank\" style=\"color: #4338ca; font-weight: bold;\">PM-Kisan Samman Nidhi Portal</a>",
                shortcut: "Always double-check Bank Account and Aadhaar numbers before clicking submit.",
                imgSrc: "images/digi-05-schemes.jpg"
            },
            {
                heading: "What is the CSC Portal?",
                text: "CSC stands for 'Common Service Centre'. It is a highly secure portal given ONLY to authorized computer operators in villages (Jan Seva Kendras). Using this portal, operators can help citizens apply for PAN cards, Birth Certificates, Passports, and Insurance.<br><br><b>Note:</b> You cannot use this portal without an official ID from the government.<br><br>🔗 <a href=\"https://digitalseva.csc.gov.in/\" target=\"_blank\" style=\"color: #4338ca; font-weight: bold;\">CSC Digital Seva Login</a>",
                shortcut: "DCA students often get jobs operating CSC portals in their local Panchayat.",
                imgSrc: "images/digi-06-csc.jpg"
            }
        ]
    },
    {
        id: "chapter4",
        title: "Chapter 4: Security & Proof",
        topics: [
            {
                heading: "OTP Use and Ultimate Safety",
                text: "OTP stands for 'One Time Password'. It is a secret 6-digit code sent via SMS to prove your identity.<br><br><b>Rule 1:</b> NEVER tell your OTP to anyone on a phone call. Bank Managers and Police will NEVER ask for your OTP.<br><b>Rule 2:</b> Only type an OTP on an official website. Look for the 'Padlock' icon next to the website address at the top of your screen.",
                shortcut: "An OTP is valid for only a few minutes. Do not share it!",
                imgSrc: "images/digi-07-otp.jpg"
            },
            {
                heading: "Printing Acknowledgement Slips",
                text: "Whenever you pay a bill online, submit a scholarship form, or apply for an ID, the website will show a 'Success' page with a Reference Number or Transaction ID.<br><br><b>Crucial Step:</b> ALWAYS press <b>Ctrl + P</b> to Print this page immediately! If you don't have a printer connected, change the printer option to 'Save as PDF'. This slip is your ONLY legal proof that the job was completed.",
                shortcut: "Ctrl + P (Instantly opens the Print and Save as PDF menu).",
                imgSrc: "images/digi-08-print-slip.jpg"
            }
        ]
    }
];
