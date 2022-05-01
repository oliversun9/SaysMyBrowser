const timeFetcher = (callback) => {
    const timeZoneOffsetInMin = new Date().getTimezoneOffset()
    const timeZoneSign = timeZoneOffsetInMin > 0 ? "-" : "+" // opposite of offset's sign
    const absoluteTimeDiffInMin = Math.abs(timeZoneOffsetInMin)
    const hour = Math.floor(absoluteTimeDiffInMin / 60)
    const minute = absoluteTimeDiffInMin % 60
    const padZeroToTwoDigits = (n) => {
        if(0 <= n && n <=9) {
            return `0${n}`
        }
        return n
    }
    const formattedTimeZone = `UTC ${timeZoneSign}${padZeroToTwoDigits(hour)}:${padZeroToTwoDigits(minute)}`
    callback(formattedTimeZone)
}
const screenDimensionFetcher = (callback) => {
    const fetchDimension = () => {
        const width = Math.max(document.documentElement.clientWidth || 0, window.outerWidth || 0)
        const height = Math.max(document.documentElement.clientHeight || 0, window.outerHeight || 0)
        callback(`${width} by ${height}`)
    }
    window.addEventListener("resize", () => {
        fetchDimension()
    })
    fetchDimension()
}

const topicToFetcher = {
    "Time": timeFetcher,
    "Screen Dimension": screenDimensionFetcher,
}

const setup = () => {
    const infoTable = document.getElementById("info_table")
    setupTable(infoTable, topicToFetcher)
}

const setupTable = (table, topicToFetcher) => {
    populateLoadingTable(table, topicToFetcher)
}

const populateLoadingTable = (table, topicToFetcher) => {
    for (const topic in topicToFetcher) {
        const row = createTableRow(topic, "loading-----")
        table.appendChild(row)
        const fetcher = topicToFetcher[topic]
        fetcher((result)=>{
            row.childNodes[1].textContent = result
        })
    }
}

const createTableRow = (...cellsData) => {
    const row = document.createElement("tr")
    cellsData.forEach( cellData => {
        const cell = document.createElement("td")
        cell.textContent = cellData
        row.appendChild(cell)
    })
    return row
}

setup()