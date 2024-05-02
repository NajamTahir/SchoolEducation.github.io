function calculateTotal() {
    var courseSelect = document.getElementById("course");
    var paymentSelect = document.getElementById("paymentMethod");
    var coursePrice = 0;
    
    // Assign price based on selected course
    switch (courseSelect.value) {
      case "Introduction to HTML & CSS":
      case "JavaScript Fundamentals":
      case "Python Programming":
      case "Data Analysis with Python":
      case "Web Design Principles":
      case "Introduction to SQL":
      case "Introduction to Machine Learning":
      case "Digital Marketing Basics":
      case "Business Communication Skills":
      case "Project Management Fundamentals":
      case "Introduction to Artificial Intelligence":
      case "Mobile App Development Basics":
      case "Social Media Marketing Strategies":
      case "Financial Management for Entrepreneurs":
      case "Introduction to Blockchain Technology":
        coursePrice = 1000;
        break;
      default:
        coursePrice = 0;
        break;
    }
  
    // If payment method is credit, add 5% processing fee
    if (paymentSelect.value === "Credit") {
      coursePrice += coursePrice * 0.05;
    }
  
    alert("Total Price: AED " + coursePrice.toFixed(2));
  }
  
  document.getElementById("calculateButton").addEventListener("click", calculateTotal);  