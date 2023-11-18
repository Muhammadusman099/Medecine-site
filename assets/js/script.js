const FAQ_contents = document.querySelectorAll(".FAQ_content");

FAQ_contents.forEach(FAQ_content => {
    FAQ_content.addEventListener("click", () => {
        FAQ_content.classList.toggle("active");
    })
})