import React, { useState } from 'react';
import GenderButton from '../GenderButtion';
import MainTitle from '../MainTitle';
import { Head, ButtonGroup } from './styles';

const Header = () => {
    const [isMale, setIsMale] = useState(true);
    const [isFemale, setIsFemale] = useState(false);

    const onClickEvent = (id:string) => {
        if (id == "male") {
            setIsMale(true);
            setIsFemale(false);
        } else if(id == "female"){
            setIsFemale(true);
            setIsMale(false);
        }
        
    }
    return (
        <Head>
            <MainTitle />
            <ButtonGroup>
                <GenderButton id={"male"} title={"남성"} isChecked={isMale} onClickEvent={onClickEvent} />
                <GenderButton id={"female"} title={"여성"} isChecked={isFemale} onClickEvent={onClickEvent} />
            </ButtonGroup>

        </Head>
    )
}

export default Header;