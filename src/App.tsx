import React, { ReactElement, lazy } from 'react'
import Layout from '@components/Layout'
import Header from '@components/Header'
import Home from '@components/Home';
import Footer from '@components/Footer'
import './App.scss';


export default function App(): ReactElement {
  return (
    <Layout>
      <Header/>
      <Home/>
      <Footer/>
    </Layout>
  )
}

