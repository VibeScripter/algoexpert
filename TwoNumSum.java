// Two sum Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.


import java.util.*;

class Program {
  public static int[] twoNumberSum(int[] array, int targetSum) {
		Set<Integer> nums = new HashSet<>();
    for (int num : array) {
			int potentialMatch = targetSum - num;
			if (nums.contains(potentialMatch)) {
				return new int[] {potentialMatch, num};
			} else {
				nums.add(num);
			}
		}
    return new int[0];
  }
}
