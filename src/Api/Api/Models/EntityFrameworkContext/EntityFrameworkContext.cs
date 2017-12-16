using System.Data.Entity;
using Api.Models.Dominio;

namespace Api.Models.EntityFrameworkContext
{
    public class EntityFrameworkContext : DbContext
    {
        public DbSet<Relato> Relatos { get; set; }
    }
}