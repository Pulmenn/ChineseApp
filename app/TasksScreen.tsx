// app/TasksScreen.tsx
import { useRouter } from 'expo-router'; // ← импортируем useRouter
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function TasksScreen() {
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
        <TouchableOpacity style={styles.settingsButton}>
          <Text style={styles.settingsText}>Настройки</Text>
        </TouchableOpacity>
      </View>

      {/* Основной контент */}
      <View style={styles.content}>
        <Text style={styles.title}>Задания для повторения на сегодня</Text>
        <Text style={styles.subtitle}>
          Настроено индивидуально для Вас с помощью нашей умной системы повторений
        </Text>

        {/* Блоки слов и грамматики */}
        <View style={styles.taskItem}>
          <View style={styles.taskIconContainer}>
            <Text style={[styles.taskIcon, { color: '#4CAF50' }]}>W</Text>
          </View>
          <Text style={styles.taskLabel}>Слова</Text>
          <Text style={styles.taskCount}>10</Text>
        </View>

        <View style={styles.taskItem}>
          <View style={styles.taskIconContainer}>
            <Text style={[styles.taskIcon, { color: '#E91E63' }]}>G</Text>
          </View>
          <Text style={styles.taskLabel}>Грамматика</Text>
          <Text style={styles.taskCount}>28</Text>
        </View>

        {/* Кнопка НАЧАТЬ */}
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>НАЧАТЬ</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
  },
  closeButton: {
    padding: 10,
  },
  closeText: {
    fontSize: 28,
    fontWeight: '300',
    color: '#333',
  },
  settingsButton: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  settingsText: {
    fontSize: 14,
    color: '#666',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
    color: '#222',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 30,
    lineHeight: 20,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
  },
  taskIconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#e0f7fa',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  taskIcon: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  taskLabel: {
    fontSize: 16,
    flex: 1,
    color: '#333',
  },
  taskCount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  startButton: {
    backgroundColor: '#00BCD4',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 30,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});