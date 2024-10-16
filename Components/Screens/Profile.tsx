import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation();

  return (
    <ScrollView style={styles.container}>
      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image 
          style={styles.profileImage} 
          source={{ uri: 'https://example.com/default-profile.png' }} // Replace with actual image
        />
        <View style={styles.accountDetails}>
          <Text style={styles.accountTitle}>{t('profile.yourAccount')}</Text>
          <Text style={styles.joinText}>{t('profile.joinCommunity')}</Text>
          <TouchableOpacity style={styles.signInButton}>
            <Text style={styles.signInText}>{t('profile.signIn')}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Survey Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>{t('profile.surveyBannerTitle')}</Text>
        <TouchableOpacity style={styles.bannerButton}>
          <Text style={styles.bannerButtonText}>{t('profile.takeSurvey')}</Text>
        </TouchableOpacity>
      </View>

      {/* Grow Smart Together Section */}
      <View style={styles.infoSection}>
        <View style={styles.iconContainer}>
          <Image 
            style={styles.icon} 
            source={{ uri: 'https://example.com/share-icon.png' }} // Replace with actual icon
          />
        </View>
        <View style={styles.infoContent}>
          <Text style={styles.infoTitle}>{t('profile.growSmartTitle')}</Text>
          <Text style={styles.infoText}>
            {t('profile.growSmartDescription')}
          </Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>{t('profile.shareAgroClinic')}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Feedback Section */}
      <View style={styles.infoSection}>
        <View style={styles.iconContainer}>
          <Image 
            style={styles.icon} 
            source={{ uri: 'https://example.com/feedback-icon.png' }} // Replace with actual icon
          />
        </View>
        <View style={styles.infoContent}>
          <Text style={styles.infoTitle}>{t('profile.feedbackTitle')}</Text>
          <Text style={styles.infoText}>
            {t('profile.feedbackDescription')}
          </Text>
          <TouchableOpacity>
            <Text style={styles.linkText}>{t('profile.giveFeedback')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E6E6E6',
    marginRight: 16,
  },
  accountDetails: {
    flex: 1,
  },
  accountTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  joinText: {
    color: '#666',
    marginBottom: 12,
  },
  signInButton: {
    backgroundColor: '#0C7666',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  signInText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },
  banner: {
    backgroundColor: '#E0F7F4',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  bannerTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
  },
  bannerButton: {
    backgroundColor: '#0C7666',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 20,
  },
  bannerButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
    textAlign: 'center',
  },
  infoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E0F7F4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  icon: {
    width: 30,
    height: 30,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  infoText: {
    color: '#666',
    marginBottom: 8,
  },
  linkText: {
    color: '#0C7666',
    fontWeight: '600',
    fontSize: 14,
  },
});
