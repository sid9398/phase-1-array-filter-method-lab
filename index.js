function findMatching(drivers, search) {
    return drivers.filter(driver => driver.toLowerCase().includes(search.toLowerCase()))
}
function fuzzyMatch(drivers, query) {
    const matchedDrivers = [];
    const lowercaseQuery = query.toLowerCase();
  
    drivers.forEach(driver => {
      const lowercaseDriverName = driver.slice(0, query.length).toLowerCase();
      if (lowercaseDriverName.startsWith(lowercaseQuery)) {
        matchedDrivers.push(driver);
      }
    });
  
    return matchedDrivers;
  }
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }