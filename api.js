const express = require ("express")
const app = express()
app.use (express.urlencoded({extended:false}))
app.use(express.json());



class Profesional {
    
     constructor(name, age, gnere,isRetired,
        nacionality, oscarsNumber,profession,id)
        {
            this.name= name;
            this.age= age;
            this.gnere= gnere;
            this.isRetired = isRetired;
            this.nacionality = nacionality;
            this.oscarsNumber = oscarsNumber;
            this.profession = profession;
            this.id= id;

        }
    }
let profesional= new Profesional();
profesional=null;

//crear un nuevo profesional
app.post("/profesional", function(request,response)
{
    let respuesta;
    console.log(request.body)

    if (usuario === null){
        profesional={ nombre: request.body.nombre1,
                    age:request.body.edad1,
                    gnere: request.body.genero1,
                    isRetired: request.body.retirado1,
                    nacionality: request.body.nacionalidad1,
                    oscarNumber: request.body.oscar1,
                    profession:request.body.profession1,
                    id:request.body.id1,
        

        }
        respuesta={ error:false, codigo:200,
                    mensaje:"profesional creado", resultado:profesional}
    }
    else 
    respuesta= {error:true, codigo:200,
        mensaje:"profesional ya existe", resultado:null};
    response.send(respuesta);
})
//modificar usuario
app.put("/profesional", function(request,response){
    let respuesta;
    if (profesional!= null){
        profesional={ nombre: request.body.nombre1,
                    age:request.body.edad1,
                    gnere: request.body.genero1,
                    isRetired: request.body.retirado1,
                    nacionality: request.body.nacionalidad1,
                    oscarNumber: request.body.oscar1,
                    profession:request.body.profession1,
                    id:request.body.id1
        

                    }
        respuesta={ error:false, codigo:200,
                    mensaje:"profesional actualizado", resultado:profesional}
    }
    else 
    respuesta= {error:true, codigo:200,
        mensaje:"profesional no existe", resultado:profesional};
    response.send(respuesta);

});

//borrar profesional
app.delete("/profesional", function(request,response){
    let respuesta;
    if (profesional != null){
        profesional= null
        respuesta = { error:false, codigo:200,
            mensaje:"profesional borrado", resultado:profesional}

        } 
    else 
    respuesta ={ error:true, codigo:200,
        mensaje:"el profesional no exite", resultado:profesional}
    response.send(respuesta)
});

//obtener informacion profesional

app.get("/profesional", function(request,response){
    let name = request.query.name 
    let respuesta;
    if (profesional != null && (!name || name === profesional.nombre))
        respuesta.profesional
    else 
    respuesta ={error:true, codigo:200, mensaje: "el profesional no existe"}
    response.send(respuesta)

})

//PROFESIONALES

let profesionales = new Array()
profesionales= null
//Añadir profesional
app.post("/profesionales", function(request,response)
{
    let respuesta;
    console.log(request.body)

    for (let i=0;i<profesionales.length;i++){

        if (profesionales[i].profesional == null){
           
            profesionales.push(profesional);           
            respuesta={ error:false, codigo:200,
                         mensaje:"profesional añadido", resultado:profesional}
        }

        else 
        respuesta= {error:true, codigo:200,
                    mensaje:"profesional ya existe", resultado:null};
    response.send(respuesta);
}
    
})

//Modificar profesional
app.put("/profesionales", function(request,response){
    let respuesta;
    for (let i=0;i<profesionales.length;i++){
        if (profesional != profesionales[i]){
            profesionales.push(profesional);
            respuesta={ error:false, codigo:200,
                    mensaje:"profesional actualizado", resultado:profesional}
        }
        else 
        respuesta= {error:true, codigo:200,
                    mensaje:"profesional no existe", resultado:profesional};
    
    }
        response.send(respuesta);
});

//Borrar profesional
app.delete("/profesionales", function(request,response){
    let respuesta;
    for (let i=0;i<profesionales.length;i++){
        if (profesional != profesionales[i]){
            profesional= null
            respuesta = { error:false, codigo:200,
                    mensaje:"profesional borrado", resultado:profesional}

        } 
        else 
            respuesta ={ error:true, codigo:200,
                         mensaje:"el profesional no exite", resultado:profesional}
    }
    response.send(respuesta)
});

app.get("/profesionales", function(request,response){
    let id = request.query.id 
    let respuesta;
    for (let i=0; i<profesionales.length; i++){
        if (profesional == profesionales[i] && (!id || id === profesional.id))
            respuesta.profesional
        else 
        respuesta ={error:true, codigo:200, mensaje: "el profesional no existe"}
    }

    response.send(respuesta);

});
//id
app.get("/profesionales", function(request,response){
    let id = request.query.id 
    let respuesta;
    for (let i=0; i<profesionales.length;i++){
    if (profesional == profesionales[i] && (!id || id === profesional.id))
        respuesta.profesional
    else 
    respuesta ={error:true, codigo:200, mensaje: "el profesional no existe"}
    }
    response.send(respuesta)

})
//Mostrar profesionales en general
app.get("/profesional", function(request,response){
    let name = request.query.name 
    let respuesta;
    for (let i=0; i<profesionales.length;i++){
        if (profesionales[i] != null && (!name || name === profesionales[i]))
            respuesta.profesional
        else 
        respuesta ={error:true, codigo:200, mensaje: "el profesional no existe"}
    }
    response.send(respuesta)

})


app.listen(3000);