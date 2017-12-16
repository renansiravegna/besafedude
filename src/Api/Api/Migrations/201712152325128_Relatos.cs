namespace Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Relatos : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Relatoes",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Descricao = c.String(),
                        TipoDeRelato = c.Int(nullable: false),
                        Latitude = c.String(),
                        Longitude = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Relatoes");
        }
    }
}
