import { Storage } from "@ionic/storage";
const store = new Storage();

(async () => {
  try {
    await store.create();
  } catch (e) {
    console.log(e);
  }
})();
export default function useStorage() {
  return {
    store,
  };
}
