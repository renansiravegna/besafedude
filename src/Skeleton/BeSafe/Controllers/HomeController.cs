using System.Web.Mvc;
using Skeleton.Dominio;
using Skeleton.Infra.Persistencia.Nh.Repositorios;

namespace BeSafe.Controllers
{
    public class HomeController : Controller
    {
        private readonly Relatos _relatos;

        public HomeController(Relatos relatos)
        {
            _relatos = relatos;
        }

        public ActionResult Index()
        {
            return View();
        }

        public JsonResult ObterRelatos()
        {
            return Json(_relatos.ObterTodos(), JsonRequestBehavior.AllowGet);
        }

        public void SalvarRelatos(TipoDeRelato tipoDeRelato, string descricao, string latitude, string longitude)
        {
            var relato = new Relato(tipoDeRelato, descricao, latitude, longitude);
            _relatos.Salvar(relato);
        }
    }
}