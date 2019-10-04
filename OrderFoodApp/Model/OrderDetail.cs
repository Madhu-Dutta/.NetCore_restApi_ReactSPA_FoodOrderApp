using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace OrderFoodApp.Model
{
    public class OrderDetail
    {
        [Key]
        public int OrderId { get; set; }
        public int FoodItemId { get; set; }
        public int Quantity { get; set; }
        public decimal TotalPrice { get; set; }
        public string Comment { get; set; }

        //RelationShip
        public Order Order { get; set; }
        public FoodItem FoodItem { get; set; }
    }
}
