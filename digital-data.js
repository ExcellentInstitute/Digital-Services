// digital-data.js
// Excellent Institute - Digital Services (DCA Exclusive)

const digitalBookData = [
    {
        id: "chapter1",
        title: "Chapter 1: Digital Identity Cards",
        topics: [
            {
                heading: "1. Downloading e-Aadhaar",
                text: `Downloading an official Aadhaar card is a core skill for any computer operator. Here is exactly how to do it:<br><br>
                <strong>Step-by-Step Process:</strong><br>
                1. Visit the official UIDAI portal using the link below.<br>
                2. Click on <strong>'Download Aadhaar'</strong> from the main menu.<br>
                3. Enter the 12-digit Aadhaar Number and carefully type the Captcha code shown on the screen.<br>
                4. Click 'Send OTP'. A 6-digit code will be sent to the mobile number linked to the Aadhaar.<br>
                5. Enter the OTP and click 'Verify & Download' to save the PDF file to your computer.<br><br>
                <em>Crucial Rule:</em> The downloaded PDF is locked with a password for safety! The password is the <strong>first 4 letters of your name in CAPITAL letters</strong> followed by your <strong>birth year</strong> (e.g., if the name is Rahul born in 2005, the password is <strong>RAHU2005</strong>).<br><br>
                👉 <a href="https://myaadhaar.uidai.gov.in/" target="_blank" rel="noopener noreferrer" style="color: #4338ca; text-decoration: underline; font-weight: 700; font-size: 1.1rem;">Click here to visit the Official UIDAI (Aadhaar) Portal</a>`,
                shortcut: "Always ensure the mobile number linked to the ID is active to receive the OTP.",
                imgSrc: "images/digi-01a-aadhaar.jpg"
            },
            {
                heading: "2. Downloading e-PAN Card",
                text: `Your PAN (Permanent Account Number) is essential for banking and taxes. You can easily download a digital copy (e-PAN) if a customer loses their physical card.<br><br>
                <strong>Step-by-Step Process:</strong><br>
                1. Visit the official NSDL (Protean) portal using the link below.<br>
                2. Enter your PAN number, Aadhaar number, and Date of Birth.<br>
                3. Check the consent box and fill in the Captcha code.<br>
                4. Pay a small processing fee (usually around ₹8) using UPI, Debit Card, or Net Banking.<br>
                5. Verify the OTP sent to your linked mobile number to download the PDF.<br><br>
                <em>Crucial Rule:</em> The e-PAN PDF is also password protected. The password is your <strong>full Date of Birth</strong> in DDMMYYYY format (e.g., if born on 15th August 1999, the password is <strong>15081999</strong>).<br><br>
                👉 <a href="https://www.onlineservices.nsdl.com/paam/requestAndDownloadEPAN.html" target="_blank" rel="noopener noreferrer" style="color: #4338ca; text-decoration: underline; font-weight: 700; font-size: 1.1rem;">Click here to visit the Official NSDL PAN Portal</a>`,
                shortcut: "You can download the e-PAN for free if the new PAN was generated within the last 30 days.",
                imgSrc: "images/digi-01b-pan.jpg"
            },
            {
                heading: "3. Downloading e-EPIC (Voter ID)",
                text: `The e-EPIC is a secure, digital version of the Voter ID card issued by the Election Commission of India.<br><br>
                <strong>Step-by-Step Process:</strong><br>
                1. Go to the Voters Service Portal using the link below.<br>
                2. Click <strong>'Sign Up'</strong> to create a free account using your mobile number and email.<br>
                3. Once logged in, click the big button that says <strong>'Download e-EPIC'</strong>.<br>
                4. Enter the EPIC Number (the Voter ID number starting with alphabets like ABC1234567) and select your State.<br>
                5. Verify the OTP sent to the registered mobile number and download your digital Voter ID card.<br><br>
                👉 <a href="https://voters.eci.gov.in/" target="_blank" rel="noopener noreferrer" style="color: #4338ca; text-decoration: underline; font-weight: 700; font-size: 1.1rem;">Click here to visit the Voters Service Portal</a>`,
                shortcut: "e-EPIC is a valid proof of identity and can be printed on PVC plastic to act exactly like the original card.",
                imgSrc: "images/digi-01c-voter.jpg"
            },
            {
                heading: "4. Using DigiLocker",
                text: `DigiLocker is a digital schoolbag provided by the Government of India. Documents stored here are legally equal to original paper documents under the IT Act, 2000.<br><br>
                <strong>How to use it:</strong><br>
                1. Go to the DigiLocker portal and click <strong>'Sign Up'</strong>.<br>
                2. Enter your full name exactly as it appears on your Aadhaar, Date of Birth, and mobile number. You will be asked to create a secure 6-digit PIN.<br>
                3. Link your Aadhaar to the account to verify your identity.<br>
                4. Click <strong>'Search Documents'</strong>. You can search for 'BSE Odisha' to pull your 10th Board Certificate, or 'Ministry of Road Transport' to pull your Driving License and Vehicle RC directly from the government servers into your locker.<br><br>
                👉 <a href="https://www.digilocker.gov.in/" target="_blank" rel="noopener noreferrer" style="color: #4338ca; text-decoration: underline; font-weight: 700; font-size: 1.1rem;">Click here to open DigiLocker</a>`,
                shortcut: "If traffic police stop you, showing your Driving License directly inside the DigiLocker app on your phone is 100% legal.",
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
                text: `No more standing in long lines under the hot sun! In Odisha, electricity is managed by companies like TPCODL, TPSODL, etc.<br><br>
                <strong>Step-by-step Process:</strong><br>
                1. Look at your old paper bill to find your <strong>Consumer Number</strong> (or Account Number).<br>
                2. Visit your electricity board's official website using the link below.<br>
                3. Click on <strong>'Pay Bill Online'</strong> and type in your Consumer Number.<br>
                4. The screen will display the customer's name and the exact bill amount. <em>Always verify the name matches before paying!</em><br>
                5. Choose a payment method (UPI, Debit Card, or Net Banking) and complete the payment.<br>
                6. Download and print the payment receipt for the customer.<br><br>
                👉 <a href="https://www.tpcentralodisha.com/" target="_blank" rel="noopener noreferrer" style="color: #4338ca; text-decoration: underline; font-weight: 700; font-size: 1.1rem;">Click here to visit the TPCODL Bill Payment Portal</a>`,
                shortcut: "You can also use apps like PhonePe or Google Pay, but printing a receipt from the official website is better for shop records.",
                imgSrc: "images/digi-03-electricity.jpg"
            },
            {
                heading: "Train & Bus Ticket Booking",
                text: `To travel by train anywhere in India, you must use the official IRCTC portal.<br><br>
                <strong>Train Booking Process:</strong><br>
                1. Create a personal IRCTC account (Requires active email and mobile verification).<br>
                2. Enter your 'From' station (e.g., BAM for Brahmapur) and 'To' station (e.g., BBS for Bhubaneswar).<br>
                3. Select your travel date and class (Sleeper, 3AC, 2AC).<br>
                4. Enter the exact names and ages of the passengers, pay using UPI or Card, and your confirmed ticket (with a 10-digit PNR number) will be generated as a PDF.<br><br>
                👉 <a href="https://www.irctc.co.in/" target="_blank" rel="noopener noreferrer" style="color: #4338ca; text-decoration: underline; font-weight: 700; font-size: 1.1rem;">Click here to visit the IRCTC Train Portal</a><br><br>
                For bus tickets across Odisha, you can use the official State Transport corporation portal.<br><br>
                👉 <a href="https://www.osrtc.in/" target="_blank" rel="noopener noreferrer" style="color: #4338ca; text-decoration: underline; font-weight: 700; font-size: 1.1rem;">Click here to visit the OSRTC Bus Portal</a>`,
                shortcut: "An e-ticket shown on your mobile phone screen, along with an original ID card, is perfectly valid for travel. You do not need a printout.",
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
                text: `The government provides direct financial help to farmers through schemes like PM-Kisan. Computer operators regularly help farmers apply for these online.<br><br>
                <strong>How to Register a New Farmer:</strong><br>
                1. Visit the PM-Kisan portal and click <strong>'New Farmer Registration'</strong>.<br>
                2. Enter the farmer's Aadhaar Number and select the State.<br>
                3. Fill in the personal details exactly as they appear on the Aadhaar card.<br>
                4. Add the Land Details (Khata Number, Dag/Plot Number, and Area in Hectares). You will find this on the farmer's land Patta.<br>
                5. Upload a clear, scanned PDF copy of the land Patta and click Submit to generate the registration slip.<br><br>
                👉 <a href="https://pmkisan.gov.in/" target="_blank" rel="noopener noreferrer" style="color: #4338ca; text-decoration: underline; font-weight: 700; font-size: 1.1rem;">Click here to visit the PM-Kisan Portal</a>`,
                shortcut: "Always double-check Bank Account and IFSC codes. If they are typed wrong, the money will bounce back.",
                imgSrc: "images/digi-05-schemes.jpg"
            },
            {
                heading: "What is the CSC Portal?",
                text: `CSC stands for <strong>Common Service Centre</strong> (Jana Seva Kendra). It is a special, highly secure portal provided by the Government to authorized computer operators in villages and towns.<br><br>
                <strong>What does a CSC do?</strong><br>
                Using their unique CSC ID and password, an operator can log into the 'Digital Seva' portal. From this single website, they can offer hundreds of services to citizens, including applying for new PAN cards, Passports, checking Tele-Law services, paying insurance premiums, and processing Ayushman Bharat health cards.<br><br>
                👉 <a href="https://digitalseva.csc.gov.in/" target="_blank" rel="noopener noreferrer" style="color: #4338ca; text-decoration: underline; font-weight: 700; font-size: 1.1rem;">Click here to view the Digital Seva (CSC) Portal</a>`,
                shortcut: "You must pass the TEC (Telecentre Entrepreneur Course) exam to legally open a CSC center.",
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
                text: `OTP stands for <strong>One Time Password</strong>. It is a secret 6-digit number sent to your phone to prove that YOU are the one doing the transaction.<br><br>
                <strong>The Golden Rules of Internet Safety:</strong><br>
                1. NEVER tell your OTP to anyone over a phone call. Bank Managers, Police, and Customer Care agents will NEVER ask for your OTP.<br>
                2. Watch out for 'Phishing' links. Scammers send SMS messages saying "Your electricity will be cut tonight, click here to pay". Do not click! Only use the official websites provided in this course.<br>
                3. If you lose money to a cyber scam, immediately call the National Cyber Crime Helpline at <strong>1930</strong>.<br><br>
                👉 <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener noreferrer" style="color: #4338ca; text-decoration: underline; font-weight: 700; font-size: 1.1rem;">Click here to visit the National Cyber Crime Portal</a>`,
                shortcut: "An OTP is usually valid for only 5 to 10 minutes. If it expires, you must click 'Resend OTP'.",
                imgSrc: "images/digi-07-otp.jpg"
            },
            {
                heading: "Printing Acknowledgement Slips",
                text: `Whenever you pay a bill online, submit a college form, or apply for a certificate, the website will show a final 'Success' page with a Reference or Application Number. This is your ONLY proof that you did the work.<br><br>
                <strong>How to Save Proof Properly:</strong><br>
                1. Look for a 'Print Receipt' or 'Download Acknowledgement' button on the screen.<br>
                2. If the website does not have a print button, press <strong>Ctrl + P</strong> on your keyboard.<br>
                3. In the Print menu, click the 'Destination' or 'Printer' drop-down list.<br>
                4. Select <strong>Save as PDF</strong>.<br>
                5. Click Save, and store the file safely in a folder with the customer's name.<br><br>
                Always give a printed copy to your customer so they have legal proof of their application!`,
                shortcut: "Ctrl + P opens the Print Menu on any website or application.",
                imgSrc: "images/digi-08-print-slip.jpg"
            }
        ]
    }
];
