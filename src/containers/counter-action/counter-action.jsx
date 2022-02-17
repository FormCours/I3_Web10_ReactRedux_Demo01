import { useDispatch } from "react-redux";
import { decrement, increment } from './../../store/actions/counter-action';

const CounterAction = () => {

    const dispatch = useDispatch();

    const handleUp = () => {
        dispatch(increment(1))
    }

    return (
        <div>
            <button onClick={handleUp}>+1</button>
            {' '}
            <button onClick={() => dispatch(decrement(1))}>-1</button>
        </div>
    );
};

export default CounterAction;