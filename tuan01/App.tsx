import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import InfoRow from './components/InfoRow';
import SearchField from './components/SearchField';

export default function App() {
  return (
    <ScrollView >
      <Header />
      <InfoRow />
      <SearchField />
    </ScrollView>
  );
}


