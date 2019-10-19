import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { BookService } from '../common/book.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  bookList: Array<any> = [];
  jsonbookList: Array<any> = [];
  bookType: string;
  searchbook: string;
  currentPage: number = 1;
  scrollCallback;
  clickIndex = 0;
  constructor(private bookService:BookService, 
              public router: Router,
              public activateRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.bookType = this.activateRoute.snapshot.params['name'];
    this.scrollCallback = this.getBooks.bind(this);
    // this.getBookList();
  }

  getBooks() {
    return this.bookService.getBooksByCategory(this.currentPage, this.bookType).pipe(tap(this.processData));
  }

  processData = (res) => {
    this.currentPage++;
    this.bookList = this.bookList.concat(res.results);
  }
  
  // getBookList(){
  //   this.bookService.getBookData().subscribe((res:any)=>{
  //     this.jsonbookList = res.results;
  //   })
  // }

  // getting book url if available html, pdf, text as per order
  getBookURL(data){
    let format = data.formats;
    let obj = [format['text/html; charset=us-ascii'], format['text/html'], format['text/plain'], 
               format['text/plain; charset=us-ascii'], format['application/pdf']];

    let newObj = obj.filter((ele)=>{ return ele != undefined;})
    let redirectBookLink = [];

    for(let i=0; i<newObj.length; i++){
      let extension = newObj[i].substr(newObj[i].lastIndexOf('.') + 1);  
      if(extension == 'htm' || extension == 'html' || extension == 'noimages' || extension == 'images'){
        redirectBookLink.push({"html": newObj[i]});
      }
      else if(extension == 'pdf'){
        redirectBookLink.push({"pdf": newObj[i]});
      }
      else if(extension == 'utf-8' || extension == 'txt'){
        redirectBookLink.push({"text": newObj[i]});
      }
      else{
        console.log("no read version");
      }
    }

    if(redirectBookLink.length > 0){
      let value = Object.values(redirectBookLink[0]);
      this.openBookInNewTab(value[0]);
    }
    else{
      alert("No viewable version available");
    }
  }

  // for opening book url in new tab
  openBookInNewTab(url){
    let a = document.createElement('a');
    let linkText = document.createTextNode('fileLink');
    a.appendChild(linkText);
    a.setAttribute('target', '_blank');
    a.href = url;
    a.id = 'fileLink'+this.clickIndex;
    let newID = 'fileLink'+this.clickIndex;
    this.clickIndex++;
    document.body.appendChild(a);
    document.getElementById(newID).click();
  }

  // for search filter
  onSearchChange(val){
    this.bookService.getBooksBySearchFilter(this.currentPage, this.bookType, val).subscribe((res:any)=>{
      this.bookList = res.results;
    })
  }

  // clear or cancel filter
  cancelFilter(){
    this.searchbook = "";
    this.bookService.getBooksByCategory(this.currentPage, this.bookType).subscribe((res:any)=>{
      this.bookList = res.results;
    })
  }

}
