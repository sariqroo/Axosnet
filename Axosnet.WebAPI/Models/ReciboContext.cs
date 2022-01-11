using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Axosnet.WebAPI.Models
{
    public class ReciboContext : DbContext
    {
        public ReciboContext(DbContextOptions<ReciboContext> options) : base(options)
        {

        }

        public DbSet<Recibo> Recibos { get; set; }
    }
}
