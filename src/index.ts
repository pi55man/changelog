import app from './server'

const port = 8080
app.listen(port,()=>{
        console.log(`listening on http://localhost:${port}`);
})
