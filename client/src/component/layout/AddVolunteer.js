import React, { Fragment } from 'react';

const AddVolunteer = (props) =>{
    return(
        <Fragment>
            <div class="row heading-bg bg-blue">
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                    <h5 class="txt-light">Add Volunteer Form</h5>
                </div>

                <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                    <ol class="breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#"><span>Add</span></a></li>
                    <li class="active"><span>Volunteer</span></li>
                    </ol>
                </div>
            </div>
            
            <div class="row">
                <div class="col-sm-12">
                    <div class="panel panel-default card-view">
                        <div class="panel-heading">
                            <div class="pull-left">
                                <h6 class="panel-title txt-dark">Add Volunteer Form</h6>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-wrapper collapse in">
                            <div class="panel-body">
                                <div class="form-wrap">
                                    <form>
                                        <div class="form-group">
                                            <label class="control-label mb-10 text-left">Roll Number</label>
                                            <input type="number" class="form-control rounded-input" placeholder='Roll Number' />
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label mb-10 text-left">Full Name</label>
                                            <input type="text" name='name' class="form-control rounded-input" placeholder="Full name" />
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label mb-10 text-left" for="email">Email</label>
                                            <input type="email" id="email" name="email" class="form-control rounded-input" placeholder="Email"/>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label mb-10 text-left" for="class">Class</label>
                                            <input type="text" id="class" name="clas" class="form-control rounded-input" placeholder="Class"/>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label mb-10 text-left" for="batch">Batch</label>
                                            <input type="text" id="batch" name="batch" class="form-control rounded-input" placeholder="Batch"/>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label mb-10 text-left">Phone Number</label>
                                            <input type="text" name="phnno" placeholder="" data-mask="99999-99999" class="form-control rounded-input"/>
                                        </div>
                                        <input type='submit' className='btn btn-block btn-success'/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>					
        </Fragment>
    );
}
export default AddVolunteer;