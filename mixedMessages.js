let woord1 = ['Hallo', 'Goedenmiddag', 'Bonjour', 'Ola', 'Ah Goeie'];
let woord2 = ['Jan', 'Pieter', 'Fred', 'Jaquelien', 'Enrique', 'Laura'];
let woord3 = ['Nog geneukt?', 'lekker gezwommen?', 'hoe was je dag?', 'waar is mijn hoed', 'wat zit je nou te zeiken?'];

let randomNumber = input => {
    let number = Math.floor(Math.random() * input.lenght);
    return number;
}

let zinMaker = (array1, array2, array3) => {
    //Willekeurige woorden kiezen binnen de ingevoerde arrays
    let ww1 = array1[Math.floor(Math.random() * array1.length)];
    let ww2 = array2[Math.floor(Math.random() * array2.length)];
    let ww3 = array3[Math.floor(Math.random() * array3.length)];

    let eindZin = `${ww1} ${ww2} ${ww3}`
    
    return eindZin;
}

console.log(zinMaker(woord1, woord2, woord3));