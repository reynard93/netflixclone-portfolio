Description: Split array with equal sum



Given an array with n integers, you need to find if there are 3 indices which splits the array into 4 sections, each with equal total sum. The number at the index that you split at does not count toward the total sum of any section. No section can be empty.
		Input: [1, 0, 1, -1, 1, 2, 1]
Return: true
Explanation: You can split at index 1, 3, and 5, to get 4 sections, where each section has a sum of 1. Each section has the same total of 1.


Input: [1, 0, 1, -1, 1, 2, 1, 1]
Return: false
