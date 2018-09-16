import React from 'react';

import GreetingSign from './GreetingSign';

const STAR_RADIUS_MIN = 4;
const STAR_RADIUS_MAX = 8;

const STAR_COLOURS = ['#36c5c8', '#f71f79', '#15d1d4', '#fffc66', '#da015b', '#66ff73'];

export default class StarrySky extends React.Component {

    state = {
        stars: [],
        numStars: 80
    };

    generateStar = () => {
        return {
            xPos: Math.random() * this.refs.canvas.width,
            yPos: Math.random() * this.refs.canvas.height,
            radius: Math.floor((Math.random() * STAR_RADIUS_MAX) + STAR_RADIUS_MIN),
            colour: STAR_COLOURS[Math.floor(Math.random() * STAR_COLOURS.length)]
        };
    };

    fitCanvasToContainer = (canvas) => {
        canvas.style.width = '95%';
        canvas.style.height = '50%';

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    };

    initializeStars = () => {
        const canvas = this.refs.canvas;
        this.fitCanvasToContainer(canvas);
        const ctx = canvas.getContext("2d");

        let starArray = [];
        for (let i = 0; i < this.state.numStars; i++)
            starArray.push(this.generateStar());

        this.setState({ stars: starArray }, () => {
            console.log(this.state.stars)
            this.drawStars(canvas, ctx);
        });
    };

    drawStars = (canvas, ctx) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < this.state.numStars; i++) {
            const star = this.state.stars[i];
            ctx.fillStyle = star.colour;

            // Rotate at a random angle along the center
            ctx.save();
            ctx.translate(star.xPos + (star.radius / 2), star.yPos + (star.radius / 2));
            const degree = Math.floor(Math.random() * 360);
            ctx.rotate(degree * Math.PI / 180);

            ctx.fillRect(-star.radius / 2, -star.radius / 2, star.radius, star.radius)
            ctx.restore();
        }
    };

    componentDidMount() {
        this.initializeStars();
        window.addEventListener("resize", this.initializeStars);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.initializeStars);
    }

    render() {
        return (
            <div className="starry-sky">
                <canvas ref="canvas" width="0" height="0" className="starry-sky__canvas" />
                <GreetingSign />
            </div>
        );
    }

}