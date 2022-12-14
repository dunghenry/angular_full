import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
interface IPost{
  userId: number;
  id: number;
  title: string;
  body: string;
}
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts: IPost[] = [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts(): void{
    this.postService.getPosts().subscribe(data => {
      console.log(data);
      return this.posts = data;
    });
  }

}
