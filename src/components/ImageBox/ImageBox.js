import React from 'react';
import styles from './ImageBox.module.scss';
import AppContext from '../../context';
import AddIcon from '../../assets/Group1548.png';

class ImageBox extends React.Component {
   state = {
      notification: false,
   };

   showNotification = (func) => {
      this.setState({ notification: true });
      func();
   };

   hideNotification = () => {
      this.setState({ notification: false });
   };

   render() {
      return (
         <div className={styles.wrapper}>
            <AppContext.Consumer>
               {(context) => (
                  <div className={styles.imgBox}>
                     {context.imgs.length ? (
                        context.imgs.map((el, i) => (
                           <div
                              key={i}
                              className={styles.img}
                           >
                              <img src={el} alt="" />
                              <div
                                 className={styles.button}
                                 onClick={() => {
                                    this.showNotification(
                                       () =>
                                          context.addFavourite(
                                             el
                                          )
                                    );
                                 }}
                              >
                                 <img
                                    src={AddIcon}
                                    alt=""
                                 />
                              </div>
                           </div>
                        ))
                     ) : (
                        <div
                           className={styles.starterSlogan}
                        >
                           <div className={styles.slogan}>
                              {context.searching
                                 ? 'Searching...'
                                 : 'Start searching!'}
                           </div>
                        </div>
                     )}
                  </div>
               )}
            </AppContext.Consumer>
            {this.state.notification ? (
               <div
                  onClick={this.hideNotification}
                  className={styles.notification}
               >
                  Added to favourites!
               </div>
            ) : null}
         </div>
      );
   }
}

export default ImageBox;
