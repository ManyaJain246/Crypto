import app from "./index.js";

app.listen(process.env.PORT, ()=>{
    console.log(`Server listening at Port ${process.env.PORT}`)
})