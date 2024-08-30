document.addEventListener("DOMContentLoaded", function () {
  // Updated course data with a more detailed English description
  const courseData = {
    title: "Computer Science",
    description:
      "The Computer Science program provides a comprehensive education in the principles and applications of computing. It covers a broad range of topics including software development, algorithms, data structures, computer architecture, artificial intelligence, cybersecurity, and more. Throughout the course, students will develop critical problem-solving skills and learn how to approach complex computational challenges. The curriculum emphasizes both theoretical foundations and practical applications, preparing students to design and implement innovative software solutions. Graduates of the program will be equipped to pursue careers in various fields such as software engineering, data analysis, systems administration, and more.",
    enrollmentPrice: "R$ 800,00",
    annualPrice: "R$ 16.000,00",
    duration: "4 years",
  };

  // Updating the page with the course details
  document.getElementById("course-title").innerText = courseData.title;
  document.getElementById("course-description").innerText =
    courseData.description;
  document.getElementById("enrollment-price").innerText =
    courseData.enrollmentPrice;
  document.getElementById("annual-price").innerText = courseData.annualPrice;
  document.getElementById("duration").innerText = courseData.duration;
});
