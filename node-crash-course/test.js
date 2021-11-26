const name = 'maria'
const fs = require('fs');
const { blob } = require('stream/consumers');

/*fs.readFile('docs/blog1.txt',(err,data) => {
    if(err) {
        console.log(err);
    } 
    console.log(data.toString());
});

fs.writeFile('docs/blog2.txt',"hello world",()=>{
    console.log("file was written");
});

fs.mkdir('./assets',()=>{
    console.log("Created Folder");
});*/

const readStream  = fs.createReadStream('docs/blog3.csv');

readStream.on('data', (chunk => {
    console.log("--NEW STREAM---s");
    console.log(chunk);
}))

//console.log(name);

//console.log(global);

//console.log(__dirname);
//console.log(__filename);