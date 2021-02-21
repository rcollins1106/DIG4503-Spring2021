import Search from './components/Search'
import { useState } from 'react';



    function App() {

      // Track what is being searched for
      const [search, setSearch] = useState("");
    
      // Track what is found when searching
      const [pokemon, setPokemon] = useState({});
    
      // Track if the loading is done or not
      const [loading, setLoading] = useState(true);
    
      /**
       * The searchMonster() function uses Axios to communicate to the PokeAPI.
       * 
       * It uses the "search" variable.
       */
    }

    export default App;