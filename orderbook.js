

//approves USDC spending
async function OrderBook_ApproveUSDC() {

    try {
        var contract = new web3.eth.Contract(USDC_TOKEN_ABI, USDC_TOKEN_ADRRESS);
        spender = ORDER_BOOK_ADDRESS; //Authorizes the amount of USDC to Spend for the SWAP contract
        amount= $("#amountApprove").val(); //6 decimals
  
        var tx = {
          from: account,
          gasLimit: 10000000
      };
  
        await contract.methods.approve(spender,amount).send(tx).then(function (tx) {
            console.log("Transaction: ", tx);
            //Modify here to add information to the user
        });
  
    } catch (error) {
        // user rejected permission
        console.log(error);
  
    }
  
  
  }
  
  


async function OrderBook_AuthorizeOperator() {

    try {

        var contract = new web3.eth.Contract(PACHACUY_TOKEN_ABI, PACHACUY_TOKEN_ADRRESS);
       var operator = ORDER_BOOK_ADDRESS;

        var tx = {
            from: account,
            gasLimit: 10000000
        };

        await contract.methods.authorizeOperator(operator).send(tx).then(function (tx) {
            console.log("Transaction: ", tx);
            //Modify here to add information to the user
        });


    } catch (error) {
        // user rejected permission
        console.log(error);

    }


}




async function OrderBook_SetOrder() {

    try {

        var contract = new web3.eth.Contract(ORDER_BOOK_ABI, ORDER_BOOK_ADDRESS);
        var amountPCUY= $("#amountPCUY").val(); //6 decimals
        var amountUSDC= $("#amountUSDC").val(); //6 decimals


        var tx = {
            from: account,
            gasLimit: 10000000
        };

        await contract.methods.setSellOrder(amountPCUY,amountUSDC).send(tx).then(function (tx) {
            console.log("Transaction: ", tx);
            //Modify here to add information to the user
        });


    } catch (error) {
        // user rejected permission
        console.log(error);

    }


}



async function OrderBook_RemoveOrder() {

    try {

        var contract = new web3.eth.Contract(ORDER_BOOK_ABI, ORDER_BOOK_ADDRESS);
        var IDORDER= $("#IDORDER2").val(); //6 decimals
      

        var tx = {
            from: account,
            gasLimit: 10000000
        };

        await contract.methods.removeSellorder(IDORDER).send(tx).then(function (tx) {
            console.log("Transaction: ", tx);
            //Modify here to add information to the user
        });


    } catch (error) {
        // user rejected permission
        console.log(error);

    }


}



async function OrderBook_BuyOrder() {

    try {

        var contract = new web3.eth.Contract(ORDER_BOOK_ABI, ORDER_BOOK_ADDRESS);
        var IDORDER= $("#IDORDER1").val(); //6 decimals
      

        var tx = {
            from: account,
            gasLimit: 10000000
        };

        await contract.methods.buyOrder(IDORDER).send(tx).then(function (tx) {
            console.log("Transaction: ", tx);
            //Modify here to add information to the user
        });


    } catch (error) {
        // user rejected permission
        console.log(error);

    }


}









async function OrderBook_ListOrderPending() {

    try {

        var contract = new web3.eth.Contract(ORDER_BOOK_ABI, ORDER_BOOK_ADDRESS);
        var amountPCUY= $("#amountPCUY").val(); //6 decimals
        var amountUSDC= $("#amountUSDC").val(); //6 decimals

        await contract.methods.listSalesOrderPending().call().then(function (arrays_result) {
            console.log("RESULTS ARRAYS");
            console.log(arrays_result._keyOrders);
            console.log(arrays_result._pcuysAmounts);
            console.log(arrays_result._usdcAmounts);
            console.log(arrays_result._sellers);

          
           
          });
  
          

    } catch (error) {
        // user rejected permission
        console.log(error);

    }


}