export interface InputData {
    id: number;
    setText: (id: number, text: string) => void;
    setIsInput: (id: number, isInput: boolean) => void;
}