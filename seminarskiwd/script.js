const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

async function catchJson(){
    const response = await fetch('https://ptf-web-dizajn-2022.azurewebsites.net/books');
    const food = await response.json();
    
    food.forEach(Book => {
        // Create a div with a card class
        const card = document.createElement('div')
        card.setAttribute('class', 'card')

        //Create an h1 and set the text content to the film's title
        const h1 = document.createElement('h1')
        h1.textContent = Book.name;

        const image = document.createElement('img');
        image.src = Book.image;
  
        const p = document.createElement('p');
        p.textContent = Book.author.name;

        //Append the cards to the container element
        container.appendChild(card);

        // Each card will contain an h1 and a p element
        card.appendChild(h1);
        card.appendChild(image);
        card.appendChild(p)
        });
}


fetch('https://ptf-web-dizajn-2022.azurewebsites.net/books', {

    method: "POST",
     
    body: JSON.stringify({
        "id": "string",
    	"name": "string",
        "genre": "string",
        "image": "string",
        "author": {"id": "string", "name": "string"}
    }),
     
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})

.then(json => console.log(json));


fetch('https://ptf-web-dizajn-2022.azurewebsites.net/books', {

    method: "PUT",
     
    body: JSON.stringify({
        "id": "string",
    	"name": "string",
        "genre": "string",
        "image": "string",
        "author": {"id": "string", "name": "string"}
    }),
     
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})

.then(json => console.log(json));


const deleteData = async ( ) =>{
    const response = await fetch('https://ptf-web-dizajn-2022.azurewebsites.net/books', {
        method: 'DELETE', 
        body: JSON.stringify({
            "id": "integer"
        }),
         
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
  
    console.log(json);
 };
 deleteData( );

catchJson();