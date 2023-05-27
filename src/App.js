import menu from "./data";
import {useState} from "react";
import Title from "./components/Title";
import Menu from "./components/Menu";
import Categories from "./components/Categories";
import './App.css';

// const tempCategories = menu.map((item) => item.category)
// const tempSet = new Set(tempCategories)
// const tempItems = ['all', ...tempSet]

const allCategories = ['all', ...new Set(menu.map((item) => item.category))]
console.log(allCategories)

function App() {

    const [menuItems, setMenuItems] = useState(menu)
    const [categories, setCategories] = useState(allCategories)

    const filterItems = (category) => {
        if (category === 'all') {
            setMenuItems(menu)
            return;
        }

        console.log(category)
        const newItems = menu.filter((item) => item.category === category)
        setMenuItems(newItems)
    }

    return (
        <main>
            <section className='mainCenter'>
                <Categories categories={categories} filterItems={filterItems}/>
                <Title text={'Our Title'}/>
                <Menu menuItems={menuItems}/>
            </section>
        </main>
    );
}

export default App;
