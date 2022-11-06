
//functions to interact with the CuySWAP smart contract

async function setPCUYTokenAddress() {

  try {

    var contract = new web3.eth.Contract(CUYSWAP_ABI, CUYSWAP_ADRRESS);
    info = $("#PCUYTokenAddress").val();
    await contract.methods.setPCUYTokenAddress(info).send({ from: account }).then(function (tx) {
      console.log("Transaction: ", tx);
      //Modify here to add information to the user
    });


  } catch (error) {
    // user rejected permission
    console.log(error);

  }


}


function getAuthorizedPCUY() {

  var contract = new web3.eth.Contract(CUYSWAP_ABI, CUYSWAP_ADRRESS);
  playerAddress = $("#playerAddress").val();

  contract.methods.getAuthorizedPCUY(playerAddress).call().then(function (info) {
    console.log("playerAddress: ", info);
    document.getElementById('playerAddressInfo').innerHTML = info;
  });


}


function PachacuyToken() {

  var contract = new web3.eth.Contract(CUYSWAP_ABI, CUYSWAP_ADRRESS);
  contract.methods._PachacuyToken().call().then(function (info) {
    console.log("info: ", info);
    document.getElementById('lastInfo').innerHTML = info;
  });


}


//Call the method of exchanging Pachacuy Tokens to USDC
async function swapPCUY_To_USDC() {

  try {

    var contract = new web3.eth.Contract(CUYSWAP_ABI, CUYSWAP_ADRRESS);
    info = $("#PCUY_AMOUNT").val();
    await contract.methods.swapPCUY_To_USDC(info).send({ from: account }).then(function (tx) {
      console.log("Transaction: ", tx);
      //Modify here to add information to the user
    });


  } catch (error) {
    // user rejected permission
    console.log(error);

  }


}



//SWAP  USDC token for the Pachacuy token
async function swapUSDC_To_PCUY() {

  try {

    var contract = new web3.eth.Contract(CUYSWAP_ABI, CUYSWAP_ADRRESS);
    amount = $("#USDC_AMOUNT").val();
    await contract.methods.swapUSDC_To_PCUY(amount).send({ from: account }).then(function (tx) {
      console.log("Transaction: ", tx);
      //Modify here to add information to the user
    });


  } catch (error) {
    // user rejected permission
    console.log(error);

  }


}