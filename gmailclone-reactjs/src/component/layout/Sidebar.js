import React from 'react'
import styled from 'styled-components';
import Compose from '../buttons/Compose';

import KeyboardIcon from '@material-ui/icons/Keyboard';
import VideocamIcon from '@material-ui/icons/Videocam';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { bottomIcons } from '../data/BottomIconsData';
import { sidebarButtonItems } from '../../component/data/SidebarButtonItems';


const Sidebar = () => {
    return (
        <Wrapper>
            <TopSectionWrapper>
                <ComposeWrapper>
                    {/*Compose button*/}
                    <Compose/>
                </ComposeWrapper>

                <sideButtonWrapper>

                    {
                        sidebarButtonItems.map(item =>(
                            <SidebarButtonItem>{item.icon} {item.text}</SidebarButtonItem>
                        ))
                    }
                
                </sideButtonWrapper>
            </TopSectionWrapper>

            <BottomSectionWrapper>
            
                        
                <SideBarSectionWrapper>
                    <Title> <b>Meet</b></Title>
                    <p> <VideocamIcon/>New Meeting</p>
                    <p> <KeyboardIcon/> Join Meeting</p>
                </SideBarSectionWrapper>


                <SideBarSectionWrapper>
                    <Title>Hangouts</Title>
                    <p> <AccountCircleIcon/> Wilfred Labue</p>
                
                </SideBarSectionWrapper>

        
                <BottomwIconsWrapper>
                        {
                            bottomIcons.map(icon => (
                                <>
                                    {icon}
                                </>
                            ))
                        }
                    
                </BottomwIconsWrapper>

            </BottomSectionWrapper>
        </Wrapper>
    )
}

export default Sidebar

const TopSectionWrapper = styled.div`
   
`

const Wrapper = styled.div`
    border-right: 1px solid lightgray;
    height: calc(100vh - 19vh);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  


`
const ComposeWrapper = styled.div`
    display: grid;
    place-items: start;
    padding: 10px 20px;
    
`

const sideButtonWrapper = styled.div`

`
const SideBarSectionWrapper = styled.div`
  
    border-top: 1px solid lightgray;
    
    p {
        color: gray;
        display: grid;
        grid-template-columns: 3% auto;
        height: 30px;
        align-items: center;
        padding-left: 25px; 
    }
    
`
const BottomSectionWrapper = styled.div`
    margin-bottom: 10px;
`
const Title = styled.div`
    padding-left: 25px;
   
    margin-bottom: 4px;
    margin-top: 8px;
`
const HangoutWrapper = styled.div`

`
const BottomwIconsWrapper = styled.div`
    display: flex;
    justify-content: center;
    color:gray;
    border-top: 1px solid lightgray;
    margin-top:10px;

    .MuiSvgIcon-root{
        padding:2px;

    }

`
const SidebarButtonItem = styled.div`
    display: grid;
    grid-template-columns: 3% auto ;
    color: gray;
    padding: 5px 25px;

    border-radius: 0 100px 100px 0;
    cursor: pointer;
    margin-right: 8px;
  

    :hover{
        background-color: #f5f7f7;
    }
`