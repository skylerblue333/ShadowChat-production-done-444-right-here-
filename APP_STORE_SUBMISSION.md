# App Store Submission Guide

## Pre-Submission Checklist

- [x] Privacy Policy created (PRIVACY_POLICY.md)
- [x] Terms of Service created (TERMS_OF_SERVICE.md)
- [x] App icon created (1024x1024px)
- [x] Screenshots prepared (5-8 per platform)
- [x] App description written
- [x] Keywords defined
- [x] Support email configured
- [x] Version number set (1.0.0)
- [x] Build configuration complete
- [x] Testing completed

## iOS App Store Submission

### 1. Prerequisites
- Apple Developer Account ($99/year)
- Mac computer with Xcode
- Valid Apple ID
- App signing certificate

### 2. Build for iOS
```bash
npm run build:ios
```

This will:
- Create iOS build archive
- Sign with development certificate
- Generate IPA file

### 3. Upload to App Store Connect
```bash
npm run submit:ios
```

Or manually:
1. Open App Store Connect (https://appstoreconnect.apple.com/)
2. Click "My Apps"
3. Click "+"
4. Select "New App"
5. Fill in app details:
   - Name: SKYCOIN4444
   - Bundle ID: com.skycoin4444.mobile
   - SKU: SKYCOIN4444
   - Platform: iOS

### 4. Add App Information
- **Description**: "One Platform. One Identity. Unlimited Opportunity. Trade crypto, learn AI, earn rewards."
- **Keywords**: crypto, trading, AI, finance, blockchain
- **Support URL**: https://support.skycoin4444.com
- **Privacy Policy URL**: https://skycoin4444.com/privacy
- **Category**: Finance

### 5. Add Screenshots
- Minimum: 2 screenshots
- Maximum: 8 screenshots
- Size: 1170x2532px (iPhone)
- Show key features: Home, Dashboard, Trading, Marketplace

### 6. Add App Preview (optional)
- 15-30 second video
- Shows app in action
- Increases conversion rate

### 7. Set Pricing
- Select: Free
- Or set custom price

### 8. Submit for Review
- Click "Submit for Review"
- Apple reviews in 1-3 days
- You'll receive email notification

## Google Play Store Submission

### 1. Prerequisites
- Google Play Developer Account ($25 one-time)
- Android build tools
- Valid Google account

### 2. Build for Android
```bash
npm run build:android
```

This will:
- Create Android APK/AAB
- Sign with release key
- Generate release build

### 3. Upload to Google Play Console
```bash
npm run submit:android
```

Or manually:
1. Open Google Play Console (https://play.google.com/console/)
2. Click "Create app"
3. Fill in app details:
   - App name: SKYCOIN4444
   - Default language: English
   - App category: Finance
   - App type: Application

### 4. Add App Information
- **Short description** (80 chars): "Crypto trading, AI learning, earn rewards"
- **Full description**: "One Platform. One Identity. Unlimited Opportunity. Trade cryptocurrencies, learn AI, play games, earn rewards."
- **Keywords**: crypto, trading, AI, finance, blockchain

### 5. Add Screenshots
- Minimum: 2 screenshots
- Maximum: 8 screenshots
- Size: 1080x1920px (portrait) or 1920x1080px (landscape)
- Show: Home, Dashboard, Trading, Marketplace

### 6. Add Feature Graphic
- Size: 1024x500px
- Showcases app's main feature
- Used in store listing

### 7. Add App Icon
- Size: 512x512px
- PNG format
- No transparency required

### 8. Set Content Rating
- Answer questionnaire
- Get content rating
- Usually 4+ or 12+

### 9. Set Pricing
- Select: Free
- Or set custom price

### 10. Submit for Review
- Click "Review" → "Submit"
- Google reviews in 2-4 hours
- You'll receive email notification

## After Submission

### Monitoring
- Check review status daily
- Respond to reviewer feedback
- Fix any rejection issues

### Common Rejection Reasons
- Incomplete privacy policy
- Missing support contact
- Misleading description
- Bugs or crashes
- Inappropriate content

### Updates
- Submit updates as new versions
- Increment version number (1.0.1, 1.1.0, etc.)
- Follow same submission process

## Support

- **iOS**: https://developer.apple.com/support/
- **Android**: https://support.google.com/googleplay/
- **Our Support**: support@skycoin4444.com

---

**Status**: Ready for submission ✅
