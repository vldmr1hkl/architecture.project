document.addEventListener("partialsLoaded", async () => {
    
    async function fetchTeamMembersData() {
        const response = await fetch('api/team-members.json');
        return await response.json();
    }
    const teamMembers = await fetchTeamMembersData()
    
    const teamMembersContainer = document.querySelector('.team__members-container');
    
    function displayMembers(array) {
      teamMembersContainer.innerHTML = "";
    
      array.forEach(member => {
        const teamMemberDiv = document.createElement('div');
        teamMemberDiv.classList.add('.team-member');
    
        teamMemberDiv.innerHTML = `
            <a href="team-single.html?id=${member.id}" class="card-link">
                <div class="team-member-photo image-container">
                    <img class="img-fluid" src="img/${member.img}" alt="${member.name}">
                </div>
                <div class="team-member-info">
                    <h3 class="text-color-hover">${member.name}</h3>
                    <p>${member.position}</p>
                </div>
            </a>
        `;
    
        teamMembersContainer.appendChild(teamMemberDiv);
      });
    }
    
    displayMembers(teamMembers);
  });