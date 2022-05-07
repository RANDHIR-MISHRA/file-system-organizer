function helpfn(directoryPath){
    console.log( `list of all commands
          node main.js tree "directoryPath"
           node main.js organize "directoryPath"
          node main.js help 
    `);
    
}
module.exports={
    helpkey:helpfn
}