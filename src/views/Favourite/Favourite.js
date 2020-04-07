import React from 'react';
import styles from './Favourite.module.scss';
import AppContext from '../../context';
import CloseIcon from '../../assets/Group1549.png';

const Favourite = () => (
   <AppContext.Consumer>
      {(context) => (
         <div className={styles.wrapper}>
            {context.favourites.length ? (
               context.favourites.map((e, i) => (
                  <div key={i} className={styles.item}>
                     <img src={e} alt="" />
                     <div
                        onClick={() =>
                           context.deleteFavourite(i)
                        }
                        className={styles.button}
                     >
                        <img src={CloseIcon} alt="" />
                     </div>
                  </div>
               ))
            ) : (
               <div className={styles.starterSlogan}>
                  <div className={styles.slogan}>
                     Add some nice photos!
                  </div>
               </div>
            )}
         </div>
      )}
   </AppContext.Consumer>
);

export default Favourite;
