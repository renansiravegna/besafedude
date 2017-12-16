using System;
using System.Net;
using System.Web.Mvc;
using Api.Models.DAO;
using Api.Models.Dominio;

namespace Api.Controllers
{
    public class RelatoController : Controller
    {
        public ActionResult Index(int dias = 10)
        {
            var relatos = new Relatos().ObterPorUltimos(dias);
            return View(relatos);
        }

        [HttpGet, AllowAnonymous]
        public ActionResult AtualizarUltimosAcontecimentos(int dias)
        {
            var relatos = new Relatos().ObterPorUltimos(dias);
            return PartialView("_UltimosAcontecimentos", relatos);
        }

        [HttpGet, AllowAnonymous]
        public JsonResult ObterTodos()
        {
            var relatos = new Relatos().ObterTodos();
            return Json(relatos, JsonRequestBehavior.AllowGet);
        }

        [HttpGet, AllowAnonymous]
        public JsonResult ObterPorUltimos(int dias)
        {
            var relatos = new Relatos().ObterPorUltimos(dias);
            return Json(relatos, JsonRequestBehavior.AllowGet);
        }

        [HttpGet, AllowAnonymous]
        public JsonResult ObterPorUltimosPeriodoMensal(int mes)
        {
            var relatos = new Relatos().ObterPorUltimosMensal(mes);
            return Json(relatos, JsonRequestBehavior.AllowGet);
        }

        [HttpPost, AllowAnonymous]
        public ActionResult Relatar(Relato relato)
        {
            new Relatos().Adicionar(relato);
            return new HttpStatusCodeResult(HttpStatusCode.OK);
        }
    }
}
