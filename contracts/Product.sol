pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;

/*import './Supplier.sol';
import './Transport.sol';
import './Terminal.sol';
import './Carrier.sol';*/

library Product{
    
    struct aProduct{
        
        uint product_id;
        string product_name;
        string company_name;
        string dispatch_time;
        string receive_time;
        uint dispatch_amount;
        uint receive_amount;
        uint price;
        string exporter;
        string consignee;
        string means_of_transport_and_route;
        string incoterns;
        string bill_of_lading;
        string number_and_date_of_invoice;
        string certificate_number;
        string company_address;
        string dangerous_or_flammable_cargo;
        string product_status;
        string product_time;
        string product_day;
        string update_product_time;
        string update_product_day;
        
    }
    
    struct ashippingorder{
        
        uint   shippingorder_id;
        string consignee;
        string dangerous_or_flammable_cargo;
        
    }
    
    function getId(aProduct storage self) view public returns(uint product_id){
        return self.product_id;
    }
    
    function getProductName(aProduct storage self) view public returns(string memory name){
        return self.product_name;
    }
    
    function getCompanyName(aProduct storage self) view public returns(string memory name){
        return self.company_name;
    }
    
    function getPrice(aProduct storage self) view public returns(uint price){
        return self.price;
    }
    
    function getDispatchTime(aProduct storage self) view public returns(string memory dispatch_time){
        return self.dispatch_time;
    }
    
    function getReceiveTime(aProduct storage self) view public returns(string memory receive_time){
        return self.receive_time;
    }
    
    function getDispatchAmount(aProduct storage self) view public returns (uint dispatch_amount){
        return self.dispatch_amount;
    }
    
    function getReceiveAmount(aProduct storage self) view public returns (uint receive_amount){
        return self.receive_amount;
    }
    
    function getExporter(aProduct storage self) view public returns(string memory exporter){
        return self.exporter;
    }
    
    function getConsignee(aProduct storage self) view public returns(string memory consignee){
        return self.consignee;
    }
    
    function getshippingorderConsignee(ashippingorder storage self) view public returns (string memory consignee){
        return self.consignee;
    }
    
    function getMeansofTransportandRoute(aProduct storage self) view public returns(string memory means_of_transport_and_route){
        return self.means_of_transport_and_route;
    }
    
    function getIncoterns(aProduct storage self) view public returns(string memory incoterns){
        return self.incoterns;
    }
    
    function getBillofLading(aProduct storage self) view public returns(string memory bill_of_lading){
        return self.bill_of_lading;
    }
    
    function getNumberandDateofInvoice(aProduct storage self) view public returns(string memory number_and_date_of_invoice){
        return self.number_and_date_of_invoice;
    }
    
    function getCertificateNumber(aProduct storage self) view public returns(string memory certificate_number){
        return self.certificate_number;
    }
    
    function getCompanyAddress(aProduct storage self) view public returns(string memory company_address){
        return self.company_address;
    }
    
    function getDangerousorFlammableCargo(aProduct storage self) view public returns(string memory dangerous_or_flammable_cargo){
        return self.dangerous_or_flammable_cargo;
    }
    
    function getshippingorderDangerousorFlammableCargo(ashippingorder storage self) view public returns(string memory dangerous_or_flammable_cargo){
        return self.dangerous_or_flammable_cargo;   
    }
    
    function getProductStatus(aProduct storage self) view public returns(string memory product_status){
        return self.product_status;
    }
    
    function getProductTime(aProduct storage self) view public returns(string memory product_time){
        return self.product_time;
    }
    
    function getProductDay(aProduct storage self) view public returns(string memory product_day){
        return self.product_day;
    }
    
    function getupdateProductTime(aProduct storage self) view public returns(string memory update_product_time){
        
        return self.update_product_time;
    }
    
    function getupdateProductDay(aProduct storage self) view public returns(string memory update_product_day){
        
        return self.update_product_day;
    }
    
    function setProductId(aProduct storage self, uint anID) public {
        self.product_id = anID;
    }
    
    function setshippingorderProductId(ashippingorder storage self, uint anID) public{
        self.shippingorder_id = anID;
    }
    
    function setProductName(aProduct storage self, string memory anProductname) public{
        self.product_name = anProductname;
    }
    
    function setCompanyName(aProduct storage self, string memory anCompanyname) public{
        self.company_name = anCompanyname;
    }
    
    function setPrice(aProduct storage self, uint anPrice) public{
        self.price = anPrice;
    }
    
    function setDispatchTime(aProduct storage self, string memory anDispatchTime) public {
        self.dispatch_time = anDispatchTime;
    }
    
    function setReceiveTime(aProduct storage self, string memory anReceiveTime) public{
        self.receive_time = anReceiveTime;
    }
    
    function setDispatchAmount(aProduct storage self, uint anDispatchAmount) public{
        self.dispatch_amount = anDispatchAmount;
    }
    
    function setReceiveAmount(aProduct storage self, uint anReceiveAmount) public{
        self.receive_amount = anReceiveAmount;
    }
    
    function setExporter(aProduct storage self, string memory anExporter) public{
        self.exporter = anExporter;
    }
    
    function setConsignee(aProduct storage self, string memory anConsignee) public{
        self.consignee = anConsignee;
    }
    
    function setshippingorderConsignee(ashippingorder storage self, string memory anConsignee) public{
        
        self.consignee = anConsignee;
    }
    
    function setMeansofTransportandRoute(aProduct storage self, string memory anmeans_of_transport_and_route) public{
        
        self.means_of_transport_and_route = anmeans_of_transport_and_route;
    }
    
    function setIncoterns(aProduct storage self, string memory incoterns) public {
        self.incoterns = incoterns;
    }
    
    function setBillofLading(aProduct storage self, string memory anbill_of_lading) public {
        
        self.bill_of_lading = anbill_of_lading; 
    }
    
    function setNumberandDateofInvoice(aProduct storage self, string memory annumber_and_date_of_invoice) public {
        
        self.number_and_date_of_invoice = annumber_and_date_of_invoice;
    }
    
    function setCertificateNumber(aProduct storage self, string memory ancertificate_number) public {
        
        self.certificate_number = ancertificate_number;
    }
    
    function setCompanyAddress(aProduct storage self, string memory ancompany_address) public {
        
        self.company_address = ancompany_address;
    }
    
    function setDangerousorFlammableCargo(aProduct storage self, string memory andangerous_or_flammable_cargo) public {
        
        self.dangerous_or_flammable_cargo = andangerous_or_flammable_cargo;
    }
    
    function setshippingorderDangerousorFlammableCargo(ashippingorder storage self, string memory andangerous_or_flammable_cargo) public{
        
        self.dangerous_or_flammable_cargo = andangerous_or_flammable_cargo;
    }
    
    function setProductStatus(aProduct storage self, string memory anproduct_status) public {
        
        self.product_status = anproduct_status;
    }
    
    function setProductTime(aProduct storage self, string memory anproduct_time ) public {
        self.product_time = anproduct_time;
    }
    
    function setProductDay(aProduct storage self, string memory anproduct_day) public{
        self.product_day = anproduct_day;
    }
    
    function setupdateProductTime(aProduct storage self, string memory anupdate_product_time) public {
        
        self.update_product_time = anupdate_product_time;
    }
    
    function setupdateProductDay(aProduct storage self, string memory anupdate_product_day) public {
        
        self.update_product_day = anupdate_product_day;
    }
    
}