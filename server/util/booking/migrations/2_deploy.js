const fs = require('fs')
const ExhibitionFactory = artifacts.require('../contracts/ExhibitionFactory.sol')
const path = '/../src/Metadata.js'

module.exports = deployer => {
    deployer.deploy(ExhibitionFactory).then(instance => {
        // console.log(instance)
        console.log('\nconst ADDRESS = \'' + ExhibitionFactory.address);
    })

    // fs.writeFile(
    //     __dirname + path,
    //     '\nconst ADDRESS = \'' + ExhibitionFactory.address + "'",
    //     'utf8',
    //     (err) => {
    //         if (err) {
    //             console.log(err)
    //         }
    //     }
    // )

    // fs.appendFile(
    //     __dirname + path,
    //     '\nconst ABI = ' + JSON.stringify(ExhibitionFactory.abi),
    //     (err) => {
    //         if (err) {
    //             console.log(err)
    //         } else {
    //             fs.appendFile(
    //             __dirname + path,
    //             '\n\nmodule.exports = { ADDRESS, ABI };',
    //             (err) => {
    //                 if (err) {
    //                 console.log(err)
    //                 }
    //             },)
    //         }
    //     },
    // )
}