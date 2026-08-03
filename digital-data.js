// digital-data.js
// Excellent Institute - Digital Services & e-Governance (DCA Exclusive)

const digitalBookData = [
    {
        id: "chapter1",
        title: "Chapter 1: Essential Identity Documents",
        topics: [
            {
                heading: "Aadhaar Card Download & Print",
                text: "The Aadhaar card is the most important ID in India. To download a lost Aadhaar, visit the official UIDAI website (myaadhaar.uidai.gov.in). You will need the customer's Aadhaar number and the mobile phone linked to it to receive the OTP. The downloaded PDF will be locked with a password (usually the first 4 letters of their name in CAPITAL + birth year).",
                shortcut: "Always print Aadhaar cards on high-quality glossy photo paper.",
                imgSrc: "images/digi-01-aadhaar.jpg"
            },
            {
                heading: "PAN Card Services",
                text: "A PAN card is required for banking and taxes. You can apply for a new PAN or download an e-PAN through the NSDL or UTIITSL portals. E-KYC makes this process completely paperless if the customer's Aadhaar is linked to their mobile number.",
                shortcut: "e-PAN downloads are usually free if the card was made recently.",
                imgSrc: "images/digi-02-pan.jpg"
            },
            {
                heading: "Voter ID (EPIC) Download",
                text: "During elections, people often lose their Voter IDs. Go to the NVSP portal (voters.eci.gov.in) to download the e-EPIC. You will need their EPIC number or Reference number. This digital card is 100% valid at the polling booth.",
                shortcut: "Always check the spelling of the name before final printing.",
                imgSrc: "images/digi-03-voter.jpg"
            }
        ]
    },
    {
        id: "chapter2",
        title: "Chapter 2: Daily Utility Services",
        topics: [
            {
                heading: "Paying Electricity Bills Online",
                text: "Stop standing in long lines! You can pay electricity bills using official state portals (like TPSODL/MoBidyut for South Odisha) or apps like PhonePe and Paytm. You only need the customer's 'Consumer Number'. Always save the digital receipt immediately after payment.",
                shortcut: "Keep a digital folder of all payment receipts to resolve disputes.",
                imgSrc: "images/digi-04-electricity.jpg"
            },
            {
                heading: "Train & Bus Ticket Booking",
                text: "To book train tickets, you must create a verified IRCTC account. You must carefully enter the passenger's exact age and name. For buses, portals like RedBus or OSRTC are used. Remind customers to carry their original ID while traveling.",
                shortcut: "Tatkal (urgent) train tickets open at exactly 10:00 AM (AC) and 11:00 AM (Non-AC).",
                imgSrc: "images/digi-05-tickets.jpg"
            }
        ]
    },
    {
        id: "chapter3",
        title: "Chapter 3: Government Schemes & Portals",
        topics: [
            {
                heading: "Filling PM-Kisan & Scheme Forms",
                text: "Government schemes like PM-Kisan provide financial help to farmers. As a computer operator, you must carefully fill out these forms on the official portals. A single spelling mistake or wrong bank account number will cause the payment to fail.",
                shortcut: "Always double-check IFSC codes and Bank Account numbers with the customer.",
                imgSrc: "images/digi-06-pmkisan.jpg"
            },
            {
                heading: "Common Service Centre (CSC) Login",
                text: "If you want to open your own digital shop, you can apply for a CSC ID. The CSC 'Digital Seva Portal' gives you a master dashboard where you can offer hundreds of government and banking services to citizens from one single website.",
                shortcut: "Keep your CSC wallet topped up with funds to avoid transaction failures.",
                imgSrc: "images/digi-07-csc.jpg"
            }
        ]
    },
    {
        id: "chapter4",
        title: "Chapter 4: Digital Lockers & Security",
        topics: [
            {
                heading: "Using DigiLocker",
                text: "DigiLocker is a digital safe provided by the Government of India. You can link your Aadhaar and fetch your original Driving License, 10th Board Certificate, and Vehicle RC. If the police stop you, showing a document in the DigiLocker app is legally equal to showing the original paper!",
                shortcut: "Documents in DigiLocker are 'issued' directly by the government, not just scanned photos.",
                imgSrc: "images/digi-08-digilocker.jpg"
            },
            {
                heading: "OTP Use & Customer Safety",
                text: "An OTP (One Time Password) is the key to a person's bank and identity. When doing online work for a customer, ask them to read the OTP to you, but NEVER save their OTPs or passwords on your shop computer. Always log out of their accounts when the job is done.",
                shortcut: "Customer trust is the most important part of running a digital business.",
                imgSrc: "images/digi-09-otp.jpg"
            },
            {
                heading: "Printing Acknowledgement Slips",
                text: "Whenever you apply for a PAN card, scheme, or pay a bill, the website generates a final 'Acknowledgement Slip' or 'Reference Number'. You MUST print this slip and give it to the customer so they can track the status of their application later.",
                shortcut: "Press Ctrl + P to instantly print the final success screen.",
                imgSrc: "images/digi-10-printslip.jpg"
            }
        ]
    }
];
