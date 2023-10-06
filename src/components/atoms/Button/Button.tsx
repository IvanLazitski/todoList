import { ButtonProps } from "../../../types/props/ButtonProps.ts";
import css from './styles.module.css'

const Button = (props: ButtonProps) => (<button type="submit" className={`${css.button} ${props.className}`} onClick={props.onClick}>{props.text}</button>)

export default Button;