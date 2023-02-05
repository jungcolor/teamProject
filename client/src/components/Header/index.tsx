import React, { useState } from 'react';
import GenderButton from '../GenderButtion';
import MainTitle from '../MainTitle';
import { Head, ButtonGroup } from './styles';

const Header = () => {
    const [isMale, setIsMale] = useState(true);

    const onClickButton = () => {
        setIsMale(!isMale);
    }
    return (
        <Head>
            <MainTitle />
            <ButtonGroup>
                <GenderButton title={"남성"} isChecked={isMale} setChecked={onClickButton} />
                <GenderButton title={"여성"} isChecked={!isMale} setChecked={onClickButton} />
            </ButtonGroup>

        </Head>
    )
}

export default Header;