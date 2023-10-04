import { BaseProps } from "./BaseProps";

export interface ItemTextProps extends BaseProps {
    buttonText: string,
    text: string
    isDone: boolean
}