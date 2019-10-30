# ecoworks-app

An Conservation Education App for Ecoworks in Detroit

Cross-Platform Mobile Application using React Native

# Pages

### Lessons

List of lessons from Ecoworks' workshops on energy and water conservation.

### Home

Base page with links to other pages.

# Code Format

source code is located in Ecoworks directory with vanilla React Native and android and ios configurations.

# Expo 

Configurations to run the app through expo is located in Ecoworks-expo. 
/bin/ecoworks-start-expo is a bash script that will copy the src from Ecoworks and run the app using expo.
/bin/save-expo is a script that will copy the src from the Ecoworks-expo directory back to Ecoworks if /bin/ecoworks-start-expo is interupted.



# ISSUES

Unknown argument type '__attribute__' in method -[RCTAppState getCurrentAppState:error:]. Extend RCTConvert to support this type.
- react-native 0.57.4 breaks with xcode11
- Fix in 0.59.9
- Issue mentioned in https://github.com/facebook/react-native/pull/25146 0.57.4 fix
