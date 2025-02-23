let scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

scrollTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
