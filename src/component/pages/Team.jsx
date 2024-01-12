import React,{useState} from 'react'
//import { motion } from 'framer-motion';
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

import "./Team.css"

const allCategories = ['All', ...new Set(items.map((item)=>item.category))]

function Team() {

  const [menuItems,setMenuItems] = useState(items)
  const [categories,setCategories] = useState(allCategories)
  const [selectedCategory, setSelectedCategory] = useState('All');
  

  const filterItem=(category)=>{
    if(category === 'All'){
      setMenuItems(items)
      setSelectedCategory('All'); // Set selected category state
      return;
    }
    const newItem = items.filter((item)=>item.category === category);
    setMenuItems(newItem);
    setSelectedCategory(category); // Set selected category state
  };

  

  return (
   <>
      <div className="menu-section">
        <div className="title">
          <h2>OUR TEAM MEMBERS</h2>
          <div className="underline"></div>
        </div>
        <div className="categories">
          <Categories categories={categories} filterItem={filterItem} />
        </div>
        {selectedCategory !== 'All' && (
           
          <h3 className="selected-category">{`${selectedCategory} Team`}</h3>
        )}
           <Menu items={menuItems} />
        
      </div>
    </>

    
  );
}

export default Team;