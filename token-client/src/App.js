
import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';
import Enockcoin from './contracts/Enockcoin.json';
function App() {


      useEffect(()=>{

        lireweb3();
      },[])


      const [count,setCount]=useState();
      const [instance,setInstance]=useState();
      const [balance,setBalance]=useState();
      const [beneficiaire,setBeneficaire]=useState();
      const [montant,setMontant]=useState();
      const lireweb3=async()=>{

            const web3= new Web3(Web3.givenProvider);
            await  window.ethereum.enable();
            const accounts= await  web3.eth.getAccounts();
            setCount(accounts);
            const networkid= await web3.eth.net.getId();
            const deployer= Enockcoin.networks[networkid];

            const mycontract= new web3.eth.Contract(Enockcoin.abi, deployer && deployer.address);
            setInstance(mycontract);            

      }


      const afficherbalance= async()=>{

         const bal=   await instance.methods.balanceOf(count[0]).call();
        setBalance(bal)

      }

      const tranferertoken=async(e)=>{
          e.preventDefault();
          await instance.methods.transfer(beneficiaire,montant).send({from:count[0]})

      }

   

  
  return (
    <div className="App">
    {count}
      <header className="App-header">
          <p>Votre balance est :  {balance} </p>
          <button type="button" onClick={afficherbalance} >Verifer la balance </button>
        <img src={logo} className="App-logo" alt="logo" />

          <form  onSubmit={tranferertoken}>
              <input type="text" onChange={e=>setBeneficaire(e.currentTarget.value)}/>
              <input type="text" onChange={e=>setMontant(e.currentTarget.value)}/>
              <button>Transferer</button>
          
          </form>

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     
     
    </div>
  );
}

export default App;
