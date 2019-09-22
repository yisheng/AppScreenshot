'use strict'

const fs = require('fs-plus')
const process = require('process')
const exec = require('child_process').exec

const appName = process.argv['2']
const imagePath = fs.absolute('./public/images') + '/' + appName

console.log(imagePath)
return

const fromSize = '5.5'
const toSize = ['4', '4.7']

data.forEach(function(category1) {
    category1.subcategories.forEach(function(category2) {
        category2.items.forEach(function(item) {
            var originFolder = imagePath + '/hearthstone/' + item.indexName
            var originPath = originFolder + '/default.png'
            var optimizedFolder = imagePath + '/hearthstone-optimized/' + item.indexName
            var optimizedPath = optimizedFolder + '/default.png'
            var command = 'convert "'+ originPath +'" -trim +repage -background none -gravity center -resize 400x553 "' + optimizedPath + '"'
            
            if (!fs.existsSync(originPath)) {
                console.error('File not exists. ' + originPath)
            } else {
                if (!fs.existsSync(optimizedFolder)) {
                    fs.mkdirSync(optimizedFolder)
                }

                exec(command, (err, stdout, stderr) => {
                    if (err !== null) {
                        console.log(command)
                        console.error(err)
                        console.log("\r\n")
                    }
                })
            }
        })
    })
})