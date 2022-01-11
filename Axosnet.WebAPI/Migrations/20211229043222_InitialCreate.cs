using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Axosnet.WebAPI.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Recibos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Proveedor = table.Column<string>(type: "nvarchar(250)", nullable: true),
                    Monto = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Moneda = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    Fecha = table.Column<DateTime>(type: "datetime", nullable: false),
                    Comentario = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Recibos", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Recibos");
        }
    }
}
