pragma solidity >=0.4.22 <0.6.0;
contract LCTransferPseudoRest{
    

    LCTransferState public LCstate;
    /*BLTransferState public BLstate;*/
    
    enum LCTransferState{
        NotReady, Requested, Accepts, 
        IssuedfromIssuingBank, Notified,
        Shipment 
    }
    
    /*enum BLTransferState{
        NotReady, PresentedfromExporter, ClaimingPaymentfromAdvisingBank, 
        PaidfromIssuingBank, PaymenttoExporter,
        PaymenttoImporter, BLReleased
    }*/
    
    mapping(address => mapping(address => LCTransferState)) public LC;
    
    function request(address _from, address _to) public{
        
        LC[_from][_to] = LCTransferState.Requested;
    }
    
    function accepts(address _from, address _to) public{
        
        LC[_from][_to] = LCTransferState.Accepts;
    }
    
    /*This step I skip the Asks Loc Stage, directly going to Issue LoC stage*/
    function issuesloc(address _from, address _to) public{
        
        LC[_from][_to] = LCTransferState.IssuedfromIssuingBank;
    }
    
    /*This step going from Advising Bank to Exporter*/
    function notifyloc(address _from, address _to) public{
        
        LC[_from][_to] = LCTransferState.Notified;
    }
    
    function makeshipment(address _from, address _to) public{
        
        LC[_from][_to] = LCTransferState.Shipment;
    }

    function getLC(address _from_address, address _to_address) external view returns ( LCTransferState ){
        return LC[_from_address][_to_address];
    }

    
}

