using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelPlanner00017431.DAL.Models
{
    public class Trip
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Destination { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public ICollection<Activity> Activities { get; set; }
    }
}
