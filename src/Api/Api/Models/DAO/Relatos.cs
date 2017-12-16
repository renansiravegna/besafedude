using System;
using System.Collections.Generic;
using System.Linq;
using Api.Models.Dominio;
using Api.Models.Dto;

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
            var dataDoDia = DateTime.Now.AddDays(-dias);
            using (var db = new EntityFrameworkContext.EntityFrameworkContext())
            {
                return db.Relatos
                    .Where(relato => relato.Data >= dataDoDia)
                    .OrderByDescending(relato => relato.Data)
                    .ThenByDescending(relato => relato.Id)
                    .ToList();
            }
        }

        public IList<RelatoPeriodoMensalDto> ObterPorUltimosMensal(int mes)
        {
            var dataDoMes = DateTime.Now.AddMonths(-mes);
            using (var db = new EntityFrameworkContext.EntityFrameworkContext())
            {
                return (from relato in db.Relatos
                    where relato.Data >= dataDoMes
                    select new RelatoPeriodoMensalDto
                    {
                        TipoDeRelato = relato.TipoDeRelato,
                        Mes = relato.Data.Month
                    }).OrderByDescending(relato => relato.Mes).ToList();
            }
        }
    }
}