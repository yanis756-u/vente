// ============ Données par défaut ============

const GAMES_DEFAULT = [
    {
        id: 1,
        name: "The Legend of Zelda: Tears of the Kingdom",
        year: 2023,
        developer: "Nintendo",
        description: "Explorez le vaste monde d'Hyrule dans cette suite épique de Breath of the Wild.",
        price: 59.99,
        image: "https://media.rawg.io/media/games/556/55684bfd048706f4266d331d70050b37.jpg"
    },
    {
        id: 2,
        name: "God of War Ragnarök",
        year: 2022,
        developer: "Santa Monica Studio",
        description: "Kratos et Atreus affrontent les dieux nordiques dans cette aventure épique.",
        price: 49.99,
        image: "https://media.rawg.io/media/games/1c3/1c305096502c475c00276c827f0fd697.jpg"
    },
    {
        id: 3,
        name: "Elden Ring",
        year: 2022,
        developer: "FromSoftware",
        description: "Un RPG en monde ouvert créé par Hidetaka Miyazaki et George R.R. Martin.",
        price: 39.99,
        image: "https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg"
    },
    {
        id: 4,
        name: "Red Dead Redemption 2",
        year: 2018,
        developer: "Rockstar Games",
        description: "Vivez une épopée western dans l'Amérique de 1899 avec Arthur Morgan.",
        price: 29.99,
        image: "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg"
    },
    {
        id: 5,
        name: "The Witcher 3: Wild Hunt",
        year: 2015,
        developer: "CD Projekt Red",
        description: "Incarnez Geralt de Riv dans ce RPG primé à monde ouvert.",
        price: 19.99,
        image: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
    },
    {
        id: 6,
        name: "Grand Theft Auto V",
        year: 2013,
        developer: "Rockstar Games",
        description: "Plongez dans Los Santos, une métropole fictive remplie d'action.",
        price: 14.99,
        image: "https://media.rawg.io/media/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg"
    },
    {
        id: 7,
        name: "Cyberpunk 2077",
        year: 2020,
        developer: "CD Projekt Red",
        description: "Plongez dans Night City, une mégalopole futuriste obsédée par le pouvoir et la technologie.",
        price: 29.99,
        image: "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
    },
    {
        id: 8,
        name: "Minecraft",
        year: 2011,
        developer: "Mojang Studios",
        description: "Construisez, explorez et survivez dans un monde de blocs aux possibilités infinies.",
        price: 19.99,
        image: "https://media.rawg.io/media/games/b4e/b4e4c73d5aa4ec66bbf75375c4847a2b.jpg"
    },
    {
        id: 9,
        name: "Horizon Forbidden West",
        year: 2022,
        developer: "Guerrilla Games",
        description: "Aloy explore l'Ouest interdit pour stopper une menace qui pourrait détruire toute vie sur Terre.",
        price: 39.99,
        image: "https://media.rawg.io/media/games/bf7/bf73b105ccbba42107986bbcd96fcada.jpg"
    },
    {
        id: 10,
        name: "Spider-Man 2",
        year: 2023,
        developer: "Insomniac Games",
        description: "Peter Parker et Miles Morales unissent leurs forces pour affronter de nouveaux ennemis à New York.",
        price: 59.99,
        image: "https://media.rawg.io/media/games/7ae/7ae5a14cdb4ab222a134c15f4629e430.jpg"
    },
    {
        id: 11,
        name: "Resident Evil 4 Remake",
        year: 2023,
        developer: "Capcom",
        description: "Leon S. Kennedy part en mission pour sauver la fille du président dans ce remake du classique survival horror.",
        price: 39.99,
        image: "https://media.rawg.io/media/games/51a/51a404b9918a0b19fc704a3ca248c69f.jpg"
    },
    {
        id: 12,
        name: "FIFA 24 (EA Sports FC 24)",
        year: 2023,
        developer: "EA Sports",
        description: "Le jeu de football incontournable avec les meilleurs clubs et joueurs du monde.",
        price: 49.99,
        image: "https://media.rawg.io/media/games/104/10404407d458d90f4559a1f587c2650a.jpg"
    },
    {
        id: 13,
        name: "Hogwarts Legacy",
        year: 2023,
        developer: "Avalanche Software",
        description: "Vivez votre propre aventure dans le monde des sorciers au 19e siècle à Poudlard.",
        price: 44.99,
        image: "https://media.rawg.io/media/games/044/044b2ee023930ca138deda151f40c18c.jpg"
    },
    {
        id: 14,
        name: "Sekiro: Shadows Die Twice",
        year: 2019,
        developer: "FromSoftware",
        description: "Incarnez un shinobi dans le Japon féodal et affrontez des ennemis redoutables.",
        price: 29.99,
        image: "https://media.rawg.io/media/games/67f/67f62d1f062a6164f57575e0604ee9f6.jpg"
    },
    {
        id: 15,
        name: "Hades",
        year: 2020,
        developer: "Supergiant Games",
        description: "Échappez-vous des Enfers dans ce roguelike d'action primé aux combats nerveux.",
        price: 24.99,
        image: "https://media.rawg.io/media/games/1f4/1f47a270b8f241e4676b14d39ec620f7.jpg"
    },
    {
        id: 16,
        name: "Ghost of Tsushima",
        year: 2020,
        developer: "Sucker Punch Productions",
        description: "Devenez le fantôme de Tsushima et défendez le Japon contre l'invasion mongole.",
        price: 39.99,
        image: "https://media.rawg.io/media/games/f24/f2493ea338fe7bd3c7d73750a85a0959.jpeg"
    },
    {
        id: 17,
        name: "Baldur's Gate 3",
        year: 2023,
        developer: "Larian Studios",
        description: "Un RPG épique basé sur Donjons & Dragons avec des choix qui façonnent votre aventure.",
        price: 59.99,
        image: "https://media.rawg.io/media/games/699/69907ecf13f172e9e144069769c3be73.jpg"
    },
    {
        id: 18,
        name: "Stardew Valley",
        year: 2016,
        developer: "ConcernedApe",
        description: "Quittez la ville pour gérer votre propre ferme dans ce jeu de simulation relaxant.",
        price: 14.99,
        image: "https://media.rawg.io/media/games/713/713269608dc8f2f40f5a670a14b2de94.jpg"
    },
    {
        id: 19,
        name: "Hollow Knight",
        year: 2017,
        developer: "Team Cherry",
        description: "Explorez un vaste royaume souterrain d'insectes dans ce metroidvania captivant.",
        price: 14.99,
        image: "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
    },
    {
        id: 20,
        name: "Call of Duty: Modern Warfare III",
        year: 2023,
        developer: "Sledgehammer Games",
        description: "Le retour de la franchise FPS mythique avec une campagne et un multijoueur intense.",
        price: 69.99,
        image: "https://media.rawg.io/media/games/e9c/e9c042d14515eb3ff7cb4db9fe78e435.jpg"
    },
    {
        id: 21,
        name: "Assassin's Creed Valhalla",
        year: 2020,
        developer: "Ubisoft Montréal",
        description: "Incarnez Eivor, un Viking légendaire, et menez votre clan des rivages glacés de Norvège à l'Angleterre.",
        price: 34.99,
        image: "https://media.rawg.io/media/games/934/9346092ae11bf7582c883869468171cc.jpg"
    },
    {
        id: 22,
        name: "The Last of Us Part II",
        year: 2020,
        developer: "Naughty Dog",
        description: "Ellie se lance dans une quête impitoyable de vengeance dans un monde ravagé par la pandémie.",
        price: 39.99,
        image: "https://media.rawg.io/media/games/909/909974d1c7863c2027241e265fe7011f.jpg"
    },
    {
        id: 23,
        name: "Final Fantasy VII Remake",
        year: 2020,
        developer: "Square Enix",
        description: "Revivez l'aventure de Cloud Strife et du groupe Avalanche dans ce remake spectaculaire du RPG culte.",
        price: 44.99,
        image: "https://media.rawg.io/media/games/d89/d89bd0cf4fcdc10820892980cbba0f49.jpg"
    },
    {
        id: 24,
        name: "Dark Souls III",
        year: 2016,
        developer: "FromSoftware",
        description: "Affrontez des boss terrifiants dans ce RPG d'action exigeant au monde sombre et fascinant.",
        price: 24.99,
        image: "https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
    },
    {
        id: 25,
        name: "Forza Horizon 5",
        year: 2021,
        developer: "Playground Games",
        description: "Parcourez les paysages variés du Mexique dans ce jeu de course en monde ouvert.",
        price: 49.99,
        image: "https://media.rawg.io/media/games/082/082365507ff04d456c700157072d35db.jpg"
    },
    {
        id: 26,
        name: "Uncharted 4: A Thief's End",
        year: 2016,
        developer: "Naughty Dog",
        description: "Nathan Drake part pour une dernière aventure à la recherche du trésor du pirate Henry Avery.",
        price: 19.99,
        image: "https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg"
    },
    {
        id: 27,
        name: "Doom Eternal",
        year: 2020,
        developer: "id Software",
        description: "Déchaînez votre fureur sur les hordes de démons dans ce FPS ultra-nerveux et brutal.",
        price: 29.99,
        image: "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg"
    },
    {
        id: 28,
        name: "Animal Crossing: New Horizons",
        year: 2020,
        developer: "Nintendo",
        description: "Créez votre île paradisiaque et vivez au rythme des saisons dans ce jeu de simulation relaxant.",
        price: 49.99,
        image: "https://media.rawg.io/media/games/42f/42fe1abd4d7c11ca92d93a0fb0f8662b.jpg"
    },
    {
        id: 29,
        name: "Super Mario Odyssey",
        year: 2017,
        developer: "Nintendo",
        description: "Mario et son chapeau Cappy parcourent le monde pour sauver la princesse Peach de Bowser.",
        price: 49.99,
        image: "https://media.rawg.io/media/games/267/267bd0dbc496f52692487d07d014c061.jpg"
    },
    {
        id: 30,
        name: "Metal Gear Solid V: The Phantom Pain",
        year: 2015,
        developer: "Kojima Productions",
        description: "Big Boss se réveille d'un coma de 9 ans et part en quête de vengeance dans ce chef-d'œuvre de l'infiltration.",
        price: 14.99,
        image: "https://media.rawg.io/media/games/490/49016e06ae2103881ff6373248843069.jpg"
    },
    {
        id: 31,
        name: "Death Stranding",
        year: 2019,
        developer: "Kojima Productions",
        description: "Sam Bridges doit reconnecter une Amérique fragmentée dans ce jeu d'action unique de Hideo Kojima.",
        price: 29.99,
        image: "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg"
    },
    {
        id: 32,
        name: "Persona 5 Royal",
        year: 2020,
        developer: "Atlus",
        description: "Incarnez un lycéen qui mène une double vie de justicier masqué dans ce RPG japonais acclamé.",
        price: 39.99,
        image: "https://media.rawg.io/media/games/a9c/a9c789951de65da545d51f664b4f2ce0.jpg"
    },
    {
        id: 33,
        name: "Disco Elysium",
        year: 2019,
        developer: "ZA/UM",
        description: "Un RPG révolutionnaire où vous incarnez un détective amnésique dans une enquête surréaliste.",
        price: 34.99,
        image: "https://media.rawg.io/media/games/840/8408ad3811289a6a5830cae60fb0b62a.jpg"
    },
    {
        id: 34,
        name: "It Takes Two",
        year: 2021,
        developer: "Hazelight Studios",
        description: "Une aventure coopérative primée où un couple en crise doit collaborer pour retrouver leur taille normale.",
        price: 29.99,
        image: "https://media.rawg.io/media/games/d47/d479582ed0a46496ad34f65c7099d7e5.jpg"
    },
    {
        id: 35,
        name: "Returnal",
        year: 2021,
        developer: "Housemarque",
        description: "Une astronaute coincée dans une boucle temporelle sur une planète hostile dans ce roguelike intense.",
        price: 49.99,
        image: "https://media.rawg.io/media/games/673/673f27be4c5dbf37ce3ed0ed5ddf9d8d.jpg"
    },
    {
        id: 36,
        name: "Deathloop",
        year: 2021,
        developer: "Arkane Studios",
        description: "Éliminez 8 cibles avant minuit pour briser la boucle temporelle sur l'île de Blackreef.",
        price: 29.99,
        image: "https://media.rawg.io/media/games/018/01857c5ff9579c48fa8bd76b4d83a946.jpg"
    },
    {
        id: 37,
        name: "Bloodborne",
        year: 2015,
        developer: "FromSoftware",
        description: "Explorez la ville gothique de Yharnam et affrontez des créatures cauchemardesques dans ce chef-d'œuvre.",
        price: 19.99,
        image: "https://media.rawg.io/media/games/214/214b29aeff13a0ae6a70fc4426e85991.jpg"
    },
    {
        id: 38,
        name: "Demon's Souls",
        year: 2020,
        developer: "Bluepoint Games",
        description: "Le remake sublime du jeu qui a lancé le genre souls-like, exclusif PlayStation 5.",
        price: 49.99,
        image: "https://media.rawg.io/media/games/ac3/ac3a89bfbda76082402e42b933c5825a.jpg"
    },
    {
        id: 39,
        name: "Ratchet & Clank: Rift Apart",
        year: 2021,
        developer: "Insomniac Games",
        description: "Le duo iconique traverse les dimensions dans cette aventure spectaculaire sur PS5.",
        price: 49.99,
        image: "https://media.rawg.io/media/games/ccf/ccfd3fd488a8ed61145a3da96c080131.jpg"
    },
    {
        id: 40,
        name: "Mass Effect Legendary Edition",
        year: 2021,
        developer: "BioWare",
        description: "La trilogie légendaire remastérisée : sauvez la galaxie en tant que Commandant Shepard.",
        price: 39.99,
        image: "https://media.rawg.io/media/games/64e/64e2a77f37ddc48d102127234af99886.jpg"
    },
    {
        id: 41,
        name: "Diablo IV",
        year: 2023,
        developer: "Blizzard Entertainment",
        description: "Affrontez les forces des Enfers dans ce hack'n'slash sombre et addictif en monde ouvert.",
        price: 59.99,
        image: "https://media.rawg.io/media/games/77d/77d51f8f4a07c3eecb0f8504027b1bf0.jpg"
    },
    {
        id: 42,
        name: "Starfield",
        year: 2023,
        developer: "Bethesda Game Studios",
        description: "Explorez plus de 1000 planètes dans ce RPG spatial épique de Bethesda.",
        price: 59.99,
        image: "https://media.rawg.io/media/games/ba8/ba82c971336adfd290e4c0eab6504fcf.jpg"
    },
    {
        id: 43,
        name: "Alan Wake 2",
        year: 2023,
        developer: "Remedy Entertainment",
        description: "Un thriller d'horreur psychologique où réalité et fiction s'entremêlent dangereusement.",
        price: 49.99,
        image: "https://media.rawg.io/media/games/5b9/5b963d7633cd640fa2dbc4069d1c6377.jpg"
    },
    {
        id: 44,
        name: "Lies of P",
        year: 2023,
        developer: "Neowiz Games",
        description: "Une réinterprétation dark souls-like de Pinocchio dans une ville steampunk ravagée.",
        price: 49.99,
        image: "https://media.rawg.io/media/games/458/45838becd01e929b6be8b88d655cebfc.jpg"
    },
    {
        id: 45,
        name: "Sea of Thieves",
        year: 2018,
        developer: "Rare",
        description: "Devenez le pirate de vos rêves dans cette aventure multijoueur en haute mer.",
        price: 29.99,
        image: "https://media.rawg.io/media/games/5f6/5f61441e6338e9221f96a8f4c64c7bb8.jpg"
    },
    {
        id: 46,
        name: "Celeste",
        year: 2018,
        developer: "Maddy Makes Games",
        description: "Aidez Madeline à gravir la montagne Celeste dans ce platformer exigeant et touchant.",
        price: 14.99,
        image: "https://media.rawg.io/media/games/594/59487800889ebac294c7c2c070d02356.jpg"
    },
    {
        id: 47,
        name: "Cuphead",
        year: 2017,
        developer: "Studio MDHR",
        description: "Un run and gun au style cartoon des années 30 avec des boss fights mémorables.",
        price: 19.99,
        image: "https://media.rawg.io/media/games/226/2262cea0b385db6cf399f4be831603b0.jpg"
    },
    {
        id: 48,
        name: "Ori and the Will of the Wisps",
        year: 2020,
        developer: "Moon Studios",
        description: "Un metroidvania sublime où Ori part à la recherche de son ami Ku dans une forêt enchantée.",
        price: 24.99,
        image: "https://media.rawg.io/media/games/718/71891d2484a592d871e91dc826707e1c.jpg"
    },
    {
        id: 49,
        name: "Undertale",
        year: 2015,
        developer: "Toby Fox",
        description: "Un RPG unique où chaque monstre peut être épargné dans cette aventure pleine d'humour et d'émotion.",
        price: 9.99,
        image: "https://media.rawg.io/media/games/ffe/ffed87105b14f5beff72ff44a7793fd5.jpg"
    },
    {
        id: 50,
        name: "Terraria",
        year: 2011,
        developer: "Re-Logic",
        description: "Creusez, combattez et construisez dans ce sandbox 2D aux possibilités infinies.",
        price: 9.99,
        image: "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg"
    }
];

const ADMIN_ACCOUNT = {
    pseudo: "Admin",
    email: "admin@gameshop.com",
    password: "admin123",
    isAdmin: true
};

// ============ Initialisation ============

function initData() {
    if (!localStorage.getItem("games")) {
        localStorage.setItem("games", JSON.stringify(GAMES_DEFAULT));
    }
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify([ADMIN_ACCOUNT]));
    }
}

function getGames() {
    return JSON.parse(localStorage.getItem("games")) || [];
}

function saveGames(games) {
    localStorage.setItem("games", JSON.stringify(games));
}

function getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
}

function saveUsers(users) {
    localStorage.setItem("users", JSON.stringify(users));
}

function getCurrentUser() {
    const data = sessionStorage.getItem("currentUser");
    return data ? JSON.parse(data) : null;
}

function setCurrentUser(user) {
    sessionStorage.setItem("currentUser", JSON.stringify(user));
}

function getCart() {
    return JSON.parse(sessionStorage.getItem("cart")) || [];
}

function saveCart(cart) {
    sessionStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

// ============ Auth ============

function showAuthModal(type) {
    document.getElementById("authModal").classList.remove("hidden");
    document.getElementById("authError").classList.add("hidden");
    if (type === "login") {
        document.getElementById("loginForm").classList.remove("hidden");
        document.getElementById("registerForm").classList.add("hidden");
    } else {
        document.getElementById("loginForm").classList.add("hidden");
        document.getElementById("registerForm").classList.remove("hidden");
    }
}

function closeAuthModal() {
    document.getElementById("authModal").classList.add("hidden");
}

function closeModalOnOverlay(e) {
    if (e.target === e.currentTarget) closeAuthModal();
}

function showAuthError(msg) {
    const el = document.getElementById("authError");
    el.textContent = msg;
    el.classList.remove("hidden");
}

function register(e) {
    e.preventDefault();
    const pseudo = document.getElementById("regPseudo").value.trim();
    const email = document.getElementById("regEmail").value.trim().toLowerCase();
    const password = document.getElementById("regPassword").value;

    const users = getUsers();
    if (users.find(u => u.email === email)) {
        showAuthError("Cet email est déjà utilisé.");
        return;
    }

    users.push({ pseudo, email, password, isAdmin: false });
    saveUsers(users);
    setCurrentUser({ pseudo, email, isAdmin: false });
    closeAuthModal();
    updateAuthUI();
    showToast("Inscription réussie !");
}

function login(e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;

    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        showAuthError("Email ou mot de passe incorrect.");
        return;
    }

    setCurrentUser({ pseudo: user.pseudo, email: user.email, isAdmin: user.isAdmin });
    closeAuthModal();
    updateAuthUI();
    renderGames();
    showToast("Bienvenue, " + user.pseudo + " !");
}

function logout() {
    sessionStorage.removeItem("currentUser");
    saveCart([]);
    updateAuthUI();
    showView("catalog");
    showToast("Déconnexion réussie.");
}

function updateAuthUI() {
    const user = getCurrentUser();
    const authBtns = document.getElementById("authButtons");
    const userInfo = document.getElementById("userInfo");
    const adminBtn = document.getElementById("adminBtn");

    if (user) {
        authBtns.classList.add("hidden");
        userInfo.classList.remove("hidden");
        document.getElementById("userName").textContent = user.pseudo;
        if (user.isAdmin) {
            adminBtn.classList.remove("hidden");
        } else {
            adminBtn.classList.add("hidden");
        }
    } else {
        authBtns.classList.remove("hidden");
        userInfo.classList.add("hidden");
    }
    updateCartCount();
}

// ============ Catalogue ============

function renderGames() {
    const games = getGames();
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filtered = games.filter(g => g.name.toLowerCase().includes(query));
    const grid = document.getElementById("gamesGrid");
    const user = getCurrentUser();

    if (filtered.length === 0) {
        grid.innerHTML = '<p class="empty-msg">Aucun jeu trouvé.</p>';
        return;
    }

    grid.innerHTML = filtered.map(game => `
        <div class="game-card">
            <img src="${escapeHtml(game.image)}" alt="${escapeHtml(game.name)}" onerror="this.src='https://placehold.co/400x200/1a1a2e/7b2ff7?text=GameShop'">
            <div class="game-card-body">
                <h3>${escapeHtml(game.name)}</h3>
                <div class="game-meta">${game.year} &middot; ${escapeHtml(game.developer)}</div>
                <p class="game-desc">${escapeHtml(game.description)}</p>
                <div class="game-card-footer">
                    <span class="game-price">${game.price.toFixed(2)} &euro;</span>
                    ${user ? `<button class="btn btn-primary btn-sm" onclick="addToCart(${game.id})">Ajouter au panier</button>` : ""}
                </div>
            </div>
        </div>
    `).join("");
}

function searchGames() {
    renderGames();
}

// ============ Panier ============

function addToCart(gameId) {
    const cart = getCart();
    if (cart.includes(gameId)) {
        showToast("Ce jeu est déjà dans votre panier.");
        return;
    }
    cart.push(gameId);
    saveCart(cart);
    showToast("Jeu ajouté au panier !");
}

function removeFromCart(gameId) {
    let cart = getCart();
    cart = cart.filter(id => id !== gameId);
    saveCart(cart);
    renderCart();
}

function updateCartCount() {
    document.getElementById("cartCount").textContent = getCart().length;
}

function renderCart() {
    const cart = getCart();
    const games = getGames();
    const container = document.getElementById("cartItems");
    const footer = document.getElementById("cartFooter");
    const emptyMsg = document.getElementById("cartEmpty");

    if (cart.length === 0) {
        container.innerHTML = "";
        footer.classList.add("hidden");
        emptyMsg.classList.remove("hidden");
        return;
    }

    emptyMsg.classList.add("hidden");
    footer.classList.remove("hidden");

    let total = 0;
    container.innerHTML = cart.map(id => {
        const game = games.find(g => g.id === id);
        if (!game) return "";
        total += game.price;
        return `
            <div class="cart-item">
                <img src="${escapeHtml(game.image)}" alt="${escapeHtml(game.name)}" onerror="this.src='https://placehold.co/80x60/1a1a2e/7b2ff7?text=Game'">
                <div class="cart-item-info">
                    <h4>${escapeHtml(game.name)}</h4>
                    <span class="cart-item-price">${game.price.toFixed(2)} &euro;</span>
                </div>
                <button class="btn btn-danger btn-sm" onclick="removeFromCart(${game.id})">Supprimer</button>
            </div>
        `;
    }).join("");

    document.getElementById("cartTotal").textContent = total.toFixed(2);
}

function confirmPurchase() {
    saveCart([]);
    renderCart();
    showToast("Achat confirmé ! Merci pour votre commande.");
}

// ============ Admin ============

function renderAdmin() {
    const games = getGames();
    const list = document.getElementById("adminGamesList");

    list.innerHTML = games.map(game => `
        <div class="admin-game-item">
            <span>${escapeHtml(game.name)} — ${game.price.toFixed(2)} &euro;</span>
            <div class="admin-game-actions">
                <button class="btn btn-outline btn-sm" onclick="editGame(${game.id})">Modifier</button>
                <button class="btn btn-danger btn-sm" onclick="deleteGame(${game.id})">Supprimer</button>
            </div>
        </div>
    `).join("");
}

function submitGameForm(e) {
    e.preventDefault();
    const editId = document.getElementById("editGameId").value;
    const gameData = {
        name: document.getElementById("gameName").value.trim(),
        description: document.getElementById("gameDesc").value.trim(),
        image: document.getElementById("gameImage").value.trim(),
        year: parseInt(document.getElementById("gameYear").value),
        developer: document.getElementById("gameDev").value.trim(),
        price: parseFloat(document.getElementById("gamePrice").value)
    };

    const games = getGames();

    if (editId) {
        const idx = games.findIndex(g => g.id === parseInt(editId));
        if (idx !== -1) {
            games[idx] = { ...games[idx], ...gameData };
            saveGames(games);
            showToast("Jeu modifié avec succès !");
        }
    } else {
        const maxId = games.reduce((max, g) => Math.max(max, g.id), 0);
        gameData.id = maxId + 1;
        games.push(gameData);
        saveGames(games);
        showToast("Jeu ajouté avec succès !");
    }

    resetGameForm();
    renderAdmin();
}

function editGame(id) {
    const games = getGames();
    const game = games.find(g => g.id === id);
    if (!game) return;

    document.getElementById("editGameId").value = game.id;
    document.getElementById("gameName").value = game.name;
    document.getElementById("gameDesc").value = game.description;
    document.getElementById("gameImage").value = game.image;
    document.getElementById("gameYear").value = game.year;
    document.getElementById("gameDev").value = game.developer;
    document.getElementById("gamePrice").value = game.price;
    document.getElementById("adminFormTitle").textContent = "Modifier le jeu";

    document.querySelector(".admin-form-container").scrollIntoView({ behavior: "smooth" });
}

function deleteGame(id) {
    if (!confirm("Supprimer ce jeu ?")) return;
    let games = getGames();
    games = games.filter(g => g.id !== id);
    saveGames(games);
    renderAdmin();
    showToast("Jeu supprimé.");
}

function resetGameForm() {
    document.getElementById("gameForm").reset();
    document.getElementById("editGameId").value = "";
    document.getElementById("adminFormTitle").textContent = "Ajouter un jeu";
}

// ============ Navigation ============

function showView(view) {
    document.getElementById("catalogView").classList.add("hidden");
    document.getElementById("cartView").classList.add("hidden");
    document.getElementById("adminView").classList.add("hidden");

    if (view === "catalog") {
        document.getElementById("catalogView").classList.remove("hidden");
        renderGames();
    } else if (view === "cart") {
        document.getElementById("cartView").classList.remove("hidden");
        renderCart();
    } else if (view === "admin") {
        const user = getCurrentUser();
        if (!user || !user.isAdmin) {
            showToast("Accès refusé.");
            showView("catalog");
            return;
        }
        document.getElementById("adminView").classList.remove("hidden");
        renderAdmin();
    }
}

// ============ Utilitaires ============

function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
}

function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.classList.remove("hidden");
    setTimeout(() => toast.classList.add("hidden"), 2500);
}

// ============ Démarrage ============

initData();
updateAuthUI();
showView("catalog");
