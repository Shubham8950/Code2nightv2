using Code2Night.DAL.Common;
using Code2Night.DAL.Interfaces;
using Dapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Code2Night.DAL.Repository
{
    public class IncomeRepo:GenericMasterRepo<Income>, IIncome
    {
        public string AddIncome(Income income)
        {
            var DynamicParameter = new DynamicParameters();
            DynamicParameter.Add("@Activity", "Add");
            DynamicParameter.Add("@Amount", income.Amount);
            DynamicParameter.Add("@PaymentDate", income.PaymentDate);
            DynamicParameter.Add("@PaymentMode", income.PaymentMode);
            var result = Insert("sprIncome", DynamicParameter);
            return result;
        }
        public List<Income> GetIncomes()
        {
          return  GetAll("sprIncome", "List");
        }
    }
}
