import { ref } from "vue";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

const getPost = () => {
  let posts = ref([]);
  let error = ref(null);

  let load = async () => {
    try {
      const q = query(collection(db, "id_posts"), orderBy("created_at"));
      const querySnapshot = await getDocs(q);
      posts.value = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
    } catch (err) {
      error.value = "Could not fetch data";
    }
  };

  return { posts, error, load };
};

export default getPost;
