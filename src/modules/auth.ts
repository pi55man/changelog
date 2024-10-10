import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config(); //looks for .env file in directory

export const createJWT = (user) =>{
        const token = jwt.sign({
                id: user.id, 
                username: user.username
                },
                process.env.JWT_SECRET
        )
        return token;
}

export const protect = (req, res, next) => {
        const bearer = req.headers.authorization;
        if(!bearer){
                res.status(401);
                res.json({message: "no bearer"});
                return;
        }
        const [, token] = bearer.split(" ");
        if(!token){
                res.status(401);
                res.json({message: "no valid token"});
                return;
        }

        try{
                const user = jwt.verify(token, process.env.JWT_SECRET);
                req.user = user;
                next();
        }
        catch(e){
                res.status(401);
                res.json({message: `error ${e}`});
                console.log(e);
                return;
        }
}


export const comparePasswords = (password, hash) => {
        console.log("in comparepasswords, ", password)
        return bcrypt.compare(password, hash);
}

export const hashPassword = (password) =>{
        if(password){
                return bcrypt.hash(password,5);
        }
       
}
