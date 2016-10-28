"use strict";$.fn.formObject=function(){var i={};return $.each($(this).serializeArray(),function(n,t){i[t.name]=t.value||""}),i};
