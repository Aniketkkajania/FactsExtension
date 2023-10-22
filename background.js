const apiKey = '7ncngSjduUKuOuROIE+CQ==KmHXZeBF2Aqx3kn6'; // Replace with your actual API key

function displayFactNotification() {
    fetch('https://api.api-ninjas.com/v1/facts?limit=1', {
        method: 'GET',
        headers: {
            'X-Api-Key': '/7ncngSjduUKuOuROIE+CQ==KmHXZeBF2Aqx3kn6',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data && data.length > 0) {
            const randomFact = data[0].fact;
            // Show a Chrome notification with the fact
            chrome.notifications.create({
                type: 'basic',
                iconUrl: 'logo.png', // Replace with the path to your extension's icon
                title: 'Random Fact',
                message: randomFact
            });
        }
    })
    .catch(error => {
        console.error('Error fetching fact:', error);
    });
}

setInterval(displayFactNotification, 600000);
