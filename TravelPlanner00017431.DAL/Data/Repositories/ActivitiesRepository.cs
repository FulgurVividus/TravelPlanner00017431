using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TravelPlanner00017431.DAL.Models;

namespace TravelPlanner00017431.DAL.Data.Repositories
{
    public class ActivitiesRepository : IRepository<Activity>
    {
        private readonly AppDbContext _appDbContext;

        public ActivitiesRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task Add(Activity entity)
        {
            await _appDbContext.Activities.AddAsync(entity);
            await _appDbContext.SaveChangesAsync();
        }

        public async Task Delete(int id)
        {
            var entity = await _appDbContext.Activities.FirstOrDefaultAsync(e => e.Id == id);
            if (entity != null)
            {
                _appDbContext.Activities.Remove(entity);
                await _appDbContext.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<Activity>> GetAll()
        {
            return await _appDbContext.Activities.Include(a => a.Trip).ToListAsync();
        }

        public async Task<Activity> GetById(int id)
        {
            return await _appDbContext.Activities.Include(a => a.Trip).FirstOrDefaultAsync(b => b.Id == id);
        }

        public async Task Update(Activity entity)
        {
            _appDbContext.Entry(entity).State = EntityState.Modified;
            await _appDbContext.SaveChangesAsync();
        }
    }
}
