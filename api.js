const express = require ("express")
const app = express()
const cors = require ("cors")

app.use(cors())
app.use (express.urlencoded({extended:false}))
app.use(express.json());



class Profesional {
    
     constructor(name, age, gnere,isRetired,
        nacionality, oscarsNumber,profession)
        {
            this.name= name;
            this.age= age;
            this.gnere= gnere;
            this.isRetired = isRetired;
            this.nacionality = nacionality;
            this.oscarsNumber = oscarsNumber;
            this.profession = profession;

        }
    }



let profesional1=new Profesional ("Pepe",23,"M",true,"español", 23, "guionista")
let profesional2=new Profesional ("Cariol",23,"F",true,"española", 45, "guionista")
let profesionales = [profesional1,profesional2]

app.get ("/profesionales", function(request,response){
    let respuesta 
    let id = request.query.id
    if((id != null)&& (profesionales.length!=0))
        respuesta= profesionales[id]
    
    else if (id== null && profesionales.length!=0)
        respuesta=profesionales
    else
    respuesta ={error:true, codigo:200, mensaje: "el profesional no existe"}
    response.send(respuesta)

})
app.post("/profesionales", function(request,response){
    let respuesta;
    let name= request.body.name;
    let age=request.body.age;
    let isRetired=request.body.isRetired;
    let nacionality=request.body.nacionality;
    let oscarsNumber=request.body.oscarsNumber;
    let profession=request.body.profession;
    let profesional = new Profesional(name, age, isRetired, nacionality, oscarsNumber, profession)

    profesionales.push(profesional);
    respuesta= {error: false, codigo: 200, mensaje: "se ha añadido un profesional nuevo", resultado:profesional }
    response.send(respuesta);
});

app.put("/profesionales", function(request,response){
    let respuesta;
    let id = request.body.id
    if (id!=null && profesionales.length!=0)
    {
        profesionales.id.name= nombre
        profesionales.id.age= age
        profesionales.id.isRetired= isRetired
        profesionales.id.nacionality= nacionality
        profesionales.id.oscarNumber= oscarNumber
        profesionales.id.profession= profession
        
        respuesta= {error: false, codigo: 200, mensaje: "se han realizado cambios", resultado:profesional }
        
    }
   
    else 
    respuesta={error: false, codigo: 200, mensaje: "el profesional no existe", resultado:profesional }

response.send(respuesta);
})

// app.delete("/profesionales", function(request,response){
//     let respuesta;
//     let id = request.body.id
//     if (id!=null && profesionales.length!=0){
//         respuesta= profesionales.splice(id)
//     }
//     else 
//     respuesta={error: false, codigo: 200, mensaje: "el profesional no existe", resultado:profesional }

// response.send(respuesta);
// })

app.listen(3000);