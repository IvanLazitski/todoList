import { ItemTextProps } from "../../../types/props/ItemTextProps.ts";
import RadioButton from "../../atoms/RadioButton/RadioButton.tsx";
import Text from "../../atoms/Text/Text.tsx";
import Button from "../../atoms/Button/Button.tsx";
import { setIsDone, remove } from "../../../store/slices/todoListSlice.ts";
import { useDispatch } from "react-redux";
import css from "./styles.module.css"

const ItemText = (props: ItemTextProps) => {
    const dispatch = useDispatch();
    return (
        <>
            <RadioButton onClick={() => dispatch(setIsDone({ id: props.id, value: true}))} isDone={props.isDone} id={props.id} />
            <Text {...props} />
            <Button className={css.removeButton} onClick={() => dispatch(remove({id: props.id}))} text="Remove" />
        </>
    );
}

export default ItemText;