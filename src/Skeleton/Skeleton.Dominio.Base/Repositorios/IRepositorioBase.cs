using System.Collections.Generic;
using Skeleton.Dominio.Base.Entidades;

namespace Skeleton.Dominio.Base.Repositorios
{
    public interface IRepositorioBase<T> where T : Entidade<T>
    {
        T ObterPor(int id);
        IEnumerable<T> ObterTodos();
        void Salvar(T entidade);
        void Remover(T entidade);
    }
}