import React from 'react'
import HookWalletConnect from '../hooks/walletConnect';
import {network} from '../hooks/config';
import { resetWalletConnector, injected } from '../hooks/walletConnect'

const ConnectModal = ({ isVisible, setShowModal, showModal, connectors, chain, chain_id, getWalletConnect, getChainID, getchain, setChain, injected, setChain_id, web3reactContext}) => {
    // const [getWalletConnect, getChainID, getchain,  setChain, injected, setChain_id ] = HookWalletConnect()

    const walletconnect = getWalletConnect()

    async function openModal(connectorId){
        console.log("chain_id: " + chain_id)
        if(connectorId == "walletconnect"){
            try{
                resetWalletConnector(walletconnect)
                await web3reactContext.activate(walletconnect).then(()=>setShowModal(!showModal))                
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
          console.log(web3reactContext.account)
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
    
          
    if(!isVisible) return null
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items center text-black'>

        <div
        className="w-[90%] pb-10 max-h-[453px] py-6 outline-none max-w-xs mx-auto absolute
        left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-white rounded-xl font-sans transition
            duration-300"
        >
        <div className="relative text-xl font-medium text-center mt-2 mb-6 p-4">
            <div className="text-center">Connect with</div>
            <button
            onClick={()=>setShowModal(!showModal)}
            // onClick={onDismiss}
            className="absolute top-4 right-4 p-1 bg-gray-50/40 inline-block rounded-full
                hover:bg-gray-50/90 cursor-pointer"
            >
            <span  className="h-8 w-8">x</span>
            </button>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-3">
            {connectors.map((wallet) => (
            <div key={wallet.title} className="w-20 inline-block m-2">
                <button
        className="flex items-center flex-col h-auto justify-center mx-auto disabled:opacity-60 disabled:cursor-not-allowed hover:opacity-90 hover:scale-110 transition-all duration-300"
        onClick={() => {
            const isIOS =false
            // @ts-ignore
            // /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

            // Since iOS does not support Trust Wallet we fall back to WalletConnect
            if (wallet.title === "Trust Wallet" && isIOS) {
            // login(ConnectorNames.WalletConnect);
            } else {
            // login(wallet.connectorId);
            openModal(wallet.connectorId)
            }

            // localStorage.setItem(walletLocalStorageKey, walletConfig.title);
            // localStorage.setItem(
            // connectorLocalStorageKey,
            // walletConfig.connectorId
            // );
            // onDismiss();
        }}
        // id={`wallet-connect-${title.toLocaleLowerCase()}`}
        // disabled={isConnecting}
        >
        <wallet.icon width="40px" className="mb-1"></wallet.icon>
        <div className="text-xs text-center">{wallet.title}</div>
        </button>
                {/* <WalletCard
                walletConfig={wallet}
                login={login}
                onDismiss={onDismiss}
                isConnecting={isConnecting}
                /> */}
            </div>
            ))}
            {/* {!showMore && <MoreWalletCard onClick={() => setShowMore(true)} />} */}
        </div>
        {/* {active && (
            <button
            className="bg-red-300 absolute bottom-0 block w-full rounded-b-xl outline-none text-red-600 font-bold py-2 px-2 hover:bg-red-400 hover:text-red-700 focus:bg-red-400 focus:text-red-700 focus-within:bg-red-400 focus-within:text-red-700 transition duration-300"
            onClick={() => {
                onDismiss();
                logout();
            }}
            >
            Disconnect Wallet
            </button>
        )} */}
        </div>
    </div>

  )
}

export default ConnectModal
