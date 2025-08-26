import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
  subject?: string;
}

export interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  sendContactMessage(contactData: ContactMessage): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.apiUrl}/contact`, contactData);
  }
}
