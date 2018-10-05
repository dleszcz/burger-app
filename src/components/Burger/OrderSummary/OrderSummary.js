import React from 'react';

import { Capitalized, Continue, Description, Header, List, ListItem } from './OrderSummary.styles';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(iKey =>
      <ListItem key={iKey}>
          <Capitalized>{iKey}</Capitalized> : { props.ingredients[iKey] }
      </ListItem>
    );

  return (
    <>
      <Header>Your order</Header>
      <Description>Some nice burger</Description>
      <List>
        { ingredientSummary }
      </List>
      <Continue>Continue to checkout?</Continue>
    </>
  )
}

export default OrderSummary;
