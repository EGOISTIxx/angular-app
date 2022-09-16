import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constants/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(formData: { email: string; password: string }) {
    return this.http.post(
      `${API_URL}/auth/login`,
      formData
    );
  }
}
