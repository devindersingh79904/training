import React, { Fragment } from 'react';

const ViewDrives = () =>{
    return(
        <Fragment>
            <div class="row heading-bg bg-green">
					<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
					  <h5 class="txt-light">View Drive Details</h5>
					</div>
					<div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
					  <ol class="breadcrumb">
						<li><a href="index.html">Dashboard</a></li>
						<li><a href="#"><span>Drive</span></a></li>
						<li class="active"><span>Data</span></li>
					  </ol>
					</div>
				</div>
				
				<div class="row">
					<div class="col-sm-12">
						<div class="panel panel-default card-view">
							<div class="panel-heading">
								<div class="pull-left">
									<h6 class="panel-title txt-dark">Drives data</h6>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="panel-wrapper collapse in">
								<div class="panel-body">
									<div class="table-wrap">
										<div class="table-responsive">
											<table id="example" class="table table-hover display  pb-30" >
												<thead>
													<tr>
														<th>Company Name</th>
														<th>Email</th>
														<th>Date</th>
														<th>Type</th>
														<th>Description</th>
													</tr>
												</thead>
												<tfoot>
													<tr>
													<th>Company Name</th>
														<th>Email</th>
														<th>Date</th>
														<th>Type</th>
														<th>Description</th>
													</tr>
												</tfoot>
												<tbody>
                                                    <tr>
														<td>XYZ COMPANY</td>
														<td>email@domain.com</td>
														<td>2018/12/31</td>
														<td>Workshop</td>
														<td>HEllo yo</td>
													</tr>
                                                    
												</tbody>
											</table>
										</div>
									</div>
								</div>
							</div>
						</div>	
					</div>
				</div>
        </Fragment>
				
    );
}
export default ViewDrives;