import { style } from '@angular/animations';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { NewjobService } from '../service/newjob/newjob.service';
// import * as mapboxgl from 'mapbox-gl';
// import { MapboxSearchBox } from '@mapbox/search-js';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {

  currentMarker: mapboxgl.Marker | null = null;


  
  // map: mapboxgl.Map | undefined;

  constructor(private newjobService: NewjobService) {
  }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    // (mapboxgl as any).accessToken = 'pk.eyJ1IjoicGxveS12b292YSIsImEiOiJjbTV1aHprOG8xNGtqMmxwdnB3MWk3aHBuIn0.y_MuM1domEi5CLeivvOj4A';
    // const map = new mapboxgl.Map({
    //   container: 'map',
    //   // style: 'mapbox://styles/mapbox/streets-v12',
    //   center: [100.5018, 13.7563],
    //   zoom: 5
    // })

    // // new mapboxgl.Marker({offset: [0,0]})
    // //   .setLngLat([100.5018, 13.7563]) // ตำแหน่งของ Marker
    // //   .addTo(map);

    // // ฟังอีเวนต์ click บนแผนที่
    // map.on('click', (event) => {
    //   const lngLat = event.lngLat; // ได้ค่า longitude และ latitude
    //   console.log(`ตำแหน่งที่เลือก:`, lngLat);
    //   if (this.currentMarker) {
    //     this.currentMarker.remove();
    //   }

    //   // สร้าง Marker ใหม่และเก็บไว้ใน currentMarker
    //   this.currentMarker = new mapboxgl.Marker({ color: 'red', })
    //     .setLngLat([lngLat.lng, lngLat.lat]) // ตำแหน่งของ Marker
    //     .addTo(map);

    //   const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lngLat.lng},${lngLat.lat}.json?access_token=${(mapboxgl as any).accessToken}`;

    //   fetch(geocodingUrl)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       if (data.features && data.features.length > 0) {
    //         const placeName = data.features[0].place_name; // ชื่อสถานที่
    //         console.log(`ชื่อสถานที่: ${placeName}`);
    //         alert(`คุณคลิกที่: ${placeName}`);
    //       } else {
    //         console.log('ไม่พบข้อมูลสถานที่สำหรับตำแหน่งนี้');
    //       }
    //     })
    //     .catch((error) => {
    //       console.error('เกิดข้อผิดพลาดในการดึงข้อมูลสถานที่:', error);
    //     });

    // });
    mapboxgl.accessToken = 'pk.eyJ1IjoicGxveS12b292YSIsImEiOiJjbTV1aHprOG8xNGtqMmxwdnB3MWk3aHBuIn0.y_MuM1domEi5CLeivvOj4A';
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      center: [100.5018, 13.7563], // starting position [lng, lat]
      zoom: 15, // starting zoom
      pitch: 20, // starting pitch
      bearing: -20 // starting bearing
    });

    map.on('style.load', () => {
      map.addSource('line', {
        type: 'geojson',
        lineMetrics: true,
        data: {
          type: 'LineString',
          coordinates: [
            [2.293389857555951, 48.85896319631851],
            [2.2890810326441624, 48.86174223718291]
          ]
        }
      });

      map.addLayer({
        id: 'line',
        source: 'line',
        type: 'line',
        paint: {
          'line-width': 12,
          // The `*-emissive-strength` properties control the intensity of light emitted on the source features.
          // To enhance the visibility of a line in darker light presets, increase the value of `line-emissive-strength`.
          'line-emissive-strength': 0.8,
          'line-gradient': [
            'interpolate',
            ['linear'],
            ['line-progress'],
            0,
            'red',
            1,
            'blue'
          ]
        }
      });
    });

    // ฟังอีเวนต์ click บนแผนที่
    map.on('click', async (event) => {
      const lngLat = event.lngLat; // ได้ค่า longitude และ latitude
      // console.log(`ตำแหน่งที่เลือก:`, lngLat);

      // ลบ Marker เก่าหากมี
      if (this.currentMarker) {
        this.currentMarker.remove();
      }

      // สร้าง Marker ใหม่
      this.currentMarker = new mapboxgl.Marker({ color: 'red' })
        .setLngLat([lngLat.lng, lngLat.lat])
        .addTo(map);

      // สร้าง URL สำหรับ Geocoding API
      const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lngLat.lng},${lngLat.lat}.json?access_token=${(mapboxgl as any).accessToken}`;

      try {
        const response = await fetch(geocodingUrl);
        const data = await response.json();
        // console.log(this.newjobService);


        if (data.features && data.features.length > 0) {
          const placeName = data.features[0].place_name; // ชื่อสถานที่
          this.newjobService.name_address = placeName;
          // console.log(`ชื่อสถานที่: ${this.newjobService.name_address}`);
          // เพิ่ม Popup แสดงชื่อสถานที่
          const popup = new mapboxgl.Popup({ offset: 25 }).setText(placeName);
          this.currentMarker.setPopup(popup).togglePopup();
        } else {
          console.log('ไม่พบข้อมูลสถานที่สำหรับตำแหน่งนี้');
        }
      } catch (error) {
        console.error('เกิดข้อผิดพลาดในการดึงข้อมูลสถานที่:', error);
      }
    });

  //   window.addEventListener('load', () => {
  //     const searchBox = new MapboxSearchBox();
  //     searchBox.accessToken = (mapboxgl as any).accessToken;
  //     searchBox.options = {
  //         types: 'address,poi',
  //         proximity: [-73.99209, 40.68933]
  //     };
  //     searchBox.marker = true;
  //     searchBox.mapboxgl = mapboxgl;
  //     map.addControl(searchBox);
  // });

  //   window.addEventListener('load', () => {

  //     const collection = mapboxgl.autofill({
  //         accessToken: (mapboxgl as any).accessToken
  //     });
  // });


  }

}
