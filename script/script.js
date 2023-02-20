const regionsPath = document.querySelectorAll('path')

let listOfregions = []

regionsPath.forEach(regionName => {
    
    const title = regionName.getAttribute('title');
    
    listOfregions.push(title);

    regionName.addEventListener('click', () => {

        document.querySelector('p').innerHTML= title;
        

        if (title === random) {
            document.querySelector('g').classList.add('green');
          
        }

    });
});

const random = listOfregions[Math.floor(Math.random()*listOfregions.length)];
console.log (random)

