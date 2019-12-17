 $(document).ready(function () {
     $.ajax({
         url: 'footer.html',
         success: function (data) {
             $('#footer').html(data);
         }
     });
     $.ajax({
         url: 'header.html',
         success: function (data) {
             $('#header').html(data);
         }
     });
 });
