#include <stdio.h>
int main(){
    int a = 5,i;
    for(i=1;i<=a;i++){
        for(int j = 1; j<-i; j++){
            printf("*");
        }
    }
    return 0;
}

