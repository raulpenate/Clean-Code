import { PostService } from "./05-dependency-b";
import {
  ApiService,
  JsonDataBaseService,
  LocalDataBaseService,
} from "./05-dependency-c";

// Main
(async () => {
  const localDataBaseService = new LocalDataBaseService();
  const postService = new PostService(localDataBaseService);
  const posts = await postService.getPosts();

  const localDataBaseJsonService = new JsonDataBaseService();
  const postServiceJson = new PostService(localDataBaseJsonService);
  const postsJson = await postServiceJson.getPosts();

  const apiService = new ApiService();
  const postServiceApi = new PostService(apiService);
  const postsApi = await postServiceApi.getPosts();

  console.log({ posts, postsJson, postsApi });
})();
