import { useState, useEffect } from 'react'
import Head from 'next/head'
import Web3 from 'web3' 
import styles from '../styles/Home.module.css'
//import dynamic from 'next/dynamic'
//import 'bulma/css/bulma.css' 

export default function Home() {

  const [web3, setWeb3] = useState()
  const [error, setError] = useState('')
  const [successMsg, setSuccessMsg] = useState('')

  const connectWalletHandler = async () => {
    setError('')
    setSuccessMsg('')
    /* check if MetaMask is installed */
    if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
      try {
        /* request wallet connection */
        await window.ethereum.request({ method: "eth_requestAccounts"})
        /* create web3 instance & set to state */
        const web3 = new Web3(window.ethereum)
        /* set web3 instance in React state */
        setWeb3(web3)
        /* get list of accounts */
        const accounts = await web3.eth.getAccounts()
        /* set account 1 to React state */
        setAddress(accounts[0])

        /* create local contract copy */
        const lc = lotteryContract(web3)
        setLcContract(lc)

        window.ethereum.on('accountsChanged', async () => {
          const accounts = await web3.eth.getAccounts()
          console.log(accounts[0])
          /* set account 1 to React state */
          setAddress(accounts[0])
        })
      } catch(err) {
        setError(err.message)
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask")
    }
  }

  return (
    
    <div>
      <Head>
        <title>Group Saving dApp</title>
        <meta name="description" content="Decentralized group saving based on the concept of ROSCAs" />
        <link rel="icon" href="public/favicon.ico" />
      </Head>

      <main className>

        <div className="container">
        <nav className="navbar mt-3" role="navigation" aria-label="main navigation">
          <div className="navbar-menu"><div className="navbar-start">
            <div className="navbar-item"><strong>Group Saving dApp</strong></div></div></div>

          <div className="navbar-end"><div className="navbar-item">
            <div className="buttons">
            <button onClick={connectWalletHandler} className="button is-ghost">Connect Wallet</button>
            <button className="button is-link">Contribute 0.01 ETH</button>
              </div></div></div>
        </nav>
        
        <div className="notification mx-3 mt-3 mb-6">
          Hello, welcome to version 1 of the group saving decentralized app, based on the concept of ROSCAs (Rotating Savings and Credit Association). Here’s how it works: four people contribute 0.01 ETH every week for four weeks. Each week, one member of the group will receive the entire balance, following the order of transactions. Future features may include: interest, custom rules, create your own groups, and more.  
        </div>

        <div className="columns">
          <div className="column is-7 mx-3">
            <p>SAVINGS</p><break></break>
            <h1 className="title">0.01 ETH</h1>
          </div> 

          <div className="column is-5 mb-4 mx-3">
            <p>MEMBERS</p>
            <ol className="ml-4">
              <li>0x1c73d1074d779a7b64fede19313ac53c8fd533bf</li>
              <li>0xf91A8511487E78Bf4dB3c2B10b566B92B430ecC7</li>
              <li>0xef10899B6C17747381C66Bc1BFD48679Fa682c35</li>
              <li>0xf432702bB55eD4bf9F8364f6f17F0a19b5d3451D</li>
            </ol>
          </div>
        </div>

        <div className="table-container mx-3 mb-6">
          <table className="table is-fullwidth">
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

        <footer className={styles.footer}>
          <p>Built by Christina Chen</p>
        </footer>

        </div> 
      </main>

    </div>

  )
}