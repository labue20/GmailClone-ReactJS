
import React from 'react'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <Wrapper>
            <LogoWrapper>
                <div>
                    <MenuIcon/>
                </div>
                <img src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"/>
            </LogoWrapper>
            <SearchWrapper>
                <SearchBarWrapper>
                    <SearchIcon/>
                    <input type='text' placeholder='Search Mail'/>
                   
                </SearchBarWrapper>
            </SearchWrapper>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    background-color: orange;
    height:100px;
`
const LogoWrapper = styled.div`
`
const SearchWrapper = styled.div``

const SearchBarWrapper = styled.div``