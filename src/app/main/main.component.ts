import { Component,Renderer2,NgZone,ElementRef,ViewChild, OnInit} from '@angular/core';
import * as THREElib from 'three-js';
import * as RX from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  @ViewChild("mainContent") mainContent: ElementRef;
  THREE: any;
  mouseX = 100;
  mouseY = 100;
  windowHalfX = window.screenX/2;
  windowHalfY =  window.screenY/2;
  SEPARATION = 200;
  AMOUNTX = 10;
  AMOUNTY = 10;
  camera: any;
  scene: any;
  renderer: any;
  constructor(private rend: Renderer2,private ngZone: NgZone) {

  }

  ngOnInit() {
      console.log(window.innerWidth + " " + window.innerHeight)
      this.THREE = THREElib(["Projector","CanvasRenderer"]);
      this.rend.listen('body','mousemove',e => {
          this.mouseX = e.clientX - window.screenX/2;
          this.mouseY = e.clientY - window.screenY/2;
      });
      this.windowHalfX = window.screenX/2;
      this.windowHalfY = window.screenX/2;
      let separation = 100, amountX = 50, amountY = 50,particles, particle;
      this.camera = new this.THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
      this.camera.position.z = 100;
      this.scene = new this.THREE.Scene();
      this.renderer = new this.THREE.CanvasRenderer();
      this.renderer.setPixelRatio( window.devicePixelRatio );
      this.renderer.setSize(window.innerWidth,window.innerHeight-80);
      this.renderer.setClearColorHex(0xffffff,1);
      this.renderer.domElement.style.width="100%";
      this.renderer.domElement.style.height="100%";
      this.renderer.domElement.style.position="absolute";
      this.mainContent.nativeElement.appendChild( this.renderer.domElement );
      // particles
      let PI2 = Math.PI * 2;
      let material = new this.THREE.SpriteCanvasMaterial( {
          color: 0xffffff,
          program: function ( context ) {
              context.beginPath();
              context.arc( 0, 0, 0.5, 0, PI2, true );
              context.fill();
          }
      } );
      let geometry = new this.THREE.Geometry();
      for ( var i = 0; i < 100; i ++ ) {
          particle = new this.THREE.Sprite( material );
          particle.position.x = Math.random() * 2 - 1;
          particle.position.y = Math.random() * 2 - 1;
          particle.position.z = Math.random() * 2 - 1;
          particle.position.normalize();
          particle.position.multiplyScalar( Math.random() * 10 + 450 );
          particle.scale.x = particle.scale.y = 10;
          //this.scene.add( particle );
          geometry.vertices.push( particle.position );
      }
      // lines
      let line = new this.THREE.Line( geometry, new this.THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.5 } ) );
      this.scene.add( line );

      let timer = RX.Observable.timer(20,20);
      timer.subscribe(()=>{
          this.render();
      });
  }
  render() {
      this.camera.position.x += ( this.mouseX - this.camera.position.x ) * .05;
      this.camera.position.y += ( - this.mouseY + 200 - this.camera.position.y ) * .05;
      this.camera.lookAt( this.scene.position );
      this.renderer.render( this.scene, this.camera );
  }

}
