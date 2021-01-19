
pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;
contract AccountKeyMessagePseudoRest{
    
    mapping(string => string) private account_key_map;
    mapping(string => string) private account_career_map;
    
    struct En_list{
        
        uint256 BLmapping_id;
        /*address from_address;
        address to_address;
        BLTransferState BLstate;*/
        mapping(address => mapping(address => string)) Encrypt_map;
    }
    
    /*2020/1/18 add*/
    struct En_product_list{
        
        uint256 Productmapping_id;
        mapping(address => mapping(address => string)) Encrypt_product_map;
    }
    
    struct En_message_list{
        
        uint256 BLmapping_id;
        string  BL_registration_time;
        mapping(uint256 => address)  from_address_queue;
        mapping(uint256 => address) to_address_queue;
        mapping(uint256 => string) _message_registration_time_queue;
        mapping(uint256 => string) _message_queue;
        
    }
    
    /*2020/1/18 add*/
    struct En_product_message_list{
        
        uint256 Productmapping_id;
        string  Product_registration_time;
        mapping(uint256 => address)  from_address_queue;
        mapping(uint256 => address) to_address_queue;
        mapping(uint256 => string) _message_registration_time_queue;
        mapping(uint256 => string) _message_queue;
    } 
    
    
    constructor() public{
        
        account_career_map['Exporter'] = '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b';
        account_career_map['Importer'] = '0x3C95107cAd460D3989F2dB09606BB436c2f47482';
        account_career_map['Carrier'] = '0xCE6C125D972360dfe3A21d1d7BC48D91b27fcd28';
        /*2020/1/17 add*/
        account_career_map['Warehouser'] = '0x14f98C27a8cCAFCD55D026802B3Bb9ABe6E6B0e2';
        account_career_map['Registraion_agency'] = '0xC048a66959a14af46d67C4D07bE6936081343099';
        
    }
    
    En_list[] public Encrypt;
    En_message_list[] public Encrypt_message_list;
    
    /*2020/1/17 add*/
    En_product_list[] public Encrypt_product;
    En_product_message_list[] public Encrypt_message_product_list;
    
    uint256 queue_index = 0;
    /*2020/1/18 add*/
    uint256 queue_product_index = 0;
    
    /*2020/12/28 add the other variables*/
    string current_working_address = "notset";
    
    bool exporter_first_address_used = false;
    bool importer_first_address_used = false;
    bool carrier_first_address_used = false;
    
    /*2020/1/16 add the other variables*/
    bool warehouser_first_address_used = false; 
    
    /*2020/12/18 add*/
    mapping (uint256 => uint256) public Encryptmapping_index;
    mapping (uint256 => uint256) public Encryptmessage_index;
    
    /*2020/1/18 add*/
    mapping (uint256 => uint256) public Encrypt_product_mapping_index;
    mapping (uint256 => uint256) public Encrypt_product_message_index;
    /*key-value pair*/
    /*
    publickey:0x04 ded6 4145 bc2d 7ffa 2c40 9542 adbf 7b14 549f 873c 8672 b99e a681 2e39 4ed7 
    47cb 954f 71b7 484c 3cd2 33b7 4d3c a559 d906 12e4 d0d6 19d8 065a 3d71 a982 158f 70bb
    
    address:0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b
    
    publickey:0x04 2665 6fef 12f8 f240 e14c 3250 6cc2 649e f413 2a74 7655 2522 6631 2459 11d0 
    db7b eb26 c559 5ad3 c00c a753 a8a5 0624 3222 973f 8955 7b02 4f2a dc5f ec88 26cc f9c1
    address: 0x3C95107cAd460D3989F2dB09606BB436c2f47482
    
    publickey:0x04 fa89 18ee d4d8 fe28 9321 af2e 2c19 3dfb 4826 ff1c d7ca 5bcb 13fb 7778 a4dd
    d6b1 d49a 5002 ccc1 be45 79c5 f007 d109 b27d 0a02 93e2 5cb5 5498 f475 bb86 8d74 7ddb
    address: 0x3cF2DEdffC74ab8776f61C2d7F261c121c16F45c
    
    publickey: 0x04 8027 8e18 e12c 09cb 9286 4071 b577 e1b0 1eaa 95b8 c51c 1713 4364 f523 d1d9 
    88d7 aefe 2563 d5ca 29a5 f4f8 dba1 521b 0964 5580 9f5a 474c d286 8333 3dd6 5084 5592
    address: 0x9eb378EFfa2bE988B96431B421bEd2F859006A94
    
    publickey: 0x04 dde4 a7d0 a4a9 d687 36d8 0bd9 eeb9 ddda 0dc4 341a f9ad 2432 5b16 b0f0 8d01
    2652 3316 6b75 7c3d c1df 8aad aa29 76e5 04f8 b3a7 21e3 861e 1ead 33df 7bbc a421 88fe
    address:0xCE6C125D972360dfe3A21d1d7BC48D91b27fcd28*/
    
    function setEncrypt(uint256 theBLnumber, string memory thetime) public {
        
        Encrypt.length++;
        Encrypt_message_list.length++;
        Encrypt[ Encrypt.length-1 ].BLmapping_id = theBLnumber;
        
        Encrypt_message_list[ Encrypt_message_list.length-1 ].BLmapping_id = theBLnumber;
        Encrypt_message_list[ Encrypt_message_list.length-1 ].BL_registration_time = thetime;
        
        Encryptmapping_index[theBLnumber] = Encrypt.length-1;
        Encryptmessage_index[theBLnumber] = Encrypt_message_list.length-1;
        
    }
    
    function setProductEncrypt(uint256 theProductnumber, string memory thetime) public {
        
        Encrypt_product.length++;
        Encrypt_message_product_list.length++;
        Encrypt_product[ Encrypt_product.length -1 ].Productmapping_id = theProductnumber;
        
        Encrypt_message_product_list[Encrypt_message_product_list.length-1].Productmapping_id = theProductnumber;
        Encrypt_message_product_list[Encrypt_message_product_list.length-1].Product_registration_time = thetime;
        
        Encrypt_product_mapping_index[theProductnumber] = Encrypt_product.length-1;
        Encrypt_product_message_index[theProductnumber] = Encrypt_message_product_list.length-1;
        
    }
    
    function setEncryptedMessage(uint256 theBLnumber, address address_one, address address_two, string memory thetime, string memory encrypted_message) public {
        
        uint256 Encrypt_index = Encryptmapping_index[theBLnumber];
        queue_index++;
        Encrypt[Encrypt_index].Encrypt_map[address_one][address_two] = encrypted_message;
        Encrypt[Encrypt_index].Encrypt_map[address_two][address_one] = encrypted_message;
        
        Encrypt_message_list[ Encrypt_message_list.length-1 ].from_address_queue[ queue_index-1 ] = address_one;
        Encrypt_message_list[ Encrypt_message_list.length-1 ].to_address_queue[ queue_index-1 ] = address_two;
        Encrypt_message_list[ Encrypt_message_list.length-1 ]._message_registration_time_queue[ queue_index-1 ] = thetime;
        Encrypt_message_list[ Encrypt_message_list.length-1 ]._message_queue[ queue_index-1 ] = encrypted_message;
        
    }
    
    function setProductEncryptedMessage(uint256 theProductnumber, address address_one, address address_two, string memory thetime, string memory encrypted_message) public {
        
        uint256 Encrypt_product_index = Encrypt_product_mapping_index[theProductnumber];
        queue_product_index++;
        Encrypt_product[ Encrypt_product_index ].Encrypt_product_map[ address_one ][ address_two] = encrypted_message;
        Encrypt_product[ Encrypt_product_index ].Encrypt_product_map[ address_two ][ address_one ] = encrypted_message;
        
        Encrypt_message_product_list[ Encrypt_message_product_list.length-1 ].from_address_queue[ queue_product_index-1 ] = address_one;
        Encrypt_message_product_list[ Encrypt_message_product_list.length-1 ].to_address_queue[ queue_product_index-1 ] = address_two;
        Encrypt_message_product_list[ Encrypt_message_product_list.length-1 ]._message_registration_time_queue[ queue_product_index-1 ] = thetime;
        Encrypt_message_product_list[ Encrypt_message_product_list.length-1 ]._message_queue[ queue_product_index-1 ] = encrypted_message;
    }
    
    
    function setCurrentWorkingAddress(string memory _given_current_address) public {
        
        current_working_address = _given_current_address;
    }
    
    function getCurrentWorkingAddress() public view returns(string memory _current_working_address){
        return current_working_address;
    }
    
    function getEncryptedMessage(uint256 theBLnumber, address address_one, address address_two) public view returns(string memory encrypted_message){
        
        uint256 Encrypt_index = Encryptmapping_index[theBLnumber];
        return ( Encrypt[Encrypt_index].Encrypt_map[address_one][address_two] );
    }
    
    /*2021/1/18*/
    function getProductEncryptedMessage(uint256 theProductnumber, address address_one, address address_two) public view returns(string memory encrypted_message){
        
        uint256 Encrypt_product_index = Encrypt_product_mapping_index[theProductnumber];
        return ( Encrypt_product[ Encrypt_product_index ].Encrypt_product_map[address_one][address_two] );
    }
    
    /*2020/12/18 add*/
    /*This one is different from the other one, the main difference is this one needs theindex*/
    function getEncryptedMessagefromStack(uint256 theBLnumber, uint256 queue_index) public view returns(address address_one, address address_two, string memory _message_registration_time, string memory encrypted_message){
        
        uint256 Encrypt_index = Encryptmapping_index[theBLnumber];
        return ( Encrypt_message_list[Encrypt_index].from_address_queue[ queue_index ], Encrypt_message_list[Encrypt_index].to_address_queue[ queue_index ], Encrypt_message_list[Encrypt_index]._message_registration_time_queue[ queue_index ] , Encrypt_message_list[Encrypt_index]._message_queue[queue_index] );
    }
    
    function getProductEncryptedMessagefromStack(uint256 theProductnumber, uint256 queue_product_index) public view returns(address address_one, address address_two, string memory _message_registration_time, string memory encrypted_message){
        
        uint256 Encrypt_product_index = Encrypt_product_mapping_index[theProductnumber];
        return ( Encrypt_message_product_list[Encrypt_product_index].from_address_queue[ queue_product_index ], Encrypt_message_product_list[ Encrypt_product_index ].to_address_queue[ queue_product_index ], Encrypt_message_product_list[ Encrypt_product_index ]._message_registration_time_queue[ queue_index ] , Encrypt_message_list[Encrypt_index]._message_queue[queue_index] );
    }
    
    function setAccountKey(string memory _account, string memory _key) public {
        
        account_key_map[_account] = _key;
    }
    
    function getAccountKey(string memory _account) public view returns(string memory _key){
        return ( account_key_map[_account] );
    }
    
    function getAccountCareer(string memory _career) public view returns(string memory _account){
        
        return ( account_career_map[_career] );
    }
    
    function getEncryptMappingIndex(uint256 theBLnumber) public view returns(uint256){
        return Encryptmapping_index[theBLnumber];
    }
    
    function getEncryptProductMappingIndex(uint256 theProductnumber) public view returns(uint256){
        return Encrypt_product_mapping_index[theProductnumber];
    }
    
    function getMessageStackMappingIndex(uint256 theBLnumber) public view returns(uint256){
        return Encryptmessage_index[theBLnumber];
    }
    
    function getMessageStackProductMappingIndex(uint256 theProductnumber) public view returns(uint256){
        return Encrypt_product_message_index[theProductnumber];
    }
    
    function getQueueLength() public view returns(uint256){
        return queue_index;
    }
    
    function getProductQueueLength() public view returns(uint256){
        return queue_product_index;
    }
        
}

