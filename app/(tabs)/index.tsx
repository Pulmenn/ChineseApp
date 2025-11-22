// app/(tabs)/index.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

const handleLessonPress = (lessonName: string) => {
  let color = '#FFB74D'; // по умолчанию
  let icon = '📚';

  if (lessonName === 'Основы 2') {
    color = '#BA68C8';
    icon = '📘';
  } else if (lessonName === 'Семья') {
    color = '#FF7043';
    icon = '🏠';
  } else if (lessonName === 'Животные') {
    color = '#F48FB1';
    icon = '🐱';
  }

  router.push(`/LessonScreen?title=${encodeURIComponent(lessonName)}&color=${encodeURIComponent(color)}&icon=${encodeURIComponent(icon)}`);
};

  const handleRepeatPress = () => {
    router.push('/TasksScreen');
  };

  const handleChineseCharPress = () => {
    router.push('/PronunciationScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Иероглиф — кликабельный */}
      <TouchableOpacity onPress={handleChineseCharPress} style={styles.chineseCharTouchable}>
        <View style={styles.chineseCharContainer}>
          <Text style={styles.chineseChar}>文</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.subtitle}>Произношение</Text>

      {/* Кнопки уроков — построчно */}
      <View style={styles.lessonsContainer}>
        {/* Строка 1: 1 круг */}
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.lessonButton, { backgroundColor: '#FFB74D' }]}
            onPress={() => handleLessonPress('Основы 1')}
          >
            <Text style={styles.lessonSymbol}>📚</Text>
            <Text style={styles.buttonText}>Основы 1</Text>
          </TouchableOpacity>
        </View>

        {/* Строка 2: 2 круга */}
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.lessonButton, { backgroundColor: '#BA68C8' }]}
            onPress={() => handleLessonPress('Основы 2')}
          >
            <Text style={styles.lessonSymbol}>📘</Text>
            <Text style={styles.buttonText}>Основы 2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.lessonButton, { backgroundColor: '#FF7043' }]}
            onPress={() => handleLessonPress('Семья')}
          >
            <Text style={styles.lessonSymbol}>🏠</Text>
            <Text style={styles.buttonText}>Семья</Text>
          </TouchableOpacity>
        </View>

        {/* Строка 3: 1 круг */}
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.lessonButton, { backgroundColor: '#F48FB1' }]}
            onPress={() => handleLessonPress('Животные')}
          >
            <Text style={styles.lessonSymbol}>🐱</Text>
            <Text style={styles.buttonText}>Животные</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Нижняя панель навигации */}
      <View style={styles.bottomNav}>
<TouchableOpacity
  style={styles.navItem}
  onPress={() => router.push('/SpecialCourseScreen')}
>
  <Text style={styles.navSymbol}>🎓</Text>
  <Text style={styles.navText}>Обучение</Text>
</TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navSymbol}>💪</Text>
          <Text style={styles.navText}>Практика</Text>
        </TouchableOpacity>

        <TouchableOpacity
  style={styles.navItem}
  onPress={handleRepeatPress}
>
  <Text style={styles.navSymbol}>🐱</Text>
  <Text style={styles.navText}>Повторение</Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.navItem}
  onPress={() => router.push('/ProfileScreen')}
>
  <Text style={styles.navSymbol}>📝</Text>
  <Text style={styles.navText}>Профиль</Text>
</TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
  },
  chineseCharTouchable: {
    marginBottom: 10,
  },
  chineseCharContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#00BCD4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  chineseChar: {
    fontSize: 48,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
  lessonsContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  lessonButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  lessonSymbol: {
    fontSize: 32,
    color: '#fff',
    marginBottom: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingHorizontal: 20,
  },
  navItem: {
    alignItems: 'center',
  },
  navSymbol: {
    fontSize: 24,
    color: '#888',
    marginBottom: 4,
  },
  navText: {
    fontSize: 12,
    color: '#888',
  },
});