export interface SummaryData {
    count: number;
    filter: Filters;
}

export enum Filters {
    All = "All",
    Active = "Active",
    Completed = "Completed"
}