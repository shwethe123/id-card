import { ref } from 'vue';
import { db } from '../firebase/config'; // Ensure correct path
import { collection, getDocs } from 'firebase/firestore';

const useImagePost = () => {
  const posts = ref([]);
  const error = ref('');
  const loading = ref(true);

  const fetchImages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'images'));
      posts.value = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      loading.value = false;
    } catch (err) {
      error.value = `Error fetching images: ${err.message}`;
      loading.value = false;
    }
  };

  return { posts, error, loading, fetchImages };
};

export default useImagePost;
