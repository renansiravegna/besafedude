
using System;

namespace Api.Models.Utilitarios
{
    public static class FormataData
    {
        public static string SemFormatacao(DateTime data)
        {
            return $"{data.Year}{data.Month}{data.Day}";
        }
    }
}