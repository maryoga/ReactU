export const getImagen = async() => {

    try {

        const apiKey = 'q2aZwH7LWB1xM9uDBgYRaYyUg4UvD1dT x';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        // console.error(error)
        return 'Imagen not found';
    }    
}

 getImagen();



