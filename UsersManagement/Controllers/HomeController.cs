using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using UsersManagement.Models;

namespace UsersManagement.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult ShowDate(int id)
        {
            string todayDate = DateTime.Now.ToShortDateString();
            return Ok(todayDate+"\nyou enter id : " + id);
        }

        public IActionResult ShowDate2(int number)
        {
            string todayDate = DateTime.Now.ToShortDateString();
            return Ok(todayDate + "\nyou enter number : " + number);
        }
        public IActionResult EmployeeList()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
