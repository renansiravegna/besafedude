using NHibernate;
using NHibernate.Linq;
using Skeleton.Dominio.Base.Entidades;
using System.Collections.Generic;
using System.Linq;

namespace Skeleton.Infra.Persistencia.Nh.Base.Repositorios
{
    public abstract class RepositorioBaseDominio<TEntidade> where TEntidade : Entidade<TEntidade>
    {
        protected ISession Sessao { get; private set; }

        protected RepositorioBaseDominio(ISession sessao)
        {
            Sessao = sessao;
        }

        protected IQueryable<TEntidade> Entidades()
        {
            return Sessao.Query<TEntidade>();
        }

        protected IEnumerable<TEntidade> Enumerar()
        {
            return Sessao.CreateCriteria(typeof(TEntidade)).List<TEntidade>();
        }

        public TEntidade ObterPor(int id)
        {
            return Sessao.Get<TEntidade>(id);
        }

        public virtual IEnumerable<TEntidade> ObterTodos()
        {
            return Entidades().ToList();
        }

        public void Salvar(TEntidade entidade)
        {
            Sessao.SaveOrUpdate(entidade);
        }

        public void Remover(TEntidade entidade)
        {
            Sessao.Delete(entidade);
        }
    }
}