// Definindo o nome e a experiência do herói
let nome = "Canon";
let XP = 8500;

// Definindo o nível baseado na experiência
let nivel;
if (XP < 1000) {
    nivel = "Ferro";
} else if (XP >= 1001 && XP <= 2000) {
    nivel = "Bronze";
} else if (XP >= 2001 && XP <= 5000) {
    nivel = "Prata";
} else if (XP >= 5001 && XP <= 7000) {
    nivel = "Ouro";
} else if (XP >= 7001 && XP <= 8000) {
    nivel = "Platina";
} else if (XP >= 8001 && XP <= 9000) {
    nivel = "Ascendente";
} else if (XP >= 9001 && XP <= 10000) {
    nivel = "Imortal";
} else if (XP >= 10001) {
    nivel = "Radiante";
}

// Exibindo a mensagem
console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`);
