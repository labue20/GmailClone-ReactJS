
import React from 'react'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

function Header() {
    return (
        <Wrapper>
            <LogoWrapper>
            
                    <Menu>
                    
                    </Menu>
                    <MenuIcon/>  
                    <Logo>
                        <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png"/>
                    </Logo>
            </LogoWrapper>

            <SearchWrapper>
                <SearchBarWrapper>
                        <SearchIconWrapper/>
                        {/*<SearchIcon/>*/}
                        <input type='text' placeholder='Search Mail'/>
                        <ExpandMoreIcon />
                </SearchBarWrapper>
            </SearchWrapper>

                    <IconsWrapper>
                         <HelpOutlineIcon/>
                         <SettingsIcon/>
                         <AppsIcon/>
                         <AccountCircleIcon/>
                    </IconsWrapper>
            
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 270px auto 170px;
    border-bottom: 1px solid lightgray;
    height: 70px;
    align-items: center;
`
const LogoWrapper = styled.div`
    height: 45px;
    display: grid;
    grid-template-columns: 25% auto:
    
`
const Logo = styled.div`
    display: flex;
    height: 45px;
    
    
`
const Menu = styled.div`
    display: grid;
    place-items: center;
    

`
const SearchWrapper = styled.div`

   
`

const SearchBarWrapper = styled.div`
    background-color: #f1f3f4;
    width: 100%;
    max-width: 750px;
    display: grid;
    grid-template-columns: 10% auto 7%;
    place-items: center;
    height: 45px;
    border-radius: 6px;
    

    MuiSvgIcon-rrot{
        color: #5f6368;
    }
    
    input {
        width: 90%;
        height: 20px;
        background: none;
        border: none;
        font-size: 18px;

        :focus {
            outline: none;
        }
    }
`
const IconsWrapper = styled.div`
    margin-left: 8px;
    display:grid;
    grid-template-columns: repeat(4, auto);

    .MusiSvgIcon-root{
        color: #5f6368;
    }

`
const SearchIconWrapper = styled(SearchIcon)`
    color: #5f6368;
`