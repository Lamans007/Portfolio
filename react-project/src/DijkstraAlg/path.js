import React, { Component } from 'react'



export default class path extends Component {
    constructor(props){
        super(props);
        this.state = {PATH : '', vertex: '', edge: '', start: '', finish: ''}
      }

      adjacencyList = {}
      values = []

      componentDidUpdate(prevProps){
          if (prevProps.distance !== this.props.distance){
              this.handleAddEdge();
          }
      }

      enqueue(val, priority) {
        this.values.push({val, priority});
        this.values.sort((a, b) => a.priority - b.priority);
    }

      addVertex(vertex){
        if(!this.adjacencyList[vertex]){
        this.adjacencyList[vertex] = [];
        console.log(this.adjacencyList)}
        }

      addEdge(vertex1,vertex2, weight){
            this.adjacencyList[vertex1].push({node:vertex2,weight});
            this.adjacencyList[vertex2].push({node:vertex1, weight});
        }

      handleAddVertex=()=>{
            this.addVertex(this.props.num);

        }

      handleAddEdge=()=>{
            const {start, finish, distance} = this.props
            this.addVertex(start)
            this.addVertex(finish)
            this.addEdge(start, finish, distance);
            console.log(this.adjacencyList)
        }


      dequeue() {
        return this.values.shift();
      }

      handleEnqueue=()=>{
        //   this.enqueue(x, y) 
      }

      handleDijkstra=()=>{
          this.Dijkstra(this.state.start, this.state.finish)
      }

      handleChangeStartDijskstra = (evt) => {
        this.setState({...this.state, startD: evt.target.value})
    }

    handleChangeFinishDijkstra = (evt) => {
        this.setState({...this.state, finishD: evt.target.value})
    }

    handleSubmitDijkstra=(evt)=>{
        const {startD, finishD} = this.state;
           if(startD &&  finishD){
            this.Dijkstra(startD, finishD)
           }
        evt.preventDefault();
    }

      Dijkstra(start, finish){
        const distances = {};
        const previous = {};
        let path = [] //to return at end
        let smallest;
        //build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                this.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                this.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
    
        }
        // as long as there is something to visit
        while(this.values.length){
            smallest = this.dequeue().val;
            if(smallest === finish){
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while(previous[smallest]){
                    // console.log(previous)
                    path.push(smallest);
                    smallest = previous[smallest];
                    console.log(path)
                }
                break;
            } 
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        this.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        const paths = path.concat(smallest).reverse()
        this.setState({...this.state, PATH: paths})
    }
    

    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmitDijkstra} >
                    <p>Type in starting and finishing point </p>
                    <input type='text' value={this.state.startD} onChange={this.handleChangeStartDijskstra} />
                    <input type='text' value={this.state.finishD} onChange={this.handleChangeFinishDijkstra}/>
                    <input type='submit' value='Submit' />
                    <h4>{this.state.PATH && `Shortest path is ${this.state.PATH}`}</h4>
                </form>

            </div>
        )
    }
}



  



















    //   dequeue=()=> {
        
    //     var shifted= this.state.values.shift();
    //     this.setState(previousState=>({...this.state, values: [...previousState.values]}))
    //     return shifted;
    //   };

        //   enqueue(val, priority) {
    //     this.setState(previousState => ({...this.state, 
    //         values: [...previousState.values, {val, priority}].sort((a, b) => a.priority - b.priority)
    //     }))
    //     };