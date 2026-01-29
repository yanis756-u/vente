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
    },
    {
        id: 51,
        name: "BioShock Infinite",
        year: 2013,
        developer: "Irrational Games",
        description: "Explorez la cité volante de Columbia dans ce FPS narratif aux retournements époustouflants.",
        price: 19.99,
        image: "https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg"
    },
    {
        id: 52,
        name: "Portal 2",
        year: 2011,
        developer: "Valve",
        description: "Résolvez des puzzles avec votre portail gun dans cette suite hilarante et géniale.",
        price: 9.99,
        image: "https://media.rawg.io/media/games/2ba/2bac0e87cf45e5b508f227d281c9252a.jpg"
    },
    {
        id: 53,
        name: "Half-Life 2",
        year: 2004,
        developer: "Valve",
        description: "Gordon Freeman reprend du service contre le Cartel dans ce FPS légendaire.",
        price: 9.99,
        image: "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg"
    },
    {
        id: 54,
        name: "Left 4 Dead 2",
        year: 2009,
        developer: "Valve",
        description: "Survivez à l'apocalypse zombie en coopération avec vos amis dans ce shooter intense.",
        price: 9.99,
        image: "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
    },
    {
        id: 55,
        name: "Team Fortress 2",
        year: 2007,
        developer: "Valve",
        description: "Le shooter multijoueur classique avec 9 classes uniques et un style cartoon inimitable.",
        price: 0.00,
        image: "https://media.rawg.io/media/games/46d/46d98e6910fbc0706e2948a7cc9b10c5.jpg"
    },
    {
        id: 56,
        name: "Counter-Strike 2",
        year: 2023,
        developer: "Valve",
        description: "La référence du FPS tactique compétitif, maintenant sur Source 2.",
        price: 0.00,
        image: "https://media.rawg.io/media/screenshots/7b2/7b2920260f974292970d6c2312991a3d.jpg"
    },
    {
        id: 57,
        name: "Dota 2",
        year: 2013,
        developer: "Valve",
        description: "Le MOBA légendaire où deux équipes de 5 héros s'affrontent pour détruire l'Ancient adverse.",
        price: 0.00,
        image: "https://media.rawg.io/media/games/6fc/6fcf4cd3b17c288821388e6085bb0fc9.jpg"
    },
    {
        id: 58,
        name: "League of Legends",
        year: 2009,
        developer: "Riot Games",
        description: "Le MOBA le plus populaire au monde avec plus de 160 champions jouables.",
        price: 0.00,
        image: "https://media.rawg.io/media/games/78b/78bc81e247fc7e77af700cbd632a9297.jpg"
    },
    {
        id: 59,
        name: "Valorant",
        year: 2020,
        developer: "Riot Games",
        description: "Un FPS tactique 5v5 où chaque agent possède des capacités uniques.",
        price: 0.00,
        image: "https://media.rawg.io/media/games/b11/b11127b9ee3c3701bd15b9af3286d20e.jpg"
    },
    {
        id: 60,
        name: "Overwatch 2",
        year: 2022,
        developer: "Blizzard Entertainment",
        description: "Le hero shooter de Blizzard revient en free-to-play avec de nouveaux héros et modes.",
        price: 0.00,
        image: "https://media.rawg.io/media/games/95a/95a10817d1fc648cff1153f3fa8ef6c5.jpg"
    },
    {
        id: 61,
        name: "Apex Legends",
        year: 2019,
        developer: "Respawn Entertainment",
        description: "Un Battle Royale nerveux avec des légendes aux capacités uniques.",
        price: 0.00,
        image: "https://media.rawg.io/media/games/737/737ea5662211d2e0bbd6f5989189e4f1.jpg"
    },
    {
        id: 62,
        name: "Fortnite",
        year: 2017,
        developer: "Epic Games",
        description: "Le Battle Royale phénomène avec construction et collaborations pop culture.",
        price: 0.00,
        image: "https://media.rawg.io/media/games/d97/d97f663b752a6484df105993f17abb49.jpg"
    },
    {
        id: 63,
        name: "PUBG: Battlegrounds",
        year: 2017,
        developer: "PUBG Corporation",
        description: "Le Battle Royale qui a lancé le genre : 100 joueurs, un seul survivant.",
        price: 0.00,
        image: "https://media.rawg.io/media/games/1bd/1bd2657b81eb0c99338120ad444b24ff.jpg"
    },
    {
        id: 64,
        name: "Rocket League",
        year: 2015,
        developer: "Psyonix",
        description: "Du football avec des voitures : simple à comprendre, impossible à maîtriser.",
        price: 0.00,
        image: "https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg"
    },
    {
        id: 65,
        name: "Fall Guys",
        year: 2020,
        developer: "Mediatonic",
        description: "Un Battle Royale déjanté où 60 joueurs s'affrontent dans des épreuves loufoques.",
        price: 0.00,
        image: "https://media.rawg.io/media/games/5eb/5eb49eb2fa0738fdb5bacea557b1bc57.jpg"
    },
    {
        id: 66,
        name: "Among Us",
        year: 2018,
        developer: "Innersloth",
        description: "Trouvez l'imposteur parmi l'équipage dans ce jeu de déduction sociale addictif.",
        price: 4.99,
        image: "https://media.rawg.io/media/games/e74/e74458058b35e01c1ae3feeb39a3f724.jpg"
    },
    {
        id: 67,
        name: "Phasmophobia",
        year: 2020,
        developer: "Kinetic Games",
        description: "Chassez les fantômes en coopération avec du vrai matériel paranormal.",
        price: 13.99,
        image: "https://media.rawg.io/media/screenshots/370/370895ff725d74e26b8d30389222b397.jpg"
    },
    {
        id: 68,
        name: "Dead by Daylight",
        year: 2016,
        developer: "Behaviour Interactive",
        description: "Un tueur contre quatre survivants dans ce jeu d'horreur asymétrique multijoueur.",
        price: 19.99,
        image: "https://media.rawg.io/media/games/e11/e11325e2f89151d31f612e38dee3b6a0.jpg"
    },
    {
        id: 69,
        name: "Rust",
        year: 2018,
        developer: "Facepunch Studios",
        description: "Survivez dans un monde hostile où les autres joueurs sont votre plus grande menace.",
        price: 39.99,
        image: "https://media.rawg.io/media/games/447/4470c1e76f01acfaf5af9c207d1c1c92.jpg"
    },
    {
        id: 70,
        name: "ARK: Survival Evolved",
        year: 2017,
        developer: "Studio Wildcard",
        description: "Survivez et apprivoisez des dinosaures sur une île mystérieuse.",
        price: 29.99,
        image: "https://media.rawg.io/media/games/58a/58ac7f6569259dcc0b60b921869b19fc.jpg"
    },
    {
        id: 71,
        name: "Subnautica",
        year: 2018,
        developer: "Unknown Worlds",
        description: "Explorez un océan alien magnifique et terrifiant après un crash spatial.",
        price: 29.99,
        image: "https://media.rawg.io/media/games/739/73990e3ec9f43a9e8ecafe207fa4f368.jpg"
    },
    {
        id: 72,
        name: "No Man's Sky",
        year: 2016,
        developer: "Hello Games",
        description: "Explorez un univers infini de 18 quintillions de planètes générées procéduralement.",
        price: 29.99,
        image: "https://media.rawg.io/media/games/174/1743b3dd185bda4a7be349347d4064df.jpg"
    },
    {
        id: 73,
        name: "Outer Wilds",
        year: 2019,
        developer: "Mobius Digital",
        description: "Explorez un système solaire pris dans une boucle temporelle de 22 minutes.",
        price: 24.99,
        image: "https://media.rawg.io/media/games/9f4/9f418898f5415668ca47b5f4ab1ecfeb.jpg"
    },
    {
        id: 74,
        name: "Control",
        year: 2019,
        developer: "Remedy Entertainment",
        description: "Jesse Faden explore le Bureau Fédéral du Contrôle, une agence secrète envahie par une force surnaturelle.",
        price: 29.99,
        image: "https://media.rawg.io/media/games/253/2534a46f3da7fa7c315f1387515ca393.jpg"
    },
    {
        id: 75,
        name: "Prey",
        year: 2017,
        developer: "Arkane Studios",
        description: "Survivez à une invasion alien sur une station spatiale dans ce immersive sim.",
        price: 29.99,
        image: "https://media.rawg.io/media/games/e6d/e6de699bd788497f4b52e2f41f9698f2.jpg"
    },
    {
        id: 76,
        name: "Hitman 3",
        year: 2021,
        developer: "IO Interactive",
        description: "L'Agent 47 termine sa trilogie avec des assassinats créatifs dans le monde entier.",
        price: 39.99,
        image: "https://media.rawg.io/media/games/126/126fbd5ceacddc6ad16fc96e50b1265b.jpg"
    },
    {
        id: 77,
        name: "Splinter Cell: Blacklist",
        year: 2013,
        developer: "Ubisoft Toronto",
        description: "Sam Fisher traque des terroristes dans ce jeu d'infiltration tactique.",
        price: 19.99,
        image: "https://media.rawg.io/media/games/de9/de93cd3e51d2c57e33bbf7dade34f25a.jpg"
    },
    {
        id: 78,
        name: "Watch Dogs 2",
        year: 2016,
        developer: "Ubisoft Montréal",
        description: "Hackez San Francisco en monde ouvert avec Marcus et DedSec.",
        price: 19.99,
        image: "https://media.rawg.io/media/games/f52/f52cf6ba08089cd5f1a9c8f7fcc93d1f.jpg"
    },
    {
        id: 79,
        name: "Far Cry 6",
        year: 2021,
        developer: "Ubisoft Toronto",
        description: "Libérez Yara d'un dictateur dans ce FPS en monde ouvert tropical.",
        price: 39.99,
        image: "https://media.rawg.io/media/games/5dd/5dd4d2dd986d2826800bc37fff64aa4f.jpg"
    },
    {
        id: 80,
        name: "Just Cause 4",
        year: 2018,
        developer: "Avalanche Studios",
        description: "Rico Rodriguez sème le chaos avec son grappin dans ce bac à sable explosif.",
        price: 19.99,
        image: "https://media.rawg.io/media/games/02a/02a7f96f5a1156642bc0f827fd1b63f0.jpg"
    },
    {
        id: 81,
        name: "Saints Row",
        year: 2022,
        developer: "Volition",
        description: "Créez votre empire criminel dans ce reboot déjanté de la série.",
        price: 29.99,
        image: "https://media.rawg.io/media/games/253/2538c831423559834329741e44d3c718.jpg"
    },
    {
        id: 82,
        name: "Sleeping Dogs",
        year: 2012,
        developer: "United Front Games",
        description: "Infiltrez les triades de Hong Kong en tant que flic sous couverture.",
        price: 14.99,
        image: "https://media.rawg.io/media/games/3d9/3d9bac98d79bcd2d445f829e8d6be902.jpg"
    },
    {
        id: 83,
        name: "Yakuza 0",
        year: 2015,
        developer: "Ryu Ga Gotoku Studio",
        description: "Découvrez les origines de Kiryu et Majima dans le Tokyo des années 80.",
        price: 19.99,
        image: "https://media.rawg.io/media/games/ca1/ca16da30f86d8f4d36261de45fb35430.jpg"
    },
    {
        id: 84,
        name: "Dragon Quest XI",
        year: 2018,
        developer: "Square Enix",
        description: "Un JRPG classique et magnifique avec le héros légendaire Luminary.",
        price: 39.99,
        image: "https://media.rawg.io/media/games/e04/e041cc430f6b6681477580d3bcddf29f.jpg"
    },
    {
        id: 85,
        name: "NieR: Automata",
        year: 2017,
        developer: "PlatinumGames",
        description: "Des androïdes combattent pour l'humanité dans ce RPG d'action philosophique.",
        price: 29.99,
        image: "https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg"
    },
    {
        id: 86,
        name: "Monster Hunter: World",
        year: 2018,
        developer: "Capcom",
        description: "Chassez des monstres gigantesques seul ou en coopération dans ce RPG d'action.",
        price: 29.99,
        image: "https://media.rawg.io/media/games/21c/21cc15d233117c6809ec86870559e105.jpg"
    },
    {
        id: 87,
        name: "Devil May Cry 5",
        year: 2019,
        developer: "Capcom",
        description: "Dante, Nero et V affrontent les démons avec style dans ce hack'n'slash spectaculaire.",
        price: 24.99,
        image: "https://media.rawg.io/media/games/9fb/9fbf956a16249def7625ab5dc3d09515.jpg"
    },
    {
        id: 88,
        name: "Bayonetta 3",
        year: 2022,
        developer: "PlatinumGames",
        description: "La sorcière Bayonetta revient pour des combats spectaculaires contre des créatures du multivers.",
        price: 49.99,
        image: "https://media.rawg.io/media/games/c30/c30ac50cb13096f5402250bf666a321c.jpg"
    },
    {
        id: 89,
        name: "Metroid Dread",
        year: 2021,
        developer: "MercurySteam",
        description: "Samus Aran affronte les terrifiants robots E.M.M.I. dans ce metroidvania intense.",
        price: 49.99,
        image: "https://media.rawg.io/media/games/c26/c262f8b54b46edc72594c4a9bb8ee13e.jpg"
    },
    {
        id: 90,
        name: "Fire Emblem: Three Houses",
        year: 2019,
        developer: "Intelligent Systems",
        description: "Dirigez une des trois maisons de l'académie dans ce RPG tactique épique.",
        price: 49.99,
        image: "https://media.rawg.io/media/games/530/53081dbd5003f990fa5312404ac3d71a.jpg"
    },
    {
        id: 91,
        name: "Xenoblade Chronicles 3",
        year: 2022,
        developer: "Monolith Soft",
        description: "Noah et Mio unissent deux nations en guerre dans ce JRPG épique.",
        price: 49.99,
        image: "https://media.rawg.io/media/games/ae7/ae7cfc9a66232839112663899d2c8d8d.jpg"
    },
    {
        id: 92,
        name: "Splatoon 3",
        year: 2022,
        developer: "Nintendo",
        description: "Les batailles d'encre colorées reviennent avec de nouveaux modes et armes.",
        price: 49.99,
        image: "https://media.rawg.io/media/games/360/360ac0a839ab0f0d9a70b35d38264cb0.jpg"
    },
    {
        id: 93,
        name: "Kirby and the Forgotten Land",
        year: 2022,
        developer: "HAL Laboratory",
        description: "Kirby explore un monde 3D post-apocalyptique en avalant tout sur son passage.",
        price: 49.99,
        image: "https://media.rawg.io/media/games/42a/42a71f0cbe23185f778c10462faa12d8.jpg"
    },
    {
        id: 94,
        name: "Pokémon Legends: Arceus",
        year: 2022,
        developer: "Game Freak",
        description: "Explorez la région de Hisui et créez le tout premier Pokédex.",
        price: 49.99,
        image: "https://media.rawg.io/media/games/80a/80a3e1060b49c02f901e781b263cd881.jpg"
    },
    {
        id: 95,
        name: "Luigi's Mansion 3",
        year: 2019,
        developer: "Next Level Games",
        description: "Luigi aspire des fantômes dans un hôtel hanté avec son fidèle Ectoblast G-LU.",
        price: 49.99,
        image: "https://media.rawg.io/media/games/3d9/3d972802b9ee793098b73ecf676b687e.jpeg"
    },
    {
        id: 96,
        name: "Crash Bandicoot 4: It's About Time",
        year: 2020,
        developer: "Toys for Bob",
        description: "Crash et Coco voyagent dans le temps pour arrêter Neo Cortex et N. Tropy.",
        price: 39.99,
        image: "https://media.rawg.io/media/games/54a/54a14917b3298bbaacdf9873c3af7229.jpg"
    },
    {
        id: 97,
        name: "Spyro Reignited Trilogy",
        year: 2018,
        developer: "Toys for Bob",
        description: "Les trois aventures classiques du dragon violet remastérisées magnifiquement.",
        price: 29.99,
        image: "https://media.rawg.io/media/games/a50/a505bccdcfdc79970a93574c747f6e0d.jpg"
    },
    {
        id: 98,
        name: "Sonic Frontiers",
        year: 2022,
        developer: "Sonic Team",
        description: "Sonic explore des îles mystérieuses en monde ouvert pour la première fois.",
        price: 39.99,
        image: "https://media.rawg.io/media/games/f2b/f2bc84509d92c95a8ad22caa8c8afa06.jpg"
    },
    {
        id: 99,
        name: "Dragon Ball Z: Kakarot",
        year: 2020,
        developer: "CyberConnect2",
        description: "Revivez la saga DBZ de l'arc Saiyan à l'arc Buu dans ce RPG d'action.",
        price: 29.99,
        image: "https://media.rawg.io/media/games/cf0/cf062fb221995e3e04294ba5f9dabbb9.jpg"
    },
    {
        id: 100,
        name: "Naruto Shippuden: Ultimate Ninja Storm 4",
        year: 2016,
        developer: "CyberConnect2",
        description: "Le combat ninja ultime avec tous les personnages de Naruto Shippuden.",
        price: 19.99,
        image: "https://media.rawg.io/media/games/b1f/b1f0b19226228555d8b93b2f42b22349.jpg"
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

function sortGames(games) {
    const sortValue = document.getElementById("sortSelect").value;
    const [field, order] = sortValue.split("-");

    return [...games].sort((a, b) => {
        let valA, valB;
        if (field === "name") {
            valA = a.name.toLowerCase();
            valB = b.name.toLowerCase();
        } else if (field === "price") {
            valA = a.price;
            valB = b.price;
        } else if (field === "year") {
            valA = a.year;
            valB = b.year;
        }

        if (order === "asc") {
            return valA > valB ? 1 : valA < valB ? -1 : 0;
        } else {
            return valA < valB ? 1 : valA > valB ? -1 : 0;
        }
    });
}

function renderGames() {
    const games = getGames();
    const query = document.getElementById("searchInput").value.toLowerCase();
    let filtered = games.filter(g => g.name.toLowerCase().includes(query));
    filtered = sortGames(filtered);
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
    showCheckout();
}

// ============ Checkout / Paiement ============

function showCheckout() {
    const cart = getCart();
    if (cart.length === 0) {
        showToast("Votre panier est vide.");
        return;
    }
    showView("checkout");
}

function renderCheckout() {
    const cart = getCart();
    const games = getGames();
    const container = document.getElementById("checkoutItems");

    let total = 0;
    container.innerHTML = cart.map(id => {
        const game = games.find(g => g.id === id);
        if (!game) return "";
        total += game.price;
        return `
            <div class="checkout-item">
                <span>${escapeHtml(game.name)}</span>
                <span>${game.price.toFixed(2)} &euro;</span>
            </div>
        `;
    }).join("");

    document.getElementById("checkoutTotal").textContent = total.toFixed(2);
    document.getElementById("payAmount").textContent = total.toFixed(2);

    // Reset form and show it
    document.getElementById("paymentForm").reset();
    document.getElementById("paymentForm").classList.remove("hidden");
    document.querySelector(".checkout-summary").classList.remove("hidden");
    document.querySelector(".checkout-form-container").classList.remove("hidden");
    document.getElementById("paymentSuccess").classList.add("hidden");
    document.getElementById("payBtn").disabled = false;
    document.getElementById("payBtnText").classList.remove("hidden");
    document.getElementById("payBtnLoader").classList.add("hidden");
}

function formatCardNumber(input) {
    let value = input.value.replace(/\D/g, "");
    value = value.substring(0, 16);
    let formatted = "";
    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formatted += " ";
        }
        formatted += value[i];
    }
    input.value = formatted;
}

function formatExpiry(input) {
    let value = input.value.replace(/\D/g, "");
    value = value.substring(0, 4);
    if (value.length >= 2) {
        value = value.substring(0, 2) + "/" + value.substring(2);
    }
    input.value = value;
}

function processPayment(e) {
    e.preventDefault();

    const cardName = document.getElementById("cardName").value.trim();
    const cardNumber = document.getElementById("cardNumber").value.replace(/\s/g, "");
    const cardExpiry = document.getElementById("cardExpiry").value;
    const cardCvv = document.getElementById("cardCvv").value;

    // Validation
    if (cardName.length < 2) {
        showToast("Veuillez entrer un nom valide.");
        return;
    }
    if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
        showToast("Numéro de carte invalide (16 chiffres requis).");
        return;
    }
    if (!/^\d{2}\/\d{2}$/.test(cardExpiry)) {
        showToast("Date d'expiration invalide (MM/AA).");
        return;
    }
    if (!/^\d{3}$/.test(cardCvv)) {
        showToast("CVV invalide (3 chiffres requis).");
        return;
    }

    // Show loading
    document.getElementById("payBtn").disabled = true;
    document.getElementById("payBtnText").classList.add("hidden");
    document.getElementById("payBtnLoader").classList.remove("hidden");

    // Simulate payment processing
    setTimeout(() => {
        // Success
        saveCart([]);
        document.getElementById("paymentForm").classList.add("hidden");
        document.querySelector(".checkout-summary").classList.add("hidden");
        document.querySelector(".checkout-form-container").classList.add("hidden");
        document.getElementById("paymentSuccess").classList.remove("hidden");
        updateCartCount();
    }, 2000);
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
    document.getElementById("checkoutView").classList.add("hidden");
    document.getElementById("adminView").classList.add("hidden");

    if (view === "catalog") {
        document.getElementById("catalogView").classList.remove("hidden");
        renderGames();
    } else if (view === "cart") {
        document.getElementById("cartView").classList.remove("hidden");
        renderCart();
    } else if (view === "checkout") {
        document.getElementById("checkoutView").classList.remove("hidden");
        renderCheckout();
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
