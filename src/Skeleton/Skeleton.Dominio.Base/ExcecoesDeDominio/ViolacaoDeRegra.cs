using System.Linq.Expressions;

namespace Skeleton.Dominio.Base.ExcecoesDeDominio
{
    public class ViolacaoDeRegra
    {
        public LambdaExpression Propriedade { get; internal set; }
        public string Mensagem { get; internal set; }
    }
}