const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
	const particles = [];
	const color = randomColor();
    const xMin = 0;
    const xMax = 200;
	
	const particle = document.createElement('span');
	particle.classList.add('particle', 'move');
	
	const { x, y } = randomLocation();
	particle.style.setProperty('--x', x);
	particle.style.setProperty('--y', y);
	particle.style.background = color;
	btn.style.background = color;
	
	btn.appendChild(particle);
	
	particles.push(particle);
	
	setTimeout(() => {
	
		for(let i=0; i<100; i++) {
			const innerP = document.createElement('span');
			innerP.classList.add('particle', 'move');
			innerP.style.transform = `translate(${x}, ${y})`;

			const xs = Math.random() * 200 - 100 + 'px';
			const ys = Math.random() * 200 - 100 + 'px';
			innerP.style.setProperty('--x', `calc(${x} + ${xs})`);
			innerP.style.setProperty('--y', `calc(${y} + ${ys})`);
			innerP.style.animationDuration = Math.random() * 300 + 200 + 'ms';
			innerP.style.background = color;
			
			btn.appendChild(innerP);
			particles.push(innerP)
		}
		
		setTimeout(() => {
			particles.forEach(particle => {
				particle.remove();
			})
		}, 1000)
	}, 1000);
});

function randomLocation() {
	return {

		x: Math.random() * window.innerWidth - window.innerWidth / 3 + 'px',
		y: Math.random() * window.innerHeight - window.innerHeight / 2 + 'px',
	}
}

function randomColor() {
	return `hsl(${Math.floor(Math.random() * 361)}, 100%, 50%)`;
}



let ghost_btn = document.querySelector('.ghost_btn'),
    ghosts = Math.floor(Math.random() * 500);

const RandomColor = () => {
 return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`; 
} 

const summonGhosts = () => {
  
  document.querySelector('#container p').style.opacity = 0;
  document.querySelector('#container p').style.display = "none";
  
  document.querySelector('#container .buttons').style.opacity = 0;
  document.querySelector('#container .buttons').style.display = "none";
  
  for(let index=0; index < ghosts; index++) {
        let ghost = document.createElement('div');

        ghost.style.color = RandomColor(); 
        ghost.style.opacity = Math.random() * 1;
        ghost.className = `fas fa fa-${Math.floor(Math.random() * 6)}x fa-ghost`;
        ghost.style.animation = `${Math.floor(Math.random() * 50)}s spooky alternate infinite`;
        
        document.querySelector('#container').append(ghost);
    }
};

ghost_btn.addEventListener('click', summonGhosts);