#include "org_crosswalkproject_sample_Echo.h"
#include <stdbool.h>
#include <math.h>

inline bool isPrime(float n) {
  int i = 0;
  if (n == 1 || n == 2)
      return true;

  for (i = 2; i < n; i++) {

      if (n % i == 0) {
          break;
      }
  }

  return (n == i);

}

inline int findPrime(int n) {
  int count = 0;
  float i;

  for (i = 1; count < n; i++) {
      if (isPrime(i))
          count++;

      if (count == n)
          break;

  }
  return i + 1;

}

inline int sum(int n) {
  int signal;
  int i, j;
  int total = 0;
  int r1;
  int start = n / 2;

  for (j = 0; j <= n; j++) {
      r1 = start;
      signal = -1;
      for (i = 0; i<= n; i++) {
          r1 = r1 + (i * signal);
          signal = -signal;
      }
      total = total + r1;
  }
  return total;
}

JNIEXPORT jint JNICALL Java_org_crosswalkproject_sample_Echo_messageFromNativeCode
(JNIEnv * env, jobject obj, jint argument)
{
    //return sum(argument);
    return findPrime(argument);
}


