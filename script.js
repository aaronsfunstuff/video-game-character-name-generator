const firstNames = [
    "Aragorn", "Bilbo", "Cersei", "Daenerys", "Eowyn", "Frodo", "Gandalf", 
    "Hobbiton", "Imrahil", "Jon", "Khal", "Legolas", "Merlin", "Ned", "Oberyn",
    "Pippin", "Quorin", "Radagast", "Samwise", "Thorin", "Ulmo", "Varys", "Walda", 
    "Xaro", "Ygritte", "Zane", "Arwen", "Boromir", "Celeborn", "Dain"
];

const lastNames = [
    "Baggins", "Lannister", "Stark", "Targaryen", "Undomiel", "Grey", "White", 
    "Black", "Stone", "Wood", "Ironfoot", "Stormborn", "Of Mirkwood", "Of Rivendell",
    "Son of Gloin", "The Brave", "The Wise", "Of Gondor", "Of Rohan", "Of Narnia", 
    "Of Essos", "Of Westeros", "Of Mordor", "Of Valyria", "Of Winterfell", 
    "Of King's Landing", "Of Dragonstone", "Of Riverrun", "Of Harrenhal", "Of Highgarden"
];

document.getElementById("generateBtn").addEventListener("click", generateName);

function generateName() {
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const fullName = `${randomFirstName} ${randomLastName}`;
    document.getElementById("nameDisplay").innerText = fullName;

    playSound('nameSound');
    animateNameDisplay();
}

function animateNameDisplay() {
    const nameDisplay = document.getElementById("nameDisplay");
    nameDisplay.style.transition = "transform 0.3s, opacity 0.3s";
    nameDisplay.style.transform = "scale(1.5)";
    nameDisplay.style.opacity = "0";

    setTimeout(() => {
        nameDisplay.style.transform = "scale(1)";
        nameDisplay.style.opacity = "1";
    }, 300);
}

function playSound(soundId) {
    const sound = document.getElementById(soundId);
    sound.currentTime = 0;
    sound.play();
}

document.getElementById("generateBtn").addEventListener("mousedown", () => playSound('clickSound'));

