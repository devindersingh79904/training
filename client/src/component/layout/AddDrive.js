import React, { Fragment } from 'react'

const AddDrive = (props) =>{
    return(
        <Fragment>
            <div class="row heading-bg bg-blue">
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                    <h5 class="txt-light">Add Drive Form</h5>
                </div>

                <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                    <ol class="breadcrumb">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#"><span>Add</span></a></li>
                    <li class="active"><span>Drive</span></li>
                    </ol>
                </div>
            </div>
            
            <div class="row">
                <div class="col-sm-12">
                    <div class="panel panel-default card-view">
                        <div class="panel-heading">
                            <div class="pull-left">
                                <h6 class="panel-title txt-dark">Add Drive Form</h6>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-wrapper collapse in">
                            <div class="panel-body">
                                <div class="form-wrap">
                                    <form>
                                        <div class="form-group">
                                            <label class="control-label mb-10 text-left">Company Name</label>
                                            <input type="text" class="form-control rounded-input" placeholder='Company Name' />
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label mb-10 text-left" for="email">Email</label>
                                            <input type="email" id="email" name="email" class="form-control rounded-input" placeholder="Email"/>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label mb-10 text-left" for="drive-type">Drive Type</label>
                                            <input type="text" id="drive-type" name="type" class="form-control rounded-input" placeholder="Drive type"/>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label mb-10 text-left" for="description">Description</label>
                                            <textarea id='description' name='description' className='form-control rounded-input'></textarea>
                                        </div>
                                        <div class="form-group">
                                            <label class="control-label mb-10 text-left">Date</label>
                                            <input type="text" name="Dte" placeholder="" data-mask="99-99-9999" class="form-control rounded-input" />
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
export default AddDrive;