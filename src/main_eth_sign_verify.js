

Web3 = require('web3');
ethers = require('ethers');
eth_rsa = require('ethereum-rsa');


/*如下是產生private_key的方式
var web3 = new Web3( new Web3.providers.HttpProvider("http://localhost:7545") );
let mnemonic = "laundry pair wet panic cake shallow now giggle wide robust dolphin analyst";
let path = "m/44'/60'/0'/0/1";
let mnemonic_wallet = ethers.Wallet.fromMnemonic(mnemonic,path);
let private_key = mnemonic_wallet.privateKey;
/*console.log("The val of private_key");
console.log(mnemonic_wallet.privateKey);*/

async function sign_message() {

    var message = document.getElementById("message_to_sign").value;
    console.log("- - - - -- - - - -");
    console.log("The_original_message");
    console.log(message);
    console.log("- - - - -- - - - -");
    if (document.getElementById("hash_check").checked) {
        
        console.log("Yep,now we will change it into sha3");
        message = web3.utils.sha3(message);
    }
    console.log("- - - - -- - - - -");
    console.log("Ohh,this is the hashed Message");
    console.log(message);
    console.log("- - - - -- - - - -");

    /*2020/11/16*/
    /*The privatekey is the importer's one*/
    /*The publickey  is the exporter's one*/
    var senderPrivateKey = '2efb9347340bec06148b2b1dd9748c7e08f07f815df04159bbd001ae73bf7c2b';
    var recipientPublicKey = '04ded64145bc2d7ffa2c409542adbf7b14549f873c8672b99ea6812e394ed747cb954f71b7484c3cd233b74d3ca559d90612e4d0d619d8065a3d71a982158f70bb';
    let encrypted_message = eth_rsa.encryptMessage(message, senderPrivateKey, recipientPublicKey);
    console.log("What is the val of encrypted_message");
    console.log(encrypted_message);


    /*var signature = await web3.eth.accounts.sign(message, private_key);
    console.log("Ok! Now we are getting the signature");
    console.log(signature)
    document.getElementById("signature_output").innerText = signature*/

}


var sign_message_button = document.getElementById("sign_message_button")
sign_message_button.addEventListener("click", sign_message);


async function decrypt_message(){

    /*var message = document.getElementById("message_to_verify").value
    var signature = document.getElementById("signature").value
    if (document.getElementById("hash_check").checked) {
        message = web3.eth.accounts.hashMessage(message);
    }
    var signing_address = await web3.eth.accounts.recover(message, signature)
    document.getElementById("signing_address_output").innerText = signing_address;*/
    /*since we want to decrypt_message, we need the importer's public key and exporter's private key*/
    /*2020/11/16 sender is importer, and receiver is exporter*/
    var senderPublicKey= '0426656fef12f8f240e14c32506cc2649ef4132a74765525226631245911d0db7beb26c5595ad3c00ca753a8a506243222973f89557b024f2adc5fec8826ccf9c1';
    var recipientPrivateKey = '5f6ecd5b4a3cbd6826fd737fc2d5e933ca833f5990bd0bdbb218945a482f66f3';
    var encryptedMessage = "P2Q00vKMcOZcGyDlG8sd54zYhcJXtqnD3UfXXFCvatY=";
    eth_rsa.decryptMessage(encryptedMessage, recipientPrivateKey, senderPublicKey).then(console.log);

}

var decrypt_message_button = document.getElementById("decrypt_message_button");
decrypt_message_button.addEventListener("click", decrypt_message);










