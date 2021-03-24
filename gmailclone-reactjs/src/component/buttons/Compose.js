import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components'

const compose = () => {
    return (
       <Wrapper>
            <AddIcon fontSize = 'large'/>
            <p>compose</p>
       </Wrapper>
    )
}

export default compose

const Wrapper = styled.div`
    display: grid;
    grid-template-columns:35% auto;
    width: 150px;
    
    align-items: center;
    padding: 6px 32px 6px 8px;
    border-radius: 30px;
    cursor: pointer;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);
    color:#3c4043;
    font-weight: 500;
    font-size: 0.875rem;
    padding-left: 50px;
    
    :hover{
        box-shadow: 0 1px 3px 0 rgb(60 64 67 / 30%), 0 4px 8px 3px rgb(60 64 67 / 15%);
        background-color: #fafafb;
    }
`
