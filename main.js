const request = require("request");
const dotenv = require("dotenv").config();

const argument = process.argv[2];

const options = {
  url: `https://api.openweathermap.org/data/2.5/weather?q=${argument}&units=metric&appid=${process.env.API_KEY}`,
  method: "GET",
  json: true,
};

request(options, (error, res, body) => {
  console.log(`Current temperature in ${argument}: ${body.main.temp}°C`);
});
