using System;
using Skeleton.Dominio.Base.Entidades;

namespace Skeleton.Dominio
{
    public class Relato : Entidade<Relato>
    {
        public virtual TipoDeRelato TipoDeRelato { get; set; }
        public virtual string Descricao { get; set; }
        public virtual string Latitude { get; set; }
        public virtual string Longitude { get; set; }

        public Relato(TipoDeRelato tipoDeRelato, string descricao, string latitude, string longitude)
        {
            TipoDeRelato = tipoDeRelato;
            Descricao = descricao;
            Latitude = latitude;
            Longitude = longitude;
        }
    }
}
