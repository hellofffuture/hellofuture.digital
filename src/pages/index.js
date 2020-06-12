import React from 'react'
import { Helmet } from 'react-helmet'

import logo from '../images/logo.svg'

const Home = () => (
  <>
    <Helmet
      title='hello future'
      meta={[
        {
          name: 'description',
          content: 'Building digital products since 1MBit was considered fast.'
        }
      ]}
      htmlAttributes={{ lang: 'de' }}
    />
    <div className='container mx-auto flex justify-center h-screen'>
      <img className='w-1/2' src={logo} alt='hello future logo' />
    </div>
  </>
)

export default Home
