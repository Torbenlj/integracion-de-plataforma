// src/app/servicios/api.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // *** ¡IMPORTANTE! Reemplaza esta URL con la que ngrok te da en este momento. ***
  // Asegúrate de que tu ngrok esté corriendo y apuntando a tu Flask app.
  baseUrl = 'https://de0b-186-104-255-49.ngrok-free.app'; // <--- VERIFICA ESTA URL CADA VEZ QUE INICIES NGROK

  constructor(private http: HttpClient) { }

  listarProductos(): Observable<any> {
    const headers = new HttpHeaders({
      'ngrok-skip-browser-warning': 'true'
    });
    return this.http.get<any>(`${this.baseUrl}/listar-productos`, { headers: headers });
  }

  
  agregarAlCarrito(idCarro: string, sku: string, idSucursal: number, cantidad: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': 'true' 
    });

    const payload = {
      id_carro: idCarro,
      sku: sku,
      id_sucursal: idSucursal,
      cantidad: cantidad
    };


    return this.http.post(`${this.baseUrl}/agregar-producto-carro`, payload, { headers: headers });
  }
}
