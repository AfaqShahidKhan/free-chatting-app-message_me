// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//= require action_cable
//= require_self
//= require_tree .

import "@hotwired/turbo-rails";
import "controllers";
$(document).on("turbolinks:load", () => $(".ui.dropdown").dropdown());
