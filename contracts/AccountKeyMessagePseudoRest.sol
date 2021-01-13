
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
    
    struct En_message_list{
        
        uint256 BLmapping_id;
        string  BL_registration_time;
        mapping(uint256 => address)  from_address_queue;
        mapping(uint256 => address) to_address_queue;
        mapping(uint256 => string) _message_registration_time_queue;
        mapping(uint256 => string) _message_queue;
    }
    
    constructor() public{
        
        account_career_map['Exporter'] = '0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b';
        account_career_map['Importer'] = '0x3C95107cAd460D3989F2dB09606BB436c2f47482';
        account_career_map['AdvisingBank'] = '0x3cF2DEdffC74ab8776f61C2d7F261c121c16F45c';
        account_career_map['IssuingBank'] = '0x9eb378EFfa2bE988B96431B421bEd2F859006A94';
        account_career_map['Carrier'] = '0xCE6C125D972360dfe3A21d1d7BC48D91b27fcd28';
    }
    
    En_list[] public Encrypt;
    En_message_list[] public Encrypt_message_list;
    uint256 queue_index = 0;
    
    /*2020/12/28 add the other variables*/
    string current_working_address = "notset";
    bool exporter_first_address_used = false;
    bool importer_first_address_used = false;
    bool carrier_first_address_used = false;
    
    mapping (uint256 => uint256) public Encryptmapping_index;
    /*2020/12/18 add*/
    mapping (uint256 => uint256) public Encryptmessage_index;
    /*key-value pair*/
    
    function setEncrypt(uint256 theBLnumber, string memory thetime) public {
        
        Encrypt.length++;
        Encrypt_message_list.length++;
        Encrypt[ Encrypt.length-1 ].BLmapping_id = theBLnumber;
        Encrypt_message_list[ Encrypt_message_list.length-1 ].BLmapping_id = theBLnumber;
        Encrypt_message_list[ Encrypt_message_list.length-1 ].BL_registration_time = thetime;
        Encryptmapping_index[theBLnumber] = Encrypt.length-1;
        Encryptmessage_index[theBLnumber] = Encrypt_message_list.length-1;
        
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
    
    /*2020/12/18 add*/
    /*This one is different from the other one, the main difference is this one needs theindex*/
    function getEncryptedMessagefromStack(uint256 theBLnumber, uint256 queue_index) public view returns(address address_one, address address_two, string memory _message_registration_time, string memory encrypted_message){
        
        uint256 Encrypt_index = Encryptmapping_index[theBLnumber];
        return ( Encrypt_message_list[Encrypt_index].from_address_queue[ queue_index ], Encrypt_message_list[Encrypt_index].to_address_queue[ queue_index ], Encrypt_message_list[Encrypt_index]._message_registration_time_queue[ queue_index ] , Encrypt_message_list[Encrypt_index]._message_queue[queue_index] );
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
    
    function getMessageStackMappingIndex(uint256 theBLnumber) public view returns(uint256){
        return Encryptmessage_index[theBLnumber];
    }
    
    function getStackLength() public view returns(uint256){
        return queue_index;
    }
    
}

