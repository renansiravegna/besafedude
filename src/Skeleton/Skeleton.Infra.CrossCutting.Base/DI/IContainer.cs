using System;
using System.Collections.Generic;

namespace Skeleton.Infra.CrossCutting.Base.DI
{
    public interface IContainer
    {
        object Get(Type type);
        void BuildUp(object obj);
        object Get<T>();
        IEnumerable<T> GetAll<T>();
    }
}