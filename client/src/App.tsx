import React from 'react';
import Header from './components/Header';
import WearList from './components/WearList';
import WeatherComp from './components/weatherComp';



function App() {
    return (
        <div style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center'
        }}>
            <div style={{
                marginTop: '50px',
                width: 375,
                height: 812,
                background: '#FFFFFF'
            }}>
                <Header />
                <WeatherComp />
                <WearList categoryDes={"아우터"} wearItemList={["오리털 패딩", "코트"]} />
                <WearList categoryDes={"상의"} wearItemList={["니트", "맨투맨", "셔츠"]} />
                <WearList categoryDes={"하의"} wearItemList={["청바지", "면바지"]} />
            </div>
        </div>
    );
}

export default App;