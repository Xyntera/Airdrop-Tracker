document.addEventListener('DOMContentLoaded', () => {
    const themeButtons = document.querySelectorAll('.theme-button');
    
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.body.className = button.dataset.theme;
        });
    });

    const airdropsTableBody = document.querySelector('#airdrops-table tbody');
    const dashboardTotalAirdrops = document.getElementById('total-airdrops');
    const dashboardPendingAirdrops = document.getElementById('pending-airdrops');
    const dashboardLoggedInToday = document.getElementById('logged-in-today');

const airdropData = [
    { name: 'Community Gaming', link: 'https://www.communitygaming.io/quests', status: 'Pending', lastLogin: 'Not Logged In' },
    { name: 'Maple Story', link: 'https://msu.io/quest/list', status: 'Pending', lastLogin: 'Not Logged In' },
    { name: 'Avalon', link: 'https://avalon.online/quests', status: 'Pending', lastLogin: 'Not Logged In' },
    { name: 'One Football', link: 'https://club.onefootball.com/join', status: 'Pending', lastLogin: 'Not Logged In' },
    { name: 'Sonic Odyssey', link: 'https://odyssey.sonic.game', status: 'Pending', lastLogin: 'Not Logged In' },
    { name: 'Kayen League', link: 'https://app.kayen.org//league?ref=1f0f336', status: 'Pending', lastLogin: 'Not Logged In' },
    { name: 'Hybrid\'s & Atlas Lite', link: 'https://app.buildonhybrid.com', status: 'Pending', lastLogin: 'Not Logged In' },
    { name: 'Bera Chain Testnet', link: 'https://www.berachain.com', status: 'Pending', lastLogin: 'Not Logged In' },
    { name: 'Plume Testnet', link: 'https://miles.plumenetwork.xyz/earn-miles', status: 'Pending', lastLogin: 'Not Logged In' },
    { name: 'Morph', link: 'https://www.morphl2.io/points/genesis_jungle/', status: 'Pending', lastLogin: 'Not Logged In' },
    { name: 'Swan chain', link: 'https://mission.swanchain.io/?invite=iFb6gNc9kHdA', status: 'Pending', lastLogin: 'Not Logged In' },
    { name: 'Tabizoo', link: 'https://carnival.tabichain.com/', status: 'Pending', lastLogin: 'Not Logged In' } // Added Tabizoo
];




    function populateAirdropsTable() {
        airdropsTableBody.innerHTML = '';

        airdropData.forEach((airdrop, index) => {
            const row = document.createElement('tr');
            row.dataset.index = index; // Store the index for easy access
            row.innerHTML = `
                <td>${airdrop.name}</td>
                <td><a href="${airdrop.link}" target="_blank">${airdrop.link}</a></td>
                <td id="status-${index}">${airdrop.status}</td>
                <td id="last-login-${index}">${airdrop.lastLogin}</td>
                <td><button class="update-status-button" data-index="${index}">Update Status</button></td>
            `;
            airdropsTableBody.appendChild(row);
        });

        updateDashboard();
    }

    function updateDashboard() {
        const totalAirdrops = airdropData.length;
        const pendingAirdrops = airdropData.filter(airdrop => airdrop.status === 'Pending').length;
        const loggedInToday = airdropData.filter(airdrop => airdrop.lastLogin === new Date().toISOString().split('T')[0]).length;

        dashboardTotalAirdrops.textContent = totalAirdrops;
        dashboardPendingAirdrops.textContent = pendingAirdrops;
        dashboardLoggedInToday.textContent = loggedInToday;
    }

    airdropsTableBody.addEventListener('click', (event) => {
        if (event.target.classList.contains('update-status-button')) {
            const index = event.target.dataset.index;
            const statusCell = document.querySelector(`#status-${index}`);
            const lastLoginCell = document.querySelector(`#last-login-${index}`);
            
            // Toggle status for demonstration
            const currentStatus = statusCell.textContent;
            const newStatus = currentStatus === 'Pending' ? 'Completed' : 'Pending';
            statusCell.textContent = newStatus;

            // Update last login date
            const currentDate = new Date().toISOString().split('T')[0];
            lastLoginCell.textContent = newStatus === 'Completed' ? currentDate : 'Not Logged In';

            // Update the airdropData array
            airdropData[index].status = newStatus;
            airdropData[index].lastLogin = newStatus === 'Completed' ? currentDate : 'Not Logged In';

            // Update the dashboard
            updateDashboard();
        }
    });

    // Initial population of the table
    populateAirdropsTable();
});
