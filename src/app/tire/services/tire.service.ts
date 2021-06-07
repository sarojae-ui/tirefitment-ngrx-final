import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class TireService {

  yearUrl = "https://6080be3273292b0017cdbf2a.mockapi.io/years";
  makeUrl = "https://6080be3273292b0017cdbf2a.mockapi.io/makes";
  modelUrl = "https://6080be3273292b0017cdbf2a.mockapi.io/models";
  trimUrl = "https://6080be3273292b0017cdbf2a.mockapi.io/trim";

  constructor(
    private http: HttpClient
  ) {}

  getAllYear(): Observable<any> {
    return this.http.get(this.yearUrl).pipe(
      map((res: any) => res["year"])
    );
  }

  getAllMakeByYear(year: string): Observable<any> {
    return this.http.get(`${this.makeUrl}?year=${year}`).pipe(
      map((res: any) => res['make'])
    );
  }

  getAllModelByYearMake(year: string, make: string): Observable<any> {
    return this.http.get(`${this.modelUrl}?year=${year},make=${make}`).pipe(
      map((res: any) => res['model'])
    );
  }

  getAllTrim(year: string, make: string, model: string): Observable<any> {
    return this.http.get(`${this.trimUrl}?year=${year},make=${make},model=${model}`).pipe(
      map((res: any) => res['trim'])
    );
  }

}
