import React, { Fragment } from 'react'

const Error404 = () =>{
    return(
        <Fragment>
			<div class="row heading-bg bg-blue">
						<div class="col-lg-3 col-md-4 col-sm-4 col-xs-12">
						  <h5 class="txt-light">Error</h5>
						</div>
					</div>
            <div class="table-struct full-width full-height">
				<div class="table-cell vertical-align-middle">
					<div class="auth-form  ml-auto mr-auto no-float">
						<div class="panel panel-default card-view mb-0">
							<div class="panel-wrapper collapse in">
								<div class="panel-body">
									<div class="row">
										<div class="col-sm-12 col-xs-12 text-center">
											<h3 class="mb-20 txt-danger">Page Not Found</h3>
											<p class="font-18 txt-dark mb-15">We are sorry, the page you requested cannot be found.</p>
											<p>The URL may be misspelled or the page you're looking for is no longer available.	</p>
											<a class="btn btn-success btn-icon right-icon btn-rounded mt-30" href="/"><span>back to home</span><i class="fa fa-space-shuttle"></i></a>
											<p class="font-12 mt-15">TPC, DCSA, PU</p>
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