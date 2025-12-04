const url = 'https://petstore.swagger.io/v2/pet/12';

interface Category{
    id?: number;
    name?: string;
};
interface Tag{
    id?: number;
    name?: string;
};
interface Pet {
    id?: number;
    category?: Category;
    name?: string;
    photoUrls?: string[];
    tags?: Tag[];
    status?: string;
};
//fetch Petstore:
async function getUser(): Promise<Pet>{
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Error: Something went wrong, ${response.status}`);

    }
    const data = await response.json();
    return data;
}
// .then+catch
getUser()
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Fetch Error', error);
    });

