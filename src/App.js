// import React, { useEffect, useState } from "react";
// import "./Styles/style.css";
// import Container1 from "./Components/Container1";
// import Container2 from "./Components/Container2";
// import FortsContainer from "./Components/FortsContainer";

// const App = () => {
//   const [apiData, setApiData] = useState(null);
//   const [filters, setFilters] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://indianculture.gov.in/rest/archive"
//         );
//         const data = await response.json();
//         setApiData(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   const applyFilters = (selectedFilters) => {
//     setFilters(selectedFilters);
//   };

//   return (
//     <div className="App">
//       <Container1 />
//       <Container2
//         apiData={apiData}
//         setFilters={setFilters}
//         applyFilters={applyFilters}
//       />
//       <FortsContainer apiData={apiData} filters={filters} />
//     </div>
//   );
// };

// export default App;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useEffect, useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Styles/style.css";
// import Container1 from "./Components/Container1";
// import Container2 from "./Components/Container2";
// import FortsContainer from "./Components/FortsContainer";

// // Inside App component

// const App = () => {
//   const [apiData, setApiData] = useState(null);
//   const [filters, setFilters] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://indianculture.gov.in/rest-v1/archive"
//         );
//         const data = await response.json();
//         setApiData(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   const applyFilters = (selectedFilters) => {
//     setFilters(selectedFilters);
//   };

//   return (
//     <div className="App">
//       <Container1 />
//       <Container2
//         apiData={apiData}
//         setFilters={setFilters}
//         applyFilters={applyFilters}
//       />
//       <FortsContainer apiData={apiData} filters={filters} />
//     </div>
//   );
// };

// export default App;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// src/App.js
// src/App.js
// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./Styles/style.css";
// import { Provider } from "react-redux";
// import store from "./store";
// import Container1 from "./Components/Container1";
// import Container2 from "./Components/Container2";
// import FortsContainer from "./Components/FortsContainer";
// import { setApiData } from "./actions"; // Add this import

// const App = () => {
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://indianculture.gov.in/rest-v1/archive"
//         );
//         const data = await response.json();
//         store.dispatch(setApiData(data));
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Provider store={store}>
//       <div className="App">
//         <Container1 />
//         <Container2 />
//         <FortsContainer />
//       </div>
//     </Provider>
//   );
// };

// export default App;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Local storage
// src/App.js
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles/style.css";
import { Provider } from "react-redux";
import store from "./store";
import Container1 from "./Components/Container1";
import Container2 from "./Components/Container2";
import FortsContainer from "./Components/FortsContainer";
import { setApiData } from "./actions";

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedData = localStorage.getItem("apiData");
        if (storedData) {
          // Use cached data if available
          store.dispatch(setApiData(JSON.parse(storedData)));
        } else {
          const response = await fetch(
            "https://indianculture.gov.in/rest-v1/archive"
          );
          const data = await response.json();
          store.dispatch(setApiData(data));
          // Cache the API data
          localStorage.setItem("apiData", JSON.stringify(data));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Container1 />
        <Container2 />
        <FortsContainer />
      </div>
    </Provider>
  );
};

export default App;
