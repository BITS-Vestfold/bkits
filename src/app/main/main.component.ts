import { Component, Renderer2, NgZone, ElementRef, ViewChild, OnInit} from '@angular/core';
import * as THREElib from 'three-js';
import {TimerObservable} from 'rxjs-compat/observable/TimerObservable';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


    @ViewChild('mainContent') mainContent: ElementRef;
    THREE: any;
    mouseX = 0;
    mouseY = 100;
    windowHalfX = window.screenX / 2;
    windowHalfY =  window.screenY / 2;
    SEPARATION = 800;
    AMOUNTX = 0;
    AMOUNTY = 100;
    camera: any;
    scene: any;
    renderer: any;
    constructor(private rend: Renderer2) {

    }

    ngOnInit() {
        this.THREE = THREElib(['Projector','CanvasRenderer']);
        this.rend.listen('body','mousemove',e => {
        let wd = window.screen.width;
        if(e.clientX > wd/2)
            {
            this.mouseX = wd -  e.clientX;
                }
                else
                {
                    this.mouseX = e.clientX;
                    }
                    console.log(window.screen.width);
            this.mouseY = e.clientY - window.screenY;
        });
        this.windowHalfX = window.screenX/ 2;
        this.windowHalfY = window.screenX/2;
        let separation = 100, amountX = 100, amountY = 100,particles;
        this.camera = new this.THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
        this.camera.position.z = 100;
        this.scene = new this.THREE.Scene();
        this.renderer = new this.THREE.CanvasRenderer();
        this.renderer.setPixelRatio( window.devicePixelRatio );
        this.renderer.setSize(window.innerWidth,window.innerHeight-80);
        this.renderer.setClearColorHex(0xffffff,1);
        this.renderer.domElement.style.width='100%';
        this.renderer.domElement.style.height='100%';
        this.renderer.domElement.style.position='absolute';
		this.renderer.domElement.style.bottom= '0';
        this.mainContent.nativeElement.appendChild( this.renderer.domElement );
        // particles
        let PI2 = Math.PI * 2;
        let material = new this.THREE.SpriteCanvasMaterial( {
            color: 0x017FD3,
            program: function ( context ) {
                context.beginPath();
                context.arc( 0, 0, 0.5, 0, PI2, true );
                context.fill();
            }
        } );
        let geometry = new this.THREE.Geometry();
        for ( let i = 0; i < 150; i ++ ) {
            var particle = new this.THREE.Sprite( material );
            particle.position.x = Math.random() * 2 - 1;
            particle.position.y = Math.random() * 2 - 1;
            particle.position.z = Math.random() * 2 - 1;
            particle.position.normalize();
            particle.position.multiplyScalar( Math.random() * 100 + 550 );
            particle.scale.x = 10;
            particle.scale.y = 10;
            particle.geometry = new this.THREE.CircleGeometry();
            this.scene.add( particle );
            geometry.vertices.push( particle.position );
        }
        // lines
        const line = new this.THREE.Line( geometry, new this.THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.3 } ) );
        this.scene.add( line );

        const timer = TimerObservable.create(20, 20);
        timer.subscribe(()=>{
            this.render();
        });
    }
    render() {
        const mx = this.mouseX;
        const my = this.mouseY;
        this.camera.position.x += ( mx*3 - 500 - this.camera.position.x ) * .05;
        this.camera.position.y += ( - my + 200 - this.camera.position.y ) * .05;
        this.camera.lookAt( this.scene.position );
        this.renderer.render( this.scene, this.camera );
    }
}

