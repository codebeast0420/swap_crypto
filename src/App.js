import './App.css';
import { useState, useEffect } from 'react';
const ethers = require("ethers");

function App() {
  const [provider, setProvider] = useState(undefined);
  const [signer, setSigner] = useState(undefined);
  const [signerAddress, setSingerAddress] = useState(undefined);

  useEffect(() => {
    const onLoad = async () => {
      const provider = await new ethers.BrowserProvider(window.ethereum);
      setProvider(provider);
    }
    onLoad()
  }, [])

  const getSigner = async provider => {
    provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    setSigner(signer);
  }

  const isConnected = () => signer !== undefined;
  const getWalletAddress = () => {
    signer.getAddress()
    .then(address => {
      setSingerAddress(address)

      // todo: connect weth and uni contracts
    })
  }


  if(signer !== undefined) {
    getWalletAddress();
  }

  return (
    <div className="App">
      <div className='appNav'>
        <div className='my-2 buttonContainer buttonContainerTop'></div>
      </div>
    </div>
  );
}

export default App;
