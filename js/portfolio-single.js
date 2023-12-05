document.addEventListener("partialsLoaded", async () => {
    
    async function fetchData() {
        const response = await fetch('api/projects.json');
        return await response.json();
    }
    const projects = await fetchData();

    const urlParams = new URLSearchParams(window.location.search);
            const projectId = urlParams.get('id');

            const selectedProject = projects.find(project => project.id === parseInt(projectId));

            if (selectedProject) {
                document.getElementById('projectClient').textContent = selectedProject.client;
                document.getElementById('projectDate').textContent = selectedProject.date;
                document.getElementById('projectLocation').textContent = selectedProject.location;
                document.getElementById('projectService').textContent = selectedProject.service;
                document.getElementById('projectName').textContent = selectedProject.name;
                document.getElementById('projectDescription').textContent = selectedProject.description;
                document.getElementById('projectAdditional').textContent = selectedProject.additional;

                const projectImage = document.querySelector('.project__img-wrapper');
                projectImage.innerHTML = `<img src="img/${selectedProject.img}" alt="${selectedProject.name}">`;

                const projectConceptImage = document.querySelector('.about-project-concepts-img');
                projectConceptImage.innerHTML = `<img src="img/${selectedProject.imgConcept}" alt="${selectedProject.name}">`;

                const projectFinalImage = document.querySelector('.about-project-final-img');
                projectFinalImage.innerHTML = `<img src="img/${selectedProject.imgFinal}" alt="${selectedProject.name}">`;


            } else {
                console.error('Service not found');
            }
});