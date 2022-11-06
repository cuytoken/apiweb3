//Functions for the Pachacuy Token smart contract

async function authorizeOperator() {

    try {

        var contract = new web3.eth.Contract(PACHACUY_TOKEN_ABI, PACHACUY_TOKEN_ADRRESS);
        info = CUYSWAP_ADRRESS;
        await contract.methods.authorizeOperator(info).send({ from: account }).then(function (tx) {
            console.log("Transaction: ", tx);
            //Modify here to add information to the user
        });


    } catch (error) {
        // user rejected permission
        console.log(error);

    }


}



//Gets the number of PCUY tokens the player has
async function Pachacuy_balanceOf() {

    var contract = new web3.eth.Contract(PACHACUY_TOKEN_ABI, PACHACUY_TOKEN_ADRRESS);
    playerAddress = account;//The account must be logged in
  
    await contract.methods.balanceOf(playerAddress).call().then(function (info) {
      console.log("balanceOf: ", info);
      document.getElementById('balanceOfPlayer').innerHTML = info;
    });
  
  
  }
  
  


