import React from 'react';
import { hot } from 'react-hot-loader/root';
import fbIcon from './assets/fb-icon.svg';
import styles from './testt.scss';

const App = () => (
  <div>
    <p className={styles.Test}>1aaaSReact h!asd1</p>
    <img src={fbIcon} alt="tste" />
  </div>
);

export default hot(App);
