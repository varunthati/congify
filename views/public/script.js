document.addEventListener("DOMContentLoaded", () => {
    const passwordInput = document.getElementById("password");
    const strengthMessage = document.getElementById("strengthMessage");
    const form = document.getElementById("smartForm");
  
    passwordInput.addEventListener("input", () => {
      const strength = checkPasswordStrength(passwordInput.value);
      strengthMessage.textContent = strength.message;
      strengthMessage.className = `password-strength ${strength.class}`;
    });
  
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      if (!form.checkValidity()) {
        alert("Please fill in all fields correctly.");
        return;
      }
  
      // Example: Post data or just switch page
      navigateTo("thankYouPage");
      form.reset();
      strengthMessage.textContent = "";
    });
  });
  
  function checkPasswordStrength(password) {
    if (password.length < 6) {
      return { message: "Weak", class: "text-danger" };
    } else if (password.match(/[A-Z]/) && password.match(/[0-9]/)) {
      return { message: "Strong", class: "text-success" };
    } else {
      return { message: "Moderate", class: "text-warning" };
    }
  }
  
  function navigateTo(pageId) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(pageId).classList.add("active");
  }
  