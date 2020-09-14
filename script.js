function calcular(){
    var _num = window.document.querySelector('input#txtnum');
    var num = Number.parseFloat(_num.value);
    var _tab = window.document.querySelector('select#txttab');
    txttab.innerHTML = "";
    if(_num.value.length == 0){
        window.alert("[ERRO] Digite um valor na caixa 'Número'...");
    }else{
        for(var i = 1; i < 11; i++){
            var result = document.createElement('option');
            result.text = `${num} x ${i} = ${num*i}`;
            txttab.appendChild(result);
        }
    }
}
