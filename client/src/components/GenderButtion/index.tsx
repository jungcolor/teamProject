import React, { Dispatch, SetStateAction } from 'react';
import { Button } from './styles';

interface props {
    id: string;
    title: string;
    isChecked: boolean;
    onClickEvent: (male:string) => void;
}

const GenderButton = ({ id, title, isChecked, onClickEvent }: props) => {
    return (
        <div>
            <Button id={id} style={isChecked ? { border: '1px solid #365FF1' } : { border: '1px solid #999999' }} onClick={o => { onClickEvent(id) }} >{title}</Button>
        </div>
    )

}

export default GenderButton;