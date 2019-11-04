import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';import { Observable } from 'rxjs';
import { post } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class BookFetchService {

 public username:String;
 public token:String;
 public repository:String;
 public fileName:String;



    constructor(private ht:HttpClient) { } 

    private headers = {

        Authorization: 'Token caf85ac13cc5c171ccecbda05f414df89681c550'
    
    };

    
    private headers1 = {

      Authorization: 'Batman ' + this.token 
  
  };
  

    private httpOptions = {
    
        headers : this.headers
    
    };

    private httpOptions1 = {
    
      headers : this.headers1
  
  };
    url = "https://api.github.com/user/repos";

    repo:String="";
    path:String="";
    fileurl:String="";


    getBook():Observable<any>
    {
      return this.ht.get<any>("");
    }

    addBook(bookObj):Observable<any>
    { 
        console.log('obj: ', bookObj);
    return this.ht.post<any>(this.url,bookObj, this.httpOptions); 
    
    }

    addContent(contObj):Observable<any> 
    {console.log('obj: ', contObj);

    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        'Authorization': 'Batman eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxMjM0NSIsImlhdCI6MTU3MjM0MDk3MCwiYXV0aG9yaXRpZXMiOltdfQ._1tOkEN9Iw2H3OoGKiUee1-4bZvcux2_zorgGfgQiLJIukjMk9CzuRIFVaHUuC84g0rV6I3RdgcuSEcoB6wGww'
      })
    };

      return this.ht.post<any>("http://localhost:8080/content-service/api/v1/save",contObj, httpOptions); 

    }


    createFile(bookObj):Observable<any>
    {
      this.repo=this.repository;
      this.path=this.fileName;
      console.log('obj: ', bookObj);
      return this.ht.put<any>("https://api.github.com/repos/contently-books/"+this.repo+"/contents/"+this.path,bookObj, this.httpOptions); 


    }

    getGit(name)
    {this.repo="mom";
      this.path=name;
      return this.ht.get<any>("https://api.github.com/repos/contently-books/"+this.repo+"/contents/"+this.path, this.httpOptions);

    }


 



}
