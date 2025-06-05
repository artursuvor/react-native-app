
````markdown
# MyApp

A React Native application.

---

## Requirements

- Node.js (latest LTS recommended)
- Java Development Kit (JDK) 17
- Android Studio with configured Android SDK and emulator/device
- React Native CLI (not Expo)

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
````

2. Install dependencies:

   ```bash
   npm install
   ```

3. Make sure environment variables are set:

   * `JAVA_HOME` points to your JDK 17 installation folder
   * `ANDROID_HOME` points to your Android SDK folder (e.g. `C:\Users\artur\AppData\Local\Android\Sdk`)
   * Add Android SDK `platform-tools` and `tools` directories to your `PATH`

---

## Running on Android

1. Start an Android emulator or connect an Android device.

2. Start the Metro Bundler (if not running):

   ```bash
   npx react-native start
   ```

3. In another terminal, run:

   ```bash
   npx react-native run-android
   ```

---

## Notes

* iOS build and run are **not supported** on Windows. To develop for iOS, you need macOS with Xcode.
* This project uses React Native CLI (no Expo).
* ESLint and Prettier are configured for code quality.
* Jest is set up for testing with the default React Native preset.

---

## Useful commands

* Run linter:

  ```bash
  npm run lint
  ```

* Run tests:

  ```bash
  npm test
  ```

```

Want me to help add `package.json` scripts or anything else?
```
