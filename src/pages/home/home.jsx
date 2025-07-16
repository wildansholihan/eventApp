import styles from './home.style';
import HomeContent from './content/content';
import BlogHomeNavbar from './navbar/navbar';
import { View } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <BlogHomeNavbar />
      <HomeContent />
    </View>
  );
};

export default Home;