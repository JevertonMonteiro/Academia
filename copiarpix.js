document.addEventListener('DOMContentLoaded', function () {
    var copiarChaveBtn = document.getElementById('copiar-chave');
    copiarChaveBtn.addEventListener('click', function () {
        var chavePix = document.getElementById('chave-pix');
        var range = document.createRange();
        range.selectNode(chavePix);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        alert('Chave PIX copiada!');
    });
});
