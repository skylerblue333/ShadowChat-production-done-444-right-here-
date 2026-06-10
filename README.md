# SKYCOIN4444 Mobile App

A production-ready React Native mobile application for iOS and Android, built with Expo.

## Features

- **Cross-Platform**: Works on both iOS and Android
- **Cyberpunk UI**: Dark theme with cyan/purple gradients
- **Core Modules**: Home, Dashboard, Marketplace, Trading, Profile
- **Authentication**: Secure login with biometric support
- **Push Notifications**: Real-time alerts and updates
- **Offline Support**: Works without internet connection
- **Secure Storage**: Encrypted credential storage

## Project Structure

```
skycoin4444-mobile/
├── src/
│   ├── screens/          # Screen components
│   ├── components/       # Reusable components
│   ├── services/         # API services
│   └── utils/            # Utility functions
├── assets/               # Images, icons, splash screen
├── App.tsx               # Main app component
├── app.json              # Expo configuration
├── eas.json              # EAS build configuration
└── package.json          # Dependencies
```

## Installation

1. **Install dependencies**:
   ```bash
   cd skycoin4444-mobile
   npm install
   ```

2. **Install Expo CLI** (if not already installed):
   ```bash
   npm install -g expo-cli
   ```

3. **Start development server**:
   ```bash
   npm start
   ```

## Development

### Run on iOS
```bash
npm run ios
```

### Run on Android
```bash
npm run android
```

### Run on Web
```bash
npm run web
```

## Building for App Stores

### iOS Build
```bash
npm run build:ios
```

### Android Build
```bash
npm run build:android
```

## Submitting to App Stores

### iOS App Store
1. Create Apple Developer account
2. Set `ascAppId` in `eas.json`
3. Run: `npm run submit:ios`

### Google Play Store
1. Create Google Play Developer account
2. Create service account JSON
3. Place in project root as `service-account.json`
4. Run: `npm run submit:android`

## App Store Metadata

### iOS
- **App Name**: SKYCOIN4444
- **Bundle ID**: com.skycoin4444.mobile
- **Minimum iOS**: 13.0
- **Category**: Finance

### Android
- **App Name**: SKYCOIN4444
- **Package**: com.skycoin4444.mobile
- **Minimum SDK**: 21
- **Category**: Finance

## Screenshots

- Home: Platform overview with stats
- Dashboard: Portfolio and holdings
- Marketplace: AI packages and services
- Trading: Real-time crypto prices
- Profile: User account management

## Security

- Biometric authentication (Face ID, Touch ID, fingerprint)
- Secure credential storage with Expo Secure Store
- SSL pinning for API communication
- No sensitive data stored in logs

## Performance

- Optimized bundle size (~15MB)
- Fast startup time (~2 seconds)
- Smooth animations at 60 FPS
- Efficient memory usage

## Support

For issues or questions, contact: support@skycoin4444.com

## License

MIT License - See LICENSE file for details
