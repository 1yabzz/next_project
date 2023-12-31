import styles from "./Button.module.css";
import { ButtonProps } from "./Button.props";
import Arrowicon from './Vector.svg';
import cn from "classnames";

export const Button = ({children, arrow = 'none',appearance, className, ...props}: ButtonProps): JSX.Element => {
    return (<button className={cn(styles.button, className,{
        [styles.primary]: appearance == 'primary',
        [styles.ghost]: appearance == 'ghost',
    })}
    {...props}>
        {children}
        {arrow != 'none' && <span className={cn(styles.arrow, {
            [styles.down]: arrow == 'down'
        })}>
            <Arrowicon/>
            </span>}
    </button>);
};