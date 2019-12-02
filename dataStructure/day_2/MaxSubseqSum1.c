#include <stdio.h>

// T(N) = O(N^3)
int MaxSubseqSum1( int A[], int N )  
{   
    int ThisSum, MaxSum = 0;
    int i, j, k;
    for( i = 0; i < N; i++ ) { /* i是子列左端位置 */
          for( j = i; j < N; j++ ) { /* j是子列右端位置 */
                  ThisSum = 0;  /* ThisSum是从A[i]到A[j]的子列和 */
                  for( k = i; k <= j; k++ )
                            ThisSum += A[k];
                            if( ThisSum > MaxSum ) /* 如果刚得到的这个子列和更大 */
                                      MaxSum = ThisSum;    /* 则更新结果 */
          } /* j循环结束 */
     } /* i循环结束 */
     printf("23123");
     return MaxSum;  
}

void main() 
{
     int arrays[9] = { 0, 1, -3, 4, 9};
     printf("\n -------hello start -------");
     int end = MaxSubseqSum1(arrays, 5);
     printf("\n%d", end);
     printf("\n -------hello world -------");
}