const apiKey = "43c2de26195ae70408ccea7c7a6e1683";
const ciudad = 'Buenos Aires, ar';
const apiurl = 'http://api.openweathermap.org/data/2.5/weather?q=Buenos Aires, ar&appid=43c2de26195ae70408ccea7c7a6e1683'
//const apiurl = 'http://api.openweathermap.org/data/2.5/weather?q={ciudad}&appid={apiKey}'
async function datosCiudad() {
try{
    const response = await fetch (apiurl)
    const data = await response.json()
    console.log("Data de la Api:", data);
   document.getElementById("temp").innerHTML = (data.main.temp-273.5).toFixed(2);
   document.getElementById("ciudad").innerHTML = data["name"];
   const tiempo =data.dt*1000;
   const fec_hor= new Date(tiempo);
   const dia = fec_hor.toLocaleDateString();
   const hora = fec_hor.toLocaleTimeString();
   document.getElementById("dia").innerHTML = dia;
   document.getElementById("hora").innerHTML = hora;
}
catch(error) {console.log('Ocurrió un error grave', error)}
}
datosCiudad()