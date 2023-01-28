import React from 'react'
import {useWeb3React} from "@web3-react/core"
import HookWalletConnect, { resetWalletConnector, injected } from '../hooks/walletConnect';
import connectors, {network} from '../hooks/config';

const ConnectWalletButton = () => {
    const web3reactContext = useWeb3React();
    const [getWalletConnect, getChainID, getchain, chain, setChain, chain_id, setChain_id ] = HookWalletConnect()
    const walletconnect = getWalletConnect()
    async function openModal(connectorId){
        if(connectorId == "walletconnect"){
            try{
                resetWalletConnector(walletconnect)
                await web3reactContext.activate(walletconnect)                
            }catch(x){
              console.log("error: " + x)
            }
        }
        if(connectorId == "metamask"){
            try{
                await web3reactContext.activate(injected)
                setChain("ethereum")
                console.log(chain)
                await changeNetwork(chain)
            }catch(err){
                console.log(err)
            }
      }
    }

    function disconnect(){
    try{
        web3reactContext.deactivate()
    }catch(e){
        console.log(e)
    }
    }

      const changeNetwork = async (networkName) => {
        if(window.ethereum){
          try {
            if (!window.ethereum) throw new Error("No crypto wallet found");
            await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                params: [
                ...network[networkName]
                ]
              });
        } 
        catch (err) {
          
            console.log("Error message: " + err.message);
          await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                ...network[networkName]
              }
            ]
          });
        }
        }
      };

      const selectNetwork =(e)=>{
        let val = e.target.value
        let d = e.target.getAttribute("data-net")
        console.log(d)
        console.log(val)
        setChain_id(d)
        setChain(val)
      }

      


  return (
   <div className='block m-auto w-10 bg-green-400'>
    <p>item</p>
    {connectors.map((item, index)=>{
        return(
            <div 
                key={index} 
                style={{display: "flex", flexDirection: "column"}}
                onClick={()=>openModal(`${item.connectorId}`)}
                >
            <item.icon  width="40px" className="mb-1"></item.icon>
            <span>{item.title}</span>


            </div>
        )
    })}
    <input type="radio" onChange={(e)=>selectNetwork(e)} data-net="25" name="network" value="cronos" />Cronos
    <input type="radio" onChange={(e)=>selectNetwork(e)} data-net="56" name="network" value="bsc" />BSC
    <input type="radio" onChange={(e)=>selectNetwork(e)} data-net="137" name="network" value="polygon"/>polygon
     <button onClick={()=>openModal()}>Connect</button>
    <button onClick={()=>disconnect()}>Disconnect</button>
   </div>
  )
}

export default ConnectWalletButton