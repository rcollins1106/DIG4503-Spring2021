import Axios from 'axios';

function Pokemon(){
return (
    <div className="App">
      <input type="text" onChange={(event) => {
        
        setSearch(event.target.value);
      }} />
      <button onClick={() => searchMonsters()}>Search</button>
      {
        <p>Searched: {search}</p>
      }
      {
        (loading == true) ? (
          <p>Loading...</p>
        ) : (
          <div>
            <h1>{pokemon.name}</h1>
            <p>{pokemon.id}</p>
            <img src={pokemon.sprites.front_default} />
          </div>
        )
      }
    </div>
  );
    }

export default Pokemon;