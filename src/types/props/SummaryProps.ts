import { Filters } from "../Filters.ts";
import { TextProps } from "./TextProps.ts";

export interface SummaryProps extends TextProps {
    filter: Filters
}