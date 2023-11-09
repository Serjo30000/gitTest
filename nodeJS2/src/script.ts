let kk=0;
let arrFilms:Array<ObjFilm>=JSON.parse(localStorage.getItem("arrFilmss")||'[]');;
let nameUser= localStorage.getItem("login");

function addName(){
    localStorage.setItem("arrFilmss",JSON.stringify(arrFilms));
    let element1: HTMLInputElement = document.getElementById('textReg') as HTMLInputElement;
    if (element1.value!=""){
        let element2: HTMLInputElement = document.getElementById('textReg') as HTMLInputElement;
        nameUser=element2.value;
        localStorage.setItem("login",nameUser);
    }
    setName();
}
function setName(){
    kk++;
    let element1: HTMLInputElement = document.getElementById('account') as HTMLInputElement;
    element1.innerHTML = "Пользователь: "+nameUser;
    if (nameUser!=""){
        alert("Добро пожаловать "+nameUser);
        arrFilms=JSON.parse(localStorage.getItem("arrFilmss")||'[]');
        if (kk==1){
            for (let i=0;i<arrFilms.length;i++){
                const dv=document.getElementById("createObject");
                let arr1=arrFilms[i].pr14.toString().split('\\');
                let str1="dest/assets/images/"+arr1[arr1.length-1];
                if (str1=="dest/assets/images/"){
                    str1="dest/assets/images/postDefault.png";
                }
                let dvv="<div class='container_content_list_elem' id"+"=idFilm"+arrFilms[i].pr15+"><div class='container_content_list_elem_name'><div class='container_content_list_elem_name_text'>"+arrFilms[i].pr1+"</div><input class='container_content_list_elem_name_delete' type='button' "+"onClick='delFilmInList("+arrFilms[i].pr15+")'"+" value='Удалить' placeholder='Удалить' required/>  </div><div class='container_content_list_elem_cont'><img alt='Poster' class='container_content_list_elem_cont_img' src='"+str1+"'></div><div class='container_content_list_elem_re'>Рейтинг возраста: "+arrFilms[i].pr11+"</div><div class='container_content_list_elem_co'>Страна: "+arrFilms[i].pr2+"</div><div class='container_content_list_elem_dt'>Дата выхода: "+arrFilms[i].pr13+"</div><div class='container_content_list_elem_button'><input "+"onClick='viewFilmInList("+arrFilms[i].pr15+")'"+" class='container_content_list_elem_but' type='button' value='Перейти' placeholder='Перейти' required/>  </div></div>";
        
                if (dv!=null){
                    dv.insertAdjacentHTML('afterend', dvv);
                }
            }
        }
    }
    else{
        alert("Введите не пустое значение");
    }
}
window.onload = setName;
interface ObjFilmable {
    pr1:string,
    pr2:string,
    pr3:string,
    pr4:string,
    pr5:string,
    pr6:string,
    pr7:string,
    pr8:string,
    pr9:number|string,
    pr10:number|string,
    pr11:number|string,
    pr12:number|string,
    pr13:Date|string,
    pr14:File|string,
    pr15:number,
    pr16:Array<ComFilm>
}
class ObjFilm implements ObjFilmable{
    pr1:string
    pr2:string
    pr3:string
    pr4:string
    pr5:string
    pr6:string
    pr7:string
    pr8:string
    pr9:number|string
    pr10:number|string
    pr11:number|string
    pr12:number|string
    pr13:Date|string
    pr14:File|string
    pr15:number
    pr16:Array<ComFilm>
    constructor(pr1:string,pr2:string,pr3:string,pr4:string,pr5:string,pr6:string,pr7:string,pr8:string,pr9:number|string,pr10:number|string,pr11:number|string,pr12:number|string,pr13:Date|string,pr14:File|string,pr15:number,pr16:Array<ComFilm>) {
        this.pr1 = pr1;
        this.pr2 = pr2;
        this.pr3 = pr3;
        this.pr4 = pr4;
        this.pr5 = pr5;
        this.pr6 = pr6;
        this.pr7 = pr7;
        this.pr8 = pr8;
        this.pr9 = pr9;
        this.pr10 = pr10;
        this.pr11 = pr11;
        this.pr12 = pr12;
        this.pr13 = pr13;
        this.pr14 = pr14;
        this.pr15 = pr15;
        this.pr16 = pr16;
    }
}

interface ComFilmable {
    cf1:string,
    cf2:string|number,
    cf3:string,
    cf4:number
}
class ComFilm implements ComFilmable{
    cf1:string
    cf2:string|number
    cf3:string
    cf4:number
    constructor(cf1:string,cf2:string|number,cf3:string,cf4:number){
        this.cf1 = cf1;
        this.cf2 = cf2;
        this.cf3 = cf3;
        this.cf4 = cf4;
    }
}

function addFilmInList(al1:string,al2:string,al3:string,al4:string,al5:string,al6:string,al7:string,al8:string,al9:number|string,al10:number|string,al11:number|string,al12:number|string,al13:Date|string,al14:File|string):void{
    if (al1=="" || al3=="" || al4=="" || al9=="" || al10=="" || al11=="" || al12=="" || al13==""){
        return ;
    }
    else{
        arrFilms.push(new ObjFilm(al1,al2,al3,al4,al5,al6,al7,al8,al9,al10,al11,al12,al13,al14,arrFilms.length,[]));
        const dv=document.getElementById("createObject");
        let mx=0;
        for (let i=0;i<arrFilms.length;i++){
            if (mx<=arrFilms[i].pr15){
                mx=arrFilms[i].pr15;
            }
        }
        let id1=mx+1;
        arrFilms[arrFilms.length-1].pr15=id1;
        let arr1=arrFilms[arrFilms.length-1].pr14.toString().split('\\');
        let str1="dest/assets/images/"+arr1[arr1.length-1];
        if (str1=="dest/assets/images/"){
            str1="dest/assets/images/postDefault.png";
        }

        let dvv="<div class='container_content_list_elem' id"+"=idFilm"+id1+"><div class='container_content_list_elem_name'><div class='container_content_list_elem_name_text'>"+arrFilms[arrFilms.length-1].pr1+"</div><input class='container_content_list_elem_name_delete' type='button' "+"onClick='delFilmInList("+id1+")'"+" value='Удалить' placeholder='Удалить' required/>  </div><div class='container_content_list_elem_cont'><img alt='Poster' class='container_content_list_elem_cont_img' src='"+str1+"'></div><div class='container_content_list_elem_re'>Рейтинг возраста: "+arrFilms[arrFilms.length-1].pr11+"</div><div class='container_content_list_elem_co'>Страна: "+arrFilms[arrFilms.length-1].pr2+"</div><div class='container_content_list_elem_dt'>Дата выхода: "+arrFilms[arrFilms.length-1].pr13+"</div><div class='container_content_list_elem_button'><input "+"onClick='viewFilmInList("+id1+")'"+" class='container_content_list_elem_but' type='button' value='Перейти' placeholder='Перейти' required/>  </div></div>";
  
        if (dv!=null){
            dv.insertAdjacentHTML('afterend', dvv);
        }
    }
    localStorage.setItem("arrFilmss",JSON.stringify(arrFilms));
}
function delFilmInList(iddel1:number):void{
    let element1: HTMLInputElement = document.getElementById("idFilm"+iddel1) as HTMLInputElement;
    let res1=prompt("Вы уверены, что хотите удалить этот кинофильм?","да");
    if (res1=="да"){
        element1.remove();
        let arrFilmsCopy:Array<ObjFilm>=[];
        for (let i=0;i<arrFilms.length;i++){
            arrFilmsCopy.push(arrFilms[i]);
        }
        arrFilms=[];
        for (let i=0;i<arrFilmsCopy.length;i++){
            if (arrFilmsCopy[i].pr15!=iddel1){
                arrFilms.push(arrFilmsCopy[i]);
            }
        }
    }
    localStorage.setItem("arrFilmss",JSON.stringify(arrFilms));
}
function viewFilmInList(iddel1:number):void{
    let element1: HTMLInputElement = document.getElementById("windowF") as HTMLInputElement;
    let element2: HTMLInputElement = document.getElementById("w1") as HTMLInputElement;
    let element3: HTMLInputElement = document.getElementById("windowFc") as HTMLInputElement;
    element3.id="comidFilm"+iddel1;
    element1.hidden=false;
    let af=new ObjFilm("","","","","","","","","","","","","","",0,[]);
    for (let i=0;i<arrFilms.length;i++){
        if (arrFilms[i].pr15==iddel1){
            af=arrFilms[i];
        }
    }
    if (af.pr1==""){
        element2.innerHTML="Название: отсутствует";
    }
    else{
        element2.innerHTML="Название: "+af.pr1;
    }
    element2=document.getElementById("w2")as HTMLInputElement;
    if (af.pr2==""){
        element2.innerHTML="Страна: отсутствует";
    }
    else{
        element2.innerHTML="Страна: "+af.pr2;
    }
    element2=document.getElementById("w3")as HTMLInputElement;
    if (af.pr3==""){
        element2.innerHTML="Жанр: отсутствует";
    }
    else{
        element2.innerHTML="Жанр: "+af.pr3;
    }
    element2=document.getElementById("w4")as HTMLInputElement;
    if (af.pr4==""){
        element2.innerHTML="Режиссёр: отсутствует";
    }
    else{
        element2.innerHTML="Режиссёр: "+af.pr4;
    }
    element2=document.getElementById("w5")as HTMLInputElement;
    if (af.pr5==""){
        element2.innerHTML="Сценарист: отсутствует";
    }
    else{
        element2.innerHTML="Сценарист: "+af.pr5;
    }
    element2=document.getElementById("w6")as HTMLInputElement;
    if (af.pr6==""){
        element2.innerHTML="Продюсер: отсутствует";
    }
    else{
        element2.innerHTML="Продюсер: "+af.pr6;
    }
    element2=document.getElementById("w7")as HTMLInputElement;
    if (af.pr7==""){
        element2.innerHTML="Оператор: отсутствует";
    }
    else{
        element2.innerHTML="Оператор: "+af.pr7;
    }
    element2=document.getElementById("w8")as HTMLInputElement;
    if (af.pr8==""){
        element2.innerHTML="Композитор: отсутствует";
    }
    else{
        element2.innerHTML="Композитор: "+af.pr8;
    }
    element2=document.getElementById("w9")as HTMLInputElement;
    if (af.pr9==""){
        element2.innerHTML="Бюджет: отсутствует";
    }
    else{
        element2.innerHTML="Бюджет: "+af.pr9;
    }
    element2=document.getElementById("w10")as HTMLInputElement;
    if (af.pr10==""){
        element2.innerHTML="Сборы мировые: отсутствует";
    }
    else{
        element2.innerHTML="Сборы мировые: "+af.pr10;
    }
    element2=document.getElementById("w11")as HTMLInputElement;
    if (af.pr11==""){
        element2.innerHTML="Рейтинг возраста: отсутствует";
    }
    else{
        element2.innerHTML="Рейтинг возраста: "+af.pr11;
    }
    element2=document.getElementById("w12")as HTMLInputElement;
    if (af.pr12==""){
        element2.innerHTML="Длительность: отсутствует";
    }
    else{
        element2.innerHTML="Длительность: "+af.pr12;
    }
    element2=document.getElementById("w13")as HTMLInputElement;
    if (af.pr13==""){
        element2.innerHTML="Дата выхода: отсутствует";
    }
    else{
        element2.innerHTML="Дата выхода: "+af.pr13;
    }
    element2=document.getElementById("w14")as HTMLInputElement;
    if (af.pr14==""){
        element2.src="dest/assets/images/postDefault.png";
    }
    else{
        let arr1=af.pr14.toString().split('\\');
        element2.src="dest/assets/images/"+arr1[arr1.length-1];
    }
    if (af.pr16.length==0){

    }
    else{
        const dv=document.getElementById("createCom");
        for (let i=0;i<af.pr16.length;i++){

            let dvv="<div" +" id='icc"+i+ "' class='windowFilm_content_read_size_comment_block'><div class='windowFilm_content_read_size_comment_block_name'>"+af.pr16[i].cf1+"</div><div class='windowFilm_content_read_size_comment_block_text'>"+af.pr16[i].cf2+"</div><div class='windowFilm_content_read_size_comment_block_grade'>"+af.pr16[i].cf3+"</div></div>";
            
            if (dv!=null){dv.insertAdjacentHTML('afterend', dvv);
            }  
        }
    }
    localStorage.setItem("arrFilmss",JSON.stringify(arrFilms));
}
function undoMenu():void{
    let strid="";
    for (let i=0;i<arrFilms.length;i++){
        strid="comidFilm"+arrFilms[i].pr15;
        if (document.getElementById(strid)){
            for (let j=0;j<arrFilms[i].pr16.length;j++){
                let element3: HTMLInputElement = document.getElementById("icc"+j) as HTMLInputElement;
                if (element3!=null){
                    element3.remove();
                }
                
            }
            let element1: HTMLInputElement = document.getElementById(strid) as HTMLInputElement;
            element1.id="windowFc";
            break;
        }
    }
    let element2: HTMLInputElement = document.getElementById("windowF") as HTMLInputElement;
    element2.hidden=true;
    localStorage.setItem("arrFilmss",JSON.stringify(arrFilms));
}

function filterFilmInList(flt1:Date|string,flt2:string,flt3:string,flt4:string|number):void{
    let element1: HTMLInputElement;
    for (let i=0;i<arrFilms.length;i++){
        element1=document.getElementById("idFilm"+arrFilms[i].pr15) as HTMLInputElement;
        let bl=true;
        if (flt1==""){

        }
        else{
            if (flt1!=arrFilms[i].pr13){
                element1.hidden=true;
                bl=false;
            }
        }
        if (flt2=="Любой"){

        }
        else{
            if (flt2!=arrFilms[i].pr3){
                element1.hidden=true;
                bl=false;
            }
        }
        if (flt3==""){

        }
        else{
            if (flt3!=arrFilms[i].pr4){
                element1.hidden=true;
                bl=false;
            }
        }
        if (flt4==""){

        }
        else{
            if (flt4!=arrFilms[i].pr11){
                element1.hidden=true;
                bl=false;
            }
        }
        if (bl==true){
            element1.hidden=false;
        }
    }
}

function sortInList(srtt1:string,srtt2:string){
    if (srtt1=="Нет сортировки"){
        return ;
    }
    let arrh:Array<boolean>=[];
    for (let i=0;i<arrFilms.length;i++){
        let element1: HTMLInputElement = document.getElementById("idFilm"+arrFilms[i].pr15) as HTMLInputElement;
        arrh.push(element1.hidden.valueOf()==true);
        element1.remove();
    }
    if (srtt1=="Дата выхода"){
        for (let i = arrFilms.length - 1; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                if (arrFilms[j].pr13 > arrFilms[j + 1].pr13) {
                    let hid = arrh[j];
                    let temp = arrFilms[j];
                    arrFilms[j] = arrFilms[j + 1];
                    arrFilms[j + 1] = temp;
                    arrh[j] = arrh[j+1];
                    arrh[j+1] = hid;
                }
            }
        } 
        if(srtt2=="По возрастанию"){
            arrFilms.reverse();
        }
        for (let i=0;i<arrFilms.length;i++){
            const dv=document.getElementById("createObject");
            let id1=arrFilms[i].pr15;
            let arr1=arrFilms[i].pr14.toString().split('\\');
            let str1="dest/assets/images/"+arr1[arr1.length-1];
            let dvv="<div class='container_content_list_elem' id"+"=idFilm"+id1+"><div class='container_content_list_elem_name'><div class='container_content_list_elem_name_text'>"+arrFilms[i].pr1+"</div><input class='container_content_list_elem_name_delete' type='button' "+"onClick='delFilmInList("+id1+")'"+" value='Удалить' placeholder='Удалить' required/>  </div><div class='container_content_list_elem_cont'><img alt='Poster' class='container_content_list_elem_cont_img' src='"+str1+"'></div><div class='container_content_list_elem_re'>Рейтинг возраста: "+arrFilms[i].pr11+"</div><div class='container_content_list_elem_co'>Страна: "+arrFilms[i].pr2+"</div><div class='container_content_list_elem_dt'>Дата выхода: "+arrFilms[i].pr13+"</div><div class='container_content_list_elem_button'><input "+"onClick='viewFilmInList("+id1+")'"+" class='container_content_list_elem_but' type='button' value='Перейти' placeholder='Перейти' required/>  </div></div>";
    
            if (dv!=null){
                dv.insertAdjacentHTML('afterend', dvv);
            }
            let element1: HTMLInputElement = document.getElementById("idFilm"+arrFilms[i].pr15) as HTMLInputElement;
            if (arrh[i]==true){
                element1.hidden=true;
            }
        }
    }
    if (srtt1=="Длительность"){
        for (let i = arrFilms.length - 1; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                if (arrFilms[j].pr12 > arrFilms[j + 1].pr12) {
                    let hid = arrh[j];
                    let temp = arrFilms[j];
                    arrFilms[j] = arrFilms[j + 1];
                    arrFilms[j + 1] = temp;
                    arrh[j] = arrh[j+1];
                    arrh[j+1] = hid;
                }
            }
        } 
        if(srtt2=="По возрастанию"){
            arrFilms.reverse();
        }
        for (let i=0;i<arrFilms.length;i++){
            const dv=document.getElementById("createObject");
            let id1=arrFilms[i].pr15;
            let arr1=arrFilms[i].pr14.toString().split('\\');
            let str1="dest/assets/images/"+arr1[arr1.length-1];
            let dvv="<div class='container_content_list_elem' id"+"=idFilm"+id1+"><div class='container_content_list_elem_name'><div class='container_content_list_elem_name_text'>"+arrFilms[i].pr1+"</div><input class='container_content_list_elem_name_delete' type='button' "+"onClick='delFilmInList("+id1+")'"+" value='Удалить' placeholder='Удалить' required/>  </div><div class='container_content_list_elem_cont'><img alt='Poster' class='container_content_list_elem_cont_img' src='"+str1+"'></div><div class='container_content_list_elem_re'>Рейтинг возраста: "+arrFilms[i].pr11+"</div><div class='container_content_list_elem_co'>Страна: "+arrFilms[i].pr2+"</div><div class='container_content_list_elem_dt'>Дата выхода: "+arrFilms[i].pr13+"</div><div class='container_content_list_elem_button'><input "+"onClick='viewFilmInList("+id1+")'"+" class='container_content_list_elem_but' type='button' value='Перейти' placeholder='Перейти' required/>  </div></div>";
    
            if (dv!=null){
                dv.insertAdjacentHTML('afterend', dvv);
            }
            let element1: HTMLInputElement = document.getElementById("idFilm"+arrFilms[i].pr15) as HTMLInputElement;
            if (arrh[i]==true){
                element1.hidden=true;
            }
        }
    }
    if (srtt1=="Название"){
        for (let i = arrFilms.length - 1; i > 0; i--) {
            for (let j = 0; j < i; j++) {
                if (arrFilms[j].pr1.charAt(0) > arrFilms[j + 1].pr1.charAt(0)) {
                    let hid = arrh[j];
                    let temp = arrFilms[j];
                    arrFilms[j] = arrFilms[j + 1];
                    arrFilms[j + 1] = temp;
                    arrh[j] = arrh[j+1];
                    arrh[j+1] = hid;
                }
            }
        } 
        if(srtt2=="По возрастанию"){
            arrFilms.reverse();
        }
        for (let i=0;i<arrFilms.length;i++){
            const dv=document.getElementById("createObject");
            let id1=arrFilms[i].pr15;
            let arr1=arrFilms[i].pr14.toString().split('\\');
            let str1="dest/assets/images/"+arr1[arr1.length-1];
            let dvv="<div class='container_content_list_elem' id"+"=idFilm"+id1+"><div class='container_content_list_elem_name'><div class='container_content_list_elem_name_text'>"+arrFilms[i].pr1+"</div><input class='container_content_list_elem_name_delete' type='button' "+"onClick='delFilmInList("+id1+")'"+" value='Удалить' placeholder='Удалить' required/>  </div><div class='container_content_list_elem_cont'><img alt='Poster' class='container_content_list_elem_cont_img' src='"+str1+"'></div><div class='container_content_list_elem_re'>Рейтинг возраста: "+arrFilms[i].pr11+"</div><div class='container_content_list_elem_co'>Страна: "+arrFilms[i].pr2+"</div><div class='container_content_list_elem_dt'>Дата выхода: "+arrFilms[i].pr13+"</div><div class='container_content_list_elem_button'><input "+"onClick='viewFilmInList("+id1+")'"+" class='container_content_list_elem_but' type='button' value='Перейти' placeholder='Перейти' required/>  </div></div>";
    
            if (dv!=null){
                dv.insertAdjacentHTML('afterend', dvv);
            }
            let element1: HTMLInputElement = document.getElementById("idFilm"+arrFilms[i].pr15) as HTMLInputElement;
            if (arrh[i]==true){
                element1.hidden=true;
            }
        }
    }
    localStorage.setItem("arrFilmss",JSON.stringify(arrFilms));
}

function addComm(ac1:string,ac2:number|string,ac3:string){
    let strid="";
    let idf=0;
    for (let i=0;i<arrFilms.length;i++){
        strid="comidFilm"+arrFilms[i].pr15;
        if (document.getElementById(strid)){
            idf = i;
            break;
        }
    }
    arrFilms[idf].pr16.push(new ComFilm(ac1,ac2,ac3,arrFilms[idf].pr16.length));
    const dv=document.getElementById("createCom");

    let dvv="<div" +" id='icc"+arrFilms[idf].pr16[arrFilms[idf].pr16.length-1].cf4+ "' class='windowFilm_content_read_size_comment_block'><div class='windowFilm_content_read_size_comment_block_name'>"+arrFilms[idf].pr16[arrFilms[idf].pr16.length-1].cf1+"</div><div class='windowFilm_content_read_size_comment_block_text'>"+arrFilms[idf].pr16[arrFilms[idf].pr16.length-1].cf2+"</div><div class='windowFilm_content_read_size_comment_block_grade'>"+arrFilms[idf].pr16[arrFilms[idf].pr16.length-1].cf3+"</div></div>";
    
    if (dv!=null){dv.insertAdjacentHTML('afterend', dvv);
    }    
    localStorage.setItem("arrFilmss",JSON.stringify(arrFilms));
}