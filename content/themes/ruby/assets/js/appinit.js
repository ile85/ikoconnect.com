(function() {
    // Encapsulated private variables
    var STORAGE_KEY = 'myApp.storageKey';
    var TIMEOUT = 3000;
    var LIMIT = 10;

    // Example function that uses the encapsulated variables
    function init() {
        // Uses STORAGE_KEY, TIMEOUT, and LIMIT
        console.log('Initializing with settings:', STORAGE_KEY, TIMEOUT, LIMIT);
        // More initialization code that uses STORAGE_KEY, TIMEOUT, and LIMIT
    }

    // Example of setting a timeout that uses TIMEOUT
    function startTimeout() {
        setTimeout(function() {
            console.log('Timeout reached after ' + TIMEOUT + ' milliseconds.');
        }, TIMEOUT);
    }

    // Example of a function that ensures a limit which uses LIMIT
    function enforceLimit(items) {
        if (items.length > LIMIT) {
            console.log('Limit of ' + LIMIT + ' items exceeded.');
            // Code to handle the limit enforcement
        }
    }

    // Invoke the example functions to demonstrate usage
    init();
    startTimeout();
    enforceLimit([1, 2, 3]); // Example array, normally this would be dynamic

    // Any additional code that needs STORAGE_KEY, TIMEOUT, or LIMIT
    // would also be placed inside this IIFE.

})(); // The function is invoked immediately after being defined.
