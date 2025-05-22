import React, { useState, useEffect } from 'react';
import './Mcontainer.css';
import search from '../assets/search.png';
import { fetchPokemon } from '../api/fetchPokemon.js';

const Mcontainer = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [team, setTeam] = useState([]);
  const [teamTotals, setTeamTotals] = useState({
    totalAttack: 0,
    totalSpeed: 0,
    totalDefense: 0,
    totalHp: 0,
  });

  // Fetch Pokémon data
  useEffect(() => {
    setIsLoading(true);
    fetchPokemon()
      .then((pokemonDetails) => {
        setPokemonList(pokemonDetails);
        setFilteredPokemon(pokemonDetails);
      })
      .catch((error) => {
        console.error('Error fetching Pokémon:', error);
        setError('Failed to load Pokémon.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  // Handle search and filter
  useEffect(() => {
    let filtered = pokemonList;

    if (searchTerm) {
      filtered = filtered.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType) {
      filtered = filtered.filter((pokemon) =>
        pokemon.types.some((type) => type.type.name.toLowerCase() === selectedType.toLowerCase())
      );
    }

    setFilteredPokemon(filtered);
  }, [searchTerm, selectedType, pokemonList]);

  // Calculate team totals
  useEffect(() => {
    const totals = team.reduce(
      (acc, pokemon) => {
        const attack = pokemon.stats.find((stat) => stat.stat.name === 'attack').base_stat;
        const speed = pokemon.stats.find((stat) => stat.stat.name === 'speed').base_stat;
        const defense = pokemon.stats.find((stat) => stat.stat.name === 'defense').base_stat;
        const hp = pokemon.stats.find((stat) => stat.stat.name === 'hp').base_stat;

        return {
          totalAttack: acc.totalAttack + attack,
          totalSpeed: acc.totalSpeed + speed,
          totalDefense: acc.totalDefense + defense,
          totalHp: acc.totalHp + hp,
        };
      },
      { totalAttack: 0, totalSpeed: 0, totalDefense: 0, totalHp: 0 }
    );

    setTeamTotals(totals);
  }, [team]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleTypeFilter = (type) => {
    setSelectedType(type.toLowerCase() === selectedType.toLowerCase() ? '' : type.toLowerCase());
  };

  // Add Pokémon to team
  const addToTeam = (pokemon) => {
    if (team.length < 6 && !team.find((p) => p.id === pokemon.id)) {
      setTeam([...team, pokemon]);
    }
  };

  // Remove Pokémon from team
  const removeFromTeam = (pokemonId) => {
    setTeam(team.filter((p) => p.id !== pokemonId));
  };

  return (
    <main className="main-container">
      <div className="container-grid">
        <h2>Pokémon Collection</h2>

        <div className="team-section">
          <h3>Your Team ({team.length}/6)</h3>
          <div className="team-grid">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="team-slot">
                {team[index] ? (
                  <div className="team-card">
                    <img src={team[index].sprites.front_default} alt={team[index].name} />
                    <span>{team[index].name.charAt(0).toUpperCase() + team[index].name.slice(1)}</span>
                    <button onClick={() => removeFromTeam(team[index].id)}>Remove</button>
                  </div>
                ) : (
                  <span>Empty</span>
                )}
              </div>
            ))}
          </div>
          <div className="team-totals">
            <h4>Team Totals</h4>
            <div className="totals-grid">
              <span className="total-stat">Atk: {teamTotals.totalAttack}</span>
              <span className="total-stat">Spd: {teamTotals.totalSpeed}</span>
              <span className="total-stat">Def: {teamTotals.totalDefense}</span>
              <span className="total-stat">Hlt: {teamTotals.totalHp}</span>
            </div>
          </div>
        </div>
       
        <div className="search-filter">
          <div className="search">
            <div className="search-bar">
              <img src={search} alt="Search icon" />
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
                aria-label="Search Pokémon by name"
              />
            </div>
          </div>

          <div className="filter-wrap">
            <span className="filter">Filter by type:</span>
            <span
              className={`fire ${selectedType === 'fire' ? 'active' : ''}`}
              onClick={() => handleTypeFilter('fire')}
              role="button"
              aria-pressed={selectedType === 'fire'}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleTypeFilter('fire')}
            >
              Fire
            </span>
            <span
              className={`grass ${selectedType === 'grass' ? 'active' : ''}`}
              onClick={() => handleTypeFilter('grass')}
              role="button"
              aria-pressed={selectedType === 'grass'}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleTypeFilter('grass')}
            >
              Grass
            </span>
            <span
              className={`ground ${selectedType === 'ground' ? 'active' : ''}`}
              onClick={() => handleTypeFilter('ground')}
              role="button"
              aria-pressed={selectedType === 'ground'}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleTypeFilter('ground')}
            >
              Ground
            </span>
            <span
              className={`water ${selectedType === 'water' ? 'active' : ''}`}
              onClick={() => handleTypeFilter('water')}
              role="button"
              aria-pressed={selectedType === 'water'}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleTypeFilter('water')}
            >
              Water
            </span>
            <span
              className={`poison ${selectedType === 'poison' ? 'active' : ''}`}
              onClick={() => handleTypeFilter('poison')}
              role="button"
              aria-pressed={selectedType === 'poison'}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleTypeFilter('poison')}
            >
              Poison
            </span>
            <span
              className={`flying ${selectedType === 'flying' ? 'active' : ''}`}
              onClick={() => handleTypeFilter('flying')}
              role="button"
              aria-pressed={selectedType === 'flying'}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleTypeFilter('flying')}
            >
              Flying
            </span>
            <span
              className={`electric ${selectedType === 'electric' ? 'active' : ''}`}
              onClick={() => handleTypeFilter('electric')}
              role="button"
              aria-pressed={selectedType === 'electric'}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleTypeFilter('electric')}
            >
              Electric
            </span>
            <span
              className={`normal ${selectedType === 'normal' ? 'active' : ''}`}
              onClick={() => handleTypeFilter('normal')}
              role="button"
              aria-pressed={selectedType === 'normal'}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleTypeFilter('normal')}
            >
              Normal
            </span>
            <span
              className={`fairy ${selectedType === 'fairy' ? 'active' : ''}`}
              onClick={() => handleTypeFilter('fairy')}
              role="button"
              aria-pressed={selectedType === 'fairy'}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && handleTypeFilter('fairy')}
            >
              Fairy
            </span>
          </div>
        </div>

        <div className="grid">
          {isLoading ? (
            <p>Loading Pokémon...</p>
          ) : error ? (
            <p>{error}</p>
          ) : filteredPokemon.length > 0 ? (
            filteredPokemon.map((pokemon) => (
              <div key={pokemon.id} className="grid-card">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
                <div className="type">
                  {pokemon.types && pokemon.types.length > 0 ? (
                    pokemon.types.map((type, index) => (
                      <span key={index} className={`type-${type.type.name.toLowerCase()}`}>
                        {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                      </span>
                    ))
                  ) : (
                    <span className="type-unknown">Unknown</span>
                  )}
                  <div className="properties">
                    <span className="proper">
                      Atk: {pokemon.stats.find((stat) => stat.stat.name === 'attack')?.base_stat || 'N/A'}
                    </span>
                    <span className="proper">
                      Spd: {pokemon.stats.find((stat) => stat.stat.name === 'speed')?.base_stat || 'N/A'}
                    </span>
                    <span className="proper">
                      Def: {pokemon.stats.find((stat) => stat.stat.name === 'defense')?.base_stat || 'N/A'}
                    </span>
                    <span className="proper">
                      Hlt: {pokemon.stats.find((stat) => stat.stat.name === 'hp')?.base_stat || 'N/A'}
                    </span>
                  </div>
                </div>
                <div className="add-button">
                  <button className="add" onClick={() => addToTeam(pokemon)}>
                    Add to Team
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No Pokémon found.</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Mcontainer;