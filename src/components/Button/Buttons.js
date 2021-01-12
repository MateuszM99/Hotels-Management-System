import React, { Component } from 'react'
import styled from 'styled-components'


export const Button = styled.button.attrs(props => ({
  marginLeft : props.marginLeft,
  marginBottom : props.marginBottom,
  marginTop : props.marginTop,
  width : props.width || "125px",
  height : props.height || "44px",
}))`
  width: ${props => props.width};
  height: ${props => props.height};
  background-color: white;
  border-style: none;
  outline: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  border : solid 1px black;
  margin-left: ${props => props.marginLeft};
  margin-bottom : ${props => props.marginBottom};
  margin-top : ${props => props.marginTop};
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