using System.Net;
using System.Web.Mvc;
using Api.Models.DAO;
using Api.Models.Dominio;

namespace Api.Controllers
{
    public class RelatoController : Controller
    {
        public ActionResult Index()
        {
            var relatos = new Relatos().ObterTodos();
            return View(relatos);
        }

        [HttpGet, AllowAnonymous]
        public JsonResult ObterTodos()
        {
            var relatos = new Relatos().ObterTodos();
            return Json(relatos, JsonRequestBehavior.AllowGet);
        }

        [HttpPost, AllowAnonymous]
        public ActionResult Relatar(Relato relato)
        {
            new Relatos().Adicionar(relato);
            return new HttpStatusCodeResult(HttpStatusCode.OK);
        }

        //private IEnumerable<Relato> ObterRelatos()
        //{
        //    return new[]
        //    {
        //        new Relato ( "-20.482.353",  "-54.601.493",  TipoDeRelato.Acidente,  "colisão entre veiculos sem vitimas",  "fernandocezar@gmail.com"),
        //        new Relato ( "-20.483.313",  "-54.601.600",  TipoDeRelato.Roubo,  "celular roubado",  "fernandocezar@gmail.com"),
        //        new Relato ( "-20.495.565",  "-54.590.116",  TipoDeRelato.Incendio,  "fogo em terreno vazio",  "fernandocezar@gmail.com"),
        //        new Relato ( "-20.426.536",  "-54.639.450",  TipoDeRelato.Roubo,  "moto roubada",  "larisserabelorodrigues@gmail.com"),
        //        new Relato ( "-20.488.336",  "-54.621.393",  TipoDeRelato.Incendio,  "fogo em predio comercial",  "fernandocezar@gmail.com"),
        //        new Relato ( "-20.439.413",  "-54.671.077",  TipoDeRelato.Acidente,  "carro e moto com vitimas",  "larisserabelorodrigues@gmail.com"),
        //        new Relato ( "-20.505.560",  "-20.505.560",  TipoDeRelato.Roubo,  "roubaram a bolsa de uma senhora",  "larisserabelorodrigues@gmail.com"),
        //        new Relato ( "-20.480.223",  "-54.620.365",  TipoDeRelato.Incendio,  "a casa está vazia",  "larisserabelorodrigues@gmail.com"),
        //        new Relato ( "-20.476.750",  "-54.601.629",  TipoDeRelato.Acidente,  "atropelamento de pedestre",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.487.134",  "-54.666.799",  TipoDeRelato.Roubo,  "vitima foi baleada",  "larisserabelorodrigues@gmail.com"),
        //        new Relato ( "-20.479.275",  "-54.601.538",  TipoDeRelato.Roubo,  "celular roubado",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.426.577",  "-54.614.831",  TipoDeRelato.Acidente,  "carro atropelou um cachorro",  "larisserabelorodrigues@gmail.com"),
        //        new Relato ( "-20.442.410",  "-54.608.209",  TipoDeRelato.Acidente,  "colisão entre caminhão e carro",  "larisserabelorodrigues@gmail.com"),
        //        new Relato ( "-20.479.275",  "-54.601.538",  TipoDeRelato.Roubo,  "mão armada no ponto de ônibus",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.497.856",  "-54.608.329",  TipoDeRelato.Roubo,  "roubo a mão armada, ponto de ônibus",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.484.212",  "-20.484.212",  TipoDeRelato.Incendio,  "carro em chamas",  "larisserabelorodrigues@gmail.com"),
        //        new Relato ( "-20.043.911",  "-54.653.397",  TipoDeRelato.Roubo,  "roubaram o celular da minha mãe",  "larisserabelorodrigues@gmail.com"),
        //        new Relato ( "-20.503.076",  "-54.605.939",  TipoDeRelato.Acidente,  "colisão entre veículos com vitímas",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.477.974",  "-54.623.835",  TipoDeRelato.Roubo,  "roubo de carro no semáforo ",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.448.426",  "-54.676.216",  TipoDeRelato.Acidente,  "Capivara na rua",  "larisserabelorodrigues@gmail.com"),
        //        new Relato ( "-20.475.659",  "-54.598.523",  TipoDeRelato.Acidente,  "carro furou o pare",  "larisserabelorodrigues@gmail.com"),
        //        new Relato ( "-20.487.206",  "-54.572.053",  TipoDeRelato.Roubo,  "Vitima ferida",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.487.000",  "-54.617.110",  TipoDeRelato.Roubo,  "levaram minha bolsa ",  "larisserabelorodrigues@gmail.com"),
        //        new Relato ( "-20.456.985",  "-54.574.134",  TipoDeRelato.Acidente,  "moto em alta velocidade, perdeu o controle",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.499.805",  "-54.649.011",  TipoDeRelato.Incendio,  "fogo em terreno baldio",  "larisserabelorodrigues@gmail.com"),
        //        new Relato ( "-20.456.011",  "-54.586.185",  TipoDeRelato.Acidente,  "colisão entre veículos sem vitímas",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.456.195",  "-54.586.169",  TipoDeRelato.Roubo,  "roubo de celular no ponto de ônibus",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.523.867",  "-54.645.553",  TipoDeRelato.Acidente,  "motoqueiro caiu no buraco",  "larisserabelorodrigues@gmail.com"),
        //        new Relato ( "-20.458.059",  "-54.664.049",  TipoDeRelato.Acidente,  "atropelamento de pedestre",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.454.744",  "-54.593.033",  TipoDeRelato.Acidente,  "perda de controle e colisão com poste",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.529.863",  "-54.662.422",  TipoDeRelato.Acidente,  "pedreste atravessou fora da faixa",  "larisserabelorodrigues@gmail.com"),
        //        new Relato ( "-20.555.943",  "-54.572.387",  TipoDeRelato.Roubo,  "roubo seguido de morte",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.464.995",  "-54.616.893",  TipoDeRelato.Acidente,  "	colisao entre carro e moto, vitima em estado grave",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.496.710",  "-54.677.771",  TipoDeRelato.Roubo,  "motoqueiros levaram a carteira de um idoso",  "larisserabelorodrigues@gmail.com"),
        //        new Relato ( "-20.559.397",  "-54.614.445",  TipoDeRelato.Incendio,  "fogo em carro abandonado ",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.385.785",  "-54.550.899",  TipoDeRelato.Roubo,  "vitima sofreu leves ferimentos",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.460.956",  "-54.628.794",  TipoDeRelato.Roubo,  "levaram a bicicleta de um trabalhador",  "larisserabelorodrigues@gmail.com"),
        //        new Relato ( "-20.489.394",  "-54.614.296",  TipoDeRelato.Incendio,  "fogo em prédio comercial",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.449.839",  "-54.610.144",  TipoDeRelato.Roubo,  "roubaram o celular de uma moça ",  "larisserabelorodrigues@gmail.com"),
        //        new Relato ( "-20.396.651",  "-54.582.816",  TipoDeRelato.Incendio,  "lugar proximo a mata, alto risco de grande incendio",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.479.581",  "-54.602.378",  TipoDeRelato.Roubo,  "roubo na saída do banco",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.427.335",  "-54.631.831",  TipoDeRelato.Incendio,  "vandalos incendiaram um terreno",  "larisserabelorodrigues@gmail.com"),
        //        new Relato ( "-20.483.295",  "-54.592.524",  TipoDeRelato.Roubo,  "roubo em residência",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.501.526",  "-54.649.132",  TipoDeRelato.Roubo,  "levaram meu carro",  "larisserabelorodrigues@gmail.com"),
        //        new Relato ( "-20.482.485",  "-54.614.420",  TipoDeRelato.Acidente,  "colisao entre carros, nada grave",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.439.404",  "-54.571.114",  TipoDeRelato.Roubo,  "roubo em residência",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.433.478",  "-54.568.178",  TipoDeRelato.Roubo,  "roubo em residência",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.493.958",  "-54.664.059",  TipoDeRelato.Acidente,  "acidente envolvendo dois carros ",  "larisserabelorodrigues@gmail.com"),
        //        new Relato ( "-20.431.735",  "-54.572.770",  TipoDeRelato.Roubo,  "roubo em residência",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.443.633",  "-54.576.767",  TipoDeRelato.Roubo,  "roubo em residência",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.497.626",  "-54.678.443",  TipoDeRelato.Acidente,  "carro e moto, com vitimas",  "larisserabelorodrigues@gmail.com"),
        //        new Relato ( "-20.456.011",  "-54.586.185",  TipoDeRelato.Acidente,  "colisão entre veículos com vitímas",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.464.887",  "-54.591.265",  TipoDeRelato.Acidente,  "atropelamento de pedestre",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.511.220",  "-54.656.236",  TipoDeRelato.Roubo,  "roubaram meu cachorro",  "larisserabelorodrigues@gmail.com"),
        //        new Relato ( "-20.478.646",  "-54.598.758",  TipoDeRelato.Acidente,  "	colisao entre motos, uma vitima ferida",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.496.364",  "-54.618.686",  TipoDeRelato.Incendio,  "casa em chamas",  "larisserabelorodrigues@gmail.com"),
        //        new Relato ( "-20.503.492",  "-54.618.886",  TipoDeRelato.Acidente,  "atropelamento de capivara",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.493.614",  "-54.632.072",  TipoDeRelato.Roubo,  "atropelamento de pedestre",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.473.224",  "-54.588.988",  TipoDeRelato.Acidente,  "engavetamento",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.500.751",  "-54.646.942",  TipoDeRelato.Incendio,  "fogo em terreno ",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.516.959",  "-54.700.569",  TipoDeRelato.Acidente,  "colisão entre duas motos",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.489.838",  "-54.648.811",  TipoDeRelato.Roubo,  "roubaram meu relogio",  "larisserabelorodrigues@gmail.com"),
        //        new Relato ( "-20.459.079",  "-54.707.797",  TipoDeRelato.Incendio,  "fogo em terreno",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.455.660",  "-54.682.779",  TipoDeRelato.Roubo,  "roubo de moto",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.447.349",  "-54.658.081",  TipoDeRelato.Acidente,  "colisão entre carros, sem vitímas",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.458.292",  "-54.624.803",  TipoDeRelato.Roubo,  "roubo de dois celulares",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.478.333",  "-54.629.035",  TipoDeRelato.Roubo,  "com vitima em estado grave",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.464.236",  "-54.619.130",  TipoDeRelato.Acidente,  "colisão entre carros",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.439.404",  "-54.571.114",  TipoDeRelato.Roubo,  "roubo em residência",  "fernandocezar@gmail.com"),
        //        new Relato ( "-20.456.985",  "-54.574.134",  TipoDeRelato.Acidente,  "carro em alta velocidade, perdeu o controle",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.466.182",  "-54.613.463",  TipoDeRelato.Acidente,  "colisão entre carro e moto",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.466.912",  "-54.612.597",  TipoDeRelato.Roubo,  "roubo de dois celulares",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.530.383",  "-54.615.297",  TipoDeRelato.Acidente,  "colisao entre onibus e carro",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.479.275",  "-54.601.538",  TipoDeRelato.Roubo,  "roubo de pertences ",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.497.856",  "-54.608.329",  TipoDeRelato.Roubo,  "roubo no ponto de ônibus",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.534.607",  "-54.629.357",  TipoDeRelato.Acidente,  "	colisao entre carros",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.503.593",  "-54.605.710",  TipoDeRelato.Acidente,  "	engavetamento em rotatória",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.505.050",  "-54.598.622",  TipoDeRelato.Incendio,  "incêndio de carro abandonado",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.514.192",  "-54.592.535",  TipoDeRelato.Acidente,  "atropelamento de pedestre",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.512.202",  "-54.577.726",  TipoDeRelato.Incendio,  "fogo em canteiro, área florestal",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.483.406",  "-54.610.214",  TipoDeRelato.Incendio,  "fogos e carros de ferro velho",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.481.759",  "-54.598.229",  TipoDeRelato.Roubo,  "roubo e agressão",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.490.086",  "-54.599.321",  TipoDeRelato.Roubo,  "roubo de automóvel no semáforo",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.478.323",  "-54.597.474",  TipoDeRelato.Roubo,  "roubo na saída do banco",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.471.209",  "-54.584.426",  TipoDeRelato.Acidente,  "colisão em cruzamento, dois carros",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.482.206",  "-54.585.131",  TipoDeRelato.Acidente,  "motoqueiro caiu no buraco",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.481.943",  "-54.575.249",  TipoDeRelato.Acidente,  "atropelamento de pedestre",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.485.948",  "-54.579.803",  TipoDeRelato.Acidente,  "colisao no cruzamento, vitima em estado grave",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.461.330",  "-54.591.944",  TipoDeRelato.Acidente,  "atropelamento de pedestre",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.458.992",  "-54.587.787",  TipoDeRelato.Acidente,  "colisão entre carro e moto",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.481.105",  "-54.602.026",  TipoDeRelato.Acidente,  "colisão entre carro e ciclista",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.460.851",  "-54.598.678",  TipoDeRelato.Acidente,  "colisão entre carro e ciclista",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.500.489",  "-54.580.117",  TipoDeRelato.Roubo,  "	roubo de celular ",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.458.059",  "-54.664.049",  TipoDeRelato.Acidente,  "atropelamento de pedestre",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.478.646",  "-54.598.758",  TipoDeRelato.Acidente,  "	colisao entre motos, uma vitima ferida",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.503.322",  "-54.618.890",  TipoDeRelato.Roubo,  "vitima com ferimento leve",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.464.654",  "-54.591.198",  TipoDeRelato.Acidente,  "colisão entre carros",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.456.465",  "-54.573.347",  TipoDeRelato.Acidente,  "colisão entre carro e ciclista",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.503.529",  "-54.640.449",  TipoDeRelato.Roubo,  "motociclista ferido",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.451.582",  "-54.591.809",  TipoDeRelato.Acidente,  "atropelamento de pedestre",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.433.625",  "-54.598.504",  TipoDeRelato.Acidente,  "colisão entre carro e moto",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.491.944",  "-54.668.206",  TipoDeRelato.Roubo,  "roubo de pertences",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.436.710",  "-54.613.624",  TipoDeRelato.Roubo,  "roubo de pertences",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.458.061",  "-54.555.723",  TipoDeRelato.Acidente,  "colisao lateral",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.440.556",  "-54.620.589",  TipoDeRelato.Acidente,  "engavetamento de carros",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.488.348",  "-54.614.143",  TipoDeRelato.Acidente,  "caminhão tomba ao desviar de animal na pista",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.436.590",  "-54.579.816",  TipoDeRelato.Acidente,  "motorista perdeu o controle",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.503.228",  "-54.640.618",  TipoDeRelato.Roubo,  "roubo de moto",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.455.846",  "-54.670.027",  TipoDeRelato.Acidente,  "colisão decorrente de racha",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.492.322",  "-54.581.319",  TipoDeRelato.Acidente,  "aquaplanagem",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.407.691",  "-54.619.253",  TipoDeRelato.Roubo,  "roubo de celulares",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.493.088",  "-54.582.082",  TipoDeRelato.Acidente,  "aquaplanagem",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.410.584",  "-54.629.904",  TipoDeRelato.Roubo,  "roubo no ponto de ônibus",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.490.369",  "-54.605.070",  TipoDeRelato.Roubo,  "assalto no ponto de onibus",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.442.836",  "-54.575.360",  TipoDeRelato.Roubo,  "roubo de pedestres",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.428.298",  "-54.592.125",  TipoDeRelato.Incendio,  "local com alto risco",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.484.504",  "-54.574.260",  TipoDeRelato.Incendio,  "incendio de terreno",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.473.224",  "-54.588.988",  TipoDeRelato.Acidente,  "colisão entre carros",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.426.536",  "-54.639.450",  TipoDeRelato.Roubo,  "carro roubado",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.450.039",  "-54.576.721",  TipoDeRelato.Roubo,  "roubo de casa",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.450.039",  "-54.556.935",  TipoDeRelato.Roubo,  "saída de banco",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.467.815",  "-54.567.413",  TipoDeRelato.Incendio,  "incêndio de terreno",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.468.247",  "-54.622.763",  TipoDeRelato.Acidente,  "colisão entre carro e moto",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.439.529",  "-54.551.257",  TipoDeRelato.Roubo,  "saída de banco",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.503.278",  "-54.618.903",  TipoDeRelato.Acidente,  "atropelamento de capivara",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.424.485",  "-54.572.263",  TipoDeRelato.Roubo,  "saída de banco",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.496.824",  "-54.608.983",  TipoDeRelato.Roubo,  "roubo de estudantes",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.455.115",  "-54.571.746",  TipoDeRelato.Roubo,  "arrastão em evento no parque",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.413.824",  "-54.626.355",  TipoDeRelato.Roubo,  "carro roubado",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.500.489",  "-54.580.117",  TipoDeRelato.Roubo,  "	roubo de moto",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.396.651",  "-54.582.816",  TipoDeRelato.Incendio,  "fogo proximo à mata",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.512.202",  "-54.577.726",  TipoDeRelato.Incendio,  "fogo em canteiro",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.503.529",  "-54.640.449",  TipoDeRelato.Roubo,  "colisão entre carro e moto",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.503.322",  "-54.618.890",  TipoDeRelato.Roubo,  "vitima com ferimento grave",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.448.732",  "-54.586.577",  TipoDeRelato.Roubo,  "roubo de carro, motorista ferido",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.463.934",  "-54.601.725",  TipoDeRelato.Roubo,  "roubo de carro no semáforo ",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.465.803",  "-54.570.011",  TipoDeRelato.Roubo,  "colisão entre carro e moto",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.462.913",  "-54.555.969",  TipoDeRelato.Roubo,  "caminhão tombou na avenida",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.459.718",  "-54.636.878",  TipoDeRelato.Incendio,  "terreno baldio",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.458.789",  "-54.586.354",  TipoDeRelato.Acidente,  "atropelamento de pedestre",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.512.230",  "-54.603.413",  TipoDeRelato.Acidente,  "colisão entre carros",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.440.129",  "-54.609.982",  TipoDeRelato.Acidente,  "colisao entre moto e carro",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.548.008",  "-54.577.772",  TipoDeRelato.Acidente,  "atropelamento de pedestre",  "rdgisabela@gmail.com"),
        //        new Relato ( "-20.437.474",  "-54.617.437",  TipoDeRelato.Acidente,  "com vitima em estado grave",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.436.283",  "-54.614.417",  TipoDeRelato.Roubo,  "vitima esfaqueada",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.422.383",  "-54.602.086",  TipoDeRelato.Roubo,  "roubo de celular",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.418.812",  "-54.604.071",  TipoDeRelato.Roubo,  "roubo de pertences",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.411.190",  "-54.589.233",  TipoDeRelato.Acidente,  "vitima com ferimentos leves",  "gabisonlopes@gmail.com"),
        //        new Relato ( "-20.408.927",  "-54.571.385",  TipoDeRelato.Acidente,  "vitima em estado grave",  "gabisonlopes@gmail.com")

        //    };
        //}
    }
}
