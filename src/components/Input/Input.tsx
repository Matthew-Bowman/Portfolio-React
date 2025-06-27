import type { ChangeEvent, HTMLInputTypeAttribute } from "react";
import styles from "./Input.module.css"


type InputProps = {
    label: string;
    className?: string;
    placeholder: string;
    name: string;
    type: HTMLInputTypeAttribute;
    onChange: (pEvent: ChangeEvent<HTMLInputElement>) => void;

    required?: boolean;
};

export default function Input({ label, className, name, placeholder, type, onChange, required }: InputProps) {
    return (
        <div className={`${className} ${styles.inputGroup}`}>
            <label>{label}</label>
            <input name={name} type={type} placeholder={placeholder} onChange={onChange} required={required} />
        </div>
    );
}
