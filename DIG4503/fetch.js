class fetch(){

    constructor(pokemon, color){

        this.pokemon = pokemon;
        this.color = color;

        import axios from 'axios';


axios('https://pokeapi.co/api/v2/')
   
    .then(function (response) {
       
        const pokemon = response.data;

        chalk.hex("This is a " + pokemon.name + " its ID is " + pokemon.id " and its color is " + pokemon.color);
    })
    .catch(function (error) {
        
        chalk.red("Error: " + error);
    });


        };
    }

}


