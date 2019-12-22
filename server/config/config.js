//Se inician todos al comenzar la app
//Puerto ---------------------------
process.env.PORT = process.env.PORT || 3000;

//Entorno ---------------------------
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Vencimiento del Token ---------------------------
//60 segundos
//60 segundos 
//24 horas
//30 días
process.env.CADUCIDAD_TOKEN = 60*60*24*30;

//SEED de autenticación ---------------------------
process.env.SEED = process.env.SEED || 'secret-seed-desarrollo';

//Base de datos ---------------------------
let urlDB;
if (process.env.NODE_ENV === 'dev'){
   urlDB = 'mongodb://localhost:27017/cafe';
}else {
    urlDB = process.env.MONGO_URI
    //mongodb+srv://kayak:kNeEjJWXHU4H4uYD@cluster0-4hz29.mongodb.net/cafe
}
process.env.URLDB = urlDB;

//GOOLE CLIENT_ID ---------------------------
process.env.CLIENT_ID = process.env.CLIENT_ID || '126837134573-n9qjagpdfbp4l7lgc42hcg6cqk78katc.apps.googleusercontent.com';



