const books = {
    "harry potter": "fantasy.html?book=harry potter",
    "the hobbit": "fantasy.html?book=the hobbit",
    "the lord of the rings": "fantasy.html?book=the lord of the rings",
    "percy jackson & the lightning thief": "fantasy.html?book=percy jackson & the lightning thief",
    "mistborn the final empire": "fantasy.html?book=mistborn the final empire",
    "eragon": "fantasy.html?book=eragon",
    "the fellowship of the ring": "fantasy.html?book=the fellowship of the ring",

    "dracula": "horror.html?book=dracula",
    "frankenstein": "horror.html?book=frankenstein",
    "the shining": "horror.html?book=the shining",
    "pet sematary": "horror.html?book=pet sematary",
    "the haunting of hill house": "horror.html?book=the haunting of hill house",
    "bird box": "horror.html?book=bird box",
    "it": "horror.html?book=it",
    "the exorcist": "horror.html?book=the exorcist",

    "pride and prejudice": "romance.html?book=pride and prejudice",
    "the notebook": "romance.html?book=the notebook",
    "me before you": "romance.html?book=me before you",
    "the love hypothesis": "romance.html?book=the love hypothesis",
    "it ends with us": "romance.html?book=it ends with us",
    "beach read": "romance.html?book=beach read",

    "and then there were none": "mystery.html?book=and then there were none",
    "murder on the orient express": "mystery.html?book=murder on the orient express",
    "gone girl": "mystery.html?book=gone girl",
    "the silent patient": "mystery.html?book=the silent patient",
    "the da vinci code": "mystery.html?book=the da vinci code",
    "the girl with the dragon tattoo": "mystery.html?book=the girl with the dragon tattoo"
};

function searchBook() {
    let query = document.getElementById("searchBox").value.toLowerCase().trim();

    if (books[query]) {
        window.location.href = books[query];
    } else {
        alert("Book not found!");
    }
}

window.addEventListener("DOMContentLoaded", () => {
    let params = new URLSearchParams(window.location.search);
    let bookName = params.get("book");

    if (!bookName) return;

    let cards = document.querySelectorAll(".book-card");

    cards.forEach(card => {
        let titleEl = card.querySelector("h3");
        if (!titleEl) return;

        let text = titleEl.innerText.toLowerCase();

        if (text.includes(bookName.toLowerCase())) {
            card.classList.add("active");

            card.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    });
});
