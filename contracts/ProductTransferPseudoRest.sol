pragma solidity >=0.4.22 <0.6.0;
import './AccountKeyMessagePseudoRest.sol';

contract ProductTransferPseudoRest{
    
    enum ProductTransferState{
        NotReady,InPackaged,
        LoadandDepart,UnloadandArrival,
        Finished,Failed
    }
    
    
    AccountKeyMessagePseudoRest AccountKeyMessageInstance;
    
    constructor(address AccountyKey_addr) public {
        AccountKeyMessageInstance = AccountKeyMessagePseudoRest(AccountyKey_addr);
    }
    
    struct Product_list{
        
        uint256 Product_id;
        ProductTransferState Productstate;
    }
    
    Product_list[] public Product;
    mapping (uint256 => uint256) public Productmapping_index;
    
    
    
    function InPackaged(uint256 index) public returns(uint){
        
        Product[index].Productstate = ProductTransferState.InPackaged;
        return Product.length;
    }
    
    function LoadandDepart(uint256 index) public returns(uint){
        
        Product[index].Productstate = ProductTransferState.LoadandDepart;
        return Product.length;
    }
    
    function UnloadandArrival(uint256 index) public returns(uint){
        
        Product[index].Productstate = ProductTransferState.LoadandDepart;
        return Product.length;
    }
    
    
    function Finished(uint256 index) public returns(uint){
        
        Product[index].Productstate = ProductTransferState.Finished;
        return Product.length;
    }
    
    function Failed(uint256 index) public returns(uint){
        
        Product[index].Productstate = ProductTransferState.Failed;
        return Product.length; 
    }
    
    function setProduct(uint256 theProductnumber, string memory thetime) public {
        
        AccountKeyMessageInstance.setProductEncrypt( theProductnumber, thetime);
        Product.length++;
        Product[ Product.length-1].Product_id = theProductnumber;
        Productmapping_index[ theProductnumber ] = Product.length-1;
    }
    
    function getProduct(uint256 index) public view returns ( ProductTransferState ){
        return ( Product[index].Productstate );
    }
    
    function getProductMappingId(uint256 index) public view returns(uint256){
        return Product[index].Product_id;
    }
    
    function getProductMappingIndex(uint256 theProductnumber) public view returns(uint256){
        return Productmapping_index[theProductnumber];
    }
    
    function getProductlength() public view returns(uint256){
        return Product.length;
    }
    
}
