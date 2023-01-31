import React from 'react';
import WearItem from '../WearItem';
import { Container, MainContainer, Title, WearBox } from './styles';

interface props {
    wearItemList: string[];
    categoryDes: string;
}

const WearList = ({ wearItemList, categoryDes }: props) => {
    return (
        <MainContainer>
            <Container>
                <Title>{categoryDes}</Title>
                <WearBox>
                    {wearItemList.map((item, idx) => {
                        return <WearItem itemDes={item} key={idx} />
                    })}
                </WearBox>
            </Container>
        </MainContainer>
    )
}

export default WearList;