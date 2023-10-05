import { RadioButtonProps } from "../../../types/props/RadioButtonProps";

const RadioButton = (props: RadioButtonProps) => (
    <input type="radio" onClick={props.onClick} readOnly={props.isDone} defaultChecked={props.isDone} className={props.className}/>
)

export default RadioButton;