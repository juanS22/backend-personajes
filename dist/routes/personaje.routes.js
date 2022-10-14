"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const personaje_model_1 = require("../models/personaje.model");
const personajeRoutes = (0, express_1.Router)();
personajeRoutes.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const personajes = yield personaje_model_1.Personaje.find();
    return res.json({
        ok: true,
        personajes
    });
}));
personajeRoutes.get('/paging', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let perPage = 5;
    let page = Number(req.query.page) || 1;
    let skip = page - 1;
    skip = skip * perPage;
    const personajes = yield personaje_model_1.Personaje.find().skip(skip).limit(perPage);
    return res.json({
        ok: true,
        personajes
    });
}));
personajeRoutes.post('/', (req, res) => {
    const body = req.body;
    const personaje = {
        nombre: body.nombre,
        rango: body.rango,
        ladoDeLaFuerza: body.ladoDeLaFuerza,
        imagen: body.imagen
    };
    personaje_model_1.Personaje.create(personaje).then(personajeDb => {
        return res.json({
            ok: true,
            personajeDb
        });
    }).catch(err => {
        return res.json({
            ok: false,
            err
        });
    });
});
personajeRoutes.put('/:id', (req, res) => {
    const personajeId = req.params.id;
    const body = req.body;
    const personaje = {
        nombre: body.nombre,
        rango: body.rango,
        ladoDeLaFuerza: body.ladoDeLaFuerza,
        imagen: body.imagen
    };
    personaje_model_1.Personaje.findByIdAndUpdate(personajeId, personaje).then(personajeDb => {
        return res.json({
            ok: true,
            personajeDb
        });
    });
});
personajeRoutes.delete('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const personajeId = req.query.id;
    if (!personajeId) {
        return res.json({
            ok: false,
            msj: "El registro solicitado no existe"
        });
    }
    personaje_model_1.Personaje.findByIdAndDelete(personajeId).then(personaje => {
        return res.json({
            ok: true,
            msj: "Eliminado correctamente"
        });
    }).catch(err => {
        return res.json({
            ok: false,
            msj: "El registro solicitado no existe"
        });
    });
}));
exports.default = personajeRoutes;
