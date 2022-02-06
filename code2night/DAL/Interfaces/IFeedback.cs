using Code2Night.DAL.Common;

namespace Code2Night.DAL.Interfaces
{
    public interface IFeedback
    {
        string SaveFeedback(Feedback feedback);
        string SaveProblem(string Name, string ProblemDescription, string ProblemSuggestion);
    }
}