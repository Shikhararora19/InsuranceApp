using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using InsuranceApp.Data;
using InsuranceApp.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InsuranceApp.Controllers
{
    /// <summary>
    /// Controller for managing categories.
    /// </summary>
    [Route("api/categories")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly AppDbContext _context;

        /// <summary>
        /// Initializes a new instance of the <see cref="CategoriesController"/> class.
        /// </summary>
        /// <param name="context">Database context.</param>
        public CategoriesController(AppDbContext context)
        {
            _context = context;
        }

        /// <summary>
        /// Retrieves a list of all categories.
        /// </summary>
        /// <returns>A list of categories.</returns>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Category>>> GetCategories()
        {
            return await _context.Categories.ToListAsync();
        }
    }
}
