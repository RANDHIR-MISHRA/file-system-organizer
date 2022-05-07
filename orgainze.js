function organizefn(directoryPath){
    //console.log("organize command implemented for",directoryPath);
let destpath;
    if(directoryPath==undefined){
    destpath=process.cwd();
    return;
}else{
    let doesexist=fs.existsSync(directoryPath);
    if(doesexist){
  destpath=path.join(directoryPath,"organized_files");
      if(fs.mkdirSync(destpath)==false){
        fs.mkdirSync(destpath);
      }

    }else{
        console.log("kindly enter the  correct path");
        return;
    }
}
organizehelper(directoryPath,destpath);
}
function organizehelper(src,dest){
let childnames=fs.readdirSync(src);
//console.log(childnames);
for(let i=0;i<childnames.length;i++){
    let childaddress=path.join(src,childnames[i]);
  let isfile=  fs.lstatSync(childaddress).isFile();
if(isfile){
    // console.log(childnames[i]);
    let category=getCategory(childnames[i]);
    console.log(childnames[i],'belongs to this-->',category);

    sendfiles(childaddress,dest,category);

}

}
}
function sendfiles(srcfilepath,dest,category){
    let categorypath=path.join(dest,category);
    if(fs.existsSync(categorypath)==false){
        fs.mkdirSync(categorypath);
    }
  let filepath  =path.basename(srcfilepath);
  let destfilepath=path.join(categorypath,filepath);
  fs.copyFileSync(srcfilepath,destfilepath);
  fs.unlinkSync(srcfilepath);
}
function getCategory(name){
   let ext=path.extname(name);
//  console.log(ext);
ext=ext.slice(1);
for(let type in types){
let ctypeArray=types[type];
for(let i=0;i<ctypeArray.length;i++){
    if(ext==ctypeArray[i]){
        return type;
    }
}
 }
 return "others";
}
module.exports={
    organizekey:organizefn
}