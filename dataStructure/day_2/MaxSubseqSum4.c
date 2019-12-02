#include <stdio.h>

// T(N) = O(N)
int MaxSubseqSum4 (int A[], int N) 
{
    int ThisSum, MaxSum;
    int i;

    ThisSum = MaxSum = 0;
    for (i = 0; i < N; i++)
    {
        ThisSum += A[i];
        if (ThisSum > MaxSum )
        {
            MaxSum = ThisSum;
        }
        else if (ThisSum < 0)
        {
            ThisSum = 0;
        }
    }
    return MaxSum;
}


void main() 
{
     int arrays[] = { 0, 1, -3, 4, 9,  0, 1, -3, 4, 9 };
     printf("\n -------hello start -------");
     int end = MaxSubseqSum4(arrays, 10);
     printf("\n%d", end);
     printf("\n -------hello world -------");
}