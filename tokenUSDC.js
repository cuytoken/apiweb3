//Functions for the USDC Token smart contract

//approves USDC spending
async function approve() {

    try {
        var contract = new web3.eth.Contract(USDC_TOKEN_ABI, USDC_TOKEN_ADRRESS);
        spender = CUYSWAP_ADRRESS; //Authorizes the amount of USDC to Spend for the SWAP contract
        amount= $("#amount_to_spend").val();
        await contract.methods.approve(spender,amount).send({ from: account }).then(function (tx) {
            console.log("Transaction: ", tx);
            //Modify here to add information to the user
        });

    } catch (error) {
        // user rejected permission
        console.log(error);

    }


}

