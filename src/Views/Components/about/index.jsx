import React from 'react'
import bg from '../../../assets/about-bg.jpg'
import bgMB from '../../../assets/about-mb.png'
import emotionStyled from '@emotion/styled'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import about from '../../../assets/about.png'
import aboutThink from '../../../assets/about-think.png'
import aboutThinkMB from '../../../assets/about-think-mb.png'

import tg from '../../../assets/tg.jpg'
import x from '../../../assets/x.jpg'
import { tgLink, xLink } from '../../../links'
import { MenuLink } from '../LockerMenu/styles'

const SectionWrapper = emotionStyled(Box)`
    min-height: 100vh;
    background: url(${bg});
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    // position: relative;
    overflow: hidden;
    
    @media (max-width: 600px){
        background: url(${bgMB});
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    }

`
const Image = emotionStyled.img`
    width: 80%;
    height: auto;
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 1;
`
const TextBox = emotionStyled(Box)`
    position: absolute;
    left: 18%;
    top: 10%;
    background: url(${aboutThink});
    background-size: 100% 100%;
    padding: 20px 50px 50px 20px;
    max-width: 430px;
    z-index: 2;
    
    @media (max-width: 600px){
        left: 3%; 
        background: url(${aboutThinkMB});
        background-size: 100% 100%;
        
    }  
`

const About = () => {
  return (
    <SectionWrapper>
        <Container maxWidth="xl">
            <Grid container>
                <Grid xs={12} position='relative' minHeight='100vh'>
                    <TextBox>
                        <Typography variant='body1' fontWeight={800}>Main Character empowers you to break free from the matrix. We encourage you to be the hero, not just another NPC. Join us and be an MC in your own story!</Typography>
                        <Box style={{marginTop: 15}}>
                            <MenuLink href={tgLink} target="_blank" style={{padding: 0, marginRight: 15}}>
                                <img src={tg} style={{width: 45, height:45}}/>
                            </MenuLink>
                            <MenuLink href={xLink} target="_blank" style={{padding: 0, marginRight: 20}}>
                                <img src={x} style={{width: 45, height:45}}/>
                            </MenuLink>
                        </Box>
                    </TextBox>
                </Grid>
            </Grid>
        </Container>
        
        {/* <Image src={{xs:bgMB, sm: about}} alter="About Character" /> */}
    </SectionWrapper>
  )
}

export default About