const url = 'https://jsonplaceholder.typicode.com/posts/1';


function sendApirequest2(serviceURL) {
    return fetch(serviceURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network Error');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            return data;
        });
}

function processData(someData) {
    console.log('Got JSON from first function', someData);
    console.log('Title', someData.title);
}


sendApirequest2(url)
    .then(someData => {
        processData(someData);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
