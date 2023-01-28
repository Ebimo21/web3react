import { MetaMask } from '@web3-react/metamask';

const CHAIN_ID = 1
const RPC_URLS = {
    1: 'https://mainnet.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4',
    // 4: 'https://rinkeby.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4'
};


export const metamask = new MetaMask({
    rpc: { 1: 'https://mainnet.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4' },
    pollingInterval: 15000,
    chainId: CHAIN_ID,
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