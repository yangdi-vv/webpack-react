import React from 'react';

// component Button interface
export interface ButtonTypes {
    size?: string;
    type?: string;
    disabled?: boolean;
    children?: React.ReactNode;
    onClick?: any;
    fluid?: any;
}

// component Dialog interface
export interface DialogTypes {
    children: never[];
    visible: boolean;
    className: string;
    close: () => void;
    header: React.ReactNode;
    content: React.ReactNode;
    footer: React.ReactNode;
}

// component Input props interface
export interface InputTypes {
    placeholder: string;
    disabled: boolean;
    value: string;
    rules: any;
    ref: any;
    onChange: (value: string) => void;
}

// component Input state interface
export interface InputStateTypes {
    showError: boolean;
    value: string;
}
