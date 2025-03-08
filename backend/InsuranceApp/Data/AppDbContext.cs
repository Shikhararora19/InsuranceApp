using Microsoft.EntityFrameworkCore;
using InsuranceApp.Models;

namespace InsuranceApp.Data
{
    /// <summary>
    /// Represents the database context for the application.
    /// </summary>
    public class AppDbContext : DbContext
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="AppDbContext"/> class.
        /// </summary>
        /// <param name="options">The database context options.</param>
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        /// <summary>
        /// Gets or sets the DbSet for Items.
        /// </summary>
        public DbSet<Item> Items { get; set; }

        /// <summary>
        /// Gets or sets the DbSet for Categories.
        /// </summary>
        public DbSet<Category> Categories { get; set; }

        /// <summary>
        /// Configures the database model and seeds initial data.
        /// </summary>
        /// <param name="modelBuilder">The model builder instance.</param>
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>().HasData(
                new Category { Id = 1, Name = "Electronics" },
                new Category { Id = 2, Name = "Jewelry" },
                new Category { Id = 3, Name = "Furniture" }
            );
        }
    }
}
