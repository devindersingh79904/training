import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const Error404 = () =>{
    return(
        <Fragment>
			<div className="row heading-bg bg-blue">
						<div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
						  <h5 className="txt-light">Error</h5>
						</div>
					</div>
            <div className="table-struct full-width full-height">
				<div className="table-cell vertical-align-middle">
					<div className="auth-form  ml-auto mr-auto no-float">
						<div className="panel panel-default card-view mb-0">
							<div className="panel-wrapper collapse in">
								<div className="panel-body">
									<div className="row">
										<div className="col-sm-12 col-xs-12 text-center">
											<h3 className="mb-20 txt-danger">Page Not Found</h3>
											<p className="font-18 txt-dark mb-15">We are sorry, the page you requested cannot be found.</p>
											<p>The URL may be misspelled or the page you're looking for is no longer available.	</p>
											<Link className="btn btn-success btn-icon right-icon btn-rounded mt-30" to="/"><span>back to home</span><i className="fa fa-space-shuttle"></i></Link>
											<p className="font-12 mt-15">TPC, DCSA, PU</p>
										</div>	
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

export default Error404;