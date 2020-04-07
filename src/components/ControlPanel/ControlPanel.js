import React from 'react';
import styles from './ControlPanel.module.scss';

const ControlPanel = ({ children }) => (
   <div className={styles.controlPanel}>{children}</div>
);

export default ControlPanel;
