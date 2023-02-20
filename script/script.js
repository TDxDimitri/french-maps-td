const regionsPath = document.querySelectorAll('path')

let listOfregions = []

regionsPath.forEach(regionName => {
    listOfregions.push(regionName.getAttribute('title'))

});
console.table (listOfregions)

