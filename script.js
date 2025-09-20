function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
    // Show chosen section
    document.getElementById(sectionId).style.display = 'block';
    // Scroll to exercises
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}


