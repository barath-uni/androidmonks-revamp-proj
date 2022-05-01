---
title: '# Singleton for FusedLocationProviderClient'
description: 'FusedLocationProviderClient is a useful location grabber library in Android. In this tutorial we create a singleton with that and use it in our Application.'
date: '2018-10-27'
modified_date: '2019-09-30'
image: '/assets/images/posts'
---
# Singleton for FusedLocationProviderClient

 [September 30, 2019October 27, 2018](https://androidmonks.com/fusedlocationproviderclient-singleton/ "6:23 am") by [Baradwaj Varadharajan](https://androidmonks.com/author/admin/ "View all posts by Baradwaj Varadharajan")## Creating a Singleton for FusedLocationProviderClient

This is a quick tutorial on how to create a singleton for [FusedLocationProviderClient](https://androidmonks.com/fusedlocationproviderclient-singleton/) in Android. Hoping that you know what a FusedLocationApi used to do(It is deprecated now). The Android Library has the Fused Location Provider Client that is **responsible for capturing the location updates from the user**.

You can know more about capturing the location updates from the user [here](https://developer.android.com/training/location/retrieve-current#last-known). In this tutorial, we will create a quick Singleton class with all the necessary methods, so that you don’t have to create a Fused Location Provider Client object all the time.

A brief explanation of a Singleton is, it is a design pattern in Java, where-in only one object of a Class is created, and the object is reused everywhere. This is a very rough explanation. You can know more about Singleton’s and other design patterns from [here](https://www.geeksforgeeks.org/singleton-design-pattern/).

Jumping on to our explanation of creating a Singleton for Fused Location Provider Client. I have a production example of it at the end of the tutorial as well.

### **Singleton class for FusedLocationProviderClient**

I will paste below the code snippet followed by the explanation on what is happening in the singleton.


```
import android.Manifest;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Context;
import android.content.IntentSender;
import android.content.pm.PackageManager;
import android.content.res.Resources;
import android.location.Location;
import android.os.Looper;
import android.support.annotation.NonNull;
import android.support.design.widget.Snackbar;
import android.support.v4.app.ActivityCompat;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

import com.google.android.gms.common.api.ApiException;
import com.google.android.gms.common.api.ResolvableApiException;
import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.LocationCallback;
import com.google.android.gms.location.LocationRequest;
import com.google.android.gms.location.LocationResult;
import com.google.android.gms.location.LocationServices;
import com.google.android.gms.location.LocationSettingsRequest;
import com.google.android.gms.location.LocationSettingsResponse;
import com.google.android.gms.location.LocationSettingsStatusCodes;
import com.google.android.gms.location.SettingsClient;
import com.google.android.gms.tasks.OnFailureListener;
import com.google.android.gms.tasks.OnSuccessListener;
import java.text.DateFormat;
import java.util.Date;

public class LocationGrabberSingleton {
private static LocationGrabberSingleton instance = null;
    private static final String TAG = LocationGrabberSingleton.class.getName();
    public static final int REQUEST\_PERMISSIONS\_REQUEST\_CODE = 34;

    /**
     * Constant used in the location settings dialog.
     */
    public static final int REQUEST\_CHECK\_SETTINGS = 0x1;

    /**
     * The desired interval for location updates. Inexact. Updates may be more or less frequent.
     */
    private static final long UPDATE\_INTERVAL\_IN\_MILLISECONDS = 500;

    /**
     * The fastest rate for active location updates. Exact. Updates will never be more frequent
     * than this value.
     */
    private static final long FASTEST\_UPDATE\_INTERVAL\_IN\_MILLISECONDS =
            UPDATE\_INTERVAL\_IN\_MILLISECONDS / 2;

    // Keys for storing activity state in the Bundle.
    private final static String KEY\_REQUESTING\_LOCATION\_UPDATES = "requesting-location-updates";
    private final static String KEY\_LOCATION = "location";
    private final static String KEY\_LAST\_UPDATED\_TIME\_STRING = "last-updated-time-string";

    // Labels.
    private String mLatitudeLabel;/**
     * Provides access to the Fused Location Provider API.
     */
    public FusedLocationProviderClient mFusedLocationClient;

    /**
     * Provides access to the Location Settings API.
     */
    public SettingsClient mSettingsClient;

    /**
     * Stores parameters for requests to the FusedLocationProviderApi.
     */
    public LocationRequest mLocationRequest;

    /**
     * Stores the types of location services the client is interested in using. Used for checking
     * settings to determine if the device has optimal location settings.
     */
    public LocationSettingsRequest mLocationSettingsRequest;

    /**
     * Callback for Location events.
     */
    public LocationCallback mLocationCallback;

    /**
     * Represents a geographical location.
     */
    public Location mCurrentLocation;
    private String mLongitudeLabel;
    private String mLastUpdateTimeLabel;

    /**
     * Tracks the status of the location updates request. Value changes when the user presses the
     * Start Updates and Stop Updates buttons.
     */
    public Boolean mRequestingLocationUpdates;

    /**
     * Time when the location was updated represented as a String.
     */
    public String mLastUpdateTime;

    private Activity activity;
private LocationGrabberSingleton(Context context)
{   Log.d("Enter","Entered constructor");
    mRequestingLocationUpdates = false;
    mLastUpdateTime = "";
    mFusedLocationClient = LocationServices.getFusedLocationProviderClient(context);
    mSettingsClient = LocationServices.getSettingsClient(context);
    createLocationRequest();
    buildLocationSettingsRequest();

}
public static LocationGrabberSingleton getInstance(Context context)
{  
    if(instance == null)
    {
        instance = new LocationGrabberSingleton(context);
    }
    return instance;
}

    /**
     * Uses a {@link com.google.android.gms.location.LocationSettingsRequest.Builder} to build
     * a {@link com.google.android.gms.location.LocationSettingsRequest} that is used for checking
     * if a device has the needed location settings.
     */
    public void buildLocationSettingsRequest() {
        LocationSettingsRequest.Builder builder = new LocationSettingsRequest.Builder();
        builder.addLocationRequest(mLocationRequest);
        mLocationSettingsRequest = builder.build();
    }

    /**
     * Sets up the location request. Android has two location request settings:
     * {@code ACCESS\_COARSE\_LOCATION} and {@code ACCESS\_FINE\_LOCATION}. These settings control
     * the accuracy of the current location. This sample uses ACCESS\_FINE\_LOCATION, as defined in
     * the AndroidManifest.xml.
     * <p/>
     * When the ACCESS\_FINE\_LOCATION setting is specified, combined with a fast update
     * interval (5 seconds), the Fused Location Provider API returns location updates that are
     * accurate to within a few feet.
     * <p/>
     * These settings are appropriate for mapping applications that show real-time location
     * updates.
     */
    public void createLocationRequest() {
        mLocationRequest = new LocationRequest();

        // Sets the desired interval for active location updates. This interval is
        // inexact. You may not receive updates at all if no location sources are available, or
        // you may receive them slower than requested. You may also receive updates faster than
        // requested if other applications are requesting location at a faster interval.
        mLocationRequest.setInterval(UPDATE\_INTERVAL\_IN\_MILLISECONDS);

        // Sets the fastest rate for active location updates. This interval is exact, and your
        // application will never receive updates faster than this value.
        mLocationRequest.setFastestInterval(FASTEST\_UPDATE\_INTERVAL\_IN\_MILLISECONDS);

        mLocationRequest.setPriority(LocationRequest.PRIORITY\_HIGH\_ACCURACY);
    }
    public boolean checkPermissions(Context context) {
        int permissionState = ActivityCompat.checkSelfPermission(context,
                Manifest.permission.ACCESS\_FINE\_LOCATION):
        return permissionState == PackageManager.PERMISSION\_GRANTED;
    }


    public void requestPermissions(final Activity activity) {
        boolean shouldProvideRationale =
                ActivityCompat.shouldShowRequestPermissionRationale(activity,
                        Manifest.permission.ACCESS\_FINE\_LOCATION);
        Log.d("Rationale", String.valueOf(shouldProvideRationale));
        // Provide an additional rationale to the user. This would happen if the user denied the
        // request previously, but didn't check the "Don't ask again" checkbox.
        if (shouldProvideRationale) {
            Log.d("Hold On",String.valueOf(R.string.permission\_rationale));
             showSnackbar("Location permission is needed for core functionality",
                    android.R.string.ok, new View.OnClickListener() {
                        @Override
                        public void onClick(View view) {
                            // Request permission
                            ActivityCompat.requestPermissions(activity,
                                    new String[]{Manifest.permission.ACCESS\_FINE\_LOCATION},
                                    REQUEST\_PERMISSIONS\_REQUEST\_CODE);
                        }
                    },activity);
        } else {
            Log.i(TAG, "Requesting permission");
            // Request permission. It's possible this can be auto answered if device policy
            // sets the permission in a given state or the user denied the permission
            // previously and checked "Never ask again".
            ActivityCompat.requestPermissions(activity,
                    new String[]{Manifest.permission.ACCESS\_FINE\_LOCATION},
                    REQUEST\_PERMISSIONS\_REQUEST\_CODE);
        }
    }
    /**
     * Shows a {@link Snackbar}.
     *
     * @param mainTextStringId The id for the string resource for the Snackbar text.
     * @param actionStringId   The text of the action item.
     * @param listener         The listener associated with the Snackbar action.
     */
    private void showSnackbar(final String mainTextStringId, final int actionStringId,
                              View.OnClickListener listener,Activity activity) {
       
        Snackbar.make(
                activity.findViewById(android.R.id.content),
                mainTextStringId,
                Snackbar.LENGTH\_INDEFINITE)
                .setAction(Resources.getSystem().getString(actionStringId), listener).show();
    }
}
```
This is a working Singleton that you can use in your next code project. Coming on to the specifics, i have written this singleton highly based on the git code posted by the Android team here.

There was a situation when i needed to create a singleton of the [FusedLocationProviderClient](https://androidmonks.com/fusedlocationproviderclient-singleton/) to grab location data continuously from user and this was the result of it.

From the docs there are 3 things to note when using the FusedLocationProviderClient

* Firstly, request permission from the user to switch on the location in the device. This is handled by the **requestPermission()** method. It builds a location settings request and switches the location on.
* Secondly, the **createLocationRequest()** starts capturing the location once the user allows the location to be switched on. It updates the mCurrentLocation variable every 500 millisecond. This way the user can use the value from mCurrentLocation and perform the action
* There is another method suggested by the Docs, which is the **getLastLocation()**, this will perform a one time call to the **LocationRequest()** call and returns the value

Additionally, we also have **checkPermission()** method which is responsible to check if the permission has been granted by the user or not. This is handy when you have to re-ask for permission from the user.

The above Singleton was used in the app FollowMyFriend which is a location tracker which is currently on app store.

Some of the screenshots from the App.

![Screenshot Image](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Screenshot Image](https://lh3.googleusercontent.com/dvFtiJbfYpVrP2WhYv3xIiXi8AYOdqX1yZgdWuJxVcGFrmugx6lUQEWf-eMuEte3qldX=w1440-h790-rw) Captures the location and shows it on the screen![Screenshot Image](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Screenshot Image](https://lh3.googleusercontent.com/tCWUoVlgNpFks3adXQlVKNCup__q0Iy7J9HDPSfvi4NE4482eqBYsI3D0tIy8uruA8A=w1440-h790-rw) Screenshot for locationprovideclient in action![Screenshot Image](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![Screenshot Image](https://lh3.googleusercontent.com/vbCjKb_NVYXFjtnMlF1PRGuOV_iKSwxhRxj1J1QbTe8krPTPSfL60II_aoCu28JnGg=w1440-h790-rw) App screenMake sure to check it out there.

Do drop comments below if you have any.

***“Learn and Be Curious”***

[Tweet](https://twitter.com/intent/tweet?text=Singleton+for+FusedLocationProviderClient&url=https%3A%2F%2Fandroidmonks.com%2Ffusedlocationproviderclient-singleton%2F)Pin[Share](https://www.facebook.com/share.php?u=https%3A%2F%2Fandroidmonks.com%2Ffusedlocationproviderclient-singleton%2F)0 Shares Categories [Android](https://androidmonks.com/category/android/), [Android programming](https://androidmonks.com/category/android-programming/), [app android](https://androidmonks.com/category/app-android/) [1 Comment](https://androidmonks.com/fusedlocationproviderclient-singleton/#comments) Post navigation[ViewAnimator in Android | AndroidMonks](https://androidmonks.com/viewanimator/)[AsyncTask with Progressbar Example | AndroidMonks](https://androidmonks.com/asynctask-progressbar/)###  1 thought on “Singleton for FusedLocationProviderClient”

1. ![](data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)![](https://secure.gravatar.com/avatar/dd92dcb3742969956d728c8d64a8a2d0?s=50&r=g) Dioptre  [November 3, 2019 at 4:47 am](https://androidmonks.com/fusedlocationproviderclient-singleton/#comment-1204) how to use this in an activity? could you please provide code snippet for that?

 [Reply](#comment-1204)

