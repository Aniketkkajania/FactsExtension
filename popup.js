document.addEventListener('DOMContentLoaded', function () {
    const factElement = document.getElementById('fact');
    const getFactButton = document.getElementById('getFactButton');

    function displayFact() {

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
                factElement.textContent = randomFact;
                chrome.storage.sync.set({ lastFact: randomFact });

            } else {
                factElement.textContent = 'No fact found in the response.';
            }
        })
        .catch(error => {
            console.error('Error fetching fact:', error);
            factElement.textContent = 'Error fetching fact.';
        });
    }

    getFactButton.addEventListener('click', displayFact);

    // Retrieve and display the last fact stored in Chrome's storage
    chrome.storage.sync.get(['lastFact'], function(result) {
        if (result.lastFact) {
            factElement.textContent = result.lastFact;
        }
    });
});
