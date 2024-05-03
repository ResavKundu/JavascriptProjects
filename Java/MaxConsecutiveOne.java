import java.util.*;
public class MaxConsecutiveOne {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int arr[]={1,1,1,0,0,0,1,1,1,1,0};
        int k=2;
        int max=Integer.MIN_VALUE;
        // for(int i=0;i<arr.length;i++){
        //     int count=0;
        //     for(int j=i;j<arr.length;j++){
        //         if(arr[j]==0){
        //            count++;
        //         }
        //         if(count<=k){
        //             int len=j-i+1;
        //             max=Math.max(max, len);
        //         }else{
        //             break;
        //         }
        //     }
        // }
        // System.out.println(max);

        int l=0, r=0,n=arr.length,count=0;
        while(r<n){
            if(arr[r]==0) count++;
            while(count>k){
                
            }
        }
    }
}
