import express, { Router } from "express";
import { VideosRepository } from "../modules/videos/repositories/VideosRepository";
import { login } from "../middleware/login";

const videosRoutes = Router();
const videosRepository = new VideosRepository();

videosRoutes.post('/create-video', (request, response) => {
    videosRepository.create(request, response);
});

videosRoutes.get('/', (request, response) => {
    videosRepository.getAllVideos(request, response);
});

videosRoutes.get('/get-video', login, (request, response) => {
    videosRepository.getVideos(request, response);
});

videosRoutes.get('/search', (request, response) => {
    videosRepository.searchVideos(request, response);
});

export {videosRoutes};
