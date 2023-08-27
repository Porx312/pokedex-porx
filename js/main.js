document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");
    const pokemonNameInput = document.getElementById("pokemonName");
    const pokedexDiv = document.getElementById("pokedex");


    searchButton.addEventListener("click", () => {
        const pokemonName = pokemonNameInput.value.trim().toLowerCase();
        if (pokemonName !== "") {
            fetchPokemonData(pokemonName);
        }
    });

    function fetchPokemonData(pokemonName) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => response.json())
            .then(data => {
                displayPokemonInfo(data);
            })
            .catch(error => {
                pokedexDiv.innerHTML = "<p>Pokémon no encontrado.</p>";
            });
    }
    
    function displayPokemonInfo(data) {
      const root = document.documentElement;
        const pokeType = {
            electric: {
                color1:"#fbff01",
                color2: "#cecb0c",
                color3:"#595f08",  
            },
            fire:{
                color1:"#ff4901",
                color2: "#b40b0b",
                color3:"#491306",   
                
            },
            steel:{
                color1:"#5e5e5e",
                color2:"#5c5b5b",
                color3:"#222222",
            },
            water:{
                color1:"#0057ff",
                color2:"#0746bf",
                color3:"#071c45",
            },
            bug:{
                color1:"#0bf20d",
                color2:"#0e9f0f",
                color3:"#064306",
            },
            dragon
            :{
                color1:"#000afd",
                color2:"#0a10b4",
                color3:"#0a10b4",
            },
            fairy:{
                color1:"#FF00C9 ",
                color2:"#E152DB",
                color3:"#721B6F", 
            },
            ghost:{
                color1:"#7406ff",
                color2:"#51169b",
                color3:"#2b0956",
            },
            combine:{
                color1:"#df00ff",
                color2:"#820d92",
                color3:"#44084d",
            },
            ice:{
                color1:"#00f2ff",
                color2:"#098f96",
                color3:"#063436",
            },
            fighting:{
                color1:"#ffa008",
                color2:"#a16c17",
                color3:"#412b07",
            },
            normal:{
                color1:"#6e6c70",
                color2:"#605f61",
                color3:"#3f3f3f",
            },
            grass:{
                color1:"#1add2d",
                color2:"#12991f",
                color3:"#05380a",
            },
            psychic:{
                color1:"#ff5ada",
                color2:"#8a3277",
                color3:"#5e0a6e",
            },
            rock:{
                color1:"#705d48",
                color2:"#52473a",
                color3:"#25211d",
            },
            dark:{
                color1:"#323130",
                color2:"#292725",
                color3:"#11100f",
            },
            ground:{
                color1:"#5f2803",
                color2:"#4d2308",
                color3:"#301605",
            },
            poison:{
                color1:"#7210d9",
                color2:"#46038c",
                color3:"#16032b",
            },
            flying:{
                color1:"#04ffe0",
                color2:"#0da18f",
                color3:"#054941",
            }

            // Agrega más colores según los tipos de Pokémon
        };
  
        const color = pokeType[data.types[0].type.name] || "#fff"; // Color por defecto si no se encuentra el tipo
        root.style.setProperty('--color-card', color.color1);
        root.style.setProperty('--color-text-rank', color.color2);
        root.style.setProperty('--color-fond', color.color3); 
        console.log(color[1]);
        const pokemonInfo = `
            <div class="card-container">
                <div class="container-decription-pokemon">
                    <h1 class="description--pokemon-name">${data.name}</h1>
                    <h2 class="description--pokemon-tyoe">${data.types[0].type.name}</h2>
                    <p class="description--pokemon-paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit omnis repudiandae adipisci earum sunt debitis quisquam nesciunt, est nemo veniam, quod, incidunt maxime ipsa? Saepe explicabo ut repudiandae provident est.</p>
                    <p class="description--pokemon-proyect">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic tempore quo dignissimos! Porro commodi sint officia vitae</p>
                    <a class="site-creator" href="https://github.com/Porx312">https://github.com/Porx312</a>
                    <p class="description--pokemon-reserved">™&© Porx dev All Rights Reserved</p>
                    <div class="pokeRank pokeRank-description">
                        <div class="pokeRankText">
                            <h3 class="pokeRank-title pokeRank-title-description"><span>Pokemon</span><span>Rank</span></h3>
                        </div>
                        <h2 class="pokeRank-num pokeRank-num-description">${data.id}</h2>
                    </div>
                </div>
                <div class="card">
                    <div class="card-face front">
                        <div class="nameandrasnk">
                            <h2 class="name-pokemon">${data.name} <span class="name-types">${data.types[0].type.name}</span></h2>
                            <div class="pokeRank">
                                <div class="pokeRankText">
                                    <h3 class="pokeRank-title"><span>Pokemon</span><span>Rank</span></h3>
                                </div>
                                <h2 class="pokeRank-num">${data.id}</h2>
                            </div>
                        </div>
                        <div class="imagenPokemon">
                            <img class="imagenPokemon-img" src="${data.sprites.other.dream_world.front_default || data.sprites.front_default}" alt="${data.name}">
                            <div class="typeLogo"></div>
                        </div>
                        <div class="type">
                            <h3 class="type-text">${getRarity(data.types[0].type.name)}</h3>
                        </div>
                        <p class="description--pokemon">Lorem ipsum, dolor sit amet consectetur elit  Vel vero sint dolores cumque. Rem libero animi autem sds. lore</p> 
                        <div class="habilities">
                            <div class="habilities-item">
                                <h2 class="habilities-text">Habilidades</h2>
                                ${data.abilities.map(ability => `<h3 class="habilities-text-stats">${ability.ability.name}</h3>`).join("")}
                            </div>
                            <div class="habilities-item">
                                <h2 class="habilities-text">Estadísticas</h2>
                                <h3 class="habilities-text-stats">HP - ${data.stats[0].base_stat}</h3>
                                <h3 class="habilities-text-stats">Ataque - ${data.stats[1].base_stat}</h3>
                                <h3 class="habilities-text-stats">Defensa - ${data.stats[2].base_stat}</h3>
                                <h3 class="habilities-text-stats">Velocidad - ${data.stats[5].base_stat}</h3>
                            </div>
                            <div class="rarity">
                                <h2>Rarity</h2>
                                <h4>${getRarity(data.types[0].type.name)}</h4>
                            </div>
                        </div> 
                        <div class="revervedDere">
                            <p>™&© Porx dev All Rights Reserved</p>
                            <div class="barra"></div>
                            <div class="logo">PORX</div>
                        </div>
                    </div>
                    <div class="card-face back"></div>
                </div>
            </div> 
        `;
        
        pokedexDiv.innerHTML = pokemonInfo;
        const carddescriptor = document.querySelector(".container-decription-pokemon")
setTimeout(()=>{
carddescriptor.classList.add("active")
},1600)
       
    }

    function fetchMultiplePokemonData() {
        for (let i = 1; i <= 50; i++) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                .then(response => response.json())
                .then(data => {
                    displayPokemonThumbnail(data);
                });
        }
    }

    function displayPokemonThumbnail(data) {
        const pokemonThumbnail = document.createElement("div");
        pokemonThumbnail.classList.add("pokemon-thumbnail");
        pokemonThumbnail.innerHTML = `
            <img src="${data.sprites.other.dream_world.front_default}" alt="${data.name}">
        `;
    
        const pokedexDiv = document.getElementById("pokedex"); // Asegúrate de obtener la referencia correcta al contenedor de pokedex
        pokedexDiv.appendChild(pokemonThumbnail);
    
      
    }
    

    function getRarity(type) {
        const rarities = {
            normal: "Epic",
            fighting: "Rare",
            flying: "Epic",
            electric: "Common",
            fire: "Legendary",
            steel: "Epic",
            water: "Rare",
            dragon: "Common",
            fairy: "Epic",
            ghost: "Epic",
            combine: "Rare",
            ice: "Epic",
            grass: "Common",
            psychic: "Epic",
            rock: "Rare",
            dark: "Epic",
            ground: "Epic",
            poison: "Epic",
            // Puedes agregar más rarezas según tus necesidades
        };        
        return rarities[type] || "Unknown";
    }

    fetchMultiplePokemonData();
});
