//Functions for the USDC Token smart contract

//approves USDC spending
async function approve() {

    try {
        var contract = new web3.eth.Contract(USDC_TOKEN_ABI, USDC_TOKEN_ADRRESS);
        spender = CUYSWAP_ADRRESS; //Authorizes the amount of USDC to Spend for the SWAP contract
        amount= $("#amountApprove").val(); //6 decimals
        await contract.methods.approve(spender,amount).send({ from: account }).then(function (tx) {
            console.log("Transaction: ", tx);
            //Modify here to add information to the user
        });

    } catch (error) {
        // user rejected permission
        console.log(error);

    }


}



//Gets the number of USDC tokens the player has
async function USDC_balanceOf() {

    var contract = new web3.eth.Contract(USDC_TOKEN_ABI, USDC_TOKEN_ADRRESS);
    playerAddress = account;//The account must be logged in
  
    await contract.methods.balanceOf(playerAddress).call().then(function (info) {
      console.log("balanceOf: ", info);
      document.getElementById('balanceOfPlayer').innerHTML = info;
    });
  
  
  }
  
  
