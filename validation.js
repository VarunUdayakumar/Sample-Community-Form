document.getElementById("Community_Form").addEventListener("submit",function(e) {
    e.preventDefault();
    let valid=true

    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    let name=document.getElementById("name").value.trim();
    let email=document.getElementById("email").value.trim();
    let gender=document.getElementById("gender").value.trim();
    let age=document.getElementById("age").value.trim();
    let description=document.getElementById("description").value.trim();
    let contact=document.getElementById("contact").value.trim();

    if(name===""){
        document.getElementById("nameError").textContent="Name is Required";
        valid=false;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "" || !email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Please enter a valid email.";
        valid = false;
    }

    if (!gender) {
        document.getElementById("genderError").textContent = "Please select your gender.";
        valid = false;
    }

    if (age === "" || isNaN(age) || age<18) {
        document.getElementById("ageError").textContent = "Please enter a valid age.";
        valid = false;
    }

    if (description.length < 10) {
        document.getElementById("descError").textContent = "Description must be at least 10 characters.";
        valid = false;
    }

    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(contact)) {
        document.getElementById("contactError").textContent = "Please enter a valid 10-digit phone number.";
        valid = false;
    }

    if (valid) {
        alert("Form submitted successfully!");
        this.submit();
    }

    });