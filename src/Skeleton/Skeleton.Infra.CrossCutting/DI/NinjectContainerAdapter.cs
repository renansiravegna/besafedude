using System;
using System.Collections.Generic;
using Ninject;
using Ninject.Modules;
using Skeleton.Infra.CrossCutting.Base.DI;

namespace Skeleton.Infra.CrossCutting.DI
{
    public class NinjectContainerAdapter : IContainer
    {
        protected StandardKernel Container { get; set; }

        public NinjectContainerAdapter(INinjectModule module)
        {
            Container = new StandardKernel(module);
        }

        public object Get(Type type)
        {
            return Container.Get(type);
        }

        public object Get<T>()
        {
            return Container.Get<T>();
        }

        public IEnumerable<T> GetAll<T>()
        {
            return Container.GetAll<T>();
        }

        public void BuildUp(Object objeto)
        {
            Container.Inject(objeto);
        }
    }
}