import React,{useEffect, useState} from 'react';
import Recipe from "./Recipe";
import Modal from 'react-modal'
import CloseIcon from '@material-ui/icons/Close';
import './index.css'
import CircularProgress from '@material-ui/core/CircularProgress';
import fridgeIcon from '../dashboard/fridge.png'

const RecipeSearchInput = () => {
  const API_ID = process.env.REACT_APP_APP_ID;
  const API_KEY = process.env.REACT_APP_APP_KEY;
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [loaded, setLoaded] = useState(false);
  
  
  useEffect(()=>{
    getRecipes();
  }, [query]);
  
  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    setTimeout(function(){ setLoaded(true); }, 500);
  };
  
  const updateSearch = e => {
    setSearch(e.target.value);
  };
  
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
    setModalIsOpen(true) 
  }



    return(
      <>
        
      <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch} />
          <button 
          className="search-button" 
          type="submit">Search</button>
        </form>
        </div>
      <Modal 
      isOpen={modalIsOpen} 
      onRequestClose={() => setModalIsOpen(false)}
      closeTimeoutMS={500}
      style={
        {
        content: {
          background: 'linear-gradient(7deg, rgba(2,0,36,1) 0%, rgba(212,212,228,0.48921566917782733) 34%, rgba(0,212,255,1) 100%)', 
          position: 'absolute',
          top: '20%',
          left: '1%',
          right: '1%',
          bottom: '5%',
          border: '1px solid #ccc',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '5px',
          outline: 'none',
          padding: '20px',
          zIndex: '30',
        }
      }
      }
      >

        <div className='closeIcon'>
              <CloseIcon onClick={() => setModalIsOpen(false)}>Close</CloseIcon>
            </div>
     
    {!loaded ? 
      <>
    
      <main className="centered middled">
        <img className='icon-progress' height='75px' width='150px' src={fridgeIcon} alt='fridgeIcon' />
          <b>Fetching Recipes...</b>
          
          <div className='circle-progress'> <CircularProgress size='100px' color='secondary'/> </div>
          </main>
        </>
      :
      ''}

    {recipes.length === 0 ? 
      <>
      <br></br>
      <h2>
        Sorry, your search request failed, possibly due to the following reasons:
      </h2>
      <h3>- The API has exceeded the 5 fetch per minute maximum.</h3>
      <h3>- There are no recipes for your particular query.</h3>
      </> :''
    }
      
        <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
          key={recipe.recipe.label} 
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          source={recipe.recipe.source} 
          url={recipe.recipe.url} />
        ))}
        </div>
      
      </Modal>

      </>
    );
  };

export default RecipeSearchInput;