const anchors = document.querySelectorAll('a[href*="a"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}