using System;
using System.Linq;
using System.Linq.Expressions;

namespace Skeleton.Infra.Persistencia.Nh.Base.QueryHelpers
{
    public static class ExtensoesDeLinq
    {
        public static IQueryable<TSource> WhereIf<TSource>(this IQueryable<TSource> source, bool condition, Expression<Func<TSource, bool>> predicate)
        {
            return (condition) ? source.Where(predicate) : source;
        }
    }
}