const TransportPseudoRest = artifacts.require("./TransportPseudoRest.sol");


contract( 'TransportPseudoRest', () =>{
    it('Should set the value of data variable', async () => {
        const transport = await TransportPseudoRest.deployed();
        await transport.setSupplier( 1,"Jollibee");
        const result = await transport.getSupplier(1);
        assert ( result == 'Jollibee');
    });
});


