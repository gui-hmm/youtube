import express, { Router } from "express";
import { VideosRepository } from "../modules/videos/repositories/VideosRepository";
import { login } from "../middleware/login";

const videosRoutes = Router();
const videosRepository = new VideosRepository();

videosRoutes.post('/create-video', login, (request, response) => {
    videosRepository.create(request, response);
});

videosRoutes.get('/get-video', login, (request, response) => {
    videosRepository.getVideos(request, response);
});

videosRoutes.get('/search-video', (request, response) => {
    videosRepository.searchVideos(request, response);
});

export {videosRoutes};
