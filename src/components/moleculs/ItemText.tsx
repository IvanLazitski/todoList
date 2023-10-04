import { ItemTextProps } from "../../types/props/ItemTextProps";
import RadioButton from "../atoms/RadioButton/RadioButton";
import Text from "../atoms/Text/Text";
import Button from "../atoms/Button/Button";
import { setIsDone, remove } from "../../store/slices/todoListSlice";
import { useDispatch } from "react-redux";

const ItemText = (props: ItemTextProps) => {
    const dispatch = useDispatch();
    return (
        <>
            <RadioButton onClick={() => dispatch(setIsDone({ id: props.id, value: true}))} isDone={props.isDone} id={props.id} />
            <Text {...props} />
            <Button onClick={() => dispatch(remove({id: props.id}))} text="Remove" />
        </>
    );
}

export default ItemText;