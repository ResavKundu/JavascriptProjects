import java.util.*;
class subarraysum{
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int arr[]={3,4,-7,1,3,3,1,-4};
        int count=0;
        // for(int i=0;i<arr.length;i++){
        //     int sum=0;
        //     List<Integer> list=new ArrayList<>();
        //     for(int j=i;j<arr.length;j++){
                
        //         list.add(arr[j]);
        //         sum+=arr[j];
        //         if(sum==7){
        //             count++;
        //             // for(int a:list){
        //             //     System.out.print(a+" ");
        //             // }
        //             System.out.println(list);
        //             // System.out.println();
        //         }
                
        //     }
        // }
        // System.out.println(count);

        Map<Integer,Integer> map=new HashMap<>();
        map.put(0, 1);
        int preSum=0, count1=0;
        for(int i=0;i<arr.length;i++){
            preSum+=arr[i];  //3
            int remove=preSum-7;
            count1+=map.getOrDefault(remove, 0);
            map.put(preSum, map.getOrDefault(preSum, 0)+1);
        }
        System.out.println(count1);
    }
}