using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using InsuranceApp.Data;
using InsuranceApp.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InsuranceApp.Controllers
{
    /// <summary>
    /// Controller for managing insurance items.
    /// </summary>
    [Route("api/items")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly AppDbContext _context;

        /// <summary>
        /// Initializes a new instance of the <see cref="ItemsController"/> class.
        /// </summary>
        /// <param name="context">Database context.</param>
        public ItemsController(AppDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Retrieves a list of all items, including their associated category.
        /// </summary>
        /// <returns>A list of items.</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Item>>> GetItems()
        {
            return await _context.Items.Include(i => i.Category).ToListAsync();
        }

        /// <summary>
        /// Retrieves a list of all categories.
        /// </summary>
        /// <returns>A list of categories.</returns>
        [HttpGet("categories")]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategories()
        {
            return await _context.Categories.ToListAsync();
        }

        /// <summary>
        /// Adds a new item to the database.
        /// </summary>
        /// <param name="item">The item to add.</param>
        /// <returns>The created item.</returns>
        [HttpPost]
        public async Task<ActionResult<Item>> PostItem([FromBody] Item item)
        {
            if (item == null || item.CategoryId <= 0)
                return BadRequest("Invalid item data.");

            item.Category = null;
            _context.Items.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetItems), new { id = item.Id }, item);
        }

        /// <summary>
        /// Deletes an item by ID.
        /// </summary>
        /// <param name="id">The ID of the item to delete.</param>
        /// <returns>No content if successful, otherwise NotFound.</returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItem(int id)
        {
            var item = await _context.Items.FindAsync(id);
            if (item == null) return NotFound();

            _context.Items.Remove(item);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}
