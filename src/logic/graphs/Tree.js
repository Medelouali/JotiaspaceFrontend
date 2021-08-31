
const Node=class grahpNode{
    constructor(data, id, family){
        this.data=data;
        this.right=null;
        this.left=null;
        this.parent=null;
        this.id=id;
        this.family=family;
    }

}

const Tree=class TreeClass{
    constructor(){
        this.root=null;
        this.current=null;//helps us keep track of where we are
        this.currentTail=null;//helps us to insert data
        this.direction=true;//it directs us for insertion, true for right, false for left
        this.nodes=0; 
    }

    //Mehtods of the tree data structure:
    //get the current Node
    getCurrent(){
        const response={ root: null, children: [] };
        const leftRight = this.direction ? "right": "left";
        if(this.current){
            let position=this.current[leftRight];
            response.root =  this.isRoot() ? null: this.current.data;
            while(position){
                response.children.push(position.data);
                position = position[leftRight]
            };
            if(this.isRoot()) response.children.unshift(this.current.data);
        };
        return response;
    };

    getLength(){
        let temp = this.current, len=0;
        while(temp){
            temp=(this.direction ? temp.right: temp.left);
            len++;
        };
        return len;
    };

    //Move the current to the next node
    moveStep(director=this.direction){
        const dir = director ? "right": "left";
        if(this.current)
            if(this.current[dir]){
                this.current=this.current[dir];
                this.currentTail=this.current;
            }
    }

    //Move to a specific position
    moveTo(index, isBase=this.isRoot()){
        const limit=isBase ? this.getLength(): this.getLength()-1;
        let position=0;
        if(index<0 || index>=limit) return;
        if(!isBase) index++;
        while(position++!==index) this.moveStep();
        this.direction=!this.direction;
        this.setTail();
        return this;
    }

    //Move the current up
    moveUp(){
        if(!this.current) return;
        if(this.current.parent){
            if(this.current.parent.id!==this.current.family){
                this.current=this.current.parent;
                this.moveUp();
            }else{
                this.direction=!this.direction;
                this.current=this.current.parent
            };
        }
        this.setTail();
        return this;
    }

    //inserting nodes to the graph
    insertNode(data, direction=this.direction){
        const leftRight=direction ? "right": "left";
        if(this.root===null){
            this.currentTail=this.current=this.root=new Node(data, this.nodes, this.nodes);
            return this;
        }
        if(this.currentTail[leftRight]){
            this.currentTail=this.currentTail[leftRight];
            this.insertNode(data, direction);
        }else{
            this.currentTail[leftRight]=new Node(data, ++this.nodes, this.current.id);
            this.currentTail[leftRight].parent=this.currentTail;
            this.currentTail=this.currentTail[leftRight];
            // this.incrementParent();
        };
        return this;
    }

    //checking if we are on root
    isRoot(){
        return this.root===this.current;
    }

    //reseting the tail
    setTail(director=this.direction){
        const dir = director ? "right": "left";
        this.currentTail=this.current;
        if(this.currentTail) while(this.currentTail[dir]) this.currentTail=this.currentTail[dir];
    }

    increment(what, index){
        let pos=0, temp=this.current;
        if(!this.current) return;
        if(index<0 || index>=this.getLength()) return;
        while(pos++!==index) this.moveStep();
        if(this.current) this.current.data[what]++;
        this.current=temp;
    }

    incrementParent(){
        let temp=this.current;
        if(!this.root) return 0;
        if(this.isRoot()){
            this.current.data.replies++;
            return;
        };
        this.moveUp();
        this.current.data.replies++;
        this.current=temp;
    }

    // getReplies(){
    //     const replies=0;
        
    // }
}

export default Tree;