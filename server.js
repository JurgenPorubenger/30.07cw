const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require("url");
const cars =require("./cars");
// let mass= cars["car"];
// let str = JSON.stringify(cars,null,2);


const server = http.createServer((req, res) => {
    if(req.url !== '/favicon.ico'){
        let pathname = url.parse(req.url).pathname;
        console.log(pathname);
        let filePath = path.basename(req.url);
        console.log(filePath);

        cars["car"].forEach(function(item,i) {
            if(pathname==='/') {
                res.writeHead(200, 'utf-8', {'Content-type': 'text/html'});
                res.write(`<h1>We sales cars:</h1>`);
                for (let j=0; j<cars["car"].length;j++) {
                    res.write(`<a href="${j}">${cars["car"][j]["model"]}</a></br>`);
                }
                res.end();
            }
            else if(Number(filePath)===i) {
                res.writeHead(200, 'utf-8', {'Content-type': 'text/html'});
                res.write(`<h1>${cars["car"][i]["model"]}</h1></br>`);
                console.log(cars["car"][i]['model']);
                res.end();
            }
        })




        //     console.log(filePath);
        //         console.log(cars["car"][i]['model']);
        //         res.writeHead(200, 'utf-8', {'Content-type': 'text/html'});
        //         res.write(`<h1>${cars["car"][i]['model']}</h1>`);
        //         res.end();
        //     }else {}
            // let filePath = path.join(__dirname,pathname==="/"?);
            // res.writeHead(200, 'utf-8', {'Content-type': 'text/html'});
            // res.write("Hello World");
        // })
    }
});
server.listen(3000, () => {
    console.log('Listening 3000');
});




// let pathname = url.parse(req.url).pathname;
