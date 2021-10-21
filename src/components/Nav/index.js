import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

const Nav = (props) => {
   
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected,
        aboutSelected,
        setAboutSelected
    } = props;
    
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]
    );

    return (
        <header>
            <h2>
                <a data-testid="link" href="/">
                    <span role = "img" aria-label="camera">📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className={`mx-2 `}>
                        <a className= {`${aboutSelected && 'navActive'}`} data-testid="about" href="about" onClick={() => setContactSelected(false)}>
                            About me
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => {setContactSelected(true); setAboutSelected(false)}}>Contact</span>
                    </li>
                        {categories.map((category) => (
                            <li className = {`mx-1 ${ 
                                currentCategory.name === category.name && !aboutSelected && !contactSelected && 'navActive'}`} key = {category.name} >
                                <span onClick={() => {
                                    setCurrentCategory(category)
                                    setContactSelected(false)
                                    setAboutSelected(false)
                                 }}
                                >
                                    {capitalizeFirstLetter(category.name)}
                                </span>
                            </li>
                        ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav;