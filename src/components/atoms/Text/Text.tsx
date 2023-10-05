import { TextProps } from "../../../types/props/TextProps";

const Text = (props: TextProps) => (<span className={props.className}>{props.text}</span>)

export default Text;