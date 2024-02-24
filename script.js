const profileTitles = document.querySelectorAll(".profile-title");
const profileContents = document.querySelectorAll(".profile-content");


profileTitles.forEach(title => {
    title.addEventListener("click", ()=> {
        const targetId = title.dataset.target;
        const targetContent = document.querySelector(targetId)

        profileContents.forEach(content => {
            content.classList.remove("active-content")
        });


        profileTitles.forEach(title => {
            title.classList.remove("active");
        });

        targetContent.classList.add("active-content");
        title.classList.add("active");
    });
});


const typingEffect = new Typed(".typedText", {
    strings: ["Ali Hekmati", "Developer", "Designer", "Coder"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
});

ScrollReveal().reveal("#about", {delay: 1000})
ScrollReveal().reveal("#project", { delay: 1000 });
ScrollReveal().reveal("#contact", { delay: 1000 });

const bar = document.querySelector("#menu-bar");
const close = document.querySelector("#close");
const nav = document.querySelector("#navbar");


if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active")
    })
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active")
    })
}