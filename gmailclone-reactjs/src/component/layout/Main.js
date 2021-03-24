
import React from 'react';
import styled from 'styled-components';
import Sidebar from './SideIcons';
import SideIcons from './SideIcons';
import EmailsView from './EmailsView'

function Main() {
    return (
        <Wrapper>
            <Sidebar/>
            hee
            <EmailsView/>
            <SideIcons/>
          
        
        </Wrapper>
    )
}

export default Main;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 270px auto 50px;
`