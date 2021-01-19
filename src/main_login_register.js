

var contractABI_user_login_register = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "user_account",
        "type": "string"
      },
      {
        "name": "user_password",
        "type": "string"
      },
      {
        "name": "user_role_option",
        "type": "string"
      },
      {
        "name": "user_address",
        "type": "string"
      }
    ],
    "name": "registerUserInfo",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "user_account",
        "type": "string"
      },
      {
        "name": "user_password",
        "type": "string"
      }
    ],
    "name": "checkloginUser",
    "outputs": [
      {
        "name": "",
        "type": "bool"
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
        "name": "user_account",
        "type": "string"
      }
    ],
    "name": "getloginUserInfo",
    "outputs": [
      {
        "name": "user_password",
        "type": "string"
      },
      {
        "name": "user_role_option",
        "type": "string"
      },
      {
        "name": "user_address",
        "type": "string"
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

var contractABI_account_key_message =[
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
    "constant": false,
    "inputs": [
      {
        "name": "_given_current_address",
        "type": "string"
      }
    ],
    "name": "setCurrentWorkingAddress",
    "outputs": [],
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
    "name": "setEncrypt",
    "outputs": [],
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
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
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
        "name": "BL_registration_time",
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
    "inputs": [],
    "name": "getCurrentWorkingAddress",
    "outputs": [
      {
        "name": "_current_working_address",
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
  }
];

/*2020/6/16*/
Web3 = require('web3');
otplib = require('otplib');
qrcode = require('qrcode');
ethers = require('ethers');
InputDataDecoder = require('ethereum-input-data-decoder');

var contractAddress_user_login_register = '0x88ebf5Db99f1c6B401055f7f6852cAE77D02CD6e';
var contractAddress_account_key = '0x99420D024a66409eaD67BA03598C030d73d0cE81';
var web3 = new Web3( new Web3.providers.HttpProvider("http://localhost:7545") );

var UserPseudoRest = new web3.eth.Contract( contractABI_user_login_register, contractAddress_user_login_register );
var AccountPseudoRest = new web3.eth.Contract( contractABI_account_key_message, contractAddress_account_key );
/*var Message = MessagePseudoRest.at(contractAddress);*/

var defaultGas = 900000;

/*2020/12/25 add*/
/*Maybe this one can not be, we will add the other one*/
var  exporter_first_address_used = false;
var  importer_first_address_used = false;
var  carrier_first_address_used = false;
var  warehouser_first_address_used = false;


function registerUserInfo( user_account, user_password, user_role_option, user_address){

  return UserPseudoRest.methods.registerUserInfo( user_account, user_password, user_role_option, user_address).send(
  {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
  }).then( function(error,result){
      
      if(result){
        console.log("result %o",result);
      }
      else{
        console.log(error);
      }     
  });
}


async function user_role_to_ganache_account(user_role_option){

  return AccountPseudoRest.methods.getAccountCareer( user_role_option ).call().then( function(user_account){
      return user_account;
  });

}

async function setAccountwithKey(user_address, pub_key){

  return AccountPseudoRest.methods.setAccountKey(user_address, pub_key).send(
  {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
  }).then( function(error,result){
      if(result){
        console.log("result %o",result);
      }
      else{
        console.log(error);
      }
  });
}


/*2020/12/26 add*/
async function setCurrentWorkingAddress( result, _given_current_address ){
  
  if(result){

    return AccountPseudoRest.methods.setCurrentWorkingAddress( _given_current_address ).send(
    {
      from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
      gas: defaultGas
    }).then( function(error,result){

        if(result){
          console.log("result %o",result);
        }
        else{
          console.log(error);
        }
    });
  }
  /*return AccountPseudoRest.methods.setCurrentWorkingAddress( _given_current_address ).send(
  {
    from: '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b',
    gas: defaultGas
  }).then( function(error,result){

      if(result){
        console.log("result %o",result);
      }
      else{
        console.log(error);
      }
  });*/
}

/*2020/12/26 add*/
async function getCurrentWorkingAddress(){
   
   return AccountPseudoRest.methods.getCurrentWorkingAddress().call().then( function(current_working_address){
      return current_working_address; 
   });

}


/*2020/12/26 add*/
function getaccountpublickey(choosed_account){

  return AccountPseudoRest.methods.getAccountKey(choosed_account).call().then( function(user_key){
      return user_key; 
  });

}



async function getloginUserInfo( user_login_account ){

  return UserPseudoRest.methods.getloginUserInfo( user_login_account ).call().then( function( user_info){
      return user_info;
  });

}

/*2020/11/10 更改*/
/*If we already had the user_address from AccountPseudoRest,
then we can use generateKeyPair to get the key from the user_address*/
/*Then we can also use AccountPseudoRest to set the account with corresponding key*/

/*2020/12/25 add*/

async function addUserinfo(result){

    if(result){

        var user_account = $("#accountregisterA").val();
        var user_password = $("#passwordregisterA").val();
        var user_role_option = $("#user_career_register option:selected").text(); 
        /*2020/12/25 add*/
        

        if( user_role_option == 'Exporter' ){

            console.log("What is the val of exporter_first_address_used");
            console.log(exporter_first_address_used);

            if( exporter_first_address_used ){

                 var user_address = '0x3cF2DEdffC74ab8776f61C2d7F261c121c16F45c';
                 console.log("Yep we get the second user_address");

            }
            else{

                var user_address = await user_role_to_ganache_account(user_role_option);
                console.log("The first exporter user_address");
                console.log( user_address );
                /*2020/12/28 add smart contract*/
                exporter_first_address_used = true;

            }

        }

        if( user_role_option == 'Importer' ){
            
            if( importer_first_address_used ){
                 
                var user_address = '0x9eb378EFfa2bE988B96431B421bEd2F859006A94';
                console.log("Yep we get the second Importer user_address");

            }
            else{

                var user_address = await user_role_to_ganache_account(user_role_option);
                console.log("The first importer user_address");
                console.log( user_address );
                importer_first_address_used = true;
            }

        }

        if( user_role_option == 'Carrier'){
        
            if( carrier_first_address_used ){
                 
                 var user_address = '0x87919efD1fbBEC204aA429fab906C5AF0196E795';
                 console.log("Yep we get the second carrier user_address");
            }
            else{

                var user_address = await user_role_to_ganache_account(user_role_option);
                console.log("The first carrier user_address");
                console.log( user_address );
                carrier_first_address_used = true;
            }

        }

        if( user_role_option == 'Warehouser'){
        
            if( warehouser_first_address_used ){
                 
                 var user_address = '0x85630122aFCabdbEcB163763b5005562E9B527d5';
                 console.log("Yep we get the second warehouser user_address");
            }
            else{
                
                 var user_address = await user_role_to_ganache_account(user_role_option);
                 console.log("The first warehouser user_address");
                 console.log( user_address );
                 warehouser_first_address_used = true;

            }

        }
        let pub_key = await generatePublicKey(user_address);
        let account_with_key = await setAccountwithKey(user_address, pub_key);
        let user_registered_info = await registerUserInfo( user_account, user_password, user_role_option, user_address);
        console.log("After");
        console.log("The val of user_address");
        console.log( user_address );
        console.log("The val of pub_key");
        console.log( pub_key );
        console.log("OK_we_finish_adding_the_user_role_option");
        console.log( user_role_option );        
        return pub_key;
    }

}


/*2020/6/4號加的,因為是偵測PasswordWrongn所以若是
密碼一樣的話會return false*/
function PasswordWrongCheck(){

    var password  = $("#passwordregisterA").val();
    var retype_password = $("#passwordcheckregisterA").val();
    console.log(password);
    console.log(retype_password);
    if( password == retype_password){
        console.log("There_is_no_wrong_password");
        return false;
    }
    else{
        console.log("Password_missmatch_occurs");
        return true;
    }
}

function showUserinfo( user_login_info ){
    
    var show_user_password = user_login_info["user_password"];
    var show_user_role_option = user_login_info["user_role_option"];
    var show_user_address = user_login_info["user_address"];
    console.log("Showing_user_password\n");
    console.log( show_user_password );
    console.log("Showing_user_role_option\n");
    console.log( show_user_role_option );
    console.log("Showing_user_address_option\n");
    console.log( show_user_address);

}


async function getloginUserInfo( user_login_account ){

  return UserPseudoRest.methods.getloginUserInfo( user_login_account ).call().then( function( user_info){
      return user_info;
  });

}

/*2020/06/16 確定可以根據職業而印出wowwwww或是Yeaaaaa*/
async function getloginUserInfoafteradd(){

    var user_login_account = $("#accountloginA").val();
    let user_login_info = await getloginUserInfo( user_login_account );
    /*showUserinfo( user_login_info );*/
    var show_user_role_option = user_login_info["user_role_option"];
    var show_user_password = user_login_info["user_password"];
    var show_user_address = user_login_info["user_address"];

    /*2020/12/26*/
    /*Here we need the pub_key in order to put it into the variable in the smart contract*/
    console.log("The val of current working address");
    console.log( show_user_address );

    /*2020/11/27 add*/
    if( show_user_role_option == 'Exporter' ){

          set_cookie("EXP");
          /*2020/12/28 add*/
          setTimeout(function(){

              add_user_promise = suretoadd();
              add_user_promise.then(function(result){
                  setCurrentWorkingAddress( result, show_user_address).then( function(){

                      window.location.href = './product_and_bill_of_lading_logout_all_Exporter.html';
                      console.log("Successful redirect into product_and_bill_of_lading_logout_all_Exporter.html");
                  });
              })
          },10);

    }


    if( show_user_role_option == 'Importer'){

          set_cookie("IMP");
          /*2020/12/28 add*/
          setTimeout(function(){

              add_user_promise = suretoadd();
              add_user_promise.then(function(result){

                  setCurrentWorkingAddress(result, show_user_address).then( function(){

                      window.location.href = './product_and_bill_of_lading_logout_all_Importer.html';
                      console.log("Successful redirect into product_and_bill_of_lading_logout_all_Importer.html");
                  });
              })
          },10);
    }

    if( show_user_role_option == 'Carrier'){

          set_cookie("CAR");
          /*2020/12/28 add*/
          setTimeout(function(){
               
              add_user_promise = suretoadd();
              add_user_promise.then(function(result){
                  
                  setCurrentWorkingAddress(result, show_user_address).then( function(){

                      window.location.href = './product_and_bill_of_lading_logout_all_Carrier.html';
                      console.log("Successful redirect into product_and_bill_of_lading_logout_all_Carrier.html");
                  });
              })
          },10);
    }

    /*2021/1/14 add*/
    if( show_user_role_option == 'Warehouser'){

          set_cookie("WARE");
          setTimeout(function(){
               
              add_user_promise = suretoadd();
              add_user_promise.then(function(result){
                  
                  setCurrentWorkingAddress(result, show_user_address).then( function(){

                      window.location.href = './product_and_bill_of_lading_logout_all_Warehouser.html';
                      console.log("Successful redirect into product_and_bill_of_lading_logout_all_Warehouser.html");
                  });
              })
          },10);

    }

    /*if( show_user_role_option == 'Shipper' || show_user_role_option == 'Forwarder' || show_user_role_option == 'Carrier'){
          
          /*document.cookie = "role=SFC; expires=Thu, 18 June 2020 07:28:00 UTC; path=/Users/timothy/eth_todo_list_easy/src/login.html";*/
          /*set_cookie("SFC");
          window.location.href = './product_and_bill_of_lading_logout.html';
          console.log("Successful redirect into product_and_bill_of_lading.html");
    }
    /*if( show_user_role_option == 'Logistics' || show_user_role_option == 'Carrier' ){

          /*document.cookie = "role=LC; expires=Thu, 18 June 2020 07:28:00 UTC; path=/Users/timothy/eth_todo_list_easy/src/login.html";*/
          /*如上為直接set cookie 的方式, 但是需要透過function而setCookie
          set_cookie("LC");  
          window.location.href = './product_logout.html';
          console.log("Successful redirect into product.html");
    }*/
}

/*這個要用的原因是因為suretoadd可以變成promise然後
再透過此promise讓addUserinfo可以順利執行*/
/*此suretoadd也可讓getloginUserInfoafteradd可以順利執行*/
async function suretoadd(){
    return true;
}

    
function checkloginUser() {

  var user_account = $("#accountloginA").val();
  var user_password = $("#passwordloginA").val();
  return UserPseudoRest.methods.checkloginUser(user_account, user_password).call().then( function(result){
      return result;
  });
}

/*2020/12/27 changes, but we do not need this one now*/
/*function getCookie(){

  let split_document_cookie = document.cookie.split('=');
  var parsed_document_cookie = JSON.parse(split_document_cookie[0]);
  return parsed_document_cookie;
}*/

/*2020/06/16 確定可以submit cookie_name 給網站*/
function getCookie( role_option ){

  var role = role_option + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');

  /*console.log("The val of ca\n");
  console.log(ca); -> 這行會顯示[“username=John]
  console.log("The length of ca\n");
  console.log(ca.length); -> 這行會顯示1 */

  for(var i = 0; i <ca.length; i++) {

    var c = ca[i];/*此行的目的主要是將最外面的[]清掉*/
    /*console.log("For loop for c");
    console.log(c); -> 這行會顯示username=John 也就是將括號順利清掉了*/
    while (c.charAt(0) == ' ') {

      c = c.substring(1);
      /*此行主要是看username=John前面是否有空格*/
    }
    if (c.indexOf(role) == 0) {
      return c.substring(role.length, c.length);
    }

  }

}







/*2020/12/26 changes*/
/*Not only do the role option, we also need the public key option*/
/*And we try to extend the time to three minutes*/
function set_cookie( role_val ) {

  const time_now = Date.now();
  const twenty_minutes_time_now = time_now + 20*60*1000;
  
  var current_time = new Date( time_now );
  var twenty_current_time = new Date( twenty_minutes_time_now );
  console.log("Current Time");
  console.log( current_time);
  console.log("Ten Current Time");
  console.log( twenty_current_time );

  var expires = "expires="+ twenty_current_time.toUTCString();
  /*2020/12/27 below is one of the option, if the cookie is not limited to one key-value pair*/
  /*document.cookie = JSON.stringify({publickey: pub_key, role: role_val});*/
  document.cookie = "role=" + role_val + "; " + expires;
  
}

/*2020/6/18 當logout的時候,cookie的值就要設為unset,如此就不會再次redirect*/
/*而當cookie 為unset之後,因為每一次的重新login 都會重新執行check_cookie*/
async function check_cookie(){

  /*add the current time now*/
  const time_now = Date.now();
  /*const ten_minutes_later_time = time_now + 10*60*1000;*/

  var current_time = new Date( time_now );
  /*var ten_minutes_later = new Date( ten_minutes_later_time );*/
  var user_role_option = getCookie("role");
  /*console.log("Ten minutes later");
  console.log( ten_minutes_later.toUTCString());*/

  if ( user_role_option == "EXP"){

        window.location.href = './product_and_bill_of_lading_logout_all_Exporter.html';
  }
  else if( user_role_option == "IMP" ){

        window.location.href = './product_and_bill_of_lading_logout_all_Importer.html';
  }
  else if( user_role_option == "CAR"){
         
        window.location.href = './product_and_bill_of_lading_logout_all_Carrier.html';
  }
  else if( user_role_option == "WARE"){

        window.location.href = './product_and_bill_of_lading_logout_all_Warehouser.html';
  }
  else if( user_role_option == "notset"){

        console.log("No role now");
  }
  else{
        console.log("很抱歉,請再執行一次～");
  }

}

async function delete_cookie(){

    console.log("delete_the_cookie");
    document.cookie = "role=; expires=Thu, 01 Jan 1970 00:00:01 UTC; path=/Users/timothy/eth_todo_list_easy/src/login.html";
}

/*2020/11/6 add*/
/*Generate Key Pair does not generate publickey and privatekey*/
/*It only generates publickey*/
async function generatePublicKey( user_address ){

    const provider = new ethers.providers.JsonRpcProvider('http://localhost:7545');
    /*provider.getSigner(1) refers to account 1 in ganache console
    provider.getSigner(2) refers to account 2 in ganache console*/
    /*2020/12/26 editted, now we need to consider other addresses*/ 
    /*This one refers to exporter one*/
    if( user_address == "0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b" ){
        var get_signer_index = 0;
    }

    /*This one refers to exporter two*/
    if( user_address == "0x3cF2DEdffC74ab8776f61C2d7F261c121c16F45c" ){
        var get_signer_index = 2;
    }

    /*This one refers to importer one*/
    if( user_address == "0x3C95107cAd460D3989F2dB09606BB436c2f47482" ){
        var get_signer_index = 1;
    }

    /*This one refers to importer two*/
    if( user_address == "0x9eb378EFfa2bE988B96431B421bEd2F859006A94"){
        var get_signer_index = 3;
    }

    /*This one refers to carrier one*/
    if( user_address == "0xCE6C125D972360dfe3A21d1d7BC48D91b27fcd28" ){
        var get_signer_index = 4;
    }
    
    /*This one refers to carrier two*/
    if( user_address == "0x87919efD1fbBEC204aA429fab906C5AF0196E795") {
        var get_signer_index = 5;
    }

    /*2021/1/14 changes*/
    /*This one refers to warehouse one*/
    if( user_address == "0x14f98C27a8cCAFCD55D026802B3Bb9ABe6E6B0e2"){
        var get_signer_index = 6;
    }

    if( user_address == "0x85630122aFCabdbEcB163763b5005562E9B527d5"){
        var get_signer_index = 7;
    }
    const signer = provider.getSigner(get_signer_index);
    const ethAddress = await signer.getAddress();
    const hash = await ethers.utils.keccak256( ethAddress );
    const sig = await signer.signMessage(ethers.utils.arrayify(hash));
    const pubKey = ethers.utils.recoverPublicKey(ethers.utils.arrayify(ethers.utils.hashMessage(ethers.utils.arrayify(hash))), sig);
    return pubKey;
    /*let address = ethers.utils.computeAddress(pubKey);
    console.log("The recovering address is");
    console.log(address);*/
    /*console.log("How_do_you_generate_the_key_pair");
    var signer = new ethers.utils.SigningKey("0x2efb9347340bec06148b2b1dd9748c7e08f07f815df04159bbd001ae73bf7c2b");
    console.log("What is the val of signer");
    console.log( signer.privateKey);*/
    /*var message = "Hello World";
    var messageBytes = ethers.utils.toUtf8Bytes(message);
    var messageDigest = ethers.utils.keccak256(messageBytes);
    console.log("Digest: " + messageDigest);
    var signature = signingKey.signDigest(messageDigest);
    console.log("Now we need to generatekeypair");
    console.log(signature);*/
}




/*2020/6/9 此function 實作目前不會用到*/
/*2020/12/3 recently we need this*/
async function getTransactionblock(){
    
    /*Recent block ranges from 116 and 115*/
    /*And the abi is related to contractABI_account_key_message*/
    const decoder = new InputDataDecoder(contractABI_account_key_message);
    block_transaction =  web3.eth.getTransaction('0xca38779e50bfc067097974a6ba48ecadbc86ac7cca3438eb33073d9fd0daf0a1');
    block_transaction.then( function(result){
      
        block_transaction_input = result['input'];
        const final_result = decoder.decodeData(block_transaction_input);
        console.log("What is the val of block_transaction_input");
        console.log( block_transaction_input );
        console.log("What is the val of final_result");
        if ( final_result['method'] == 'setAccountKey'){
          console.log("Oh where_are_you");
        }
        console.log("What is the val of result");
        console.log( final_result['inputs'][0] );
        /*input_info =  web3.utils.hexToString( block_transaction_input );
        input_hex  =  web3.utils.asciiToHex( input_info);
        input_char =  String.fromCharCode( input_info );
        input_utf8 =  web3.utils.toUtf8( block_transaction_input );
        utf8_to_hex = web3.utils.utf8ToHex('jimmy b84807599   Forwarder')*/

        /*2020/6/8 the input of transaction hash 可能是byte array 而不是hex array*/
        /*console.log("\nThe input of transaction hash\n");
        console.log( block_transaction_input );

        console.log("\nThe Ascii code of input\n");
        console.log( input_info );

        console.log("\nThe char code of input\n");
        console.log( input_utf8 );

        console.log("\nThe hex code of input\n");
        console.log( input_hex );

        
        console.log("\nUtf 8 to hex\n");
        console.log( utf8_to_hex );*/
        
    });
}


window.onload = function() {

    check_cookie();
    $("#okBtnRegisterA").click( function(event){


        check = PasswordWrongCheck();
        console.log(check);
        if( check ){

            alert("請再次確認密碼～");
            return;
        }
        else{
         
          setTimeout(function(){
                
                add_user_promise = suretoadd();
                add_user_promise.then( function(result){

                    addUserinfo(result).then( function(result){
                        alert("如下為您的公鑰:"+ result);
                        /*window.location.href = './login.html';*/
                    });

                })
                .catch(function(error){
                    console.log( error.message );
                })

          },10);
          
        }
        /*2020/10/20 practice generateOTP()*/
        /*
        var OTP_result = generateOTP();
        console.log("The_OTP_result");
        console.log(OTP_result);*/

    });


    $("#okBtnLoginA").click( function(){

      setTimeout( function(){

          check_login_promise = checkloginUser();
          check_login_promise.then( function(result){

              if(result){

                  /*getloginUserInfoafteradd().then( function(result){
                    submitCookie();   
                  });*/
                  getloginUserInfoafteradd();
              }
              else{
                  alert("此帳號不存在請再次確認～");
                  console.log("Check Got failed");
              }
          })

      },10);
    });


    /*2020/11/6號 add*/
    /*This one is checking whether we can successfully generate the keypair or not*/ 
    $("#okBtnCheckA").click( function(){

      setTimeout( function(){
          getTransactionblock();
      },10);

    });

    /*10/26這個暫時不用,因為是跟qrcodegen有關*/
    /*$("#qrcodegen").bind('change', function(){

      setTimeout( function(){

          generateQRcode();

      },10);

    });*/

};

