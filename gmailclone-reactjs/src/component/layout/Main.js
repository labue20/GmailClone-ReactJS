
import React from 'react';
import styled from 'styled-components';
import Sidebar from './SideIcons';
import SideIcons from './SideIcons';
import EmailsView from './EmailsView'

function Main() {
    return (
        <Wrapper>
            <Sidebar/>
            <EmailsView/>
            <SideIcons/>
          
        
        </Wrapper>
    )
}

export default Main;

const Wrapper = styled.div`

`