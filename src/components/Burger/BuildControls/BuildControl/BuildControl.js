import React from 'react';

import { ControlContainer, Label, LessButton, MoreButton } from './BuildControl.styles';

const BuildControl = (props) => {
  return (
    <ControlContainer>
      <Label>{ props.label }</Label>
      <LessButton onClick={props.removed} disabled={props.disabled}>-</LessButton>
      <MoreButton onClick={props.added}>+</MoreButton>
    </ControlContainer>
  )
}

export default BuildControl;
