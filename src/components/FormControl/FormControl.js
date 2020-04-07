import React from 'react';
import styles from './FormControl.module.scss';
import AppContext from '../../context';

class FormControl extends React.Component {
   state = {
      season: 'summer',
      weather: 'sunny',
      place: 'sea',
   };

   handler = (e) =>
      this.setState({
         [e.target.name]: e.target.value,
      });

   render() {
      return (
         <AppContext.Consumer>
            {(context) => (
               <>
                  <ul className={styles.list}>
                     <li className={styles.item}>
                        <h3 className={styles.listTitle}>
                           Find your the best images!
                        </h3>
                     </li>
                     {context.questions.map((el) => (
                        <li
                           key={el[0]}
                           className={styles.item}
                        >
                           <div className={styles.feature}>
                              {el[0]}
                           </div>
                           <div className={styles.form}>
                              {el[1].map((item) => (
                                 <div
                                    key={item}
                                    className={
                                       styles.formItem
                                    }
                                 >
                                    <input
                                       type="radio"
                                       name={el[2]}
                                       id={item}
                                       value={item}
                                       onChange={
                                          this.handler
                                       }
                                    />
                                    <label htmlFor={item}>
                                       {item}
                                    </label>
                                 </div>
                              ))}
                           </div>
                        </li>
                     ))}
                  </ul>
                  <div
                     onClick={() =>
                        context.sendData(this.state)
                     }
                     className={styles.button}
                  >
                     <span>Search</span>
                  </div>
               </>
            )}
         </AppContext.Consumer>
      );
   }
}

export default FormControl;
