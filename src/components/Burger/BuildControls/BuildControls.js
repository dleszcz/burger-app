import React from 'react';
import { Controls, PriceContainer } from './BuildControls.styles';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const BuildControls = (props) => {
  return (
    <Controls>
      <PriceContainer>
        Current price: <strong>{props.price.toFixed(2)}</strong>
      </PriceContainer>
      { controls.map(control => (
      <BuildControl
        key={control.label}
        label={control.label}
        added={() => props.ingredientAdded(control.type)}
        removed={() => props.ingredientRemoved(control.type)}
        disabled={props.disabled[control.type]}
      />)) }
    </Controls>
  )
}

export default BuildControls;
