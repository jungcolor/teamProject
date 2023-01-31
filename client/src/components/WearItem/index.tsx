import React from 'react';
import { MainContainer, Title } from './styles';

interface props {
    wearList?: string[];
    itemDes: string;
}

const WearItem = ({ wearList, itemDes }: props) => {
    return (
        <MainContainer>
            <Title>{itemDes}</Title>
        </MainContainer>
    )
}

export default WearItem;