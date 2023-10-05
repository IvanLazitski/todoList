import { useSelector } from "react-redux"
import TodoList from "../organisms/TodoList";
import Summary from "../moleculs/Summary/Summary";
import { RootState } from "../../store/store";
import { Filters } from "../../types/Filters";
import { FieldData } from "../../types/FieldData";
import css from "./styles.module.css"

const TodoListApp = () => {
    const filter = useSelector((state: RootState) => state.filter);
    const todoList = useSelector((state: RootState) => applyFilter(filter, state.todoList));

    return (
        <div className={css.app}>
            <div className={css.todoList}>
                <TodoList todoList={todoList} />
            </div>
            <Summary filter={filter} text={`${(todoList.length - 1).toString()} items left`} />
        </div>
    );
}

function applyFilter(filter: Filters, todoList: FieldData[]) {
    switch (filter) {
        case Filters.All:
            return todoList;
        case Filters.Active:
            return todoList.filter((element) => !element.isDone);
        case Filters.Completed:
            return todoList.filter((element) => element.isDone || element.isInput);
        default:
            return todoList;
    }
}

export default TodoListApp;