import Vue from "vue";
import moment from "moment";

Vue.filter("date", function(value, formatString) {

  if (!value)
    return "";

  if (formatString) {
    return moment(value).format(formatString);
  }

  return moment(value).format("DD/MM/YYYY");

});
