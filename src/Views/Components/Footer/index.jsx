import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import { MenuLink } from '../LockerMenu/styles'
import tg from '../../../assets/tg.jpg'
import x from '../../../assets/x.jpg'
import { tgLink, xLink } from '../../../links'

const Footer = () => {
  return (
    <Container maxWidth="xl">
        <Grid container alignItems='center' paddingTop={2} paddingBottom={2}>
            <Grid xs={12} sm={6} textAlign={{xs: 'center',sm:'left'}}>
                <Box style={{marginTop: 15}}>
                    <MenuLink href={tgLink} target="_blank" style={{padding: 0, marginRight: 15}}>
                        <img src={tg} style={{width: 45, height:45}}/>
                    </MenuLink>
                    <MenuLink href={xLink} target="_blank" style={{padding: 0, marginRight: 20}}>
                        <img src={x} style={{width: 45, height:45}}/>
                    </MenuLink>
                </Box>
            </Grid>
            <Grid xs={12} sm={6} textAlign={{xs: 'center',sm:'right'}}>
                <MenuLink href='mailto:info@maincharacter.com' style={{padding: 0,textTransform: 'lowercase', marginRight: 20}}>
                info@maincharacter.com
                </MenuLink>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Footer