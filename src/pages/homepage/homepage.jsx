import React, { useState } from "react";
import { BsBarChartFill, BsPieChartFill, BsSearch } from 'react-icons/bs';
import { AiOutlineLineChart } from 'react-icons/ai';
import './homepage.scss';
import { useHistory } from "react-router-dom";

const Homepage = () => {

    const history = useHistory();

    const [selectedItem, setSelectedItem] = useState(0);
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = () => {
        history.push('/error');
    };

    const handleKeyPress = (ev) => {
        if (ev.key === 'Enter') {
            history.push('/error');
        }
    };

    const infoItems = [
        { cmp: <BsPieChartFill />, title: 'Comprehensive Insights', content: 'Explore a wealth of financial data presented elegantly. Gain comprehensive insights into company performance and financial health.' },
        { cmp: <BsBarChartFill />, title: 'Time-Driven Analysis', content: 'Analyze financial trends and changes over time effortlessly. Our intuitive platform provides a time-driven perspective on company performance.' },
        { cmp: <AiOutlineLineChart />, title: 'Holistic View', content: 'Get a holistic view of company finances through our user-friendly interface. Access key metrics and data for a complete understanding.' }
    ];

    return (
        <>
            <div className='main-container flex column center-center'>
                <div className='app-title'>FINDATASHEETS</div>
                <div className='app-input-container'>
                    <form onSubmit={handleSearch}>
                        <input
                            className='app-input'
                            placeholder='Search..'
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <button type="submit" className='app-input-btn'>
                            <BsSearch />
                        </button>
                    </form>
                </div>
                <div className='item-selected-content'>
                    {infoItems[selectedItem].content}
                </div>
                <div className='app-content flex space-evenly'>
                    {infoItems.map((item, index) => (
                        <div
                            className={`app-item card-container flex column center-center ${selectedItem === index ? 'selected' : ''}`}
                            onMouseEnter={() => setSelectedItem(index)}
                        >
                            <div key={index} className='item-img'>
                                {item.cmp}
                            </div>
                            <div className='item-title'>{item.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Homepage;