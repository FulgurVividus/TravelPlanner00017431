using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelPlanner00017431.DAL.Models
{
    public class Activity
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime Date { get; set; }
        public double EstimatedCost { get; set; }
        public string Location { get; set; }
        public int TripId { get; set; }
        public Trip Trip { get; set; }
    }
}
