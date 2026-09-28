const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));

        contents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");

        const targetID = tab.getAttribute("data-tab");

        document.getElementById(targetID).classList.add("active");
    });
});