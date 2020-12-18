




async function request_from_Importer_and_encrypt( address_one, address_two, address_three ){
  
  /*2020/11/28 there are three addresses for requestfromImporter*/
  /*address_two's public key relates to recipientPublicKey_all_one*/
  /*address_three's public key relates to recipientPUblicKey_all_two*/
  let request_from_Importer = await requestfromImporter(address_one, address_two, address_three);


  let message_number = await getBLTransferstate(address_one, address_two);
  let message = BL_transfer_state[message_number];
  console.log("Transaction_Requesting_from_Importer");
  console.log("What is the message of BLTransferstate right now");
  console.log(message);
  console.log("What is the val of address_two");
  console.log(address_two);
  console.log("What is the val of address_three");
  console.log(address_three);


  var senderPrivateKey = '2efb9347340bec06148b2b1dd9748c7e08f07f815df04159bbd001ae73bf7c2b';
  let recipientPublicKey_all_one = await getaccountpublickey('0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b');
  console.log("Step_one");
  console.log("What is the val of recipientPublicKey_all_one");
  console.log(recipientPublicKey_all_one);
    
  let recipientPublicKey_all_two = await getaccountpublickey('0xCE6C125D972360dfe3A21d1d7BC48D91b27fcd28');
  console.log("Step_two");
  console.log("What is the val of recipientPublicKey_all_two");
  console.log(recipientPublicKey_all_two);

  var recipientPublicKey_one = recipientPublicKey_all_one.substring(2);

  console.log("Step_three");
  console.log("What is the val of recipientPublicKey_one");
  console.log(recipientPublicKey_one);

  var recipientPublicKey_two = recipientPublicKey_all_two.substring(2);
  console.log("Step_four");
  console.log("What is the val of recipientPublicKey_two");
  console.log(recipientPublicKey_two);

  let encrypted_message_one = await encryptedmessagereturn(message, senderPrivateKey, recipientPublicKey_one);
  console.log("Step_five");
  let encrypted_message_two = await encryptedmessagereturn(message, senderPrivateKey, recipientPublicKey_two);
  console.log("Step_six");

  console.log("- - - - - - - - - -");
  console.log("What is the val of address_two");
  console.log(address_two);
  console.log("RecipientPublicKey_one:");
  console.log( recipientPublicKey_one );
  console.log("Encrypted Message:");
  console.log( encrypted_message_one );
  console.log("- - - - - - - - - -\n\n");

  console.log("- - - - - - - - - -");
  console.log("What is the val of address_three");
  console.log(address_three);
  console.log("RecipientPublicKey_two:");
  console.log( recipientPublicKey_two );
  console.log("Encrypted Message:");
  console.log( encrypted_message_two );
  console.log("- - - - - - - - - -");


  let encrypt_finish_one = await messageencrypted(address_one, address_two, encrypted_message_one);
  let encrypt_finish_two = await messageencrypted(address_one, address_three, encrypted_message_two);

}







