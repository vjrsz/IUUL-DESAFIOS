import fs from 'node:fs'

export function readJson(callback){
    fs.readFile("./assets/data.json", 'utf8', (err, file) => {
        if (err) {
            console.error('Error while reading the file:', err)
            return
        }
        try {
            const data = JSON.parse(file)
            callback(data)
        } catch (err) {
            console.error('Error while parsing JSON data:', err)
        }
    })
}

export function writeJson(path, data){
    fs.writeFile(path, JSON.stringify(data), function(err) {
        if (err) throw err;
    });
}

