using Code2Night.DAL.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Code2Night.DAL.Interfaces
{
    public interface IIncome
    {
        string AddIncome(Income income);
        List<Income> GetIncomes();
    }
}
