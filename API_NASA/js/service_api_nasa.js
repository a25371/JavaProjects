const apiKey = 'ZbepjwKKdyvi0Wkjf8CZyaQAB4kQC2c0Y0baGTtG';
const sol = 1000; // El número de sol que deseas consultar

// URL del API de la NASA
const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${apiKey}`;

// Realizar una solicitud GET utilizando Fetch API
fetch(apiUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Error en la solicitud al API');
    }
    return response.json();
  })
  .then((data) => {
    // Los datos de las fotos se encuentran en el objeto 'data'
    console.log(data);
    console.log();
    console.log(data.photos[0].camera.full_name);
    console.log(data.photos[0].earth_date);
    console.log(data.photos[0].rover.name);

    //    // Aquí puedes procesar los datos o mostrar las imágenes en tu aplicación
    //    // FOR 0 A N-1
    //    // Y PINTAR 50 IMÁGENES DEL API
    var divImg = document.getElementById("container");
    var cad = "";
    for (var contador = 0; contador < 50; contador++) {
      cad +=  '<div class="rover-photo">';
      cad +=    '<img id="imagenRover" src="' + data.photos[contador].img_src + '" alt="Mars Rover Photo">';
      cad +=    '<p>Earth Date: ' + data.photos[contador].earth_date + '</p>';
      cad +=  '</div>';
      cad +=  '<div class="rover-details">';
      cad +=    '<p>Camera: ' + data.photos[contador].camera.full_name + '</p>';
      cad +=    '<p>Rover Name: ' + data.photos[contador].rover.name + '</p>';
      cad +=  '</div>';
      cad +=  '<hr>';
    };
    divImg.innerHTML = cad;
  })
  .catch((error) => {
    console.error('Ocurrió un error:', error);
  });