import { useSelector } from "react-redux";

const CounterDisplay = () => {

    const count = useSelector(state => state.counter.count);
    const msg = useSelector(state => state.counter.msg);

    // Alternative en une seul affection ;)
    // const {count, msg} = useSelector(state => state.counter);

    return (
        <p>Compteur : {count} ({msg})</p>
    );
};

export default CounterDisplay;