using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Code2Night.DAL.Common
{
    public class Income
    {
        public int Amount { get; set; }
        public DateTime PaymentDate { get; set; }
        public string PaymentMode { get; set; }

        public int IncomeId { get; set; }
    }
}
