import React from 'react'
import connectors from '../hooks/config';
import {useWeb3React} from "@web3-react/core"
import ConnectModal from './ConnectModal';
import { useState } from 'react';
import HookWalletConnect from '../hooks/walletConnect';

const ConnectWalletButton = () => {
  const web3reactContext = useWeb3React();

    const [showModal, setShowModal] = useState(false)
    const [getWalletConnect, getChainID, getchain, chain, setChain, injected, setChain_id, chain_id ] = HookWalletConnect()

    const selectNetwork =(e)=>{
      console.log("chain_id: " + chain_id)
      const target = e.target
      let val = target.value
      let d = target.getAttribute("data-net")
      console.log(val + " d: " + d)
      setChain_id(d)
      setChain(val)
      console.log("chain_id: " + chain_id)
    }
    

  return (

  <div>
   <div className='block m-auto w-6/12 p-4 text-center'>
    <p>Connect Wallet</p>
    <p>{web3reactContext?.account}</p>

    
    <input type="radio" onChange={(e)=>selectNetwork(e)} data-net="25" name="network" value="cronos" />Cronos
    <input type="radio" onChange={(e)=>selectNetwork(e)} data-net="56" name="network" value="bsc" />BSC
    <input type="radio" onChange={(e)=>selectNetwork(e)} data-net="137" name="network" value="polygon"/>polygon
   </div>
      <button className='w-20 block m-auto bg-yellow-300 p-2 rounded-lg' onClick={()=> setShowModal(!showModal)}>Connect</button>
      {web3reactContext?.account? (
      <button className='w-20 block m-auto bg-yellow-200 p-2 rounded-lg' onClick={()=> {web3reactContext.deactivate();}}>Disconnect</button>
      ): ""}

    <div>
      <ConnectModal 
        getWalletConnect={getWalletConnect} 
        getChainID={getChainID}
        getchain={getchain}
        chain={chain}
        setChain={setChain}
        injected={injected}
        setChain_id={setChain_id}
        chain_id={chain_id} 
        isVisible={showModal} 
        setShowModal={setShowModal} 
        showModal={showModal} 
        connectors={connectors}
        web3reactContext={web3reactContext} />
</div>
  </div>
  )
}

export default ConnectWalletButton