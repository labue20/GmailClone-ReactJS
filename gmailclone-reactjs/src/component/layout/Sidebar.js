import React from 'react'
import styled from 'styled-components';
import Compose from '../buttons/Compose';

const Sidebar = () => {
    return (
        <Wrapper>
            <ComposeWrapper>
                {/*Compose button*/}
                <Compose/>
            </ComposeWrapper>

            <sideButtonWrapper>
            
            </sideButtonWrapper>

            <MeetWrapper>

            </MeetWrapper>

            <HanggoutWrapper>
            </HanggoutWrapper>

            <BottomwIconsWrapper>
            
            </BottomwIconsWrapper>
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`

`
const ComposeWrapper = styled.div``

const sideButtonWrapper = styled.div`

`
const MeetWrapper = styled.div`

`
const HanggoutWrapper = styled.div`

`
const BottomwIconsWrapper = styled.div`

`