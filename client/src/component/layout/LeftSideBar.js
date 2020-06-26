import React from 'react';

const LeftSideBar = () => {
  return (
    <div className='fixed-sidebar-left'>
      <ul className='nav navbar-nav side-nav nicescroll-bar'>
        <li>
          <a href='#' data-toggle='collapse' data-target='#dashboard_dr'>
            <i className='icon-picture mr-10'></i>Dashboard{' '}
            <span className='pull-right'>
              <span className='label label-success mr-10'>4</span>
              <i className='fa fa-fw fa-angle-down'></i>
            </span>
          </a>
          <ul id='dashboard_dr' className='collapse collapse-level-1'>
            <li>
              <a href='index.html'>Analytical</a>
            </li>
            <li>
              <a href='index2.html'>Demographic</a>
            </li>
            <li>
              <a href='index3.html'>Project</a>
            </li>
            <li>
              <a href='index4.html'>classNameic</a>
            </li>
          </ul>
        </li>
        <li>
          <a href='#' data-toggle='collapse' data-target='#ecom_dr'>
            <i className='icon-basket-loaded mr-10'></i>E-Commerce
            <span className='pull-right'>
              <i className='fa fa-fw fa-angle-down'></i>
            </span>
          </a>
          <ul id='ecom_dr' className='collapse collapse-level-1'>
            <li>
              <a href='e-commerce.html'>Dashboard</a>
            </li>
            <li>
              <a href='product.html'>Products</a>
            </li>
            <li>
              <a href='product-detail.html'>Product Detail</a>
            </li>
            <li>
              <a href='add-products.html'>Add Product</a>
            </li>
            <li>
              <a href='product-orders.html'>Orders</a>
            </li>
            <li>
              <a href='product-cart.html'>Cart</a>
            </li>
            <li>
              <a href='product-checkout.html'>Checkout</a>
            </li>
          </ul>
        </li>
        <li>
          <a
            className='active'
            href='#'
            data-toggle='collapse'
            data-target='#app_dr'
          >
            <i className='icon-grid mr-10'></i>Apps{' '}
            <span className='pull-right'>
              <span className='label label-info mr-10'>9</span>
              <i className='fa fa-fw fa-angle-down'></i>
            </span>
          </a>
          <ul id='app_dr' className='collapse collapse-level-1'>
            <li>
              <a href='chats.html'>chats</a>
            </li>
            <li>
              <a href='calendar.html'>calendar</a>
            </li>
            <li>
              <a href='weather.html'>weather</a>
            </li>
            <li>
              <a
                className='active'
                href='#'
                data-toggle='collapse'
                data-target='#email_dr'
              >
                Email
                <span className='pull-right'>
                  <i className='fa fa-fw fa-angle-down'></i>
                </span>
              </a>
              <ul id='email_dr' className='collapse'>
                <li>
                  <a className='active' href='inbox.html'>
                    inbox
                  </a>
                </li>
                <li>
                  <a href='inbox-detail.html'>detail email</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='#' data-toggle='collapse' data-target='#contact_dr'>
                Contacts
                <span className='pull-right'>
                  <i className='fa fa-fw fa-angle-down'></i>
                </span>
              </a>
              <ul id='contact_dr' className='collapse'>
                <li>
                  <a href='contact-list.html'>list</a>
                </li>
                <li>
                  <a href='contact-card.html'>cards</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='file-manager.html'>File Manager</a>
            </li>
            <li>
              <a href='todo-tasklist.html'>To Do/Tasklist</a>
            </li>
          </ul>
        </li>
        <li>
          <a href='#' data-toggle='collapse' data-target='#ui_dr'>
            <i className='icon-vector mr-10'></i>UI Elements
            <span className='pull-right'>
              <i className='fa fa-fw fa-angle-down'></i>
            </span>
          </a>
          <ul id='ui_dr' className='collapse collapse-level-1'>
            <li>
              <a href='panels-wells.html'>Panels & Wells</a>
            </li>
            <li>
              <a href='modals.html'>Modals</a>
            </li>
            <li>
              <a href='sweetalert.html'>Sweet Alerts</a>
            </li>
            <li>
              <a href='notifications.html'>notifications</a>
            </li>
            <li>
              <a href='typography.html'>Typography</a>
            </li>
            <li>
              <a href='buttons.html'>Buttons</a>
            </li>
            <li>
              <a href='accordion-toggle.html'>Accordion / Toggles</a>
            </li>
            <li>
              <a href='tabs.html'>Tabs</a>
            </li>
            <li>
              <a href='progressbars.html'>Progress bars</a>
            </li>
            <li>
              <a href='skills-counter.html'>Skills & Counters</a>
            </li>
            <li>
              <a href='pricing.html'>Pricing Tables</a>
            </li>
            <li>
              <a href='nestable.html'>Nestables</a>
            </li>
            <li>
              <a href='dorpdown.html'>Dropdowns</a>
            </li>
            <li>
              <a href='bootstrap-treeview.html'>Tree View</a>
            </li>
            <li>
              <a href='carousel.html'>Carousel</a>
            </li>
            <li>
              <a href='range-slider.html'>Range Slider</a>
            </li>
            <li>
              <a href='grid-styles.html'>Grid</a>
            </li>
            <li>
              <a href='bootstrap-ui.html'>Bootstrap UI</a>
            </li>
          </ul>
        </li>
        <li>
          <a href='#' data-toggle='collapse' data-target='#form_dr'>
            <i className=' icon-flag mr-10'></i>Forms
            <span className='pull-right'>
              <i className='fa fa-fw fa-angle-down'></i>
            </span>
          </a>
          <ul id='form_dr' className='collapse collapse-level-1'>
            <li>
              <a href='form-element.html'>Basic Forms</a>
            </li>
            <li>
              <a href='form-layout.html'>form Layout</a>
            </li>
            <li>
              <a href='form-advanced.html'>Form Advanced</a>
            </li>
            <li>
              <a href='form-mask.html'>Form Mask</a>
            </li>
            <li>
              <a href='form-picker.html'>Form Picker</a>
            </li>
            <li>
              <a href='form-validation.html'>form Validation</a>
            </li>
            <li>
              <a href='form-wizard.html'>Form Wizard</a>
            </li>
            <li>
              <a href='form-x-editable.html'>X-Editable</a>
            </li>
            <li>
              <a href='cropperjs.html'>Cropperjs</a>
            </li>
            <li>
              <a href='form-file-upload.html'>File Upload</a>
            </li>
            <li>
              <a href='dropzone.html'>Dropzone</a>
            </li>
            <li>
              <a href='bootstrap-wysihtml5.html'>Bootstrap Wysihtml5</a>
            </li>
            <li>
              <a href='tinymce-wysihtml5.html'>Tinymce Wysihtml5</a>
            </li>
            <li>
              <a href='summernote-wysihtml5.html'>summernote</a>
            </li>
            <li>
              <a href='typeahead-js.html'>typeahead</a>
            </li>
          </ul>
        </li>
        <li>
          <a href='#' data-toggle='collapse' data-target='#chart_dr'>
            <i className='icon-graph mr-10'></i>Charts{' '}
            <span className='pull-right'>
              <span className='label label-primary mr-10'>7</span>
              <i className='fa fa-fw fa-angle-down'></i>
            </span>
          </a>
          <ul id='chart_dr' className='collapse collapse-level-1'>
            <li>
              <a href='flot-chart.html'>Flot Chart</a>
            </li>
            <li>
              <a href='morris-chart.html'>Morris Chart</a>
            </li>
            <li>
              <a href='chart.js.html'>chartjs</a>
            </li>
            <li>
              <a href='chartist.html'>chartist</a>
            </li>
            <li>
              <a href='easy-pie-chart.html'>Easy Pie Chart</a>
            </li>
            <li>
              <a href='sparkline.html'>Sparkline</a>
            </li>
            <li>
              <a href='peity-chart.html'>Peity Chart</a>
            </li>
          </ul>
        </li>
        <li>
          <a href='#' data-toggle='collapse' data-target='#table_dr'>
            <i className='icon-list mr-10'></i>Tables
            <span className='pull-right'>
              <i className='fa fa-fw fa-angle-down'></i>
            </span>
          </a>
          <ul id='table_dr' className='collapse collapse-level-1'>
            <li>
              <a href='basic-table.html'>Basic Table</a>
            </li>
            <li>
              <a href='bootstrap-table.html'>Bootstrap Table</a>
            </li>
            <li>
              <a href='data-table.html'>Data Table</a>
            </li>
            <li>
              <a href='export-table.html'>
                <span className='pull-right'>
                  <span className='label label-warning'>New</span>
                </span>
                Export Table
              </a>
            </li>
            <li>
              <a href='responsive-data-table.html'>
                <span className='pull-right'>
                  <span className='label label-warning'>New</span>
                </span>
                RSPV DataTable
              </a>
            </li>
            <li>
              <a href='responsive-table.html'>Responsive Table</a>
            </li>
            <li>
              <a href='editable-table.html'>Editable Table</a>
            </li>
            <li>
              <a href='foo-table.html'>Foo Table</a>
            </li>
            <li>
              <a href='jsgrid-table.html'>Jsgrid Table</a>
            </li>
          </ul>
        </li>
        <li>
          <a href='widgets.html'>
            <i className='icon-drawar mr-10'></i>widgets
          </a>
        </li>
        <li>
          <a href='#' data-toggle='collapse' data-target='#icon_dr'>
            <i className='icon-options mr-10'></i>Icons
            <span className='pull-right'>
              <i className='fa fa-fw fa-angle-down'></i>
            </span>
          </a>
          <ul id='icon_dr' className='collapse collapse-level-1'>
            <li>
              <a href='fontawesome.html'>Fontawesome</a>
            </li>
            <li>
              <a href='themify.html'>Themify</a>
            </li>
            <li>
              <a href='linea-icon.html'>Linea</a>
            </li>
            <li>
              <a href='simple-line-icons.html'>Simple Line</a>
            </li>
            <li>
              <a href='pe-icon-7.html'>Pe-icon-7</a>
            </li>
            <li>
              <a href='glyphicons.html'>Glyphicons</a>
            </li>
          </ul>
        </li>
        <li>
          <a href='#' data-toggle='collapse' data-target='#pages_dr'>
            <i className='icon-layers mr-10'></i>Special Pages
            <span className='pull-right'>
              <span className='label label-danger mr-10'>12</span>
              <i className='fa fa-fw fa-angle-down'></i>
            </span>
          </a>
          <ul id='pages_dr' className='collapse collapse-level-1'>
            <li>
              <a href='blank.html'>Blank Page</a>
            </li>
            <li>
              <a href='login.html'>Login Page</a>
            </li>
            <li>
              <a href='signup.html'>Register</a>
            </li>
            <li>
              <a href='forgot-password.html'>Recover Password</a>
            </li>
            <li>
              <a href='reset-password.html'>reset Password</a>
            </li>
            <li>
              <a href='locked.html'>Lock Screen</a>
            </li>
            <li>
              <a href='#' data-toggle='collapse' data-target='#invoice_dr'>
                Invoice
                <span className='pull-right'>
                  <i className='fa fa-fw fa-angle-down'></i>
                </span>
              </a>
              <ul id='invoice_dr' className='collapse'>
                <li>
                  <a href='invoice.html'>Invoice</a>
                </li>
                <li>
                  <a href='invoice-archive.html'>Invoice Archive</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='404.html'>Error 404</a>
            </li>
            <li>
              <a href='500.html'>Error 500</a>
            </li>
            <li>
              <a href='gallery.html'>Gallery</a>
            </li>
            <li>
              <a href='timeline.html'>Timeline</a>
            </li>
            <li>
              <a href='faq.html'>FAQ</a>
            </li>
          </ul>
        </li>
        <li>
          <a href='#' data-toggle='collapse' data-target='#maps_dr'>
            <i className='icon-map mr-10'></i>maps
            <span className='pull-right'>
              <i className='fa fa-fw fa-angle-down'></i>
            </span>
          </a>
          <ul id='maps_dr' className='collapse collapse-level-1'>
            <li>
              <a href='vector-map.html'>Vector Map</a>
            </li>
            <li>
              <a href='google-map.html'>Google Map</a>
            </li>
          </ul>
        </li>
        <li>
          <a href='documentation.html'>
            <i className='icon-doc mr-10'></i>documentation
          </a>
        </li>
        <li>
          <a href='#' data-toggle='collapse' data-target='#dropdown_dr_lv1'>
            <i className='icon-arrow-down-circle mr-10'></i>Dropdown leavel 1
            <span className='pull-right'>
              <i className='fa fa-fw fa-angle-down'></i>
            </span>
          </a>
          <ul id='dropdown_dr_lv1' className='collapse collapse-level-1'>
            <li>
              <a href='#'>Dropdown Item</a>
            </li>
            <li>
              <a href='#'>Dropdown Item</a>
            </li>
            <li>
              <a href='#' data-toggle='collapse' data-target='#dropdown_dr_lv2'>
                Dropdown leavel 2
                <span className='pull-right'>
                  <i className='fa fa-fw fa-angle-down'></i>
                </span>
              </a>
              <ul id='dropdown_dr_lv2' className='collapse collapse-level-2'>
                <li>
                  <a href='#'>Dropdown Item</a>
                </li>
                <li>
                  <a href='#'>Dropdown Item</a>
                </li>
                <li>
                  <a href='#'>Dropdown Item</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default LeftSideBar;
