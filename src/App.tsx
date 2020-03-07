import React, { ReactElement, lazy } from 'react'
import Footer from '@components/common/Footer'
import Header from '@components/common/Header'
import Layout from '@components/common/Layout'

import './App.scss';

export default function App(): ReactElement {
  return (
    <Layout>
      <Header/>
      <main className="main">
        Hello
      </main>
      <Footer/>
    </Layout>
  )
}

