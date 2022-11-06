
//functions to interact with the CuySWAP smart contract

async function setPCUYTokenAddress() {

  try
  {
  
    var contract = new web3.eth.Contract(CUYSWAP_ABI, CUYSWAP_ADRRESS);
    info = $("#newInfo").val();
   await contract.methods.setPCUYTokenAddress(info).send({ from: account }).then(function (tx) {
      console.log("Transaction: ", tx);
      //Modify here to add information to the user
    });
  

} catch (error) {
  // user rejected permission
  console.log(error);
  
}
  

}


function PachacuyToken() {
 
    var contract = new web3.eth.Contract(CUYSWAP_ABI, CUYSWAP_ADRRESS);
    contract.methods._PachacuyToken().call().then(function (info) {
      console.log("info: ", info);
      document.getElementById('lastInfo').innerHTML = info;
    });
  

}