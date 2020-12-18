pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;

library Billofladbasicone{
    
    struct aBillofladbasicone{
        
        uint   BLnumber;
        string Importer;
        string Exporter;
        string notifyparty;
        string pre_carriage_by;
        string place_of_receipt;
        string ocean_vessel_voy_no;

        string port_of_loading;
        string port_of_discharge;
        string freight_and_charges;
        string final_destination;
        string freight_payable_at;
        string marks_numbers;
        
        string description;
        string gross_weight;
        string measurement;
        string total_packages;
        string place_and_date_of_issue;
        string signed_for_the_carrier;
        
        string bill_of_lading_time;
        string bill_of_lading_day;
    }
    
    function getBLnumber(aBillofladbasicone storage self) view public returns(uint BLnumber){
        return self.BLnumber;
    }
    
    function setBLnumber(aBillofladbasicone storage self, uint BLnumber) public{
        self.BLnumber = BLnumber;
    }
    
    function getImporter(aBillofladbasicone storage self) view public returns(string memory Importer){
        return self.Importer;
    }
    
    function setImporter(aBillofladbasicone storage self, string memory Importer) public{
        self.Importer = Importer;
    }
    
    function getExporter(aBillofladbasicone storage self) view public returns(string memory Exporter){
        return self.Exporter;
    }
    
    function setExporter(aBillofladbasicone storage self, string memory Exporter) public{
        self.Exporter = Exporter;
    }
    
    function getNotifyParty(aBillofladbasicone storage self) view public returns(string memory notifyparty){
        return self.notifyparty;
    }
    
    function setNotifyParty(aBillofladbasicone storage self, string memory notifyparty) public{
        self.notifyparty = notifyparty;
    }
    
    function getPreCarriageBy(aBillofladbasicone storage self) view public returns(string memory pre_carriage_by){
        return self.pre_carriage_by;
    }
    
    function setPreCarriageBy(aBillofladbasicone storage self, string memory pre_carriage_by) public{
        self.pre_carriage_by = pre_carriage_by;
    }
    
    function getPlaceOfReceipt(aBillofladbasicone storage self) view public returns(string memory place_of_receipt){
        return self.place_of_receipt;
    }
    
    function setPlaceOfReceipt(aBillofladbasicone storage self, string memory place_of_receipt) public{
        self.place_of_receipt = place_of_receipt;
    }
    
    function getOceanVesselVoyNo(aBillofladbasicone storage self) view public returns(string memory ocean_vessel_voy_no){
        return self.ocean_vessel_voy_no;
    }
    
    function setOceanVesselVoyNo(aBillofladbasicone storage self, string memory ocean_vessel_voy_no) public{
        self.ocean_vessel_voy_no = ocean_vessel_voy_no;
    }
    
    function getPortOfLoading(aBillofladbasicone storage self) view public returns( string memory port_of_loading){
        return self.port_of_loading;
    }
    
    function setPortOfLoading(aBillofladbasicone storage self, string memory port_of_loading) public {
        self.port_of_loading = port_of_loading;
    }
    
    function getPortOfDischarge(aBillofladbasicone storage self) view public returns(string memory port_of_discharge){
        return self.port_of_discharge;
    }
    
    function setPortOfDischarge(aBillofladbasicone storage self, string memory port_of_discharge) public{
        self.port_of_discharge = port_of_discharge;
    }
    
    function getFreightAndCharges(aBillofladbasicone storage self) view public returns(string memory freight_and_charges){
        return self.freight_and_charges;
    }
    
    function setFreightAndCharges(aBillofladbasicone storage self, string memory freight_and_charges) public {
        self.freight_and_charges = freight_and_charges;
    }
    
    function getFinalDestination(aBillofladbasicone storage self) view public returns(string memory final_destination){
        return self.final_destination;
    }
    
    function setFinalDestination(aBillofladbasicone storage self, string memory final_destination) public{
        self.final_destination = final_destination;
    }
    
    function getFreightPayableAt(aBillofladbasicone storage self) view public returns(string memory freight_payable_at){
        return self.freight_payable_at;
    }
    
    function setFreightPayableAt(aBillofladbasicone storage self, string memory freight_payable_at) public{
        self.freight_payable_at = freight_payable_at;
    }
    
    function getMarksAndNumbers(aBillofladbasicone storage self) view public returns(string memory marks_numbers){
        return self.marks_numbers;
    }
    
    function setMarksAndNumbers(aBillofladbasicone storage self, string memory marks_numbers) public{
        self.marks_numbers = marks_numbers;
    }
    
    function getDescription(aBillofladbasicone storage self) view public returns(string memory description){
        return self.description;
    }
    
    function setDescription(aBillofladbasicone storage self, string memory description) public{
        self.description = description;
    }
    
    function getGrossWeight(aBillofladbasicone storage self) view public returns(string memory gross_weight){
        return self.gross_weight;
    }
    
    function setGrossWeight(aBillofladbasicone storage self, string memory gross_weight) public{
        self.gross_weight = gross_weight;
    }
    
    function getMeasurement(aBillofladbasicone storage self) view public returns(string memory measurement){
        return self.measurement;
    }
    
    function setMeasurement(aBillofladbasicone storage self, string memory measurement) public{
        self.measurement = measurement;
    }
    
    function getTotalPackages(aBillofladbasicone storage self) view public returns(string memory total_packages){
        return self.total_packages;
    }
    
    function setTotalPackages(aBillofladbasicone storage self, string memory total_packages) public{
        self.total_packages = total_packages;
    }
    
    function getPlaceAndDateOfIssue(aBillofladbasicone storage self) view public returns(string memory place_and_date_of_issue){
        return self.place_and_date_of_issue;
    }
    
    function setPlaceAndDateOfIssue(aBillofladbasicone storage self, string memory place_and_date_of_issue) public{
        self.place_and_date_of_issue = place_and_date_of_issue;
    }
    
    function getSignedForTheCarrier(aBillofladbasicone storage self) view public returns(string memory signed_for_the_carrier){
        return self.signed_for_the_carrier;
    }
    
    function setSignedForTheCarrier(aBillofladbasicone storage self, string memory signed_for_the_carrier) public{
        self.signed_for_the_carrier = signed_for_the_carrier;
    }
    
    function getBLTime(aBillofladbasicone storage self) view public returns (string memory bill_of_lading_time){
        
        return self.bill_of_lading_time;
    }
    
    function setBLTime(aBillofladbasicone storage self, string memory bill_of_lading_time) public {
        
        self.bill_of_lading_time = bill_of_lading_time;
    }
    
    function getBLDay(aBillofladbasicone storage self) view public returns (string memory bill_of_lading_day){
        return self.bill_of_lading_day;
    }
    
    function setBLDay(aBillofladbasicone storage self, string memory bill_of_lading_day) public {
        
        self.bill_of_lading_day = bill_of_lading_day;
    }
    
}