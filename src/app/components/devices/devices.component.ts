import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DevicesService } from 'src/app/services/devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
})
export class DevicesComponent implements OnInit {
  public devices: any[] = [];

  constructor(
    private devicesService: DevicesService,
    private router: Router
  ) {}

  clearData(): void {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/login']);
    this.devices = [];
  }

  ngOnInit(): void {
    this.devicesService.getDevices().subscribe({
      next: (res: any) => {
        this.devices = res.data.metering_devices.data;
      },
      error: () => {
        this.clearData()
      },
    });
  }

  handleClickLogout(): void {
    this.clearData()
  }
}
