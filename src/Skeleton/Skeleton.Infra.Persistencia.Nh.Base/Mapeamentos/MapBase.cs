using FluentNHibernate.Mapping;
using Skeleton.Dominio.Base.Entidades;

namespace Skeleton.Infra.Persistencia.Nh.Base.Mapeamentos
{
    public class MapBase<TEntidade> : ClassMap<TEntidade> where TEntidade : Entidade<TEntidade>
    {
        public MapBase()
        {
            Id(x => x.Id);
        }
    }
}