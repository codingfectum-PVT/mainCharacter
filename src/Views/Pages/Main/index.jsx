import React from 'react'
import LockerMenu from '../../Components/LockerMenu'
import { PageWrapper } from '../../Styles/style'
import Header from '../../Components/header'
import About from '../../Components/about'
import Tokenomics from '../../Components/tokenomics'
import Footer from '../../Components/Footer'

const MainPage = (props) => {
  return (
    <PageWrapper>
        {/* <LockerMenu /> */}
        <Header/>
        <About />
        <Tokenomics />
        <Footer />
    </PageWrapper>
  )
}

export default MainPage