import type { ChangeEvent } from "react";
import styles from "./TextArea.module.css"


type TextAreaProps = {
    label: string;
    className?: string;
    placeholder: string;
    name: string;
    rows: number;
    onChange: (pEvent: ChangeEvent<HTMLTextAreaElement>) => void;
};

export default function TextArea({ label, className, name, placeholder, rows, onChange }: TextAreaProps) {
    return (
        <div className={`${className} ${styles.textAreaGroup}`}>
            <label>{label}</label>
            <textarea name={name} rows={rows} placeholder={placeholder} onChange={onChange} required />
        </div>
    );
}
