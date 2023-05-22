import {ButtonHTMLAttributes, FC} from "react"
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ThemeButton {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...additionalProps
    } = props

    return (
        <button
            className={classNames(cls.Button , {}, [cls[theme]])}
            {...additionalProps}
        >
            {children}
        </button>
    );
};
