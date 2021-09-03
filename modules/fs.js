const fs = require('fs')

exports.writeProduct = (contents) =>{
    fs.readFile("products.json", function (err, data) {
        if(err) throw err

        const json = JSON.parse(data)
        json.push(contents)
        
        fs.writeFile("products.json", JSON.stringify(json), (err) => {
            if(err) throw err
            console.log('file succesfully writed')
        })
    })
}