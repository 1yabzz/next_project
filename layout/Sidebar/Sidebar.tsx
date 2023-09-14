import styles from "./SideBarProps.module.css";
import cn from 'classnames';
import { SideBarProps } from "./Sidebar.props";

export const Sidebar = ({...props}: SideBarProps): JSX.Element => {
    return(
        <div{...props}>
            Sidebar
        </div>
    );
};