using System.Collections.Generic;
using System.Linq;

namespace Skeleton.Dominio.Base.ObjetosDeValor
{
    public static class ExtensoesDeObjetoDeValor
    {
        public static void ReatribuirCom<T>(this IList<T> objetosDeValor, IEnumerable<T> novosObjetos) where T : ObjetoDeValor<T>
        {
            if (novosObjetos == null || !novosObjetos.Any()) return;

            foreach (var novoObjeto in novosObjetos.Where(novoObjeto => !objetosDeValor.Contains(novoObjeto)))
                objetosDeValor.Add(novoObjeto);

            var objetosNaoEncontradosNaListaNova = objetosDeValor.Where(n => !novosObjetos.Contains(n)).ToList();
            foreach (var objeto in objetosNaoEncontradosNaListaNova)
                objetosDeValor.Remove(objeto);
        }
    }
}