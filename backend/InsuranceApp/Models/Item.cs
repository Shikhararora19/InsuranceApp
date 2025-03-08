using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace InsuranceApp.Models
{
    /// <summary>
    /// Represents an insurance item.
    /// </summary>
    public class Item
    {
        /// <summary>
        /// Gets or sets the item ID.
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Gets or sets the item name.
        /// </summary>
        [Required]
        public string Name { get; set; }

        /// <summary>
        /// Gets or sets the item value.
        /// </summary>
        [Required]
        public decimal Value { get; set; }

        /// <summary>
        /// Gets or sets the category ID associated with this item.
        /// </summary>
        [Required]
        public int CategoryId { get; set; }

        /// <summary>
        /// Gets or sets the category associated with this item.
        /// </summary>
        [ForeignKey("CategoryId")]
        public Category? Category { get; set; }
    }
}
