const Enockcoin= artifacts.require('Enockcoin');


contract ('Enock coin', async accounts=>{

        it ( 'nom de mon toke', async()=>{

            let moncontract= await Enockcoin.deployed();

            let nom= await moncontract.name();
            let symb= await moncontract.symbol();

            assert.equal(nom.toString(), "ENOCKCOIN","ce n'est pas le nom");
            assert.equal(symb.toString(), "ENCK","ce n'est pas le symbol");


        })


        it ( 'verifier le supply', async()=>{

            let moncontract= await Enockcoin.deployed();

            let supply= await moncontract.totalSupply();
            let balance= await moncontract.balanceOf(accounts[1]);
            let trans= await moncontract.transfer(accounts[1], 100000, {from:accounts[0]});

            assert.equal(supply.toNumber(),1000000,"ce n'est pas le supply");
            assert.equal(balance.toNumber(), 0,"ce n'est la vraie balance");
            

        })

        it ( 'verifier la balance de 1', async()=>{

            let moncontract= await Enockcoin.deployed();

          
            
           
            let solde1= await moncontract.balanceOf(accounts[1]);
    
            assert.equal(solde1.toNumber(),100000,"ce n'est la vraie balance");
            

        })

})