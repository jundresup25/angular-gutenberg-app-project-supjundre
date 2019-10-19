import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://skunkworks.ignitesol.com:8000';

@Injectable({ providedIn: 'root'})

export class BookService {

  constructor(private httpClient: HttpClient) { }  

  // getBookData(){
  //   return this.httpClient.get('assets/json/data.json');
  // }

  getBooksByCategory(page, name) {
    return this.httpClient.get(`${BASE_URL}/books?page=${page}&topic=${name}`);
  }

  getBooksBySearchFilter(page, name, key) {
    return this.httpClient.get(`${BASE_URL}/books?page=${page}&topic=${name}&search=${key}`);
  }

} 