import {FC} from 'react';
import css from './Switcher.module.css'

interface IProps {

}

const Switcher :FC<IProps> = () => {
 return (
  <div className={css.Switcher}>
   Switcher
  </div>
 );
};

export {Switcher};