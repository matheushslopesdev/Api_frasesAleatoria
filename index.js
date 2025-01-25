const express = require('express')
const app = express()

const frasesAleatorias = require('./module/frases');


app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));


// Api de Geração de Frases Aleatorias
app.get('/fraseAleatoria',(req,res)=>{
    res.json(frasesAleatorias())
})


// função de fetch API
async function apiFrases() {
    const fraseAleatoria = await fetch('http://localhost:3300/fraseAleatoria')
    const dados = await fraseAleatoria.json()
    return await dados
}



app.get('/frases',async (req,res)=>{
    try{
        const frasesApi = await apiFrases()
        res.render('frasesTexto', {frasesApi})
    }
    catch(erro){
        res.status(500).send("Erro ao carregar Frase")
    }
    
    
})




const PORT = process.env.PORT || 3300;
app.listen(PORT, () => {
    console.log("Servidor rodando em http://localhost:3300");
  });