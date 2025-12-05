const moviesData = [
  {
    id: 1,
    title: "The Starry Voyage",
    synopsis:
      "An epic science fiction adventure across the galaxy, searching for a lost colony.",
    year: 2025,
    director: "Elara Vance",
    cast: ["Zoe Saldana", "Chris Pine", "Tom Hanks"],
    isAvailable: true,
  },
  {
    id: 2,
    title: "Mystery on Ninth Street",
    synopsis:
      "A psychological thriller where a detective races against time to solve an impossible case.",
    year: 2024,
    director: "Liam O'Connell",
    cast: ["Emily Blunt", "Robert Downey Jr."],
    isAvailable: false,
  },
  {
    id: 3,
    title: "Summer Laughs",
    synopsis: "The funniest family comedy of the year, perfect for all ages.",
    year: 2023,
    director: "Maria Rodriguez",
    cast: ["Melissa McCarthy", "Kevin Hart"],
    isAvailable: true,
  },
  {
    id: 4,
    title: "Echoes of the Past",
    synopsis:
      "A historical drama detailing a forgotten revolution in a small European country.",
    year: 2022,
    director: "Hans Zimmer",
    cast: ["Christoph Waltz", "Léa Seydoux"],
    isAvailable: false,
  },
  {
    id: 5,
    title: "The Quantum Leap",
    synopsis:
      "A group of scientists accidentally open a portal to an alternate dimension.",
    year: 2021,
    director: "Ava DuVernay",
    cast: ["Viola Davis", "Chadwick Boseman"],
    isAvailable: true,
  },
  {
    id: 6,
    title: "Crimson Tide",
    synopsis:
      "Two submarine captains clash over the decision to launch a nuclear missile.",
    year: 1995,
    director: "Tony Scott",
    cast: ["Denzel Washington", "Gene Hackman"],
    isAvailable: true,
  },
  {
    id: 7,
    title: "Midnight Express",
    synopsis:
      "A young American is arrested for drug possession in Turkey and sent to a brutal prison.",
    year: 1978,
    director: "Alan Parker",
    cast: ["Brad Davis", "Randy Quaid"],
    isAvailable: false,
  },
  {
    id: 8,
    title: "Pulp Fiction",
    synopsis:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    year: 1994,
    director: "Quentin Tarantino",
    cast: ["John Travolta", "Samuel L. Jackson"],
    isAvailable: true,
  },
  {
    id: 9,
    title: "The Great Escape",
    synopsis:
      "Allied prisoners of war plan a mass escape from a German POW camp during World War II.",
    year: 1963,
    director: "John Sturges",
    cast: ["Steve McQueen", "James Garner"],
    isAvailable: true,
  },
  {
    id: 10,
    title: "Forrest Gump",
    synopsis:
      "The history of the United States in the 20th century unfolds from the perspective of an Alabama man with an IQ of 75.",
    year: 1994,
    director: "Robert Zemeckis",
    cast: ["Tom Hanks", "Robin Wright"],
    isAvailable: false,
  },
  {
    id: 11,
    title: "Inception Dream",
    synopsis:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    year: 2010,
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
    isAvailable: true,
  },
  {
    id: 12,
    title: "The Matrix Reloaded",
    synopsis:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
    year: 1999,
    director: "Lana Wachowski, Lilly Wachowski",
    cast: ["Keanu Reeves", "Laurence Fishburne"],
    isAvailable: true,
  },
  {
    id: 13,
    title: "Schindler's List",
    synopsis:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
    year: 1993,
    director: "Steven Spielberg",
    cast: ["Liam Neeson", "Ben Kingsley"],
    isAvailable: false,
  },
  {
    id: 14,
    title: "The Lord of the Rings: The Fellowship of the Ring",
    synopsis:
      "A young hobbit, Frodo Baggins, inherits a magic ring that is the key to the Dark Lord Sauron's plan to conquer Middle-earth.",
    year: 2001,
    director: "Peter Jackson",
    cast: ["Elijah Wood", "Ian McKellen"],
    isAvailable: true,
  },
  {
    id: 15,
    title: "Goodfellas",
    synopsis:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
    year: 1990,
    director: "Martin Scorsese",
    cast: ["Robert De Niro", "Ray Liotta"],
    isAvailable: true,
  },
  {
    id: 16,
    title: "The Silence of the Lambs",
    synopsis:
      "A young FBI cadet must receive help from an incarcerated and manipulative cannibal killer to catch another serial killer, a madman who skins his victims.",
    year: 1991,
    director: "Jonathan Demme",
    cast: ["Jodie Foster", "Anthony Hopkins"],
    isAvailable: false,
  },
  {
    id: 17,
    title: "Seven",
    synopsis:
      "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
    year: 1995,
    director: "David Fincher",
    cast: ["Brad Pitt", "Morgan Freeman"],
    isAvailable: true,
  },
  {
    id: 18,
    title: "The Usual Suspects",
    synopsis:
      "A sole survivor of a massacre recounts the events leading up to a boat fire and the emergence of a mysterious crime boss.",
    year: 1995,
    director: "Bryan Singer",
    cast: ["Kevin Spacey", "Gabriel Byrne"],
    isAvailable: true,
  },
  {
    id: 19,
    title: "Léon: The Professional",
    synopsis:
      "Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered.",
    year: 1994,
    director: "Luc Besson",
    cast: ["Jean Reno", "Natalie Portman"],
    isAvailable: false,
  },
  {
    id: 20,
    title: "Terminator 2: Judgment Day",
    synopsis:
      "A cyborg is sent from the future to protect a young John Connor from an advanced shape-shifting Terminator.",
    year: 1991,
    director: "James Cameron",
    cast: ["Arnold Schwarzenegger", "Linda Hamilton"],
    isAvailable: true,
  },
  {
    id: 21,
    title: "Back to the Future",
    synopsis:
      "Marty McFly, a high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean.",
    year: 1985,
    director: "Robert Zemeckis",
    cast: ["Michael J. Fox", "Christopher Lloyd"],
    isAvailable: true,
  },
  {
    id: 22,
    title: "Gladiator Maximus",
    synopsis:
      "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
    year: 2000,
    director: "Ridley Scott",
    cast: ["Russell Crowe", "Joaquin Phoenix"],
    isAvailable: false,
  },
  {
    id: 23,
    title: "The Green Mile",
    synopsis:
      "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
    year: 1999,
    director: "Frank Darabont",
    cast: ["Tom Hanks", "Michael Clarke Duncan"],
    isAvailable: true,
  },
  {
    id: 24,
    title: "Saving Private Ryan",
    synopsis:
      "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
    year: 1998,
    director: "Steven Spielberg",
    cast: ["Tom Hanks", "Matt Damon"],
    isAvailable: true,
  },
  {
    id: 25,
    title: "The Prestige",
    synopsis:
      "The rivalry between two stage magicians in London at the end of the 19th century takes them to the extremes of obsession.",
    year: 2006,
    director: "Christopher Nolan",
    cast: ["Hugh Jackman", "Christian Bale"],
    isAvailable: false,
  },
  {
    id: 26,
    title: "Apocalypse Now",
    synopsis:
      "A U.S. Army officer is sent into Cambodia to assassinate a renegade Colonel who has set himself up as a god among a local tribe.",
    year: 1979,
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Martin Sheen"],
    isAvailable: true,
  },
  {
    id: 27,
    title: "Alien",
    synopsis:
      "The crew of a commercial space tug is awakened from hypersleep by a distress call from an alien vessel.",
    year: 1979,
    director: "Ridley Scott",
    cast: ["Sigourney Weaver", "Tom Skerritt"],
    isAvailable: false,
  },
  {
    id: 28,
    title: "Blade Runner",
    synopsis:
      "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
    year: 1982,
    director: "Ridley Scott",
    cast: ["Harrison Ford", "Rutger Hauer"],
    isAvailable: true,
  },
  {
    id: 29,
    title: "The Departed",
    synopsis:
      "An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.",
    year: 2006,
    director: "Martin Scorsese",
    cast: ["Leonardo DiCaprio", "Matt Damon"],
    isAvailable: true,
  },
  {
    id: 30,
    title: "Whiplash",
    synopsis:
      "A promising young drummer enrolls at a cut-throat music conservatory where his maverick instructor will stop at nothing to realize a student's potential.",
    year: 2014,
    director: "Damien Chazelle",
    cast: ["Miles Teller", "J.K. Simmons"],
    isAvailable: false,
  },
  {
    id: 31,
    title: "Eternal Sunshine",
    synopsis:
      "A man undergoes a procedure to erase his memories of a former lover.",
    year: 2004,
    director: "Michel Gondry",
    cast: ["Jim Carrey", "Kate Winslet"],
    isAvailable: true,
  },
  {
    id: 32,
    title: "Fight Club Rules",
    synopsis:
      "An insomniac office worker looking for a way to change his life crosses paths with a devil-may-care soap maker and forms an underground fight club that evolves into something much, much more.",
    year: 1999,
    director: "David Fincher",
    cast: ["Brad Pitt", "Edward Norton"],
    isAvailable: false,
  },
  {
    id: 33,
    title: "The Pianist",
    synopsis:
      "A brilliant pianist struggles to survive in Warsaw during World War II.",
    year: 2002,
    director: "Roman Polanski",
    cast: ["Adrien Brody", "Thomas Kretschmann"],
    isAvailable: true,
  },
  {
    id: 34,
    title: "The Shining Hotel",
    synopsis:
      "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence.",
    year: 1980,
    director: "Stanley Kubrick",
    cast: ["Jack Nicholson", "Shelley Duvall"],
    isAvailable: true,
  },
  {
    id: 35,
    title: "A Clockwork Orange",
    synopsis:
      "In future Britain, Alex DeLarge is the leader of a gang of 'droogs' who participate in 'ultraviolence'.",
    year: 1971,
    director: "Stanley Kubrick",
    cast: ["Malcolm McDowell", "Patrick Magee"],
    isAvailable: false,
  },
  {
    id: 36,
    title: "Psycho Bates",
    synopsis:
      "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a polite but awkward young man.",
    year: 1960,
    director: "Alfred Hitchcock",
    cast: ["Anthony Perkins", "Janet Leigh"],
    isAvailable: true,
  },
  {
    id: 37,
    title: "Sunset Boulevard",
    synopsis:
      "A hack screenwriter writes a screenplay for a former silent-film star who has faded into obscurity.",
    year: 1950,
    director: "Billy Wilder",
    cast: ["William Holden", "Gloria Swanson"],
    isAvailable: true,
  },
  {
    id: 38,
    title: "Casablanca",
    synopsis:
      "A cynical American expatriate struggles to decide whether or not he should help his former lover and her fugitive husband escape French Morocco.",
    year: 1942,
    director: "Michael Curtiz",
    cast: ["Humphrey Bogart", "Ingrid Bergman"],
    isAvailable: false,
  },
  {
    id: 39,
    title: "Citizen Kane",
    synopsis:
      "Following the death of a publishing tycoon, news reporters scramble to decipher the meaning of his final word: 'Rosebud'.",
    year: 1941,
    director: "Orson Welles",
    cast: ["Orson Welles", "Joseph Cotten"],
    isAvailable: true,
  },
  {
    id: 40,
    title: "Vertigo",
    synopsis:
      "A former police detective obsessive with a woman he was hired to follow.",
    year: 1958,
    director: "Alfred Hitchcock",
    cast: ["James Stewart", "Kim Novak"],
    isAvailable: true,
  },
  {
    id: 41,
    title: "Star Wars: A New Hope",
    synopsis:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle station.",
    year: 1977,
    director: "George Lucas",
    cast: ["Mark Hamill", "Harrison Ford"],
    isAvailable: false,
  },
  {
    id: 42,
    title: "The Godfather Saga",
    synopsis:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    year: 1972,
    director: "Francis Ford Coppola",
    cast: ["Marlon Brando", "Al Pacino"],
    isAvailable: true,
  },
  {
    id: 43,
    title: "2001: A Space Odyssey",
    synopsis:
      "Humanity finds a mysterious, obviously artificial, object buried beneath the Lunar surface and, with the intelligent computer H.A.L. 9000, sets off on a quest.",
    year: 1968,
    director: "Stanley Kubrick",
    cast: ["Keir Dullea", "Gary Lockwood"],
    isAvailable: true,
  },
  {
    id: 44,
    title: "Dr. Strangelove",
    synopsis:
      "An insane American general orders a nuclear attack on the Soviet Union, triggering a series of comedic events.",
    year: 1964,
    director: "Stanley Kubrick",
    cast: ["Peter Sellers", "George C. Scott"],
    isAvailable: false,
  },
  {
    id: 45,
    title: "Lawrence of Arabia",
    synopsis:
      "The story of T.E. Lawrence, the English officer who successfully united diverse Arab tribes to fight the Turks in WWI.",
    year: 1962,
    director: "David Lean",
    cast: ["Peter O'Toole", "Alec Guinness"],
    isAvailable: true,
  },
  {
    id: 46,
    title: "The Bridge on the River Kwai",
    synopsis:
      "British P.O.W.s are forced to build a railway bridge across the River Kwai for their Japanese captors.",
    year: 1957,
    director: "David Lean",
    cast: ["William Holden", "Alec Guinness"],
    isAvailable: true,
  },
  {
    id: 47,
    title: "Singin' in the Rain",
    synopsis:
      "A silent film star falls for a chorus girl just as the film industry transitions to talkies.",
    year: 1952,
    director: "Stanley Donen, Gene Kelly",
    cast: ["Gene Kelly", "Donald O'Connor"],
    isAvailable: false,
  },
  {
    id: 48,
    title: "It's a Wonderful Life",
    synopsis:
      "An angel is sent from Heaven to help a desperately frustrated businessman by showing him what life would have been like if he had never existed.",
    year: 1946,
    director: "Frank Capra",
    cast: ["James Stewart", "Donna Reed"],
    isAvailable: true,
  },
  {
    id: 49,
    title: "Double Indemnity",
    synopsis:
      "An insurance salesman is seduced by a woman into murdering her husband and making it look like an accident.",
    year: 1944,
    director: "Billy Wilder",
    cast: ["Fred MacMurray", "Barbara Stanwyck"],
    isAvailable: true,
  },
  {
    id: 50,
    title: "Rebecca",
    synopsis:
      "A young woman marries a wealthy widower and struggles to cope with the memory of his deceased first wife.",
    year: 1940,
    director: "Alfred Hitchcock",
    cast: ["Laurence Olivier", "Joan Fontaine"],
    isAvailable: false,
  },
  {
    id: 51,
    title: "The Kid",
    synopsis:
      "The Tramp cares for an abandoned child, but the child's mother returns, and she is now a successful singer.",
    year: 1921,
    director: "Charlie Chaplin",
    cast: ["Charlie Chaplin", "Jackie Coogan"],
    isAvailable: true,
  },
  {
    id: 52,
    title: "Metropolis Future",
    synopsis:
      "In a futuristic city sharply divided between the working class and the city planners, the son of the city's master falls in love with a working-class prophet.",
    year: 1927,
    director: "Fritz Lang",
    cast: ["Alfred Abel", "Brigitte Helm"],
    isAvailable: true,
  },
  {
    id: 53,
    title: "The General Train",
    synopsis:
      "The adventures of a Confederate locomotive engineer, Johnnie Gray, during the American Civil War.",
    year: 1926,
    director: "Buster Keaton, Clyde Bruckman",
    cast: ["Buster Keaton", "Marion Mack"],
    isAvailable: false,
  },
  {
    id: 54,
    title: "City Lights",
    synopsis:
      "The Tramp struggles to help a blind flower girl who mistakes him for a wealthy duke.",
    year: 1931,
    director: "Charlie Chaplin",
    cast: ["Charlie Chaplin", "Virginia Cherrill"],
    isAvailable: true,
  },
  {
    id: 55,
    title: "Modern Times",
    synopsis:
      "The Tramp struggles to live in modern industrial society with the help of a young homeless woman.",
    year: 1936,
    director: "Charlie Chaplin",
    cast: ["Charlie Chaplin", "Paulette Goddard"],
    isAvailable: true,
  },
  {
    id: 56,
    title: "The Grapes of Wrath",
    synopsis:
      "A poor Midwest family is forced off their farm and travels to California during the Depression.",
    year: 1940,
    director: "John Ford",
    cast: ["Henry Fonda", "Jane Darwell"],
    isAvailable: false,
  },
  {
    id: 57,
    title: "The Maltese Falcon",
    synopsis:
      "A private detective takes on a case that involves him with three eccentric criminals, a gorgeous liar, and a search for a priceless statuette.",
    year: 1941,
    director: "John Huston",
    cast: ["Humphrey Bogart", "Mary Astor"],
    isAvailable: true,
  },
  {
    id: 58,
    title: "High Noon",
    synopsis:
      "A town marshal, just married, is preparing to retire when he learns that a man he helped to send to prison is due to arrive on the noon train.",
    year: 1952,
    director: "Fred Zinnemann",
    cast: ["Gary Cooper", "Grace Kelly"],
    isAvailable: true,
  },
  {
    id: 59,
    title: "On the Waterfront",
    synopsis:
      "An ex-prize fighter struggles to stand up to a powerful union boss.",
    year: 1954,
    director: "Elia Kazan",
    cast: ["Marlon Brando", "Eva Marie Saint"],
    isAvailable: false,
  },
  {
    id: 60,
    title: "Rear Window",
    synopsis:
      "A photographer confined to a wheelchair spies on his neighbors from his apartment window and becomes convinced one of them has committed murder.",
    year: 1954,
    director: "Alfred Hitchcock",
    cast: ["James Stewart", "Grace Kelly"],
    isAvailable: true,
  },
  {
    id: 61,
    title: "The Searchers",
    synopsis:
      "A Civil War veteran spends years looking for his niece, who was abducted by Comanches.",
    year: 1956,
    director: "John Ford",
    cast: ["John Wayne", "Jeffrey Hunter"],
    isAvailable: true,
  },
  {
    id: 62,
    title: "Some Like It Hot",
    synopsis:
      "Two musicians witness a mob hit and disguise themselves as women to escape, joining an all-female band on the way to Florida.",
    year: 1959,
    director: "Billy Wilder",
    cast: ["Marilyn Monroe", "Tony Curtis"],
    isAvailable: false,
  },
  {
    id: 63,
    title: "To Kill a Mockingbird",
    synopsis:
      "Atticus Finch, a lawyer in the Depression-era South, defends a black man against an undeserved rape charge.",
    year: 1962,
    director: "Robert Mulligan",
    cast: ["Gregory Peck", "Mary Badham"],
    isAvailable: true,
  },
  {
    id: 64,
    title: "Dr. No",
    synopsis:
      "A resourceful secret agent is sent to Jamaica to investigate the disappearance of a colleague.",
    year: 1962,
    director: "Terence Young",
    cast: ["Sean Connery", "Ursula Andress"],
    isAvailable: true,
  },
  {
    id: 65,
    title: "A Fistful of Dollars",
    synopsis:
      "A mysterious stranger plays two rival families against each other in a town torn apart by greed, pride, and revenge.",
    year: 1964,
    director: "Sergio Leone",
    cast: ["Clint Eastwood", "Marianne Koch"],
    isAvailable: false,
  },
  {
    id: 66,
    title: "The Good, the Bad and the Ugly",
    synopsis:
      "A bounty hunt in the American Civil War, three gunslingers set out to find a hidden fortune.",
    year: 1966,
    director: "Sergio Leone",
    cast: ["Clint Eastwood", "Eli Wallach"],
    isAvailable: true,
  },
  {
    id: 67,
    title: "Bonnie and Clyde",
    synopsis:
      "The story of Bonnie Parker and Clyde Barrow, two outlaws who became famous bank robbers during the Great Depression.",
    year: 1967,
    director: "Arthur Penn",
    cast: ["Warren Beatty", "Faye Dunaway"],
    isAvailable: true,
  },
  {
    id: 68,
    title: "2001: Space Odyssey",
    synopsis:
      "Humanity finds a mysterious, obviously artificial, object buried beneath the Lunar surface and, with the intelligent computer H.A.L. 9000, sets off on a quest.",
    year: 1968,
    director: "Stanley Kubrick",
    cast: ["Keir Dullea", "Gary Lockwood"],
    isAvailable: false,
  },
  {
    id: 69,
    title: "Easy Rider",
    synopsis:
      "Two hippies travel across the American Southwest and South after selling a large score of cocaine.",
    year: 1969,
    director: "Dennis Hopper",
    cast: ["Peter Fonda", "Dennis Hopper"],
    isAvailable: true,
  },
  {
    id: 70,
    title: "The Exorcist",
    synopsis:
      "When a young girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her.",
    year: 1973,
    director: "William Friedkin",
    cast: ["Ellen Burstyn", "Max von Sydow"],
    isAvailable: true,
  },
  {
    id: 71,
    title: "Chinatown Noir",
    synopsis:
      "A private detective in 1930s Los Angeles is hired to expose an adulterer, but soon finds himself caught up in a web of deceit and murder.",
    year: 1974,
    director: "Roman Polanski",
    cast: ["Jack Nicholson", "Faye Dunaway"],
    isAvailable: false,
  },
  {
    id: 72,
    title: "One Flew Over the Cuckoo's Nest",
    synopsis:
      "A criminal pleads insanity and is admitted to a mental institution where he rallies the other patients against the oppressive nurse.",
    year: 1975,
    director: "Miloš Forman",
    cast: ["Jack Nicholson", "Louise Fletcher"],
    isAvailable: true,
  },
  {
    id: 73,
    title: "Rocky Balboa",
    synopsis:
      "A small-time boxer gets a supremely rare chance to fight the heavy-weight champion in a bout in which he strives to go the distance.",
    year: 1976,
    director: "John G. Avildsen",
    cast: ["Sylvester Stallone", "Talia Shire"],
    isAvailable: true,
  },
  {
    id: 74,
    title: "Close Encounters of the Third Kind",
    synopsis:
      "After an encounter with a UFO, a man is driven to follow the series of signs left for him.",
    year: 1977,
    director: "Steven Spielberg",
    cast: ["Richard Dreyfuss", "François Truffaut"],
    isAvailable: false,
  },
  {
    id: 75,
    title: "The Deer Hunter",
    synopsis:
      "An in-depth examination of the way that the U.S. Vietnam War affected a small town in Pennsylvania.",
    year: 1978,
    director: "Michael Cimino",
    cast: ["Robert De Niro", "Christopher Walken"],
    isAvailable: true,
  },
  {
    id: 76,
    title: "Raging Bull",
    synopsis:
      "The life of boxer Jake LaMotta, whose violence and temper earned him a professional career but destroyed his personal life.",
    year: 1980,
    director: "Martin Scorsese",
    cast: ["Robert De Niro", "Cathy Moriarty"],
    isAvailable: true,
  },
  {
    id: 77,
    title: "E.T. the Extra-Terrestrial",
    synopsis:
      "A troubled child summons the courage to help a friendly alien escape Earth and return to his home planet.",
    year: 1982,
    director: "Steven Spielberg",
    cast: ["Henry Thomas", "Drew Barrymore"],
    isAvailable: false,
  },
  {
    id: 78,
    title: "Raiders of the Lost Ark",
    synopsis:
      "In 1936, archaeologist and adventurer Indiana Jones is hired by the U.S. government to find the Ark of the Covenant before the Nazis.",
    year: 1981,
    director: "Steven Spielberg",
    cast: ["Harrison Ford", "Karen Allen"],
    isAvailable: true,
  },
  {
    id: 79,
    title: "Amadeus Composer",
    synopsis:
      "The life, success, and troubles of Austrian composer Wolfgang Amadeus Mozart, as told by his peer, Antonio Salieri.",
    year: 1984,
    director: "Miloš Forman",
    cast: ["F. Murray Abraham", "Tom Hulce"],
    isAvailable: true,
  },
  {
    id: 80,
    title: "The Breakfast Club",
    synopsis:
      "Five high school students meet in Saturday detention and discover how they have a lot more in common than they thought.",
    year: 1985,
    director: "John Hughes",
    cast: ["Judd Nelson", "Molly Ringwald"],
    isAvailable: false,
  },
  {
    id: 81,
    title: "Platoon",
    synopsis:
      "A young American soldier in Vietnam is caught between two sergeants, one sadistic and one compassionate.",
    year: 1986,
    director: "Oliver Stone",
    cast: ["Charlie Sheen", "Tom Berenger"],
    isAvailable: true,
  },
  {
    id: 82,
    title: "Full Metal Jacket",
    synopsis:
      "A two-part story following a group of new Marines through boot camp and into the thick of the Tet Offensive during the Vietnam War.",
    year: 1987,
    director: "Stanley Kubrick",
    cast: ["Matthew Modine", "Vincent D'Onofrio"],
    isAvailable: true,
  },
  {
    id: 83,
    title: "Dead Poets Society",
    synopsis:
      "An unconventional English teacher at an exclusive boys' prep school inspires his students to 'seize the day'.",
    year: 1989,
    director: "Peter Weir",
    cast: ["Robin Williams", "Robert Sean Leonard"],
    isAvailable: false,
  },
  {
    id: 84,
    title: "Dances with Wolves",
    synopsis:
      "A Union Army lieutenant is sent to a remote western outpost and befriends a group of Lakota Sioux Indians.",
    year: 1990,
    director: "Kevin Costner",
    cast: ["Kevin Costner", "Mary McDonnell"],
    isAvailable: true,
  },
  {
    id: 85,
    title: "Jurassic Park",
    synopsis:
      "A theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run loose.",
    year: 1993,
    director: "Steven Spielberg",
    cast: ["Sam Neill", "Laura Dern"],
    isAvailable: true,
  },
  {
    id: 86,
    title: "Speed Bus",
    synopsis:
      "A young cop must prevent a bomb exploding aboard a city bus by keeping its speed above 50 mph.",
    year: 1994,
    director: "Jan de Bont",
    cast: ["Keanu Reeves", "Sandra Bullock"],
    isAvailable: false,
  },
  {
    id: 87,
    title: "Braveheart",
    synopsis:
      "The story of William Wallace, a 13th-century Scottish warrior who led the Scots in the First War of Scottish Independence against King Edward I of England.",
    year: 1995,
    director: "Mel Gibson",
    cast: ["Mel Gibson", "Sophie Marceau"],
    isAvailable: true,
  },
  {
    id: 88,
    title: "Fargo North",
    synopsis:
      "A pregnant police chief investigates a series of murders leading to a car salesman who hired two criminals to kidnap his wife.",
    year: 1996,
    director: "Joel Coen, Ethan Coen",
    cast: ["Frances McDormand", "William H. Macy"],
    isAvailable: true,
  },
  {
    id: 89,
    title: "Titanic Romance",
    synopsis:
      "A poor artist and an aristocratic woman fall in love aboard the ill-fated maiden voyage of the R.M.S. Titanic.",
    year: 1997,
    director: "James Cameron",
    cast: ["Leonardo DiCaprio", "Kate Winslet"],
    isAvailable: false,
  },
  {
    id: 90,
    title: "The Sixth Sense",
    synopsis:
      "A boy who can see dead people seeks the help of a child psychologist.",
    year: 1999,
    director: "M. Night Shyamalan",
    cast: ["Bruce Willis", "Haley Joel Osment"],
    isAvailable: true,
  },
  {
    id: 91,
    title: "Memento",
    synopsis:
      "A man who suffers from short-term memory loss attempts to hunt down his wife's killer.",
    year: 2000,
    director: "Christopher Nolan",
    cast: ["Guy Pearce", "Carrie-Anne Moss"],
    isAvailable: true,
  },
  {
    id: 92,
    title: "Donnie Darko",
    synopsis:
      "A troubled teenager is plagued by visions of a man in a large rabbit suit who manipulates him to commit a series of crimes.",
    year: 2001,
    director: "Richard Kelly",
    cast: ["Jake Gyllenhaal", "Jena Malone"],
    isAvailable: false,
  },
  {
    id: 93,
    title: "Catch Me If You Can",
    synopsis:
      "The story of Frank Abagnale Jr., who successfully passed himself off as a pilot, a doctor, and a legal prosecutor, cashing millions in bad checks.",
    year: 2002,
    director: "Steven Spielberg",
    cast: ["Leonardo DiCaprio", "Tom Hanks"],
    isAvailable: true,
  },
  {
    id: 94,
    title: "Lost in Translation",
    synopsis:
      "A faded movie star and a neglected young woman form an unlikely bond after meeting in Tokyo.",
    year: 2003,
    director: "Sofia Coppola",
    cast: ["Bill Murray", "Scarlett Johansson"],
    isAvailable: true,
  },
  {
    id: 95,
    title: "Million Dollar Baby",
    synopsis:
      "A determined woman works with an experienced but gruff trainer to realize her dream of becoming a professional boxer.",
    year: 2004,
    director: "Clint Eastwood",
    cast: ["Clint Eastwood", "Hilary Swank"],
    isAvailable: false,
  },
  {
    id: 96,
    title: "V for Vendetta",
    synopsis:
      "In a future British tyranny, a shadowy freedom fighter plots to bring down the totalitarian government.",
    year: 2005,
    director: "James McTeigue",
    cast: ["Natalie Portman", "Hugo Weaving"],
    isAvailable: true,
  },
  {
    id: 97,
    title: "No Country for Old Men",
    synopsis:
      "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong at the U.S.-Mexico border.",
    year: 2007,
    director: "Joel Coen, Ethan Coen",
    cast: ["Josh Brolin", "Javier Bardem"],
    isAvailable: true,
  },
  {
    id: 98,
    title: "There Will Be Blood",
    synopsis:
      "A story of family, religion, hatred, oil, and madness, focusing on a turn-of-the-century prospector in California.",
    year: 2007,
    director: "Paul Thomas Anderson",
    cast: ["Daniel Day-Lewis", "Paul Dano"],
    isAvailable: false,
  },
  {
    id: 99,
    title: "Inglourious Basterds",
    synopsis:
      "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a cinema owner's similar plot.",
    year: 2009,
    director: "Quentin Tarantino",
    cast: ["Brad Pitt", "Christoph Waltz"],
    isAvailable: true,
  },
  {
    id: 100,
    title: "The Social Network",
    synopsis:
      "The founding of Facebook is chronicled, focusing on the personalities and legal battles involved.",
    year: 2010,
    director: "David Fincher",
    cast: ["Jesse Eisenberg", "Andrew Garfield"],
    isAvailable: true,
  },
];

// --- Selectores del DOM ---
const moviesContainer = document.getElementById("moviesContainer");
const searchInput = document.getElementById("searchInput");
const availableOnlyCheckbox = document.getElementById("availableOnlyCheckbox");
const countElement = document.getElementById("count");

// --- Pre-Procesamiento de Datos ---
// Función para generar la URL del placeholder a partir del título
const generateImageUrl = (title) => {
  // Reemplaza espacios con '+' y codifica para la URL
  const encodedTitle = title.replace(/\s/g, "+");
  return `https://dummyimage.com/600x400/000/fff&text=${encodedTitle}`;
};

// Modifica el arreglo original para añadir la propiedad imageUrl
const processedMovies = moviesData.map((movie) => ({
  ...movie,
  imageUrl: generateImageUrl(movie.title),
}));

// --- Función de Renderizado Principal ---
const renderMovies = (movies) => {
  moviesContainer.innerHTML = ""; // Limpia el contenedor
  countElement.textContent = movies.length; // Actualiza el contador

  if (movies.length === 0) {
    moviesContainer.innerHTML =
      '<div class="col-12"><p class="text-muted text-center">No se encontraron películas que coincidan con los filtros.</p></div>';
    return;
  }

  movies.forEach((movie) => {
    // Clases y Badge condicionales
    const cardClass = movie.isAvailable
      ? "border-success"
      : "border-danger opacity-75";
    const badgeHtml = movie.isAvailable
      ? '<span class="badge bg-success">Disponible</span>'
      : '<span class="badge bg-danger">No Disponible</span>';

    // HTML de la tarjeta de Bootstrap (incluyendo la responsividad)
    const movieCardHtml = `
            <div class="col">
                <div class="card h-100 shadow-sm ${cardClass}">
                    <img src="${
                      movie.imageUrl
                    }" class="card-img-top" alt="Poster de ${movie.title}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${movie.title} (${
                          movie.year
                        })</h5>
                        <p class="card-text text-muted">${movie.synopsis.substring(
                          0,
                          70
                        )}...</p>
                        <div class="mt-auto d-flex justify-content-between align-items-center">
                            ${badgeHtml}
                            <small class="text-body-secondary">Dir: ${
                              movie.director
                            }</small>
                        </div>
                    </div>
                </div>
            </div>
        `;

    moviesContainer.insertAdjacentHTML("beforeend", movieCardHtml);
  });
};

// --- Lógica de Filtrado y Búsqueda ---
const filterAndRender = () => {
  const searchTerm = searchInput.value.toLowerCase().trim();
  const showAvailableOnly = availableOnlyCheckbox.checked;

  // 1. Filtrar por disponibilidad
  let filtered = processedMovies;
  if (showAvailableOnly) {
    filtered = filtered.filter((movie) => movie.isAvailable);
  }

  // 2. Filtrar por término de búsqueda (título)
  if (searchTerm) {
    filtered = filtered.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm)
    );
  }

  // 3. Renderizar el resultado
  renderMovies(filtered);
};

// --- Event Listeners ---
searchInput.addEventListener("input", filterAndRender);
availableOnlyCheckbox.addEventListener("change", filterAndRender);

// --- Inicialización ---
document.addEventListener("DOMContentLoaded", () => {
  // Renderiza todas las películas al cargar la página
  renderMovies(processedMovies);
});
