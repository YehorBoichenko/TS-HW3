import React from 'react';
import styles from '../Filter/Filter.module.css';
interface IProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Filter = ({ value, onChange }: IProps): JSX.Element => {
  return (
    <label className={styles.label}>
      <input
        className={styles.input}
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
