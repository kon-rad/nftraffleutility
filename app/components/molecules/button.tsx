import React, { useState } from 'react';

interface Props {
    children: any;
    onClick: any;
    type: string;
}

const getClassName = (type: string) => {
    switch(type) {
        case 'primary':
            return "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";
    }
}

export const Button = (props: Props) => {
    return (
        <button className={getClassName(props.type)} onClick={props.onClick}>
            {props.children}
        </button>
    )
}