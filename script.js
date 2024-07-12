const firstNames = ["Aragorn", "Bilbo", "Cersei", "Daenerys", "Eowyn", "Frodo", "Gandalf", "Hobbiton", "Imrahil", "Jon"];
const lastNames = ["Baggins", "Lannister", "Stark", "Targaryen", "Undomiel", "Grey", "White", "Black", "Stone", "Wood"];

document.getElementById("generateBtn").addEventListener("click", generateName);

function generateName() {
    const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const fullName = `${randomFirstName} ${randomLastName}`;
    document.getElementById("nameDisplay").innerText = fullName;
}
