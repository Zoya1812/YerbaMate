import React from "react"
import styles from "./styles.module.css"
import classNames from "classnames"

export const Button = ({className, onClick, children, disabled, Size, Type }) => {
return (
    <button 
    onClick={onClick} 
    disabled={disabled}
    className={classNames(styles[Size], styles[Type], className,
    {
        [styles.disabled] : disabled,
    }
    )}>
        {children}
    </button>
)}