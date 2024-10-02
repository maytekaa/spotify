import mongoose from 'mongoose';

export default async function conectaNaDb(){
    mongoose.connect("mongodb+srv://maytekasv:FHBV5XBXdlvJOP6Y@maytekaa.x2zyu.mongodb.net/Spotify?retryWrites=true&w=majority&appName=maytekaa")

    return mongoose.connection;
}

