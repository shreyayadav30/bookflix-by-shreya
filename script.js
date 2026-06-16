function searchBook() {
    let query = document.getElementById("searchBox").value.toLowerCase().trim();

    let bookCards = document.querySelectorAll(".book-card");
    let found = false;

    bookCards.forEach(book => {
       let text = book.querySelector("h3").innerText.toLowerCase();

        if (query !== "" && text.includes(query)) {
            book.classList.add("active");

            if (!found) {
                book.scrollIntoView({ behavior: "smooth", block: "center" });
            }

            found = true;
        } else {
            book.classList.remove("active");
        }
    });

    if (!found && query !== "") {
        alert("Book not found!");
    }
}
