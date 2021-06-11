const Enockcoin= artifacts.require('Enockcoin');

module.exports=  async function(deployer){

           await  deployer.deploy(Enockcoin, 1000000);

}