import { FieldData } from "../../../types/FieldData.ts";
import ItemInput from "../ItemInput/ItemInput.tsx";
import ItemText from "../ItemText/ItemText.tsx";

const Item = (props: FieldData) => {
    return (
        <>
            {props.isInput && (<ItemInput key={props.id} {...props} />)} 
            {!props.isInput && (<ItemText key={props.id} buttonText='Remove' {...props} isDone={props.isDone ?? false} />)}
        </>
    );
}

export default Item;