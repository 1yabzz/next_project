import { Tagprops } from "./Tag.props";
import styles from "./Paragraph.module.css";
import cn from "classnames";

export const Tag = ({size = 'M', children, color='ghost',className, href,...props}: Tagprops): JSX.Element => {
    return(<div className={cn(styles.Tag,className, {
        [styles.S]: size == 'S',
        [styles.M]: size == 'M',
        [styles.ghost]: color == 'ghost',
        [styles.red]: color == 'red',
        [styles.green]: color == 'green',
        [styles.grey]: color == 'grey',
        [styles.primary]: color == 'primary',
        
    })}
    {...props}>
        {children}
    </div>);
};