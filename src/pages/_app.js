import { Web3ReactProvider } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers';

import '../styles/globals.css'

export default function App({ Component, pageProps }) {

  const getLibrary = (provider) => {
		const library = new Web3Provider(provider, 'any');
		// library.pollingInterval = 15000;
		return library;
	};
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>

  )
}
