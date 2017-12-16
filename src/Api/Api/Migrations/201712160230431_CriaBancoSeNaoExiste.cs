namespace Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class CriaBancoSeNaoExiste : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Relato", "EmailDoUsuario", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Relato", "EmailDoUsuario");
        }
    }
}
