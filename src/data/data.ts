const codingProblems = [
    {
      id: 1,
      title: "Two Sum",
      difficulty: "Easy",
      description: "Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.",
      examples: [
        { input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "nums[0] + nums[1] == 9" },
      ],
      constraints: ["2 ≤ nums.length ≤ 10⁴", "-10⁹ ≤ nums[i] ≤ 10⁹", "-10⁹ ≤ target ≤ 10⁹"]
    },
    {
      id: 2,
      title: "Valid Parentheses",
      difficulty: "Easy",
      description: "Given a string `s` containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
      examples: [
        { input: 's = "()[]{}"', output: "true", explanation: "All brackets are closed correctly." },
        { input: 's = "(]"', output: "false", explanation: "Mismatch between '(' and ']'." }
      ],
      constraints: ["1 ≤ s.length ≤ 10⁴", "s consists of '()[]{}' only"]
    },
    {
      id: 3,
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
      description: "Given a string `s`, find the length of the longest substring without repeating characters.",
      examples: [
        { input: 's = "abcabcbb"', output: "3", explanation: 'The answer is "abc", with length 3.' },
        { input: 's = "bbbbb"', output: "1", explanation: 'The answer is "b", with length 1.' }
      ],
      constraints: ["0 ≤ s.length ≤ 5 * 10⁴", "s consists of English letters, digits, symbols, and spaces"]
    },
    {
      id: 4,
      title: "Merge Intervals",
      difficulty: "Medium",
      description: "Given an array of intervals where `intervals[i] = [start, end]`, merge overlapping intervals.",
      examples: [
        { input: "intervals = [[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]", explanation: "Merged [1,3] and [2,6] into [1,6]." }
      ],
      constraints: ["1 ≤ intervals.length ≤ 10⁴", "0 ≤ start ≤ end ≤ 10⁴"]
    },
    {
      id: 5,
      title: "Find Median of Two Sorted Arrays",
      difficulty: "Hard",
      description: "Given two sorted arrays nums1 and nums2, return the median of the two sorted arrays.",
      examples: [
        { input: "nums1 = [1,3], nums2 = [2]", output: "2.0", explanation: "Merged = [1,2,3], median = 2.0" }
      ],
      constraints: ["0 ≤ nums1.length, nums2.length ≤ 10⁶", "-10⁶ ≤ nums[i] ≤ 10⁶"]
    },
    {
      id: 6,
      title: "Kth Largest Element in an Array",
      difficulty: "Medium",
      description: "Find the `k`th largest element in an unsorted array.",
      examples: [
        { input: "nums = [3,2,1,5,6,4], k = 2", output: "5", explanation: "Sorted array = [6,5,4,3,2,1], 2nd largest is 5" }
      ],
      constraints: ["1 ≤ k ≤ nums.length ≤ 10⁴", "-10⁴ ≤ nums[i] ≤ 10⁴"]
    },
    {
      id: 7,
      title: "Subsets",
      difficulty: "Medium",
      description: "Given an integer array `nums`, return all possible subsets (the power set).",
      examples: [
        { input: "nums = [1,2,3]", output: "[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]", explanation: "Generated all subsets of [1,2,3]." }
      ],
      constraints: ["1 ≤ nums.length ≤ 10", "-10 ≤ nums[i] ≤ 10"]
    },
    {
      id: 8,
      title: "Trapping Rain Water",
      difficulty: "Hard",
      description: "Given `n` non-negative integers representing an elevation map, compute how much water it can trap after raining.",
      examples: [
        { input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]", output: "6", explanation: "Total trapped water = 6 units." }
      ],
      constraints: ["n == height.length", "1 ≤ n ≤ 2 * 10⁴", "0 ≤ height[i] ≤ 10⁵"]
    },
    {
      id: 9,
      title: "Word Break",
      difficulty: "Medium",
      description: "Given a string `s` and a dictionary of words, return true if `s` can be segmented into space-separated words in the dictionary.",
      examples: [
        { input: 's = "leetcode", wordDict = ["leet", "code"]', output: "true", explanation: '"leet code" is a valid segmentation.' }
      ],
      constraints: ["1 ≤ s.length ≤ 300", "1 ≤ wordDict.length ≤ 10⁴", "1 ≤ wordDict[i].length ≤ 20"]
    },
    {
      id: 10,
      title: "LFU Cache",
      difficulty: "Hard",
      description: "Design and implement a data structure for Least Frequently Used (LFU) cache.",
      examples: [
        { input: "LFUCache(2), put(1,1), put(2,2), get(1), put(3,3), get(2), get(3)", output: "[null,null,null,1,null,-1,3]", explanation: "Evicts least frequently used key when capacity is full." }
      ],
      constraints: ["0 ≤ capacity ≤ 10⁴", "get and put must run in O(1) time complexity"]
    }
  ];
  
  export default codingProblems;
  