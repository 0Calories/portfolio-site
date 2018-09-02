import React from 'react';

import GreetingSign from './GreetingSign';

const STAR_RADIUS = 5;

export default class StarrySky extends React.Component {

    state = {
        stars: [],
        numStars: 40
    };

    generateStar = () => {
        console.log('generateStar() called');
        return {
            xPos: Math.random() * this.refs.canvas.width,
            yPos: Math.random() * this.refs.canvas.height
            // colour: Random colour from an array of selections
        };
    };

    fitCanvasToContainer = (canvas) => {
        canvas.style.width = '100%';
        canvas.style.height = '100%';

        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    };

    initializeStars = () => {
        let starArray = [];
        for (let i = 0; i < this.state.numStars; i++)
            starArray.push(this.generateStar());

        this.setState({ stars: starArray }, () => {
            console.log(this.state.stars)

            const canvas = this.refs.canvas;
            //this.fitCanvasToContainer(canvas);
            const ctx = canvas.getContext("2d");

            this.drawStars(canvas, ctx);
        });
    };

    drawStars = (canvas, ctx) => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < this.state.numStars; i++) {
            const star = this.state.stars[i];
            ctx.beginPath();
            ctx.fillRect(star.xPos, star.yPos, STAR_RADIUS, STAR_RADIUS)
            
            ctx.fillStyle = "rgb(" + 
                Math.floor(Math.random() * 256) + "," +
                Math.floor(Math.random() * 256) + "," +
                Math.floor(Math.random() * 256) + ")";
            ctx.fill();
        }
    };

    componentDidMount() {
        // this.initializeStars();
        // <canvas ref="canvas" width="640" height="260" className="starry-sky__canvas" />
    }

    render() {
        return (
            <div className="starry-sky">
                <GreetingSign />
            </div>
        );
    }

}