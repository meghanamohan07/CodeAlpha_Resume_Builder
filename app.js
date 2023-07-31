document.getElementById("profile-img-upload").addEventListener("change", function() {
    const file = this.files[0];
    const reader = new FileReader();
 
    reader.onloadend = function() {
      const profileImage = document.getElementById("profile-img");
      profileImage.src = reader.result;
    }
 
    if (file) {
      reader.readAsDataURL(file);
    } else {
      const profileImage = document.getElementById("profile-img");
      profileImage.src = "";
    }
  });
 
  function generateResume() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const experience = document.getElementById("experience").value;
    const skills = document.getElementById("skills").value;
    const projects = document.getElementById("projects").value;
    const certifications = document.getElementById("certifications").value;
    const languages = document.getElementById("languages").value;
 
    const resumeContent = `
                 <h2>${name}</h2>
                 <p>Email: ${email}</p>
                 <p>Phone: ${phone}</p>
 
                 <h3>Education</h3>
                 <p>${education}</p>
 
                 <h3>Work Experience</h3>
                 <p>${experience}</p>
 
                 <h3>Skills</h3>
                 <p>${skills}</p>
 
                 <h3>Projects</h3>
                 <p>${projects}</p>
 
                 <h3>Certifications</h3>
                 <p>${certifications}</p>
 
                 <h3>Languages</h3>
                 <p>${languages}</p>
             `;
 
    document.getElementById("resume-preview").innerHTML = resumeContent;
  }