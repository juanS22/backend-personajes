"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
const mongoose_1 = require("mongoose");
const personajeSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es requerido']
    },
    rango: {
        type: String
    },
    ladoDeLaFuerza: {
        type: String
    },
    imagen: {
        type: String,
        require: [true, 'La imagen es requerida']
    }
});
exports.Personaje = (0, mongoose_1.model)('Personaje', personajeSchema);
