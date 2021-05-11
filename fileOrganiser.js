let fs=require('fs');
//const { unlink } = require('fs/promises');
let path=require('path');
let input = process.argv.slice(2);
//console.log(input);
let c=fs.readdirSync(input[0]);
//console.log(c);
let folderPath=input[0];
let Extensions = {
    "Documents": [".doc",".pdf",".ext",".txt"], 
    "Images":[".gif",".img",".png",".jpg",".jpeg"],
    "Video": [".mp4"],
    "Audio": [".mp3"],
    "Applications": [".exe",".app"],
    "Others":[".json",".pem"]
}
let ExtFolderPath=folderPath;

function moveFile(content,folderPath){
    let srcFilePath=path.join(folderPath,content);
    let DestFilePath=path.join(ExtFolderPath,content);
    // fs.copyFileSync(srcFilePath,DestFilePath);
    // fs.unlinkSync(srcFilePath);
    console.log(srcFilePath,'    ' , DestFilePath);
    fs.renameSync(srcFilePath,DestFilePath);
    
    
}
function createfolder(){
    fs.mkdirSync(ExtFolderPath);

}
function checkfolder(ExtensionName,folderPath)
{
    for(let key in Extensions){
        let arr=Extensions[key];
        let eon=arr.includes(ExtensionName);
        if(eon==true){
            console.log(key);
            ExtFolderPath=path.join(folderPath,key);
            break;
        }
        
    }
    return fs.existsSync(ExtFolderPath); 
}
for(let i=0;i<c.length;i++){
    //console.log(path.extname(c[i]));
    let ExtensionName=path.extname(c[i]);
    let ExtFolderExists = checkfolder(ExtensionName,folderPath); 
//till now, we have obtained the types of files in out target
//folder and classified them in their types.

    if(ExtFolderExists==false){
        createfolder();
        moveFile(c[i],folderPath);
    }
    else{
        moveFile(c[i],folderPath);
    }
}

