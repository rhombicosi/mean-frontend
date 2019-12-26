import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Post } from './post.model';

@Injectable({providedIn: 'root'})
export class PostsService {
  private posts: Post[] = [];
  // Subject is essentially an event emitter
  private postsUpdated = new Subject<Post[]>();

  getPosts() {
    // array is a reference type
    // to make a true copy of the array
    // use spread operator to reate a new array
    // with old array object values
    return [...this.posts];
  }

  // listen to event
  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string) {
    const post: Post = { title: title, content: content };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
