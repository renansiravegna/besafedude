namespace Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AlterTableRelato : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "dbo.Relatoes", newName: "Relato");
        }
        
        public override void Down()
        {
            RenameTable(name: "dbo.Relato", newName: "Relatoes");
        }
    }
}
