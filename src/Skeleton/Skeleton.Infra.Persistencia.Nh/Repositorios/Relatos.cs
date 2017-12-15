using System.Collections.Generic;
using System.Linq;
using NHibernate;
using Skeleton.Dominio;
using Skeleton.Infra.Persistencia.Nh.Base.Repositorios;

namespace Skeleton.Infra.Persistencia.Nh.Repositorios
{
    public class Relatos : RepositorioBaseDominio<Relato>
    {
        public Relatos(ISession sessao) : base(sessao) { }

        public IEnumerable<Relato> ObterTodos()
        {
            return Entidades().ToList();
        }

        public void Salvar(Relato entidade)
        {

        }
    }
}