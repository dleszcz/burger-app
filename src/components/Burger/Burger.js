import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { BurgerContainer } from './Burger.styles';

const Burger = (props) => {
  const transformedIngrediets = Object.keys(props.ingredients)
      .map(ingredientKey => [...Array(props.ingredients[ingredientKey])]
          .map((_, i) => <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
        )
      )
      .reduce((arr, el) => arr.concat(el), [])

  return (
    <BurgerContainer>
      <BurgerIngredient type='bread-top' />
        { transformedIngrediets.length ? transformedIngrediets : <p>Please add ingredients.</p> }
      <BurgerIngredient type='bread-bottom' />
    </BurgerContainer>
  )
}

export default Burger;
