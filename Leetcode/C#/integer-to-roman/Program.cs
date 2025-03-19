public class Solution
{
    public string IntToRoman(int num)
    {
        // count number of 1000s, 100s, 10s and 1s
        int v1000 = num / 1000;
        num %= 1000;
        int v100 = num / 100;
        num %= 100;
        int v10 = num / 10;
        num %= 10;
        int v1 = num;

        string output = "";

        output += string.Concat(Enumerable.Repeat("M", v1000));
        if (v100 == 9)
        {
            output += "CM";
            v100 = 0;
        }
        else if (v100 >= 5)
        {
            output += "D";
            v100 -= 5;
        }

        if (v100 == 4)
        {
            output += "CD";
        }
        else
        {
            output += string.Concat(Enumerable.Repeat("C", v100));
        }


        if (v10 == 9)
        {
            output += "XC";
            v10 = 0;
        }
        else if (v10 >= 5)
        {
            output += "L";
            v10 -= 5;
        }

        if (v10 == 4)
        {
            output += "XL";
        }
        else
        {
            output += string.Concat(Enumerable.Repeat("X", v10));
        }


        if (v1 == 9)
        {
            output += "IX";
            v1 = 0;
        }
        else if (v1 >= 5)
        {
            output += "V";
            v1 -= 5;
        }

        if (v1 == 4)
        {
            output += "IV";
        }
        else
        {
            output += string.Concat(Enumerable.Repeat("I", v1));
        }

        return output;
    }
}

public class Program
{
    static void Main()
    {
        Solution solution = new();
        System.Console.WriteLine($"MMMDCCXLIX is {solution.IntToRoman(3749)}");
        System.Console.WriteLine($"LVIII is {solution.IntToRoman(58)}");
        System.Console.WriteLine($"MCMXCIV is {solution.IntToRoman(1994)}");
    }
}