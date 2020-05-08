const fs = require('fs');
const http = require('http')
const url = require('url')

// server
const replaceTemplate = (temp, product) => {
    let output =temp.replace(/{%PRODUCTNAME%}/g, product.productName)
    output = output.replace(/{%IMAGE%}/g, product.image)
    output = output.replace(/{%PRICE%}/g, product.price)
    output = output.replace(/{%FROM%}/g, product.from)
    output = output.replace(/{%NUTRIENTS%}/g, product.  nutrients)
    output = output.replace(/{%QUANTITY%}/g, product.quantity)
    output = output.replace(/{%DESCRIPTION%}/g, product.description)
    output = output.replace(/{%ID%}/g, product.id)
    
    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, '--organic')
    return output;
}

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html` , 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html` , 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html` , 'utf-8');
const data = fs.readFileSync(`${__dirname}/dev-data/data.json` , 'utf-8');

const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathName = req.url

    // Overview Page
    if (pathName === '/' || pathName === '/over') {
        res.writeHead(200, {'content-type': 'text/html'})
        const cardsHtml = dataObj.map(el=> replaceTemplate(tempCard, el))
        console.log(cardsHtml)
        res.end(tempOverview)
        
    // Product page
    } else if (pathName === '/product') {
        res.end('Hello from the product')
    
    // Api
    } else if (pathName === '/product') {
        res.writeHead(200, {'Content-type': 'application/json'})
        
        res.end(data)
    
    //  Not found
    } else {
        res.writeHead(404, {
            'content-type': 'text/html',
            'my-own-header': 'hello-world'
        })
        res.end('<h1>page not found</h1>')
    }
})
server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to the request on port http://127.0.0.1:8000')
})