$(function () {
    FormatarData();
});

function FormatarData() {
    moment.locale('pt-br');
    console.log(moment.locale());
    var $data = $('.dataFormatada');
    $data.each(i => {
        var periodo = $data[i].innerText.split(' ');
        var data = new Date(periodo[0], periodo[1] - 1, periodo[2], periodo[3], periodo[4], periodo[5]);
        console.log(data);
        var dataFormatada = moment(data).fromNow();
        $data[i].innerText = dataFormatada;
    });
}