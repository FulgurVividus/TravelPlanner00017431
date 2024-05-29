using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TravelPlanner00017431.DAL.Data;
using TravelPlanner00017431.DAL.Data.Repositories;
using TravelPlanner00017431.DAL.Models;

namespace TravelPlanner00017431.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TripsController : ControllerBase
    {
        private readonly IRepository<Trip> _repository;
        public TripsController(IRepository<Trip> repository)
        {
            _repository = repository;
        }

        [HttpGet]
        public async Task<IEnumerable<Trip>> Get()
        {
            return await _repository.GetAll();
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var trip = await _repository.GetById(id);
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
        public async Task<IActionResult> Create(Trip trip)
        {
            await _repository.Add(trip);
            return CreatedAtAction(nameof(GetById), new { id = trip.Id }, trip);
        }

        [HttpPut]
        public async Task<IActionResult> Update(Trip trip)
        {
            await _repository.Update(trip);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _repository.Delete(id);
            return Ok(id);
        }
    }
}
