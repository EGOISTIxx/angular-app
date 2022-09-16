import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constants/api';

@Injectable({
  providedIn: 'root',
})
export class DevicesService {
  constructor(private http: HttpClient) {}

  getDevices() {
    return this.http.post(
      `${API_URL}/device/metering_devices`,
      {},
    );
  }
}
