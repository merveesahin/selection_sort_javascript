function selectionSort(liste) {

    for (i=0; i<liste.length-1; i++){
        let min=i
        for (j=i+1; j<liste.length; j++ ){
            if (liste[min] > liste[j]){
            min = j;
            }
        }
    
        if (min !== i) {
          
            let tmp = liste[i];
            liste[i] = liste[min];
            liste[min] = tmp;
        }
    }
        return liste;
    }
    let liste = [7, 10, 12, 9, 1, 5];
    selectionSort(liste);
    console.log(liste);
    
    