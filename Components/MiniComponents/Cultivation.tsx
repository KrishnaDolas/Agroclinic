import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';

// Data for cultivation tasks
const tasks = [
  { id: '1', title: 'Plant Selection', icon: '🌱' },
  { id: '2', title: 'Planting', icon: '🌾' },
  { id: '3', title: 'Site Selection', icon: '🏞️' },
  { id: '4', title: 'Field Preparation', icon: '🧑‍🌾' },
  { id: '5', title: 'Weeding', icon: '🔪' },
  { id: '6', title: 'Irrigation', icon: '💧' },
  { id: '7', title: 'Fertilization Chemical', icon: '💊' },
  { id: '8', title: 'Preventive Measure', icon: '⚠️' },
  { id: '9', title: 'Harvesting', icon: '🌾' },
  { id: '10', title: 'Post Harvest', icon: '🥖' },
];

const Cultivation = () => {
  const [selectedTab, setSelectedTab] = useState('By Task');

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.backButton}>
        </TouchableOpacity>
      </View>

      {/* Crop Selector */}
      <View style={styles.selectorContainer}>
        <Text style={styles.selectorText}>See relevant information on</Text>
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>🌿 Soybean</Text>
        </TouchableOpacity>
      </View>

      {/* Tab Selector */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'By Task' && styles.activeTab]}
          onPress={() => setSelectedTab('By Task')}
        >
          <Text style={[styles.tabText, selectedTab === 'By Task' && styles.activeTabText]}>By Task</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, selectedTab === 'By Stage' && styles.activeTab]}
          onPress={() => setSelectedTab('By Stage')}
        >
          <Text style={[styles.tabText, selectedTab === 'By Stage' && styles.activeTabText]}>By Stage</Text>
        </TouchableOpacity>
      </View>

      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.taskItem}>
            <Text style={styles.taskIcon}>{item.icon}</Text>
            <Text style={styles.taskText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        scrollEnabled={false} // FlatList won't scroll as ScrollView takes over the scroll behavior
      />
    </ScrollView>
  );
};

export default Cultivation;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    marginRight: 16,
  },
  backButtonText: {
    fontSize: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  selectorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  selectorText: {
    fontSize: 16,
    color: '#666',
  },
  dropdown: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 4,
  },
  dropdownText: {
    fontSize: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginHorizontal: 4,
  },
  activeTab: {
    backgroundColor: '#007bff',
  },
  tabText: {
    fontSize: 16,
    color: '#333',
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomColor: '#f0f0f0',
    borderBottomWidth: 1,
  },
  taskIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  taskText: {
    fontSize: 16,
  },
});
