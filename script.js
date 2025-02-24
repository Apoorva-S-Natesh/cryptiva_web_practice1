function toggleMenu() {
	var navbar = document.getElementById("navbar");
	if (navbar.classList.contains('active')) {
		navbar.classList.remove('active');
	} else {
		navbar.classList.add('active');
	}
}

const createOdometer = (el, value) => {
	const odometer = new Odometer ({
		el: el,
		value : 0,
	});

	let hasRun = false;

	const options = {
		threshold: [0, 0.9],
	};

	const callback = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry,isIntersecting) {
				if (!hasRun)
				{
					odometer.update(value);
					hasRun = true;
				}
			}
		});
	};

	//Intersection Observer to make the counter load according to the viewport - otherwise it would have finished the counter by the time we scroll down
	const observer = new IntersectionObserver(callback, options);
	observer.observe(el);

};

const projectsOdometer = document.querySelector(".projects-odometer");
createOdometer(projectsOdometer, 4452);

const clientOdometer = document.querySelector(".client-odometer");
createOdometer(clientOdometer, 1458);

const serviceOdometer = document.querySelector(".service-odometer");
createOdometer(serviceOdometer, 100);

const teamOdometer = document.querySelector(".team-odometer");
createOdometer(teamOdometer, 85);
