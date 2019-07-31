const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require("url");
const cars =require("./cars");
// let mass= cars["car"];
// let str = JSON.stringify(cars,null,2);

const server = http.createServer((req, res) => {

    if(req.url !== '/favicon.ico'){
        cars["car"].forEach(function(item,i) {
            console.log(i);
            // let pathname = url.parse(req.url).pathname;
            let filePath = path.basename(req.url,'');
            console.log(filePath);
            function f(x) {

            }
            if(filePath==i){
                console.log("kodjdhdhd");
            }
            //
            // let filePath = path.join(__dirname,pathname==="/"?);
            //     console.log(pathname);

            // let pathname = url.parse(req.url).pathname;

            // if (pathname === i) {
            //     console.log(i);
        //}

                res.writeHead(200, 'utf-8', {'Content-type': 'text/html'});
                res.end(`<h1>We sales cars:</h1> <a href="/">${cars["car"][0]['model']}</a></br><a href="/">${cars["car"][1]['model']}</a></br><a href="/">${cars["car"][2]['model']}</a></br><a href="/">${cars["car"][3]['model']}</a></br><a href="/">${cars["car"][4]['model']}</a></br>${cars["car"][1]['model']}`);

        })
    }
});

server.listen(8081, () => {
    console.log('Listening 8080');
});