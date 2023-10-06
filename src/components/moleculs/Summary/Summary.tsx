import { SummaryProps } from "../../../types/props/SummaryProps.ts";
import Button from "../../atoms/Button/Button.tsx";
import Text from "../../atoms/Text/Text.tsx";
import { changeFilter } from "../../../store/slices/filterSlice.ts";
import { useDispatch, useSelector } from "react-redux";
import { Filters } from "../../../types/Filters.ts";
import { removeCompleted } from "../../../store/slices/todoListSlice.ts";
import css from "./styles.module.css"
import { RootState } from "../../../store/store.ts";

const Summary = (props: SummaryProps) => {
    const dispatch = useDispatch();
    const filter = useSelector((state: RootState) => state.filter);

    return (
        <div className={css.summary}>
            <Text {...props} />
            <Button className={`${filter === Filters.All ? css.activeFilter  : css.notActiveFilter  }`} onClick={() => dispatch(changeFilter(Filters.All))} text={Filters.All} />
            <Button className={`${filter === Filters.Active ? css.activeFilter  : css.notActiveFilter  }`} onClick={() => dispatch(changeFilter(Filters.Active))} text={Filters.Active} />
            <Button className={`${filter === Filters.Completed ? css.activeFilter  : css.notActiveFilter  }`} onClick={() => dispatch(changeFilter(Filters.Completed))} text={Filters.Completed} />
            <Button onClick={() => dispatch(removeCompleted())} text='Clear Completed' />
        </div>
    );
}

export default Summary;