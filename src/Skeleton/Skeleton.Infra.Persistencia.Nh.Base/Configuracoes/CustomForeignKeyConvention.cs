using FluentNHibernate;
using FluentNHibernate.Conventions;
using System;

namespace Skeleton.Infra.Persistencia.Nh.Base.Configuracoes
{
    public class CustomForeignKeyConvention : ForeignKeyConvention
    {
        protected override string GetKeyName(Member property, Type type)
        {
            if (property == null)
                return "Id" + type.Name;

            return "Id" + property.Name;
        }
    }
}