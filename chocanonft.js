

async function chocanoNFT_mintToken() {

    try {
        var COUNT = $("#COUNT").val(); //6 decimals

        var contract = new web3.eth.Contract(NFT_ABI, NFT_ADRRESS);
        var txInstancia = contract.methods.mintToken(COUNT); /*input: methodo  */
        var encodedABI = txInstancia.encodeABI();
        var tx = {
            from: account,
            to: NFT_ADRRESS,
            data: encodedABI,
            value: 1000000000000000000 //ESTO LO DEBEMOS ALTERAR PARA PRODUCCION
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


