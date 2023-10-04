import { FieldData } from "../../types/FieldData";
import ItemInput from "./ItemInput";
import ItemText from "./ItemText";

const Item = (props: FieldData) => {
    return (
        <>
            {props.isInput && (<ItemInput key={props.id} {...props} />)} 
            {!props.isInput && (<ItemText key={props.id} buttonText='Remove' {...props} />)}
        </>
    );
}

export default Item;