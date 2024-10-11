import { Schema, model } from "mongoose";
let collection = 'productos'

let schema = new Schema({

    nombre: { type: String, required: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: { type: String, required: true },
    enStock: { type: Boolean, default: true },
    cantidadDisponible: { type: Number, required: true },
    fechaCreacion: { type: Date, default: Date.now },
    fabricante: { type: String, required: true },
    peso: { type: Number, required: true },
    dimensiones: {
        largo: { type: Number, required: true },
        ancho: { type: Number, required: true },
        alto: { type: Number, required: true }
    }

}, {
    timestamps: true
})

let Producto = model(collection, schema)

export default Producto;