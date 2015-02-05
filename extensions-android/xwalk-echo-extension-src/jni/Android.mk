LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)

LOCAL_MODULE    := FindPrime
LOCAL_SRC_FILES := findprime.c

LOCAL_CFLAGS +=-ffast-math -O3

include $(BUILD_SHARED_LIBRARY)
