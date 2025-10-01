/* ========================================
   INTERNATIONALIZATION CONFIGURATION
   ======================================== */

export type Language = 'en' | 'hi' | 'mr';

export interface Translations {
  // Navigation
  home: string;
  fees: string;
  admission: string;
  aboutUs: string;
  awards: string;
  studentLife: string;
  
  // Common
  selectSchool: string;
  language: string;
  readMore: string;
  viewAll: string;
  portalLogin: string;
  backToHome: string;
  
  // Home page
  welcomeMessage: string;
  latestNews: string;
  notifications: string;
  upcomingEvents: string;
  principalMessage: string;
  principalMessageText: string;
  principalName: string;
  
  // Login types
  studentPortal: string;
  teacherPortal: string;
  parentPortal: string;
  adminPanel: string;
  selectLoginType: string;
  
  // Quick links
  academicResources: string;
  digitalLibrary: string;
  onlineClasses: string;
  assignmentPortal: string;
  studentServices: string;
  viewResults: string;
  attendanceReport: string;
  feePayment: string;
  community: string;
  parentPortalLink: string;
  teacherConnect: string;
  schoolCalendar: string;
  
  // Testimonials
  whatCommunitySays: string;
  
  // Fees
  feeStructure: string;
  payOnline: string;
  loginNote: string;
  academicYear: string;
  tuitionFee: string;
  developmentFee: string;
  activityFee: string;
  libraryFee: string;
  sportsFee: string;
  totalAnnualFee: string;
  paymentOptions: string;
  installmentPlans: string;
  annual: string;
  quarterly: string;
  monthly: string;
  paymentMethods: string;
  onlinePayment: string;
  bankTransfer: string;
  cheque: string;
  cash: string;
  importantDates: string;
  feeDueDate: string;
  lateFee: string;
  annualDiscount: string;
  
  // Admission
  admissionProcess: string;
  admissionInfo: string;
  applyNow: string;
  admissionRequirements: string;
  applicationForm: string;
  academicRecords: string;
  birthCertificate: string;
  photographs: string;
  transferCertificate: string;
  applicationStart: string;
  applicationDeadline: string;
  admissionTest: string;
  quickApply: string;
  downloadApplication: string;
  onlineApplication: string;
  contactAdmission: string;
  
  // About Us
  ourMission: string;
  ourVision: string;
  missionText: string;
  visionText: string;
  coreValues: string;
  excellenceEducation: string;
  integrityHonesty: string;
  respectDiversity: string;
  innovationCreativity: string;
  communityService: string;
  environmentalResponsibility: string;
  quickFacts: string;
  established: string;
  students: string;
  teachers: string;
  campusSize: string;
  
  // Awards
  achievements: string;
  bestSchoolAward: string;
  excellenceScience: string;
  sportsChampionship: string;
  digitalInnovation: string;
  environmentalExcellence: string;
  academicExcellence: string;
  
  // Student Life
  activities: string;
  events: string;
  lifeAtSchool: string;
  extracurricularActivities: string;
  artCraft: string;
  musicDance: string;
  dramaSociety: string;
  photographyClub: string;
  debateSociety: string;
  sportsGames: string;
  footballCricket: string;
  basketball: string;
  swimmingPool: string;
  tableTennis: string;
  athleticsTrack: string;
  academicClubs: string;
  scienceClub: string;
  mathOlympiad: string;
  roboticsClub: string;
  computerProgramming: string;
  environmentalClub: string;
  
  // News Items
  academicExcellenceAward: string;
  newComputerLab: string;
  interSchoolSports: string;
  academicExcellenceDesc: string;
  newComputerLabDesc: string;
  interSchoolSportsDesc: string;
  
  // Notifications
  feePaymentExtended: string;
  parentTeacherMeeting: string;
  newLibraryBooks: string;
  busRouteChanges: string;
  homeworkDeadline: string;
  annualFunctionRehearsals: string;
  medicalCheckup: string;
  newAdmissionForms: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    home: 'Home',
    fees: 'Fees',
    admission: 'Admission',
    aboutUs: 'About Us',
    awards: 'Awards',
    studentLife: 'Student Life',
    
    // Common
    selectSchool: 'Select School',
    language: 'Language',
    readMore: 'Read More',
    viewAll: 'View All',
    portalLogin: 'Portal Login',
    backToHome: 'Back to Home',
    
    // Home page
    welcomeMessage: 'Welcome to',
    latestNews: 'Latest News',
    notifications: 'Notifications',
    upcomingEvents: 'Upcoming Events',
    principalMessage: "Principal's Message",
    principalMessageText: '"Dear students and parents, we are committed to providing quality education and holistic development. Together, we build tomorrow\'s leaders."',
    principalName: '- Dr. Rajesh Kumar, Principal',
    
    // Login types
    studentPortal: 'Student Portal',
    teacherPortal: 'Teacher Portal',
    parentPortal: 'Parent Portal',
    adminPanel: 'Admin Panel',
    selectLoginType: 'SELECT LOGIN TYPE',
    
    // Quick links
    academicResources: 'Academic Resources',
    digitalLibrary: 'Digital Library',
    onlineClasses: 'Online Classes',
    assignmentPortal: 'Assignment Portal',
    studentServices: 'Student Services',
    viewResults: 'View Results',
    attendanceReport: 'Attendance Report',
    feePayment: 'Fee Payment',
    community: 'Community',
    parentPortalLink: 'Parent Portal',
    teacherConnect: 'Teacher Connect',
    schoolCalendar: 'School Calendar',
    
    // Testimonials
    whatCommunitySays: 'What Our Community Says',
    
    // Fees
    feeStructure: 'Fee Structure',
    payOnline: 'Pay Online',
    loginNote: 'Please login to view your personalized fee details and make payments.',
    academicYear: 'Academic Year 2024-25 Fee Structure',
    tuitionFee: 'Tuition Fee (Annual):',
    developmentFee: 'Development Fee:',
    activityFee: 'Activity Fee:',
    libraryFee: 'Library Fee:',
    sportsFee: 'Sports Fee:',
    totalAnnualFee: 'Total Annual Fee:',
    paymentOptions: 'Payment Options',
    installmentPlans: 'Installment Plans:',
    annual: 'Annual: Full payment with 5% discount',
    quarterly: 'Quarterly: 4 installments',
    monthly: 'Monthly: 10 installments',
    paymentMethods: 'Payment Methods:',
    onlinePayment: 'Online Payment (UPI, Cards)',
    bankTransfer: 'Bank Transfer',
    cheque: 'Cheque/DD',
    cash: 'Cash (at school office)',
    importantDates: 'Important Dates',
    feeDueDate: 'Fee Due Date:',
    lateFee: 'Late Fee:',
    annualDiscount: 'Annual Discount:',
    
    // Admission
    admissionProcess: 'Admission Process',
    admissionInfo: 'Admission Information',
    applyNow: 'Apply Now',
    admissionRequirements: 'Admission Requirements:',
    applicationForm: 'Completed application form',
    academicRecords: 'Previous academic records',
    birthCertificate: 'Birth certificate',
    photographs: 'Passport size photographs',
    transferCertificate: 'Transfer certificate (if applicable)',
    applicationStart: 'Application Start:',
    applicationDeadline: 'Application Deadline:',
    admissionTest: 'Admission Test:',
    quickApply: 'Quick Apply',
    downloadApplication: 'Download Application',
    onlineApplication: 'Online Application',
    contactAdmission: 'Contact Admission Office',
    
    // About Us
    ourMission: 'Our Mission',
    ourVision: 'Our Vision',
    missionText: 'To provide quality education that nurtures young minds and prepares them for future challenges. We believe in holistic development of students through academic excellence and character building.',
    visionText: 'To be a leading educational institution that creates responsible global citizens and future leaders who contribute positively to society.',
    coreValues: 'Core Values',
    excellenceEducation: 'Excellence in Education',
    integrityHonesty: 'Integrity and Honesty',
    respectDiversity: 'Respect for Diversity',
    innovationCreativity: 'Innovation and Creativity',
    communityService: 'Community Service',
    environmentalResponsibility: 'Environmental Responsibility',
    quickFacts: 'Quick Facts',
    established: 'Established:',
    students: 'Students:',
    teachers: 'Teachers:',
    campusSize: 'Campus Size:',
    
    // Awards
    achievements: 'Achievements',
    bestSchoolAward: 'Best School Award',
    excellenceScience: 'Excellence in Science',
    sportsChampionship: 'Sports Championship',
    digitalInnovation: 'Digital Innovation Award',
    environmentalExcellence: 'Environmental Excellence',
    academicExcellence: 'Academic Excellence',
    
    // Student Life
    activities: 'Activities',
    events: 'Events',
    lifeAtSchool: 'Life at School',
    extracurricularActivities: 'Extracurricular Activities',
    artCraft: 'Art & Craft Club',
    musicDance: 'Music & Dance',
    dramaSociety: 'Drama Society',
    photographyClub: 'Photography Club',
    debateSociety: 'Debate Society',
    sportsGames: 'Sports & Games',
    footballCricket: 'Football & Cricket',
    basketball: 'Basketball',
    swimmingPool: 'Swimming Pool',
    tableTennis: 'Table Tennis',
    athleticsTrack: 'Athletics Track',
    academicClubs: 'Academic Clubs',
    scienceClub: 'Science Club',
    mathOlympiad: 'Mathematics Olympiad',
    roboticsClub: 'Robotics Club',
    computerProgramming: 'Computer Programming',
    environmentalClub: 'Environmental Club',
    
    // News Items
    academicExcellenceAward: 'Academic Excellence Award 2024',
    newComputerLab: 'New Computer Lab Inauguration',
    interSchoolSports: 'Inter-School Sports Victory',
    academicExcellenceDesc: 'Our school receives state-level recognition for outstanding academic performance.',
    newComputerLabDesc: 'State-of-the-art computer lab with latest technology opens for students.',
    interSchoolSportsDesc: 'Our students win multiple medals in district-level sports competition.',
    
    // Notifications
    feePaymentExtended: 'Fee payment due date extended to 20th Dec',
    parentTeacherMeeting: 'Parent-Teacher meeting scheduled for 18th Dec',
    newLibraryBooks: 'New library books available for issue',
    busRouteChanges: 'School bus route changes from next week',
    homeworkDeadline: 'Holiday homework submission deadline: 22nd Dec',
    annualFunctionRehearsals: 'Annual function rehearsals start from 16th Dec',
    medicalCheckup: 'Medical checkup camp on 19th Dec',
    newAdmissionForms: 'New admission forms available at office'
  },
  
  hi: {
    // Navigation
    home: 'होम',
    fees: 'फीस',
    admission: 'प्रवेश',
    aboutUs: 'हमारे बारे में',
    awards: 'पुरस्कार',
    studentLife: 'छात्र जीवन',
    
    // Common
    selectSchool: 'स्कूल चुनें',
    language: 'भाषा',
    readMore: 'और पढ़ें',
    viewAll: 'सभी देखें',
    portalLogin: 'पोर्टल लॉगिन',
    backToHome: 'होम पर वापस',
    
    // Home page
    welcomeMessage: 'स्वागत है',
    latestNews: 'ताजा समाचार',
    notifications: 'सूचनाएं',
    upcomingEvents: 'आगामी कार्यक्रम',
    principalMessage: 'प्रधानाचार्य का संदेश',
    principalMessageText: '"प्रिय छात्रों और अभिभावकों, हम गुणवत्तापूर्ण शिक्षा प्रदान करने और समग्र विकास के लिए प्रतिबद्ध हैं। मिलकर हम कल के नेता बनाते हैं।"',
    principalName: '- डॉ. राजेश कुमार, प्रधानाचार्य',
    
    // Login types
    studentPortal: 'छात्र पोर्टल',
    teacherPortal: 'शिक्षक पोर्टल',
    parentPortal: 'अभिभावक पोर्टल',
    adminPanel: 'एडमिन पैनल',
    selectLoginType: 'लॉगिन प्रकार चुनें',
    
    // Quick links
    academicResources: 'शैक्षणिक संसाधन',
    digitalLibrary: 'डिजिटल लाइब्रेरी',
    onlineClasses: 'ऑनलाइन कक्षाएं',
    assignmentPortal: 'असाइनमेंट पोर्टल',
    studentServices: 'छात्र सेवाएं',
    viewResults: 'परिणाम देखें',
    attendanceReport: 'उपस्थिति रिपोर्ट',
    feePayment: 'फीस भुगतान',
    community: 'समुदाय',
    parentPortalLink: 'अभिभावक पोर्टल',
    teacherConnect: 'शिक्षक संपर्क',
    schoolCalendar: 'स्कूल कैलेंडर',
    
    // Testimonials
    whatCommunitySays: 'हमारे समुदाय का कहना है',
    
    // Fees
    feeStructure: 'फीस संरचना',
    payOnline: 'ऑनलाइन भुगतान',
    loginNote: 'कृपया अपनी व्यक्तिगत फीस विवरण देखने और भुगतान करने के लिए लॉगिन करें।',
    academicYear: 'शैक्षणिक वर्ष 2024-25 फीस संरचना',
    tuitionFee: 'ट्यूशन फीस (वार्षिक):',
    developmentFee: 'विकास फीस:',
    activityFee: 'गतिविधि फीस:',
    libraryFee: 'पुस्तकालय फीस:',
    sportsFee: 'खेल फीस:',
    totalAnnualFee: 'कुल वार्षिक फीस:',
    paymentOptions: 'भुगतान विकल्प',
    installmentPlans: 'किस्त योजनाएं:',
    annual: 'वार्षिक: 5% छूट के साथ पूरा भुगतान',
    quarterly: 'त्रैमासिक: 4 किस्तें',
    monthly: 'मासिक: 10 किस्तें',
    paymentMethods: 'भुगतान के तरीके:',
    onlinePayment: 'ऑनलाइन भुगतान (UPI, कार्ड)',
    bankTransfer: 'बैंक ट्रांसफर',
    cheque: 'चेक/DD',
    cash: 'नकद (स्कूल कार्यालय में)',
    importantDates: 'महत्वपूर्ण तारीखें',
    feeDueDate: 'फीस देय तिथि:',
    lateFee: 'विलंब शुल्क:',
    annualDiscount: 'वार्षिक छूट:',
    
    // Admission
    admissionProcess: 'प्रवेश प्रक्रिया',
    admissionInfo: 'प्रवेश जानकारी',
    applyNow: 'अभी आवेदन करें',
    admissionRequirements: 'प्रवेश आवश्यकताएं:',
    applicationForm: 'पूर्ण आवेदन पत्र',
    academicRecords: 'पिछले शैक्षणिक रिकॉर्ड',
    birthCertificate: 'जन्म प्रमाण पत्र',
    photographs: 'पासपोर्ट साइज फोटो',
    transferCertificate: 'स्थानांतरण प्रमाण पत्र (यदि लागू हो)',
    applicationStart: 'आवेदन शुरू:',
    applicationDeadline: 'आवेदन की अंतिम तिथि:',
    admissionTest: 'प्रवेश परीक्षा:',
    quickApply: 'त्वरित आवेदन',
    downloadApplication: 'आवेदन डाउनलोड करें',
    onlineApplication: 'ऑनलाइन आवेदन',
    contactAdmission: 'प्रवेश कार्यालय से संपर्क करें',
    
    // About Us
    ourMission: 'हमारा मिशन',
    ourVision: 'हमारा विजन',
    missionText: 'गुणवत्तापूर्ण शिक्षा प्रदान करना जो युवा मन का पोषण करे और उन्हें भविष्य की चुनौतियों के लिए तैयार करे। हम शैक्षणिक उत्कृष्टता और चरित्र निर्माण के माध्यम से छात्रों के समग्र विकास में विश्वास करते हैं।',
    visionText: 'एक अग्रणी शैक्षणिक संस्थान बनना जो जिम्मेदार वैश्विक नागरिक और भविष्य के नेता बनाए जो समाज में सकारात्मक योगदान दें।',
    coreValues: 'मूल मूल्य',
    excellenceEducation: 'शिक्षा में उत्कृष्टता',
    integrityHonesty: 'सत्यनिष्ठा और ईमानदारी',
    respectDiversity: 'विविधता का सम्मान',
    innovationCreativity: 'नवाचार और रचनात्मकता',
    communityService: 'सामुदायिक सेवा',
    environmentalResponsibility: 'पर्यावरणीय जिम्मेदारी',
    quickFacts: 'त्वरित तथ्य',
    established: 'स्थापित:',
    students: 'छात्र:',
    teachers: 'शिक्षक:',
    campusSize: 'कैंपस का आकार:',
    
    // Awards
    achievements: 'उपलब्धियां',
    bestSchoolAward: 'सर्वश्रेष्ठ स्कूल पुरस्कार',
    excellenceScience: 'विज्ञान में उत्कृष्टता',
    sportsChampionship: 'खेल चैंपियनशिप',
    digitalInnovation: 'डिजिटल नवाचार पुरस्कार',
    environmentalExcellence: 'पर्यावरणीय उत्कृष्टता',
    academicExcellence: 'शैक्षणिक उत्कृष्टता',
    
    // Student Life
    activities: 'गतिविधियां',
    events: 'कार्यक्रम',
    lifeAtSchool: 'स्कूल में जीवन',
    extracurricularActivities: 'पाठ्येतर गतिविधियां',
    artCraft: 'कला और शिल्प क्लब',
    musicDance: 'संगीत और नृत्य',
    dramaSociety: 'नाटक समिति',
    photographyClub: 'फोटोग्राफी क्लब',
    debateSociety: 'वाद-विवाद समिति',
    sportsGames: 'खेल और खेल',
    footballCricket: 'फुटबॉल और क्रिकेट',
    basketball: 'बास्केटबॉल',
    swimmingPool: 'स्विमिंग पूल',
    tableTennis: 'टेबल टेनिस',
    athleticsTrack: 'एथलेटिक्स ट्रैक',
    academicClubs: 'शैक्षणिक क्लब',
    scienceClub: 'विज्ञान क्लब',
    mathOlympiad: 'गणित ओलंपियाड',
    roboticsClub: 'रोबोटिक्स क्लब',
    computerProgramming: 'कंप्यूटर प्रोग्रामिंग',
    environmentalClub: 'पर्यावरण क्लब',
    
    // News Items
    academicExcellenceAward: 'शैक्षणिक उत्कृष्टता पुरस्कार 2024',
    newComputerLab: 'नई कंप्यूटर लैब का उद्घाटन',
    interSchoolSports: 'अंतर-विद्यालयी खेल विजय',
    academicExcellenceDesc: 'हमारे स्कूल को उत्कृष्ट शैक्षणिक प्रदर्शन के लिए राज्य स्तरीय मान्यता मिली है।',
    newComputerLabDesc: 'छात्रों के लिए नवीनतम तकनीक के साथ अत्याधुनिक कंप्यूटर लैब खुली है।',
    interSchoolSportsDesc: 'हमारे छात्रों ने जिला स्तरीय खेल प्रतियोगिता में कई पदक जीते हैं।',
    
    // Notifications
    feePaymentExtended: 'फीस भुगतान की देय तिथि 20 दिसंबर तक बढ़ाई गई',
    parentTeacherMeeting: '18 दिसंबर को अभिभावक-शिक्षक बैठक निर्धारित',
    newLibraryBooks: 'पुस्तकालय में नई किताबें जारी करने के लिए उपलब्ध',
    busRouteChanges: 'अगले सप्ताह से स्कूल बस रूट में बदलाव',
    homeworkDeadline: 'छुट्टियों का होमवर्क जमा करने की अंतिम तिथि: 22 दिसंबर',
    annualFunctionRehearsals: '16 दिसंबर से वार्षिक समारोह की रिहर्सल शुरू',
    medicalCheckup: '19 दिसंबर को मेडिकल चेकअप कैंप',
    newAdmissionForms: 'कार्यालय में नए प्रवेश फॉर्म उपलब्ध'
  },
  
  mr: {
    // Navigation
    home: 'मुख्यपृष्ठ',
    fees: 'फी',
    admission: 'प्रवेश',
    aboutUs: 'आमच्याबद्दल',
    awards: 'पुरस्कार',
    studentLife: 'विद्यार्थी जीवन',
    
    // Common
    selectSchool: 'शाळा निवडा',
    language: 'भाषा',
    readMore: 'अधिक वाचा',
    viewAll: 'सर्व पहा',
    portalLogin: 'पोर्टल लॉगिन',
    backToHome: 'मुख्यपृष्ठावर परत',
    
    // Home page
    welcomeMessage: 'स्वागत आहे',
    latestNews: 'ताज्या बातम्या',
    notifications: 'सूचना',
    upcomingEvents: 'आगामी कार्यक्रम',
    principalMessage: 'मुख्याध्यापकांचा संदेश',
    principalMessageText: '"प्रिय विद्यार्थी आणि पालक, आम्ही दर्जेदार शिक्षण देण्यासाठी आणि सर्वांगीण विकासासाठी वचनबद्ध आहोत। एकत्र आम्ही उद्याचे नेते तयार करतो।"',
    principalName: '- डॉ. राजेश कुमार, मुख्याध्यापक',
    
    // Login types
    studentPortal: 'विद्यार्थी पोर्टल',
    teacherPortal: 'शिक्षक पोर्टल',
    parentPortal: 'पालक पोर्टल',
    adminPanel: 'प्रशासक पॅनेल',
    selectLoginType: 'लॉगिन प्रकार निवडा',
    
    // Quick links
    academicResources: 'शैक्षणिक संसाधने',
    digitalLibrary: 'डिजिटल ग्रंथालय',
    onlineClasses: 'ऑनलाइन वर्ग',
    assignmentPortal: 'असाइनमेंट पोर्टल',
    studentServices: 'विद्यार्थी सेवा',
    viewResults: 'निकाल पहा',
    attendanceReport: 'उपस्थिती अहवाल',
    feePayment: 'फी पेमेंट',
    community: 'समुदाय',
    parentPortalLink: 'पालक पोर्टल',
    teacherConnect: 'शिक्षक संपर्क',
    schoolCalendar: 'शाळा कॅलेंडर',
    
    // Testimonials
    whatCommunitySays: 'आमच्या समुदायाचे म्हणणे',
    
    // Fees
    feeStructure: 'फी रचना',
    payOnline: 'ऑनलाइन पेमेंट',
    loginNote: 'कृपया तुमचे वैयक्तिक फी तपशील पाहण्यासाठी आणि पेमेंट करण्यासाठी लॉगिन करा.',
    academicYear: 'शैक्षणिक वर्ष 2024-25 फी रचना',
    tuitionFee: 'शिकवणी फी (वार्षिक):',
    developmentFee: 'विकास फी:',
    activityFee: 'क्रियाकलाप फी:',
    libraryFee: 'ग्रंथालय फी:',
    sportsFee: 'खेळ फी:',
    totalAnnualFee: 'एकूण वार्षिक फी:',
    paymentOptions: 'पेमेंट पर्याय',
    installmentPlans: 'हप्ता योजना:',
    annual: 'वार्षिक: 5% सूट सह पूर्ण पेमेंट',
    quarterly: 'त्रैमासिक: 4 हप्ते',
    monthly: 'मासिक: 10 हप्ते',
    paymentMethods: 'पेमेंट पद्धती:',
    onlinePayment: 'ऑनलाइन पेमेंट (UPI, कार्ड)',
    bankTransfer: 'बँक ट्रान्सफर',
    cheque: 'चेक/DD',
    cash: 'रोख (शाळा कार्यालयात)',
    importantDates: 'महत्वाच्या तारखा',
    feeDueDate: 'फी देय तारीख:',
    lateFee: 'विलंब शुल्क:',
    annualDiscount: 'वार्षिक सूट:',
    
    // Admission
    admissionProcess: 'प्रवेश प्रक्रिया',
    admissionInfo: 'प्रवेश माहिती',
    applyNow: 'आता अर्ज करा',
    admissionRequirements: 'प्रवेश आवश्यकता:',
    applicationForm: 'पूर्ण अर्ज फॉर्म',
    academicRecords: 'मागील शैक्षणिक नोंदी',
    birthCertificate: 'जन्म प्रमाणपत्र',
    photographs: 'पासपोर्ट साइज फोटो',
    transferCertificate: 'स्थानांतर प्रमाणपत्र (लागू असल्यास)',
    applicationStart: 'अर्ज सुरुवात:',
    applicationDeadline: 'अर्जाची शेवटची तारीख:',
    admissionTest: 'प्रवेश परीक्षा:',
    quickApply: 'त्वरित अर्ज',
    downloadApplication: 'अर्ज डाउनलोड करा',
    onlineApplication: 'ऑनलाइन अर्ज',
    contactAdmission: 'प्रवेश कार्यालयाशी संपर्क साधा',
    
    // About Us
    ourMission: 'आमचे ध्येय',
    ourVision: 'आमची दृष्टी',
    missionText: 'दर्जेदार शिक्षण प्रदान करणे जे तरुण मनांचे पोषण करते आणि त्यांना भविष्यातील आव्हानांसाठी तयार करते. आम्ही शैक्षणिक उत्कृष्टता आणि चारित्र्य निर्माणाद्वारे विद्यार्थ्यांच्या सर्वांगीण विकासावर विश्वास ठेवतो.',
    visionText: 'एक आघाडीची शैक्षणिक संस्था बनणे जी जबाबदार जागतिक नागरिक आणि भविष्यातील नेते तयार करते जे समाजात सकारात्मक योगदान देतात.',
    coreValues: 'मूलभूत मूल्ये',
    excellenceEducation: 'शिक्षणातील उत्कृष्टता',
    integrityHonesty: 'सचोटी आणि प्रामाणिकपणा',
    respectDiversity: 'विविधतेचा आदर',
    innovationCreativity: 'नवाचार आणि सर्जनशीलता',
    communityService: 'समुदायिक सेवा',
    environmentalResponsibility: 'पर्यावरणीय जबाबदारी',
    quickFacts: 'त्वरित तथ्ये',
    established: 'स्थापना:',
    students: 'विद्यार्थी:',
    teachers: 'शिक्षक:',
    campusSize: 'कॅम्पसचा आकार:',
    
    // Awards
    achievements: 'यश',
    bestSchoolAward: 'सर्वोत्तम शाळा पुरस्कार',
    excellenceScience: 'विज्ञानातील उत्कृष्टता',
    sportsChampionship: 'खेळ चॅम्पियनशिप',
    digitalInnovation: 'डिजिटल नवाचार पुरस्कार',
    environmentalExcellence: 'पर्यावरणीय उत्कृष्टता',
    academicExcellence: 'शैक्षणिक उत्कृष्टता',
    
    // Student Life
    activities: 'क्रियाकलाप',
    events: 'कार्यक्रम',
    lifeAtSchool: 'शाळेतील जीवन',
    extracurricularActivities: 'अभ्यासेतर क्रियाकलाप',
    artCraft: 'कला आणि हस्तकला क्लब',
    musicDance: 'संगीत आणि नृत्य',
    dramaSociety: 'नाटक मंडळ',
    photographyClub: 'फोटोग्राफी क्लब',
    debateSociety: 'वादविवाद मंडळ',
    sportsGames: 'खेळ आणि खेळ',
    footballCricket: 'फुटबॉल आणि क्रिकेट',
    basketball: 'बास्केटबॉल',
    swimmingPool: 'जलतरण तलाव',
    tableTennis: 'टेबल टेनिस',
    athleticsTrack: 'अॅथलेटिक्स ट्रॅक',
    academicClubs: 'शैक्षणिक क्लब',
    scienceClub: 'विज्ञान क्लब',
    mathOlympiad: 'गणित ऑलिम्पियाड',
    roboticsClub: 'रोबोटिक्स क्लब',
    computerProgramming: 'संगणक प्रोग्रामिंग',
    environmentalClub: 'पर्यावरण क्लब',
    
    // News Items
    academicExcellenceAward: 'शैक्षणिक उत्कृष्टता पुरस्कार 2024',
    newComputerLab: 'नवीन संगणक प्रयोगशाळेचे उद्घाटन',
    interSchoolSports: 'आंतर-शाळा खेळ विजय',
    academicExcellenceDesc: 'आमच्या शाळेला उत्कृष्ट शैक्षणिक कामगिरीसाठी राज्यस्तरीय मान्यता मिळाली आहे.',
    newComputerLabDesc: 'विद्यार्थ्यांसाठी नवीनतम तंत्रज्ञानासह अत्याधुनिक संगणक प्रयोगशाळा उघडली आहे.',
    interSchoolSportsDesc: 'आमच्या विद्यार्थ्यांनी जिल्हास्तरीय खेळ स्पर्धेत अनेक पदके जिंकली आहेत.',
    
    // Notifications
    feePaymentExtended: 'फी पेमेंटची देय तारीख 20 डिसेंबरपर्यंत वाढवली',
    parentTeacherMeeting: '18 डिसेंबरला पालक-शिक्षक बैठक नियोजित',
    newLibraryBooks: 'ग्रंथालयात नवीन पुस्तके जारी करण्यासाठी उपलब्ध',
    busRouteChanges: 'पुढच्या आठवड्यापासून शाळा बस मार्गात बदल',
    homeworkDeadline: 'सुट्टीतील गृहपाठ सादर करण्याची अंतिम मुदत: 22 डिसेंबर',
    annualFunctionRehearsals: '16 डिसेंबरपासून वार्षिक समारंभाच्या तालीम सुरू',
    medicalCheckup: '19 डिसेंबरला वैद्यकीय तपासणी शिबिर',
    newAdmissionForms: 'कार्यालयात नवीन प्रवेश फॉर्म उपलब्ध'
  }
};

export const languageNames: Record<Language, string> = {
  en: 'English',
  hi: 'हिंदी',
  mr: 'मराठी'
};