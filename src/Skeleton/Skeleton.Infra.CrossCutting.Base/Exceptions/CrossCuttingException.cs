using System;

namespace Skeleton.Infra.CrossCutting.Base.Exceptions
{
    public abstract class CrossCuttingException : Exception
    {
        protected CrossCuttingException(string message) : base(message) { }
    }
}