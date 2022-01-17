﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Axosnet.WebAPI.Configuration
{
    public class JwtBearerTokenSettings
    {
        public string SecretKey { get; set; }
        public string Audience { get; set; }
        public string Issuer { get; set; }
        public int ExpiryTimeInSeconds { get; set; }
        public int RefreshTokenExpiryInDays { get; set; }
    }
}
