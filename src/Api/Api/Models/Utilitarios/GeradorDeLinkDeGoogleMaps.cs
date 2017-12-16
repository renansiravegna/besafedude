namespace Api.Models.Utilitarios
{
    public static class GeradorDeLinkDeGoogleMaps
    {
        private const string Link = "https://www.google.com/maps/search/?api=1&query=";
        public static string Coordenadas(string latitude, string longitude)
        {
            var latitudes = latitude.Split('.');
            latitude = $"{latitudes[0]}.{latitudes[1]}{latitudes[2]}";
            var longitudes = longitude.Split('.');
            longitude = $"{longitudes[0]}.{longitudes[1]}{longitudes[2]}";
            return $"{Link}{latitude},{longitude}";
        }
    }
}