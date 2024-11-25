import React, { useState } from "react";

const SearchArea = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(true);

    // Handle search term change
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Handle search button click
    const handleSearch = () => {
        console.log("Searching for:", searchTerm);
        // Perform the search logic here (e.g., API call or filtering)
    };

    // Handle close button click
    const closeSearch = () => {
        setIsOpen(false);
    };

    return (
        isOpen && (
            <div className="search-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="close-btn" onClick={closeSearch}>
                                <i className="fas fa-window-close"></i>
                            </span>
                            <div className="search-bar">
                                <div className="search-bar-tablecell">
                                    <h3>Search For:</h3>
                                    <input
                                        type="text"
                                        placeholder="Keywords"
                                        value={searchTerm}
                                        onChange={handleSearchChange}
                                    />
                                    <button type="button" onClick={handleSearch}>
                                        Search <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default SearchArea;
