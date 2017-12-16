using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Api.Models.Enum;

namespace Api.Models.Dominio
{
    [Table("Relato")]
    public sealed class Relato
    {
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