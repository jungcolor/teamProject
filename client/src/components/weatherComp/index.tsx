import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react';
import useCurrentLocation from '../../hooks/useCurrentLocation';
import { Weather, Title, Container, Temperature, Description, TempeatureBox, Icon } from './styles';

const positionOptions = {
    maximumAge: 0,
    timeout: 5000,
    enableHighAccuracy: false,
};

const WeatherComp = React.memo(() => {
    
    const { location, error } = useCurrentLocation(positionOptions);
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
    const [temp, setTemp] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        const weather_KEY = "387b0159360f3d9e68b66a19de556d9b";
        if (error) {
            return console.log("error");
        }
        if (location !== undefined) {
            axios
                .get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&lang=kr&appid=${weather_KEY}&units=metric`
                )
                // 위도, 경도, userKey를 넣어서 get 요청을하면 각종 정보를 보내준다.
                .then((response: any) => {
                    console.log(response);
                    setCity(response.data.name);
                    setWeather(response.data.weather[0].icon);
                    // 그냥 weather를 요청하면 날씨를 글자로 보내주고 icon을 붙이면 날씨에 맞는 이미지 url을 보내준다.
                    setTemp(`${response.data.main.temp}°C`);
                    setDescription(response.data.weather[0].description);
                })
                .catch(() => {
                    setWeather("");
                    setTemp(`10°C`);
                    setDescription('맑음');                    
                });
        }

    }, [location]);
    return (
        <Weather>
            <Title>오늘의 날씨</Title>
            <Container>
                <TempeatureBox>
                    <Temperature>{temp}</Temperature>
                   <Description>{description}</Description>
                    {weather != "" ? <Icon src={process.env.PUBLIC_URL + `/icons/${weather}.png`} /> : null}
                </TempeatureBox>
            </Container>
        </Weather>
    )
});

export default React.memo(WeatherComp);