import { ref, watch, computed, reactive, Ref } from "vue";
import { getUserByUserId } from "@/services/firebase";

const user = reactive({ data: { uid: "", photoURL: "", displayName: "" } });

interface Post {
  value: string[];
}
const likedPost: Post = reactive({ value: [] });

//==================================
//Setter
async function setUser(uid) {
  const filterStore = useFilterStore();
  const targetUser = await getUserByUserId(uid);

  user.data = targetUser;
  likedPost.value = targetUser.liked;

  const filterObj = targetUser.savedFilter;
  if (filterObj) {
    filterStore.loadFilter(Object.keys(filterObj), filterObj);
  }
}

function resetUser() {
  user.data = { uid: "", photoURL: "", displayName: "" };
}

//==================================
//Getter
const getUser = computed(() => user.data);
// const isAuthed = computed(() => isLoggedIn.value);
//==================================

export default function useUser() {
  return {
    getUser,
    setUser,
    resetUser,
    likedPost,
  };
}
