void PrintN2 (int N) {
    if (N)
    {
        PrintN2(N -1);
        printf("%d\n", N);
        /* code */
    }
    return ;
}