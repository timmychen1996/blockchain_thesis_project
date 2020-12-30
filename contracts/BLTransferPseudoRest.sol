pragma solidity >=0.4.22 <0.6.0;
/*2020/12/6 changes*/
import './AccountKeyMessagePseudoRest.sol';

contract BLTransferPseudoRest{
    
    /*struct myStruct {
        uint someNumber;
        BLstate
    }
    mapping(address => mapping(address => myStruct)) myDynamicMapping;*/
    
    enum BLTransferState{
        NotReady, Request,
        Accepts, ShowtheBL,
        BookingtheSeats, LoadingonShip,
        DeliverBL, IssueDO,
        LoadingonShipNotification, Takethestuff
    }
    
    struct BL_list{
        
        uint256 BLmapping_id;
        /*address from_address;
        address to_address;
        BLTransferState BLstate;*/
        mapping(address => mapping(address => BLTransferState)) BL_map;
    }
    
    BL_list[] public BL;
    mapping (uint256 => uint256) public BLmapping_index;
    AccountKeyMessagePseudoRest AccountKeyMessageInstance;
    
    constructor(address AccountyKey_addr) public {
        AccountKeyMessageInstance = AccountKeyMessagePseudoRest(AccountyKey_addr);
    }
    
    function request(uint256 index, address address_one, address address_two, address address_three) public returns(uint){
        
        /*BL[45] = BLmapping(45,0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b, 0xCE6C125D972360dfe3A21d1d7BC48D91b27fcd28,BLTransferState.Request);*/
        /*BL.push( BLmapping(0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b, 0xCE6C125D972360dfe3A21d1d7BC48D91b27fcd28,BLTransferState.Request));*/
        /*BL.length++;*/
        /*BL[BL.length-1].BLmapping_id = theBLnumber;*/
        BL[index].BL_map[address_one][address_two] = BLTransferState.Request;
        BL[index].BL_map[address_one][address_three] = BLTransferState.Request;
        BL[index].BL_map[address_two][address_one] = BLTransferState.Request;
        BL[index].BL_map[address_three][address_one] = BLTransferState.Request;
        return BL.length;
        
    }
    
    function accept(uint256 index, address address_one, address address_two, address address_three) public returns(uint){
        
        /*BL[45] = BLmapping(45,0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b, 0xCE6C125D972360dfe3A21d1d7BC48D91b27fcd28,BLTransferState.Request);*/
        /*BL.push( BLmapping(0x474e95dA5D93071CaC324cd294Bc5ecea9d9924b, 0xCE6C125D972360dfe3A21d1d7BC48D91b27fcd28,BLTransferState.Request));*/
        /*BL[BL.length-1].BLmapping_id = theBLnumber;*/
        BL[index].BL_map[address_one][address_two] = BLTransferState.Accepts;
        BL[index].BL_map[address_one][address_three] = BLTransferState.Accepts;
        BL[index].BL_map[address_two][address_one] = BLTransferState.Accepts;
        BL[index].BL_map[address_three][address_one] = BLTransferState.Accepts;
        return BL.length;
        
    }
    
    
    function showtheBL(uint256 index, address address_one, address address_two, address address_three) public returns(uint){
        
        /*BL[BL.length-1].BLmapping_id = theBLnumber;*/
        BL[index].BL_map[address_one][address_two] = BLTransferState.ShowtheBL;
        BL[index].BL_map[address_one][address_three] = BLTransferState.ShowtheBL;
        BL[index].BL_map[address_two][address_one] = BLTransferState.ShowtheBL;
        BL[index].BL_map[address_three][address_one] = BLTransferState.ShowtheBL;
        return BL.length;
    }
    
    function bookingtheSeats(uint256 index, address address_one, address address_two, address address_three) public returns(uint){
        
        /*BL[BL.length-1].BLmapping_id = theBLnumber;*/
        BL[index].BL_map[address_one][address_two] = BLTransferState.BookingtheSeats;
        BL[index].BL_map[address_one][address_three] = BLTransferState.BookingtheSeats;
        BL[index].BL_map[address_two][address_one] = BLTransferState.BookingtheSeats;
        BL[index].BL_map[address_three][address_one] = BLTransferState.BookingtheSeats;
        return BL.length;
    }
    
    
    function loadingonShip(uint256 index, address address_one, address address_two, address address_three) public returns(uint){
        
        /*BL[BL.length-1].BLmapping_id = theBLnumber;*/
        BL[index].BL_map[address_one][address_two] = BLTransferState.LoadingonShip;
        BL[index].BL_map[address_one][address_three] = BLTransferState.LoadingonShip;
        BL[index].BL_map[address_two][address_one] = BLTransferState.LoadingonShip;
        BL[index].BL_map[address_three][address_one] = BLTransferState.LoadingonShip;
        return BL.length;
    }
    
    function deliverBL(uint256 index, address address_one, address address_two, address address_three) public returns(uint){
        
        /*BL[BL.length-1].BLmapping_id = theBLnumber;*/
        BL[index].BL_map[address_one][address_two] = BLTransferState.DeliverBL;
        BL[index].BL_map[address_one][address_three] = BLTransferState.DeliverBL;
        BL[index].BL_map[address_two][address_one] = BLTransferState.DeliverBL;
        BL[index].BL_map[address_three][address_one] = BLTransferState.DeliverBL;
        return BL.length;
    }
    
    function issueDO(uint256 index, address address_one, address address_two, address address_three) public returns(uint){
        
        /*BL[BL.length-1].BLmapping_id = theBLnumber;*/
        BL[index].BL_map[address_one][address_two] = BLTransferState.IssueDO;
        BL[index].BL_map[address_one][address_three] = BLTransferState.IssueDO;
        BL[index].BL_map[address_two][address_one] = BLTransferState.IssueDO;
        BL[index].BL_map[address_three][address_one] = BLTransferState.IssueDO;
        return BL.length;
        
    }
    
    function loadingonShipNotification(uint256 index, address address_one, address address_two, address address_three) public returns(uint){
        
        /*BL[BL.length-1].BLmapping_id = theBLnumber;*/
        BL[index].BL_map[address_one][address_two] = BLTransferState.LoadingonShipNotification;
        BL[index].BL_map[address_one][address_three] = BLTransferState.LoadingonShipNotification;
        BL[index].BL_map[address_two][address_one] = BLTransferState.LoadingonShipNotification;
        BL[index].BL_map[address_three][address_one] = BLTransferState.LoadingonShipNotification;
        return BL.length;
    }
    
    function taketheStuff(uint256 index, address address_one, address address_two, address address_three) public returns(uint){
        
        /*BL[BL.length-1].BLmapping_id = theBLnumber;*/
        BL[index].BL_map[address_one][address_two] = BLTransferState.Takethestuff;
        BL[index].BL_map[address_one][address_three] = BLTransferState.Takethestuff;
        BL[index].BL_map[address_two][address_one] = BLTransferState.Takethestuff;
        BL[index].BL_map[address_three][address_one] = BLTransferState.Takethestuff;
        return BL.length;
    }
    
    function setBL(uint256 theBLnumber, string memory thetime) public {
        
        AccountKeyMessageInstance.setEncrypt( theBLnumber, thetime);
        BL.length++;
        BL[BL.length-1].BLmapping_id = theBLnumber;
        BLmapping_index[theBLnumber] = BL.length-1;
        
    }
    
    function getBL(uint256 index, address from_address, address to_address) public view returns ( BLTransferState ){
        return ( BL[index].BL_map[from_address][to_address]);
    }
    
    function getBLMappingId(uint256 index) public view returns(uint256){
        return BL[index].BLmapping_id;
    }
    
    function getBLMappingIndex(uint256 theBLnumber) public view returns(uint256){
        return BLmapping_index[theBLnumber];
    }
    
    function getBLlength() public view returns(uint256){
        return BL.length;
    }
     
}

