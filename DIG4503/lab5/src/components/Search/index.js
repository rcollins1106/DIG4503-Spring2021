
import Axios from 'axios';
import Pokemon from '../Pokemon';


  function searchMonsters() {
    
    setLoading(true);

   
    Axios('https://pokeapi.co/api/v2/pokemon/' + search)
    
    .then(function (response) {
        
        setPokemon(response.data);
        
        setLoading(false);
    })
    .catch(function (error) {
        
        console.log("Not Found!");
    });
  }

  export default searchMonsters;