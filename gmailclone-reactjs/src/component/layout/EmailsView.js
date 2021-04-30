import React from 'react';
import styled from 'styled-components';
import CheckBox from '@material-ui/core/CheckBox';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RefreshIcon from '@material-ui/icons/Refresh';
import IconButton from '@material-ui/core/IconButton';

const EmailsView = () => {
    return (
        <Wrapper>
            <TopWrapper>
                <CheckBox/>

                    <IconButton>
                        <RefreshIcon/>
                    </IconButton>

                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                
            </TopWrapper>

            <EmailsContainer>
            
            
            </EmailsContainer>
        
        </Wrapper>
    )
}

export default EmailsView

const Wrapper = styled.div`

`
const TopWrapper = styled.div`
    padding-left: 20px;
    height: 48px;
`

const  EmailsContainer = styled.div`

`