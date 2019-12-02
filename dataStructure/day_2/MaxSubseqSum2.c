#include <stdio.h>

// T(N) = O(N^2)
int MaxSubseqSum2 (int A[], int Length) 
{
    int ThisSum, MaxSum = 0;
    int i, j;
    for (i = 0; i < Length; i++)
    {
        ThisSum = 0;
        for (j = i; j < Length; j++)
        {
            ThisSum += A[j];
            if (ThisSum > MaxSum)
            {
                MaxSum = ThisSum;
            }
        }
    }
    return MaxSum;
}


void main() 
{
     int arrays[9] = { 0, 1, -3, 4, 9};
     printf("\n -------hello start -------");
     int end = MaxSubseqSum2(arrays, 5);
     printf("\n%d", end);
     printf("\n -------hello world -------");
}