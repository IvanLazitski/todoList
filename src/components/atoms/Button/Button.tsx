import { ButtonProps } from "../../../types/props/ButtonProps";
import css from './styles.module.css'

const Button = (props: ButtonProps) => (<button type="submit" className={css.button} onClick={props.onClick}>{props.text}</button>)

export default Button;