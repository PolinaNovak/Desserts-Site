import { DecrementIcon } from "../../icons/decrement/decrement";
import { IncrementIcon } from "../../icons/increment/increment";
import styles from "./button-counter.module.scss";

const CounterStates = {
  Increment: "increment",
  Decrement: "decrement",
};
interface ButtonCounterProps {
  onChange: (newValue: number) => void;
  counterValue: number;
}
export const ButtonCounter = ({
  onChange,
  counterValue,
}: ButtonCounterProps) => {
  const changeCounterValue = (counterState: string) => {
    if (counterState === CounterStates.Decrement)
      return onChange(counterValue > 0 ? counterValue - 1 : 0);
    return onChange(counterValue + 1);
  };
  return (
    <div className={styles.root}>
      <button onClick={() => changeCounterValue(CounterStates.Decrement)}>
        <DecrementIcon />
      </button>

      <span className={styles.text}>{counterValue}</span>

      <button onClick={() => changeCounterValue(CounterStates.Increment)}>
        <IncrementIcon />
      </button>
    </div>
  );
};
