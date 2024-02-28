let characters = ['goku', 'morgana','aang'];

characters.push('sasuke');
characters.pop();


//slice : do not destroy original arrays
let characters2 = characters.slice(1,3);
console.log(characters2); // [ 'goku','morgana' ]

// splice  destroy the org. array
let newCharacters = characters.splice(1,2) ;
console.log(newCharacterscharacters); //  