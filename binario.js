/**
 * Converte decimal em binário
 * Convert decimal to binary
 */
var CalculaBinario = (function () {
    function CalculaBinario() {
        this.resto = [];
        this.dec_inpt = document.getElementById('decimal');
        this.bin_inpt = document.getElementById('binario');
    }
    CalculaBinario.prototype.decimalToBin = function (ev) {
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
    ;
    CalculaBinario.prototype.calcular = function (num) {
        var result = Math.floor(num / 2);
        this.resto.push(num % 2);
        if (result >= 2) {
            this.calcular(result);
        }
        else {
            this.resto.push(result);
        }
    };
    ;
    CalculaBinario.prototype.alert = function (msg) {
        var alertObj = document.getElementById('main-alert');
        alertObj.innerHTML = msg;
    };
    ;
    CalculaBinario.prototype.resetForm = function (ev) {
        ev.preventDefault();
        this.dec_inpt.value = '';
        this.bin_inpt.value = '';
        this.alert('');
    };
    ;
    return CalculaBinario;
}());
var btnConverte = document.getElementById('decBin');
btnConverte.addEventListener('click', function (e) { new CalculaBinario().decimalToBin(e); }, false);
var btnReset = document.getElementById('reset');
btnReset.addEventListener('click', function (e) { new CalculaBinario().resetForm(e); }, false);
