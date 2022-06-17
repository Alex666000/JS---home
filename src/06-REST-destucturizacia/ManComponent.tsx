import React from 'react';
import {ManType} from './06-destructr.test';

type PropsType = {
    title: string
    man: ManType
}

const ManComponent: React.FC<PropsType>= ({man,title, ...props}) => {
    return (
        <div>
            <h1>{title}</h1>
            <div>
                {man}
            </div>
        </div>
    );
};

export default ManComponent;