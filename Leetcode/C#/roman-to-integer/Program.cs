public class Solution
{
    public int RomanToInt(string s)
    {
        int total = 0;
        string current = "";

        var values = new Dictionary<string, int>
        {
            {"I", 1},
            {"V", 5},
            {"X", 10},
            {"L", 50},
            {"C", 100},
            {"D", 500},
            {"M", 1000},
            {"IV", 4},
            {"IX", 9},
            {"XL", 40},
            {"XC", 90},
            {"CD", 400},
            {"CM", 900},
        };

        foreach (char c in s)
        {
            if ((current == "I" && (c == 'V' || c == 'X')) || (current == "X" && (c == 'L' || c == 'C')) || (current == "C" && (c == 'D' || c == 'M')))
            {
                current += c.ToString();
                continue;
            }
            else if (current == "")
            {
                current = c.ToString();
                continue;
            }

            total += values[current];

            current = c.ToString();

        }
        total += values[current];

        return total;
    }

}

class Program
{
    static void Main()
    {
        Solution solution = new Solution();

        Console.WriteLine($"III: {solution.RomanToInt("III")}");
        Console.WriteLine($"LVIII: {solution.RomanToInt("LVIII")}");
        Console.WriteLine($"MCMXCIV: {solution.RomanToInt("MCMXCIV")}");
    }
}