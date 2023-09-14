import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface Paragraphprops extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    size?: 'S' | 'M' | 'L',
    children: ReactNode,
}