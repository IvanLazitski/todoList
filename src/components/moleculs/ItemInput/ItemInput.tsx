import Input from '../../atoms/Input/Input.tsx'
import Button from '../../atoms/Button/Button.tsx';
import { ItemInputProps } from '../../../types/props/ItemInputProps.ts';
import { additem, setIsInput } from '../../../store/slices/todoListSlice.ts';
import { useDispatch } from 'react-redux';
import css from './styles.module.css'

const ItemInput = (props: ItemInputProps) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setIsInput({id: props.id, value: false}));
        dispatch(additem());
    }

    return (
        <>
            <Input {...props} />
            <Button className={css.saveButton} onClick={handleClick} text='Save' />
        </>
    );
}

export default ItemInput;