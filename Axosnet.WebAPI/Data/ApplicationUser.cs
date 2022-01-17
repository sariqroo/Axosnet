using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;

namespace Axosnet.WebAPI.Data
{    public class ApplicationUser : IdentityUser
    {
        public List<RefreshToken> RefreshTokens { get; set; }
    }
}
