const contactForm = document.getElementById("contactForm");
const messageInput = document.getElementById("message");
const charCount = document.getElementById("charCount");
const submitButton = document.getElementById("submitButton");
const buttonText = document.querySelector(".button-text");
const loader = document.querySelector(".loader");
const formStatus = document.getElementById("formStatus");

// Replace this later with your real API Gateway endpoint
const API_URL = "YOUR_API_GATEWAY_URL_HERE";

// Character counter
messageInput.addEventListener("input", function () {
  charCount.textContent = messageInput.value.length;
});

// Show status message
function showStatus(message, type) {
  formStatus.textContent = message;
  formStatus.className = `form-status ${type}`;
  formStatus.classList.remove("hidden");
}

// Loading state
function setLoading(isLoading) {
  submitButton.disabled = isLoading;

  if (isLoading) {
    buttonText.textContent = "Sending...";
    loader.classList.remove("hidden");
  } else {
    buttonText.textContent = "Send Message";
    loader.classList.add("hidden");
  }
}

// Basic email validation
function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

// Form submission
contactForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  formStatus.classList.add("hidden");

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = messageInput.value.trim();

  // Validation
  if (!name || !email || !subject || !message) {
    showStatus("Please complete all fields.", "error");
    return;
  }

  if (!isValidEmail(email)) {
    showStatus("Please enter a valid email address.", "error");
    return;
  }

  if (message.length < 10) {
    showStatus("Please enter a little more detail in your message.", "error");
    return;
  }

  const formData = {
    name,
    email,
    subject,
    message
  };

  setLoading(true);

  try {
    // Temporary demo mode until AWS API Gateway is connected
    if (API_URL === "YOUR_API_GATEWAY_URL_HERE") {
      await new Promise(resolve => setTimeout(resolve, 1200));

      showStatus(
        "Demo successful. The form is ready to connect to AWS API Gateway.",
        "success"
      );

      contactForm.reset();
      charCount.textContent = "0";
      return;
    }

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    showStatus(
      "Thank you. Your message has been sent successfully.",
      "success"
    );

    contactForm.reset();
    charCount.textContent = "0";

  } catch (error) {
    console.error(error);

    showStatus(
      "Sorry, your message could not be sent. Please try again.",
      "error"
    );

  } finally {
    setLoading(false);
  }
});
