// data/actions.js - Actions et décors par personnage

const personnageActions = {
    // ==================== PIRATE ====================
    pirate: {
        decors: [
            {
                nom: "🏴‍☠️ Pont du navire",
                description: "sur le pont d'un majestueux navire pirate, voiles gonflées par le vent, drapeau noir flottant, océan déchaîné autour"
            },
            {
                nom: "🍺 Taverne enfumée",
                description: "dans une taverne pirate enfumée, tonneaux de rhum, lanternes suspendues, marins qui rient en arrière-plan"
            },
            {
                nom: "🏝️ Île au trésor",
                description: "sur une île paradisiaque, palmiers, sable blanc, un coffre au trésor entrouvert rempli de pièces d'or"
            }
        ],
        actions: [
            {
                nom: "À la barre",
                description: "elle tient la barre du navire d'une main, une épée dans l'autre, dansant sensuellement au rythme des vagues"
            },
            {
                nom: "À la taverne",
                description: "accoudée au comptoir, elle boit une bière à la gourde tout en ondulant des hanches, un sourire coquin aux lèvres"
            },
            {
                nom: "Chercheuse de trésor",
                description: "agenouillée près du coffre, elle fait ruisseler des pièces d'or entre ses doigts, se relevant dans une danse de victoire"
            }
        ]
    },

    // ==================== SPACESHIP (VAISSEAU SPATIAL) ====================
    spaceship: {
        decors: [
            {
                nom: "🚀 Cockpit futuriste",
                description: "dans le cockpit high-tech d'un vaisseau spatial, lumières clignotantes, écrans holographiques, étoiles défiler"
            },
            {
                nom: "🌌 Nébuleuse galactique",
                description: "flottant dans l'espace, une nébuleuse colorée en arrière-plan, planètes lointaines, aurores cosmiques"
            },
            {
                nom: "🪐 Base lunaire",
                description: "sur une base lunaire futuriste, dômes argentés, drapeaux, la Terre visible dans le ciel"
            }
        ],
        actions: [
            {
                nom: "Aux commandes",
                description: "assise sensuellement dans le siège du pilote, ses doigts glissent sur les commandes holographiques"
            },
            {
                nom: "En apesanteur",
                description: "flottant en apesanteur, elle tournoie gracieusement, ses cheveux flottant autour d'elle"
            },
            {
                nom: "Observation stellaire",
                description: "collée au hublot, elle regarde les étoiles, son corps épousant la courbe du vaisseau"
            }
        ]
    },

    // ==================== SUPERMAN / SUPER-HÉROS ====================
    superman: {
        decors: [
            {
                nom: "🏙️ Ville de nuit",
                description: "surplombant une ville illuminée la nuit, gratte-ciels, lumières urbaines, lune pleine"
            },
            {
                nom: "🏢 Toit d'immeuble",
                description: "debout au bord d'un toit d'immeuble, antennes paraboliques, vue imprenable sur la métropole"
            },
            {
                nom: "⚡ Bataille épique",
                description: "dans une zone de combat, éclairs, explosions au loin, fumée dramatique"
            }
        ],
        actions: [
            {
                nom: "En vol",
                description: "volant dans les airs, un poing en avant, l'autre main sur la hanche, cheveux au vent"
            },
            {
                nom: "Pose héroïque",
                description: "posant fièrement sur un gratte-ciel, cape flottante, mains sur les hanches, regard déterminé"
            },
            {
                nom: "Sauvetage sensuel",
                description: "tenant un (invisible) bébé dans ses bras, elle protège la ville tout en dansant"
            }
        ]
    },

    // ==================== TAPIS VOLANT ====================
    carpet: {
        decors: [
            {
                nom: "🏜️ Désert d'Arabie",
                description: "survolant un désert doré, dunes à perte de vue, soleil couchant orangé"
            },
            {
                nom: "🌃 Cité des mille et une nuits",
                description: "au-dessus d'une cité orientale la nuit, minarets, lumières chaudes, musique au loin"
            },
            {
                nom: "☁️ Dans les nuages",
                description: "parmi les nuages, ciel bleu éclatant, oiseaux exotiques volant à côté"
            }
        ],
        actions: [
            {
                nom: "Conduite sensuelle",
                description: "assise en tailleur sur le tapis, elle guide d'une main tout en ondulant du bassin"
            },
            {
                nom: "Allongée",
                description: "allongée sensuellement sur le tapis, une jambe relevée, elle caresse le tissu magique"
            },
            {
                nom: "Acrobatie aérienne",
                description: "debout sur le tapis, elle fait des figures acrobatiques, les bras en l'air"
            }
        ]
    },

    // ==================== MISSILE ====================
    missile: {
        decors: [
            {
                nom: "💥 Ciel de bataille",
                description: "traversant un ciel de bataille, avions de chasse, traînées de fumée, explosions"
            },
            {
                nom: "🌅 Coucher de soleil",
                description: "fendant le ciel au coucher du soleil, nuages roses et orange, lumière dorée"
            },
            {
                nom: "🏞️ Canyon",
                description: "rase-mottes dans un canyon rocheux, falaises abruptes, rivière en contrebas"
            }
        ],
        actions: [
            {
                nom: "Chevauchée sauvage",
                description: "à califourchon sur le missile, elle tient les ailerons, cheveux fouettés par le vent"
            },
            {
                nom: "Danse sur la bombe",
                description: "debout sur le missile, elle danse en équilibre, bras écartés comme sur un surf"
            },
            {
                nom: "Pose glamour",
                description: "allongée sur le missile, pose de mannequin, regard langoureux vers la caméra"
            }
        ]
    },

    // ==================== DRAGON ====================
    dragon: {
        decors: [
            {
                nom: "🏔️ Montagnes volcaniques",
                description: "survolant des montagnes volcaniques, lave en fusion, ciel de cendres"
            },
            {
                nom: "🌲 Forêt enchantée",
                description: "au-dessus d'une forêt magique, arbres géants, créatures mythiques en contrebas"
            },
            {
                nom: "🏰 Château médiéval",
                description: "tournant autour d'un château médiéval, tours, pont-levis, douves"
            }
        ],
        actions: [
            {
                nom: "Guide du dragon",
                description: "agenouillée sur le dos du dragon, elle guide la créature par ses écailles"
            },
            {
                nom: "Caresse sauvage",
                description: "allongée contre le cou du dragon, elle le caresse sensuellement tout en dansant"
            },
            {
                nom: "Acrobatie",
                description: "debout sur la tête du dragon, elle fait des figures pendant le vol"
            }
        ]
    },

    // ==================== SIRÈNE ====================
    siren: {
        decors: [
            {
                nom: "🌊 Fonds marins",
                description: "dans les profondeurs océaniques, récifs coralliens, poissons colorés, épaves englouties"
            },
            {
                nom: "🏝️ Lagune paradisiaque",
                description: "dans une lagune turquoise, eau cristalline, plage de sable blanc"
            },
            {
                nom: "🪸 Palais sous-marin",
                description: "dans un palais sous-marin, colonnes de corail, perles géantes, lumière filtrée"
            }
        ],
        actions: [
            {
                nom: "Nage sensuelle",
                description: "nageant gracieusement, sa queue de sirène ondulant, elle tournoie dans l'eau"
            },
            {
                nom: "Sur un rocher",
                description: "assise sur un rocher, elle se coiffe sensuellement, chantant pour les marins"
            },
            {
                nom: "Danse aquatique",
                description: "dansant sous l'eau, ses mouvements créant des bulles, jouant avec les poissons"
            }
        ]
    },

    // ==================== COWGIRL ====================
    cowgirl: {
        decors: [
            {
                nom: "🤠 Saloon",
                description: "dans un saloon enfumé, tables de poker, serveuses, musique country"
            },
            {
                nom: "🏜️ Désert",
                description: "au milieu du désert, cactus, rochers rouges, soleil de plomb"
            },
            {
                nom: "🐎 Ranch",
                description: "dans un ranch, écuries, chevaux, montagnes au loin"
            }
        ],
        actions: [
            {
                nom: "Au saloon",
                description: "accoudée au bar, elle boit un whisky tout en dansant, chapeau incliné"
            },
            {
                nom: "Lasso",
                description: "faisant tournoyer son lasso au-dessus d'elle, elle attire un cow-boy imaginaire"
            },
            {
                nom: "Sur son cheval",
                description: "à califourchon sur un cheval, elle danse au rythme du galop"
            }
        ]
    },

    // ==================== PRINCESSE ====================
    princess: {
        decors: [
            {
                nom: "🏰 Château",
                description: "dans la salle de bal d'un château, lustres en cristal, miroirs dorés"
            },
            {
                nom: "🌹 Jardin royal",
                description: "dans un jardin à la française, fontaines, haies taillées, roses"
            },
            {
                nom: "🛏️ Sa chambre",
                description: "dans sa chambre royale, baldaquin, tentures de velours, bougies"
            }
        ],
        actions: [
            {
                nom: "Valse",
                description: "valsant seule, sa robe tournoyant, main tendue vers un partenaire imaginaire"
            },
            {
                nom: "Sur son trône",
                description: "assise sensuellement sur son trône, une jambe relevée, sceptre à la main"
            },
            {
                nom: "Couronnement",
                description: "se couronnant elle-même, geste théâtral, sourire malicieux"
            }
        ]
    },

    // ==================== FEMME DES CAVERNES ====================
    cavewoman: {
        decors: [
            {
                nom: "🪨 Grotte préhistorique",
                description: "dans une grotte, peintures rupestres, feu de camp, fourrures au sol"
            },
            {
                nom: "🌋 Volcan",
                description: "au pied d'un volcan actif, coulées de lave, ciel rouge"
            },
            {
                nom: "🌿 Jungle primitive",
                description: "dans une jungle luxuriante, fougères géantes, animaux préhistoriques"
            }
        ],
        actions: [
            {
                nom: "Autour du feu",
                description: "dansant autour du feu de camp, ombres projetées sur les parois"
            },
            {
                nom: "Chasse",
                description: "bandeaux en cuir, elle tient une lance, prête à chasser, pose guerrière"
            },
            {
                nom: "Découverte du feu",
                description: "émerveillée par le feu, elle tend les mains vers les flammes en dansant"
            }
        ]
    },

    // ==================== ATHÉNA ====================
    athena: {
        decors: [
            {
                nom: "🏛️ Temple grec",
                description: "dans un temple grec, colonnes de marbre, statues de dieux, ciel bleu"
            },
            {
                nom: "⚔️ Champ de bataille",
                description: "sur un champ de bataille antique, guerriers, boucliers, oliviers"
            },
            {
                nom: "📜 Bibliothèque antique",
                description: "dans une bibliothèque antique, rouleaux de papyrus, lampes à huile"
            }
        ],
        actions: [
            {
                nom: "Sagesse",
                description: "lisant un parchemin tout en dansant, expression savante et sensuelle"
            },
            {
                nom: "Guerrière",
                description: "brandissant une lance, bouclier à l'autre bras, danse guerrière"
            },
            {
                nom: "Déesse",
                description: "posant majestueusement, drapés flottants, regard divin"
            }
        ]
    },

    // ==================== AVATAR ====================
    avatar: {
        decors: [
            {
                nom: "🌳 Forêt de Pandora",
                description: "dans la forêt luxuriante de Pandora, arbres géants bioluminescents, plantes qui brillent dans la nuit, couleurs violettes et bleues"
            },
            {
                nom: "🏔️ Montagnes flottantes",
                description: "sur les montagnes flottantes de Pandora (Hallelujah Mountains), cascades tombant dans le vide, vue sur les îles célestes"
            },
            {
                nom: "🦅 Sur un Ikran",
                description: "sur le dos d'un Ikran (oiseau géant), volant au-dessus de la forêt de Pandora, vent dans les cheveux, paysage époustouflant"
            }
        ],
        actions: [
            {
                nom: "Connexion",
                description: "connectée à la nature, elle touche les plantes bioluminescentes qui réagissent en s'illuminant"
            },
            {
                nom: "Chasseur",
                description: "en position de chasse, arc tendu, prête à bondir, regard perçant"
            },
            {
                nom: "Rituel",
                description: "dansant un rituel Na'vi, mouvements lents et majestueux, en harmonie avec la forêt"
            }
        ]
    },

    // ==================== AVATAR GUERRIER ====================
    avatarwarrior: {
        decors: [
            {
                nom: "🌋 Volcan de Pandora",
                description: "près d'un volcan actif de Pandora, lueurs rouges, roches sombres, atmosphère de combat"
            },
            {
                nom: "⚔️ Champ de bataille",
                description: "sur un champ de bataille contre les humains, destruction, feux, machines de guerre"
            },
            {
                nom: "🦅 En vol de combat",
                description: "sur son Ikran de guerre, piqué vers le sol, prête à attaquer"
            }
        ],
        actions: [
            {
                nom: "Combat",
                description: "en position de combat, lance prête, regard déterminé"
            },
            {
                nom: "Cri de guerre",
                description: "poussant un cri de guerre Na'vi, posture victorieuse"
            },
            {
                nom: "Domptage",
                description: "domptant un Ikran sauvage, mouvements puissants et gracieux"
            }
        ]
    },

    // ==================== AVATAR CHEF ====================
    avatarchief: {
        decors: [
            {
                nom: "🏠 Arbre-Maison",
                description: "dans l'Arbre-Maison du clan, structure géante, lumières organiques, ponts suspendus"
            },
            {
                nom: "🔥 Rassemblement",
                description: "lors d'un rassemblement du clan, feux de camp, danses rituelles, tambours"
            },
            {
                nom: "🌙 Nuit sacrée",
                description: "pendant une nuit sacrée, plantes lumineuses, cérémonie, ancêtres présents"
            }
        ],
        actions: [
            {
                nom: "Discours",
                description: "haranguant son clan, gestes majestueux, autorité naturelle"
            },
            {
                nom: "Bénédiction",
                description: "bénissant son peuple, mains levées vers le ciel, expression sage"
            },
            {
                nom: "Conseil",
                description: "en conseil avec les anciens, posture de leader, regard perçant"
            }
        ]
    },

    // ==================== SAMBA / BRÉSIL ====================
    samba: {
        decors: [
            {
                nom: "🎉 Carnaval de Rio",
                description: "au cœur du carnaval de Rio, chars colorés, confettis, danseurs en plumes, ambiance festive"
            },
            {
                nom: "🏖️ Plage de Copacabana",
                description: "sur la plage de Copacabana au coucher du soleil, sable blanc, vagues, palmiers, musique brésilienne"
            },
            {
                nom: "🇧🇷 Stade de samba",
                description: "dans un stade de samba, gradins remplis de spectateurs, lumières colorées, rythme endiablé"
            }
        ],
        actions: [
            {
                nom: "Samba sensuelle",
                description: "dansant la samba, roulements de hanches rapides, plumes virevoltantes, sourire éclatant"
            },
            {
                nom: "Battement de tambour",
                description: "jouant des percussions sensuellement, frappant le tambour en ondulant du bassin"
            },
            {
                nom: "Cérémonie sur la plage",
                description: "sur la plage, elle danse pieds nus dans le sable, les bras levés vers le ciel"
            }
        ]
    },

    // ==================== FLAMENCO / ESPAGNE ====================
    flamenco: {
        decors: [
            {
                nom: "💃 Tablao flamenco",
                description: "dans un tablao authentique, ambiance andalouse, guitares en arrière-plan"
            },
            {
                nom: "🏛️ Cour andalouse",
                description: "dans une cour typique andalouse, fontaine, azulejos, lumière dorée"
            },
            {
                nom: "🌃 Séville la nuit",
                description: "dans une rue de Séville la nuit, lampions, balcons en fer forgé"
            }
        ],
        actions: [
            {
                nom: "Flamenco passionné",
                description: "frappant des pieds avec force, bras expressifs, regard intense"
            },
            {
                nom: "Jeu de castagnettes",
                description: "jouant des castagnettes tout en dansant, mouvements précis des poignets"
            },
            {
                nom: "Robe tournoyante",
                description: "faisant tournoyer sa robe à volants, poses théâtrales"
            }
        ]
    },

    // ==================== ORIENTAL / TURQUIE ====================
    oriental: {
        decors: [
            {
                nom: "🏛️ Palais Ottoman",
                description: "dans un palais ottoman, colonnes de marbre, fontaines, tapis persans, lumière tamisée"
            },
            {
                nom: "🛋️ Hamam traditionnel",
                description: "dans un hamam traditionnel, vapeur, mosaïques, lumières douces"
            },
            {
                nom: "🌃 Nuit d'Istanbul",
                description: "dans une rue d'Istanbul la nuit, lanternes, épices, musique orientale"
            }
        ],
        actions: [
            {
                nom: "Danse du voile",
                description: "jouant avec un voile transparent, ondulations lentes du ventre"
            },
            {
                nom: "Jeu de pièces",
                description: "faisant tinter les pièces de sa ceinture en dansant, sourire mystérieux"
            },
            {
                nom: "Mouvements de serpent",
                description: "mouvements fluides des bras et du torse, regard hypnotique"
            }
        ]
    },

    // ==================== GEISHA / JAPON ====================
    geisha: {
        decors: [
            {
                nom: "🏯 Jardin japonais",
                description: "dans un jardin japonais traditionnel, pont rouge, cerisiers en fleurs, étang à carpes"
            },
            {
                nom: "🎋 Salon de thé",
                description: "dans un salon de thé traditionnel, tatamis, paravents shoji, calligraphies"
            },
            {
                nom: "🌸 Nuit de Gion",
                description: "dans le quartier de Gion à Kyoto, lanternes, machiya anciennes, ambiance mystérieuse"
            }
        ],
        actions: [
            {
                nom: "Danse du éventail",
                description: "jouant avec un éventail, gestes précis et gracieux"
            },
            {
                nom: "Cérémonie du thé",
                description: "effectuant les gestes élégants de la cérémonie du thé, lenteur étudiée"
            },
            {
                nom: "Révérence",
                description: "s'inclinant gracieusement, dévoilant sa nuque, regard par-dessus l'épaule"
            }
        ]
    },

    // ==================== BOLLYWOOD / INDE ====================
    bollywood: {
        decors: [
            {
                nom: "🏰 Palais indien",
                description: "dans un palais du Rajasthan, marbre blanc, jeux de miroirs, tentures colorées"
            },
            {
                nom: "🌧️ Mousson",
                description: "sous la pluie de mousson, flaques d'eau, lumières colorées, ambiance romantique"
            },
            {
                nom: "🎬 Plateau Bollywood",
                description: "sur un plateau de tournage bollywoodien, projecteurs, danseurs en arrière-plan"
            }
        ],
        actions: [
            {
                nom: "Danse de fête",
                description: "mouvements énergiques, rotations des poignets, sourire éclatant"
            },
            {
                nom: "Expression dramatique",
                description: "jeux de regards intenses, expressions faciales expressives"
            },
            {
                nom: "Jeu de dupatta",
                description: "jouant avec son dupatta (foulard), mouvements aériens"
            }
        ]
    }
};

// Fonction pour obtenir un décor aléatoire pour un personnage
function getRandomDecor(personnageKey) {
    const perso = personnageActions[personnageKey];
    if (!perso) return "studio professionnel";
    const randomIndex = Math.floor(Math.random() * perso.decors.length);
    return perso.decors[randomIndex].description;
}

// Fonction pour obtenir une action aléatoire pour un personnage
function getRandomAction(personnageKey) {
    const perso = personnageActions[personnageKey];
    if (!perso) return "elle danse sensuellement";
    const randomIndex = Math.floor(Math.random() * perso.actions.length);
    return perso.actions[randomIndex].description;
}
