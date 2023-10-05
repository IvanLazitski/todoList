import { FieldData } from "../../../types/FieldData";
import ItemInput from "../ItemInput/ItemInput";
import ItemText from "../ItemText/ItemText";

const Item = (props: FieldData) => {
    return (
        <>
            {props.isInput && (<ItemInput key={props.id} {...props} />)} 
            {!props.isInput && (<ItemText key={props.id} buttonText='Remove' {...props} isDone={props.isDone ?? false} />)}
        </>
    );
}

export default Item;