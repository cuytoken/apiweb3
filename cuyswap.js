
 //functions to interact with the CuySWAP smart contract
  function setPCUYTokenAddress() {
    info = $("#newInfo").val();
    contract.methods.setPCUYTokenAddress (info).send( {from: account}).then( function(tx) { 
      console.log("Transaction: ", tx); 
    });
    $("#newInfo").val('');
  }
  

  function PachacuyToken() {
    contract.methods._PachacuyToken().call().then( function( info ) { 
      console.log("info: ", info);
      document.getElementById('lastInfo').innerHTML = info;
    });    
  }