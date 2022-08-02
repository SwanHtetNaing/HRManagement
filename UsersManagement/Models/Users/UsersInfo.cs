using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace UsersManagement.Models.Users
{
    public class UsersInfo
    {
        [Key]
        public int UserId { get; set; }
        [DisplayName("Employee Name")]
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool IsLock { get; set; }
        public bool IsDelete { get; set; }
        public int LoginAttempt { get; set; }
        public int RoleId { get; set; }
    }
}
