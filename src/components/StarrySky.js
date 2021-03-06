import React from 'react';

import GreetingSign from './GreetingSign';

const FPS = 40;
const NUM_STARS = 100;

const STAR_RADIUS_MIN = 4;
const STAR_RADIUS_MAX = 8;

const STAR_COLOURS = ['2,144,254', '80,235,237', '247,31,121', '255,252,102', '164, 255, 164', '255, 255, 255'];

let canvas = undefined;
let ctx = undefined;


export default class StarrySky extends React.Component {

    state = {
        stars: [],
        numStars: NUM_STARS,
        width: window.innerWidth,
        height: window.innerHeight
    };

    generateStar = () => {
        return {
            xPos: Math.random() * this.refs.canvas.width,
            yPos: Math.random() * this.refs.canvas.height,
            radius: Math.floor((Math.random() * STAR_RADIUS_MAX) + STAR_RADIUS_MIN),
            angle: Math.floor(Math.random() * 360),
            opacity: Math.random(),
            twinkleRate: Math.random() * 0.02,
            colour: STAR_COLOURS[Math.floor(Math.random() * STAR_COLOURS.length)]
        };
    };

    initializeStars = () => {
        // Update state only if window size has actually changed
        //if (this.state.width != window.innerWidth || this.state.height != window.innerHeight) {
            this.setState({ width: window.innerWidth, height: window.innerHeight });
        //}

        canvas = this.refs.canvas;
        ctx = canvas.getContext("2d");

        let starArray = [];
        for (let i = 0; i < this.state.numStars; i++)
            starArray.push(this.generateStar());

        this.setState({ stars: starArray }, () => this.drawStars());
    };

    drawStars = () => {
        if (canvas && ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < this.state.numStars; i++) {
                const star = this.state.stars[i];

                if (star.opacity > 1) {
                    star.twinkleRate *= -1;
                } else if (star.opacity <= 0) {
                    star.twinkleRate = Math.abs(star.twinkleRate);
                }

                star.opacity += star.twinkleRate;

                ctx.save();

                ctx.fillStyle = `rgba(${star.colour}, ${star.opacity})`;
                ctx.translate(star.xPos + (star.radius / 2), star.yPos + (star.radius / 2));
                ctx.rotate(star.angle * Math.PI / 180);
                ctx.fillRect(-star.radius / 2, -star.radius / 2, star.radius, star.radius);

                ctx.restore();
            }
        }
    };

    isMobile = () => {
        return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    };

    onResize = () => {
        // Call function only if the width is changed (height changes on scroll for mobile devices)
        //if (this.state.width != window.innerWidth) {
        //    this.initializeStars();
        //}
        if (!this.isMobile()) {
            this.initializeStars();
        }
    };

    // Workaround function to resize canvas on mobile devices
    onOrientationChange = () => {
        //setTimeout(() => {
        //    this.initializeStars();
        //}, 300);
    };

    componentDidMount() {
        this.initializeStars();
        window.addEventListener('resize', this.onResize);
        window.addEventListener('orientationchange', this.onOrientationChange);
        setInterval(this.drawStars, 1000 / FPS);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
        window.removeEventListener('orientationchange', this.onOrientationChange);
    }

    render() {
        return (
            <div className="starry-sky" style={{ height: this.state.height}}>
                <canvas ref="canvas" width={this.state.width * 0.95} height={this.state.height} className="starry-sky__canvas" />
                <GreetingSign />
            </div>
        );
    }

}