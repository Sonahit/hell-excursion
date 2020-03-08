import React, { ReactElement, useState } from 'react'
import Layout from '@components/Layout'
import Header from '@components/Header'
import Home from '@components/Home';
import Footer from '@components/Footer'
import './App.scss';


export default function App(): ReactElement {
  const [epilespy, setEpilespy] = useState(false);
  return (
    <Layout>
      <button onClick={() => setEpilespy(!epilespy)}>{epilespy ? 'Stop epilepsy' : 'Toggle epilepsy'}</button>
      <Header/>
      <Home epilepsy={epilespy}/>
      <Footer/>
    </Layout>
  )
}

