Filum React-Native Sample Application
=====================================


# 1. Setup Manual

### 1.1 iOS dependencies
```sh
# Xcode (ver 12+) - Download from Appstore
# Install cocoapods
sudo gem install cocoapod
```

### 1.2 Android dependencies
```sh
# Android Studio (ver 4+) - Download from Google
# Install additional sdk 30, ndk 21
# Install ADB
```

### 1.3 Install Yarn
```sh
npm install --global yarn
```

# 2. Update Write-key to your Filum source
- Log in to your [Filum BDP](https://app.filum.ai)
- Navigate to your mobile source and copy the writekey
- Update your WRITEKEY in the analytics.js file

# 3. Build & Run
```sh
# To install dependencies
yarn



# Note: if above command failed due to Pod installation
#   consider removing `ios/Podfile.lock`
#   run `pod repo update` from `ios` folder
#   then run `yarn` from repo home folder

# Run Packager (before build/launch simulator)
yarn start

# To build & launch simulator in dev environment
yarn android
# or
yarn ios
