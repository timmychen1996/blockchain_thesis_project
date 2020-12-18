pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;
import './User.sol';

contract UserPseudoRest{
    
    mapping(string => User.aUser) private userone;
    
    using User for User.aUser;
    
    constructor() public {
        
    }
    
    function registerUserInfo(string memory user_account,
    string memory user_password, string memory user_role_option, string memory user_address) public {
        
        User.setUserAccount( userone[ user_account ], user_account);
        User.setUserPassword( userone[ user_account ], user_password);
        User.setRoleOption( userone[ user_account ], user_role_option);
        User.setUserAddress( userone[ user_account ], user_address);
        
    }
    
    function getloginUserInfo(string memory user_account) public view returns
    (string memory user_password, string memory user_role_option, string memory user_address)
    {   
        return (
        User.getUserPassword( userone[ user_account ] ), 
        User.getUserRoleOption( userone[ user_account ] ),
        User.getUserAddress( userone[ user_account] ) );
        
    }
    
    function checkloginUser(string memory user_account, string memory user_password) public view returns( bool ){
        
        if( keccak256( bytes( userone[user_account].user_account )) == keccak256( bytes(user_account) ) ){
            if( keccak256( bytes( userone[user_account].user_password )) == keccak256( bytes( user_password ) ) ){
                    return true;
            }
        }
        return false;
    }
       
}

