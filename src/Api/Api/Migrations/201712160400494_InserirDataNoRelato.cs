namespace Api.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class InserirDataNoRelato : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Relato", "Data", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Relato", "Data");
        }
    }
}
