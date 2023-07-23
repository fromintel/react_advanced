import { CSSProperties, FC, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    altImg?: string;
    size?: number;
}

export const Avatar: FC<AvatarProps> = (props: AvatarProps) => {
  const {
    className, src, altImg, size,
  } = props;

  const styles = useMemo<CSSProperties>(() => ({
    width: size || 80,
    height: size || 80,
  }), [size]);

  return (
    <div style={styles} className={classNames(cls.Avatar, {}, [className])}>
      <img className={cls.img} src={src} alt={altImg} />
    </div>
  );
};
