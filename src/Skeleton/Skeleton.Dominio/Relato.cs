using System;
using Skeleton.Dominio.Base.Entidades;

namespace Skeleton.Dominio
{
    public class Relato : Entidade<Relato>
    {
        public virtual string Descricao { get; protected set; }
    }
}
