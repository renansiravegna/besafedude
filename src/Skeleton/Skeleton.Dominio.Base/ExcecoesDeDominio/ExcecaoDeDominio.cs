using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Skeleton.Dominio.Base.ExcecoesDeDominio
{
    /// <summary>
    /// Classe base que representa uma exce��o do dom�nio
    /// </summary>
    public abstract class ExcecaoDeDominio : Exception
    {
        protected readonly Expression<Func<object, object>> _objeto = x => x;
        protected readonly IList<ViolacaoDeRegra> _erros = new List<ViolacaoDeRegra>();

        public IEnumerable<ViolacaoDeRegra> Erros { get { return _erros; } }

        /// <summary>
        /// Adiciona a mensagem enviada � lista de erros e dispara
        /// <para>(Obs.: Utilizar quando n�o h� condi��o a ser validada)</para>
        /// </summary>
        public void DispararComMensagem(string mensagemDeErro)
        {
            _erros.Add(new ViolacaoDeRegra { Propriedade = _objeto, Mensagem = mensagemDeErro });
            throw this;
        }

        /// <summary>
        /// Retorna se h� na lista de viola��es de regras uma entrada com a mensagem informada
        /// </summary>
        public bool PossuiErroComAMensagemIgualA(string mensagemDeErro)
        {
            return _erros.Any(e => e.Mensagem.Equals(mensagemDeErro));
        }

        /// <summary>
        /// Dispara exce��o somente quando h� alguma regra n�o atendida
        /// </summary>
        public void EntaoDispara()
        {
            if (_erros.Any())
                throw this;
        }
    }

    /// <summary>
    /// Implementa��o de exce��o do dom�nio utilizando interface fluente
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
        /// Adiciona uma viola��o de regra de neg�cio � lista de viola��es quando a condi��o informada for verdadeira
        /// <para>(Obs.: Utilizar quando esta regra N�O for espec�fica de um atributo da classe)</para>
        /// </summary>
        public ExcecaoDeDominio<T> Quando(bool condicao, string mensagemDeErro)
        {
            if (condicao) _erros.Add(new ViolacaoDeRegra { Propriedade = _objeto, Mensagem = mensagemDeErro });            
            return this;
        }

        /// <summary>
        /// Adiciona uma viola��o de regra de neg�cio � lista de viola��es quando a condi��o informada for verdadeira
        /// <para>(Obs.: Utilizar quando esta regra for espec�fica de um atributo da classe)</para>
        /// </summary>
        public ExcecaoDeDominio<T> Quando<TPropriedade>(bool condicao, Expression<Func<T, TPropriedade>> propriedade, string mensagemDeErro)
        {
            if (condicao) _erros.Add(new ViolacaoDeRegra { Propriedade = propriedade, Mensagem = mensagemDeErro });
            return this;
        }
    }
}