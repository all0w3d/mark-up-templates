let n = prompt(`vvedite interval`,'');


for (let i = 2; i < n; i++ ) {

    for (let j = 2; j < i; j++) {



    if (i % j == 0) {
        break;
    } 
    else { 
    
       if (j == (i-1)) {
        alert (i);
       }
       else {
        continue;
       }

       
    } 
    
}

}