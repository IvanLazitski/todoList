import { BaseProps } from "./BaseProps.ts";

export interface ItemTextProps extends BaseProps {
    buttonText: string,
    text: string
    isDone: boolean
}