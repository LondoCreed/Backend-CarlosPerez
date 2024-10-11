import { Schema, model } from "mongoose";
let collection = 'eventos'

let schema = new Schema({

    titulo: { type: String, required: true },
    descripcion: { type: String, required: true },
    fecha: { type: Date, required: true },
    ubicacion: { type: String, required: true },
    capacidad: { type: Number, required: true },
    precio: { type: Number, required: true },
    organizador: { type: String, required: true },
    tipoEvento: { type: String, required: true },
    esPublico: { type: Boolean, default: true },
    participantes: [{ type: String }],
    duracion: { type: Number, required: true } // en minutos
  
    

}, {
    timestamps: true
})

let Evento = model(collection, schema)

export default Evento;