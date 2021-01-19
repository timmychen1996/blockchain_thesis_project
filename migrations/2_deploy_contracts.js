
var Product_lib = artifacts.require("Product.sol");
var ProductPseudoRest = artifacts.require("ProductPseudoRest.sol");

var Billofladbasic_lib = artifacts.require("Billofladbasicone.sol");
var BillofladbasiconePseudoRest = artifacts.require("BillofladbasiconePseudoRest.sol");

/*2020/1/16*/
/*This two we do not need, since it is for future use*/
/*var LetterofCreditone_lib = artifacts.require("LetterofCreditOne.sol");
var LetterofCreditonePseudoRest = artifacts.require("LetterofCreditonePseudoRest.sol");*/

var BLTransferPseudoRest = artifacts.require("BLTransferPseudoRest.sol");
var User_lib = artifacts.require("User.sol");

var UserPseudoRest = artifacts.require("UserPseudoRest.sol");
var LCTransferPseudoRest = artifacts.require("LCTransferPseudoRest.sol");
var RoutePseudoRest = artifacts.require("Route.sol");
var AccountKeyMessagePseudoRest = artifacts.require("AccountKeyMessagePseudoRest.sol");
/*2020/1/16 add*/
var ProductTransferPseudoRest = artifacts.require("ProductTransferPseudoRest.sol");



module.exports = function(deployer){

    deployer.deploy( Product_lib );
    /*deployer.deploy( Billofladbasic_lib );
    deployer.deploy( LetterofCreditone_lib );
    deployer.deploy( User_lib );*/

    deployer.link( Product_lib, ProductPseudoRest );
    /*deployer.link( Billofladbasic_lib, BillofladbasiconePseudoRest);
    deployer.link( LetterofCreditone_lib, LetterofCreditonePseudoRest);
    deployer.link( User_lib, UserPseudoRest);*/

    /*deployer.deploy( LetterofCreditonePseudoRest );
    deployer.deploy( UserPseudoRest );
    deployer.deploy( RoutePseudoRest );
    deployer.deploy( LCTransferPseudoRest );

    deployer.deploy( AccountKeyMessagePseudoRest).then(function(){
        return deployer.deploy(BLTransferPseudoRest, AccountKeyMessagePseudoRest.address).then(function(){
            return deployer.deploy(BillofladbasiconePseudoRest, BLTransferPseudoRest.address);
        })
    });*/

    /*2021/1/16 add*/
    deployer.deploy( ProductTransferPseudoRest ).then(function(){
        return deployer.deploy( ProductPseudoRest, ProductTransferPseudoRest.address );
    });

};


