using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace OrderFoodApp.Model
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options): base(options)
        {
            //Database.SetInitializer<DbContextOptions>(new DropCreateDatabaseAlways<DbContextOptions>());

        }
        public DbSet<Order> Orders { get; set; }
        public DbSet<FoodItem> FoodItems { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<OrderDetail>().HasKey(t => new
            {
                t.OrderId,
                t.FoodItemId,
            });

            modelBuilder.Entity<OrderDetail>()
            .HasOne(x => x.Order)
            .WithMany(y => y.OrderDetails)
            .HasForeignKey(x => x.OrderId);

            modelBuilder.Entity<OrderDetail>()
              .HasOne(x => x.FoodItem)
              .WithMany(y => y.ItemDetails)
              .HasForeignKey(x => x.FoodItemId);
        }

        public DbSet<Customer> Customers { get; set; }

        public DbSet<OrderDetail> OrderDetails { get; set; }

        public DbSet<OrderDetail> ItemDetails { get; set; }
    }
}
