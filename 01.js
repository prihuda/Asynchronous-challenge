const fs = require('fs')

const tambujin = new Promise(
    (resolve) => {
        fs.readdir('/', (err, result) => {
            if (err) {
                throw new Error(err.message)
            }
            setTimeout(() => {
                resolve(result)
            }, 2000)
        })
    }

)

tambujin.then(
    (result) => {
        console.log(result)
    }
)

