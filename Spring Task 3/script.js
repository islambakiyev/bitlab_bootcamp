function counting(){
    let start = document.getElementById('start').value;

    let select = document.getElementById('select').value;

    if(select=='KZT'){
        let usd = document.getElementById('usd');
        usd.innerText = (+start/431).toFixed(2); 

        let eur = document.getElementById('eur');
        eur.innerText = (+start/509).toFixed(2)
    }else if(select=='USD'){
        let kzt = document.getElementById('kzt');
        kzt.innerText = +start*429;

        let eur = document.getElementById('eur');
        eur.innerText = (+start*0.95).toFixed(2)
    } else if(select=="EUR"){
        let kzt = document.getElementById('kzt');
        kzt.innerText = +start*507;

        let usd = document.getElementById('usd');
        usd.innerText = (+start*1.05).toFixed(2); 
    }
}