package reverseandadd;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
public class ReverseAndAdd {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws IOException {

        // set up buffered file reading and buffered output
        BufferedReader in = new BufferedReader(new InputStreamReader(System.in));
        StringBuffer output = new StringBuffer();

        // the first line of the input is the number of cases      
       // int numOfCases = Integer.parseInt(in.readLine());

       // for (int i = 0; i < numOfCases; i++) {

            // initially we want the number of iterations to be zero
            int iterations = 0;

            // we read in the ith integer n out of numOfCases numbers
            int n = Integer.parseInt(in.readLine());

            int result = n;
            do { // calculate the reverse of n and add it to the integer n
                StringBuffer rev = new StringBuffer();
                int tmp = result;
                while (tmp != 0) {
                    rev.append(tmp%10);
                    tmp /= 10;
                }

                result = result + Integer.parseInt(rev.toString());
                iterations++; // count this as an iteration
            } while (!palindrome(result)); // loop until the result is a palindrome,
                                    // or in other words loop while the result is not a palindrome

            // store the result to a buffer
            output.append(iterations +  " " + result + "\n");

     //}

        // print out the required output when we're all done
        System.out.println(output);
    }

    // a method to test whether the number is a palindrome
    public static boolean palindrome(int n) {

        int m = String.valueOf(n).length();
        String str = String.valueOf(n);
        for (int i = 0; i < m; i++) {

            if (!String.valueOf(str.charAt(i)).equals( String.valueOf(str.charAt((m-i)-1)) ))
                return false;

        }

        return true;
    }
   
}
