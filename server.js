const http = require('http');
const path = require('path');
const url = require("url");
const cars =require("./cars");


const server = http.createServer((req, res) => {
        let pathname = url.parse(req.url).pathname;
        let filePath = path.basename(req.url);
        if(pathname==='/') {
            res.writeHead(200, 'utf-8', {'Content-type': 'text/html'});
            res.write(`<h1 style="display:block; width:300px; margin:0 auto; padding: 10px 0; text-align:center;">We sales cars:</h1>`);
            for (let j=0; j<cars["car"].length;j++) {
                res.write(`<a href="${j}" style="display:block; width:300px; margin:0 auto; padding: 10px 0; text-align:center;">${cars["car"][j].model}</a></br>`);
            }
            res.end();
        } else {
            cars["car"].forEach(function(item,i) {
                if(filePath==i) {
                    res.writeHead(200, 'utf-8', {'Content-type': 'text/html'});
                    console.log( item);
                    res.write(`<div style="width:300px; margin:0 auto;" > <div style="width:300px;"><img src=${item.photo} alt="picture" style="width: 100%;" /></div>
                    <h1  style="width:300px; text-align:center;">${item.model}</h1>
                    <div  style="width:300px; text-align:center;">${item.price}</div>
                    <p style="width:300px; text-align:center;">${item.description}</p> </div>`)
                    res.end();
                 }
             })
        }
        res.end(`<h1 style="text-align:center;">404</h1>`);
});
server.listen(3000, () => {
    console.log('Listening 3000');
});




// let pathname = url.parse(req.url).pathname;
