import React, { Dispatch, SetStateAction } from 'react';
import { Button } from './styles';

interface props {
    title: string;
    isChecked: boolean;
    setChecked: () => void;
}

const GenderButton = ({ title, isChecked, setChecked }: props) => {
    return (
        <div>
            <Button style={isChecked ? { border: '1px solid #365FF1' } : { border: '1px solid #999999' }} onClick={o => { setChecked() }} >{title}</Button>
        </div>
    )

}

export default GenderButton;