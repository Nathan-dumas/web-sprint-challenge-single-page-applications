/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
    border: 1px solid black;
    display: flex;

`
const Nav = styled.nav`
    display: flex;
    border: 1px solid black;
    width: 100%;
    justify-content: center;
`
const A = styled.a `
    display: flex;
    text-decoration: none;
    margin: 1%;
`

export default function Homepage(props) {
    return (
        <Header>
            <h1>This is the home page</h1>
        </Header>
    )
}