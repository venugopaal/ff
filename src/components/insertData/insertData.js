import React,{Component} from 'react';

import './insertData.css'

export default class InsertData extends Component{
constructor(props){
  super(props);
  this.state={

  }
}

render(){
  return(
    <div className='container-fluid' id='data-container'>

<div className='row header-row'>
      <div className='col-md-12 heading'>
      <h6 className='heading-text'>Company Details</h6>
      </div>
      </div>

<div className='row formrow'>
    <form id='form-container'>

    <div class="form-group row">
   <label for="inputEmail3" class="col-sm-3 col-form-label">Name</label>
   <div class="col-sm-9">
     <input type="email" class="form-control" id="inputEmail3" placeholder="Name" />
   </div>
   </div>

   <div class="form-group row">
   <label for="inputEmail3" class="col-sm-3 col-form-label">City</label>
   <div class="col-sm-9">
    <input type="email" class="form-control" id="inputEmail3" placeholder="City" />
   </div>
   </div>

    <div class="form-group row">
   <label for="inputEmail3" class="col-sm-3 col-form-label">Email</label>
   <div class="col-sm-9">
     <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
   </div>
 </div>

 <div class="form-group row">
<label for="inputEmail3" class="col-sm-3 col-form-label">Phone(land line)</label>
<div class="col-sm-9">
  <input type="email" class="form-control" id="inputEmail3" placeholder="Phone(land line)" />
</div>
</div>

<div class="form-group row">
<label for="inputEmail3" class="col-sm-3 col-form-label">Mobile</label>
<div class="col-sm-9">
 <input type="email" class="form-control" id="inputEmail3" placeholder="Mobile" />
</div>
</div>

<div class="form-group row">
<label for="inputEmail3" class="col-sm-3 col-form-label">Pin Cone</label>
<div class="col-sm-9">
 <input type="email" class="form-control" id="inputEmail3" placeholder="Pin Cone" />
</div>
</div>

<div class="form-group row">
<label for="inputEmail3" class="col-sm-3 col-form-label">Address</label>
<div class="col-sm-9">
 <input type="email" class="form-control" id="inputEmail3" placeholder="Address" />
</div>
</div>

<br />
<div class="form-group row">
<div class="col-sm-2">
</div>
<div class="col-sm-10">
<button type="button" class="btn btn-primary">Submit</button>
</div>
</div>

    </form>
    </div>

    </div>
  )
}


}
