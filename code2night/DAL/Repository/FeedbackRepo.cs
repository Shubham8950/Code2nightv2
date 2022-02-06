using Code2Night.DAL.Common;
using Code2Night.DAL.Interfaces;
using Dapper;

namespace Code2Night.DAL.Repository
{
    public class FeedbackRepo : GenericMasterRepo<Feedback>, IFeedback
    {
        public string SaveFeedback(Feedback feedback)
        {
            var DynamicParameter = new DynamicParameters();
            DynamicParameter.Add("@Activity", "Insert");
            DynamicParameter.Add("@Email", feedback.Email);
            DynamicParameter.Add("@Job", feedback.Job);
            DynamicParameter.Add("@JobIndustry", feedback.JobIndustry);
            DynamicParameter.Add("@Name", feedback.Name);
            DynamicParameter.Add("@Employment", feedback.Employment);
            DynamicParameter.Add("@Skill", feedback.Skill);
            DynamicParameter.Add("@Experience", feedback.Experience);
            var result = Insert("sprFeedback", DynamicParameter);
            return result;
        }
        public string SaveProblem(string Name, string ProblemDescription, string ProblemSuggestion)
        {
            var DynamicParameter = new DynamicParameters();
            DynamicParameter.Add("@Name", Name);
            DynamicParameter.Add("@ProblemDescription", ProblemDescription);
            DynamicParameter.Add("@ProblemSuggestion", ProblemSuggestion);
          
            var result = Insert("sprProblem", DynamicParameter);
            return result;
        }
    }
}