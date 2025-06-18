import type { FC } from 'react';
import styles from './Button.module.css'

type ButtonProps = {
    className?: string;
    text: string;
    onClick: () => void; // optional predefined size prop
};
const Button: FC<ButtonProps> = ({ className, text, onClick }) => {
    return (
        <button className={`${className} ${styles.button}`} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
