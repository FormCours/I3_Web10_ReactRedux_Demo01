import { useDispatch } from "react-redux";
import { decrement, increment } from './../../store/actions/counter-action';

const CounterAction = ({step}) => {

    const dispatch = useDispatch();

    const handleUp = () => {
        dispatch(increment(step))
    }

    return (
        <div>
            <button onClick={handleUp}>+{step}</button>
            {' '}
            <button onClick={() => dispatch(decrement(step))}>-{step}</button>
        </div>
    );
};

CounterAction.defaultProps = {
    step: 1
};

export default CounterAction;