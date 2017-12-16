using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Api.Models.Enum;

namespace Api.Models.Dominio
{
    [Table("Relato")]
    public sealed class Relato
    {
        //public Relato(string latitude, string longitude, TipoDeRelato tipoDeRelato, string descricao,
        //    string emailDoUsuario)
        //{
        //    Descricao = descricao;
        //    TipoDeRelato = tipoDeRelato;
        //    Latitude = latitude;
        //    Longitude = longitude;
        //    EmailDoUsuario = emailDoUsuario;
        //}

        [Key]
        public int Id { get; set; }
        public string Descricao { get; set; }
        public TipoDeRelato TipoDeRelato { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string EmailDoUsuario { get; set; }
        public DateTime Data { get; set; }
    }
}