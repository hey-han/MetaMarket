import { useState } from 'react'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'


export default async function AuthMetaMask() {
  if (window.ethereum) {
    console.log("window.ethereum detected");
    const [valid, setValid] = useState(false);
    const web3Modal = new Web3Modal()
    const connection = await web3Modal.connect()
    const provider = new ethers.providers.Web3Provider(connection)    
    const signer = provider.getSigner()
    const currentAccount = await signer.getAddress()
    console.log("Account:", currentAccount);
    if (currentAccount == "0x8Fa35DCf283116870A27720933689A2e920A6fa4") {
      setValid(true)
      console.log("the MetaMask account is valid")
    } else {
      console.log("Plase change to the valid MetaMask account!")
    }
    return (console.log("abc"))
  } else {
    console.log("window.ethereum not detected");
    return ("Please install MetaMask to your browser!")
  }
}
