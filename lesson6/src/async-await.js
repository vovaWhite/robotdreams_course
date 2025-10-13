const secondURL = 'https://jsonplaceholder.typicode.com/posts/1';

async function callAnAPI(requestUrl) {
    try {
        console.log('I am sending the API request...');
        const response = await fetch(requestUrl);
        if (!response.ok) {
            throw new Error('Sorry, unable to proceed your request');
        }
        const data = await response.json();
        console.log(`Data received: ${data}`);
        return data;
    } catch (error) {
        console.log(`Error occured: ${error.message} `);
        throw error;
    }
}

function proceedMyJsonData(myJsonData) {
    console.log('Here is my JSON: ', myJsonData);
    console.log('Here is title: ', myJsonData.title);
    console.log('ID: ', myJsonData.id);
}

(async () => {
    try {
        const data = await callAnAPI(secondURL);
        proceedMyJsonData(data);
    } catch (error) {
        console.log(`Some error occurred: ${error}`);
        throw error;
    }
}) ();
