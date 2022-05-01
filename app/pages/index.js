import { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
//import dynamic from 'next/dynamic'
//import 'bulma/css/bulma.css'

export default function Home() {

  return (
    
    <div>
      <Head>
        <title>Group Saving dApp</title>
        <meta name="description" content="Decentralized group saving based on the concept of ROSCAs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className>

        <div className="container">
        <nav class="navbar mt-3" role="navigation" aria-label="main navigation">
          <div class="navbar-menu"><div class="navbar-start">
            <div class="navbar-item"><strong>Group Saving dApp</strong></div></div></div>

          <div class="navbar-end"><div class="navbar-item">
            <div class="buttons">
            <button className="button is-ghost">Connect Wallet</button>
            <button className="button is-link">Contribute 0.01 ETH</button>
              </div></div></div>
        </nav>
        
        <div class="notification mx-3 mt-3 mb-6">
          Hello, welcome to version 1 of the group saving decentralized app, based on the concept of ROSCAs (Rotating Savings and Credit Association). Here’s how it works: four people contribute 0.01 ETH every week for four weeks. Each week, one member of the group will receive the entire balance, following the order of transactions. Future features may include: interest, custom rules, create your own groups, and more.  
        </div>

        <div className="columns">
          <div className="column is-two-thirds mx-3">
            <p>SAVINGS</p><break></break>
            <h1 class="title">0.01 ETH</h1>
          </div> 

          <div className="column is-one-third mb-4 mx-3">
            <p>MEMBERS</p>
            <ol class="ml-4">
              <li>Coffee</li>
              <li>Tea</li>
              <li>Milk</li>
            </ol>
          </div>
        </div>

        <div class="table-container mx-3 mb-6">
          <table class="table is-fullwidth">
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>04/24/2022</td>
                <td>0.04 ETH</td>
                <td>0xef10899B6C17747381C66Bc1BFD48679Fa682c35</td>
              </tr>
              <tr>
                <td>04/17/2022</td>
                <td>0.04 ETH</td>
                <td>0xf432702bB55eD4bf9F8364f6f17F0a19b5d3451D</td>
              </tr>
              <tr>
                <td>04/10/2022</td>
                <td>0.04 ETH</td>
                <td>0xf91A8511487E78Bf4dB3c2B10b566B92B430ecC7</td>
              </tr>
              <tr>
                <td>04/03/2022</td>
                <td>0.04 ETH</td>
                <td>0x1c73d1074d779a7b64fede19313ac53c8fd533bf</td>
              </tr>
            </tbody>
          </table>
        </div> 

        </div> 
      </main>

      <footer className={styles.footer}>
        <p>Built by Christina Chen</p>
      </footer>
    </div>

  )
}