import { pool } from "../../../mysql";
import { v4 as uuidv4 } from "uuid"
import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { Request, Response } from "express";

class VideosRepository {
    create(request: Request, response: Response){
        const {user_id, title, description, channel, views, url} = request.body;
        pool.getConnection((err: any, connection:any) => {
            if (err) {
                return response.status(500).json({ error: 'Problema na conexão' });
            }
            connection.query(
                'INSERT INTO videos (videos_id, user_id, title, description, channel, views, time, url) VALUES (?,?,?,?,?,?,NOW(), ?)',
                [uuidv4(), user_id, title, description, channel, views, url],
                (error: any, result: any, fileds: any) => {
                    connection.release();
                    if (error){
                        console.error('Erro ao inserir vídeo:', error);
                        return response.status(400).json({error, message: 'problema na conexão'});
                    }
                    response.status(200).json({message: 'video criado com sucesso'});
                }
            );
        })
    }

    getAllVideos(request: Request, response: Response){
        pool.getConnection((err: any, connection:any) => {
            connection.query(
                'SELECT * FROM videos',
                (error: any, result: any, fileds: any) => {
                    connection.release();
                    if (error){
                        return response.status(400).json({error: "erro ao buscar videos"});
                    }
                    
                    return response.status(200).json({message: 'videos exibidos com sucesso', videos: result})
                }
            )
        })
    }

    getVideos(request: Request, response: Response){
        const {user_id} = request.body;
        pool.getConnection((err: any, connection:any) => {
            connection.query(
                'SELECT * FROM videos WHERE user_id = ?',
                [user_id],
                (error: any, result: any, fileds: any) => {
                    connection.release();
                    if (error){
                        return response.status(400).json({error: "erro ao buscar videos"});
                    }
                    
                    return response.status(200).json({message: 'videos exibidos com sucesso', videos: result})
                }
            )
        })
    }

    searchVideos(request: Request, response: Response){
        const { search } = request.query;
        pool.getConnection((err: any, connection:any) => {
            connection.query(
                'SELECT * FROM videos WHERE title LIKE ?',
                [`%${search}%`],
                (error: any, result: any, fileds: any) => {
                    connection.release();
                    if (error){
                        return response.status(400).json({error: "erro ao buscar videos"});
                    }
                    
                    return response.status(200).json({message: 'videos exibidos com sucesso', videos: result})
                }
            )
        })
    }
    

}

export {VideosRepository};