const firstNames = ["Aragorn", "Bilbo", "Cersei", "Daenerys", "Eowyn", "Frodo", "Gandalf", "Hobbiton", "Imrahil", "Jon"];
const lastNames = ["Baggins", "Lannister", "Stark", "Targaryen", "Undomiel", "Grey", "White", "Black", "Stone", "Wood"];

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
