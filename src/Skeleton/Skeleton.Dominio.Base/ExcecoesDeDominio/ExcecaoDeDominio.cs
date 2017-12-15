using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Skeleton.Dominio.Base.ExcecoesDeDominio
{
    /// <summary>
    /// Classe base que representa uma exceção do domínio
    /// </summary>
    public abstract class ExcecaoDeDominio : Exception
    {
        protected readonly Expression<Func<object, object>> _objeto = x => x;
        protected readonly IList<ViolacaoDeRegra> _erros = new List<ViolacaoDeRegra>();

        public IEnumerable<ViolacaoDeRegra> Erros { get { return _erros; } }

        /// <summary>
        /// Adiciona a mensagem enviada à lista de erros e dispara
        /// <para>(Obs.: Utilizar quando não há condição a ser validada)</para>
        /// </summary>
        public void DispararComMensagem(string mensagemDeErro)
        {
            _erros.Add(new ViolacaoDeRegra { Propriedade = _objeto, Mensagem = mensagemDeErro });
            throw this;
        }

        /// <summary>
        /// Retorna se há na lista de violações de regras uma entrada com a mensagem informada
        /// </summary>
        public bool PossuiErroComAMensagemIgualA(string mensagemDeErro)
        {
            return _erros.Any(e => e.Mensagem.Equals(mensagemDeErro));
        }

        /// <summary>
        /// Dispara exceção somente quando há alguma regra não atendida
        /// </summary>
        public void EntaoDispara()
        {
            if (_erros.Any())
                throw this;
        }
    }

    /// <summary>
    /// Implementação de exceção do domínio utilizando interface fluente
    /// </summary>   
    public class ExcecaoDeDominio<T> : ExcecaoDeDominio where T : class
    {
        private ExcecaoDeDominio() { }

        /// <summary>
        /// Cria objeto ExcecaoDeDominio para o tipo informado
        /// </summary>
        public static ExcecaoDeDominio<T> UmaExcecao()
        {
            return new ExcecaoDeDominio<T>();
        }

        /// <summary>
        /// Adiciona uma violação de regra de negócio à lista de violações quando a condição informada for verdadeira
        /// <para>(Obs.: Utilizar quando esta regra NÃO for específica de um atributo da classe)</para>
        /// </summary>
        public ExcecaoDeDominio<T> Quando(bool condicao, string mensagemDeErro)
        {
            if (condicao) _erros.Add(new ViolacaoDeRegra { Propriedade = _objeto, Mensagem = mensagemDeErro });            
            return this;
        }

        /// <summary>
        /// Adiciona uma violação de regra de negócio à lista de violações quando a condição informada for verdadeira
        /// <para>(Obs.: Utilizar quando esta regra for específica de um atributo da classe)</para>
        /// </summary>
        public ExcecaoDeDominio<T> Quando<TPropriedade>(bool condicao, Expression<Func<T, TPropriedade>> propriedade, string mensagemDeErro)
        {
            if (condicao) _erros.Add(new ViolacaoDeRegra { Propriedade = propriedade, Mensagem = mensagemDeErro });
            return this;
        }
    }
}