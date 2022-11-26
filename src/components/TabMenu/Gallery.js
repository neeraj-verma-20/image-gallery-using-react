import React, { useState } from "react";
import "../TabMenu/Tab.css";
import CatMenu from "./CatMenu";
import Menu from "./Menu";
import MenuItems from "./MenuItems";


const allCatValues = [...new Set(Menu.map((curElem) => {
    return curElem.category;
})), "all"]



function Gallery() {

    const [items, setItems] = useState(Menu)
    const [catItems, setCatItems] = useState(allCatValues)


    const filterItem = (category) => {

        if (category === "all") {
            setItems(Menu)
            return;
        }

        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setItems(updatedItems);
    }

    return (
        <>
            <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
            <hr />
            {/* Menu List Compo */}
            <CatMenu filterItem={filterItem} catItems={catItems} />

            {/* Menu Items Compo */}
            <MenuItems items={items} Menu={Menu} setItems={setItems} />
        </>
    );
}

export default Gallery;
