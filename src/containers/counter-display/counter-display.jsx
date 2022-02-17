import { useSelector } from "react-redux";

const CounterDisplay = () => {

    const count = useSelector(state => state.counter.count);

    return (
        <p>Compteur : {count}</p>
    );
};

export default CounterDisplay;