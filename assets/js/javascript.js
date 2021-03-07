let apiKey = '0a298e1486e217e3d71a28e5024c8c63'
        let weatherDiv = document.querySelector('#weather-today')
        let sevenDayDiv = document.querySelector('#seven-day')
            fetch('https://api.openweathermap.org/data/2.5/weather?q=seattle&units=imperial&appid=' + apiKey)
               .then(function(res) {
                   return res.json()
               }).then(function(data) {
                    let temperature = document.createElement('p')
                    temperature.style.fontSize = '20px'
                    temperature.style.marginBottom = '20px'
                    temperature.textContent = 'Temperature: ' + data.main.temp + 'F'
                    let humidity = document.createElement('p')
                    humidity.style.fontSize = '20px'
                    humidity.textContent = 'Humidity: ' + data.main.humidity + '%'
                    weatherDiv.appendChild(temperature)
                    weatherDiv.appendChild(humidity)
                    getFiveDayForecast(data.coord.lat, data.coord.lon)
               })
            function getFiveDayForecast(lat, lon) {
                fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey)
                .then(function(res) {
                    return res.json()
                }).then(function(data) {
                    console.log(data)
                    let fiveDays = data.daily.slice(1, 6)
                    for (let i = 0; i < fiveDays.length; i++) {
                        let forecastDiv = document.createElement('div')
                        forecastDiv.classList.add('forecastDiv')
                        let day = new Date().getDay() + (i + 1) 
                        console.log(day)
                        let month = (new Date().getMonth() + 1)
                        let year = new Date().getFullYear()
                        let date = document.createElement('p')
                        let temp = document.createElement('p')
                        temp.textContent = 'Temperature: ' +
                        date.textContent = month + '/' + day + '/' + year
                        forecastDiv.appendChild(date)
                        forecastDiv.appendChild(hello)
                        sevenDayDiv.appendChild(forecastDiv)
                    }
                })
            }
