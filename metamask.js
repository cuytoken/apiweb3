// Script to connect metamask to front end


 window.web3 = new Web3(Web3.givenProvider);



  // Accounts
  var account;


//Method allows the user to connect their metamask wallet to the web
async function connectMetamask()
{
  try {

        const accounts =  await window.ethereum.request({ method: 'eth_requestAccounts' });
       
        account = accounts[0];
        console.log('Account: ' + account);
        web3.eth.defaultAccount = account;



} catch (error) {
    // user rejected permission
    console.log(error);
}

}



  //Method that allows to obtain the metamask account connected to the web
  function getConnectionMetamask()
  {
    web3.eth.getAccounts(function(err, accounts) {
      if (err != null) {
        alert("Error retrieving accounts.");
        return ;
      }
      if (accounts.length == 0) {
        alert("No Metamask account could be detected, please make sure to connect your wallet");
        //Modify this method to inform the user that they don't have their metamask wallet connected
        return ;
      }
      account = accounts[0];
      console.log('Account: ' + account);
      web3.eth.defaultAccount = account;
     
    });

    
    

  }

