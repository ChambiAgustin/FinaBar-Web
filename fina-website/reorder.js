const fs = require('fs');

const path = './menu.json';
const data = JSON.parse(fs.readFileSync(path, 'utf8'));

// Desired order of "category" names based on user feedback (descending priority)
const categoryPriority = [
    "Cocktelería de Autor",
    "Cocktelería Clásica",
    "Tikis",
    "Para Picotear",
    "Para Compartir",
    "Platos Principales",
    "Platos Vegetarianos",
    "Platos Sin TACC",
    "Postres",
    "Medidas: Gin's",
    "Medidas: Whisky",
    "Medidas: Ron & Vodka & Pisco",
    "Aperitivos, Vermut & Licores",
    "Cervezas",
    "Sidras",
    "Mocktails (Sin Alcohol)",
    "Bebidas Sin Alcohol",
    "Copas de Vino",
    "Malbec",
    "Más Variedades",
    "Espumantes",
    "Sauvignon Blanc",
    "Cabernet Sauvignon",
    "Cabernet Franc",
    "Chardonnay",
    "Bivarietal",
    "Reservas"
];

data.sort((a, b) => {
    let indexA = categoryPriority.indexOf(a.category);
    let indexB = categoryPriority.indexOf(b.category);
    
    // If not in the priority list, put them at the end
    if (indexA === -1) indexA = 999;
    if (indexB === -1) indexB = 999;
    
    return indexA - indexB;
});

// Format and save
fs.writeFileSync(path, JSON.stringify(data, null, 4), 'utf8');
console.log('menu.json has been correctly reordered according to custom priority.');
