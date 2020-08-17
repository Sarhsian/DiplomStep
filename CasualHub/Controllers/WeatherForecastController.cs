using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CasualHub.DAL.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CasualHub.Controllers
{
    [ApiController]
    [Route("[controller]/[action]")]
    public class WeatherForecastController : ControllerBase
    {

        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching","Misha"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        ApplicationDbContext _context;
        public WeatherForecastController(ILogger<WeatherForecastController> logger, ApplicationDbContext dbcontext)
        {
            _context = dbcontext;
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<WeatherForecast> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
        }
        [HttpGet]
        public IActionResult Test()
        {
            
            return Ok(_context.Users.Count()); 
        }
    }
}
