  function validateForm() {
    let isValid = true;

    // Clear previous error messages
    document.querySelectorAll(".error").forEach(e => e.textContent = "");
    document.getElementById("successMessage").textContent = "";

    // Input values
    const name = document.getElementById("name");
    const fatherName = document.getElementById("fatherName");
    const college = document.getElementById("college");
    const year = document.getElementById("year");
    const branch = document.getElementById("branch");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");

    const alphaReg = /^[A-Za-z\s]+$/;
    const phoneReg = /^\d{10}$/;
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Name validation
    if (name.value.trim() === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      isValid = false;
    } else if (!alphaReg.test(name.value.trim())) {
      document.getElementById("nameError").textContent = "Name must contain only letters.";
      isValid = false;
    }

    // Father's name validation
    if (fatherName.value.trim() === "") {
      document.getElementById("fatherNameError").textContent = "Father's name is required.";
      isValid = false;
    } else if (!alphaReg.test(fatherName.value.trim())) {
      document.getElementById("fatherNameError").textContent = "Father's name must contain only letters.";
      isValid = false;
    }

    // College validation
    if (college.value.trim() === "") {
      document.getElementById("collegeError").textContent = "College name is required.";
      isValid = false;
    } else if (!alphaReg.test(college.value.trim())) {
      document.getElementById("collegeError").textContent = "College name must contain only letters.";
      isValid = false;
    }

    // Year validation
    if (year.value === "") {
      document.getElementById("yearError").textContent = "Please select a year.";
      isValid = false;
    }

    // Branch validation
    if (branch.value === "") {
      document.getElementById("branchError").textContent = "Please select a branch.";
      isValid = false;
    }

    // Phone validation
    if (phone.value.trim() === "") {
      document.getElementById("phoneError").textContent = "Phone number is required.";
      isValid = false;
    } else if (!phoneReg.test(phone.value.trim())) {
      document.getElementById("phoneError").textContent = "Phone number must be exactly 10 digits.";
      isValid = false;
    }

    // Email validation
    if (email.value.trim() === "") {
      document.getElementById("emailError").textContent = "Email is required.";
      isValid = false;
    } else if (!emailReg.test(email.value.trim())) {
      document.getElementById("emailError").textContent = "Please enter a valid email address.";
      isValid = false;
    }

    // If everything is valid
    if (isValid) {
      document.getElementById("successMessage").textContent = "Registered successfully!";
      // Reset the form fields after short delay
      setTimeout(() => {
        name.value = "";
        fatherName.value = "";
        college.value = "";
        year.value = "";
        branch.value = "";
        phone.value = "";
        email.value = "";
        document.getElementById("successMessage").textContent = "";
      }, 2000); // 2 seconds delay to show success message
    }
  }

