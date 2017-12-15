using FluentNHibernate.Conventions;
using FluentNHibernate.Conventions.Instances;

namespace Skeleton.Infra.Persistencia.Nh.Base.Configuracoes
{
    public class PrimaryKeyConvention : IIdConvention
    {
        public void Apply(IIdentityInstance instance)
        {
            instance.Column("Id");
        }
    }
}