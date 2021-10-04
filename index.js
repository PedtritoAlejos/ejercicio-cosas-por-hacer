
let listaTask = []

function taskAdd(){
    let name = document.getElementById("inputTarea").value;
    let id = listaTask.length + 1;
    
    if (listaTask.length > 0){
        let maxId =  listaTask.reduce((prev, current) => (prev.id > current.id) ? prev : current) 
        id = maxId.id + 1
        console.log(id);
    }
    
    let task = { 'id':id, 'active':true,'what':name}

    listaTask.push(task);
    // para limpiar el input 
    document.getElementById("inputTarea").value = "";
    listTaskHTML();
}
function resumen(){
    let contentHTML = document.getElementById("contenedor");
    let total = listaTask.length;
    let inactivo = 0; 
    let activo = 0;

    listaTask.forEach(task => {
        if(task.active){
            activo = activo + 1
        }else{
            inactivo = inactivo +1;
        }
    });
    let description = total + " items en total,"+activo+" actives "+inactivo+" inactives";
    let resumen = document.createElement('p');
    var newtext = document.createTextNode(description);
    resumen.appendChild(newtext);
    resumen.setAttribute("class","resumen")
    contentHTML.appendChild(resumen);
}
function changeActive(e){
   
    let id = e.target.id

    for (let index = 0; index < listaTask.length; index++) {
        
        if(listaTask[index].id == id){
            listaTask[index].active =  !listaTask[index].active ;
        }
    }

    listTaskHTML();

}
function cleanInactive(){
    var temp = []
    
    listaTask.forEach(task => {
        if(task.active){
            temp.push(task);
        }

    });
    listaTask = temp;
    listTaskHTML();
}
function showActiveInactiveOnly(isShowActive){
    var temp = []
    
    listaTask.forEach(task => {
        if( task.active == isShowActive){
            temp.push(task);
        }

    });
    
    let contentHTML = document.getElementById("contenedor");
    contentHTML.innerHTML= "";

    temp.forEach(task => {

        let p = document.createElement('p')
        var newtext = document.createTextNode(task.what);
        
        p.setAttribute("id",task.id);
        p.setAttribute("active",task.active);
        p.setAttribute("class",task.active ? "activa" : "inactiva");
        p.appendChild(newtext);
        p.addEventListener('click',changeActive);

        contentHTML.appendChild(p);

    });

    resumen();
}

function listTaskHTML(){

    let contentHTML = document.getElementById("contenedor");
    contentHTML.innerHTML= "";

    listaTask.forEach(task => {

        let p = document.createElement('p')
        var newtext = document.createTextNode(task.what);
        
        p.setAttribute("id",task.id);
        p.setAttribute("active",task.active);
        p.setAttribute("class",task.active ? "activa" : "inactiva");
        p.appendChild(newtext);
        p.addEventListener('click',changeActive);

        contentHTML.appendChild(p);

    });

    resumen();
}