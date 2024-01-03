// // Unique Forts
// import React, { useEffect, useState } from "react";
// import Fort from "./Fort";
// import AdvancedExample from "./Pagination";

// const FortsContainer = ({ apiData, filters }) => {
//   const [imageUrlsData, setImageUrlsData] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const itemsPerPage = 16;

//   useEffect(() => {
//     const fetchData = async (page) => {
//       try {
//         const response = await fetch(
//           `https://indianculture.gov.in/rest-v1/archive?page=${page}`
//         );
//         const data = await response.json();
//         const fetchedImageUrlsData = data.rows.facets[0][0].field_dc_type_1;
//         const fetchedSearchResults = data.rows.search_results;

//         setImageUrlsData((prevData) => [
//           ...prevData,
//           ...fetchedImageUrlsData.map((item) => item),
//         ]);
//         setSearchResults((prevResults) => [
//           ...prevResults,
//           ...fetchedSearchResults.map((item) => item),
//         ]);

//         if (page === 1) {
//           const totalItems = data.pager.total_items;
//           const totalPages = Math.ceil(totalItems / itemsPerPage);
//           setTotalPages(totalPages);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     const fetchAllData = async () => {
//       try {
//         const totalPagesResponse = await fetch(
//           "https://indianculture.gov.in/rest-v1/archive"
//         );
//         const totalPagesData = await totalPagesResponse.json();
//         const totalPages = totalPagesData.pager.total_pages;

//         // Fetch data for each page
//         for (let page = 1; page <= totalPages; page++) {
//           await fetchData(page);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchAllData();
//   }, [filters]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   // Your new filtering logic here
//   const filteredData = [...searchResults]
//     .filter((item) =>
//       filters.length === 0 ? true : filters.includes(item.field_dc_type)
//     )
//     .reduce((uniqueForts, item) => {
//       const index = imageUrlsData.findIndex(
//         (dataItem) => dataItem.values.value === item.field_dc_type
//       );
//       const matchingImageUrlData = index !== -1 ? imageUrlsData[index] : null;

//       const uniqueFortKey = `${item.field_dc_type}-${item.title}`;
//       if (!uniqueForts.has(uniqueFortKey) && matchingImageUrlData) {
//         uniqueForts.set(uniqueFortKey, {
//           imageUrlData: matchingImageUrlData,
//           searchResult: item,
//         });
//       }

//       return uniqueForts;
//     }, new Map())
//     .values();

//   // Paginate the filteredData
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const paginatedData = [...filteredData].slice(startIndex, endIndex);

//   return (
//     <div>
//       <div className="container3">
//         {paginatedData.map(({ imageUrlData, searchResult }, index) => (
//           <Fort
//             key={index}
//             imageUrlData={imageUrlData}
//             searchResult={searchResult}
//             typeOfData={imageUrlData.values.value} // Adjust this based on your data structure
//             title={searchResult.title}
//           />
//         ))}
//       </div>
//       <div className="pagination-container text-center">
//         <AdvancedExample
//           totalPages={totalPages}
//           currentPage={currentPage}
//           onPageChange={handlePageChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default FortsContainer;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// src/Components/FortsContainer.js
// import React, { useEffect, useState } from "react";
// import Fort from "./Fort";
// import AdvancedExample from "./Pagination";
// import { useSelector } from "react-redux";

// const FortsContainer = () => {
//   const apiData = useSelector((state) => state.apiData);
//   const filters = useSelector((state) => state.filters);

//   const [imageUrlsData, setImageUrlsData] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const itemsPerPage = 16;

//   useEffect(() => {
//     const fetchData = async (page) => {
//       try {
//         const response = await fetch(
//           `https://indianculture.gov.in/rest-v1/archive?page=${page}`
//         );
//         const data = await response.json();
//         const fetchedImageUrlsData = data.rows.facets[0][0].field_dc_type_1;
//         const fetchedSearchResults = data.rows.search_results;

//         setImageUrlsData((prevData) => [
//           ...prevData,
//           ...fetchedImageUrlsData.map((item) => item),
//         ]);
//         setSearchResults((prevResults) => [
//           ...prevResults,
//           ...fetchedSearchResults.map((item) => item),
//         ]);

//         if (page === 1) {
//           const totalItems = data.pager.total_items;
//           const totalPages = Math.ceil(totalItems / itemsPerPage);
//           setTotalPages(totalPages);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     const fetchAllData = async () => {
//       try {
//         const totalPagesResponse = await fetch(
//           "https://indianculture.gov.in/rest-v1/archive"
//         );
//         const totalPagesData = await totalPagesResponse.json();
//         const totalPages = totalPagesData.pager.total_pages;

//         // Fetch data for each page
//         for (let page = 1; page <= totalPages; page++) {
//           await fetchData(page);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchAllData();
//   }, [filters]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   // Your new filtering logic here
//   const filteredData = [...searchResults]
//     .filter((item) =>
//       filters.length === 0 ? true : filters.includes(item.field_dc_type)
//     )
//     .reduce((uniqueForts, item) => {
//       const index = imageUrlsData.findIndex(
//         (dataItem) => dataItem.values.value === item.field_dc_type
//       );
//       const matchingImageUrlData = index !== -1 ? imageUrlsData[index] : null;

//       const uniqueFortKey = `${item.field_dc_type}-${item.title}`;
//       if (!uniqueForts.has(uniqueFortKey) && matchingImageUrlData) {
//         uniqueForts.set(uniqueFortKey, {
//           imageUrlData: matchingImageUrlData,
//           searchResult: item,
//         });
//       }

//       return uniqueForts;
//     }, new Map())
//     .values();

//   // Paginate the filteredData
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const paginatedData = [...filteredData].slice(startIndex, endIndex);

//   return (
//     <div>
//       <div className="container3">
//         {paginatedData.map(({ imageUrlData, searchResult }, index) => (
//           <Fort
//             key={index}
//             imageUrlData={imageUrlData}
//             searchResult={searchResult}
//             typeOfData={imageUrlData.values.value} // Adjust this based on your data structure
//             title={searchResult.title}
//           />
//         ))}
//       </div>
//       <div className="pagination-container text-center">
//         <AdvancedExample
//           totalPages={totalPages}
//           currentPage={currentPage}
//           onPageChange={handlePageChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default FortsContainer;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React, { useEffect, useState } from "react";
import Fort from "./Fort";
import AdvancedExample from "./Pagination";
import { useSelector } from "react-redux";

const FortsContainer = () => {
  const apiData = useSelector((state) => state.apiData);
  const filters = useSelector((state) => state.filters);

  const [imageUrlsData, setImageUrlsData] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 16;

  useEffect(() => {
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const fetchData = async (page) => {
      try {
        const response = await fetch(
          `https://indianculture.gov.in/rest-v1/archive?page=${page}`
        );
        const data = await response.json();
        // console.log(`Fetched data for page ${page}:`, data);
        const fetchedImageUrlsData = data.rows.facets[0][0].field_dc_type_1;
        const fetchedSearchResults = data.rows.search_results;

        setImageUrlsData((prevData) => [
          ...prevData,
          ...fetchedImageUrlsData.map((item) => item),
        ]);
        setSearchResults((prevResults) => [
          ...prevResults,
          ...fetchedSearchResults.map((item) => item),
        ]);

        if (page === 1) {
          const totalItems = data.pager.total_items;
          const totalPages = Math.ceil(totalItems / itemsPerPage);
          setTotalPages(totalPages);
        }
        console.log(`Fetched data for page ${page}:`, data);
        // await delay(1000);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchAllData = async () => {
      try {
        const totalPagesResponse = await fetch(
          "https://indianculture.gov.in/rest-v1/archive"
        );
        const totalPagesData = await totalPagesResponse.json();
        const totalPages = totalPagesData.pager.total_pages;
        console.log(totalPages);

        // Fetch data for each page
        for (let page = 1; page <= totalPages; page++) {
          await fetchData(page);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllData();
  }, [filters]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Your new filtering logic here
  const filteredData = [...searchResults]
    .filter((item) =>
      filters.length === 0 ? true : filters.includes(item.field_dc_type)
    )
    .reduce((uniqueForts, item) => {
      const index = imageUrlsData.findIndex(
        (dataItem) => dataItem.values.value === item.field_dc_type
      );
      const matchingImageUrlData = index !== -1 ? imageUrlsData[index] : null;

      const uniqueFortKey = `${item.field_dc_type}-${item.title}`;
      if (!uniqueForts.has(uniqueFortKey) && matchingImageUrlData) {
        uniqueForts.set(uniqueFortKey, {
          imageUrlData: matchingImageUrlData,
          searchResult: item,
        });
      }

      return uniqueForts;
    }, new Map())
    .values();

  // Paginate the filteredData
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = [...filteredData].slice(startIndex, endIndex);

  return (
    <div>
      <div className="container3">
        {paginatedData.map(({ imageUrlData, searchResult }, index) => (
          <Fort
            key={index}
            imageUrlData={imageUrlData}
            searchResult={searchResult}
            typeOfData={imageUrlData.values.value} // Adjust this based on your data structure
            title={searchResult.title}
          />
        ))}
      </div>
      <div className="pagination-container text-center">
        <AdvancedExample
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default FortsContainer;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Fetching multiple pages in parallel
// import React, { useEffect, useState } from "react";
// import Fort from "./Fort";
// import AdvancedExample from "./Pagination";
// import { useSelector } from "react-redux";

// const FortsContainer = () => {
//   const apiData = useSelector((state) => state.apiData);
//   const filters = useSelector((state) => state.filters);

//   const [imageUrlsData, setImageUrlsData] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const itemsPerPage = 16;

//   const fetchData = async (page) => {
//     try {
//       const response = await fetch(
//         `https://indianculture.gov.in/rest-v1/archive?page=${page}`
//       );
//       const data = await response.json();
//       console.log(`Fetched data for page ${page}:`, data);
//       const fetchedImageUrlsData = data.rows.facets[0][0].field_dc_type_1;
//       const fetchedSearchResults = data.rows.search_results;

//       setImageUrlsData((prevData) => [
//         ...prevData,
//         ...fetchedImageUrlsData.map((item) => item),
//       ]);
//       setSearchResults((prevResults) => [
//         ...prevResults,
//         ...fetchedSearchResults.map((item) => item),
//       ]);

//       if (page === 1) {
//         const totalItems = data.pager.total_items;
//         const totalPages = Math.ceil(totalItems / itemsPerPage);
//         setTotalPages(totalPages);
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     const fetchAllData = async () => {
//       try {
//         const totalPagesResponse = await fetch(
//           "https://indianculture.gov.in/rest-v1/archive"
//         );
//         const totalPagesData = await totalPagesResponse.json();
//         const totalPages = totalPagesData.pager.total_pages;
//         console.log(totalPages);

//         // Use Promise.all to fetch data for multiple pages in parallel
//         const fetchPromises = Array.from({ length: totalPages }, (_, page) =>
//           fetchData(page + 1)
//         );
//         await Promise.all(fetchPromises);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchAllData();
//   }, [filters]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   // Your new filtering logic here
//   const filteredData = [...searchResults]
//     .filter((item) =>
//       filters.length === 0 ? true : filters.includes(item.field_dc_type)
//     )
//     .reduce((uniqueForts, item) => {
//       const index = imageUrlsData.findIndex(
//         (dataItem) => dataItem.values.value === item.field_dc_type
//       );
//       const matchingImageUrlData = index !== -1 ? imageUrlsData[index] : null;

//       const uniqueFortKey = `${item.field_dc_type}-${item.title}`;
//       if (!uniqueForts.has(uniqueFortKey) && matchingImageUrlData) {
//         uniqueForts.set(uniqueFortKey, {
//           imageUrlData: matchingImageUrlData,
//           searchResult: item,
//         });
//       }

//       return uniqueForts;
//     }, new Map())
//     .values();

//   // Paginate the filteredData
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const paginatedData = [...filteredData].slice(startIndex, endIndex);

//   return (
//     <div>
//       <div className="container3">
//         {paginatedData.map(({ imageUrlData, searchResult }, index) => (
//           <Fort
//             key={index}
//             imageUrlData={imageUrlData}
//             searchResult={searchResult}
//             typeOfData={imageUrlData.values.value} // Adjust this based on your data structure
//             title={searchResult.title}
//           />
//         ))}
//       </div>
//       <div className="pagination-container text-center">
//         <AdvancedExample
//           totalPages={totalPages}
//           currentPage={currentPage}
//           onPageChange={handlePageChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default FortsContainer;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Not Unique Forts
// import React, { useEffect, useState } from "react";
// import Fort from "./Fort";
// import AdvancedExample from "./Pagination";

// const FortsContainer = ({ apiData, filters }) => {
//   const [imageUrlsData, setImageUrlsData] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const itemsPerPage = 16;

//   useEffect(() => {
//     const fetchData = async (page) => {
//       try {
//         const response = await fetch(
//           `https://indianculture.gov.in/rest-v1/archive?page=${page}`
//         );
//         const data = await response.json();
//         const fetchedImageUrlsData = data.rows.facets[0][0].field_dc_type_1;
//         const fetchedSearchResults = data.rows.search_results;

//         setImageUrlsData((prevData) => [
//           ...prevData,
//           ...fetchedImageUrlsData.map((item) => item),
//         ]);
//         setSearchResults((prevResults) => [
//           ...prevResults,
//           ...fetchedSearchResults.map((item) => item),
//         ]);

//         if (page === 1) {
//           const totalItems = data.pager.total_items;
//           const totalPages = Math.ceil(totalItems / itemsPerPage);
//           setTotalPages(totalPages);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     const fetchAllData = async () => {
//       try {
//         const totalPagesResponse = await fetch(
//           "https://indianculture.gov.in/rest-v1/archive"
//         );
//         const totalPagesData = await totalPagesResponse.json();
//         const totalPages = totalPagesData.pager.total_pages;

//         // Fetch data for each page
//         for (let page = 1; page <= totalPages; page++) {
//           await fetchData(page);
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchAllData();
//   }, [filters]);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   // Your new filtering logic here
//   const filteredData = searchResults
//     .filter((item) =>
//       filters.length === 0 ? true : filters.includes(item.field_dc_type)
//     )
//     .map((item) => {
//       const index = imageUrlsData.findIndex(
//         (dataItem) => dataItem.values.value === item.field_dc_type
//       );
//       const matchingImageUrlData = index !== -1 ? imageUrlsData[index] : null;

//       return { imageUrlData: matchingImageUrlData, searchResult: item };
//     })
//     .filter(({ imageUrlData }) => imageUrlData); // Filter out undefined imageUrlData

//   // Paginate the filteredData
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex =
//     currentPage === 1 ? itemsPerPage : currentPage * itemsPerPage;
//   const paginatedData = filteredData.slice(startIndex, endIndex);

//   return (
//     <div>
//       <div className="container3">
//         {paginatedData.map(({ imageUrlData, searchResult }, index) => (
//           <Fort
//             key={index}
//             imageUrlData={imageUrlData}
//             searchResult={searchResult}
//             typeOfData={imageUrlData.values.value} // Adjust this based on your data structure
//             title={searchResult.title}
//           />
//         ))}
//       </div>
//       <div className="pagination-container text-center">
//         <AdvancedExample
//           totalPages={totalPages}
//           currentPage={currentPage}
//           onPageChange={handlePageChange}
//         />
//       </div>
//     </div>
//   );
// };

// export default FortsContainer;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// This is the code for fetching the filters from the field_dc_type property of the object inside the search_results array
// import React, { useEffect, useState } from "react";
// import Fort from "./Fort";

// const FortsContainer = ({ apiData, filters }) => {
//   const [imageUrlsData, setImageUrlsData] = useState([]);
//   const [searchResults, setSearchResults] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://indianculture.gov.in/rest/archive"
//         );
//         const data = await response.json();
//         const fetchedImageUrlsData = data.facets[0][0].field_dc_type_1;
//         const fetchedSearchResults = data.search_results;

//         setImageUrlsData(fetchedImageUrlsData);
//         setSearchResults(fetchedSearchResults);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   // Assuming titles are directly associated with the search results
// const filteredData = searchResults
//   .filter((item) =>
//     filters.length === 0 ? true : filters.includes(item.field_dc_type)
//   )
//   .map((item) => {
//     const index = imageUrlsData.findIndex(
//       (dataItem) => dataItem.values.value === item.field_dc_type
//     );
//     const matchingImageUrlData = index !== -1 ? imageUrlsData[index] : null;

//     return { imageUrlData: matchingImageUrlData, searchResult: item };
//   })
//   .filter(({ imageUrlData }) => imageUrlData); // Filter out undefined imageUrlData

//   return (
//     <div className="container3">
//       {filteredData.map(({ imageUrlData, searchResult }, index) => (
//         <Fort
//           key={index}
//           imageUrlData={imageUrlData}
//           searchResult={searchResult}
//           typeOfData={imageUrlData.values.value}
//           title={searchResult.title} // Add the title property
//         />
//       ))}
//     </div>
//   );
// };

// export default FortsContainer;
