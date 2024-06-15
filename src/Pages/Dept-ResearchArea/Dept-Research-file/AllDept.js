import Chemistry_short from "../Chemistry_short";

const All_Dept = [
  {
    dept: "Civil Engineering",
    id: 1,
    next_page: true,
    short_content: `The Civil Engineering Department at Puducherry Technological University (PTU) has positioned itself as a vanguard in both environmental sustainability and geotechnical advancements within the civil engineering domain. The department's dual focus not only on cutting-edge materials and sustainable practices but also on the intricate understanding and improvement of geotechnical properties underscores its comprehensive approach towards addressing contemporary challenges in construction and environmental stewardship. In geotechnical engineering, PTU has embarked on pioneering research aimed at enhancing ground improvement techniques and soil stabilization methods. This includes leveraging calcined clay for construction purposes, a practice that has garnered the department numerous international accolades.`,
    path_link: "/researchAreas/civil",
  },
  {
    dept: "Mechanical Engineering",
    id: 2,
    next_page: true,
    short_content: `The Mechanical Engineering Department is a Research centre of (i) QIP-AICTE, NDF-AICTE (ii) Pondicherry Central University and (iii) Puducherry Technological University. Out of the 18 faculty members of the department, 17 are recognised as research supervisors. The Mechanical Engineeing Department has the following research facilities for the conduct of research.`,
    path_link: "/researchAreas/mech",
  },
  {
    dept: "Computer Science and Engineering",
    id: 3,
    next_page: true,
    short_content: `The department of ECE is offering Ph. D program in Electronics and Communication Engineering. The major areas of research are Wireless Communication and Networks, Digital System Design, Digital Image Processing, Digital Signal Processing, Biomedical Engineering, Optical Networks,   Antennas, Mobile Adhoc and Wireless Sensor Networks,   Telemedicine, Bio medical signal processing, Medical Information and Signal Processing, Cryptography and Network Security, Securing Wireless and Sensor Networks, ASIC and VLSI Design, RF and Optical communication and Computer Networks. The Department of ECE is offering excellent facilities for the research scholars pursuing Ph. D program.`,
    path_link: "/researchAreas/cse",
  },
  {
    dept: "Electronics and Communication Engineering",
    id: 4,
    next_page: true,
    short_content: `The department of ECE is offering Ph. D program in Electronics and Communication Engineering. The major areas of research are Wireless Communication and Networks, Digital System Design, Digital Image Processing, Digital Signal Processing, Biomedical Engineering, Optical Networks,   Antennas, Mobile Adhoc and Wireless Sensor Networks,   Telemedicine, Bio medical signal processing, Medical Information and Signal Processing, Cryptography and Network Security, Securing Wireless and Sensor Networks, ASIC and VLSI Design, RF and Optical communication and Computer Networks. The Department of ECE is offering excellent facilities for the research scholars pursuing Ph. D program.`,
    path_link: "/researchAreas/ece",
  },
  {
    dept: "Electrical and Electronics Engineering",
    id: 5,
    next_page: true,
    short_content: `The Department of Electrical & Electronics Engineering (EEE) at PTU offers a vibrant environment for research in many areas of Electrical & Electronics Engineering. We are a team of 16 faculty (15 fulltime + 1 contract) and 2 staff members engaged in cutting edge research and teaching in several frontier areas of Electrical & Electronics Engineering.
    The discipline has a healthy mixture of young and experienced faculty members, all of whom display high levels of enthusiasm and dedication. We take our teaching very seriously Apart from teaching and research; the faculty members are actively involved in organizing technical workshops, short courses in focus areas and visits of scholars to create an environment conducive to experiential learning.`,
    path_link: "/researchAreas/eee",
  },
  {
    dept: "Electronics and Instrumentation Engineering",
    id: 6,
    next_page: false,
    component: false,
    content: `The Department of Electronics and Instrumentation Engineering was started in 1998 and has been producing resourceful engineers. The department has been blessed with well-experienced and highly-motivated faculty members. In academic research, most faculty members of the department are involved in research work in emerging areas which is the major strength of the department. The department primarily focuses on areas like microprocessors, micro- controllers, Telecommunication, Robotics, Biomedical, Digital signal processing, Transducers and measurement, Computer Control in Process applications, Virtual instrumentation etc. Practical knowledge being the most vital part of education, the department trains the students in the well-equipped laboratories like Electronics lab, transducers and measurements lab, process –control, automation lab, microcontrollers and microprocessors lab. All the labs are well equipped with state- of- the- art equipment and latest software packages like MATLAB, PLC, P- SPICE and LabVIEW for the accessibility of students.`,
  },
  {
    dept: "Chemical Engineering",
    id: 7,
    next_page: true,
    short_content: `The department of Chemical Engineering at PTU is endowed with expertise and facilities required to conduct research in the thrust areas of chemical and allied engineering. With faculty members holding Ph.D degrees from premier research institutions such as IIT Madras, IISc Bangalore, NIT Surathkal, Jadhavpur University and Pondicherry University. The department has capability to conduct research in the following areas... `,
    path_link: "/researchAreas/chem",
  },
  {
    dept: "Information Technology",
    id: 8,
    next_page: false,
    component: false,
    content: `The Department of Information Technology, PTU offers Under Graduate programme B.Tech (Information Technology), Post Graduate programme M.Tech (Internet of Things) and Doctoral programme Ph.D. The Department is committed to the preparation of graduates to address the great challenges in the field of Information Technology and to contribute for research and innovation that ensure the sustained growth in Computing.
    The Department has 5 labs with 125 computer systems with internet facilities. All the faculty members are Supervisors and have diversified expertise in IT field not restricted to Software Engineering, Image processing, Natural Language processing, Real time systems, Information Security, Distributed computing, Mobile Networks, Data Mining, Big Data, Machine Learning and Internet of Things. 
    At present around 30 Research scholars are pursuing their Ph.D course in the department both in full time and part time mode in Health care, Smart Agriculture, Business analytics, Information Security, Cloud computing, Software engineering, Internet of things etc.`,
  },
  {
    dept: "Physics",
    id: 9,
    next_page: false,
    component: false,
    content: `The Department of Physics has been functioning right from the inception of the institution in 1985. The Department initially functioned as a supporting department catering to the demands of the under-graduate students. The Department started a post-graduate course in Material Science and Technology in 1992. The M.Phil. and Ph.D. research programs were begun in 1997. The Department has a well-equipped Physics Laboratory and P.G. Material Science & Technology Laboratory. The laboratories of the department are equipped with state of the art equipment some of which include the following: Flaw Detector, Ultrasonic Magnetic Particle Detector, Eddy Current Detector, Strain analysis Equipment with DAS computer Stand-alone System, Viscometer (milli Pascal to mega Pascal range), Vacuum coating units with Electron Beam Gun, Four-probe, Two-probe Conductivity Measurement Setup, Differential Thermal Analyzer, Thermo Luminescence Set-up, High power Electro Magnet with imported gauss meters to measure axial and transverse magnetic fields, Electronic Balance Micro and Milligram Accuracy, Ball Mill (planetary type), and LCR meter. The department has five highly qualified and experienced faculty members.`,
  },
  {
    dept: "Chemistry",
    id: 10,
    next_page: false,
    component: true,
    display_component: { Chemistry_short },
  },
  {
    dept: "Mathematics",
    id: 11,
    next_page: false,
    component: false,
    content: `The Department of Physics has been functioning right from the inception of the institution in 1985. The Department initially functioned as a supporting department catering to the demands of the under-graduate students. The Department started a post-graduate course in Material Science and Technology in 1992. The M.Phil. and Ph.D. research programs were begun in 1997. The Department has a well-equipped Physics Laboratory and P.G. Material Science & Technology Laboratory. The laboratories of the department are equipped with state of the art equipment some of which include the following: Flaw Detector, Ultrasonic Magnetic Particle Detector, Eddy Current Detector, Strain analysis Equipment with DAS computer Stand-alone System, Viscometer (milli Pascal to mega Pascal range), Vacuum coating units with Electron Beam Gun, Four-probe, Two-probe Conductivity Measurement Setup, Differential Thermal Analyzer, Thermo Luminescence Set-up, High power Electro Magnet with imported gauss meters to measure axial and transverse magnetic fields, Electronic Balance Micro and Milligram Accuracy, Ball Mill (planetary type), and LCR meter. The department has five highly qualified and experienced faculty members.`,
  },
];

export { All_Dept };
