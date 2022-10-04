// Get DOM Elements
var resultTextEl = document.querySelector("#result-text");
var resultContentEl = document.querySelector("#result-content");
var searchFormEl = document.querySelector("#search-form");

/**
 * Get the query parameters so that
 * you can later concatenate them
 * with the LOC endpoint.
 */
function getParams() {
  var query;
  var format;
  // get query and format from url location object

  searchApi(query, format);
}

/**
 * Loops over the data and builds
 * HTML for each piece of data
 *
 * @param {*} resultObj
 */
function printResults(resultObj) {}

/**
 * Concatenates URL using query and format
 * Makes fetch request to URL
 *
 * @param {string} query
 * @param {string} format
 */
function searchApi(query, format) {}

/**
 * Handles the form on the left
 *
 * @param {*} event
 */
function handleSearchFormSubmit(event) {}

searchFormEl.addEventListener("submit", handleSearchFormSubmit);

getParams();
