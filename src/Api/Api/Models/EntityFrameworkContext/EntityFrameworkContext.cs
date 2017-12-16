using System.Data.Entity;
using Api.Models.Dominio;

namespace Api.Models.EntityFrameworkContext
{
    public class EntityFrameworkContext : DbContext
    {
        private DbSet<Relato> Relatos { get; set; }
    }
}