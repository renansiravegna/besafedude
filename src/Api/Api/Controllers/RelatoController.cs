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
    }
}
