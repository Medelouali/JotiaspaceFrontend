
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
        this.direction=true;//it directs us for insertion, true for left, false for left
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

    //Move the current to left
    moveLeft(){
        if(this.current.left){
            this.current=this.current.left;
            this.currentTail=this.current;
            this.direction=false;
        }
    }

    //Move the current to left
    moveRight(){
        if(this.current.right){
            this.current=this.current.right;
            this.currentTail=this.current;
            this.direction=true;
        }
    }

    //Move to a specific position
    moveTo(index){
        let position=0;
        if(index<0 || index>=this.getLength()) return;
        while(position++!==index) this.direction ? this.moveRight(): this.moveLeft();
        this.direction=!this.direction;
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
    }

    //inserting nodes to the graph
    insertNode(data, direction=this.direction){
        const leftRight=direction ? "right": "left";
        if(this.root===null)
            return this.currentTail=this.current=this.root=new Node(data, this.nodes++, 0);
        if(this.currentTail[leftRight]){
            this.currentTail=this.currentTail[leftRight];
            this.insertNode(data, direction);
        }else{
            this.currentTail[leftRight]=new Node(data, this.nodes, this.current.id);
            this.currentTail[leftRight].parent=this.currentTail;
            this.currentTail=this.currentTail[leftRight];
            this.nodes++;
        };
    }

    //checking if we are on root
    isRoot(){
        return this.root===this.current;
    }
}

export default Tree;