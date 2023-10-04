import React from "react";
import { TodoListProps } from "../../types/props/TodoListProps";
import Item from "../moleculs/Item"
import css from "./styles.module.css"

const TodoList = (props: TodoListProps) => {
    return (
        <div className={css.list}>
            {props.todoList.map((element) => <div className={css.item}><Item key={element.id} {...element}/></div>).reverse()}
        </div>
    );
}

export default TodoList;