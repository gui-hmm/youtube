import { pool } from "../../../mysql";
import { v4 as uuidv4 } from "uuid"
import { hash, compare } from "bcrypt";
import { sign, verify } from "jsonwebtoken";
import { Request, Response } from "express";

class UserRepository {
    create(request: Request, response: Response){
        const {name, email, password} = request.body;
        pool.getConnection((err: any, connection:any) => {
            hash(password, 10, (err, hash) => {
                if(err){
                    return response.status(500).json({message: 'erro na geração da criptografia', err});
                };
    
                connection.query(
                    'INSERT INTO user (user_id, name, email, password) VALUES (?,?,?,?)',
                    [uuidv4(), name, email, hash],
                    (error: any, results: any, fileds: any) => {
                        connection.release();
                        if (error){
                            return response.status(400).json(error);
                        }
                        response.status(200).json({message: 'usuario criado com sucesso'});
                    }
                );
            });
        })
    }

    login(request: Request, response: Response) {
        const { email, password } = request.body;
        pool.getConnection((err: any, connection: any) => {
            if (err) {
                return response.status(500).json({ error: 'Erro ao obter conexão com o banco de dados' });
            }
            connection.query(
                'SELECT * FROM user WHERE email = ?',
                [email],
                (error: any, results: any) => {
                    connection.release();
                    if (error) {
                        return response.status(400).json({ error: 'Erro na consulta ao banco de dados' });
                    }
                    if (results.length === 0) {
                        return response.status(401).json({ error: 'Usuário não encontrado' });
                    }
                    compare(password, results[0].password, (err: any, result: boolean) => {
                        if (err) {
                            return response.status(400).json({ error: 'Erro na comparação de senha' });
                        }
                        if (result) {
                            const token = sign({
                                id: results[0].user_id,
                                email: results[0].email
                            }, process.env.SECRET as string, { expiresIn: '1D' });
                            return response.status(200).json({ 
                                token, 
                                user_id: results[0].user_id, 
                                message: 'Usuário conectado com sucesso' });
                        } else {
                            return response.status(401).json({ error: 'Senha incorreta' });
                        }
                    });
                }
            );
        });
    }
    

    getUser(request: any, response: any){
        const decode: any = verify(request.headers.authorization, process.env.SECRET as string);
        if(decode.email){
            pool.getConnection((error, conn) => {
                conn.query(
                    'SELECT * FROM user WHERE email = ?',
                    [decode.email],
                    (error, resultado, fields) => {
                        conn.release();
                        if(error){
                            return response.status(400).send({
                                error: error,
                                reponse: null
                            })
                        }

                        return response.status(201).send({
                            user: {
                                nome: resultado[0].name,
                                email: resultado[0].email,
                                id: resultado[0].user_id,
                            }
                        })
                    }
                )
            })
        }
    }


}

export {UserRepository};