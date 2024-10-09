import { LocalDataBaseService } from './05-dependency-c';
import { PostProvider } from './05-dependency-c';

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private postProvider: PostProvider<Post>) {}

    async getPosts() {
        const jsonDB = this.postProvider;
        this.posts = await jsonDB.getFakePosts();

        return this.posts;
    }
}