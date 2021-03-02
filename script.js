fetch('https://weather.com/weather/today/l/49.23,28.47?par=google&temp=c')
    .then(weather => {
        console.log(weather);
       // console.log(weather.text());
       // weather.text().then(weather2 =>{
        //    console.log(weather2);
       // })
        return weather.text();
    })
    .then(weather=> {
        console.log(weather);
    })

