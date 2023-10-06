import { TodoListProps } from "../../types/props/TodoListProps.ts";
import Item from "../moleculs/Item/Item.tsx"
import css from "./styles.module.css"

const TodoList = (props: TodoListProps) => {
    return (
        <div className={css.list}>
            {props.todoList.map((element) => <div className={css.item} key={element.id}><Item key={element.id} {...element}/></div>).reverse()}
        </div>
    );
}

export default TodoList;