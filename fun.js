let esDeNoche=true;
if (esDeNoche) {
    console.log("cuidado con los moustros salen ahora");
} else {
    console.log("Es un día soleado, ¡perfecto para una aventura!")
}

function cruzarElPuente(nombreDelAventurero) {
    let longitudDelNombre = nombreDelAventurero.length;
    if (nombreDelAventurero === "eduardo") {
        console.log("¡oh no, ¡Es eduardo! *el troll sale corriendo es todo tuyo");
    }else if (longitudDelNombre > 6) {
        console.log("Tu nombre, " + nombreDelAventurero + ", es demasiado largo u poderoso. ¡ puedes pasae!");
    }else {
        console.log("¡ja! un nombre tan corto como " + nombreDelAventurero + " no es digno de cruzar mi puente. ¡Vete!");
    }
}

cruzarElPuente("Gandalf");
cruzarElPuente("eduardo");
cruzarElPuente("Aragon");
cruzarElPuente("Frodo");


function convencerAlGuardian(frase) {
    let fraseEnMinusculas = frase.toLowerCase();
    console.log ("El guardian escucha: '" + fraseEnMinusculas + "'");
    
    if (fraseEnMinusculas.includes("secreta")) {
        console.log("guardian: 'has dicho la palabra magica. Puedes pasar. ")

    } else {
        console.log("guardian:  'no mw interesan  tus Historias . ¡largo!")

}
}

convencerAlGuardian("MI CONTRASEÑA es  SECRETA ");
convencerAlGuardian("Tengo un secreto que contarte");
convencerAlGuardian("No se nada espaecial");

console.log("\n\nLección 4.5: El Matemago");

let lingotes = 13;
let gemas = 6;

let espadasDeHierro = Math.floor(lingotes / 2); 
let espadasDeGemas = Math.floor(gemas / 1);  
let espadasReales = Math.min(espadasDeHierro, espadasDeGemas);
console.log("Puedo forjar un máximo de " + espadasReales + " espadas completas.");


function jugarAdivinanza(moneda) {
    let palabraSecreta = moneda.toLowerCase();
    console.log("la palabra  "+ palabraSecreta + "'");

    if (palabraSecreta.includes("moneda")) {
        console.log("acertado! La palabra secreta era" + palabraSecreta + "¡Eres un verdadero mago del código!")
    }else {
        console.log("Casi... pero no.")

    }
}
jugarAdivinanza("python");
jugarAdivinanza("java");
jugarAdivinanza("javascript");

// PREGUNTA CURIOSA DE AZAR
let resultadoMoneda = Math.random() < 0.5 ? "Cara" : "Cruz";
console.log("Resultado de la moneda: " + resultadoMoneda);