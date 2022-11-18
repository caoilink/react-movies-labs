import React, { useState } from "react";

export const TvsContext = React.createContext(null);

const TvsContextProvider = (props) => {
  const [Tvfavorites, setFavorites] = useState( [] )
  const [myReviews, setMyReviews] = useState( {} ) 

  const addToFavorites = (tv) => {
    let newFavorites = [];
    if (!Tvfavorites.includes(tv.id)){
      newFavorites = [...Tvfavorites, tv.id];
    }
    else{
      newFavorites = [...Tvfavorites];
    }
    setFavorites(newFavorites)
  };

  // We will use this function in a later section
  const removeFromFavorites = (tv) => {
    setFavorites( Tvfavorites.filter(
      (mId) => mId !== tv.id
    ) )
  };

  const addReview = (tv, review) => {
    setMyReviews( {...myReviews, [tv.id]: review } )
  };
  //console.log(myReviews);

  return (
    <TvsContext.Provider
      value={{
        Tvfavorites,
        addToFavorites,
        removeFromFavorites,
        addReview,
      }}
    >
      {props.children}
    </TvsContext.Provider>
  );
};

export default TvsContextProvider;