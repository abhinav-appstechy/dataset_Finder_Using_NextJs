/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import React, { Suspense, useEffect, useState } from "react";
import Loading from "./Loading";

type Props = {};

const filterArray = ["Hotness", "Most Votes", "New", "Updated", "Usability"];

const DatasetFindSection = (props: Props) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [pageData, setPageData] = useState(1);
  const [isSearchingActive, setIsSearchingActive] = useState(false);
  const [loadMoreData, setLoadMoreData] = useState(false);
  const [isNoDataFoundActive, setIsNoDataFoundActive] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentFilterSelected, setCurrentFilterSelected] = useState("Hotness");

  const handleSubmit = (e: any, filter: string) => {
    e.preventDefault();
    if (query.trim() === "") {
      return;
    }

    setResults([]);
    setPageData(1);
    setIsSearchingActive(true);
    setIsNoDataFoundActive(false);

    fetch("/api/dataset-find", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: query,
        page: 1,
        sortMethod:
          filter !== "" && filter !== undefined
            ? filter
            : currentFilterSelected,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.status == "success") {
          if (data.data.datasetList.totalResults == 0) {
            setResults([]);
            setIsSearchingActive(false);
            setIsNoDataFoundActive(true);
          } else {
            setResults([data.data.datasetList]);
            setIsSearchingActive(false);
          }
        } else {
          setResults([]);
          setIsSearchingActive(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function formatSize(bits: number) {
    const sizes = ["Bits", "KB", "MB", "GB"];
    if (bits === 0) return "0 Bits";
  
    const i = Math.floor(Math.log(bits) / Math.log(1024));
    const sizeInUnit = bits / Math.pow(1024, i);
    const size = Math.round(sizeInUnit);
  
    return `${size} ${sizes[i]}`;
  }

  const handlLoadMoreResult = () => {
    if (results[0].totalResults > results[0].items.length) {
      setPageData((prev) => prev + 1);
      setLoadMoreData(true);
      fetch("/api/dataset-find", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: query,
          page: pageData + 1,
          sortMethod: currentFilterSelected,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (data.status == "success") {
            let allData = [...results];
            allData[0].items.push(...data.data.datasetList.items);
            // console.log("11111", allData);
            setResults(allData);
            setLoadMoreData(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // useEffect(() => {
  //   console.log("results", results);
  // }, [results]);

  function timeDifference(updatedAt: string) {
    const now: any = new Date();
    const then: any = new Date(updatedAt);

    const secondsDiff = Math.floor((now - then) / 1000);
    const minutesDiff = Math.floor(secondsDiff / 60);
    const hoursDiff = Math.floor(minutesDiff / 60);
    const daysDiff = Math.floor(hoursDiff / 24);
    const monthsDiff = Math.floor(daysDiff / 30);
    const yearsDiff = Math.floor(monthsDiff / 12);

    if (secondsDiff < 60) {
      return `Updated at ${secondsDiff} seconds ago`;
    } else if (minutesDiff < 60) {
      return `Updated at ${minutesDiff} minutes ago`;
    } else if (hoursDiff < 24) {
      return `Updated at ${hoursDiff} hours ago`;
    } else if (daysDiff < 30) {
      return `Updated at ${daysDiff} days ago`;
    } else if (monthsDiff < 12) {
      return `Updated at ${monthsDiff} months ago`;
    } else {
      return `Updated at ${yearsDiff + 1} years ago`;
    }
  }

  return (
    <>
      <div className="text-center">
        <h4 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Search here
        </h4>
      </div>

      <div className="flex justify-center mt-10 mx-3 items-center gap-1 sm:gap-5">
        <form className="max-w-md   px-5 sm:px-0 w-full">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={handleSubmit}
              disabled={isSearchingActive}
            >
              {isSearchingActive ? "Searching..." : "Search"}
            </button>
          </div>
        </form>

        <div>
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="dropdown"
            className="z-[999999] text-white py-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5  text-center inline-flex items-center rounded-full"
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            {currentFilterSelected}{" "}
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>

          {/* <!-- Dropdown menu --> */}
          <div
            id="dropdown"
            className={`z-10 ${
              isDropdownOpen ? "" : "hidden"
            } absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton"
            >
              {filterArray.map((filter, idx) => (
                <>
                  <li key={idx}>
                    <a
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                      onClick={() => {
                        setCurrentFilterSelected(filter);
                        setIsDropdownOpen(false);
                        handleSubmit(event, filter);
                      }}
                    >
                      {filter}
                    </a>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {results.length > 0 && results[0].items.length > 0 ? (
        <div className="mx-auto px-4 sm:px-6 mt-10">
          <h2 className="font-bold">{results[0].totalResults} Datasets</h2>
          {results[0].items.map((result: any, idx: number) => (
            <>
              <li
                key={idx}
                className="MuiListItem-root MuiListItem-gutters MuiListItem-divider sc-guhxjM kLylVR css-iicyhe"
                aria-label="Student Mental health List Item"
              >
                <div className="sc-bYpRZF ymler km-listitem--large">
                  <a
                    aria-label="Student Mental health"
                    tabIndex={0}
                    href={`https://www.kaggle.com${result.datasetUrl}`}
                    target="_blank"
                    role="link"
                    className="sc-bqOYya camFgS"
                  >
                    <div className="sc-eFyDpN HYEkl">
                      <div className="sc-crHHJw fMoFkq">
                        <div className="sc-dEFUer gWnLJD">
                          <div
                            className="sc-jvBtAx bjbJWW"
                            style={{
                              backgroundImage: `url("${result.datasource.thumbnailImageUrl}")`,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="sc-ettago hUiTnd">
                        <div className="sc-blmEgr sc-fGrmBj iVVdBa doCOYX">
                          {result.datasource.title}
                        </div>
                        <span className="sc-fLseNd sc-dmcoYd gArHzz dlSNJK">
                          <a className="sc-eAKtBH gfxjtA" href={`https://www.kaggle.com${result.creatorUrl}`} target="_blank">
                            {result.creatorName}
                          </a>{" "}
                          ·{" "}
                          <span
                            title="Fri Feb 17 2023 07:41:56 GMT+0530 (India Standard Time)"
                            aria-label="a year ago"
                          >
                            {timeDifference(result.dateUpdated)}
                          </span>{" "}
                        </span>
                        <span className="sc-fLseNd sc-dmcoYd gArHzz dlSNJK">
                          <span>
                            Usability&nbsp;
                            <span
                              className={`sc-dtLcMZ lgUIgf ${
                                (result.usabilityRating.score * 10).toFixed(
                                  1
                                ) === "10.0"
                                  ? "font-bold"
                                  : ""
                              }`}
                            >
                              {(result.usabilityRating.score * 10).toFixed(1)}
                            </span>
                          </span>{" "}
                          ·{" "}
                          {Object.keys(result).includes("commonFileTypes") ? (
                            <>{result.commonFileTypes[0].count} File (CSV) · </>
                          ) : (
                            <></>
                          )}
                          {Object.keys(result).includes("datasetSize") ? (
                            <>{formatSize(result.datasetSize)}</>
                          ) : (
                            <></>
                          )}
                        </span>
                      </div>
                    </div>
                  </a>

                  <div
                    className="sc-gHjVMF ehLAgn"
                    style={{
                      display: "flex",
                      height: "100%",
                      width: "90px",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <a
                      aria-label="Student Mental health"
                      tabIndex={0}
                      href={`https://www.kaggle.com${result.datasetUrl}`}
                      target="_blank"
                      role="link"
                    >
                      <div className="sc-fZZVMt cIcFaH">
                        <button
                          data-testid="upvotebutton__upvote"
                          aria-label="Upvote"
                          title="Upvote"
                          className="sc-iPFWtD sc-gkTIco iENlny kcILdS"
                        >
                          <i className="rmwc-icon rmwc-icon--ligature google-symbols sc-iBdnpw dgOjli notranslate">
                            arrow_drop_up
                          </i>
                        </button>
                        <span
                          aria-live="polite"
                          className="sc-bBkKde sc-cSrxju czZTlm KlTsa"
                        >
                          {result.voteButton.totalVotes}
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </li>
            </>
          ))}

          <div className="flex justify-center mt-5">
            <button
              type="button"
              onClick={handlLoadMoreResult}
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              {loadMoreData ? "Loading..." : "Load more"}
            </button>
          </div>
        </div>
      ) : (
        <>
          {isSearchingActive ? (
            <>
              <Loading />
            </>
          ) : (
            <></>
          )}
        </>
      )}

      {isNoDataFoundActive ? (
        <>
          <div className="mx-auto mt-20">
            <div className="flex justify-center">
              <Image
                src="/no_data.png"
                width={100}
                height={100}
                alt="no-data-found"
              />
            </div>

            <h3 className="text-center font-bold">No Datasets Found</h3>
            <p className="text-center">
              We couldn't find any relevant datasets on Dataset Finder
            </p>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default DatasetFindSection;
