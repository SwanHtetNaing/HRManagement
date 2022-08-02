using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using UsersManagement.Data;
using Newtonsoft.Json;
using UsersManagement.Models.Users;

namespace UsersManagement.Controllers
{
    public class EmployeeController : Controller
    {
        private readonly ApplicationDbContext _db;

        public EmployeeController(ApplicationDbContext db)
        {
            _db = db;
        }

        public IActionResult Index()
        {
            IEnumerable<UsersInfo> userList = _db.Users;
            return View(userList);
        }

        // Create View form
        public IActionResult Create()
        {
            return View();
        }

        // Create action api
        [HttpPost]
        public JsonResult CreateUser(UsersInfo user)
        {
            try
            {
                _db.Users.Add(user);
                _db.SaveChanges();
                return Json(new { resCode="00", resDesc="Success" });
            }
            catch(Exception)
            {
                return Json(new { resCode = "01" , resDesc ="Fail in creating new employee." });
            }
        }

        // Edit View form
        public IActionResult Edit(int Id)
        {
            var obj = _db.Users.Find(Id);
            return View("Edit", obj);
        }

        // Edit action api
        [HttpPost]
        public JsonResult Edit(UsersInfo user)
        {
            try
            {
                //check duplicate

                _db.Users.Update(user);
                _db.SaveChanges();
                return Json(new { resCode = "00", resDesc = "Success" });
            }
            catch (Exception)
            {
                return Json(new { resCode = "01", resDesc = "Delete fail." });
            }
        }

        // Delete action api
        [HttpPost]
        public JsonResult Delete(int id)
        {
            try
            {
                var obj = _db.Users.Find(id);
                if (obj == null)
                    return Json(new { resCode = "404", resDesc = "Cannot find the user to delete." });
                
                _db.Users.Remove(obj);
                _db.SaveChanges();
                return Json(new { resCode = "00", resDesc = "Success" });
            }
            catch(Exception)
            {
                return Json(new { resCode = "01", resDesc = "Delete fail." });
            }
        }
    }
}
