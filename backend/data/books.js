const books = [
  // =====================
  // FANTASY
  // =====================

  {
    id: 1,
    title: "Harry Potter",
    author: "J.K. Rowling",
    genre: "Fantasy",
    cover: "/harrypoter.jpg",
    buyLink: "https://www.amazon.in/s?k=Harry+Potter"
  },
  {
    id: 2,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    cover: "/the hobbit.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Hobbit"
  },
  {
    id: 3,
    title: "Eragon",
    author: "Christopher Paolini",
    genre: "Fantasy",
    cover: "/eragon.jpg",
    buyLink: "https://www.amazon.in/s?k=Eragon"
  },
  {
  id: 4,
  title: "The Lord of the Rings",
  author: "J.R.R. Tolkien",
  genre: "Fantasy",
  cover: "https://covers.openlibrary.org/b/isbn/9780544273443-L.jpg",
  buyLink: "https://www.amazon.in/s?k=The+Lord+of+the+Rings"
},
  {
    id: 5,
    title: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    genre: "Fantasy",
    cover: "https://covers.openlibrary.org/b/isbn/9780064405058-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Chronicles+of+Narnia"
  },

  // =====================
  // HORROR
  // =====================

  {
    id: 6,
    title: "Dracula",
    author: "Bram Stoker",
    genre: "Horror",
    cover: "/dracula.jpg",
    buyLink: "https://www.amazon.in/s?k=Dracula"
  },
  {
    id: 7,
    title: "It",
    author: "Stephen King",
    genre: "Horror",
    cover: "/It stepen king.jpg",
    buyLink: "https://www.amazon.in/s?k=It+Stephen+King"
  },
  {
    id: 8,
    title: "Bird Box",
    author: "Josh Malerman",
    genre: "Horror",
    cover: "/birdbox.jpg",
    buyLink: "https://www.amazon.in/s?k=Bird+Box"
  },
  {
    id: 9,
    title: "The Shining",
    author: "Stephen King",
    genre: "Horror",
    cover: "https://covers.openlibrary.org/b/isbn/9780307743657-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Shining+Stephen+King"
  },
  {
    id: 10,
    title: "The Exorcist",
    author: "William Peter Blatty",
    genre: "Horror",
    cover: "https://covers.openlibrary.org/b/isbn/9780061007224-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Exorcist+William+Peter+Blatty"
  },

  // =====================
  // ROMANCE
  // =====================

  {
    id: 11,
    title: "Me Before You",
    author: "Jojo Moyes",
    genre: "Romance",
    cover: "/mebeforeyou.jpg",
    buyLink: "https://www.amazon.in/s?k=Me+Before+You"
  },
  {
    id: 12,
    title: "The Love Hypothesis",
    author: "Ali Hazelwood",
    genre: "Romance",
    cover: "/thelovehypothesis.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Love+Hypothesis"
  },
  {
    id: 13,
    title: "Beach Read",
    author: "Emily Henry",
    genre: "Romance",
    cover: "/beachread.jpg",
    buyLink: "https://www.amazon.in/s?k=Beach+Read+Emily+Henry"
  },
  {
    id: 14,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    cover: "https://covers.openlibrary.org/b/isbn/9780141439518-L.jpg",
    buyLink: "https://www.amazon.in/s?k=Pride+and+Prejudice"
  },
  {
    id: 15,
    title: "The Notebook",
    author: "Nicholas Sparks",
    genre: "Romance",
    cover: "https://covers.openlibrary.org/b/isbn/9780446605236-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Notebook+Nicholas+Sparks"
  },

  // =====================
  // MYSTERY
  // =====================

  {
    id: 16,
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    genre: "Mystery",
    cover: "/the girl with the dragon tattoo.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Girl+with+the+Dragon+Tattoo"
  },
  {
    id: 17,
    title: "Murder on the Orient Express",
    author: "Agatha Christie",
    genre: "Mystery",
    cover: "/murder on orient express.jpg",
    buyLink: "https://www.amazon.in/s?k=Murder+on+the+Orient+Express"
  },
  {
    id: 18,
    title: "The Da Vinci Code",
    author: "Dan Brown",
    genre: "Mystery",
    cover: "/the da vinci code.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Da+Vinci+Code"
  },
  {
  id: 19,
  title: "Gone Girl",
  author: "Gillian Flynn",
  genre: "Mystery",
  cover: "https://covers.openlibrary.org/b/isbn/9780307588364-L.jpg",
  buyLink: "https://www.amazon.in/s?k=Gone+Girl+Gillian+Flynn"
},
  {
    id: 20,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    genre: "Mystery",
    cover: "https://covers.openlibrary.org/b/isbn/9781250301697-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Silent+Patient"
  },
  
  // =====================
  // MORE FANTASY BOOKS
  // =====================
{
    id: 21,
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    genre: "Fantasy",
    cover: "https://covers.openlibrary.org/b/isbn/9780756404741-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Name+of+the+Wind"
  },
  {
    id: 22,
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    genre: "Fantasy",
    cover: "https://covers.openlibrary.org/b/isbn/9780007448036-L.jpg",
    buyLink: "https://www.amazon.in/s?k=A+Game+of+Thrones"
  },
  {
    id: 23,
    title: "The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    cover: "https://covers.openlibrary.org/b/isbn/9780261102354-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Fellowship+of+the+Ring"
  },
  {
    id: 24,
    title: "The Two Towers",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    cover: "https://covers.openlibrary.org/b/isbn/9780261102361-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Two+Towers"
  },
  {
    id: 25,
    title: "The Return of the King",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    cover: "https://covers.openlibrary.org/b/isbn/9780261102378-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Return+of+the+King"
  },
  {
    id: 26,
    title: "Percy Jackson and the Lightning Thief",
    author: "Rick Riordan",
    genre: "Fantasy",
    cover: "https://covers.openlibrary.org/b/isbn/9780786856299-L.jpg",
    buyLink: "https://www.amazon.in/s?k=Percy+Jackson+Lightning+Thief"
  },
  {
    id: 27,
    title: "The Sea of Monsters",
    author: "Rick Riordan",
    genre: "Fantasy",
    cover: "https://covers.openlibrary.org/b/isbn/9781423103349-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Sea+of+Monsters"
  },
  {
    id: 28,
    title: "The Titan's Curse",
    author: "Rick Riordan",
    genre: "Fantasy",
    cover: "https://covers.openlibrary.org/b/isbn/9781423101482-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Titan's+Curse"
  },
  {
    id: 29,
    title: "The Lightning Thief",
    author: "Rick Riordan",
    genre: "Fantasy",
    cover: "https://covers.openlibrary.org/b/isbn/9780786838653-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Lightning+Thief"
  },
  {
    id: 30,
    title: "The Golden Compass",
    author: "Philip Pullman",
    genre: "Fantasy",
    cover: "https://covers.openlibrary.org/b/isbn/9780440238133-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Golden+Compass"
  },
  {
    id: 31,
    title: "A Wizard of Earthsea",
    author: "Ursula K. Le Guin",
    genre: "Fantasy",
    cover: "https://covers.openlibrary.org/b/isbn/9780547773742-L.jpg",
    buyLink: "https://www.amazon.in/s?k=A+Wizard+of+Earthsea"
  },
  {
    id: 32,
    title: "The Once and Future King",
    author: "T.H. White",
    genre: "Fantasy",
    cover: "https://covers.openlibrary.org/b/isbn/9780441627400-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Once+and+Future+King"
  },
  {
    id: 33,
    title: "The Last Unicorn",
    author: "Peter S. Beagle",
    genre: "Fantasy",
    cover: "https://covers.openlibrary.org/b/isbn/9780451450525-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Last+Unicorn"
  },
  {
    id: 34,
    title: "Stardust",
    author: "Neil Gaiman",
    genre: "Fantasy",
    cover: "https://covers.openlibrary.org/b/isbn/9780061689246-L.jpg",
    buyLink: "https://www.amazon.in/s?k=Stardust+Neil+Gaiman"
  },
  {
    id: 35,
    title: "American Gods",
    author: "Neil Gaiman",
    genre: "Fantasy",
    cover: "https://covers.openlibrary.org/b/isbn/9780380973651-L.jpg",
    buyLink: "https://www.amazon.in/s?k=American+Gods"
  },
  {
    id: 36,
    title: "The Magicians",
    author: "Lev Grossman",
    genre: "Fantasy",
    cover: "https://covers.openlibrary.org/b/isbn/9780451529413-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Magicians+Lev+Grossman"
  },
  {
    id: 37,
    title: "The Priory of the Orange Tree",
    author: "Samantha Shannon",
    genre: "Fantasy",
    cover: "https://covers.openlibrary.org/b/isbn/9781635570298-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Priory+of+the+Orange+Tree"
  },
  {
    id: 38,
    title: "Six of Crows",
    author: "Leigh Bardugo",
    genre: "Fantasy",
    cover: "https://covers.openlibrary.org/b/isbn/9781250076960-L.jpg",
    buyLink: "https://www.amazon.in/s?k=Six+of+Crows"
  },
  {
    id: 39,
    title: "Shadow and Bone",
    author: "Leigh Bardugo",
    genre: "Fantasy",
    cover: "https://covers.openlibrary.org/b/isbn/9780805094596-L.jpg",
    buyLink: "https://www.amazon.in/s?k=Shadow+and+Bone"
  },
  {
    id: 40,
    title: "The Inheritance Cycle",
    author: "Christopher Paolini",
    genre: "Fantasy",
    cover: "https://covers.openlibrary.org/b/isbn/9780375846111-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Inheritance+Cycle"
  },
// =====================
  // MORE HORROR BOOKS
  // =====================

  {
    id: 41,
    title: "Pet Sematary",
    author: "Stephen King",
    genre: "Horror",
    cover: "https://covers.openlibrary.org/b/isbn/9781501156700-L.jpg",
    buyLink: "https://www.amazon.in/s?k=Pet+Sematary+Stephen+King"
  },
  {
    id: 42,
    title: "Misery",
    author: "Stephen King",
    genre: "Horror",
    cover: "https://covers.openlibrary.org/b/isbn/9781501143106-L.jpg",
    buyLink: "https://www.amazon.in/s?k=Misery+Stephen+King"
  },
  {
    id: 43,
    title: "Carrie",
    author: "Stephen King",
    genre: "Horror",
    cover: "https://covers.openlibrary.org/b/isbn/9780307743664-L.jpg",
    buyLink: "https://www.amazon.in/s?k=Carrie+Stephen+King"
  },
  {
    id: 44,
    title: "Salem's Lot",
    author: "Stephen King",
    genre: "Horror",
    cover: "https://covers.openlibrary.org/b/isbn/9780307743671-L.jpg",
    buyLink: "https://www.amazon.in/s?k=Salem's+Lot+Stephen+King"
  },
  {
    id: 45,
    title: "The Haunting of Hill House",
    author: "Shirley Jackson",
    genre: "Horror",
    cover: "https://covers.openlibrary.org/b/isbn/9780143039983-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Haunting+of+Hill+House"
  },
  {
    id: 46,
    title: "The Turn of the Screw",
    author: "Henry James",
    genre: "Horror",
    cover: "https://covers.openlibrary.org/b/isbn/9780140431056-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Turn+of+the+Screw"
  },
  {
    id: 47,
    title: "Frankenstein",
    author: "Mary Shelley",
    genre: "Horror",
    cover: "https://covers.openlibrary.org/b/isbn/9780486282114-L.jpg",
    buyLink: "https://www.amazon.in/s?k=Frankenstein+Mary+Shelley"
  },
  {
    id: 48,
    title: "The Strange Case of Dr Jekyll and Mr Hyde",
    author: "Robert Louis Stevenson",
    genre: "Horror",
    cover: "https://covers.openlibrary.org/b/isbn/9780486269683-L.jpg",
    buyLink: "https://www.amazon.in/s?k=Dr+Jekyll+and+Mr+Hyde"
  },
  {
    id: 49,
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    genre: "Horror",
    cover: "https://covers.openlibrary.org/b/isbn/9780141439570-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Picture+of+Dorian+Gray"
  },
  {
    id: 50,
    title: "The Call of Cthulhu",
    author: "H.P. Lovecraft",
    genre: "Horror",
    cover: "https://covers.openlibrary.org/b/isbn/9780553328258-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Call+of+Cthulhu"
  },
  {
    id: 51,
    title: "The Dunwich Horror",
    author: "H.P. Lovecraft",
    genre: "Horror",
    cover: "https://covers.openlibrary.org/b/isbn/9780345324496-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Dunwich+Horror"
  },
  {
    id: 52,
    title: "The Woman in Black",
    author: "Susan Hill",
    genre: "Horror",
    cover: "https://covers.openlibrary.org/b/isbn/9780099288473-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Woman+in+Black+Susan+Hill"
  },
  {
    id: 53,
    title: "The Ruins",
    author: "Scott Smith",
    genre: "Horror",
    cover: "https://covers.openlibrary.org/b/isbn/9780307393524-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Ruins+Scott+Smith"
  },
  {
    id: 54,
    title: "House of Leaves",
    author: "Mark Z. Danielewski",
    genre: "Horror",
    cover: "https://covers.openlibrary.org/b/isbn/9780375703768-L.jpg",
    buyLink: "https://www.amazon.in/s?k=House+of+Leaves"
  },
  {
    id: 55,
    title: "Bird Box",
    author: "Josh Malerman",
    genre: "Horror",
    cover: "https://covers.openlibrary.org/b/isbn/9780062259653-L.jpg",
    buyLink: "https://www.amazon.in/s?k=Bird+Box+Josh+Malerman"
  },
  {
    id: 56,
    title: "The Cabin at the End of the World",
    author: "Paul Tremblay",
    genre: "Horror",
    cover: "https://covers.openlibrary.org/b/isbn/9780062679109-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Cabin+at+the+End+of+the+World"
  },
  {
    id: 57,
    title: "Mexican Gothic",
    author: "Silvia Moreno-Garcia",
    genre: "Horror",
    cover: "https://covers.openlibrary.org/b/isbn/9780525620808-L.jpg",
    buyLink: "https://www.amazon.in/s?k=Mexican+Gothic"
  },
  {
    id: 58,
    title: "The Only Good Indians",
    author: "Stephen Graham Jones",
    genre: "Horror",
    cover: "https://covers.openlibrary.org/b/isbn/9781982136451-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Only+Good+Indians"
  },
  {
    id: 59,
    title: "Heart-Shaped Box",
    author: "Joe Hill",
    genre: "Horror",
    cover: "https://covers.openlibrary.org/b/isbn/9780061950720-L.jpg",
    buyLink: "https://www.amazon.in/s?k=Heart-Shaped+Box+Joe+Hill"
  },
  {
    id: 60,
    title: "NOS4A2",
    author: "Joe Hill",
    genre: "Horror",
    cover: "https://covers.openlibrary.org/b/isbn/9780062200570-L.jpg",
    buyLink: "https://www.amazon.in/s?k=NOS4A2+Joe+Hill"
  },
// =====================
  // MORE ROMANCE BOOKS
  // =====================

  {
    id: 61,
    title: "The Fault in Our Stars",
    author: "John Green",
    genre: "Romance",
    cover: "https://covers.openlibrary.org/b/isbn/9780525428024-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Fault+in+Our+Stars"
  },
  {
    id: 62,
    title: "It Ends with Us",
    author: "Colleen Hoover",
    genre: "Romance",
    cover: "https://covers.openlibrary.org/b/isbn/9781501110368-L.jpg",
    buyLink: "https://www.amazon.in/s?k=It+Ends+with+Us"
  },
  {
    id: 63,
    title: "It Starts with Us",
    author: "Colleen Hoover",
    genre: "Romance",
    cover: "https://covers.openlibrary.org/b/isbn/9781668001226-L.jpg",
    buyLink: "https://www.amazon.in/s?k=It+Starts+with+Us"
  },
  {
    id: 64,
    title: "November 9",
    author: "Colleen Hoover",
    genre: "Romance",
    cover: "https://covers.openlibrary.org/b/isbn/9781501110344-L.jpg",
    buyLink: "https://www.amazon.in/s?k=November+9+Colleen+Hoover"
  },
  {
    id: 65,
    title: "Ugly Love",
    author: "Colleen Hoover",
    genre: "Romance",
    cover: "https://covers.openlibrary.org/b/isbn/9781476753195-L.jpg",
    buyLink: "https://www.amazon.in/s?k=Ugly+Love+Colleen+Hoover"
  },
  {
    id: 66,
    title: "People We Meet on Vacation",
    author: "Emily Henry",
    genre: "Romance",
    cover: "https://covers.openlibrary.org/b/isbn/9781984806758-L.jpg",
    buyLink: "https://www.amazon.in/s?k=People+We+Meet+on+Vacation"
  },
  {
    id: 67,
    title: "Book Lovers",
    author: "Emily Henry",
    genre: "Romance",
    cover: "https://covers.openlibrary.org/b/isbn/9780593334836-L.jpg",
    buyLink: "https://www.amazon.in/s?k=Book+Lovers+Emily+Henry"
  },
  {
    id: 68,
    title: "Happy Place",
    author: "Emily Henry",
    genre: "Romance",
    cover: "https://covers.openlibrary.org/b/isbn/9780593336465-L.jpg",
    buyLink: "https://www.amazon.in/s?k=Happy+Place+Emily+Henry"
  },
  {
    id: 69,
    title: "Red White and Royal Blue",
    author: "Casey McQuiston",
    genre: "Romance",
    cover: "https://covers.openlibrary.org/b/isbn/9781250316776-L.jpg",
    buyLink: "https://www.amazon.in/s?k=Red+White+and+Royal+Blue"
  },
  {
    id: 70,
    title: "The Hating Game",
    author: "Sally Thorne",
    genre: "Romance",
    cover: "https://covers.openlibrary.org/b/isbn/9780062439598-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Hating+Game"
  },
  {
    id: 71,
    title: "One Day",
    author: "David Nicholls",
    genre: "Romance",
    cover: "https://covers.openlibrary.org/b/isbn/9780340896985-L.jpg",
    buyLink: "https://www.amazon.in/s?k=One+Day+David+Nicholls"
  },
  {
    id: 72,
    title: "The Time Traveler's Wife",
    author: "Audrey Niffenegger",
    genre: "Romance",
    cover: "https://covers.openlibrary.org/b/isbn/9780156029438-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Time+Traveler's+Wife"
  },
  {
    id: 73,
    title: "The Rosie Project",
    author: "Graeme Simsion",
    genre: "Romance",
    cover: "https://covers.openlibrary.org/b/isbn/9781476729091-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Rosie+Project"
  },
  {
    id: 74,
    title: "Love, Rosie",
    author: "Cecelia Ahern",
    genre: "Romance",
    cover: "https://covers.openlibrary.org/b/isbn/9780007278558-L.jpg",
    buyLink: "https://www.amazon.in/s?k=Love+Rosie+Cecelia+Ahern"
  },
  {
    id: 75,
    title: "The Wedding Date",
    author: "Jasmine Guillory",
    genre: "Romance",
    cover: "https://covers.openlibrary.org/b/isbn/9780399587665-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Wedding+Date+Jasmine+Guillory"
  },
  {
    id: 76,
    title: "The Kiss Quotient",
    author: "Helen Hoang",
    genre: "Romance",
    cover: "https://covers.openlibrary.org/b/isbn/9780451490803-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Kiss+Quotient"
  },
  {
    id: 77,
    title: "The Flatshare",
    author: "Beth O'Leary",
    genre: "Romance",
    cover: "https://covers.openlibrary.org/b/isbn/9781250295637-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Flatshare+Beth+O'Leary"
  },
  {
    id: 78,
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    genre: "Romance",
    cover: "https://covers.openlibrary.org/b/isbn/9781501161933-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Seven+Husbands+of+Evelyn+Hugo"
  },
  {
    id: 79,
    title: "Daisy Jones & The Six",
    author: "Taylor Jenkins Reid",
    genre: "Romance",
    cover: "https://covers.openlibrary.org/b/isbn/9781524798642-L.jpg",
    buyLink: "https://www.amazon.in/s?k=Daisy+Jones+and+The+Six"
  },
  {
    id: 80,
    title: "The Summer I Turned Pretty",
    author: "Jenny Han",
    genre: "Romance",
    cover: "https://covers.openlibrary.org/b/isbn/9781416968290-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Summer+I+Turned+Pretty"
  },
  // =====================
  // MORE MYSTERY BOOKS
  // =====================

  {
    id: 81,
    title: "The Murder of Roger Ackroyd",
    author: "Agatha Christie",
    genre: "Mystery",
    cover: "https://covers.openlibrary.org/b/isbn/9780062074009-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Murder+of+Roger+Ackroyd"
  },
  {
    id: 82,
    title: "And Then There Were None",
    author: "Agatha Christie",
    genre: "Mystery",
    cover: "https://covers.openlibrary.org/b/isbn/9780062073488-L.jpg",
    buyLink: "https://www.amazon.in/s?k=And+Then+There+Were+None"
  },
  {
    id: 83,
    title: "Death on the Nile",
    author: "Agatha Christie",
    genre: "Mystery",
    cover: "https://covers.openlibrary.org/b/isbn/9780062074009-L.jpg",
    buyLink: "https://www.amazon.in/s?k=Death+on+the+Nile+Agatha+Christie"
  },
  {
    id: 84,
    title: "The ABC Murders",
    author: "Agatha Christie",
    genre: "Mystery",
    cover: "https://covers.openlibrary.org/b/isbn/9780062073556-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+ABC+Murders"
  },
  {
    id: 85,
    title: "Five Little Pigs",
    author: "Agatha Christie",
    genre: "Mystery",
    cover: "https://covers.openlibrary.org/b/isbn/9780062073587-L.jpg",
    buyLink: "https://www.amazon.in/s?k=Five+Little+Pigs"
  },
  {
    id: 86,
    title: "The Big Four",
    author: "Agatha Christie",
    genre: "Mystery",
    cover: "https://covers.openlibrary.org/b/isbn/9780062073570-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Big+Four+Agatha+Christie"
  },
  {
    id: 87,
    title: "A Study in Scarlet",
    author: "Arthur Conan Doyle",
    genre: "Mystery",
    cover: "https://covers.openlibrary.org/b/isbn/9780486474916-L.jpg",
    buyLink: "https://www.amazon.in/s?k=A+Study+in+Scarlet"
  },
  {
    id: 88,
    title: "The Hound of the Baskervilles",
    author: "Arthur Conan Doyle",
    genre: "Mystery",
    cover: "https://covers.openlibrary.org/b/isbn/9780486462449-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Hound+of+the+Baskervilles"
  },
  {
    id: 89,
    title: "The Sign of Four",
    author: "Arthur Conan Doyle",
    genre: "Mystery",
    cover: "https://covers.openlibrary.org/b/isbn/9780486474916-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Sign+of+Four"
  },
  {
    id: 90,
    title: "The Maltese Falcon",
    author: "Dashiell Hammett",
    genre: "Mystery",
    cover: "https://covers.openlibrary.org/b/isbn/9780679722640-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Maltese+Falcon"
  },
  {
    id: 91,
    title: "Big Little Lies",
    author: "Liane Moriarty",
    genre: "Mystery",
    cover: "https://covers.openlibrary.org/b/isbn/9780399587191-L.jpg",
    buyLink: "https://www.amazon.in/s?k=Big+Little+Lies"
  },
  {
    id: 92,
    title: "The Woman in the Window",
    author: "A.J. Finn",
    genre: "Mystery",
    cover: "https://covers.openlibrary.org/b/isbn/9780062678416-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Woman+in+the+Window"
  },
  {
    id: 93,
    title: "The Couple Next Door",
    author: "Shari Lapena",
    genre: "Mystery",
    cover: "https://covers.openlibrary.org/b/isbn/9780735221080-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Couple+Next+Door"
  },
  {
    id: 94,
    title: "The Woman in Cabin 10",
    author: "Ruth Ware",
    genre: "Mystery",
    cover: "https://covers.openlibrary.org/b/isbn/9781501132933-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Woman+in+Cabin+10"
  },
  {
    id: 95,
    title: "The Likeness",
    author: "Tana French",
    genre: "Mystery",
    cover: "https://covers.openlibrary.org/b/isbn/9780670021963-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Likeness+Tana+French"
  },
  {
    id: 96,
    title: "In the Woods",
    author: "Tana French",
    genre: "Mystery",
    cover: "https://covers.openlibrary.org/b/isbn/9780670038602-L.jpg",
    buyLink: "https://www.amazon.in/s?k=In+the+Woods+Tana+French"
  },
  {
    id: 97,
    title: "Sharp Objects",
    author: "Gillian Flynn",
    genre: "Mystery",
    cover: "https://covers.openlibrary.org/b/isbn/9780307341556-L.jpg",
    buyLink: "https://www.amazon.in/s?k=Sharp+Objects+Gillian+Flynn"
  },
  {
    id: 98,
    title: "Dark Places",
    author: "Gillian Flynn",
    genre: "Mystery",
    cover: "https://covers.openlibrary.org/b/isbn/9780307341570-L.jpg",
    buyLink: "https://www.amazon.in/s?k=Dark+Places+Gillian+Flynn"
  },
  {
    id: 99,
    title: "The Guest List",
    author: "Lucy Foley",
    genre: "Mystery",
    cover: "https://covers.openlibrary.org/b/isbn/9780062868930-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Guest+List+Lucy+Foley"
  },
  {
    id: 100,
    title: "The Paris Apartment",
    author: "Lucy Foley",
    genre: "Mystery",
    cover: "https://covers.openlibrary.org/b/isbn/9780063003057-L.jpg",
    buyLink: "https://www.amazon.in/s?k=The+Paris+Apartment+Lucy+Foley"
  },

];

module.exports = books;