import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import {InjectedConnector} from '@web3-react/injected-connector'
import { useState } from 'react';

export default function HookWalletConnect (){
  const RPC_URLS = {
    137: "https://polygon-rpc.com/",
  };
  const [chain_id, setChain_id] = useState(25)
  const getChainID = ()=> {return chain_id}
    
  function getWalletConnect(){
    const walletconnect = new WalletConnectConnector({
      rpc: { 137: RPC_URLS[137] },
      pollingInterval: 15000,
      qrcode: true,
      chainId: getChainID(),
    })
    return walletconnect
  } 
  
  const [chain, setChain] = useState("cronos")
  function getchain () {return chain}

  return [getWalletConnect, getChainID, getchain, chain, setChain, injected, setChain_id, chain_id]

}

  //metamask
export const injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42],
  })

export function resetWalletConnector(connector) {
    if (connector && connector instanceof WalletConnectConnector) {
      connector.walletConnectProvider = undefined;
    } 
  }

  const checkInfoSimple = async () => {
    try {
        console.log('web3reactContext');
        console.log(web3reactContext);
    } catch (ex) {
        console.log(ex);
    }
};