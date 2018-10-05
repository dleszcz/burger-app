import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import { BurgerContainer } from './Burger.styles';

const Burger = () => {
  return (
    <BurgerContainer>
      <BurgerIngredient type='bread-top' />
      <BurgerIngredient type='cheese' />
      <BurgerIngredient type='meat' />
      <BurgerIngredient type='bread-bottom' />
    </BurgerContainer>
  )
}

export default Burger;
