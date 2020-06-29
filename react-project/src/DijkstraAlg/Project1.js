import React, { Component } from 'react';
import Path from './path';


export default class Project1 extends Component {
    constructor(props) {
        super(props);
            this.state = { x: '', y: '', num: 0, start: '', finish: '', points: [], distance: ''}
    }
    

    componentDidUpdate() {
        const {num,  points} = this.state;
        if(points.length < num){
        this.plotCity();
        }
    }

    drawRoad(start, finish){
        const sx = this.state.points[start-1].x 
        const sy = this.state.points[start-1].y 
        const fx = this.state.points[finish-1].x 
        const fy = this.state.points[finish-1].y 
        const distance = Math.round(Math.sqrt(Math.pow((fx-sx), 2) + Math.pow((fy-sy), 2)))
        const midpointX = (sx + fx) / 2 
        const midpointY = (sy + fy) / 2 
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(fx, fy);
        ctx.stroke();
        ctx.font = '12px Courier'
        ctx.fillStyle = 'red'
        ctx.fill()
        ctx.fillText(distance + 'km', midpointX, midpointY);
        this.setState({...this.state, distance: distance});
    }

    plotCity() {
        const {x, y, num, points} = this.state;
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
        ctx.font = '15px Courier'
        ctx.fillStyle = 'blue'
        ctx.fill()
        ctx.fillText('City'+num, x, y);
        console.log(points[points.length-1])
        points.push({x, y})
            
    }

    setXY(canvas, param){
        var rect = canvas.getBoundingClientRect()        
        this.setState({...this.state, x : param.clientX - rect.left, y: param.clientY - rect.top, num: this.state.num + 1});
    }

    clearState(){
    this.setState({...this.state, x: '', y: '', start:'', finish:''})
    }

    handleMouseDown = (param) => { 
        this.setXY(this.refs.canvas, param);
     }

     handleSubmit=(evt)=>{
         const {start, finish} = this.state;
            if(start &&  finish){
            this.drawRoad(this.state.start, this.state.finish)
            }
         evt.preventDefault();
     }

     handleChangeStart = (evt) => {
         this.setState({...this.state, start: evt.target.value})
     }

     handleChangeFinish = (evt) => {
        this.setState({...this.state, finish: evt.target.value})
    }

    render() {
        const {num, start, finish, distance} = this.state;
        return (
            <div>
                <h3>Travelling Salesman Graph</h3>
                <p>Click to add cities</p>
                <canvas onMouseDown={this.handleMouseDown} ref='canvas' style={{border: '2px solid black'}}width={450} height={450}>Travelling salesman graph</canvas>
                
                <form onSubmit={this.handleSubmit} >
                    <p>Type in city numbers to connect them </p>
                    <input type='text' value={this.state.start} onChange={this.handleChangeStart} />
                    <input type='text' value={this.state.finish} onChange={this.handleChangeFinish}/>
                    <input type='submit' value='Submit' />
                    <Path num={num} start={start} finish={finish} distance={distance} />
                </form>
            </div>
        )
    }
}
