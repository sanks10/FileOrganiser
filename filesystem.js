let fs=require('fs');
let data=fs.readFileSync('abc.txt');
//readfilesync reads the content of the file whose path has been given
console.log(data.toString());
//we used toString function to convert buffer into string
let wdata ='demo text I wanna add to a file thats gonna be created using a jsmodule';
//we'll use writefilesync which is an object of fs module
fs.writeFileSync('write.txt',wdata);
