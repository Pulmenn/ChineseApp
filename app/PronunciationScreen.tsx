// app/PronunciationScreen.tsx
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

export default function PronunciationScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Заголовок */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>文</Text>
          </View>
          <Text style={styles.title}>Произношение</Text>
        </View>
      </View>

      {/* Список уроков */}
      <View style={styles.lessonsContainer}>
        <TouchableOpacity
          style={styles.lessonItem}
          onPress={() => router.push('/LessonContentScreen?title=Вступление')}
        >
          <View style={styles.lessonContent}>
            <Text style={styles.lessonIcon}>📍</Text>
            <Text style={styles.lessonText}>Вступление</Text>
          </View>
          <Text style={styles.checkmark}>✅</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.lessonItem}
          onPress={() => router.push('/LessonContentScreen?title=Учим%20слог%20I')}
        >
          <View style={styles.lessonContent}>
            <Text style={styles.lessonIcon}>📚</Text>
            <Text style={styles.lessonText}>Учим слог I</Text>
          </View>
          <Text style={styles.checkmark}>✅</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.lessonItem}
          onPress={() => router.push('/LessonContentScreen?title=Учим%20слог%20II')}
        >
          <View style={styles.lessonContent}>
            <Text style={styles.lessonIcon}>📚</Text>
            <Text style={styles.lessonText}>Учим слог II</Text>
          </View>
          <Text style={styles.checkmark}>✅</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.lessonItem}
          onPress={() => router.push('/LessonContentScreen?title=Учим%20слог%20III')}
        >
          <View style={styles.lessonContent}>
            <Text style={styles.lessonIcon}>📚</Text>
            <Text style={styles.lessonText}>Учим слог III</Text>
          </View>
          <Text style={styles.checkmark}>✅</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.lessonItem}
          onPress={() => router.push('/LessonContentScreen?title=Тоны')}
        >
          <View style={styles.lessonContent}>
            <Text style={styles.lessonIcon}>🎵</Text>
            <Text style={styles.lessonText}>Тоны</Text>
          </View>
          <Text style={styles.checkmark}>✅</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.lessonItem}
          onPress={() => router.push('/LessonContentScreen?title=Тест')}
        >
          <View style={styles.lessonContent}>
            <Text style={styles.lessonIcon}>✏️</Text>
            <Text style={styles.lessonText}>Тест</Text>
          </View>
          <Text style={styles.checkmark}>✅</Text>
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
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
  },
  backButton: {
    padding: 10,
  },
  backText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
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
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  lessonsContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  lessonItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  lessonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lessonIcon: {
    fontSize: 16,
    marginRight: 10,
    color: '#666',
  },
  lessonText: {
    fontSize: 16,
    color: '#333',
  },
  checkmark: {
    fontSize: 16,
    color: '#4CAF50',
  },
});