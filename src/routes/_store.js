import { writable } from "svelte/store";

export const URL_GRAPH = "http://localhost:8004/graphql";

function useLocalStorage(store) {
  const json = localStorage.getItem("user");
  if (json && json !== "undefined") {
    store.set(JSON.parse(json));
  }

  store.subscribe(value => localStorage.setItem("user", JSON.stringify(value)));
}

export const user = writable();
if (process.browser) {
  useLocalStorage(user, "sapper"); // FIXME: Do not hardcode storage key
}
