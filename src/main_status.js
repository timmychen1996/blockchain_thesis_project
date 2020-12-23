
var contractABI_LCtransfer=[
  {
    "constant": true,
    "inputs": [
      {
        "name": "_from_address",
        "type": "address"
      },
      {
        "name": "_to_address",
        "type": "address"
      }
    ],
    "name": "getLC",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      }
    ],
    "name": "request",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      }
    ],
    "name": "makeshipment",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "LCstate",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      }
    ],
    "name": "issuesloc",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      }
    ],
    "name": "accepts",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_from",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      }
    ],
    "name": "notifyloc",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      },
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "LC",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

var contractABI_account_key_message =[
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "Encryptmessage_index",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "theBLnumber",
        "type": "uint256"
      },
      {
        "name": "queue_index",
        "type": "uint256"
      }
    ],
    "name": "getEncryptedMessagefromStack",
    "outputs": [
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "address_two",
        "type": "address"
      },
      {
        "name": "_message_registration_time",
        "type": "string"
      },
      {
        "name": "encrypted_message",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "theBLnumber",
        "type": "uint256"
      },
      {
        "name": "thetime",
        "type": "string"
      }
    ],
    "name": "setEncrypt",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "theBLnumber",
        "type": "uint256"
      }
    ],
    "name": "getMessageStackMappingIndex",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "theBLnumber",
        "type": "uint256"
      },
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "address_two",
        "type": "address"
      }
    ],
    "name": "getEncryptedMessage",
    "outputs": [
      {
        "name": "encrypted_message",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_account",
        "type": "string"
      },
      {
        "name": "_key",
        "type": "string"
      }
    ],
    "name": "setAccountKey",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getStackLength",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "theBLnumber",
        "type": "uint256"
      }
    ],
    "name": "getEncryptMappingIndex",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_account",
        "type": "string"
      }
    ],
    "name": "getAccountKey",
    "outputs": [
      {
        "name": "_key",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_career",
        "type": "string"
      }
    ],
    "name": "getAccountCareer",
    "outputs": [
      {
        "name": "_account",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "theBLnumber",
        "type": "uint256"
      },
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "address_two",
        "type": "address"
      },
      {
        "name": "thetime",
        "type": "string"
      },
      {
        "name": "encrypted_message",
        "type": "string"
      }
    ],
    "name": "setEncryptedMessage",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "Encrypt",
    "outputs": [
      {
        "name": "BLmapping_id",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "Encrypt_message_list",
    "outputs": [
      {
        "name": "BLmapping_id",
        "type": "uint256"
      },
      {
        "name": "from_address",
        "type": "address"
      },
      {
        "name": "to_address",
        "type": "address"
      },
      {
        "name": "_message_registration_time",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "Encryptmapping_index",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }
];

var contractABI_BLTransfer =[
  {
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      },
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "address_two",
        "type": "address"
      },
      {
        "name": "address_three",
        "type": "address"
      }
    ],
    "name": "request",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      },
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "address_two",
        "type": "address"
      },
      {
        "name": "address_three",
        "type": "address"
      }
    ],
    "name": "showtheBL",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getBLlength",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      },
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "address_two",
        "type": "address"
      },
      {
        "name": "address_three",
        "type": "address"
      }
    ],
    "name": "taketheStuff",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "theBLnumber",
        "type": "uint256"
      },
      {
        "name": "thetime",
        "type": "string"
      }
    ],
    "name": "setBL",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      },
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "address_two",
        "type": "address"
      },
      {
        "name": "address_three",
        "type": "address"
      }
    ],
    "name": "issueDO",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      },
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "address_two",
        "type": "address"
      },
      {
        "name": "address_three",
        "type": "address"
      }
    ],
    "name": "loadingonShipNotification",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      }
    ],
    "name": "getBLMappingId",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      },
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "address_two",
        "type": "address"
      },
      {
        "name": "address_three",
        "type": "address"
      }
    ],
    "name": "accept",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "theBLnumber",
        "type": "uint256"
      }
    ],
    "name": "getBLMappingIndex",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      },
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "address_two",
        "type": "address"
      },
      {
        "name": "address_three",
        "type": "address"
      }
    ],
    "name": "loadingonShip",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      },
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "address_two",
        "type": "address"
      },
      {
        "name": "address_three",
        "type": "address"
      }
    ],
    "name": "bookingtheSeats",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "BLmapping_index",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      },
      {
        "name": "address_one",
        "type": "address"
      },
      {
        "name": "address_two",
        "type": "address"
      },
      {
        "name": "address_three",
        "type": "address"
      }
    ],
    "name": "deliverBL",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "index",
        "type": "uint256"
      },
      {
        "name": "from_address",
        "type": "address"
      },
      {
        "name": "to_address",
        "type": "address"
      }
    ],
    "name": "getBL",
    "outputs": [
      {
        "name": "",
        "type": "uint8"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "BL",
    "outputs": [
      {
        "name": "BLmapping_id",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "AccountyKey_addr",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }
];


Web3 = require('web3');
otplib = require('otplib');
qrcode = require('qrcode');
eth_rsa = require('ethereum-rsa');
ethers = require('ethers');

var contractAddress_LCtransfer = '0x799EBAbEdE8BEe6CE951124230524502Eb990625';
var contractAddress_account_key_message = '0xc04C857d1c3D67498C41A84A473e201E8c30B2A0';
var contractAddress_BLtransfer = '0x6faAF3bF0291B85b47C96CA340036cd69ce35a17';



var web3 = new Web3( new Web3.providers.HttpProvider("http://localhost:7545") );


var LCtransferPseudoRest = new web3.eth.Contract( contractABI_LCtransfer, contractAddress_LCtransfer);
var AccountPseudoRest = new web3.eth.Contract( contractABI_account_key_message, contractAddress_account_key_message);
var BLtransferPseudoRest = new web3.eth.Contract( contractABI_BLTransfer,contractAddress_BLtransfer);

var user_account = ['0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b', '0x3C95107cAd460D3989F2dB09606BB436c2f47482', 
'0x3cF2DEdffC74ab8776f61C2d7F261c121c16F45c','0x9eb378EFfa2bE988B96431B421bEd2F859006A94','0xCE6C125D972360dfe3A21d1d7BC48D91b27fcd28'];


var LC_transfer_state = ['信用狀尚未產生', '信用狀進口商要求', '信用狀出口商接受', '信用狀已發行', '信用狀已告知', '完成貨物運送'];
var BL_transfer_state = ['提單已產生','提單要求','提單接受','提示提單','洽訂艙位','裝船','交付提單','發行小提單','裝船通知','拿貨'];

var defaultGas = 900000;
/*2020/12/8*/
/*here we add this since it may be the situation that the encrypted_message
may be two times*/ 
var encrypted_message_count_exporter =0;
var encrypted_message_count_carrier  =0;
var encrypted_message_count_Importer =0;


/*_from_address = user_account[1];
_to_address = user_account[2];*/


/*requestfromImporter  stands for importer ask for exporter*/ 
function requestfromImporter(theBLindex, address_one, address_two, address_three){

  return BLtransferPseudoRest.methods.request( theBLindex, address_one, address_two, address_three).send(
  {
    from: '0x3C95107cAd460D3989F2dB09606BB436c2f47482',
    gas: defaultGas
  }).then( function(error,result){
      
      if(result){
          console.log("Oh yeah we found that the Importer can request");
          console.log("result %o",result);
      }
      else{
        console.log(error);
      }

  });
}

function accepts(theBLindex, address_one, address_two, address_three){

  return BLtransferPseudoRest.methods.accept( theBLindex, address_one, address_two, address_three).send(
  {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
  }).then( function(error,result){
      
      if(result){
          console.log("Oh yeah we found that the Exporter can accept");
          console.log("result %o",result);
      }
      else{
        console.log(error);
      }

  });

}

function book(theBLindex, address_one, address_two, address_three){

  return BLtransferPseudoRest.methods.bookingtheSeats(theBLindex, address_one, address_two, address_three).send(
  {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
  }).then( function(error,result){
      
      if(result){
          console.log("Oh yeah we found that the Exporter can book");
          console.log("result %o",result);
      }
      else{
        console.log(error);
      }

  });
}

function loadonship(theBLindex,address_one, address_two, address_three){

  return BLtransferPseudoRest.methods.loadingonShip( theBLindex, address_one, address_two, address_three).send(
  {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
  }).then( function(error,result){
      
      if(result){
          console.log("Oh yeah we found that the Exporter can loadonship");
          console.log("result %o",result);
      }
      else{
        console.log(error);
      }

  });

}

/*2020/12/4 add*/
function loadonshipnotification(theBLindex, address_one, address_two, address_three){

  return BLtransferPseudoRest.methods.loadingonShipNotification( theBLindex, address_one, address_two, address_three).send(
  {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
  }).then( function(error,result){
      
      if(result){
          console.log("Oh yeah we found that the Exporter can loadonship and notify");
          console.log("result %o",result);
      }
      else{
        console.log(error);
      }

  });

}


function showtheBL(theBLindex, address_one, address_two, address_three){

  return BLtransferPseudoRest.methods.showtheBL( theBLindex, address_one, address_two, address_three).send(
  {
    from: '0x3C95107cAd460D3989F2dB09606BB436c2f47482',
    gas: defaultGas
  }).then( function(error,result){
      
      console.log("What is the val of result");
      console.log(result);
      if(result){
          console.log("Oh yeah we found that the Importer can showtheBL");
          console.log("result %o",result);
      }
      else{
        console.log(error);
      }

  });
}

/*2020/12/4 add*/
function issueDO(theBLindex, address_one, address_two, address_three){

  return BLtransferPseudoRest.methods.issueDO( theBLindex,address_one, address_two, address_three).send(
  {
    from: '0xCE6C125D972360dfe3A21d1d7BC48D91b27fcd28',
    gas: defaultGas
  }).then( function(error,result){
      
      if(result){
          console.log("Oh yeah we found that the Carrier can issueDO");
          console.log("result %o",result);
      }
      else{
        console.log(error);
      }

  });
}

function taketheStuff(theBLindex, address_one, address_two, address_three){

  return BLtransferPseudoRest.methods.taketheStuff( theBLindex, address_one, address_two, address_three).send(
  {
    from: '0x3C95107cAd460D3989F2dB09606BB436c2f47482',
    gas: defaultGas
  }).then( function(error,result){
      
      if(result){
          console.log("Oh yeah we found that the Importer can taketheStuff");
          console.log("result %o",result);
      }
      else{
        console.log(error);
      }
  }); 
}


function deliverBL(theBLindex, address_one, address_two, address_three){

  return BLtransferPseudoRest.methods.deliverBL( theBLindex, address_one, address_two, address_three).send(
  {
    from: '0xCE6C125D972360dfe3A21d1d7BC48D91b27fcd28',
    gas: defaultGas
  }).then( function(error,result){
      
      if(result){
          console.log("Oh yeah we found that the Carrier can deliverBL");
          console.log("result %o",result);
      }
      else{
          console.log(error);
      }
  });
}

/*2020/12/6 changes, the BL needs the index*/
function getBLTransferstate(index, address_one, address_two){

  return BLtransferPseudoRest.methods.getBL(index, address_one, address_two).call().then( function(BLTransferstate){  
      return BLTransferstate;
  });

}


/*2020/12/9 add*/
function getBLMappingId(index){

  return BLtransferPseudoRest.methods.getBLMappingId(index).call().then( function(BL_number){  
      return BL_number;
  });

}


function getBLMappingIndex(theBLnumber){

  return BLtransferPseudoRest.methods.getBLMappingIndex(theBLnumber).call().then( function(BL_index){  
      return BL_index;
  });
}




function getAccountCareer(career){

  return AccountPseudoRest.methods.getAccountCareer(career).call().then( function(account){
      return account; 
  });

}


/*2020/12/19 add*/
function getStackLength(){
  return AccountPseudoRest.methods.getStackLength().call().then( function( queue_length ){
      return queue_length;
  });  
}

/*2020/12/19 add*/
function getMessageQueueIndex(theBLnumber){

  return AccountPseudoRest.methods.getMessageStackMappingIndex(theBLnumber).call().then(function(theBLnumber){
      return theBLindex;
  });

}

/*2020/12/19 add*/
function getEncryptMappingIndex(theBLnumber){

  return AccountPseudoRest.methods.getEncryptMappingIndex(theBLnumber).call().then(function(theBLnumber){
      return theBLindex;
  });

}

function getencryptedmessage(theBLnumber, address_one, address_two){

   return AccountPseudoRest.methods.getEncryptedMessage(theBLnumber, address_one, address_two).call().then( function(result){
       return result;
   });

}

/*2020/12/19 add*/
function getencryptedmessagefromstack(theBLnumber, queue_index){
    
    return AccountPseudoRest.methods.getEncryptedMessagefromStack(theBLnumber, queue_index).call().then(function(result){
        return result;
    });
}


/*2020/12/19 add*/
/*We put the time situation into the consideration*/
function messageencrypted(theBLnumber, address_one, address_two, thetime, encrypted_message){

  return AccountPseudoRest.methods.setEncryptedMessage(theBLnumber, address_one, address_two, thetime, encrypted_message).send(
  {
    from: '0x3C95107cAd460D3989F2dB09606BB436c2f47482',
    gas: defaultGas
  }).then( function(error,result){
      
      if(result){
          console.log("Oh yeah we found that we can encrypted the message");
          console.log("result %o",result);
      }
      else{
        console.log(error);
      }

  });
}


/*2020/11/17 add*/
function encryptedmessagereturn(message, senderPrivateKey, recipientPublicKey){
   return eth_rsa.encryptMessage(message, senderPrivateKey, recipientPublicKey).then( function(result){
       return result;
   });
}

function decryptedmessagereturn(encrypted_message, recipientPrivateKey, senderPublicKey){
   return eth_rsa.decryptMessage(encrypted_message, recipientPrivateKey, senderPublicKey).then( function(result){
       return result;
   });
}



async function request_from_Importer_and_encrypt( theBLindex, address_one, address_two, address_three ){
  
  /*2020/11/28 address_one will always be Importer*/
  /*message one relates to address_one and address_two
  message two relates to address_one and address_three*/
  /*address_two's public key relates to recipientPublicKey_all_one*/
  /*address_three's public key relates to recipientPUblicKey_all_two*/
  
  /*2020/12/21*/
  /*For encrption, we only need encrypted_message_one, no need for encrypted_message_two
  so we comment out with the recipientPublicKey_two, encrypted_message_two and encrypt_finish_two*/
  let request_from_Importer = await requestfromImporter( theBLindex, address_one, address_two, address_three);
  let message_number_one = await getBLTransferstate( theBLindex, address_one, address_two);
  let message_number_two = await getBLTransferstate(theBLindex, address_one, address_three);

  let message_one = BL_transfer_state[ message_number_one ];
  let message_two = BL_transfer_state[ message_number_two ];

  var senderPrivateKey = '2efb9347340bec06148b2b1dd9748c7e08f07f815df04159bbd001ae73bf7c2b';
  let recipientPublicKey_all_one = await getaccountpublickey(address_two);
  /*let recipientPublicKey_all_two = await getaccountpublickey(address_three);*/

  var recipientPublicKey_one = recipientPublicKey_all_one.substring(2);
  /*var recipientPublicKey_two = recipientPublicKey_all_two.substring(2);*/
  

  let encrypted_message_one = await encryptedmessagereturn(message_one, senderPrivateKey, recipientPublicKey_one);
  /*let encrypted_message_two = await encryptedmessagereturn(message_two, senderPrivateKey, recipientPublicKey_two);*/
  
  let BL_number = await getBLMappingId( theBLindex );

  /*2020/12/20 here we need to add the time consideration*/
  const time_now = Date.now();
  var current_time = new Date( time_now );
  var request_from_Importer_time = current_time.toTimeString();

  let encrypt_finish_one = await messageencrypted(BL_number, address_one, address_two, request_from_Importer_time, encrypted_message_one);
  /*let encrypt_finish_two = await messageencrypted(BL_number, address_one, address_three, request_from_Importer_time, encrypted_message_two);*/

}


async function request_from_Importer_and_showtheBL( theBLindex, address_one, address_two, address_three){

  let showtheBL_from_Importer = await showtheBL( theBLindex, address_one, address_two, address_three);
  let message_number_one = await getBLTransferstate( theBLindex, address_one, address_two);
  let message_number_two = await getBLTransferstate( theBLindex, address_one, address_three);
  let message_one = BL_transfer_state[ message_number_one ];
  let message_two = BL_transfer_state[ message_number_two ];

  var senderPrivateKey = '2efb9347340bec06148b2b1dd9748c7e08f07f815df04159bbd001ae73bf7c2b';
  let recipientPublicKey_all_one = await getaccountpublickey(address_two);
  /*let recipientPublicKey_all_two = await getaccountpublickey(address_three);*/
  
  var recipientPublicKey_one = recipientPublicKey_all_one.substring(2);
  /*var recipientPublicKey_two = recipientPublicKey_all_two.substring(2);*/ 

  let encrypted_message_one = await encryptedmessagereturn( message_one, senderPrivateKey, recipientPublicKey_one);
  /*let encrypted_message_two = await encryptedmessagereturn( message_two, senderPrivateKey, recipientPublicKey_two);*/

  let BL_number = await getBLMappingId(theBLindex);

  /*2020/12/20 here we need to add the time consideration*/
  const time_now = Date.now();
  var current_time = new Date( time_now );
  var showBL_from_Importer_time = current_time.toTimeString();

  let encrypt_finish_one = await messageencrypted( BL_number, address_one, address_two, showBL_from_Importer_time, encrypted_message_one);
  /*let encrypt_finish_two = await messageencrypted( BL_number, address_one, address_three, showBL_from_Importer_time, encrypted_message_two);*/

}

async function request_from_Importer_and_taketheStuff( theBLindex, address_one, address_two, address_three){

  let taketheStuff_from_Importer = await taketheStuff( theBLindex, address_one, address_two, address_three); 
  let message_number_one = await getBLTransferstate( theBLindex, address_one, address_two);
  let message_number_two = await getBLTransferstate( theBLindex, address_one, address_three);

  let message_one = BL_transfer_state[ message_number_one ];
  let message_two = BL_transfer_state[ message_number_two ];

  var senderPrivateKey = '2efb9347340bec06148b2b1dd9748c7e08f07f815df04159bbd001ae73bf7c2b';
  let recipientPublicKey_all_one = await getaccountpublickey(address_two);
  /*let recipientPublicKey_all_two = await getaccountpublickey(address_three);*/

  var recipientPublicKey_one = recipientPublicKey_all_one.substring(2);
  /*var recipientPublicKey_two = recipientPublicKey_all_two.substring(2);*/

  let encrypted_message_one = await encryptedmessagereturn( message_one, senderPrivateKey, recipientPublicKey_one);
  /*let encrypted_message_two = await encryptedmessagereturn( message_two, senderPrivateKey, recipientPublicKey_two);*/
  
  let BL_number = await getBLMappingId(theBLindex);

  /*2020/12/20 here we need to add the time consideration*/
  const time_now = Date.now();
  var current_time = new Date( time_now );
  var taketheStuff_from_Importer_time = current_time.toTimeString();

  let encrypt_finish_one = await messageencrypted( BL_number, address_one, address_two, taketheStuff_from_Importer_time, encrypted_message_one);
  /*let encrypt_finish_two = await messageencrypted( BL_number, address_one, address_three, taketheStuff_from_Importer_time, encrypted_message_two);*/

}


async function accept_from_Exporter_and_encrypt( theBLindex, address_one, address_two, address_three){

  let accept_from_Exporter = await accepts( theBLindex, address_one, address_two, address_three);
  let message_number_one = await getBLTransferstate(theBLindex, address_one, address_two);
  let message_number_two = await getBLTransferstate(theBLindex, address_one, address_three);

  let message_one = BL_transfer_state[ message_number_one ];
  let message_two = BL_transfer_state[ message_number_two ];

  var senderPrivateKey = '5f6ecd5b4a3cbd6826fd737fc2d5e933ca833f5990bd0bdbb218945a482f66f3';
  let recipientPublicKey_all_one = await getaccountpublickey(address_two);
  /*let recipientPublicKey_all_two = await getaccountpublickey(address_three);*/

  var recipientPublicKey_one = recipientPublicKey_all_one.substring(2);
  /*var recipientPublicKey_two = recipientPublicKey_all_two.substring(2);*/ 

  let encrypted_message_one = await encryptedmessagereturn( message_one, senderPrivateKey, recipientPublicKey_one);
  /*let encrypted_message_two = await encryptedmessagereturn( message_two, senderPrivateKey, recipientPublicKey_two);*/
  
  let BL_number = await getBLMappingId(theBLindex);
  /*2020/12/21 here we need to add the time consideration*/
  const time_now = Date.now();
  var current_time = new Date( time_now );
  var accept_from_Exporter_time = current_time.toTimeString();

  let encrypt_finish_one = await messageencrypted( BL_number, address_one, address_two, accept_from_Exporter_time, encrypted_message_one);
  /*let encrypt_finish_two = await messageencrypted( BL_number, address_one, address_three, accept_from_Exporter_time, encrypted_message_two);*/
  
}

/*2020/12/12 editted*/
async function book_from_Exporter_and_encrypt( theBLindex, address_one, address_two, address_three){

  let book_from_Exporter = await book( theBLindex, address_one, address_two, address_three);
  let message_number_one = await getBLTransferstate(theBLindex, address_one, address_two);
  let message_number_two = await getBLTransferstate(theBLindex, address_one, address_three);

  let message_one = BL_transfer_state[ message_number_one ];
  let message_two = BL_transfer_state[ message_number_two ];

  var senderPrivateKey = '5f6ecd5b4a3cbd6826fd737fc2d5e933ca833f5990bd0bdbb218945a482f66f3';
  let recipientPublicKey_all_one = await getaccountpublickey(address_two);
  /*let recipientPublicKey_all_two = await getaccountpublickey(address_three);*/

  var recipientPublicKey_one = recipientPublicKey_all_one.substring(2);
  /*var recipientPublicKey_two = recipientPublicKey_all_two.substring(2);*/


  let encrypted_message_one = await encryptedmessagereturn( message_one, senderPrivateKey, recipientPublicKey_one);
  /*let encrypted_message_two = await encryptedmessagereturn( message_two, senderPrivateKey, recipientPublicKey_two);*/

  /*2020/12/21 add*/
  let BL_number = await getBLMappingId(theBLindex);
  const time_now = Date.now();
  var current_time = new Date( time_now );
  var book_from_Exporter_time = current_time.toTimeString();

  let encrypt_finish_one = await messageencrypted( BL_number, address_one, address_two, book_from_Exporter_time, encrypted_message_one);
  /*let encrypt_finish_two = await messageencrypted( BL_number, address_one, address_three, book_from_Exporter_time, encrypted_message_two);*/

}

async function loadonship_from_Exporter_and_encrypt( theBLindex, address_one, address_two, address_three){

  let loadonship_from_Exporter = await loadonship( theBLindex, address_one, address_two, address_three); 
  let message_number_one = await getBLTransferstate( theBLindex, address_one, address_two);
  let message_number_two = await getBLTransferstate( theBLindex, address_one, address_three);

  let message_one = BL_transfer_state[ message_number_one ];
  let message_two = BL_transfer_state[ message_number_two ];

  var senderPrivateKey = '5f6ecd5b4a3cbd6826fd737fc2d5e933ca833f5990bd0bdbb218945a482f66f3';
  let recipientPublicKey_all_one = await getaccountpublickey(address_two);
  let recipientPublicKey_all_two = await getaccountpublickey(address_three);

  var recipientPublicKey_one = recipientPublicKey_all_one.substring(2);
  /*var recipientPublicKey_two = recipientPublicKey_all_two.substring(2);*/ 

  let encrypted_message_one = await encryptedmessagereturn( message_one, senderPrivateKey, recipientPublicKey_one);
  /*let encrypted_message_two = await encryptedmessagereturn( message_two, senderPrivateKey, recipientPublicKey_two);*/

  /*2020/12/21 add*/
  let BL_number = await getBLMappingId(theBLindex);
  const time_now = Date.now();
  var current_time = new Date( time_now );
  var loadonship_from_Exporter_time = current_time.toTimeString();

  let encrypt_finish_one = await messageencrypted( BL_number, address_one, address_two, loadonship_from_Exporter_time, encrypted_message_one);
  /*let encrypt_finish_two = await messageencrypted( BL_number, address_one, address_three, loadonship_from_Exporter_time, encrypted_message_two);*/

}

async function shipnotification_from_Exporter_and_encrypt( theBLindex, address_one, address_two, address_three){

  let loadonship_notification_from_Exporter = await loadonshipnotification( theBLindex, address_one, address_two, address_three); 
  let message_number_one = await getBLTransferstate(theBLindex, address_one, address_two);
  let message_number_two = await getBLTransferstate(theBLindex, address_one, address_three);

  let message_one = BL_transfer_state[ message_number_one ];
  let message_two = BL_transfer_state[ message_number_two ];

  var senderPrivateKey = '5f6ecd5b4a3cbd6826fd737fc2d5e933ca833f5990bd0bdbb218945a482f66f3';
  let recipientPublicKey_all_one = await getaccountpublickey(address_two);
  let recipientPublicKey_all_two = await getaccountpublickey(address_three);

  var recipientPublicKey_one = recipientPublicKey_all_one.substring(2);
  /*var recipientPublicKey_two = recipientPublicKey_all_two.substring(2);*/ 

  let encrypted_message_one = await encryptedmessagereturn( message_one, senderPrivateKey, recipientPublicKey_one);
  /*let encrypted_message_two = await encryptedmessagereturn( message_two, senderPrivateKey, recipientPublicKey_two);*/

  /*2020/12/21 add*/
  let BL_number = await getBLMappingId(theBLindex);
  const time_now = Date.now();
  var current_time = new Date( time_now );
  var shipnotification_from_Exporter_time = current_time.toTimeString();

  let encrypt_finish_one = await messageencrypted(  BL_number, address_one, address_two, shipnotification_from_Exporter_time, encrypted_message_one);
  /*let encrypt_finish_two = await messageencrypted(  BL_number, address_one, address_three, shipnotification_from_Exporter_time, encrypted_message_two);*/

}


async function deliverBL_from_Carrier_and_encrypt( theBLindex, address_one, address_two, address_three){

  let deliverBL_from_Carrier = await deliverBL( theBLindex, address_one, address_two, address_three); 
  let message_number_one = await getBLTransferstate( theBLindex, address_one, address_two);
  let message_number_two = await getBLTransferstate( theBLindex, address_one, address_three);

  let message_one = BL_transfer_state[ message_number_one ];
  let message_two = BL_transfer_state[ message_number_two ];

  var senderPrivateKey = '8507ddebae43d3c7cfe0a4c6fefde7c51d70974c1c84eeac5c59a6b545ea9c17';
  let recipientPublicKey_all_one = await getaccountpublickey(address_two);
  let recipientPublicKey_all_two = await getaccountpublickey(address_three);

  var recipientPublicKey_one = recipientPublicKey_all_one.substring(2);
  /*var recipientPublicKey_two = recipientPublicKey_all_two.substring(2);*/ 

  let encrypted_message_one = await encryptedmessagereturn( message_one, senderPrivateKey, recipientPublicKey_one);
  /*let encrypted_message_two = await encryptedmessagereturn( message_two, senderPrivateKey, recipientPublicKey_two);*/
  
  /*2020/12/21 add*/
  let BL_number = await getBLMappingId(theBLindex);
  const time_now = Date.now();
  var current_time = new Date( time_now );
  var deliverBL_from_Carrier_time = current_time.toTimeString();

  let encrypt_finish_one = await messageencrypted( BL_number, address_one, address_two, deliverBL_from_Carrier_time, encrypted_message_one);
  /*let encrypt_finish_two = await messageencrypted( BL_number, address_one, address_three, deliverBL_from_Carrier_time, encrypted_message_two);*/

}

async function issueDO_from_Carrier_and_encrypt( theBLindex, address_one, address_two, address_three){

  let issueDO_from_Carrier = await issueDO( theBLindex, address_one, address_two, address_three);
  let message_number_one = await getBLTransferstate( theBLindex, address_one, address_two);
  let message_number_two = await getBLTransferstate( theBLindex, address_one, address_three);

  let message_one = BL_transfer_state[ message_number_one ];
  let message_two = BL_transfer_state[ message_number_two ];

  var senderPrivateKey = '8507ddebae43d3c7cfe0a4c6fefde7c51d70974c1c84eeac5c59a6b545ea9c17';
  let recipientPublicKey_all_one = await getaccountpublickey(address_two);
  let recipientPublicKey_all_two = await getaccountpublickey(address_three);

  var recipientPublicKey_one = recipientPublicKey_all_one.substring(2);
  /*var recipientPublicKey_two = recipientPublicKey_all_two.substring(2);*/ 

  let encrypted_message_one = await encryptedmessagereturn( message_one, senderPrivateKey, recipientPublicKey_one);
  /*let encrypted_message_two = await encryptedmessagereturn( message_two, senderPrivateKey, recipientPublicKey_two);*/
  
  let BL_number = await getBLMappingId(theBLindex);
  const time_now = Date.now();
  var current_time = new Date( time_now );
  var issueDO_from_Carrier_time = current_time.toTimeString();

  let encrypt_finish_one = await messageencrypted( BL_number, address_one, address_two, issueDO_from_Carrier_time, encrypted_message_one);
  /*let encrypt_finish_two = await messageencrypted( BL_number, address_one, address_three, issueDO_from_Carrier_time, encrypted_message_two);*/

}


/*2020/11/30 editted*/
async function query_from_Exporter_and_decrypt(theBLnumber){

  /*2020/11/16 since it is queried from Exporter
  so the recipientPrivateKey will be Exporter's one, but senderPublicKey is based on address_two*/
  /*2020/12/3 since senderPublicKey is based on address_two,
  so the getaccountpublickey should put address_two,
  but not  0x3C95107cAd460D3989F2dB09606BB436c2f47482*/
  console.log("Now_is_Exporter_querying");  
  var address_one = await getAccountCareer('Exporter');

  var address_two = $("#account_two_status_exporter_unit").val();

  var recipientPrivateKey = document.getElementById("exporter_privatekey_name").value;

  var encrypted_message = await getencryptedmessage(theBLnumber, address_one, address_two);
  console.log("what is the val of encrypted_message");
  console.log(encrypted_message);

  var senderPublicKey_all = await getaccountpublickey(address_two);
  var senderPublicKey = senderPublicKey_all.substring(2);
  /*2020/11/30 the decrypted_message may be empty*/
  /*Eg: The Importer may request the transaction to Exporter,but if the address_two is Carrier, then Exporter can not get the
  decrypted message*/
  var check_bol_generated = false;
  var pre_array = [];

  if( encrypted_message == ""){
    console.log("What is the val of encryptedmessage");
    console.log( encrypted_message );
    if ( encrypted_message_count_exporter == 1 ){
      $("#BLtransferstate_Exporter").html( $("#BLtransferstate_Exporter").html().replace(/提單已產生/,'提單已產生'));
      check_bol_generated = true;
    }
    else{
      
      $('#BLtransferstate_Exporter').append('提單已產生');
      encrypted_message_count_exporter ++;
      check_bol_generated = true;
    }
  }else{

    if( check_bol_generated ){
         
        let decrypted_message = await decryptedmessagereturn(encrypted_message,recipientPrivateKey,senderPublicKey);
        $("#BLtransferstate_Exporter").html( $("#BLtransferstate_Exporter").html().replace(/提單已產生/,decrypted_message));
    }
    else{

      console.log("Oh yeahhhhhh the check_bol_generated is false!!!");
      let decrypted_message = await decryptedmessagereturn(encrypted_message,recipientPrivateKey,senderPublicKey);
      pre_array.push(decrypted_message);
      let pre_message = pre_array[0];
      console.log("What is the val of pre_message......");
      console.log(pre_message);
      /*2020/12/13 here we consider if the decrypted_message exists*/
      /*So we will replace regular_expression with decrypted_message*/
      /*var regular_expression = new RegExp(pre_message, "g");
      /*$("#BLtransferstate_Carrier").html( $("#BLtransferstate_Carrier").html().replace(regular_expresssion,decrypted_message));*/
      $("#BLtransferstate_Exporter").append(pre_message);
      pre_array.splice(0, 1);

    }
  }

}

/*2020/12/3 editted*/
async function query_from_Carrier_and_decrypt(theBLnumber){

  console.log("Now_is_Carrier!!!!");
  var address_one = await getAccountCareer('Carrier');
  var address_two = $("#account_two_status_carrier_unit").val();

  var recipientPrivateKey = document.getElementById("carrier_privatekey_name").value;

  var encrypted_message = await getencryptedmessage(theBLnumber, address_one, address_two);
  var senderPublicKey_all = await getaccountpublickey(address_two);
  var senderPublicKey = senderPublicKey_all.substring(2);
  /*2020/11/30 the encrypted_message may be empty*/
  /*Eg: The Importer may request the transaction to Exporter,but if the address_two is Carrier, then Exporter can not get the
  decrypted message*/
  /*2020/12/12 we add the empty array, because it can store the previous decrypted message*/
  var check_bol_generated = false;
  var pre_array = [];

  if( encrypted_message == "" ){

    if ( encrypted_message_count_carrier == 1 ){
      $("#BLtransferstate_Carrier").html( $("#BLtransferstate_Carrier").html().replace(/提單已產生/,'提單已產生') );
      check_bol_generated = true;

    }
    else{

      $('#BLtransferstate_Carrier').append('提單已產生');
      encrypted_message_count_carrier ++;
      check_bol_generated = true;
    }
  }else{
    /*2020/12/2 I found this kind of replacement form the below website
    https://forum.jquery.com/topic/removing-text-of-a-label 
    var regular_expresssion = new RegExp('尚未建立提單', "g");
    $("#BLtransferstate_carrier").html( $("#BLtransferstate_carrier").html().replace(regular_expresssion ,decrypted_message) );*/
    if( check_bol_generated ){
         
        let decrypted_message = await decryptedmessagereturn(encrypted_message,recipientPrivateKey,senderPublicKey);
        $("#BLtransferstate_Carrier").html( $("#BLtransferstate_Carrier").html().replace(/提單已產生/,decrypted_message));
    }
    else{
      
      console.log("Oh yeahhhhhh the check_bol_generated is false!!!");
      let decrypted_message = await decryptedmessagereturn(encrypted_message,recipientPrivateKey,senderPublicKey);
      pre_array.push(decrypted_message);
      let pre_message = pre_array[0];
      console.log("What is the val of pre_message......");
      console.log(pre_message);
      /*2020/12/13 here we consider if the decrypted_message exists*/
      /*So we will replace regular_expression with decrypted_message*/
      /*var regular_expression = new RegExp(pre_message, "g");
      /*$("#BLtransferstate_Carrier").html( $("#BLtransferstate_Carrier").html().replace(regular_expresssion,decrypted_message));*/
      $("#BLtransferstate_Carrier").append(pre_message);
      pre_array.splice(0, 1);
    }

  }
}


async function query_from_Importer_and_decrypt(theBLnumber){

  console.log("Importer_querying_the_Stuff!!!!");
  var address_one = await getAccountCareer('Importer');
  var address_two = $("#account_two_status_Importer_unit").val();

  var recipientPrivateKey = document.getElementById("Importer_privatekey_name").value;

  var encrypted_message = await getencryptedmessage(theBLnumber, address_one, address_two);

  console.log("what is the val of encrypted_message");
  console.log(encrypted_message);
  var senderPublicKey_all = await getaccountpublickey(address_two);
  var senderPublicKey = senderPublicKey_all.substring(2);
  var check_bol_generated = false;
  var pre_array = [];
  console.log("- - - - - - - - - -");
  console.log("What is the val of recipientPrivateKey");
  console.log( recipientPrivateKey);
  console.log("What is the val of senderPublicKey");
  console.log( senderPublicKey );
  console.log("- - - - - - - - - -");
  if( encrypted_message == "" ){
    
    console.log("What is the val of encryptedmessage");
    console.log( encrypted_message);
    if ( encrypted_message_count_Importer == 1 ){
      $("#BLtransferstate_Importer").html( $("#BLtransferstate_Importer").html().replace(/提單已產生/,'提單已產生'));
      check_bol_generated = true;
    }
    else{

      $('#BLtransferstate_Importer').append('提單已產生');
      encrypted_message_count_Importer ++;
      check_bol_generated = true;
    }
  }else{
    
    if( check_bol_generated ){

        let decrypted_message = await decryptedmessagereturn(encrypted_message,recipientPrivateKey,senderPublicKey);
        console.log("Man why this one is weird");
        $("#BLtransferstate_Importer").html( $("#BLtransferstate_Importer").html().replace(/提單已產生/,decrypted_message));
    }
    else{

        console.log("Oh yeahhhhhh the check_bol_generated is false!!!");
        let decrypted_message = await decryptedmessagereturn(encrypted_message,recipientPrivateKey,senderPublicKey);
        pre_array.push(decrypted_message);
        let pre_message = pre_array[0];
        console.log("What is the val of pre_message......");
        console.log(pre_message);
        $("#BLtransferstate_Importer").append(pre_message);
        pre_array.splice(0, 1);
    }
  }
}


async function showLCTransferstate(_from_address, _to_address){

  
  let transfer_result = await getLCTransferstate(_from_address, _to_address);
  console.log("Woww we get the right LCTransferstate");
  console.log( LC_transfer_state[transfer_result] );
  $('#LoCtransferstate_Importer').append( LC_transfer_state[transfer_result] );

}

/*accepts stands for exporter asks for importer*/
/*The below accepts, we will comment out because it is Letter of Credit one*/ 
/*function accepts( from_address, to_address){

   return LCtransferPseudoRest.methods.accepts(from_address, to_address).send(
   {
      from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
      gas: defaultGas
   }).then( function(error,result){
      
      if(result){
          console.log("Oh yeah we found that he can accepts");
          console.log("result %o",result);
      }
      else{
        console.log(error);
      }
   }); 
}*/


function makeshipment(from_address, to_address){

   return LCtransferPseudoRest.methods.makeshipment(from_address, to_address).send(
   {
      from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
      gas: defaultGas
   }).then( function(error,result){
      
      if(result){
          console.log("Oh yeah we found that he can makeshipment");
          console.log("result %o",result);
      }
      else{
        console.log(error);
      }
   });

}

/*2020/12/15 add*/
function get_cookie_BL_number(BLnumber_option){

  var _BLnumber = BLnumber_option + "=";
  /*console.log("Oh yeah, we are in the getting_cookie_BL_number_stage");*/
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {

    var c = ca[i];/*此行的目的主要是將最外面的[]清掉*/
    /*console.log("For loop for c");
    console.log(c); -> 這行會顯示username=John 也就是將括號順利清掉了*/
    while (c.charAt(0) == ' ') {

      c = c.substring(1);
      /*此行主要是看username=John前面是否有空格*/
    }
    if (c.indexOf( _BLnumber ) == 0) {
      return c.substring( _BLnumber.length, c.length);
    }

  }
}


function getLCTransferstate(_from_address, _to_address){
  
  return LCtransferPseudoRest.methods.getLC(_from_address, _to_address).call().then( function(LCTransferstate){  
      return LCTransferstate;
  });


}



async function showLCTransferstate(_from_address, _to_address){

  
  let transfer_result = await getLCTransferstate(_from_address, _to_address);
  console.log("Woww we get the right LCTransferstate");
  console.log( LC_transfer_state[transfer_result] );
  $('#LoCtransferstate_Importer').append( LC_transfer_state[transfer_result] );

}


function getaccountpublickey(choosed_account){

  return AccountPseudoRest.methods.getAccountKey(choosed_account).call().then( function(user_key){
      return user_key; 
  });

}


async function showpublickeybasedonrole( choosed_role ){
      let user_key = await getaccountpublickey(choosed_role);
      alert("如下為您的公鑰:"+ user_key);
}

async function executeonImporterOption(operation_option, theBLnumber, address_one, address_two, address_three){


  /*2020/12/10 add*/
  let theBLindex = await getBLMappingIndex(theBLnumber);
  if( operation_option == "建立交易"  ){

      console.log("Now we will make transaction");
      /*here we need to add the index*/
      request_from_Importer_and_encrypt( theBLindex, address_one, address_two, address_three);
  }

  /*Importer to shipper*/
  if( operation_option == "提示提單"  ){
      console.log("Now we will show the BL");
      request_from_Importer_and_showtheBL( theBLindex, address_one, address_two, address_three);
  }

  if( operation_option == "提貨"  ){
      console.log("Now we will take the stuff");
      request_from_Importer_and_taketheStuff( theBLindex, address_one, address_two, address_three);
  }
}

/*2020/11/14 Exporter's one still not sure yet, I will change tho*/
async function executeonExporterOption(operation_option, theBLnumber, address_one, address_two, address_three ){

  /*2020/12/10 add*/
  var theBLindex = await getBLMappingIndex( theBLnumber );
  if( operation_option == "接收交易" ){

      console.log("Now we will accept the transaction");
      accept_from_Exporter_and_encrypt( theBLindex, address_one, address_two, address_three);
  }

  if( operation_option == "洽訂艙位"  ){
      console.log("Now we will book the cabin");
      book_from_Exporter_and_encrypt( theBLindex, address_one, address_two, address_three);
  }

  if( operation_option == "裝船"  ){
      console.log("Now we will loadonship");
      loadonship_from_Exporter_and_encrypt( theBLindex, address_one, address_two, address_three);
  }

  if( operation_option == "裝船通知"  ){
      console.log("Now we will loadonship and notify");
      shipnotification_from_Exporter_and_encrypt( theBLindex ,address_one, address_two, address_three);
  }

}




/*2020/12/4 add, this one is for carrier*/
async function executeonCarrierOption(operation_option, theBLnumber, address_one, address_two, address_three){

  /*2020/12/16 add*/
  var theBLindex = await getBLMappingIndex( theBLnumber );

  if( operation_option == "交付提單"  ){
      console.log("Now we will deliver BL");
      deliverBL_from_Carrier_and_encrypt( theBLindex, address_one, address_two, address_three);
  }

  /*Importer to shipper*/
  if( operation_option == "發行小提單"  ){

      console.log("Now we will issue DO");
      issueDO_from_Carrier_and_encrypt( theBLindex, address_one, address_two, address_three);
  }


}

/*2020/12/20 add*/
/*This one for exporter*/
async function show_all_the_BL_Importer_records(theBLnumber){

    console.log("The BL_records");
    var recipientPrivateKey = document.getElementById("Importer_privatekey_name").value;

    console.log("- - - - - - -");
    console.log("What is the val of recipientPrivateKey");
    console.log(recipientPrivateKey);
    console.log("- - - - - - -");

    for(var index=0; index<6; index++){
        
        let BL_result = getencryptedmessagefromstack(theBLnumber, index);
        BL_result.then( function(result){
            
            decrypt_BL_result(result,recipientPrivateKey);

        });
    }

}

async function show_all_the_BL_exporter_records(theBLnumber){

    console.log("The BL_records");
    var recipientPrivateKey = document.getElementById("exporter_privatekey_name").value;

    console.log("- - - - - - -");
    console.log("What is the val of recipientPrivateKey");
    console.log(recipientPrivateKey);
    console.log("- - - - - - -");

    for(var index=8; index<13; index++){
        

        let BL_result = getencryptedmessagefromstack(theBLnumber, index);
        BL_result.then( function(result){
            
            decrypt_BL_result(result,recipientPrivateKey);

        });
    }

}


async function show_all_the_BL_Carrier_records(theBLnumber){

    console.log("The Carrier records");
    var recipientPrivateKey = document.getElementById("carrier_privatekey_name").value;

    for(var index=0; index<8; index++){

        let BL_result = await getencryptedmessagefromstack(theBLnumber, index);
        console.log("- - - - - - - - -");
        console.log("Index:", index);
        console.log( "Address_one: ", BL_result['address_one'] );
        console.log( "Address_two: ", BL_result['address_two'] );
        console.log("- - - - - - - - -");
        /*BL_result.then( function(result){
            
            /*2020/12/23 add the address two since it may not able to decrypt*/
            /*var address_two = result['address_two'];
            var address_one = result['address_one'];
            
            /*console.log("- - - - - - - - -");
            console.log("Index");
            console.log(index)
            console.log("Address_one");
            console.log(address_one);
            console.log("Address_two");
            console.log(address_two);
            console.log("- - - - - - - - -");
            if( address_two == '0xCE6C125D972360dfe3A21d1d7BC48D91b27fcd28'){
                decrypt_BL_result(result,recipientPrivateKey);
            }
              /*get stuck in here*/
              /*The address two should be carrier, so that it can decrypt
        });*/
    }

}



/*2020/12/20 add*/
async function decrypt_BL_result( result, recipientPrivateKey){

    console.log("66666_BL Resulttttttting_66666");
    var encrypted_message = result['encrypted_message'];

    var address_one = result['address_one'];
    var address_two = result['address_two'];
    var senderPublicKey_all = await getaccountpublickey(address_one);
    var senderPublicKey = senderPublicKey_all.substring(2);
    let decrypted_message = await decryptedmessagereturn( encrypted_message,recipientPrivateKey,senderPublicKey);
    console.log("What is the val of decrypted_message");
    console.log( decrypted_message );
    /*$("#Bill_of_ladings_record_table tbody").append('<tr><td>'+ result['address_one'] +'</td><td>' +
    address_two + '</td><td>' + result['_message_registration_time'] + '</td><td>' + decrypted_message + '</td></tr>');*/
}


function get_cookie_BL_number(BLnumber_option){

  var _BLnumber = BLnumber_option + "=";
  /*console.log("Oh yeah, we are in the getting_cookie_BL_number_stage");*/
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {

    var c = ca[i];/*此行的目的主要是將最外面的[]清掉*/
    /*console.log("For loop for c");
    console.log(c); -> 這行會顯示username=John 也就是將括號順利清掉了*/
    while (c.charAt(0) == ' ') {

      c = c.substring(1);
      /*此行主要是看username=John前面是否有空格*/
    }
    if (c.indexOf( _BLnumber ) == 0) {
      return c.substring( _BLnumber.length, c.length);
    }

  }
}


window.onload = function(){

    $("#okBtncheckA").click( function(){
         
          setTimeout(function(){
              request( _from_address, _to_address );      
          },10);
    });

    $("#okBtnqueryA").click( function(){
         
          setTimeout(function(){
               showLCTransferstate();     
          },10);
    });
    
    /*2020/11/5這邊多加一個帳號移轉資訊*/
    /*This function is related to product_and_bill_of_lading_Im_Exporter 的*/
    $("#LoCstatussubmit_Importer").click( function(event){
        
        /*2020/11/5 getuserrolegromImExporter 之後再加 先假設是exporter*/
        /*var from_address = getuserrolefromImExporter();*/
        var from_address = '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b';
        var to_address = '0x3C95107cAd460D3989F2dB09606BB436c2f47482';
        setTimeout( function(){
            showLCTransferstate( from_address, to_address);
        },10);
    });
    /*2020/11/5 this one we don't need now*/
    /*$("#account_two_status_Importer").change( function(){
        var choosed_role = $("#account_two_status_Importer").val();
        showpublickeybasedonrole( choosed_role );
    });*/

    
    $("#account_two_operation_exporter_unit").change( function(){

        var operation_option = $("#account_two_operation_exporter_unit").val();
        /*2020/12/15 edit*/
        var theBLnumber = get_cookie_BL_number("BLnumber");
        console.log("BLnumber!!!!!....");
        console.log(theBLnumber);
        var address_one = '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b';
        var address_two = $("#account_two_operation_exporter").val();

        if(address_two == '0x3C95107cAd460D3989F2dB09606BB436c2f47482'){

           console.log("Oh Yeah the address three is Carrier");
           address_three = '0xCE6C125D972360dfe3A21d1d7BC48D91b27fcd28';

           setTimeout( function(){
              executeonExporterOption(operation_option, theBLnumber, address_one, address_two, address_three);
           },10);

        }

        if(address_two == '0xCE6C125D972360dfe3A21d1d7BC48D91b27fcd28'){

           console.log("Oh Yeah the address three is Importer");
           address_three = '0x3C95107cAd460D3989F2dB09606BB436c2f47482';
           setTimeout( function(){
              executeonExporterOption(operation_option, theBLnumber, address_one, address_two, address_three);
           },10);
        }

    });

    /*2020/11/13 it is because for importer, address_one will always be importer's address*/
    /*But address_two is based on the option the importer chooses*/
    $("#account_two_operation_Importer_unit").change( function(){

        var operation_option = $("#account_two_operation_Importer_unit").val();

        var theBLnumber = get_cookie_BL_number("BLnumber");
        console.log("BLnumber!!!!!....");
        console.log(theBLnumber);

        var address_one = '0x3C95107cAd460D3989F2dB09606BB436c2f47482';
        var address_two = $("#account_two_operation_Importer").val();

        /*2020/11/28 add*/
        if(address_two == '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b'){

           console.log("Oh Yeah the address three is Carrier")
           address_three ='0xCE6C125D972360dfe3A21d1d7BC48D91b27fcd28';  
           setTimeout( function(){
              executeonImporterOption(operation_option, theBLnumber, address_one, address_two, address_three);
           },10);
        }
        if(address_two == '0xCE6C125D972360dfe3A21d1d7BC48D91b27fcd28'){

           console.log("Oh Yeah the address three is Exporter");
           address_three = '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b';
           setTimeout( function(){
              executeonImporterOption(operation_option, theBLnumber, address_one, address_two, address_three);
           },10);

        }

    });

    /*2020/12/4 add for carrier request*/
    $("#account_two_operation_carrier_unit").change( function(){
        
        var operation_option = $("#account_two_operation_carrier_unit").val();
        var theBLnumber = get_cookie_BL_number("BLnumber");
        console.log("BLnumber!!!!!....");
        console.log(theBLnumber);

        var address_one = '0xCE6C125D972360dfe3A21d1d7BC48D91b27fcd28';
        var address_two = $("#account_two_operation_carrier").val();
        /*2020/11/28 add*/
        if(address_two == '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b'){

           console.log("Oh Yeah the address three is Importer");
           address_three ='0x3C95107cAd460D3989F2dB09606BB436c2f47482';  
           setTimeout( function(){
              executeonCarrierOption(operation_option, theBLnumber, address_one, address_two, address_three);
           },10);
        }

        if(address_two == '0x3C95107cAd460D3989F2dB09606BB436c2f47482'){

           console.log("Oh Yeah the address three is Exporter");
           address_three = '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b';
           setTimeout( function(){
              executeonCarrierOption(operation_option, theBLnumber, address_one, address_two, address_three);
           },10);
        }

    });


    $("#BLstatussubmit_exporter").click( function(){

        var theBLnumber = get_cookie_BL_number("BLnumber");
        setTimeout( function(){
            query_from_Exporter_and_decrypt(theBLnumber);
        },10);
    });

    $("#BLstatussubmit_Carrier").click( function(){

        var theBLnumber = get_cookie_BL_number("BLnumber");
        console.log("Before Carrier queueing, what is the val of theBLnumber");
        console.log(theBLnumber);

        setTimeout( function(){
            query_from_Carrier_and_decrypt(theBLnumber);
        },10);

    });

    $("#BLstatuscheck_Importer").click( function(){
        
        var theBLnumber = get_cookie_BL_number("BLnumber");

        setTimeout( function(){
            show_all_the_BL_Importer_records(theBLnumber);
        },10);
    });
    /*2020/12/20 add*/
    /*tomorrow starts*/
    $("#BLstatuscheck_Exporter").click( function(){
        
        console.log("Oh yeah, we are doing the sort")
        var theBLnumber = get_cookie_BL_number("BLnumber");

        setTimeout( function(){
             show_all_the_BL_exporter_records(theBLnumber);
             /*let stack_length_promise = getStackLength();
             stack_length_promise.then(function(result){
                 console.log("What is the val of stack_length");
                 console.log(result);
             });*/
        },10);

    });

    $("#BLstatuscheck_Carrier").click( function(){
        
        console.log("Oh yeah, we are doing the sort")
        var theBLnumber = get_cookie_BL_number("BLnumber");

        setTimeout( function(){
             show_all_the_BL_Carrier_records(theBLnumber);
             /*let stack_length_promise = getStackLength();
             stack_length_promise.then(function(result){
                 console.log("What is the val of stack_length");
                 console.log(result);
             });*/
        },10);

    });

};

