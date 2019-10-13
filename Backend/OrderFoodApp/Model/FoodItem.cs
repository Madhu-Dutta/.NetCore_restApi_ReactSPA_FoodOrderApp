using OrderFoodApp.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace OrderFoodApp.Model
{
    public class FoodItem
    {
        [Key]
        public int FoodItemId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Picture { get; set; }
        public decimal Price { get; set; }

        public byte[] PictureBlob { get; set; }

        [NotMapped]
        public int Quantity { get; set; }
        [NotMapped]
        public string Comment { get; set; }

        //Relationship
        public virtual ICollection<OrderDetail> ItemDetails { get; set; }


    }
}
