let fs=require("fs");
let path=require("path");
function treefn(directoryPath){
    // console.log("tree command implemented for",directoryPath);
    //let destpath;
    if(directoryPath==undefined){
      treehelper( process.cwd(), "");
    return;
}else{
    let doesexist=fs.existsSync(directoryPath);
    if(doesexist){
      treehelper(directoryPath, ""); 

    }else{
        console.log("kindly enter the  correct path");
        return;
    }
}
}
function treehelper(directoryPath,indent){

   let isfile= fs.lstatSync(directoryPath).isFile();
   if(isfile==true){
       let filename=path.basename(directoryPath);
       console.log(indent+"___"+filename);
   }else{
       let dirname=path.basename(directoryPath);
       console.log(indent+"---"+dirname);
       let childrens=fs.readdirSync(directoryPath);
       for(let i=0;i<childrens.length;i++){
       let childpath= path.join(directoryPath,childrens[i]);   
        treehelper(childpath,indent+"\t");
       }
   }

}
module.exports={
    treekey:treefn
}