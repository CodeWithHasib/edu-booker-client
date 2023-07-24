const get4DigitCode = () => {
  const code = Math.floor(1000 + Math.random() * 9000);
  return code;
}
const data = [
  {
    id: 1,
    name: "ABC College",
    image: "https://img.freepik.com/free-photo/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-education-theme_627829-6007.jpg?w=740&t=st=1690013394~exp=1690013994~hmac=60b5bb6c8a4850b8a204516d6c656bf9cff1233fb852900763991f1ed4e49592",
    admissionDate: "August 15, 2023",
    events: ["Fresher's Party", "Tech Fest", "Sports Day"],
    researchHistory: "Established in 1950, one of the top research institutes.",
    sports: "Football, Basketball, Cricket",
  },
  {
    id: 2,
    name: "XYZ University",
    image: "https://img.freepik.com/free-photo/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-education-theme_627829-6007.jpg?w=740&t=st=1690013394~exp=1690013994~hmac=60b5bb6c8a4850b8a204516d6c656bf9cff1233fb852900763991f1ed4e49592",
    admissionDate: "September 1, 2023",
    events: ["Cultural Fest", "Science Exhibition", "Alumni Meet"],
    researchHistory: "Pioneering research center with cutting-edge facilities.",
    sports: "Tennis, Volleyball, Badminton",
  },
  {
    id: 3,
    name: "PQR Institute",
    image: "https://img.freepik.com/free-photo/group-five-african-college-students-spending-time-together-campus-university-yard-black-afro-friends-studying-education-theme_627829-6007.jpg?w=740&t=st=1690013394~exp=1690013994~hmac=60b5bb6c8a4850b8a204516d6c656bf9cff1233fb852900763991f1ed4e49592",
    admissionDate: "July 30, 2023",
    events: ["Annual Convocation", "Coding Competition", "Literary Fest"],
    researchHistory: "Renowned for innovative research and academic excellence.",
    sports: "Athletics, Swimming, Table Tennis",
  },
];
const colleges = [
  {
    id: 1,
    name: "ABC College",
    image: "https://example.com/abc_college.jpg",
    admissionDate: "August 15, 2023",
    events: ["Fresher's Party", "Tech Fest", "Sports Day"],
    researchHistory: "Established in 1950, one of the top research institutes.",
    sports: "Football, Basketball, Cricket",
    details: {
      images: [
        "https://example.com/abc_college/image1.jpg",
        "https://example.com/abc_college/image2.jpg",
        "https://example.com/abc_college/image3.jpg",
      ],
      admissionProcess:
        "Admission process at ABC College begins in June every year. Students need to apply online and complete the necessary formalities, including submitting academic transcripts and attending an entrance examination.",
      eventsDetails:
        "ABC College hosts a variety of events throughout the year. The Fresher's Party welcomes new students and helps them integrate into college life. The Tech Fest showcases innovative projects from students and industry experts. The Sports Day is a thrilling day filled with various sports competitions.",
      researchWorks:
        "ABC College is known for its groundbreaking research in various fields, including technology, medicine, and environmental studies. Researchers at ABC College have received numerous awards and recognition for their contributions to academia and society.",
      sportsCategories:
        "Sports enthusiasts at ABC College can choose from a wide range of sports activities. The college has well-equipped facilities for football, basketball, and cricket. Students also enjoy participating in intercollegiate tournaments and championships.",
    },
  },
  {
    id: 2,
    name: "XYZ University",
    image: "https://example.com/xyz_university.jpg",
    admissionDate: "September 1, 2023",
    events: ["Cultural Fest", "Science Exhibition", "Alumni Meet"],
    researchHistory: "Pioneering research center with cutting-edge facilities.",
    sports: "Tennis, Volleyball, Badminton",
    details: {
      images: [
        "https://example.com/xyz_university/image1.jpg",
        "https://example.com/xyz_university/image2.jpg",
        "https://example.com/xyz_university/image3.jpg",
      ],
      admissionProcess:
        "Admission process at XYZ University includes a rigorous selection procedure based on academic performance and extracurricular activities. Prospective students need to submit their application forms and attend an entrance examination.",
      eventsDetails:
        "XYZ University celebrates its diverse culture with various events. The Cultural Fest showcases talents from different regions, and the Science Exhibition highlights groundbreaking research by students and faculty. The Alumni Meet brings together former students to network and share experiences.",
      researchWorks:
        "XYZ University has a long-standing history of pioneering research in various scientific domains. The university's research centers collaborate with leading industries and institutions worldwide. Researchers at XYZ University have published numerous research papers in esteemed journals.",
      sportsCategories:
        "Sports enthusiasts at XYZ University can choose from a wide range of sports activities. The university has state-of-the-art facilities for tennis, volleyball, and badminton. Students participate in inter-university sports competitions and bring home accolades.",
    },
  },
  {
    id: 3,
    name: "PQR Institute",
    image: "https://example.com/pqr_institute.jpg",
    admissionDate: "July 30, 2023",
    events: ["Annual Convocation", "Coding Competition", "Literary Fest"],
    researchHistory: "Renowned for innovative research and academic excellence.",
    sports: "Athletics, Swimming, Table Tennis",
    details: {
      images: [
        "https://example.com/pqr_institute/image1.jpg",
        "https://example.com/pqr_institute/image2.jpg",
        "https://example.com/pqr_institute/image3.jpg",
      ],
      admissionProcess:
        "Admission process at PQR Institute involves a comprehensive evaluation of candidates' academic records and performance in the entrance examination. Shortlisted students are invited for interviews and counseling sessions.",
      eventsDetails:
        "PQR Institute organizes various events that promote creativity and intellectual growth. The Annual Convocation celebrates the achievements of graduating students. The Coding Competition challenges students to showcase their programming skills, and the Literary Fest celebrates literary talents with poetry and storytelling sessions.",
      researchWorks:
        "PQR Institute is recognized for its groundbreaking research in diverse fields, such as medicine, engineering, and social sciences. Faculty members and students collaborate on research projects that address global challenges. The institute's research publications have a significant impact in the academic community.",
      sportsCategories:
        "Sports are an integral part of life at PQR Institute. The campus has excellent facilities for athletics, swimming, and table tennis. Students actively participate in intercollegiate sports competitions and bring home trophies and medals.",
    },
  },
  {
    id: 4,
    name: "FDN Institute",
    image: "https://img.freepik.com/premium-photo/king-s-college-chapel-cambridge_1339-82841.jpg?w=740",
    admissionDate: "July 30, 2023",
    events: ["Annual Convocation", "Coding Competition", "Literary Fest"],
    researchHistory: "Renowned for innovative research and academic excellence.",
    sports: "Athletics, Swimming, Table Tennis",
    details: {
      images: [
        "https://img.freepik.com/free-photo/brainstorm-meeting_1098-15871.jpg?w=740&t=st=1690211882~exp=1690212482~hmac=b2a28d5710bbb3620e942747db184fb6823434ec04c4d0c5313242e7a4de022b",
        "https://img.freepik.com/premium-photo/education-technology-internet-concept-two-smiling-students-with-laptop-notebooks-school_380164-45370.jpg?w=740",
        "https://img.freepik.com/free-psd/school-admission-social-media-post-instagram-post-template_501970-160.jpg?w=740&t=st=1690211929~exp=1690212529~hmac=456d9306eecee20b4ff3ef38b22aaaf2610a59bea0c60d7c00a85bfe6a6100bc",
      ],
      admissionProcess:
        "Admission process at PQR Institute involves a comprehensive evaluation of candidates' academic records and performance in the entrance examination. Shortlisted students are invited for interviews and counseling sessions.",
      eventsDetails:
        "PQR Institute organizes various events that promote creativity and intellectual growth. The Annual Convocation celebrates the achievements of graduating students. The Coding Competition challenges students to showcase their programming skills, and the Literary Fest celebrates literary talents with poetry and storytelling sessions.",
      researchWorks:
        "PQR Institute is recognized for its groundbreaking research in diverse fields, such as medicine, engineering, and social sciences. Faculty members and students collaborate on research projects that address global challenges. The institute's research publications have a significant impact in the academic community.",
      sportsCategories:
        "Sports are an integral part of life at PQR Institute. The campus has excellent facilities for athletics, swimming, and table tennis. Students actively participate in intercollegiate sports competitions and bring home trophies and medals.",
    },
  },
];

// Add more college objects with detailed information if needed.

console.log(JSON.stringify({
  id: 5,
  name: "BM College",
  image: "https://img.freepik.com/premium-photo/young-asian-indian-college-students-reading-books-studying-laptop-preparing-exam-working-group-project-while-sitting-grass-staircase-steps-college-campus_466689-7729.jpg?w=740",
  admissionDate: "July 30, 2023",
  events: ["Annual Convocation", "Coding Competition", "Literary Fest"],
  researchHistory: "Renowned for innovative research and academic excellence.",
  sports: "Athletics, Swimming, Table Tennis",
  details: {
    images: [
      "https://img.freepik.com/free-psd/school-admission-social-media-post-instagram-post-template_501970-160.jpg?w=740&t=st=1690211929~exp=1690212529~hmac=456d9306eecee20b4ff3ef38b22aaaf2610a59bea0c60d7c00a85bfe6a6100bc",
      "https://img.freepik.com/premium-photo/education-technology-internet-concept-two-smiling-students-with-laptop-notebooks-school_380164-45370.jpg?w=740",
      "https://img.freepik.com/free-psd/school-admission-social-media-post-instagram-post-template_501970-160.jpg?w=740&t=st=1690211929~exp=1690212529~hmac=456d9306eecee20b4ff3ef38b22aaaf2610a59bea0c60d7c00a85bfe6a6100bc",
    ],
    admissionProcess:
      "Admission process at PQR Institute involves a comprehensive evaluation of candidates' academic records and performance in the entrance examination. Shortlisted students are invited for interviews and counseling sessions.",
    eventsDetails:
      "PQR Institute organizes various events that promote creativity and intellectual growth. The Annual Convocation celebrates the achievements of graduating students. The Coding Competition challenges students to showcase their programming skills, and the Literary Fest celebrates literary talents with poetry and storytelling sessions.",
    researchWorks:
      "PQR Institute is recognized for its groundbreaking research in diverse fields, such as medicine, engineering, and social sciences. Faculty members and students collaborate on research projects that address global challenges. The institute's research publications have a significant impact in the academic community.",
    sportsCategories:
      "Sports are an integral part of life at PQR Institute. The campus has excellent facilities for athletics, swimming, and table tennis. Students actively participate in intercollegiate sports competitions and bring home trophies and medals.",
  },
}));


const collegeReviews = [
  {
    id: 1,
    college: "ABC College",
    review: "Excellent facilities and supportive faculty. Loved my time here!",
    rating: 4.5,
    name: "Md . Rakibul Islam",
  },
  {
    id: 2,
    college: "XYZ University",
    review: "Great campus and diverse student community. Highly recommended!",
    rating: 4.8,
    name: "Md . Rakibul Islam",
  },
  {
    id: 3,
    college: "PQR Institute",
    review: "Incredible research opportunities and top-notch education.",
    rating: 4.7,
    name: "Md . Rakibul Islam",
  },
];