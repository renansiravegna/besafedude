using Skeleton.Dominio;

namespace Skeleton.Infra.Persistencia.Nh.Base.Mapeamentos
{
    public class RelatoMap : MapBase<Relato>
    {
        public RelatoMap()
        {
            Map(x => x.Descricao);
        }
    }
}