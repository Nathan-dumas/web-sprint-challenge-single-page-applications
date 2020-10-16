/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'

const Header = styled.header`
    border: 1px solid black;
    display: flex;

`


export default function Homepage(props) {
    return (
        <Header>
            <h1>This is the home page</h1>
        </Header>
    )
}