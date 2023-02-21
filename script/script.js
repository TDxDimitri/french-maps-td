const regionsPath = document.querySelectorAll('path')

let listOfregions = []

regionsPath.forEach(regionName => {
    
    const title = regionName.getAttribute('title');
    
    listOfregions.push(title);

    regionName.addEventListener('click', (event) => {

        document.querySelector('p').innerHTML= title;
        

        if (title != random) {
            event.target.classList.remove('land')
            event.target.classList.remove('hover')
            event.target.classList.add('nop')
        }
        else{
            event.target.classList.remove('land')
            event.target.classList.remove('hover')
            event.target.classList.add('win')
            document.querySelector('h3').innerHTML= 'Bravo ! Vous avez trouvez la région mystère en '+click+' coups';
            document.querySelector('h1').classList.add('d-none');            
            document.querySelector('.res').classList.add('d-none');            
            
        }
    });
});

// région génerer aléatoirement
const random = listOfregions[Math.floor(Math.random()*listOfregions.length)];
console.log (random)

// compteur de click
var click = 0;
var Carte = document.querySelector('.map');

Carte.addEventListener('click', function() {
    click = click + 1;
    if (click == 5) {
        alert ('vous avez cliquez '+click+' fois');     
    }
});


