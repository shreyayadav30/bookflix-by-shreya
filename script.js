function searchBook() {
    const searchBox = document.getElementById("searchBox");

    if (!searchBox) {
        console.log("Search box not found!");
        return;
    }

    let query = searchBox.value.toLowerCase().trim();

    console.log("Searching:", query);

    const books = {
        "harry potter": "fantasy.html",
        "the hobbit": "fantasy.html",
        "the lord of the rings": "fantasy.html",
        "percy jackson & the lightning thief": "fantasy.html",
        "mistborn the final empire": "fantasy.html",
        "eragon": "fantasy.html",
        "the fellowship of the ring": "fantasy.html",

        "dracula": "horror.html",
        "frankenstein": "horror.html",
        "the shining": "horror.html",
        "pet sematary": "horror.html",
        "the haunting of hill house": "horror.html",
        "bird box": "horror.html",
        "it": "horror.html",
        "the exorcist": "horror.html",

        "pride and prejudice": "romance.html",
        "the notebook": "romance.html",
        "me before you": "romance.html",
        "the love hypothesis": "romance.html",
        "it ends with us": "romance.html",
        "beach read": "romance.html",

        "and then there were none": "mystery.html",
        "murder on the orient express": "mystery.html",
        "gone girl": "mystery.html",
        "the silent patient": "mystery.html",
        "the da vinci code": "mystery.html",
        "the girl with the dragon tattoo": "mystery.html"
    };

    // 1️⃣ PAGE REDIRECT CHECK
    if (books[query]) {
        window.location.href = books[query];
        return;
    }

    // 2️⃣ UI HIGHLIGHT
    let bookCards = document.querySelectorAll(".book-card");
    let found = false;

    bookCards.forEach(book => {
        let text = book.innerText.toLowerCase();

        if (text.includes(query) && query !== "") {
            book.classList.add("active");
            book.scrollIntoView({ behavior: "smooth", block: "center" });
            found = true;
        } else {
            book.classList.remove("active");
        }
    });

    if (!found) {
        alert("Book not found!");
    }
}
