

//approves USDC spending
async function OrderBook_ApproveUSDC() {

    try {

        var spender = ORDER_BOOK_ADDRESS; //Authorizes the amount of USDC to Spend for the SWAP contract
        var amount = $("#amountApprove").val(); //6 decimals

        var contract = new web3.eth.Contract(USDC_TOKEN_ABI, USDC_TOKEN_ADRRESS);
        var txInstancia = contract.methods.approve(spender, amount); /*input: methodo  */
        var encodedABI = txInstancia.encodeABI();
        var tx = {
            from: account,
            to: USDC_TOKEN_ADRRESS,
            data: encodedABI
        };

        await web3.eth.sendTransaction(tx).then(function (tx) {
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


        var operator = ORDER_BOOK_ADDRESS;

        var contract = new web3.eth.Contract(PACHACUY_TOKEN_ABI, PACHACUY_TOKEN_ADRRESS);
        var txInstancia = contract.methods.authorizeOperator(operator); /*input: methodo  */
        var encodedABI = txInstancia.encodeABI();
        var tx = {
            from: account,
            to: PACHACUY_TOKEN_ADRRESS,
            data: encodedABI
        };

        await web3.eth.sendTransaction(tx).then(function (tx) {
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


        var amountPCUY = $("#amountPCUY").val(); //6 decimals
        var amountUSDC = $("#amountUSDC").val(); //6 decimals
        //Obtiene los valores input sin decimales

        var contract = new web3.eth.Contract(ORDER_BOOK_ABI, ORDER_BOOK_ADDRESS);


        txInstancia = contract.methods.setSellOrder(amountPCUY, amountUSDC); /*input: methodo  */
        encodedABI = txInstancia.encodeABI();
        var tx = {
            from: account,
            to: ORDER_BOOK_ADDRESS,
            data: encodedABI
        };

        await web3.eth.sendTransaction(tx).then(function (tx) {
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


        var IDORDER = $("#IDORDER2").val(); //6 decimals


        var contract = new web3.eth.Contract(ORDER_BOOK_ABI, ORDER_BOOK_ADDRESS);
        var txInstancia = contract.methods.removeSellorder(IDORDER); /*input: methodo  */
        var encodedABI = txInstancia.encodeABI();
        var tx = {
            from: account,
            to: ORDER_BOOK_ADDRESS,
            data: encodedABI
        };

        await web3.eth.sendTransaction(tx).then(function (tx) {
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


        var IDORDER = $("#IDORDER1").val(); //6 decimals



        var contract = new web3.eth.Contract(ORDER_BOOK_ABI, ORDER_BOOK_ADDRESS);
        var txInstancia = contract.methods.buyOrder(IDORDER); /*input: methodo  */
        var encodedABI = txInstancia.encodeABI();
        var tx = {
            from: account,
            to: ORDER_BOOK_ADDRESS,
            data: encodedABI
        };

        await web3.eth.sendTransaction(tx).then(function (tx) {
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
        var amountPCUY = $("#amountPCUY").val(); //6 decimals
        var amountUSDC = $("#amountUSDC").val(); //6 decimals

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