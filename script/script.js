const regionsPath = document.querySelectorAll('path')
var click = 0;
let listOfregions = []
var gameEnded = false;

regionsPath.forEach(regionName => {
    
    const title = regionName.getAttribute('title');
    listOfregions.push(title);

    regionName.addEventListener('click', (event) => {
        if (gameEnded) {
            return;
        }
        click = click + 1;

        document.querySelector('p').innerHTML= title;
        

        if (title != random) {
            event.target.classList.remove('land')
            event.target.classList.remove('hover')
            event.target.classList.add('nop')
        }
        else if (title != random) {
            event.target.classList.remove('land')
            event.target.classList.remove('hover')
            event.target.classList.add('nop')
        }
        else{
            event.target.classList.remove('land')
            event.target.classList.remove('hover')
            event.target.classList.add('win')
            document.querySelector('.play').innerHTML='<a href="index.html" class="btn">Rejouez</a>';         
            document.querySelector('h3').innerHTML= 'Bravo ! Vous avez trouvez la région mystère en '+click+' coups';
            document.querySelector('h1').classList.add('d-none');            
            document.querySelector('.res').classList.add('d-none');
            regionName.removeEventListener ('click', regionName.event);         
            gameEnded = true;
        }
    });
});

// région génerer aléatoirement
const random = listOfregions[Math.floor(Math.random()*listOfregions.length)];
console.log (random)



