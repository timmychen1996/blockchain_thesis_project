pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;
/*import './Supplier.sol';
import './Transport.sol';
import './Terminal.sol';
import './Carrier.sol';*/
import './Product.sol';

contract ProductPseudoRest{
    
    /*mapping(uint => Transport.aTransport) public transports;
    mapping(uint => Terminal.aTerminal) public terminals;
    mapping(uint => Carrier.aCarrier) public carriers;
    mapping(uint => Supplier.aSupplier) public suppliers;*/
    
    mapping(uint => Product.aProduct) private productone;
    mapping(uint => Product.ashippingorder) private shippingorderone;
    mapping (uint256 => uint256) public product_mapping_index;
    using Product for Product.aProduct;
    
    constructor() public {
        
    }
    uint256 product_length = 0;
    
    function setProductone(uint theProductnumber,string memory product_name,
    string memory company_name, string memory dispatch_time,
    string memory receive_time, uint dispatch_amount, uint receive_amount) public {
        
        product_length++;
        product_mapping_index[ product_length-1 ] = theProductnumber;
        
        Product.setProductId( productone[ theProductnumber ], theProductnumber );
        Product.setshippingorderProductId( shippingorderone[ theProductnumber ], theProductnumber );
        Product.setProductName( productone[ theProductnumber ], product_name );
        Product.setCompanyName( productone[ theProductnumber ], company_name );
        Product.setDispatchTime( productone[ theProductnumber ], dispatch_time );
        Product.setReceiveTime ( productone[ theProductnumber ], receive_time );
        Product.setDispatchAmount( productone[ theProductnumber ], dispatch_amount );
        Product.setReceiveAmount ( productone[ theProductnumber ], receive_amount );
        
    }
    
    /*function seta_little_Billofladbasicone(uint theProductnumber, string memory product_name,
    string memory company_name, string memory dispatch_time,
    string memory receive_time) public{
        
        Product.setalittleBoLProductId( a_little_Billofladbasicone[ theProductnumber ], theProductnumber );
        Product.setalittleBoLProductName( a_little_Billofladbasicone[ theProductnumber ], product_name );
        Product.setalittleBoLCompanyName( a_little_Billofladbasicone[ theProductnumber ], company_name );
        Product.setalittleBoLDispatchTime( a_little_Billofladbasicone[ theProductnumber ], dispatch_time);
        Product.setalittleBoLReceiveTime( a_little_Billofladbasicone[ theProductnumber ], receive_time);
        
    }*/
    
    function setProducttwo(uint theProductnumber,
    uint price, string memory exporter, string memory consignee, 
    string memory means_of_transport_and_route, string memory incoterns,
    string memory  bill_of_lading) public {
        
        Product.setPrice( productone[ theProductnumber ], price);
        Product.setExporter ( productone[theProductnumber], exporter);
        Product.setConsignee( productone[theProductnumber], consignee);
        
        Product.setshippingorderConsignee( shippingorderone[theProductnumber], consignee);
        Product.setMeansofTransportandRoute( productone[theProductnumber], means_of_transport_and_route);
        Product.setIncoterns( productone[theProductnumber], incoterns);
        Product.setBillofLading( productone[theProductnumber], bill_of_lading);
        
    }
        
    function setProductfinal(uint theProductnumber,
    string memory number_and_date_of_invoice, string memory certificate_number,
    string memory company_address, string memory dangerous_or_flammable_cargo, 
    string memory product_status, string memory product_time) public {
        
        Product.setNumberandDateofInvoice( productone[theProductnumber], number_and_date_of_invoice);
        Product.setCertificateNumber( productone[theProductnumber], certificate_number);
        Product.setCompanyAddress( productone[theProductnumber], company_address);
        Product.setDangerousorFlammableCargo( productone[theProductnumber], dangerous_or_flammable_cargo);
        Product.setshippingorderDangerousorFlammableCargo( shippingorderone[theProductnumber], dangerous_or_flammable_cargo);
        Product.setProductStatus( productone[theProductnumber], product_status);
        Product.setProductTime( productone[theProductnumber], product_time);
        
    }
    
    function setProductDay(uint theProductnumber, string memory product_day) public {
        
        Product.setProductDay( productone[theProductnumber], product_day );
    }
    
    
    function getProductone(uint theProductnumber) public view returns
    (string memory product_name, string memory company_name,
    string memory dispatch_time, string memory receive_time, uint dispatch_amount, 
    uint receive_amount)
    {   
        return ( 
        Product.getProductName( productone[ theProductnumber ] ),
        Product.getCompanyName( productone[ theProductnumber ] ),
        Product.getDispatchTime( productone[ theProductnumber ] ), 
        Product.getReceiveTime( productone[ theProductnumber ]),
        Product.getDispatchAmount( productone[ theProductnumber ] ), 
        Product.getReceiveAmount( productone[ theProductnumber ] ));
    }
    
    function getshippingorderone(uint theProductnumber) public view returns
    (string memory dangerous_or_flammable_cargo, string memory consignee)
    {
        return(
        Product.getshippingorderDangerousorFlammableCargo( shippingorderone[ theProductnumber ]),
        Product.getshippingorderConsignee( shippingorderone[ theProductnumber ]) );
    }
    
    function getProducttwo(uint theProductnumber) public view returns
    (uint price,string memory exporter,
    string memory consignee ,string memory means_of_transport_and_route,
    string memory incoterns, string memory bill_of_lading)
    {
        return ( Product.getPrice ( productone[ theProductnumber ]), Product.getExporter ( productone[theProductnumber ]),
        Product.getConsignee ( productone[theProductnumber ]),Product.getMeansofTransportandRoute( productone[theProductnumber ]),
        Product.getIncoterns( productone[theProductnumber ]),Product.getBillofLading( productone[ theProductnumber ]) );
    }
    
    function getProductfinal(uint theProductnumber) public view returns
    (string memory number_and_date_of_invoice, string memory certificate_number,
    string memory company_address, string memory dangerous_or_flammable_cargo, string memory product_status, string memory product_time)
    {
        return ( Product.getNumberandDateofInvoice ( productone[ theProductnumber ]), Product.getCertificateNumber ( productone[ theProductnumber ]),
        Product.getCompanyAddress ( productone[theProductnumber ] ), Product.getDangerousorFlammableCargo( productone[ theProductnumber ]), 
        Product.getProductStatus( productone[theProductnumber ] ), Product.getProductTime( productone[ theProductnumber] ));
    }
    
    function getProductDay(uint theProductnumber) public view returns(string memory product_day)
    {
        return ( Product.getProductDay( productone[theProductnumber] ) );
    }
    
    function getupdateProductDay(uint theProductnumber) public view returns(string memory update_product_day){
        
        return ( Product.getupdateProductDay( productone[theProductnumber] ) );
    }
    
    function getupdateProductTime(uint theProductnumber) public view returns(string memory update_product_time){
        
        return ( Product.getupdateProductTime( productone[theProductnumber] ) );
        
    }
    
    function getProductlength() public view returns(uint256){
        return product_length;
    }
    
    function getProductMappingId(uint256 index) public view returns(uint256){
        return product_mapping_index[index];
    }
    
    function updateProduct(uint theProductnumber, string memory receive_time, string memory dispatch_time,
    uint receive_amount, uint dispatch_amount, string memory dangerous_or_flammable_cargo, string memory product_status) public{
        
        Product.setReceiveTime ( productone[ theProductnumber ], receive_time );
        Product.setDispatchTime( productone[ theProductnumber ], dispatch_time );
        Product.setReceiveAmount ( productone[ theProductnumber ], receive_amount );
        Product.setDispatchAmount( productone[ theProductnumber ], dispatch_amount );
        Product.setDangerousorFlammableCargo( productone[ theProductnumber ], dangerous_or_flammable_cargo);
        Product.setProductStatus( productone[ theProductnumber ], product_status );
    }
    
    function updateProductDay(uint theProductnumber, string memory update_product_day) public{
        
        Product.setupdateProductDay( productone[ theProductnumber ], update_product_day);
    }
    
    function updateProductTime(uint theProductnumber, string memory update_product_time) public{
        
        Product.setupdateProductTime( productone[ theProductnumber ], update_product_time);
    }
    
}


