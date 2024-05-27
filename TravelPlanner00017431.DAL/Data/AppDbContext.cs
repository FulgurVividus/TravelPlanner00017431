using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelPlanner00017431.DAL.Models;

namespace TravelPlanner00017431.DAL.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }
        public DbSet<Trip> Trips { get; set; }
        public DbSet<Activity> Activities { get; set; }
    }
}
