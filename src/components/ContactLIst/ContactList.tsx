import { Button } from '../Button/Button';
import React from 'react';
import styles from '../ContactLIst/ContactList.module.css';

interface IProp{
  filtered: IFiltered[],
   onButtonDelete: (id: string) => void; 
}
interface IFiltered{
  name: string,
  number: string,
  id: string
  
}
export const ContactList = ({ filtered, onButtonDelete }:IProp):JSX.Element => {
  return (
    <ul className={styles.list}>
      {filtered.map(({ name, number, id }) => {
        return (
          <li className={styles.item} key={id}>
            <p className={styles.p}>{name}</p>
            <p className={styles.rightP}>{number}</p>
            <Button
              text="Delete"
              onClick={() => {
                onButtonDelete(id);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

// ContactList.propTypes = {
//     filtered: PropTypes.arrayOf(PropTypes.shape({
//         name:PropTypes.string.isRequired,
//         number:PropTypes.string.isRequired,
//         id:PropTypes.string.isRequired,

//     })),
//     onButtonDelete: PropTypes.func.isRequired,
// }

// export default ContactList