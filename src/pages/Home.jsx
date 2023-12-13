import React from 'react'
import Hero from '../components/Hero'
import Row from '../components/Row'
import requests from '../Requests'
import RateMovie from '../components/RateMovie'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <RateMovie />   
        <Hero />
        <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/> <br/>
        <Row rowID='1' title='UpComing' fetchURL={requests.requestsUpcoming} />
        <Row rowID='2' title='Popular' fetchURL={requests.requestsPopular} />
        {/* <Row rowID='3' title='Trending' fetchURL={requests.requestTrending} /> */}
        <Row rowID='4' title='Top Rated' fetchURL={requests.requestsTopRated} />
        {/* <Row rowID='5' title='Horror' fetchURL={requests.requestHorror} /> */}
        <Footer />
        </>
  )
}

export default Home