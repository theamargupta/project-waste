const request = require('request');
const url = `http://api.openweathermap.org/data/2.5/weather?q=${process.argv[2]}&appid=4013093f340dfd0ea3c4d9eccdc3dc0e`
request({url:url, json:true}, (err, res) => {

	console.log(res.body)
})
