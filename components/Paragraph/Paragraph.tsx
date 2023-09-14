import { Paragraphprops } from "./Paragraph.props";
import styles from "./Paragraph.module.css";
import cn from "classnames";

export const Paragraph = ({size = 'M', children, ...props}: Paragraphprops): JSX.Element => {
    return(<p className={cn(styles.Paragraph, {
        [styles.S]: size == 'S',
        [styles.M]: size == 'M',
        [styles.L]: size == 'L',
        
    })}
    {...props}>
        {children}
    </p>);
};