import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div className="flex items-center border bg-white rounded-2xl lower-shadow p-2 h-[3rem] w-[12rem] md:w-[20rem]">
            <SearchIcon className="text-gray-400 mr-2" />
            <input
                type="text"
                placeholder="Search Task" 
                value={searchTerm}
                onChange={handleInputChange}
                className="w-full outline-none text-base"
            />
        </div>
    );
};

export default SearchBox;
