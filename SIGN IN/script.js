function Eye (){

    let inp=document.getElementById('inp');

    if(inp.type=='password'){
        inp.type='text';
        hide.className = 'fa-solid fa-eye';
    }
    else{
        inp.type="password";
        hide.className = 'fa-solid fa-eye-slash';

      
    }
}
