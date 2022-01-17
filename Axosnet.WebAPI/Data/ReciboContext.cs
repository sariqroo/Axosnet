using Axosnet.WebAPI.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Axosnet.WebAPI.Data
{
    public class ReciboContext : IdentityDbContext
    {
        private readonly DbContextOptions _options;
        public ReciboContext(DbContextOptions<ReciboContext> options) : base(options)
        {
            _options = options;
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        public DbSet<Recibo> Recibos { get; set; }
    }
}
