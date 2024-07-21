document.addEventListener('DOMContentLoaded', () => {
    const themeButtons = document.querySelectorAll('.theme-button');
    
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            document.body.className = button.dataset.theme;
        });
    });

    const airdropsTableBody = document.querySelector('#airdrops-table tbody');
    
    const airdropData = [
        { name: 'Airdrop 1', link: 'https://example.com', status: 'Pending', lastLogin: '' },
        { name: 'Airdrop 2', link: 'https://example.com', status: 'Completed', lastLogin: '2024-07-20' },
        // Add more rows as needed
    ];

    airdropData.forEach((airdrop, index) => {
        const row = document.createElement('tr');
        row.dataset.index = index; // Store the index for easy access
        row.innerHTML = `
            <td>${airdrop.name}</td>
            <td><a href="${airdrop.link}" target="_blank">${airdrop.link}</a></td>
            <td id="status-${index}">${airdrop.status}</td>
            <td id="last-login-${index}">${airdrop.lastLogin || 'Not Logged In'}</td>
            <td><button class="update-status-button" data-index="${index}">Update Status</button></td>
        `;
        airdropsTableBody.appendChild(row);
    });

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

            // Optionally, you could update the airdropData array as well
            airdropData[index].status = newStatus;
            airdropData[index].lastLogin = newStatus === 'Completed' ? currentDate : '';
        }
    });
});
