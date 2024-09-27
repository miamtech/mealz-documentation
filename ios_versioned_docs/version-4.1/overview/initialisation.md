---
sidebar_position: 2
label: "Initialisation"
title: "Initialisation"
---

import IOSMealzSingletonSample from './_shared/_MealzSingletonSample.mdx'

## Create module

First & foremost, we recommend creating a Swift Package to house all your Mealz SDK related code.
We understand the issues associated with sharing your entire codebase with us, so creating a shareable module should quell those fears.
The reason we'd like to have it shareable is so that we can discover & solve bugs as quickly as possible.
Instead of "playing telephone" about underlying bugs, having access to your implementation will save you time (& money).

If creating a separate package for the MealzManager creates a circular dependency, it is okay to embed that with your existing code.
We just ask that you at least make your UI code a separate package so that we can advise you (& make updates if necessary).

## MealzManager

We recommend that all the mapping functions that will define the interactions between the SDK and
the host app be wrapped in a main **MealzManager** class.
This class will use methods and attributes defined in our core SDK classes to manage objects such
as the User profile, the Basket, or the selected Store.

:::tip
Make sure this main **MealzManager** class is a singleton and instantiated only once in your runtime.
Here
is a basic implementation
:::

<IOSMealzSingletonSample></IOSMealzSingletonSample>

## Initialisation types

Regarding your type of app you can be belong to one of the two type of initialisation :
  - **Provider** -> You provide recipes and use mealz to push it to a retailer. For example, a food delivery service that works with multiple grocery stores. 
  - **Supplier** -> You are a retailer and you have your own groceries list. For example, a traditional grocery store. 

:::tip
If you don't know which configuration to use you can either ask us or decode the base64 key
that we have provided you and see which field (provider or supplier) has been filled
:::


