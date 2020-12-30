pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;
import './Billofladbasicone.sol';
import './BLTransferPseudoRest.sol';

contract BillofladbasiconePseudoRest{
    
    mapping(uint => Billofladbasicone.aBillofladbasicone) private billofladingsone;
    BLTransferPseudoRest BLTransferInstance;
    using Billofladbasicone for Billofladbasicone.aBillofladbasicone;
    
    constructor(address BLTransfer_addr) public {
        BLTransferInstance = BLTransferPseudoRest(BLTransfer_addr);
    }
    
    /*2020/12/18 changes*/
    function setBillofLadingone(uint theBLnumber,string memory theTime, string memory Importer,
    string memory Exporter , string memory notifyparty,
    string memory pre_carriage_by,string memory place_of_receipt,
    string memory ocean_vessel_voy_no) public {
        
        BLTransferInstance.setBL(theBLnumber, theTime);
        Billofladbasicone.setBLnumber(billofladingsone[theBLnumber],theBLnumber);
        Billofladbasicone.setImporter(billofladingsone[theBLnumber],Importer);
        Billofladbasicone.setExporter(billofladingsone[theBLnumber],Exporter);
        Billofladbasicone.setNotifyParty(billofladingsone[theBLnumber],notifyparty);
        Billofladbasicone.setPreCarriageBy(billofladingsone[theBLnumber],pre_carriage_by);
        Billofladbasicone.setPlaceOfReceipt(billofladingsone[theBLnumber],place_of_receipt);
        Billofladbasicone.setOceanVesselVoyNo(billofladingsone[theBLnumber],ocean_vessel_voy_no);
        
        
    }
    
    function setBillofLadingtwo(uint theBLnumber,
    string memory port_of_loading,string memory port_of_discharge,
    string memory freight_and_charges, string memory final_destination,
    string memory freight_payable_at, string memory marks_numbers) public {
        
        Billofladbasicone.setPortOfLoading( billofladingsone[theBLnumber],port_of_loading);
        Billofladbasicone.setPortOfDischarge( billofladingsone[theBLnumber],port_of_discharge);
        Billofladbasicone.setFreightAndCharges( billofladingsone[theBLnumber],freight_and_charges);
        Billofladbasicone.setFinalDestination( billofladingsone[theBLnumber],final_destination);
        Billofladbasicone.setFreightPayableAt( billofladingsone[theBLnumber],freight_payable_at);
        Billofladbasicone.setMarksAndNumbers( billofladingsone[theBLnumber],marks_numbers);
    }
    
    function setBillofLadingfinal(uint theBLnumber,
    string memory description,string memory gross_weight,
    string memory measurement, string memory total_packages,
    string memory place_and_date_of_issue, string memory signed_for_the_carrier) public {
        
        Billofladbasicone.setDescription( billofladingsone[theBLnumber], description);
        Billofladbasicone.setGrossWeight( billofladingsone[theBLnumber], gross_weight);
        Billofladbasicone.setMeasurement( billofladingsone[theBLnumber],measurement);
        Billofladbasicone.setTotalPackages( billofladingsone[theBLnumber],total_packages);
        Billofladbasicone.setPlaceAndDateOfIssue( billofladingsone[theBLnumber],place_and_date_of_issue);
        Billofladbasicone.setSignedForTheCarrier( billofladingsone[theBLnumber], signed_for_the_carrier);
    }
    
    function setBillofLadingTime(uint theBLnumber, string memory bill_of_lading_time) public{
        
        Billofladbasicone.setBLTime( billofladingsone[theBLnumber], bill_of_lading_time);
    }
    
    function setBillofLadingDay(uint theBLnumber, string memory bill_of_lading_day) public{
        
        Billofladbasicone.setBLDay( billofladingsone[theBLnumber], bill_of_lading_day);
    }
    
    function getBillofLadingone(uint BLnumber) public view returns
    (string memory Importer,string memory Exporter,
    string memory notifyparty, string memory pre_carriage_by,
    string memory place_of_receipt, string memory ocean_vessel_voy_no)
    {
        return ( Billofladbasicone.getImporter(billofladingsone[BLnumber]),Billofladbasicone.getExporter(billofladingsone[BLnumber]),
        Billofladbasicone.getNotifyParty(billofladingsone[BLnumber]),Billofladbasicone.getPreCarriageBy(billofladingsone[BLnumber]),
        Billofladbasicone.getPlaceOfReceipt(billofladingsone[BLnumber]),Billofladbasicone.getOceanVesselVoyNo(billofladingsone[BLnumber]) );
    }
    
    function getBillofLadingtwo(uint BLnumber) public view returns
    (string memory port_of_loading, string memory port_of_discharge, 
    string memory freight_and_charges, string memory final_destination,
    string memory freight_payable_at, string memory marks_numbers)
    {
        return ( Billofladbasicone.getPortOfLoading(billofladingsone[BLnumber]),Billofladbasicone.getPortOfDischarge(billofladingsone[BLnumber]),
        Billofladbasicone.getFreightAndCharges(billofladingsone[BLnumber]), Billofladbasicone.getFinalDestination(billofladingsone[BLnumber]),
        Billofladbasicone.getFreightPayableAt(billofladingsone[BLnumber]), Billofladbasicone.getMarksAndNumbers(billofladingsone[BLnumber]));
    }
    
    function getBillofLadingfinal(uint BLnumber) public view returns
    (string memory description, string memory gross_weight,
    string memory measurement, string memory total_packages,
    string memory place_and_date_of_issue, string memory signed_for_the_carrier){
        
        return ( Billofladbasicone.getDescription(billofladingsone[BLnumber]), Billofladbasicone.getGrossWeight(billofladingsone[BLnumber]),
        Billofladbasicone.getMeasurement(billofladingsone[BLnumber]), Billofladbasicone.getTotalPackages(billofladingsone[BLnumber]),
        Billofladbasicone.getPlaceAndDateOfIssue(billofladingsone[BLnumber]), Billofladbasicone.getSignedForTheCarrier(billofladingsone[BLnumber]));
    }
    
    function getBillofLadingTime(uint BLnumber) public view returns(string memory bill_of_lading_time){
        
        return ( Billofladbasicone.getBLTime( billofladingsone[BLnumber] ) );
    }
    
    function getBillofLadingDay(uint BLnumber) public view returns(string memory bill_of_lading_day){
        
        return ( Billofladbasicone.getBLDay( billofladingsone[BLnumber] ) );
    }

}
