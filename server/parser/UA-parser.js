const { use } = require("express/lib/application")

const parse = (ua) => {
    var browser
    if (ua.includes("Firefox/firefoxversion")) {
        browser = "Firefox"
    } else if(ua.includes("OPR/") || ua.includes("OPR/")) {
        browser = "OPERA"
    } else if(ua.includes("Chrome")) {
        browser = "Chrome"
    } else if(ua.includes("Safari/") && ua.includes("Version/")) {
        browser = "Safari"
    } else {
        browser = "Other"
    }
    return {browser}
}

module.exports = {parse}