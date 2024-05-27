using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelPlanner00017431.DAL.Models;

namespace TravelPlanner00017431.DAL.Data.Repositories
{
    public class TripsRepository : IRepository<Trip>
    {
        private readonly AppDbContext _appDbContext;

        public TripsRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task Add(Trip entity)
        {
            await _appDbContext.Trips.AddAsync(entity);
            await _appDbContext.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            var entity = await _appDbContext.Trips.FirstOrDefaultAsync(e => e.Id == id);
            if (entity != null)
            {
                _appDbContext.Trips.Remove(entity);
                await _appDbContext.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<Trip>> GetAll()
        {
            return await _appDbContext.Trips.Include(t => t.Activities).ToListAsync();
        }

        public async Task<Trip> GetById(int id)
        {
            return await _appDbContext.Trips.FirstOrDefaultAsync(t => t.Id == id);
        }

        public async Task Update(Trip entity)
        {
            _appDbContext.Entry(entity).State = EntityState.Modified;
            await _appDbContext.SaveChangesAsync();
        }
    }
}
