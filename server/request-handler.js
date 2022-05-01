const requestParser = require("./parser/request-parser")
const handler = (req, resp, next) => {
    console.log(req.headers)

    const ipAddress = requestParser.parseIPAddress(req)
    const browser = requestParser.parseUA(req.headers["user-agent"]).browser
    
    resp.render(
        'index',
        {
            pageTitle: "Your browser says",
            heading: "Your browser has told me everything",
            discovered: {
                ipAddress,
                browser,
            }
        }
    )
}

module.exports = handler