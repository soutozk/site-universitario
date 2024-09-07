document.addEventListener("DOMContentLoaded", function () {
  // Função para obter os parâmetros da URL
  function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return params.get("curso");
  }

  // Dados dos cursos
  const courseData = {
    "Computer Science": {
      title: "Computer Science",
      description:
        "The Computer Science course offers a comprehensive understanding of the theory and practice of computing and technology. Students will learn fundamental concepts in programming, algorithms, data structures, software development, databases, artificial intelligence, and cybersecurity. The course emphasizes problem-solving, critical thinking, and innovation, preparing students for careers in software engineering, system architecture, data science, and more. Graduates will be equipped with the skills to design, implement, and manage technology solutions across a variety of industries.",
      enrollmentPrice: "R$ 800,00",
      annualPrice: "R$ 16.000,00",
      duration: "4 years",
    },
    Administration: {
      title: "Administration",
      description:
        "The Administration course provides a comprehensive understanding of management principles and practices in various organizational settings. Students will learn key concepts in organizational behavior, strategic planning, human resources, financial management, and operations. The course emphasizes leadership skills, decision-making processes, and effective communication. Graduates will be equipped to manage and lead teams, optimize business processes, and contribute to organizational success across a range of industries.",
      enrollmentPrice: "R$ 500,00",
      annualPrice: "R$ 14.000,00",
      duration: "4 years",
    },
    "Systems Analysis and Development": {
      title: "Systems Analysis and Development",
      description:
        "The Systems Analysis and Development course focuses on the methodologies and practices involved in creating and managing information systems. Students will gain expertise in systems analysis, design, and development, including requirements gathering, modeling, and implementation. The course covers software engineering principles, project management, and system testing. Emphasis is placed on understanding user needs, developing efficient solutions, and managing system life cycles. Graduates will be prepared for roles in software development, systems analysis, and IT project management, with skills to drive technological innovation and improve organizational efficiency.",
      enrollmentPrice: "R$ 700,00",
      annualPrice: "R$ 15.500,00",
      duration: "3 years",
    },
    Agribusiness: {
      title: "Agribusiness",
      description:
        "The Agribusiness course offers an in-depth look at the intersection of agriculture and business management. Students will explore topics such as agricultural production, supply chain management, rural economics, farm management, and agribusiness finance. The course emphasizes the application of business principles to agricultural enterprises, including marketing strategies, risk management, and sustainability practices. Graduates will be prepared for careers in farm management, agricultural marketing, and rural development, with the skills to drive innovation and efficiency in the agribusiness sector.",
      enrollmentPrice: "R$ 600,00",
      annualPrice: "R$ 13.000,00",
      duration: "4 years",
    },
    Biomedicine: {
      title: "Biomedicine",
      description:
        "The Biomedicine course explores the scientific principles underlying health and disease. Students will study areas such as molecular biology, genetics, biochemistry, physiology, and pharmacology. The course emphasizes research methods, diagnostic techniques, and the development of therapeutic strategies. With a focus on understanding the biological mechanisms of diseases and disorders, students will gain the skills needed to work in research, clinical laboratories, and healthcare settings. Graduates will be equipped to contribute to advancements in medical science, diagnostics, and treatment.",
      enrollmentPrice: "R$ 750,00",
      annualPrice: "R$ 17.000,00",
      duration: "4 years",
    },
    Design: {
      title: "Design",
      description:
        "The Design course provides a comprehensive foundation in the principles and practices of design across various mediums. Students will explore areas such as graphic design, product design, user experience (UX), and visual communication. The course covers design theory, aesthetics, creative problem-solving, and the use of design software. Emphasis is placed on developing a portfolio of work, understanding design processes, and applying design thinking to real-world projects. Graduates will be prepared for careers in creative industries, including branding, advertising, and digital media, with the skills to create innovative and effective design solutions.",
      enrollmentPrice: "R$ 550,00",
      annualPrice: "R$ 12.500,00",
      duration: "4 years",
    },
    Law: {
      title: "Law",
      description:
        "The Law course provides a thorough understanding of legal principles, systems, and practices. Students will study various areas of law, including constitutional law, criminal law, civil rights, contract law, and international law. The course emphasizes critical thinking, legal research, and analytical skills, preparing students for roles in legal practice, judiciary, and public policy. Graduates will be equipped to navigate the legal system, advocate for clients, and contribute to the development and enforcement of laws and regulations.",
      enrollmentPrice: "R$ 900,00",
      annualPrice: "R$ 18.000,00",
      duration: "5 years",
    },
    "Interior Design": {
      title: "Interior Design",
      description:
        "The Interior Design course provides a comprehensive education in the art and science of creating functional and aesthetically pleasing interior spaces. Students will study design principles, color theory, space planning, furniture design, and lighting. The course emphasizes hands-on experience with design software, materials, and construction techniques, as well as understanding client needs and preferences. Graduates will be prepared to design residential, commercial, and institutional spaces, with the skills to create environments that enhance comfort, functionality, and visual appeal.",
      enrollmentPrice: "R$ 600,00",
      annualPrice: "R$ 14.500,00",
      duration: "3 years",
    },
    "Accounting Sciences": {
      title: "Accounting Sciences",
      description:
        "The Accounting Sciences course offers a comprehensive study of accounting principles and practices essential for financial management and reporting. Students will explore topics such as financial accounting, managerial accounting, auditing, tax accounting, and accounting information systems. The course emphasizes the preparation and analysis of financial statements, budgeting, and regulatory compliance. Graduates will be equipped to pursue careers in accounting, finance, and auditing, with the skills to manage financial records, perform financial analysis, and ensure accurate reporting.",
      enrollmentPrice: "R$ 650,00",
      annualPrice: "R$ 13.500,00",
      duration: "4 years",
    },
    "Biological Sciences": {
      title: "Biological Sciences",
      description:
        "The Biology course provides a thorough exploration of the living world, focusing on the structure, function, growth, evolution, and distribution of organisms. Students will study fundamental concepts in cell biology, genetics, ecology, physiology, and molecular biology. The course emphasizes hands-on laboratory work, critical thinking, and scientific research skills. Graduates will be prepared for careers in research, healthcare, environmental science, and biotechnology, with a strong foundation in understanding biological processes and their applications.",
      enrollmentPrice: "R$ 700,00",
      annualPrice: "R$ 15.000,00",
      duration: "4 years",
    },
    Gastronomy: {
      title: "Gastronomy",
      description:
        "The Gastronomy course delves into the art and science of cooking and food preparation. Students will explore culinary techniques, food safety, nutrition, menu planning, and the cultural aspects of cuisine. The course emphasizes hands-on experience in cooking, baking, and food presentation, as well as an understanding of flavor profiles, ingredient sourcing, and kitchen management. Graduates will be prepared for careers in restaurants, catering, food service management, and culinary innovation, with the skills to create exceptional dining experiences and contribute to the evolving field of gastronomy.",
      enrollmentPrice: "R$ 800,00",
      annualPrice: "R$ 16.500,00",
      duration: "2 years",
    },
    Pharmacy: {
      title: "Pharmacy",
      description:
        "The Pharmacy course provides a comprehensive education in the science and practice of pharmacy. Students will study pharmaceutical sciences, including pharmacology, medicinal chemistry, pharmacokinetics, and therapeutics. The course emphasizes drug development, medication management, patient care, and ethical considerations in pharmacy practice. Students will gain practical experience through laboratory work, clinical rotations, and patient interactions. Graduates will be prepared for careers as pharmacists, with the skills to ensure safe and effective medication use, provide healthcare advice, and contribute to the improvement of patient health outcomes.",
      enrollmentPrice: "R$ 850,00",
      annualPrice: "R$ 17.500,00",
      duration: "5 years",
    },
    Dentistry: {
      title: "Dentistry",
      description:
        "The Dentistry course provides an in-depth education in the diagnosis, treatment, and prevention of dental and oral health issues. Students will study dental anatomy, oral pathology, preventive dentistry, prosthodontics, periodontics, and orthodontics. The course emphasizes clinical skills, patient care, and the use of modern dental technologies and techniques. Hands-on experience is gained through clinical practice and simulation labs. Graduates will be prepared to become licensed dentists, with the skills to deliver comprehensive dental care, manage oral health conditions, and contribute to improving patient well-being.",
      enrollmentPrice: "R$ 1.000,00",
      annualPrice: "R$ 20.000,00",
      duration: "5 years",
    },
    Medicine: {
      title: "Medicine",
      description:
        "The Medicine course provides a rigorous and comprehensive education in the medical sciences and clinical practice. Students will study human anatomy, physiology, pathology, pharmacology, and various medical specialties. The course emphasizes diagnostic skills, patient care, medical ethics, and evidence-based medicine. Hands-on clinical experience is gained through rotations in hospitals and healthcare settings, where students apply their knowledge in real-world scenarios. Graduates will be prepared to pursue medical licensure and careers as physicians, equipped to diagnose, treat, and prevent diseases, and provide compassionate care to patients.",
      enrollmentPrice: "R$ 1.500,00",
      annualPrice: "R$ 25.000,00",
      duration: "6 years",
    },
    "Veterinary Medicine": {
      title: "Veterinary Medicine",
      description:
        "The Veterinary Medicine course provides an extensive education in the health and care of animals. Students will study animal anatomy, physiology, pathology, pharmacology, and various veterinary specialties. The course emphasizes clinical skills, diagnostic techniques, surgery, and preventive medicine for a range of animal species. Hands-on experience is gained through clinical rotations and practical training in veterinary clinics and hospitals. Graduates will be prepared to become licensed veterinarians, with the skills to diagnose, treat, and prevent animal diseases, and to promote animal health and welfare.",
      enrollmentPrice: "R$ 1.200,00",
      annualPrice: "R$ 22.000,00",
      duration: "5 years",
    },
    Journalism: {
      title: "Journalism",
      description:
        "The Journalism course provides a thorough understanding of the principles and practices of news reporting and media production. Students will learn about news writing, investigative journalism, media ethics, digital storytelling, and multimedia production. The course emphasizes critical thinking, research skills, and the ability to communicate effectively across various platforms, including print, online, and broadcast media. Graduates will be prepared for careers in newsrooms, digital media, public relations, and content creation, with the skills to gather, analyze, and report news in a dynamic and rapidly changing media landscape.",
      enrollmentPrice: "R$ 600,00",
      annualPrice: "R$ 13.500,00",
      duration: "4 years",
    },
    Architecture: {
      title: "Architecture",
      description:
        "The Architecture course provides a comprehensive education in the design and construction of buildings and other structures. Students will study architectural theory, design principles, structural engineering, urban planning, and environmental sustainability. The course emphasizes creative design, technical skills, and the use of architectural software and tools. Hands-on experience is gained through design studios, project work, and real-world case studies. Graduates will be prepared for careers in architectural practice, urban design, and construction management, with the skills to create functional, aesthetic, and sustainable architectural solutions.",
      enrollmentPrice: "R$ 700,00",
      annualPrice: "R$ 15.000,00",
      duration: "5 years",
    },
    "Civil Engineering": {
      title: "Civil Engineering",
      description:
        "The Civil Engineering course offers a comprehensive education in the design, construction, and maintenance of infrastructure projects. Students will study core areas such as structural engineering, geotechnical engineering, transportation engineering, water resources, and environmental engineering. The course emphasizes practical skills in project management, structural analysis, and the application of engineering principles to solve real-world problems. Hands-on experience is gained through laboratory work, field studies, and project-based learning. Graduates will be prepared for careers in infrastructure development, construction management, and urban planning, with the expertise to design and implement safe and efficient engineering solutions.",
      enrollmentPrice: "R$ 800,00",
      annualPrice: "R$ 16.000,00",
      duration: "5 years",
    },
    "Software Engineering": {
      title: "Software Engineering",
      description:
        "The Software Engineering course provides a detailed education in the principles and practices of software development. Students will study software design, development methodologies, algorithms, data structures, and system architecture. The course emphasizes practical skills in programming, software testing, project management, and version control. Students will work on real-world projects to apply their knowledge and develop robust, scalable software solutions. Graduates will be prepared for careers in software development, system analysis, and IT project management, with the expertise to design, build, and maintain complex software systems.",
      enrollmentPrice: "R$ 750,00",
      annualPrice: "R$ 15.500,00",
      duration: "4 years",
    },
    Nutrition: {
      title: "Nutrition",
      description:
        "The Nutrition course provides a comprehensive understanding of the role of diet and nutrition in health and disease. Students will study topics such as human nutrition, metabolic processes, dietary guidelines, nutritional assessment, and food science. The course emphasizes the application of nutrition principles to promote health, prevent disease, and manage medical conditions through diet. Hands-on experience is gained through practical labs, case studies, and diet planning. Graduates will be prepared for careers in clinical nutrition, public health, food service management, and nutrition research, with the skills to develop and implement effective nutrition strategies.",
      enrollmentPrice: "R$ 600,00",
      annualPrice: "R$ 15.000,00",
      duration: "4 years",
    },
    Nursing: {
      title: "Nursing",
      description:
        "The Nursing course provides a comprehensive education in patient care and healthcare practices. Students will study essential topics such as anatomy, physiology, pharmacology, patient assessment, and clinical skills. The course emphasizes hands-on experience through clinical rotations, where students apply their knowledge in real-world healthcare settings. Training includes patient care, emergency response, health promotion, and ethical considerations in nursing practice. Graduates will be prepared to obtain licensure and pursue careers as registered nurses, equipped to provide compassionate, evidence-based care, and contribute to improving patient outcomes across various healthcare environments.",
      enrollmentPrice: "R$ 650,00",
      annualPrice: "R$ 14.500,00",
      duration: "4 years",
    },
  };

  // Função para atualizar os detalhes na página
  function updateCourseDetails(courseName) {
    const course = courseData[courseName];
    if (course) {
      document.getElementById("course-title").innerText = course.title;
      document.getElementById("course-description").innerText =
        course.description;
      document.getElementById("enrollment-price").innerText =
        course.enrollmentPrice;
      document.getElementById("annual-price").innerText = course.annualPrice;
      document.getElementById("duration").innerText = course.duration;
    } else {
      // Caso o curso não seja encontrado
      document.getElementById("course-title").innerText =
        "Curso não encontrado";
    }
  }

  // Obter o nome do curso a partir da URL
  const selectedCourse = decodeURIComponent(getQueryParams());

  // Atualizar os detalhes do curso na página
  updateCourseDetails(selectedCourse);
});
