import java.util.HashSet;
import java.util.*;
class longestSubSequence{
    public static void main(String[] args) {
        String str="abcabcbb";
        int max=Integer.MIN_VALUE;
        // for(int i=0;i<str.length();i++){
        //     HashSet<Character> set=new HashSet<>();
        //     for(int j=i;j<str.length();j++){
        //         if (set.contains(str.charAt(j))) {
        //             max=Math.max(max, j-i);
        //             break;
        //         }
        //         set.add(str.charAt(j));
        //     }
        // }
        // System.out.println(max);

        HashMap<Character,Integer> map=new HashMap<>();
        int left=0, right=0,n=str.length(),len=0;
        while (right<n) {
            if(map.containsKey(str.charAt(right)))
                left=Math.max(map.get(str.charAt(right))+1, left);
            map.put(str.charAt(right), right);
            len=Math.max(len,right-left+1);
            right++;

        }
        System.out.println(len);
    }
}