import emotionStyled from '@emotion/styled'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import stars from '../../../assets/stars.png'
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
    padding-bottom: 10%;
    
    
    @media (max-width: 900px){
        background: url(${bgMb});
        background-position: bottom center;
        background-size: cover;
        background-repeat: no-repeat;
    }
`
const RotatedText = emotionStyled(Box)`
    transform: rotate(354deg);
    >img{
        margin-left: -2%;
        @media (max-width: 600px){
            margin-left: -4%;
        }
    }
`

const RotatedTextB = emotionStyled(Box)`
    transform: rotate(354deg);
    z-index:2;
    position: relative;
`
const TypographyEX = emotionStyled(Typography)`
    
`
const TextImage = emotionStyled.img`
    width: 100%;
    height: auto;
`
const Image = emotionStyled.img`
    width: 60vw;
    height: auto;
    position: absolute;
    right: -10px;
    bottom: -30px;
    
    @media (max-width: 900px){
        display: none;
    }
`
const ImageB = emotionStyled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    mix-blend-mode: lighten;
`
const BoxX = emotionStyled(Box)`
    margin-top: -6%;
    margin-left: 7%;
    >p{
        max-width: 30vw;
        font-size: 2vw !important;

        
        @media (max-width: 900px){
            max-width: 90vw;
            font-size: 32px !important;
        }
        @media (max-width: 600px){
            max-width: 90vw;
            font-size: 20px !important;
        }
    }
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
        {/* <Container maxWidth="xl"> */}
            {/* <Grid container> */}
                {/* <Grid xs={12}> */}
                    <RotatedText>
                        <TextImage src={textImage} alt="Main Character" />
                    </RotatedText>
                    <RotatedTextB>
                        <BoxX>
                            <Typography variant='body1' style={{textShadow: '0 0 5px black'}} color="#fff">Join the Main Character (MC) movement and escape the NPC life. It's time to take control and dominate your journey. Welcome to a community that celebrates true individuality.</Typography>
                            <ButtonX href={uniSwapLink} target="_blank">Buy $MC</ButtonX>
                        </BoxX>
                    </RotatedTextB>
                {/* </Grid> */}
            {/* </Grid> */}
        {/* </Container> */}
        <Image src={header} alter="Main Character" />
        <ImageB src={stars} alter="Stars" />
    </SectionWrapper>
  )
}

export default Header