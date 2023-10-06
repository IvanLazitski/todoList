import React from "react";
import { useDispatch } from "react-redux";
import { setText } from "../../../store/slices/todoListSlice.ts";
import { BaseProps } from "../../../types/props/BaseProps.ts";
import css from "./stules.module.css"

const Input = (props: BaseProps) => {
    const dispatch = useDispatch();
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setText({id: props.id, text: event.target.value }))
    }
    return (
        <input className={css.input} onChange={handleInput} placeholder="Input text here" />
    );
}

export default Input;