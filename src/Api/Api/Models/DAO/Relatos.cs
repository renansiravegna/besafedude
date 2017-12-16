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
                return db.Relatos.OrderByDescending(relato => relato.Data).ToList();
            }
        }

        public IList<Relato> ObterPorUltimos(int dias)
        {
            using (var db = new EntityFrameworkContext.EntityFrameworkContext())
            {
                return db.Relatos
                    .OrderByDescending(relato => relato.Data)
                    .ThenByDescending(relato => relato.Id)
                    .Take(dias)
                    .ToList();
            }
        }
    }
}