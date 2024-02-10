const fs = require('fs');   
const http = require('http');
// SYNCHRONOUS file reading (not-recomended)


// const readFile  = fs.readFileSync('./txt/input.txt','utf-8');
// console.log(`File System Read :- ${readFile}`);

// fs.writeFileSync('./txt/output.js',`Something About Avacado posted on :- ${readFile}`);   

// ASYNCHRONOUS file reading (recomended)   
// const randomtext  = "Im having a Great Day"; 
// fs.readFile('./txt/start.txt','utf-8',(err,data1) => {
//     console.log(data1);
//     fs.readFile(`./txt/${data1}.txt`,"utf-8",(err,data2) => {
//         console.log(data2);
//         fs.readFile('./txt/append.txt',"utf-8",(err,data3) => {
//             console.log(data3);
//             fs.writeFile('./txt/final.txt',`WRITING\n ${data2}\n${data3}\n ${randomtext}`,(err) => {  
//                 console.log("Your file has been Written");  
//             })
//         })  
//     })
// })

// console.log("Asynchronous Reading");  

//////////// SERVER HTTP 

// Create Server
const server = http.createServer((req,res) => { 
    const pathName = req.url;
    if(pathName === '/' || pathName === '/app') {  
        res.writeHead(200, {            
            'Content-type' : 'text/html',
            'Lorem_Picsum' : 'Image_Resolution'
        })          
        res.end(`<div> 
            <h1 style="color: red">Image from Lorem Picsum</h1>         
            <img src="https://picsum.photos/200/300" />     
        </div>`);            
    } else if(pathName === '/home') {
        res.end("This is Home Page"); 
    } else {    
        res.end(`<h1>Page Not Found</h1>`); 
    }   
})  

// Req Server 
server.listen(8000, '127.0.0.1', () => { console.log("Server Running on Port 8000")});  
