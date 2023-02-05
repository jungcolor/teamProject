import React, { useEffect, useState } from 'react';
import useCurrentLocation from '../hooks/useCurrentLocation';
import { Weather, Title, Container, Temperature, Description, TempeatureBox, Icon } from './styles';

const WeatherComp = () => {
    const positionOptions = {
        maximumAge: 0,
        timeout: 5000,
        enableHighAccuracy: true,
    };
    const { location, error } = useCurrentLocation(positionOptions);
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
    const [temp, setTemp] = useState("");

    useEffect(() => {
        if (error) {
            return console.log("error");
        }
        // geolocation에서 error를 받아왔을 경우 error 출력
        // 사용자 위치 값을 받아왔을 경우 아래 코드 실행

        if (location) {
            // const axios = require("axios");
            // const weather_KEY = "";
            // axios
            //     .get(
            //         `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${weather_KEY}&units=metric`
            //     )
            //     // 위도, 경도, userKey를 넣어서 get 요청을하면 각종 정보를 보내준다.
            //     .then((response: any) => {
            //         console.log(response);
            //         setCity(response.data.name);
            //         setWeather(response.data.weather[0].icon);
            //         // 그냥 weather를 요청하면 날씨를 글자로 보내주고 icon을 붙이면 날씨에 맞는 이미지 url을 보내준다.
            //         setTemp(`${response.data.main.temp}°C`);
            //     })
            //     .catch(() => {
            //         alert("Local navigation failed.");
            //         // 실패했을 경우
            //         // 사실 여기서 실패는 위치 찾는 것에 실패한 게 아니라 적절한 문구는 아니다. 알아서 수정하십시오.
            //     });
        }
    }, [location]);

    return (
        <Weather>
            <Title>오늘의 날씨</Title>
            <Container>
                <TempeatureBox>
                    <Temperature>-10C</Temperature>
                    <Description>비온 뒤 갬</Description>
                    <Icon>🌦</Icon>
                </TempeatureBox>
            </Container>
        </Weather>
    )
}

export default WeatherComp;