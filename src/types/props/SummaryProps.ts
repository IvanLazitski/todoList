import { Filters } from "../SummaryData";
import { TextProps } from "./TextProps";

export interface SummaryProps extends TextProps {
    filter: Filters
}