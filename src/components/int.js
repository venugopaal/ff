import React,{Component} from 'react';


export default class Example extends Component{
    constructor(props){
        super(props);
        this.state={
            text:`%3Cmeta+http-equiv%3D%22Content-Type%22+content%3D%22text%2Fhtml%3B+charset%3DUTF-8%22%2F%3E%0D%0A%3Cmeta+http-equiv%3D%22x-ua-compatible%22+content%3D%22ie%3Dedge%22%2F%3E%0D%0A%3Cmeta+name%3D%22googlebot%22+content%3D%22noodp%22+%2F%3E%0D%0A%3Cmeta+property%3D%22og%3Asite_name%22+content%3D%22Ferns+N+Petals%22%2F%3E%0D%0A%3Cmeta+property%3D%22fb%3Aapp_id%22+content%3D%221665069133747888%22%2F%3E%0D%0A%3Ctitle%3EFlower+Delivery+Online+%7C+India%27s+No.1+Florist+-+Ferns+N+Petals%3C%2Ftitle%3E%0D`
        }
    }

    render(){
        return(
            <div>Interview{this.state.text}</div>
        )
    }

}
