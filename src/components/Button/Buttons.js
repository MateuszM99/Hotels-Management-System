import React, { Component } from 'react'
import styled from 'styled-components'


export const Button = styled.button`
  width: 125px;
  height: 44px;
  background-color: white;
  border-style: none;
  outline: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  border : solid 1px black;
  
  ${props =>
    props.small &&
    `
      width: 36px;
      height: 36px
    `};
`

export const SelectorButton = styled.button`
  width: 250px;
  height: 44px;
  background-color: white;
  border-style: none;
  outline: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  border : solid 1px black;
  padding-left: 20px;
  background-image: url(https://img.icons8.com/material-rounded/24/000000/person-male.png);
  background-position: 2%;
  background-repeat: no-repeat;
`