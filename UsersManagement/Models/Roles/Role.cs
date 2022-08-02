using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace UsersManagement.Models.Roles
{
    public class Role
    {
        [Key]
        public int RoleId { get; set; }
        [DisplayName("Role Name")]
        public string RoleName { get; set; }
        public string Permission { get; set; }
        public bool IsActive { get; set; }
    }
}
