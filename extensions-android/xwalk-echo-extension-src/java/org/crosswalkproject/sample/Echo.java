/* Copyright (c) 2014 Intel Corporation. All rights reserved.
 * Use of this source code is governed by an Apache v2 license that can be
 * found in the LICENSE-APACHE-V2 file. */
package org.crosswalkproject.sample;

import org.xwalk.app.runtime.extension.XWalkExtensionClient;
import org.xwalk.app.runtime.extension.XWalkExtensionContextClient;
import com.google.gson.Gson;

public class Echo extends XWalkExtensionClient {
  private Gson gson = new Gson();

  static
  {
      System.loadLibrary("FindPrime");
  }

  public Echo(String name, String jsApiContent, XWalkExtensionContextClient xwalkContext) {
    super(name, jsApiContent, xwalkContext);
  }

  private String findPrimeJava(String requestJson) {
    Message request = gson.fromJson(requestJson, Message.class);
    int argument = Integer.parseInt(request.content);

    //int result = sum(argument);
    //int result = findPrime(argument);
    int result = messageFromNativeCode(argument);
    String reply = Integer.toString(result);

    Message response = new Message(request.id, reply);
    return gson.toJson(response);
  }

  private int sum(int n) {
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

  private static final int findPrime(int n) {
    int count = 0;
    int i;

    for (i = 1; count < n; i++) {
        if (isPrime(i))
            count++;

        if (count == n)
            break;

    }
    return i;

  }

  private static final boolean isPrime(int n) {
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

  @Override
  public void onMessage(int instanceId, String requestJson) {
    postMessage(instanceId, findPrimeJava(requestJson));
  }

  @Override
  public String onSyncMessage(int instanceId, String requestJson) {
    return findPrimeJava(requestJson);
  }

  public native int messageFromNativeCode(int argument);
}
