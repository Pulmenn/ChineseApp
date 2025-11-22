// app/ProfileScreen.tsx
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

export default function ProfileScreen() {
  const router = useRouter();

  const handleBackPress = () => {
    router.back(); // ← возвращаемся назад
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Заголовок */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Мой профиль</Text>
      </View>

      {/* Пункты профиля */}
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>👤</Text>
          </View>
          <Text style={styles.itemText}>Имя</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>🎂</Text>
          </View>
          <Text style={styles.itemText}>Возраст</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>✉️</Text>
          </View>
          <Text style={styles.itemText}>Email</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.profileItem}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>🔒</Text>
          </View>
          <Text style={styles.itemText}>Пароль</Text>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Кнопка ВЫЙТИ */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>ВЫЙТИ</Text>
      </TouchableOpacity>
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
  backButton: {
    padding: 10,
  },
  backText: {
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
  profileContainer: {
    flex: 1,
  },
  profileItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#00BCD4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  iconText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  arrow: {
    fontSize: 16,
    color: '#666',
  },
  logoutButton: {
    backgroundColor: '#E91E63',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});