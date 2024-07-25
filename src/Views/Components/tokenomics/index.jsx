import React from 'react'

import emotionStyled from '@emotion/styled'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import bg from '../../../assets/tokenomics-bg.jpg'
import dexscreener from '../../../assets/dexscreener.jpg'
import dextools from '../../../assets/dextools.jpg'
import uniswap from '../../../assets/uniswap.jpg'
import tokenomicsImg from '../../../assets/tokenomics.png'
import { MenuLink } from '../LockerMenu/styles'
import { CA, dexScreenerLink, dexToolsLink, uniSwapLink } from '../../../links'

const SectionWrapper = emotionStyled(Box)`
    // height: 100vh;
    // max-height: 1000px;
    background: url(${bg});
    background-position: top center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
    padding: 100px 0;
    // @media (max-width: 900px){
    //     max-height: unset;
    //     height: unset;
    //     padding: 50px 0;
    // }
`
const GridEx = emotionStyled(Grid)`
    background-color: black;
    background-image: url(${tokenomicsImg});
    background-position: top left;
    background-size: contain;
    background-repeat: no-repeat;
    @media (max-width: 600px){
        background-image: unset;
    }
`
const Image = emotionStyled.img`
    width: auto;
    height: 76vh;
    max-height: 800px;

    @media (max-width: 600px){
        width: 100%;
        max-width: 400px;
        height: auto;
    }
`

const Tokenomics = () => {
  return (
    <SectionWrapper>
        <Container maxWidth="xl">
            <GridEx container >
                <Grid xs={12} sm={6}>
                    {/* <Image src={tokenomicsImg} /> */}
                </Grid>
                <Grid xs={12} sm={6} md={5} container paddingY={{xs:5, sm:8}}>
                    <Grid xs={12}>
                        <Typography variant='h2' color='#fff' paddingX={1} textAlign={{xs: 'center', sm: 'left'}} fontFamily='primary'>Tokenomics</Typography>
                    </Grid>
                    <Grid xs={6} padding={{xs:1, sm:2}}>
                        <Box backgroundColor="#fff" padding={2} borderRadius={1}>
                            <Typography variant='body2'>Name</Typography>
                            <Typography variant='h5' textAlign="right">Main Character</Typography>
                        </Box>
                    </Grid>
                    <Grid xs={6} padding={{xs:1, sm:2}}>
                        <Box backgroundColor="#fff" padding={2} borderRadius={1}>
                            <Typography variant='body2'>Ticker</Typography>
                            <Typography variant='h5' textAlign="right">$MC</Typography>
                        </Box>
                    </Grid>
                    <Grid xs={6} padding={{xs:1, sm:2}}>
                        <Box backgroundColor="#fff" padding={2} borderRadius={1}>
                            <Typography variant='body2'>Liquidity</Typography>
                            <Typography variant='h5' textAlign="right">Locked</Typography>
                        </Box>
                    </Grid>
                    <Grid xs={6} padding={{xs:1, sm:2}}>
                        <Box backgroundColor="#fff" padding={2} borderRadius={1}>
                            <Typography variant='body2'>Ownership</Typography>
                            <Typography variant='h5' textAlign="right">Renounced</Typography>
                        </Box>
                    </Grid>
                    <Grid xs={12} padding={{xs:1, sm:2}}>
                        <Box backgroundColor="#fff" padding={2} borderRadius={1}>
                            <Typography variant='body2'>Contract: {CA}</Typography>
                        </Box>
                    </Grid>
                    <Grid xs={12} paddingX={{xs:1, sm:2}}>
                        <Box style={{marginTop: 8}}>
                            <MenuLink href={dexScreenerLink} target="_blank" style={{padding: 0, marginRight: 15}}>
                                <img src={dexscreener} style={{width: 45, height:45}}/>
                            </MenuLink>
                            <MenuLink href={dexToolsLink} target="_blank" style={{padding: 0, marginRight: 15}}>
                                <img src={dextools} style={{width: 45, height:45}}/>
                            </MenuLink>
                            <MenuLink href={uniSwapLink} target="_blank" style={{padding: 0}}>
                                <img src={uniswap} style={{width: 45, height:45}}/>
                            </MenuLink>
                        </Box>
                    </Grid>
                </Grid>
            </GridEx>
        </Container>
    </SectionWrapper>
  )
}

export default Tokenomics