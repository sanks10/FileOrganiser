let fs=require('fs');
//let data=fs.readFileSync('abc.txt');
//readfilesync reads the content of the file whose path has been given
//console.log(data.toString());
//we used toString function to convert buffer into string
let wdata ='demo text I wanna add to a file thats gonna be created using a jsmodule';
//we'll use writefilesync which is an object of fs module
fs.writeFileSync('write.txt',wdata);
//using writefilesync again to edit data in write.txt file will erase previous data
//hence, we'll use appendfile sync to add data 
fs.appendFileSync('write.txt','\nthis is the data I wanted to append');
//unlinkSync will be used to delete a file
//fs.unlinkSync('abc.txt');
//creating a folder using js
//fs.mkdirSync('folder');
//check if a file is already present using existsSync(path)
console.log(fs.existsSync('git.md'));
//returns true...this means git.md file exists on my vscode
