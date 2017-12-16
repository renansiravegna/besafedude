namespace Api.Migrations
{
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<Api.Models.EntityFrameworkContext.EntityFrameworkContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Api.Models.EntityFrameworkContext.EntityFrameworkContext context)
        {
            context.Database.CreateIfNotExists();
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data.
        }
    }
}
