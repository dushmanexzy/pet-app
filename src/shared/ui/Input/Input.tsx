import {
    ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (val: string) => void;
    autofocus?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        ...otherProps
    } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    useEffect(() => {
        if (autofocus) {
            inputRef.current?.focus();
        }
    }, [autofocus]);

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            <div className={cls.placeholder}>
                {`${placeholder}>`}
            </div>
            <input
                ref={inputRef}
                className={cls.input}
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});
