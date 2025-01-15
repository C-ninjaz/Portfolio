// !TOGGLE NAVIGATION MENU AND ICONS

const menuToggleButton = document.querySelector(".menu-toggle-button");
const menuElement = document.querySelector(".menu");

const toggleMenu = () => {
  menuElement.classList.toggle("active");
  menuToggleButton.classList.toggle("active");
};

menuToggleButton.addEventListener("click", toggleMenu);

// !REMOVE ACTIVE CLASS FROM ICON AND ON LINK CLICK
const removeActiveLinkClass = (e) => {
  if (e.target.classList.contains("list-link")) {
    menuElement.classList.remove("active");
    menuToggleButton.classList.remove("active");
  }
};

document.addEventListener("click", removeActiveLinkClass);

// !TOGGLE THEME AND STORE SELECTION WITHIN LOCAL STORAGE
const themeToggleButton = document.querySelector(".theme-toggle-button");
const bodyElement = document.body;
const currentTheme = localStorage.getItem("darkTheme");

if (currentTheme) {
  bodyElement.classList.add("dark-theme");
}

const toggleTheme = () => {
  bodyElement.classList.toggle("dark-theme");

  if (bodyElement.classList.contains("dark-theme")) {
    localStorage.setItem("darkTheme", "active");
  } else {
    localStorage.removeItem("darkTheme");
  }
};

themeToggleButton.addEventListener("click", toggleTheme);

// !SCROLL REVEAL
const sr = ScrollReveal({
  distance: "50px",
  duration: 1500,
  easing: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
});

sr.reveal(".main-title", { origin: "top" });
sr.reveal(".scroll-reveal-left", { origin: "left" });
sr.reveal(".scroll-reveal-right", { origin: "right" });
sr.reveal(".tech-stack-item", { interval: 250 });
sr.reveal(".section-title, .section-subtitle-container", {
  origin: "top",
  interval: 250,
});
sr.reveal(".portfolio-card", { interval: 500 });
sr.reveal(".form-container, .footer", {
  origin: "top",
  interval: 250,
});

function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Here you can handle the form data (e.g., send it via fetch to your server)
  console.log("Form submitted:", { name, email, message });

  // Optionally, reset the form after submission
  event.target.reset();

  // Show a success message or redirect as needed
  alert("Thank you for your message!");

  return false; // Prevent default form submission
}
