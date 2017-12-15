using NHibernate.Context;

namespace Skeleton.Infra.Persistencia.Nh.Base.Configuracoes
{
    public static class Configurador
    {
        public static void Configurar(ConfiguradorDeSessionFactory<WebSessionContext> configuradorDeSessionFactory, ServidorDePublicacao servidorDePublicacao, bool exibirSql = false, bool criarBd = false)
        {
            if (Contexto.SessionFactory != null) return;
            Contexto.SessionFactory = configuradorDeSessionFactory.CriarSessionFactory(servidorDePublicacao, exibirSql, criarBd);
        }
    }
}