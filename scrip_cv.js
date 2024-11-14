document.addEventListener("DOMContentLoaded", function() {
    // Add a fade-in effect for all sections
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.classList.add("fade-in");
        setTimeout(() => section.style.opacity = 1, 200);
    });

    // Make the header background color change on scroll
    window.addEventListener("scroll", function() {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#333";
        } else {
            header.style.backgroundColor = "#ff2600";
        }
    });

    // Add scale effect on profile image hover
    const profileImg = document.querySelector(".profile-img");
    profileImg.addEventListener("mouseover", function() {
        profileImg.style.transform = "scale(1.1)";
    });
    profileImg.addEventListener("mouseout", function() {
        profileImg.style.transform = "scale(1)";
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Interactive message on clicking the header
    const heroText = document.querySelector(".hero h1");
    heroText.addEventListener("click", function() {
        alert("Terima kasih telah mengunjungi portofolio saya!");
    });
});
