import Metamask from "../Svg/Icons/Metamask";
import WalletConnect from "../Svg/Icons/WalletConnect";
// import TrustWallet from "../../Svg/Icons/TrustWallet";
// import MathWallet from "../../Svg/Icons/MathWallet";
// import TokenPocket from "../../Svg/Icons/TokenPocket";
// import BinanceChain from "../../Svg/Icons/BinanceChain";
// import SafePal from "../../Svg/Icons/SafePal";
// import Coin98 from "../../Svg/Icons/Coin98";
const connectors = [
    {
      title: "Metamask",
      icon: Metamask,
      connectorId: "metamask",
      priority: 1,
    },
    {
        title: "WalletConnect",
        icon: WalletConnect,
        connectorId: "walletconnect",
        priority: 2,
    },
    // {
    //   title: "Trust Wallet",
    //   icon: TrustWallet,
    //   connectorId: ConnectorNames.Injected,
    //   priority: 3,
    // },
    // {
    //   title: "MathWallet",
    //   icon: MathWallet,
    //   connectorId: ConnectorNames.Injected,
    //   priority: 999,
    // },
    // {
    //   title: "TokenPocket",
    //   icon: TokenPocket,
    //   connectorId: ConnectorNames.Injected,
    //   priority: 999,
    // },
  
    // {
    //   title: "Binance Chain",
    //   icon: BinanceChain,
    //   connectorId: ConnectorNames.BSC,
    //   priority: 999,
    // },
    // {
    //   title: "SafePal",
    //   icon: SafePal,
    //   connectorId: ConnectorNames.Injected,
    //   priority: 999,
    // },
    // {
    //   title: "Coin98",
    //   icon: Coin98,
    //   connectorId: ConnectorNames.Injected,
    //   priority: 999,
    // },
  ];

export const network = {
    ethereum: {
      chainId: `0x${Number(1).toString(16)}`,
      chainName: "Ethereum Mainnet",
      nativeCurrency: {
        name: "ETHEREUM",
        symbol: "ETH",
        decimals: 18
      },
      rpcUrls: ["https://mainnet.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4"],
      blockExplorerUrls: ["https://ethscan.com/"]
    },
    polygon: {
      chainId: `0x${Number(137).toString(16)}`,
      chainName: "Polygon Mainnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18
      },
      rpcUrls: ["https://polygon-rpc.com/"],
      blockExplorerUrls: ["https://polygon-rpc.com/"]
    },
    cronos: {
      chainId: `0x${Number(25).toString(16)}`,
      chainName: "Cronos Mainnet",
      nativeCurrency: {
        name: "CRONOS",
        symbol: "CRO",
        decimals: 18
      },
      rpcUrls: ["https://evm.cronos.org"],
      blockExplorerUrls: ["https://cronoscan.com/"]
    },
    bsc: {
      chainId: `0x${Number(56).toString(16)}`,
      chainName: "Binance Smart Chain Mainnet",
      nativeCurrency: {
        name: "Binance Chain Native Token",
        symbol: "BNB",
        decimals: 18
      },
      rpcUrls: [
        "https://bsc-dataseed1.binance.org",
        "https://bsc-dataseed2.binance.org",
        "https://bsc-dataseed3.binance.org",
        "https://bsc-dataseed4.binance.org",
        "https://bsc-dataseed1.defibit.io",
        "https://bsc-dataseed2.defibit.io",
        "https://bsc-dataseed3.defibit.io",
        "https://bsc-dataseed4.defibit.io",
        "https://bsc-dataseed1.ninicoin.io",
        "https://bsc-dataseed2.ninicoin.io",
        "https://bsc-dataseed3.ninicoin.io",
        "https://bsc-dataseed4.ninicoin.io",
        "wss://bsc-ws-node.nariox.org"
      ],
      blockExplorerUrls: ["https://bscscan.com"]
    }
  };

export default connectors;
