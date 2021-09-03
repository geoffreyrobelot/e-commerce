const fs = require('fs')

exports.writeProduct = (contents) =>{
    fs.readFile("products.json", function (err, data) {
        console.log(data.toJSON())
        if(err) throw err
        const json = JSON.parse(data)
        
        json.push(contents)
        fs.writeFile("products.json", json)
    })
}