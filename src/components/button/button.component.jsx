import React, { Component } from 'react';

export default function Button(props) {
  return (
    <button className='button-component' onClick={() => props.clickFunction()}>
      {props.content}
    </button>
  );
}
