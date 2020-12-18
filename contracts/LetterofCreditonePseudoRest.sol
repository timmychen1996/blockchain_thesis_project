pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;
import './LetterofCreditOne.sol';

contract LetterofCreditonePseudoRest{
    
    mapping(uint => LetterofCreditOne.aLetterofCreditOne) private letterofcreditone;
    
    using LetterofCreditOne for LetterofCreditOne.aLetterofCreditOne;
    
    constructor() public {
        
    }
    
    function setLetterofCreditone(uint theLCnumber, string memory application_date,
    string memory commercial_invoice, string memory confirmation,
    string memory applicant, string memory bill_of_lading,
    string memory start_end_point, string memory method_of_info) public {
        
        LetterofCreditOne.setApplicationDate( letterofcreditone[theLCnumber], application_date);
        LetterofCreditOne.setCommercialInvoice( letterofcreditone[theLCnumber], commercial_invoice);
        LetterofCreditOne.setConfimation( letterofcreditone[theLCnumber], confirmation);
        LetterofCreditOne.setApplicant( letterofcreditone[theLCnumber], applicant);
        LetterofCreditOne.setBillofLading( letterofcreditone[theLCnumber], bill_of_lading);
        LetterofCreditOne.setStartEndPoint( letterofcreditone[theLCnumber], start_end_point);
        LetterofCreditOne.setMethodOfInfo( letterofcreditone[theLCnumber], method_of_info);
        
    }
    
    function setLetterofCredittwo(uint theLCnumber,
    string memory marine_insurance_policy,string memory final_shipment, 
    string memory letter_of_credit_amount,string memory other_documents, 
    string memory partial_shipment, string memory validation_date, string memory beneficiary_statement) public {
        
        LetterofCreditOne.setMarineInsurancePolicy( letterofcreditone[theLCnumber], marine_insurance_policy);
        LetterofCreditOne.setFinalShipment( letterofcreditone[theLCnumber], final_shipment);
        LetterofCreditOne.setLetterOfCreditAmount( letterofcreditone[theLCnumber], letter_of_credit_amount);
        LetterofCreditOne.setOtherDocuments( letterofcreditone[theLCnumber], other_documents);
        LetterofCreditOne.setPartialShipment( letterofcreditone[theLCnumber], partial_shipment);
        LetterofCreditOne.setValidationDate( letterofcreditone[theLCnumber], validation_date);
        LetterofCreditOne.setBeneficiaryStatement( letterofcreditone[theLCnumber], beneficiary_statement);
        
    }
    
    function setLetterofCreditfinal(uint theLCnumber,
    string memory transport, string memory beneficiary,
    string memory cargo_content, string memory drawer,
    string memory special_terms, string memory bill_of_exchange_deadline, string memory transfer_rules) public {
        
        LetterofCreditOne.setTransport( letterofcreditone[theLCnumber], transport);
        LetterofCreditOne.setBeneficiary( letterofcreditone[theLCnumber], beneficiary);
        LetterofCreditOne.setCargoContent( letterofcreditone[theLCnumber], cargo_content);
        LetterofCreditOne.setDrawer( letterofcreditone[theLCnumber], drawer);
        LetterofCreditOne.setSpecialTerms( letterofcreditone[theLCnumber], special_terms);
        LetterofCreditOne.setBillofExchangeDeadline( letterofcreditone[theLCnumber], bill_of_exchange_deadline);
        LetterofCreditOne.setTransferRules( letterofcreditone[theLCnumber], transfer_rules);
        
    }
    
    function setLetterOfCreditDay(uint theLCnumber, string memory letter_of_credit_day) public {
        
        LetterofCreditOne.setLetterOfCreditDay( letterofcreditone[ theLCnumber ], letter_of_credit_day);
    }
    
    function setLetterOfCreditTime(uint theLCnumber, string memory letter_of_credit_time) public {
        
        LetterofCreditOne.setLetterOfCreditTime( letterofcreditone[theLCnumber], letter_of_credit_time);
    }
    
    function getLetterofCreditone(uint theLCnumber) public view returns
    (string memory application_date, string memory commercial_invoice,
    string memory confirmation, string memory applicant, string memory bill_of_lading, 
    string memory start_end_point)
    {   
        return ( LetterofCreditOne.getApplicationDate( letterofcreditone[ theLCnumber] ),
        LetterofCreditOne.getCommercialInvoice( letterofcreditone[ theLCnumber] ),
        LetterofCreditOne.getConfirmation( letterofcreditone[ theLCnumber] ), 
        LetterofCreditOne.getApplicant( letterofcreditone[ theLCnumber]),
        LetterofCreditOne.getBillofLading( letterofcreditone[ theLCnumber] ), 
        LetterofCreditOne.getStartEndPoint( letterofcreditone[ theLCnumber] ));
    }
    
    function getLetterofCredittwo(uint theLCnumber) public view returns(
    string memory method_of_info,string memory marine_insurance_policy,
    string memory final_shipment, string memory letter_of_credit_amount,
    string memory other_documents, string memory partial_shipment) {
        
        return (
        LetterofCreditOne.getMethodOfInfo( letterofcreditone[ theLCnumber] ),
        LetterofCreditOne.getMarineInsurancePolicy( letterofcreditone[theLCnumber] ),
        LetterofCreditOne.getFinalShipment( letterofcreditone[theLCnumber] ),
        LetterofCreditOne.getLetterOfCreditAmount( letterofcreditone[theLCnumber] ),
        LetterofCreditOne.getOtherDocuments( letterofcreditone[theLCnumber] ),
        LetterofCreditOne.getPartialShipment( letterofcreditone[theLCnumber] ) );
        
    }
    
    function getLetterofCreditthree(uint theLCnumber) public view returns
    (string memory validation_date, string memory beneficiary_statement, 
    string memory transport, string memory beneficiary, 
    string memory cargo_content, string memory drawer){
        
        return ( 
        LetterofCreditOne.getValidationDate( letterofcreditone[theLCnumber]  ),
        LetterofCreditOne.getBeneficiaryStatement( letterofcreditone[theLCnumber] ),
        LetterofCreditOne.getTransport( letterofcreditone[theLCnumber] ), 
        LetterofCreditOne.getBeneficiary( letterofcreditone[theLCnumber] ),
        LetterofCreditOne.getCargoContent( letterofcreditone[theLCnumber] ), 
        LetterofCreditOne.getDrawer( letterofcreditone[theLCnumber] ));
    }
    
    function getLetterofCreditfinal(uint theLCnumber) public view returns
    (string memory special_terms, string memory bill_of_exchange_deadline,
    string memory transfer_rules, string memory letter_of_credit_day, string memory letter_of_credit_time){
    
        return (
        LetterofCreditOne.getSpecialTerms( letterofcreditone[theLCnumber] ) ,
        LetterofCreditOne.getBillofExchangeDeadline( letterofcreditone[theLCnumber]  ),
        LetterofCreditOne.getTransferRules( letterofcreditone[theLCnumber] ), 
        LetterofCreditOne.getLetterOfCreditDay( letterofcreditone[theLCnumber] ),
        LetterofCreditOne.getLetterOfCreditTime( letterofcreditone[theLCnumber] ) );
    }
    
      
}