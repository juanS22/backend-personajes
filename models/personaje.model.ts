import { Document, model, Schema } from "mongoose";


const personajeSchema = new Schema({
    nombre:{
        type : String,
        require : [true,'El nombre es requerido']
    },
    rango:{
        type : String
    },
    ladoDeLaFuerza:{
        type : String
    },
    imagen:{
        type : String,
        require : [true,'La imagen es requerida']
    }
});

interface IPersonaje extends Document{
    nombre:string;
    rango:string;
    ladoDeLaFuerza:string;
    imagen:string;
}

export const Personaje = model<IPersonaje>('Personaje',personajeSchema);