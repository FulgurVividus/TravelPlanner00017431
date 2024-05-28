using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TravelPlanner00017431.DAL.Data.Repositories;
using TravelPlanner00017431.DAL.Models;

namespace TravelPlanner00017431.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActivitiesController : ControllerBase
    {
        private readonly IRepository<Activity> _activityRepository;
        public ActivitiesController(IRepository<Activity> activityRepository)
        {
            _activityRepository = activityRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<Activity>> Get()
        {
            return await _activityRepository.GetAll();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var trip = await _activityRepository.GetById(id);
            if (trip == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(trip);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Create(Activity activity)
        {
            await _activityRepository.Add(activity);
            return CreatedAtAction(nameof(GetById), new { id = activity.Id }, activity);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(Activity activity)
        {
            await _activityRepository.Update(activity);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _activityRepository.Delete(id);
            return NoContent();
        }
    }
}
