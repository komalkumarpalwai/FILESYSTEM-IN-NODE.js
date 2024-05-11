// chapter-01
const os=require('os')
console.log(os.type())
console.log(os.version())
console.log(os.homedir())
console.log(__dirname)
console.log(__filename)
// by reruire path
const path=require('path')
//parse:- gives an object
console.log(path.parse(__filename))
//EXPORTING DATA FROM DATA.js
const {name,fullname,}= require("./data")
console.log(name,fullname)

//chapter-02{read and write files}
//file system used to read and write ,from the  user to another file, taking the data from the another file is know as file system
//const fs= require('fs')
//readfile:- used read the data  from the another file
const  fs =  require('fs');

fs.readFile(path.join(__dirname,'data.js'), 'utf8', (err, res) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(res);
});
// if any exception caught
process.on('uncaughtException', err => {
    console.log(`The error is: ${err}`);
    process.exit(1);
});
      //write & appending a file ,by the class back of writeFile.
fs.writeFile(path.join(__dirname,'data2.txt'), 'heloo iam learning node.js today', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("writeFile was succesfull");
    fs.appendFile(path.join(__dirname,'data2.txt'), 'appending a new file', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("append was succesfull");
    //rename was done
    fs.rename(path.join(__dirname,'data2.txt'),path.join(__dirname,'newdata.txt'),(err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("rename was succesfull");
});
});
});
            // we can read and write dats using sream 
            const rs=fs.createReadStream(path.join(__dirname,'dummy.txt'),{encoding:'utf8'});
            const ws=fs.createWriteStream(path.join(__dirname,'dummy2.txt'));
          
           // rs.on('data',(totaldata)=>{
             //   ws.write(totaldata)
            //})
            rs.pipe(ws)