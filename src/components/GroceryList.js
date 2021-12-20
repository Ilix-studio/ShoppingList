//GroceryList.js

import React from "react";
import GroceryItem from "./GroceryItems";
const GroceryList = ({ items, removeItem }) => {
  return (
    <div className='grid-container '>
      <ol>
        {items.map((item) => (
          <li>
            <GroceryItem key={item} item={item} removeItem={removeItem} />
          </li>
        ))}
      </ol>
    </div>
  );
};
export default GroceryList;
//items is taken as a prop and it is pass from one component to another component, like from Grocery items to Grocery list.
// The GroceryList component has a similar change of taking the remove item prop in and passing it to the GroceryItem component.

//useEffect() - It runs after every initial render of the componento r call it later after performing the DOM updates. it is similar to the life-cycle methods use in class.
// we could also perform data fetching or call some other imperative API. Placing  useEffect() inside the component lets us access the count state variable (or any props) right from the effect.
// We don’t need a special API to read it — it’s already in the function scope.

//let us put this useEffect hook in use to set the grocery item list data to local storage whenever we update the items in the grocery list.
