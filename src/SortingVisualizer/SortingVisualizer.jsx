import React from 'react'
import './SortingVisualizer.css'
import * as SortingAlgorithms from '../SortingVisualizer/SortingAlgorithms/SortingAlgorithms.js'
const lengthOfArray = 95;
export default class SortingVisualizer extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            array: [],              //This is going to be main array
        };
    }

    componentDidMount() {            //When frist time page load it call restArray method
        this.restArray();
    }

    restArray() {
        const array = [];
        for(let i = 0; i < lengthOfArray; i++){
            array.push(randomIntFromInterval(10,670));
        }
        this.setState({array});
    }

    MergeSort() {
        const animations = SortingAlgorithms.getMergeSortAnitmations(this.state.array);
        for(let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if(isColorChange){
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? 'yellow' : 'red';
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 10);
            }else{
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * 10);
            }
        }
    }

    QuickSort() {
        const animations = SortingAlgorithms.getQuickSortAnitmations(this.state.array);
        for(let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 2 === 0 ? 'yellow' : 'red';
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * 10);
            if(i%2 === 0){
                setTimeout(() => {
                    let temp1 = parseInt(barOneStyle.height,10);
                    let temp2 = parseInt(barTwoStyle.height,10);
                    barOneStyle.height = `${temp1}px`;
                    barTwoStyle.height = `${temp2}px`;
                }, i * 10);
            }
        }
    }

    HeapSort() {

    }

    BubbleSort() {
        const animations = SortingAlgorithms.getBubbleSortAnimations(this.state.array);
        for(let i = 0; i < animations.length; i++){
            const arrayBars = document.getElementsByClassName('array-bar');
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 2 === 0 ? 'yellow' : 'red';
                
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * 1);
                if(i%2 === 0){
                    setTimeout(() => {
                        let temp = parseInt(barOneStyle.height,10);
                        let temp2 = parseInt(barTwoStyle.height,10);
                        barOneStyle.height = `${temp}px`;
                        barTwoStyle.height = `${temp2}px`;
                    }, i * 1);
                }
        }
    }

    render() {
        const {array} = this.state;
        return (
            <div className="array-container">
                {array.map((value, idx) => {
                    return (
                        <div
                         className = 'array-bar'
                          key = {idx}
                          style = {{height: `${value}px`}}>
                    </div>)
                })}
                <button className = 'button1' onClick = {() => this.restArray() }>New Array</button>
                <button className = 'button2' onClick = {() => this.MergeSort() }>Merge Sort</button>
                <button className = 'button3' onClick = {() => this.QuickSort() }>Quick Sort</button>
                <button className = 'button4' onClick = {() => this.HeapSort() }>Heap Sort</button>
                <button className = 'button5' onClick = {() => this.BubbleSort() }>Bubble Sort</button>
            </div>
        );
    }
}

function randomIntFromInterval(min, max){       //From StackOverFlow
    return Math.floor(Math.random() * (max-min+1) + min);
}