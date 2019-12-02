#include <stdio.h>

typedef struct PolyNode *Polynomial;
struct PolyNode // 节点
{
    int coef;
    int expon;
    Polynomial link; 
    /* data */
};

Polynomial ReadPoly()
{
    scanf( )

}

Polynomial Mult(Polynomial P1, Polynomial P2)
{

}


Polynomial Add(Polynomial P1, Polynomial P2)
{

}

void PrintPoly(Polynomial P)
{

}


int main()
{
    Polynomial P1, P2, PP, PS;

    P1 = ReadPoly();
    P2 = ReadPoly();
    PP = Mult(P1, P2);
    PrintPoly(PP);
    PS = Add(P1, P2);
    PrintPoly(PS);

    return 0;
}
