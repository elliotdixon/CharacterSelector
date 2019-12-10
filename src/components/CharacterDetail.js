import React from 'react';

const CharacterDetail = (props) => {
  if (!props.character) return null;
  return(
    <div>
      <h3> Character name: {props.character.name}</h3>
      <h4> House: {props.character.house}</h4>
      <h4> Played by: {props.character.actor}</h4>
      <img src={props.character.image}/>
    </div>
  )
}

export default CharacterDetail;
