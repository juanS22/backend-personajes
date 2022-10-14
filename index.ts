import bodyParser from "body-parser";
import mongoose from "mongoose";
import Server from "./classes/server";
import defaultRoutes from "./routes/default.routes";
import personajeRoutes from "./routes/personaje.routes";

const server = new Server();

server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({extended:true}));

server.app.use('/',defaultRoutes);
server.app.use('/personajes',personajeRoutes);

mongoose.connect('mongodb+srv://starw_personajes:88Daniela@cluster0.1krx3ig.mongodb.net/starWarsDb',(error)=>{
    if(error){
        throw error;
    }

    console.log('Base de datos online');
})

server.Start(()=>{
    console.log(`Servidor corriendo en puerto ${server.port}`);
})