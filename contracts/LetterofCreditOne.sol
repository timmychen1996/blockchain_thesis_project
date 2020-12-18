pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;

library LetterofCreditOne{
    
    struct aLetterofCreditOne{
        uint   LCnumber;
        string application_date;
        string commercial_invoice;
        string confirmation;
        string applicant;
        string bill_of_lading;
        string start_end_point;
        string method_of_info;
        string marine_insurance_policy;
        string final_shipment;
        string letter_of_credit_amount;
        string other_documents;
        string partial_shipment;
        string validation_date;
        string beneficiary_statement;
        string transport;
        string beneficiary;
        string cargo_content;
        string drawer;
        string special_terms;
        string bill_of_exchange_deadline;
        string transfer_rules;
        string letter_of_credit_day;
        string letter_of_credit_time;
    }
    
    function getLCnumber(aLetterofCreditOne storage self) view public returns(uint LCnumber){
        return self.LCnumber;
    }
    
    function setLCnumber(aLetterofCreditOne storage self, uint LCnumber) public{
        self.LCnumber = LCnumber;
    }
    
    function getApplicationDate(aLetterofCreditOne storage self) view public returns(string memory  application_date){
        return self.application_date;
    }
    
    function setApplicationDate(aLetterofCreditOne storage self, string memory application_date) public{
        self.application_date = application_date;
    }
    
    function getCommercialInvoice(aLetterofCreditOne storage self) view public returns(string memory commercial_invoice){
        return self.commercial_invoice;
    }
    
    function setCommercialInvoice(aLetterofCreditOne storage self, string memory commercial_invoice) public{
        self.commercial_invoice = commercial_invoice;
    }
    
    function getConfirmation(aLetterofCreditOne storage self) view public returns(string memory confirmation){
        return self.confirmation;
    }
    
    function setConfimation(aLetterofCreditOne storage self, string memory confirmation) public{
        self.confirmation = confirmation;
    }
    
    function getApplicant(aLetterofCreditOne storage self) view public returns(string memory applicant){
        return self.applicant;
    }
    
    function setApplicant(aLetterofCreditOne storage self, string memory applicant) public{
        self.applicant = applicant ;
    }
    
    function getBillofLading(aLetterofCreditOne storage self) view public returns(string memory bill_of_lading){
        return self.bill_of_lading;
    }
    
    function setBillofLading(aLetterofCreditOne storage self, string memory bill_of_lading) public{
        self.bill_of_lading = bill_of_lading;
    }
    
    function getStartEndPoint(aLetterofCreditOne storage self) view public returns(string memory start_end_point){
        return self.start_end_point;
    }
    
    function setStartEndPoint(aLetterofCreditOne storage self, string memory start_end_point) public{
        self.start_end_point = start_end_point;
    }
    
    function getMethodOfInfo(aLetterofCreditOne storage self) view public returns(string memory method_of_info){
        return self.method_of_info;
    }
    
    function setMethodOfInfo(aLetterofCreditOne storage self, string memory method_of_info) public{
        self.method_of_info = method_of_info;
    }
    
    function getMarineInsurancePolicy(aLetterofCreditOne storage self) view public returns(string memory marine_insurance_policy){
        return self.marine_insurance_policy;
    }
    
    function setMarineInsurancePolicy(aLetterofCreditOne storage self, string memory marine_insurance_policy) public {
        
        self.marine_insurance_policy = marine_insurance_policy;
    }
    
    function getFinalShipment(aLetterofCreditOne storage self) view public returns(string memory final_shipment){
        
        return self.final_shipment;
    }
    
    function setFinalShipment(aLetterofCreditOne storage self, string memory final_shipment) public {
        
        self.final_shipment = final_shipment;
    }
    
    function getLetterOfCreditAmount(aLetterofCreditOne storage self) view public returns(string memory letter_of_credit_amount){
        
        return self.letter_of_credit_amount;
    }
    
    function setLetterOfCreditAmount(aLetterofCreditOne storage self, string memory letter_of_credit_amount) public {
        
        self.letter_of_credit_amount = letter_of_credit_amount;
    }
    
    function getOtherDocuments(aLetterofCreditOne storage self) view public returns(string memory other_documents){
        
        return self.other_documents;
    }
    
    function setOtherDocuments(aLetterofCreditOne storage self, string memory other_documents) public {
        
        self.other_documents = other_documents;
    }
    
    function getPartialShipment(aLetterofCreditOne storage self) view public returns(string memory partial_shipment){
        
        return self.partial_shipment;
    }
    
    function setPartialShipment(aLetterofCreditOne storage self, string memory partial_shipment) public {
        
        self.partial_shipment = partial_shipment;
    }
    
    function getValidationDate(aLetterofCreditOne storage self) view public returns(string memory validation_date){
        
        return self.validation_date;
    }
    
    function setValidationDate(aLetterofCreditOne storage self, string memory validation_date) public {
        
        self.validation_date = validation_date;
    }
    
    function getBeneficiaryStatement(aLetterofCreditOne storage self) view public returns (string memory beneficiary_statement){
        
        return self.beneficiary_statement;
    }
    
    function setBeneficiaryStatement(aLetterofCreditOne storage self, string memory beneficiary_statement) public {
        
        self.beneficiary_statement = beneficiary_statement;
    }
    
    function getTransport(aLetterofCreditOne storage self) view public returns (string memory transport){
        
        return self.transport;
    }
    
    function setTransport(aLetterofCreditOne storage self, string memory transport) public {
        
        self.transport = transport;
    }
    
    function getBeneficiary(aLetterofCreditOne storage self) view public returns(string memory beneficiary){
        
        return self.beneficiary;
    }
    
    function setBeneficiary(aLetterofCreditOne storage self, string memory beneficiary) public {
        
        self.beneficiary = beneficiary;
    }
    
    function getCargoContent(aLetterofCreditOne storage self) view public returns(string memory cargo_content){
        
        return self.cargo_content;
    }
    
    function setCargoContent(aLetterofCreditOne storage self, string memory cargo_content) public {
        
        self.cargo_content = cargo_content;
    }
    
    function getDrawer(aLetterofCreditOne storage self) view public returns(string memory drawer){
        return self.drawer;
    }
    
    function setDrawer(aLetterofCreditOne storage self, string memory drawer) public {
        
        self.drawer = drawer;
    }
    
    function getSpecialTerms(aLetterofCreditOne storage self) view public returns(string memory special_terms){
        
        return self.special_terms;
    }
    
    function setSpecialTerms(aLetterofCreditOne storage self, string memory special_terms) public {
        
        self.special_terms = special_terms;
    }
    
    function getBillofExchangeDeadline(aLetterofCreditOne storage self) view public returns(string memory bill_of_exchange_deadline){
        
        return self.bill_of_exchange_deadline;
    }
    
    function setBillofExchangeDeadline(aLetterofCreditOne storage self, string memory bill_of_exchange_deadline) public {
        
        self.bill_of_exchange_deadline = bill_of_exchange_deadline;
    }
    
    function getTransferRules(aLetterofCreditOne storage self) view public returns(string memory transfer_rules){
        
        return self.transfer_rules;
    }
    
    function setTransferRules(aLetterofCreditOne storage self, string memory transfer_rules) public {
        
        self.transfer_rules = transfer_rules;
    }
    
    function getLetterOfCreditDay(aLetterofCreditOne storage self) view public returns(string memory letter_of_credit_day){
        return self.letter_of_credit_day;
    }
    
    function setLetterOfCreditDay(aLetterofCreditOne storage self, string memory letter_of_credit_day) public{
        
        self.letter_of_credit_day = letter_of_credit_day;
    }
    
    function getLetterOfCreditTime(aLetterofCreditOne storage self) view public returns(string memory letter_of_credit_time){
        return self.letter_of_credit_time;
    }
    
    function setLetterOfCreditTime(aLetterofCreditOne storage self, string memory letter_of_credit_time) public{
        self.letter_of_credit_time = letter_of_credit_time;
    }
    
}