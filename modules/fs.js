const fs = require('fs')

exports.writeProduct = (contents) => {
    fs.readFile("products.json", function (err, data) {
        if (err) throw err

        const json = JSON.parse(data)
        json.push(contents)

        fs.writeFile("products.json", JSON.stringify(json), (err) => {
            if (err) throw err
            console.log('file succesfully writed')
        })
    })
}

exports.rewriteProduct = (newList) => {
    fs.readFile("products.json", function (err, data) {
        if (err) throw err

        fs.writeFile("products.json", '', () => { console.log('file rewrite to blank') })

        fs.writeFile("products.json", JSON.stringify(newList), (err) => {
            if (err) throw err
            console.log('file succesfully writed')
        })
    })
}
