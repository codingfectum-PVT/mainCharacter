import emotionStyled from '@emotion/styled'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import bg from '../../../assets/header-bg.jpg'
import bgMb from '../../../assets/header-mb.png'
import header from '../../../assets/header.png'
import textImage from '../../../assets/text.png'
import { uniSwapLink } from '../../../links'

const SectionWrapper = emotionStyled(Box)`
    min-height: 100vh;
    background: url(${bg});
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
    
    
    @media (max-width: 600px){
        background: url(${bgMb});
        background-position: top center;
        background-size: cover;
        background-repeat: no-repeat;

    }
`
const RotatedText = emotionStyled(Box)`
    transform: rotate(354deg);
`
const TypographyEX = emotionStyled(Typography)`
    
`
const TextImage = emotionStyled.img`
    width: 100%;
    height: auto;
`
const Image = emotionStyled.img`
    width: 50vw;
    height: auto;
    position: absolute;
    right: -10px;
    bottom: -30px;
    
    @media (max-width: 600px){
        display: none;
    }
`
const BoxX = emotionStyled(Box)`
    margin-top: -6%;
    margin-left: 7%;
`
const ButtonX = emotionStyled(Button)`
        box-shadow: inset 0px 3px 6px rgba(230, 255, 0, 0.68);
    background: #FF550C;
    border: 4px solid black;
    font-size: 18px;
    font-weight: 800;
    padding: 5px 25px;
    border-radius: 0;
    color: #fff;
    margin-top: 15px;
`
const Header = () => {
  return (
    <SectionWrapper>
        <Container maxWidth="xl">
            <Grid container>
                <Grid xs={12}>
                    <RotatedText>
                        <TextImage src={textImage} alt="Main Character" />
                        <BoxX>
                            <Typography variant='body1' style={{textShadow: '0 0 5px black'}} color="#fff" maxWidth={300}>Join the Main Character (MC) movement and escape the NPC life. It's time to take control and dominate your journey. Welcome to a community that celebrates true individuality.</Typography>
                            <ButtonX href={uniSwapLink} target="_blank">Buy $MC</ButtonX>
                        </BoxX>
                    </RotatedText>
                </Grid>
            </Grid>
        </Container>
        <Image src={header} alter="Main Character" />
    </SectionWrapper>
  )
}

export default Header