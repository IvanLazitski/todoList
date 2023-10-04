import { SummaryProps } from "../../../types/props/SummaryProps";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import { changeFilter } from "../../../store/slices/filterSlice";
import { useDispatch } from "react-redux";
import { Filters } from "../../../types/SummaryData";
import { removeCompleted } from "../../../store/slices/todoListSlice";
import css from "./styles.module.css"

const Summary = (props: SummaryProps) => {
    const dispatch = useDispatch();

    return (
        <div className={css.summary}>
            <Text {...props} />
            <Button onClick={() => dispatch(changeFilter(Filters.All))} text={Filters.All} />
            <Button onClick={() => dispatch(changeFilter(Filters.Active))} text={Filters.Active} />
            <Button onClick={() => dispatch(changeFilter(Filters.Completed))} text={Filters.Completed} />
            <Button onClick={() => dispatch(removeCompleted())} text='Clear Completed' />
        </div>
    );
}

export default Summary;