// app/SpecialCourseScreen.tsx
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { useRouter } from 'expo-router'; // ← импортируем useRouter

export default function SpecialCourseScreen() {
  const router = useRouter();

  const handleBackPress = () => {
    router.back(); // ← возвращаемся назад
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Заголовок */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.closeButton}>
          <Text style={styles.closeText}>×</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Специальный курс</Text>
      </View>

      {/* Кнопка "Китайские иероглифы" */}
      <TouchableOpacity style={styles.courseButton}>
        <Text style={styles.courseButtonText}>Китайские иероглифы</Text>
      </TouchableOpacity>

      {/* Игровой центр */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Игровой центр</Text>
          <TouchableOpacity style={styles.allGamesButton}>
            <Text style={styles.allGamesText}>ВСЕ ИГРЫ > </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.gameCard}>
          <View style={styles.gameContent}>
            <Text style={styles.gameTitle}>Бесплатная игра дня</Text>
            <Text style={styles.gameSubtitle}>Восприятие на слух</Text>
          </View>
          <View style={styles.gameIconContainer}>
            <Text style={styles.gameIcon}>🍃</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Тренировка */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Тренировка</Text>
        <TouchableOpacity style={styles.trainingItem}>
          <View style={styles.trainingContent}>
            <Text style={styles.trainingIcon}>⭐</Text>
            <Text style={styles.trainingText}>Сложные моменты</Text>
          </View>
          <Text style={styles.trainingCount}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.trainingItem}>
          <View style={styles.trainingContent}>
            <Text style={styles.trainingIcon}>✏️</Text>
            <Text style={styles.trainingText}>Письмо</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  closeButton: {
    padding: 10,
  },
  closeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 10,
  },
  courseButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  courseButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    marginBottom: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  allGamesButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  allGamesText: {
    fontSize: 14,
    color: '#666',
  },
  gameCard: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  gameContent: {
    flex: 1,
  },
  gameTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  gameSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  gameIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ffcc80',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameIcon: {
    fontSize: 24,
    color: '#fff',
  },
  trainingItem: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  trainingContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  trainingIcon: {
    fontSize: 20,
    marginRight: 10,
    color: '#FFD700',
  },
  trainingText: {
    fontSize: 16,
    color: '#333',
  },
  trainingCount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});