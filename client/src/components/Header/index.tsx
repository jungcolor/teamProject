import React from 'react';
import GenderButton from '../GenderButtion';
import MainTitle from '../MainTitle';
import { Head , ButtonGroup} from './styles';

const Header = () => {
    return (
        <Head>
            <MainTitle />
            <ButtonGroup>
                <GenderButton title={"남성"} />
                <GenderButton title={"여성"} />
            </ButtonGroup>

        </Head>
    )
}

export default Header;