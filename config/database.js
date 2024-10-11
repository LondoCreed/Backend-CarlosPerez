import mongoose from "mongoose";

let url = process.env.URI_MONGO;

console.log(url);

/* mongoose.connect(url)
.then(() =>  console.log("Conectado a MongoDB") )
.catch(error => console.log(error)) */

async function coneccionBaseDeDatos() {

    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log("base conectada");
    
    }catch(error) {
        console.log(error);
    }
}

coneccionBaseDeDatos();

