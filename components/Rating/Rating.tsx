import { Ratingprops } from "./Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "./star.svg"
import { useEffect, useState } from "react";

export const Rating = ({isEditable = false, rating, setRating ,className, ...props}: Ratingprops): JSX.Element => {
    const [ratingArray, setratingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

    useEffect(()=> {
        constructRating(rating)
    }, [rating])

    const constructRating = (currentRating: number) => {
        const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
            return(
                <StarIcon
                className={cn(styles.star, {
                    [styles.filled]: i < currentRating,
                    [styles.editable]: isEditable})}
                onMouseEnter={() => changeDisplay(i+1)}
                onMouseLeave={()=> changeDisplay(rating)}
                onClick={() => onClick(i+1)}
                />
            );
        });
        setratingArray(updatedArray)
    };

    const onClick = (i: number) => {
        if(!isEditable || !setRating){
            return;
        }
        setRating(i)
    }

    const changeDisplay = (i: number) => {
        if(!isEditable){
            return;
        }
        constructRating(i)
    }
    return(<div {...props}>
        {ratingArray.map((r, i)=> (<span key={i}>{r}</span>))}
    </div>

    )
};