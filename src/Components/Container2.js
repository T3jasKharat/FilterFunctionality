// // Container2.js

// import React, { useState } from "react";
// import search from "../Images/search-svgrepo-com.svg";
// import filter from "../Images/filter-svgrepo-com.svg";
// import closeIcon from "../Images/cross-svgrepo-com.svg";
// import "../Styles/style.css";

// const Container2 = ({ apiData, setFilters, applyFilters }) => {
//   const [isMenuOpen, setMenuOpen] = useState(false);
//   const [selectedFilters, setSelectedFilters] = useState([]);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   const handleFilterChange = (value) => {
//     setSelectedFilters((prevFilters) =>
//       prevFilters.includes(value)
//         ? prevFilters.filter((filter) => filter !== value)
//         : [...prevFilters, value]
//     );
//   };

//   const handleApply = () => {
//     applyFilters(selectedFilters);
//     closeMenu();
//   };

//   const handleReset = () => {
//     setSelectedFilters([]);
//     applyFilters([]); // Apply empty filters to reset FortsContainer
//     closeMenu();
//   };

//   return (
//     <div className="container2">
//       <div className="svg">
//         <img
//           className="filter"
//           src={filter}
//           alt="filter"
//           onClick={toggleMenu}
//         />
//         <img className="search" src={search} alt="search" />
//       </div>
//       <p>Showing 1 - 16 results of 53259</p>

//       {/* Hamburger menu */}
//       <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}>
//         <div className="menu-header">
//           <img
//             className="close-icon"
//             src={closeIcon}
//             alt="close"
//             onClick={closeMenu}
//           />
//           <p>Filter items</p>
//         </div>
//         <div className="checkbox-list">
//           {apiData &&
//             apiData.rows.facets[0][0].field_dc_type_1.map((item, index) => (
//               <div key={index} className="checkbox-item">
//                 <input
//                   type="checkbox"
//                   id={`checkbox-${index}`}
//                   checked={selectedFilters.includes(item.values.value)}
//                   onChange={() => handleFilterChange(item.values.value)}
//                 />
//                 <label htmlFor={`checkbox-${index}`}>{item.values.value}</label>
//               </div>
//             ))}
//         </div>
//         <div className="button-container">
//           <button className="apply-button" onClick={handleApply}>
//             Apply
//           </button>
//           <button className="reset-button" onClick={handleReset}>
//             Reset
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Container2;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////
// import React, { useState } from "react";
// import search from "../Images/search-svgrepo-com.svg";
// import filter from "../Images/filter-svgrepo-com.svg";
// import closeIcon from "../Images/cross-svgrepo-com.svg";
// import { useSelector, useDispatch } from "react-redux";
// import { setFilters } from "../actions";
// import "../Styles/style.css";

// const Container2 = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);
//   const [selectedFilters, setSelectedFilters] = useState([]);
//   const apiData = useSelector((state) => state.apiData);
//   const dispatch = useDispatch();

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   const handleFilterChange = (value) => {
//     setSelectedFilters((prevFilters) =>
//       prevFilters.includes(value)
//         ? prevFilters.filter((filter) => filter !== value)
//         : [...prevFilters, value]
//     );
//   };

//   const handleApply = () => {
//     dispatch(setFilters(selectedFilters));
//     closeMenu();
//   };

//   const handleReset = () => {
//     setSelectedFilters([]);
//     dispatch(setFilters([])); // Apply empty filters to reset FortsContainer
//     closeMenu();
//   };

//   return (
//     <div className="container2">
//       <div className="svg">
//         <img
//           className="filter"
//           src={filter}
//           alt="filter"
//           onClick={toggleMenu}
//         />
//         <img className="search" src={search} alt="search" />
//       </div>
//       <p>Showing 1 - 16 results of {apiData?.pager?.total_items}</p>

//       {/* Hamburger menu */}
//       <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}>
//         <div className="menu-header">
//           <img
//             className="close-icon"
//             src={closeIcon}
//             alt="close"
//             onClick={closeMenu}
//           />
//           <p>Filter items</p>
//         </div>
//         <div className="checkbox-list">
//           {apiData &&
//             apiData.rows.facets[0][0].field_dc_type_1.map((item, index) => (
//               <div key={index} className="checkbox-item">
//                 <input
//                   type="checkbox"
//                   id={`checkbox-${index}`}
//                   checked={selectedFilters.includes(item.values.value)}
//                   onChange={() => handleFilterChange(item.values.value)}
//                 />
//                 <label htmlFor={`checkbox-${index}`}>{item.values.value}</label>
//               </div>
//             ))}
//         </div>
//         <div className="button-container">
//           <button className="apply-button" onClick={handleApply}>
//             Apply
//           </button>
//           <button className="reset-button" onClick={handleReset}>
//             Reset
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Container2;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////
// src / Components / Container2.js;
import React, { useState } from "react";
import search from "../Images/search-svgrepo-com.svg";
import filter from "../Images/filter-svgrepo-com.svg";
import closeIcon from "../Images/cross-svgrepo-com.svg";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../actions";
import "../Styles/style.css";

const Container2 = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const apiData = useSelector((state) => state.apiData);
  const dispatch = useDispatch();

  const [filteredFortCount, setFilteredFortCount] = useState(0);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleFilterChange = (value) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(value)
        ? prevFilters.filter((filter) => filter !== value)
        : [...prevFilters, value]
    );
  };

  const handleApply = () => {
    dispatch(setFilters(selectedFilters));
    closeMenu();
  };

  const handleReset = () => {
    setSelectedFilters([]);
    dispatch(setFilters([])); // Apply empty filters to reset FortsContainer
    closeMenu();
  };
  const startIndex = 1;
  const endIndex = startIndex + apiData?.rows?.search_results?.length - 1;

  return (
    <div className="container2">
      <div className="svg">
        <img
          className="filter"
          src={filter}
          alt="filter"
          onClick={toggleMenu}
        />
        <img className="search" src={search} alt="search" />
      </div>
      <p>
        Showing {startIndex} - {endIndex} results of{" "}
        {selectedFilters.length > 0
          ? filteredFortCount
          : apiData?.pager?.total_items}
      </p>

      {/* Hamburger menu */}
      <div className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="menu-header">
          <img
            className="close-icon"
            src={closeIcon}
            alt="close"
            onClick={closeMenu}
          />
          <p>Filter items</p>
        </div>
        <div className="checkbox-list">
          {apiData &&
            apiData.rows.facets[0][0].field_dc_type_1.map((item, index) => (
              <div key={index} className="checkbox-item">
                <input
                  type="checkbox"
                  id={`checkbox-${index}`}
                  checked={selectedFilters.includes(item.values.value)}
                  onChange={() => handleFilterChange(item.values.value)}
                />
                <label htmlFor={`checkbox-${index}`}>{item.values.value}</label>
              </div>
            ))}
        </div>
        <div className="button-container">
          <button className="apply-button" onClick={handleApply}>
            Apply
          </button>
          <button className="reset-button" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Container2;
