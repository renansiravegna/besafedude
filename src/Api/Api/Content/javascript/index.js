var tipoDeRelato = { Acidente: 0, Roubo: 1, Incendio: 2 };

$(function () {
    ObterGraficoDeRelato();
    ObterPorUltimosPeriodoMensal();
});

$('#selectDias').change(() => {
    var dias = $('#selectDias').val();
    $.get('/Relato/AtualizarUltimosAcontecimentos', { dias: dias }).done((resposta) => {
        $('#ultimosAcontecimentos').html(resposta);
    });
});

function parseJsonDate(jsonDate) {
    var offset = new Date().getTimezoneOffset() * 60000;
    var parts = /\/Date\((-?\d+)([+-]\d{2})?(\d{2})?.*/.exec(jsonDate);
    if (parts[2] == undefined) parts[2] = 0;
    if (parts[3] == undefined) parts[3] = 0;
    d = new Date(+parts[1] + offset + parts[2] * 3600000 + parts[3] * 60000);
    date = d.getDate();
    date = date < 10 ? "0" + date : date;
    mon = d.getMonth();
    mon = mon < 10 ? "0" + mon : mon;
    year = d.getFullYear();
    return new Date(year, mon, date);
};

function ObterGraficoDeRelato() {
    $.get("/Relato/ObterTodos").done((resposta) => {
        GerarGraficoPorTipo(resposta);
    });
}

function ObterPorUltimosPeriodoMensal() {
    var mes = 3;
    $.get("/Relato/ObterPorUltimosPeriodoMensal?mes="+mes).done((resposta) => {
        GerarGraficoPorPeriodo(resposta);
    });
}

function GerarGraficoPorPeriodo(relato) {
    var nomesDoMes = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    var mesAtual = new Date().getMonth();
    var acidenteMes1 = relato.filter(r => r.TipoDeRelato === tipoDeRelato.Acidente && r.Mes === mesAtual + 1).length;
    var acidenteMes2 = relato.filter(r => r.TipoDeRelato === tipoDeRelato.Acidente && r.Mes === mesAtual).length;
    var acidenteMes3 = relato.filter(r => r.TipoDeRelato === tipoDeRelato.Acidente && r.Mes === mesAtual - 1).length;
    var rouboMes1 = relato.filter(r => r.TipoDeRelato === tipoDeRelato.Roubo && r.Mes === mesAtual + 1).length;
    var rouboMes2 = relato.filter(r => r.TipoDeRelato === tipoDeRelato.Roubo && r.Mes === mesAtual).length;
    var rouboMes3 = relato.filter(r => r.TipoDeRelato === tipoDeRelato.Roubo && r.Mes === mesAtual - 1).length;
    var incendioMes1 = relato.filter(r => r.TipoDeRelato === tipoDeRelato.Incendio && r.Mes === mesAtual + 1).length;
    var incendioMes2 = relato.filter(r => r.TipoDeRelato === tipoDeRelato.Incendio && r.Mes === mesAtual).length;
    var incendioMes3 = relato.filter(r => r.TipoDeRelato === tipoDeRelato.Incendio && r.Mes === mesAtual - 1).length;
    Highcharts.chart('graficoPorPeriodo', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Últimos três meses'
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: [
                nomesDoMes[mesAtual],
                nomesDoMes[mesAtual - 1],
                nomesDoMes[mesAtual - 2]
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Quantidade'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Acidente',
            data: [acidenteMes1, acidenteMes2, acidenteMes3]

        }, {
            name: 'Roubo',
            data: [rouboMes1, rouboMes2, rouboMes3]

        }, {
            name: 'Incêndio',
            data: [incendioMes1, incendioMes2, incendioMes3]

        }]
    });
}

function GerarGraficoPorTipo(relato) {
    var acidente = relato.filter(r => r.TipoDeRelato === tipoDeRelato.Acidente).length;
    var roubo = relato.filter(r => r.TipoDeRelato === tipoDeRelato.Roubo).length;
    var incendio = relato.filter(r => r.TipoDeRelato === tipoDeRelato.Incendio).length;
    Highcharts.chart('graficoPorTipo', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Porcentagem por tipos'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            data: [{
                name: 'Acidente',
                y: acidente
            }, {
                name: 'Roubo',
                y: roubo,
                sliced: true,
                selected: true
            }, {
                    name: 'Incêndio',
                y: incendio
            }]
        }]
    });
}