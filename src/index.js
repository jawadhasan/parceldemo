// import another component
import main from './main';

//jquery and jquery-ui
import "./import-jquery.js";
import "jquery-ui-dist/jquery-ui.js";

//bootstrap and fontawsome
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";


// Import all plugins
import * as bootstrap from 'bootstrap';

// Or import only needed plugins
//import { Tooltip as Tooltip, Toast as Toast, Popover as Popover } from 'bootstrap';




main();

$(function() {
    $("#datepicker").datepicker();

    $('[data-toggle="popover"]').popover();
  });