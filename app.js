// ============ Données par défaut ============

const GAMES_DEFAULT = [
    {
        id: 1,
        name: "The Legend of Zelda: Tears of the Kingdom",
        year: 2023,
        developer: "Nintendo",
        description: "Explorez le vaste monde d'Hyrule dans cette suite épique de Breath of the Wild.",
        price: 59.99,
        image: "https://upload.wikimedia.org/wikipedia/en/f/fb/The_Legend_of_Zelda_Tears_of_the_Kingdom_cover.jpg"
    },
    {
        id: 2,
        name: "God of War Ragnarök",
        year: 2022,
        developer: "Santa Monica Studio",
        description: "Kratos et Atreus affrontent les dieux nordiques dans cette aventure épique.",
        price: 49.99,
        image: "https://upload.wikimedia.org/wikipedia/en/e/ee/God_of_War_Ragnar%C3%B6k_cover.jpg"
    },
    {
        id: 3,
        name: "Elden Ring",
        year: 2022,
        developer: "FromSoftware",
        description: "Un RPG en monde ouvert créé par Hidetaka Miyazaki et George R.R. Martin.",
        price: 39.99,
        image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg"
    },
    {
        id: 4,
        name: "Red Dead Redemption 2",
        year: 2018,
        developer: "Rockstar Games",
        description: "Vivez une épopée western dans l'Amérique de 1899 avec Arthur Morgan.",
        price: 29.99,
        image: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg"
    },
    {
        id: 5,
        name: "The Witcher 3: Wild Hunt",
        year: 2015,
        developer: "CD Projekt Red",
        description: "Incarnez Geralt de Riv dans ce RPG primé à monde ouvert.",
        price: 19.99,
        image: "https://upload.wikimedia.org/wikipedia/en/0/06/Witcher_3_cover_art.jpg"
    },
    {
        id: 6,
        name: "Grand Theft Auto V",
        year: 2013,
        developer: "Rockstar Games",
        description: "Plongez dans Los Santos, une métropole fictive remplie d'action.",
        price: 14.99,
        image: "https://upload.wikimedia.org/wikipedia/en/a/a5/Grand_Theft_Auto_V.png"
    },
    {
        id: 7,
        name: "Cyberpunk 2077",
        year: 2020,
        developer: "CD Projekt Red",
        description: "Plongez dans Night City, une mégalopole futuriste obsédée par le pouvoir et la technologie.",
        price: 29.99,
        image: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg"
    },
    {
        id: 8,
        name: "Minecraft",
        year: 2011,
        developer: "Mojang Studios",
        description: "Construisez, explorez et survivez dans un monde de blocs aux possibilités infinies.",
        price: 19.99,
        image: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png"
    },
    {
        id: 9,
        name: "Horizon Forbidden West",
        year: 2022,
        developer: "Guerrilla Games",
        description: "Aloy explore l'Ouest interdit pour stopper une menace qui pourrait détruire toute vie sur Terre.",
        price: 39.99,
        image: "https://upload.wikimedia.org/wikipedia/en/6/69/Horizon_Forbidden_West_cover_art.jpg"
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
