import {classNames} from "shared/lib/classNames/classNames";
import cls from './AppLink.module.scss';
import {Link, LinkProps} from "react-router-dom";
import {FC, PropsWithChildren} from "react";

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props: PropsWithChildren<AppLinkProps>) => {
    const {
        to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...additionalProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink , {}, [className, cls[theme], cls.offsetRight])}
            {...additionalProps}
        >
            {children}
        </Link>
    );
};
