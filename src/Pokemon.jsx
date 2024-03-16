import { useState, useEffect } from 'react'

function Pokemon({id,pokemonName,type,image,info}){


    return <li>
        <img src={image} alt={pokemonName} />

        <h3>
            [{id}] {pokemonName}
        </h3>
        
        <ul className="pokemonType">
            {type.map((el,i)=><li key={i}>{el}</li>)}
        </ul>

        <ul className='column'>
            <li>HP: {info['HP']}</li>
            <li>Speed: {info['Speed']}</li>
            <li>Attk: {info['Attack']}</li>
            <li>Sp. Attk: {info['Sp. Attack']}</li>
            <li>Def: {info['Def']}</li>
            <li>Sp. Def: {info['Sp. Def']}</li>
        </ul>
    </li>
}

export default Pokemon;