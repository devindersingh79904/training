import React, { Fragment } from 'react';

const CompanyProfile = () =>{
    return (
        <Fragment>
            <div class="row heading-bg  bg-blue">
                <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                    <h5 class="txt-light">Volunteer Profile</h5>
                </div>
                <div class="col-lg-9 col-sm-8 col-md-8 col-xs-12">
                    <ol class="breadcrumb">
                        <li><a href="/">Dashboard</a></li>
                        <li><a href="#"><span>Volunteer profile</span></a></li>
                    </ol>
                </div>
            </div>


            <div class="row">
                <div class="col-md-12">
                    <div class="panel panel-default card-view">
                        <div class="panel-heading">
                            <div class="pull-left">
                                <h6 class="panel-title txt-dark">Volunteer Details</h6>
                            </div>
                            <div class="pull-right">
                                <h6 class="txt-dark">Summary</h6>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="panel-wrapper collapse in">
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-xs-6">
                                        <span class="txt-dark head-font inline-block capitalize-font mb-5"></span>
                                        <address class="mb-15">
                                            <span class="address-head mb-5">Volunteer Name here</span>
                                            Volunteer Rollno Here <br/>
                                            <abbr title="Email">Email :</abbr> company@domain.com
                                        </address>
                                    </div>
                                    <div class="col-xs-6 text-right">
                                        <span class="txt-dark head-font inline-block capitalize-font mb-5"></span>
                                        <address class="mb-15">
                                            <span class="address-head mb-5">Total drives : 20</span>
                                        </address>
                                    </div>
                                </div>                            
                                <div class="seprator-block"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
					<div class="col-lg-12 col-md-6">
						<div class="panel panel-primary card-view">
							<div class="panel-heading mb-20">
								<div class="pull-left">
									<h6 class="panel-title txt-light">Detail duty assigned</h6>
								</div>
								<div class="clearfix"></div>
							</div>
							<div class="panel-wrapper collapse in">
								<div class="panel-body">
									<div class="table-wrap">
										<div class="table-responsive">
											<table  class="table  top-countries" >
												<tbody>
													<tr>
														<td>
															Date
														</td>
														<td>
															Drive
														</td>
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
    )
}

export default CompanyProfile;