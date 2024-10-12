import {Router} from "express";
import {body, oneOf, validationResult} from 'express-validator';
import { handleInputErrors } from "./modules/middleware";
import { createProduct, deleteProduct, getOneProduct, getProducts } from "./handlers/product";
const router = Router();

router.get('/product',getProducts)
router.get('/product/:id',getOneProduct)

router.put('/product/:id', 
           body("name").isString(),
           handleInputErrors,
           (req, res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
                res.status(400);
                res.json({errors: errors.array()})
                return;
        }
        res.json({message: "no errors"})
        
});

router.post('/product',
            body("name").isString(),
            handleInputErrors,
            createProduct
           )

router.delete('/product/:id',deleteProduct)

/*
        UPDATES 
*/

router.get('/update',(req, res)=>{

});

router.get('/update/:id',(req, res)=>{

});
router.put('/update/:id',
           body("title").optional(),
           body("body").optional(),
           body("status").isIn(['IN_PROGRESS',"DEPRECATED","SHIPPED"]),
           body("version").optional(),
(req, res)=>{

});
router.post('/update',
           body("title").exists().isString(),
           body("body").exists().isString(),
   (req, res)=>{

});
router.delete('/update/:id',(req, res)=>{

});

/*
        UPDATE POINT
*/

router.get('/updatepoint',(req, res)=>{

});
router.get('/updatepoint/:id',(req, res)=>{

});
router.put('/updatepoint/:id',
           body("name").optional().isString(),
           body("description").optional().isString(),
           (req, res)=>{
});
router.post('/updatepoint',
            body("name").isString(),
            body("description").isString(),
            body("updateId").exists().isString(),
            (req, res)=>{

});
router.delete('/updatepoint/:id',(req, res)=>{

});

export default router;
