
ok so i have 3 files:
test.js
util.js
bdl.js
here is the bdl.js code: 
const axios = require
const crypto = require('crypto')
const utf8 = require('utf8')
const util = require('./util')

function Sign(key, msg) {
    var skey = utf8.encode(key)
    var message = utf8.encode(msg)
    var hmac = crypto.createHmac('SHA256', skey).update(message).digest('hex')
    return hmac
}


function BuildRequestParamter(query, accessKey, secretKey, rowLimit = 0){
    var filters = JSON.parse(JSON.stringify(query))
    var filterStr = JSON.stringify(filters);
    var credential = Sing(secretKey, JSON.stringify(query))

    var parameters = {
        filters: query,
        userID: accessKey,
        rowLimit,
        credential
    }

    var js = JSON.stringify(parameters).toString();
    console.log(`Big Data Explorer: ${js}`)
    return js

}

function BuildRequestQuery(query, accessKey, secretKey, rowLimit=0) {
    var credential = Sign(secretKey, JSON.stringify(query))
}

async function queryData(query, customQuery) {
    const url = "<this is where the internal cloud server url is queried>"
    const _accessKey = process.env.accessKey
    const _secretKey = process.env.IAMKEY
    let parameters;
    if (!customQuery) {
        parameters = BuildRequestParamter(query, _accessKey, _secretKey, 0)
    } else {
        parameters = BuildRequestParamter(query, _accessKey, _secretKey, 0)

    }
    let promise = await axios.post(url, parameters.toString(), { headers: { 'Content-Type':'application/json', "Accept": "text/csv"} })
}

const runQuery = async (query) => {
    return await util.ctj(queryData(query, false))
}

exports.query = runQuery

here is util.js:
const csvtojson = require('csvtojson');
exports.ctj = async (string) => {
return await csvtojson().fromString(string}

and here is test.js
const bdl = require('./bdl')

async function testfx() {
let qs = {
'data_type':'defect_raw',
'MLR':'L',
'dateTo': '2023-11-08',
'custom_columns':'defect_area, defect_size, rough_bin_no',
'setLimit': true
}
const jsonData = await bdl.query(qs)
console.log(jsonData)
return jsonData
}

testfx() 




const AlignmentFailures = () => {
    const [alignmentFailureData, setAlignmentFailureData] = useState([])
    const [formData, setFormData] = useState({
        startDate: moment().subtract(2,'weeks').format('YYYY-MM-DD'),
        endDate:moment().format('YYYY-MM-DD'),
        partId: '',
        stepId: ''
    })
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        if (loaded){
            if (formData.startDate && formData.end) {
                const queryParams = new URLSearchParams({
                    startDate: formData.startDate,
                    endDate: formData.endDate,
                    partId: formData.partId,
                    stepId: formData.stepId
                })
                const URL = `myURL.com${queryParams.toString()}`
                fetch(URL, {mode:'cors', credentials: 'include'})
                .then(res => res.json())
                .then(data => {
                    console.log("Data received from API:", data)
                    const sortedData = sortDataByTkoutTime(data)
                    setAlignmentFailureData(sortedData)
                })
                .catch(err => res.json(err))
            }
        }
    }, [loaded, formData])

    const handleFormSubmit = (formValues) => {
        setFormData(formValues)
        if (!loaded) {
            setLoaded(true)
        }
    }
    return (
        <QueryForm onSubmit = { handleFormSubmit} />
    )
}



macro.controller.js
module.exports.getAlignmentFailures = (req, res) => {
    let {start, end, partId, stepId }= req.query
    if (partId == '') {
        partId = undefined
    }
    if (stepId == '') {
        stepId = undefined
    }

    Macro.getAlignmentFailures(start, end, partId, stepId)
    .then(data => {
        res.json(data)
    })
    .catch(err => res.json(err))
}

Macro.model.js:


async function getAlignmentFailures(startDate, endDate, partId=null, stepId=null) {
    let qs = {
        "property 1": "x",
        "dateFrom": startDate,
        "dateTo" : endDate
    }

    if (partId) {
        qs['partId'] = partId
    }

    if (stepId) {
        qs['stepId'] = stepId
    }

    const jsonData = await bdl.query(qs)
    return jsonData
}


const TimeSeriesChart = ({ chartData }) => {
    console.log('Data passed to Child Component:' , chartData)
    const processDataForChart = (data) => {
        if (!data || data.length ===0){
            return {labels: [], datasets: []}    
        }
        const countsByDay = data.reduce((acc,curr) => {
            const date = curr.tkout_time.split(' ')[0];
            acc[date] = (acc[date] || 0) + 1
            return acc
        }, {})
    
    return {
        labels: Object.keys(countsByDay),
        datasets: [{
            label: '# wafers with align fails',
            data: Object.values(countsByDay),
            fill: false,
            borderColor: 'rgb(75, 192, 192',
            tension: 0.1
        }]
    }}
    const plotData = processDataForChart(chartData)
    if (!plotData || !plotData.labels || !plotData.datasets) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Line data={ plotData }/>
        </div>
    )
    }


    parent component:
    const AlignmentFailures