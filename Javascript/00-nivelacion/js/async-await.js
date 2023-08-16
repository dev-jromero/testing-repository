const peticion = () => {
    setTimeout(() => {
     const datos = {
        "id": 3,
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
     }
     
     console.log(datos);
    
    }, 1000);
};

peticion();






// const saludo = async () => {
//     return "Hola Mundo";    
// };

// saludo().then((response) => console.log(response));