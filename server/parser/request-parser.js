const ipAddressParser = require("./ip-address-parser")

const uaParser = require("./UA-parser")

const parser = {
    parseIPAddress: ipAddressParser.parse,
    parseUA : uaParser.parse,
}

module.exports = parser