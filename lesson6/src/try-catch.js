const nonExistUrl = 'https://jsonplaceholder.typicode.com/does-not-exist';
const fallBackUrl = 'https://jsonplaceholder.typicode.com/todos/1';

async function sendApiRequest(firstUrl, fallBackUrl) {
    try {
        console.log('Sending request to first URL', firstUrl);
        const response = await fetch(firstUrl);
        console.log('Primary got a response with status:', response.status, 'ok:', response.ok);
        if (!response.ok) {
            throw new Error(`Sorry, something went wrong, ${response.status}`);
        }
        const data = await response.json();
        console.log('The first API call is successful');
        return data;
    } catch (error) {
        try {
            console.log('Sending 2nd request', fallBackUrl);
            const secondData = await fetch(fallBackUrl);
            console.log('Second request got a response with status', secondData.status, 'ok:', secondData.ok);
            if (!secondData.ok) {
                throw new Error('Both requests failed.');
            }
            const secondJson = await secondData.json();
            return secondJson;
        } catch (fallBackError) {
            throw new Error(`Both requests failed: ${error.message} | ${fallBackError.message}`);
        }
    }
}

(async () => {
    try {
        const data = await sendApiRequest(nonExistUrl, fallBackUrl);
        console.log('Result', data);
    } catch (error) {
        console.log(error);
    }
})();
