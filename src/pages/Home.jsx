//creates the rows for title types(Popular, TopRated etc...)
import React from 'react'
import Row from '../components/Row'
import requests from '../Requests'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <>
        <Hero />
        <Row rowID='1' title='UpComing' fetchURL={requests.requestUpcoming} />
        <Row rowID='2' title='Popular' fetchURL={requests.requestPopular} />
        <Row rowID='3' title='Trending' fetchURL={requests.requestTrending} />
        <Row rowID='4' title='Top Rated' fetchURL={requests.requestTopRated} />
        <Row rowID='5' title='Horror' fetchURL={requests.requestHorror} />
    </>
  )
}

export default Home