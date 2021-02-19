import React from 'react';
import './recipe.css';
const Recipe = ({title, calories, image, ingredients, source, url}) => {
    return(
        <div className='recipe'>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories.toFixed(0)} calories</p>
            <a href={url} target="_blank" rel="noreferrer">
            <p className='source'>Source: {source}</p>
            </a>
          
            <img className='image' src={image} alt=""/>
       
        </div>
    );
}

export default Recipe;