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

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by type
    if (selectedType) {
      filtered = filtered.filter((pokemon) =>
        pokemon.types.some((type) => type.type.name.toLowerCase() === selectedType.toLowerCase())
      );
    }

    setFilteredPokemon(filtered);
  }, [searchTerm, selectedType, pokemonList]);

  // Handle search input
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handle type filter click
  const handleTypeFilter = (type) => {
    setSelectedType(type.toLowerCase() === selectedType.toLowerCase() ? '' : type.toLowerCase());
  };

  return (
    <main className="main-container">
      <div className="container-grid">
        <h2>Pokémon Collection</h2>

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
                  <span className={pokemon.types.map((type) => type.type.name).join(' ')}>
                    {pokemon.types.map((type) => type.type.name).join(', ')}
                  </span>
                  <div className="properties">
                    <span className="proper">
                      Atk: {pokemon.stats.find((stat) => stat.stat.name === 'attack').base_stat}
                    </span>
                    <span className="proper">
                      Spd: {pokemon.stats.find((stat) => stat.stat.name === 'speed').base_stat}
                    </span>
                    <span className="proper">
                      Def: {pokemon.stats.find((stat) => stat.stat.name === 'defense').base_stat}
                    </span>
                    <span className="proper">
                      Hlt: {pokemon.stats.find((stat) => stat.stat.name === 'hp').base_stat}
                    </span>
                  </div>
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