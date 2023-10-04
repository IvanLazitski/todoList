import Input from '../atoms/Input/Input'
import Button from '../atoms/Button/Button';
import { ItemInputProps } from '../../types/props/ItemInputProps';
import { additem, setIsInput } from '../../store/slices/todoListSlice';
import { useDispatch } from 'react-redux';

const ItemInput = (props: ItemInputProps) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setIsInput({id: props.id, value: false}));
        dispatch(additem());
    }

    return (
        <>
            <Input {...props} />
            <Button onClick={handleClick} text='Save' />
        </>
    );
}

export default ItemInput;