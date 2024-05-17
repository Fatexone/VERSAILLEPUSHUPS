
const programs = {
    Coaching1: ["ZIC1", "K1", "K2", "ZIC2", "ZIC3", "ZIC5", "ZIC6"],
    Coaching2: ["Combi1", "Combi2", "Combi3", "Combi4", "Combi5", "Combi6", "Combi7", "Combi8", "Combi9", "Combi10", "Combi11", "Combi12", "Combi13", "Combi14", "Punch1", "Punch2", "Punch3", "Punch4", "Punch5", "Punch6", "Punch7", "Punch8", "Punch9", "Punch10", "Punch11", "Punch12", "Punch13", "Punch14"],
    Coaching3: ["Combi10", "Combi11", "Combi12", "Combi13", "Combi14"],
    Coaching4: ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8", "P9", "P10", "P11", "P12", "P13", "P14", "P15", "P16", "P17", "P18", "P19", "P20", "P21", "P22", "P23", "P24", "P25", "P26", "P27", "P28", "P29", "P30", "P31", "P32", "P33", "P34", "P35", "P36"],
    
    };
    
    
    const descriptions = {
    Coaching1: 
    {"ZIC1": "Coching DUC Boxe By Brice Faradji (3minutes)", 
    "ZIC2": "DJ ZAMO Z3 : Une musique by fatex, parfaite pour un cours de JumpFit (3 minutes) ",},
    "ZIC3": "DJ ZAMO Z1 : Une musique by fatex, parfaite pour un cours de JumpFit (3 minutes) ",
    "ZIC5": "DJ ZAMO Z4 : Une musique by fatex, parfaite pour un cours de JumpFit (3 minutes) ",
    "ZIC6": "DJ ZAMO Z2 : Une musique by fatex, parfaite pour un cours de JumpFit (3 minutes) ",
    "K1": "Kai Engel - Marée Muisc Calme : Etriement , RenFo , Yoga (3min17) ",
    "K2": "Zero Project (feat. Dia Yiannopoulou) - Last Dance - : Etriement , RenFo , Yoga (2min55) ",
    
    Coaching2: { "Combi1": "Direct Bras avant rotation deux desaxement ",
    
    "Combi2": "Uppercut Bras Arriere Rotation ",
    
    "Combi3": "Direct Uppercut Bras Avant Rotation Désaxement ",
    
    "Combi4": "Uppercut Crochet Bras Arriere Rotation ",
    
    "Combi5": "Direct Bras Avant Uppercut Bras Arriere Rotation Deux Désaxements ",
    
    "Combi6": "Uppercut Bras Arriere Uppercut Bras Avant Rotation ",
    
    "Combi7": "Direct Uppercut Crochet Bras Avant Rotation ",
    
    "Combi8": "Direct Uppercut Crochet Bras Arriere en Changement de Garge Rotation Désaxement ",
    
    
    "Combi9": "Direct Uppercut Bras Avant Uppercut Bras Arriere Rotation Retrait du Buste ",
    
    
    "Combi10": "Uppercut Crochet Bras Arrirere Uppercut Bras Avant Rotation Désaxements ",
    
    
    "Combi11": "Direct Bras Avant Uppercut Crochet du Bras Arriere Rotation Deux Désaxements ",
    
    
    "Combi12": "Uppercut du Bras Arriere , Uppercut Crochet du Bras Avant Rotation Désaxement ",
    
    "Combi13": "Direct du Bras Avant Uppercut du Bras Arriere Crochet du Bras Avant Rotation Désaxement",
    
    "Combi14": "Uppercut du Bras Arriere , Uppercut du Bras Avant Crochet du Bras Arriére Rotation Deux Désaxement ",
    
    "Punch1" : "Bras Avant ",
    
    "Punch2" : "Bras Arriere ",
    
    "Punch3" : "Doublet du Bras Avant",
    
    "Punch4" : "Doublet Bras Ariiére ",
    
    "Punch5" : "Bras Avant Bras Arriere ",
    
    "Punch6" : "Bras Arriere Bras Avant",
    
    "Punch7" : "Triplet Bras Avant",
    
    "Punch8" : "Triplet du Bras Arriere ",
    
    "Punch9" : "Bras Avant Deux Fois Bras Arriere Une Fois ",
    
    "Punch10" : "Bras Arriere Deux Fois Bras Avant Une fois ",
    
    "Punch11" : "Bras Avant une fois Bras Arriere Deux Fois",
    
    "Punch12" : "Bras Arriere Une Fois Bras Avant Deux fois ",
    
    "Punch13" : "Bras Avant Arriere Avant",
    
    "Punch14" : "Bras Arriere Avant Arriere ", },
    
    
    Coaching3:
    { "Combi1": "Emilie Gignier nous partage une technqique de concentration avant de rentrer sur le Ring (3 minutes) ",
    "Combi2": "Christian G (Rumeur Publique), comparaion Boxe et business (3 minutes) ",
    "Combi3": "Mamadou Sacko (La boxe et moi sur un terrain de foot ça donne quoi ?) (3 minutes) ",
    "Combi4": "Sebastien jondeau La boxe et la mode ",
    "Combi5": "Thomas Lenthal la boxe me rend ...", },
    
    Coaching4: 
    { 
    
    "way1": " Hand's way n°1",
    "way2": "Hand's way n°2",
    "way3": "Hand's way n°3",
    "way4": "Hand's way n°4",
    "way5": " Hand's way n°5",
    "way6": "Hand's way n°6",
    "way7": "Hand's way n°7",
    "way8": "Hand's way n°8",
    "way9": " Hand's way n°9",
    "way10": "Hand's way n°10",
    "way11": "Hand's way n°11",
    "way12": "Hand's way n°12",
    "way13": " Hand's way n°13",
    "way14": "Hand's way n°14",
    "way15": "Hand's way n°15",
    "way16": "Hand's way n°16",
    "way17": " Hand's way n°17",
    "way18": "Hand's way n°18",
    "way19": "Hand's way n°19",
    "way20": "Hand's way n°20",
    "way21": " Hand's way n°21",
    "way22": "Hand's way n°22",
    "way23": "Hand's way n°23",
    "way24": "Hand's way n°24",
    "way25": " Hand's way n°25",
    "way26": "Hand's way n°26",
    "way27": "Hand's way n°27",
    "way28": "Hand's way n°28",
    "way29": " Hand's way n°29",
    "way30": "Hand's way n°30",
    "way31": "Hand's way n°31",
    "way32": "Hand's way n°32",
    "way33": " Hand's way n°33",
    "way34": "Hand's way n°34",
    "way35": "Hand's way n°35",
    "way36": "Hand's way n°36",
    
    
    "P1": " Way1 : Hands on 1 et 2 : 3 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    "P2": " Way2 : Hands on 1 et 4 : 5 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    "P3": " Way3 : Hands on 2 et 3 : 5 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    
    "P4": " Way4 : Hands on 1 et 6 : 7 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    "P5": " Way5 : Hands on 2 et 5 : 7 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    "P6": " Way6 : Hands on 3 et 4 : 7 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank ",
    
    
    "P7": " Way7 : Hands on 1 et 8 : 9 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    "P8": " Way8 : Hands on 2 et 7 : 9 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    "P9": " Way9 : Hands on 3 et 6 : 9 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    "P10":" Way10 : Hands on 4 et 5 : 9 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank ",
    
    
    
    "P11": " Way11 : Hands on 1 et 10 : 11 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank ",
    "P12": " Way12 : Hands on 2 et 9 : 11 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    "P13": " Way13 : Hands on 3 et 8 : 11 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    "P14": " Way14 : Hands on 4 et 7 : 11 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    "P15": " Way15 : Hands on 5 et 6 : 11 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    
    
    "P16": " Way16 : Hands on 1 et 12 : 13 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    "P17": " Way17 : Hands on 2 et 11 : 13 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    "P18": " Way18 : Hands on 3 et 10 : 13 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank ",
    "P19": " Way19 : Hands on 4 et 9 : 13 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    "P20": " Way20 : Hands on 5 et 8 : 13 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    "P21": " Way21 : Hands on 6 et 7 : 13 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    
    
    "P22": " Way22 : Hands on 3 et 12 : 15 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    "P23": " Way23 : Hands on 4 et 11 : 15 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    "P24": " Way24 : Hands on 5 et 10 : 15 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    "P25": " Way25 : Hands on 6 et 9 : 15 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank ",
    "P26": " Way26 : Hands on 7 et 8 : 15 Ppush-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    
    
    "P27": " Way27 : Hands on 5 et 12 : 17 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    "P28": " Way28 : Hands on 6 et 11 : 17 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    "P29": " Way29 : Hands on 7 et 10 : 17 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    "P30": " Way30 : Hands on 8 et 9 : 17 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    
    
    
    
    "P31": " Way31 : Hands on 7 et 12 : 19 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    "P32": " Way32 : Hands on 8 et 11 : 19 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    "P33": " Way33 : Hands on 9 et 10 : 19 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    
    
    "P34": " Way34 : Hands on 9 et 12 : 21 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    "P35": " Way35 : Hands on 10 et 11 : 21 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank",
    
    "P36": " Way36 : Hands on 11 et 12 : 23 push-ups with straight arms, option to have knees on the ground / Forearms on the ground for the plank ",
    
    
    },
    
    };
    
    
    // État initial des fichiers disponibles et joués
    let filesAvailable = JSON.parse(JSON.stringify(programs));
    let filesPlayed = {
    Coaching1: [],
    Coaching2: [],
    Coaching3: [],
    Coaching4: [],
    Coaching5: []
    };
    

    let currentCombination = [];
    let isAudioPlaying = false;
    let currentAudioIndex = 0;
    let currentAudio = new Audio();
    
    
    // Fonction pour ajouter un log détaillé
function debugLog(message) {
    console.log(`DEBUG: ${message}`);
}


    // Fonction pour configurer tous les écouteurs d'événements
    function setupEventListeners() {
    setupReturnToMenuButton2();
    setupProgramSelector();
    setupPompesSelector();
    setupCalculateButton();
    setupGoButton();;
    setupStopButton();
    setupNextButton();
    setupNextAudioButton(); 
    setupReturnToMenuButton(); 
    debugLog("Event listeners configured");
    };
    

    // Configuration du sélecteur de programme

    function setupProgramSelector() {
    const programSelect = document.getElementById('programSelect');
    programSelect.addEventListener('change', handleProgramChange);
    console.log('Program selector setup complete');
    }
    
    
    // Gestion du changement de programme
    
    function handleProgramChange() {
    debugLog(`Program changed to: ${this.value}`);
    resetUI(true); // Réinitialiser l'interface utilisateur, garder la sélection si nécessaire
  
    
    // Vérifier quel programme a été sélectionné et initialiser l'UI appropriée
    switch (this.value) {
    case 'Coaching3':
    initializeCoaching3UI();
    document.getElementById('tapisImage2').style.display = 'none'; // Assurez-vous que l'image est cachée initialement
    document.getElementById('programSelect').style.display = 'none'; // Masquer le sélecteur de programme
   
    // Réinitialiser le sélecteur de mode chaque fois que Coaching3 est sélectionné
    const selectOption = document.getElementById('selectOption');
    selectOption.selectedIndex = 0;
    break;
    case 'Coaching4':
    initializeCoaching4UI();
    document.getElementById('returnButton').style.display = 'block'; // Utiliser returnButton pour Coaching4
    break;
    default:
    document.getElementById('returnButton').style.display = 'none'; // Masquer les boutons de retour si aucun des programmes spécifiques n'est sélectionné
    break;
    }
    }
    
    
    function setupNextButton() {
    const nextButton = document.getElementById('nextButton');
    nextButton.addEventListener('click', function() {
    document.getElementById('tapisImage').style.display = 'block'; // Affiche l'image du tapis
    });
    }
    
 // Traitement du clic sur le bouton suivant
   // Traitement du clic sur le bouton suivant
function handleNextButtonClick() {
    toggleDisplay('welcomeVideo', false);
    toggleDisplay('videoDescription', false);
    toggleDisplay('tapisImage', true);
    showPompesSelector();
}

    // Afficher ou masquer les éléments
function toggleDisplay(elementId, isVisible) {
    const element = document.getElementById(elementId);
    if (element) {
        element.style.display = isVisible ? 'block' : 'none';
        console.log(`${elementId} ${isVisible ? 'displayed' : 'hidden'}`);
    } else {
        console.log(`${elementId} not found`);
    }
}




    
    function setupNextAudioButton() {
    const nextAudioButton = document.getElementById('nextAudioButton');
    nextAudioButton.addEventListener('click', playCoaching4Audio);
    nextAudioButton.style.display = 'none'; // Masquer le bouton initialement
    }
    

    // menue plank
    function setupReturnToMenuButton() {
    const returnButton = document.getElementById('returnButton');
    if (returnButton) {
    returnButton.addEventListener('click', function() {
    hideUIComponents(); // S'assure que toutes les descriptions sont masquées

    console.log("UI reset, audio stopped, and all descriptions hidden.");
    });
    } else {
    console.log("Return to menu button not found.");
    }
    }
    
// Masquer les composants de l'UI
function hideUIComponents() {
    const elementsToHide = ['pompesSelectorContainer', 'pompesInstruction', 'programSelect', 'tapisImage', 'returnButton', 'audioDescription', 'videoDescription'];
    elementsToHide.forEach(id => toggleDisplay(id, false));
    toggleDisplay('programSelect', true); // Le sélecteur de programme doit être réaffiché
}

    
    
    function resetSelectors(selectorIds) {
    selectorIds.forEach(selectorId => {
         const selector = document.getElementById(selectorId);
        if (selector) {
    selector.selectedIndex = 0;
    }
    });
    }
    
    function setupCalculateButton() {
    const calculateButton = document.getElementById('calculateButton');
    const startButton = document.getElementById('startButton');
    
    calculateButton.addEventListener('click', async function() {
        const pompes = parseInt(document.getElementById('pompesSelector').value, 10);
        displayLoadingIndicator(true); // Afficher un indicateur de chargement
        await calculateProgramCombinations(pompes);
        displayLoadingIndicator(false); // Cacher l'indicateur de chargement
        startButton.style.display = 'block'; // Afficher le startButton une fois le calcul terminé
        calculateButton.style.display = 'none'; // Cacher le bouton Calculer après l'utilisation
    });
    }
    
    
    
    
    function initializeCoaching4UI() {
        const videoContainer = document.getElementById('videoContainer');
        videoContainer.style.display = 'block';
        const welcomeVideo = document.getElementById('welcomeVideo');
        welcomeVideo.style.display = 'block';
    
        const videoDescription = document.getElementById('videoDescription');
        videoDescription.textContent = "36 hand positions, from 3 to 468 push-ups and/or 468 seconds of planking.";
        videoDescription.style.display = 'block';
    
    // Masquer le sélecteur de programme après avoir sélectionné un programme
        const programSelect = document.getElementById('programSelect');
        programSelect.style.display = 'none';
    
        const nextButton = document.getElementById('nextButton');
        nextButton.style.display = 'block';
        nextButton.onclick = showPompesSelector;
    
    // Afficher l'image du tapis de mains
        const tapisImage = document.getElementById('tapisImage');
        tapisImage.style.display = 'block';
    
    }
    
    
    
    
    
    function ensureNextButtonExists(container) {
    let nextButton = document.getElementById('nextButton');
    if (!nextButton && container) {
        nextButton = document.createElement('button');
        nextButton.id = 'nextButton';
        nextButton.textContent = 'Next';
        container.appendChild(nextButton);
    }
    return nextButton;
    }
    
    
    
    
    
    
    
    
    
    
    
    function createButton(id, text, container) {
     const button = document.createElement('button');
     button.id = id;
    button.textContent = text;
    container.appendChild(button);
    return button;
    }
    
    function updateButtonEventListener(button, eventHandler) {
    button.removeEventListener('click', eventHandler);
    button.addEventListener('click', eventHandler);
    }
    
    
    function showPompesSelector() {
        const videoContainer = document.getElementById('videoContainer');
        videoContainer.style.display = 'none';
    
        const videoDescription = document.getElementById('videoDescription');
        videoDescription.style.display = 'none';
    
        const selectorContainer = document.getElementById('pompesSelectorContainer');
        selectorContainer.style.display = 'block';
    
        const calculateButton = document.getElementById('calculateButton');
        calculateButton.style.display = 'none';
    
        const startButton = document.getElementById('startButton');
        startButton.style.display = 'none';
    
        const pompesSelector = document.getElementById('pompesSelector');
        pompesSelector.onchange = () => {
            calculateButton.style.display = pompesSelector.value ? 'block' : 'none';
        };
    
        // Assurez-vous de masquer les boutons retour et nextAudioButton
        const nextAudioButton = document.getElementById('nextAudioButton');
        if (nextAudioButton) {
            nextAudioButton.style.display = 'none';
        }
    
        const returnButton = document.getElementById('returnButton');
        if (returnButton) {
            returnButton.style.display = 'none';
        }
    }
    
    
    
    function setupPompesSelector() {
    const pompesSelector = document.getElementById('pompesSelector');
    const calculateButton = document.getElementById('calculateButton');
    pompesSelector.addEventListener('change', function() {
    // Afficher le bouton calculer seulement si une valeur valide est sélectionnée
    calculateButton.style.display = this.value ? 'block' : 'none';
    });
    }
    
    
    
    
    
    function displayLoadingIndicator(show) {
    const indicator = document.getElementById('loadingIndicator');
    if (indicator) {
    indicator.style.display = show ? 'block' : 'none';
    }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    async function calculateProgramCombinations(targetPompes) {
    return new Promise((resolve, reject) => {
    const pumpsMapping = {
    'P1': 3, 'P2': 5, 'P3': 5, 'P4': 7, 'P5': 7, 'P6': 7, 'P7': 9, 'P8': 9, 'P9': 9, 'P10': 9,
    'P11': 11, 'P12': 11, 'P13': 11, 'P14': 11, 'P15': 11, 'P16': 13, 'P17': 13, 'P18': 13, 'P19': 13,
    'P20': 13, 'P21': 13, 'P22': 15, 'P23': 15, 'P24': 15, 'P25': 15, 'P26': 15, 'P27': 17, 'P28': 17,
    'P29': 17, 'P30': 17, 'P31': 19, 'P32': 19, 'P33': 19, 'P34': 21, 'P35': 21, 'P36': 23
    };
    let cumulativePumps = 0;
    let selectedPrograms = [];
    for (let key in pumpsMapping) {
    cumulativePumps += pumpsMapping[key];
    selectedPrograms.push(key);
    if (cumulativePumps >= targetPompes) break;
    }
    
    if (selectedPrograms.length > 0) {
    currentCombination = selectedPrograms;
    currentAudioIndex = 0;
    document.getElementById('pompesInstruction').textContent = `We have selected the programs ${currentCombination.join(', ')} to perform your${targetPompes} push-ups.`;
    document.getElementById('pompesInstruction').style.display = 'block';
    resolve();
    } else {
    displayNoCombinationFound();
    resolve();
    }
    });
    }
    
    
    
    
    
    
    
    function setupGoButton() {
        const startButton = document.getElementById('startButton');
        startButton.addEventListener('click', async function() {
        const pompes = parseInt(document.getElementById('pompesSelector').value, 10);
        displayLoadingIndicator(true); // Assurez-vous que cette fonction affiche un indicateur visuel comme un spinner
        try {
        await calculateProgramCombinations(pompes); // Calcul des séquences basées sur le choix des pompes
        displayLoadingIndicator(false); // Cacher l'indicateur une fois le calcul terminé
        playCoaching4Audio(); // Commencer la séquence des audios
        this.style.display = 'none'; // Cacher le bouton start une fois cliqué
        document.getElementById('tapisImage').style.display = 'block'; // Afficher l'image du tapis
    } catch (error) {
        console.error("Error setting up the audio sequences: ", error);
        displayLoadingIndicator(false); // Assurez-vous de cacher l'indicateur même en cas d'erreur
        document.getElementById('audioDescription').textContent = "Erreur lors du calcul des combinaisons. Veuillez réessayer.";
    }
    });
    }
    


    async function playCoaching4Audio() {
        let tapisImage = document.getElementById('tapisImage');
        let audioDescription = document.getElementById('audioDescription');
    
        // Vérifier s'il reste des audios à jouer
        if (currentAudioIndex < currentCombination.length) {
            let wayAudioPath = `./audio/way${currentAudioIndex + 1}.mp3`;
            let mainAudioPath = `./audio/${currentCombination[currentAudioIndex]}.mp3`;
    
            try {
                await playAudio(wayAudioPath);
                audioDescription.textContent = "Introduction: " + descriptions.Coaching4[`way${currentAudioIndex + 1}`];
                audioDescription.style.display = 'block';
                tapisImage.style.display = 'block';
    
                if (currentAudioIndex === currentCombination.length - 1) {
                    await playAudio('./audio/Lastways.mp3');
                    audioDescription.textContent = "Closing session with Lastways.";
                    audioDescription.style.display = 'block';
                    tapisImage.style.display = 'block';
                }
    
                await playAudio(mainAudioPath);
                audioDescription.textContent = descriptions.Coaching4[currentCombination[currentAudioIndex]];
                audioDescription.style.display = 'block';
                tapisImage.style.display = 'block';
    
                currentAudioIndex++;
                updateAudioControlButtons();
            } catch (error) {
                console.error("Error playing sequence: ", error);
                audioDescription.textContent = "Erreur de lecture. Veuillez vérifier les fichiers audio.";
                tapisImage.style.display = 'none';
            }
        } else {
            console.log("No more audio to play.");
            audioDescription.textContent = "";
            updateAudioControlButtons();
        }
    }
    
    function updateAudioControlButtons() {
        const nextAudioButton = document.getElementById('nextAudioButton');
        const returnButton = document.getElementById('returnButton');
        let tapisImage = document.getElementById('tapisImage');
    
        if (currentAudioIndex < currentCombination.length) {
            nextAudioButton.style.display = 'block';
            returnButton.style.display = 'none'; // Masquer le bouton retour
            nextAudioButton.onclick = playCoaching4Audio;
        } else {
            nextAudioButton.style.display = 'none';
            returnButton.style.display = 'block';
            tapisImage.style.display = 'none';
        }
    }
    
    
    async function playAudio(audioPath) {
    console.log('playAudio called with path:', audioPath);
    if (!currentAudio) {
    currentAudio = new Audio();
    }
    
    currentAudio.src = audioPath;
    document.getElementById('returnButton').style.display = 'none'; // Masquer le bouton de retour
    
    return new Promise((resolve, reject) => {
    currentAudio.onload = () => {
    console.log('Audio chargé avec succès');
    };
    
    currentAudio.onerror = (e) => {
    console.error("Erreur lors du chargement de l'audio: ", e);
    reject(e);
    };
    
    currentAudio.onplay = () => {
    isAudioPlaying = true;
    console.log('Lecture de l\'audio commencée');
    document.getElementById('tapisImage').style.display = 'block';
    };
    
    currentAudio.onended = currentAudio.onpause = () => {
    isAudioPlaying = false;
    console.log('Lecture de l\'audio terminée ou en pause');
    document.getElementById('tapisImage').style.display = 'none';
    document.getElementById('returnButton').style.display = 'block'; // Afficher le bouton de retour
    resolve();
    };
    
    try {
    currentAudio.play();
    } catch (e) {
    console.error("Erreur lors de la tentative de lecture de l'audio: ", e);
    reject(e);
    }
    });
    }
    function resetUI(keepSelection = false, keepTapisVisible = false) {
        console.log(`resetUI called | keepSelection: ${keepSelection}, keepTapisVisible: ${keepTapisVisible}`);
        
        stopAudiosAndTimers(); // Utiliser cette fonction pour arrêter tous les audios et timers
    
        const elementsToHide = [
            'audioDescription', 'videoContainer', 'pompesSelectorContainer',
            'nextButton', 'stopButton', 'nextAudioButton', 'returnButton', 'startButton',
            'videoContainer2', 'welcomeVideo2', 'videoDescription2', 'nextButton2',
            'tapisImage', 'tapisImage2'
        ];
    
        elementsToHide.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                element.style.display = (id.includes('tapisImage') && keepTapisVisible) ? 'block' : 'none';
            }
        });
    
        if (!keepSelection) {
            ['programSelect', 'pompesSelector', 'optionSelector'].forEach(selectorId => {
                const selector = document.getElementById(selectorId);
                if (selector) {
                    selector.selectedIndex = 0;
                    console.log(`Selector ${selectorId} reset.`);
                }
            });
        }
    }
    
   
   
   
   
   
   





























    const descriptionsCoaching3 = {
    
   "P1.1": " Hands on 1 et 2 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints",
   "P2.1": " Hands on 1 et 4 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints ",
   "P3.1": " Hands on 2 et 3 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints",
   
   "P4.1": " Hands on 1 et 6 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints",
   "P5.1": " Hands on 2 et 5 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints",
   "P6.1": " Hands on 3 et 4 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints",
   
   
   "P7.1": " Hands on 1 et 8 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints",
   "P8.1": " Hands on 2 et 7 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints",
   "P9.1": " Hands on 3 et 6 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints",
   "P10.1":" Hands on 4 et 5 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints ",
   
   
   
   "P11.1": " Hands on 1 et 10 :Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints ",
   "P12.1": " Hands on 2 et 9 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints ",
   "P13.1": " Hands on 3 et 8 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints",
   "P14.1": " Hands on 4 et 7 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints",
   "P15.1": " Hands on 5 et 6 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints ",
   
   
   "P16.1": " Hands on 1 et 12 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints ",
   "P17.1": " Hands on 2 et 11 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints ",
   "P18.1": " Hands on 3 et 10 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints ",
   "P19.1": " Hands on 4 et 9 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints ",
   "P20.1": " Hands on 5 et 8 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints ",
   "P21.1": " Hands on 6 et 7 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints ",
   
   
   "P22.1": " Hands on 3 et 12 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints",
   "P23.1": " Hands on 4 et 11 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints ",
   "P24.1": " Hands on 5 et 10 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints ",
   "P25.1": " Hands on 6 et 9 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints ",
   "P26.1": " Hands on 7 et 8 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints ",
   
   
   "P27.1": " Hands on 5 et 12 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints",
   "P28.1": " Hands on 6 et 11 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints",
   "P29.1": " Hands on 7 et 10 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints ",
   "P30.1": " Hands on 8 et 9 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints",
   
   
   
   
   "P31.1": " Hands on 7 et 12 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints",
   "P32.1": " Hands on 8 et 11 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints ",
   "P33.1": " Hands on 9 et 10 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints",
   
   
   "P34.1": " Hands on 9 et 12 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints",
   "P35.1": " Hands on 10 et 11 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints ",
   
   "P36.1": " Hands on 11 et 12 : Forearm on the ground or arm extended, aligned in front of the mat, straight back, engage the abs, hands covering the imprints ",
   
   };
   















   
    // Global variables for the timer and audio playback
    let timerDuration;
    let intervalCoaching3;
    let currentAudioCoaching3 = new Audio();
    let audioKeys = ["P1.1", "P3.1", "P4.1", "P5.1", "P6.1", "P7.1", "P8.1", "P9.1", "P10.1", "P11.1", "P12.1", "P13.1", "P14.1", "P15.1", "P16.1", "P17.1", "P18.1", "P19.1", "P20.1","P21.1", "P22.1", "P23.1", "P24.1", "P25.1", "P26.1", "P27.1", "P28.1", "P29.1", "P30.1","P31.1", "P32.1", "P33.1", "P34.1", "P35.1", "P36.1",];
    let audioIndex = 0; // Start at the first audio index
    
    // Function to shuffle audio keys array
    function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    console.log("Audio keys shuffled.");
    }
    
    // Prepare the audio playlist by shuffling once
    shuffleArray(audioKeys);
    let upcomingAudioTimeout;
 
    function playAudioCoaching3() {
    if (audioIndex >= audioKeys.length) {
    audioIndex = 0; // Reset index if end of array is reached
    shuffleArray(audioKeys); // Optionally reshuffle for next round
    }
    
    const selectedAudioKey = audioKeys[audioIndex];
    console.log(`Playing audio: ${selectedAudioKey}`);
    currentAudioCoaching3.src = `./audio/${selectedAudioKey}.mp3`;
    currentAudioCoaching3.play();
    currentAudioCoaching3.onended = function() {
    console.log("Audio ended, checking if should continue...");
    if (timerDuration > 0) {
    audioIndex++; // Move to the next audio
    upcomingAudioTimeout = setTimeout(playAudioCoaching3, 5000); 
    console.log("Timer has expired, no more audios will be played.");
    }
    };
    }
    















    function initializeCoaching3UI() {
        debugLog("Initialisation de l'interface Coaching3");
    
        // Arrêter et réinitialiser complètement le timer avant de configurer l'UI
        resetTimer();
        setupEventListeners();
        // Réinitialisation du sélecteur de mode à 'Select a Mode...'
        const selectOption = document.getElementById('optionSelector');
        if (selectOption) {
            selectOption.selectedIndex = 0;
        } else {
            console.log("Sélecteur d'option non trouvé dans le DOM.");
        }
    
        // Configuration des éléments vidéo et de description
        configurerElementsVideo();
    
        debugLog("Interface Coaching3 initialisée et prête.");
    }




   function resetTimer() {
    if (intervalCoaching3) {
        clearInterval(intervalCoaching3);
        intervalCoaching3 = null;
    }
    timerDuration = 0; // Réinitialisation de la durée du timer
    const display = document.getElementById('digitalDisplay');
    if (display) {
        display.textContent = "00:00";
        display.classList.remove('paused');
    }
    console.log("Timer arrêté et réinitialisé.");
}

// Cette fonction configure l'écouteur d'événements pour le bouton 'nextButton2'
function setupNextButton2() {
    const nextButton2 = document.getElementById('nextButton2');
    if (nextButton2) {
        nextButton2.addEventListener('click', handleNextButtonClick2);
    } else {
        console.log("Le bouton 'nextButton2' n'a pas été trouvé dans le DOM.");
    }
}

// Cette fonction gère les actions à effectuer lorsque 'nextButton2' est cliqué
function handleNextButtonClick2() {
    // Masquer la vidéo, la description, et le bouton 'Next'
    document.getElementById('welcomeVideo2').style.display = 'none';
    document.getElementById('videoDescription2').style.display = 'none';
    document.getElementById('nextButton2').style.display = 'none';
   
    // Afficher l'image du tapis
    var tapisImage2 = document.getElementById('tapisImage2');
    if (tapisImage2) {
        tapisImage2.style.display = 'block';
        tapisImage2.style.margin = '0 auto'; // Centrer l'image horizontalement
    } else {
        console.log("tapisImage2 not found in the DOM.");
    }

    // Afficher le conteneur 'timeSelector' qui contient 'timeDurationSelector'
    var timeSelector = document.getElementById('timeSelector');
    if (timeSelector) {
        timeSelector.style.display = 'block'; // Rendre le conteneur du sélecteur de durée visible
    } else {
        console.log("timeSelector not found in the DOM.");
    }
}





       
        document.addEventListener('DOMContentLoaded', function() {
        // Initialisation des boutons et des écouteurs spécifiques
        setupNextButton2();
        setupEventListeners();
        setupRetourneMenueButton();
        setupStopButton();
        
       
        // Configuration du sélecteur de durée pour gérer la visibilité du bouton de démarrage
        const timeSelector = document.getElementById('timeDurationSelector');
        const startButton = document.getElementById('startTimerButton');
       
        timeSelector.addEventListener('change', function() {
        if (this.value && this.value !== "") {
        startButton.style.display = 'block'; // Afficher le bouton quand une durée valide est sélectionnée
        } else {
        startButton.style.display = 'none'; // Cacher le bouton si aucune durée valide n'est sélectionnée
        }
        });
       });

    
    function initiateBlinking() {
    var selector = document.getElementById('timeDurationSelector');
    var isDefault = true; // Assumer qu'on est sur l'option par défaut au début
   
    var blinkingInterval = setInterval(() => {
    if (selector.value === "") {
    selector.style.backgroundColor = isDefault ? 'yellow' : 'white';
    isDefault = !isDefault; // Bascule la couleur
    } else {
    clearInterval(blinkingInterval);
    selector.style.backgroundColor = 'white'; // Restaurer la couleur de fond normale
    }
    }, 500);
   }
   
   document.addEventListener('DOMContentLoaded', function() {
    initiateBlinking();
   });
   
   



    function setupRetourneMenueButton() {
        const retourneMenue = document.getElementById('retourneMenue');
        if (retourneMenue) {
            retourneMenue.addEventListener('click', function() {
                hideCoaching3Components(); // Centralise la logique de masquage des composants
                resetProgramSelector(); // Réinitialiser et afficher le sélecteur de programme
                stopAudiosAndTimers(true); // Arrêter et réinitialiser tous les audios et timers
                updateDigitalDisplay(); // Gérer l'affichage numérique
            });
        } else {
            console.log("retourneMenue button not found in the DOM.");
        }
    }
    
// Fonction spécifique pour masquer les composants UI dans Coaching3
function hideCoaching3Components() {
    const elementsToHide = ['tapisImage2', 'selectOption', 'startTimerButton', 'stopButton', 'retourneMenue'];
    elementsToHide.forEach(id => {
        const element = document.getElementById(id);
        if (element) element.style.display = 'none';
    });
}

function resetProgramSelector() {
    const programSelect = document.getElementById('programSelect');
    if (programSelect) {
        programSelect.style.display = 'block';
        programSelect.selectedIndex = 0;
    }
}


function updateDigitalDisplay() {
    const display = document.getElementById('digitalDisplay');
    if (display) {
        display.textContent = "00:00";
        display.style.display = 'none';
    }
}


    function setupCoaching3UI() {
    console.log("Setting up Coaching3 UI...");
    document.getElementById('startTimerButton').addEventListener('click', handleStartTimer);
    document.getElementById('retourneMenue').addEventListener('click', handleReturnButton);
    }
    
    
    function handleStartTimer() {
        console.log("handleStartTimer called");
        const timeDurationSelector = document.getElementById('timeDurationSelector');
        if (timeDurationSelector && !isNaN(parseInt(timeDurationSelector.value, 10))) {
            const duration = parseInt(timeDurationSelector.value, 10);
            console.log(`Timer started for duration: ${duration} minutes.`);
    
            startVisualTimer(duration); // Démarrer le compteur numérique
            playBellSoundThenCoachingAudios(); // Jouer le son de la cloche et ensuite les audios
    
            const startTimerButton = document.getElementById('startTimerButton');
            const stopButton = document.getElementById('stopButton');
            const timeSelector = document.getElementById('timeSelector');
    
            startTimerButton.style.display = 'none'; // Masquer le bouton startTimerButton
            stopButton.style.display = 'block'; // Afficher le bouton Stop
            stopButton.textContent = 'Pause'; // Initialiser le texte du bouton stopButton à 'Pause'
            timeSelector.style.display = 'none'; // Masquer le sélecteur de temps
        } else {
            console.log("Invalid duration or missing duration selector.");
        }
    }
    
    function playBellSoundThenCoachingAudios() {
        const bellSound = new Audio('audio/cloche.mp3');
        bellSound.play();
        bellSound.onended = function() {
            console.log("Bell sound ended, starting first coaching audio.");
            // Jouer immédiatement le premier audio coaching après la cloche
            playAudioCoaching3(); 
        };
    }

function playAudioCoaching3(isFirstAudioAfterBell = false) {
    if (audioIndex >= audioKeys.length) {
        audioIndex = 0;  // Réinitialiser l'indice si la fin du tableau est atteinte
        shuffleArray(audioKeys);  // Remélanger les clés audio pour une nouvelle ronde
    }

    const selectedAudioKey = audioKeys[audioIndex++];
    console.log(`Playing audio: ${selectedAudioKey}`);
    currentAudioCoaching3.src = `./audio/${selectedAudioKey}.mp3`;
    currentAudioCoaching3.play();
    currentAudioCoaching3.onended = function() {
        console.log("Audio ended, checking if should continue...");
        if (timerDuration > 0) {
            // Planifier le prochain audio
            // Si c'est le premier audio après la cloche, aucun délai; sinon, délai de 4 secondes
            upcomingAudioTimeout = setTimeout(() => playAudioCoaching3(), isFirstAudioAfterBell ? 0 : 4000);
        }
    };
}
    
function handleReturnButton() {

    stopAudiosAndTimers(true);
    

    const programSelect = document.getElementById('programSelect');
    if (programSelect) {
        programSelect.selectedIndex = 0;
        programSelect.style.display = 'block';
    }


    const display = document.getElementById('digitalDisplay');
    if (display) {
        display.textContent = "00:00";
        display.style.display = 'none';
    }
    console.log("Bouton de retour géré et UI réinitialisée.");


    const tapisImage2 = document.getElementById('tapisImage2');
    if (tapisImage2) {
        tapisImage2.style.display = 'none';
        console.log("Tapis image hidden");
    } else {
        console.log("TapisImage2 not found on return");
    }
}

   


// Ajout de cette fonction pour mieux structurer le code
function configurerElementsVideo() {
    const videoContainer = document.getElementById('videoContainer2');
    const welcomeVideo = document.getElementById('welcomeVideo2');
    const videoDescription = document.getElementById('videoDescription2');
    const nextButton = document.getElementById('nextButton2');

    if (videoContainer && welcomeVideo && videoDescription && nextButton) {
        videoContainer.style.display = 'block';
        welcomeVideo.style.display = 'block';
        videoDescription.textContent = "Bienvenue dans le programme Plank! Choisissez votre exercice...";
        videoDescription.style.display = 'block';
        nextButton.style.display = 'block';
    } else {
        console.log("Des éléments de Coaching3 sont manquants dans le DOM.");
    }
}












function setupReturnToMenuButton2() {
    const retourneMenue = document.getElementById('retourneMenue');
    if (retourneMenue) {
        retourneMenue.addEventListener('click', () => {
            // Using the new consolidated function to handle audio and timer resets
            stopAudiosAndTimers(true);
            hideUIComponents();
            resetUI(true); // Assuming resetUI properly resets the UI states as required
            console.log("Returned to the main screen and user interface reset.");
        });
    } else {
        console.log("Return button 'retourneMenue' not found in the DOM.");
    }
}
function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}
// Ensure that the entire DOM is loaded before setting up the specific Coaching3 interface.
document.addEventListener('DOMContentLoaded', setupCoaching3UI);

    let isPaused = false;  // État de pause
  // Gestion de l'arrêt et de la reprise
function setupStopButton() {
    let stopButton = document.getElementById('stopButton');
    if (!stopButton) {
        console.log("Création du bouton Stop...");
        stopButton = document.createElement('button');
        stopButton.id = 'stopButton';
        stopButton.textContent = 'Pause';
        document.body.appendChild(stopButton);
    }
    stopButton.addEventListener('click', handlePauseResumeClick);
    stopButton.style.display = 'none';  // Masquer initialement
    console.log("Configuration du bouton Stop terminée.");
}
    function handlePauseResumeClick() {
        const stopButton = document.getElementById('stopButton');
        const retourneMenue = document.getElementById('retourneMenue'); // Récupérer l'élément retourneMenue
        if (!isPaused) {
            pauseAudioAndTimer();  // Mettre en pause l'audio et le timer
            stopButton.textContent = 'Resume';  // Changer le texte pour 'Resume'
            stopButton.style.backgroundColor = 'green';  // Appliquer directement le vert pour Resume
            retourneMenue.style.display = 'block';  // Afficher le bouton de retour seulement en mode pause
            isPaused = true;
        } else {
            resumeAudioAndTimer();  // Reprendre l'audio et le timer
            stopButton.textContent = 'Pause';  // Rechanger le texte pour 'Pause'
            stopButton.style.backgroundColor = 'red';  // Appliquer directement le rouge pour Pause
            retourneMenue.style.display = 'none';  // Masquer le bouton de retour lors de la reprise
            isPaused = false;
        }
    }




    
    function pauseAudioAndTimer() {
        if (currentAudioCoaching3 && !currentAudioCoaching3.paused) {
            currentAudioCoaching3.pause();
        }
        if (intervalCoaching3) {
            clearInterval(intervalCoaching3);
            intervalCoaching3 = null;
        }
        console.log("Audio et timer mis en pause.");
    }

    
function resumeAudioAndTimer() {
    if (currentAudioCoaching3 && currentAudioCoaching3.paused) {
        currentAudioCoaching3.play();
        debugLog("Audio resumed");
    }
    setupTimer(); // Fonction auxiliaire pour configurer le timer
}

function setupTimer() {
    debugLog("Setting up timer");
    const display = document.getElementById('digitalDisplay');
    display.style.display = 'block';
    intervalCoaching3 = setInterval(() => {
        let minutes = Math.floor(timerDuration / 60);
        let seconds = timerDuration % 60;
        display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        timerDuration--;
        debugLog(`Timer updated: ${minutes}:${seconds}`);

        if (timerDuration < 0) {
            clearInterval(intervalCoaching3);
            display.textContent = "00:00";
            display.style.display = 'none';
            debugLog("Timer completed");
            playEndOfTimerSound();
        }
    }, 1000);
}


    function startVisualTimer(minutes) {
        timerDuration = minutes * 60; // Convertir les minutes en secondes
        const display = document.getElementById('digitalDisplay');
        display.style.display = 'block';
    
        intervalCoaching3 = setInterval(function() {
            let minutes = Math.floor(timerDuration / 60);
            let seconds = timerDuration % 60;
            display.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
            if (--timerDuration < 0) {
                clearInterval(intervalCoaching3);
                display.textContent = "00:00";
                display.style.display = 'none';
                console.log("Timer completed.");
    
                stopCurrentAudio(); // Interrompre immédiatement l'audio en cours
                playEndOfTimerSound(); // Jouer le son de la cloche
                updateUIAfterTimer(); // Mettre à jour l'UI après la fin du son de la cloche
            }
        }, 1000);
    }



    function updateUIAfterTimer() {
        const stopButton = document.getElementById('stopButton');
        const selectOptionDiv = document.getElementById('timeSelector');
        const optionSelector = document.getElementById('timeDurationSelector');
        const retourneMenue = document.getElementById('retourneMenue');
    
        if (stopButton) {
            stopButton.style.display = 'none';
        }
        if (timeSelector) {
            selectOptionDiv.style.display = 'block';  // Assurez-vous de réafficher le div parent
        }
        if (timeDurationSelector) {
            optionSelector.selectedIndex = 0; // Réinitialiser à 'Select a Mode...'
        }
        if (retourneMenue) {
            retourneMenue.style.display = 'block';
        }
    
        console.log("UI updated after timer.");
    }
    
    function stopCurrentAudio() {
        if (currentAudio && !currentAudio.paused) {
            currentAudio.pause();
            currentAudio.currentTime = 0; // Réinitialiser l'audio
            console.log('Current audio stopped.');
        }
    }
    
  function playEndOfTimerSound() {
    // Arrêter tous les audios et timers avant de jouer le son de la cloche
    stopAudiosAndTimers(true); 

    const bellSound = new Audio('audio/cloche.mp3');
    bellSound.play();
    bellSound.onended = function() {
        console.log('End of timer sound played.');
        updateUIAfterTimer();  // Mettre à jour l'UI une fois le son de la cloche terminé
    };
}
function stopAudioCoaching3() {
 console.log("Stopping current audio...");
 if (currentAudioCoaching3 && !currentAudioCoaching3.paused) {
 currentAudioCoaching3.pause();
 currentAudioCoaching3.currentTime = 0; // Reset the audio's currentTime to 0 to start from the beginning next time.
 console.log('Coaching3 audio has been stopped and reset.');
 }
 
 // Cancel any set intervals to prevent scheduled audio from playing.
 if (intervalCoaching3) {
 clearInterval(intervalCoaching3); // Stop the timer interval.
 intervalCoaching3 = null; // Clear the interval variable to prevent unintended reactivation.
 console.log('Audio playback interval cleared and reset.');
 }
 
 // Reset the digital display used for showing the remaining time.
 const display = document.getElementById('digitalDisplay');
 if (display) {
 display.textContent = "00:00"; // Reset the display to zero.
 display.style.display = 'none'; // Hide the display.
 }
 
 // Reset the audio index to ensure that a new audio session can start correctly.
 audioIndex = 0;
 console.log('Audio index reset to zero.');
 }
 
 // Ensure that the entire DOM is loaded before setting up the specific Coaching3 interface.
 document.addEventListener('DOMContentLoaded', setupCoaching3UI);
 
 

function handleStopClick() {
    resetUI(true); // Réinitialise l'interface
    document.getElementById('programSelect').selectedIndex = 0;
    const stopButton = document.getElementById('stopButton');
    if (stopButton) {
    stopButton.style.display = 'none'; // Cache le bouton Stop après l'utilisation
}
console.log("Processus arrêté et interface réinitialisée.");
}











