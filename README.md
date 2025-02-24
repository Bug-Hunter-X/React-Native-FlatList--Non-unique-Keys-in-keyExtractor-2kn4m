# React Native FlatList: Non-unique Keys in keyExtractor

This repository demonstrates a common error in React Native's `FlatList` component: using a `keyExtractor` function that does not provide unique keys for each item in the data array. This leads to incorrect rendering and unexpected behavior.

## Problem

The `keyExtractor` function is crucial for `FlatList`'s performance and correct rendering.  If keys are not unique, `FlatList` may reuse components inappropriately, causing data inconsistencies and visual glitches. The example shows a list with duplicate IDs, causing items to display the wrong content.

## Solution

Ensure your `keyExtractor` always returns a unique string or number for every item in your data array.  UUIDs are a great way to achieve this.  The solution demonstrates this using the 'uuid' package.

## How to run

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Run `npx react-native run-android` (or `npx react-native run-ios`) to start the app.