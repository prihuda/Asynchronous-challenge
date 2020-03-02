const fs = require('fs')

const tambujin = new Promise(
    (resolve) => {
        fs.readdir('/', (err, result) => {
            if (err) {
                throw new Error(err.message)
            }
            resolve(result)
        })
    }

)

tambujin.then(
    (result) => {
        console.log(result)
    }
)

