pragma solidity >=0.4.22 <0.6.0;
pragma experimental ABIEncoderV2;

library User{

    
    struct aUser{
        
        string user_account;
        string user_password;
        string user_role_option;
        string user_secret;
        string user_address;
    }
    
    function getUserAccount(aUser storage self) view public returns(string memory user_account ){
        
        return self.user_account;
    }
    
    function getUserPassword(aUser storage self) view public returns(string memory user_password){
        
        return self.user_password;
    }
    
    function getUserRoleOption(aUser storage self) view public returns(string memory user_role_option){
        
        return self.user_role_option;
    }

    function getUserAddress(aUser storage self) view public returns(string memory user_address){

        return self.user_address;
    }
    
    function setUserAccount(aUser storage self, string memory anUser_account) public{
        
        self.user_account = anUser_account;
    }
    
    function setUserPassword(aUser storage self, string memory anUser_password) public{
        self.user_password = anUser_password;
    }
    
    function setRoleOption(aUser storage self, string memory anUser_role_option) public{
        self.user_role_option = anUser_role_option;
    }

    function setUserAddress(aUser storage self, string memory anUser_address) public{
        self.user_address = anUser_address;
    }
    
}
