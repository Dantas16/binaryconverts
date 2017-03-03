/**
 * Converte decimal em binário
 * Convert decimal to binary
 */
class CalculaBinario {
    dec_inpt: any; //Decimal input
    bin_inpt: any; //Binary input
    resto: Array<number> = [];
    constructor(){
        this.dec_inpt = document.getElementById('decimal');
        this.bin_inpt = document.getElementById('binario');
    }
    decimalToBin(ev: any): void {
        ev.preventDefault();
        
        var decimal = this.dec_inpt.value;
            decimal = (decimal.length < 1) ? 0 : parseInt(decimal);
            
        if (decimal < 1) {
            this.alert('Insira um número decimal válido');
            return;
        }
        
        this.alert('');
        
        this.calcular(decimal);
        
        this.resto.reverse();
        
        this.bin_inpt.value = this.resto.join('');
    };
    calcular(num: number): void {
        var result = Math.floor(num/2);
        
        this.resto.push(num%2);
        
        if (result >= 2) {
            this.calcular(result);
        } else {
            this.resto.push(result);
        }
    };
    alert(msg: string): void {
        var alertObj = document.getElementById('main-alert');
        alertObj.innerHTML = msg;
    };
    resetForm(ev: any): void {
        ev.preventDefault();
        this.dec_inpt.value = '';
        this.bin_inpt.value = '';
        this.alert('');
    };
}

var btnConverte = document.getElementById('decBin');
    btnConverte.addEventListener('click', function(e){ new CalculaBinario().decimalToBin(e); }, false);
    
var btnReset = document.getElementById('reset');
    btnReset.addEventListener('click', function(e){ new CalculaBinario().resetForm(e); }, false);