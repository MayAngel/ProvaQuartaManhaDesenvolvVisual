using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext 
    {
        //Construtor
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        //Lista de propriedades de classes de modelo que vão virar as tabelas no banco
        public DbSet<Musicas> Musicas { get; set; }
    }
}