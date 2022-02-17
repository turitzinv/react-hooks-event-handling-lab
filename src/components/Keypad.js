// Code Keypad Component Here
import React from 'react';

function Keypad() {
  // function inputAdd(){
  //   console.log('Entering password...')
  // }
  return (
    <input type='password' onChange={event => console.log('Entering password...')} />
  )
}

export default Keypad;