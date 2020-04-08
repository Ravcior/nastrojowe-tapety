import React from 'react';
import {
   BrowserRouter,
   Route,
   Switch,
} from 'react-router-dom';
import AppContext from '../../context';
import Header from '../../components/Header/Header';
import Wrapper from '../../components/Wrapper/Wrapper';
import MainPage from '../MainPage/MainPage';
import Favourite from '../Favourite/Favourite';

class Root extends React.Component {
   state = {
      questions: [
         [
            'What is the time of year?',
            ['Spring', 'Summer', 'Autumn', 'Winter'],
            'season',
         ],
         [
            'What is the weather?',
            ['Sunny', 'Rainy', 'Cloudy'],
            'weather',
         ],
         [
            'Dream holidays?',
            ['Mountain', 'Sea', 'Sport'],
            'place',
         ],
      ],
      favourites: [],
      imgs: [],
      isSearching: false,
   };

   addImages = (res) => {
      console.log(res);
      let arr = [];
      res.map((item) =>
         arr.push([
            item.id,
            item.urls.thumb,
            [item.user.first_name, item.user.last_name],
         ])
      );
      console.log(arr);
      this.setState({ imgs: arr, searching: false });
   };

   getImages = (receivedState) => {
      this.setState({ searching: true, imgs: [] });
      fetch(
         `https://api.unsplash.com/photos/random/?client_id=gaqRhPO6uN9IW1jynLsXF7P1pxk0hTK1ihThu-gwf7M&count=3`
      )
         .then((res) => res.json())
         .then((res) => this.addImages(res))
         .catch((error) => console.log(error));
   };

   addFavourite = (item) => {
      this.setState((prevState) => ({
         favourites: [item, ...prevState.favourites],
      }));
   };

   deleteFavourite = (i) => {
      let newState = this.state.favourites;
      newState.splice(i, 1);
      this.setState({ favourites: newState });
   };

   render() {
      const context = {
         ...this.state,
         sendData: this.getImages,
         addFavourite: this.addFavourite,
         deleteFavourite: this.deleteFavourite,
      };
      return (
         <AppContext.Provider value={context}>
            <BrowserRouter>
               <Header />
               <Wrapper>
                  <Switch>
                     <Route
                        exact
                        path="/"
                        component={MainPage}
                     ></Route>
                     <Route
                        path="/favourites"
                        component={Favourite}
                     ></Route>
                  </Switch>
               </Wrapper>
            </BrowserRouter>
         </AppContext.Provider>
      );
   }
}

export default Root;
