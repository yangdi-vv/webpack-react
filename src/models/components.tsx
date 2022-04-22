import React from 'react';

export interface ButtonTypes {
    size?: string,
    type?: string,
    disabled?: boolean,
    children?: React.ReactNode,
    onClick?: any,
    fluid?: any,
}

export interface DialogTypes {
    children: never[];
    visible: boolean;
    className: string;
    close: () => void;
    header: React.ReactNode;
    content: React.ReactNode;
    footer: React.ReactNode;
}

export interface InputTypes {
    placeholder: string;
    disabled: boolean;
    value: string;
    rules: any;
    ref: any;
    onChange: (value: string) => void;
}

export interface InputStateTypes {
    showError: boolean;
    value: string;
}
