using NHibernate.Context;
using Skeleton.Infra.Persistencia.Nh.Base.Configuracoes;
using System.Reflection;

namespace Skeleton.Infra.Persistencia.Nh.SessionFactory
{
    public class ConfiguradorDeSessionFactory : ConfiguradorDeSessionFactory<WebSessionContext>
    {
        public ConfiguradorDeSessionFactory()
        {
            CurrentAssembly = Assembly.GetExecutingAssembly();
        }
    }
}