pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;

/*import './Supplier.sol';
import './Transport.sol';
import './Terminal.sol';
import './Carrier.sol';
import './Product.sol';*/

contract Route{
    
    
    struct country{
        
        string name;
        bool delivered;
        bool created;
        string deliveredBy;
        
    }
    
    struct route{
        
        bool created;
        string name;
        /*uint id;*/
        string input_country_name;
        string output_country_name;
        
    }
    
    mapping( string => country) private country_look_up;
    mapping( string => route) private route_look_up;
    
    modifier RouteDoesExists(string memory _route_name){
        
        if( route_look_up[ _route_name ].created != true){
            revert();
        }
        _;
    }
    
    modifier countryDoesNotExist(string memory _country_name){
        
        if( country_look_up[ _country_name ].created){
            revert();
        }
        _;
    }
    
    event RouteCreated(string _name, string _input_country_name, string _output_country_name);
    event RouteExists(string from_country_name, string to_country_name);
    event NoRouteExists();
    event CountryDeliveredBy(string curr_country_name, string _route_name);
    
    constructor() public {
        
    }
    
    function newCountry(string memory _name) public{
        
        
        /*country_look_up[_id].id = _id;*/
        country_look_up[ _name ].name = _name;
        country_look_up[ _name ].created = true;
        country_look_up[ _name ].delivered = false;
        country_look_up[ _name ].deliveredBy = 'None';
        
    }
    
    /*The new country is produced with new Route*/
    /*But we need to check whether the route already exists or not*/
    function newCountry(string memory _name, string memory _route_name) public RouteDoesExists(_route_name){
        
        country_look_up[ _name ].deliveredBy = _route_name;
        country_look_up[ _name ].delivered = true;
        
    }
    
    function newroute(string memory _name, string memory _input_country_name, string memory _output_country_name) public 
    countryDoesNotExist( _output_country_name )
    {
        
        /*route_look_up[ _name ].id= _id;*/
        route_look_up[ _name ].name = _name;
        route_look_up[ _name ].created = true;
        
        route_look_up[ _name ].input_country_name =  _input_country_name;
        newCountry( _output_country_name );
        route_look_up[ _name ].output_country_name = _output_country_name;
        emit RouteCreated(_name, _input_country_name, _output_country_name);
        
    }
    
    function getCountry( string memory _name) public view returns(bool){
        
        return ( country_look_up[ _name ].created );
    }
    function compareStrings(string memory str_one, string memory str_two) public view returns(bool){
        
        return ( keccak256( abi.encodePacked((str_one)) ) == keccak256( abi.encodePacked((str_two)) ) ) ;
    }
    
    function primitiveRoute(string memory country_begin_name, string memory country_end_name) public{
        
        string memory curr_country_name = country_begin_name;
        while( compareStrings( curr_country_name, country_end_name) == false ){
            
            string memory curr_route = country_look_up[ curr_country_name ].deliveredBy;
            /*string memory route_name = route_look_up[ curr_route ].name;*/
            emit CountryDeliveredBy(curr_country_name, curr_route);
            curr_country_name = route_look_up[  curr_route ].output_country_name;
            
        }
        
        /*if( compareStrings(curr_country_name,country_end_name) ){
            
            emit RouteExists( country_begin_name , country_end_name);
        }
        
        else{
            emit NoRouteExists();
        }*/
    }
}