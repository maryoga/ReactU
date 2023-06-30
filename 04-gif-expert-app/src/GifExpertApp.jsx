import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
// import { AddCategory } from './components/AddCategory';
// import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  
  const [ categories, setCategories ] = useState(['One Punch']);
  
  // recibiremos el string 'newCategory' y lo colocaremos en la función setCategories
  const onAddCategory = ( newCategory ) => {

    if ( categories.includes(newCategory) ) return;

    // categories.push( newCategory );
    setCategories([ newCategory, ...categories]);
    // setCategories( cat => [ ...cat, 'Valorant']);
  }

  return (
    <> 
        <h1>GifExpertApp</h1>

        <AddCategory
          onNewCategory = { value => onAddCategory(value) }
        />
     
        {
          categories.map( ( category ) => (
            <GifGrid 
              key = { category }
              category = { category } />
          ))
        }
    </>
  )
}
