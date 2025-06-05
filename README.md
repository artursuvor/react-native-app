
# MyApp

A React Native application built using React Native CLI.

---

## 🚀 Requirements

- **Node.js** (latest LTS recommended)
- **Java Development Kit (JDK) 17**
- **Android Studio** with configured Android SDK and emulator/device
- **React Native CLI** (this project does **not** use Expo)

---

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd MyApp


2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   * `JAVA_HOME` should point to your JDK 17 installation directory.
   * `ANDROID_HOME` should point to your Android SDK directory, for example:
     `C:\Users\artur\AppData\Local\Android\Sdk`
   * Add the following SDK tools to your system `PATH`:

     * `${ANDROID_HOME}/platform-tools`
     * `${ANDROID_HOME}/tools`
     * `${ANDROID_HOME}/tools/bin`

---

## ▶️ Running the App on Android

1. Start an Android emulator via Android Studio or connect a physical Android device with USB debugging enabled.

2. Start Metro Bundler (if not already running):

   ```bash
   npx react-native start
   ```

3. In a new terminal window, run the app on the device/emulator:

   ```bash
   npx react-native run-android
   ```

---

## ⚠️ Important Notes

* **iOS is not supported on Windows.** To build and run on iOS, you need a macOS environment with Xcode installed.
* This project uses **React Native CLI** — Expo is not used.
* ESLint and Prettier are preconfigured to enforce code style and quality.
* Jest is configured for running tests with the React Native preset.

---

## 🛠 Useful Scripts

Run these commands from the project root:

| Command        | Description                      |
| -------------- | -------------------------------- |
| `npm run lint` | Run ESLint to check code quality |
| `npm test`     | Run Jest tests                   |
| `npm start`    | Start the Metro bundler          |

---


---
