import React from 'react';
import { Weather, Title, Container, Temperature, Description, TempeatureBox, Icon } from './styles';

const WeatherComp = () => {
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