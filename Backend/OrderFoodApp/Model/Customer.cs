using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace OrderFoodApp.Model
{
    public class Customer
    {
        [Key]
        public int CustomerId { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public decimal Password { get; set; }

        [NotMapped]
        public string ConfirmPassword { get; set; }

        public virtual ICollection<Order> Orders { get; set; }
        
    }
}
