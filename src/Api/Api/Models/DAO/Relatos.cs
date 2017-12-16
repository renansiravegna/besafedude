using System;
using System.Collections.Generic;
using System.Linq;
using Api.Models.Dominio;

namespace Api.Models.DAO
{
    public class Relatos
    {
        public void Adicionar(Relato relato)
        {
            using (var db = new EntityFrameworkContext.EntityFrameworkContext())
            {
                relato.Data = DateTime.Now;
                db.Relatos.Add(relato);
                db.SaveChanges();
            }
        }

        public IList<Relato> ObterTodos()
        {
            using (var db = new EntityFrameworkContext.EntityFrameworkContext())
            {
                return db.Relatos.OrderByDescending(r => r.Data).ToList();
            }
        }
    }
}