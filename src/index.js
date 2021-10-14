// import another component
import main from './main';

//jquery and jquery-ui
import "./import-jquery.js";
import "jquery-ui-dist/jquery-ui.js";



main();

$(function() {
    $("#datepicker").datepicker();
  });