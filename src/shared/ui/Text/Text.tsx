import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text = (props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
    } = props;

    return (
        <div className={classNames('', { [cls[theme]]: true }, [className])}>
            {title ? <p className={cls.title}>{title}</p> : null}
            {title ? <p className={cls.text}>{text}</p> : null}
        </div>
    );
};
