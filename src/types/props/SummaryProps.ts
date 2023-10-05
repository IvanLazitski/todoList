import { Filters } from "../Filters";
import { TextProps } from "./TextProps";

export interface SummaryProps extends TextProps {
    filter: Filters
}