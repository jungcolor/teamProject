import React from 'react';
import { Button } from './styles';

interface props {
    title: string
}

const GenderButton = ({ title }: props) => {
    return (
        <div>
            <Button>{title}</Button>
        </div>
    )

}

export default GenderButton;