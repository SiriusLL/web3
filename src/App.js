import "./App.css";
import mintExampleAbi from "./mintExamleAbi.json";
import {ethers, BigNumber} from "ethers";
import {useEffect, useState} from "react";

mintExampleAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const

function App() {
  // connecting
  const [accounts, setAccounts] = useState([]);

  async function connectAccounts() {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts"
      });
      setAccounts(accounts);
    }
  }

  useEffect(() => {
    connectAccounts();
  }, []);

  
  return <div className="App"></div>;
}

export default App;
